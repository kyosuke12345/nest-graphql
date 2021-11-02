import { Module } from '@nestjs/common';
import { SampleGraphqlService } from './sample-graphql.service';
import { SampleGraphqlResolver } from './sample-graphql.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestUser } from 'src/database/entities/testUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestUser])],
  providers: [SampleGraphqlResolver, SampleGraphqlService],
})
export class SampleGraphqlModule {}
