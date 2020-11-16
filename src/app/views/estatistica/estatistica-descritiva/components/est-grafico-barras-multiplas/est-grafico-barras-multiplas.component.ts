import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

//Apex Charts
declare var ApexCharts: any;

export class Series {

  public name: string;
  public data: number[];
}

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
  public chartColors: string[] = ['#FFFF00', '#424242', '#F44336', '#0000FF', '#008000', '#8B4513', '#800080', '#FF8000']
  public varQual: string[] = ['Azul', 'Amarelo', 'Vermelho', 'Verde', 'Preto'];
  public varQualInput: string = '';
  //Inútil nessa tela
  public quantidade: number[] = [12, 7, 4, 1, 7];
  public quantInput: string = '';
  public title: string = 'Produção agrícola por região, no ano de 2019, em milhões de toneladas';
  public fonteDados: string = 'Dados Fictícios';
  public nomeVariavel: string = 'Cor';
  public firstTime: boolean = true;
  public qtdTotal: number = 0;
  ///////////////

  //Variáveis para pegar os nomes básicos das duas Variáveis
  public classifVar1Input: string = 'Regiões';
  public classifVar2Input: string = 'Produtos';

  //Campos para pegar os valores do Input
  public classifVarVal1Input: string = "Norte - Nordeste - Centro Oeste - Sudeste - Sul";
  public classifVarVal2Input: string = "Grãos - Frutas - Legumes - Outros";

  //Vetores para os valores digitados
  public classifVarVal1: string[] = ["Norte", "Nordeste", "Centro Oeste", "Sudeste", "Sul"];
  public classifVarVal2: string[] = ["Grãos", "Frutas", "Legumes", "Outros"];

  public inputSeries: string = "";

  public chartSeries: Series[] = [
    {
      name: "Grãos",
      data: [1.5, 2.4, 41, 64, 22]
    },
    {
      name: "Frutas",
      data: [44, 55, 41, 64, 22]
    },
    {
      name: "Legumes",
      data: [53, 32, 33, 52, 13]
    },
    {
      name: "Outros",
      data: [44, 55, 41, 64, 22]
    },
  ];

  public chartDataSeries: string[] =
    ["1.5 - 2.4 - 41 - 64 - 22",
      "44 - 55 - 41 - 64 - 22",
      "53 - 32 - 33 - 52 - 13",
      "44 - 55 - 41 - 64 - 22"
    ];

  public series: ApexAxisChartSeries = this.chartSeries;

  constructor() { }

  ngOnInit() {
    
    registerLocaleData(pt);

    this.chartOptions = {
      series: this.series,
      chart: {
        type: "bar",
        height: 650,
        width: "100%",
      },
      title: {
        text: this.title,
        align: "center",
      },
      colors: this.chartColors,
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "15px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.classifVarVal1
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
    //if (this.noError && !(this.errorInput)) {
    this.removeElements()
    this.chartOptions = {
      series: this.series,
      chart: {
        type: "bar",
        height: 600,
        width: "100%",
      },
      title: {
        text: this.title,
        align: "center",
      },
      colors: this.chartColors,
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "15px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.classifVarVal1
      }
    };
    this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    this.chart.render();
    //}
  }

  updateClassifVarVal1() {
    this.classifVarVal1 = [];
    this.classifVarVal1 = this.classifVarVal1Input.split('-');
    this.updateChart();
  }

  updateClassifVarVal2() {
    this.classifVarVal2 = [];
    this.classifVarVal2 = this.classifVarVal2Input.split('-');
    this.convertToChartSeries();
    this.updateChart();
  }

  convertToChartSeries() {
    this.series = [];
    var copyOfChartSeries = this.chartSeries;
    this.chartSeries = [];
    for (let index = 0; index < this.classifVarVal2.length; index++) {
      var seri = new Series();
      if (copyOfChartSeries[index] != undefined) {
        seri.name = this.classifVarVal2[index];
        seri.data = copyOfChartSeries[index].data;
        this.series.push(seri);
        this.chartSeries.push(seri);
      } else {
        seri.name = this.classifVarVal2[index];
        seri.data = [];
        var valor = 10;
        this.inputSeries += valor;
        seri.data.push(valor);
        for (let index = 1; index < this.classifVarVal1.length; index++) {
          valor += 10;
          seri.data.push(valor);
          this.inputSeries += " - "+ valor
          console.log("Valor:",valor," i: ",index);
        }
        this.series.push(seri);
        this.chartSeries.push(seri);
        this.chartDataSeries.push(this.inputSeries);
      }

    }
  }

  updateChartSeries(index: number) {
    this.series[index].data = this.chartDataSeries[index].split('-').map(function (item) {
      return parseInt(item, 10);
    });
    this.updateChart();
  }

  /**
   * Método para colocar as inicializações dos vetores da tela
   */
  initializeArrays() {

  }

}
