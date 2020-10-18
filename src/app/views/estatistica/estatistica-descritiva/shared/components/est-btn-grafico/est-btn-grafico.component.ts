import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'est-btn-grafico',
  templateUrl: './est-btn-grafico.component.html',
  styleUrls: ['./est-btn-grafico.component.scss']
})
export class EstBtnGraficoComponent implements OnInit {

  @Input() name: string = '';
  @Input() modalTarget: string = '';

  constructor() { }

  ngOnInit() {
  }

}
