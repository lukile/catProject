import {Component} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Owner} from '../entity/owner.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Component()
export class OwnerService {
    constructor(
        @InjectRepository(Owner)
        private readonly ownerRepository: Repository<Owner>
    ) {}

    async findAll(): Promise<Owner[]> {
        return await this.ownerRepository.find();
    }

    async findOne(id: number) {
        return await this.ownerRepository.findOneById(id);
    }
    async create(owner: Owner) {
        return await this.ownerRepository.save(owner);
    }
    async update(id: number, ownerData: Partial<Owner>) {
        await this.ownerRepository.updateById(id, ownerData);
        return this.ownerRepository.findOneById(id);
    }

    async destroy(id: number) {
        return await this.ownerRepository.deleteById(id);
    }
}