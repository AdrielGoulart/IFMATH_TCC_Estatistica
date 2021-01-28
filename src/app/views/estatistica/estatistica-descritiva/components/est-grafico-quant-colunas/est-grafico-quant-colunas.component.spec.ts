import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQuantColunasComponent } from './est-grafico-quant-colunas.component';

describe('EstGraficoQuantColunasComponent', () => {
  let component: EstGraficoQuantColunasComponent;
  let fixture: ComponentFixture<EstGraficoQuantColunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQuantColunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQuantColunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
