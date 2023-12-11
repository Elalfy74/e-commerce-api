import { IsBoolean, IsOptional } from 'class-validator';
import { PaginationAndFilterDto } from 'src/common';

export class FindManyUsersDto extends PaginationAndFilterDto {
  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;
}
