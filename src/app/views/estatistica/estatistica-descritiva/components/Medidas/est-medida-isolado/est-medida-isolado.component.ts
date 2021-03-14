import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';
import { count } from 'rxjs/operator/count';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'est-medida-isolado',
  templateUrl: './est-medida-isolado.component.html',
  styleUrls: ['./est-medida-isolado.component.scss']
})
export class EstMedidaIsoladoComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = false;

  public qtdTotal: number = 44;
  public media: number = 7.333;
  public tamanho: number = 0;
  public mediana: number = 7;
  public moda: object[];
  public amplitude: Number = 3;
  public desvio: number = 1.0328;
  public varianci: number = 1.067;
  public coefVariacao: number = 14.084;
  public desvioPop: number = 0.943;
  public varianciaPop: number = 0.889;
  public coefVariacaoPop: number = 12.856;

  public title: string = 'Idade dos estudantes da turma XXy';
  public dados: number[] = [7, 8, 7, 9, 7, 6];
  public dadoInput: string = '7 - 8 - 7 - 9 - 7 - 6';
  public fonteDados: string = 'Dados Fictícios';
  public firstTime: boolean = true;

  public repetidas: object = {};

  public numerosRep: Object = null;
  public frequenciaAbs: number[] = [1, 3, 1, 1];
  public frequenciaAbsSoma: number = 6;
  public formulaMedia: string = '7 + 8 + 7 + 9 + 7 + 6';
  public dadosXi: string[] = ['6', '7', '8', '9'];
  public valorModa: number[] = [7];
  public formulaModa: string = ' 7 é o número que mais se repete.';
  public resultadoModa: string = '7';
  public tipoModa: string = 'unimodal';
  public numerosOrdenadosMediana:string = '6 - 7 - 7 - 7 - 8 - 9';
  public limiteSuperior: number = 9;
  public limiteInferior: number = 6;
  public somatorioXi: string = '7² + 8² + 7² + 9² + 7² + 6²';
  public xiQuadrado:number = 328;
  public n:number = 6;
  public isAmostra: boolean = true;

  constructor() { }

  ngOnInit() {
    registerLocaleData(pt);
  }

  // Botoões de navegação
  buttons: Object[] = [
    { title: "Dados Isolados", route: "est_medida_isolado" },
    { title: "Dados Agrupados", route: "est_medida_agrupado" },
    { title: "Dados em Classes", route: "est_medida_classe" }
  ];

  changeDados() {
    //console.log('chamada da funcao');
    this.cleanVariables();
    this.dados = [];
    let valores = this.dadoInput.split('-');
    for (let index = 0; index < valores.length; index++) {
      this.dados[index] = Number(valores[index]);
    }
    this.n = this.dados.length;
    this.somaQuant();
    this.somaFreqAcumulada();
    this.ordenaValores();
    this.ordenaValoresMediana();
    this.contaNumerosRepetidos();
    this.extraiNumerosRepetidos();
    this.modaCalc();
    this.formatFormulaModa();
    this.calculaMedia();
    this.aplicaNumerosFormulaMedia();
    this.AgrupaArray();
    this.calculaModa();
    this.calculaMediana();
    this.amplitudeTotal();
    this.desvioPadrão();
    this.calculaSomatorioXi();
    this.criaValoresSomatorioXi();
    this.variancia();
    this.coeficienteVariacao();

    //Populacao
    this.desvioPadrãoPopulacao();
    this.varianciaPopulacao();
    this.coeficienteVariacaoPopulacao();
  }

  cleanVariables() {
    if (this.firstTime) {
      this.dados = [];
      this.firstTime = false;
    }
  }

  //Isolados/Populaçõa
  calculaMedia() {
    this.somaQuant();
    this.media = this.qtdTotal / this.dados.length;
  }

  somaQuant() {
    this.qtdTotal = this.dados.reduce(function (total, numero) {
      return total + numero;
    }, 0);
  }

  AgrupaArray() {
    const collettion = this.dados;

    let mapper = {}

    collettion.forEach(element => {
      if (mapper[element]) {
        mapper[element].count = mapper[element].count + 1
        return
      }

      mapper = {
        ...mapper,
        [element]: { count: 1 }
      }

    });
    this.repetidas = mapper;
  }

  //Isolados/Populaçõa
  calculaModa() {
    let isGreater: object = {};
    const repetidasArray = Object.entries(this.repetidas);

    repetidasArray.forEach(element => {
      //console.log('element', element[1]);
      const count = element && element[1] && element[1].count ? element[1].count : 0;
      const isGreaterCount = isGreater && isGreater[1] && isGreater[1].count ? isGreater[1].count : 0;

      //console.log('count', count);
      //console.log('isGreaterCount', isGreaterCount);

      if (count > isGreaterCount) isGreater = element;
      //arrumar pra bimodal
      // if(count == isGreaterCount) {
      //   let modaUm = element;
      //   let modaDois = isGreater
      //   isGreater={modaUm, modaDois};
      // }


    });
    //this.moda = isGreater;
    //console.log('Moda', isGreater);
  }

  //Isolados/Populaçõa
  calculaMediana() {
    const dadosLength = this.dados.length % 2;
    const dadosOrdenados: number[] = this.dados.sort();
    const medianaTemp: number = dadosOrdenados.length / 2;

    if (dadosLength == 0) {
      this.mediana = (dadosOrdenados[medianaTemp - 1] + dadosOrdenados[medianaTemp]) / 2;
    }
    else {
      const medianaArrendonda = Math.floor(medianaTemp);
      this.mediana = dadosOrdenados[medianaArrendonda];
    }
  }

  //Isolados/Populaçõa
  amplitudeTotal() {
    this.dados.sort(function (a, b) { return a - b });
    this.limiteInferior = this.dados[0];
    this.limiteSuperior = this.dados[this.dados.length - 1];
    this.amplitude = this.limiteSuperior - this.limiteInferior;
  }

  //Isolado
  desvioPadrão() {
    let somatorio: number = 0;        

    for (let index = 0; index < this.dados.length; index++) {
      somatorio += Math.pow(this.dados[index] - this.media, 2);
    }
    let divisao: number = somatorio / (this.dados.length - 1)
    this.desvio = Math.sqrt(divisao);
  }

  //Isolado
  variancia() {
    this.varianci = Math.pow(this.desvio, 2);
  }

  //Isolado
  coeficienteVariacao() {
    this.coefVariacao = (this.desvio / this.media) * 100
  }

  //População
  desvioPadrãoPopulacao() {
    let somatorioPop: number = 0;

    for (let index = 0; index < this.dados.length; index++) {
      somatorioPop += Math.pow(this.dados[index] - this.media, 2);
    }

    let divisao: number = somatorioPop / (this.dados.length);
    this.desvioPop = Math.sqrt(divisao);
  }

  //População
  varianciaPopulacao() {
    this.varianciaPop = Math.pow(this.desvioPop, 2);
  }

  //População
  coeficienteVariacaoPopulacao() {
    this.coefVariacaoPop = (this.desvioPop / this.media) * 100
  }


  ////////////////////////////////////////////////////////////////////////////


  /**
     * Percorre o array dados contando os valores repetidos e os eliminando
     */
  contaNumerosRepetidos() {
    this.numerosRep = this.dados.reduce(function (object, item) {
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
    this.frequenciaAbs = [];
    this.dadosXi = [];
    for (const key in this.numerosRep) {
      this.dadosXi.push(String(key));
      this.frequenciaAbs.push(this.numerosRep[key]);
    }
  }

  modaCalc() {
    this.valorModa = [];
    var max = this.frequenciaAbs.reduce(function (a, b) {
      return Math.max(a, b);
    });
    var count = 0
    for (const key in this.numerosRep) {
      if ((max == this.numerosRep[key])) {
        this.valorModa.push(Number(key));
      }
    }
    if (this.valorModa.length == 0) {
      this.tipoModa = 'amodal';
    } else if (this.valorModa.length == 1) {
      this.tipoModa = 'unimodal';
    } else if (this.valorModa.length == 2) {
      this.tipoModa = 'bimodal';
    } else if (this.valorModa.length > 2) {
      this.tipoModa = 'multimodal';
    }
  }

  formatFormulaModa() {
    this.formulaModa = '';
    this.resultadoModa = '';
    if (this.valorModa.length != 0) {

      if (this.valorModa.length == 1) {
        this.formulaModa += ' e '+ this.valorModa[0] + ' é o número que mais se repete.';
        this.resultadoModa += this.valorModa[0];
      } else if (this.valorModa.length > 1) {
        this.formulaModa += ' os números ' + this.valorModa[0];
        this.resultadoModa += this.valorModa[0];
        for (let i = 1; i < this.valorModa.length; i++) {
          this.formulaModa +=  ' e ' +this.valorModa[i];
          this.resultadoModa += ' e ' + this.valorModa[i];
        }
        this.formulaModa += ' são os que mais se repetem.';
      }
    }
  }

  aplicaNumerosFormulaMedia() {
    //var teste = [7,8,7,9,7,6]
    this.formulaMedia = '';
    this.formulaMedia += this.dados[0] + ' + ';
    for (let i = 1; i < this.dados.length - 1; i++) {
      this.formulaMedia += this.dados[i] + ' + ';
    }
    this.formulaMedia += this.dados[this.dados.length - 1]
  }

  /**
* Ordena os valores do menor para o maior
*/
  ordenaValores() {
    this.dados.sort(function (a, b) {
      return a - b;
    });
  }

  ordenaValoresMediana(){
    this.numerosOrdenadosMediana = '';
    this.numerosOrdenadosMediana += this.dados[0];
    for (let i = 1; i < this.dados.length; i++) {
      this.numerosOrdenadosMediana += ' -' + this.dados[i]; 
    }
  }

  calculaSomatorioXi(){
    this.xiQuadrado = 0;
    for (let i = 0; i < this.dados.length; i++) {
      this.xiQuadrado += (this.dados[i] * this.dados[i]);
    }
  }

  criaValoresSomatorioXi(){
    var valores = this.dadoInput.split('-');
    this.somatorioXi = '';
    this.somatorioXi += valores[0];
    for (let i = 1; i < valores.length; i++) {
     this.somatorioXi += '² +'+ valores[i];
    }
    this.somatorioXi += '²';
  }

  somaFreqAcumulada() {
    this.frequenciaAbsSoma = this.frequenciaAbs.reduce(function (total, numero) {
      return total + numero;
    }, 0);
  }

  setRadio(isAmostra: boolean){
    this.isAmostra = isAmostra;
  }

}