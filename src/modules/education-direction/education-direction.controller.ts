import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EducationDirectionService } from './education-direction.service';

@Controller('education-direction')
export class EducationDirectionController {
  constructor(
    private readonly educationDirectionService: EducationDirectionService,
  ) {}

  @Post()
  create(
    @Body() createEducationDirectionDto: Prisma.EducationDirectionCreateInput,
  ) {
    return this.educationDirectionService.create(createEducationDirectionDto);
  }

  @Get()
  findAll() {
    return this.educationDirectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationDirectionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEducationDirectionDto: Prisma.EducationDirectionUpdateInput,
  ) {
    return this.educationDirectionService.update(
      id,
      updateEducationDirectionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationDirectionService.remove(id);
  }
}
