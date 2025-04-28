import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Status } from '../../status/entities/status.entity';
import { Zakaz } from '../../zakaz/entities/zakaz.entity';
import { Stage } from '../../stage/entities/stage.entity';
import { Workshop } from '../../workshop/entities/workshop.entity';

@Entity('Process')
export class Process {
    @PrimaryGeneratedColumn()
    idProcess: number;

    @ManyToOne(() => Status, (status) => status.idStatus)
    @JoinColumn({ name: 'StatusID' })
    StatusID: number;

    @ManyToOne(() => Zakaz, (zakaz) => zakaz.idZakaz)
    @JoinColumn({ name: 'ZakazID' })
    ZakazID: number;

    @ManyToOne(() => Stage, (stage) => stage.idStages)
    @JoinColumn({ name: 'StagesID' })
    StagesID: number;

    @ManyToOne(() => Workshop, (workshop) => workshop.idWorkshop)
    @JoinColumn({ name: 'WorkShopID' })
    WorkShopID: number;

    @Column({ type: 'date' })
    StartDate: Date;

    @Column({ type: 'date' })
    FinishDate: Date;
}
