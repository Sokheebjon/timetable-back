import { Test, TestingModule } from '@nestjs/testing';
import { HemisController } from './hemis.controller';

describe('HemisController', () => {
  let controller: HemisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HemisController],
    }).compile();

    controller = module.get<HemisController>(HemisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
