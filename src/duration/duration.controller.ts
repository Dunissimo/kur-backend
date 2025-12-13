import { Controller, Get, Param, Delete } from '@nestjs/common';
import { DurationService } from './duration.service';

@Controller('duration')
export class DurationController {
    constructor(private readonly durationService: DurationService) {}

    @Get()
    findAll() {
        return this.durationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.durationService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.durationService.remove(+id);
    }
}
