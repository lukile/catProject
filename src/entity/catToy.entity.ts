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
    price: number;

    @Column({nullable: true})
    catId: number;

    @ManyToOne(type => Cat)
    @JoinColumn({name: 'catId'})
    cat: Cat;
}