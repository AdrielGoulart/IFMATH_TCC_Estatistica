import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQuantColunasELinhasComponent } from './est-grafico-quant-colunas-e-linhas.component';

describe('EstGraficoQuantColunasELinhasComponent', () => {
  let component: EstGraficoQuantColunasELinhasComponent;
  let fixture: ComponentFixture<EstGraficoQuantColunasELinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQuantColunasELinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQuantColunasELinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
