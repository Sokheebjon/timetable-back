import { Controller, Get, Param, Query } from '@nestjs/common';
import { HemisService } from './hemis.service';
import { GroupListParamsDto } from '../../../libs/shared/dto/hemis/group-list-params.dto';
import { ScheduleListParamsDto } from '../../../libs/shared/dto/hemis/schedule-list-params.dto';
import { FacultiesListDto } from '../../../libs/shared/dto/hemis/faculties-list.dto';
import { AudienceOccupancyDto } from '../../../libs/shared/dto/hemis/audience-occupancy.dto';
import { CourseListParamsDto } from '../../../libs/shared/dto/hemis/course-list.dto';

@Controller('hemis')
export class HemisController {
  constructor(private readonly hemisService: HemisService) {}

  @Get('groups-list')
  async getGroupsList(@Query() params: GroupListParamsDto) {
    return await this.hemisService.getGroupsList(params);
  }

  @Get('schedule-list')
  async getSchedulesList(@Query() params: ScheduleListParamsDto) {
    return await this.hemisService.getSchedulesList(params);
  }

  @Get('faculties-list')
  async getFacultiesList(@Query() params: FacultiesListDto) {
    return await this.hemisService.getFacultiesList(params);
  }

  @Get('audience-occupancy')
  async getAudienceOccupancy(@Query() params: AudienceOccupancyDto) {
    return await this.hemisService.getAudienceOccupancy(params);
  }

  @Get('university-buildings')
  async getUniversityBuildings(@Query() params: AudienceOccupancyDto) {
    return await this.hemisService.getUniversityBuildingsList(params);
  }

  @Get('courses-list')
  async getCoursesList(@Query() params: CourseListParamsDto) {
    return await this.hemisService.getCourseList(params);
  }

  @Get('lesson-pairs')
  async getLessonPairsList(@Query() params: ScheduleListParamsDto) {
    return await this.hemisService.getLessonPairsList(params);
  }
}
