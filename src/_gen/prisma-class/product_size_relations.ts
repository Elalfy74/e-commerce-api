import { Product } from './product';
import { ApiProperty } from '@nestjs/swagger';

export class ProductSizeRelations {
  @ApiProperty({ type: () => Product })
  product: Product;
}
