import { Injectable } from "@nestjs/common";
// import { User } from "./user.model";
import * as data from "./sample-data.json";

@Injectable()
export class UsersService {
  // private users: User[] = [];
  // Object.entries(data).forEach(user => {
  //   new_user = new User(users.length, user.username, user.position, user.password);
  // });

  async findOne(username: string): Promise<any> {
    return data.users.find((user) => user.username === username);
  }
  getUsers(): any {
    return data.users;
  }
  getUser(n: number): any {
    for (let i = 0; i <= data.users.length; i++) {
      if (data.users[i].id == n) {
        return data.users[i];
      }
    }
  }
  addUsers(name: string, position: string, password: string) {
    const newUser = {
      username: name,
      position: position,
      password: password,
      id: data.users.length + 1,
    };
    data.users.push(newUser);
  }
  editProfile(user: any, position: string, pass: string) {
    // let user = this.getUser(Number(id));
    if (position) {
      user.position = position;
    }
    if (pass) {
      user.password = pass;
    }
    for (let i = 0; i < data.users.length; i++) {
      if (data.users[i].id == user.id) {
        data.users[i] = user;
      }
    }
    const { password, ...result } = user;
    return result;
  }
}
