import { Body, Controller, Delete, Get, Post, Param, Patch } from '@nestjs/common';
import { OwnerService } from '../service/owner.service';
import { Owner } from '../entity/owner.entity';

/*All methods call service methods according to request type*/

@Controller('/owner')
export class OwnerController {
    constructor(private readonly ownerService: OwnerService){}

    @Get()
    async findAll() {
        return this.ownerService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        return await this.ownerService.findOne(+id);
    }

    @Post()
    async create(@Body() owner: Owner) {
        const createdOwner = await this.ownerService.create(owner);
        return { owner: createdOwner };
    }

    @Patch(':/id')
    async update(@Param('id') id: string, @Body() owner: Partial<Owner>) {
        return await this.ownerService.update(+id, owner);
    }

    @Delete('/:id')
    async destroy(@Param('id') id: string) {
        await this.ownerService.destroy(+id);
        return;
    }

}
