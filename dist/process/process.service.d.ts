import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';
import { Process } from './entities/process.entity';
import { Repository } from 'typeorm';
export declare class ProcessService {
    private readonly processRepository;
    constructor(processRepository: Repository<Process>);
    create(createProcessDto: CreateProcessDto): Promise<Process>;
    findAll(): Promise<Process[]>;
    findOne(id: number): Promise<Process | null>;
    update(id: number, updateProcessDto: UpdateProcessDto): Promise<Process | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
