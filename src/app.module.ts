import {Module} from '@nestjs/common';

import {CatsModule} from './module/cats.module';
import {OwnerModule} from './module/owner.module';
import {CatToyModule} from './module/catToy.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot(),
        CatsModule,
        CatToyModule,
        OwnerModule,
    ],
})

export class ApplicationModule {}
