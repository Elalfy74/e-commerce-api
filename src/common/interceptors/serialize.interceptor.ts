import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { ClassConstructor, instanceToPlain, plainToInstance } from 'class-transformer';
import { map } from 'rxjs/operators';

export function Serialize<T>(dto: ClassConstructor<T>) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

@Injectable()
class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(
      map((data) => {
        return instanceToPlain(plainToInstance(this.dto, data), {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
