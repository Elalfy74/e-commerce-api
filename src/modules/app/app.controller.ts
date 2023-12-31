import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller()
@ApiExcludeController()
export class AppController {
  @Get()
  @Redirect('/docs')
  redirect() {}

  @Get('/health')
  health() {
    return {
      status: 'ok',
    };
  }
}
