import { Component, OnInit, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import { Mesh, Loader, MeshBasicMaterial, Vector3 } from 'three';
import SpriteText from 'three-spritetext';

@Component({
  selector: 'ifmath-cf-comprimento-circunferencia-np',
  templateUrl: './cf-comprimento-circunferencia-np.component.html',
  styleUrls: ['./cf-comprimento-circunferencia-np.component.scss']
})
export class CfComprimentoCircunferenciaNpComponent implements AfterViewInit {

  //botões
  buttons: Object[] = [
    { title: "O número pi", route: "cf_numero_pi" },
    { title: "Comprimento da Circunferência", route: "cf_comprimento_circunferencia" },
  ];

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  diametro: number = 18;
  radiusExt: number = 30;
  radiusInt: number = 29;

  errorInputRadius: boolean;

  // Muda o ponto pra virgula
  private conta = (this.diametro * Math.PI);
  private newConta = this.conta.toString().replace(".", ",");

  equacao: string = `\\frac{${this.newConta}}{\\color{red}${this.diametro}}=\\pi`;
  private resultado: string = `\\pi = ${((this.diametro * Math.PI) / this.diametro).toFixed(2)}`;

  constructor() { }

  ngAfterViewInit() {
    let geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
    geometry.vertices.push(new THREE.Vector3(0, 29, 0.5));

    let material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
    let line = new THREE.Line(geometry, material);

    let materialCenter = new THREE.MeshBasicMaterial({ color: 0x000000 });
    let circleCenter = new THREE.CircleGeometry(1, 30);
    let centerPoint = new Mesh(circleCenter, materialCenter);
    centerPoint.position.z = 0.6;

    this.geoScene.scene.add(line);
    this.geoScene.scene.add(centerPoint);

    const labelDiameter = new SpriteText('d/2', 5, 'red');
    labelDiameter.position.x = 5;
    labelDiameter.position.y = this.radiusInt / 2;

    this.geoScene.scene.add(labelDiameter);
    this.geoScene.render();
  }

  private alterCircunferenceRadius() {
    // Remove os elementos da cena
    this.geoScene.removeAll();

    // Criando novas circunferencias
    let material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    let circleGeometry = new THREE.CircleGeometry(this.radiusExt, 92);
    this.geoScene.scene.add(new THREE.Mesh(circleGeometry, material));

    let materialTwo = new THREE.MeshBasicMaterial({ color: 0xffffff });
    let circleGeometryTwo = new THREE.CircleGeometry(this.radiusInt, 92);
    this.geoScene.scene.add(new THREE.Mesh(circleGeometryTwo, materialTwo));

    let geometryLine = new THREE.Geometry();
    geometryLine.vertices.push(new THREE.Vector3(0, 0, 0.5));
    geometryLine.vertices.push(new THREE.Vector3(0, this.radiusInt, 0));

    let materialLine = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
    let line = new THREE.Line(geometryLine, materialLine);
    line.renderOrder = 0;

    let materialCenter = new THREE.MeshBasicMaterial({ color: 0x000000 });
    let circleCenter = new THREE.CircleGeometry(1, 30);
    let centerPoint = new Mesh(circleCenter, materialCenter);
    centerPoint.position.z = 0.6;

    this.geoScene.scene.add(line);
    this.geoScene.scene.add(centerPoint);

    // labelDiameter.scale.set();
    const labelDiameter = new SpriteText('d/2', 5, 'red');
    labelDiameter.position.x = 5;
    labelDiameter.position.y = this.radiusInt / 2;
    if (this.radiusExt < 13) labelDiameter.position.y = this.radiusExt + 2;

    this.geoScene.scene.add(labelDiameter);

    // Chamando o render da cena
    this.geoScene.render();

    // Muda o ponto pra virgula
    let conta = (this.diametro * Math.PI);
    let newConta = conta.toString().replace(".", ",");
    
    this.equacao = `\\frac{${newConta}}{\\color{red}${this.diametro}}=\\pi`
    this.resultado = `\\pi = ${((this.diametro * Math.PI) / this.diametro).toFixed(2)}`;
  }

  checkInput() {
    if (this.diametro >= 2 && this.diametro <= 20) {
      this.radiusExt = this.diametro * 1.25 + 7.5;
      this.radiusInt = this.radiusExt - 1;
      this.errorInputRadius = false;
      this.alterCircunferenceRadius();
    } else this.errorInputRadius = true;
  }

}
