import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResultadoComponentHtml } from './resultshtml.component';

describe('ListaResultadoComponentHtml', () => {
  let component: ListaResultadoComponentHtml;
  let fixture: ComponentFixture<ListaResultadoComponentHtml>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaResultadoComponentHtml ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaResultadoComponentHtml);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
