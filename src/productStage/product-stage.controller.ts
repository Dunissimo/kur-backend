import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ProductStageService } from './product-stage.service';
import { CreateProductStageDto } from './dto/create-product-stage.dto';
import { UpdateProductStageDto } from './dto/update-product-stage.dto';

@Controller('product-stage')
export class ProductStageController {
    constructor(private readonly productStageService: ProductStageService) {}

    @Post()
    create(@Body() createProductStageDto: CreateProductStageDto) {
        return this.productStageService.create(createProductStageDto);
    }

    @Get()
    findAll() {
        return this.productStageService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productStageService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateProductStageDto: UpdateProductStageDto,
    ) {
        return this.productStageService.update(+id, updateProductStageDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productStageService.remove(+id);
    }
}
