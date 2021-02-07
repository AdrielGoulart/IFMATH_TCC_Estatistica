import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQuantPoligonoFrequenciaComponent } from './est-grafico-quant-poligono-frequencia.component';

describe('EstGraficoQuantPoligonoFrequenciaComponent', () => {
  let component: EstGraficoQuantPoligonoFrequenciaComponent;
  let fixture: ComponentFixture<EstGraficoQuantPoligonoFrequenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQuantPoligonoFrequenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQuantPoligonoFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
