import {Module} from '@nestjs/common';
import {OwnerService} from '../service/owner.service';
import {Owner} from '../entity/owner.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {OwnerController} from '../controller/owner.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Owner])],
    controllers: [OwnerController],
    components: [OwnerService],
})
export class OwnerModule {}