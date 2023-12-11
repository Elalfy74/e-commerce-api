import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AuthUserDto {
  @Expose() id: string;

  @ApiHideProperty() firstName: string;
  @ApiHideProperty() lastName: string;

  @Expose()
  @ApiProperty({ type: String })
  get name() {
    return this.firstName + ' ' + this.lastName;
  }
  @Expose() email: string;
  @Expose() image: string | null;
  @Expose() isAdmin: boolean;
}
