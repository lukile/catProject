import { Module } from '@nestjs/common';
import { MainController } from './controller/main.controller';

import { CatsModule } from './cats.module';
import { CatsController } from './controller/cats.controller';

import { OwnerModule } from './owner.module';
import { OwnerController } from './controller/owner.controller';

import {CatfoodController} from './controller/catfood.controller';
import { CatfoodModule } from './catfood.module';

import { DatabaseModule } from './database/database.module';

@Module({
  controllers: [
      MainController,
      CatsController,
      CatfoodController,
      OwnerController,
  ],
    modules: [
        DatabaseModule,
        CatsModule,
        CatfoodModule,
        OwnerModule,
    ],
})

export class ApplicationModule {}
