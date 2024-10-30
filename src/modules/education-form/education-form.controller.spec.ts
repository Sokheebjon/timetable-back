import { Test, TestingModule } from '@nestjs/testing';
import { EducationFormController } from './education-form.controller';

describe('EducationFormController', () => {
  let controller: EducationFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationFormController],
    }).compile();

    controller = module.get<EducationFormController>(EducationFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
