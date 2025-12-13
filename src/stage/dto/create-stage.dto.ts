import { IsInt, IsString } from 'class-validator';

export class CreateStageDto {
    @IsString()
    NameStages: string;

    @IsString()
    DescriptionStages: string;

    @IsInt()
    WorkshopId: number;
}
