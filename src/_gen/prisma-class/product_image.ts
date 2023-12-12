import { ApiProperty } from '@nestjs/swagger';

export class ProductImage {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  productId: string;

  @ApiProperty({ type: String })
  image: string;
}
