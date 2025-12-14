import { Injectable } from '@nestjs/common';
import { CreateZakazDto } from './dto/create-zakaz.dto';
import { UpdateZakazDto } from './dto/update-zakaz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Zakaz } from './entities/zakaz.entity';
import { Repository } from 'typeorm';

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
        return this.zakazRepository.find({ relations: ['product'] });
    }

    findOne(id: number) {
        return this.zakazRepository.findOne({
            where: { idZakaz: id },
            relations: ['product'],
        });
    }

    async update(id: number, updateZakazDto: UpdateZakazDto) {
        await this.zakazRepository.update(id, updateZakazDto);

        return this.zakazRepository.findOne({ where: { idZakaz: id } });
    }

    remove(id: number) {
        return this.zakazRepository.delete(id);
    }
}
