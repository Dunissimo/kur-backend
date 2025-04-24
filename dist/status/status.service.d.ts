import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';
export declare class StatusService {
    private readonly statusRepository;
    constructor(statusRepository: Repository<Status>);
    create(createStatusDto: CreateStatusDto): Promise<Status>;
    findAll(): Promise<Status[]>;
    findOne(id: number): Promise<Status | null>;
    update(id: number, updateStatusDto: UpdateStatusDto): Promise<Status | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
