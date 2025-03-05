import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string = 'John Doe';

  constructor() { }

  setUsername(newName: string): void {
    this.username = newName;
  }

  getUsername(): string {
    return this.username;
  }

}
