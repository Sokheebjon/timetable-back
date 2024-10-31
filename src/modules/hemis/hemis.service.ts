import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { handleAsyncOperation } from '../../hoc';
import { firstValueFrom, timeout } from 'rxjs';
import { GroupListParamsDto } from '../../../libs/shared/dto/hemis/group-list-params.dto';
import { FacultiesListDto } from '../../../libs/shared/dto/hemis/faculties-list.dto';
import { AudienceOccupancyDto } from '../../../libs/shared/dto/hemis/audience-occupancy.dto';
import { ScheduleListParamsDto } from '../../../libs/shared/dto/hemis/schedule-list-params.dto';
import {
  CourseListDto,
  CourseListParamsDto,
} from '../../../libs/shared/dto/hemis/course-list.dto';

@Injectable()
export class HemisService {
  constructor(
    private http: HttpService,
    private configService: ConfigService,
  ) {}

  private token = this.configService.get('HEMIS_TOKEN');
  private hemisUrl = this.configService.get('HEMIS_URL');

  async getGroupsList(params: GroupListParamsDto) {
    try {
      const response = await handleAsyncOperation(
        firstValueFrom(
          this.http
            .get(`${this.hemisUrl}/data/group-list`, {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
              params,
            })
            .pipe(timeout(5000)),
        ),
      );

      if (response.data) {
        return { success: true, data: response.data };
      } else {
        return { success: false, data: {} };
      }
    } catch (error) {
      console.error('Failed to get personal info:', error);
    }
  }

  async getSchedulesList(params: ScheduleListParamsDto) {
    try {
      const totalData = [];
      const firstResponse = await handleAsyncOperation(
        firstValueFrom(
          this.http
            .get(`${this.hemisUrl}/data/schedule-list`, {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
              params,
            })
            .pipe(timeout(5000)),
        ),
      );

      totalData.push(...firstResponse.data.data.items);

      // const pageSize = firstResponse.data.data.pagination?.pageCount;

      // for (let i = 2; i <= pageSize; i++) {
      //   const response = await handleAsyncOperation(
      //     firstValueFrom(
      //       this.http
      //         .get(`${this.hemisUrl}/data/schedule-list`, {
      //           headers: {
      //             Authorization: `Bearer ${this.token}`,
      //           },
      //           params,
      //         })
      //         .pipe(timeout(5000)),
      //     ),
      //   );
      //   totalData.push(...response.data.data.items);
      // }

      const scheduleList = totalData.sort(
        (a: any, b: any) => a.lesson_date - b.lesson_date,
      );

      if (firstResponse.data) {
        return { success: true, data: scheduleList };
      } else {
        return { success: false, data: [] };
      }
    } catch (error) {
      console.error('Failed to get personal info:', error);
    }
  }

  async getFacultiesList(params: FacultiesListDto) {
    try {
      const response = await handleAsyncOperation(
        firstValueFrom(
          this.http
            .get(`${this.hemisUrl}/data/department-list?_structure_type=11`, {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
              params,
            })
            .pipe(timeout(5000)),
        ),
      );

      if (response.data) {
        return { success: true, data: response.data };
      } else {
        return { success: false, data: {} };
      }
    } catch (error) {
      console.error('Failed to get personal info:', error);
    }
  }

  async getAudienceOccupancy(params: AudienceOccupancyDto) {
    try {
      const audienceList = await handleAsyncOperation(
        firstValueFrom(
          this.http
            .get(`${this.hemisUrl}/data/auditorium-list`, {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
              params: { ...params },
            })
            .pipe(timeout(5000)),
        ),
      );

      const scheduleList = await this.getSchedulesList(params);

      const occupancy = audienceList.data.data.items.map(
        (auditory: { code: number }) => {
          // Filter lessons that match the current auditorium code
          const occupiedLessons = scheduleList.data.filter(
            (lesson: { auditorium: { code: number } }) =>
              lesson.auditorium.code === auditory.code,
          );

          return {
            ...auditory,
            occupancyCount: occupiedLessons.length, // Count of lessons occupying the auditorium
            occupiedLessons, // List of lessons for detailed inspection if needed
          };
        },
      );

      if (audienceList.data) {
        return {
          success: true,
          data: occupancy,
        };
      } else {
        return { success: false, data: {} };
      }
    } catch (error) {
      console.error('Failed to get personal info:', error);
    }
  }

  async getUniversityBuildingsList(params: AudienceOccupancyDto) {
    try {
      const response = await handleAsyncOperation(
        firstValueFrom(
          this.http
            .get(`${this.hemisUrl}/data/auditorium-list`, {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
              params: { ...params, limit: 200 },
            })
            .pipe(timeout(5000)),
        ),
      );

      const buildings = response.data.data.items.reduce(
        (acc: any, item: any) => {
          const hasBuildingIncluded = acc.some(
            (building: { id: string | number }) =>
              building.id === item.building.id,
          );
          if (hasBuildingIncluded) {
            return acc;
          } else {
            acc.push({ ...item.building });
          }
          return acc;
        },
        [],
      );

      if (response.data) {
        return { success: true, data: buildings };
      } else {
        return { success: false, data: {} };
      }
    } catch (error) {
      console.error('Failed to get personal info:', error);
    }
  }

  async getCourseList(params: CourseListParamsDto) {
    const currentYear = new Date().getFullYear();
    try {
      const response = await handleAsyncOperation(
        firstValueFrom(
          this.http
            .get(`${this.hemisUrl}/data/semester-list`, {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
              params: { ...params, _education_year: currentYear, limit: 200 },
            })
            .pipe(timeout(5000)),
        ),
      );

      const usedCodes = new Set();

      const coursesList: CourseListDto[] = Object.values(
        response.data.data.items.reduce((acc, item) => {
          const levelName = item.level.name;

          if (!acc[levelName]) {
            acc[levelName] = {
              level: item.level,
              codes: [],
            };
          }

          // Only add code if it hasn't been used before
          if (!usedCodes.has(item.code)) {
            acc[levelName].codes.push(item.code);
            usedCodes.add(item.code); // Mark code as used
          }

          return acc;
        }, {}),
      );

      const sortedCoursesList = coursesList.sort(
        (a, b) => a.level.code - b.level.code,
      );

      if (response.data) {
        return { success: true, data: sortedCoursesList };
      } else {
        return { success: false, data: {} };
      }
    } catch (error) {
      console.error('Failed to get personal info:', error);
    }
  }

  async getLessonPairsList(params: ScheduleListParamsDto) {
    try {
      const scheduleList = await this.getSchedulesList(params);

      const lessonPairsList = scheduleList.data.reduce(
        (acc: any, item: any) => {
          const hasPairIncluded = acc.some(
            (pair: { code: string | number }) =>
              pair?.code === item.lessonPair?.code,
          );
          if (hasPairIncluded) {
            return acc;
          } else {
            acc.push({ ...item.lessonPair });
          }
          return acc;
        },
        [],
      );
      const sortedLessonPairsList = lessonPairsList.sort(
        (a: { code: number }, b: { code: number }) => a.code - b.code,
      );

      if (scheduleList.data) {
        return {
          success: true,
          data: sortedLessonPairsList,
        };
      } else {
        return { success: false, data: {} };
      }
    } catch (error) {
      console.error('Failed to get personal info:', error);
    }
  }
}
