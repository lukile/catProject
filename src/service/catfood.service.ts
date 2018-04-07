import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Catfood } from '../entity/catfood.entity';

@Component()
export class CatfoodService {
    constructor(@Inject('CatfoodRepositoryToken') private readonly catfoodRepository: Repository<Catfood>) {}

    async findAll() {
        try {
            return await this.catfoodRepository.find();
        } catch (err) {
            return { err };
        }
    }

    async findOne(id: number) {
        try {
            return await this.catfoodRepository.findOneById(id);
        } catch (err) {
            return { err };
        }
    }

    async update(id: number, catfoodData: Partial<Catfood>) {
        try {
            await this.catfoodRepository.updateById(id, catfoodData);
            return this.catfoodRepository.findOneById(id);
        } catch (err) {
            return { err };
        }
    }

    async create(catfood: Catfood) {
        try {
            return await this.catfoodRepository.save(catfood);
        } catch (err) {
            return { err };
        }
    }

    async destroy(id: number) {
        try {
            return await this.catfoodRepository.deleteById(id);
        } catch (err) {
            return { err };
        }
    }

}