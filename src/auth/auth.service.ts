/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserRole } from '../roles/roles.enum';

const MAX_FAILED_ATTEMPTS = 5;

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
    ) {}

    async signIn(username: string, password: string) {
        if (!username || username.trim() === '') {
            throw new BadRequestException('Username обязателен');
        }
        if (!password) {
            throw new BadRequestException('Пароль обязателен');
        }

        const user = await this.userService.findOneByUsername(username);

        if (!user) {
            throw new UnauthorizedException('Неверный логин или пароль');
        }

        if (user.isBlocked) {
            throw new UnauthorizedException(
                'Учётная запись заблокирована. Обратитесь к администратору.',
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.Password);

        if (!isPasswordValid) {
            const attempts = user.failedLoginAttempts + 1;
            const shouldBlock = attempts >= MAX_FAILED_ATTEMPTS;

            await this.userService.update(user.idUser, {
                failedLoginAttempts: attempts,
                isBlocked: shouldBlock,
            });

            if (shouldBlock) {
                throw new UnauthorizedException(
                    'Учётная запись заблокирована после 5 неудачных попыток входа. Обратитесь к администратору.',
                );
            }

            throw new UnauthorizedException(
                `Неверный логин или пароль. Осталось попыток: ${MAX_FAILED_ATTEMPTS - attempts}`,
            );
        }

        // Успешный вход — сбрасываем счётчик
        if (user.failedLoginAttempts > 0) {
            await this.userService.update(user.idUser, {
                failedLoginAttempts: 0,
            });
        }

        return {
            user: {
                idUser: user.idUser,
                Name: user.Name,
                Login: user.Login,
                Role: user.Role,
                Email: user.email,
            },
        };
    }

    async register(dto: CreateUserDto) {
        // Новые саморегистрации получают роль "Менеджер" по умолчанию
        const role = dto.Role ?? UserRole.MANAGER;
        const user = await this.userService.create({
            ...dto,
            Role: role,
        });

        return {
            user: {
                idUser: user.idUser,
                Name: user.Name,
                Login: user.Login,
                UserRole: user.Role,
            },
        };
    }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
}
