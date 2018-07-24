import * as passport from 'passport';

import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {CatToyService} from '../service/catToy.service';
import {CatToy} from '../entity/catToy.entity';
import {CatToyController} from '../controller/catToy.controller';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CatToy])],
    controllers: [CatToyController],
    components: [CatToyService],
})
export class CatToyModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false}))
            .forRoutes(CatToyController);
    }
}