import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ResultadoViewModelHtml } from '../../../../../shared/models/resultado';
import { IModuloCommand } from '../../shared/numeros-inteiros.model';
import { ServicoNumerosInteiros } from '../../shared/numeros-inteiros.service';

@Component({
  selector: 'ifmath-ni-modulo',
  templateUrl: './ni-modulo.component.html',
  styleUrls: ['./ni-modulo.component.scss']
})
export class NiModuloComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModelHtml[];
  

  constructor(private fb: FormBuilder, private _servico: ServicoNumerosInteiros) { }

  ngOnInit() {
    this.resultados = [];
    
  }

  onSubmit(): void {
    this.loading = true;
    const numerosInteiros: IModuloCommand = this.form.value;
    this._servico.postModulo(numerosInteiros)
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
