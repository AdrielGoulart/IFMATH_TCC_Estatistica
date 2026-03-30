import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultadoViewModelHtml } from '../../../../../shared/models/resultado';
import { ServicoNumerosDecimais } from '../../shared/numeros-decimais.service';

@Component({
  selector: 'ifmath-nre-adicao',
  templateUrl: './nd-adicao.component.html',
  styleUrls: ['./nd-adicao.component.scss']
})
export class NdAdicaoComponent implements OnInit {

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

  constructor(private fb: FormBuilder, private _servico: ServicoNumerosDecimais, ) { 
  
  }

  ngOnInit() {
    this.resultados = [];
    this.desc = [];
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
  /*
    this.loading = true;
    const numerosDecimais: IAdicaoCommand = this.form.value;

    this._servico.postAdicao(numerosDecimais)
    .take(1)
    // .do({this.loading = false;})
    .subscribe((response) => {
        

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
      */
    }
}
