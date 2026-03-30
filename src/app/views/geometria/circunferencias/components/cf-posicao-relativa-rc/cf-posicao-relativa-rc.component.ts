import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import { identifierModuleUrl } from '@angular/compiler';
import { Object3D } from 'three';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

/**
 * Enum para definir a relação entre as circunferÊncias
 */
enum Relation {
  SECANT = 0,
  TANGENT = 1,
  EXTERNAL = 2
}

@Component({
  selector: 'cf-posicao-relativa-rc',
  templateUrl: './cf-posicao-relativa-rc.component.html',
  styleUrls: ['./cf-posicao-relativa-rc.component.scss']
})

export class CfPosicaoRelativaRcComponent implements OnInit {

  // Variáveis da reta secante
  pointA: any;
  pointB: any;

  // Variáveis das retas
  private distanceCenter: number = 0;
  radius: number = 10;

  private p1 = 'A';
  private p2 = 'B';

  m: number;
  b: number;

  autoBots = [];
  labelPos = new THREE.Vector2;

  relation: Relation;

  // variaveis para correcao de bugs visuais
  fromRightbar: boolean = false;
  screenUpdate: number = 0;

  //Botões
  buttons: Object[] = [
    { title: "Ponto e Circunferência", route: "cf_posicao_relativa_pc" },
    { title: "Reta e Circunferência", route: "cf_posicao_relativa_rc" },
    { title: "Circunferência e Circunferência", route: "cf_posicao_relativa_cc" }
  ];

  // Variável com os botões de exemplos de relações
  buttons_examples = [
    { title: 'Secante', value: 0 },
    { title: 'Tangente', value: 1 },
    { title: 'Externa', value: 2 }
  ];

  loadExample(event: MouseEvent, relation) {
    event.preventDefault(); // Previne o comportamento padrão do evento
    this.relation = relation;

    // Checagem do tipo da relação
    if (this.relation == Relation.SECANT) {
      this.drawDefaultPoints('#one');
    } else if (this.relation == Relation.TANGENT) {
      this.drawDefaultPoints('#two');
    } else if (this.relation == Relation.EXTERNAL) {
      this.drawDefaultPoints('#three');
    }
  }

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;
  public data: any;

  constructor() {
    this.data = {
      intersects: []
    }
  }

  ngDoCheck() {
    this.distanceCenter = Math.round(this.geoScene.lineLenght);
    if (this.fromRightbar && this.geoScene.returnFromGeoScene) {
      this.m = null;
      this.b = null;
      this.fromRightbar = false;
      this.geoScene.returnFromGeoScene = false;
      this.verifyRelativePosition(this.m, this.b);
    } else if (this.screenUpdate > 1 && this.geoScene.returnFromGeoScene) {
      this.m = this.geoScene.equation[0];
      this.b = this.geoScene.equation[1];
      this.verifyRelativePosition(this.m, this.b);
      this.geoScene.returnFromGeoScene = false;
    } else if (!this.fromRightbar) {
      this.m = this.geoScene.equation[0];
      this.b = this.geoScene.equation[1];
      this.verifyRelativePosition(this.m, this.b);
    }

    this.distanceCenter = (this.distanceCenter + 10) / 4
  }

  ngOnInit() {
    registerLocaleData(pt);
    if (this.screenUpdate < 1) {
      this.defaultElements();
      this.screenUpdate++;
    }
  }

  /**Equação geral da circunferencia x²+y²=r² (30²=900)
   * a circunferência setada na cena tem raio 30
   *Substituindo y da circunferência por y da eq. geral da reta
   *
   * @link https://www.youtube.com/watch?v=4GANOVj7cYU
   */
  private verifyRelativePosition(m: number, b1: number) {
    /**a = x²+mx²
     * b = 2mxb
     * c = b²-900
    */
    let a = 1 + m ** 2;
    let b = 2 * m * b1;
    let c = (b1 ** 2) - 900;

    let delta = (b ** 2) - (4 * a * c);

    if (this.distanceCenter === 30) delta = 0;

    if (delta > 0) {
      //secante
      this.relation = Relation.SECANT;
      this.p1 = this.geoScene.points[0];
      this.p2 = this.geoScene.points[1];
      this.geoScene.points = [];
    }
    else if (delta == 0) {
      //tangente
      this.relation = Relation.TANGENT;
    }
    else if (delta < 0) {
      //externa
      this.relation = Relation.EXTERNAL;
    } else {
      this.relation = null;
    }
    this.fromRightbar = false;
  }

