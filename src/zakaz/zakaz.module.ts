import { Module } from '@nestjs/common';
import { ZakazService } from './zakaz.service';
import { ZakazController } from './zakaz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zakaz } from './entities/zakaz.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Zakaz])],
    controllers: [ZakazController],
    providers: [ZakazService],
})
export class ZakazModule {}
