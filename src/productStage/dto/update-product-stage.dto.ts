import { PartialType } from '@nestjs/mapped-types';
import { CreateProductStageDto } from './create-product-stage.dto';

export class UpdateProductStageDto extends PartialType(CreateProductStageDto) {}
