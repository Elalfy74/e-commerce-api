import { Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePasswords } from 'src/common';
import { UsersService } from 'src/modules/users/users.service';

import { AuthResService } from '../auth-res.service';
import { LoginUserDto, RegisterUserDto } from '../dtos';

@Injectable()
export class CredentialsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly authResService: AuthResService,
  ) {}

  async loginUser(dto: LoginUserDto) {
    const user = await this.usersService.findOne({
      email: dto.email,
    });

    // If user doesn't exist, throw an error
    // If there is no password, throw an error (social user)
    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid Email Or Password');
    }

    // Compare the passwords
    const isEquals = await comparePasswords(dto.password, user.password);
    if (!isEquals) {
      throw new UnauthorizedException('Invalid Email Or Password');
    }

    return this.authResService.generateAuthRes(user);
  }

  async registerUser(dto: RegisterUserDto) {
    const user = await this.usersService.create(dto);

    return this.authResService.generateAuthRes(user);
  }
}
