import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstChartComponent } from './est-chart.component';

describe('EstChartComponent', () => {
  let component: EstChartComponent;
  let fixture: ComponentFixture<EstChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
