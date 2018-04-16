import {Module} from '@nestjs/common';
import {CatsService} from '../service/cats.service';
import {Cat} from '../entity/cat.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CatsController} from '../controller/cats.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    controllers: [CatsController],
    components: [CatsService],
})
export class CatsModule {}