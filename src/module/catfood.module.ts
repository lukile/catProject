import { Module } from '@nestjs/common';
import { CatfoodService } from '../service/catfood.service';
import { Connection } from 'typeorm';
import { Catfood } from '../entity/catfood.entity';
import {CatfoodController} from '../controller/catfood.controller';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Catfood])],
    controllers: [CatfoodController],
    components: [CatfoodService],
})
export class CatfoodModule {}