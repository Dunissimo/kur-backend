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
import { Workshop } from '../workshop/entities/workshop.entity';
import { Status } from '../status/entities/status.entity';

@Injectable()
export class ZakazService {
    constructor(
        @InjectRepository(Zakaz)
        private readonly zakazRepository: Repository<Zakaz>,
        @InjectRepository(Workshop)
        private readonly workshopRepository: Repository<Workshop>,
        @InjectRepository(Status)
        private readonly statusRepository: Repository<Status>,
    ) {}

    create(createZakazDto: CreateZakazDto) {
        const zakaz = this.zakazRepository.create({
            ...createZakazDto,
            deadline: createZakazDto.deadline ? new Date(createZakazDto.deadline) : null,
        });

        return this.zakazRepository.save(zakaz);
    }

    findAll() {
        return this.zakazRepository.find({
            relations: ['workshop', 'stage', 'status'],
        });
    }

    async findOne(id: string) {
        const zakaz = await this.zakazRepository.findOne({
            where: { idZakaz: id },
            relations: ['workshop', 'stage', 'status'],
        });

        if (!zakaz) throw new NotFoundException('Заказ не найден');
        return zakaz;
    }

    async update(id: string, updateZakazDto: UpdateZakazDto) {
        const data = {
            ...updateZakazDto,
            ...(updateZakazDto.deadline && { deadline: new Date(updateZakazDto.deadline) }),
        };

        await this.zakazRepository.update(id, data);

        return this.zakazRepository.findOne({ where: { idZakaz: id } });
    }

    async remove(id: string) {
        const result = await this.zakazRepository.delete({ idZakaz: id });
        if (!result.affected) throw new NotFoundException('Заказ не найден');
        return result;
    }

    async cancelZakaz(id: string) {
        const zakaz = await this.findOne(id);

        const oldStatus = zakaz.statusId;
        await this.zakazRepository.update({ idZakaz: id }, { statusId: 6 });

        // adjust workshop load if needed
        await this.adjustWorkshopLoadOnStatusChange(zakaz, 6);

        return this.findOne(id);
    }

    async completeZakaz(id: string) {
        const zakaz = await this.findOne(id);

        await this.zakazRepository.update(
            { idZakaz: id },
            { statusId: 5, zakazCompleted: new Date() },
        );

        // adjust workshop load if needed
        await this.adjustWorkshopLoadOnStatusChange(zakaz, 5);

        return this.findOne(id);
    }

    async updateZakazStage(id: string, stageId: number) {
        await this.ensureEditable(id);

        if (!stageId || stageId <= 0) {
            throw new BadRequestException(
                'stageId должен быть положительным числом',
            );
        }

        await this.zakazRepository.update({ idZakaz: id }, { stageId });

        return this.findOne(id);
    }

    async updateZakazStatus(id: string, statusId: number) {
        await this.ensureEditable(id);

        if (!statusId || statusId <= 0) {
            throw new BadRequestException(
                'statusId должен быть положительным числом',
            );
        }

        const zakaz = await this.findOne(id);
        const oldStatus = zakaz.statusId;

        if (oldStatus === statusId) return zakaz;

        await this.zakazRepository.update({ idZakaz: id }, { statusId });

        await this.adjustWorkshopLoadOnStatusChange(zakaz, statusId);

        return this.findOne(id);
    }

    private async adjustWorkshopLoadOnStatusChange(
        zakaz: Zakaz,
        newStatusId: number,
    ) {
        // Decide terminal statuses by StatusCode to avoid relying on numeric ids
        const terminalStatusCodes = new Set(['DONE', 'CANCELLED']);

        const oldStatus = zakaz.statusId;
        const workshopId = zakaz.workshopId;
        const qty = Number(zakaz.zakazQuantity) || 1;

        if (!workshopId) return;

        const oldStatusEntity = await this.statusRepository.findOne({
            where: { idStatus: oldStatus },
        });
        const newStatusEntity = await this.statusRepository.findOne({
            where: { idStatus: newStatusId },
        });

        const wasTerminal = !!oldStatusEntity && terminalStatusCodes.has(oldStatusEntity.StatusCode);
        const nowTerminal = !!newStatusEntity && terminalStatusCodes.has(newStatusEntity.StatusCode);

        if (wasTerminal === nowTerminal) return;

        const workshop = await this.workshopRepository.findOne({ where: { idWorkshop: workshopId } });
        if (!workshop) return;

        if (!wasTerminal && nowTerminal) {
            workshop.CurrentLoadWS = Math.max(0, workshop.CurrentLoadWS - qty);
        } else if (wasTerminal && !nowTerminal) {
            workshop.CurrentLoadWS = workshop.CurrentLoadWS + qty;
        }

        await this.workshopRepository.save(workshop);
    }

    private async ensureEditable(id: string) {
        const zakaz = await this.findOne(id);

        return zakaz;
    }
}
