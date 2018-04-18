import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import {Owner} from './owner.entity';

/*That's represent each table and column inserted on database */

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('int')
    age: number;

    @Column('text')
    breed: string;

    @Column({nullable: false})
    ownerId: number;

    @ManyToOne(type => Owner)
    @JoinColumn({name: 'ownerId'})
    owner: Owner;
}