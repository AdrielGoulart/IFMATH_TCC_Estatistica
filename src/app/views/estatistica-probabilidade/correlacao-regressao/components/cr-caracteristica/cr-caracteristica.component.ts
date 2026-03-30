import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./cr-caracteristica.component.html",
  styleUrls: ["./cr-caracteristica.component.scss"],
})
export class CrCaracteristicaComponent implements OnInit {
  public mostrarCorrelacao: boolean = false;
  public mostrarRegressao: boolean = false;

  constructor() {}

  ngOnInit() {}

  public abrirCorrelacao(): void {
    this.mostrarRegressao = false;
    this.mostrarCorrelacao = true;
  }

  public abrirRegressao(): void {
    this.mostrarCorrelacao = false;
    this.mostrarRegressao = true;
  }
}
