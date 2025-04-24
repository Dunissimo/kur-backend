import { Injectable } from '@nestjs/common';
import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';
import { Process } from './entities/process.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProcessService {
    constructor(
        @InjectRepository(Process)
        private readonly processRepository: Repository<Process>,
    ) {}

    create(createProcessDto: CreateProcessDto) {
        const process = this.processRepository.create(createProcessDto);

        return this.processRepository.save(process);
    }

    findAll() {
        return this.processRepository.find();
    }

    findOne(id: number) {
        return this.processRepository.findOne({ where: { idProcess: id } });
    }

    async update(id: number, updateProcessDto: UpdateProcessDto) {
        await this.processRepository.update(id, updateProcessDto);

        return this.processRepository.findOne({ where: { idProcess: id } });
    }

    remove(id: number) {
        return this.processRepository.delete(id);
    }
}
