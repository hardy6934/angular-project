import { TestBed } from '@angular/core/testing';

import { UserChangedNotificationService } from './user-changed-notification.service';

describe('UserChangedNotificationService', () => {
  let service: UserChangedNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserChangedNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
