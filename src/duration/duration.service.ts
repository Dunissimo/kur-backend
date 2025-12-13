import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Duration } from './entities/duration.entity';

@Injectable()
export class DurationService {
    constructor(
        @InjectRepository(Duration)
        private readonly durationRepository: Repository<Duration>,
    ) {}

    findAll() {
        return this.durationRepository.find();
    }

    findOne(id: number) {
        return this.durationRepository.findOne({ where: { idDuration: id } });
    }

    remove(id: number) {
        return this.durationRepository.delete(id);
    }
}
