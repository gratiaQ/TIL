import { Users } from '../../Entities/Users';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  getUsers() {}

  async join(email: string, nickname: string, password: string) {
    if (!email) {
      throw new HttpException('not email', 400);
      return;
    }

    if (!nickname) {
      throw new HttpException('not nickname', 400);
      return;
    }

    if (!password) {
      throw new HttpException('not password', 400);
      return;
    }

    const user = this.usersRepository.findOne({ where: { email: email } });
    if (user) {
      // error message
      return;
    }
    const hashedPassword = await bcrypt.hashed(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
