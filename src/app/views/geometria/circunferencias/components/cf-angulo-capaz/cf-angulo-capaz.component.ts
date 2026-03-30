import { Component, OnInit, AfterViewInit, ViewChild, DoCheck } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import { Mesh, MirroredRepeatWrapping } from 'three';
import SpriteText from 'three-spritetext';

/**
 * Enum para definir a relação entre as circunferÊncias
 */
enum Relation {
  ARC = 0,
  PAR = 1
}

@Component({
  selector: 'ifmath-cf-angulo-capaz',
  templateUrl: './cf-angulo-capaz.component.html',
  styleUrls: ['./cf-angulo-capaz.component.scss']
})
export class CfAnguloCapazComponent implements AfterViewInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;
  relation: Relation = Relation.ARC;

  angle = 45;
  private showAngle = this.angle;
  private oldAngle = this.angle;

  private dragging: boolean = false; // Variável para controle do drag
  private dragged: string = ""; // Variavel para controle de qual objeto foi arrastado
  private currentIndex: any[] = []; // Geometria da cena a qual irá se mover

  // Raycaster da página, utilizado para o "clicar e arrastar"
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private insersects: THREE.Intersection[]; // Elementos que o evento do clique passa através

  // Posição do mouse normalizada
  private mousePos;

  // Propriedades da circunferência principal
  radius: number = 9;
  radiusExt: number = 30; // Circunferência que forma a linha
  radiusInt: number = 29; // Circunferência queserá a "parte de dentro"

  private blue: number = 0x4683B4;
  private red: number = 0xFF0000;
  private preto: number = 0x000000;

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
  { title: 'Arco Capaz', value: 0 },
  { title: 'Par de Arcos Capazes', value: 1 }
];

