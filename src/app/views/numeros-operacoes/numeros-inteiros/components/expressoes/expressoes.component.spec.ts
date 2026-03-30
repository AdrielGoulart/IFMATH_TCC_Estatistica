import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressoesComponent } from './expressoes.component';

describe('ExpressoesComponent', () => {
  let component: ExpressoesComponent;
  let fixture: ComponentFixture<ExpressoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
