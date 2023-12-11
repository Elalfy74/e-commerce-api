import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { JwtPayloadInterface } from 'src/common';

@Injectable()
export class AuthResService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwt: JwtService,
  ) {}

  generateAuthRes(user: User): { accessToken: string; user: User } {
    const token = this.signAccessToken({
      userId: user.id,
      isAdmin: user.isAdmin,
    });

    return {
      accessToken: token,
      user,
    };
  }

  private signAccessToken(payload: JwtPayloadInterface): string {
    const secret = this.config.get<string>('ACCESS_TOKEN_SECRET')!;

    return this.jwt.sign(payload, { secret });
  }
}
