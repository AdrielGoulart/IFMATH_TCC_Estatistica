import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiAntecessorSucessorComponent } from './ni-antecessor-sucessor.component';

describe('NiAntecessorSucessorComponent', () => {
  let component: NiAntecessorSucessorComponent;
  let fixture: ComponentFixture<NiAntecessorSucessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiAntecessorSucessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiAntecessorSucessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
