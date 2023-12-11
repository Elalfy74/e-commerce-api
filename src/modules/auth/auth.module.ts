import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/modules/users/users.module';

import { AuthResService } from './auth-res.service';
import { CredentialsController } from './credentials/credentials.controller';
import { CredentialsService } from './credentials/credentials.service';
import { GoogleAuthController } from './google/google-auth.controller';
import { GoogleAuthService } from './google/google-auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, JwtModule.register({})],
  controllers: [CredentialsController, GoogleAuthController],
  providers: [CredentialsService, GoogleAuthService, AuthResService, JwtStrategy],
})
export class AuthModule {}
