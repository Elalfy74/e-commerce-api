import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: String })
  specifications: string;

  @ApiProperty({ type: Number })
  price: number;

  @ApiProperty({ type: Number })
  discountPrice: number;

  @ApiProperty({ type: String })
  categoryId: string;
}
