import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQualiSetoresComponent } from './est-grafico-quali-setores.component';

describe('EstGraficoQualiSetoresComponent', () => {
  let component: EstGraficoQualiSetoresComponent;
  let fixture: ComponentFixture<EstGraficoQualiSetoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQualiSetoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQualiSetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
