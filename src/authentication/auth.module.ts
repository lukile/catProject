import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {JwtStrategy} from './jwt/jwt.strategy';
import {TypeOrmModule} from '@nestjs/typeorm';
import {OwnerModule} from '../module/owner.module';
import {Owner} from '../entity/owner.entity';
import {AuthController} from './auth.controller';

@Module({
    controllers: [AuthController],
    components: [AuthService, JwtStrategy],
    imports: [OwnerModule, TypeOrmModule.forFeature([Owner])],
})

export class AuthModule {}