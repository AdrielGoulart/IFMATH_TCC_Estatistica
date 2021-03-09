import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'est-medida-agrupado',
  templateUrl: './est-medida-agrupado.component.html',
  styleUrls: ['./est-medida-agrupado.component.scss']
})
export class EstMedidaAgrupadoComponent implements OnInit {

  public errorInput: boolean = false;
  public errorInputVar: boolean = false;
  public errorInputQtd: boolean = false;
  public noError: boolean = false;
  
  public qtdTotalX: number = 0;
  public qtdTotalF: number = 0;
  public media: number = 0;
  public tamanho: number = 0;
  public mediana: number = 0;
  public amplitude: number = 0;
  public desvio: number = 0;
  public varianci: number =0;
  public coefVariacao: number = 0;
  public desvioPop: number = 0;
  public varianciaPop: number = 0;
  public coefVariacaoPop: number = 0;

  public title: string = 'Idade dos estudantes da turma XXy';
  public xi: number[] = [];
  public xiInput: string = '';
  public fi: number[] = [];
  public fiInput: string = '';
  public fonteDados: string = 'Dados Fictícios';
  public firstTime: boolean = true;
  public repetidas: object = {};
  public aberto : number[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
  
  // Botoões de navegação
  buttons: Object[] = [
    { title: "Dados Isolados", route: "est_medida_isolado" },
    { title: "Dados Agrupados", route: "est_medida_agrupado" },
    { title: "Dados em Classes", route: "est_medida_classe" }
  ];

  changeDados(){
    //console.log('chamada da funcao');
    this.cleanVariables();
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

    //this.verifyInputs();
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
  }

  cleanVariables() {
    if (this.firstTime) {
      this.xi = [];
      this.fi = [];
      this.firstTime = false;
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
    console.log('moda', isGreater);
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
    const dadosOrdenados: number[] = this.xi.sort();
    const ultimo = dadosOrdenados.length;
    this.amplitude = dadosOrdenados[ultimo-1] - dadosOrdenados[0];
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

}
