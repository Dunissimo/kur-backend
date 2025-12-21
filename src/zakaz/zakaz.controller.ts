import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Put,
    BadRequestException,
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

    @Put(':id/cancel')
    async cancel(@Param('id') id: string) {
        const zakazId = Number(id);
        if (isNaN(zakazId)) {
            throw new BadRequestException('id должен быть числом');
        }
        return this.zakazService.cancelZakaz(zakazId);
    }

    @Put(':id/complete')
    async complete(@Param('id') id: string) {
        const zakazId = Number(id);
        if (isNaN(zakazId)) {
            throw new BadRequestException('id должен быть числом');
        }
        return this.zakazService.completeZakaz(zakazId);
    }

    @Put(':id/stage/:stageId')
    async updateStage(
        @Param('id') id: string,
        @Param('stageId') stageId: string,
    ) {
        const zakazId = Number(id);
        const newStageId = Number(stageId);

        if (isNaN(zakazId) || isNaN(newStageId)) {
            throw new BadRequestException('id и stageId должны быть числами');
        }

        return this.zakazService.updateZakazStage(zakazId, newStageId);
    }

    @Put(':id/status/:statusId')
    async updateStatus(
        @Param('id') id: string,
        @Param('statusId') statusId: string,
    ) {
        const zakazId = Number(id);
        const newStatusId = Number(statusId);

        if (isNaN(zakazId) || isNaN(newStatusId)) {
            throw new BadRequestException('id и statusId должны быть числами');
        }

        return this.zakazService.updateZakazStatus(zakazId, newStatusId);
    }
}
