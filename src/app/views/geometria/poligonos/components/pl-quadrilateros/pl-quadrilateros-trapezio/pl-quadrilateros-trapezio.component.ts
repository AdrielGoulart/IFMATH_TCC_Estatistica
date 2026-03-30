import { Component, AfterViewInit, OnInit, ViewChild, DoCheck } from '@angular/core';
import { GeoSceneComponent } from '../../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

enum Relation {
  ISO = 0,
  ESC = 1,
  RET = 2,
  ERR = 3
}

enum ERR {
  QUAD = 0,
  RET = 1,
  PAR = 2
}

@Component({
  selector: 'ifmath-pl-quadrilateros-trapezio',
  templateUrl: './pl-quadrilateros-trapezio.component.html',
  styleUrls: ['./pl-quadrilateros-trapezio.component.scss']
})
export class PlQuadrilaterosTrapezioComponent implements AfterViewInit, OnInit {
  
  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  relation: Relation = Relation.ESC;
  private err: ERR = ERR.RET;

  baseMax: number = 10;
  baseMin: number = 5;
  height: number = 5;
  errorInput: boolean = false;

  private lockIsosceles: boolean = false;
  private lockRetangulo: boolean = false;
  private side: string = "left";
  public b1: string = "b";
  public b2: string = "B";

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

  //Botoes do menu da direita
  buttons_examples = [
    { title: 'Isósceles', value: 0 },
    { title: 'Escaleno ', value: 1 },
    { title: 'Retângulo', value: 2 }
  ];

  buttons_vertex = [
    { title: 'Modo Livre', value: 0, id: 'free'},
    { title: 'Travar Isósceles', value: 1, id: 'iso'},
    { title: 'Travar Retângulo', value: 2, id: 'ret'}
  ];

  loadExample(event: MouseEvent, relation) {
    event.preventDefault(); // Previne o comportamento padrão do evento
    this.relation = relation;
    this.baseMax = 10;
    this.baseMin = 5;
    this.height = 5;
    

    // Checagem do tipo da relação
    switch (this.relation) {
      case Relation.ISO:
        this.lockRetangulo = false;
        this.lockIsosceles = true;
        this.switchButtons('iso');
        this.side = "left";
        break;
      case Relation.ESC:
        this.baseMax = 9;
        this.baseMin = 4;
        this.lockIsosceles = false;
        this.lockRetangulo = false;
        this.switchButtons('free');
        break;
      case Relation.RET:
        this.lockRetangulo = true;
        this.lockIsosceles = false;
        this.side = "left";
        this.switchButtons('ret');
        break;
    }

    this.renderDefault();
  }

  lockState(event: MouseEvent, value) {
    event.preventDefault(); // Previne o comportamento padrão do evento

    // Checagem do tipo da relação
    switch (value) {
      case 0:
        this.lockIsosceles = false;
        this.lockRetangulo = false;
        this.switchButtons('free');
        break;
      case 1:
        this.lockIsosceles = true;
        this.lockRetangulo = false;
        this.relation = Relation.ISO;
        this.side = "left";
        this.switchButtons('iso');
        break;
      case 2:
        this.lockIsosceles = false;
        this.lockRetangulo = true;
        this.relation = Relation.RET;
        this.side = "left";
        this.switchButtons('ret');
        break;
    }
    this.renderObjects();
  }

  switchButtons(clicked){
    if(clicked === 'free'){
      document.getElementById('free').style.color = '#4683B4';
      document.getElementById('free').style.backgroundColor = '#FFF';
      document.getElementById('iso').style.color = '#FFF';
      document.getElementById('iso').style.backgroundColor = '#4683B4';
      document.getElementById('ret').style.color = '#FFF';
      document.getElementById('ret').style.backgroundColor = '#4683B4';
    }else if(clicked === 'iso'){
      document.getElementById('iso').style.color = '#4683B4';
      document.getElementById('iso').style.backgroundColor = '#FFF';
      document.getElementById('free').style.color = '#FFF';
      document.getElementById('free').style.backgroundColor = '#4683B4';
      document.getElementById('ret').style.color = '#FFF';
      document.getElementById('ret').style.backgroundColor = '#4683B4';
    }else if(clicked === 'ret'){
      document.getElementById('ret').style.color = '#4683B4';
      document.getElementById('ret').style.backgroundColor = '#FFF';
      document.getElementById('iso').style.color = '#FFF';
      document.getElementById('iso').style.backgroundColor = '#4683B4';
      document.getElementById('free').style.color = '#FFF';
      document.getElementById('free').style.backgroundColor = '#4683B4';
    }
  }

