import { HttpErrorResponse } from '@angular/common/http';
import { ServicoMultiplosDivisores } from '../../shared/multiplos-divisores.service';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IPrimoVerificaComand } from '../../shared/multiplos-divisores.model';

@Component({
  templateUrl: './md-primo-verifica.component.html',
  styleUrls: ['./md-primo-verifica.component.scss']
})

export class MdPrimoVerificaComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    n: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoMultiplosDivisores) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const multiplosDivisores: IPrimoVerificaComand = this.form.value;

    this._servico.postPrimoVerifica(multiplosDivisores)
    .take(1)
    // .do({this.loading = false;})
    .subscribe((response) => {
        if (response.sucesso) {
          this.resultados = <ResultadoViewModel[]>response.objeto;
        }

        this.loading = false;
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
        } else {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
          // Log errors if any
          this.loading = false;
        }
      });
  }

}
