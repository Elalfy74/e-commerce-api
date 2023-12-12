import { ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class AdminGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(_: any, user: any): TUser {
    if (!user.isAdmin) {
      throw new ForbiddenException('Access Denied');
    }

    return user;
  }
}
