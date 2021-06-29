import { Injectable } from '@nestjs/common';
import * as data from './sample-data.json';


@Injectable()
export class UsersService {
  async findOne(username: string): Promise<any> {
    return data.users.find(user => user.username === username);
  }
    getUsers(): any {
        return data.users;
      }
      getUser(n: number): any {
        for(let i = 0; i <= data.users.length; i++){
          if (data.users[i].id == n){
            return data.users[i];
          }
        }
    
      }
      addUsers(name: string, position: string, password: string) {
        const newUser = {
          "username" : name,
          "position" : position,
          "password" : password,
          "id" : data.users.length + 1
        }
        data.users.push(newUser)
      }

}
