import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestUser } from 'src/database/entities/testUser.entity';
import { Repository } from 'typeorm';
import { CreateSampleGraphqlInput } from './dto/create-sample-graphql.input';
import { UpdateSampleGraphqlInput } from './dto/update-sample-graphql.input';

@Injectable()
export class SampleGraphqlService {
  constructor(
    @InjectRepository(TestUser)
    private readonly userRepository: Repository<TestUser>,
  ) {}

  async create(
    createSampleGraphqlInput: CreateSampleGraphqlInput,
  ): Promise<TestUser> {
    const newUser = this.userRepository.create(createSampleGraphqlInput);
    return await this.userRepository.save(newUser);
  }

  async findAll(): Promise<Array<TestUser>> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<TestUser> {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async update(
    id: number,
    updateSampleGraphqlInput: UpdateSampleGraphqlInput,
  ): Promise<TestUser> {
    const user = await this.userRepository.preload({
      id: id,
      ...updateSampleGraphqlInput,
    });
    if (!user) {
      throw new NotFoundException();
    }
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<TestUser> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
    return { ...user, id: id };
  }
}
