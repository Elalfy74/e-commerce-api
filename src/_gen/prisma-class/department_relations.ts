import { Category } from './category';
import { ApiProperty } from '@nestjs/swagger';

export class DepartmentRelations {
  @ApiProperty({ isArray: true, type: () => Category })
  categories: Category[];
}
