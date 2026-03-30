import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQualiBarrasMultiplasComponent } from './est-grafico-quali-barras-multiplas.component';

describe('EstGraficoQualiBarrasMultiplasComponent', () => {
  let component: EstGraficoQualiBarrasMultiplasComponent;
  let fixture: ComponentFixture<EstGraficoQualiBarrasMultiplasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQualiBarrasMultiplasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQualiBarrasMultiplasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
