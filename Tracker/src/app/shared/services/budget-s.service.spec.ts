import { TestBed } from '@angular/core/testing';

import { BudgetSService } from './budget-s.service';

describe('BudgetSService', () => {
  let service: BudgetSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
