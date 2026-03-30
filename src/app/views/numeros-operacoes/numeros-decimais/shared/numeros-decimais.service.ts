import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {
    Ix
} from './numeros-decimais.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';
import { IAdicaoComand } from '../../numeros-naturais/shared/numeros-naturais.model';

@Injectable()
export class ServicoNumerosDecimais {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }
    

    /*public postAdicao(numerosDecimais: IAdicaoComandd){

    }*/

    /*
    public postComparacaoNumeros(numerosNaturais: IComparacaoNumerosComand): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_naturais/comparacao-numeros';
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    */
}