import { IsUUID } from 'class-validator';

export class IdDto {
  @IsUUID(undefined, {
    message: 'Invalid id',
  })
  id: string;
}
