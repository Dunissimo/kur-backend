import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductStageService } from './product-stage.service';
import { ProductStageController } from './product-stage.controller';
import { ProductStage } from './entity/productStage.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductStage])],
    controllers: [ProductStageController],
    providers: [ProductStageService],
})
export class ProductStageModule {}
