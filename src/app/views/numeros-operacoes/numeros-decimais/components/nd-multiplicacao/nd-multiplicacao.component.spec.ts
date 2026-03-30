import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdMultiplicacaoComponent } from './nd-multiplicacao.component';

describe('NdMultiplicacaoComponent', () => {
  let component: NdMultiplicacaoComponent;
  let fixture: ComponentFixture<NdMultiplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdMultiplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdMultiplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
