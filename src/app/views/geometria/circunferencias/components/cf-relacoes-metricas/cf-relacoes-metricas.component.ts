import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-relacoes-metricas',
  templateUrl: './cf-relacoes-metricas.component.html',
  styleUrls: ['./cf-relacoes-metricas.component.scss']
})
export class CfRelacoesMetricasComponent implements OnInit {

  //Botões
  buttons: Object[] = [
    { title: "Relação entre Cordas", route: "cf_relacoes_metricas_rc" },
    { title: "Relação entre Segmentos Secantes", route: "cf_relacoes_metricas_rs" },
    { title: "Relação entre Segmentos Secante e Tangente", route: "cf_relacoes_metricas_rst" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
