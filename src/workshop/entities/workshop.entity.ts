import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('WorkShop')
export class Workshop {
    @PrimaryGeneratedColumn()
    idWorkshop: number;

    @Column({ type: 'varchar' })
    NameWS: string;

    @Column({ type: 'int' })
    MaxLoadWS: number;

    @Column({ type: 'int' })
    CurrentLoadWS: number;
}
