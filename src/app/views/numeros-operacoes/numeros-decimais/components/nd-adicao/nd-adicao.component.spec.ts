import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdAdicaoComponent } from './nd-adicao.component';

describe('NdAdicaoComponent', () => {
  let component: NdAdicaoComponent;
  let fixture: ComponentFixture<NdAdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdAdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdAdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
