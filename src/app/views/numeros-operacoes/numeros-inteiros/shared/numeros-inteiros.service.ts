import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {
    IAdicaoCommandI,
    IAntecessorSucessorCommandI,
    IComparacaoCommandI,
    IDivisaoCommandI,
    IModuloCommand,
    IMultiplicacaoCommandI,
    ISubtracaoCommandI
    
} from './numeros-inteiros.model';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoNumerosInteiros {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }
    
public postAdicao(numerosInteiros : IAdicaoCommandI ){
    const url = this.baseUrl + '/api/numerosinteiros/somar';
    const body = JSON.stringify(numerosInteiros);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);

}
public postMultiplicacao(numerosInteiros : IMultiplicacaoCommandI ){
    const url = this.baseUrl + '/api/numerosinteiros/multiplicar';
    const body = JSON.stringify(numerosInteiros);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);

}
public postComparacaoNumeros(numerosInteiros : IComparacaoCommandI ){
    const url = this.baseUrl + '/api/numerosinteiros/comparar';
    const body = JSON.stringify(numerosInteiros);
   
    const options = {
        headers: this.httpHeaders
    };
    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    
}
public postAntecessorSucessor(numerosInteiros : IAntecessorSucessorCommandI ){
    const url = this.baseUrl + '/api/antecessor_sucessor_inteiro/ver_antecessor_sucessor_inteiro';
    const body = JSON.stringify(numerosInteiros);
   
    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);

}
public postSubtracao(numerosInteiros : ISubtracaoCommandI ){
    const url = this.baseUrl + '/api/numerosinteiros/subtrair';
    const body = JSON.stringify(numerosInteiros);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);

}
public postDivisao(numerosInteiros : IDivisaoCommandI ){
    const url = this.baseUrl + '/api/numerosinteiros/dividir';
    const body = JSON.stringify(numerosInteiros);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);

}

public postModulo(numerosInteiros : IModuloCommand ){
    const url = this.baseUrl + '/api/modulo/calcular_modulo';
    const body = JSON.stringify(numerosInteiros);
    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);

}







    /*
    public postX(numerosRacionais: Ix): Observable<RespostaJson> {
        const url = this.baseUrl + '/api/numeros_racionais/x';
        const body = JSON.stringify(numerosRacionais);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    */
}