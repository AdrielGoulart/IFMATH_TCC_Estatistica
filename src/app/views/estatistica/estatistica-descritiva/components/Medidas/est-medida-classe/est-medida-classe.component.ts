import { Component, OnInit } from '@angular/core';

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
  
  public qtdTotalfi: number = 0;
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
  public somafi: number = 0;
  public title: string = 'Idade dos estudantes da turma XXy';
  public limiteInferior: number[] = [];
  public limiteSuperior: number[] = [];
  public valorfi: number[] = [];
  public limiteInferiorInput: string = '';
  public limiteSuperiorInput: string = '';
  public valorfiInput: string = '';
  public valorFi: number = 0;
  public arrayFi: number [] = [];
  public valorXi: number[] = [];
  public valorxifi: number[] = [];
  public fonteDados: string = 'Dados Fictícios';
  public firstTime: boolean = true;
  public totalfi: number = 0;
  public aberto: number [] = [];
  public Mediana: number = 0;
  public Q1: number = 0;
  public Q2: number = 0;
  public Q3: number = 0;
  public P10: number = 0;
  public P90: number = 0;
  public pearson1: number = 0;
  public pearson2: number = 0;
  public curtose: number = 0;
  public moda: number = 0;

  public repetidas: object = {};

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
      //console.log('valor if', this.valorfi);
    //calcula Xi
    for (let index = 0; index < this.limiteInferior.length; index++) {
      this.valorXi[index] = (this.limiteInferior[index] + this.limiteSuperior[index])/2;
    }
    //console.log('valor Xi', this.valorXi);
    //calcula xifi
    for (let index = 0; index < this.limiteInferior.length; index++) {
      this.valorxifi[index] = this.valorXi[index]*this.valorfi[index];
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

  calculaf1(){
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
    this.somaQuant();
    for (let index = 0; index < this.valorxifi.length; index++) {
      somaXifi += this.valorxifi[index];     
    }
    //console.log('soma xifi', somaXifi);
    //console.log('total fi', this.totalfi);
    this.media = somaXifi/this.totalfi;
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
    //console.log('moda', isGreater);
  }

  //Isolados/Populaçõa
  calculaMediana(){
    let pontoMediana: number = this.totalfi/2;
    let Lime: number = 0;
    let Fa: number = 0;
    let fme: number = 0;
    let i: number = 0;
    let indice: number = 0;
   
    for (let index = 0; index < this.arrayFi.length; index++) {
      
      if(pontoMediana <= this.arrayFi[index] && indice == 0){

        Lime = this.limiteInferior[index];

        Fa = this.arrayFi[index-1];
        fme = this.valorfi[index];
        i = this.limiteSuperior[index]-this.limiteInferior[index];
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

    this.Mediana = Lime + ((pontoMediana-Fa)/fme) * i;

    //console.log('mediana', this.Mediana);

  }

  //Isolados/Populaçõa
  amplitudeTotal(){
    let limSup: number = this.limiteSuperior.length;
    this.amplitude = this.limiteSuperior[limSup-1] - this.limiteInferior[0];
    //console.log('amplitude', this.amplitude);
  }

  //Isolado
  desvioPadrão(){
    let somatorio: number = 0;

    for(let index = 0; index < this.valorfi.length; index++){
      somatorio += this.valorfi[index] * Math.pow(this.valorXi[index] - this.media, 2);
    }
    //console.log('somatorio', somatorio);
    let divisao: number = somatorio/(this.totalfi-1);
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
    //console.log('coef variacao', this.coefVariacao);
  }

  //População
  desvioPadrãoPopulacao(){
    let somatorioPop: number = 0;

    for(let index = 0; index < this.valorfi.length; index++){
      somatorioPop += this.valorfi[index] * Math.pow(this.valorXi[index] - this.media, 2);
    }
    let divisao: number = somatorioPop/(this.totalfi);
    this.desvioPop = Math.sqrt(divisao);
    //console.log('desvio', this.desvio);
  }

  //População
  varianciaPopulacao(){
    this.varianciaPop = Math.pow(this.desvioPop, 2);
    //console.log('varianciaPop', this.varianciaPop);
  }
  
  //População
  coeficienteVariacaoPopulacao(){
    this.coefVariacaoPop = (this.desvioPop/this.media)*100
    //console.log('coefPopu', this.coefVariacaoPop);
  }

  quartil(){
    let PQ1: number = (1*this.totalfi)/4;
    let Liq1: number = 0;
    let fa1: number = 0;
    let fq1: number = 0;
    let i1: number = 0;
    let indice1: number = 0;
   
    for (let index = 0; index < this.arrayFi.length; index++) {
      
      if(PQ1 <= this.arrayFi[index] && indice1 == 0){
        Liq1 = this.limiteInferior[index];
        fa1 = this.arrayFi[index-1];
        fq1 = this.valorfi[index];
        i1 = this.limiteSuperior[index]-this.limiteInferior[index];
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

    this.Q1 = Liq1 + ((PQ1-fa1)/fq1) * i1;

    //console.log('Q1', this.Q1);

    this.Q2 = this.mediana;

    //console.log('Q2', this.Q2);

    let PQ3: number = (3*this.totalfi)/4;
    let Liq3: number = 0;
    let fa3: number = 0;
    let fq3: number = 0;
    let i3: number = 0;
    let indice3: number = 0;
   
    for (let index = 0; index < this.arrayFi.length; index++) {
      
      if(PQ3 <= this.arrayFi[index] && indice3 == 0){
        Liq3 = this.limiteInferior[index];
        fa3 = this.arrayFi[index-1];
        fq3 = this.valorfi[index];
        i3 = this.limiteSuperior[index]-this.limiteInferior[index];
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

    this.Q3 = Liq3 + ((PQ3-fa3)/fq3) * i3;

    //console.log('Q3', this.Q3);
    
  }

  percentil(){
    let PP10: number = (10*this.totalfi)/100;
    let Lip10: number = 0;
    let fa10: number = 0;
    let fp10: number = 0;
    let i10: number = 0;
    let indice10: number = 0;
   
    for (let index = 0; index < this.arrayFi.length; index++) {
      
      if(PP10 <= this.arrayFi[index] && indice10 == 0){
        Lip10 = this.limiteInferior[index];
        if(this.arrayFi[index-1] == null){
          fa10 = 0;
        }else fa10 = this.arrayFi[index-1];
        fp10 = this.valorfi[index];
        i10 = this.limiteSuperior[index]-this.limiteInferior[index];
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

    this.P10 = Lip10 + ((PP10-fa10)/fp10) * i10;

    //console.log('P10', this.P10);

    let PP90: number = (90*this.totalfi)/100;
    let Lip90: number = 0;
    let fa90: number = 0;
    let fp90: number = 0;
    let i90: number = 0;
    let indice90: number = 0;
   
    for (let index = 0; index < this.arrayFi.length; index++) {
      
      if(PP90 <= this.arrayFi[index] && indice90 == 0){
        Lip90 = this.limiteInferior[index];
        if(this.arrayFi[index-1] == null){
          fa90 = 0;
        }else fa90 = this.arrayFi[index-1];
        fp90 = this.valorfi[index];
        i90 = this.limiteSuperior[index]-this.limiteInferior[index];
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

    this.P90 = Lip90 + ((PP90-fa90)/fp90) * i90;

    //console.log('P90', this.P90);

  }
  
  pearson(){
    this.pearson1 = (this.media-this.moda)/this.desvio;
    this.pearson2 = (3*(this.media-this.mediana))/this.desvio;
  } 

  calculaCurtose(){
    this.curtose = (this.Q3 - this.Q1)/(2* (this.P90 - this.P10));
  }
}