import { WorkshopService } from './workshop.service';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';
export declare class WorkshopController {
    private readonly workshopService;
    constructor(workshopService: WorkshopService);
    create(createWorkshopDto: CreateWorkshopDto): Promise<import("./entities/workshop.entity").Workshop>;
    findAll(): Promise<import("./entities/workshop.entity").Workshop[]>;
    findOne(id: string): Promise<import("./entities/workshop.entity").Workshop | null>;
    update(id: string, updateWorkshopDto: UpdateWorkshopDto): Promise<import("./entities/workshop.entity").Workshop | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
