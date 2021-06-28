export declare class UsersService {
    findOne(id: number): Promise<any>;
    getUsers(): any;
    getUser(n: number): any;
    addUsers(name: string, position: string, password: string): void;
}
