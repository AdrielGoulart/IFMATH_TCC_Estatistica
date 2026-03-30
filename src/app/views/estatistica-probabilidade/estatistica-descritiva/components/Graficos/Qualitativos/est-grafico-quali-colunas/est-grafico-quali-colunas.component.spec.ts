import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQualiColunasComponent } from './est-grafico-quali-colunas.component';

describe('EstGraficoQualiColunasComponent', () => {
  let component: EstGraficoQualiColunasComponent;
  let fixture: ComponentFixture<EstGraficoQualiColunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQualiColunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQualiColunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
