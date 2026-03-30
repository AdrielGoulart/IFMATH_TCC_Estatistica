import { HttpErrorResponse } from '@angular/common/http';
import { ServicoNumerosNaturais } from '../../shared/numeros-naturais.service';
import { ResultadoViewModelHtml } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IMultiplicacaoComand } from '../../shared/numeros-naturais.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './nn-multiplicacao.component.html',
  styleUrls: ['./nn-multiplicacao.component.scss']
})

export class NnMultiplicacaoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
    b: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModelHtml[];
  topnumber: String[];
  bottomnumber: String[];
  leftovers1: String[];
  leftovers2: String[];
  mresults : String[][];
  sumresult : String[];
  finalanswer: String;
  showall: boolean = false;
  perfomedcalculus: boolean =false;
  constructor(private fb: FormBuilder, private _servico: ServicoNumerosNaturais, private route: ActivatedRoute) { }

  ngOnInit() {
    this.resultados = []; 
    var numbera;
    var numberb;
    this.route.queryParams.subscribe(params => {
      numbera = Math.abs(params['a']);
      numberb = Math.abs(params['b']);

    });
    //Verifica se parametros foram recebidos
    
    if(numbera && numberb){
    this.loading = true;
    

    this._servico.postMultiplicacaoS(numbera, numberb)
    .take(1)
    // .do({this.loading = false;})
    .subscribe((response) => {
        if (response.sucesso) {
         
        this.resultados = <ResultadoViewModelHtml[]>response.objeto;
        this.paintValues();
        this.perfomedcalculus = true;
          

        }

        this.loading = false;
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
        } else {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
          // Log errors if any
          this.loading = false;
        }
      });
    }


  }
  toggle(){
    if(this.showall){
      this.showall=false;
    }
    else{
      this.showall = true;
    }
  }
  paintValues(): void{
      
    var a :String[];
    var b :String;
    this.topnumber = [];// Indice 0
    this.bottomnumber = []; // Indice 1
    this.leftovers1 = [];// Indice 2 
    this.leftovers2 = []; // Indice 3
    this.mresults = []; // Indice 4
    this.sumresult =[]; // Indice 5
    this.finalanswer = ""; 
    var ba :number = this.resultados.length;
    for(var x =0;x<ba;x++){
      var at : String;
      at =this.resultados[x].html;
      a = at.split(",");
     
      if(a.length<2){
        continue;
      }
      var c = a[0];
      if(a[0]=="-"){
        b = "&nbsp;";
      }
      else{
        b= "";
        for(var y=0 ; y<c.length; y++){
          if(c.charAt(y)=="&"){
            b = b+"<div class='digit highlightb'>"+c.charAt(y+1)+"</div>";
            y++;
          }
          else if(c.charAt(y)=="_"){
          b = b+"<div class='digit'>&nbsp</div>"
          }
          else{
            b = b+"<div class='digit'>"+c.charAt(y)+"</div>";
          }
        }
      }
      this.topnumber.push(b);
      c = a[1];
      if(a[1]=="-"){
        b = "&nbsp;"
      }
      else{
        b="";
       
        for(var y=0 ; y<c.length; y++){
          if(c.charAt(y)=="&"){
            b = b+"<div class='digit highlightr'>"+c.charAt(y+1)+"</div>";
            y++;
          }
          else if(c.charAt(y)=="_"){
          b = b+"<div class='digit'>&nbsp;</div>"
          }
          else{
            b = b+"<div class='digit'>"+c.charAt(y)+"</div>";
          }
        }
      }
     
      this.bottomnumber.push(b);
      
      var d = a[2].split("s");
     
      var e :String[];
      if(a[2]=="-"){
        e = ["&nbsp;"];
      }
      else{
      e = [];
      
        for(var y=0; y<d.length;y++){
          c = d[y];
          b = "";
       
          for(var z =0; z<c.length;z++){
            if(c.charAt(z)=="_"){
            b = b+"<div class='digit'>&nbsp;</div>"
            }
            else{
              b = b+"<div class='digit'>"+c.charAt(z)+"</div>";
            }
          }
          e.push(b);
        }
        
       
        
      }
      
      this.mresults.push(e);
      
     
      c = a[3];
      
      if(a[3]=="-"){
     
        b="&nbsp;";
      }
      else{
        b="";
        for(var y=0 ; y<c.length; y++){
          if(c.charAt(y)=="_"){
          b = b+"<div class='digit'>&nbsp;</div>";
          }
          else{
            b = b+"<div class='digit'>"+c.charAt(y)+"</div>";
          }
        }
      }
     
      this.leftovers1.push(b);
      c = a[4];
      if(a[4]=="-"){
        b="&nbsp;"
      }
      else{
        b="";
        for(var y=0 ; y<c.length; y++){
          if(c.charAt(y)=="&"){
            b = b+"<div class='digit highlightr'>"+c[y+1]+"</div>";
            y++;
          }
          else if(c.charAt(y)=="_"){
          b = b+"<div class='digit'>&nbsp</div>";
          }
          else{
            b = b+"<div class='digit'>"+c.charAt(y)+"</div>";
          }
        }
        
     }
     this.leftovers2.push(b);
     c = a[5];
    
     if(a[5]=="-"){
       b='-';
     }
     else{
       b="";
       for(var y=0 ; y<c.length; y++){
         if(c.charAt(y)=="_"){
         b = b+"<div class='digit'>&nbsp</div>";
         }
         else{
           b = b+"<div class='digit'>"+c.charAt(y)+"</div>";
         }
       }
      
    }
    this.sumresult.push(b);
   
  }
  }
  onSubmit(): void {
    this.loading = true;
    const numerosNaturais: IMultiplicacaoComand = this.form.value;

    this._servico.postMultiplicacao(numerosNaturais)
    .take(1)
    // .do({this.loading = false;})
    .subscribe((response) => {
        if (response.sucesso) {
         
        this.resultados = <ResultadoViewModelHtml[]>response.objeto;
        this.paintValues();
        this.perfomedcalculus = true;
          

        }

        this.loading = false;
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
        } else {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
          // Log errors if any
          this.loading = false;
        }
      });
  }

}
