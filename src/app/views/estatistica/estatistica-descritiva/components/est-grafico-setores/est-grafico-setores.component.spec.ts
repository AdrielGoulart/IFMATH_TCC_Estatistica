import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoSetoresComponent } from './est-grafico-setores.component';

describe('EstGraficoSetoresComponent', () => {
  let component: EstGraficoSetoresComponent;
  let fixture: ComponentFixture<EstGraficoSetoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoSetoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoSetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
