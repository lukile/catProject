import {Body, Controller, Post, UsePipes} from '@nestjs/common';
import {OwnerService} from '../service/owner.service';
import {DeSerializationPipe} from '../authentication/pipes/DeserializationPipe';
import {Owner} from '../entity/owner.entity';

@Controller('postowner')
export class PostOwnerController {
    constructor(private readonly ownerService: OwnerService) {}

    @Post()
    @UsePipes(new DeSerializationPipe())
    async create(@Body() owner: Owner) {
        const createdOwner = await this.ownerService.create(owner);
        return { owner: createdOwner };
    }
}