import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 255)
  @Transform(({ value }) => value?.trim())
  firstName: string;

  @IsString()
  @IsOptional()
  @Length(2, 255)
  @Transform(({ value }) => value?.trim())
  lastName?: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  @Length(8, 255)
  password?: string;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;
}
