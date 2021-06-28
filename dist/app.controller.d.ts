import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    login(req: any): Promise<any>;
    constructor(appService: AppService);
    getHello(): any;
}
