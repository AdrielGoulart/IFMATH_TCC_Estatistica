import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstFormMsgErrorComponent } from './est-form-msg-error.component';

describe('EstFormMsgErrorComponent', () => {
  let component: EstFormMsgErrorComponent;
  let fixture: ComponentFixture<EstFormMsgErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstFormMsgErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstFormMsgErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
