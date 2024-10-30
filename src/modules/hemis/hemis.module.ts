import { Module } from '@nestjs/common';
import { HemisService } from './hemis.service';
import { HemisController } from './hemis.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [HemisService],
  controllers: [HemisController],
})
export class HemisModule {}
