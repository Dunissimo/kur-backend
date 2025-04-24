import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
    constructor(
        @InjectRepository(Status)
        private readonly statusRepository: Repository<Status>,
    ) {}

    create(createStatusDto: CreateStatusDto) {
        const status = this.statusRepository.create(createStatusDto);

        return this.statusRepository.save(status);
    }

    findAll() {
        return this.statusRepository.find();
    }

    findOne(id: number) {
        return this.statusRepository.findOne({ where: { idStatus: id } });
    }

    async update(id: number, updateStatusDto: UpdateStatusDto) {
        await this.statusRepository.update(id, updateStatusDto);

        return this.statusRepository.findOne({ where: { idStatus: id } });
    }

    remove(id: number) {
        return this.statusRepository.delete(id);
    }
}
