import { CreateZakazDto } from './dto/create-zakaz.dto';
import { UpdateZakazDto } from './dto/update-zakaz.dto';
import { Zakaz } from './entities/zakaz.entity';
import { Repository } from 'typeorm';
export declare class ZakazService {
    private readonly zakazRepository;
    constructor(zakazRepository: Repository<Zakaz>);
    create(createZakazDto: CreateZakazDto): Promise<Zakaz>;
    findAll(): Promise<Zakaz[]>;
    findOne(id: number): Promise<Zakaz | null>;
    update(id: number, updateZakazDto: UpdateZakazDto): Promise<Zakaz | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
