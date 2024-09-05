import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { UsersService } from '../users/users.service';

@Controller('addresses')
export class AddressesController {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly usersService: UsersService,
  ) {}

  @Post('create/:userId')
  async createAddress(
    @Param('userId') userId: number,
    @Body('street') street: string,
    @Body('city') city: string,
    @Body('state') state: string,
    @Body('postalCode') postalCode: string,
    @Body('country') country: string,
  ) {
    const user = await this.usersService.findUserById(userId);
    return this.addressesService.addAddress(user, street, city, state, postalCode, country);
  }

  @Delete('delete/:id')
  async deleteAddress(@Param('id') id: number) {
    return this.addressesService.deleteAddress(id);
  }

  @Get('user/:userId')
  async getAddressesByUser(@Param('userId') userId: number) {
    return this.addressesService.fetchAddressesByUser(userId);
  }
}
