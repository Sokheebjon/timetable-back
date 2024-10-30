import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EducationDirectionService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(
    createEducationDirectionDto: Prisma.EducationDirectionCreateInput,
  ) {
    return this.databaseService.educationDirection.create({
      data: createEducationDirectionDto,
    });
  }

  async findAll() {
    return this.databaseService.educationDirection.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.educationDirection.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateEducationDirectionDto: Prisma.EducationDirectionUpdateInput,
  ) {
    return this.databaseService.educationDirection.update({
      where: { id },
      data: updateEducationDirectionDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.educationDirection.delete({
      where: { id },
    });
  }
}
