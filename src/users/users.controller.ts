import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { get } from 'http';

@Controller('users')
export class UsersController {

  constructor(
    private usersService: UsersService
  ) {}

  @Get()
  getAllUsers(): any[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number | string): any[] {
    return this.usersService.findUserById(Number(id));
  }

  @Post()
  createUser(@Body() user:any): any {
    return this.usersService.createUser(user);
  }
}
