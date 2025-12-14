import {
    Column,
    CreateDateColumn,
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

    @Column({ type: 'int', select: false })
    productId: number;

    @ManyToOne(() => Product, (product) => product.idProduct)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @Column({ type: 'int' })
    zakazQuantity: number;

    @Column({ type: 'varchar' })
    For: string;

    @Column({ type: 'text', nullable: true })
    Comment: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    zakazCreated: Date;

    @Column({ type: 'datetime', nullable: true })
    zakazCompleted: Date;
}
