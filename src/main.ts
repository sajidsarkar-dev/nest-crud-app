import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimingInterceptor } from './common/interceptor/timing.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TimingInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
