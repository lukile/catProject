import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import {Cat} from './cat.entity';

/*That's represent each table and column inserted on database */

@Entity()
export class CatToy {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    type: string;

    @Column('text')
    brand: string;

    @Column()
    price: string;

    @ManyToOne(type => Cat, {nullable: false, onDelete: "CASCADE"})
    @JoinColumn({name: 'catId'})
    cat: Cat;
}