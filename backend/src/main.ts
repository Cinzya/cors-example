import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOrigin = process.env.CORS_ORIGIN;
  console.log('CORS_ORIGIN:', corsOrigin);

  app.enableCors({
    origin: (origin, callback) => {
      console.log('Incoming origin:', origin, '| Allowed:', corsOrigin);
      if (!origin || origin === corsOrigin) {
        callback(null, origin || true);
      } else {
        console.log('CORS blocked:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Server running on port ${port}`);
}
bootstrap();
