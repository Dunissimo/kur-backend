/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsDate, IsInt, IsString } from 'class-validator';

export class CreateZakazDto {
    @IsDate()
    Kogda: Date;

    @IsInt()
    Zakazcol: number;

    @IsString()
    For: string;

    @IsString()
    Comment: string;
}
