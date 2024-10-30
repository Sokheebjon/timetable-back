import { Test, TestingModule } from '@nestjs/testing';
import { EducationDirectionService } from './education-direction.service';

describe('EducationDirectionService', () => {
  let service: EducationDirectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationDirectionService],
    }).compile();

    service = module.get<EducationDirectionService>(EducationDirectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
