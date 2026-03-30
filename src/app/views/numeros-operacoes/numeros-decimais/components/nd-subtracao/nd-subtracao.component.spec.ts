import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdSubtracaoComponent } from './nd-subtracao.component';

describe('NdSubtracaoComponent', () => {
  let component: NdSubtracaoComponent;
  let fixture: ComponentFixture<NdSubtracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdSubtracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdSubtracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
