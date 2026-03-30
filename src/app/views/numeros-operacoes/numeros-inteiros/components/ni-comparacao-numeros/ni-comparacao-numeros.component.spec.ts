import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiComparacaoNumerosComponent } from './ni-comparacao-numeros.component';

describe('NiComparacaoNumerosComponent', () => {
  let component: NiComparacaoNumerosComponent;
  let fixture: ComponentFixture<NiComparacaoNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiComparacaoNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiComparacaoNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
