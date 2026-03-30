import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiDivisaoComponent } from './ni-divisao.component';

describe('NiDivisaoComponent', () => {
  let component: NiDivisaoComponent;
  let fixture: ComponentFixture<NiDivisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiDivisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiDivisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
