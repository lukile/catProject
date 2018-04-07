import { Module } from '@nestjs/common';
import { OwnerController } from './controller/owner.controller';
import { OwnerService } from './service/owner.service';

@Module({
    controllers: [OwnerController],
    components: [OwnerService],
})

export class OwnerModule {}