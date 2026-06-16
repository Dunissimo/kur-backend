import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductStage } from '../../productStage/entity/productStage.entity';
import { Workshop } from '../../workshop/entities/workshop.entity';

@Entity('Stages')
export class Stage {
    @PrimaryGeneratedColumn()
    idStages: number;

    @Column({ type: 'varchar' })
    NameStages: string;

    @Column({ type: 'varchar' })
    DescriptionStages: string;

    @ManyToOne(() => Workshop)
    @JoinColumn({ name: 'WorkshopId' })
    Workshop: Workshop;

    @Column({ type: 'int' })
    WorkshopId: number;

    @Column({ type: 'int' })
    DurationStages: number;

    @Column({ type: 'int' })
    OrderStages: number;

    @OneToMany(() => ProductStage, (productStage) => productStage.stage)
    productStages: ProductStage[];
}
