import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './src/app.module';
import express =  require('express');

const http = require('http');
let server: any;

server = express();

async function bootstrap() {
    console.log("test 0");
    const app = await NestFactory.create(ApplicationModule, server);
console.log("test");
    await app.init();
console.log("test 2");
    http.createServer(server).listen(3000);
    console.log("test 3");
    /*const app: INestApplication = await NestFactory.create(ApplicationModule);
    app.use(json());
    await app.listen(3000);*/
}

bootstrap();
