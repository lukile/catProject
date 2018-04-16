import {Body, Controller, Delete, Get, Post, Param, Patch } from '@nestjs/common';
import { CatfoodService } from '../service/catfood.service';
import { Catfood } from '../entity/catfood.entity';

    /*All methods call service methods according to request type*/

@Controller('catfood')
export class CatfoodController {
    constructor(private readonly catfoodService: CatfoodService) {}

    @Get()
    async findAll(): Promise<Catfood[]> {
        return await this.catfoodService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.catfoodService.findOne(+id);
    }

    @Post()
    async create(@Body() catfood: Catfood) {
        const createdCatfood = await this.catfoodService.create(catfood);
        return { catfood: createdCatfood };
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() catfood: Partial<Catfood>) {
        return await this.catfoodService.update(+id, catfood);
    }

    @Delete(':id')
    async destroy(@Param('id') id: string) {
        await this.catfoodService.destroy(+id);
        return;
    }
}