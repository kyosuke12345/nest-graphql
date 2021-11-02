import { CreateSampleGraphqlInput } from './create-sample-graphql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSampleGraphqlInput extends PartialType(
  CreateSampleGraphqlInput,
) {
  @Field(() => Int)
  id: number;
}
