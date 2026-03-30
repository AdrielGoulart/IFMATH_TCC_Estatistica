import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiSubtracaoComponent } from './ni-subtracao.component';

describe('NiSubtracaoComponent', () => {
  let component: NiSubtracaoComponent;
  let fixture: ComponentFixture<NiSubtracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiSubtracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiSubtracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
