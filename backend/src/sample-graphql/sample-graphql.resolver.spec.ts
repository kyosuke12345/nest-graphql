import { Test, TestingModule } from '@nestjs/testing';
import { SampleGraphqlResolver } from './sample-graphql.resolver';
import { SampleGraphqlService } from './sample-graphql.service';

describe('SampleGraphqlResolver', () => {
  let resolver: SampleGraphqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleGraphqlResolver, SampleGraphqlService],
    }).compile();

    resolver = module.get<SampleGraphqlResolver>(SampleGraphqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
