import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

import { MainController } from './controller/main.controller';

import { CatsModule } from './module/cats.module';
import { CatsController } from './controller/cats.controller';

import { OwnerModule } from './owner.module';
import { OwnerController } from './controller/owner.controller';

import {CatfoodController} from './controller/catfood.controller';
import { CatfoodModule } from './catfood.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'postgres',
            entities: [__dirname + '/../**/**.entity{.ts,.js}'
            ],
            synchronize: true
        }),
        CatsModule,
     /*   CatfoodModule,
        OwnerModule,*/
    ],
})

export class ApplicationModule {}
