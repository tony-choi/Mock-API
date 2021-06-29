import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): any {
    return this.usersService.getUsers();
  }
  @Get(":id")
  getUser(@Param('id') id: number): any {
      return this.usersService.getUser(id);
  }
  @Post()
  addUser(
    @Body('username') username: string,
    @Body('position') position: string,
    @Body('password') password: string
  ): any{
    this.usersService.addUsers(username, position, password);
  }
}
function id(number: any, id: any) {
    throw new Error('Function not implemented.');
}

