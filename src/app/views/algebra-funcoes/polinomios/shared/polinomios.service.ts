import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RespostaJson } from "../../../../core/modelos/resposta-json";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from '../../../../../environments/environment';
import { IPolynomialNumericValue } from "./polinomios.model";


@Injectable()
export class ServicoPolinomios{

  private httpHeaders: HttpHeaders;
  baseUrl: string;

  constructor(public _http: HttpClient) {
      this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      this.baseUrl = environment.url;
  }

  public postNumericValue(numericValue: IPolynomialNumericValue): Observable<RespostaJson> {

    const url = this.baseUrl + '/api/polynomial_equation/numeric_value';
    const body = JSON.stringify(numericValue);

    const options = {
      headers: this.httpHeaders
  };

    return this._http.post<RespostaJson>(url, body, options);
  }

  public postAddAndSub(expression: String): Observable<RespostaJson> {

    const url = this.baseUrl + '/api/polynomial_equation/add_and_sub';
    const body = JSON.stringify(expression);

    const options = {
      headers: this.httpHeaders
  };

    return this._http.post<RespostaJson>(url, body, options);
  }

  public postMultiplication(expression: String): Observable<RespostaJson> {

    const url = this.baseUrl + '/api/polynomial_equation/multiplication';
    const body = JSON.stringify(expression);

    const options = {
      headers: this.httpHeaders
  };

    return this._http.post<RespostaJson>(url, body, options);
  }

}
