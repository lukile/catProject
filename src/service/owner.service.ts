import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Owner } from '../entity/owner.entity';

@Component()
export class OwnerService {
    constructor(@Inject('OwnerRepositoryToken') private readonly ownerRepository: Repository<Owner>) {}

    async findAll() {
        try {
            return await this.ownerRepository.find();
        } catch (err) {
            return { err };
        }
    }

    async findOne(id: number) {
        try {
            return await this.ownerRepository.findOneById(id);
        } catch (err) {
            return { err };
        }
    }

    async update(id: number, ownerData: Partial<Owner>) {
        try {
            await this.ownerRepository.updateById(id, ownerData);
            return this.ownerRepository.findOneById(id);
        } catch (err) {
            return { err };
        }
    }

    async create(owner: Owner) {
        try {
            return await this.ownerRepository.save(owner);
        } catch (err) {
            return { err };
        }
    }

    async destroy(id: number) {
        try {
            return await this.ownerRepository.deleteById(id);
        } catch (err) {
            return { err };
        }
    }
}