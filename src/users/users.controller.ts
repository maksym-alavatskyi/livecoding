import { Controller, Post, Delete, Body, Param, UnauthorizedException, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body('username') username: string, @Body('password') password: string) {
    return this.usersService.addUser(username, password);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(Number(id));
  }

  @Get('me')  // Endpoint to get currently logged-in user
  getLoggedInUser() {
    const user = this.usersService.getLoggedInUser();
    return user;
  }
}
