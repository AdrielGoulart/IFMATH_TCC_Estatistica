import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { GeoSceneComponent } from '../../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';

@Component({
  selector: 'ifmath-pl-quadrilateros-retangulo',
  templateUrl: './pl-quadrilateros-retangulo.component.html',
  styleUrls: ['./pl-quadrilateros-retangulo.component.scss']
})
export class PlQuadrilaterosRetanguloComponent implements AfterViewInit, OnInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  ladoA: number = 10;
  ladoB: number = 5;
  private oldLadoA: number = this.ladoA;
  private oldLadoB: number = this.ladoB;
  errorInput = false;

  private conta = Math.sqrt((this.ladoA * this.ladoA) + (this.ladoB * this.ladoB)).toFixed(2);
  private newConta = this.conta.toString().replace(".", ",");
  sqrtValue1: string = `\\textcolor{black}{d \\approx ${this.newConta} u.m. }`;
  sqrtValue2: string = `d \\approx ${this.newConta} u.m.`;

  buttons: Object[] = [
    { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
    { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
    { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
    { title: "Losango", route: "pl_quadrilateros_losango" },
    { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
  ];

  constructor() { }

  ngOnInit() {
    this.geoScene.fieldOfView = 7;
  }

  ngAfterViewInit() {
    this.drawObjects();
  }

  drawObjects() {
    let color = 0x4683B4, colorLbl = '#4683B4';

    let rectangleOutlineGeometry = new THREE.PlaneGeometry(this.ladoA, this.ladoB, 25, 25);
    let rectangleOutlineMaterial = new THREE.MeshBasicMaterial({ color: color });
    this.geoScene.scene.children[0] = new THREE.Mesh(rectangleOutlineGeometry, rectangleOutlineMaterial);

    let rectangleInsideGeometry = new THREE.PlaneGeometry(this.ladoA - 0.25, this.ladoB - 0.25, 25, 25);
    let rectangleInsideMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    this.geoScene.scene.children[1] = new THREE.Mesh(rectangleInsideGeometry, rectangleInsideMaterial);

    // https://math.stackexchange.com/a/1490157 -> descobrir a posicao dos vertices de um quadrado dado o ponto do centro
    let geometryLine = new THREE.Geometry();
    geometryLine.vertices.push(
      new THREE.Vector3(this.ladoA / 2 - 0.125, this.ladoB / 2 - 0.125, 0),
      new THREE.Vector3(-this.ladoA / 2 + 0.125, -this.ladoB / 2 + 0.125, 0)
    );
    this.geoScene.scene.children[2] = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }));

    let size = 0.5;
    if (this.ladoA === 1 || this.ladoB === 1) size = 0.25;

    let geometryAngle1 = new THREE.Geometry();
    geometryAngle1.vertices.push(
      new THREE.Vector3(-this.ladoA/2+size+0.125, this.ladoB/2-0.125, 0),
      new THREE.Vector3(-this.ladoA/2+size+0.125, this.ladoB/2-size-0.125, 0),
      new THREE.Vector3(-this.ladoA/2+0.125, this.ladoB/2-size-0.125, 0)
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
      new THREE.Vector3(this.ladoA/2-size-0.125, this.ladoB/2-0.125, 0),
      new THREE.Vector3(this.ladoA/2-size-0.125, this.ladoB/2-size-0.125, 0),
      new THREE.Vector3(this.ladoA/2-0.125, this.ladoB/2-size-0.125, 0)
    );
    let angleOutline2 = new THREE.Line(geometryAngle2, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));

    let angleDotGeometry2 = new THREE.CircleGeometry(size/5, 30);
    let angleDot2 = new THREE.Mesh(angleDotGeometry2, new THREE.MeshBasicMaterial({ color: 0x000000 }));

    let distance2 = Math.sqrt((
      (geometryAngle2.vertices[0].x - geometryAngle2.vertices[2].x) ** 2 + (geometryAngle2.vertices[0].y - geometryAngle2.vertices[2].y) ** 2
    ));
    let distancesRatio2 = distance1/2 / distance2;

    let x2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].x + distancesRatio2 * geometryAngle2.vertices[0].x, 
        y2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].y + distancesRatio2 * geometryAngle2.vertices[0].y;
    angleDot2.position.copy(new THREE.Vector3(x2,y2,0));

    let geometryAngle3 = new THREE.Geometry();
    geometryAngle3.vertices.push(
      new THREE.Vector3(this.ladoA/2-size-0.125, -this.ladoB/2+0.125, 0),
      new THREE.Vector3(this.ladoA/2-size-0.125, -this.ladoB/2+size+0.125, 0),
      new THREE.Vector3(this.ladoA/2-0.125, -this.ladoB/2+size+0.125, 0)
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
      new THREE.Vector3(-this.ladoA/2+size+0.125, -this.ladoB/2+0.125, 0),
      new THREE.Vector3(-this.ladoA/2+size+0.125, -this.ladoB/2+size+0.125, 0),
      new THREE.Vector3(-this.ladoA/2+0.125, -this.ladoB/2+size+0.125, 0)
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

    let angle = new THREE.Group();
    angle.add(angleOutline1, angleDot1, angleOutline2, angleDot2, angleOutline3, angleDot3, angleOutline4, angleDot4);
    this.geoScene.scene.children[3] = angle;

    let labelDiagonal = new SpriteText('d', 0.75, '#FF0000');
    labelDiagonal.position.copy(new THREE.Vector3(0.3, -0.3, 0));
    if(this.ladoA <= 2 || this.ladoB <= 2) labelDiagonal.position.copy(new THREE.Vector3(-this.ladoA/2 - 0.35, -this.ladoB/2 - 0.35, 0)); 
    this.geoScene.scene.children[4] = labelDiagonal;

    let labelLadoA = new SpriteText('a', 1, colorLbl);
    labelLadoA.position.x = 0;
    labelLadoA.position.y = -this.ladoB * 0.5 - 0.7;

    let labelLadoB = new SpriteText('b', 1, colorLbl);
    labelLadoB.position.x = this.ladoA * 0.5 + 0.5;
    labelLadoB.position.y = 0;

    let labelLado = new THREE.Group();
    labelLado.add(labelLadoA, labelLadoB);
    this.geoScene.scene.children[5] = labelLado;

    this.conta = Math.sqrt((this.ladoA * this.ladoA) + (this.ladoB * this.ladoB)).toFixed(2);
    this.newConta = this.conta.toString().replace(".", ",");
    this.sqrtValue1 = `\\textcolor{black}{d \\approx ${this.newConta} \\ u.m.}`;
    this.sqrtValue2 = `d \\approx ${this.newConta} \\ u.m.`;

    this.oldLadoA = this.ladoA;
    this.oldLadoB = this.ladoB;

    this.geoScene.render();
  }

  checkInput(input) {
    if ((this.ladoA >= 1 && this.ladoA <= 10) && (this.ladoB >= 1 && this.ladoB <= 10)) {
      if(this.ladoA === this.ladoB){
        if(input === 'A'){
          if(this.ladoA === 10) this.ladoB = 9;
          else if(this.ladoA === 1) this.ladoB = 2;
          else{
            if(this.oldLadoA < this.ladoA) this.ladoA++;
            else if(this.oldLadoA > this.ladoA) this.ladoA--;
          }
        }else if(input === 'B'){
          if(this.ladoB === 10) this.ladoA = 9;
          else if(this.ladoB === 1) this.ladoA = 2;
          else{
            if(this.oldLadoB < this.ladoB) this.ladoB++;
            else if(this.oldLadoB > this.ladoB) this.ladoB--;
          }
        }
      }
      this.errorInput = false;
      this.drawObjects();
    } else this.errorInput = true;
  }

}

/** CHILDREN INDEX
 * 0 - Retangulo Azul (Contorno)
 * 1 - Retangulo Branco (Interno)
 * 2 - Linha Diagonal
 * 3 - Grupo que forma o angulo de 90°
 * 4 - Label da linha diagonal
 * 5 - Grupo com as labels a & b
 */