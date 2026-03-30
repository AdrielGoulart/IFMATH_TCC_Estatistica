import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoDefinicaoComponent } from './est-grafico-definicao.component';

describe('EstGraficoDefinicaoComponent', () => {
  let component: EstGraficoDefinicaoComponent;
  let fixture: ComponentFixture<EstGraficoDefinicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoDefinicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoDefinicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
