import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstBaseViewComponent } from './est-base-view.component';

describe('EstBaseViewComponent', () => {
  let component: EstBaseViewComponent;
  let fixture: ComponentFixture<EstBaseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstBaseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstBaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
