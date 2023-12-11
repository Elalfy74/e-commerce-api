import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

import { ITEMS_PER_PAGE_DEFAULT, PAGE_DEFAULT } from '../constants';

export class PaginationDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  page: number = PAGE_DEFAULT;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  itemsPerPage: number = ITEMS_PER_PAGE_DEFAULT;
}
