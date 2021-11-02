import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SampleGraphqlService } from './sample-graphql.service';
import { CreateSampleGraphqlInput } from './dto/create-sample-graphql.input';
import { UpdateSampleGraphqlInput } from './dto/update-sample-graphql.input';
import { TestUser } from 'src/database/entities/testUser.entity';

@Resolver(() => TestUser)
export class SampleGraphqlResolver {
  constructor(private readonly sampleGraphqlService: SampleGraphqlService) {}

  @Mutation(() => TestUser)
  createSampleGraphql(
    @Args('createSampleGraphqlInput')
    createSampleGraphqlInput: CreateSampleGraphqlInput,
  ) {
    return this.sampleGraphqlService.create(createSampleGraphqlInput);
  }

  @Query(() => [TestUser], { name: 'sampleGraphqls' })
  findAll() {
    return this.sampleGraphqlService.findAll();
  }

  @Query(() => TestUser, { name: 'sampleGraphql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sampleGraphqlService.findOne(id);
  }

  @Mutation(() => TestUser)
  updateSampleGraphql(
    @Args('updateSampleGraphqlInput')
    updateSampleGraphqlInput: UpdateSampleGraphqlInput,
  ) {
    return this.sampleGraphqlService.update(
      updateSampleGraphqlInput.id,
      updateSampleGraphqlInput,
    );
  }

  @Mutation(() => TestUser)
  removeSampleGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.sampleGraphqlService.remove(id);
  }
}
