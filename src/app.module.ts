import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

import { MainController } from './controller/main.controller';

import { CatsModule } from './module/cats.module';
import { CatsController } from './controller/cats.controller';

import { OwnerModule } from './owner.module';
import { OwnerController } from './controller/owner.controller';

import {CatfoodController} from './controller/catfood.controller';
import { CatfoodModule } from './module/catfood.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';

@Module({
    imports: [TypeOrmModule.forRoot(),
        CatsModule,
        CatfoodModule,
       /* OwnerModule,*/
    ],
})

export class ApplicationModule {}
