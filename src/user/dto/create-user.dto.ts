import { IsInt, IsOptional, IsString, Min, Max, IsBoolean, IsEmail } from 'class-validator';
import { UserRole } from '../../roles/roles.enum';

export class CreateUserDto {
    @IsString()
    Name!: string;

    @IsString()
    Login!: string;

    @IsString()
    Password!: string;

    @IsString()
    Role: string;
    
    @IsBoolean()
    @IsOptional()
    active?: boolean;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsInt()
    failedLoginAttempts?: number;

    @IsOptional()
    @IsBoolean()
    isBlocked?: boolean;
}
