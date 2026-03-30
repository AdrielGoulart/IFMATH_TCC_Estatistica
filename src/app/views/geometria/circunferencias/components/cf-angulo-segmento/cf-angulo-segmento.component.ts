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
  ANG = 0,
  CPA = 1
}

@Component({
  selector: 'ifmath-cf-angulo-segmento',
  templateUrl: './cf-angulo-segmento.component.html',
  styleUrls: ['./cf-angulo-segmento.component.scss']
})
export class CfAnguloSegmentoComponent implements AfterViewInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;
  errorInputAngle: boolean = false;
  errorInputRadius: boolean = false;

  relation: Relation = Relation.ANG;

  private dragging: boolean = false;
  private dragged: string = "";
  private currentIndex: any = null;

  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private insersects: THREE.Intersection[];

  private mousePos;

  angle = 60;
  private oldAngle = this.angle;
  private showAngle = this.angle;

  // Propriedades da circunferência principal
  radius: number = 9;
  radiusExt: number = 30; // Circunferência que forma a linha
  radiusInt: number = 29; // Circunferência queserá a "parte de dentro"

  //botões
  buttons: Object[] = [
    { title: "Ângulo Central", route: "cf_angulo_central" },
    { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
    { title: "Arco Capaz", route: "cf_angulo_capaz" },
    { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
    { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
  ];

  buttons_examples = [
    { title: 'Ângulo', value: 0 },
    { title: 'Comprimento do Arco', value: 1 }
  ];

  constructor() { }

  ngOnInit() {
    registerLocaleData( pt );
  }

  loadExample(event: MouseEvent, relation) {
    event.preventDefault(); // Previne o comportamento padrão do evento
    this.relation = relation;

    // Checagem do tipo da relação
    switch (this.relation) {
      case Relation.ANG:
        this.checkInput();
        break;
      case Relation.CPA:
        this.checkInput();
        break;
    }
  }

  ngDoCheck() {
    if (this.angle >= 0 && this.angle <= 180) {
      this.showAngle = this.angle;
      this.oldAngle = this.angle;
    }
    this.geoScene.addDegreeSymbol(this.angle, 'degree');
  }

  getIndex() {
    this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
    let arr: any[] = [];

    if (this.insersects.length === 0) {
      this.currentIndex = null;
      return;
    }

    this.insersects.forEach(el => {
      if (el.object.name == "circunference-point-b" || el.object.name == "circunference-point-v") {
        arr.push(el);
        this.currentIndex = arr;
        console.log(arr);
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

      // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
      this.insersects.forEach(el => {
        if (el.object.name == "circunference-point-b" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        } else if (el.object.name == "circunference-point-v" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        } else if (this.currentIndex.length === 2) {
          el = this.currentIndex[0];
          el.object.position.copy(this.mousePos);
        }
      });

      // Move os objetos referentes a cada circunferencia em relação a posição do mouse
      if (this.currentIndex[0].object.name == "circunference-point-b") {
        this.dragged = "B";
      } else if (this.currentIndex[0].object.name == "circunference-point-v") {
        this.dragged = "V";
      }

      this.reDrawPointsToCircle();
      this.reDrawLabel(this.dragged);
      this.reDrawAngle();

      this.geoScene.render();
    }
  }

  reDrawPointsToCircle() {
    let circlePointA = this.geoScene.scene.getObjectByName("circunference-point-a");
    let circlePointB = this.geoScene.scene.getObjectByName("circunference-point-b");
    let vertexPoint = this.geoScene.scene.getObjectByName("circunference-point-v");
    let verticeGroup = this.geoScene.scene.getObjectByName("g-vertice");
    let lineB = this.geoScene.scene.getObjectByName("line-b");
    this.geoScene.scene.remove(lineB);
    this.geoScene.scene.remove(verticeGroup);

    //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
    if (this.dragged === "V") {
      verticeGroup = new THREE.Group();
      verticeGroup.name = "g-vertice";

      let distance = Math.sqrt((
        (vertexPoint.position.x) ** 2 + (vertexPoint.position.y) ** 2 //distancia entre o ponto zero e V
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      let position = new THREE.Vector3((distancesRatio * vertexPoint.position.x), (distancesRatio * vertexPoint.position.y), 0);
      vertexPoint.position.copy(position);

      let segmentCount = 360,
        geometryTanArc = new THREE.Geometry(),
        geometryLine = new THREE.Geometry(),
        materialTanArc = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }),
        radius = this.radiusExt,
        radians = Math.PI;
      for (let i = 0; i <= segmentCount; i++) {
        let theta = (i / segmentCount) * radians;
        geometryTanArc.vertices.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        if (i === 2 || i === segmentCount - 2) {
          geometryLine.vertices.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
      }

      let alpha = Math.atan2(vertexPoint.position.y, vertexPoint.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
      if (alpha < 0) alpha += 360; // caso o angulo seja negativo

      let tanArc = new THREE.Line(geometryTanArc, materialTanArc);
      tanArc.position.copy(position);
      tanArc.visible = false;

      let line = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
      circlePointA.position.copy(geometryLine.vertices[1]);

      verticeGroup.add(circlePointA);
      verticeGroup.add(tanArc);
      verticeGroup.add(line);

      verticeGroup.position.copy(vertexPoint.position);
      verticeGroup.rotateZ((alpha - 90) * 0.0175);

    } else if (this.dragged === "B") {
      let distance = Math.sqrt((
        (circlePointB.position.x) ** 2 + (circlePointB.position.y) ** 2
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      circlePointB.position.copy(new THREE.Vector3((distancesRatio * circlePointB.position.x), (distancesRatio * circlePointB.position.y), 0));

    }

    let distanceB = Math.sqrt((
      (circlePointB.position.x - vertexPoint.position.x) ** 2 + (circlePointB.position.y - vertexPoint.position.y) ** 2
    ));
    let distancesRatioB = (distanceB + 3) / distanceB;

    let xB = (1 - distancesRatioB) * vertexPoint.position.x + distancesRatioB * circlePointB.position.x, yB = (1 - distancesRatioB) * vertexPoint.position.y + distancesRatioB * circlePointB.position.y;

    let geometryLineB = new THREE.Geometry();
    geometryLineB.vertices.push(new THREE.Vector3(vertexPoint.position.x, vertexPoint.position.y, 0.6));
    geometryLineB.vertices.push(new THREE.Vector3(xB, yB, 0.6));

    lineB = new THREE.Line(geometryLineB, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineB.name = "line-b";

    this.geoScene.scene.add(lineB);
    this.geoScene.scene.add(verticeGroup);
    this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 2;
    this.geoScene.render();
  }

  reDrawLabel(label: string) {
    let circlePointB = this.geoScene.scene.getObjectByName("circunference-point-b");
    let verticePoint = this.geoScene.scene.getObjectByName("circunference-point-v");
    let labelB = this.geoScene.scene.getObjectByName("label-b");
    let vertex = this.geoScene.scene.getObjectByName("label-v");
    this.geoScene.scene.remove(labelB);
    this.geoScene.scene.remove(vertex);

    let distancesRatio = (this.radiusExt + 5) / this.radiusExt;
    if (label === "V") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (verticePoint.position.x) ** 2 + (verticePoint.position.y) ** 2 //distancia entre o ponto zero e B
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      vertex.position.x = (distancesRatio * verticePoint.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
      vertex.position.y = (distancesRatio * verticePoint.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
    } else if (label === "B") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (circlePointB.position.x) ** 2 + (circlePointB.position.y) ** 2 //distancia entre o ponto zero e B
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
      labelB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
    }

    this.geoScene.scene.add(labelB);
    this.geoScene.scene.add(vertex);

    this.geoScene.render();
  }

  reDrawAngle() {
    let vertexPoint = this.geoScene.scene.getObjectByName("circunference-point-v");

    this.reDrawArc();
    this.angle /= 2;
    this.angle += 5;

    let ang = this.geoScene.scene.getObjectByName("angle");
    let alphaGroup = this.geoScene.scene.getObjectByName("alpha");
    this.geoScene.scene.remove(
      ang,
      alphaGroup
    );

    alphaGroup = new THREE.Group();
    alphaGroup.name = "alpha";

    // Criando nova presentação para o angulo
    const segmentCount = Math.round(this.angle * 2),
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      materialAngle = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }),
      radians = this.angle * (Math.PI) / 180;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryAngle.vertices.push(new THREE.Vector3(Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
      if (i == Math.round(this.angle)) {
        const geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(0, 0, 0));
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(theta) * (radius + 2.25), Math.cos(theta) * (radius + 2.25), 0));

        let line = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
        line.visible = false;

        const alpha = new SpriteText('α', 4.5, '0x000000');
        alpha.position.copy(geometryLine.vertices[1]);

        alphaGroup.add(line);
        alphaGroup.add(alpha);
      }
    }

    let vert = Math.atan2(vertexPoint.position.y, vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
    if (vertexPoint.position.x > 0 && vert < 0) vert += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let rotation = (this.angle - 180 + vert) * 0.0175 + 175 * 0.0175; // mesmo esquema do angulo inscrito, funciona mas nao sei explicar, cheguei nisso ai por trial & error :v

    ang = new THREE.Line(geometryAngle, materialAngle);
    ang.position.copy(vertexPoint.position);
    ang.rotateZ(rotation);
    ang.name = "angle";

    alphaGroup.position.copy(ang.position);
    alphaGroup.rotateZ(rotation);

    this.geoScene.scene.add(ang, alphaGroup);

    this.angle -= 5;
    this.angle = Math.round(this.angle);

    if (this.angle === 180) this.geoScene.scene.getObjectByName("line-b").visible = false;
    else if (this.angle === 0) {
      this.geoScene.scene.getObjectByName("line-b").visible = false;
      this.geoScene.scene.getObjectByName("angle").visible = false;
      this.geoScene.scene.getObjectByName("alpha").visible = false;
    }
  }

  reDrawArc() {
    let circlePointB = this.geoScene.scene.getObjectByName("circunference-point-b");
    let vertexPoint = this.geoScene.scene.getObjectByName("circunference-point-v");

    // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
    let alpha = Math.atan2(vertexPoint.position.y, vertexPoint.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
    if (alpha < 0) alpha += 360; // caso o angulo seja negativo
    let beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo a angulo da reta B de radianos para graus
    if (beta < 0) beta += 360; // caso o angulo seja negativo

    if (!this.geoScene.fromInput) {
      this.angle = beta - alpha; //tirando a diferenca dos dois, temos o angulo entre A e B
      if (this.angle < 0) this.angle += 360; // caso o angulo seja negativo
    } else this.angle *= 2;

    let arc = this.geoScene.scene.getObjectByName("arc");
    this.geoScene.scene.remove(arc);

    // Criando nova presentação para o angulo
    const segmentCount = Math.round(this.angle * 2),
      geometryArc = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }),
      radians = this.angle * (Math.PI) / 180;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryArc.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
    }
    let rotation = (beta - 90) * 0.0175;

    materialArc.depthTest = false;
    arc = new THREE.Line(geometryArc, materialArc);
    arc.position.x = 0;
    arc.rotateZ(rotation);
    arc.name = "arc";

    this.geoScene.scene.add(arc);
  }

  changeAngle() {
    // Calcula o valor em radianos do angulo
    const radians = (135 - this.angle) * (Math.PI) / 90;
    // Calcula o Y e X do ponto B
    const y = Math.cos(radians) * (this.radiusExt - 0.5), x = Math.sin(radians) * (this.radiusExt - 0.5);
    // Atualiza o ponto B
    this.geoScene.scene.getObjectByName("circunference-point-b").position.copy(new THREE.Vector3(x, y, 0.5));

    //Reseta a reta A e ponto V
    this.geoScene.scene.getObjectByName("circunference-point-v").position.copy(new THREE.Vector3(-this.radiusExt + 0.5, 0, 0.5));

    this.dragged = "V";
    this.reDrawPointsToCircle();
    this.reDrawAngle();

    this.showAngle = this.angle;
    this.oldAngle = this.angle;

    // resetando as labels
    let lbls = ["V", "B"];
    for (let i = 0; i < lbls.length; i++) this.reDrawLabel(lbls[i]);

    this.geoScene.render();
    this.geoScene.fromInput = false;
  }

  ngAfterViewInit() {
    // --------------  Ponto do centro --------------
    let circleCenter = new THREE.CircleGeometry(1, 30);
    let materialCenter = new THREE.MeshBasicMaterial({ color: 0x4683B4 });
    let centerPoint = new Mesh(circleCenter, materialCenter);

    // Label do ponto central
    const labelCircleCenter = new SpriteText('O', 4, '0x4683B4');
    labelCircleCenter.position.x = -3;
    labelCircleCenter.position.y = -3;

    //  -------------- Linha para baixo (V para B) --------------
    const geometryLine = new THREE.Geometry();
    geometryLine.vertices.push(new THREE.Vector3(-30, 0, 0.1));
    geometryLine.vertices.push(new THREE.Vector3(19, -27.5, 0.1));
    const lineVB = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }));
    lineVB.name = "line-b"


    // -------------- Ponto do V --------------
    const circlePointV = new Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    circlePointV.position.x = -29.5;
    circlePointV.position.y = 0;
    circlePointV.name = "circunference-point-v";

    // Label do ponto A
    const labelPointV = new SpriteText('V', 5, '0xFF0000');
    labelPointV.position.x = -34;
    labelPointV.position.y = 0;
    labelPointV.name = "label-v";


    // -------------- Ponto do B --------------
    const circlePointB = new Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    circlePointB.position.x = 15.5;
    circlePointB.position.y = -25.5;
    circlePointB.name = "circunference-point-b";

    // Label do ponto B
    const labelPointB = new SpriteText('B', 5, '0xFF0000');
    labelPointB.position.x = 21.5;
    labelPointB.position.y = -25.5;
    labelPointB.name = "label-b";


    //  -------------- Ponto do A --------------
    let circlePointA = new Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
    circlePointA.position.x = -30;
    circlePointA.position.y = -35;
    circlePointA.name = "circunference-point-a";
    circlePointA.visible = false;

    // --------------  Linha para baixo (V para A) --------------
    const geometryLineTwo = new THREE.Geometry();
    geometryLineTwo.vertices.push(new THREE.Vector3(-30, 30, 0.1));
    geometryLineTwo.vertices.push(new THREE.Vector3(-30, -30, 0.1));
    const lineVA = new THREE.Line(geometryLineTwo, new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }));
    lineVA.name = "g-vertice";

    // -------------- Ângulo --------------
    let segmentCount = 92,
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      geometryArc = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2 }),
      materialAngle = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }),
      radians = this.angle * (Math.PI) / 180;

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryAngle.vertices.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
    }

    const angle = new THREE.Line(geometryAngle, materialAngle);
    angle.position.x = -30;
    angle.rotateZ(-90 * 0.0175);
    angle.name = "angle";

    segmentCount = 360,
      radius = 5,
      radians = this.angle * 2 * (Math.PI) / 180;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryArc.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
    }

    materialArc.depthTest = false;
    let arc = new THREE.Line(geometryArc, materialArc);
    arc.position.x = 0;
    arc.rotateZ(-150 * 0.0175);
    arc.name = "arc";

    const alpha = new SpriteText('α', 4.5, '0x000000');
    alpha.position.copy(new THREE.Vector3(-26.5, -6.5, 0));
    alpha.name = "alpha";

    // Adiciona os objetos na cena
    this.geoScene.scene.add(
      centerPoint,
      labelCircleCenter,
      lineVB,
      circlePointV,
      labelPointV,
      circlePointB,
      labelPointB,
      circlePointA,
      lineVA,
      arc,
      angle,
      alpha
    );

    this.geoScene.render();
  }

  reDrawDefault() {
    // Adicionando novas circunferências na cena
    let material = new THREE.MeshBasicMaterial({
      color: 0x4683B4
    });
    material.depthTest = false;
    let circleGeometry = new THREE.CircleGeometry(this.radiusExt, 90);
    this.geoScene.scene.children[0] = new THREE.Mesh(circleGeometry, material);

    let materialTwo = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    materialTwo.depthTest = false;
    let circleGeometryTwo = new THREE.CircleGeometry(this.radiusInt, 90);
    this.geoScene.scene.children[1] = new THREE.Mesh(circleGeometryTwo, materialTwo);

    this.geoScene.scene.children[2] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));

    this.changeAngle();
  }

  checkInput() {
    const checkRadius = (this.radius >= 1 && this.radius <= 10);
    const checkAngle = (this.angle > -1 && this.angle < 181);
    if (checkRadius && checkAngle) {
      this.radiusExt = this.radius * 2.5 + 7.5;
      this.radiusInt = this.radiusExt - 1;
      this.errorInputAngle = false;
      this.errorInputRadius = false;
      this.geoScene.fromInput = true;
      this.reDrawDefault();
    } else {
      if (!checkRadius) this.errorInputRadius = true;
      else this.errorInputRadius = false;
      if (!checkAngle) this.errorInputAngle = true;
      else this.errorInputAngle = false;
      this.showAngle = this.oldAngle;
    }
  }

}
