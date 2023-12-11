import { Expose, Type } from 'class-transformer';

import { AuthUserDto } from './auth-user.dto';

export class AuthResDto {
  @Expose() accessToken: string;

  @Expose()
  @Type(() => AuthUserDto)
  user: AuthUserDto;
}
