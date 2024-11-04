import { ApiProperty } from '@nestjs/swagger';

export class SpecialityListParamsDto {
  @ApiProperty({ default: 1 })
  page: number;

  @ApiProperty({ default: 20 })
  limit: number;

  @ApiProperty({ required: false })
  _department: string;

  @ApiProperty({ required: false })
  _locality_type: string;

  @ApiProperty({ required: false })
  _education_type: string;
}
