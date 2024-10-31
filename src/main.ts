import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('RTU Timetable API')
    .setDescription('Make timetable API endpoints')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      filter: true, // Enable search
      showRequestDuration: true, // Show request duration
    },
  });

  app.enableCors({
    origin: true, // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allows cookies or credentials
  });
  await app.listen(4455);
}
bootstrap();
