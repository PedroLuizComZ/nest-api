import { Injectable } from '@nestjs/common';
import { AppServiceMessage } from './interfaces/App.Interfaces';

@Injectable()
export class AppService {
  getHello(): AppServiceMessage {
    return { message: 'API no ar' };
  }
}
