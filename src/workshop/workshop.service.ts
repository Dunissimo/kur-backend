import { Injectable } from '@nestjs/common';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workshop } from './entities/workshop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopService {
    constructor(
        @InjectRepository(Workshop)
        private readonly workshopRepository: Repository<Workshop>,
    ) {}

    create(createWorkshopDto: CreateWorkshopDto) {
        const workshop = this.workshopRepository.create(createWorkshopDto);

        return this.workshopRepository.save(workshop);
    }

    findAll() {
        return this.workshopRepository.find();
    }

    findOne(id: number) {
        return this.workshopRepository.findOne({ where: { idWorkshop: id } });
    }

    async update(id: number, updateWorkshopDto: UpdateWorkshopDto) {
        await this.workshopRepository.update(id, updateWorkshopDto);

        return this.workshopRepository.findOne({ where: { idWorkshop: id } });
    }

    remove(id: number) {
        return this.workshopRepository.delete(id);
    }
}
