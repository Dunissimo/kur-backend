import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Zakaz')
export class Zakaz {
    @PrimaryGeneratedColumn()
    idZakaz: number;

    @Column({ type: 'date' })
    Kogda: Date;

    @Column({ type: 'int' })
    Zakazcol: number;

    @Column({ type: 'varchar' })
    For: string;

    @Column({ type: 'text', nullable: true })
    Comment: string;
}
