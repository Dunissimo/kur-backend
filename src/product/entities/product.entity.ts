import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductStage } from '../../productStage/entity/productStage.entity';

@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    idProduct: number;

    @Column({ type: 'varchar' })
    NameProduct: string;

    @OneToMany(() => ProductStage, (productStage) => productStage.product)
    productStages: ProductStage[];
}
