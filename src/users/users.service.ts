import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
  private filePath = path.join(__dirname, '..', 'users.json'); // Define the path to the file

  // Helper method to read user data from the file
  private readUsersFromFile(): any[] {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data) || [];
    } catch (error) {
      return [];
    }
  }

  // Helper method to write user data to the file
  private writeUserToFile(user: any) {
    fs.writeFileSync(this.filePath, JSON.stringify([user]), 'utf8');
  }

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async addUser(username: string, password: string): Promise<User> {
    const newUser = this.usersRepository.create({ username, password });
    const savedUser = await this.usersRepository.save(newUser);
    this.writeUserToFile(savedUser); // Overwrite file with the new user
    return savedUser;
  }

  async deleteUser(id: number): Promise<boolean> {
    const result = await this.usersRepository.delete(id);
    return result.affected > 0;
  }

  async findUserById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }

  // Fetch the currently logged-in user
  getLoggedInUser(): any {
    const users = this.readUsersFromFile();
    if (users.length === 0) {
      throw new UnauthorizedException('No logged-in user');
    }
    return users[0];
    }
}
