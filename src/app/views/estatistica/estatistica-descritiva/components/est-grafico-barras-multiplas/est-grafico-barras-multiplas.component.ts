import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

//Apex Charts
declare var ApexCharts: any;

@Component({
  selector: 'ifmath-est-grafico-barras-multiplas',
  templateUrl: './est-grafico-barras-multiplas.component.html',
  styleUrls: ['./est-grafico-barras-multiplas.component.scss']
})
export class EstGraficoBarrasMultiplasComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = false;
  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;
  public varQual: string[] = ['Azul', 'Amarelo', 'Vermelho', 'Verde', 'Preto'];
  public varQualInput: string = '';
  public quantidade: number[] = [12, 7, 4, 1, 7];
  public quantInput: string = '';
  public title: string = 'Cor favorita dos alunos de 7° ano da escola XXY';
  public fonteDados: string = 'Dados Fictícios';
  public nomeVariavel: string = 'Cor';
  public firstTime: boolean = true;
  public qtdTotal: number = 0;
///////////////
  public classifVar1Input: string = 'Regiões';
  public classifVar2Input: string = 'Produtos';
  public classifVarVal1: string[] = [];
  public classifVarVal2: string[] = [];


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
        height: 350,
        type: "bar",
      },
      colors: [
        "#008FFB",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      title: {
        text: this.title,
        align: "center",
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: this.varQual,
        labels: {
          style: {
            fontSize: "12px"
          }
        }
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
        series: [
          {
            name: "quantidade",
            data: this.quantidade
          }
        ],
        chart: {
          height: 350,
          type: "bar",
        },
        colors: [
          "#008FFB",
        ],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: this.varQual,
          labels: {
            style: {
              fontSize: "12px"
            }
          }
        }
      };
      this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
      this.chart.render();
    }
  }

}
