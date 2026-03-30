import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdDivisaoComponent } from './nd-divisao.component';

describe('NdDivisaoComponent', () => {
  let component: NdDivisaoComponent;
  let fixture: ComponentFixture<NdDivisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdDivisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdDivisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
