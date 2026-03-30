import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiMultiplicacaoComponent } from './ni-multiplicacao.component';

describe('NiMultiplicacaoComponent', () => {
  let component: NiMultiplicacaoComponent;
  let fixture: ComponentFixture<NiMultiplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiMultiplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiMultiplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
