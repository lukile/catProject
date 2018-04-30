import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Cat} from './cat.entity';

@Entity()
export class Owner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    firstname: string;

    @Column({ length: 500 })
    lastname: string;

    @Column('int')
    age: number;

    @OneToMany(type => Cat, cat => cat.owner)
    cats: Cat[];
}