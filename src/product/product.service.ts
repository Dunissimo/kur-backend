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

    create(createProcessDto: CreateProductDto) {
        const process = this.productRepository.create(createProcessDto);

        return this.productRepository.save(process);
    }

    findAll() {
        return this.productRepository.find();
    }

    findOne(id: number) {
        return this.productRepository.findOne({ where: { idProduct: id } });
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        await this.productRepository.update(id, updateProductDto);

        return this.productRepository.findOne({ where: { idProduct: id } });
    }

    remove(id: number) {
        return this.productRepository.delete(id);
    }
}
