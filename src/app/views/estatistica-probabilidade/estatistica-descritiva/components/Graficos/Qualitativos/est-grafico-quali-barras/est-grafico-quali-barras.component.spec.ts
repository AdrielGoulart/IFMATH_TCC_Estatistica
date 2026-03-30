import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQualiBarrasComponent } from './est-grafico-quali-barras.component';

describe('EstGraficoQualiBarrasComponent', () => {
  let component: EstGraficoQualiBarrasComponent;
  let fixture: ComponentFixture<EstGraficoQualiBarrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQualiBarrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQualiBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
