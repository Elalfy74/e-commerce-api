import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Serialize } from 'src/common';

import { AuthResDto, GoogleLoginDto } from '../dtos';
import { GoogleAuthService } from './google-auth.service';

@Controller('auth/google')
@Serialize(AuthResDto)
@ApiTags('Auth')
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ type: AuthResDto })
  async login(@Body() dto: GoogleLoginDto) {
    return this.googleAuthService.login(dto);
  }
}
