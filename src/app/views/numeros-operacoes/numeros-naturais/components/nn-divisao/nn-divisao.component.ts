import { ResultadoViewModelHtml } from './../../../../../shared/models/resultado';
import { HttpErrorResponse } from '@angular/common/http';
import { ServicoNumerosNaturais } from '../../shared/numeros-naturais.service';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IDivisaoComand } from '../../shared/numeros-naturais.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './nn-divisao.component.html',
  styleUrls: ['./nn-divisao.component.scss']
})

export class NnDivisaoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
    b: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModelHtml[];

  constructor(private fb: FormBuilder, private _servico: ServicoNumerosNaturais, private route: ActivatedRoute) { }

  ngOnInit() {
    this.resultados = [];
    this.resultados = [];
    //Recebe parametros da rota
    var numbera;
    var numberb;
    this.route.queryParams.subscribe(params => {
      numbera = Math.abs(params['a']);
      numberb = Math.abs(params['b']);
    });
    //Verifica se parametros foram recebidos
    
    if(numbera && numberb){
      //Realiza calculo se os parametros foram recebidos
     
      this._servico.postDivisaoS(numbera, numberb)
      .take(1)
      // .do({this.loading = false;})
      .subscribe((response) => {
          console.log(response);
          if (response.sucesso) {
            this.resultados = <ResultadoViewModelHtml[]>response.objeto;
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

  onSubmit(): void {
    this.loading = true;
    const numerosNaturais: IDivisaoComand = this.form.value;

    this._servico.postDivisao(numerosNaturais)
    .take(1)
    // .do({this.loading = false;})
    .subscribe((response) => {
        if (response.sucesso) {
          this.resultados = <ResultadoViewModelHtml[]>response.objeto;
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
