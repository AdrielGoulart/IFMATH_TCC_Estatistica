import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoBarrasMultiplasComponent } from './est-grafico-barras-multiplas.component';

describe('EstGraficoBarrasMultiplasComponent', () => {
  let component: EstGraficoBarrasMultiplasComponent;
  let fixture: ComponentFixture<EstGraficoBarrasMultiplasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoBarrasMultiplasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoBarrasMultiplasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
