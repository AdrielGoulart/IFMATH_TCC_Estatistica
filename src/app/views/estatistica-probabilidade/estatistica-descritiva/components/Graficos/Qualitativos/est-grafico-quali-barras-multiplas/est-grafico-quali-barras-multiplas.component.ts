import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

export class Series {

  public name: string;
  public data: number[];
}

@Component({
  selector: 'ifmath-est-grafico-quali-barras-multiplas',
  templateUrl: './est-grafico-quali-barras-multiplas.component.html',
  styleUrls: ['./est-grafico-quali-barras-multiplas.component.scss']
})
export class EstGraficoQualiBarrasMultiplasComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = false;
  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;
  public chartColors: string[] = ['#FFFF00', '#424242', '#F44336', '#0000FF', '#008000', '#8B4513', '#800080', '#FF8000'];
  public title: string = 'Produção agrícola por região, no ano de 2019, em milhões de toneladas';
  public fonteDados: string = 'Dados Fictícios';
  public qtdTotal: number = 0;
  public qtdTotalSeries: number[] = [];

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

    this.sumQtdSeries();
  }

  removeElements() {
    this.chart.destroy();
  }

  sumQtdSeries() {
    this.qtdTotalSeries = [];
    var soma;
    for (let index = 0; index < this.classifVarVal1.length; index++) {
      soma = 0;
      this.chartSeries.forEach(element => {
        soma += element.data[index];
      });
      this.qtdTotalSeries.push(soma);
    }
    //console.log(this.qtdTotalSeries);
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
    this.sumQtdSeries();
    this.updateChart();
  }

  convertToChartSeries() {
    this.series = [];
    this.inputSeries = "";
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
          this.inputSeries += " - " + valor
          //console.log("Valor:", valor, " i: ", index);
        }
        this.series.push(seri);
        this.chartSeries.push(seri);
        this.chartDataSeries.push(this.inputSeries);
      }

    }
  }

  updateChartSeries(index: number) {
    this.series[index].data = this.chartDataSeries[index].split('-').map(function (item) {
      return Number(item);
    });
    this.sumQtdSeries();
    this.updateChart();
  }

  /**
   * Método para colocar as inicializações dos vetores da tela
   */
  initializeArrays() {

  }

}
