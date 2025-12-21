import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    Name: string;

    @IsString()
    Login: string;

    @IsString()
    Password: string;

    @IsInt()
    WorkshopID: number;

    @IsInt()
    UserRole: number;
}
