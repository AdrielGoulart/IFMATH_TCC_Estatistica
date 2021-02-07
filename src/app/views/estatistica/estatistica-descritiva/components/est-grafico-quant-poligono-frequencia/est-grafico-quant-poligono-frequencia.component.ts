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
  selector: 'ifmath-est-grafico-quant-poligono-frequencia',
  templateUrl: './est-grafico-quant-poligono-frequencia.component.html',
  styleUrls: ['./est-grafico-quant-poligono-frequencia.component.scss']
})
export class EstGraficoQuantPoligonoFrequenciaComponent implements OnInit {

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
  public textButton: string = 'Ver Histograma';
  public isHistogram: boolean = false;

  public dadosBrutosInput: string = '3-3.6-3.8-3.9-4-4-4-4.2-4.5-4.7-5-5-5.1-5.4-5.7-5.8-5.8-5.8-5.9-5.9-6-6-6-6-6.1-6.3-6.3-6.3-6.5-6.5-6.7-6.8-6.8-6.9-7-7-7.2-7.2-7.2-7.3-7.4-7.5-7.6-7.6-7.8-8.2-8.6-8.8-9-9';
  public dadosBrutos: number[] = [3, 3.6, 3.8, 3.9, 4, 4, 4, 4.2, 4.5, 4.7, 5, 5, 5.1, 5.4, 5.7, 5.8, 5.8, 5.8, 5.9, 5.9, 6, 6, 6, 6, 6.1, 6.3, 6.3, 6.3, 6.5, 6.5, 6.7, 6.8, 6.8, 6.9, 7, 7, 7.2, 7.2, 7.2, 7.3, 7.4, 7.5, 7.6, 7.6, 7.8, 8.2, 8.6, 8.8, 9, 9];
  public limiteSup: number = 9;
  public limiteInf: number = 3;
  public amplitudeTot: number = 6;
  public intervaloCla: number = 0.9;
  public nClasses: number = 7;
  public n: number = 50;
  public numerosRep: Object = null;
  public allIntervals: number[] = [3, 3.9, 4.8, 5.7, 6.6, 7.5, 8.4, 9.3];
  public tableElements: TableElements[] = [];
  public frequenciaAbs: number[] = [3, 7, 4, 16, 11, 5, 4];
  public frequenciaAbsAc: number[] = [3, 10, 14, 30, 41, 46, 50];
  public frequenciaRel: number[] = [6, 14, 8, 32, 22, 10, 8];
  public frequenciaRelAc: number[] = [6, 20, 28, 60, 82, 92, 100];
  public valorMed: number[] = [3.45, 4.35, 5.25, 6.15, 7.05, 7.95, 8.85];

  constructor() { }

  ngOnInit() {

    this.InicializePoligonoChart();
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
    this.selectChart();
  }

  selectChart(){
    if(this.isHistogram){
      this.updateHistogramaChart();
    }else{
      this.updatePoligonoChart();
    }
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
        this.allIntervals.push((Number.isInteger(countInter)) ? countInter : parseFloat(countInter.toFixed(1)));

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

  /**
   * Essa Função por enquanto não se faz necessária, sua criação se deu em virtude o gráfico
   * estar arredondando os valores, mas consegui encontrar uma função dele para resolver o problema
   
  convertIntervals(){
    this.allIntervalsString = [];
    for (let index = 0; index < this.allIntervals.length; index++) {
      this.allIntervalsString.push(String(this.allIntervals[index]));
    }
  }*/

  changeNClasses() {
    this.intervaloClasses();
    this.contaNumerosRepetidos();
    this.formaIntervalos();
    this.frequenciaAbsoluta();
    this.frequenciaAbsolutaGrafico();
    this.frequenciaAcumulada();
    this.frequenciaRelativa();
    this.frequenciaRelativaAcumulada();
    this.valorMedio();
    this.selectChart();
  }


  removeElements() {
    this.chart.destroy();
  }


  changeChart(){
    if(this.isHistogram){
      this.isHistogram = false;
      this.updatePoligonoChart();
    }else{
      this.isHistogram = true;
      this.updateHistogramaChart();
    }
  }

  updateHistogramaChart() {
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

          style: {
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
          categories: this.allIntervals,
          labels: {
            formatter: function (val) {
              return String((Number.isInteger(Number(val))) ? Number(val) : parseFloat(Number(val).toFixed(1)))
            }
          },
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

  InicializePoligonoChart() {
    var valorMedio = this.valorMed.slice();
    var frequenciaAbs = this.frequenciaAbs.slice();
    valorMedio.push(this.valorMed[this.valorMed.length - 1] + this.intervaloCla);
    valorMedio.unshift(this.valorMed[0] - this.intervaloCla);
    frequenciaAbs.unshift(0);
    frequenciaAbs.push(0);
    //this.removeElements()
    this.chartOptions = {
      series: [
        {
          name: "frequência",
          data: frequenciaAbs
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
        align: "center"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: valorMedio,
        labels: {
          formatter: function (val) {
            return String((Number.isInteger(Number(val))) ? Number(val) : parseFloat(Number(val).toFixed(2)))
          }
        },
      }
    };

    this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    this.chart.render();
  }

  updatePoligonoChart() {
    if (this.noError && !(this.errorInput)) {
      var valorMedio = this.valorMed.slice();
      var frequenciaAbs = this.frequenciaAbs.slice();
      valorMedio.push(this.valorMed[this.valorMed.length - 1] + this.intervaloCla);
      valorMedio.unshift(this.valorMed[0] - this.intervaloCla);
      frequenciaAbs.unshift(0);
      frequenciaAbs.push(0);
      this.removeElements();
      this.chartOptions = {
        series: [
          {
            name: "frequência",
            data: frequenciaAbs
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
          align: "center"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: valorMedio,
          labels: {
            formatter: function (val) {
              return String((Number.isInteger(Number(val))) ? Number(val) : parseFloat(Number(val).toFixed(2)))
            }
          },
        }
      };

      this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
      this.chart.render();
    }
  }

}



/*var options = {
  series: [{
  name: 'Website Blog',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Social Media',
  type: 'line',
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  width: [0, 4]
},
title: {
  text: 'Traffic Sources'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
xaxis: {
  type: 'datetime'
},
yaxis: [{
  title: {
    text: 'Website Blog',
  },

}, {
  opposite: true,
  title: {
    text: 'Social Media'
  }
}]
};*/