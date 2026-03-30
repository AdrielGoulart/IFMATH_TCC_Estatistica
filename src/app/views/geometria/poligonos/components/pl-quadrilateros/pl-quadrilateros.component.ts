import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifmath-pl-quadrilateros',
  templateUrl: './pl-quadrilateros.component.html',
  styleUrls: ['./pl-quadrilateros.component.scss']
})
export class PlQuadrilaterosComponent implements OnInit {
  
  //botões
  buttons: Object[] = [
    { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
    { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
    { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
    { title: "Losango", route: "pl_quadrilateros_losango" },
    { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
