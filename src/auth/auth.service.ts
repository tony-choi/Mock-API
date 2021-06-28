import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(id: number, pass: string): Promise<any> {
    const user = await this.usersService.getUser(id);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }
}