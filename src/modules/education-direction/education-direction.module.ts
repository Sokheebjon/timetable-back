import { Module } from '@nestjs/common';
import { EducationDirectionController } from './education-direction.controller';
import { EducationDirectionService } from './education-direction.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EducationDirectionController],
  providers: [EducationDirectionService],
})
export class EducationDirectionModule {}
