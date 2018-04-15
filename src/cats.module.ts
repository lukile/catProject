import { Module } from '@nestjs/common';
import { CatsController } from './module/cats.controller';
import { CatsService } from './module/cats.service';

@Module({
    controllers: [CatsController],
    components: [CatsService],
})
export class CatsModule {}