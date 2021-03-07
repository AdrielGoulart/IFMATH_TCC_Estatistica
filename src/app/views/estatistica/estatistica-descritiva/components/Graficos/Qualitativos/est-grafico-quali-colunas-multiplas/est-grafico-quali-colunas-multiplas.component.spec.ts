import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQualiColunasMultiplasComponent } from './est-grafico-quali-colunas-multiplas.component';

describe('EstGraficoQualiColunasMultiplasComponent', () => {
  let component: EstGraficoQualiColunasMultiplasComponent;
  let fixture: ComponentFixture<EstGraficoQualiColunasMultiplasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQualiColunasMultiplasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQualiColunasMultiplasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
