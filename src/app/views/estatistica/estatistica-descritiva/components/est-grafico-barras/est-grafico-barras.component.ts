import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

//Apex Charts
declare var ApexCharts: any;

@Component({
  selector: 'ifmath-est-grafico-barras',
  templateUrl: './est-grafico-barras.component.html',
  styleUrls: ['./est-grafico-barras.component.scss']
})
export class EstGraficoBarrasComponent implements OnInit {

  public errorInput: boolean = false;
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
  public button: Object[] = [{ title: "Ver a tabela equivalente", route: "est_graficos_setores_tab" }];



  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      series: [
        {
          name: "quantidade",
          data: this.quantidade
        }
      ],
      chart: {
        type: "bar",
        height: 400
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      title: {
        text: this.title,
        align: "center",
      },
      
      //Esse faz com que desapareça os números de dentro da barra
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.varQual
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
    this.updateChart();
  }

  changeQuant() {
    this.cleanVariables();
    this.quantidade = [];
    var valores = this.quantInput.split('-');
    for (let index = 0; index < valores.length; index++) {
      this.quantidade[index] = Number(valores[index]);
    }
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

  updateChart() {
    this.removeElements()
    this.chartOptions = {
      series: [
        {
          name: "quantidade",
          data: this.quantidade
        }
      ],
      chart: {
        type: "bar",
        height: 400
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      title: {
        text: this.title,
        align: "center",
      },
      
      //Esse faz com que desapareça os números de dentro da barra
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.varQual,
      }
    };
    this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    this.chart.render();
  }

}
