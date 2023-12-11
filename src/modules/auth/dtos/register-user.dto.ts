import { OmitType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';
import { CreateUserDto } from 'src/modules/users/dtos/create-user.dto';

export class RegisterUserDto extends OmitType(CreateUserDto, ['isAdmin', 'password']) {
  @IsString()
  @Transform(({ value }) => value?.trim())
  @Length(8, 255)
  password: string;
}
