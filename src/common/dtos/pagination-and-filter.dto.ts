import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { PaginationDto } from './pagination.dto';

export class PaginationAndFilterDto extends PaginationDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  querySearch?: string;
}
