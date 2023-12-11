import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';
import { setupApp } from './setup-app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { port } = setupApp(app);

  await app.listen(port);
}

bootstrap();
