import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Catfood } from '../entity/catfood.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Component()
export class CatfoodService {
    constructor(
        @InjectRepository(Catfood)
        private readonly catfoodRepository: Repository<Catfood>
    ) {}

    async findAll(): Promise<Catfood[]> {
        return await this.catfoodRepository.find();
    }

    async findOne(id: number) {
        return await this.catfoodRepository.findOneById(id);
    }

    async create(catfood: Catfood) {
        return await this.catfoodRepository.save(catfood);
    }

    async update(id: number, catfoodData: Partial<Catfood>) {
        await this.catfoodRepository.updateById(id, catfoodData);
        return this.catfoodRepository.findOneById(id);
    }

    async destroy(id: number) {
        return await this.catfoodRepository.deleteById(id);
    }
}