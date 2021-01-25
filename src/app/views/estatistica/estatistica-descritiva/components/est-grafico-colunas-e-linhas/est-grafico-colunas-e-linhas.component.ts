import { Component, OnInit } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'ifmath-est-grafico-colunas-e-linhas',
  templateUrl: './est-grafico-colunas-e-linhas.component.html',
  styleUrls: ['./est-grafico-colunas-e-linhas.component.scss']
})
export class EstGraficoColunasELinhasComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = true;

  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;

  public title: string = 'Cor favorita dos alunos de 7° ano da escola XXY';
  public fonteDados: string = 'Dados Fictícios';
  public nomeVariavel1: string = 'Lucro';
  public nomeVariavel2: string = 'Preço Unitário';
  public qtdVariavel1Input: string = '';
  public qtdVariavel2Input: string = '';
  public quantidadeVar1: number[] = [550, 600, 500, 400, 420, 480, 300, 100];
  public quantidadeVar2: number[] = [205, 250, 271, 302, 351, 470, 718, 974];
  public firstTime: boolean = true;
  public qtdTotal: number = 0;

  public day: string[] = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  public month: string[] = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  public datasSemanas: Date[] = null;
  public dataAtual: Date = new Date;
  public anos: string[] = [];

  public medidasVetChart: string[] = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];
  public medidas: Object[] = [{ nome: "Horas" }, { nome: "Dias" }, { nome: "Semanas" }, { nome: "Meses" }, { nome: "Anos" }]
  public medidaAtual: string = 'Horas';

  public periodoInput: string = '';

  constructor() {
  }

  ngOnInit() {

    registerLocaleData(pt);
    this.InicializeChart();
  }

  changeQuant(op: number) {

    if (op == 1) {
      this.quantidadeVar1 = [];
      var valores = this.qtdVariavel1Input.split('-');
      for (let index = 0; index < valores.length; index++) {
        this.quantidadeVar1[index] = Number(valores[index]);
      }
    }else{
      this.quantidadeVar2 = [];
      var valores = this.qtdVariavel2Input.split('-');
      for (let index = 0; index < valores.length; index++) {
        this.quantidadeVar2[index] = Number(valores[index]);
      }
    }
    this.selectMetodoMedida();
    this.updateChart();
  }

  /**
* Método responsável por controlar o 
* aparecimento das mensagens de erro no html

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
  }*/

  removeElements() {
    this.chart.destroy();
  }

  updateChart() {
    if (this.noError && !(this.errorInput)) {
      this.removeElements()
      this.chartOptions = {
        series: [
          {
            name: this.nomeVariavel1,
            type: "column",
            data: this.quantidadeVar1
          },
          {
            name: this.nomeVariavel2,
            type: "line",
            data: this.quantidadeVar2
          }
        ],
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            tools: {
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false
            }
          }
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: this.title,
          align: 'center',
          floating: true
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        
        xaxis: {
          type: "category",
          categories: this.medidasVetChart,
        },
        yaxis: [
          {
          },
          {
            opposite: true,
          }
        ]
      };
  
      this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
      this.chart.render();
    }
  }

  InicializeChart() {
    this.chartOptions = {
      series: [
        {
          name: this.nomeVariavel1,
          type: "column",
          data: this.quantidadeVar1
        },
        {
          name: this.nomeVariavel2,
          type: "line",
          data: this.quantidadeVar2
        }
      ],
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          tools: {
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false
          }
        }
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: this.title,
        align: 'center'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      
      xaxis: {
        type: "category",
        categories: this.medidasVetChart,
      },
      yaxis: [
        {
        },
        {
          opposite: true,
        }
      ]
    };

    this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    this.chart.render();
  }


  getWeeks() {
    //var teste = "8-Jun a 27-Jul";
    this.extractWeekPeriods();
    var dates = this.getDates(this.datasSemanas[0], this.datasSemanas[1]);
    //console.log(dates);
    this.createWeekPeriods(dates);
  }

  extractWeekPeriods() {
    this.datasSemanas = [];
    var semanas = this.periodoInput.split('a');
    var dataInicio = semanas[0].trim().split('-');
    var dataFim = semanas[1].trim().split('-');

    for (let index = 0; index <= this.month.length; index++) {
      if (dataInicio[1] == this.month[index]) {
        this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataInicio[0])));
      } if (dataFim[1] == this.month[index]) {
        this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataFim[0])));
      }
    }
  }

  /**
   * Método responsável por pegar os dias entre as duas datas de início da semana
   * @param startDate variável que contempla a data de início para a captura do período
   * @param endDate variável que contempla a data final para a captura do período
   */
  getDates(startDate, endDate) {
    var dates = [],
      currentDate = startDate,
      addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      //console.log(currentDate.getMonth().toString());
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  };

  /**
   * Pega todos os dias presentes entre a semana de início e fim e organiza
   * de modo a pegar as datas de 7 em 7 dias, ou seja a cada uma semana, para então
   * poderem ser utilizadas no gráfico. Calcula também quantas semanas o período vai ter
   * @param period variável que contem o período completo(todos os dias) entre a semana de início e fim
   */
  createWeekPeriods(period: Date[]) {
    this.medidasVetChart = [];

    for (let index = 0; index < period.length; index++) {
      if (index % 7 == 0) {
        this.medidasVetChart.push(String(period[index].getDate()) + "/" + this.getMes(period[index].getMonth()));
      }
    }
  }


  // ------------------------------ Anos
  getYears() {
    //var teste = "2018 a 2020";
    //var anos = teste.split('a');
    var anos = this.periodoInput.split('a');
    var anoInicio = Number(anos[0].trim());
    var anoFim = Number(anos[1].trim());
    this.createYearsPeriods(anoInicio, anoFim);
  }

  createYearsPeriods(anoI: number, anoF: number) {
    this.medidasVetChart = [];
    for (var i = Math.min(anoI, anoF); anoI >= 0 && anoF >= 0 && i <= Math.max(anoI, anoF); i++) {
      this.medidasVetChart.push(String(i));
    }
  }

  // ------------------------------ Anos


  // ------------------------------- Meses

  getMonths() {
    //var teste = "Jul a Set";
    ///var meses = teste.split('a');
    var meses = this.periodoInput.split('a');
    var mesInicio = String(meses[0].trim());
    var mesFim = String(meses[1].trim());
    this.createMonthPeriods(mesInicio, mesFim);
  }

  createMonthPeriods(mesI: string, mesF: string) {
    this.medidasVetChart = [];
    const indexMesI = this.month.indexOf(mesI);
    const indexMesF = this.month.indexOf(mesF);
    this.medidasVetChart = this.month.slice(indexMesI, indexMesF + 1);
  }

  getMes(indexOfMonth: number) {
    return this.month[indexOfMonth];
  }

  // ------------------------------- FIM Meses


  // ------------------------------- Dias

  getDays() {
    this.extractDaysPeriods();
    var dates = this.getDates(this.datasSemanas[0], this.datasSemanas[1]);
    this.createDaysPeriods(dates);
  }

  extractDaysPeriods() {
    this.datasSemanas = [];
    var dias = this.periodoInput.split('a');
    var dataInicio = dias[0].trim().split('-');
    var dataFim = dias[1].trim().split('-');

    for (let index = 0; index <= this.month.length; index++) {
      if (dataInicio[1] == this.month[index]) {
        this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataInicio[0])));
      } if (dataFim[1] == this.month[index]) {
        this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataFim[0])));
      }
    }
  }

  createDaysPeriods(period: Date[]) {
    this.medidasVetChart = [];

    for (let index = 0; index < period.length; index++) {
      this.medidasVetChart.push(String(period[index].getDate()) + "/" + this.getMes(period[index].getMonth()));
    }
  }

  // ------------------------------- FIM Dias


  // ------------------------------- Horas

  getHours() {
    //var teste = "Jul a Set";
    ///var meses = teste.split('a');
    var horas = this.periodoInput.split('a');
    var horaInicio = String(horas[0].trim());
    var horaFim = String(horas[1].trim());
    this.createHoursPeriods(horaInicio, horaFim);
  }


  createHoursPeriods(horaI: string, horaF: string) {
    this.medidasVetChart = [];
    var horaFinal = Number(horaF);
    var contador = Number(horaI);
    while (contador <= horaFinal) {
      this.medidasVetChart.push(contador + " h");
      contador++;
    }
  }

  // ------------------------------- FIM Horas

  getMedida(event) {
    this.medidaAtual = event.target.value;
  }

  selectMetodoMedida() {
    if (this.medidaAtual == "Horas") {
      this.getHours();
    } else if (this.medidaAtual == "Dias") {
      this.getDays();
    } else if (this.medidaAtual == "Semanas") {
      this.getWeeks();
    } else if (this.medidaAtual == "Meses") {
      this.getMonths();
    } else if (this.medidaAtual == "Anos") {
      this.getYears();
    }
  }

  changePeriodo() {
    this.selectMetodoMedida();
    this.updateChart();
  }

}
