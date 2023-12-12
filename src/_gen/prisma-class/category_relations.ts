import { Department } from './department';
import { Product } from './product';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryRelations {
  @ApiProperty({ type: () => Department })
  department: Department;

  @ApiProperty({ isArray: true, type: () => Product })
  products: Product[];
}
