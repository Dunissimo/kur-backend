import { Module } from '@nestjs/common';
import { ZakazService } from './zakaz.service';
import { ZakazController } from './zakaz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zakaz } from './entities/zakaz.entity';
import { Workshop } from '../workshop/entities/workshop.entity';
import { Status } from '../status/entities/status.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Zakaz, Workshop, Status])],
    controllers: [ZakazController],
    providers: [ZakazService],
})
export class ZakazModule {}
