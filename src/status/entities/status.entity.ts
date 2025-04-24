import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Status')
export class Status {
    @PrimaryGeneratedColumn()
    idStatus: number;

    @Column({ type: 'varchar' })
    StatusName: string;
}
