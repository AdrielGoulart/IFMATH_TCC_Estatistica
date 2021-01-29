import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'ifmath-est-grafico-quant-colunas',
  templateUrl: './est-grafico-quant-colunas.component.html',
  styleUrls: ['./est-grafico-quant-colunas.component.scss']
})
export class EstGraficoQuantColunasComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = true;
  public chartOptions: Partial<ApexOptions>;
  public chart: ApexCharts;
  public varQuant: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10'];
  public varQuantInput: string = '7-8-5-8-4-5-7-9-10-1-1-2-3-4-3-1-9-5-4-6-8';
  public quantidade: number[] = [7, 8, 5, 8, 4, 5, 7, 9, 10, 1, 1, 2, 3, 4, 3, 1, 9, 5, 4, 6, 8];
  public frequenciaAbs: number[] = [3, 1, 2, 3, 3, 1, 2, 3, 2, 1];
  public numerosRep: Object = null;
  public title: string = 'Notas da turma XY na avaliação I de Cálculo';
  public fonteDados: string = 'Dados Fictícios';
  public nomeVariavel: string = 'Notas';
  public firstTime: boolean = true;
  public qtdTotal: number = 0;


  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: this.nomeVariavel,
          data: this.frequenciaAbs
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
        categories: this.varQuant,
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
   * Método Chamado toda vez que o valor da variável varQuantInput
   * for alterada
   */
  changeVarQuant() {
    var valores = this.varQuantInput.split('-');
    this.quantidade = [];
    for (let index = 0; index < valores.length; index++) {
      this.quantidade.push(Number(valores[index]));
    }
    this.ordenaValores();
    this.contaNumerosRepetidos();
    this.extraiNumerosRepetidos();
    this.somaQuant();
    this.updateChart();
  }

  /**
 * Ordena os valores do menor para o maior
 */
  ordenaValores() {
    this.quantidade.sort(function (a, b) {
      return a - b;
    });
  }

  /**
   * Percorre o array quantidade contando os valores repetidos e os eliminando
   */
  contaNumerosRepetidos() {
    this.numerosRep = this.quantidade.reduce(function (object, item) {
      //console.log(object, item);
      if (!object[item]) {
        object[item] = 1;
      } else {
        object[item]++;
      }
      return object;
    }, {})
  }

  /**
   * Extrai do objeto dos números repetidos os seus valores e a quantidade de 
   * vezes que se repetem, colocando esses dados em variáveis para a construção da tabela
   */
  extraiNumerosRepetidos() {
    this.varQuant = [];
    this.frequenciaAbs = [];
    for (const key in this.numerosRep) {
      this.varQuant.push(String(key));
      this.frequenciaAbs.push(this.numerosRep[key]);
    }
  }

  removeElements() {
    this.chart.destroy();
  }

  /**
   * Soma todos os valores da coluna fi da tabela
   */
  somaQuant() {
    this.qtdTotal = this.frequenciaAbs.reduce(function (total, numero) {
      return total + numero;
    }, 0);
  }

  updateChart() {
    if (this.noError && !(this.errorInput)) {
      this.removeElements()
      this.chartOptions = {
        series: [
          {
            name: this.nomeVariavel,
            data: this.frequenciaAbs
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
          categories: this.varQuant,
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
