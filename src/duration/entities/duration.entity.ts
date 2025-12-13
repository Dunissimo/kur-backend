import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Duration')
export class Duration {
    @PrimaryGeneratedColumn()
    idDuration: number;

    @Column({ type: 'varchar' })
    DurationType: string;
}
