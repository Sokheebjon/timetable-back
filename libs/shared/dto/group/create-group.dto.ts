import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  course: number;

  @ApiProperty({ required: true })
  educationFormId: string;

  @ApiProperty({ required: true })
  educationDirectionId: string;

  @ApiProperty({ required: true })
  fileId: string;
}
