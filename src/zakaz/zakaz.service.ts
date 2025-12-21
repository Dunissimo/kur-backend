import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Zakaz } from './entities/zakaz.entity';
import { Repository } from 'typeorm';
import { CreateZakazDto } from './dto/create-zakaz.dto';
import { UpdateZakazDto } from './dto/update-zakaz.dto';

@Injectable()
export class ZakazService {
    constructor(
        @InjectRepository(Zakaz)
        private readonly zakazRepository: Repository<Zakaz>,
    ) {}

    create(createZakazDto: CreateZakazDto) {
        const zakaz = this.zakazRepository.create(createZakazDto);

        return this.zakazRepository.save(zakaz);
    }

    findAll() {
        return this.zakazRepository.find({
            relations: ['product', 'stage', 'status'],
        });
    }

    async findOne(id: number) {
        const zakaz = await this.zakazRepository.findOne({
            where: { idZakaz: id },
            relations: ['product', 'stage', 'status'],
        });

        if (!zakaz) throw new NotFoundException('Заказ не найден');
        return zakaz;
    }

    async update(id: number, updateZakazDto: UpdateZakazDto) {
        await this.zakazRepository.update(id, updateZakazDto);

        return this.zakazRepository.findOne({ where: { idZakaz: id } });
    }

    async remove(id: number) {
        const result = await this.zakazRepository.delete({ idZakaz: id });
        if (!result.affected) throw new NotFoundException('Заказ не найден');
        return result;
    }

    async cancelZakaz(id: number) {
        const zakaz = await this.findOne(id);

        if (zakaz.isCancelled) {
            throw new BadRequestException('Заказ уже отменён');
        }
        if (zakaz.isFinished) {
            throw new BadRequestException('Нельзя отменить завершённый заказ');
        }

        await this.zakazRepository.update(
            { idZakaz: id },
            { isCancelled: true },
        );

        return this.findOne(id);
    }

    async completeZakaz(id: number) {
        const zakaz = await this.findOne(id);

        if (zakaz.isCancelled) {
            throw new BadRequestException('Нельзя завершить отменённый заказ');
        }
        if (zakaz.isFinished) {
            throw new BadRequestException('Заказ уже завершён');
        }

        await this.zakazRepository.update(
            { idZakaz: id },
            { isFinished: true, zakazCompleted: new Date() },
        );

        return this.findOne(id);
    }

    async updateZakazStage(id: number, stageId: number) {
        await this.ensureEditable(id);

        if (!stageId || stageId <= 0) {
            throw new BadRequestException(
                'stageId должен быть положительным числом',
            );
        }

        await this.zakazRepository.update({ idZakaz: id }, { stageId });

        return this.findOne(id);
    }

    async updateZakazStatus(id: number, statusId: number) {
        await this.ensureEditable(id);

        if (!statusId || statusId <= 0) {
            throw new BadRequestException(
                'statusId должен быть положительным числом',
            );
        }

        await this.zakazRepository.update({ idZakaz: id }, { statusId });

        return this.findOne(id);
    }

    private async ensureEditable(id: number) {
        const zakaz = await this.findOne(id);

        if (zakaz.isCancelled) {
            throw new BadRequestException('Нельзя изменить отменённый заказ');
        }
        if (zakaz.isFinished) {
            throw new BadRequestException('Нельзя изменить завершённый заказ');
        }

        return zakaz;
    }
}
