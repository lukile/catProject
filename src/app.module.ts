import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

import { MainController } from './controller/main.controller';

import { CatsModule } from './cats.module';
import { CatsController } from './module/cats.controller';

import { OwnerModule } from './owner.module';
import { OwnerController } from './controller/owner.controller';

import {CatfoodController} from './controller/catfood.controller';
import { CatfoodModule } from './catfood.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';


@Module({
    /*controllers: [
      MainController,
      CatsController,
      CatfoodController,
      OwnerController,
  ],*/
    imports: [
/*
        TypeOrmModule.forRoot(),
*/
        CatsModule,
     /*   CatfoodModule,
        OwnerModule,*/
    ],
})

export class ApplicationModule {}
