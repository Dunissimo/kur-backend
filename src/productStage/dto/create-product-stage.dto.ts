import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateProductStageDto {
    @IsInt()
    @IsNotEmpty()
    productId: number;

    @IsInt()
    @IsNotEmpty()
    stageId: number;

    @IsInt()
    @IsNotEmpty()
    sort: number;

    @IsInt()
    @IsNotEmpty()
    durationId: number;

    @IsInt()
    @IsNotEmpty()
    durationValue: number;
}
