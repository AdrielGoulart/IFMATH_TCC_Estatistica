import { Component, OnInit, SimpleChanges, OnChanges, DoCheck, ViewChild } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';

@Component({
  selector: 'cf-posicao-relativa',
  templateUrl: './cf-posicao-relativa.component.html',
  styleUrls: ['./cf-posicao-relativa.component.scss']
})
export class CfPosicaoRelativaComponent implements OnInit, DoCheck {

  //Botões
  buttons: Object[] = [
    { title: "Ponto e Circunferência", route: "cf_posicao_relativa_pc" },
    { title: "Reta e Circunferência", route: "cf_posicao_relativa_rc" },
    { title: "Circunferência e Circunferência", route: "cf_posicao_relativa_cc" }
  ];

   //Accordion
  public cards: Object[] = [
    { id: "one", title: "a", content: "b" },
    { id: "two", title: "a", content: "b" },
    { id: "three", title: "a", content: "b" },
    { id: "four", title: "a", content: "b" }
  ];

  @ViewChild(GeoSceneComponent)
  private geoScene :GeoSceneComponent;

  public data: any;

  constructor() {
    this.data = {
      intersects: []
    }
  }

  ngDoCheck() {
    if (this.data.intersects.length == 1) {
      alert('Dentro');
    }
  }

  ngOnInit() {
  }

}
