import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userProviders: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.userProviders.create(createUserDto);
    return this.userProviders.save(user);
  }

  login({ email, password }: LoginUserDto) {
    return this.userProviders.findOne({ email, password });
  }

  async findAll(): Promise<User[]> {
    return this.userProviders.find();
  }

  update(updateUserDto: UpdateUserDto) {
    return this.userProviders.save(updateUserDto);
  }

  remove(id: number) {
    return this.userProviders.delete(id);
  }
}
