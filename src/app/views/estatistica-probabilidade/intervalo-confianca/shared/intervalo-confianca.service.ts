import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RespostaJson } from "../../../../core/modelos/resposta-json";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import "rxjs/add/operator/map";
import { environment } from "../../../../../environments/environment";

@Injectable()
export class ServicoIntervaloConfianca {
  private data: Observable<RespostaJson>;
  private httpHeaders: HttpHeaders;
  private baseUrl: string;

  constructor(public _http: HttpClient) {
    this.httpHeaders = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    this.baseUrl = environment.url;
  }
}
