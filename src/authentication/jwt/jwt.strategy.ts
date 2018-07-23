import * as passport from 'passport';

import {Component} from '@nestjs/common';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {AuthService} from '../auth.service';

@Component()
export class JwtStrategy extends Strategy {
    constructor(private readonly authService: AuthService) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passRequestToCallback: true,
                secretOrKey: 'secret',
            },
            async (req, payload, next) => await this.verify(req, payload, next),
        );
        passport.use(this);
    }

    async verify(req, payload, done) {
       const isValid = await this.authService.validateOwner(payload);

       if(!isValid)
           return done('Unauthorized', false);
       done(null, payload);
    }
}