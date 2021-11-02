import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfModule } from './conf/conf.module';
import { DatabaseConfig } from './conf/database.config';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';
import { GraphQLModule } from '@nestjs/graphql';
import { SampleGraphqlModule } from './sample-graphql/sample-graphql.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schema.ggl',
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfModule],
      useExisting: DatabaseConfig,
    }),
    CustomLoggerModule,
    SampleGraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
