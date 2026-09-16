import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body () user:User): Promise<User>  {
    return this.usersService.createUser(user);
  }
 
}