loadExample(event: MouseEvent, relation) {
    event.preventDefault(); // Previne o comportamento padrão do evento
    this.relation = relation;

    this.radiusExt = 30;
    this.angle = 45;

    // Checagem do tipo da relação
    switch (this.relation) {
      case Relation.ARC:
        this.checkInput();
        break;
      case Relation.PAR:
        this.checkInput();
        break;
    }
  }

  errorInputAngle: boolean;
  errorInputRadius: boolean;
  slide: number = 21;

  constructor() { }

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

  ngDoCheck(){
    if(this.angle >= 0 && this.angle <= 180){
      this.showAngle = this.angle;
      this.oldAngle = this.angle;
    }
    this.geoScene.addDegreeSymbol(this.angle, 'degree');
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
        }else if (el.object.name == "ponto-b" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        }else if (el.object.name == "vertice" && this.currentIndex.length < 2) {
          el.object.position.copy(this.mousePos);
        }else if(this.currentIndex.length >= 2){
          el = this.currentIndex[0];
          el.object.position.copy(this.mousePos);
        }
      });
      // Move os objetos referentes a cada circunferencia em relação a posição do mouse
      if (this.currentIndex[0].object.name == "ponto-a") {
        this.dragged = "A";
      }else if (this.currentIndex[0].object.name == "ponto-b") {
        this.dragged = "B";
      }else if (this.currentIndex[0].object.name == "vertice") {
        this.dragged = "M";
      }

      if (this.angle === 180) this.angle = 179.9;

      this.reDrawPointsToCircle();
      this.reDrawAngle();
      this.reDrawArc();
      if(this.relation === Relation.PAR){
        this.geoScene.scene.children.forEach(el => {
          if(el.name === "label-o") el.position.x = +2;
          el.position.x += this.slide;
          if(el.name === "label-a" || el.name === "label-b"){
            el.position.x = 0;
          }
        });
        this.geoScene.scene.children[0].position.setX(this.geoScene.scene.getObjectByName("label-o").position.x-2);
        if(this.angle <= 90){
          this.geoScene.scene.children[1].position.x = -this.geoScene.scene.children[0].position.x;
          this.geoScene.scene.getObjectByName("label-o").visible = true;
          try{ this.geoScene.scene.getObjectByName("label-o").visible = true; }catch{}
        }else{
          this.geoScene.scene.children[0].visible = false;
          this.geoScene.scene.children[1].visible = false;
          this.geoScene.scene.getObjectByName("label-o").visible = false;
          try{ this.geoScene.scene.getObjectByName("label-o").visible = false; }catch{}
        }
        this.mirror();
      }
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
    let lineAB = this.geoScene.scene.getObjectByName("line-ab");
    this.geoScene.scene.remove(lineA);
    this.geoScene.scene.remove(lineB);
    this.geoScene.scene.remove(lineAB);

    //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
    if(this.dragged === "A"){
      let distance = Math.sqrt((
        (circlePointA.position.x) ** 2 + (circlePointA.position.y) ** 2 //distancia entre o ponto zero e A
      ));
      let distancesRatio = (this.radiusExt-0.5)/distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      circlePointA.position.x = (distancesRatio * circlePointA.position.x); // posicao do x na linha quando a distancia for o valor do raio
      circlePointA.position.y = (distancesRatio * circlePointA.position.y); // posicao do y na linha quando a distancia for o valor do raio
      circlePointB.position.copy(new THREE.Vector3(circlePointA.position.x, -circlePointA.position.y, 0.6));

      if(this.relation === Relation.PAR){
        verticePoint.position.x = this.radiusExt-0.5;
        verticePoint.position.y = 0;
        this.geoScene.scene.children[0] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
        this.geoScene.scene.children[1] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
      }
    }else if(this.dragged === "B"){
      let distance = Math.sqrt((
        (circlePointB.position.x) ** 2 + (circlePointB.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatio = (this.radiusExt-0.5)/distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      circlePointB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio
      circlePointB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio
      circlePointA.position.copy(new THREE.Vector3(circlePointB.position.x, -circlePointB.position.y, 0.6));

      if(this.relation === Relation.PAR){
        verticePoint.position.x = this.radiusExt-0.5;
        verticePoint.position.y = 0;
        this.geoScene.scene.children[0] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
        this.geoScene.scene.children[1] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
      }
    }

    let a = new THREE.Vector2(verticePoint.position.x - circlePointA.position.x, verticePoint.position.y - circlePointA.position.y);
    let b = new THREE.Vector2(verticePoint.position.x - circlePointB.position.x, verticePoint.position.y - circlePointB.position.y);

    let ab = a.x*b.x + a.y*b.y;
    let aMod = Math.sqrt(a.x**2 + a.y**2);
    let bMod = Math.sqrt(b.x**2 + b.y**2);

    let cos = ab/(aMod*bMod);
    let angle = Math.acos(cos)*180/Math.PI;

    let radians = angle * (Math.PI / 180);
    if(this.dragged !== "A" && this.dragged !== "B") radians = this.angle * (Math.PI / 180);
    const bCordinates = new THREE.Vector3(
      -(Math.cos(radians) * (this.radiusExt-0.5)),
      -(Math.sin(radians) * (this.radiusExt-0.5)),
      0.5
    ), aCordinates = new THREE.Vector3(
      -(Math.cos(radians) * (this.radiusExt-0.5)),
      Math.sin(radians) * (this.radiusExt-0.5),
      0.5
    );

    if(this.dragged === "M"){
      let distance = Math.sqrt((
        (verticePoint.position.x) ** 2 + (verticePoint.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatio = (this.radiusExt-0.5)/distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)

      verticePoint.position.x = (distancesRatio * verticePoint.position.x); // posicao do x na linha quando a distancia for o valor do raio
      verticePoint.position.y = (distancesRatio * verticePoint.position.y); // posicao do y na linha quando a distancia for o valor do raio
      if(this.relation === Relation.PAR){
        circlePointA.position.copy(aCordinates);
        circlePointB.position.copy(bCordinates);
        if(verticePoint.position.x <= circlePointA.position.x+1){
          verticePoint.position = new THREE.Vector3(
            -(Math.cos(1 * (Math.PI / 180)) * (this.radiusExt-0.5)),
            Math.sin(1 * (Math.PI / 180)) * (this.radiusExt-0.5),
            0.5
          );
        }
      }
    }

    if(this.relation === Relation.PAR) this.slide = -aCordinates.x;

    let distanceA = Math.sqrt((
      (circlePointA.position.x-verticePoint.position.x) ** 2 + (circlePointA.position.y-verticePoint.position.y) ** 2 //distancia entre o ponto V e A
    ));
    let distancesRatioA = (distanceA+3)/distanceA;

    let distanceB = Math.sqrt((
      (circlePointB.position.x-verticePoint.position.x) ** 2 + (circlePointB.position.y-verticePoint.position.y) ** 2 //distancia entre o ponto V e B
    ));
    let distancesRatioB = (distanceB+3)/distanceB;

    let xA = (1-distancesRatioA)*verticePoint.position.x+distancesRatioA*circlePointA.position.x, yA = (1-distancesRatioA)*verticePoint.position.y+distancesRatioA*circlePointA.position.y;
    let xB = (1-distancesRatioB)*verticePoint.position.x+distancesRatioB*circlePointB.position.x, yB = (1-distancesRatioB)*verticePoint.position.y+distancesRatioB*circlePointB.position.y;

    const geometryLineA = new THREE.Geometry();
    geometryLineA.vertices.push(new THREE.Vector3(verticePoint.position.x, verticePoint.position.y, 0.6));
    geometryLineA.vertices.push(new THREE.Vector3(xA, yA, 0.6));

    lineA = new THREE.Line(geometryLineA, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineA.name = "line-a";

    const geometryLineB = new THREE.Geometry();
    geometryLineB.vertices.push(new THREE.Vector3(verticePoint.position.x, verticePoint.position.y, 0.6));
    geometryLineB.vertices.push(new THREE.Vector3(xB, yB, 0.6));

    lineB = new THREE.Line(geometryLineB, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
    lineB.name = "line-b";

    const geometryLineAB = new THREE.Geometry();
    geometryLineAB.vertices.push(new THREE.Vector3(circlePointA.position.x, circlePointA.position.y, 0.6));
    geometryLineAB.vertices.push(new THREE.Vector3(circlePointB.position.x, circlePointB.position.y, 0.6));

    lineAB = new THREE.Line(geometryLineAB, new THREE.LineBasicMaterial({ color: this.blue, linewidth: 2 }));
    lineAB.name = "line-ab";

    // reordenando a renderizacao para os pontos nao ficarem em baixo da linha da circunferencia
    this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length-1; // vertice
    this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length-2; // ponto a
    this.geoScene.scene.children[10].renderOrder = this.geoScene.scene.children.length-3; // ponto b

    this.geoScene.scene.add(lineA, lineB, lineAB);
    this.geoScene.scene.children[13].renderOrder = this.geoScene.scene.children.length-4;
    this.geoScene.scene.children[14].renderOrder = this.geoScene.scene.children.length-5;
    this.geoScene.scene.children[15].renderOrder = this.geoScene.scene.children.length-6;

    let lbls = ["A","B","M"];
    for (let i = 0; i < lbls.length; i++) this.reDrawLabel(lbls[i]);

    this.geoScene.render();
  }

  reDrawAngle(){
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let verticePoint = this.geoScene.scene.getObjectByName("vertice");

    //https://stackoverflow.com/a/1354158 - formula para descobrir o angulo entre tres pontos, sendo um o vertice

    let a = new THREE.Vector2(verticePoint.position.x - circlePointA.position.x, verticePoint.position.y - circlePointA.position.y);
    let b = new THREE.Vector2(verticePoint.position.x - circlePointB.position.x, verticePoint.position.y - circlePointB.position.y);

    let ab = a.x*b.x + a.y*b.y;
    let aMod = Math.sqrt(a.x**2 + a.y**2);
    let bMod = Math.sqrt(b.x**2 + b.y**2);

    let cos = ab/(aMod*bMod);
    this.angle = Math.acos(cos)*180/Math.PI;

    let ang = this.geoScene.scene.getObjectByName("angle");
    let alphaGroup = this.geoScene.scene.getObjectByName("alpha");
    this.geoScene.scene.remove(ang, alphaGroup);

    alphaGroup = new THREE.Group();
    alphaGroup.name = "alpha";

    let geometryAngle = new THREE.Geometry(),
        materialAngle = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }),
        segmentCount = 92,
        radians = Math.acos(cos),
        radius = 5;
    if(this.radiusExt < 20) radius = 3;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = ((i / segmentCount) * radians) - (((segmentCount - i) / segmentCount) * radians);
      theta /= 2;
      geometryAngle.vertices.push(
        new THREE.Vector3(Math.sin(theta) * radius, -Math.cos(theta) * radius, 0)
      );
      if(i == 46){ // quando estiver no ponto ao centro do angulo
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

    let alpha = Math.atan2(circlePointA.position.y-verticePoint.position.y, circlePointA.position.x-verticePoint.position.x)*(180/Math.PI); // convertendo o angulo da reta A de radianos para graus
    if(verticePoint.position.x > 0 && alpha < 0) alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
    let beta = Math.atan2(circlePointB.position.y-verticePoint.position.y, circlePointB.position.x-verticePoint.position.x)*(180/Math.PI); // convertendo o angulo da reta B de radianos para graus
    if(verticePoint.position.x > 0 && beta < 0) beta += 360; // caso o angulo seja negativo e o vertice esteja a direita

    let rotation = beta*0.00875 + alpha*0.00875 + this.angle*0.0175 + (90-this.angle)*0.0175; // sinceramente, nao sei explicar como cheguei nisso ai, mas funciona ¯\_(ツ)_/¯

    if(rotation.toString() !== 'NaN'){
      ang = new THREE.Line(geometryAngle, materialAngle);
      ang.position.copy(verticePoint.position); // movendo o angulo do centro para o vertice
      ang.rotateZ(rotation); // rotacionando o angulo para posicao entre as linhas
      ang.name = "angle";
      alphaGroup.position.copy(verticePoint.position); // movendo o alpha do centro para o vertice
      alphaGroup.rotateZ(rotation); // rotacionando o alpha para posicao entre as linhas

      this.geoScene.scene.add(ang, alphaGroup);
      this.angle = Math.round(this.angle);
    }else this.angle = 0;

    if(this.angle < 1 || this.angle > 179){
      let distanceAV = Math.sqrt((circlePointA.position.x-verticePoint.position.x)**2 + (circlePointA.position.y-verticePoint.position.y)**2);
      let distanceBV = Math.sqrt((circlePointB.position.x-verticePoint.position.x)**2 + (circlePointB.position.y-verticePoint.position.y)**2);

      if(distanceAV < distanceBV) this.geoScene.scene.getObjectByName("line-a").visible = false;
      else if(distanceAV > distanceBV) this.geoScene.scene.getObjectByName("line-b").visible = false;
    }
  }

  reDrawArc(){
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let vertex = this.geoScene.scene.getObjectByName("vertice");

    // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
    let alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x)*(180/Math.PI); // convertendo a angulo da reta A de radianos para graus
    if(alpha < 0) alpha += 360; // caso o angulo seja negativo
    let beta = Math.atan2(circlePointB.position.y, circlePointB.position.x)*(180/Math.PI); // convertendo a angulo da reta B de radianos para graus
    if(beta < 0) beta += 360; // caso o angulo seja negativo

    let segmentCount = Math.round(360*2-this.angle),
      geometryArc = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: this.blue, linewidth: 2 }),
      radians = (360-this.angle*2) * (Math.PI) / 180;
    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryArc.vertices.push(
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt-0.2), Math.cos(theta) * (this.radiusInt-0.2), 0.6),
        new THREE.Vector3(Math.sin(theta) * (this.radiusInt+0.8), Math.cos(theta) * (this.radiusInt+0.8), 0.6)
      );
    }
    // rotacionar 1 grau -> 0.0175
    let rotation = (alpha-90)*0.0175;
    let rotationPar = (alpha+90)*0.0175;

    if(circlePointB.position.y > circlePointA.position.y &&  circlePointA.position.x < vertex.position.x){
      rotation = (beta-90)*0.0175;
      rotationPar = (beta+90)*0.0175;
    }else if(circlePointB.position.y < circlePointA.position.y &&  circlePointA.position.x > vertex.position.x){
      rotation = (beta-90)*0.0175;
      rotationPar = (beta+90)*0.0175;
    }

    if(rotation.toString() !== 'NaN'){
      materialArc.depthTest = false;
      let arcPar = new THREE.Line(geometryArc, materialArc);
      arcPar.position.x -= this.slide*2;
      arcPar.rotateZ(rotationPar);
      arcPar.name = "arcPar";

      let arc = new THREE.Line(geometryArc, materialArc);
      arc.position.x = 0;
      arc.rotateZ(rotation);
      arc.name = "arc";

      if(this.relation === Relation.PAR) this.geoScene.scene.children[2] = arcPar;
      this.geoScene.scene.children[3] = arc;

      this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length-1;
      this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length-2;
      this.geoScene.scene.children[10].renderOrder = this.geoScene.scene.children.length-3;
    }
  }

  reDrawLabel(label:string){
    let circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
    let circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
    let verticePoint = this.geoScene.scene.getObjectByName("vertice");
    let labelA = this.geoScene.scene.getObjectByName("label-a");
    let labelB = this.geoScene.scene.getObjectByName("label-b");
    let labelM = this.geoScene.scene.getObjectByName("label-m");

    let distancesRatio = (this.radiusExt+5)/this.radiusExt;
    if(label === "A"){
      if(this.dragging){
        let distance = Math.sqrt((
          (circlePointA.position.x) ** 2 + (circlePointA.position.y) ** 2 //distancia entre o ponto zero e A
        ));
        distancesRatio = (distance+5)/distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelA.position.copy(new THREE.Vector3(distancesRatio * circlePointA.position.x,distancesRatio * circlePointA.position.y,0.6));
    }else if(label === "B"){
      if(this.dragging){
        let distance = Math.sqrt((
          (circlePointB.position.x) ** 2 + (circlePointB.position.y) ** 2 //distancia entre o ponto zero e B
        ));
        distancesRatio = (distance+5)/distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelB.position.copy(new THREE.Vector3(distancesRatio * circlePointB.position.x,distancesRatio * circlePointB.position.y,0.6));
    }else if(label === "M"){
      if(this.dragging){
        let distance = Math.sqrt((
          (verticePoint.position.x) ** 2 + (verticePoint.position.y) ** 2 //distancia entre o ponto zero e V
        ));
        distancesRatio = (distance+5)/distance; // razao entre a distacia total mais 5 e a distancia total
      }
      labelM.position.copy(new THREE.Vector3(distancesRatio * verticePoint.position.x,distancesRatio * verticePoint.position.y,0.6));
    }

    this.geoScene.render();
  }

  changeAngle() {
    if(this.angle >= 0 && this.angle <= 180){
      let radians = this.angle * (Math.PI / 180);
      const bCordinates = new THREE.Vector3(
        -(Math.cos(radians) * (this.radiusExt-0.5)),
        -(Math.sin(radians) * (this.radiusExt-0.5)),
        0.5
      ), aCordinates = new THREE.Vector3(
        -(Math.cos(radians) * (this.radiusExt-0.5)),
        Math.sin(radians) * (this.radiusExt-0.5),
        0.5
      );

      this.slide = -aCordinates.x;

      this.geoScene.scene.remove(
        this.geoScene.scene.getObjectByName('line-a'),
        this.geoScene.scene.getObjectByName('line-b'),
        this.geoScene.scene.getObjectByName('line-ab'),
        this.geoScene.scene.getObjectByName('angle')
      );

      const vertex = this.geoScene.scene.getObjectByName("vertice");
      vertex.position.copy(new THREE.Vector3(this.radiusExt-0.5,0,0));

      const pointA = this.geoScene.scene.getObjectByName("ponto-a");
      pointA.position.copy(aCordinates);

      const pointB = this.geoScene.scene.getObjectByName('ponto-b');
      pointB.position.copy(bCordinates);

      let distanceA = Math.sqrt((
        (pointA.position.x-vertex.position.x) ** 2 + (pointA.position.y-vertex.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatioA = (distanceA+3)/distanceA;

      let distanceB = Math.sqrt((
        (pointB.position.x-vertex.position.x) ** 2 + (pointB.position.y-vertex.position.y) ** 2 //distancia entre o ponto zero e B
      ));
      let distancesRatioB = (distanceB+3)/distanceB;

      let xA = (1-distancesRatioA)*(this.radiusExt-0.5)+distancesRatioA*aCordinates.x, yA = distancesRatioA*aCordinates.y;
      let xB = (1-distancesRatioB)*(this.radiusExt-0.5)+distancesRatioB*bCordinates.x, yB = distancesRatioB*bCordinates.y;

      const geometryLineA = new THREE.Geometry();
      geometryLineA.vertices.push(new THREE.Vector3(vertex.position.x, vertex.position.y, 0.5));
      geometryLineA.vertices.push(new THREE.Vector3(xA, yA, 0.6));

      let lineA = new THREE.Line(geometryLineA, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
      lineA.name = "line-a";

      const geometryLineB = new THREE.Geometry();
      geometryLineB.vertices.push(new THREE.Vector3(vertex.position.x, vertex.position.y, 0.5));
      geometryLineB.vertices.push(new THREE.Vector3(xB, yB, 0.6));

      let lineB = new THREE.Line(geometryLineB, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
      lineB.name = "line-b";

      const geometryLineAB = new THREE.Geometry();
      geometryLineAB.vertices.push(new THREE.Vector3(pointA.position.x, pointA.position.y, 0.6));
      geometryLineAB.vertices.push(new THREE.Vector3(pointB.position.x, pointB.position.y, 0.6));

      let lineAB = new THREE.Line(geometryLineAB, new THREE.LineBasicMaterial({ color: this.blue, linewidth: 2 }));
      lineAB.name = "line-ab";

      this.reDrawAngle();
      this.reDrawArc();
      if(this.angle === 0){
        this.geoScene.scene.getObjectByName("alpha").visible = false;
      }

      let lbls = ["A","B","M"];
      for (let i = 0; i < lbls.length; i++) this.reDrawLabel(lbls[i]);

      this.geoScene.scene.add(lineA, lineB, lineAB);
      this.geoScene.scene.children[13].renderOrder = this.geoScene.scene.children.length-4;
      this.geoScene.scene.children[14].renderOrder = this.geoScene.scene.children.length-5;
      this.geoScene.scene.children[15].renderOrder = this.geoScene.scene.children.length-6;

      if(this.relation === Relation.PAR){
        this.geoScene.scene.children.forEach(el => {
          if(el.name === "label-o") el.position.x = +2;
          el.position.x += this.slide;
          if(el.name === "label-a" || el.name === "label-b"){
            el.position.x = 0;
          }
        });
        if(this.angle <= 90){
          this.geoScene.scene.children[1].position.x = -this.geoScene.scene.children[0].position.x;
          this.geoScene.scene.getObjectByName("label-o").visible = true;
          try{ this.geoScene.scene.getObjectByName("label-o").visible = true; }catch{}
        }else{
          this.geoScene.scene.children[0].visible = false;
          this.geoScene.scene.children[1].visible = false;
          this.geoScene.scene.getObjectByName("label-o").visible = false;
          try{ this.geoScene.scene.getObjectByName("label-o").visible = false; }catch{}
        }
      }

      this.mirror();

      this.showAngle = this.angle;
      this.oldAngle = this.angle;
      this.geoScene.render();
    }else{
      this.showAngle = this.oldAngle;
    }
  }

  ngAfterViewInit() {
    this.reDrawDefault();
    // Label do ponto central
    const labelCircleCenter = new SpriteText('O', 4, this.preto.toString());
    labelCircleCenter.position.x = -2.5;
    labelCircleCenter.position.y = -3;
    labelCircleCenter.name = "label-o";

    // --------------  Ponto do vértice --------------
    let circleVertex = new THREE.CircleGeometry(1.5, 30);
    let materialVertex = new THREE.MeshBasicMaterial({ color: this.red });
    let vertexPoint = new Mesh(circleVertex, materialVertex);
    vertexPoint.position.x = 29.5;
    vertexPoint.position.y = 0;
    vertexPoint.name = 'vertice';

    // Label do ponto do vétice
    const labelCircleVertex = new SpriteText('M', 5, this.preto.toString());
    labelCircleVertex.position.x = 34;
    labelCircleVertex.position.y = 0;
    labelCircleVertex.name = 'label-m';

    //  -------------- Linha de cima --------------
    const geometryLineUp = new THREE.Geometry();
    geometryLineUp.vertices.push(new THREE.Vector3(29.5, 0, 0.1));
    geometryLineUp.vertices.push(new THREE.Vector3(-21, 21, 0.1));
    //Material da linha
    let materialLine = new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 })
    const lineUp = new THREE.Line(geometryLineUp, materialLine);
    lineUp.name = 'line-a';

    // Label da linha da esquerda
    const labelLineUp = new SpriteText('A', 5, this.preto.toString());
    labelLineUp.position.x = -25;
    labelLineUp.position.y = 25;
    labelLineUp.name = 'label-a';

    // Ponto da linha da esquerda
    let circleLineUp = new THREE.CircleGeometry(1.5, 30);
    let materialCircleUp = new THREE.MeshBasicMaterial({ color: this.red });
    let circleUpPoint = new Mesh(circleLineUp, materialCircleUp);
    circleUpPoint.position.x = -21;
    circleUpPoint.position.y = 21;
    circleUpPoint.name = 'ponto-a';

    //  -------------- Linha de baixo --------------
    const geometryLineDown = new THREE.Geometry();
    geometryLineDown.vertices.push(new THREE.Vector3(29.5, 0, 0.1));
    geometryLineDown.vertices.push(new THREE.Vector3(-21, -21, 0.1));
    //Material da linha
    let materialLineDown = new THREE.LineBasicMaterial({ color: this.red, linewidth: 2 })
    const lineDown = new THREE.Line(geometryLineDown, materialLineDown);
    lineDown.name = 'line-b';

    // Label da linha da direita
    const labelLineDown = new SpriteText('B', 5, this.preto.toString());
    labelLineDown.position.x = -25;
    labelLineDown.position.y = -25;
    labelLineDown.name = 'label-b';

    // Ponto da linha da direita
    let circleLineDown = new THREE.CircleGeometry(1.5, 30);
    let materialCircleDown = new THREE.MeshBasicMaterial({ color: this.red });
    let circleDownPoint = new Mesh(circleLineDown, materialCircleDown);
    circleDownPoint.position.x = -21;
    circleDownPoint.position.y = -21;
    circleDownPoint.name = 'ponto-b';

    //  -------------- Linha que conecta a linha da esquerda e da direita --------------
    const geometryLineConnectLR = new THREE.Geometry();
    geometryLineConnectLR.vertices.push(new THREE.Vector3(-21, 21, 0.1));
    geometryLineConnectLR.vertices.push(new THREE.Vector3(-21, -21, 0.1));
    //Material da linha
    let materialLineConnectLR = new THREE.LineBasicMaterial({ color: this.blue, linewidth: 2 })
    const lineConnectLR = new THREE.Line(geometryLineConnectLR, materialLineConnectLR);
    lineConnectLR.name = 'line-ab';

    // -------------- Ângulo --------------
    let segmentCount = 92,
    radius = 5,
    geometryAngle = new THREE.Geometry(),
    materialAngle = new THREE.LineBasicMaterial({ color: this.preto, linewidth: 2 }),
    radians = 45 * (Math.PI) / 180;

    for (let i = 0; i <= segmentCount; i++) {
      let theta = (i / segmentCount) * radians;
      geometryAngle.vertices.push(new THREE.Vector3( Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
    }

    const alpha = new SpriteText('α', 5, '0x000000');
    alpha.position.copy(new THREE.Vector3(22, 0, 0));
    alpha.name = "alpha";

    const angle = new THREE.Line(geometryAngle, materialAngle);
    angle.position.x = 29.5;
    angle.position.y = 0;
    angle.rotateZ(157*0.0175);
    angle.name = 'angle';

    // Adiciona os objetos na cena
    this.geoScene.scene.add(
      labelCircleCenter,
      vertexPoint,
      labelCircleVertex,
      circleUpPoint,
      lineUp,
      labelLineUp,
      lineDown,
      labelLineDown,
      circleDownPoint,
      lineConnectLR,
      angle,
      alpha
    );

    // Chamando o render da cena
    this.geoScene.render();

  }

  mirror(){
    try{
      this.geoScene.scene.remove(
        this.geoScene.scene.getObjectByName("l-vertice"),
        this.geoScene.scene.getObjectByName("l-labelVerticeLinha"),
        this.geoScene.scene.getObjectByName("l-label-o"),
        this.geoScene.scene.getObjectByName("l-lineALinha"),
        this.geoScene.scene.getObjectByName("l-lineBLinha"),
        this.geoScene.scene.getObjectByName("l-alphaLinha"),
        this.geoScene.scene.getObjectByName("l-anguloLinha")
      );
      // reordenando a renderizacao para os pontos nao ficarem em baixo da linha da circunferencia
      this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length-1; // vertice
      this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length-2; // ponto a
      this.geoScene.scene.children[10].renderOrder = this.geoScene.scene.children.length-3; // ponto b
    }catch{}
    if(this.relation === Relation.PAR){
      let verticeLinha = this.geoScene.scene.getObjectByName("vertice").clone();
      verticeLinha.position.x = -verticeLinha.position.x;
      verticeLinha.position.y = -verticeLinha.position.y;
      verticeLinha.name = "l-vertice";

      let labelVerticeLinha = this.geoScene.scene.getObjectByName("label-m").clone();
      labelVerticeLinha.position.x = -labelVerticeLinha.position.x;
      labelVerticeLinha.position.y = -labelVerticeLinha.position.y;
      let linhaVertice = new SpriteText("M'", 5, '0x000000');
      linhaVertice.position.copy(labelVerticeLinha.position);
      labelVerticeLinha = linhaVertice;
      labelVerticeLinha.name = "l-labelVerticeLinha";

      let labelCentroLinha = this.geoScene.scene.getObjectByName("label-o").clone();
      labelCentroLinha.position.x = -labelCentroLinha.position.x;
      let linhaCentro = new SpriteText("O'", 4, '0x000000');
      linhaCentro.position.copy(labelCentroLinha.position);
      labelCentroLinha = linhaCentro;
      labelCentroLinha.name = "l-label-o";
      try{
        if(this.geoScene.scene.getObjectByName("label-o").visible) labelCentroLinha.visible = true;
        else labelCentroLinha.visible = false;
      }catch{}

      let lineALinha = this.geoScene.scene.getObjectByName("line-a").clone();
      lineALinha.position.x = -lineALinha.position.x;
      lineALinha.name = "l-lineALinha";
      lineALinha.rotateZ(180*0.0175);

      let lineBLinha = this.geoScene.scene.getObjectByName("line-b").clone();
      lineBLinha.position.x = -lineBLinha.position.x;
      lineBLinha.name = "l-lineBLinha";
      lineBLinha.rotateZ(180*0.0175);

      let alphaLinha = this.geoScene.scene.getObjectByName("alpha").clone();
      alphaLinha.add(new SpriteText("   '", 5, '0x000000'));
      alphaLinha.children[2].position.copy(alphaLinha.children[1].position);
      alphaLinha.name = "l-alphaLinha";
      alphaLinha.rotateZ(180*0.0175);
      alphaLinha.position.x = -alphaLinha.position.x;
      alphaLinha.position.y = -alphaLinha.position.y;

      let anguloLinha = this.geoScene.scene.getObjectByName("angle").clone();
      anguloLinha.name = "l-anguloLinha";
      anguloLinha.rotateZ(178*0.0175);
      anguloLinha.position.x = -anguloLinha.position.x;
      anguloLinha.position.y = -anguloLinha.position.y;

      this.geoScene.scene.add(
        labelCentroLinha,
        labelVerticeLinha,
        verticeLinha,
        lineALinha,
        lineBLinha,
        alphaLinha,
        anguloLinha
      );
    }
  }

  reDrawDefault(){
    if(this.relation === Relation.ARC){
      // Adicionando novas circunferências na cena
      let material = new THREE.MeshBasicMaterial({
        color: 0xcfcfcf
      });
      let circleGeometry = new THREE.CircleGeometry(this.radiusExt, 90);
      this.geoScene.scene.children[0] = new THREE.Mesh( circleGeometry, material );

      let materialTwo = new THREE.MeshBasicMaterial({
        color: 0xffffff
      });
      let circleGeometryTwo = new THREE.CircleGeometry(this.radiusInt, 90);
      this.geoScene.scene.children[1] = new THREE.Mesh( circleGeometryTwo, materialTwo );

      this.geoScene.scene.children[2] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
      this.geoScene.scene.children[2].position.x = 0;
      try{ this.geoScene.scene.getObjectByName("label-o").position.x = -2 } catch{};

      const segmentCount = Math.round(270*2),
      geometryArc = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: this.blue, linewidth: 2 }),
      radians = 270 * (Math.PI) / 180;

      for (let i = 0; i <= segmentCount; i++) {
        let theta = (i / segmentCount) * radians;
        geometryArc.vertices.push(
          new THREE.Vector3(Math.sin(theta) * (this.radiusInt-0.2), Math.cos(theta) * (this.radiusInt-0.2), 0.6),
          new THREE.Vector3(Math.sin(theta) * (this.radiusInt+0.8), Math.cos(theta) * (this.radiusInt+0.8), 0.6)
        );
      }

      materialArc.depthTest = false;
      let arc = new THREE.Line(geometryArc, materialArc);
      arc.position.x = 0;
      arc.rotateZ(45*0.0175);
      arc.name = "arc";

      this.geoScene.scene.children[3] = arc;
    }else if(this.relation === Relation.PAR){
      this.geoScene.scene.children[0] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
      this.geoScene.scene.children[1] = new Mesh(new THREE.CircleGeometry(1, 30), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));

      this.geoScene.scene.children[0].name = "center";

      const segmentCount = Math.round(270*2),
      geometryArc = new THREE.Geometry(),
      materialArc = new THREE.LineBasicMaterial({ color: this.blue, linewidth: 2 }),
      radians = 270 * (Math.PI) / 180;

      for (let i = 0; i <= segmentCount; i++) {
        let theta = (i / segmentCount) * radians;
        geometryArc.vertices.push(
          new THREE.Vector3(Math.sin(theta) * (this.radiusInt-0.2), Math.cos(theta) * (this.radiusInt-0.2), 0.6),
          new THREE.Vector3(Math.sin(theta) * (this.radiusInt+0.8), Math.cos(theta) * (this.radiusInt+0.8), 0.6)
        );
      }

      materialArc.depthTest = false;
      let arcPar = new THREE.Line(geometryArc, materialArc);
      arcPar.position.x = 0;
      arcPar.rotateZ((180+45)*0.0175);
      arcPar.name = "arcPar";

      let arc = new THREE.Line(geometryArc, materialArc);
      arc.position.x = 0;
      arc.rotateZ(45*0.0175);
      arc.name = "arc";

      this.geoScene.scene.children[2] = arcPar;
      this.geoScene.scene.children[3] = arc;

      this.geoScene.scene.children[0].position.copy(new THREE.Vector3(0,0,0.6));
      this.geoScene.scene.children[1].position.copy(new THREE.Vector3(-42,0,0.6));
      this.geoScene.scene.children[2].position.copy(new THREE.Vector3(-42,0,0.6));
      this.geoScene.scene.children[3].position.copy(new THREE.Vector3(0,0,0.6));
    }
  }

  checkInput(){
    const checkAngle = (this.angle >= 0 && this.angle <= 180);
    const checkRadius = (this.radius >= 1 && this.radius <= 10);
    if (checkRadius && checkAngle) {
      this.radiusExt = this.radius * 2.5 + 7.5;
      this.radiusInt = this.radiusExt - 1;
      this.errorInputAngle = false;
      this.errorInputRadius = false;
      this.reDrawDefault();
      this.changeAngle();
    }else{
      if(!checkRadius) this.errorInputRadius = true;
      else this.errorInputRadius = false;
      if(!checkAngle) this.errorInputAngle = true;
      else this.errorInputAngle = false;
      this.showAngle = this.oldAngle;
    }
  }
}
