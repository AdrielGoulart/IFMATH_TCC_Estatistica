import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { ServicoPolinomios } from '../../shared/polinomios.service';
import { NumericValue, IPolynomialNumericValue } from '../../shared/polinomios.model';

import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { RespostaJson } from '../../../../../core/modelos/resposta-json';
import { ModalErrorComponent } from '../../../../../shared/components/modal-error/modal-error.component';


import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './pln-valor-numerico.html'
})
export class PlnNumericValueComponent {
  @ViewChild('modalError') public modalError: ModalErrorComponent;
  public loading: boolean;
  public errorMessage: string;
  public results: ResultadoViewModel[];

  public formModel: FormGroup = this.fb.group({
    expression: ['', Validators.required],
    userInput: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _servico: ServicoPolinomios, public polyNumeric: IPolynomialNumericValue) { }

  public onSubmit(): void {
    this.loading = true;
    this.onClear();

    var numeric: NumericValue = new NumericValue;

    numeric.literal = 'x';
    numeric.coefficient = parseInt(this.formModel.get('userInput').value);


    this.polyNumeric.expression = this.formModel.get('expression').value;
    this.polyNumeric.inputs.push(numeric);

    this.polyNumeric.expression = this.setUp(this.polyNumeric.expression);



    this._servico
      .postNumericValue(this.polyNumeric)
      .take(1)
      .do(() => {
        this.loading = false;
        this.polyNumeric.inputs = [];
      })
      .subscribe(
        (response: RespostaJson) => {
          if (response.sucesso) {
            this.results = <ResultadoViewModel[]>response.objeto;
          } else {
            this.errorMessage = response.mensagem
              .split(':')[1]
              .replace('}', '');
            this.modalError.show();
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred.
            console.log('An error occurred:', err.error.message);
          } else {
            // Backend returns unsuccessful response codes such as 404, 500 etc.
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
            // Log errors if any
            this.loading = false;
            this.errorMessage =
              'Aconteceu alguns error de conexão com a internet, verifique a sua rede: ' +
              err.message;
            this.modalError.show();
          }
        }
      );
  }

  public onClear(): void {
    this.results = [];
  }

  private setUp(expression) {

    function isNumeric(value) {
      return /^-{0,1}\d+$/.test(value);
    }

    var newExp = [];
    var count = 0;


    for (let index = 0; index < expression.length; index++) {
      if (expression.charAt(index) == "x") {
        if (isNumeric(expression.charAt(index - 1))) {
          newExp[count] ="*";
          newExp[count + 1] = "x";
          count+=2;
        }else{
          newExp[count] = "x";
          count++;
        }
      }else{
        newExp[count] = expression.charAt(index);
        count++;
      }

    }
    return newExp.join("");

  }
}
