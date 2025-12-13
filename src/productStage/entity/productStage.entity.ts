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

@Entity()
export class ProductStage {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, (product) => product.productStages, {
        onDelete: 'CASCADE',
    })
    product: Product;

    @ManyToOne(() => Stage, (stage) => stage.productStages, {
        onDelete: 'CASCADE',
    })
    stage: Stage;

    @Column({ type: 'int' })
    sort: number;

    @ManyToOne(() => Duration)
    @JoinColumn({ name: 'durationId' })
    duration: Duration;

    @Column({ type: 'varchar' })
    durationValue: number;
}
