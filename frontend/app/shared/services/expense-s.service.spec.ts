import { TestBed } from '@angular/core/testing';

import { ExpenseSService } from './expense-s.service';

describe('ExpenseSService', () => {
  let service: ExpenseSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
