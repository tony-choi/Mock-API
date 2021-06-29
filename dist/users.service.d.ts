export declare class UsersService {
    findOne(username: string): Promise<any>;
    getUsers(): any;
    getUser(n: number): any;
    addUsers(name: string, position: string, password: string): void;
}
