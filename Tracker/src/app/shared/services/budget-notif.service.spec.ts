import { TestBed } from '@angular/core/testing';

import { BudgetNotifService } from './budget-notif.service';

describe('BudgetNotifService', () => {
  let service: BudgetNotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetNotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
