import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseBarGraphComponent } from './expense-bar-graph.component';

describe('ExpenseBarGraphComponent', () => {
  let component: ExpenseBarGraphComponent;
  let fixture: ComponentFixture<ExpenseBarGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseBarGraphComponent]
    });
    fixture = TestBed.createComponent(ExpenseBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
