import { Test, TestingModule } from '@nestjs/testing';
import { EducationDirectionController } from './education-direction.controller';

describe('EducationDirectionController', () => {
  let controller: EducationDirectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationDirectionController],
    }).compile();

    controller = module.get<EducationDirectionController>(EducationDirectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
