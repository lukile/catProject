import { Module } from '@nestjs/common';
import { CatsService } from '../service/cats.service';
import { Connection } from 'typeorm';
import { Cat } from '../entity/cat.entity';

@Module({
    components: [
        {
            provide: 'CatRepositoryToken',
            useFactory: (connection: Connection) => connection.getRepository(Cat),
            inject: ['DbConnectionToken'],
        },
        CatsService,
    ],
    exports: [
        CatsService,
    ],
})
export class CatsModule {}