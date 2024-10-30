import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { ApiTags } from '@nestjs/swagger';
import { GetAllListDto } from '../../../libs/shared/dto/group/get-all-list.dto';
import { CreateGroupDto } from '../../../libs/shared/dto/group/create-group.dto';
import { UpdateGroupDto } from '../../../libs/shared/dto/group/update-group.dto';

@ApiTags('Group api collection')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  async findAll(@Query() groupQuery: GetAllListDto) {
    return this.groupService.findAll(groupQuery);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.groupService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupService.update(id, updateGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.groupService.remove(id);
  }
}
