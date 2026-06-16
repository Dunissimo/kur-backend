import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Zakaz } from '../../zakaz/entities/zakaz.entity';
import { Status } from '../../status/entities/status.entity';
import { User } from '../../user/entities/user.entity';

@Entity('StatusHistory')
export class StatusHistory {
    @PrimaryGeneratedColumn()
    idStatusHistory: number;

    @Column({ type: 'varchar' })
    zakazId: string;

    @ManyToOne(() => Zakaz)
    @JoinColumn({ name: 'zakazId' })
    zakaz: Zakaz;

    @Column({ type: 'int' })
    statusId: number;

    @ManyToOne(() => Status)
    @JoinColumn({ name: 'statusId' })
    status: Status;

    @Column({ type: 'int', nullable: true })
    userId: number | null;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User | null;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    changedAt: Date;
}
