import { Injectable } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserChangedNotificationService {

  constructor(private userService: UserService) {}

  sendNotification(): void {
    const username = this.userService.getUsername();
    console.log(`Notification: Hello, ${username}! Your information was updated.`);
  }

}
