import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstMedidaClasseComponent } from './est-medida-classe.component';

describe('EstMedidaClasseComponent', () => {
  let component: EstMedidaClasseComponent;
  let fixture: ComponentFixture<EstMedidaClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstMedidaClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstMedidaClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
