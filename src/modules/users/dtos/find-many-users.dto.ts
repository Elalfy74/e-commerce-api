import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { PaginationAndFilterDto } from 'src/common';

export class FindManyUsersDto extends PaginationAndFilterDto {
  @Transform(({ obj }) => {
    if (obj.isAdmin === 'true') {
      return true;
    }
    if (obj.isAdmin === 'false') {
      return false;
    }
    return obj.isAdmin;
  })
  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;
}
