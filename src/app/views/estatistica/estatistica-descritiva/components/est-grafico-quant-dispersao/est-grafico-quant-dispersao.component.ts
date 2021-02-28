import { Component, OnInit, Input } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ApexOptions } from 'apexcharts';

class Coordenada {

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  x: number;
  y: number
}

let dadosXY = [];

@Component({
  selector: 'ifmath-est-grafico-quant-dispersao',
  templateUrl: './est-grafico-quant-dispersao.component.html',
  styleUrls: ['./est-grafico-quant-dispersao.component.scss']
})
export class EstGraficoQuantDispersaoComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = true;
  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;

  public quantidade: number[] = [12, 7, 4, 1, 7];
  public quantInput: string = '';
  public title: string = 'Efeito da temperatura no desempenho do XX';
  public fonteDados: string = 'Dados Fictícios';
  public firstTime: boolean = true;
  public qtdTotal: number = 0;

  /////////////////////////////
  public titleVarX: string = 'Temperatura em °C';
  public dadosXInput: string = '100 - 110 - 120 - 130 - 140 - 150';
  public dadosX: number[] = [100, 110, 120, 130, 140, 150];
  public titleVarY: string = 'Desempenho em litros (l)';
  public dadosYInput: string = '45 - 51 - 54 - 61 - 66 - 70';
  public dadosY: number[] = [45, 51, 54, 61, 66, 70];
  public coodenada: Coordenada[] = [{ x: 100, y: 45 }, { x: 110, y: 51 }];
  public equal: boolean = true;

  constructor() {
  }

  ngOnInit() {
    registerLocaleData(pt);
    this.initializeDadosXY();
    this.initializeChart();
  }

  initializeDadosXY() {
    var int1 = [100, 45];
    var int2 = [110, 51];
    var int3 = [120, 54];
    var int4 = [130, 61];
    var int5 = [140, 66];
    var int6 = [150, 70];

    dadosXY.push(int1);
    dadosXY.push(int2);
    dadosXY.push(int3);
    dadosXY.push(int4);
    dadosXY.push(int5);
    dadosXY.push(int6);
    console.log(JSON.stringify(dadosXY))
  }

  addCoordenadaIntoDadosXY() {
    this.coodenada = [];
    dadosXY = [];
    if (this.verifyInputsLength()) {
      for (let i = 0; i < this.dadosX.length; i++) {
        this.coodenada.push(new Coordenada(this.dadosX[i], this.dadosY[i]));
      }
      dadosXY = this.coodenada.map(Object.values);
      this.updateChart();
      //console.log(JSON.stringify(dadosXY))
    }
  }

  changeDadosX() {
    this.dadosX = [];
    var valores = this.dadosXInput.split('-');
    for (let index = 0; index < valores.length; index++) {
      this.dadosX[index] = Number(valores[index]);
    }
    this.addCoordenadaIntoDadosXY();
  }

  changeDadosY() {
    this.dadosY = [];
    var valores = this.dadosYInput.split('-');
    for (let index = 0; index < valores.length; index++) {
      this.dadosY[index] = Number(valores[index]);
    }
    this.addCoordenadaIntoDadosXY();
  }

  verifyInputsLength(): boolean {
    this.equal = this.dadosY.length == this.dadosX.length ? true : false;
    console.log("Booleano: ",this.equal);
    return this.equal;
  }

  removeElements() {
    this.chart.destroy();
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
        series: [{
          name: "SAMPLE A",
          data: dadosXY
        }],
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: false,
            type: 'xy'
          }
        },
        title: {
          text: "Efeito da temperatura no desempenho do XX",
          align: 'center'
        },
        xaxis: {
          title: {
            text: "Temperatura em °C"
          },
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7,
          title: {
            text: "Desempenho em litros (l)",
          }
        }
      };

      this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
      this.chart.render();
    }
  }


  initializeChart() {
    if (this.noError && !(this.errorInput)) {
      this.chartOptions = {
        series: [{
          name: "SAMPLE A",
          data: dadosXY
        }],
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: false,
            type: 'xy'
          }
        },
        title: {
          text: "Efeito da temperatura no desempenho do XX",
          align: 'center'
        },
        xaxis: {
          title: {
            text: "Temperatura em °C"
          },
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7,
          title: {
            text: "Desempenho em litros (l)",
          }
        }
      };

      this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
      this.chart.render();

    }
  }

}
