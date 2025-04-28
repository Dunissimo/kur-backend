import { IsInt, IsString } from 'class-validator';

export class CreatePodshipDto {
    @IsString()
    NamePodship: string;

    @IsInt()
    WorkShopID: number;
}
