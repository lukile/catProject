import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {CatsService} from '../service/cats.service';
import {Cat} from '../entity/cat.entity';
import {OwnerService} from '../service/owner.service';

/*All methods call service methods according to request type*/

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    @Get()
    async findAll(): Promise<Cat[]> {
        return await this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.catsService.findOne(+id);
    }

    @Post()
    async create(@Body() cat: Cat) {
        if (cat.owner){
            const createdCat = await this.catsService.create(cat);
            return { cat: createdCat };
        }else{
            throw new Error('cat must have an owner');
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() cat: Partial<Cat>) {
        return await this.catsService.update(+id, cat);
    }

    @Delete(':id')
    async  destroy(@Param('id') id: string) {
        await this.catsService.destroy(+id);
        return;
    }
}