import { Controller, Post, Delete, Body, Param, UnauthorizedException } from '@nestjs/common';
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

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    const user = await this.usersService.findUserByUsername(username);
    if (user && user.password === password) {
      return { message: 'Login successful', user };
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
