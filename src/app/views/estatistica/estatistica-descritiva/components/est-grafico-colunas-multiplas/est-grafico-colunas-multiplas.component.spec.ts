import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoColunasMultiplasComponent } from './est-grafico-colunas-multiplas.component';

describe('EstGraficoColunasMultiplasComponent', () => {
  let component: EstGraficoColunasMultiplasComponent;
  let fixture: ComponentFixture<EstGraficoColunasMultiplasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoColunasMultiplasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoColunasMultiplasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
