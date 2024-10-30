import { Test, TestingModule } from '@nestjs/testing';
import { EducationFormService } from './education-form.service';

describe('EducationFormService', () => {
  let service: EducationFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationFormService],
    }).compile();

    service = module.get<EducationFormService>(EducationFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
