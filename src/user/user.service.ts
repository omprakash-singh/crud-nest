import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public user: User[] = [];

  getAllUser(): any {
    return this.user;
  }

  addUser(user: User): any {
    this.user.push(user);
    return this.user;
  }

  deleteUser(email: string) {
    const user = this.user.filter((item) => item.email === email);
    if (!user.length) {
      throw new NotFoundException('User Not found');
    }
    this.user = user;
    return this.user;
  }

  getUserByEmail(email: string) {
    const user = this.user.filter((item) => item.email === email);
    if (!user.length) {
      throw new NotFoundException('Not found user');
    }
    return user;
  }
}
