import { posix } from 'path';
import { Component, OnInit, AfterViewInit, ViewChild, DoCheck } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import { Mesh } from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

/**
 * Enum para definir a relação entre as circunferÊncias
 */
enum Relation {
  INSIDE = 0,
  OUTSIDE = 1,
  ON = 2,
  ARC = 3
}

@Component({
  selector: 'ifmath-cf-angulo-inscrito',
  templateUrl: './cf-angulo-inscrito.component.html',
  styleUrls: ['./cf-angulo-inscrito.component.scss']
})
export class CfAnguloInscritoComponent implements AfterViewInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  relation: Relation = Relation.INSIDE;
  errorInputAngle: boolean = false;
  errorInputRadius: boolean = false;
  lockArcText = "Travar Comprimento do Arco";
  private lockArcState = false;

  /*
  SubRelation - Verifica qual foi a ultima relation ativada e aplica na area de comprimento do arco com a imagem do mesmo
  */
  subRelation: Relation = Relation.INSIDE;

  private dragging: boolean = false; // Variável para controle do drag
  private dragged: string = ""; // Variavel para controle de qual objeto foi arrastado
  private currentIndex: any[] = []; // Geometria da cena a qual irá se mover

  // Raycaster da página, utilizado para o "clicar e arrastar"
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private insersects: THREE.Intersection[]; // Elementos que o evento do clique passa através

  // Posição do mouse normalizada
  private mousePos;

  // Centro da circunferencia do centro da circunferência
  private centerPoint;
  // Vertice
  private vertice;
  // Centro da circunferencia A
  private centerPointOne;
  // Linha A da circunferência
  private lineA;
  // Centro da circunferencia B
  private centerPointTwo;
  // Linha B da circunferência
  private lineB;

  // Propriedades da circunferência principal
  radius: number = 9;
  radiusExt: number = 30; // Circunferência que forma a linha
  radiusInt: number = 29; // Circunferência que será a "parte de dentro"

  // Variável que armazena o ângulo entre as duas retas
  angle: number = 90;
  angleBeta: number = 180;
  private showAngle: number = this.angle;
  private showAngleBeta: number = this.angleBeta;
  private oldAngle: number = this.angle;
  private oldAngleBeta: number = this.angleBeta;
  private input = 'alpha';
  private image = 'inscrito-interno.svg';

  //botões
  buttons: Object[] = [
    { title: "Ângulo Central", route: "cf_angulo_central" },
    { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
    { title: "Arco Capaz", route: "cf_angulo_capaz" },
    { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
    { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
  ];

  //Botoes do menu da direita
  buttons_examples = [
    { title: 'Interno', value: 0 },
    { title: 'Externo', value: 1 },
    { title: 'Pertence', value: 2 },
    { title: 'Comprimento do Arco', value: 3 },
  ];

  private ext = false;
  private pert = false;

  loadExample(event: MouseEvent, relation) {
    event.preventDefault(); // Previne o comportamento padrão do evento
    this.relation = relation;

    // Checagem do tipo da relação
    switch (this.relation) {
      case Relation.INSIDE:
        // code here
        this.subRelation = Relation.INSIDE;
        break;
      case Relation.OUTSIDE:
        // code here
        this.subRelation = Relation.OUTSIDE;
        break;
      case Relation.ON:
        // code here
        this.subRelation = Relation.ON;
        break;
      case Relation.ARC:
        // code here
        this.lockArcText = "Destravar Comprimento do Arco";
        this.lockArcState = true;
        break;
    }
    if (this.relation !== Relation.ARC) {
      this.lockArcText = "Travar Comprimento do Arco";
      this.lockArcState = false;
      this.reDrawClick();
    }
  }

  constructor() { }

  ngOnInit(){
    registerLocaleData( pt );
  }

  getIndex() {
    this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);

    if (this.insersects.length === 0) {
      this.currentIndex = null;
      return;
    }

    let arr: any[] = [];

    this.insersects.forEach(el => {
      if (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "vertice") {
        arr.push(el);
        this.currentIndex = arr;
        return;
      }
    });

  }

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

  ngDoCheck() {
    if (this.angle >= 0 && this.angle <= 180) {
      this.showAngle = this.angle;
      this.showAngleBeta = this.showAngleBeta;
      this.oldAngle = this.angle;
      this.oldAngleBeta = this.angleBeta;
    }
    try{
      this.geoScene.addDegreeSymbol(this.angle, 'degreeA');
      this.geoScene.addDegreeSymbol(this.angleBeta, 'degreeB');
    } catch {}
  }

  /**
 * Captura o evento de mouse move na cena
 * @param event evento do mouse
 */
  mouseMove(event: MouseEvent) {
    //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
    if (this.dragging && this.currentIndex !== null) {
      this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse

      // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
      this.insersects.forEach(el => {
        if (el.object.name == "ponto-a" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        } else if (el.object.name == "ponto-b" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        } else if (el.object.name == "vertice" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        } else if (this.currentIndex.length >= 2) {
          el = this.currentIndex[0];
          el.object.position.copy(this.mousePos);
        }
      });

      // Move os objetos referentes a cada circunferencia em relação a posição do mouse
      if (this.currentIndex[0].object.name == "ponto-a") {
        this.dragged = "A";
      } else if (this.currentIndex[0].object.name == "ponto-b") {
        this.dragged = "B";
      } else if (this.currentIndex[0].object.name == "vertice") {
        this.dragged = "V";
      }

      this.reDrawPointsToCircle();
      this.reDrawLabel(this.dragged);
      this.reDrawAngle();
      this.reDrawArc();
      this.angleType();

      this.geoScene.render();
    }
  }

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
    this.dragging = false; // muda a variável de controle do drag para false
    this.currentIndex = null; // anula o elemento clicado
    this.mousePos = null; // anula a posição do mouse
  }

  reDrawPointsToCircle() {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let verticePoint = this.geoScene.scene.getObjectByName("vertice");
    let lineA = this.geoScene.scene.getObjectByName("line-a");
    let lineB = this.geoScene.scene.getObjectByName("line-b");
    let lineC = this.geoScene.scene.getObjectByName("line-c");
    let lineD = this.geoScene.scene.getObjectByName("line-d");
    this.geoScene.scene.remove(lineA);
    this.geoScene.scene.remove(lineB);
    this.geoScene.scene.remove(lineC);
    this.geoScene.scene.remove(lineD);

    //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
    if (this.dragged === "A") {
      let distance = Math.sqrt((
        (this.centerPointOne.position.x) ** 2 + (this.centerPointOne.position.y) ** 2 //distancia entre o ponto zero e A
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      circlePointA.position.x = (distancesRatio * circlePointA.position.x); // posicao do x na linha quando a distancia for o valor do raio
      circlePointA.position.y = (distancesRatio * circlePointA.position.y); // posicao do y na linha quando a distancia for o valor do raio

    } else if (this.dragged === "B") {
      let distance = Math.sqrt((
        (this.centerPointTwo.position.x) ** 2 + (this.centerPointTwo.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      circlePointB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio
      circlePointB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio

    } else if (this.dragged === "V") {
      let distance = Math.sqrt((
        (this.vertice.position.x) ** 2 + (this.vertice.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      verticePoint.position.x = (distancesRatio * verticePoint.position.x); // posicao do x na linha quando a distancia for o valor do raio
      verticePoint.position.y = (distancesRatio * verticePoint.position.y); // posicao do y na linha quando a distancia for o valor do raio

    }

    let distanceA = Math.sqrt((
      (this.centerPointOne.position.x - this.vertice.position.x) ** 2 + (this.centerPointOne.position.y - this.vertice.position.y) ** 2 //distancia entre o ponto V e A
    ));
    let distancesRatioA = (distanceA + 3) / distanceA;

    let distanceB = Math.sqrt((
      (this.centerPointTwo.position.x - this.vertice.position.x) ** 2 + (this.centerPointTwo.position.y - this.vertice.position.y) ** 2 //distancia entre o ponto V e B
    ));
    let distancesRatioB = (distanceB + 3) / distanceB;

    let distanceC = Math.sqrt((
      (this.centerPointOne.position.x) ** 2 + (this.centerPointOne.position.y) ** 2 //distancia entre o ponto zero e A
    ));
    let distancesRatioC = (this.radiusExt - 0.5) / distanceC;

    let distanceD = Math.sqrt((
      (this.centerPointTwo.position.x) ** 2 + (this.centerPointTwo.position.y) ** 2 //distancia entre o ponto zero e B
    ));
    let distancesRatioD = (this.radiusExt - 0.5) / distanceD;

    let xA = (1 - distancesRatioA) * verticePoint.position.x + distancesRatioA * circlePointA.position.x, yA = (1 - distancesRatioA) * verticePoint.position.y + distancesRatioA * circlePointA.position.y;
    let xB = (1 - distancesRatioB) * verticePoint.position.x + distancesRatioB * circlePointB.position.x, yB = (1 - distancesRatioB) * verticePoint.position.y + distancesRatioB * circlePointB.position.y;
    let xC = distancesRatioC * circlePointA.position.x, yC = distancesRatioC * circlePointA.position.y;
    let xD = distancesRatioD * circlePointB.position.x, yD = distancesRatioD * circlePointB.position.y;

    const geometryLineA = new THREE.Geometry();
    geometryLineA.vertices.push(new THREE.Vector3(this.vertice.position.x, this.vertice.position.y, 0.6));
    geometryLineA.vertices.push(new THREE.Vector3(xA, yA, 0.6));

    lineA = new THREE.Line(geometryLineA, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineA.name = "line-a";

    const geometryLineB = new THREE.Geometry();
    geometryLineB.vertices.push(new THREE.Vector3(this.vertice.position.x, this.vertice.position.y, 0.6));
    geometryLineB.vertices.push(new THREE.Vector3(xB, yB, 0.6));

    lineB = new THREE.Line(geometryLineB, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineB.name = "line-b";

    const geometryLineC = new THREE.Geometry();
    geometryLineC.vertices.push(new THREE.Vector3(0, 0, 0.6));
    geometryLineC.vertices.push(new THREE.Vector3(xC, yC, 0.6));

    lineC = new THREE.Line(geometryLineC, new THREE.LineBasicMaterial({ color: 0x00f500, linewidth: 2 }));
    lineC.name = "line-c";

    const geometryLineD = new THREE.Geometry();
    geometryLineD.vertices.push(new THREE.Vector3(0, 0, 0.6));
    geometryLineD.vertices.push(new THREE.Vector3(xD, yD, 0.6));

    lineD = new THREE.Line(geometryLineD, new THREE.LineBasicMaterial({ color: 0x00f000, linewidth: 2 }));
    lineD.name = "line-d";

    // reordenando a renderizacao para os pontos nao ficarem em baixo da linha da circunferencia
    this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 1; // vertice
    this.geoScene.scene.children[6].renderOrder = this.geoScene.scene.children.length - 2; // ponto a
    this.geoScene.scene.children[9].renderOrder = this.geoScene.scene.children.length - 3; // ponto b

    if (this.angle < 180) {
      this.geoScene.scene.add(lineA);
      this.geoScene.scene.add(lineB);
    }
    this.geoScene.scene.add(lineC);
    this.geoScene.scene.add(lineD);

    this.geoScene.render();
  }

  reDrawAngle() {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let verticePoint = this.geoScene.scene.getObjectByName("vertice");

    //https://stackoverflow.com/a/1354158 - formula para descobrir o angulo entre tres pontos, sendo um o vertice

    let a = new THREE.Vector2(verticePoint.position.x - circlePointA.position.x, verticePoint.position.y - circlePointA.position.y);
    let b = new THREE.Vector2(verticePoint.position.x - circlePointB.position.x, verticePoint.position.y - circlePointB.position.y);

    let ab = a.x * b.x + a.y * b.y;
    let aMod = Math.sqrt(a.x ** 2 + a.y ** 2);
    let bMod = Math.sqrt(b.x ** 2 + b.y ** 2);

    let cos = ab / (aMod * bMod);
    this.angle = Math.acos(cos) * 180 / Math.PI;

    let ang = this.geoScene.scene.getObjectByName("angle");
    let alphaGroup = this.geoScene.scene.getObjectByName("alpha");
    this.geoScene.scene.remove(
      ang,
      alphaGroup
    );

    alphaGroup = new THREE.Group();
    alphaGroup.name = "alpha";


    let geometryAngle = new THREE.Geometry(),
      materialAngle = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }),
      segmentCount = 92,
      radians = Math.acos(cos),
      radius = 5;
    if (this.radiusExt < 20) radius = 3;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = ((i / segmentCount) * radians) - (((segmentCount - i) / segmentCount) * radians);
      theta /= 2;
      geometryAngle.vertices.push(
        new THREE.Vector3(Math.sin(theta) * radius, -Math.cos(theta) * radius, 0)
      );
      if (i == 46) { // quando estiver no ponto ao centro do angulo
        const geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(0, 0, 0)); // adicionando vertice ao centro
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(theta) * (radius + 2.5), -Math.cos(theta) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado

        let line = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
        line.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis

        const alpha = new SpriteText('α', 5, '0x000000');
        alpha.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha

        alphaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
        alphaGroup.add(alpha); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
      }
    }

    let alpha = Math.atan2(circlePointA.position.y - verticePoint.position.y, circlePointA.position.x - verticePoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (verticePoint.position.x > 0 && alpha < 0) alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let beta = Math.atan2(circlePointB.position.y - verticePoint.position.y, circlePointB.position.x - verticePoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
    if (verticePoint.position.x > 0 && beta < 0) beta += 360; // caso o angulo seja negativo e o vertice esteja a direita

    let rotation = beta * 0.00875 + alpha * 0.00875 + this.angle * 0.0175 + (90 - this.angle) * 0.0175; // sinceramente, nao sei explicar como cheguei nisso ai, mas funciona ¯\_(ツ)_/¯

    if (rotation.toString() !== 'NaN') {
      ang = new THREE.Line(geometryAngle, materialAngle);
      ang.position.copy(verticePoint.position); // movendo o angulo do centro para o vertice
      ang.rotateZ(rotation); // rotacionando o angulo para posicao entre as linhas
      ang.name = "angle";
      alphaGroup.position.copy(verticePoint.position); // movendo o alpha do centro para o vertice
      alphaGroup.rotateZ(rotation); // rotacionando o alpha para posicao entre as linhas

      this.geoScene.scene.add(ang, alphaGroup);
      this.angle = Math.round(this.angle);
    } else this.angle = 0;

    if (this.angle < 1 || this.angle > 179) {
      let distanceAV = Math.sqrt((circlePointA.position.x - verticePoint.position.x) ** 2 + (circlePointA.position.y - verticePoint.position.y) ** 2);
      let distanceBV = Math.sqrt((circlePointB.position.x - verticePoint.position.x) ** 2 + (circlePointB.position.y - verticePoint.position.y) ** 2);

      if (distanceAV < distanceBV) this.geoScene.scene.getObjectByName("line-a").visible = false;
      else if (distanceAV > distanceBV) this.geoScene.scene.getObjectByName("line-b").visible = false;
    }
  }

  reDrawArc() {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let vertex = this.geoScene.scene.getObjectByName("vertice");

    // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
    let alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
    if (alpha < 0) alpha += 360; // caso o angulo seja negativo
    let beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo a angulo da reta B de radianos para graus
    if (beta < 0) beta += 360; // caso o angulo seja negativo
    this.angleBeta = beta - alpha; //tirando a diferenca dos dois, temos o angulo entre A e B
    if (this.angleBeta < 0) this.angleBeta += 360; // caso o angulo seja negativo

    let changePivotByEquation = !(this.angleBeta / 2 >= this.angle - 1 && this.angleBeta / 2 <= this.angle + 1); // Inverter a a direcao do arco (se vai do A ao B ou do B ao A)
    let changePivotByDefault = (this.angleBeta > 178 && this.angleBeta < 181); // caso especifico para 180 graus
    if (changePivotByDefault) {
      let conditionMaior, conditionMenor, zero = false;
      if (circlePointA.position.x > circlePointB.position.x) {
        conditionMaior = vertex.position.y > circlePointA.position.y;
        conditionMenor = vertex.position.y > circlePointB.position.y;
      } else if (circlePointA.position.x < circlePointB.position.x) {
        conditionMaior = vertex.position.y < circlePointB.position.y;
        conditionMenor = vertex.position.y < circlePointA.position.y;
      } else {
        zero = true;
      }
      if (!zero) {
        if (vertex.position.x > 0) changePivotByDefault = conditionMaior;
        else if (vertex.position.x < 0) changePivotByDefault = conditionMenor;
        else {
          if (vertex.position.y > 0) changePivotByDefault = false;
          else changePivotByDefault = true;
        }
      } else {
        if (circlePointA.position.y > circlePointB.position.y) {
          if (vertex.position.x > 0) changePivotByDefault = false;
          else if (vertex.position.x < 0) changePivotByDefault = true;
        } else {
          if (vertex.position.x > 0) changePivotByDefault = true;
          else if (vertex.position.x < 0) changePivotByDefault = false;
        }
      }
      if (vertex.position.x === 0 && circlePointA.position.x > circlePointB.position.x) changePivotByDefault = true;
    }

    if (changePivotByDefault || changePivotByEquation) {
      this.angleBeta = alpha - beta; //tirando a diferenca dos dois, temos o angulo entre A e B
      if (this.angleBeta < 0) this.angleBeta += 360; // caso o angulo seja negativo
    }

    let ang = this.geoScene.scene.getObjectByName("angle-beta");
    let arc = this.geoScene.scene.getObjectByName("arc");
    let betaGroup = this.geoScene.scene.getObjectByName("beta");
    this.geoScene.scene.remove(ang, arc, betaGroup);

    betaGroup = new THREE.Group();
    betaGroup.name = "beta";

    let color = 0xff0000;
    if (this.angle < 1 || this.angle > 179) color = 0x00f500;

    // Criando nova presentação para o angulo
    let segmentCount = Math.round(this.angleBeta * 2),
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      geometryArc = new THREE.Geometry(),
      materialAngle = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }),
      materialArc = new THREE.LineBasicMaterial({ color: color, linewidth: 2 }),
      radians = this.angleBeta * (Math.PI) / 180;
    if (this.radiusExt < 20) radius = 4;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryAngle.vertices.push(new THREE.Vector3(Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
      geometryArc.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
      if (i == Math.round(this.angleBeta)) {
        const geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(0, 0, 0));
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(theta) * (radius + 2.25), Math.cos(theta) * (radius + 2.25), 0));

        let line = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
        line.visible = false;

        const beta = new SpriteText('β', 4, '0x000000');
        beta.position.copy(geometryLine.vertices[1]);

        betaGroup.add(line);
        betaGroup.add(beta);
      }
    }
    // rotacionar 1 grau -> 0.0175
    let rotation = (beta - 90) * 0.0175 // o angulo comeca a ser desenhado nos 90 graus e sempre sai do ponto B
    if (changePivotByDefault || changePivotByEquation) rotation = (alpha - 90) * 0.0175; // o angulo comeca a ser desenhado nos 90 graus e sempre sai do ponto A

    if (rotation.toString() !== 'NaN') {
      ang = new THREE.Line(geometryAngle, materialAngle);
      ang.position.x = 0;
      ang.rotateZ(rotation);
      ang.name = "angle-beta";

      arc = new THREE.Line(geometryArc, materialArc);
      arc.position.x = 0;
      arc.rotateZ(rotation);
      arc.name = "arc";

      betaGroup.position.copy(ang.position);
      betaGroup.rotateZ(rotation);

      this.geoScene.scene.add(ang, arc, betaGroup);

      this.angleBeta = Math.round(this.angleBeta);
      this.showAngleBeta = this.angleBeta;
    } else this.angleBeta = 0;
  }

  reDrawLabel(label: string) {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let verticePoint = this.geoScene.scene.getObjectByName("vertice");
    let labelA = this.geoScene.scene.getObjectByName("label-a");
    let labelB = this.geoScene.scene.getObjectByName("label-b");
    let labelV = this.geoScene.scene.getObjectByName("label-v");

    let distancesRatio = (this.radiusExt + 5) / this.radiusExt;
    if (label === "A") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (this.centerPointOne.position.x) ** 2 + (this.centerPointOne.position.y) ** 2 //distancia entre o ponto zero e A
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelA.position.copy(new THREE.Vector3(distancesRatio * circlePointA.position.x, distancesRatio * circlePointA.position.y, 0.6));
    } else if (label === "B") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (this.centerPointTwo.position.x) ** 2 + (this.centerPointTwo.position.y) ** 2 //distancia entre o ponto zero e B
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelB.position.copy(new THREE.Vector3(distancesRatio * circlePointB.position.x, distancesRatio * circlePointB.position.y, 0.6));
    } else if (label === "V") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (verticePoint.position.x) ** 2 + (verticePoint.position.y) ** 2 //distancia entre o ponto zero e V
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelV.position.copy(new THREE.Vector3(distancesRatio * verticePoint.position.x, distancesRatio * verticePoint.position.y, 0.6)); 5
    }

    this.geoScene.render();
  }

  changeAngle() {
    if (this.input === 'beta') {
      this.angle = this.angleBeta / 2;
    }
    console.log(this.input)
    if (this.angle >= 0 && this.angle <= 180) {
      let radians = this.angle * (Math.PI / 180);
      const aCordinates = new THREE.Vector3(
        -(Math.sin(radians) * (this.radiusExt - 0.5)),
        -(Math.cos(radians) * (this.radiusExt - 0.5)),
        0.5
      ), bCordinates = new THREE.Vector3(
        Math.sin(radians) * (this.radiusExt - 0.5),
        -(Math.cos(radians) * (this.radiusExt - 0.5)),
        0.5
      );

      this.geoScene.scene.remove(
        this.geoScene.scene.getObjectByName('line-a'),
        this.geoScene.scene.getObjectByName('line-b'),
        this.geoScene.scene.getObjectByName('angle'),
        this.geoScene.scene.getObjectByName('angle-beta')

      );

      const vertex = this.geoScene.scene.getObjectByName("vertice");

      const pointA = this.geoScene.scene.getObjectByName("ponto-a");
      pointA.position.copy(aCordinates);

      const pointB = this.geoScene.scene.getObjectByName('ponto-b');
      pointB.position.copy(bCordinates);

      let distanceA = Math.sqrt((
        (pointA.position.x - vertex.position.x) ** 2 + (pointA.position.y - vertex.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatioA = (distanceA + 3) / distanceA;

      let distanceB = Math.sqrt((
        (pointB.position.x - vertex.position.x) ** 2 + (pointB.position.y - vertex.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatioB = (distanceB + 3) / distanceB;

      let xA = distancesRatioA * aCordinates.x, yA = (1 - distancesRatioA) * (this.radiusExt - 0.5) + distancesRatioA * aCordinates.y;
      let xB = distancesRatioB * bCordinates.x, yB = (1 - distancesRatioB) * (this.radiusExt - 0.5) + distancesRatioB * bCordinates.y;

      const geometryLineA = new THREE.Geometry();
      geometryLineA.vertices.push(new THREE.Vector3(vertex.position.x, vertex.position.y, 0.6));
      geometryLineA.vertices.push(new THREE.Vector3(xA, yA, 0.6));

      let lineA = new THREE.Line(geometryLineA, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
      lineA.name = "line-a";

      const geometryLineB = new THREE.Geometry();
      geometryLineB.vertices.push(new THREE.Vector3(vertex.position.x, vertex.position.y, 0.6));
      geometryLineB.vertices.push(new THREE.Vector3(xB, yB, 0.6));

      let lineB = new THREE.Line(geometryLineB, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
      lineB.name = "line-b";

      vertex.position.copy(new THREE.Vector3(0, this.radiusExt - 0.5, 0));

      this.reDrawAngle();
      this.reDrawArc();
      if (this.angle > 179) {
        this.geoScene.scene.getObjectByName("angle").rotateZ(3.15);
        this.geoScene.scene.getObjectByName("alpha").rotateZ(3.15);
      } else if (this.angle === 0) {
        this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("alpha"));
        this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("beta"));
      }

      let lbls = ["A", "B", "V"];
      for (let i = 0; i < lbls.length; i++) this.reDrawLabel(lbls[i]);

      this.geoScene.scene.add(lineA, lineB);

      this.showAngle = this.angle;
      this.showAngleBeta = this.angleBeta;
      this.oldAngle = this.angle;
      this.oldAngleBeta = this.angleBeta;
      this.geoScene.render();
      this.angleType();
    } else {
      this.showAngle = this.oldAngle;
      this.showAngleBeta = this.oldAngleBeta;
    }
  }

  angleType() {
    let type;

    let pontoA = this.geoScene.scene.getObjectByName("ponto-a").position;
    let pontoB = this.geoScene.scene.getObjectByName("ponto-b").position;
    let vertex = this.geoScene.scene.getObjectByName("vertice").position;

    let centerCrossA = this.geoScene.lineCross(0, 0, vertex.x, vertex.y, pontoA.x, pontoA.y, 0.2);
    let centerCrossB = this.geoScene.lineCross(0, 0, vertex.x, vertex.y, pontoB.x, pontoB.y, 0.2);
    if (vertex.x === 0) {
      centerCrossA = (pontoA.x >= -0.25 && pontoA.x <= 0.25);
      centerCrossB = (pontoB.x >= -0.25 && pontoB.x <= 0.25);
    }

    if (centerCrossA || centerCrossB) type = Relation.ON;
    else {
      //https://www.youtube.com/watch?v=H9qu9Xptf-w -> video da formula para achar um ponto dentro de um triangulo
      let A = this.area(vertex.x, vertex.y, pontoA.x, pontoA.y, pontoB.x, pontoB.y);
      let A1 = this.area(0, 0, pontoA.x, pontoA.y, pontoB.x, pontoB.y);
      let A2 = this.area(vertex.x, vertex.y, 0, 0, pontoB.x, pontoB.y);
      let A3 = this.area(vertex.x, vertex.y, pontoA.x, pontoA.y, 0, 0);

      if (A1 + A2 + A3 <= A + 0.5 && A1 + A2 + A3 >= A - 0.5) type = Relation.INSIDE;
      else { //por mais que nao esteja no triagulo, se o angulo for maior que 180 graus, ele sempre sera interno
        if (this.angleBeta >= 180) type = Relation.INSIDE;
        else type = Relation.OUTSIDE;
      }
    }

    if (!this.lockArcState) {
      this.relation = type;
    } else {
      this.relation = Relation.ARC;
      if (type === Relation.ON) {
        this.image = 'inscrito-pertence.svg';
        this.subRelation = Relation.ON;
      } else if (type === Relation.INSIDE) {
        this.image = 'inscrito-interno.svg';
        this.subRelation = Relation.INSIDE;
      } else if (type === Relation.OUTSIDE) {
        this.image = 'inscrito-externo.svg';
        this.subRelation = Relation.OUTSIDE;
      }
    }
  }

  area(x1, y1, x2, y2, x3, y3) {
    let X1 = x1 * (y2 - y3);
    let X2 = x2 * (y3 - y1);
    let X3 = x3 * (y1 - y2);
    let x = X1 + X2 + X3;
    return Math.abs(x / 2);
  }

  public lockArc() {
    if (!this.lockArcState) {
      this.lockArcState = true;
      this.lockArcText = "Destravar Comprimento do Arco";
      this.relation = Relation.ARC;
    } else {
      this.lockArcState = false;
      this.lockArcText = "Travar Comprimento do Arco";
      this.angleType();
    }
  }

  ngAfterViewInit() {

    // --------------  Ponto do centro --------------
    let circleCenter = new THREE.CircleGeometry(1, 30);
    let materialCenter = new THREE.MeshBasicMaterial({ color: 0x4683B4 });
    let centerPoint = new Mesh(circleCenter, materialCenter);
    this.centerPoint = centerPoint;

    // Label do ponto central
    const labelCircleCenter = new SpriteText('O', 4, '0x4683B4');
    labelCircleCenter.position.x = -2;
    labelCircleCenter.position.y = -2;

    // --------------  Ponto do vértice --------------
    let circleVertex = new THREE.CircleGeometry(1.25, 30);
    let materialVertex = new THREE.MeshBasicMaterial({ color: 0x000000 });
    let vertexPoint = new Mesh(circleVertex, materialVertex);
    vertexPoint.position.x = 0;
    vertexPoint.position.y = 29.5;
    vertexPoint.name = "vertice";
    this.vertice = vertexPoint;

    // Label do ponto do vétice
    const labelCircleVertex = new SpriteText('V', 5, '0x000000');
    labelCircleVertex.position.x = 0;
    labelCircleVertex.position.y = 35;
    labelCircleVertex.name = "label-v";

    //  -------------- Linha da esquerda --------------
    const geometryLineLeft = new THREE.Geometry();
    geometryLineLeft.vertices.push(new THREE.Vector3(0, 29.5, 0.1));
    geometryLineLeft.vertices.push(new THREE.Vector3(-33, -3.5, 0.1));
    //Material da linha
    let materialLine = new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 })
    const lineLeft = new THREE.Line(geometryLineLeft, materialLine);
    lineLeft.name = 'line-a';

    const geometryLineLeftC = new THREE.Geometry();
    geometryLineLeftC.vertices.push(new THREE.Vector3(0, 0, 0.1));
    geometryLineLeftC.vertices.push(new THREE.Vector3(-30, 0, 0.1));
    //Material da linha
    let materialLineC = new THREE.LineBasicMaterial({ color: 0x00F500, linewidth: 2 })
    const lineLeftC = new THREE.Line(geometryLineLeftC, materialLineC);
    lineLeftC.name = 'line-c';

    // Label da linha da esquerda
    const labelLineLeft = new SpriteText('A', 5, '0xFF0000');
    labelLineLeft.position.x = -35;
    labelLineLeft.position.y = 0;
    labelLineLeft.name = "label-a";

    // Ponto da linha da esquerda
    let circleLineLeft = new THREE.CircleGeometry(1.5, 30);
    let materialCircleLeft = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    let circleLeftPoint = new Mesh(circleLineLeft, materialCircleLeft);
    circleLeftPoint.position.x = -29.5;
    circleLeftPoint.position.y = 0;
    circleLeftPoint.name = "ponto-a";
    this.centerPointOne = circleLeftPoint;

    //  -------------- Linha da direita --------------
    const geometryLineRight = new THREE.Geometry();
    geometryLineRight.vertices.push(new THREE.Vector3(0, 29.5, 0.1));
    geometryLineRight.vertices.push(new THREE.Vector3(33, -3.5, 0.1));
    //Material da linha
    let materialLineRight = new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 })
    const lineRight = new THREE.Line(geometryLineRight, materialLineRight);
    lineRight.name = 'line-b';

    const geometryLineRightD = new THREE.Geometry();
    geometryLineRightD.vertices.push(new THREE.Vector3(0, 0, 0.1));
    geometryLineRightD.vertices.push(new THREE.Vector3(30, 0, 0.1));
    //Material da linha
    let materialLineD = new THREE.LineBasicMaterial({ color: 0x00F500, linewidth: 2 })
    const lineRightD = new THREE.Line(geometryLineRightD, materialLineD);
    lineRightD.name = 'line-d';

    // Label da linha da direita
    const labelLineRight = new SpriteText('B', 5, '0xFF0000');
    labelLineRight.position.x = 35;
    labelLineRight.position.y = 0;
    labelLineRight.name = "label-b";

    // Ponto da linha da direita
    let circleLineRight = new THREE.CircleGeometry(1.5, 30);
    let materialCircleRight = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    let circleRightPoint = new Mesh(circleLineRight, materialCircleRight);
    circleRightPoint.position.x = 29.5;
    circleRightPoint.position.y = 0;
    circleRightPoint.name = "ponto-b";
    this.centerPointTwo = circleRightPoint;

    // -------------- Ângulo --------------
    let segmentCount = 92,
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      materialAngle = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }),
      geometryArc = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }),
      radians = this.angleBeta * (Math.PI) / 180;

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * (-Math.PI / 2) - Math.PI / 2;
      geometryAngle.vertices.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
    }

    const angle = new THREE.Line(geometryAngle, materialAngle);
    angle.position.x = 0;
    angle.position.y = 29.5;
    angle.rotateZ(0.8);
    angle.name = "angle";

    segmentCount = Math.round(this.angleBeta * 2),
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      geometryArc = new THREE.Geometry(),
      materialAngle = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryAngle.vertices.push(new THREE.Vector3(Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
      geometryArc.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
    }

    let angleBeta = new THREE.Line(geometryAngle, materialAngle);
    angleBeta.position.x = 0;
    angleBeta.rotateZ(-90 * 0.0175);
    angleBeta.name = "angle-beta";

    let arc = new THREE.Line(geometryArc, materialArc);
    arc.position.x = 0;
    arc.rotateZ(-90 * 0.0175);
    arc.name = "arc";

    const alpha = new SpriteText('α', 5, '0x000000');
    alpha.position.copy(new THREE.Vector3(0, 22, 0));
    alpha.name = "alpha";

    const beta = new SpriteText('β', 4, '0x000000');
    beta.position.copy(new THREE.Vector3(0, -7.25, 0));
    beta.name = "beta";

    // Adiciona os objetos na cena
    this.geoScene.scene.add(
      centerPoint,
      labelCircleCenter,
      vertexPoint,
      labelCircleVertex,
      circleLeftPoint,
      lineLeft,
      lineLeftC,
      labelLineLeft,
      lineRight,
      lineRightD,
      labelLineRight,
      circleRightPoint,
      angle,
      angleBeta,
      alpha,
      beta,
      arc
    );

    // Chamando o render da cena
    this.geoScene.render();
  }
  reDrawDefault() {
    // Adicionando novas circunferências na cena
    let material = new THREE.MeshBasicMaterial({
      color: 0x4683B4
    });
    let circleGeometry = new THREE.CircleGeometry(this.radiusExt, 90);
    this.geoScene.scene.children[0] = new THREE.Mesh(circleGeometry, material);

    let materialTwo = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    let circleGeometryTwo = new THREE.CircleGeometry(this.radiusInt, 90);
    this.geoScene.scene.children[1] = new THREE.Mesh(circleGeometryTwo, materialTwo);

    this.geoScene.scene.children[2] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));

    this.dragged = "V";
    this.changeAngle();
    this.reDrawPointsToCircle();
  }

  reDrawClick() {
    this.radiusExt = 30;
    this.radiusInt = 29;

    // Adicionando novas circunferências na cena
    let material = new THREE.MeshBasicMaterial({
      color: 0x4683B4
    });
    let circleGeometry = new THREE.CircleGeometry(this.radiusExt, 90);
    this.geoScene.scene.children[0] = new THREE.Mesh(circleGeometry, material);

    let materialTwo = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    let circleGeometryTwo = new THREE.CircleGeometry(this.radiusInt, 90);
    this.geoScene.scene.children[1] = new THREE.Mesh(circleGeometryTwo, materialTwo);

    this.geoScene.scene.children[2] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));

    if (this.relation === Relation.INSIDE) {
      this.angle = 90;
      this.angleBeta = 180;
      this.geoScene.scene.getObjectByName("ponto-a").position.copy(new THREE.Vector3(-29.5, 0, 0.6));
      this.geoScene.scene.getObjectByName("ponto-b").position.copy(new THREE.Vector3(29.5, 0, 0.6));
      this.geoScene.scene.getObjectByName("vertice").position.copy(new THREE.Vector3(0, 29.5, 0.6));
    } else if (this.relation === Relation.OUTSIDE) {
      this.angle = 25;
      this.angleBeta = 50;
      this.geoScene.scene.getObjectByName("ponto-a").position.copy(new THREE.Vector3(18.5, -21.5, 0.6));
      this.geoScene.scene.getObjectByName("ponto-b").position.copy(new THREE.Vector3(29.5, 0, 0.6));
      this.geoScene.scene.getObjectByName("vertice").position.copy(new THREE.Vector3(0, 29.5, 0.6));
    } else if (this.relation === Relation.ON) {
      this.angle = 45;
      this.angleBeta = 90;
      this.geoScene.scene.getObjectByName("ponto-a").position.copy(new THREE.Vector3(0, -29.5, 0.6));
      this.geoScene.scene.getObjectByName("ponto-b").position.copy(new THREE.Vector3(29.5, 0, 0.6));
      this.geoScene.scene.getObjectByName("vertice").position.copy(new THREE.Vector3(0, 29.5, 0.6));
    }

    this.reDrawPointsToCircle();
    this.reDrawAngle();
    let lbls = ["A", "B", "V"];
    for (let i = 0; i < lbls.length; i++) this.reDrawLabel(lbls[i]);
    this.reDrawArc();
    this.geoScene.render();
  }

  checkInput(input) {
    this.input = input;
    const checkRadius = (this.radius >= 1 && this.radius <= 10);
    const checkAngle = (this.angle > -1 && this.angle < 181) && (this.angleBeta > -1 && this.angleBeta < 361);
    if (checkRadius && checkAngle) {
      this.radiusExt = this.radius * 2.5 + 7.5;
      this.radiusInt = this.radiusExt - 1;
      this.errorInputAngle = false;
      this.errorInputRadius = false;
      this.reDrawDefault();
    } else {
      if (!checkRadius) this.errorInputRadius = true;
      else this.errorInputRadius = false;
      if (!checkAngle) this.errorInputAngle = true;
      else this.errorInputAngle = false;
      this.showAngle = this.oldAngle;
      this.showAngleBeta = this.oldAngleBeta;
    }
  }
}
