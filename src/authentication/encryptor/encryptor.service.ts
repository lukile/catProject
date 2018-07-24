import * as bcrypt from 'bcryptjs';

import { Component } from '@nestjs/common';

@Component()
export class EncryptorService {

    static async encrypt(password): Promise<string> {
        const salt = bcrypt.genSaltSync(10);
        return await bcrypt.hash(password, salt);
    }

    static async validate(password, hash): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}