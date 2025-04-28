import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Workshop } from '../../workshop/entities/workshop.entity';

@Entity('Podship')
export class Podship {
    @PrimaryGeneratedColumn()
    idPodship: number;

    @Column({ type: 'varchar' })
    NamePodship: string;

    @ManyToOne(() => Workshop, (workshop) => workshop.idWorkshop)
    @JoinColumn({ name: 'WorkShopID' })
    WorkShopID: number;
}
