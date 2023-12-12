import { Product } from './product';
import { ApiProperty } from '@nestjs/swagger';

export class ProductImageRelations {
  @ApiProperty({ type: () => Product })
  product: Product;
}
