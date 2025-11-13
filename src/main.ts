import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimingInterceptor } from './common/interceptor/timing.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TimingInterceptor());
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true,
    transform: true
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
