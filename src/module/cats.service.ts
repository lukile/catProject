import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Component()
export class CatsService {
/*
    constructor(@InjectRepository(Cat) private readonly catRepository: Repository<Cat>) {}
*/

    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findOne(id: number): Cat {
        return this.cats[id];
    }
    /*async findAll(): Promise<Cat[]> {
        try {
            return await this.catRepository.find();
        } catch (err) {
            return { err };
        }
    }

    async findOne(id: number): Promise<Cat>{
        try {
            return await this.catRepository.findOneById(id);
        } catch (err) {
            return { err };
        }
    }

    async update(id: number, catData: Partial<Cat>): Promise<Cat> {
        try {
            await this.catRepository.updateById(id, catData);
            return this.catRepository.findOneById(id);
        } catch (err) {
            return { err };
        }
    }

    async create(cat: Cat): Promise<Cat> {
        try {
            return await this.catRepository.save(cat);
        } catch (err) {
            return { err };
        }
    }

    async destroy(id: number) {
        try {
            return await this.catRepository.deleteById(id);
        } catch (err) {
            return { err };
        }
    }*/
}