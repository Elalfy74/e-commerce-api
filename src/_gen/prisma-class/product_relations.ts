import { Category } from './category';
import { ProductImage } from './product_image';
import { ProductSize } from './product_size';
import { ApiProperty } from '@nestjs/swagger';

export class ProductRelations {
  @ApiProperty({ type: () => Category })
  category: Category;

  @ApiProperty({ isArray: true, type: () => ProductImage })
  images: ProductImage[];

  @ApiProperty({ isArray: true, type: () => ProductSize })
  sizes: ProductSize[];
}
