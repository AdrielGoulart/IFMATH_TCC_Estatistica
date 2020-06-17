import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstApresentacaoComponent } from './est-apresentacao.component';

describe('EstApresentacaoComponent', () => {
  let component: EstApresentacaoComponent;
  let fixture: ComponentFixture<EstApresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstApresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
