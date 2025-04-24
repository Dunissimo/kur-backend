import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';
import { Workshop } from './entities/workshop.entity';
import { Repository } from 'typeorm';
export declare class WorkshopService {
    private readonly workshopRepository;
    constructor(workshopRepository: Repository<Workshop>);
    create(createWorkshopDto: CreateWorkshopDto): Promise<Workshop>;
    findAll(): Promise<Workshop[]>;
    findOne(id: number): Promise<Workshop | null>;
    update(id: number, updateWorkshopDto: UpdateWorkshopDto): Promise<Workshop | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
