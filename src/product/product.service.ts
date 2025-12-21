import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    create(createProductDto: CreateProductDto) {
        const product = this.productRepository.create(createProductDto);

        return this.productRepository.save(product);
    }

    findAll() {
        return this.productRepository.find();
    }

    findOne(id: number) {
        return this.productRepository.findOne({ where: { idProduct: id } });
    }
    async findOneWithStages(id: number) {
        return this.productRepository.findOne({
            where: { idProduct: id },
            relations: [
                'productStages',
                'productStages.stage',
                'productStages.stage.Workshop',
                'productStages.duration',
            ],
            order: {
                productStages: {
                    sort: 'ASC',
                },
            },
        });
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        await this.productRepository.update(id, updateProductDto);

        return this.productRepository.findOne({ where: { idProduct: id } });
    }

    remove(id: number) {
        return this.productRepository.delete(id);
    }
}
