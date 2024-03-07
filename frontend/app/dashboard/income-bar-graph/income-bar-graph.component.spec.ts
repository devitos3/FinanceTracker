import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeBarGraphComponent } from './income-bar-graph.component';

describe('IncomeBarGraphComponent', () => {
  let component: IncomeBarGraphComponent;
  let fixture: ComponentFixture<IncomeBarGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeBarGraphComponent]
    });
    fixture = TestBed.createComponent(IncomeBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
