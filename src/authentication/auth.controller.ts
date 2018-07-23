import {BadRequestException, Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {OwnerService} from '../service/owner.service';
import {Owner} from '../entity/owner.entity';
import {EncryptorService} from './encryptor/encryptor.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly ownerService: OwnerService,
    ) {}

    @Post()
    public async authOwner(@Body() ownerRequest: Owner) {
        const { mail, password } = ownerRequest;
        const owner = await this.ownerService.findOneByEmail(mail);

        if(owner) {
            const result = await EncryptorService.validate(password, owner.password);
            if(result) {
                const tokenPayload = {
                    id: owner.id,
                    firstname: owner.firstname,
                    lastname: owner.lastname,
                };
                return await this.authService.createToken(tokenPayload);
            }
        }
        throw new BadRequestException('Invalid credentials');
    }
}