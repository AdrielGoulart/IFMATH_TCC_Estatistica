import { Component, AfterViewInit, OnInit, ViewChild, DoCheck } from '@angular/core';
import { GeoSceneComponent } from '../../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'ifmath-pl-quadrilateros-losango',
  templateUrl: './pl-quadrilateros-losango.component.html',
  styleUrls: ['./pl-quadrilateros-losango.component.scss']
})
export class PlQuadrilaterosLosangoComponent implements OnInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  diagonalX: number = 7;
  diagonalY: number = 7;
  errorInput = false;
  quadrado = true;

  conta_sqrt = Math.sqrt(((this.diagonalY / 2) * (this.diagonalY / 2)) + ((this.diagonalX / 2) * (this.diagonalX / 2))).toFixed(2);

  buttons: Object[] = [
    { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
    { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
    { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
    { title: "Losango", route: "pl_quadrilateros_losango" },
    { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
  ];

  constructor() { }

  ngOnInit() {
    registerLocaleData( pt );
    this.geoScene.fieldOfView = 7;
  }

  ngAfterViewInit() {
    this.drawObjects();
  }

  ngDoCheck() {
    if(this.diagonalX === this.diagonalY) this.quadrado = true;
    else this.quadrado = false;
  }

  drawObjects() {
    let geometryLine1 = new THREE.Geometry();
    geometryLine1.vertices.push(
      new THREE.Vector3(this.diagonalX / 2, 0, 0),
      new THREE.Vector3(-this.diagonalX / 2, 0, 0)
    );
    this.geoScene.scene.children[1] = new THREE.Line(geometryLine1, new THREE.LineBasicMaterial({ color: 0x0C7A2A, linewidth: 2 }));

    let geometryLine2 = new THREE.Geometry();
    geometryLine2.vertices.push(
      new THREE.Vector3(0, this.diagonalY / 2, 0),
      new THREE.Vector3(0, -this.diagonalY / 2, 0)
    );
    this.geoScene.scene.children[2] = new THREE.Line(geometryLine2, new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }));

    let diamond = new THREE.Group();

    for (let i = -0.03; i <= 0.03; i += 0.015) {
      let diamondLineGeometry = new THREE.Geometry();
      diamondLineGeometry.vertices.push(
        new THREE.Vector3(i, this.diagonalY/2-i),
        new THREE.Vector3(this.diagonalX/2+i, -i),
        new THREE.Vector3(i, -this.diagonalY/2-i),
        new THREE.Vector3(-this.diagonalX/2+i, -i),
        new THREE.Vector3(i, this.diagonalY/2-i),
        new THREE.Vector3(-i, this.diagonalY/2-i),
        new THREE.Vector3(this.diagonalX/2-i, -i),
        new THREE.Vector3(-i, -this.diagonalY/2-i),
        new THREE.Vector3(-this.diagonalX/2-i, -i),
        new THREE.Vector3(-i, this.diagonalY/2-i)
      );
      let diamondLine = new THREE.Line(diamondLineGeometry, new THREE.LineBasicMaterial({ color: 0x4683B4 }));
      diamond.add(diamondLine);  
    }

    this.geoScene.scene.children[0] = diamond;

    let size = 0.5;
    if (this.diagonalX === 1 && this.diagonalY === 1) size = 0.175;
    else if ((this.diagonalX === 1 || this.diagonalY === 1) || (this.diagonalX <= 2.5 && this.diagonalY <= 2.5)) size = 0.25;

    let geometryAngle = new THREE.Geometry();
    geometryAngle.vertices.push(
      new THREE.Vector3(0, size, 0),
      new THREE.Vector3(size, size, 0),
      new THREE.Vector3(size, -size, 0),
      new THREE.Vector3(0, -size, 0)
    );
    let angleOutline = new THREE.Line(geometryAngle, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));

    let angleDotGeometry1 = new THREE.CircleGeometry(size/5, 30);
    let angleDot1 = new THREE.Mesh(angleDotGeometry1, new THREE.MeshBasicMaterial({ color: 0x000000 }));
    angleDot1.position.copy(new THREE.Vector3((size)/2,(size)/2,0));

    let angleDotGeometry2 = new THREE.CircleGeometry(size/5, 30);
    let angleDot2 = new THREE.Mesh(angleDotGeometry2, new THREE.MeshBasicMaterial({ color: 0x000000 }));
    angleDot2.position.copy(new THREE.Vector3((size)/2,-(size)/2,0));

    let angle = new THREE.Group();
    angle.add(angleOutline, angleDot1, angleDot2);

    if(this.diagonalY === this.diagonalX && this.diagonalY !== 1){
      size = 0.25;

      let geometryAngle1 = new THREE.Geometry();
      geometryAngle1.vertices.push(
        new THREE.Vector3(this.diagonalX/2-0.325, -size, 0),
        new THREE.Vector3(this.diagonalX/2-size-0.325, 0, 0),
        new THREE.Vector3(this.diagonalX/2-0.325, size, 0)
      );
      let angleOutline1 = new THREE.Line(geometryAngle1, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));

      let angleDotGeometry1 = new THREE.CircleGeometry(size/5, 30);
      let angleDot1 = new THREE.Mesh(angleDotGeometry1, new THREE.MeshBasicMaterial({ color: 0x000000 }));

      let distance1 = Math.sqrt((
        (geometryAngle1.vertices[0].x - geometryAngle1.vertices[2].x) ** 2 + (geometryAngle1.vertices[0].y - geometryAngle1.vertices[2].y) ** 2
      ));
      let distancesRatio1 = distance1/2 / distance1;

      let x1 = (1 - distancesRatio1) * geometryAngle1.vertices[2].x + distancesRatio1 * geometryAngle1.vertices[0].x, 
          y1 = (1 - distancesRatio1) * geometryAngle1.vertices[2].y + distancesRatio1 * geometryAngle1.vertices[0].y;
      angleDot1.position.copy(new THREE.Vector3(x1,y1,0));

      let geometryAngle2 = new THREE.Geometry();
      geometryAngle2.vertices.push(
        new THREE.Vector3(size, -this.diagonalY/2+0.325, 0),
        new THREE.Vector3(0, -this.diagonalY/2+size+0.325, 0),
        new THREE.Vector3(-size, -this.diagonalY/2+0.325 , 0)
      );
      let angleOutline2 = new THREE.Line(geometryAngle2, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));

      let angleDotGeometry2 = new THREE.CircleGeometry(size/5, 30);
      let angleDot2 = new THREE.Mesh(angleDotGeometry2, new THREE.MeshBasicMaterial({ color: 0x000000 }));

      let distance2 = Math.sqrt((
        (geometryAngle2.vertices[0].x - geometryAngle2.vertices[2].x) ** 2 + (geometryAngle2.vertices[0].y - geometryAngle2.vertices[2].y) ** 2
      ));
      let distancesRatio2 = distance2/2 / distance2;

      let x2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].x + distancesRatio2 * geometryAngle2.vertices[0].x, 
          y2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].y + distancesRatio2 * geometryAngle2.vertices[0].y;
      angleDot2.position.copy(new THREE.Vector3(x2,y2,0));

      let geometryAngle3 = new THREE.Geometry();
      geometryAngle3.vertices.push(
        new THREE.Vector3(-this.diagonalX/2+0.325, -size, 0),
        new THREE.Vector3(-this.diagonalX/2+size+0.325, 0, 0),
        new THREE.Vector3(-this.diagonalX/2+0.325, size, 0)
      );
      let angleOutline3 = new THREE.Line(geometryAngle3, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));

      let angleDotGeometry3 = new THREE.CircleGeometry(size/5, 30);
      let angleDot3 = new THREE.Mesh(angleDotGeometry3, new THREE.MeshBasicMaterial({ color: 0x000000 }));

      let distance3 = Math.sqrt((
        (geometryAngle3.vertices[0].x - geometryAngle3.vertices[2].x) ** 2 + (geometryAngle3.vertices[0].y - geometryAngle3.vertices[2].y) ** 2
      ));
      let distancesRatio3 = distance3/2 / distance3;

      let x3 = (1 - distancesRatio3) * geometryAngle3.vertices[2].x + distancesRatio3 * geometryAngle3.vertices[0].x, 
          y3 = (1 - distancesRatio3) * geometryAngle3.vertices[2].y + distancesRatio3 * geometryAngle3.vertices[0].y;
      angleDot3.position.copy(new THREE.Vector3(x3,y3,0));

      let geometryAngle4 = new THREE.Geometry();
      geometryAngle4.vertices.push(
        new THREE.Vector3(size, this.diagonalY/2-0.325, 0),
        new THREE.Vector3(0, this.diagonalY/2-size-0.325, 0),
        new THREE.Vector3(-size, this.diagonalY/2-0.325 , 0)
      );
      let angleOutline4 = new THREE.Line(geometryAngle4, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));

      let angleDotGeometry4 = new THREE.CircleGeometry(size/5, 30);
      let angleDot4 = new THREE.Mesh(angleDotGeometry4, new THREE.MeshBasicMaterial({ color: 0x000000 }));

      let distance4 = Math.sqrt((
        (geometryAngle4.vertices[0].x - geometryAngle4.vertices[2].x) ** 2 + (geometryAngle4.vertices[0].y - geometryAngle4.vertices[2].y) ** 2
      ));
      let distancesRatio4 = distance4/2 / distance4;

      let x4 = (1 - distancesRatio4) * geometryAngle4.vertices[2].x + distancesRatio4 * geometryAngle4.vertices[0].x, 
          y4 = (1 - distancesRatio4) * geometryAngle4.vertices[2].y + distancesRatio4 * geometryAngle4.vertices[0].y;
      angleDot4.position.copy(new THREE.Vector3(x4,y4,0));

      let angles = new THREE.Group();
      angles.add(angleOutline1, angleDot1, angleOutline2, angleDot2, angleOutline3, angleDot3, angleOutline4, angleDot4);
      angle.add(angles);
    }

    this.geoScene.scene.children[3] = angle;

    let labelLado = new SpriteText('ℓ', 0.75, '#4683B4');

    let distance = Math.sqrt(((this.diagonalX/2) ** 2 + (this.diagonalY/2) ** 2));
    let distancesRatio = (distance/2) / distance;
    let x = distancesRatio * (this.diagonalX/2) + 0.5, y = -distancesRatio * (this.diagonalY/2) -0.5;

    labelLado.position.copy(new THREE.Vector3(x, y, 0));

    let labelDiagonalX = new SpriteText('d', 0.75, '#0C7A2A');
    labelDiagonalX.position.x = -this.diagonalX * 0.5 - 0.7;
    labelDiagonalX.position.y = 0;

    let labelDiagonalY = new SpriteText('D', 0.75, '#FF0000');
    labelDiagonalY.position.x = 0;
    labelDiagonalY.position.y = this.diagonalY * 0.5 + 0.5;

    if(this.diagonalX >= 4 && this.diagonalY >= 4){
      labelDiagonalX.position.x = -this.diagonalX/5;
      labelDiagonalX.position.y = 0.35;
      labelDiagonalY.position.x = 0.35;
      labelDiagonalY.position.y = this.diagonalY/5;
    }

    let labels = new THREE.Group();
    labels.add(labelLado, labelDiagonalX, labelDiagonalY);
    this.geoScene.scene.children[4] = labels;

    this.conta_sqrt = Math.sqrt(((this.diagonalY / 2) * (this.diagonalY / 2)) + ((this.diagonalX / 2) * (this.diagonalX / 2))).toFixed(2);
    this.geoScene.render();
  }

  checkInput(input) {
    if ((this.diagonalX >= 1 && this.diagonalX <= 10) && (this.diagonalY >= 1 && this.diagonalY <= 10)) {
      this.errorInput = false;
      this.drawObjects();
    } else this.errorInput = true;
  }

}

/** CHILDREN INDEX
 * 0 - Losango Azul (Contorno)
 * 1 - Linha d (x)
 * 2 - Linha D (y)
 * 3 - Ângulos 90
 * 4 - Labels
 */