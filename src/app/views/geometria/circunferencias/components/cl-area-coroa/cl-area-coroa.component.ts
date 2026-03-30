import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'ifmath-cl-area-coroa',
  templateUrl: './cl-area-coroa.component.html',
  styleUrls: ['./cl-area-coroa.component.scss']
})
export class ClAreaCoroaComponent implements OnInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  radius: number = 9;
  radiusMn: number = 2;
  radiusExt: number = 30; // Raio do círculo exterior
  radiusInt: number = 29; // Raio do círculo interior
  radiusMin: number = 12.5; // Raio do círculo interior
  radiusMint: number = 11.5; // Raio do círculo interior

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

    let materialThree = new THREE.MeshBasicMaterial({
      color: 0x4683B4
    });
    let circleGeometryThree = new THREE.CircleGeometry(this.radiusMin, 92);
    this.geoScene.scene.add(new THREE.Mesh(circleGeometryThree, materialThree));

    let materialFour = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    let circleGeometryFour = new THREE.CircleGeometry(this.radiusMint, 92);
    this.geoScene.scene.add(new THREE.Mesh(circleGeometryFour, materialFour));

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
    const radiusMnGeometry = new THREE.Geometry();
    radiusMnGeometry.vertices.push(new THREE.Vector3(0, 0, 0.5), new THREE.Vector3(0, this.radiusMint, 0.5));
    const lineMn = new THREE.Line(radiusMnGeometry,
      new THREE.LineBasicMaterial({
        color: 0xff0000,
        linewidth: 2
      }));
    lineMn.renderOrder = 0;
    // Adicionando label do raio da circunferência
    const radiusMnLabel = new SpriteText('r', 5, 'red');
    radiusMnLabel.position.x = 4;
    radiusMnLabel.position.y = this.radiusMint / 2;

    const radiusGeometry = new THREE.Geometry();
    radiusGeometry.vertices.push(new THREE.Vector3(0, 0, 0.5), new THREE.Vector3(this.radiusInt, 0, 0.5));
    const line = new THREE.Line(radiusGeometry,
      new THREE.LineBasicMaterial({
        color: 0x009423,
        linewidth: 2
      }));
    line.renderOrder = 0;
    // Adicionando label do raio da circunferência
    const radiusLabel = new SpriteText('R', 5, '#009423');
    radiusLabel.position.x = this.radiusInt / 2;
    radiusLabel.position.y = -4;

    this.geoScene.scene.add(line);
    this.geoScene.scene.add(lineMn);
    this.geoScene.scene.add(centerPoint);
    this.geoScene.scene.add(labelCenterPoint);
    this.geoScene.scene.add(radiusLabel);
    this.geoScene.scene.add(radiusMnLabel);

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

  checkInput(input) {
    let conditionMin = this.radiusMn >= 1 && this.radiusMn <= 9;
    let conditionMax = this.radius >= 2 && this.radius <= 10;
    if (conditionMax && conditionMin) {
      if (!(this.radius > this.radiusMn)){
        if(input === 'min')this.radius += 1;
        if(input === 'max')this.radiusMn -= 1;
      }
      this.radiusExt = this.radius * 2.5 + 7.5;
      this.radiusInt = this.radiusExt - 1;
      this.radiusMin = this.radiusMn * 2.5 + 7.5;
      this.radiusMint = this.radiusMin - 1;
      this.equacao = `C = 2 \\cdot 3,14 \\cdot \\color{red}{${this.radius}}`;
      this.resultado = `C = ${2 * 3.14 * this.radius}`;
      this.errorInputRadius = false;
      this.alterCircunferenceRadius();
    } else this.errorInputRadius = true;
  }

}
