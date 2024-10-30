import { ApiProperty } from '@nestjs/swagger';
import { ScheduleListParamsDto } from './schedule-list-params.dto';

export class AudienceOccupancyDto extends ScheduleListParamsDto {
  @ApiProperty({ required: true })
  date: number;

  @ApiProperty({ required: false })
  active?: string;

  @ApiProperty({ required: false })
  _structure_type?: string;

  @ApiProperty({ required: false })
  parent?: string;
}
