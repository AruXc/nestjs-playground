import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * @param {string}  name - A name that you would like to say hello to
   * @returns {string} The hello statement
   */
  getHello(name: string): string {
    return `Hello World! ${name}`;
  }
}
