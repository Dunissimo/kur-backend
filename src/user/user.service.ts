import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
        const existingUser = await this.userRepository.findOne({
            where: { Name: userData.Name },
        });

        if (existingUser) {
            throw new BadRequestException(
                'Пользователь с таким именем уже существует',
            );
        }

        const hashedPassword = await bcrypt.hash(userData.Password, 10);

        return this.userRepository.save({
            Name: userData.Name,
            Password: hashedPassword,
            UserRole: Number(userData.UserRole),
            WorkshopID: Number(userData.WorkshopID),
            Login: userData.Login,
        });
    }

    async update(id: number, userData: UpdateUserDto) {
        const user = await this.findOne(id);

        if (!user) {
            throw new BadRequestException('Пользователь не найден');
        }

        if (userData.Password) {
            userData.Password = await bcrypt.hash(userData.Password, 10);
        }

        return this.userRepository.save({
            ...user,
            ...userData,
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
