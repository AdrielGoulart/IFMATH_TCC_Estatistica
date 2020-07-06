import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstRightbarComponent } from './est-rightbar.component';

describe('EstRightbarComponent', () => {
  let component: EstRightbarComponent;
  let fixture: ComponentFixture<EstRightbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstRightbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
