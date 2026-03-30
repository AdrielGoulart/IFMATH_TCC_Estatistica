import { HttpErrorResponse } from '@angular/common/http';
import { ServicoNumerosNaturais } from '../../shared/numeros-naturais.service';
import { ResultadoViewModel, ResultadoViewModelHtml } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IAdicaoComand } from '../../shared/numeros-naturais.model';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';
import { ModalErrorComponent } from '../../../../../shared/components/modal-error/modal-error.component';
@Component({
  
  templateUrl: './nn-adicao.component.html',
  styleUrls: ['./nn-adicao.component.scss']

})


export class NnAdicaoComponent implements OnInit {

  @ViewChild('modalError') public modalError: ModalErrorComponent;
  
  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
    b: ['', Validators.required],
  });
  showall: boolean = false;
  public errorMessage: string;
  perfomedcalculus: boolean=false;
  loading: boolean;
  resultados: ResultadoViewModelHtml[];
  result : object;
  constructor(private fb: FormBuilder, private _servico: ServicoNumerosNaturais, private route: ActivatedRoute) { }

  ngOnInit() {
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
     
      this._servico.postAdicaoS(numbera, numberb)
      .take(1)
      // .do({this.loading = false;})
      .subscribe((response) => {
          console.log(response);
          if (response.sucesso) {
            this.resultados = <ResultadoViewModelHtml[]>response.objeto;
            this.perfomedcalculus = true;
          }
  
          this.loading = false;
        }, (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred.
            console.log('An error occurred:', err.error.message);
          } else {
            this.errorMessage = err.error.message;
            this.modalError.show();
            this.loading = false;
            
          }
        });
    }
  }
  toggle(){
    if(this.showall){
      this.showall=false;
    }
    else{
      this.showall = true;
    }
  }
  onSubmit(): void {
    this.loading = true;
    const numerosNaturais: IAdicaoComand = this.form.value;

    this._servico.postAdicao(numerosNaturais)
    .take(1)
    // .do({this.loading = false;})
    .subscribe((response) => {
        console.log(response);
        if (response.sucesso) {
          this.resultados = <ResultadoViewModelHtml[]>response.objeto;
          this.perfomedcalculus = true;
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
