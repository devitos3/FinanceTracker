import { TestBed } from '@angular/core/testing';

import { NotesSService } from './notes-s.service';

describe('NotesSService', () => {
  let service: NotesSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
