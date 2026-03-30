import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { ServicoNumerosInteiros } from '../../../numeros-inteiros/shared/numeros-inteiros.service';
import { IAntecessorSucessorCommandI } from '../../shared/numeros-inteiros.model';

@Component({
  selector: 'ifmath-ni-antecessor-sucessor',
  templateUrl: './ni-antecessor-sucessor.component.html',
  styleUrls: ['./ni-antecessor-sucessor.component.scss']
})
export class NiAntecessorSucessorComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    n: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoNumerosInteiros) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const numerosInteiros: IAntecessorSucessorCommandI = this.form.value;

    this._servico.postAntecessorSucessor(numerosInteiros)
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
