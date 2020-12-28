import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifmath-est-grafico-definicao',
  templateUrl: './est-grafico-definicao.component.html',
  styleUrls: ['./est-grafico-definicao.component.scss']
})
export class EstGraficoDefinicaoComponent implements OnInit {

  graficosQuali: Object[] = [
    { title: "Gráfico de Setores", route: "est_graficos_setores" },
    { title: "Gráfico de Barras", route: "est_graficos_barras" },
    { title: "Gráfico de Colunas", route: "est_graficos_colunas" },
    { title: "Gráfico de Barras Múltiplas", route: "est_graficos_barras_mul" },
    { title: "Gráfico de Colunas Múltiplas", route: "est_graficos_colunas_mul" }
  ];

  graficosQuantDis: Object[] = [
    { title: "Gráfico de Colunas", route: "est_graficos_colunas" },
    { title: "Gráfico de Linhas", route: "est_graficos_linhas" },
    { title: "Gráfico de Pontos", route: "est_graficos_colunas" },
    { title: "Gráfico de Dispersão", route: "est_graficos_dispersao" },
  ];

  graficosQuantCont: Object[] = [
    { title: "Histograma", route: "est_graficos_histograma" },
    { title: "Polígono de Frequência", route: "est_graficos_pol_freq" },
    { title: "Polígono de Frequência Acumulada", route: "est_graficos_pol_freq_ac" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
