import {Component} from '@nestjs/common';
import {getRepository, Repository} from 'typeorm';
import {Cat} from '../entity/cat.entity';
import {OwnerService} from './owner.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Owner} from '../entity/owner.entity';
import {Connection} from 'typeorm';

@Component()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>
    ) {}

    async findAll(): Promise<Cat[]> {
            return await this.catRepository.find();
    }

    async findOne(id: number): Promise<Cat>{
        return await this.catRepository.findOneById(id);
    }

    async create(cat: Cat) {
        const ownerRepository = getRepository(Owner);
        const owner = await ownerRepository.find();


        //console.log('owner id  : ' + owner.keys());
      //  console.log('cat id : ' + cat.id);
       // cat.owner = owner;
        //cat.owner = owner;


//

        /*const ownerId = ownerService.findOne(cat.ownerId);


       console.log('ownerId  second : ', ownerId);*/

        /*const owner = new Owner();
        cat.owner = owner;
        console.log('owner cat : ' + cat.owner.id);
        console.log('owner id : ' + owner.);
        */
        await this.catRepository.save(cat);
    }

    async update(id: number, catData: Partial<Cat>): Promise<Cat> {
        await this.catRepository.updateById(id, catData);
        return this.catRepository.findOneById(id);
    }

    async destroy(id: number) {
        return await this.catRepository.deleteById(id);
    }
}