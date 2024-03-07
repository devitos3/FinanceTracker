import { TestBed } from '@angular/core/testing';

import { BillNotificationService } from './bill-notification.service';

describe('BillNotificationService', () => {
  let service: BillNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
