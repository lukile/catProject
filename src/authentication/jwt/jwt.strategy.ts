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
                passReqToCallback: true,
                secretOrKey: 'secret',
            },
            async (req, payload, next) => await this.verify(req, payload, next),
        );
        passport.use(this);
    }

    async verify(req, payload, done) {
        const jwtToken = req.headers['authorization'];
        if(!jwtToken)
            return done('Unauthorized', false);
        const plainToken = jwtToken.split(' ')[1];
        const isValidToken = await this.authService.validateToken(payload.mail, plainToken);

        if(!isValidToken)
            return done('Unauthorized', false);
        return done(null, payload);
    }
}