import { IsInt, IsString } from 'class-validator';

export class CreateWorkshopDto {
    @IsString()
    NameWS: string;

    @IsInt()
    MaxLoadWS: number;

    @IsInt()
    CurrentLoadWS: number;
}
