import { Module } from '@nestjs/common';
import { OwnerService } from '../service/owner.service';
import { Connection } from 'typeorm';
import { Owner } from '../entity/owner.entity';

@Module({
    components: [
        {
            provide: 'OwnerRepositoryToken',
            useFactory: (connection: Connection) => connection.getRepository(Owner),
            inject: ['DbConnectionToken'],
        },
        OwnerService,
    ],
    exports: [
        OwnerService,
    ],
})
export class OwnerModule {}