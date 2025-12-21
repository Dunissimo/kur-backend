import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column({ type: 'varchar' })
    Name: string;

    @Column({ type: 'varchar' })
    Login: string;

    @Column({ type: 'varchar' })
    Password: string;
}
