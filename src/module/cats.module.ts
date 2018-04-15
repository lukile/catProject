import {Module} from '@nestjs/common';
import {CatsService} from './cats.service';
import {Cat} from './cat.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CatsController} from './cats.controller';

@Module({
    controllers: [CatsController],
    /*
        imports: [TypeOrmModule.forFeature([Cat])],
    */
    components: [CatsService],
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