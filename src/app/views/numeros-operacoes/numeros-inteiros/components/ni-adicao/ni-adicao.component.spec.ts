import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiAdicaoComponent } from './ni-adicao.component';

describe('NiAdicaoComponent', () => {
  let component: NiAdicaoComponent;
  let fixture: ComponentFixture<NiAdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiAdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiAdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
