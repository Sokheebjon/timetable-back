import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EducationFormService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEducationFormDto: Prisma.EducationFormCreateInput) {
    return this.databaseService.educationForm.create({
      data: createEducationFormDto,
    });
  }

  async findAll() {
    return this.databaseService.educationForm.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.educationForm.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateEducationFormDto: Prisma.EducationFormUpdateInput,
  ) {
    return this.databaseService.educationForm.update({
      where: { id },
      data: updateEducationFormDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.educationForm.delete({
      where: { id },
    });
  }
}
