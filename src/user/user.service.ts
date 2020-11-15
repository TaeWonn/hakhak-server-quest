import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInputType } from './user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _usersRepository: Repository<User>,
  ) {
    console.log('use this repository user', User);
  }

  async findAll() {
    return await this._usersRepository.find();
  }

  async createUser(user: Object) {
    return await this._usersRepository.save(user);
  }
}
