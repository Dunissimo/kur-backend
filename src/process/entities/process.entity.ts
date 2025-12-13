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
    Status: Status;

    @ManyToOne(() => Zakaz, (zakaz) => zakaz.idZakaz)
    @JoinColumn({ name: 'ZakazID' })
    Zakaz: Zakaz;

    @ManyToOne(() => Stage, (stage) => stage.idStages)
    @JoinColumn({ name: 'StagesID' })
    Stages: Stage;

    @ManyToOne(() => Workshop, (workshop) => workshop.idWorkshop)
    @JoinColumn({ name: 'WorkShopID' })
    WorkShop: Workshop;

    @Column({ type: 'date' })
    StartDate: Date;

    @Column({ type: 'date' })
    FinishDate: Date;
}
