import { ApiProperty } from '@nestjs/swagger';

export class AudienceOccupancyDto {
  @ApiProperty({ required: true })
  date: number;

  @ApiProperty({ required: false })
  active?: string;

  @ApiProperty({ required: false })
  _structure_type?: string;

  @ApiProperty({ required: false })
  parent?: string;
}
