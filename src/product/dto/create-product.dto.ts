import { IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    NameProduct: string;
}
