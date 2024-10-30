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
import { EducationFormService } from './education-form.service';

@Controller('education-form')
export class EducationFormController {
  constructor(private readonly educationFormService: EducationFormService) {}

  @Post()
  create(@Body() createEducationFormDto: Prisma.EducationFormCreateInput) {
    return this.educationFormService.create(createEducationFormDto);
  }

  @Get()
  findAll() {
    return this.educationFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationFormService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEducationFormDto: Prisma.EducationFormUpdateInput,
  ) {
    return this.educationFormService.update(id, updateEducationFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationFormService.remove(id);
  }
}
