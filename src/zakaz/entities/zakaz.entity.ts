import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Stage } from '../../stage/entities/stage.entity';
import { Status } from '../../status/entities/status.entity';
import { User } from '../../user/entities/user.entity';
import { Workshop } from '../../workshop/entities/workshop.entity';

@Entity('Zakaz')
export class Zakaz {
    @PrimaryGeneratedColumn()
    idZakaz: string;

    // @Column({ type: 'int' })
    // productId: number;

    // @ManyToOne(() => Product, (product) => product.idProduct)
    // @JoinColumn({ name: 'productId' })
    // product: Product;

    @Column({ type: 'int' })
    stageId: number;

    @ManyToOne(() => Stage, (stage) => stage.idStages)
    @JoinColumn({ name: 'stageId' })
    stage: Stage;

    @Column({ type: 'int' })
    statusId: number;

    @ManyToOne(() => Status, (status) => status.idStatus)
    @JoinColumn({ name: 'statusId' })
    status: Status;

    @Column({ type: 'int' })
    workshopId: number;

    @ManyToOne(() => Workshop, (status) => status.idWorkshop)
    @JoinColumn({ name: 'workshopId' })
    workshop: Workshop;

    @Column({ type: 'int' })
    zakazQuantity: number;

    @Column({ type: 'varchar' })
    priority: string;

    @Column({ type: 'varchar' })
    productName: string;

    @Column({ type: 'varchar' })
    For: string;

    @Column({ type: 'text', nullable: true })
    Comment: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    zakazCreated: Date;

    @Column({ type: 'datetime', nullable: true })
    zakazCompleted: Date;

    @Column({ type: 'date', nullable: true })
    deadline: Date | null;



    // @Column({ type: 'int', nullable: true })
    // userId: number | null;

    // @ManyToOne(() => User)
    // @JoinColumn({ name: 'userId' })
    // user: User | null;
}
