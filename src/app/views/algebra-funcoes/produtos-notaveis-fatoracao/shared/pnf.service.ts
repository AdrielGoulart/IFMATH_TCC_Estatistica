import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import {IPNFExpression} from './pnf.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoPnf {

  private httpHeaders: HttpHeaders;
  baseUrl: string;

  constructor(public _http: HttpClient) {
      this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      this.baseUrl = environment.url;

  }

   public postProdutoNotavel(pnf: IPNFExpression): Observable<RespostaJson> {
    const url = this.baseUrl + '/api/produtos_notaveis_fatoracao/produto_notavel';
    const body = JSON.stringify(pnf);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postFatoracao(pnf: IPNFExpression): Observable<RespostaJson> {
    const url = this.baseUrl + '/api/produtos_notaveis_fatoracao/fatoracao';
    const body = JSON.stringify(pnf);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }
}
