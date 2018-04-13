    import { Module } from '@nestjs/common';
import { CatsService } from '../service/cats.service';
import { Connection } from 'typeorm';
import { Cat } from '../entity/cat.entity';
    import {TypeOrmModule} from '@nestjs/typeorm';
    import {Catfood} from '../entity/catfood.entity';
    import {Owner} from '../entity/owner.entity';
    import {CatfoodService} from '../service/catfood.service';
    import {OwnerService} from '../service/owner.service';
    import {CatsController} from '../controller/cats.controller';
    import {CatfoodController} from '../controller/catfood.controller';
    import {OwnerController} from '../controller/owner.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    components: [CatsService],
    controllers: [CatsController],
    exports: [CatsService],
    /*components: [
        {
            provide: 'CatRepositoryToken',
            useFactory: (connection: Connection) => connection.getRepository(Cat),
            inject: ['DbConnectionToken'],
        },
        CatsService,
    ],
    exports: [
        CatsService,
    ],*/
})
export class CatsModule {}