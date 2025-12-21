/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signIn(username: string, password: string): Promise<any> {
        if (!username || username.trim() === '') {
            throw new BadRequestException('Username обязателен');
        }

        if (!password) {
            throw new BadRequestException('Пароль обязателен');
        }

        const user = await this.userService.findOneByUsername(username);

        if (!user) {
            throw new UnauthorizedException('Пользователь не найден');
        }

        console.log(user.Name);

        const isPasswordValid = await bcrypt.compare(password, user.Password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Неверный пароль');
        }

        const { Password, ...result } = user;
        return result;
    }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
}
