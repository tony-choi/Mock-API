import { UsersService } from '../users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(id: number, pass: string): Promise<any>;
}
