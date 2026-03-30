import { GeoSceneComponent } from './../../../shared/components/geo-scene/geo-scene.component';
import { Component, AfterViewInit, DoCheck, ViewChild } from '@angular/core';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

/**
 * Enum para definir a relação entre as circunferÊncias
 */
enum Relation {
  IN = 0,
  OUT = 1,
}

@Component({
  selector: 'ifmath-cf-angulo-nao-pertence',
  templateUrl: './cf-angulo-nao-pertence.component.html',
  styleUrls: ['./cf-angulo-nao-pertence.component.scss']
})

export class CfAnguloNaoPertenceComponent implements AfterViewInit {
  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;
  relation: Relation = Relation.IN;

  angleAlpha: number = 57;
  angleBeta: number = 123;

  errorInputAngle: boolean = false;
  errorInputRadius: boolean = false;
  private showAngleAlpha: number = this.angleAlpha;
  private showAngleBeta: number = this.angleBeta;
  private oldAngleAlpha: number = this.angleAlpha;
  private oldAngleBeta: number = this.angleBeta;

  radius: number = 9;
  radiusExt: number = 30;
  radiusInt: number = 29;

  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private insersects: THREE.Intersection[];
  private mousePos;
  private dragging: boolean = false;
  private dragged: string = "";
  private currentIndex: any[] = [];

  private onArc = false;
  private ext: boolean = false;
  private arc1: string = "\\overgroup{AB}"; private arc2: string = "\\overgroup{CD}";

