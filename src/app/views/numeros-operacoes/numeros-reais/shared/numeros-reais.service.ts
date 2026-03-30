import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {
    Ix
} from './numeros-reais.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoNumerosReais {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }
    
    /*
    public postX(numerosReais: Ix): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_reais/x';
        const body = JSON.stringify(numerosReais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    */
}