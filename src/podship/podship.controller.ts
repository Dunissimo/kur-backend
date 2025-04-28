import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { PodshipService } from './podship.service';
import { CreatePodshipDto } from './dto/create-podship.dto';
import { UpdatePodshipDto } from './dto/update-podship.dto';

@Controller('podship')
export class PodshipController {
    constructor(private readonly podshipService: PodshipService) {}

    @Post()
    create(@Body() createPodshipDto: CreatePodshipDto) {
        return this.podshipService.create(createPodshipDto);
    }

    @Get()
    findAll() {
        return this.podshipService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.podshipService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updatePodshipDto: UpdatePodshipDto,
    ) {
        return this.podshipService.update(+id, updatePodshipDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.podshipService.remove(+id);
    }
}
