import { Test, TestingModule } from '@nestjs/testing';
import { SampleGraphqlService } from './sample-graphql.service';

describe('SampleGraphqlService', () => {
  let service: SampleGraphqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleGraphqlService],
    }).compile();

    service = module.get<SampleGraphqlService>(SampleGraphqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
