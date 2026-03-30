import { Component, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";

import { ServicoPolinomios } from "../../shared/polinomios.service";

import { ResultadoViewModel } from "../../../../../shared/models/resultado";
import { RespostaJson } from "../../../../../core/modelos/resposta-json";
import { ModalErrorComponent } from "../../../../../shared/components/modal-error/modal-error.component";

import "rxjs/add/operator/take";
import "rxjs/add/operator/do";

@Component({
  templateUrl: "./pln-multiplication.html",
})
export class PlnMultiplicationComponent {
  @ViewChild("modalError") public modalError: ModalErrorComponent;
  public loading: boolean;
  public errorMessage: string;
  public results: ResultadoViewModel[];

  public formModel: FormGroup = this.fb.group({
    expressionA: ["", Validators.required],
    expressionB: ["", Validators.required],
  });

  expressionA: string;
  expressionB: string;
  finalExpression: string;

  constructor(private fb: FormBuilder, private _servico: ServicoPolinomios) {}

  public onSubmit(): void {
    this.onClear();

    this.expressionA = this.formModel.get("expressionA").value.toLowerCase();
    this.expressionB = this.formModel.get("expressionB").value.toLowerCase();

    this.finalExpression =
      "(" + this.expressionA + ") * (" + this.expressionB + ")";

    if (this.checkPoly(this.expressionA) && this.checkPoly(this.expressionB)) {
      this.loading = true;
      this._servico
        .postMultiplication(this.finalExpression)
        .take(1)
        .do(() => {
          this.loading = false;
        })
        .subscribe(
          (response: RespostaJson) => {
            if (response.sucesso) {
              this.results = <ResultadoViewModel[]>response.objeto;
            } else {
              this.errorMessage = response.mensagem
                .split(":")[1]
                .replace("}", "");
              this.modalError.show();
            }
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // A client-side or network error occurred.
              console.log("An error occurred:", err.error.message);
            } else {
              // Backend returns unsuccessful response codes such as 404, 500 etc.
              console.log("Backend returned status code: ", err.status);
              console.log("Response body:", err.error);
              // Log errors if any
              this.loading = false;
              this.errorMessage =
                "Aconteceu alguns error de conexão com a internet, verifique a sua rede: " +
                err.message;
              this.modalError.show();
            }
          }
        );
    } else {
      this.errorMessage =
        "Uma multiplicação de polinômio pode conter apenas uma incógnita e não pode conter o sinal de '/'. Como no exemplo a seguir: 4x^3 - 12x^2 + 9x";
      this.modalError.show();
    }
  }

  public onClear(): void {
    this.results = [];
  }

  checkPoly(expression: string): boolean {
    let spell = "";

    for (let i = 0; i < expression.length; i++) {
      let c: String = expression.charAt(i).toString();

      if (c.match(/[a-z]/)) {
        if (spell == "") {
          spell = c.toString();
        } else {
          if (c != spell) {
            return false;
          }
        }
      }
      if (c.match(/\/|\.|\*/)) {
        return false;
      }
    }
    return true;
  }
}
