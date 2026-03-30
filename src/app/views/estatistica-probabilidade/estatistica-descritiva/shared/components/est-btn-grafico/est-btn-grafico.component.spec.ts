import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstBtnGraficoComponent } from './est-btn-grafico.component';

describe('EstBtnGraficoComponent', () => {
  let component: EstBtnGraficoComponent;
  let fixture: ComponentFixture<EstBtnGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstBtnGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstBtnGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
