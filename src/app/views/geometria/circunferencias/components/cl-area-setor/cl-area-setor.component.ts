import { Component, OnInit, AfterViewInit, ViewChild, DoCheck } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import { Mesh, Loader, MeshBasicMaterial, Vector3, Geometry } from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'ifmath-cl-area-setor',
  templateUrl: './cl-area-setor.component.html',
  styleUrls: ['./cl-area-setor.component.scss']
})
export class ClAreaSetorComponent implements OnInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;
  errorInputAngle: boolean = false;
  errorInputRadius: boolean = false;

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
  // Centro da circunferencia A
  private centerPointOne;
  // Linha A da circunferência
  // private lineA;
  // Centro da circunferencia B
  private centerPointTwo;
  // Linha B da circunferência
  // private lineB;

  // Variável que armazena o ângulo entre as duas retas
  angle: number = 90;
  private oldAngle = this.angle;
  private showAngle = this.angle;

  // Propriedades da circunferência principal
  radius: number = 9;
  radiusExt: number = 30; // Circunferência que forma a linha
  radiusInt: number = 29; // Circunferência queserá a "parte de dentro"

  // Cores das linhas
  private red: any = 0xFF0000;
  private blue: any = 0x4683B4;
  private black: any = 0x000000;


  //botões para outros componentes
  buttons: Object[] = [
    { title: "Ângulo Central", route: "cf_angulo_central" },
    { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
    { title: "Arco Capaz", route: "cf_angulo_capaz" },
    { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
    { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
  ];

  constructor() { }

  ngOnInit(){
    registerLocaleData( pt );
  }

  ngDoCheck() {
    if (this.angle >= 0 && this.angle <= 360) {
      this.showAngle = this.angle;
      this.oldAngle = this.angle;
    }
    this.geoScene.addDegreeSymbol(this.angle, 'degree');
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

  reDrawPointsToCircle() {
    let centerPoint = this.geoScene.scene.getObjectByName("circunference-center");
    let circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
    let circlePointB = this.geoScene.scene.getObjectByName("circunference-two");
    let lineA = this.geoScene.scene.getObjectByName("line-a");
    let lineB = this.geoScene.scene.getObjectByName("line-b");
    this.geoScene.scene.remove(lineA);
    this.geoScene.scene.remove(lineB);
    this.geoScene.scene.remove(centerPoint);

    //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
    if (this.dragged === "A") {
      let distance = Math.sqrt((
        (this.centerPointOne.position.x) ** 2 + (this.centerPointOne.position.y) ** 2 //distancia entre o ponto zero e A
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      circlePointA.position.copy(new THREE.Vector3((distancesRatio * circlePointA.position.x), (distancesRatio * circlePointA.position.y), 0));

    } else if (this.dragged === "B") {
      let distance = Math.sqrt((
        (this.centerPointTwo.position.x) ** 2 + (this.centerPointTwo.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      circlePointB.position.copy(new THREE.Vector3((distancesRatio * circlePointB.position.x), (distancesRatio * circlePointB.position.y), 0));

    }

    let distanceA = Math.sqrt((
      (this.centerPointOne.position.x) ** 2 + (this.centerPointOne.position.y) ** 2 //distancia entre o ponto zero e B
    ));
    let distancesRatioA = (distanceA + 3) / distanceA;

    let distanceB = Math.sqrt((
      (this.centerPointTwo.position.x) ** 2 + (this.centerPointTwo.position.y) ** 2 //distancia entre o ponto zero e B
    ));
    let distancesRatioB = (distanceB + 3) / distanceB;

    let xA = distancesRatioA * circlePointA.position.x, yA = distancesRatioA * circlePointA.position.y;
    let xB = distancesRatioB * circlePointB.position.x, yB = distancesRatioB * circlePointB.position.y;

    let geometryLineA = new THREE.Geometry();
    geometryLineA.vertices.push(new THREE.Vector3(this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
    geometryLineA.vertices.push(new THREE.Vector3(xA, yA, 0.6));

    lineA = new THREE.Line(geometryLineA, new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 }));
    lineA.name = "line-a";

    let geometryLineB = new THREE.Geometry();
    geometryLineB.vertices.push(new THREE.Vector3(this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
    geometryLineB.vertices.push(new THREE.Vector3(xB, yB, 0.6));

    lineB = new THREE.Line(geometryLineB, new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 }));
    lineB.name = "line-b";

    this.geoScene.scene.add(centerPoint);
    this.geoScene.scene.add(lineA);
    this.geoScene.scene.add(lineB);
    this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 2;
  }

  reDrawLabel(label: string) {
    let circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
    let circlePointB = this.geoScene.scene.getObjectByName("circunference-two");
    let labelA = this.geoScene.scene.getObjectByName("label-a");
    let labelB = this.geoScene.scene.getObjectByName("label-b");
    this.geoScene.scene.remove(labelA);
    this.geoScene.scene.remove(labelB);

    let distancesRatio = (this.radiusExt + 5) / this.radiusExt;
    if (label === "A") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (this.centerPointOne.position.x) ** 2 + (this.centerPointOne.position.y) ** 2 //distancia entre o ponto zero e A
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelA.position.x = (distancesRatio * circlePointA.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
      labelA.position.y = (distancesRatio * circlePointA.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
    } else if (label === "B") {
      if (this.dragging) {
        let distance = Math.sqrt((
          (this.centerPointTwo.position.x) ** 2 + (this.centerPointTwo.position.y) ** 2 //distancia entre o ponto zero e B
        ));
        distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
      labelB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
    }

    this.geoScene.scene.add(labelA);
    this.geoScene.scene.add(labelB);
  }

  reDrawAngle() {
    let circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
    let circlePointB = this.geoScene.scene.getObjectByName("circunference-two");

    // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
    let alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
    if (alpha < 0) alpha += 360; // caso o angulo seja negativo
    let beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo a angulo da reta B de radianos para graus
    if (beta < 0) beta += 360; // caso o angulo seja negativo
    this.angle = alpha - beta; //tirando a diferenca dos dois, temos o angulo entre A e B
    if (this.angle < 0) this.angle += 360; // caso o angulo seja negativo

    this.paintSlice(alpha);

    let ang = this.geoScene.scene.getObjectByName("angle");
    let arc = this.geoScene.scene.getObjectByName("arc");
    let alphaGroup = this.geoScene.scene.getObjectByName("alpha");
    this.geoScene.scene.remove(ang, arc, alphaGroup);

    alphaGroup = new THREE.Group();
    alphaGroup.name = "alpha";

    // Criando nova presentação para o angulo
    const segmentCount = Math.round(this.angle * 2),
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      geometryArc = new THREE.Geometry(),
      materialAngle = new THREE.LineBasicMaterial({ color: this.black, linewidth: 2 }),
      materialArc = new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 }),
      radians = this.angle * (Math.PI) / 180;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryAngle.vertices.push(new THREE.Vector3(Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
      geometryArc.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
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

    // rotacionar 1 grau -> 0.0175
    let rotation = (alpha - 90) * 0.0175; // o angulo comeca a ser desenhado nos 90 graus e sempre sai do ponto A

    ang = new THREE.Line(geometryAngle, materialAngle);
    ang.position.x = 0;
    ang.rotateZ(rotation);
    ang.name = "angle";

    arc = new THREE.Line(geometryArc, materialArc);
    arc.position.x = 0;
    arc.rotateZ(rotation);
    arc.name = "arc";

    alphaGroup.position.copy(ang.position);
    alphaGroup.rotateZ(rotation);

    this.geoScene.scene.add(ang, arc, alphaGroup);

    this.angle = Math.round(this.angle);
  }

  paintSlice(rotation){
    this.geoScene.scene.remove(this.geoScene.scene.getObjectByName('slice'));
    const segmentCount = Math.round(this.angle * 3),
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      geometryArc = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: 0xe1eef7, linewidth: 2 }),
      radians = this.angle * (Math.PI) / 180;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryAngle.vertices.push(new THREE.Vector3(Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
      geometryArc.vertices.push(
        new THREE.Vector3(0, 0, 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt), Math.cos(theta) * (this.radiusInt), 0.6)
      );
    }
    materialArc.depthTest = false;
    let slice = new THREE.Line(geometryArc, materialArc);
    slice.position.x = 0;
    slice.rotateZ((rotation- 90) * 0.0175);
    slice.name = "slice";
    this.geoScene.scene.add(slice);
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
        if (el.object.name == "circunference-one" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        } else if (el.object.name == "circunference-two" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        } else if (this.currentIndex.length === 2) {
          el = this.currentIndex[0];
          el.object.position.copy(this.mousePos);
        }
      });

      // Move os objetos referentes a cada circunferencia em relação a posição do mouse
      if (this.currentIndex[0].object.name == "circunference-one") {
        this.dragged = "A";
      } else if (this.currentIndex[0].object.name == "circunference-two") {
        this.dragged = "B";
      }

      this.reDrawPointsToCircle();
      this.reDrawLabel(this.dragged);
      this.reDrawAngle();

      this.geoScene.scene.getObjectByName('circunference-center').renderOrder = this.geoScene.scene.children.length - 3;
      this.geoScene.scene.getObjectByName('line-a').renderOrder = this.geoScene.scene.children.length - 4;
      this.geoScene.scene.getObjectByName('line-b').renderOrder = this.geoScene.scene.children.length - 5;

      this.geoScene.render();
    }
  }

  getIndex() {
    this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);

    if (this.insersects.length === 0) {
      this.currentIndex = null;
      return;
    }

    let arr: any[] = [];

    this.insersects.forEach(el => {
      if (el.object.name == "circunference-one" || el.object.name == "circunference-two") {
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

  changeAngle() {
    let lineA = this.geoScene.scene.getObjectByName("line-a");
    let lineB = this.geoScene.scene.getObjectByName("line-b");
    this.geoScene.scene.remove(lineA);
    this.geoScene.scene.remove(lineB);

    //Reseta a reta e ponto A
    this.geoScene.scene.getObjectByName("circunference-one").position.copy(new Vector3(0, this.radiusExt - 0.5, 0.5));

    // Calcula o valor em radianos do angulo
    const radians = this.angle * (Math.PI) / 180;
    // Calcula o Y e X do ponto B
    const y = Math.cos(radians) * (this.radiusExt - 0.5), x = Math.sin(radians) * (this.radiusExt - 0.5);
    // Atualiza o ponto B
    this.geoScene.scene.getObjectByName("circunference-two").position.copy(new Vector3(x, y, 0.5));

    let distanceA = Math.sqrt((
      (this.centerPointOne.position.x) ** 2 + (this.centerPointOne.position.y) ** 2 //distancia entre o ponto zero e B
    ));
    let distancesRatioA = (distanceA + 3) / distanceA;

    let distanceB = Math.sqrt((
      (this.centerPointTwo.position.x) ** 2 + (this.centerPointTwo.position.y) ** 2 //distancia entre o ponto zero e B
    ));
    let distancesRatioB = (distanceB + 3) / distanceB;

    let xA = distancesRatioA * this.centerPointOne.position.x, yA = distancesRatioA * this.centerPointOne.position.y;
    let xB = distancesRatioB * x, yB = distancesRatioB * y;

    const geometryLineA = new THREE.Geometry();
    geometryLineA.vertices.push(new THREE.Vector3(this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
    geometryLineA.vertices.push(new THREE.Vector3(xA, yA, 0.6));

    lineA = new THREE.Line(geometryLineA, new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 }));
    lineA.name = "line-a";

    const geometryLineB = new THREE.Geometry();
    geometryLineB.vertices.push(new THREE.Vector3(this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
    geometryLineB.vertices.push(new THREE.Vector3(xB, yB, 0.6));

    lineB = new THREE.Line(geometryLineB, new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 }));
    lineB.name = "line-b";

    this.reDrawAngle();
    this.showAngle = this.angle;
    this.oldAngle = this.angle;

    // resetando as labels
    let lbls = ["A", "B"];
    for (let i = 0; i < lbls.length; i++) this.reDrawLabel(lbls[i]);

    this.geoScene.scene.add(lineA, lineB);

    this.geoScene.scene.getObjectByName('circunference-center').renderOrder = this.geoScene.scene.children.length - 3;
    this.geoScene.scene.getObjectByName('line-a').renderOrder = this.geoScene.scene.children.length - 4;
    this.geoScene.scene.getObjectByName('line-b').renderOrder = this.geoScene.scene.children.length - 5;

    this.geoScene.render();
  }

  ngAfterViewInit() {
    this.paintSlice(90);

    // --------------  Ponto do centro --------------
    this.centerPoint = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: this.blue }));
    this.centerPoint.position.x = 0;
    this.centerPoint.position.y = 0;
    this.centerPoint.name = "circunference-center";

    // Label do ponto central
    const labelCenterPoint = new SpriteText('O', 4, this.black);
    labelCenterPoint.position.x = -2;
    labelCenterPoint.position.y = -2;

    //  -------------- Linha (A) --------------
    const geometryLineA = new THREE.Geometry();
    geometryLineA.vertices.push(new THREE.Vector3(0, 0, 0.1));
    geometryLineA.vertices.push(new THREE.Vector3(0, 32.5, 0.1));
    let materialLineA = new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 })
    let lineA = new THREE.Line(geometryLineA, materialLineA);
    lineA.name = "line-a";

    // Label da linha A
    const labelLineA = new SpriteText('A', 5, this.black);
    labelLineA.position.x = 0;
    labelLineA.position.y = 34;
    labelLineA.name = "label-a";


    // Ponto da linha A
    this.centerPointOne = new Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: this.red }));
    this.centerPointOne.position.x = 0;
    this.centerPointOne.position.y = 29.5;
    this.centerPointOne.name = "circunference-one";

    // --------------  Linha (B) --------------
    const geometryLineB = new THREE.Geometry();
    geometryLineB.vertices.push(new THREE.Vector3(0, 0, 0.1));
    geometryLineB.vertices.push(new THREE.Vector3(32.5, 0, 0.1));
    let materialLineB = new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 })
    let lineB = new THREE.Line(geometryLineB, materialLineB);
    lineB.name = "line-b";

    // Label da linha B
    const labelLineB = new SpriteText('B', 5, this.black);
    labelLineB.position.x = 34;
    labelLineB.position.y = 0;
    labelLineB.name = "label-b";

    // Ponto da linha B
    this.centerPointTwo = new Mesh(new THREE.CircleGeometry(1.5, 30), new THREE.MeshBasicMaterial({ color: this.red }));
    this.centerPointTwo.position.x = 29.5;
    this.centerPointTwo.position.y = 0;
    this.centerPointTwo.name = "circunference-two";

    // -------------- Ângulo --------------
    const segmentCount = Math.round(this.angle * 2),
      radius = 5,
      geometryAngle = new THREE.Geometry(),
      materialAngle = new THREE.LineBasicMaterial({ color: this.black, linewidth: 2 }),
      geometryArc = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 });
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * Math.PI / 4 * 2;
      geometryAngle.vertices.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      geometryArc.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6)
      );
    }

    const angle = new THREE.Line(geometryAngle, materialAngle);
    angle.position.x = 0;
    angle.name = "angle";

    const arc = new THREE.Line(geometryArc, materialArc);
    arc.position.x = 0;
    arc.name = "arc";

    const alpha = new SpriteText('α', 4.5, '0x000000');
    alpha.position.copy(new THREE.Vector3(5.2, 5.2, 0));
    alpha.name = "alpha";

    // Adiciona os objetos na cena
    this.geoScene.scene.add(
      this.centerPoint, // 2
      labelCenterPoint, // 3
      labelLineA, // 4
      this.centerPointOne, // 5
      labelLineB, // 6
      this.centerPointTwo, // 7
      angle, // 8
      arc, // 9
      alpha, // 10
      lineA, // 11
      lineB // 12
    );
    // Chamando o render da cena
    this.geoScene.render();
  }

  reDrawDefault() {
    // Adicionando novas circunferências na cena
    let material = new THREE.MeshBasicMaterial({
      color: this.blue
    });
    let circleGeometry = new THREE.CircleGeometry(this.radiusExt, 90);
    this.geoScene.scene.children[0] = new THREE.Mesh(circleGeometry, material);

    let materialTwo = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    let circleGeometryTwo = new THREE.CircleGeometry(this.radiusInt, 90);
    this.geoScene.scene.children[1] = new THREE.Mesh(circleGeometryTwo, materialTwo);

    this.geoScene.scene.children[2] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: this.blue }));

    this.reDrawPointsToCircle();
    this.changeAngle();
  }

  checkInput() {
    const checkRadius = (this.radius >= 1 && this.radius <= 10);
    const checkAngle = (this.angle > -1 && this.angle < 361);
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
    }
  }

}
