import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  private message: string = 'Initial message';

  constructor() { } 

  setMessage(newMessage: string): void {
    this.message = newMessage;
  }

  getMessage(): string {
    return this.message;
  }


}
