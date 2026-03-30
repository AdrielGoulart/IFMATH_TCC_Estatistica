import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiModuloComponent } from './ni-modulo.component';

describe('NiModuloComponent', () => {
  let component: NiModuloComponent;
  let fixture: ComponentFixture<NiModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
