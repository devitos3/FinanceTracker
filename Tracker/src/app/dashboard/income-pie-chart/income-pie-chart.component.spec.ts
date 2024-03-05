import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomePieChartComponent } from './income-pie-chart.component';

describe('IncomePieChartComponent', () => {
  let component: IncomePieChartComponent;
  let fixture: ComponentFixture<IncomePieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomePieChartComponent]
    });
    fixture = TestBed.createComponent(IncomePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
