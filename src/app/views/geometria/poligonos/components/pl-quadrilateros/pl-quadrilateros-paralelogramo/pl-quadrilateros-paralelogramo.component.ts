import { Component, AfterViewInit, OnInit, ViewChild, DoCheck } from '@angular/core';
import { GeoSceneComponent } from '../../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

enum Relation {
  POS = 0,
  SIZE = 1,
}

@Component({
  selector: 'ifmath-pl-quadrilateros-paralelogramo',
  templateUrl: './pl-quadrilateros-paralelogramo.component.html',
  styleUrls: ['./pl-quadrilateros-paralelogramo.component.scss']
})
export class PlQuadrilaterosParalelogramoComponent implements OnInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  relation: Relation = Relation.POS;

  base: number = 7;
  height: number = 3;
  private diff: number = 2.5;
  angle: number = 30;
  private oldAngle: number = 30;
  errorInputBase: boolean = false;
  errorInputAngle: boolean = false;

  angle90 = false;

  sinAngle = Math.sin(this.angle / 180);

  private dragging: boolean = false; // Variável para controle do drag
  private dragged: string = ""; // Variavel para controle de qual objeto foi arrastado
  private currentIndex: any[] = []; // Geometria da cena a qual irá se mover

  // Raycaster da página, utilizado para o "clicar e arrastar"
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private insersects: THREE.Intersection[]; // Elementos que o evento do clique passa através

  // Posição do mouse normalizada
  private mousePos;

  buttons: Object[] = [
    { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
    { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
    { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
    { title: "Losango", route: "pl_quadrilateros_losango" },
    { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
  ];

  buttons_lock = [
    { title: 'Alterar posição da base', value: 0, id: 'pos'},
    { title: 'Alterar tamanho da base', value: 1, id: 'size'}
  ];

  vertexClick(relation){
    this.relation = relation;
    switch(relation){
      case Relation.POS:
        document.getElementById('pos').style.color = '#4683B4';
        document.getElementById('pos').style.backgroundColor = '#FFF';
        document.getElementById('size').style.color = '#FFF';
        document.getElementById('size').style.backgroundColor = '#4683B4';
        break;
      case Relation.SIZE:
        document.getElementById('size').style.color = '#4683B4';
        document.getElementById('size').style.backgroundColor = '#FFF';
        document.getElementById('pos').style.color = '#FFF';
        document.getElementById('pos').style.backgroundColor = '#4683B4';
        break;
    }
  }

  constructor() { }

  ngOnInit() {
    this.geoScene.fieldOfView = 7;
    registerLocaleData( pt );
  }

  ngAfterViewInit() {
    document.getElementById('pos').style.color = '#4683B4';
    document.getElementById('pos').style.backgroundColor = '#FFF';

    let squareVerticeGeometry = new THREE.PlaneGeometry(0.25, 0.25, 25, 25);

    this.geoScene.scene.children[1] = new THREE.Mesh(squareVerticeGeometry, new THREE.MeshBasicMaterial({ color: 0x444444 }));
    this.geoScene.scene.children[1].position.copy(new THREE.Vector3(-this.base/2+1, this.height/2, 0));
    this.geoScene.scene.children[1].name = 'vertex-topLeft';
    this.geoScene.scene.children[2] = new THREE.Mesh(squareVerticeGeometry, new THREE.MeshBasicMaterial({ color: 0x444444 }));
    this.geoScene.scene.children[2].position.copy(new THREE.Vector3(this.base/2+1, this.height/2, 0));
    this.geoScene.scene.children[2].name = 'vertex-topRight';
    this.geoScene.scene.children[3] = new THREE.Mesh(squareVerticeGeometry, new THREE.MeshBasicMaterial({ color: 0x444444 }));
    this.geoScene.scene.children[3].position.copy(new THREE.Vector3(this.base/2-1, -this.height/2, 0));
    this.geoScene.scene.children[3].name = 'vertex-bottomRight';
    this.geoScene.scene.children[4] = new THREE.Mesh(squareVerticeGeometry, new THREE.MeshBasicMaterial({ color: 0x444444 }));
    this.geoScene.scene.children[4].position.copy(new THREE.Vector3(-this.base/2-1, -this.height/2, 0));
    this.geoScene.scene.children[4].name = 'vertex-bottomLeft';

    this.drawAngle();
    this.drawParallelogram();
    this.drawHeightDashedLine(this.height/2, -this.height/2, false);

    this.renderOrder();
    this.geoScene.render();
  }

  ngDoCheck() {
    try{ this.geoScene.addDegreeSymbol(this.angle, 'degree') } catch{}
    this.sinAngle = Math.round(Math.sin(((this.angle * Math.PI) / 180) + Number.EPSILON) * 100) / 100; //Calculo Seno do Ângulo

    if(this.angle == 90) this.angle90 = true;
    else this.angle90 = false;
  }

  getIndex() {
    this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);

    if (this.insersects.length === 0) {
      this.currentIndex = null;
      return;
    }

    let arr: any[] = [];

    this.insersects.forEach(el => {
      if(el.object.name == "vertex-topRight" || el.object.name == "vertex-bottomLeft" 
      || el.object.name == "vertex-topLeft" || el.object.name == "vertex-bottomRight") {
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

  /**
 * Captura o evento de mouse move na cena
 * @param event evento do mouse
 */
  mouseMove(event: MouseEvent) {
    //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
    if (this.dragging && this.currentIndex !== null) {
      this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse

      // Move os objetos referentes a cada circunferencia em relação a posição do mouse
      if (this.currentIndex[0].object.name == "vertex-topLeft") this.dragged = "topLeft";
      else if (this.currentIndex[0].object.name == "vertex-topRight") this.dragged = "topRight";
      else if (this.currentIndex[0].object.name == "vertex-bottomRight") this.dragged = "bottomRight";
      else if (this.currentIndex[0].object.name == "vertex-bottomLeft") this.dragged = "bottomLeft";

      this.drawObjectsMouseInput();
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

  drawObjectsMouseInput(){
    if(this.relation === Relation.POS){
      if(this.dragged === 'topLeft' || this.dragged === 'topRight')
        this.diff = Math.sqrt((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2);
      else if(this.dragged === 'bottomLeft' || this.dragged === 'bottomRight')
        this.diff = Math.sqrt((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2);
    }else if(this.relation === Relation.SIZE){
      if(this.dragged === 'topLeft' || this.dragged === 'bottomLeft')
        this.diff = Math.sqrt((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x) ** 2);
      else if(this.dragged === 'topRight' || this.dragged === 'bottomRight')
        this.diff = Math.sqrt((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x) ** 2);
    }

    if(this.dragged === 'topLeft'){
      let mouseX = (this.mousePos.x <= 9 && this.mousePos.x >= -10) && (this.mousePos.x + this.diff <= 10),
          mouseY = this.mousePos.y >= 0.5 && this.mousePos.y <= 5;
          
      if(mouseX){
        if(this.relation === Relation.POS){
          this.geoScene.scene.children[1].position.x = this.mousePos.x;
          this.geoScene.scene.children[2].position.x = this.mousePos.x + this.diff;
        }else if(this.relation === Relation.SIZE && Math.sqrt((this.mousePos.x - this.geoScene.scene.children[2].position.x) ** 2) <= 10){
          if(this.geoScene.scene.children[1].position.x > this.geoScene.scene.children[4].position.x)
            this.diff *= -1;
          if(!(this.mousePos.x < this.geoScene.scene.children[1].position.x && this.geoScene.scene.children[4].position.x <= -10
          && this.geoScene.scene.children[1].position.x > this.geoScene.scene.children[4].position.x)){
            this.geoScene.scene.children[1].position.x = this.mousePos.x;
            this.geoScene.scene.children[4].position.x = this.mousePos.x + this.diff;
          }
        }
      }
      if(mouseY) this.geoScene.scene.children[1].position.y = this.mousePos.y, this.geoScene.scene.children[2].position.y = this.mousePos.y;
    }else if(this.dragged === 'topRight'){
      let mouseX = (this.mousePos.x <= 10 && this.mousePos.x >= -9) && (this.mousePos.x - this.diff >= -10),
          mouseY = this.mousePos.y >= 0.5 && this.mousePos.y <= 5;
      
      if(mouseX){
        if(this.relation === Relation.POS){
          this.geoScene.scene.children[2].position.x = this.mousePos.x;
          this.geoScene.scene.children[1].position.x = this.mousePos.x - this.diff;
        }else if(this.relation === Relation.SIZE && Math.sqrt((this.mousePos.x - this.geoScene.scene.children[1].position.x) ** 2) <= 10){
          if(this.geoScene.scene.children[2].position.x > this.geoScene.scene.children[3].position.x)
            this.diff *= -1;
          if(!(this.mousePos.x > this.geoScene.scene.children[2].position.x && this.geoScene.scene.children[3].position.x >= 10
          && this.geoScene.scene.children[2].position.x < this.geoScene.scene.children[3].position.x)){
            this.geoScene.scene.children[2].position.x = this.mousePos.x;
            this.geoScene.scene.children[3].position.x = this.mousePos.x + this.diff;
          }
        }
      }
      if(mouseY) this.geoScene.scene.children[1].position.y = this.mousePos.y, this.geoScene.scene.children[2].position.y = this.mousePos.y;
    }else if(this.dragged === 'bottomLeft'){
      let mouseX = (this.mousePos.x <= 9 && this.mousePos.x >= -10) && (this.mousePos.x + this.diff <= 10),
      mouseY = this.mousePos.y <= -0.5 && this.mousePos.y >= -5;
      
      if(mouseX){
        if(this.relation === Relation.POS){
          this.geoScene.scene.children[4].position.x = this.mousePos.x;
          this.geoScene.scene.children[3].position.x = this.mousePos.x + this.diff;
        }else if(this.relation === Relation.SIZE && Math.sqrt((this.mousePos.x - this.geoScene.scene.children[3].position.x) ** 2) <= 10){
          if(this.geoScene.scene.children[1].position.x < this.geoScene.scene.children[4].position.x)
            this.diff *= -1;
          if(!(this.mousePos.x < this.geoScene.scene.children[4].position.x && this.geoScene.scene.children[1].position.x <= -10
          && this.geoScene.scene.children[4].position.x > this.geoScene.scene.children[1].position.x)){
            this.geoScene.scene.children[4].position.x = this.mousePos.x;
            this.geoScene.scene.children[1].position.x = this.mousePos.x + this.diff;
          }
        }
      }
      if(mouseY) this.geoScene.scene.children[3].position.y = this.mousePos.y, this.geoScene.scene.children[4].position.y = this.mousePos.y;
    }else if( this.dragged === 'bottomRight'){
      let mouseX = (this.mousePos.x <= 10 && this.mousePos.x >= -9) && (this.mousePos.x - this.diff >= -10),
          mouseY = this.mousePos.y <= -0.5 && this.mousePos.y >= -5;
      
      if(mouseX){
        if(this.relation === Relation.POS){
          this.geoScene.scene.children[3].position.x = this.mousePos.x;
          this.geoScene.scene.children[4].position.x = this.mousePos.x - this.diff;
        }else if(this.relation === Relation.SIZE && Math.sqrt((this.mousePos.x - this.geoScene.scene.children[4].position.x) ** 2) <= 10){
          if(this.geoScene.scene.children[2].position.x < this.geoScene.scene.children[3].position.x)
            this.diff *= -1;
          if(!(this.mousePos.x > this.geoScene.scene.children[3].position.x && this.geoScene.scene.children[2].position.x >= 10
          && this.geoScene.scene.children[3].position.x < this.geoScene.scene.children[2].position.x)){
            this.geoScene.scene.children[3].position.x = this.mousePos.x;
            this.geoScene.scene.children[2].position.x = this.mousePos.x + this.diff;
          }
        }
      }
      if(mouseY) this.geoScene.scene.children[3].position.y = this.mousePos.y, this.geoScene.scene.children[4].position.y = this.mousePos.y;
    }

    if(this.geoScene.scene.children[1].position.x > this.geoScene.scene.children[3].position.x){
      if(this.relation === Relation.POS){
        if(this.dragged === 'topLeft' || this.dragged === 'topRight'){
          this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[1].position.x;
          this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[3].position.x - Math.abs(this.diff);
        }else if(this.dragged === 'bottomLeft' || this.dragged === 'bottomRight'){
          this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[3].position.x;
          this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[1].position.x + Math.abs(this.diff);
        }
      }else if(this.relation === Relation.SIZE){
        if(this.dragged === 'topLeft' || this.dragged === 'bottomLeft'){
          this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[1].position.x;
          this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[3].position.x + Math.abs(this.diff);
        }else if(this.dragged === 'topRight' || this.dragged === 'bottomRight'){
          this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[3].position.x;
          this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[1].position.x - Math.abs(this.diff);
        }
      }
    }else if(this.geoScene.scene.children[2].position.x < this.geoScene.scene.children[4].position.x){
      if(this.relation === Relation.POS){
        if(this.dragged === 'topLeft' || this.dragged === 'topRight'){
          this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[2].position.x;
          this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[4].position.x + Math.abs(this.diff);
        }else if(this.dragged === 'bottomLeft' || this.dragged === 'bottomRight'){
          this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[4].position.x;
          this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[2].position.x - Math.abs(this.diff);
        }
      }else if(this.relation === Relation.SIZE){
        if(this.dragged === 'topLeft' || this.dragged === 'bottomLeft'){
          this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[4].position.x;
          this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[2].position.x + Math.abs(this.diff);
        }else if(this.dragged === 'topRight' || this.dragged === 'bottomRight'){
          this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[2].position.x;
          this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[4].position.x - Math.abs(this.diff);
        }
      }
    }

    if(Math.sqrt(((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2)) < 1){
      if(this.dragged === 'topRight' || this.dragged === 'bottomRight')
        this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[2].position.x - 1,
        this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[3].position.x - 1;
      else if(this.dragged === 'topLeft' || this.dragged === 'bottomLeft')
        this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[1].position.x + 1,
        this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[4].position.x + 1;
    }

    if(this.geoScene.scene.children[1].position.x < -10) this.geoScene.scene.children[1].position.x = -10;
    else if(this.geoScene.scene.children[2].position.x > 10) this.geoScene.scene.children[2].position.x = 10;
    else if(this.geoScene.scene.children[3].position.x > 10) this.geoScene.scene.children[3].position.x = 10;
    else if(this.geoScene.scene.children[4].position.x < -10) this.geoScene.scene.children[4].position.x = -10;

    if(this.geoScene.scene.children[1].position.x > 9) this.geoScene.scene.children[1].position.x = 9;
    else if(this.geoScene.scene.children[2].position.x < -9) this.geoScene.scene.children[2].position.x = -9;
    else if(this.geoScene.scene.children[3].position.x < -9) this.geoScene.scene.children[3].position.x = -9;
    else if(this.geoScene.scene.children[4].position.x > 9) this.geoScene.scene.children[4].position.x = 9;

    if(this.dragged === 'topLeft' || this.dragged === 'topRight')
      this.base = Math.sqrt((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2);
    else if(this.dragged === 'bottomLeft' || this.dragged === 'bottomRight')
      this.base = Math.sqrt((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2);

    this.drawAngle();
    this.drawParallelogram();
    this.drawHeightDashedLine(this.geoScene.scene.children[1].position.y,this.geoScene.scene.children[4].position.y, true);

    this.geoScene.fromInput = false;

    this.renderOrder();
    this.geoScene.render();
  }

  drawAngle(){
    let a = new THREE.Vector2(
      this.geoScene.scene.children[4].position.x - this.geoScene.scene.children[1].position.x, 
      this.geoScene.scene.children[4].position.y - this.geoScene.scene.children[1].position.y
    );

    let d = new THREE.Vector2(
      this.geoScene.scene.children[4].position.x - this.geoScene.scene.children[3].position.x, 
      this.geoScene.scene.children[4].position.y - this.geoScene.scene.children[3].position.y
    );

    let da = d.x * a.x + d.y * a.y;
    let dMod = Math.sqrt(d.x ** 2 + d.y ** 2);
    let aMod = Math.sqrt(a.x ** 2 + a.y ** 2);

    let cos = da / (dMod * aMod);

    this.angle = Math.acos(cos) * 180 / Math.PI;
    let radiansAlpha = this.angle * (Math.PI / 180);
    let radiansBeta = (180-this.angle) * (Math.PI / 180);

    let alpha1 = new THREE.Group(), alpha2 = new THREE.Group();
    let beta1 = new THREE.Group(), beta2 = new THREE.Group();

    let geometryAngleA = new THREE.Geometry(),
      geometryAngleB = new THREE.Geometry(),
      segmentCount = 92,
      radius = 0.5,
      size = 0.55,
      dist = 0.27;
    if(this.base < 2 || this.height < 2) radius = 0.35, size = 0.43, dist = 0.2;  

    for (let i = 0; i <= segmentCount; i++) {
      let theta = ((i / segmentCount) * radiansAlpha) - (((segmentCount - i) / segmentCount) * radiansAlpha);
      theta /= 2;
      geometryAngleA.vertices.push(
        new THREE.Vector3(Math.sin(theta) * radius, -Math.cos(theta) * radius, 0)
      );
      if (i == 46) { // quando estiver no ponto ao centro do angulo
        const geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(0, 0, 0)); // adicionando vertice ao centro
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(theta) * (radius + dist), -Math.cos(theta) * (radius + dist), 0)); // adicionando vertice ao centro do angulo desenhado

        let line1 = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
        line1.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis

        const alphaL1 = new SpriteText('α', size, '#000000');
        alphaL1.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha

        alpha1.add(line1); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
        alpha1.add(alphaL1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
        alpha1.position.copy(this.geoScene.scene.children[4].position);

        let line2 = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
        line2.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis

        const alphaL2 = new SpriteText('α', size, '#000000');
        alphaL2.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha

        alpha2.add(line2); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
        alpha2.add(alphaL2); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
        alpha2.position.copy(this.geoScene.scene.children[2].position);
      }
    }
    
    for (let i = 0; i <= segmentCount; i++) {
      let theta = ((i / segmentCount) * radiansBeta) - (((segmentCount - i) / segmentCount) * radiansBeta);
      theta /= 2;
      geometryAngleB.vertices.push(
        new THREE.Vector3(Math.sin(theta) * radius, -Math.cos(theta) * radius, 0)
      );
      if (i == 46) { // quando estiver no ponto ao centro do angulo
        const geometryLine = new THREE.Geometry();
        geometryLine.vertices.push(new THREE.Vector3(0, 0, 0)); // adicionando vertice ao centro
        geometryLine.vertices.push(new THREE.Vector3(Math.sin(theta) * (radius + dist), -Math.cos(theta) * (radius + dist), 0)); // adicionando vertice ao centro do angulo desenhado

        let line1 = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
        line1.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis

        const betaL1 = new SpriteText('β', size, '#000000');
        betaL1.position.copy(geometryLine.vertices[1]); // passando o beta para o ultimo vertice da linha

        beta1.add(line1); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
        beta1.add(betaL1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
        beta1.position.copy(this.geoScene.scene.children[3].position);

        let line2 = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
        line2.visible = false; // a linha so serve como guia do beta, para ele poder ser rotacionado usando a Z axis

        const betaL2 = new SpriteText('β', size, '#000000');
        betaL2.position.copy(geometryLine.vertices[1]); // passando o beta para o ultimo vertice da linha

        beta2.add(line2); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
        beta2.add(betaL2); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
        beta2.position.copy(this.geoScene.scene.children[1].position);
      }
    }

    let rotationA = this.angle * 0.0175 + (180 - this.angle) * 0.00875;
    let rotationB = this.angle * 0.0175 + (180 - (this.angle - 180)) * 0.00875;

    let angle1 = new THREE.Line(geometryAngleA, new THREE.LineBasicMaterial({ color: 0x000000 }));
    let angle2 = new THREE.Line(geometryAngleA, new THREE.LineBasicMaterial({ color: 0x000000 }));

    angle1.position.copy(this.geoScene.scene.children[4].position);
    angle1.rotateZ(rotationA);
    alpha1.rotateZ(rotationA);

    angle2.position.copy(this.geoScene.scene.children[2].position);
    angle2.rotateZ(rotationA + 180 * 0.0175);
    alpha2.rotateZ(rotationA + 180 * 0.0175);

    let angle3 = new THREE.Line(geometryAngleB, new THREE.LineBasicMaterial({ color: 0x000000 }));
    let angle4 = new THREE.Line(geometryAngleB, new THREE.LineBasicMaterial({ color: 0x000000 }));

    angle3.position.copy(this.geoScene.scene.children[3].position);
    angle3.rotateZ(rotationB);
    beta1.rotateZ(rotationB);

    angle4.position.copy(this.geoScene.scene.children[1].position);
    angle4.rotateZ(rotationB + 180 * 0.0175);
    beta2.rotateZ(rotationB + 180 * 0.0175);

    let labelsGroup = new THREE.Group(), anglesGroup = new THREE.Group();
    anglesGroup.add(angle1, angle2, angle3, angle4);
    labelsGroup.add(alpha1, alpha2, beta1, beta2);
    
    this.geoScene.scene.children[6] = anglesGroup;
    this.geoScene.scene.children[9] = labelsGroup;

    this.angle = Math.round(this.angle);
    this.oldAngle = this.angle;
  }

  drawParallelogram(){
    let x1 = this.geoScene.scene.children[1].position.x, x4 = this.geoScene.scene.children[4].position.x;

    let parallelogram = new THREE.Group(),
        parallelogramLineGeometry = new THREE.Geometry(),
        material = new THREE.LineBasicMaterial({ color: 0x4683B4 });

    for (let i = -0.045; i <= 0.045; i += 0.015) {
      let mod = 1; if(x1 < x4) mod = -1;
      parallelogramLineGeometry.vertices.push(
        new THREE.Vector3(this.geoScene.scene.children[1].position.x+i, this.geoScene.scene.children[1].position.y-i*mod),
        new THREE.Vector3(this.geoScene.scene.children[2].position.x+i, this.geoScene.scene.children[2].position.y-i*mod),
        new THREE.Vector3(this.geoScene.scene.children[3].position.x+i, this.geoScene.scene.children[3].position.y-i*mod),
        new THREE.Vector3(this.geoScene.scene.children[4].position.x+i, this.geoScene.scene.children[4].position.y-i*mod),
        new THREE.Vector3(this.geoScene.scene.children[1].position.x+i, this.geoScene.scene.children[1].position.y-i*mod)
      );
    }

    let parallelogramLine = new THREE.Line(parallelogramLineGeometry, material);
    parallelogram.add(parallelogramLine);
    
    this.geoScene.scene.children[0] = parallelogram;

    let dist = Math.sqrt(
      (this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x) ** 2 + 
      (this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y) ** 2
    )/2;

    let ratio = dist/2/dist;

    let Ax = (1 - ratio) * this.geoScene.scene.children[4].position.x + ratio * this.geoScene.scene.children[1].position.x,
        Ay = (1 - ratio) * this.geoScene.scene.children[4].position.y + ratio * this.geoScene.scene.children[1].position.y;

    let theta = (20 - dist*1.5) * 0.0175; // angulo desejado * 0.0175 (mesma coisa que esta formula -> theta = (angulo / 360) * Math.PI * 2)
    if(this.base < 2 && this.height < 2) theta += 15 * 0.0175;
    //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
    let xrot = Math.cos(theta) * (Ax - this.geoScene.scene.children[4].position.x) - Math.sin(theta) * 
        (Ay - this.geoScene.scene.children[4].position.y) + this.geoScene.scene.children[4].position.x,
        yrot = Math.sin(theta) * (Ax - this.geoScene.scene.children[4].position.x) + Math.cos(theta) *
        (Ay - this.geoScene.scene.children[4].position.y) + this.geoScene.scene.children[4].position.y;

    let labelA = new SpriteText('a', 0.75, '#4683B4');
    labelA.position.copy(new THREE.Vector3(xrot, yrot, 0));

    let distance = Math.sqrt(((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2));
    let distancesRatio = distance /2 / distance;
    let B = (1 - distancesRatio) * this.geoScene.scene.children[4].position.x + distancesRatio * this.geoScene.scene.children[3].position.x;
    
    let labelB = new SpriteText('b', 0.75, '#4683B4');
    labelB.position.x = B;
    labelB.position.y = this.geoScene.scene.children[4].position.y - 0.5;

    let labels = new THREE.Group(); labels.add(labelA, labelB);

    this.geoScene.scene.children[7] = labels;
  }

  drawHeightDashedLine(b, B, calc){
    let heightDashedLineGeometry = new THREE.Geometry(), position;

    if(this.geoScene.scene.children[1].position.x > this.geoScene.scene.children[4].position.x)
      position = this.geoScene.scene.children[1].position.x;
    else position = this.geoScene.scene.children[4].position.x;

    heightDashedLineGeometry.vertices.push(
      new THREE.Vector3(position, b-0.045, 0),
      new THREE.Vector3(position, B+0.045, 0)
    );

    let dashed; dashed = new THREE.LineDashedMaterial({ color: 0x444444, linewidth: 0.2, dashSize: 0.2, gapSize: 0.2 });
    let line = new THREE.Line(heightDashedLineGeometry, dashed); line.computeLineDistances();
    if(this.angle >= 89 && this.angle <= 91) line.visible = false;

    this.geoScene.scene.children[5] = line;

    let distance = Math.sqrt(((this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y) ** 2));
    let distancesRatio = distance /2 / distance;
    let y = (1 - distancesRatio) * this.geoScene.scene.children[4].position.y + distancesRatio * this.geoScene.scene.children[1].position.y;

    let labelH = new SpriteText('h', 0.5, '#666');
    labelH.position.x = position + 0.25;
    labelH.position.y = y;
    if(this.height < 2) labelH.position.y = this.geoScene.scene.children[1].position.y + 0.35, labelH.position.x -= 0.25;

    this.geoScene.scene.children[8] = labelH;

    if(calc) this.height = Math.abs(B-b);
  }

  changeAngle(){
    let centerLeft = Math.sqrt(
      (this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x) ** 2 + 
      (this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y) ** 2
    )/2;

    let centerRight = Math.sqrt(
      (this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x) ** 2 + 
      (this.geoScene.scene.children[2].position.y - this.geoScene.scene.children[3].position.y) ** 2
    )/2;

    let ratioLeft = centerLeft/2/centerLeft;
    let ratioRight = centerRight/2/centerRight;

    let xLeft = (1 - ratioLeft) * this.geoScene.scene.children[4].position.x + ratioLeft * this.geoScene.scene.children[1].position.x,
        yLeft = (1 - ratioLeft) * this.geoScene.scene.children[4].position.y + ratioLeft * this.geoScene.scene.children[1].position.y,
        xRight = (1 - ratioRight) * this.geoScene.scene.children[3].position.x + ratioRight * this.geoScene.scene.children[2].position.x,
        yRight = (1 - ratioRight) * this.geoScene.scene.children[3].position.y + ratioRight * this.geoScene.scene.children[2].position.y;

    let theta = (this.angle - this.oldAngle) * 0.0175;

    //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
    let xrot = Math.cos(theta) * (this.geoScene.scene.children[1].position.x - xLeft) - Math.sin(theta) * 
        (this.geoScene.scene.children[1].position.y - yLeft) + xLeft,
        yrot = Math.sin(theta) * (this.geoScene.scene.children[1].position.x - xLeft) + Math.cos(theta) *
        (this.geoScene.scene.children[1].position.y - yLeft) + yLeft;
    let pos1 = new THREE.Vector3(xrot, yrot, 0);
    
    xrot = Math.cos(theta) * (this.geoScene.scene.children[2].position.x - xRight) - Math.sin(theta) * 
    (this.geoScene.scene.children[2].position.y - yRight) + xRight,
    yrot = Math.sin(theta) * (this.geoScene.scene.children[2].position.x - xRight) + Math.cos(theta) *
    (this.geoScene.scene.children[2].position.y - yRight) + yRight;
    let pos2 = new THREE.Vector3(xrot, yrot, 0);
    
    xrot = Math.cos(theta) * (this.geoScene.scene.children[3].position.x - xRight) - Math.sin(theta) * 
    (this.geoScene.scene.children[3].position.y - yRight) + xRight,
    yrot = Math.sin(theta) * (this.geoScene.scene.children[3].position.x - xRight) + Math.cos(theta) *
    (this.geoScene.scene.children[3].position.y - yRight) + yRight;
    let pos3 = new THREE.Vector3(xrot, yrot, 0);
    
    xrot = Math.cos(theta) * (this.geoScene.scene.children[4].position.x - xLeft) - Math.sin(theta) * 
    (this.geoScene.scene.children[4].position.y - yLeft) + xLeft,
    yrot = Math.sin(theta) * (this.geoScene.scene.children[4].position.x - xLeft) + Math.cos(theta) *
    (this.geoScene.scene.children[4].position.y - yLeft) + yLeft;
    let pos4 = new THREE.Vector3(xrot, yrot, 0);

    if(pos1.x > pos3.x || pos2.x < pos4.x){
      if(pos1.x > pos3.x){
        pos1.x =  pos3.x;
        pos2.x = pos1.x + this.base;
        pos4.x = pos3.x - this.base;
      }else if(pos2.x < pos4.x){
        pos2.x =  pos4.x;
        pos1.x = pos2.x - this.base;
        pos3.x = pos4.x + this.base;
      }
      pos1.y -= 0.5;
      pos2.y -= 0.5;
      pos3.y += 0.5;
      pos4.y += 0.5;
    }

    if(pos1.y > 10) pos1.y -= 1, pos2.y -= 1;
    if(pos4.y < -10) pos3.y += 1, pos4.y += 1;

    let height = Math.sqrt(((pos1.y - pos4.y) ** 2));
    if(height >= 1 && height <= 10){
      this.geoScene.scene.children[1].position.copy(pos1);
      this.geoScene.scene.children[2].position.copy(pos2);
      this.geoScene.scene.children[3].position.copy(pos3);
      this.geoScene.scene.children[4].position.copy(pos4);
      this.height = height;
      this.errorInputBase = false;
      try{ document.getElementById('err').classList.remove('alertMid') } catch{}
    }else if(height > 10){
      pos1.y -= 0.5, pos2.y -= 0.5;
      pos3.y += 0.5, pos4.y += 0.5;
      document.getElementById('err').classList.add('alertMid');
    }else document.getElementById('err').classList.add('alertMid');

    this.drawAngle();
    this.drawParallelogram();
    this.drawHeightDashedLine(this.height/2, -this.height/2, false);

    this.renderOrder();
    this.geoScene.render();
  }

  renderObjects(){
    if(this.base < 2){
      this.geoScene.scene.children[1].position.copy(new THREE.Vector3(-this.base/2+0.5, this.height/2, 0));
      this.geoScene.scene.children[3].position.copy(new THREE.Vector3(this.base/2-0.5, -this.height/2, 0));
      this.geoScene.scene.children[2].position.copy(new THREE.Vector3(this.base/2+0.5, this.height/2, 0));
      this.geoScene.scene.children[4].position.copy(new THREE.Vector3(-this.base/2-0.5, -this.height/2, 0));
    }else{
      this.geoScene.scene.children[1].position.copy(new THREE.Vector3(-this.base/2+1, this.height/2, 0));
      this.geoScene.scene.children[3].position.copy(new THREE.Vector3(this.base/2-1, -this.height/2, 0));
      this.geoScene.scene.children[2].position.copy(new THREE.Vector3(this.base/2+1, this.height/2, 0));
      this.geoScene.scene.children[4].position.copy(new THREE.Vector3(-this.base/2-1, -this.height/2, 0));
    }
    
    this.drawAngle();
    this.drawParallelogram();
    this.drawHeightDashedLine(this.height/2, -this.height/2, false);

    this.geoScene.fromInput = false;

    this.renderOrder();
    this.geoScene.render();
  }

  renderOrder(){
    this.geoScene.scene.children[1].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[2].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1;
  }

  checkInput(type){
    this.base = Math.round(this.base), this.angle = Math.round(this.angle);
    const angle = (this.angle > -1 && this.angle < 181);
    const baseHeight = (this.base >= 1 && this.base <= 10) &&  (this.height >= 1 && this.height <= 10);
    if(angle && baseHeight){
      this.errorInputAngle = false;
      this.errorInputBase = false;
      if(type === 'angle') this.changeAngle();
      else this.renderObjects();
    }else{
      if(angle) this.errorInputAngle = false;
      else this.errorInputAngle = true;
      if(baseHeight) this.errorInputBase = false;
      else this.errorInputBase = true;
    }
  }

}

/** CHILDREN INDEX
 * 0 - Paralelogramo Azul (Contorno)
 * 1 - Vertice Superior Esquerdo
 * 2 - Vertice Superior Direito
 * 3 - Vertice Inferior Direito
 * 4 - Vertice Inferior Esquerdo
 * 5 - Linha pontilhada altura
 * 6 - Angulos
 */