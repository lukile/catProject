import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class MainController {
    constructor() {}

    @Get()
    findAll() {
        return {
            status: 'ok',
        };
    }
}