import {Component} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Cat} from '../entity/cat.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Component()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>) {}

    async findAll(): Promise<Cat[]> {
            return await this.catRepository.find();
    }

    async findOne(id: number): Promise<Cat>{
        return await this.catRepository.findOneById(id);
    }

    async create(cat: Cat) {

        return await this.catRepository.save(cat);
    }

    async update(id: number, catData: Partial<Cat>): Promise<Cat> {
        await this.catRepository.updateById(id, catData);
        return this.catRepository.findOneById(id);
    }

    async destroy(id: number) {
        return await this.catRepository.deleteById(id);
    }
}