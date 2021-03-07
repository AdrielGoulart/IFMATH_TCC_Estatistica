import { Component, OnInit, Input } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'ifmath-est-grafico-quali-setores',
  templateUrl: './est-grafico-quali-setores.component.html',
  styleUrls: ['./est-grafico-quali-setores.component.scss']
})
export class EstGraficoQualiSetoresComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = true;
  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;
  public chartColors: string[] = ['#F44336', '#E91E63', '#9C27B0', '#00FF7F',
    '#FFA500', '#1E90FF', '#008000',
    '#A0522D', '#FFFF00', '#A9A9A9']

  public varQual: string[] = ['Azul', 'Amarelo', 'Vermelho', 'Verde', 'Preto'];
  public varQualInput: string = '';
  public quantidade: number[] = [12, 7, 4, 1, 7];
  public quantInput: string = '';
  public title: string = 'Cor favorita dos alunos de 7° ano da escola XXY';
  public fonteDados: string = 'Dados Fictícios';
  public nomeVariavel: string = 'Cor';
  public firstTime: boolean = true;
  public qtdTotal: number = 0;

  //teste
 buttons: Object[] = [
  { title: "Gráficos", route: "est_graficos" },
  { title: "Tabelas", route: "est_tabelas" }
];

  constructor() {
  }

  ngOnInit() {
    registerLocaleData(pt);

    this.chartOptions = {
      series: this.quantidade,
      chart: {
        width: 420,
        type: "pie"
      },
      labels: this.varQual,
      colors: this.chartColors,
      responsive: [
        {
          breakpoint: 360,
          options: {
            chart: {
              width: 200,
            },
          },
        }
      ],
      plotOptions: {
        pie: {


        },

      },
      title: {
        text: this.title,
        align: "center",
      }
    };

    this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    this.chart.render();

    this.somaQuant();

  }

  /**
   * Método Chamado toda vez que o valor da variável varQualInput
   * for alterada
   */
  changeVarQual() {
    this.cleanVariables();
    this.varQual = [];
    this.varQual = this.varQualInput.split('-');
    this.verifyInputs();
    this.updateChart();
  }

  changeQuant() {
    this.cleanVariables();
    this.quantidade = [];
    var valores = this.quantInput.split('-');
    for (let index = 0; index < valores.length; index++) {
      this.quantidade[index] = Number(valores[index]);
    }
    this.verifyInputs();
    this.somaQuant();
    this.updateChart();
  }

  removeElements() {
    this.chart.destroy();
  }

  cleanVariables() {
    if (this.firstTime) {
      this.quantidade = [];
      this.varQual = [];
      this.firstTime = false;
    }
  }

  somaQuant() {
    this.qtdTotal = this.quantidade.reduce(function (total, numero) {
      return total + numero;
    }, 0);
    //console.log(this.qtdTotal);
  }

    /**
  * Método responsável por controlar o 
  * aparecimento das mensagens de erro no html
  */
 verifyInputs() {
  if (this.quantidade.length <= 10 && this.varQual.length <= 10) {
    this.errorInput = false;
    if (this.quantidade.length < this.varQual.length) {
      this.errorInputVar = false;
      this.errorInputQtd = true;
      this.noError = false;
    } else if (this.quantidade.length > this.varQual.length) {
      this.errorInputQtd = false;
      this.errorInputVar = true;
      this.noError = false;
    } else {
      this.errorInputQtd = false;
      this.errorInputVar = false;
      this.noError = true;
    }
  } else {
    this.errorInput = true;
    this.errorInputQtd = false;
    this.errorInputVar = false;
  }
}

  updateChart() {
    if (this.noError && !(this.errorInput)) {
      this.removeElements()
      this.chartOptions = {
        series: this.quantidade,
        chart: {
          width: 400,
          type: "pie"
        },
        labels: this.varQual,
        colors: this.chartColors,
        responsive: [
          {
            breakpoint: 360,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom"
              },
            },
          }
        ],
        plotOptions: {

        },
        title: {
          text: this.title,
          align: "center",
        },
      };
      this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
      this.chart.render();
    }
  }

}
