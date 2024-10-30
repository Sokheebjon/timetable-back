import { Module } from '@nestjs/common';
import { EducationFormController } from './education-form.controller';
import { EducationFormService } from './education-form.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EducationFormController],
  providers: [EducationFormService],
})
export class EducationFormModule {}
