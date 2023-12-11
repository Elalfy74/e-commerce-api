import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { PaginationAndFilterDto } from 'src/common';

export class FindManyUsersDto extends PaginationAndFilterDto {
  @Transform(({ obj }) => obj.isAdmin === 'true')
  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;
}
