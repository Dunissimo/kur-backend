import { Injectable } from '@nestjs/common';
import { CreatePodshipDto } from './dto/create-podship.dto';
import { UpdatePodshipDto } from './dto/update-podship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Podship } from './entities/podship.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PodshipService {
    constructor(
        @InjectRepository(Podship)
        private readonly podshipRepository: Repository<Podship>,
    ) {}

    create(createProcessDto: CreatePodshipDto) {
        const process = this.podshipRepository.create(createProcessDto);

        return this.podshipRepository.save(process);
    }

    findAll() {
        return this.podshipRepository.find({
            relations: ['WorkShopID'],
        });
    }

    findOne(id: number) {
        return this.podshipRepository.findOne({ where: { idPodship: id } });
    }

    async update(id: number, updatePodshipDto: UpdatePodshipDto) {
        await this.podshipRepository.update(id, updatePodshipDto);

        return this.podshipRepository.findOne({ where: { idPodship: id } });
    }

    remove(id: number) {
        return this.podshipRepository.delete(id);
    }
}
