import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Workshop } from '../../workshop/entities/workshop.entity';
import { UserRole } from '../../roles/roles.enum';

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

    @Column({ type: 'varchar', default: UserRole.MANAGER })
    Role: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    phone: string;

    @Column({ type: 'boolean' })
    active: boolean;

    @Column({ type: 'bool', default: false })
    isBlocked: boolean;

    @Column({ type: 'int', default: 0 })
    failedLoginAttempts: number;
}
