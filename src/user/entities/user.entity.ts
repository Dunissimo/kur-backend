import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column({ type: 'varchar' })
    Admin: string;

    @Column({ type: 'varchar' })
    Password: string;
}
