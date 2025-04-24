import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Stages')
export class Stage {
    @PrimaryGeneratedColumn()
    idStages: number;

    @Column({ type: 'varchar' })
    NameStages: string;
}
