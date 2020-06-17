import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstBtnComponent } from './est-btn.component';

describe('EstBtnComponent', () => {
  let component: EstBtnComponent;
  let fixture: ComponentFixture<EstBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
