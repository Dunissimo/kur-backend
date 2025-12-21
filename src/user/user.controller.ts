import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('all')
    async getAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    async getUser(@Param('id') id: string) {
        const userId = Number(id);

        if (isNaN(userId)) {
            throw new BadRequestException('id должен быть числом');
        }

        return this.userService.findOne(userId);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        const userId = Number(id);

        if (isNaN(userId)) {
            throw new BadRequestException('id должен быть числом');
        }

        return this.userService.update(userId, updateUserDto);
    }

    @Delete(':id')
    async removeUser(@Param('id') id: string) {
        const userId = Number(id);

        if (isNaN(userId)) {
            throw new BadRequestException('id должен быть числом');
        }

        return this.userService.remove(userId);
    }
}
