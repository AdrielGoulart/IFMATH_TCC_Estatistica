import {
  Component,
  AfterViewInit,
  DoCheck,
  ViewChild
} from '@angular/core';

import {
  KatexOptions
} from 'ng-katex';
import {
  GeoSceneComponent
} from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';

/**
 * Enum para definir a relação entre as circunferÊncias
 */
enum Relation {
  SECANT = 0,
  INTERNAL_TANGENTS = 1,
  EXTERNAL_TANGENTS = 2,
  INTERNAL = 3,
  EXTERNAL = 4
}

@Component({
  selector: 'cf-posicao-relativa-cc',
  templateUrl: './cf-posicao-relativa-cc.component.html',
  styleUrls: ['./cf-posicao-relativa-cc.component.scss']
})
export class CfPosicaoRelativaCcComponent implements AfterViewInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  private dragging: boolean = false; // Variável para controle do drag
  private currentIndex: any = null; // Geometria da cena a qual irá se mover

  // Raycaster da página, utilizado para o "clicar e arrastar"
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private insersects: THREE.Intersection[]; // Elementos que o evento do clique passa através

  // Posição do mouse normalizada
  private mousePos;

  // Centro da circunferencia A
  private centerPointOne;
  // Centro da circunferencia B
  private centerPointTwo;

  // Distância entre as circunferencias
  private distance = 60;
  radiusOne = 10;
  radiusTwo = 5;
  private sumRadius = 45;
  private subRadius = 15;
  // Variável que armazena a relação entre as circunferências
  relation: Relation = Relation.EXTERNAL;


  public errorInputRadius: boolean = false;
  public vertices;

  //
  private intersectCount: number = 0;

  // Variável com os botões de exemplos de relações
  buttons_examples = [
    { title: 'Secantes', value: 0 },
    { title: 'Tangentes Ext.', value: 2 },
    { title: 'Tangentes Int.', value: 1 },
    { title: 'Externas', value: 4 },
    { title: 'Internas', value: 3 }
  ];

  // Botões para outros componentes
  buttons: Object[] = [
    { title: "Ponto e Circunferência", route: "cf_posicao_relativa_pc" },
    { title: "Reta e Circunferência", route: "cf_posicao_relativa_rc" },
    { title: "Circunferência e Circunferência", route: "cf_posicao_relativa_cc" }
  ];

  constructor() { }

  ngDoCheck(){
    this.distance = Math.round(this.distance);
  }

  /**
   * Carrega o exemplo da relação para a página
   * @param event Evento do mouse click
   * @param relation Relação a ser exibida
   */
  loadExample(event: MouseEvent, relation) {
    event.preventDefault(); // Previne o comportamento padrão do evento
    this.relation = relation;
    this.radiusOne = 10;
    this.radiusTwo = 5;
    this.sumRadius = 15;
    this.subRadius = 5;
    this.reDraw();
    this.errorInputRadius = false;

    // Checagem do tipo da relação
    switch (this.relation) {
      case Relation.SECANT:
        this.loadToScene(-10, 0, 0, 0);
        break;
      case Relation.EXTERNAL_TANGENTS:
        this.loadToScene(-10, 5, 0, 0);
        break;
      case Relation.INTERNAL_TANGENTS:
        this.loadToScene(0, -5, 0, 0);
        break;
      case Relation.INTERNAL:
        this.loadToScene(0, -2.5, 0, -2.5);
        break;
      case Relation.EXTERNAL:
        this.loadToScene(-10, 10, 0, 0);
        break;
    }
  }

  checkInput() {
    let inputRadiusOne = (this.radiusOne >= 1 && this.radiusOne <= 10);
    let inputRadiusTwo = (this.radiusTwo >= 1 && this.radiusTwo <= 10);
    if (inputRadiusOne && inputRadiusTwo) {
      this.sumRadius = this.radiusOne + this.radiusTwo;
      this.subRadius = Math.abs(this.radiusOne - this.radiusTwo);
      this.reDraw();
      this.errorInputRadius = false;
      if (this.radiusOne === 10 && this.radiusTwo === 10) {
        this.relation = Relation.EXTERNAL_TANGENTS;
        let tangentPoint = new THREE.Mesh(new THREE.CircleGeometry(0.25, 10), new THREE.MeshBasicMaterial({ color: 0x000000 }));
        tangentPoint.name = "tangentPoint";
        this.geoScene.scene.add(tangentPoint);
        this.geoScene.render();
      } else this.relation = Relation.EXTERNAL;
    }
    else {
      this.errorInputRadius = true;
    }
  }

  /**
   * Move as geometrias para as coordenadas fornecidas recalculando as propriedades
   * @param x0 coordenada X do centro da circunferencia A
   * @param x1 coordenada X do centro da circunferencia B
   * @param y0 coordenada Y do centro da circunferencia A
   * @param y1 coordenada Y do centro da circunferencia B
   */
  loadToScene(x0, x1, y0, y1) {
    // Movendo geometrias relativas a circunferencia A
    this.geoScene.scene.children[3].position.copy(new THREE.Vector3(x0, y0, 0.5)); // Centro da circunferencia A
    this.geoScene.scene.children[0].position.copy(new THREE.Vector3(x0, y0, 0.5)); // Circunferencia A

    let posLine = new THREE.Vector3(x0 + (Math.cos(0) * 10), y0, 0.5); // Linha do raio 1 (A)
    this.geoScene.scene.children[1].position.copy(posLine);

    let posSprite = new THREE.Vector3(x0 + 1.75, y0 + this.radiusTwo/2, 0.5); // Sprite r1
    this.geoScene.scene.children[2].position.copy(posSprite);

    // Movendo geometrias relativas a circunferencia B
    this.geoScene.scene.children[4].position.copy(new THREE.Vector3(x1, y1, 0.5)); // Centro da circunferencia B
    this.geoScene.scene.children[7].position.copy(new THREE.Vector3(x1, y1, 0.5)); // Circunferencia B

    posLine = new THREE.Vector3(x1 - (Math.cos(0) * 10), y1, 0.5); // Linha do raio 2 (B)
    this.geoScene.scene.children[5].position.copy(posLine);

    posSprite = new THREE.Vector3(x1 - 1.75, y1 + this.radiusTwo/2, 0.5); // Sprite r2
    this.geoScene.scene.children[6].position.copy(posSprite);

    // Calculo da distância entre as circunferencias
    this.distance = Math.sqrt(
      (x0 - x1) ** 2 + (y0 - y1) ** 2
    );

    // Cria uma nova reta para representar a distância
    const distanceLine = new THREE.Geometry();
    distanceLine.vertices.push(new THREE.Vector3(this.centerPointOne.position.x, this.centerPointOne.position.y, 0.6));
    distanceLine.vertices.push(new THREE.Vector3(this.centerPointTwo.position.x, this.centerPointTwo.position.y, 0.6));

    const distanceLineGeometry = new THREE.Line(
      distanceLine,
      new THREE.LineBasicMaterial({
        color: 0x000000, linewidth: 2
      })
    );

    this.hasTangentPoint();

    // Remove a antiga linha da distância
    this.geoScene.scene.remove(this.geoScene.scene.children[8]);
    // Adiciona a nova linha da distância na cena
    this.geoScene.scene.add(distanceLineGeometry);
    // Renderiza novamente a cena
    this.geoScene.render();
  }

  /**
   * Captura o evento de mouse down na cena
   * @param event evento do mouse
   */
  mouseDown(event: MouseEvent) {
    event.preventDefault(); // previne o comportamento padrão do evento
    this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
    this.getIndex(); // captura o objeto que foi clicado
    this.dragging = true; // muda a variável de controle do drag para true
  }

  /**
   * Captura o evento de mouse up na cena
   * @param event evento do mouse
   */
  mouseUp(event: MouseEvent) {
    event.preventDefault(); // previne o comportamento padrão do evento
    console.log(this.insersects.length)
    this.dragging = false; // muda a variável de controle do drag para false
    this.currentIndex = null; // anula o elemento clicado
    this.mousePos = null; // anula a posição do mouse
  }

  /**
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
  mouseMove(event: MouseEvent) {
    // Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
    if (this.dragging && this.currentIndex !== null) {
      this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse

      // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
      this.insersects.forEach(el => {
        if (el.object.name == "circunference-one") {
          el.object.position.copy(this.mousePos);
        } else if (el.object.name == "circunference-two") {
          el.object.position.copy(this.mousePos);
        }
      });

      // Move os objetos referentes a cada circunferencia em relação a posição do mouse
      if (this.currentIndex.object.name == "circunference-one") {
        this.geoScene.scene.children[0].position.copy(this.mousePos);

        let posLine = new THREE.Vector3(this.mousePos.x + (Math.cos(0) * 10), this.mousePos.y, 0.4);
        this.geoScene.scene.children[1].position.copy(posLine);

        let posSprite = new THREE.Vector3(this.mousePos.x + 2.5, this.mousePos.y + this.radiusOne/2, 0.4);
        if(this.radiusOne < 4) posSprite.y = this.mousePos.y + this.radiusOne + 1;
        this.geoScene.scene.children[2].position.copy(posSprite);

      } else if (this.currentIndex.object.name == "circunference-two") {
        this.geoScene.scene.children[7].position.copy(this.mousePos);

        let posLine = new THREE.Vector3(this.mousePos.x - (Math.cos(0) * 10), this.mousePos.y, 0.4);
        this.geoScene.scene.children[5].position.copy(posLine);

        let posSprite = new THREE.Vector3(this.mousePos.x - 1.75, this.mousePos.y + this.radiusTwo/2, 0.4);
        if(this.radiusTwo < 4) posSprite.y = this.mousePos.y + this.radiusTwo + 1;
        this.geoScene.scene.children[6].position.copy(posSprite);
      }

      // Bloqueia um ponto de ficar em cima do outro
      if (this.insersects.length >= 5 && (this.centerPointOne.position.x == this.centerPointTwo.position.x)) {
        this.loadToScene(-10, 10, 0, 0);
        this.distance = Math.round(this.distance); //Arredonda o numero exibido da distancia interna
      }
      else this.drawFigures();
    }
  }

  drawFigures() {
    // Calcula e cria uma nova linha de distância
    const distanceLine = new THREE.Geometry();
    distanceLine.vertices.push(new THREE.Vector3(this.centerPointOne.position.x, this.centerPointOne.position.y, 0.6));
    distanceLine.vertices.push(new THREE.Vector3(this.centerPointTwo.position.x, this.centerPointTwo.position.y, 0.6));

    const distanceLineGeometry = new THREE.Line(
      distanceLine,
      new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: 2
      })
    );

    this.distance = Math.sqrt(
      (
        (this.centerPointOne.position.x - this.centerPointTwo.position.x) ** 2 + (this.centerPointOne.position.y - this.centerPointTwo.position.y) ** 2
      )
    );

    let distanceHigh = this.distance + 0.05;
    let distanceLow = this.distance - 0.05;

    // Verifica a relação entre as circunferências
    if ((Math.abs((this.radiusOne - this.radiusTwo)) < distanceLow && distanceHigh < this.radiusOne + this.radiusTwo)) {
      this.relation = Relation.SECANT;
    } else if ((this.radiusOne + this.radiusTwo) >= distanceLow && (this.radiusOne + this.radiusTwo) <= distanceHigh) {
      this.relation = Relation.EXTERNAL_TANGENTS;
    } else if (Math.abs(this.radiusOne - this.radiusTwo) >= distanceLow && Math.abs(this.radiusOne - this.radiusTwo) <= distanceHigh) {
      this.relation = Relation.INTERNAL_TANGENTS;
    } else if (distanceLow > (this.radiusOne + this.radiusTwo)) {
      this.relation = Relation.EXTERNAL;
    } else {
      this.relation = Relation.INTERNAL;
    }

    this.hasTangentPoint();

    this.subRadius = Math.abs(this.radiusOne - this.radiusTwo);
    this.sumRadius = this.radiusOne + this.radiusTwo;
    this.distance = Math.round(this.distance);
    
    if (this.relation === Relation.SECANT && this.distance === this.subRadius) this.distance += 1;
    if (this.relation === Relation.SECANT && this.distance === this.sumRadius) this.distance -= 1;
    else if (this.relation === Relation.EXTERNAL && this.distance === this.sumRadius) this.distance += 1;
    else if (this.relation === Relation.INTERNAL && this.distance === this.subRadius) this.distance -= 1;

    // Remove e adiciona a nova linha de distância
    this.geoScene.scene.remove(this.geoScene.scene.children[8]);
    this.geoScene.scene.add(distanceLineGeometry);
    // Renderiza todos os elementos novamente
    this.geoScene.render();
  }

  /**
   * Captura o indice do elemento clicado se e somente se um destes elementos for um centro de circunferencia
   */
  getIndex() {
    this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);

    if (this.insersects.length === 0) {
      this.currentIndex = null;
      return;
    }

    this.insersects.forEach(el => {
      if (el.object.name == "circunference-one" || el.object.name == "circunference-two") {
        this.currentIndex = el;
        console.log(el);
        return;
      }
    });
  }

  /**
   * Cria um novo raycaster a partir do clique do mouse
   * @param event evento do mouse
   */
  setRaycaster(event: MouseEvent) {
    event.preventDefault();

    let mouse = new THREE.Vector2();
    mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
    mouse.y = - (event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;

    let vector = new THREE.Vector3(
      mouse.x, mouse.y, 0.8
    );

    vector.unproject(this.geoScene.getCamera());

    let direction = vector.sub(this.geoScene.getCamera().position).normalize();
    let distance = - this.geoScene.getCamera().position.z / direction.z;
    let pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));

    this.mousePos = pos;
    this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
  }

  hasTangentPoint() {
    try { this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("tangentPoint")); }
    catch{ console.log("not found") };

    if (this.relation === Relation.EXTERNAL_TANGENTS || this.relation === Relation.INTERNAL_TANGENTS) {
      let distancesRatio, centerPointOneX, centerPointOneY, centerPointTwoX, centerPointTwoY;
      if (this.radiusOne > this.radiusTwo) {
        distancesRatio = this.radiusOne / this.distance;
        centerPointOneX = this.centerPointOne.position.x;
        centerPointOneY = this.centerPointOne.position.y;
        centerPointTwoX = this.centerPointTwo.position.x;
        centerPointTwoY = this.centerPointTwo.position.y;
      } else {
        distancesRatio = this.radiusTwo / this.distance;
        centerPointOneX = this.centerPointTwo.position.x;
        centerPointOneY = this.centerPointTwo.position.y;
        centerPointTwoX = this.centerPointOne.position.x;
        centerPointTwoY = this.centerPointOne.position.y;
      }
      let tangentPoint = new THREE.Mesh(new THREE.CircleGeometry(0.25, 10), new THREE.MeshBasicMaterial({ color: 0x000000 }));
      tangentPoint.position.x = ((1 - distancesRatio) * centerPointOneX + distancesRatio * centerPointTwoX);
      tangentPoint.position.y = ((1 - distancesRatio) * centerPointOneY + distancesRatio * centerPointTwoY);
      tangentPoint.name = "tangentPoint";
      this.geoScene.scene.add(tangentPoint);
    }
  }

  reDraw() {
    while (this.geoScene.scene.children.length) {
      this.geoScene.scene.remove(this.geoScene.scene.children[0]);
    }
    this.makeElements();
  }

  makeElements() {
    // Adicionando a primeira circunferencia (maior)
    const segmentCount = 92,
      radius = this.radiusOne,
      geometry = new THREE.Geometry(),
      material = new THREE.LineBasicMaterial({ color: 0x000000 });

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * Math.PI * 2;
      geometry.vertices.push(
        new THREE.Vector3(
          Math.cos(theta) * radius,
          Math.sin(theta) * radius,
          0
        )
      );
    }

    this.vertices = geometry.vertices;
    const circunference = new THREE.Line(geometry, material);
    circunference.position.x = -10;
    circunference.name = "circunferenceOne";;

    // Label da linha interna da circunferência maior
    const labelRadius = new SpriteText('r1', 2, 'red');
    labelRadius.position.x = -8.5;
    labelRadius.position.y = this.radiusOne/2;
    if(this.radiusOne < 4) labelRadius.position.y = this.radiusOne + 1;

    // Linha interna
    const geometryTwoCenter = new THREE.Geometry();
    geometryTwoCenter.vertices.push(new THREE.Vector3(-10, 0, 0.6));
    geometryTwoCenter.vertices.push(new THREE.Vector3(-10, this.radiusOne, 0.6));

    const circunferenceOneRadius = new THREE.Line(
      geometryTwoCenter,
      new THREE.LineBasicMaterial({
        color: 0x4683B4, linewidth: 2
      })
    );

    this.centerPointOne = new THREE.Mesh(new THREE.CircleGeometry(0.25, 10), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.centerPointOne.position.x = -10;
    this.centerPointOne.position.z = 0.7;
    this.centerPointOne.name = "circunference-one";


    // Criando circunferencia B
    const radiusTwo = this.radiusTwo,
      geometryTwo = new THREE.Geometry();

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * Math.PI * 2;
      geometryTwo.vertices.push(
        new THREE.Vector3(
          Math.cos(theta) * radiusTwo,
          Math.sin(theta) * radiusTwo,
          0)
      );
    }

    const circunferenceTwo = new THREE.Line(geometryTwo, material);
    circunferenceTwo.name = "circunferenceTwo";
    circunferenceTwo.position.x = 10;

    // Label da linha interna da circunferência menor
    const labelRadiusTwo = new SpriteText('r2', 2, 'red');
    labelRadiusTwo.position.x = 8.5;
    labelRadiusTwo.position.y = this.radiusTwo/2;
    if(this.radiusTwo < 4) labelRadiusTwo.position.y = this.radiusTwo + 1;

    // Linha interna
    const radiusTwoLine = new THREE.Geometry();
    radiusTwoLine.vertices.push(new THREE.Vector3(10, 0, 0.6));
    radiusTwoLine.vertices.push(new THREE.Vector3(10, this.radiusTwo, 0.6));

    const circunferenceTwoRadius = new THREE.Line(
      radiusTwoLine,
      new THREE.LineBasicMaterial({
        color: 0x4683B4, linewidth: 2
      })
    );

    this.centerPointTwo = new THREE.Mesh(new THREE.CircleGeometry(0.25, 10), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.centerPointTwo.position.x = 10;
    this.centerPointTwo.position.z = 0.7;
    this.centerPointTwo.name = "circunference-two";

    // Linha da distancia entre as duas circunferências
    const distanceLine = new THREE.Geometry();
    distanceLine.vertices.push(new THREE.Vector3(this.centerPointOne.position.x, this.centerPointOne.position.y, 0.6));
    distanceLine.vertices.push(new THREE.Vector3(this.centerPointTwo.position.x, this.centerPointTwo.position.y, 0.6));

    const distanceLineGeometry = new THREE.Line(
      distanceLine,
      new THREE.LineBasicMaterial({
        color: 0x000000, linewidth: 2
      })
    );
    distanceLineGeometry.name = "distLine";

    this.geoScene.scene.add(
      circunference,          //0
      circunferenceOneRadius, //1
      labelRadius,            //2
      this.centerPointOne,    //3
      this.centerPointTwo,    //4
      circunferenceTwoRadius, //5
      labelRadiusTwo,         //6
      circunferenceTwo,       //7
      distanceLineGeometry    //8
    );

    this.geoScene.render();
  }

  ngAfterViewInit() {
    this.makeElements();
    console.log(this.geoScene.scene);
  }

}
