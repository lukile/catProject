import {Body, Controller, Delete, Get, Param, Post, Put, Req, UsePipes} from '@nestjs/common';
import {OwnerService} from '../service/owner.service';
import {Owner} from '../entity/owner.entity';

/*All methods call service methods according to request type*/

@Controller('owner')
export class OwnerController {
    constructor(private readonly ownerService: OwnerService){}

    @Get()
    async findAll(@Req() request): Promise<Owner[]> {
        return this.ownerService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.ownerService.findOne(+id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() owner: Partial<Owner>) {
        return await this.ownerService.update(+id, owner);
    }

    @Delete(':id')
    async destroy(@Param('id') id: string) {
        await this.ownerService.destroy(+id);
        return;
    }
}
