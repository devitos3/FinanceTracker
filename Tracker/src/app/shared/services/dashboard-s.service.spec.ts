import { TestBed } from '@angular/core/testing';

import { DashboardSService } from './dashboard-s.service';

describe('DashboardSService', () => {
  let service: DashboardSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
