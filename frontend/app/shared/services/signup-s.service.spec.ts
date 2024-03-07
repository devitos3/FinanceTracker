import { TestBed } from '@angular/core/testing';

import { SignupSService } from './signup-s.service';

describe('SignupSService', () => {
  let service: SignupSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
