import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { User } from '../users/user.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressesRepository: Repository<Address>,
  ) {}

  async addAddress(user: User, street: string, city: string, state: string, postalCode: string, country: string): Promise<Address> {
    const newAddress = this.addressesRepository.create({
      user,
      street,
      city,
      state,
      postalCode,
      country,
    });
    return this.addressesRepository.save(newAddress);
  }

  async deleteAddress(id: number): Promise<boolean> {
    const result = await this.addressesRepository.delete(id);
    return result.affected > 0;
  }

  async fetchAddressesByUser(userId: number): Promise<Address[]> {
    return this.addressesRepository.find({ where: { user: { id: userId } } });
  }
}
