///<reference path="../../node_modules/@nestjs/common/decorators/core/use-pipes.decorator.d.ts"/>
import {Body, Controller, Delete, Get, Post, Param, Patch, UsePipes} from '@nestjs/common';
import { OwnerService } from '../service/owner.service';
import { Owner } from '../entity/owner.entity';
import {DeSerializationPipe} from '../authentication/pipes/DeserializationPipe';

/*All methods call service methods according to request type*/

@Controller('owner')
export class OwnerController {
    constructor(private readonly ownerService: OwnerService){}

    @Get()
    async findAll(): Promise<Owner[]> {
        return this.ownerService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.ownerService.findOne(+id);
    }

    @Post()
    @UsePipes(new DeSerializationPipe())
    async create(@Body() owner: Owner) {
        const createdOwner = await this.ownerService.create(owner);
        console.log(owner.password);
        return { owner: createdOwner };
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() owner: Partial<Owner>) {
        return await this.ownerService.update(+id, owner);
    }

    @Delete(':id')
    async destroy(@Param('id') id: string) {
        await this.ownerService.destroy(+id);
        return;
    }
}
