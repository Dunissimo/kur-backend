import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StageService {
    constructor(
        @InjectRepository(Stage)
        private readonly stageRepository: Repository<Stage>,
    ) {}

    create(createStageDto: CreateStageDto) {
        const stage = this.stageRepository.create(createStageDto);

        return this.stageRepository.save(stage);
    }

    findAll() {
        return this.stageRepository.find();
    }

    findOne(id: number) {
        return this.stageRepository.findOne({ where: { idStages: id } });
    }

    async update(id: number, updateStageDto: UpdateStageDto) {
        await this.stageRepository.update(id, updateStageDto);

        return this.stageRepository.findOne({ where: { idStages: id } });
    }

    remove(id: number) {
        return this.stageRepository.delete(id);
    }
}
