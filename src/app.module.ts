import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HemisModule } from './modules/hemis/hemis.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HemisModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available throughout the application
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
