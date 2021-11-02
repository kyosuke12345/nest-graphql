import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSampleGraphqlInput {
  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'firstName' })
  firstName: string;

  @Field(() => String, { description: 'lastName' })
  lastName: string;

  @Field(() => String, { description: 'password' })
  password: string;
}
