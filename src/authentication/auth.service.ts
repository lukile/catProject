import * as jwt from 'jsonwebtoken';

import {Component} from '@nestjs/common';
import {OwnerService} from '../service/owner.service';
import {EncryptorService} from './encryptor/encryptor.service';

@Component()
export class AuthService {
    constructor(private readonly ownerService: OwnerService) {}

    async createToken(payload) {
        //1 month in min
        const expiresIn = 60 * 730;
        const secretOrKey = 'secret';
        const token = jwt.sign(payload, secretOrKey, { expiresIn });

        return {
            expires_in: expiresIn,
            access_token: token,
        };
    }

    async validateToken(mail: string, token: string): Promise<boolean> {
        const student = await this.ownerService.findOneByEmail(mail);

        if (!student)
            return Promise.resolve(false);

        return jwt.verify(token, 'secret', {}, (error, decodedToken) => {
            return error ? Promise.resolve(false) : Promise.resolve(true);
        });
    }
}