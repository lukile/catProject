import { Module } from '@nestjs/common';
import { OwnerService } from '../service/owner.service';
import { Connection } from 'typeorm';
import { Owner } from '../entity/owner.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Catfood} from '../entity/catfood.entity';
import {CatfoodService} from '../service/catfood.service';
import {CatfoodController} from '../controller/catfood.controller';
import {OwnerController} from '../controller/owner.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Owner])],
    components: [OwnerService],
    controllers: [OwnerController],
    /*components: [
        {
            provide: 'OwnerRepositoryToken',
            useFactory: (connection: Connection) => connection.getRepository(Owner),
            inject: ['DbConnectionToken'],
        },
        OwnerService,
    ],
    exports: [
        OwnerService,
    ],*/
})
export class OwnerModule {}