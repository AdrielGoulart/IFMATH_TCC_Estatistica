import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { ServicoPnf } from '../../shared/pnf.service';
import { IPNFExpression } from '../../shared/pnf.model';

import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { RespostaJson } from '../../../../../core/modelos/resposta-json';
import { ModalErrorComponent } from '../../../../../shared/components/modal-error/modal-error.component';


import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './pnf-fatoracao.component.html'
})
export class PnfFatorationComponent {
  @ViewChild('modalError') public modalError: ModalErrorComponent;
  public loading: boolean;
  public errorMessage: string;
  public results: ResultadoViewModel[];
  finalExpression : IPNFExpression;

  public formModel: FormGroup = this.fb.group({
    expression: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _servico: ServicoPnf) { }

  public onSubmit(): void {
    this.loading = true;
    this.onClear();

    this.finalExpression = new IPNFExpression;
    this.finalExpression.expression = this.formModel.get('expression').value.toLowerCase();

    this._servico
      .postFatoracao(this.finalExpression)
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
              'Expressão não pode ser fatorada!'
            this.modalError.show();
          }
        }
      );
  }

  public onClear(): void {
    this.results = [];
  }

}
