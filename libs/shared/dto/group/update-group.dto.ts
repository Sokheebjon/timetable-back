import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  course?: number;

  @ApiProperty({ required: false })
  educationFormId?: string;

  @ApiProperty({ required: false })
  educationDirectionId?: string;

  @ApiProperty({ required: false })
  fileId?: string;
}
