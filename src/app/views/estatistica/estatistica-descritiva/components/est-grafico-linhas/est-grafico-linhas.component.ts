import { Component, OnInit, Input } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ApexOptions } from 'apexcharts';

//Apex Charts
declare var ApexCharts: any;

@Component({
  selector: 'ifmath-est-grafico-linhas',
  templateUrl: './est-grafico-linhas.component.html',
  styleUrls: ['./est-grafico-linhas.component.scss']
})
export class EstGraficoLinhasComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = true;
  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;

  public quantidade: number[] = [12, 7, 4, 1, 7];
  public quantInput: string = '';
  public title: string = 'Número de Infectados pelo COVID-19 em Lages';
  public fonteDados: string = 'Secretaria da Saúde - Município de Lages';
  public firstTime: boolean = true;
  public qtdTotal: number = 0;

  public day: string[] = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  public month: string[] = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  public datasSemanas: Date[] = null;
  public dataAtual: Date = new Date;
  public anos: string[] = [];

  public medidasVetChart: string[] = ["13 h","14 h","15 h","16 h","17 h"];
  public medidas: Object[] = [{ nome: "Horas" }, { nome: "Dias" }, { nome: "Semanas" }, { nome: "Meses" }, { nome: "Anos" }]
  public medidaAtual: string = 'Horas';

  public periodoInput: string = '';

  constructor() {
  }

  ngOnInit() {
    registerLocaleData(pt);
    
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: this.title,
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };

    this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    this.chart.render();

    this.somaQuant();
  }

  changeQuant() {
    this.cleanVariables();
    this.quantidade = [];
    var valores = this.quantInput.split('-');
    for (let index = 0; index < valores.length; index++) {
      this.quantidade[index] = Number(valores[index]);
    }
    this.selectMetodoMedida();
    this.updateChart();
  }

  removeElements() {
    this.chart.destroy();
  }

  cleanVariables() {
    if (this.firstTime) {
      this.quantidade = [];
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

  updateChart() {
    if (this.noError && !(this.errorInput)) {
      this.removeElements()
      this.chartOptions = {
        series: [
          {
            name: "Quantidade",
            data: this.quantidade
          }
        ],
        chart: {
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: this.title,
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: this.medidasVetChart
        }
      };

      this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
      this.chart.render();
    }
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
    console.log(this.medidasVetChart);
  }

  getMes(indexOfMonth: number) {
    return this.month[indexOfMonth];
  }

  // ------------------------------- FIM Meses


  // ------------------------------- Dias

  getDays() {
    this.extractDaysPeriods();
    var dates = this.getDates(this.datasSemanas[0], this.datasSemanas[1]);
    console.log(dates);
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
    while(contador <= horaFinal){
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

  }


  /*

  var dates = this.getDates(new Date(2013,10,22), new Date(2013,11,25));
    console.log(dates);

  getRangeOfDates(start, end, key, arr = [start.startOf(key)]) {
    
    if(start.isAfter(end)) throw new Error('start must precede end')
    
    const next = this.moment(start).add(1, key).startOf(key);
    
    
    if(next.isAfter(end, key)) return arr;
    
  
    return this.getRangeOfDates(next, end, key, arr.concat(next));
    
  }*/

}