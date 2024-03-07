import { TestBed } from '@angular/core/testing';

import { IncomeSService } from './income-s.service';

describe('IncomeSService', () => {
  let service: IncomeSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
