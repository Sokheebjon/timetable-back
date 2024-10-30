import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { CreateGroupDto } from '../../../libs/shared/dto/group/create-group.dto';
import { UpdateGroupDto } from '../../../libs/shared/dto/group/update-group.dto';

@Injectable()
export class GroupService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createGroupDto: CreateGroupDto) {
    return this.databaseService.group.create({
      data: createGroupDto,
    });
  }

  async findAll({ course }) {
    return this.databaseService.group.findMany({
      include: {
        educationForm: true,
        educationDirection: true,
        file: true,
      },
      where: {
        course,
      },
    });
  }

  async findOne(id: string) {
    return this.databaseService.group.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    return this.databaseService.group.update({
      where: { id },
      data: updateGroupDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.group.delete({
      where: { id },
    });
  }
}
