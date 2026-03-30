import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { EstatisticaProbabilidadeComponent } from "./estatistica-probabilidade.component";

describe("EstatisticaComponent", () => {
  let component: EstatisticaProbabilidadeComponent;
  let fixture: ComponentFixture<EstatisticaProbabilidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstatisticaProbabilidadeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaProbabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
