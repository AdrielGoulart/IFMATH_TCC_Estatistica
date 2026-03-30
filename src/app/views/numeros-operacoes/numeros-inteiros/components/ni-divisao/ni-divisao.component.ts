import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ResultadoViewModelHtml } from '../../../../../shared/models/resultado';
import { IDivisaoCommandI } from '../../shared/numeros-inteiros.model';
import { ServicoNumerosInteiros } from '../../shared/numeros-inteiros.service';

@Component({
  selector: 'ifmath-ni-divisao',
  templateUrl: './ni-divisao.component.html',
  styleUrls: ['./ni-divisao.component.scss']
})
export class NiDivisaoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
    b: ['', Validators.required],
  });

  showall: boolean = false;
  perfomedcalculus: boolean=false;
  loading: boolean;
  resultados: ResultadoViewModelHtml[];
  result : object;
  link :String[][];
  desc : String[];
  expression : String[];
  signal :number[];


  constructor(private fb: FormBuilder, private _servico: ServicoNumerosInteiros) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const numerosNaturais: IDivisaoCommandI = this.form.value;

    this._servico.postDivisao(numerosNaturais)
    .take(1)
    // .do({this.loading = false;})
    .subscribe((response) => {
        console.log(response);
        if (response.sucesso) {
          //Reinicia valores
          this.resultados = [];
          this.link = [];
          this.desc = [];
          this.expression =[];
          this.signal = [];
          //Obtem valores do servidor
          this.resultados = <ResultadoViewModelHtml[]>response.objeto;
          var i = this.resultados.length;
          //Organiza os valores
          for(var x =0; x<i ; x++){
            //Adiciona expressao ao passo
            this.expression.push(this.resultados[x].html);
            //Separa descricao do link
            var linkdesc = this.resultados[x].explicacao.split("&");
            
            //Vetor para ser adicionado ao vetor de vetores dos valores para o link.
            var values = [];

            //Verifica se valores para a geracao de um link foram enviados
           
            if(linkdesc.length>1){
              //Organiza os valores do link
              var linkvalues = linkdesc[1].split(",");
              this.signal.push(1);
              //Adiciona os valores
              values.push(linkvalues[0]);
              values.push(linkvalues[1]);

            }
            //Caso nao tenha sido enviado link usa a variavel signal com valor 0 para indicar isso.
            else{
              this.signal.push(0);
            }
            //Adiciona os valores existentes ou não para o link
            this.link.push(values);
            //Adiciona a descricao
            this.desc.push(linkdesc[0]);
          }

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
