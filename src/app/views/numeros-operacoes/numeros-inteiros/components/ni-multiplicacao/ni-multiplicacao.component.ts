import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ResultadoViewModelHtml } from '../../../../../shared/models/resultado';
import { IMultiplicacaoCommandI } from '../../shared/numeros-inteiros.model';
import { ServicoNumerosInteiros } from '../../shared/numeros-inteiros.service';

@Component({
  selector: 'ifmath-ni-multiplicacao',
  templateUrl: './ni-multiplicacao.component.html',
  styleUrls: ['./ni-multiplicacao.component.scss']
})
export class NiMultiplicacaoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
    b: ['', Validators.required],
  });
  showall: boolean = false;
  perfomedcalculus: boolean=false;
  loading: boolean;
  resultados: ResultadoViewModelHtml[];
  desc: String[];
  numbera : String;
  numberb : String;
  result : object;
  expression: String[];
  constructor(private fb: FormBuilder, private _servico: ServicoNumerosInteiros) { }

  ngOnInit() {
    this.resultados = [];
    this.desc = [];
    this.expression = [];
    this.numbera= '';
    this.numberb= '';
    
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
    const numerosInteiros: IMultiplicacaoCommandI = this.form.value;
    this._servico.postMultiplicacao(numerosInteiros)
    .take(1)
    // .do({this.loading = false;})
    .subscribe((response) => {
        console.log(response);
        if (response.sucesso) {
          this.resultados = <ResultadoViewModelHtml[]>response.objeto;
          //Obtem os valores de expressoes
          this.expression = this.resultados.map(a =>a.html);
          //Obtem os valores de descricao
          this.desc = this.resultados.map(a => a.explicacao);
          //Separa os dados da descricao dos dados usados para a criacao do link
          var x = this.desc[1].split('&');
          this.desc[1] =x[0];
          
          //Obtem os dados do link
          var y = x[1].split(',');
          console.log(x);
          this.numbera = y[0];
          this.numberb =y[1];
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
