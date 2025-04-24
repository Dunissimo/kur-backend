import { StageService } from './stage.service';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
export declare class StageController {
    private readonly stageService;
    constructor(stageService: StageService);
    create(createStageDto: CreateStageDto): Promise<import("./entities/stage.entity").Stage>;
    findAll(): Promise<import("./entities/stage.entity").Stage[]>;
    findOne(id: string): Promise<import("./entities/stage.entity").Stage | null>;
    update(id: string, updateStageDto: UpdateStageDto): Promise<import("./entities/stage.entity").Stage | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
