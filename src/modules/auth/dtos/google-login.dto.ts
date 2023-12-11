import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class GoogleLoginDto {
  @IsString()
  @MinLength(8)
  @Transform(({ value }) => value?.trim())
  accessToken: string;
}