  buttons: Object[] = [
    { title: "Ângulo Central", route: "cf_angulo_central" },
    { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
    { title: "Arco Capaz", route: "cf_angulo_capaz" },
    { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
    { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
  ];

  buttons_examples = [
    { title: 'Interno', value: 0 },
    { title: 'Externo', value: 1 },
  ];

  loadExample(event: MouseEvent, relation) {
    event.preventDefault(); // Previne o comportamento padrão do evento
    this.relation = relation;

    // Checagem do tipo da relação
    switch (this.relation) {
      case Relation.IN:
        this.reDrawDefault();
        this.angleAlpha = 57;
        this.angleBeta = 123;
        this.ext = false;
        break;
      case Relation.OUT:
        this.reDrawDefault();
        this.angleAlpha = 33;
        this.ext = true;
        break;
    }
  }

  constructor() { }

  ngOnInit() {
    registerLocaleData( pt );
  }

  // resolver bug na mudança de angulo
  changeArc() {
    var text = document.getElementById("properties");
    var comprimento = document.getElementById("comprimentoArco");

    if (text.style.display == "none") {
      text.style.display = "block";
      comprimento.style.display = "none";
    } else {
      text.style.display = "none";
      comprimento.style.display = "block";
    }
  }

  ngDoCheck() {
    try {
      this.geoScene.addDegreeSymbol(this.angleAlpha, 'degreeA');
      this.geoScene.addDegreeSymbol(this.angleBeta, 'degreeB');
    } catch { }
  }

  getIndex() {
    this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
    this.currentIndex = [];

    if (this.insersects.length === 0) {
      this.currentIndex = null;
      return;
    }

    this.insersects.forEach(el => {
      if (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "ponto-c"
        || el.object.name == "ponto-d" /* || el.object.name == "ponto-p"*/) {
        this.currentIndex.push(el);
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
    this.dragging = false; // muda a variável de controle do drag para false
    this.currentIndex = null; // anula o elemento clicado
    this.mousePos = null; // anula a posição do mouse
  }

  /**
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
  mouseMove(event: MouseEvent) {
    //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
    if (this.dragging && this.currentIndex !== null) {
      this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse

      // verifica se o clique foi na ponto A, B, C, D ou P
      this.insersects.forEach(el => {
        if (this.currentIndex.length < 2 && (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "ponto-c"
          || el.object.name == "ponto-d" || el.object.name == "ponto-p")) {
          el.object.position.copy(this.mousePos);
        } else if (this.currentIndex.length >= 2) {
          el = this.currentIndex[0];
          el.object.position.copy(this.mousePos);
        }
      });

      // Move os objetos referentes a cada circunferencia em relação a posição do mouse
      if (this.currentIndex[0].object.name == "ponto-a") this.dragged = "A";
      else if (this.currentIndex[0].object.name == "ponto-b") this.dragged = "B";
      else if (this.currentIndex[0].object.name == "ponto-c") this.dragged = "C";
      else if (this.currentIndex[0].object.name == "ponto-d") this.dragged = "D";
      else if (this.currentIndex[0].object.name == "ponto-p") this.dragged = "P";

      this.reDrawPointsToCircle();
      this.reDrawLabel(this.dragged);
      this.reDrawArc();
      this.reDrawAngle();

      this.pointsDrawOrder();
      this.geoScene.render();
    }
  }

  reDrawPointsToCircle() {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
    let circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
    let vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
    let lineAC = this.geoScene.scene.getObjectByName("line-ac");
    let lineBD = this.geoScene.scene.getObjectByName("line-bd");

    //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
    if (this.dragged === "P") {
      // TODO
    } else if (this.dragged === "A") {
      let distance = Math.sqrt((
        (circlePointA.position.x) ** 2 + (circlePointA.position.y) ** 2
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      let x = (distancesRatio * circlePointA.position.x); let y = (distancesRatio * circlePointA.position.y);
      circlePointA.position.copy(new THREE.Vector3(x, y, 0));

    } else if (this.dragged === "B") {
      let distance = Math.sqrt((
        (circlePointB.position.x) ** 2 + (circlePointB.position.y) ** 2
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      let x = (distancesRatio * circlePointB.position.x); let y = (distancesRatio * circlePointB.position.y);
      circlePointB.position.copy(new THREE.Vector3(x, y, 0));

    } else if (this.dragged === "C") {
      let distance = Math.sqrt((
        (circlePointC.position.x) ** 2 + (circlePointC.position.y) ** 2
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      let x = (distancesRatio * circlePointC.position.x); let y = (distancesRatio * circlePointC.position.y);
      circlePointC.position.copy(new THREE.Vector3(x, y, 0));

    } else if (this.dragged === "D") {
      let distance = Math.sqrt((
        (circlePointD.position.x) ** 2 + (circlePointD.position.y) ** 2
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      let x = (distancesRatio * circlePointD.position.x); let y = (distancesRatio * circlePointD.position.y);
      circlePointD.position.copy(new THREE.Vector3(x, y, 0));

    }

    if (this.dragged !== "P" && !this.geoScene.fromInput) {
      // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
      let a1 = circlePointC.position.y - circlePointA.position.y;
      let b1 = circlePointA.position.x - circlePointC.position.x;
      let c1 = a1 * (circlePointA.position.x) + b1 * (circlePointA.position.y);

      let a2 = circlePointD.position.y - circlePointB.position.y;
      let b2 = circlePointB.position.x - circlePointD.position.x;
      let c2 = a2 * (circlePointB.position.x) + b2 * (circlePointB.position.y);

      let determinant = a1 * b2 - a2 * b1;
      vertexPoint.position.copy(new THREE.Vector3((c1 * b2 - c2 * b1) / determinant, (a1 * c2 - a2 * c1) / determinant, 0));
      let distance = Math.sqrt((
        (vertexPoint.position.x) ** 2 + (vertexPoint.position.y) ** 2
      ));
      if (distance + 0.5 > this.radiusExt) this.relation = Relation.OUT;
      else this.relation = Relation.IN;
    }

    if (this.geoScene.fromInput && this.relation === Relation.OUT) {
      circlePointB = vertexPoint;
      circlePointC = vertexPoint;
    }

    let distanceDB = Math.sqrt((
      (circlePointB.position.x - circlePointD.position.x) ** 2 + (circlePointB.position.y - circlePointD.position.y) ** 2
    ));
    let distancesRatioDB = (distanceDB + 3) / distanceDB;

    let distanceBD = Math.sqrt((
      (circlePointD.position.x - circlePointB.position.x) ** 2 + (circlePointD.position.y - circlePointB.position.y) ** 2
    ));
    let distancesRatioBD = (distanceBD + 3) / distanceBD;

    let distanceCA = Math.sqrt((
      (circlePointA.position.x - circlePointC.position.x) ** 2 + (circlePointA.position.y - circlePointC.position.y) ** 2
    ));
    let distancesRatioCA = (distanceCA + 3) / distanceCA;

    let distanceAC = Math.sqrt((
      (circlePointC.position.x - circlePointA.position.x) ** 2 + (circlePointC.position.y - circlePointA.position.y) ** 2
    ));
    let distancesRatioAC = (distanceAC + 3) / distanceAC;

    let xDB = (1 - distancesRatioDB) * circlePointD.position.x + distancesRatioDB * circlePointB.position.x,
      yDB = (1 - distancesRatioDB) * circlePointD.position.y + distancesRatioDB * circlePointB.position.y,
      xBD = (1 - distancesRatioBD) * circlePointB.position.x + distancesRatioBD * circlePointD.position.x,
      yBD = (1 - distancesRatioBD) * circlePointB.position.y + distancesRatioBD * circlePointD.position.y,
      xCA = (1 - distancesRatioCA) * circlePointC.position.x + distancesRatioCA * circlePointA.position.x,
      yCA = (1 - distancesRatioCA) * circlePointC.position.y + distancesRatioCA * circlePointA.position.y,
      xAC = (1 - distancesRatioAC) * circlePointA.position.x + distancesRatioAC * circlePointC.position.x,
      yAC = (1 - distancesRatioAC) * circlePointA.position.y + distancesRatioAC * circlePointC.position.y;

    let geometryLineBD = new THREE.Geometry();
    geometryLineBD.vertices.push(new THREE.Vector3(xBD, yBD, 0));
    if (!(this.relation === Relation.OUT && this.geoScene.fromInput)) geometryLineBD.vertices.push(new THREE.Vector3(xDB, yDB, 0));
    if (this.relation === Relation.OUT) geometryLineBD.vertices.push(vertexPoint.position);

    let geometryLineAC = new THREE.Geometry();
    geometryLineAC.vertices.push(new THREE.Vector3(xCA, yCA, 0));
    if (!(this.relation === Relation.OUT && this.geoScene.fromInput)) geometryLineAC.vertices.push(new THREE.Vector3(xAC, yAC, 0));
    if (this.relation === Relation.OUT) geometryLineAC.vertices.push(vertexPoint.position);

    lineBD = new THREE.Line(geometryLineBD, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineBD.name = "line-bd";

    lineAC = new THREE.Line(geometryLineAC, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineAC.name = "line-ac";

    this.geoScene.scene.children[8] = lineAC;
    this.geoScene.scene.children[9] = lineBD;
  }

  reDrawAngle() {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");

    if (!this.geoScene.fromInput) {
      let a = new THREE.Vector2(vertexPoint.position.x - circlePointA.position.x, vertexPoint.position.y - circlePointA.position.y);
      let b = new THREE.Vector2(vertexPoint.position.x - circlePointB.position.x, vertexPoint.position.y - circlePointB.position.y);

      let ba = b.x * a.x + b.y * a.y;
      let bMod = Math.sqrt(b.x ** 2 + b.y ** 2);
      let aMod = Math.sqrt(a.x ** 2 + a.y ** 2);

      let cos = ba / (bMod * aMod);

      this.angleAlpha = Math.acos(cos) * 180 / Math.PI;
      this.angleBeta = 180 - this.angleAlpha;
    }

    let radiansBA = this.angleAlpha * (Math.PI / 180);
    let radiansDC = this.angleBeta * (Math.PI / 180);

    let alphaGroup = this.geoScene.scene.getObjectByName("alpha");
    let betaGroup = this.geoScene.scene.getObjectByName("beta");

    alphaGroup = new THREE.Group();
    alphaGroup.name = "alpha";
    betaGroup = new THREE.Group();
    betaGroup.name = "beta";

    let alphaCopy, betaCopy;
    alphaCopy = new THREE.Group();
    alphaGroup.name = "alpha-c";
    betaCopy = new THREE.Group();
    betaGroup.name = "beta-c";

    let geometryAngleAlpha = new THREE.Geometry(),
      geometryAngleBeta = new THREE.Geometry(),
      materialAngleAlpha = new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }),
      materialAngleBeta = new THREE.LineBasicMaterial({ color: 0x0000FF, linewidth: 2 });

    let segmentCount = 92,
      radius = 5;
    if (this.radiusExt < 20) radius = 3;
    for (let i = 0; i <= segmentCount; i++) {
      let thetaA = ((i / segmentCount) * radiansBA) - (((segmentCount - i) / segmentCount) * radiansBA);
      let thetaB = ((i / segmentCount) * radiansDC) - (((segmentCount - i) / segmentCount) * radiansDC);
      thetaA /= 2; thetaB /= 2;
      geometryAngleAlpha.vertices.push(
        new THREE.Vector3(Math.sin(thetaA) * radius, -Math.cos(thetaA) * radius, 0)
      );
      geometryAngleBeta.vertices.push(
        new THREE.Vector3(Math.sin(thetaB) * radius, -Math.cos(thetaB) * radius, 0)
      );
      if (i == 46) { // quando estiver no ponto ao centro do angulo
        let geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(0, 0, 0)); // adicionando vertice ao centro
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(thetaA) * (radius + 2.5), -Math.cos(thetaA) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado

        let line = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
        line.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis

        let alpha = new SpriteText('α', 4.5, '#FF0000');

        if (this.relation === Relation.OUT) {
          materialAngleAlpha = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
          alpha = new SpriteText('α', 4.5, '0x000000');
        }

        alpha.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha

        alphaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
        alphaGroup.add(alpha); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v

        geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(0, 0, 0)); // adicionando vertice ao centro
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(thetaA) * (radius + 2.5), -Math.cos(thetaA) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado

        line = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
        line.visible = false; // a linha so serve como guia do beta, para ele poder ser rotacionado usando a Z axis

        const beta = new SpriteText('β', 4, '#0000FF');

        beta.position.copy(geometryLine.vertices[1]); // passando o beta para o ultimo vertice da linha
        betaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
        betaGroup.add(beta); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v

        geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(0, 0, 0)); // adicionando vertice ao centro
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(thetaB) * (radius + 2.5), -Math.cos(thetaB) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado

        betaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
        betaGroup.add(beta); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v

        if (this.relation === Relation.IN) {
          let alphaC = new SpriteText('α', 4.5, '#FF0000');
          alphaC.position.copy(geometryLine.vertices[1]);
          let betaC = new SpriteText('β', 4, '#0000FF');
          betaC.position.copy(geometryLine.vertices[1]);

          alphaCopy.add(line); alphaCopy.add(alphaC);
          betaCopy.add(line); betaCopy.add(betaC);
        }
      }
    }

    let alpha = Math.atan2(circlePointA.position.y - vertexPoint.position.y, circlePointA.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (alpha < 0) alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let beta = Math.atan2(circlePointB.position.y - vertexPoint.position.y, circlePointB.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
    if (beta < 0) beta += 360; // caso o angulo seja negativo e o vertice esteja a direita

    let rotationBA = beta * 0.00875 + alpha * 0.00875 + this.angleAlpha * 0.0175 + (90 - this.angleAlpha) * 0.0175;
    let rotationDC = rotationBA - this.angleBeta * 0.0175 - (90 - this.angleBeta) * 0.0175;

    if (!this.geoScene.fromInput) {
      if (this.relation === Relation.OUT) {
        let higher = this.geoScene.scene.children[3].position.y, lower = higher;
        for (let i = 3; i < 7; i++) {
          if (this.geoScene.scene.children[i].position.y > higher) higher = this.geoScene.scene.children[i].position.y;
          if (this.geoScene.scene.children[i].position.y < lower) lower = this.geoScene.scene.children[i].position.y;
        }
        if (vertexPoint.position.x < 0 && vertexPoint.position.y > lower && vertexPoint.position.y < higher) {
          rotationBA += 180 * 0.0175;
          rotationDC += 180 * 0.0175;
        }
      }
    }

    if (rotationBA.toString() !== 'NaN') {
      this.geoScene.scene.children[10] = new THREE.Line(geometryAngleAlpha, materialAngleAlpha);
      this.geoScene.scene.children[10].rotateZ(rotationBA); // rotacionando o angulo para posicao entre as linhas
      this.geoScene.scene.children[10].name = "angle-alpha";
      this.geoScene.scene.children[20] = alphaGroup;
      this.geoScene.scene.children[20].rotateZ(rotationBA); // rotacionando o alpha para posicao entre as linhas

      this.geoScene.scene.children[22] = new THREE.Line(geometryAngleAlpha, materialAngleAlpha);
      this.geoScene.scene.children[22].rotateZ(rotationBA + 180 * 0.0175); // rotacionando o angulo para posicao entre as linhas
      this.geoScene.scene.children[22].name = "angle-alpha";
      this.geoScene.scene.children[24] = alphaCopy;
      this.geoScene.scene.children[24].rotateZ(rotationBA + 180 * 0.0175); // rotacionando o alpha para posicao entre as linhas

      this.angleAlpha = Math.round(this.angleAlpha);
    } else this.angleAlpha = 0;

    if (rotationDC.toString() !== 'NaN') {
      this.geoScene.scene.children[11] = new THREE.Line(geometryAngleBeta, materialAngleBeta);
      this.geoScene.scene.children[11].rotateZ(rotationDC); // rotacionando o angulo para posicao entre as linhas
      this.geoScene.scene.children[11].name = "angle-beta";
      this.geoScene.scene.children[21] = betaGroup;
      this.geoScene.scene.children[21].rotateZ(rotationDC); // rotacionando o alpha para posicao entre as linhas

      this.geoScene.scene.children[23] = new THREE.Line(geometryAngleBeta, materialAngleBeta);
      this.geoScene.scene.children[23].rotateZ(rotationDC + 180 * 0.0175); // rotacionando o angulo para posicao entre as linhas
      this.geoScene.scene.children[23].name = "angle-beta";
      this.geoScene.scene.children[25] = betaCopy;
      this.geoScene.scene.children[25].rotateZ(rotationDC + 180 * 0.0175); // rotacionando o alpha para posicao entre as linhas

      if (this.relation === Relation.OUT) {
        this.geoScene.scene.children[11].visible = false;
        this.geoScene.scene.children[21].visible = false;
        this.geoScene.scene.children[22].visible = false;
        this.geoScene.scene.children[23].visible = false;
        this.geoScene.scene.children[24].visible = false;
        this.geoScene.scene.children[25].visible = false;
      }

      this.angleBeta = Math.round(this.angleBeta);
    } else this.angleBeta = 0;

    this.geoScene.scene.children[10].position.copy(vertexPoint.position);
    this.geoScene.scene.children[11].position.copy(vertexPoint.position);
    this.geoScene.scene.children[19].position.copy(new THREE.Vector3(vertexPoint.position.x, vertexPoint.position.y - 3, 0));
    this.geoScene.scene.children[20].position.copy(vertexPoint.position);
    this.geoScene.scene.children[21].position.copy(vertexPoint.position);
    this.geoScene.scene.children[22].position.copy(vertexPoint.position);
    this.geoScene.scene.children[23].position.copy(vertexPoint.position);
    this.geoScene.scene.children[24].position.copy(vertexPoint.position);
    this.geoScene.scene.children[25].position.copy(vertexPoint.position);
  }

  reDrawArc() {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
    let circlePointD = this.geoScene.scene.getObjectByName("ponto-d");

    // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
    let alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (alpha < 0) alpha += 360; // caso o angulo seja negativo
    let beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
    if (beta < 0) beta += 360; // caso o angulo seja negativo
    let charlie = Math.atan2(circlePointC.position.y, circlePointC.position.x) * (180 / Math.PI); // convertendo o angulo da reta C de radianos para graus
    if (charlie < 0) charlie += 360; // caso o angulo seja negativo
    let delta = Math.atan2(circlePointD.position.y, circlePointD.position.x) * (180 / Math.PI); // convertendo o angulo da reta D de radianos para graus
    if (delta < 0) delta += 360; // caso o angulo seja negativo

    let AB = alpha - beta, BA = beta - alpha, AC = alpha - charlie, CA = charlie - alpha, AD = alpha - delta, DA = delta - alpha,
      BC = beta - charlie, CB = charlie - beta, BD = beta - delta, DB = delta - beta, CD = charlie - delta, DC = delta - charlie;
    if (AB < 0) { AB += 360; } if (BA < 0) { BA += 360; } if (AC < 0) { AC += 360; } if (CA < 0) { CA += 360; } if (AD < 0) { AD += 360; } if (DA < 0) { DA += 360; }
    if (BC < 0) { BC += 360; } if (CB < 0) { CB += 360; } if (BD < 0) { BD += 360; } if (DB < 0) { DB += 360; } if (CD < 0) { CD += 360; } if (DC < 0) { DC += 360; }

    let arcAlphaAD = BA;
    let arcAlphaBC = DC;
    if (AB < DB) {
      arcAlphaAD = AB;
      arcAlphaBC = CD;
    }
    this.arc1 = "\\overgroup{AB}"; this.arc2 = "\\overgroup{CD}";

    if (this.relation === Relation.OUT) {
      arcAlphaAD = DA;
      arcAlphaBC = CB;
      this.arc1 = "\\overgroup{AD}"; this.arc2 = "\\overgroup{BC}";
      if(this.ext) { this.arc1 = "\\overgroup{AC}"; this.arc2 = "\\overgroup{BD}"; }
      if (CA < CD && DB < DC) {
        arcAlphaAD = AD;
        arcAlphaBC = BC;
        this.arc1 = "AD"; this.arc2 = "BC";
        if(this.ext) { this.arc1 = "\\overgroup{AC}"; this.arc2 = "\\overgroup{BD}"; }
      } else if (CA < CD) {
        arcAlphaAD = DC;
        arcAlphaBC = AB;
        this.arc1 = "\\overgroup{AB}"; this.arc2 = "\\overgroup{CD}";
      } else if (DB < DC) {
        arcAlphaAD = BA;
        arcAlphaBC = CD;
        this.arc1 = "\\overgroup{AB}"; this.arc2 = "\\overgroup{CD}";
      }
    }

    let radiansDA = arcAlphaAD * (Math.PI / 180);
    let radiansBC = arcAlphaBC * (Math.PI / 180);

    let segmentCount = arcAlphaAD * 2,
      geometryArcDA = new THREE.Geometry(),
      geometryArcBC = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radiansDA;
      geometryArcDA.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
    }
    segmentCount = arcAlphaBC * 2;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radiansBC;
      geometryArcBC.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
    }
    // rotacionar 1 grau -> 0.0175
    let rotationBA = (alpha - 90) * 0.0175;
    let rotationDC = (charlie - 90) * 0.0175;
    if (AB > DB) {
      rotationBA = (beta - 90) * 0.0175;
      rotationDC = (delta - 90) * 0.0175;
    }

    if (this.relation === Relation.OUT) {
      rotationBA = (delta - 90) * 0.0175;
      rotationDC = (charlie - 90) * 0.0175;
      if (CA < CD && DB < DC) {
        rotationBA = (alpha - 90) * 0.0175;
        rotationDC = (beta - 90) * 0.0175;
      } else if (CA < CD) rotationDC = (alpha - 90) * 0.0175;
      else if (DB < DC) rotationBA = (beta - 90) * 0.0175;
    }

    if (rotationBA.toString() !== 'NaN' && rotationDC.toString() !== 'NaN') {
      materialArc.depthTest = false;
      let arcDA = new THREE.Line(geometryArcDA, materialArc);
      arcDA.rotateZ(rotationBA);
      arcDA.name = "arc-da";

      let arcBC = new THREE.Line(geometryArcBC, materialArc);
      arcBC.rotateZ(rotationDC);
      arcBC.name = "arc-bc";

      this.geoScene.scene.children[12] = arcDA;
      this.geoScene.scene.children[13] = arcBC;
    }
  }

  reDrawLabel(label: string) {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
    let circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
    let labelA = this.geoScene.scene.getObjectByName("label-a");
    let labelB = this.geoScene.scene.getObjectByName("label-b");
    let labelC = this.geoScene.scene.getObjectByName("label-c");
    let labelD = this.geoScene.scene.getObjectByName("label-d");

    let distancesRatio = (this.radiusExt + 5) / this.radiusExt;

    if (label === "A") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (circlePointA.position.x) ** 2 + (circlePointA.position.y) ** 2 //distancia entre o ponto zero e A
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelA.position.copy(new THREE.Vector3(distancesRatio * circlePointA.position.x, distancesRatio * circlePointA.position.y, 0.6));
    } else if (label === "B") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (circlePointB.position.x) ** 2 + (circlePointB.position.y) ** 2 //distancia entre o ponto zero e B
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelB.position.copy(new THREE.Vector3(distancesRatio * circlePointB.position.x, distancesRatio * circlePointB.position.y, 0.6));
    } else if (label === "C") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (circlePointC.position.x) ** 2 + (circlePointC.position.y) ** 2 //distancia entre o ponto zero e V
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      if(!this.ext) labelC.position.copy(new THREE.Vector3(distancesRatio * circlePointC.position.x, distancesRatio * circlePointC.position.y, 0.6));
      else labelD.position.copy(new THREE.Vector3(distancesRatio * circlePointC.position.x, distancesRatio * circlePointC.position.y, 0.6));
    } else if (label === "D") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (circlePointD.position.x) ** 2 + (circlePointD.position.y) ** 2 //distancia entre o ponto zero e V
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      if(!this.ext) labelD.position.copy(new THREE.Vector3(distancesRatio * circlePointD.position.x, distancesRatio * circlePointD.position.y, 0.6));
      else labelC.position.copy(new THREE.Vector3(distancesRatio * circlePointD.position.x, distancesRatio * circlePointD.position.y, 0.6));
    }
  }

  changeAngle() {
    let radians = this.angleBeta / 2 * (Math.PI / 180);
    let aCordinates = new THREE.Vector3(
      -(Math.sin(radians) * (this.radiusExt - 0.5)),
      (Math.cos(radians) * (this.radiusExt - 0.5)),
      0.5
    ), bCordinates = new THREE.Vector3(
      -(Math.sin(radians) * (this.radiusExt - 0.5)),
      -(Math.cos(radians) * (this.radiusExt - 0.5)),
      0.5
    ), cCordinates = new THREE.Vector3(
      (Math.sin(radians) * (this.radiusExt - 0.5)),
      -(Math.cos(radians) * (this.radiusExt - 0.5)),
      0.5
    ), dCordinates = new THREE.Vector3(
      (Math.sin(radians) * (this.radiusExt - 0.5)),
      (Math.cos(radians) * (this.radiusExt - 0.5)),
      0.5
    );

    this.geoScene.scene.children[7].position.copy(new THREE.Vector3(0, 0, 0));

    if (this.relation === Relation.OUT) {
      if (this.angleAlpha === 180) this.angleAlpha = 179.9;
      this.geoScene.scene.children[7].position.copy(new THREE.Vector3(35, 0, 0));
      let radians = (90 - this.angleAlpha) * (Math.PI / 180);

      aCordinates = new THREE.Vector3(
        -(Math.sin(radians) * (this.radiusExt - 0.5)),
        (Math.cos(radians) * (this.radiusExt - 0.5)),
        0.5
      ), dCordinates = new THREE.Vector3(
        -(Math.sin(radians) * (this.radiusExt - 0.5)),
        -(Math.cos(radians) * (this.radiusExt - 0.5)),
        0.5
      );

      cCordinates = new THREE.Vector3(
        (this.radiusExt - 0.5),
        (Math.cos(radians) * (this.radiusExt - 0.5) / 9),
        0.5
      ), bCordinates = new THREE.Vector3(
        (this.radiusExt - 0.5),
        -(Math.cos(radians) * (this.radiusExt - 0.5) / 9),
        0.5
      );

      this.oldAngleAlpha = this.angleAlpha;
      this.oldAngleBeta = this.angleBeta;

    }

    this.geoScene.scene.children[3].position.copy(aCordinates);
    this.geoScene.scene.children[4].position.copy(bCordinates);
    this.geoScene.scene.children[5].position.copy(cCordinates);
    this.geoScene.scene.children[6].position.copy(dCordinates);

    if (this.relation == Relation.IN) this.geoScene.fromInput = true;
    else this.geoScene.fromInput = false;
    this.reDrawPointsToCircle();
    this.geoScene.fromInput = true;
    this.reDrawArc();
    this.reDrawAngle();
    let lbls = ["A", "B", "C", "D"];
    for (let i = 0; i < lbls.length; i++) this.reDrawLabel(lbls[i]);

    if (this.relation === Relation.OUT) this.geoScene.scene.children[19].position.copy(new THREE.Vector3(this.geoScene.scene.children[7].position.x + 3, 0, 0));
    this.geoScene.fromInput = false;
    this.geoScene.render();
  }

  ngAfterViewInit() {
    // ------------------------------ Pontos ------------------------------
    // O
    this.geoScene.scene.children[2] = new THREE.Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
    this.geoScene.scene.children[2].visible = false;
    // A
    this.geoScene.scene.children[3] = new THREE.Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[3].position.copy(new THREE.Vector3(-21, 21, 0));
    this.geoScene.scene.children[3].name = "ponto-a";
    // B
    this.geoScene.scene.children[4] = new THREE.Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[4].position.copy(new THREE.Vector3(-21, -21, 0));
    this.geoScene.scene.children[4].name = "ponto-b";
    // C
    this.geoScene.scene.children[5] = new THREE.Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[5].position.copy(new THREE.Vector3(29, -6, 0));
    this.geoScene.scene.children[5].name = "ponto-c";
    // D
    this.geoScene.scene.children[6] = new THREE.Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[6].position.copy(new THREE.Vector3(29, 6, 0));
    this.geoScene.scene.children[6].name = "ponto-d";
    // P
    this.geoScene.scene.children[7] = new THREE.Mesh(new THREE.CircleGeometry(0.75, 30), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.geoScene.scene.children[7].position.copy(new THREE.Vector3(18, 0, 0));
    this.geoScene.scene.children[7].name = "ponto-p";

    // ------------------------------ Linhas ------------------------------
    // Vertices
    const geometryAC = new THREE.Geometry();
    geometryAC.vertices.push(new THREE.Vector3(-21, 21, 0));
    geometryAC.vertices.push(new THREE.Vector3(29, -6, 0));
    const geometryBD = new THREE.Geometry();
    geometryBD.vertices.push(new THREE.Vector3(29, 6, 0));
    geometryBD.vertices.push(new THREE.Vector3(-21, -21, 0));
    // AC
    this.geoScene.scene.children[8] = new THREE.Line(geometryAC, new THREE.LineBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[8].name = "line-ac";
    // BD
    this.geoScene.scene.children[9] = new THREE.Line(geometryBD, new THREE.LineBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[9].name = "line-bd";

    // ------------------------- Arcos e Ângulos --------------------------
    let segmentCount = 92,
      radius = 5,
      geometryAngleAlpha = new THREE.Geometry(),
      geometryAngleBeta = new THREE.Geometry(),
      geometryArcDA = new THREE.Geometry(),
      geometryArcBC = new THREE.Geometry(),
      radiansAlpha = 70 * (Math.PI) / 180,
      radiansBeta = 110 * (Math.PI) / 180,
      radiansArcAlpha = 90 * (Math.PI) / 180,
      radiansArcBeta = 25 * (Math.PI) / 180;

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radiansAlpha;
      geometryAngleAlpha.vertices.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
    }

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radiansBeta;
      geometryAngleBeta.vertices.push(new THREE.Vector3(Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
    }

    segmentCount = 360;

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radiansArcAlpha;
      geometryArcDA.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
    }

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radiansArcBeta;
      geometryArcBC.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
    }

    // Ângulo Alpha
    this.geoScene.scene.children[10] = new THREE.Line(geometryAngleAlpha, new THREE.LineBasicMaterial({ color: 0x0000FF, linewidth: 2 }));
    this.geoScene.scene.children[10].position.copy(new THREE.Vector3(18, 0, 0));
    this.geoScene.scene.children[10].rotateZ(-220 * 0.0175);
    this.geoScene.scene.children[10].name = "angle-alpha";
    // Ângulo Beta
    this.geoScene.scene.children[11] = new THREE.Line(geometryAngleBeta, new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }));
    this.geoScene.scene.children[11].position.copy(new THREE.Vector3(18, 0, 0));
    this.geoScene.scene.children[11].rotateZ(50 * 0.0175);
    this.geoScene.scene.children[11].name = "angle-beta";
    // Ângulo Alpha Espelhado
    this.geoScene.scene.children[22] = new THREE.Line(geometryAngleAlpha, new THREE.LineBasicMaterial({ color: 0x0000FF, linewidth: 2 }));
    this.geoScene.scene.children[22].position.copy(new THREE.Vector3(18, 0, 0));
    this.geoScene.scene.children[22].rotateZ(-40 * 0.0175);
    this.geoScene.scene.children[22].name = "angle-alpha-c";
    // Ângulo Beta Espelhado
    this.geoScene.scene.children[23] = new THREE.Line(geometryAngleBeta, new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }));
    this.geoScene.scene.children[23].position.copy(new THREE.Vector3(18, 0, 0));
    this.geoScene.scene.children[23].rotateZ(230 * 0.0175);
    this.geoScene.scene.children[23].name = "angle-beta-c";
    // Arco DA
    this.geoScene.scene.children[12] = new THREE.Line(geometryArcDA, new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }));
    this.geoScene.scene.children[12].rotateZ(-225 * 0.0175);
    this.geoScene.scene.children[12].name = "arc-da";
    // Arco BC
    this.geoScene.scene.children[13] = new THREE.Line(geometryArcBC, new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }));
    this.geoScene.scene.children[13].rotateZ(-77 * 0.0175);
    this.geoScene.scene.children[13].name = "arc-bc";

    // ------------------------------ Labels ------------------------------
    // O
    this.geoScene.scene.children[14] = new SpriteText('O', 4, '0x000000');
    this.geoScene.scene.children[14].position.copy(new THREE.Vector3(-2.5, -2.5, 0));
    this.geoScene.scene.children[14].visible = false;
    // A
    this.geoScene.scene.children[15] = new SpriteText('A', 5, '0x000000');
    this.geoScene.scene.children[15].position.copy(new THREE.Vector3(-25, 25, 0));
    this.geoScene.scene.children[15].name = "label-a";
    // B
    this.geoScene.scene.children[16] = new SpriteText('B', 5, '0x000000');
    this.geoScene.scene.children[16].position.copy(new THREE.Vector3(-25, -25, 0));
    this.geoScene.scene.children[16].name = "label-b";
    // C
    this.geoScene.scene.children[17] = new SpriteText('C', 5, '0x000000');
    this.geoScene.scene.children[17].position.copy(new THREE.Vector3(33, -9, 0));
    this.geoScene.scene.children[17].name = "label-c";
    // D
    this.geoScene.scene.children[18] = new SpriteText('D', 5, '0x000000');
    this.geoScene.scene.children[18].position.copy(new THREE.Vector3(33, 9, 0));
    this.geoScene.scene.children[18].name = "label-d";
    // P
    this.geoScene.scene.children[19] = new SpriteText('P', 3, '0x000000');
    this.geoScene.scene.children[19].position.copy(new THREE.Vector3(18, -3, 0));
    this.geoScene.scene.children[19].name = "label-p";
    // Alpha
    this.geoScene.scene.children[20] = new SpriteText('α', 4, '#FF0000');
    this.geoScene.scene.children[20].position.copy(new THREE.Vector3(10, 0, 0));
    this.geoScene.scene.children[20].name = "alpha";
    // Beta
    this.geoScene.scene.children[21] = new SpriteText('β', 4, '#0000FF');
    this.geoScene.scene.children[21].position.copy(new THREE.Vector3(18, 8, 0));
    this.geoScene.scene.children[21].name = "beta";
    // Alpha Espelhado
    this.geoScene.scene.children[24] = new SpriteText('α', 4, '#FF0000');
    this.geoScene.scene.children[24].position.copy(new THREE.Vector3(26, 0, 0));
    this.geoScene.scene.children[24].name = "alpha";
    // Beta Espelhado
    this.geoScene.scene.children[25] = new SpriteText('β', 4, '#0000FF');
    this.geoScene.scene.children[25].position.copy(new THREE.Vector3(18, -8, 0));
    this.geoScene.scene.children[25].name = "beta";

    this.reDrawAngle();

    this.pointsDrawOrder();
    this.geoScene.render();
  }

  reDrawDefault() {
    this.radius = 9;
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

    this.ngAfterViewInit();
    if (this.relation === Relation.OUT) {
      this.geoScene.scene.children[5].position.copy(new THREE.Vector3(29, 6, 0));
      this.geoScene.scene.children[6].position.copy(new THREE.Vector3(29, -6, 0));

      this.geoScene.scene.children[7].position.copy(new THREE.Vector3(49, 0, 0));
      this.geoScene.scene.children[19].position.copy(new THREE.Vector3(52, 0, 0));

      const geometryAC = new THREE.Geometry();
      geometryAC.vertices.push(new THREE.Vector3(-21, 21, 0));
      geometryAC.vertices.push(new THREE.Vector3(49, 0, 0));

      const geometryBD = new THREE.Geometry();
      geometryBD.vertices.push(new THREE.Vector3(49, 0, 0));
      geometryBD.vertices.push(new THREE.Vector3(-21, -21, 0));

      this.geoScene.scene.children[8] = new THREE.Line(geometryAC, new THREE.LineBasicMaterial({ color: 0xFF0000 }));
      this.geoScene.scene.children[9] = new THREE.Line(geometryBD, new THREE.LineBasicMaterial({ color: 0xFF0000 }));

      let segmentCount = 92,
        radius = 5,
        geometryAngleAlpha = new THREE.Geometry(),
        radiansAlpha = 30 * (Math.PI) / 180;

      for (let i = 0; i <= segmentCount; i++) {
        let theta = (i / segmentCount) * radiansAlpha;
        geometryAngleAlpha.vertices.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      this.geoScene.scene.children[10] = new THREE.Line(geometryAngleAlpha, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
      this.geoScene.scene.children[10].position.copy(new THREE.Vector3(49, 0, 0));
      this.geoScene.scene.children[10].rotateZ(-195 * 0.0175);
      this.geoScene.scene.children[10].name = "angle-alpha";
      this.geoScene.scene.children[20].position.copy(new THREE.Vector3(49, 0, 0));

      this.geoScene.scene.children[17].position.copy(new THREE.Vector3(33, -9, 0));
      this.geoScene.scene.children[18].position.copy(new THREE.Vector3(33, 9, 0));

      this.geoScene.scene.children[11].visible = false;
      this.geoScene.scene.children[21].visible = false;
      this.geoScene.scene.children[22].visible = false;
      this.geoScene.scene.children[23].visible = false;
      this.geoScene.scene.children[24].visible = false;
      this.geoScene.scene.children[25].visible = false;
    }

    this.pointsDrawOrder();
    this.geoScene.render();
  }

  reDrawDefaultClick() {
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

    this.reDrawArc();
    let pts = ["A", "B", "C", "D"];
    for (let i = 0; i < pts.length; i++) {
      this.dragged = pts[i];
      this.reDrawPointsToCircle();
      this.reDrawAngle();
      this.reDrawLabel(this.dragged);
    }

    this.geoScene.render();
  }

  pointsDrawOrder() {
    this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 2;
    this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 3;
    this.geoScene.scene.children[6].renderOrder = this.geoScene.scene.children.length - 4;
    this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 5;
  }

  checkInput(input) {
    const checkRadius = (this.radius >= 1 && this.radius <= 10);
    const checkAngle = (this.angleAlpha > -1 && this.angleAlpha < 181) && (this.angleBeta > -1 && this.angleBeta < 181);
    if (checkRadius && checkAngle) {
      this.radiusExt = this.radius * 2.5 + 7.5;
      this.radiusInt = this.radiusExt - 1;
      this.errorInputAngle = false;
      this.errorInputRadius = false;
      if (input === 'radius') this.reDrawDefaultClick();
      else {
        if (input === 'beta') this.angleAlpha = 180 - this.angleBeta;
        if (input === 'alpha') this.angleBeta = 180 - this.angleAlpha;
        this.changeAngle();
      }
    } else {
      if (!checkRadius) this.errorInputRadius = true;
      else this.errorInputRadius = false;
      if (!checkAngle) this.errorInputAngle = true;
      else this.errorInputAngle = false;
      this.showAngleAlpha = this.oldAngleAlpha;
      this.showAngleBeta = this.oldAngleBeta;
    }
  }
}


/** Children order (CTRL+F e ta safe :v)
 * 0 - Circulo Externo (Azul, radiusExt)
 * 1 - Circulo Interno (Branco, radiusInt)
 * 2 - Ponto do Centro (0,0)  ~ Criado apenas para caso peçam para colocar depois ~
 * 3 - Ponto A
 * 4 - Ponto B
 * 5 - Ponto C
 * 6 - Ponto D
 * 7 - Ponto P
 * 8 - Linha AC
 * 9 - Linha BD
 * 10 - Ângulo Alpha
 * 11 - Ângulo Beta
 * 12 - Arco DA
 * 13 - Arco BC
 * 14 - Label do Ponto do Centro  ~ Criado apenas para caso peçam para colocar depois ~
 * 15 - Label do Ponto A
 * 16 - Label do Ponto B
 * 17 - Label do Ponto C
 * 18 - Label do Ponto D
 * 19 - Label do Ponto P
 * 20 - Label do Ângulo Alpha
 * 21 - Label do Ângulo Beta
 * 22 - Ângulo Alpha Espelhado
 * 23 - Ângulo Beta Espelhado
 * 24 - Label do Ângulo Alpha Espelhado
 * 25 - Label do Ângulo Beta Espelhado
*/