  public defaultProperties(cardID: string) {
    this.geoScene.fromInput = true;
    if (cardID == "#one") {
      //secante
      this.geoScene.addLabel('r', new THREE.Vector2(15, 3), 'blue'); // label da linha tracejada do raio
      this.geoScene.addLabel('d', new THREE.Vector2(-4, 0), 'blue'); // label da linha solida da distancia
      this.geoScene.addLabel('s', new THREE.Vector2(-75, -20), 'red'); // label da linha solida s
      this.geoScene.addLabel('O', new THREE.Vector2(3, -3), 'black'); // label do ponto do centro
      this.geoScene.addLabel('C(O,r)', new THREE.Vector2(24, -27), 'black'); // label da circunferencia
      this.geoScene.checkLabel(new THREE.Vector2(28, 16)); // label ponto A
      this.geoScene.checkLabel(new THREE.Vector2(-33, -6)); // label ponto B
      this.geoScene.addPoint(new THREE.Vector3(25.5, 14.5, 0.5)); // ponto A
      this.geoScene.addPoint(new THREE.Vector3(-28.5, -5.9, 0.5)); // ponto B
      this.geoScene.drawPointLine(new THREE.Vector2(25, 14), true, false); // linha tracejada do raio
      this.geoScene.drawPointLine(new THREE.Vector2(-2, 4), false, false); // linha solida da distancia
      this.autoBots[0] = new THREE.Vector3(190, 75.8531, 0); // ponto 0 da linha s
      this.autoBots[1] = new THREE.Vector3(-210, -73.6392, 0); // ponto 1 da linha s
      this.p1 = 'A';
      this.p2 = 'B';
    }
    else if (cardID == "#two") {
      //tangente
      this.geoScene.addLabel('t', new THREE.Vector2(-65, 33), 'red'); // label da linha solida t
      this.geoScene.addLabel('r', new THREE.Vector2(3, 15), 'blue'); // label da linha tracejada do raio
      this.geoScene.addLabel('d', new THREE.Vector2(-3, 15), 'blue'); // label da linha solida da distancia
      this.geoScene.addLabel('O', new THREE.Vector2(3, -3), 'black'); // label do ponto do centro
      this.geoScene.addLabel('C(O,r)', new THREE.Vector2(24, -27), 'black'); // label da circunferencia
      this.geoScene.checkLabel(new THREE.Vector2(0, 31)); // label ponto A
      this.geoScene.addPoint(new THREE.Vector3(0, 29.5, 0.5)); // ponto A
      this.geoScene.drawPointLine(new THREE.Vector2(0, 30), false, false); // linha solida da distancia e raio
      this.autoBots[0] = new THREE.Vector3(200, 29.1185, 0); // ponto 0 da linha t
      this.autoBots[1] = new THREE.Vector3(-200, 30.8814, 0); // ponto 1 da linha t

    }
    else {
      //externo
      this.geoScene.addLabel('r', new THREE.Vector2(15, 3), 'blue'); // label da linha tracejada do raio
      this.geoScene.addLabel('t', new THREE.Vector2(80, -20), 'red'); // label da linha solida t
      this.geoScene.addLabel('O', new THREE.Vector2(3, -3), 'black'); // label do ponto do centro
      this.geoScene.drawPointLine(new THREE.Vector2(25, 14), true, false); // linha tracejada do raio
      this.geoScene.addLabel('C(O,r)', new THREE.Vector2(24, -27), 'black'); // label da circunferencia
      this.autoBots[0] = new THREE.Vector3(200, -136.0041, 0);
      this.autoBots[1] = new THREE.Vector3(-200, 231.4101, 0);
      this.geoScene.lineLenght = 35;
    }
    return this.autoBots;
  }

  public drawDefaultPoints(cardID) {
    this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("circ-rc_deletable"));
    this.reDraw();

    let pos = this.defaultProperties(cardID);

    let material = new THREE.LineBasicMaterial({
      color: 0xff0000
    });
    let geometry = new THREE.Geometry();

    geometry.vertices.push(pos[0], pos[1]);
    let line = new THREE.Line(geometry, material);
    line.name = "circ-rc_deletable";

    this.geoScene.scene.add(line);

    this.geoScene.render();
    this.geoScene.fromRightbar = true;
    this.fromRightbar = true;
  }

  public defaultElements() {
    // Adicionando novas circunferências na cena
    let material = new THREE.MeshBasicMaterial({
      color: 0x000000
    });
    let circleGeometry = new THREE.CircleGeometry(30, 360);
    let circleOne = new THREE.Mesh(circleGeometry, material);
    circleOne.name = "circleOne";
    if (this.screenUpdate >= 1) this.geoScene.scene.add(circleOne);

    let materialTwo = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    let circleGeometryTwo = new THREE.CircleGeometry(29, 92);
    let circleTwo = new THREE.Mesh(circleGeometryTwo, materialTwo);
    circleTwo.name = "circleTwo";
    if (this.screenUpdate >= 1) this.geoScene.scene.add(circleTwo);

    // Adicionando ponto central do círculo
    const centerPoint = new THREE.Mesh(
      new THREE.CircleGeometry(1, 30),
      new THREE.MeshBasicMaterial({
        color: 0x000000
      })
    );
    if (!this.geoScene.defaultObjects.length) {
      this.geoScene.defaultObjects.push(circleOne);
      this.geoScene.defaultObjects.push(circleTwo);
      this.geoScene.defaultObjects.push(centerPoint);
    }
    centerPoint.position.z = 0.6;
    if (this.screenUpdate >= 1) this.geoScene.scene.add(centerPoint);
  }

  public reDraw() {
    // Remove todos os elementos da cena
    while (this.geoScene.scene.children.length) {
      this.geoScene.scene.remove(this.geoScene.scene.children[0]);
    }
    this.defaultElements();
  }
}
