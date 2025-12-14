import { Injectable } from '@nestjs/common';
import { CreateProductStageDto } from './dto/create-product-stage.dto';
import { UpdateProductStageDto } from './dto/update-product-stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductStage } from './entity/productStage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductStageService {
    constructor(
        @InjectRepository(ProductStage)
        private readonly productStageRepository: Repository<ProductStage>,
    ) {}

    create(createProductStageDto: CreateProductStageDto) {
        const productStage = this.productStageRepository.create(
            createProductStageDto,
        );

        return this.productStageRepository.save(productStage);
    }

    findAll() {
        return this.productStageRepository.find({
            relations: ['product', 'stage', 'duration'],
        });
    }

    findOne(id: number) {
        return this.productStageRepository.findOne({
            where: { idProductStages: id },
            relations: ['product', 'stage', 'duration'],
        });
    }

    async update(id: number, updateProductStageDto: UpdateProductStageDto) {
        await this.productStageRepository.update(id, updateProductStageDto);

        return this.productStageRepository.findOne({
            where: { idProductStages: id },
            relations: ['product', 'stage', 'duration'],
        });
    }

    remove(id: number) {
        return this.productStageRepository.delete(id);
    }
}