  constructor() { }

  ngOnInit() {
    this.geoScene.fieldOfView = 7;
    registerLocaleData( pt );
  }

  ngAfterViewInit() {
    this.renderDefault();
    document.getElementById('free').style.color = '#4683B4';
    document.getElementById('free').style.backgroundColor = '#FFF';
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

      // this.currentIndex[0].object.position.copy(this.mousePos);

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
    let evenR = Math.sqrt(( this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x) ** 2) < 1;

    if(this.dragged === 'topLeft'){
      if(this.lockIsosceles){
        let mouseX = this.mousePos.x <= -0.5 && this.mousePos.x >= -4.5;
        if(mouseX) this.geoScene.scene.children[1].position.x = this.mousePos.x, this.geoScene.scene.children[2].position.x = -this.mousePos.x;
      }else if(this.lockRetangulo){
        let mouseX = this.mousePos.x <= 3 && this.mousePos.x >= -5;
        if(mouseX) this.geoScene.scene.children[1].position.x = this.mousePos.x, this.geoScene.scene.children[4].position.x = this.mousePos.x;
      }else{
        let mouseX = this.mousePos.x <= 4 && this.mousePos.x >= -5;
        if(mouseX) this.geoScene.scene.children[1].position.x = this.mousePos.x;
      }
      let mouseY = this.mousePos.y >= 0.5 && this.mousePos.y <= 5;
      if(mouseY) this.geoScene.scene.children[1].position.y = this.mousePos.y, this.geoScene.scene.children[2].position.y = this.mousePos.y;
    }else if(this.dragged === 'topRight'){
      if(this.lockIsosceles){
        let mouseX = this.mousePos.x >= 0.5 && this.mousePos.x <= 4.5;
        if(mouseX) this.geoScene.scene.children[1].position.x = -this.mousePos.x, this.geoScene.scene.children[2].position.x = this.mousePos.x;
      }else if(this.lockRetangulo){
        let mouseX = this.mousePos.x >= -4 && this.mousePos.x <= 4.5;
        if(mouseX) this.geoScene.scene.children[2].position.x = this.mousePos.x;
      }else{
        let mouseX = this.mousePos.x >= -4 && this.mousePos.x <= 5;
        if(mouseX) this.geoScene.scene.children[2].position.x = this.mousePos.x;
      }
      let mouseY = this.mousePos.y >= 0.5 && this.mousePos.y <= 5;
      if(mouseY) this.geoScene.scene.children[1].position.y = this.mousePos.y, this.geoScene.scene.children[2].position.y = this.mousePos.y;
    }else if(this.dragged === 'bottomLeft'){
      if(this.lockIsosceles){
        let mouseX = this.mousePos.x <= -1 && this.mousePos.x >= -5;
        if(mouseX) this.geoScene.scene.children[3].position.x = -this.mousePos.x, this.geoScene.scene.children[4].position.x = this.mousePos.x;
      }else if(this.lockRetangulo){
        let mouseX = this.mousePos.x <= 3 && this.mousePos.x >= -5;
        if(mouseX) this.geoScene.scene.children[1].position.x = this.mousePos.x, this.geoScene.scene.children[4].position.x = this.mousePos.x;
      }else{
        let mouseX = this.mousePos.x <= 4 && this.mousePos.x >= -5;
        if(mouseX) this.geoScene.scene.children[4].position.x = this.mousePos.x;
      }
      let mouseY = this.mousePos.y <= -0.5 && this.mousePos.y >= -5;
      if(mouseY) this.geoScene.scene.children[3].position.y = this.mousePos.y, this.geoScene.scene.children[4].position.y = this.mousePos.y;
    }else if( this.dragged === 'bottomRight'){
      if(this.lockIsosceles){
        let mouseX = this.mousePos.x >= 1 && this.mousePos.x <= 5;
        if(mouseX) this.geoScene.scene.children[3].position.x = this.mousePos.x, this.geoScene.scene.children[4].position.x = -this.mousePos.x;
      }else if(this.lockRetangulo){
        let mouseX = this.mousePos.x >= -3 && this.mousePos.x <= 5;
        if(mouseX) this.geoScene.scene.children[3].position.x = this.mousePos.x;
      }else{
        let mouseX = this.mousePos.x >= -4 && this.mousePos.x <= 5;
        if(mouseX) this.geoScene.scene.children[3].position.x = this.mousePos.x;
      }
      let mouseY = this.mousePos.y <= -0.5 && this.mousePos.y >= -5;
      if(mouseY) this.geoScene.scene.children[3].position.y = this.mousePos.y, this.geoScene.scene.children[4].position.y = this.mousePos.y;
    }

    if(this.lockIsosceles){
      if(Math.sqrt(((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x) ** 2)) < 1){
        if(this.dragged === 'topLeft' || this.dragged === 'topRight'){
          this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[1].position.x - 1;
          this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[2].position.x + 1;
        }else if(this.dragged === 'bottomLeft' || this.dragged === 'bottomRight'){
          this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[4].position.x + 1;
          this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[3].position.x - 1;
        }
      }

      this.baseMin = this.geoScene.scene.children[2].position.x*2;
      this.baseMax = this.geoScene.scene.children[3].position.x*2;

      this.side = "left";

      if(this.baseMax > 10){
        this.baseMax = 10;
        this.geoScene.scene.children[4].position.x = -5, this.geoScene.scene.children[3].position.x = 5;
      }
      if(this.baseMin < 1){
        this.baseMin = 1;
        this.geoScene.scene.children[1].position.x = -0.5, this.geoScene.scene.children[2].position.x = 0.5;
      }
    }else if(this.lockRetangulo){
      if(Math.sqrt(((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x) ** 2)) < 1){
        if(this.dragged === 'topRight')
          this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[2].position.x + 1;
        else if(this.dragged === 'bottomRight')
          this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[3].position.x - 1;
      }
      if(Math.sqrt(((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2)) < 1){
        if(this.dragged === 'topRight' || this.dragged === 'bottomRight'){
          this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[2].position.x - 1;
          this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[2].position.x - 1;
        }
        else if(this.dragged === 'topLeft' || this.dragged === 'bottomLeft'){
          this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[1].position.x + 1;
          if(evenR) this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[4].position.x + 2;
        }
      }

      if(this.geoScene.scene.children[2].position.x > 4) this.geoScene.scene.children[2].position.x = 4;
      if(this.geoScene.scene.children[3].position.x > 5) this.geoScene.scene.children[3].position.x = 5;
      if(this.geoScene.scene.children[1].position.x < -5){
        this.geoScene.scene.children[1].position.x = -5;
        this.geoScene.scene.children[4].position.x = -5;
      }
      
      this.baseMin = Math.sqrt(((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2));
      this.baseMax = Math.sqrt(((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2));
      this.side = "left";
    }else{
      if(Math.sqrt(((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2)) < 1){
        if(this.dragged === 'topRight')
            this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[2].position.x - 1;
        else if(this.dragged === 'topLeft')
          this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[1].position.x + 1;
      }else if(Math.sqrt(((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2)) < 1){
        if(this.dragged === 'bottomRight')
            this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[3].position.x - 1;
        else if(this.dragged === 'bottomLeft')
          this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[4].position.x + 1;
      }

      this.baseMin = Math.sqrt(((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2));
      this.baseMax = Math.sqrt(((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2));

      this.trapezoidType();
    }

    this.drawTrapezoid();
    this.drawHeightDashedLine(this.geoScene.scene.children[1].position.y,this.geoScene.scene.children[4].position.y, true);

    this.renderOrder();
    this.geoScene.render();
  }

  renderObjects(){
    let x1 = this.geoScene.scene.children[1].position.x, x2 = this.geoScene.scene.children[2].position.x,
        x3 = this.geoScene.scene.children[3].position.x, x4 = this.geoScene.scene.children[4].position.x;

    if(Math.sqrt((x1 - x2) ** 2) > Math.sqrt((x3 - x4) ** 2) && (this.lockIsosceles || this.lockRetangulo)){
      let b1 = this.baseMin, b2 = this.baseMax;
      this.baseMin = b2, this.baseMax = b1;
    }
    
    this.geoScene.scene.children[1].position.copy(new THREE.Vector3(-this.baseMin/2, this.height/2, 0));
    this.geoScene.scene.children[2].position.copy(new THREE.Vector3(this.baseMin/2, this.height/2, 0));
    this.geoScene.scene.children[3].position.copy(new THREE.Vector3(this.baseMax/2, -this.height/2, 0));
    this.geoScene.scene.children[4].position.copy(new THREE.Vector3(-this.baseMax/2, -this.height/2, 0));
    
    if(this.lockRetangulo){
      let diff = Math.abs(this.geoScene.scene.children[1].position.x) - Math.abs(this.geoScene.scene.children[4].position.x);
      this.geoScene.scene.children[1].position.x += diff;
      this.geoScene.scene.children[2].position.x += diff;
    }

    this.trapezoidType();
    this.drawTrapezoid();
    this.drawHeightDashedLine(this.height/2, -this.height/2, false);

    this.renderOrder();
    this.geoScene.render();
  }

  renderDefault(){
    let squareVerticeGeometry = new THREE.PlaneGeometry(0.25, 0.25, 25, 25);

    this.geoScene.scene.children[1] = new THREE.Mesh(squareVerticeGeometry, new THREE.MeshBasicMaterial({ color: 0x444444 }));
    this.geoScene.scene.children[1].position.copy(new THREE.Vector3(-this.baseMin/2, this.height/2, 0));
    this.geoScene.scene.children[1].name = 'vertex-topLeft';
    this.geoScene.scene.children[2] = new THREE.Mesh(squareVerticeGeometry, new THREE.MeshBasicMaterial({ color: 0x444444 }));
    this.geoScene.scene.children[2].position.copy(new THREE.Vector3(this.baseMin/2, this.height/2, 0));
    this.geoScene.scene.children[2].name = 'vertex-topRight';
    this.geoScene.scene.children[3] = new THREE.Mesh(squareVerticeGeometry, new THREE.MeshBasicMaterial({ color: 0x444444 }));
    this.geoScene.scene.children[3].position.copy(new THREE.Vector3(this.baseMax/2, -this.height/2, 0));
    this.geoScene.scene.children[3].name = 'vertex-bottomRight';
    this.geoScene.scene.children[4] = new THREE.Mesh(squareVerticeGeometry, new THREE.MeshBasicMaterial({ color: 0x444444 }));
    this.geoScene.scene.children[4].position.copy(new THREE.Vector3(-this.baseMax/2, -this.height/2, 0));
    this.geoScene.scene.children[4].name = 'vertex-bottomLeft';

    if(this.relation === Relation.RET){
      this.geoScene.scene.children[1].position.x = -this.baseMin;
      this.geoScene.scene.children[2].position.x = 0;
    }else if(this.relation === Relation.ESC){
      this.geoScene.scene.children[1].position.x -= 0.5;
      this.geoScene.scene.children[2].position.x -= 0.5;
      this.geoScene.scene.children[3].position.x += 0.5;
      this.geoScene.scene.children[4].position.x += 0.5;
    }

    this.drawTrapezoid();
    this.drawHeightDashedLine(this.height/2, -this.height/2, false);

    this.renderOrder();
    this.geoScene.render();
  }

  drawTrapezoid(){
    let x1 = this.geoScene.scene.children[1].position.x, x2 = this.geoScene.scene.children[2].position.x,
        x3 = this.geoScene.scene.children[3].position.x, x4 = this.geoScene.scene.children[4].position.x;

    let trapezoid = new THREE.Group(),
        trapezoidLineGeometry = new THREE.Geometry(),
        material = new THREE.LineBasicMaterial({ color: 0x4683B4 });

    if(this.relation === Relation.ERR){
      material = new THREE.LineDashedMaterial({ color: 0x444444, dashSize: 0.2, gapSize: 0.2 });
      trapezoidLineGeometry.vertices.push(
        new THREE.Vector3(this.geoScene.scene.children[1].position.x, this.geoScene.scene.children[1].position.y),
        new THREE.Vector3(this.geoScene.scene.children[2].position.x, this.geoScene.scene.children[2].position.y),
        new THREE.Vector3(this.geoScene.scene.children[3].position.x, this.geoScene.scene.children[3].position.y),
        new THREE.Vector3(this.geoScene.scene.children[4].position.x, this.geoScene.scene.children[4].position.y),
        new THREE.Vector3(this.geoScene.scene.children[1].position.x, this.geoScene.scene.children[1].position.y)
      );
      let trapezoidLine = new THREE.Line(trapezoidLineGeometry, material);
      trapezoidLine.computeLineDistances(), trapezoid.add(trapezoidLine); 
    }else{
      for (let i = -0.045; i <= 0.045; i += 0.015) {
        let modY = 1, modX = 1, xMod = 1,
            cond = Math.sqrt((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2)
            < Math.sqrt((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2); 
        if(Math.sqrt((x1 - x2) ** 2) > Math.sqrt((x3 - x4) ** 2)) modY = -1;
        if(x1 < x4 && x2 < x3){
          if(cond) modX = -1;
          else xMod = -1;
        }
        else if(x1 > x4 && x2 > x3){
          if(!cond) modX = -1;
          else xMod = -1;
        }
          trapezoidLineGeometry.vertices.push(
            new THREE.Vector3(this.geoScene.scene.children[1].position.x+i*modX, this.geoScene.scene.children[1].position.y-i*modY),
            new THREE.Vector3(this.geoScene.scene.children[2].position.x-i*xMod, this.geoScene.scene.children[2].position.y-i*modY),
            new THREE.Vector3(this.geoScene.scene.children[3].position.x-i*xMod, this.geoScene.scene.children[3].position.y-i*modY),
            new THREE.Vector3(this.geoScene.scene.children[4].position.x+i*modX, this.geoScene.scene.children[4].position.y-i*modY),
            new THREE.Vector3(this.geoScene.scene.children[1].position.x+i*modX, this.geoScene.scene.children[1].position.y-i*modY)
          );
        }
        let trapezoidLine = new THREE.Line(trapezoidLineGeometry, material);
        trapezoid.add(trapezoidLine);
    }
    
    this.geoScene.scene.children[0] = trapezoid;

    let distance = Math.sqrt(((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2));
    let distancesRatio = distance /2 / distance;
    let b = (1 - distancesRatio) * this.geoScene.scene.children[2].position.x + distancesRatio * this.geoScene.scene.children[1].position.x;

    distance = Math.sqrt(((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2));
    distancesRatio = distance /2 / distance;
    let B = (1 - distancesRatio) * this.geoScene.scene.children[4].position.x + distancesRatio * this.geoScene.scene.children[3].position.x;

    let color = '#4683B4';
    if(this.relation === Relation.ERR) color = '#444444';

    let labelb = new SpriteText('b', 0.75, color);
    labelb.position.x = b;
    labelb.position.y = this.geoScene.scene.children[1].position.y + 0.5;
    
    let labelB = new SpriteText('B', 0.75, color);
    labelB.position.x = B;
    labelB.position.y = this.geoScene.scene.children[4].position.y - 0.5;

    let distTop = Math.sqrt(( this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2), 
        distBottom = Math.sqrt(( this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x) ** 2);

    if(distTop > distBottom){
      labelb.position.x = B;
      labelb.position.y = this.geoScene.scene.children[4].position.y - 0.5;
      labelB.position.x = b;
      labelB.position.y = this.geoScene.scene.children[1].position.y + 0.5;
      this.b1 = "B";
      this.b2 = "b";
    }else{
      this.b1 = "b";
      this.b2 = "B";
    }

    this.geoScene.scene.children[6] = labelb;
    this.geoScene.scene.children[7] = labelB;
  }

  drawHeightDashedLine(b, B, calc){
    let angleOrDashed, index, i,
        x1 = this.geoScene.scene.children[1].position.x, x2 = this.geoScene.scene.children[2].position.x,
        x3 = this.geoScene.scene.children[3].position.x, x4 = this.geoScene.scene.children[4].position.x;

    if(x1 < x4) index = 1, i = 4;
    else index = 4, i = 1;

    if(this.relation === Relation.RET){
      let size = 0.5;
      if(this.height === 1) size = 0.25;
      let geometryAngle = new THREE.Geometry();
      if(this.side === "left"){
        geometryAngle.vertices.push(
          new THREE.Vector3(this.geoScene.scene.children[4].position.x+size+0.05, this.geoScene.scene.children[4].position.y+0.05, 0),
          new THREE.Vector3(this.geoScene.scene.children[4].position.x+size+0.05, this.geoScene.scene.children[4].position.y+size+0.05, 0),
          new THREE.Vector3(this.geoScene.scene.children[4].position.x+0.05, this.geoScene.scene.children[4].position.y+size+0.05, 0)
        );
      }else if(this.side === "right"){
        geometryAngle.vertices.push(
          new THREE.Vector3(this.geoScene.scene.children[3].position.x-size-0.05, this.geoScene.scene.children[3].position.y+0.05, 0),
          new THREE.Vector3(this.geoScene.scene.children[3].position.x-size-0.05, this.geoScene.scene.children[3].position.y+size+0.05, 0),
          new THREE.Vector3(this.geoScene.scene.children[3].position.x-0.05, this.geoScene.scene.children[3].position.y+size+0.05, 0)
        );
      }
      
      let angleOutline = new THREE.Line(geometryAngle, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
  
      let angleDotGeometry = new THREE.CircleGeometry(size/5, 30);
      let angleDot = new THREE.Mesh(angleDotGeometry, new THREE.MeshBasicMaterial({ color: 0x000000 }));
  
      let distance = Math.sqrt((
        (geometryAngle.vertices[0].x - geometryAngle.vertices[2].x) ** 2 + (geometryAngle.vertices[0].y - geometryAngle.vertices[2].y) ** 2
      ));
      let distancesRatio = distance/2 / distance;
  
      let x = (1 - distancesRatio) * geometryAngle.vertices[2].x + distancesRatio * geometryAngle.vertices[0].x, 
          y = (1 - distancesRatio) * geometryAngle.vertices[2].y + distancesRatio * geometryAngle.vertices[0].y;
      angleDot.position.copy(new THREE.Vector3(x,y,0));
  
      let angle = new THREE.Group();
      angle.add(angleOutline, angleDot);
      angleOrDashed = angle;
    }else{
      let heightDashedLineGeometry = new THREE.Geometry();

      heightDashedLineGeometry.vertices.push(
        new THREE.Vector3(this.geoScene.scene.children[i].position.x, b-0.045, 0),
        new THREE.Vector3(this.geoScene.scene.children[i].position.x, B+0.045, 0)
      );
  
      let dashed; dashed = new THREE.LineDashedMaterial({ color: 0x444444, linewidth: 0.2, dashSize: 0.2, gapSize: 0.2 });
      angleOrDashed = new THREE.Line(heightDashedLineGeometry, dashed); angleOrDashed.computeLineDistances();
    }

    let dark = false;
    
    if((x1 > x3 || x2 < x4) && this.relation === Relation.ESC){
      let geometryLine = new THREE.Geometry();
      geometryLine.vertices.push(
        new THREE.Vector3(this.geoScene.scene.children[index].position.x - 0.5, b+0.1, 0),
        new THREE.Vector3(this.geoScene.scene.children[index].position.x - 0.3, b+0.1, 0),
        new THREE.Vector3(this.geoScene.scene.children[index].position.x - 0.4, b+0.1, 0),
        new THREE.Vector3(this.geoScene.scene.children[index].position.x - 0.4, B-0.1, 0),
        new THREE.Vector3(this.geoScene.scene.children[index].position.x - 0.5, B-0.1, 0),
        new THREE.Vector3(this.geoScene.scene.children[index].position.x - 0.3, B-0.1, 0)
      );
      angleOrDashed = new THREE.Line(geometryLine, new THREE.LineBasicMaterial({ color: 0x000000 }));
      dark = true;
    }

    this.geoScene.scene.children[5] = angleOrDashed;

    let distance = Math.sqrt(((this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y) ** 2));
    let distancesRatio = distance /2 / distance;
    let y = (1 - distancesRatio) * this.geoScene.scene.children[4].position.y + distancesRatio * this.geoScene.scene.children[1].position.y;

    let labelH = new SpriteText('h', 0.5, '#666');
    labelH.position.x = this.geoScene.scene.children[i].position.x + 0.25;
    if(this.relation === Relation.RET){
      if(this.side === "left") labelH.position.x = this.geoScene.scene.children[4].position.x -0.375;
      else if(this.side === "right") labelH.position.x = this.geoScene.scene.children[3].position.x +0.375;
    }
    labelH.position.y = y;

    if(dark){
      labelH = new SpriteText('h', 0.5, '#000');
      labelH.position.x = this.geoScene.scene.children[index].position.x - 0.7;
      labelH.position.y = y;
    }

    this.geoScene.scene.children[8] = labelH;

    if(calc && this.err !== ERR.QUAD) this.height = Math.abs(B-b);
    if(this.relation === Relation.ERR){
      this.geoScene.scene.children[5].visible = false;
      this.geoScene.scene.children[8].visible = false;
    }else this.err = 3;
  }

  trapezoidType(){
    let distXR = Math.sqrt(( this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x) ** 2), 
        distXL = Math.sqrt(( this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x) ** 2),
        base = Math.sqrt(( this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x) ** 2),
        height = Math.sqrt(( this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y) ** 2);
    if(Math.abs(this.baseMax - this.baseMin) > 0.025){

      let dist23 = Math.sqrt(
        ((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x) ** 2 + (this.geoScene.scene.children[2].position.y - this.geoScene.scene.children[3].position.y) ** 2)
      );
      let dist14 = Math.sqrt(
        ((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x) ** 2 + (this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y) ** 2)
      );

      if(distXL < 0.025) this.side = "left", this.relation = Relation.RET;
      else if(distXR < 0.025) this.side = "right", this.relation = Relation.RET;
      else if(Math.abs(dist14 - dist23) < 0.005) this.relation = Relation.ISO;
      else this.relation = Relation.ESC;
    }else{
      if(distXR <= 0.025){
        if(Math.abs(base - height) > 0.025) this.err = ERR.RET;
        else this.err = ERR.QUAD, this.baseMax = this.height;
      }else if(distXR > 0.05 && distXL > 0.025) this.err = ERR.PAR;
      this.baseMin = this.baseMax;
      this.relation = Relation.ERR;
    }
  }

  renderOrder(){
    this.geoScene.scene.children[1].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[2].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 1;
    this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1;
  }

  checkInput(input){
    this.baseMax = Math.round(this.baseMax), this.baseMin = Math.round(this.baseMin);
    if((this.baseMax >= 1 && this.baseMax <= 10) && (this.baseMin >= 1 && this.baseMin <= 10) && (this.height >= 1 && this.height <= 10)){
      let x1 = this.geoScene.scene.children[1].position.x, x2 = this.geoScene.scene.children[2].position.x,
          x3 = this.geoScene.scene.children[3].position.x, x4 = this.geoScene.scene.children[4].position.x,
          toleranceL = Math.sqrt((x1 - x4)**2) < 0.05,  toleranceR = Math.sqrt((x2 - x3)**2) < 0.05;
      if(toleranceL && toleranceR){
        if(input === 'min'){
          if(this.baseMin < 9) this.baseMax += 1;
          else this.baseMin = 9, this.baseMax = 10;
        }else if(input === 'max'){
          if(this.baseMax > 2) this.baseMin -= 1;
          else this.baseMin = 1, this.baseMax = 2;
        }
      }
      this.errorInput = false;
      this.renderObjects();
    }else this.errorInput = true;
  }

}

/** CHILDREN INDEX
 * 0 - Trapezio Azul (Contorno)
 * 1 - Vertice Superior Esquerdo
 * 2 - Vertice Superior Direito
 * 3 - Vertice Inferior Direito
 * 4 - Vertice Inferior Esquerdo
 * 5 - Linha Pontilhada da Alura / Simbolo de Angulo Reto
 */

 /* Basicamente isso ai:
                  b
          [1]-----------[2]
          /       .       \
         /        . h      \
        /         .         \
      [4]-------------------[3]
                  B
*/ 