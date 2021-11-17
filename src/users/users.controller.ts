import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const response = await this.usersService.login(loginUserDto);
    if (response) {
      return response;
    } else {
      return {
        message: 'Usuario não encontrado',
      };
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Put()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Delete()
  remove(@Body() { id }: DeleteUserDto) {
    return this.usersService.remove(+id);
  }
}
