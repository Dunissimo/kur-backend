import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateZakazDto {
    @IsInt()
    productId: number;

    @IsInt()
    zakazQuantity: number;

    @IsString()
    For: string;

    @IsString()
    Comment: string;

    @IsOptional()
    @IsDateString()
    deadline?: string;
}
