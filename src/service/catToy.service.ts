import {Component} from '@nestjs/common';
import {Repository} from 'typeorm';
import {CatToy} from '../entity/catToy.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Component()
export class CatToyService {
    constructor(
        @InjectRepository(CatToy)
        private readonly catToyRepository: Repository<CatToy>
    ) {}

    async findAll(): Promise<CatToy[]> {
        return await this.catToyRepository.find();
    }

    async findOne(id: number) {
        return await this.catToyRepository.findOneById(id);
    }

    async create(catToy: CatToy) {
        /*catToy.cat = catToy;*/
        return await this.catToyRepository.save(catToy);
    }

    async update(id: number, catToyData: Partial<CatToy>) {
        await this.catToyRepository.updateById(id, catToyData);
        return this.catToyRepository.findOneById(id);
    }

    async destroy(id: number) {
        return await this.catToyRepository.deleteById(id);
    }
}