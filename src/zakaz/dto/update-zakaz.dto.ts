import { PartialType } from '@nestjs/mapped-types';
import { CreateZakazDto } from './create-zakaz.dto';

export class UpdateZakazDto extends PartialType(CreateZakazDto) {}
