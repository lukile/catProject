import { Module } from '@nestjs/common';
import { CatfoodService } from '../service/catfood.service';
import { Connection } from 'typeorm';
import { Catfood } from '../entity/catfood.entity';

@Module({
    components: [
        {
            provide: 'CatfoodRepositoryToken',
            useFactory: (connection: Connection) => connection.getRepository(Catfood),
            inject: ['DbConnectionToken'],
        },
        CatfoodService,
    ],
    exports: [
        CatfoodService,
    ],
})
export class CatfoodModule {}