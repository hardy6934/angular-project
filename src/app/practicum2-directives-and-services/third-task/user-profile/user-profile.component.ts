import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user-service/user.service';
import { UserChangedNotificationService } from '../../../core/services/user-changed-notification-service/user-changed-notification.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  
  constructor(
    private userService: UserService,
    private notificationService: UserChangedNotificationService
  ) {}

  newUsername: string = '';

  updateUsername(): void {
    this.userService.setUsername(this.newUsername);
    this.notificationService.sendNotification();
  }

}
