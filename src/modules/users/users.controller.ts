import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminGuard, IdDto, Serialize } from 'src/common';

import { CreateUserDto, FindManyUsersDto, UserDto } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(AdminGuard)
@Serialize(UserDto)
@ApiTags('Users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserDto })
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: [UserDto] })
  async find(@Query() query: FindManyUsersDto) {
    return this.usersService.find(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: UserDto })
  async findOne(@Param() { id }: IdDto) {
    const user = await this.usersService.findOne({
      id,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
