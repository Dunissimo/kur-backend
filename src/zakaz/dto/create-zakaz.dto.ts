import { IsDate, IsInt, IsString } from 'class-validator';

export class CreateZakazDto {
    @IsInt()
    productId: number;

    @IsInt()
    ZakazQuantity: number;

    @IsString()
    For: string;

    @IsString()
    Comment: string;

    @IsDate()
    zakazCreated: Date;

    @IsDate()
    zakazCompleted: Date;
}
