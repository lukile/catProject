import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PostOwnerController} from '../controller/postOwner.controller';
import {OwnerService} from '../service/owner.service';
import {Owner} from '../entity/owner.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Owner])],
    controllers: [PostOwnerController],
    components: [OwnerService],
    exports: [OwnerService],
})

export class PostOwnerModule {}