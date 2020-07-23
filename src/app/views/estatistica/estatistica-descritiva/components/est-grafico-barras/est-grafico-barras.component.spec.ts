import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoBarrasComponent } from './est-grafico-barras.component';

describe('EstGraficoBarrasComponent', () => {
  let component: EstGraficoBarrasComponent;
  let fixture: ComponentFixture<EstGraficoBarrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoBarrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
