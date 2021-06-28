import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): any;
    getUser(id: number): any;
    addUser(name: string, position: string, password: string): any;
}
