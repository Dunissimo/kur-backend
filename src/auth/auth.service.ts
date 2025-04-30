/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signIn(id: number, password: string): Promise<any> {
        const user = await this.userService.findOne(id);

        if (user.Password !== password) {
            throw new UnauthorizedException();
        }

        const { Password, ...result } = user;

        return result;
    }
}
