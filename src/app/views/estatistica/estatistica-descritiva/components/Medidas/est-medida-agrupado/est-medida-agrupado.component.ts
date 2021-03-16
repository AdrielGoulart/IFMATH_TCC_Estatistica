import { Component, OnInit } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'est-medida-agrupado',
  templateUrl: './est-medida-agrupado.component.html',
  styleUrls: ['./est-medida-agrupado.component.scss']
})
export class EstMedidaAgrupadoComponent implements OnInit {

  public errorInput: boolean = false;
  
  public qtdTotalX: number = 0;
  public qtdTotalF: number = 0;
  public media: number = 7.333;
  public mediana: number = 7;
  public amplitude: number = 3;
  public desvio: number = 1.0328;
  public varianci: number =1.067;
  public coefVariacao: number = 14.084;
  public desvioPop: number = 0.943;
  public varianciaPop: number = 0.889;
  public coefVariacaoPop: number = 12.856;

  public title: string = 'Idade dos estudantes da turma XXy';
  public xi: number[] = [6, 7, 8, 9];
  public xiInput: string = '6 - 7 - 8 - 9';
  public fi: number[] = [1, 3, 1, 1];
  public fiInput: string = '1 - 3 - 1 - 1';
  public fonteDados: string = 'Dados Fictícios';
  public firstTime: boolean = true;
  public repetidas: object = {};
  public aberto : number[] = [];

  public numerosRep: Object = null;
  public frequenciaAbsSoma: number = 6;
  public formulaMedia: string = '6.1 + 7.3 + 8.1 + 9.1';
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
  public dados:number[] = [];
  public qtdTotal:number = 44;

  //Desvio Padrão
  public somatorioDesvAmos: number = 5.11;
  public somatorioDesvPop: number = 5.11;

  //Media
  public valorSomatorioMedia: number = 44;

  constructor() { }

  ngOnInit(){
    registerLocaleData(pt);
  }
  
  // Botoões de navegação
  buttons: Object[] = [
    { title: "Dados Isolados", route: "est_medida_isolado" },
    { title: "Dados Agrupados", route: "est_medida_agrupado" },
    { title: "Dados em Classes", route: "est_medida_classe" }
  ];

  changeDados(){
    this.xi = [];
    this.fi = [];
    let valoresX = this.xiInput.split('-');
      for (let index = 0; index < valoresX.length; index++) {
        this.xi[index] = Number(valoresX[index]);
      }   
    console.log('valor xi', this.xi);

      let valoresF = this.fiInput.split('-');
      for (let index = 0; index < valoresF.length; index++) {
        this.fi[index] = Number(valoresF[index]);
      }
    console.log('valor fi', this.fi);

    if(this.xi.length == this.fi.length){
      this.errorInput = false;
      //this.verifyInputs();
    this.criaVetCompleto();
    this.somaQuant();
    this.calculaMedia();
    this.AgrupaArray();
    this.calculaModa();
    this.calculaMediana();
    this.amplitudeTotal();
    this.desvioPadrão();
    this.variancia();
    this.coeficienteVariacao();
    
    //Populacao
    this.desvioPadrãoPopulacao();
    this.varianciaPopulacao();
    this.coeficienteVariacaoPopulacao();
    }else{
      this.errorInput = true;
    }
    
  }

  somaQuant() {
    this.qtdTotalX = this.xi.reduce(function (total, numero) {
      return total + numero;
    }, 0);
    this.qtdTotalF = this.fi.reduce(function (total, numero) {
      return total + numero;
    }, 0);
    //console.log(this.qtdTotal);

    let posicao: number = 0;

    for (let index = 0; index < this.xi.length; index++) {
      for (let i = 0; i < this.fi[index]; i++) {
          this.aberto[posicao] = this.xi[index];
          posicao++;
      }
    }

  }

  //Isolados/Populaçõa
  calculaMedia() {
    this.somaQuant();
    let cima: number = 0;
    let baixo: number = 0;
    for(let index = 0; index < this.xi.length; index++){
      cima += this.fi[index]*this.xi[index];
      baixo += this.fi[index];
    }
    this.media = cima/baixo;
    this.valorSomatorioMedia = cima;
    //console.log(this.media);
  }

