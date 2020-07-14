import { Component, OnInit, ViewChild } from '@angular/core';
//ChartJS
//import { Chart } from 'chart.js'
//ApexCharts
import { ApexOptions } from 'apexcharts';

//CnavasJS
declare var CanvasJS: any;

//Apex Charts
declare var ApexCharts: any;

@Component({
  selector: 'ifmath-est-grafico-setores',
  templateUrl: './est-grafico-setores.component.html',
  styleUrls: ['./est-grafico-setores.component.scss']
})
export class EstGraficoSetoresComponent implements OnInit {

  public radius = 25;
  public errorInput: boolean = false;
  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;
  public chartColors: string[] = ['#F44336', '#E91E63', '#9C27B0', '#00FF7F',
    '#FFA500', '#1E90FF', '#008000',
    '#A0522D', '#FFFF00', '#A9A9A9']

  public varQual: string[] = ['azul', 'amarelo', 'vermelho', 'verde', 'preto'];
  public varQualInput: string = '';
  public quantidade: number[] = [12, 7, 4, 1, 7];
  public quantInput: string = '';
  public title: string = 'Exemplo Gráfico de Setores';
  public fonteDados: string = 'Dados Fictícios';
  public nomeVariavel: string = 'cor';
  public firstTime: boolean = true;
  public qtdTotal: number = 0;
  public button: Object[] = [{ title: "Ver a tabela equivalente", route: "est_graficos_setores_tab" }];

  constructor() {
  }

  ngOnInit() {


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
    /*
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    }
    var chart = new ApexCharts('#chart', options);
    chart.render();*/

    /*
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };*/

    /*
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Desktop Browser Market Share in 2016"
      },
      data: [{
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 51.08, label: "Chrome" },
          { y: 27.34, label: "Internet Explorer" },
          { y: 10.62, label: "Firefox" },
          { y: 5.02, label: "Microsoft Edge" },
          { y: 4.07, label: "Safari" },
          { y: 1.22, label: "Opera" },
          { y: 0.44, label: "Others" }
        ]
      }]
    });
    chart.render();*/


    /*
    var myChart = new Chart("estChart", {
      type: 'pie',
      data: {
        labels: this.pieChartLabels,
        datasets: [{
          data: this.pieChartData,
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
          ]
        }],
      },
      options: {
          animation: {animateScale: true},
        }, 
      
  });*/

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
    console.log(this.qtdTotal);
  }

  updateChart() {
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
