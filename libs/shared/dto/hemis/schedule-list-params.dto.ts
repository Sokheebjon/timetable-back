import { ApiProperty } from '@nestjs/swagger';

export class ScheduleListParamsDto {
  @ApiProperty({ default: 1 })
  page?: number;

  @ApiProperty({ default: 20 })
  limit?: number;

  @ApiProperty({ required: false })
  _faculty?: string;

  @ApiProperty({ required: false })
  _group?: string;

  @ApiProperty({ required: false })
  _week?: string;

  @ApiProperty({ required: false })
  _semester?: string;

  @ApiProperty({ required: false })
  _education_year?: string;

  @ApiProperty({ required: false })
  _subject?: string;

  @ApiProperty({ required: false })
  _employee?: string;

  @ApiProperty({ required: false })
  _auditorium?: string;

  @ApiProperty({ required: false })
  _lesson_pair?: string;

  @ApiProperty({ required: false })
  lesson_date_from?: number;

  @ApiProperty({ required: false })
  lesson_date_to?: number;
}
