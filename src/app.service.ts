import { Injectable } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("QueryFailedError", QueryFailedError);
    return 'Hello World!';
  }
}
