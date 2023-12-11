import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UsersService } from '../../users/users.service';
import { AuthResService } from '../auth-res.service';
import { GoogleLoginDto } from '../dtos';

@Injectable()
export class GoogleAuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly authResService: AuthResService,
  ) {}

  async login(dto: GoogleLoginDto) {
    const email = await this.verifyGoogleToken(dto.accessToken);

    // Check if the user exists
    const user = await this.usersService.findOne({ email });
    if (user) {
      return this.authResService.generateAuthRes(user);
    }

    // Take the first part of the email
    const newUserFirstName = email.split('@')[0];
    const newUser = await this.usersService.create({
      firstName: newUserFirstName,
      email,
    });

    return this.authResService.generateAuthRes(newUser);
  }
  private async verifyGoogleToken(token: string): Promise<string> {
    const GOOGLE_URL = 'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=';

    try {
      const res = await fetch(`${GOOGLE_URL}${token}`);
      const data = await res.json();

      return data.email as string;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
