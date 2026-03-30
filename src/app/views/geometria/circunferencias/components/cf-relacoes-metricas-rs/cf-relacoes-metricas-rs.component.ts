import { Component, ViewChild, AfterViewInit, DoCheck } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

enum Relation {
  TRUE = 1,
  FALSE = 0
}

@Component({
  selector: 'ifmath-cf-relacoes-metricas-rs',
  templateUrl: './cf-relacoes-metricas-rs.component.html',
  styleUrls: ['./cf-relacoes-metricas-rs.component.scss']
})
export class CfRelacoesMetricasRsComponent implements AfterViewInit {
  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  angle: number = 57;

  relation: Relation = Relation.TRUE;

  distancePA = 22;
  distancePB = 6;
  distancePC = 6;
  private distancePD = 22;
  private result1 = 0;
  private result2 = 0;

  errorInputRadius: boolean = false;
  private showAngle: number = this.angle;
  private oldAngle: number = this.angle;
  private visible: boolean = true;
  private determinant;

  radius: number = 9;
  radiusExt: number = 30;
  radiusInt: number = 29;

  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private insersects: THREE.Intersection[];
  private mousePos;
  private dragging: boolean = false;
  private dragged: string = "";
  private currentIndex: any[] = [];

  //Botões
  buttons: Object[] = [
    { title: "Relação entre Cordas", route: "cf_relacoes_metricas_rc" },
    { title: "Relação entre Segmentos Secantes", route: "cf_relacoes_metricas_rs" },
    { title: "Relação entre Segmentos Secante e Tangente", route: "cf_relacoes_metricas_rst" }
  ];

  constructor() { }

  ngOnInit() {
    registerLocaleData(pt);
  }

