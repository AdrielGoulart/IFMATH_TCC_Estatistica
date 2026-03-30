import { HttpErrorResponse } from '@angular/common/http';
import { ServicoNumerosNaturais } from '../../shared/numeros-naturais.service';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ILeituraEscritaComand } from '../../shared/numeros-naturais.model';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { RespostaJson } from '../../../../../core/modelos/resposta-json';

@Component({
  templateUrl: './nn-leitura-escrita.component.html',
  styleUrls: ['./nn-leitura-escrita.component.scss']
})

export class NnLeituraEscritaComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    n: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoNumerosNaturais) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const numerosNaturais: ILeituraEscritaComand = this.form.value;

    this._servico.postLeituraEscrita(numerosNaturais)
    .take(1)
    .do(() => { this.loading = false;})
    .subscribe((response : RespostaJson) => {
        if (response.sucesso) {
          this.resultados = <ResultadoViewModel[]>response.objeto;
         
        }

       
        
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
