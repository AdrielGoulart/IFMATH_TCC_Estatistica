import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQuantPoligFreqComponent } from './est-grafico-quant-polig-freq.component';

describe('EstGraficoQuantPoligonoFrequenciaComponent', () => {
  let component: EstGraficoQuantPoligFreqComponent;
  let fixture: ComponentFixture<EstGraficoQuantPoligFreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQuantPoligFreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQuantPoligFreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