  ngDoCheck(){
    this.result1 = Math.round(this.distancePA*this.distancePC);
    this.result2 = Math.round(this.distancePB*this.distancePD);
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
        || el.object.name == "ponto-d" || el.object.name == "ponto-p") {
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
    let distanceA = Math.sqrt(((circlePointA.position.x - vertexPoint.position.x) ** 2 + (circlePointA.position.y - vertexPoint.position.y) ** 2));
    let distanceB = Math.sqrt(((circlePointB.position.x - vertexPoint.position.x) ** 2 + (circlePointB.position.y - vertexPoint.position.y) ** 2));
    let distanceC = Math.sqrt(((circlePointC.position.x - vertexPoint.position.x) ** 2 + (circlePointC.position.y - vertexPoint.position.y) ** 2));
    let distanceD = Math.sqrt(((circlePointD.position.x - vertexPoint.position.x) ** 2 + (circlePointD.position.y - vertexPoint.position.y) ** 2));

    //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
    if (this.dragged === "P") {
      let distance = Math.sqrt((
        (vertexPoint.position.x) ** 2 + (vertexPoint.position.y) ** 2
      ));
      if (distance < this.radiusExt + 0.5) {
        let distancesRatio = (this.radiusExt + 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

        let x = (distancesRatio * vertexPoint.position.x); let y = (distancesRatio * vertexPoint.position.y);
        vertexPoint.position.copy(new THREE.Vector3(x, y, 0));
      }

      circlePointA.position.copy(vertexPoint.position);
      circlePointD.position.copy(vertexPoint.position);

      let distA = Math.sqrt(((circlePointA.position.x) ** 2 + (circlePointA.position.y) ** 2));
      let distD = Math.sqrt(((circlePointD.position.x) ** 2 + (circlePointD.position.y) ** 2));

      let distancesRatioA = (this.radiusExt - 0.5) / distA;
      let distancesRatioD = (this.radiusExt - 0.5) / distD;

      let thetaA = 10 * 0.0175, thetaB = -10 * 0.0175; // angulo desejado * 0.0175 (mesma coisa que esta formula -> theta = (angulo / 360) * Math.PI * 2)
      //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
      let x = (distancesRatioA * circlePointA.position.x), y = (distancesRatioA * circlePointA.position.y);
      let xrot = Math.cos(thetaA) * (x) - Math.sin(thetaA) * (y), yrot = Math.sin(thetaA) * (x) + Math.cos(thetaA) * (y);
      circlePointA.position.copy(new THREE.Vector3(xrot, yrot, 0));

      x = (distancesRatioD * circlePointD.position.x), y = (distancesRatioD * circlePointD.position.y);
      xrot = Math.cos(thetaB) * (x) - Math.sin(thetaB) * (y), yrot = Math.sin(thetaB) * (x) + Math.cos(thetaB) * (y);
      circlePointD.position.copy(new THREE.Vector3(xrot, yrot, 0));

      let posC = null, posB = null;
      for (let i = 0; i <= 360; i++) {
        let theta = i * 0.0175;
        let pos = new THREE.Vector3(Math.cos(theta) * this.radiusExt, Math.sin(theta) * this.radiusExt, 0);
        let crossC = this.geoScene.lineCross(pos.x, pos.y, vertexPoint.position.x, vertexPoint.position.y, circlePointA.position.x, circlePointA.position.y, 2);
        let crossB = this.geoScene.lineCross(pos.x, pos.y, vertexPoint.position.x, vertexPoint.position.y, circlePointD.position.x, circlePointD.position.y, 2);
        if (crossC) {
          if (posC === null) posC = pos;
          else {
            let dist = Math.sqrt((posC.x - vertexPoint.position.x) ** 2 + (posC.y - vertexPoint.position.y) ** 2);
            let newDist = Math.sqrt((pos.x - vertexPoint.position.x) ** 2 + (pos.y - vertexPoint.position.y) ** 2);
            if (newDist > dist) posC = pos;
          }
        }
        if (crossB) {
          if (posB === null) posB = pos;
          else {
            let dist = Math.sqrt((posB.x - vertexPoint.position.x) ** 2 + (posB.y - vertexPoint.position.y) ** 2);
            let newDist = Math.sqrt((pos.x - vertexPoint.position.x) ** 2 + (pos.y - vertexPoint.position.y) ** 2);
            if (newDist > dist) posB = pos;
          }
        }
      }

      if (!(posC.x <= vertexPoint.position.x + 1 && posC.x >= vertexPoint.position.x - 1)) circlePointC.position.copy(posC);
      if (!(posB.x <= vertexPoint.position.x + 1 && posB.x >= vertexPoint.position.x - 1)) circlePointB.position.copy(posB);

      let pts = ["A", "B", "C", "D"];
      pts.forEach(element => { this.reDrawLabel(element) });

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

    // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
    let a1 = circlePointC.position.y - circlePointA.position.y;
    let b1 = circlePointA.position.x - circlePointC.position.x;
    if (distanceA > distanceC) {
      a1 = circlePointA.position.y - circlePointC.position.y;
      b1 = circlePointC.position.x - circlePointA.position.x;
    }
    let c1 = a1 * (circlePointA.position.x) + b1 * (circlePointA.position.y);

    let a2 = circlePointD.position.y - circlePointB.position.y;
    let b2 = circlePointB.position.x - circlePointD.position.x;
    if (distanceD > distanceB) {
      a2 = circlePointB.position.y - circlePointD.position.y;
      b2 = circlePointD.position.x - circlePointB.position.x;
    }
    let c2 = a2 * (circlePointB.position.x) + b2 * (circlePointB.position.y);

    this.determinant = a1 * b2 - a2 * b1;
    if (this.dragged !== "P") vertexPoint.position.copy(new THREE.Vector3((c1 * b2 - c2 * b1) / this.determinant, (a1 * c2 - a2 * c1) / this.determinant, 0));
    let distance = Math.sqrt((
      (vertexPoint.position.x) ** 2 + (vertexPoint.position.y) ** 2
    ));
    if (distance + 0.5 < this.radiusExt) this.visible = false;
    else this.visible = true;

    this.distanceBetweenPoints();

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
    if (this.dragged !== "P") {
      geometryLineBD.vertices.push(new THREE.Vector3(xBD, yBD, 0));
      geometryLineBD.vertices.push(new THREE.Vector3(xDB, yDB, 0));
      geometryLineBD.vertices.push(vertexPoint.position);
    } else {
      if (distanceD > distanceB) {
        geometryLineBD.vertices.push(vertexPoint.position);
        geometryLineBD.vertices.push(circlePointD.position);
        geometryLineBD.vertices.push(new THREE.Vector3(xBD, yBD, 0));
      } else if (distanceD < distanceB) {
        geometryLineBD.vertices.push(vertexPoint.position);
        geometryLineBD.vertices.push(circlePointB.position);
        geometryLineBD.vertices.push(new THREE.Vector3(xDB, yDB, 0));
      }
    }

    let geometryLineAC = new THREE.Geometry();
    if (this.dragged !== "P") {
      geometryLineAC.vertices.push(new THREE.Vector3(xCA, yCA, 0));
      geometryLineAC.vertices.push(new THREE.Vector3(xAC, yAC, 0));
      geometryLineAC.vertices.push(vertexPoint.position);
    } else {
      if (distanceA > distanceC) {
        geometryLineAC.vertices.push(vertexPoint.position);
        geometryLineAC.vertices.push(circlePointA.position);
        geometryLineAC.vertices.push(new THREE.Vector3(xCA, yCA, 0));
      } else if (distanceA < distanceC) {
        geometryLineAC.vertices.push(vertexPoint.position);
        geometryLineAC.vertices.push(circlePointC.position);
        geometryLineAC.vertices.push(new THREE.Vector3(xAC, yAC, 0));
      }
    }

    lineBD = new THREE.Line(geometryLineBD, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineBD.name = "line-bd";

    lineAC = new THREE.Line(geometryLineAC, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineAC.name = "line-ac";

    this.geoScene.scene.children[8] = lineAC;
    this.geoScene.scene.children[9] = lineBD;

    let alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (alpha < 0) alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (beta < 0) beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let charlie = Math.atan2(circlePointC.position.y, circlePointC.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
    if (charlie < 0) charlie += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let delta = Math.atan2(circlePointD.position.y, circlePointD.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
    if (delta < 0) delta += 360; // caso o angulo seja negativo e o vertice esteja a direita

    let AB = alpha - beta, AC = alpha - charlie, DB = delta - beta, DC = delta - charlie;
    if (AB < 0) AB += 360; if (AC < 0) AC += 360; if (DB < 0) DB += 360; if (DC < 0) DC += 360;

    const geometryAD = new THREE.Geometry();
    const geometryBC = new THREE.Geometry();
    if (AB < AC) {
      if (DB < DC) {
        geometryAD.vertices.push(circlePointA.position);
        geometryAD.vertices.push(circlePointB.position);
        geometryBC.vertices.push(circlePointC.position);
        geometryBC.vertices.push(circlePointD.position);
      } else {
        geometryAD.vertices.push(circlePointA.position);
        geometryAD.vertices.push(circlePointD.position);
        geometryBC.vertices.push(circlePointC.position);
        geometryBC.vertices.push(circlePointB.position);
      }
    } else if (AB > AC) {
      if (DB < DC) {
        geometryAD.vertices.push(circlePointD.position);
        geometryAD.vertices.push(circlePointA.position);
        geometryBC.vertices.push(circlePointB.position);
        geometryBC.vertices.push(circlePointC.position);
      } else {
        geometryAD.vertices.push(circlePointB.position);
        geometryAD.vertices.push(circlePointA.position);
        geometryBC.vertices.push(circlePointD.position);
        geometryBC.vertices.push(circlePointC.position);
      }
    }

    let dashed;
    dashed = new THREE.LineDashedMaterial({ color: 0x0000ff, linewidth: 2, dashSize: 2, gapSize: 2 });
    let lineAD = new THREE.Line(geometryAD, dashed); lineAD.computeLineDistances();
    let lineBC = new THREE.Line(geometryBC, dashed); lineBC.computeLineDistances();

    // Corda 1
    this.geoScene.scene.children[10] = lineAD;
    this.geoScene.scene.children[10].name = "line-ad";
    // Corda 2
    this.geoScene.scene.children[11] = lineBC;
    this.geoScene.scene.children[11].name = "line-bc";
  }

  distanceBetweenPoints() {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
    let circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
    let vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
    let distA = Math.sqrt(((circlePointA.position.x - vertexPoint.position.x) ** 2 + (circlePointA.position.y - vertexPoint.position.y) ** 2));
    let distB = Math.sqrt(((circlePointB.position.x - vertexPoint.position.x) ** 2 + (circlePointB.position.y - vertexPoint.position.y) ** 2));
    let distC = Math.sqrt(((circlePointC.position.x - vertexPoint.position.x) ** 2 + (circlePointC.position.y - vertexPoint.position.y) ** 2));
    let distD = Math.sqrt(((circlePointD.position.x - vertexPoint.position.x) ** 2 + (circlePointD.position.y - vertexPoint.position.y) ** 2));

    //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
    let distanceA = Math.sqrt((
      (circlePointA.position.x) ** 2 + (circlePointA.position.y) ** 2
    ));
    let distancesRatioA = this.radius / distanceA; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

    let xA = (distancesRatioA * circlePointA.position.x), yA = (distancesRatioA * circlePointA.position.y);

    let distanceB = Math.sqrt((
      (circlePointB.position.x) ** 2 + (circlePointB.position.y) ** 2
    ));
    let distancesRatioB = this.radius / distanceB; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

    let xB = (distancesRatioB * circlePointB.position.x), yB = (distancesRatioB * circlePointB.position.y);

    let distanceC = Math.sqrt((
      (circlePointC.position.x) ** 2 + (circlePointC.position.y) ** 2
    ));
    let distancesRatioC = this.radius / distanceC; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

    let xC = (distancesRatioC * circlePointC.position.x), yC = (distancesRatioC * circlePointC.position.y);

    let distanceD = Math.sqrt((
      (circlePointD.position.x) ** 2 + (circlePointD.position.y) ** 2
    ));
    let distancesRatioD = this.radius / distanceD; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

    let xD = (distancesRatioD * circlePointD.position.x), yD = (distancesRatioD * circlePointD.position.y);

    // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
    let a1 = yC - yA;
    let b1 = xA - xC;
    if (distA > distC) {
      a1 = yA - yC;
      b1 = xC - xA;
    }
    let c1 = a1 * (xA) + b1 * (yA);

    let a2 = yD - yB;
    let b2 = xB - xD;
    if (distD > distB) {
      a2 = yB - yD;
      b2 = xD - xB;
    }
    let c2 = a2 * (xB) + b2 * (yB);

    let determinant = a1 * b2 - a2 * b1;
    let xV = (c1 * b2 - c2 * b1) / determinant, yV = (a1 * c2 - a2 * c1) / determinant;

    this.distancePA = Math.sqrt((
      (xA - xV) ** 2 + (yA - yV) ** 2
    ));

    this.distancePB = Math.sqrt((
      (xB - xV) ** 2 + (yB - yV) ** 2
    ));

    this.distancePC = Math.sqrt((
      (xC - xV) ** 2 + (yC - yV) ** 2
    ));

    this.distancePD = Math.sqrt((
      (xD - xV) ** 2 + (yD - yV) ** 2
    ));

  }

  reDrawAngle() {
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
    let circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
    let vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
    let angleC, angleCorda, angleCordaCopy, angle, C, B, vertex;
    let distanceA = Math.sqrt(((circlePointA.position.x - vertexPoint.position.x) ** 2 + (circlePointA.position.y - vertexPoint.position.y) ** 2));
    let distanceB = Math.sqrt(((circlePointB.position.x - vertexPoint.position.x) ** 2 + (circlePointB.position.y - vertexPoint.position.y) ** 2));
    let distanceC = Math.sqrt(((circlePointC.position.x - vertexPoint.position.x) ** 2 + (circlePointC.position.y - vertexPoint.position.y) ** 2));
    let distanceD = Math.sqrt(((circlePointD.position.x - vertexPoint.position.x) ** 2 + (circlePointD.position.y - vertexPoint.position.y) ** 2));

    let a = new THREE.Vector2(vertexPoint.position.x - circlePointA.position.x, vertexPoint.position.y - circlePointA.position.y);
    let d = new THREE.Vector2(vertexPoint.position.x - circlePointD.position.x, vertexPoint.position.y - circlePointD.position.y);

    let da = d.x * a.x + d.y * a.y;
    let dMod = Math.sqrt(d.x ** 2 + d.y ** 2);
    let aMod = Math.sqrt(a.x ** 2 + a.y ** 2);

    let cos = da / (dMod * aMod);

    this.angle = Math.acos(cos) * 180 / Math.PI;

    if (distanceA > distanceC) vertex = circlePointA.position;
    else vertex = circlePointC.position;
    if (distanceD > distanceB) {
      C = new THREE.Vector2(vertex.x - vertexPoint.position.x, vertex.y - vertexPoint.position.y);
      B = new THREE.Vector2(vertex.x - circlePointB.position.x, vertex.y - circlePointB.position.y);
    } else {
      C = new THREE.Vector2(vertex.x - vertexPoint.position.x, vertex.y - vertexPoint.position.y);
      B = new THREE.Vector2(vertex.x - circlePointD.position.x, vertex.y - circlePointD.position.y);
    }

    let BC = B.x * C.x + B.y * C.y;
    let BMod = Math.sqrt(B.x ** 2 + B.y ** 2);
    let CMod = Math.sqrt(C.x ** 2 + C.y ** 2);

    cos = BC / (BMod * CMod);

    angleC = (Math.acos(cos) * 180 / Math.PI) / 2;

    let radiansDA = this.angle * (Math.PI / 180);
    let radiansCorda = angleC * (Math.PI / 180);

    angleCorda = new THREE.Group();
    angleCordaCopy = new THREE.Group();

    let geometryAngle = new THREE.Geometry(),
      geometryAngleCorda = new THREE.Geometry(),
      materialAngle = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });

    let segmentCount = 92,
      radius = 5;
    if (this.radiusExt < 20) radius = 3;
    for (let i = 0; i <= segmentCount; i++) {
      let thetaA = ((i / segmentCount) * radiansDA) - (((segmentCount - i) / segmentCount) * radiansDA);
      let thetaC = ((i / segmentCount) * radiansCorda) - (((segmentCount - i) / segmentCount) * radiansCorda);
      thetaA /= 2;
      geometryAngle.vertices.push(
        new THREE.Vector3(Math.sin(thetaA) * radius, -Math.cos(thetaA) * radius, 0)
      );
      geometryAngleCorda.vertices.push(
        new THREE.Vector3(Math.sin(thetaC) * radius, -Math.cos(thetaC) * radius, 0)
      );
      if (i == 30 || i == 61) {
        let geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(thetaC) * (radius - 1), -Math.cos(thetaC) * (radius - 1), 0)); // adicionando vertice ao centro
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(thetaC) * (radius + 1), -Math.cos(thetaC) * (radius + 1), 0)); // adicionando vertice ao centro do angulo desenhado

        angleCorda.add(new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })));
        angleCordaCopy.add(new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })));
      } else if (i == 46) { // quando estiver no ponto ao centro do angulo
        let geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(thetaA) * (radius - 1), -Math.cos(thetaA) * (radius - 1), 0)); // adicionando vertice ao centro
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(thetaA) * (radius + 1), -Math.cos(thetaA) * (radius + 1), 0)); // adicionando vertice ao centro do angulo desenhado

        angle = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
      }
    }

    let alpha = Math.atan2(circlePointA.position.y - vertexPoint.position.y, circlePointA.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (alpha < 0) alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let beta = Math.atan2(circlePointB.position.y - vertexPoint.position.y, circlePointB.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (beta < 0) beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let charlie = Math.atan2(circlePointC.position.y - vertexPoint.position.y, circlePointC.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (charlie < 0) charlie += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let delta = Math.atan2(circlePointD.position.y - vertexPoint.position.y, circlePointD.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
    if (delta < 0) delta += 360; // caso o angulo seja negativo e o vertice esteja a direita

    let angleModA = (270 - angleC);
    let angleModB = (angleC - 90);
    if (this.determinant > 0) {
      angleModA = -(90 - angleC);
      angleModB = -(angleC - 270);
    }

    let rotationDA = delta * 0.00875 + alpha * 0.00875 + this.angle * 0.0175 + (90 - this.angle) * 0.0175;
    let rotationCordaA = alpha * 0.0175 + angleModA * 0.0175;
    if (distanceA < distanceC) rotationCordaA = charlie * 0.0175 + angleModA * 0.0175
    let rotationCordaB = delta * 0.0175 + angleModB * 0.0175;
    if (distanceD < distanceB) rotationCordaB = beta * 0.0175 + angleModB * 0.0175

    if (!this.geoScene.fromInput) {
      let higher = this.geoScene.scene.children[3].position.y, lower = higher;
      for (let i = 3; i < 7; i++) {
        if (this.geoScene.scene.children[i].position.y > higher) higher = this.geoScene.scene.children[i].position.y;
        if (this.geoScene.scene.children[i].position.y < lower) lower = this.geoScene.scene.children[i].position.y;
      }
      if (vertexPoint.position.x < 0 && vertexPoint.position.y > lower && vertexPoint.position.y < higher) {
        rotationDA += 180 * 0.0175;
      }
    }

    if (rotationDA.toString() !== 'NaN') {
      this.geoScene.scene.children[12] = new THREE.Line(geometryAngle, materialAngle);
      this.geoScene.scene.children[12].rotateZ(rotationDA); // rotacionando o angulo para posicao entre as linhas
      this.geoScene.scene.children[12].name = "angle";
      this.geoScene.scene.children[19] = angle;
      this.geoScene.scene.children[19].rotateZ(rotationDA); // rotacionando o alpha para posicao entre as linhas

      this.geoScene.scene.children[20] = new THREE.Line(geometryAngleCorda, materialAngle);
      this.geoScene.scene.children[20].rotateZ(rotationCordaA); // rotacionando o angulo para posicao entre as linhas
      this.geoScene.scene.children[20].name = "angle-corda";
      this.geoScene.scene.children[22] = angleCorda;
      this.geoScene.scene.children[22].rotateZ(rotationCordaA); // rotacionando o alpha para posicao entre as linhas

      this.geoScene.scene.children[21] = new THREE.Line(geometryAngleCorda, materialAngle);
      this.geoScene.scene.children[21].rotateZ(rotationCordaB); // rotacionando o angulo para posicao entre as linhas
      this.geoScene.scene.children[21].name = "angle-corda-c";
      this.geoScene.scene.children[23] = angleCordaCopy;
      this.geoScene.scene.children[23].rotateZ(rotationCordaB); // rotacionando o alpha para posicao entre as linhas

      this.angle = Math.round(this.angle);
    } else this.angle = 0;

    this.geoScene.scene.children[12].position.copy(vertexPoint.position);
    this.geoScene.scene.children[18].position.copy(new THREE.Vector3(vertexPoint.position.x, vertexPoint.position.y - 4, 0));
    this.geoScene.scene.children[19].position.copy(vertexPoint.position);
    this.geoScene.scene.children[20].position.copy(vertexPoint.position);
    if (distanceA > distanceC) {
      this.geoScene.scene.children[20].position.copy(circlePointA.position);
      this.geoScene.scene.children[22].position.copy(circlePointA.position);
    } else {
      this.geoScene.scene.children[20].position.copy(circlePointC.position);
      this.geoScene.scene.children[22].position.copy(circlePointC.position);
    }
    if (distanceB > distanceD) {
      this.geoScene.scene.children[21].position.copy(circlePointB.position);
      this.geoScene.scene.children[23].position.copy(circlePointB.position);
    } else {
      this.geoScene.scene.children[21].position.copy(circlePointD.position);
      this.geoScene.scene.children[23].position.copy(circlePointD.position);
    }

    if (this.visible) {
      this.geoScene.scene.children[7].visible = true;
      this.geoScene.scene.children[10].visible = true;
      this.geoScene.scene.children[11].visible = true;
      this.geoScene.scene.children[12].visible = true;
      this.geoScene.scene.children[18].visible = true;
      this.geoScene.scene.children[19].visible = true;
      this.geoScene.scene.children[20].visible = true;
      this.geoScene.scene.children[21].visible = true;
      this.geoScene.scene.children[22].visible = true;
      this.geoScene.scene.children[23].visible = true;
      this.relation = Relation.TRUE;
    } else {
      this.geoScene.scene.children[7].visible = false;
      this.geoScene.scene.children[10].visible = false;
      this.geoScene.scene.children[11].visible = false;
      this.geoScene.scene.children[12].visible = false;
      this.geoScene.scene.children[18].visible = false;
      this.geoScene.scene.children[19].visible = false;
      this.geoScene.scene.children[20].visible = false;
      this.geoScene.scene.children[21].visible = false;
      this.geoScene.scene.children[22].visible = false;
      this.geoScene.scene.children[23].visible = false;
      this.relation = Relation.FALSE;
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
      labelC.position.copy(new THREE.Vector3(distancesRatio * circlePointC.position.x, distancesRatio * circlePointC.position.y, 0.6));
    } else if (label === "D") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (circlePointD.position.x) ** 2 + (circlePointD.position.y) ** 2 //distancia entre o ponto zero e V
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelD.position.copy(new THREE.Vector3(distancesRatio * circlePointD.position.x, distancesRatio * circlePointD.position.y, 0.6));
    }
  }

  ngAfterViewInit() {
    // ------------------------------ Pontos ------------------------------
    // O
    this.geoScene.scene.children[2] = new THREE.Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
    // A
    this.geoScene.scene.children[3] = new THREE.Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[3].position.copy(new THREE.Vector3(-21, 21, 0));
    this.geoScene.scene.children[3].name = "ponto-a";
    // B
    this.geoScene.scene.children[4] = new THREE.Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[4].position.copy(new THREE.Vector3(29, -6, 0));
    this.geoScene.scene.children[4].name = "ponto-b";
    // C
    this.geoScene.scene.children[5] = new THREE.Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[5].position.copy(new THREE.Vector3(29, 6, 0));
    this.geoScene.scene.children[5].name = "ponto-c";
    // D
    this.geoScene.scene.children[6] = new THREE.Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[6].position.copy(new THREE.Vector3(-21, -21, 0));
    this.geoScene.scene.children[6].name = "ponto-d";
    // P
    this.geoScene.scene.children[7] = new THREE.Mesh(new THREE.CircleGeometry(1.25, 30), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.geoScene.scene.children[7].position.copy(new THREE.Vector3(49, 0, 0));
    this.geoScene.scene.children[7].name = "ponto-p";

    // ------------------------------ Linhas ------------------------------
    // Vertices
    const geometryAC = new THREE.Geometry();
    geometryAC.vertices.push(new THREE.Vector3(-25, 22.25, 0));
    geometryAC.vertices.push(new THREE.Vector3(49, 0, 0));
    const geometryBD = new THREE.Geometry();
    geometryBD.vertices.push(new THREE.Vector3(-25, -22.25, 0));
    geometryBD.vertices.push(new THREE.Vector3(49, 0, 0));
    const geometryAB = new THREE.Geometry();
    geometryAB.vertices.push(new THREE.Vector3(-21, 21, 0));
    geometryAB.vertices.push(new THREE.Vector3(29, -6, 0));
    const geometryDC = new THREE.Geometry();
    geometryDC.vertices.push(new THREE.Vector3(29, 6, 0));
    geometryDC.vertices.push(new THREE.Vector3(-21, -21, 0));
    let dashed;
    dashed = new THREE.LineDashedMaterial({ color: 0x0000ff, linewidth: 2, dashSize: 2, gapSize: 2 });
    let lineAD = new THREE.Line(geometryAB, dashed); lineAD.computeLineDistances();
    let lineBC = new THREE.Line(geometryDC, dashed); lineBC.computeLineDistances();
    // AC
    this.geoScene.scene.children[8] = new THREE.Line(geometryAC, new THREE.LineBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[8].name = "line-ac";
    // BD
    this.geoScene.scene.children[9] = new THREE.Line(geometryBD, new THREE.LineBasicMaterial({ color: 0xFF0000 }));
    this.geoScene.scene.children[9].name = "line-bd";
    // Corda 1
    this.geoScene.scene.children[10] = lineAD;
    this.geoScene.scene.children[10].name = "line-ad";
    // Corda 2
    this.geoScene.scene.children[11] = lineBC;
    this.geoScene.scene.children[11].name = "line-bc";

    // ------------------------- Arcos e Ângulos --------------------------
    let segmentCount = 92,
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      radians = 70 * (Math.PI) / 180;

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryAngle.vertices.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
    }

    // Ângulo Alpha
    this.geoScene.scene.children[12] = new THREE.Line(geometryAngle, new THREE.LineBasicMaterial({ color: 0x0000FF, linewidth: 2 }));
    this.geoScene.scene.children[12].position.copy(new THREE.Vector3(18, 0, 0));
    this.geoScene.scene.children[12].rotateZ(-220 * 0.0175);
    this.geoScene.scene.children[12].name = "angle-alpha";

    // ------------------------------ Labels ------------------------------
    // O
    this.geoScene.scene.children[13] = new SpriteText('O', 4, '0x000000');
    this.geoScene.scene.children[13].position.copy(new THREE.Vector3(-2.5, -2.5, 0));
    // A
    this.geoScene.scene.children[14] = new SpriteText('A', 5, '0x000000');
    this.geoScene.scene.children[14].position.copy(new THREE.Vector3(-25, 25, 0));
    this.geoScene.scene.children[14].name = "label-a";
    // B
    this.geoScene.scene.children[15] = new SpriteText('B', 5, '0x000000');
    this.geoScene.scene.children[15].position.copy(new THREE.Vector3(33, -9, 0));
    this.geoScene.scene.children[15].name = "label-b";
    // C
    this.geoScene.scene.children[16] = new SpriteText('C', 5, '0x000000');
    this.geoScene.scene.children[16].position.copy(new THREE.Vector3(33, 9, 0));
    this.geoScene.scene.children[16].name = "label-c";
    // D
    this.geoScene.scene.children[17] = new SpriteText('D', 5, '0x000000');
    this.geoScene.scene.children[17].position.copy(new THREE.Vector3(-25, -25, 0));
    this.geoScene.scene.children[17].name = "label-d";
    // P
    this.geoScene.scene.children[18] = new SpriteText('P', 4, '0x000000');
    this.geoScene.scene.children[18].position.copy(new THREE.Vector3(18, -4, 0));
    this.geoScene.scene.children[18].name = "label-p";
    // Alpha
    this.geoScene.scene.children[19] = new SpriteText('α', 4, '#FF0000');
    this.geoScene.scene.children[19].position.copy(new THREE.Vector3(10, 0, 0));
    this.geoScene.scene.children[19].name = "angle";

    this.reDrawAngle();

    this.pointsDrawOrder();
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

    this.geoScene.scene.children[2] = new THREE.Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));

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

  checkInput() {
    if (this.radius >= 1 && this.radius <= 10) {
      this.radiusExt = this.radius * 2.5 + 7.5;
      this.radiusInt = this.radiusExt - 1;
      this.errorInputRadius = false;
      this.reDrawDefault();
    } else {
      this.errorInputRadius = true;
      this.showAngle = this.oldAngle;
    }
  }

}

/** Children order (CTRL+F e ta safe :v)
 * 0 - Circulo Externo (Azul, radiusExt)
 * 1 - Circulo Interno (Branco, radiusInt)
 * 2 - Ponto do Centro (0,0)
 * 3 - Ponto A
 * 4 - Ponto B
 * 5 - Ponto C
 * 6 - Ponto D
 * 7 - Ponto P
 * 8 - Linha AC
 * 9 - Linha BD
 * 10 - Linha Pontilhada AD
 * 11 - Linha Pontilhada BC
 * 12 - Ângulo
 * 13 - Label do Ponto do Centro
 * 14 - Label do Ponto A
 * 15 - Label do Ponto B
 * 16 - Label do Ponto C
 * 17 - Label do Ponto D
 * 18 - Label do Ponto P
 * 19 - Label do Ângulo
 * 20 - Ângulo Corda
 * 21 - Ângulo Corda Espelhado
 * 22 - Label do Ângulo Corda
 * 23 - Label do Ângulo Corda Espelhado
*/
