import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Serialize } from 'src/common';

import { AuthResDto, LoginUserDto, RegisterUserDto } from '../dtos';
import { CredentialsService } from './credentials.service';

@Controller('auth/credentials')
@ApiTags('Auth')
@Serialize(AuthResDto)
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}

  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ type: AuthResDto })
  async login(@Body() dto: LoginUserDto) {
    return this.credentialsService.loginUser(dto);
  }

  @Post('register')
  @ApiCreatedResponse({ type: AuthResDto })
  async register(@Body() dto: RegisterUserDto) {
    return this.credentialsService.registerUser(dto);
  }
}
