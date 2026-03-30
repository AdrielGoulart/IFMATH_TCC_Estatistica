import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstMedidaAgrupadoComponent } from './est-medida-agrupado.component';

describe('EstMedidaAgrupadoComponent', () => {
  let component: EstMedidaAgrupadoComponent;
  let fixture: ComponentFixture<EstMedidaAgrupadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstMedidaAgrupadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstMedidaAgrupadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
