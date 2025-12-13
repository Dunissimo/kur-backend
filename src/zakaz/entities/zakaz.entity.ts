import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity('Zakaz')
export class Zakaz {
    @PrimaryGeneratedColumn()
    idZakaz: number;

    @ManyToOne(() => Product, (product) => product.idProduct)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @Column({ type: 'int' })
    ZakazQuantity: number;

    @Column({ type: 'varchar' })
    For: string;

    @Column({ type: 'text', nullable: true })
    Comment: string;

    @Column({ type: 'datetime' })
    zakazCreated: Date;

    @Column({ type: 'datetime' })
    zakazCompleted: Date;
}
