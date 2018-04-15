import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './src/app.module';
import { Module } from '@nestjs/common';
import * as express from 'express';
require('ts-node/register');
require('./server');
import * as http from 'http';

import {SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);

    const options = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);

    await app.listen(3001);

    /*console.log('test 1');
    let server: any;
    console.log('test 2');
    server = express();
    console.log('test 3');
    const app = await NestFactory.create(ApplicationModule, server);
    console.log('test 4');
    await app.init();

    console.log('test 5');
    http.createServer(server).listen(3000);*/
    /*let instance: any;
    instance = express();
    const app = NestFactory.create(ApplicationModule, instance);
    app.then(instance => instance.listen(3000), () => console.log('Application is listening on port 3000'));
*/}

bootstrap();
