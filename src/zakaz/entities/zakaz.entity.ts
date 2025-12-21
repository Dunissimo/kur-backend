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

@Entity('Zakaz')
export class Zakaz {
    @PrimaryGeneratedColumn()
    idZakaz: number;

    @Column({ type: 'int' })
    productId: number;

    @ManyToOne(() => Product, (product) => product.idProduct)
    @JoinColumn({ name: 'productId' })
    product: Product;

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
    zakazQuantity: number;

    @Column({ type: 'varchar' })
    For: string;

    @Column({ type: 'bool' })
    isCancelled: boolean;

    @Column({ type: 'bool' })
    isFinished: boolean;

    @Column({ type: 'text', nullable: true })
    Comment: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    zakazCreated: Date;

    @Column({ type: 'datetime', nullable: true })
    zakazCompleted: Date;
}
