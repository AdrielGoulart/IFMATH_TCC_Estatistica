import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifmath-est-apresentacao',
  templateUrl: './est-apresentacao.component.html',
  styleUrls: ['./est-apresentacao.component.scss']
})
export class EstApresentacaoComponent implements OnInit {

 // Botoões de navegação
 buttons: Object[] = [
  { title: "Gráficos", route: "est_graficos" }
];

  constructor() { }

  ngOnInit() {
  }

}
