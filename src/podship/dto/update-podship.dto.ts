import { PartialType } from '@nestjs/mapped-types';
import { CreatePodshipDto } from './create-podship.dto';

export class UpdatePodshipDto extends PartialType(CreatePodshipDto) {}
