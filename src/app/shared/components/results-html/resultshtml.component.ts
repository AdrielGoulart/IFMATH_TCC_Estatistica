import { Component, OnInit, Input } from '@angular/core';
import { ResultadoViewModel, ResultadoViewModelHtml } from '../../models/resultado';

@Component({
  //selector: 'ifmath-ng-resultshtml',
  selector: 'ifmath-ng-resultshtml',
  templateUrl: './resultshtml.component.html',
  styleUrls: ['./resultshtml.component.scss'],
})
export class ListaResultadoComponentHtml {

  @Input() public resultados: ResultadoViewModelHtml[];
  @Input() public loading: boolean;


}