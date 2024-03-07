import { TestBed } from '@angular/core/testing';

import { GoalSService } from './goal-s.service';

describe('GoalSService', () => {
  let service: GoalSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
