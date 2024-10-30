import { ApiProperty } from '@nestjs/swagger';

export class GroupListParamsDto {
  @ApiProperty({ default: 1 })
  page: number;

  @ApiProperty({ default: 20 })
  limit: number;

  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  _department: string;

  @ApiProperty({ required: false })
  _curriculum: string;

  @ApiProperty({ required: false })
  _specialty: string;

  @ApiProperty({ required: false })
  _education_type: string;

  @ApiProperty({ required: false })
  _education_form: string;
}
