import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { Stage } from './entities/stage.entity';
import { Repository } from 'typeorm';
export declare class StageService {
    private readonly stageRepository;
    constructor(stageRepository: Repository<Stage>);
    create(createStageDto: CreateStageDto): Promise<Stage>;
    findAll(): Promise<Stage[]>;
    findOne(id: number): Promise<Stage | null>;
    update(id: number, updateStageDto: UpdateStageDto): Promise<Stage | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
