import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoLinhasComponent } from './est-grafico-linhas.component';

describe('EstGraficoLinhasComponent', () => {
  let component: EstGraficoLinhasComponent;
  let fixture: ComponentFixture<EstGraficoLinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoLinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoLinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
