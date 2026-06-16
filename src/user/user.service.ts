import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from '../roles/roles.enum';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    findOne(id: number) {
        return this.userRepository.findOne({
            where: { idUser: id },
        });
    }

    findAll() {
        return this.userRepository.find();
    }

    async create(userData: CreateUserDto) {
        const existingByName = await this.userRepository.findOne({
            where: { Name: userData.Name },
        });
        if (existingByName) {
            throw new BadRequestException(
                'Пользователь с таким именем уже существует',
            );
        }

        const existingByLogin = await this.userRepository.findOne({
            where: { Login: userData.Login },
        });
        if (existingByLogin) {
            throw new BadRequestException(
                'Пользователь с таким логином уже существует',
            );
        }

        const hashedPassword = await bcrypt.hash(userData.Password, 10);

        const saved = await this.userRepository.save({
            Name: userData.Name,
            Login: userData.Login,
            Password: hashedPassword,
            Role: String(userData.Role ?? UserRole.MANAGER),
            active: userData.active,
            email: userData.email,
            phone: userData.phone,
        });

        // Возвращаем без пароля
        const { Password, ...result } = saved;
        return result;
    }

    async update(id: number, userData: UpdateUserDto) {
        const user = await this.findOne(id);

        if (!user) {
            throw new BadRequestException('Пользователь не найден');
        }

        const dataToSave: Partial<User> = { ...userData };

        if (userData.Password) {
            dataToSave.Password = await bcrypt.hash(userData.Password, 10);
        }

        return this.userRepository.save({
            ...user,
            ...dataToSave,
        });
    }

    async remove(id: number) {
        const user = await this.findOne(id);

        if (!user) {
            throw new BadRequestException('Пользователь не найден');
        }

        return this.userRepository.delete(id);
    }

    findOneByUsername(username: string) {
        return this.userRepository.findOne({
            where: { Login: username },
        });
    }
}
