import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Duration } from './entities/duration.entity';
import { DurationController } from './duration.controller';
import { DurationService } from './duration.service';

@Module({
    imports: [TypeOrmModule.forFeature([Duration])],
    controllers: [DurationController],
    providers: [DurationService],
})
export class DurationModule {}
