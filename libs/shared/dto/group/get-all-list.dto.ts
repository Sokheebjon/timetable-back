import { ApiProperty } from '@nestjs/swagger';

export class GetAllListDto {
  @ApiProperty({ required: false })
  course: number;

  @ApiProperty({ required: false })
  educationFormId: string;

  @ApiProperty({ required: false })
  educationDirectionId: string;
}
