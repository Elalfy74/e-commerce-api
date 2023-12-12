import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: String })
  firstName: string;

  @ApiPropertyOptional({ type: String })
  lastName?: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiPropertyOptional({ type: String })
  password?: string;

  @ApiPropertyOptional({ type: String })
  image?: string;

  @ApiProperty({ type: Boolean })
  isAdmin: boolean;
}
