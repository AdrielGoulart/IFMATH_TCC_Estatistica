import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {
    IMmcEncontrarComand,
    IGeraDivisoresComand,
    IGeraMultiplosComand,
    IMdcDecomposicaoComand,
    IMmcDecomposicaoComand,
    IPrimoDecomposicaoComand,
    IVerificaDivisoresComand,
    IVerificaMultiplosComand,
    IPrimoVerificaComand,
    IMdcDivisoesSucessivasComand
} from './multiplos-divisores.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoMultiplosDivisores {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }

    public postMmcEncontrar(multiplosDivisores: IMmcEncontrarComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/mmc/calcular_mmc';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postMmcDecomposicao(multiplosDivisores: IMmcDecomposicaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/mmc/mmc_decomposicao';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postGeraDivisores(multiplosDivisores: IGeraDivisoresComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/factor/gera_divisores';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    
    public postGeraMultiplos(multiplosDivisores: IGeraMultiplosComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/multiplos_divisores/md_gera_multiplos';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    
    public postMdcDecomposicao(multiplosDivisores: IMdcDecomposicaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/mdc/decomposicao';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
    
    public postMdcDivisoesSucessivas(multiplosDivisores: IMdcDivisoesSucessivasComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/mdc/divisoes_sucessivas';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }


    public postPrimoDecomposicao(multiplosDivisores: IPrimoDecomposicaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/prime/primo_decomposicao';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postVerificaDivisores(multiplosDivisores: IVerificaDivisoresComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/factor/verifica_divisor';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postVerificaMultiplos(multiplosDivisores: IVerificaMultiplosComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/multiplos_divisores/md_verifica_multiplos';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postPrimoVerifica(multiplosDivisores: IPrimoVerificaComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/prime/verifica_primo';
        const body = JSON.stringify(multiplosDivisores);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

}