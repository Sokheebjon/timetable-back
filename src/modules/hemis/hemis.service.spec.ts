import { Test, TestingModule } from '@nestjs/testing';
import { HemisService } from './hemis.service';

describe('HemisService', () => {
  let service: HemisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HemisService],
    }).compile();

    service = module.get<HemisService>(HemisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
