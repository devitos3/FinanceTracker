import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackIncomeComponent } from './track-income.component';

describe('TrackIncomeComponent', () => {
  let component: TrackIncomeComponent;
  let fixture: ComponentFixture<TrackIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackIncomeComponent]
    });
    fixture = TestBed.createComponent(TrackIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
