import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationFormModule } from './modules/education-form/education-form.module';
import { DatabaseModule } from './modules/database/database.module';
import { EducationDirectionModule } from './modules/education-direction/education-direction.module';
import { GroupModule } from './modules/group/group.module';
import { FileModule } from './modules/file/file.module';
import { HemisModule } from './modules/hemis/hemis.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EducationFormModule,
    DatabaseModule,
    EducationDirectionModule,
    GroupModule,
    FileModule,
    HemisModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available throughout the application
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
