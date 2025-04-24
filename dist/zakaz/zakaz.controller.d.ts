import { ZakazService } from './zakaz.service';
import { CreateZakazDto } from './dto/create-zakaz.dto';
import { UpdateZakazDto } from './dto/update-zakaz.dto';
export declare class ZakazController {
    private readonly zakazService;
    constructor(zakazService: ZakazService);
    create(createZakazDto: CreateZakazDto): Promise<import("./entities/zakaz.entity").Zakaz>;
    findAll(): Promise<import("./entities/zakaz.entity").Zakaz[]>;
    findOne(id: string): Promise<import("./entities/zakaz.entity").Zakaz | null>;
    update(id: string, updateZakazDto: UpdateZakazDto): Promise<import("./entities/zakaz.entity").Zakaz | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
