import { Body, Controller, Delete, Get, Post, Param, Patch } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';

/*All methods call service methods according to request type*/

@Controller('/cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    @ApiOperation({ title: 'Create cat' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() cat: Cat) {
        this.catsService.create(cat);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Cat {
        return this.catsService.findOne(+id);
    }
    /*@Get()
    async findAll() {
        return await this.catsService.findAll();
    }

     @Get('/:id')
    async findOne(@Param('id') id: string){
        return await this.catsService.findOne(+id);
    }

    @Post()
    async create(@Body() cat: Cat) {
        const createdCat = await this.catsService.create(cat);
        return { cat: createdCat };
    }

    @Patch(':/id')
    async update(@Param('id') id: string, @Body() cat: Partial<Cat>) {
        return await this.catsService.update(+id, cat);
    }

    @Delete(':/id')
    async destroy(@Param('id') id: string) {
        await this.catsService.destroy(+id);
        return;
    }*/
}