import { Transform } from 'class-transformer';
import { IsString, IsUrl, Length } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @Length(2, 255)
  @Transform(({ value }) => value?.trim())
  name: string;

  @IsUrl()
  image: string;
}
