import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from '../entity/cat.entity';

@Component()
export class CatsService {
    constructor(@Inject('CatRepositoryToken') private readonly catRepository: Repository<Cat>) {}

    async findAll() {
        try {
            return await this.catRepository.find();
        } catch (err) {
            return { err };
        }
    }

    async findOne(id: number) {
        try {
            return await this.catRepository.findOneById(id);
        } catch (err) {
            return { err };
        }
    }

    async update(id: number, catData: Partial<Cat>) {
        try {
            await this.catRepository.updateById(id, catData);
            return this.catRepository.findOneById(id);
        } catch (err) {
            return { err };
        }
    }

    async create(cat: Cat) {
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
    }
}