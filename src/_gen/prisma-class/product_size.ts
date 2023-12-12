import { ApiProperty } from '@nestjs/swagger';

export class ProductSize {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  productId: string;

  @ApiProperty({ type: String })
  size: string;

  @ApiProperty({ type: Number })
  quantity: number;
}
