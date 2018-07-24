import * as passport from 'passport';

import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {OwnerService} from '../service/owner.service';
import {Owner} from '../entity/owner.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {OwnerController} from '../controller/owner.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Owner])],
    controllers: [OwnerController],
    components: [OwnerService],
    exports: [OwnerService],
})

export class OwnerModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', {session: false}))
            .forRoutes(OwnerController);
    }
}
