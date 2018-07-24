import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CatToy} from '../entity/catToy.entity';
import {CatToyService} from '../service/catToy.service';

/*All methods call service methods according to request type*/

@Controller('catToy')
export class CatToyController {
    constructor(private readonly catToyService: CatToyService) {}

    @Get()
    async findAll(): Promise<CatToy[]> {
        return await this.catToyService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.catToyService.findOne(+id);
    }

    @Post()
    async create(@Body() catToy: CatToy) {
        if(catToy.cat){
            const createdcatToy = await this.catToyService.create(catToy);
            return { catToy: createdcatToy };
        }else{
            throw new Error('cat toy must have cat');
        }
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() catToy: Partial<CatToy>) {
        return await this.catToyService.update(+id, catToy);
    }

    @Delete(':id')
    async destroy(@Param('id') id: string) {
        await this.catToyService.destroy(+id);
        return;
    }
}