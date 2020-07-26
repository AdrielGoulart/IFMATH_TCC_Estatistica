import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoColunasComponent } from './est-grafico-colunas.component';

describe('EstGraficoColunasComponent', () => {
  let component: EstGraficoColunasComponent;
  let fixture: ComponentFixture<EstGraficoColunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoColunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoColunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
