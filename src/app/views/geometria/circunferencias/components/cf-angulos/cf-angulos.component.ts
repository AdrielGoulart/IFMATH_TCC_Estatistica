import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GeoRightbarComponent } from '../../../shared/components/geo-rightbar/geo-rightbar.component';

@Component({
  selector: 'ifmath-cf-angulos',
  templateUrl: './cf-angulos.component.html',
  styleUrls: ['./cf-angulos.component.scss']
})
export class CfAngulosComponent implements AfterViewInit {

  //botões
  buttons: Object[] = [
    { title: "Ângulo Central", route: "cf_angulo_central" },
    { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
    { title: "Arco Capaz", route: "cf_angulo_capaz" },
    { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
    { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
  ];

   //Accordion
   public cards: any[] = [
    { id: "one", title: "a", content: '' },
    { id: "two", title: "a", content: "b" },
    { id: "three", title: "a", content: "b" },
    { id: "four", title: "a", content: "b" }
  ];

  constructor() { }

  ngAfterViewInit() {
  }

}
