import * as passport from 'passport';

import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {CatsService} from '../service/cats.service';
import {Cat} from '../entity/cat.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CatsController} from '../controller/cats.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    controllers: [CatsController],
    components: [CatsService],
})
export class CatsModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false}))
            .forRoutes(CatsController);
    }
}