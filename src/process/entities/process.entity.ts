import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Process')
export class Process {
    @PrimaryGeneratedColumn()
    idProcess: number;

    @Column({ type: 'int' })
    StatusID: number;

    @Column({ type: 'int' })
    ZakazID: number;

    @Column({ type: 'int' })
    StagesID: number;

    @Column({ type: 'int' })
    WorkShopID: number;

    @Column({ type: 'date' })
    StartDate: Date;

    @Column({ type: 'date' })
    FinishDate: Date;
}
