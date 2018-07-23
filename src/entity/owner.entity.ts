import {Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert} from 'typeorm';
import {Cat} from './cat.entity';
import {EncryptorService} from '../authentication/encryptor/encryptor.service';

@Entity()
export class Owner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    firstname: string;

    @Column({ length: 500 })
    lastname: string;

    @Column('text')
    mail: string;

    @Column('text')
    password: string;

    @Column('int')
    age: number;

    @BeforeInsert()
    async hashPassword(){
        this.password = await EncryptorService.encrypt(this.password);
    }
    @OneToMany(type => Cat, cat => cat.owner)
    cats: Cat[];
}