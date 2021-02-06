import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

export class TableElements {
  intervalo: string;
  frequenciaAbs: number;
  frequenciaAbsAc: number;
  frequenciaRel: number;
  frequenciaRelAc: number;
}

@Component({
  selector: 'ifmath-est-grafico-quant-histograma',
  templateUrl: './est-grafico-quant-histograma.component.html',
  styleUrls: ['./est-grafico-quant-histograma.component.scss']
})
export class EstGraficoQuantHistogramaComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = true;
  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;
  public varQuant: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public varQuantInput: string = '7-8-5-8-4-5-7-9-10-1-1-2-3-4-3-1-9-5-4-6-8';
  public quantidade: number[] = [7, 8, 5, 8, 4, 5, 7, 9, 10, 1, 1, 2, 3, 4, 3, 1, 9, 5, 4, 6, 8];

  public title: string = 'Notas da turma XY na avaliação I de Cálculo';
  public fonteDados: string = 'Dados Fictícios';
  public firstTime: boolean = true;
  public qtdTotal: number = 0;

  public dadosBrutosInput: string = '3-3.6-3.8-3.9-4-4-4-4.2-4.5-4.7-5-5-5.1-5.4-5.7-5.8-5.8-5.8-5.9-5.9-6-6-6-6-6.1-6.3-6.3-6.3-6.5-6.5-6.7-6.8-6.8-6.9-7-7-7.2-7.2-7.2-7.3-7.4-7.5-7.6-7.6-7.8-8.2-8.6-8.8-9-9';
  public dadosBrutos: number[] = [3,3.6,3.8,3.9,4,4,4,4.2,4.5,4.7,5,5,5.1,5.4,5.7,5.8,5.8,5.8,5.9,5.9,6,6,6,6,6.1,6.3,6.3,6.3,6.5,6.5,6.7,6.8,6.8,6.9,7,7,7.2,7.2,7.2,7.3,7.4,7.5,7.6,7.6,7.8,8.2,8.6,8.8,9,9];
  public limiteSup: number = 9;
  public limiteInf: number = 3;
  public amplitudeTot: number = 6;
  public intervaloCla: number = 1;
  public nClasses: number = 7;
  public n: number = 50;
  public numerosRep: Object = null;
  public allIntervals: number[] = [3, 4, 5, 6, 7, 8, 9, 10];
  public allIntervalsString: string[] = [];
  public tableElements: TableElements[] = [];
  public frequenciaAbs: number[] = [4, 6, 10, 14, 11, 3, 2];
  public frequenciaAbsAc: number[] = [4, 10, 20, 34, 45, 48, 50];
  public frequenciaRel: number[] = [8, 12, 20, 28, 22, 6, 4];
  public frequenciaRelAc: number[] = [8, 20, 40, 68, 90, 96, 100];
  public valorMed: number[] = [3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5];

  constructor() { }

  ngOnInit() {

    this.InicializeChart();
  }


  changeDados() {
    var valor = this.dadosBrutosInput.split('-');
    this.n = valor.length;
    for (let index = 0; index < valor.length; index++) {
      this.dadosBrutos[index] = Number(valor[index]);
    }
    this.rol();
    this.amplitudeTotal();
    this.numeroClasses();
    this.intervaloClasses();
    this.contaNumerosRepetidos();
    this.formaIntervalos();
    this.frequenciaAbsoluta();
    this.frequenciaAbsolutaGrafico();
    this.frequenciaAcumulada();
    this.frequenciaRelativa();
    this.frequenciaRelativaAcumulada();
    this.valorMedio();
    this.convertIntervals();
    this.updateChart();
  }

  formaIntervalos() {
    var tabela = null;
    var countInter = 0;
    this.allIntervals = [];
    this.tableElements = [];
    countInter = this.limiteInf + this.intervaloCla;
    this.allIntervals.push(this.limiteInf, countInter);

    for (let index = 0; index < this.nClasses; index++) {
      tabela = new TableElements();
      if (index == 0) {
        //this.intervalos[index] = this.limiteInf + " |----| " + countInter;
        tabela.intervalo = this.limiteInf + " |----> " + countInter
        this.tableElements.push(tabela);

      } else {
        //this.intervalos[index] = countInter + " |----| " + (countInter + this.intervaloCla);
        tabela.intervalo = countInter + " |----> " + (countInter + this.intervaloCla);
        this.tableElements.push(tabela);
        countInter += this.intervaloCla;
        this.allIntervals.push( (Number.isInteger(countInter)) ? countInter : parseFloat(countInter.toFixed(1)));
       
      }
    }
  }

  contaNumerosRepetidos() {
    this.numerosRep = [];
    this.numerosRep = this.dadosBrutos.reduce(function (object, item) {
      //console.log( object , item ); 
      if (!object[item]) {
        object[item] = 1;
      } else {
        object[item]++;
      }
      return object;
    }, {})
  }

  /**
 * Ordena os valores do menor para o maior
 */
  rol() {
    this.dadosBrutos.sort(function (a, b) {
      return a - b;
    });
    this.limiteInf = this.dadosBrutos[0];
    this.limiteSup = this.dadosBrutos[this.n - 1];
  }

  //////https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
  frequenciaAbsoluta() {
    var k = 0;
    var countRep = 0;
    for (let index = 0; index < this.allIntervals.length; index++) {
      countRep = 0;
      if (index + 1 != null) {
        for (const key in this.numerosRep) {
          if (this.numerosRep.hasOwnProperty(key)) {
            //A key retorna o número(o que está nos dados brutos) e aplicando ela no vetor 
            //aparece quantas vezes o número repete 
            k = Number(key);
            if (k >= this.allIntervals[index] && k < this.allIntervals[index + 1]) {
              countRep += this.numerosRep[key];
              this.tableElements[index].frequenciaAbs = countRep;
            }
          }
        }
      }
    }
  }

  frequenciaAbsolutaGrafico() {
    this.frequenciaAbs = []
    for (const freqAbs in this.tableElements) {
      if (Object.prototype.hasOwnProperty.call(this.tableElements, freqAbs)) {
        this.frequenciaAbs.push(this.tableElements[freqAbs].frequenciaAbs);
      }
    }
  }

  frequenciaAcumulada() {
    this.frequenciaAbsAc = [];
    var count = 0;
    this.frequenciaAbsAc.push(this.frequenciaAbs[0]);
    count = this.frequenciaAbsAc[0];
    for (let index = 1; index < this.frequenciaAbs.length; index++) {
      count += this.frequenciaAbs[index];
      this.frequenciaAbsAc.push(Number(count.toFixed(2)));
    }
  }

  frequenciaRelativa() {
    this.frequenciaRel = [];
    for (let index = 0; index < this.frequenciaAbs.length; index++) {
      this.frequenciaRel.push(Number(((this.frequenciaAbs[index] / this.n) * 100).toFixed(2)));
    }
  }

  frequenciaRelativaAcumulada() {
    this.frequenciaRelAc = [];
    var count = 0;
    this.frequenciaRelAc.push(this.frequenciaRel[0]);
    count = this.frequenciaRelAc[0];
    for (let index = 1; index < this.frequenciaRel.length; index++) {
      count += this.frequenciaRel[index];
      this.frequenciaRelAc.push(Number(count.toFixed(2)));
    }
  }

  valorMedio() {
    this.valorMed = [];
    var countValMed = 0;
    for (let index = 0; index < this.allIntervals.length; index++) {
      if (index != this.allIntervals.length - 1) {
        countValMed = Number((this.allIntervals[index] + this.allIntervals[index + 1]) / 2);
        this.valorMed.push((Number.isInteger(countValMed)) ? countValMed : parseFloat(countValMed.toFixed(2)));
      }
    }
  }

  amplitudeTotal() {
    this.amplitudeTot = this.limiteSup - this.limiteInf;
    //console.log("Amplitude total(At): ", this.amplitudeTot);
  }

  numeroClasses() {
    this.nClasses = Math.round(1 + (3.33 * (Math.log10(this.n))));
    //console.log("Número de Classes(c): ", this.nClasses);
  }

  intervaloClasses() {
    this.intervaloCla = (this.amplitudeTot / this.nClasses);
    this.intervaloCla = (Number.isInteger(this.intervaloCla)) ? this.intervaloCla : parseFloat(this.intervaloCla.toFixed(1));
    //console.log("Intevalos de Classe(i): ", this.intervaloCla);
  }

  convertIntervals(){
    this.allIntervalsString = [];
    for (let index = 0; index < this.allIntervals.length; index++) {
      this.allIntervalsString.push(String(this.allIntervals[index]));
    }
  }

  changeNClasses(){
    this.intervaloClasses();
    this.contaNumerosRepetidos();
    this.formaIntervalos();
    this.frequenciaAbsoluta();
    this.frequenciaAbsolutaGrafico();
    this.frequenciaAcumulada();
    this.frequenciaRelativa();
    this.frequenciaRelativaAcumulada();
    this.valorMedio();
    this.convertIntervals();
    this.updateChart();
  }


  removeElements() {
    this.chart.destroy();
  }


  updateChart() {
    if (this.noError && !(this.errorInput)) {
      this.removeElements()
      this.chartOptions = {
        series: [{
          name: "Quantidade",
          data: this.frequenciaAbs
        }],
        chart: {
          type: "histogram",
          height: 380,
          foreColor: "#999",
        },
        title: {
          text: this.title,
          align: 'center',

          style:{
            color: '#000000'
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        states: {
          active: {
            allowMultipleDataPointsSelection: true
          }
        },
        xaxis: {
          //offsetX: -50,
          range: 2,
          categories: this.allIntervalsString,
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          tickAmount: 4,
          labels: {
            offsetX: -5,
            offsetY: -5
          },
        },
      };
      this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
      this.chart.render();
    }
  }

  InicializeChart() {
    this.chartOptions = {
      series: [{
        name: "Quantidade",
        data: this.frequenciaAbs
      }],
      chart: {
        type: "histogram",
        height: 380,
        foreColor: "#999",
      },
      title: {
        text: this.title,
        align: 'center',

        style:{
          color: '#000000'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            hideOverflowingLabels: false,
          }
        }
      },
      states: {
        active: {
          allowMultipleDataPointsSelection: true
        }
      },
      xaxis: {
        categories: this.allIntervals,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        labels: {
          offsetX: -5,
          offsetY: -5
        },
      },
    };
    this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    this.chart.render();
  }

}
