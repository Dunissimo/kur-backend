/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsDate, IsInt } from 'class-validator';

export class CreateProcessDto {
    @IsInt()
    StatusID: number;

    @IsInt()
    ZakazID: number;

    @IsInt()
    StagesID: number;

    @IsInt()
    WorkShopID: number;

    @IsDate()
    StartDate: Date;

    @IsDate()
    FinishDate: Date;
}
