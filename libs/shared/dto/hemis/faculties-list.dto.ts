import { ApiProperty } from '@nestjs/swagger';

export class FacultiesListDto {
  @ApiProperty({ default: 1 })
  page: number;

  @ApiProperty({ default: 20 })
  limit: number;

  @ApiProperty({ required: false })
  active: string;

  @ApiProperty({ required: false })
  _structure_type: string;

  @ApiProperty({ required: false })
  parent: string;
}
