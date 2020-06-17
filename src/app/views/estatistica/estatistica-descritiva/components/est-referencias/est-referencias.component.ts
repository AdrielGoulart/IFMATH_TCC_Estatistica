import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';

export class TableElements {
  intervalo: string;
  frequenciaAbs: number;
  frequenciaAbsAc: number;
  frequenciaRel: number;
  frequenciaRelAc: number;
}

@Component({
  selector: 'ifmath-est-referencias',
  templateUrl: './est-referencias.component.html',
  styleUrls: ['./est-referencias.component.scss']
})
export class EstReferenciasComponent implements OnInit {

  public valores: string;
  public dadosBrutos: number[] = [];
  public limiteSup: number = 0;
  public limiteInf: number = 0;
  public amplitudeTot: number = 0;
  public intervaloCla: number = 0;
  public nClasses: number = 0;
  public n: number = 0;
  public numerosRep: Object = null;
  public allIntervals: number[] = [];

  public tableElements: TableElements[] = [];

  constructor() { }

  ngOnInit() {

  }

  changeValue() {
    var valor = this.valores.split(',');
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
    this.frequenciaAcumulada();
  }

  formaIntervalos() {
    var tabela = null;
    var countInter = 0;
    countInter = this.limiteInf + this.intervaloCla;
    this.allIntervals.push(this.limiteInf, countInter);
    for (let index = 0; index < this.nClasses; index++) {
      tabela = new TableElements();
      if (index == 0) {
        //this.intervalos[index] = this.limiteInf + " |----| " + countInter;
        tabela.intervalo = this.limiteInf + " |----> " + countInter
        this.tableElements[index] = tabela;

      } else {
        //this.intervalos[index] = countInter + " |----| " + (countInter + this.intervaloCla);
        tabela.intervalo = countInter + " |----> " + (countInter + this.intervaloCla);
        this.tableElements[index] = tabela;
        countInter += this.intervaloCla;
        this.allIntervals.push(countInter);
      }
    }
    /*
    if(this.allIntervals[this.allIntervals.length] < this.limiteSup){
        this.intervaloCla +=1;
        this.formaIntervalos();
    }*/
    //console.log(this.intervalos);
  }

  contaNumerosRepetidos() {
    this.numerosRep = this.dadosBrutos.reduce(function (object, item) {
      //console.log( object , item ); 
      if (!object[item]) {
        object[item] = 1;
      } else {
        object[item]++;
      }
      return object;
    }, {})

    /*
    for (const key in this.numerosRep) {
      if (this.numerosRep.hasOwnProperty(key)) {
        //A key retorna o número(o que está nos dados brutos) e aplicando ela no vetor 
        //aparece quantas vezes o número repete 
        const element = this.numerosRep[key];
        console.log("número: ", key, " repetições", element);
      }
    }*/
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
    /*
    console.log(this.dadosBrutos);
    console.log("Lim Infe", this.limiteInf);
    console.log("Lim Sup", this.limiteSup);
*/
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
              countRep += this.numerosRep[key]
              //this.frequenciaAbs[index] = countRep;
              this.tableElements[index].frequenciaAbs = countRep;
            }
          }
        }
      }
    }
    //console.log("Frequência Absoluta: ",this.frequenciaAbs);
  }

  frequenciaAcumulada() {
    for (let index = 0; index < this.allIntervals.length; index++) {
      if (index == 0) {
        this.tableElements[index].frequenciaAbsAc = this.tableElements[index].frequenciaAbs;
      } else {
        this.tableElements[index].frequenciaAbsAc = this.tableElements[index].frequenciaAbs + 
        this.tableElements[index - 1].frequenciaAbsAc;
      }
    }
  }

  frequenciaRelativa() {

  }

  frequenciaRelaAcumulada() {

  }

  amplitudeTotal() {
    this.amplitudeTot = this.limiteSup - this.limiteInf;
    console.log("Amplitude total(At): ", this.amplitudeTot);
  }

  numeroClasses() {
    this.nClasses = Math.round(1 + (3.33 * (Math.log10(this.n))));
    console.log("Número de Classes(c): ", this.nClasses);
  }

  intervaloClasses() {
    this.intervaloCla = Math.round(this.amplitudeTot / this.nClasses);
    console.log("Intevalos de Classe(i): ", this.intervaloCla);
  }

  //https://pt.stackoverflow.com/questions/230967/ler-arquivo-txt
}
