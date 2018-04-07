import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}