import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'ifmath-cl-area-circ',
  templateUrl: './cl-area-circ.component.html',
  styleUrls: ['./cl-area-circ.component.scss']
})
export class ClAreaCircComponent implements OnInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  radius: number = 9;
  radiusExt: number = 30; // Raio do círculo exterior
  radiusInt: number = 29; // Raio do círculo interior

  errorInputRadius: boolean;

  // Botões
  buttons: Object[] = [{
    title: "O número pi",
    route: "cf_numero_pi"
  },
  {
    title: "Comprimento da Circunferência",
    route: "cf_comprimento_circunferencia"
  },
  ];

  equacao: string = `C = 2 \\cdot 3,14 \\cdot \\color{red}{${this.radius}}`;
  private resultado: string = `C = ${2 * 3.14 * this.radius}`;

  constructor() { }

  ngOnInit() {
    registerLocaleData(pt);
  }

  private makeElements() {
    // Adicionando novas circunferências na cena
    let material = new THREE.MeshBasicMaterial({
      color: 0x4683B4
    });
    let circleGeometry = new THREE.CircleGeometry(this.radiusExt, 92);
    this.geoScene.scene.add(new THREE.Mesh(circleGeometry, material));

    let materialTwo = new THREE.MeshBasicMaterial({
      color: 0xe1eef7
    });
    let circleGeometryTwo = new THREE.CircleGeometry(this.radiusInt, 92);
    this.geoScene.scene.add(new THREE.Mesh(circleGeometryTwo, materialTwo));

    // Adicionando ponto central do círculo
    const centerPoint = new THREE.Mesh(
      new THREE.CircleGeometry(1, 30),
      new THREE.MeshBasicMaterial({
        color: 0x4683B4
      })
    );
    centerPoint.position.z = 0.6;
    const labelCenterPoint = new SpriteText('O', 5, '#000');
    labelCenterPoint.position.x = -3;
    labelCenterPoint.position.y = -3;

    // Adicionando representação da medida do raio
    const radiusGeometry = new THREE.Geometry();
    radiusGeometry.vertices.push(new THREE.Vector3(0, 0, 0.5), new THREE.Vector3(0, this.radiusInt, 0.5));
    const line = new THREE.Line(radiusGeometry,
      new THREE.LineBasicMaterial({
        color: 0xff0000,
        linewidth: 2
      }));
    line.renderOrder = 0;
    // Adicionando label do raio da circunferência
    const radiusLabel = new SpriteText('r', 5, 'red');
    radiusLabel.position.x = 4;
    radiusLabel.position.y = this.radiusInt / 2;
    if (this.radiusExt < 9) radiusLabel.position.y = this.radiusExt + 2;

    this.geoScene.scene.add(line);
    this.geoScene.scene.add(centerPoint);
    this.geoScene.scene.add(labelCenterPoint);
    this.geoScene.scene.add(radiusLabel);

    this.geoScene.render();
  }

  ngAfterViewInit() {
    this.makeElements();
  }

  private alterCircunferenceRadius() {
    // Remove todos os elementos da cena
    this.geoScene.removeAll();
    // Gera os elementos da cena com os novos valores
    this.makeElements();
  }

  checkInput() {
    if (this.radius >= 1 && this.radius <= 10) {
      this.radiusExt = this.radius * 2.5 + 7.5;
      this.radiusInt = this.radiusExt - 1;
      this.equacao = `C = 2 \\cdot 3,14 \\cdot \\color{red}{${this.radius}}`;
      this.resultado = `C = ${2 * 3.14 * this.radius}`;
      this.errorInputRadius = false;
      this.alterCircunferenceRadius();
    } else this.errorInputRadius = true;
  }

}
