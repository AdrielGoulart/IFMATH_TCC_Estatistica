import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstMedidaIsoladoComponent } from './est-medida-isolado.component';

describe('EstMedidaIsoladoComponent', () => {
  let component: EstMedidaIsoladoComponent;
  let fixture: ComponentFixture<EstMedidaIsoladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstMedidaIsoladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstMedidaIsoladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
