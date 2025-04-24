import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ZakazService } from './zakaz.service';
import { CreateZakazDto } from './dto/create-zakaz.dto';
import { UpdateZakazDto } from './dto/update-zakaz.dto';

@Controller('zakaz')
export class ZakazController {
    constructor(private readonly zakazService: ZakazService) {}

    @Post()
    create(@Body() createZakazDto: CreateZakazDto) {
        return this.zakazService.create(createZakazDto);
    }

    @Get()
    findAll() {
        return this.zakazService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.zakazService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateZakazDto: UpdateZakazDto) {
        return this.zakazService.update(+id, updateZakazDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.zakazService.remove(+id);
    }
}
