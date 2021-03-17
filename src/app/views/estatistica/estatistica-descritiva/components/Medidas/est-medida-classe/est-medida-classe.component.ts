import { Component, OnInit } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'est-medida-classe',
  templateUrl: './est-medida-classe.component.html',
  styleUrls: ['./est-medida-classe.component.scss']
})
export class EstMedidaClasseComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = false;

  public qtdTotalfi: number = 6;
  public qtdTotalXi: number = 47;
  public qtdTotalxifiQuad: number = 373.5;
  public media: number = 7.833;
  public tamanho: number = 0;
  public mediana: number = 7.667;
  public amplitude: number = 1;
  public amplitudeTot: number = 4;
  public desvio: number = 1.011;
  public varianci: number = 1.022;
  public coefVariacao: number = 12.907;
  public desvioPop: number = 0.934;
  public varianciaPop: number = 0.889;
  public coefVariacaoPop: number = 12.036;
  public somafi: number = 0;
  public title: string = 'Idade dos estudantes da turma XXy';
  public limiteInferior: number[] = [6, 7, 8, 9];
  public limiteSuperior: number[] = [7, 8, 9, 10];
  public valorfi: number[] = [1, 3, 1, 1];
  public limiteInferiorInput: string = '6 - 7 - 8 - 9';
  public limiteSuperiorInput: string = '7 - 8 - 9 - 10';
  public valorfiInput: string = '1 - 3 - 1 - 1';
  public arrayFi: number[] = [1, 4, 5, 6];
  public valorXi: number[] = [6.5, 7.5, 8.5, 9.5];
  public valorxifi: number[] = [6.5, 22.5, 8.5, 9.5];
  public valorxifiQuad: number[] = [42.25, 168.75, 72.25, 90.25];
  public fonteDados: string = 'Dados Fictícios';
  public firstTime: boolean = true;
  public totalfi: number = 0;
  public aberto: number[] = [];
  public Q1: number = 7.167;
  public Q2: number = 0;
  public Q3: number = 8.5;
  public P10: number = 6.6;
  public P90: number = 9.4;
  public pearson1: number = 0.3294;
  public pearson2: number = 0.4926;
  public pearson1Pop: number = 0.361;
  public pearson2Pop: number = 0.542;
  public curtose: number = 0.2380;
  public moda: number = 7.5;

  public repetidas: object = {};

  public numerosRep: Object = null;
  public valorModa: number[] = [7];
  public formulaModa: string = ' 7,5 é o número que mais se repete.';
  public resultadoModa: string = '7,5';
  public tipoModa: string = 'unimodal';
  public limiteSuperiorLs: number = 9;
  public limiteInferiorLi: number = 6;
  public somatorioXi: string = '7² + 8² + 7² + 9² + 7² + 6²';
  public somatorioXiMediaP1: string = '7² + 8² + 7² + 9² + 7² + 6²';
  public isAmostra: boolean = true;
  public dados: number[] = [];

  //Desvio Padrão
  public somatorioDesvAmos: number = 5.11;
  public somatorioDesvPop: number = 5.11;
  //Mediana
  public frecAcAnt: number = 1;
  public frecClasse: number = 3;
  public limiteInfMed: number = 7;
  public limiteSupMed: number = 8;
  //Quartil Q1
  public frecAcAntQ1: number = 1;
  public frecClasseQ1: number = 3;
  public limiteInfQ1: number = 7;
  public limiteSupQ1: number = 8;
  //Quartil Q3
  public frecAcAntQ3: number = 4;
  public frecClasseQ3: number = 1;
  public limiteInfQ3: number = 8;
  public limiteSupQ3: number = 9;
  //Percentil P10
  public frecAcAntP10: number = 0;
  public frecClasseP10: number = 1;
  public limiteInfP10: number = 6;
  public limiteSupP10: number = 7;
  //Percentil 90
  public frecAcAntP90: number = 5;
  public frecClasseP90: number = 1;
  public limiteInfP90: number = 9;
  public limiteSupP90: number = 10;


  constructor() { }

  ngOnInit() {
    registerLocaleData(pt);
    this.criaSomatorioXiMedia();
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
    this.limiteInferior = [];
    this.limiteSuperior = [];
    this.valorfi = [];
    this.valorXi = [];
    this.valorxifi = [];

    let valoresLimInf = this.limiteInferiorInput.split('-');
    for (let index = 0; index < valoresLimInf.length; index++) {
      this.limiteInferior[index] = Number(valoresLimInf[index]);
    }
    //console.log('limites inf', this.limiteInferior);
    let valoresLimSup = this.limiteSuperiorInput.split('-');
    for (let index = 0; index < valoresLimSup.length; index++) {
      this.limiteSuperior[index] = Number(valoresLimSup[index]);
    }
    //console.log('limites sup', this.limiteSuperior);
    let valoresfi = this.valorfiInput.split('-');
    for (let index = 0; index < valoresfi.length; index++) {
      this.valorfi[index] = Number(valoresfi[index]);
    }

    if ((this.limiteSuperior.length == this.limiteInferior.length) && (this.limiteSuperior.length == this.valorfi.length)) {

      //console.log('valor if', this.valorfi);
      //calcula Xi
      for (let index = 0; index < this.limiteInferior.length; index++) {
        this.valorXi[index] = (this.limiteInferior[index] + this.limiteSuperior[index]) / 2;
      }
      //console.log('valor Xi', this.valorXi);
      //calcula xifi
      for (let index = 0; index < this.limiteInferior.length; index++) {
        this.valorxifi[index] = this.valorXi[index] * this.valorfi[index];
      }
      //console.log('valor xifi', this.valorxifi);

      let posicao: number = 0;
      for (let index = 0; index < this.valorXi.length; index++) {
        for (let i = 0; i < this.valorfi[index]; i++) {
          this.aberto[posicao] = this.valorXi[index];
          posicao++;
        }
      }

      //console.log('aberto', this.aberto);

      //this.verifyInputs();
      this.criaVetCompleto();
      this.calcXiFiQuadrado();
      this.somaQuant();
      this.calculaf1();
      this.calculaMedia();
      this.AgrupaArray();
      //console.log('moda:');
      this.calculaModa();
      this.calculaMediana();
      this.amplitudeTotal();
      this.desvioPadrão();
      this.variancia();
      this.coeficienteVariacao();
      this.quartil();
      this.percentil();
      this.pearson();
      this.calculaCurtose();

      //Populacao
      this.desvioPadrãoPopulacao();
      this.varianciaPopulacao();
      this.coeficienteVariacaoPopulacao();
      this.pearsonPopulacao();
    } 
  }

  cleanVariables() {
    if (this.firstTime) {
      this.limiteInferior = [];
      this.limiteSuperior = [];
      this.valorfi = [];
      this.firstTime = false;
      this.arrayFi = [];
      this.aberto = [];
    }
  }

  calculaf1() {
    //calcula fi
    this.totalfi = 0;
    for (let index = 0; index < this.valorfi.length; index++) {
      this.totalfi += this.valorfi[index];
      this.arrayFi[index] = this.totalfi;
    }
    //console.log('Array Fi', this.arrayFi);
  }

  //Isolados/Populaçõa
  calculaMedia() {
    let somaXifi: number = 0;
    this.qtdTotalXi = 0;
    this.somaQuant();
    for (let index = 0; index < this.valorxifi.length; index++) {
      somaXifi += this.valorxifi[index];
      this.qtdTotalXi += this.valorxifi[index];
    }
    //console.log('soma xifi', somaXifi);
    //console.log('total fi', this.totalfi);
    this.media = somaXifi / this.totalfi;
    //console.log('media', this.media);
  }

  somaQuant() {
    this.qtdTotalfi = this.valorfi.reduce(function (total, numero) {
      return total + numero;
    }, 0);
  }

  AgrupaArray() {
    const collettion = this.aberto;

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
    //console.log('MAPPER :::: ', mapper)
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
    //console.log('moda', isGreater);
  }

  //Isolados/Populaçõa
  calculaMediana() {
    let pontoMediana: number = this.totalfi / 2;
    let Lime: number = 0;
    let Fa: number = 0;
    let fme: number = 0;
    let i: number = 0;
    let indice: number = 0;

    for (let index = 0; index < this.arrayFi.length; index++) {

      if (pontoMediana <= this.arrayFi[index] && indice == 0) {

        Lime = this.limiteInferior[index];

        Fa = this.arrayFi[index - 1];
        fme = this.valorfi[index];
        i = this.limiteSuperior[index] - this.limiteInferior[index];
        indice++;
      }
      else {
        //console.log("erro");
      }
    }

    // console.log('lime', Lime);
    // console.log('Pme', pontoMediana);
    // console.log('Fa', Fa);
    // console.log('fme', fme);
    // console.log('i', i);

    this.mediana = Lime + ((pontoMediana - Fa) / fme) * i;
    this.limiteInfMed = Lime;
    this.frecAcAnt = Fa;
    this.frecClasse = fme;
    this.amplitude = i;

    //console.log('mediana', this.media);

  }

  //Isolados/Populaçõa
  amplitudeTotal() {
    let limSup: number = this.limiteSuperior.length;
    this.amplitudeTot = this.limiteSuperior[limSup - 1] - this.limiteInferior[0];
    this.limiteInferiorLi = this.limiteInferior[0];
    this.limiteSuperiorLs = this.limiteSuperior[limSup - 1];
    //console.log('amplitude', this.amplitude);
  }

  //Isolado
  desvioPadrão() {
    let somatorio: number = 0;

    for (let index = 0; index < this.valorfi.length; index++) {
      somatorio += (Math.pow(this.valorXi[index] - this.media, 2));
    }
    console.log('somatorio', somatorio);
    let divisao: number = somatorio / (this.totalfi - 1);
    this.desvio = Math.sqrt(divisao);
    this.somatorioDesvAmos = somatorio;
    //console.log('desvio', this.desvio);
  }

  //Isolado
  variancia() {
    this.varianci = Math.pow(this.desvio, 2);
    //console.log('variancia', this.varianci);
  }

  //Isolado
  coeficienteVariacao() {
    this.coefVariacao = (this.desvio / this.media) * 100
    //console.log('coef variacao', this.coefVariacao);
  }

  //População
  desvioPadrãoPopulacao() {
    let somatorioPop: number = 0;

    for (let index = 0; index < this.valorfi.length; index++) {
      somatorioPop += (Math.pow(this.valorXi[index] - this.media, 2));
    }
    let divisao: number = somatorioPop / (this.totalfi);
    this.desvioPop = Math.sqrt(divisao);
    this.somatorioDesvPop = somatorioPop;
    //console.log('desvio', this.desvio);
  }

  //População
  varianciaPopulacao() {
    this.varianciaPop = Math.pow(this.desvioPop, 2);
    //console.log('varianciaPop', this.varianciaPop);
  }

  //População
  coeficienteVariacaoPopulacao() {
    this.coefVariacaoPop = (this.desvioPop / this.media) * 100
    //console.log('coefPopu', this.coefVariacaoPop);
  }

  quartil() {
    let PQ1: number = (1 * this.totalfi) / 4;
    let Liq1: number = 0;
    let fa1: number = 0;
    let fq1: number = 0;
    let i1: number = 0;
    let indice1: number = 0;

    for (let index = 0; index < this.arrayFi.length; index++) {

      if (PQ1 <= this.arrayFi[index] && indice1 == 0) {
        Liq1 = this.limiteInferior[index];
        fa1 = this.arrayFi[index - 1];
        fq1 = this.valorfi[index];
        i1 = this.limiteSuperior[index] - this.limiteInferior[index];
        indice1++;
      }
      else {
        //console.log("erro");
      }
    }

    // console.log('liq1', Liq1);
    // console.log('PQ1', PQ1);
    // console.log('fa1', fa1);
    // console.log('fq1', fq1);
    // console.log('i1', i1);

    this.Q1 = Liq1 + ((PQ1 - fa1) / fq1) * i1;
    this.limiteInfQ1 = Liq1;
    this.frecAcAntQ1 = fa1;
    this.frecClasseQ1 = fq1
    this.amplitude = i1;

    //console.log('Q1', this.Q1);

    this.Q2 = this.mediana;

    //console.log('Q2', this.Q2);

    let PQ3: number = (3 * this.totalfi) / 4;
    let Liq3: number = 0;
    let fa3: number = 0;
    let fq3: number = 0;
    let i3: number = 0;
    let indice3: number = 0;

    for (let index = 0; index < this.arrayFi.length; index++) {

      if (PQ3 <= this.arrayFi[index] && indice3 == 0) {
        Liq3 = this.limiteInferior[index];
        fa3 = this.arrayFi[index - 1];
        fq3 = this.valorfi[index];
        i3 = this.limiteSuperior[index] - this.limiteInferior[index];
        indice3++;
      }
      else {
        //console.log("erro");
      }
    }

    // console.log('liq3', Liq3);
    // console.log('PQ3', PQ3);
    // console.log('fa3', fa3);
    // console.log('fq3', fq3);
    // console.log('i3', i3);

    this.Q3 = Liq3 + ((PQ3 - fa3) / fq3) * i3;
    this.limiteInfQ3 = Liq3;
    this.frecAcAntQ3 = fa3;
    this.frecClasseQ3 = fq3
    this.amplitude = i3;

    //console.log('Q3', this.Q3);

  }

  percentil() {
    let PP10: number = (10 * this.totalfi) / 100;
    let Lip10: number = 0;
    let fa10: number = 0;
    let fp10: number = 0;
    let i10: number = 0;
    let indice10: number = 0;

    for (let index = 0; index < this.arrayFi.length; index++) {

      if (PP10 <= this.arrayFi[index] && indice10 == 0) {
        Lip10 = this.limiteInferior[index];
        if (this.arrayFi[index - 1] == null) {
          fa10 = 0;
        } else fa10 = this.arrayFi[index - 1];
        fp10 = this.valorfi[index];
        i10 = this.limiteSuperior[index] - this.limiteInferior[index];
        indice10++;
      }
      else {
        //console.log("erro");
      }
    }

    // console.log('lip10', Lip10);
    // console.log('PP10', PP10);
    // console.log('fa10', fa10);
    // console.log('fp10', fp10);
    // console.log('i10', i10);

    this.P10 = Lip10 + ((PP10 - fa10) / fp10) * i10;
    this.limiteInfP10 = Lip10;
    this.frecAcAntP10 = fa10;
    this.frecClasseP10 = fp10;
    this.amplitude = i10;

    //console.log('P10', this.P10);

    let PP90: number = (90 * this.totalfi) / 100;
    let Lip90: number = 0;
    let fa90: number = 0;
    let fp90: number = 0;
    let i90: number = 0;
    let indice90: number = 0;

    for (let index = 0; index < this.arrayFi.length; index++) {

      if (PP90 <= this.arrayFi[index] && indice90 == 0) {
        Lip90 = this.limiteInferior[index];
        if (this.arrayFi[index - 1] == null) {
          fa90 = 0;
        } else fa90 = this.arrayFi[index - 1];
        fp90 = this.valorfi[index];
        i90 = this.limiteSuperior[index] - this.limiteInferior[index];
        indice90++;
      }
      else {
        //console.log("erro");
      }
    }

    // console.log('lip90', Lip90);
    // console.log('PP90', PP90);
    // console.log('fa90', fa90);
    // console.log('fp90', fp90);
    // console.log('i90', i90);

    this.P90 = Lip90 + ((PP90 - fa90) / fp90) * i90;
    this.limiteInfP90 = Lip90;
    this.frecAcAntP90 = fa90;
    this.frecClasseP90 = fp90;
    this.amplitude = i90;

    //console.log('P90', this.P90);

  }

  pearson() {
    this.pearson1 = (this.media - this.moda) / this.desvio;
    this.pearson2 = (3 * (this.media - this.mediana)) / this.desvio;
  }

  pearsonPopulacao() {
    this.pearson1Pop = (this.media - this.moda) / this.desvioPop;
    this.pearson2Pop = (3 * (this.media - this.mediana)) / this.desvioPop;
  }

  calculaCurtose() {
    this.curtose = (this.Q3 - this.Q1) / (2 * (this.P90 - this.P10));
  }

  //////////////////////////////////////////////////


  calcXiFiQuadrado() {
    this.valorxifiQuad = [];
    for (let i = 0; i < this.valorXi.length; i++) {
      this.valorxifiQuad.push((this.valorXi[i] * this.valorXi[i]) * this.valorfi[i]);
    }

    this.qtdTotalxifiQuad = 0;
    this.qtdTotalxifiQuad = this.valorxifiQuad.reduce(function (total, numero) {
      return total + numero;
    }, 0);
  }

  criaSomatorioXiMedia() {
    this.somatorioXiMediaP1 = '';
    //this.somatorioXiMediaP1 += '\\left('+this.valorfi[0]+'-'+'\\frac{{{'+ this.qtdTotalXi +'}}} {{{'+this.qtdTotalfi+'}}}\\right) ^ 2 + ';
    var mmcSomat = eval("(" + this.valorfi[0] + "*" + this.qtdTotalfi + ") -" + this.qtdTotalXi);
    this.somatorioXiMediaP1 += '\\left(' + '\\frac{' + mmcSomat + '} {' + this.qtdTotalfi + '}\\right) ^ 2';

    for (let i = 1; i < this.valorfi.length; i++) {
      mmcSomat = 0;
      var mmcSomat = eval("(" + this.valorfi[i] + "*" + this.qtdTotalfi + ") -" + this.qtdTotalXi);
      this.somatorioXiMediaP1 += '+ \\left(' + '\\frac{' + mmcSomat + '} {' + this.qtdTotalfi + '}\\right) ^ 2';
    }
  }



  criaVetCompleto() {
    this.dados = [];
    var qtdNumero = 0;
    for (let i = 0; i < this.valorXi.length; i++) {
      qtdNumero = this.valorfi[i];
      for (let index = 0; index < qtdNumero; index++) {
        this.dados.push(this.valorXi[i]);
      }
    }
    this.contaNumerosRepetidos();
    this.modaCalc();
    this.formatFormulaModa();
  }

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

  modaCalc() {
    this.valorModa = [];
    var max = this.valorfi.reduce(function (a, b) {
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
        this.formulaModa += ' e ' + this.valorModa[0] + ' é o número que mais se repete.';
        this.resultadoModa += this.valorModa[0];
      } else if (this.valorModa.length > 1) {
        this.formulaModa += ' os valores ' + this.valorModa[0];
        this.resultadoModa += this.valorModa[0];
        for (let i = 1; i < this.valorModa.length; i++) {
          this.formulaModa += ' e ' + this.valorModa[i];
          this.resultadoModa += ' e ' + this.valorModa[i];
        }
        this.formulaModa += ' são os que mais se repetem.';
      }
    }
  }


  setRadio(isAmostra: boolean) {
    this.isAmostra = isAmostra;
  }


}