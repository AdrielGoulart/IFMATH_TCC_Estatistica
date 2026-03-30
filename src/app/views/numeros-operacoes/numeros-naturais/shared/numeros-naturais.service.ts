import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {
    IComparacaoNumerosComand,
    ILeituraEscritaComand,
    IAntecessorSucessorComand,
    IAdicaoComand,
    IDivisaoComand,
    IMultiplicacaoComand,
    ISubtracaoComand
} from './numeros-naturais.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoNumerosNaturais {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }

    public postComparacaoNumeros(numerosNaturais: IComparacaoNumerosComand): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_naturais/comparacao-numeros';
        const body = JSON.stringify(numerosNaturais);
        const options = {
            headers: this.httpHeaders
        };
        
        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postLeituraEscrita(numerosNaturais: ILeituraEscritaComand): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/leitura_escrita/ler_escrever_numero';
        const body = JSON.stringify(numerosNaturais);
       
        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postAntecessorSucessor(numerosNaturais: IAntecessorSucessorComand): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/antecessor_sucessor/ver_antecessor_sucessor';
      
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postAdicao(numerosNaturais: IAdicaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/adicao/somar';
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    public postAdicaoS(na: number, nb:number): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/adicao/somar';
        enum numerosNaturais{
            a = na,
            b = nb
        }
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postSubtracao(numerosNaturais: ISubtracaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_naturais/subtracao';
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    public postSubtracaoS(na: number, nb:number): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_naturais/subtracao';
        enum numerosNaturais{
            a = na,
            b = nb
        }
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postMultiplicacao(numerosNaturais: IMultiplicacaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_naturais/multiplicacao';
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    public postMultiplicacaoS(numbera, numberb): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_naturais/multiplicacao';
        enum numerosNaturais{a = numbera, b=numberb};
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postDivisao(numerosNaturais: IDivisaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_naturais/divisao';
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    public postDivisaoS(numbera: number, numberb : number): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_naturais/divisao';
        enum numerosNaturais{
            a = numbera,
            b= numberb
        }
        const body = JSON.stringify(numerosNaturais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

}