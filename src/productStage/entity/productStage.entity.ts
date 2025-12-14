import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Stage } from '../../stage/entities/stage.entity';
import { Duration } from '../../duration/entities/duration.entity';

@Entity('ProductStages')
export class ProductStage {
    @PrimaryGeneratedColumn()
    idProductStages: number;

    @Column({ type: 'int' })
    productId: number;

    @ManyToOne(() => Product, (product) => product.productStages, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'productId' })
    product: Product;

    @Column({ type: 'int' })
    stageId: number;

    @ManyToOne(() => Stage, (stage) => stage.productStages, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'stageId' })
    stage: Stage;

    @Column({ type: 'int' })
    sort: number;

    @Column({ type: 'int' })
    durationId: number;

    @ManyToOne(() => Duration)
    @JoinColumn({ name: 'durationId' })
    duration: Duration;

    @Column({ type: 'int' })
    durationValue: number;
}
