import * as jwt from 'jsonwebtoken';

import {Component} from '@nestjs/common';
import {OwnerService} from '../service/owner.service';
import {EncryptorService} from './encryptor/encryptor.service';

@Component()
export class AuthService {
    constructor(private readonly ownerService: OwnerService) {}

    async createToken(payload) {
        const expiresIn = 60 * 730;
        const secretOrKey = 'secret';
        const token = jwt.sign(payload, secretOrKey, { expiresIn });

        return {
            expires_in: expiresIn,
            access_token: token,
        };
    }

    async validateOwner(signedOwner): Promise<boolean> {
        const { mail, password } = signedOwner;
        const owner = await this.ownerService.findOneByEmail(mail);

        return await EncryptorService.validate(password, owner.password);
        /*const owner = await this.ownerService.findOneByEmail(mail);

        if (!owner)
            return Promise.resolve(false);
        return jwt.verify(token, 'secret', {}, (error, decodedToken) => {
           return error ? Promise.resolve(false) : Promise.resolve(true);
        });*/
    }
}
