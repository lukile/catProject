import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/*That's represent each table and column inserted on database */

@Entity()
export class Catfood {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    type: string;

    @Column('text')
    brand: string;

    @Column()
    price: number;

    @Column()
    weight: string;
}