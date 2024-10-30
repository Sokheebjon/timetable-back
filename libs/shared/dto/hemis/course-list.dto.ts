import { ApiProperty } from '@nestjs/swagger';

export class CourseListParamsDto {
  @ApiProperty({ default: 1 })
  page: number;

  @ApiProperty({ default: 20 })
  limit: number;

  @ApiProperty({ required: false })
  _curriculum: string | number;

  @ApiProperty({ required: false })
  _education_year: number;
}

export class CourseListDto {
  level: {
    code: number;
    name: string;
  };
  codes: string[];
}
