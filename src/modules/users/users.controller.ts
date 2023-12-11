import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminGuard, JwtGuard, Serialize } from 'src/common';

import { CreateUserDto, FindManyUsersDto, UserDto } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtGuard, AdminGuard)
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
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne({
      id,
    });
  }
}
