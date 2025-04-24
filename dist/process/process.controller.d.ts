import { ProcessService } from './process.service';
import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';
export declare class ProcessController {
    private readonly processService;
    constructor(processService: ProcessService);
    create(createProcessDto: CreateProcessDto): Promise<import("./entities/process.entity").Process>;
    findAll(): Promise<import("./entities/process.entity").Process[]>;
    findOne(id: string): Promise<import("./entities/process.entity").Process | null>;
    update(id: string, updateProcessDto: UpdateProcessDto): Promise<import("./entities/process.entity").Process | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
