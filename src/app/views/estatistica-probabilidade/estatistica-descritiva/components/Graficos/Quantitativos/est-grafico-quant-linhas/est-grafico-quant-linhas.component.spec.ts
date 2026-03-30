import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQuantLinhasComponent } from './est-grafico-quant-linhas.component';

describe('EstGraficoQuantLinhasComponent', () => {
  let component: EstGraficoQuantLinhasComponent;
  let fixture: ComponentFixture<EstGraficoQuantLinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQuantLinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQuantLinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
