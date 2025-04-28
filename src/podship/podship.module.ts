import { Module } from '@nestjs/common';
import { PodshipService } from './podship.service';
import { PodshipController } from './podship.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Podship } from './entities/podship.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Podship])],
    controllers: [PodshipController],
    providers: [PodshipService],
})
export class PodshipModule {}
