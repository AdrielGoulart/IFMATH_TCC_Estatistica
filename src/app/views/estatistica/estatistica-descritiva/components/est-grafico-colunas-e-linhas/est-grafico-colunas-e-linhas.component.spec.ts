import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoColunasELinhasComponent } from './est-grafico-colunas-e-linhas.component';

describe('EstGraficoColunasELinhasComponent', () => {
  let component: EstGraficoColunasELinhasComponent;
  let fixture: ComponentFixture<EstGraficoColunasELinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoColunasELinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoColunasELinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