  AgrupaArray() {
    const collettion = this.aberto;
  

    let mapper = {}

    collettion.forEach(element => {
      if(mapper[element]) {
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
  calculaModa(){
    let isGreater: object = {};
    const repetidasArray = Object.entries(this.repetidas);

    repetidasArray.forEach(element => {
      //console.log('element', element[1]);
      const count = element&&element[1]&&element[1].count?element[1].count:0;
      const isGreaterCount = isGreater&&isGreater[1]&&isGreater[1].count?isGreater[1].count:0;

      //console.log('count', count);
      //console.log('isGreaterCount', isGreaterCount);

      if(count > isGreaterCount) isGreater=element;
      //arrumar pra bimodal
      // if(count == isGreaterCount) {
      //   let modaUm = element;
      //   let modaDois = isGreater
      //   isGreater={modaUm, modaDois};
      // }

    });
  }

  //Isolados/Populaçõa
  calculaMediana(){
    const dadosLength = this.aberto.length%2;
    const dadosOrdenados: number[] = this.aberto.sort();
    const medianaTemp: number = dadosOrdenados.length/2;   

    if(dadosLength==0){
      this.mediana = (dadosOrdenados[medianaTemp-1] + dadosOrdenados[medianaTemp])/2;
      //console.log('mediana par', this.mediana);
    } 
    else{
      const medianaArrendonda = Math.floor(medianaTemp);
      this.mediana = dadosOrdenados[medianaArrendonda];
      //console.log('mediana impar', this.mediana);
    }
  }

  //Isolados/População
  amplitudeTotal(){
    const dadosOrdenados: number[] = this.xi.sort(function (a, b) { return a - b });
    this.limiteInferior = dadosOrdenados[0];
    this.limiteSuperior = dadosOrdenados[dadosOrdenados.length - 1];
    this.amplitude = this.limiteSuperior - this.limiteInferior;
    //console.log('amplitude',this.amplitude);
  }

  //Isolado
  desvioPadrão(){
    let somatorio: number = 0;
    let n: number =0;
    for(let index = 0; index < this.xi.length; index++){
      somatorio += this.fi[index]*Math.pow(this.xi[index] - this.media, 2);
      //console.log('somatorio', somatorio)
    }
    for (let index = 0; index < this.fi.length; index++) {
      n += this.fi[index];
      //console.log('N no for',n, this.fi[index])    
    }
    //console.log('numero', n);
    let divisao: number = somatorio/(n-1)
    //console.log('divisao', divisao);
    this.desvio = Math.sqrt(divisao);
    this.somatorioDesvAmos = somatorio;
    //console.log('desvio', this.desvio);
  }

  //Isolado
  variancia(){
    this.varianci = Math.pow(this.desvio, 2);
    //console.log('variancia', this.varianci);
  }
  
  //Isolado
  coeficienteVariacao(){
    this.coefVariacao = (this.desvio/this.media)*100
    //console.log(this.coefVariacao);
  }

  //População
  desvioPadrãoPopulacao(){
    let somatorioPop: number = 0;
    let n: number =0;

    for(let index = 0; index < this.xi.length; index++){
      somatorioPop += this.fi[index]*Math.pow(this.xi[index] - this.media, 2);
      //console.log('somatorioPop', somatorioPop)
    }
    for (let index = 0; index < this.fi.length; index++) {
      n += this.fi[index];
      //console.log('N no for',n, this.fi[index])    
    }
  
    let divisao: number = somatorioPop/(n);
    this.desvioPop = Math.sqrt(divisao);
    this.somatorioDesvPop = somatorioPop;
  
    //console.log('desvioPop', this.desvioPop);
  }

  //Populacao
  varianciaPopulacao(){
    this.varianciaPop = Math.pow(this.desvioPop, 2);
    //console.log('varianciaPop', this.varianciaPop);
  }
  
  //Populacao
  coeficienteVariacaoPopulacao(){
    this.coefVariacaoPop = (this.desvioPop/this.media)*100
    //console.log('coefPopu', this.coefVariacaoPop);
  }


  //////////////////////////////////////////////

  criaVetCompleto(){
    this.dados= [];
    var qtdNumero = 0;
    for (let i = 0; i < this.xi.length; i++) {
      qtdNumero = this.fi[i];
      for (let index = 0; index < qtdNumero; index++) {
        this.dados.push(this.xi[i]);
      }
    }
    this.n = this.dados.length;
    this.somaVetDados();
    this.ordenaValores();
    this.ordenaValoresMediana();
    this.contaNumerosRepetidos();
    this.modaCalc();
    this.formatFormulaModa();
    this.aplicaNumerosFormulaMedia();
    this.calculaSomatorioXi();
    this.criaValoresSomatorioXi();
    this.somaFreqAcumulada();
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
    var max = this.fi.reduce(function (a, b) {
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
    this.formulaMedia += this.dados[0] + '.'+ this.fi[0]+' + ';
    for (let i = 1; i < this.dados.length - 1; i++) {
      this.formulaMedia += this.dados[i] + '.'+ this.fi[i]+' + ';
    }
    this.formulaMedia += this.dados[this.dados.length - 1]+'.'+this.fi[this.fi.length-1];
  }

  /**
* Ordena os valores do menor para o maior
*/
  ordenaValores() {
    this.dados.sort(function (a, b) {
      return a - b;
    });
  }

  somaVetDados() {
    this.qtdTotal = this.dados.reduce(function (total, numero) {
      return total + numero;
    }, 0);
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
    var valores = this.dados;
    this.somatorioXi = '';
    this.somatorioXi += valores[0];
    for (let i = 1; i < valores.length; i++) {
     this.somatorioXi += '² +'+ valores[i];
    }
    this.somatorioXi += '²';
  }

  somaFreqAcumulada() {
    this.frequenciaAbsSoma = this.fi.reduce(function (total, numero) {
      return total + numero;
    }, 0);
  }

  setRadio(isAmostra: boolean){
    this.isAmostra = isAmostra;
  }

}
