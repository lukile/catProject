import {Module} from '@nestjs/common';

import {CatsModule} from './module/cats.module';
import {OwnerModule} from './module/owner.module';
import {CatfoodModule} from './module/catfood.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot(),
        CatsModule,
        CatfoodModule,
        OwnerModule,
    ],
})

export class ApplicationModule {}
