import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQuantHistogramaComponent } from './est-grafico-quant-histograma.component';

describe('EstGraficoQuantHistogramaComponent', () => {
  let component: EstGraficoQuantHistogramaComponent;
  let fixture: ComponentFixture<EstGraficoQuantHistogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQuantHistogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQuantHistogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
