import {Module} from '@nestjs/common';

import {CatsModule} from './module/cats.module';
import {OwnerModule} from './module/owner.module';
import {CatToyModule} from './module/catToy.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: "postgres",
        host: process.env.DB_HOST || "localhost",
        port: 5432,
        username: process.env.DB_USER || "postgres",
        password: process.env.DB_PASS || "root",
        database: process.env.DB_NAME || "postgres",
        synchronize: true,
        logging: true,
        entities: ["src/entity/**/*.ts"],
    }),
        CatsModule,
        CatToyModule,
        OwnerModule,
    ],
})

export class ApplicationModule {}
