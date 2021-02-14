import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGraficoQuantDispersaoComponent } from './est-grafico-quant-dispersao.component';

describe('EstGraficoQuantDispersaoComponent', () => {
  let component: EstGraficoQuantDispersaoComponent;
  let fixture: ComponentFixture<EstGraficoQuantDispersaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstGraficoQuantDispersaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGraficoQuantDispersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
