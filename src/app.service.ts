import { Injectable } from '@nestjs/common';
import * as data from './sample-data.json';

@Injectable()
export class AppService {
  getHello(): any {
    return "It's working!";
  }
  
}
