import { Component, OnInit, ViewChild } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'ifmath-pl-n-lados',
  templateUrl: './pl-n-lados.component.html',
  styleUrls: ['./pl-n-lados.component.scss']
})
export class PlNLadosComponent implements OnInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  private add = false;
  type = 'not closed';
  private vertices: THREE.Object3D[] = [];
  private lines: THREE.Object3D[] = [];
  private intersect = false;

  polygon = '';

  private dragging: boolean = false; // Variável para controle do drag
  private currentIndex: any[] = []; // Geometria da cena a qual irá se mover

  // Raycaster da página, utilizado para o "clicar e arrastar"
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private insersects: THREE.Intersection[]; // Elementos que o evento do clique passa através

  // Posição do mouse normalizada
  private mousePos;


  constructor() { }

  ngOnInit() {
    this.geoScene.fieldOfView = 7;
    registerLocaleData( pt );
  }

  getIndex() {
    this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);

    if (this.insersects.length === 0) {
      this.currentIndex = null;
      this.add = true;
      return;
    }

    let arr: any[] = [];

    this.insersects.forEach(el => {
      if(el.object.name.charAt(0) == 'v') {
        arr.push(el);
        this.add = false;
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
      this.currentIndex[0].object.position.copy(this.mousePos);
      this.drawLines();
    }
  }

  mouseDown(event: MouseEvent) {
    event.preventDefault(); // previne o comportamento padrão do evento
    this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
    this.getIndex(); // captura o objeto que foi clicado
    this.dragging = true;

    if(event.which === 1){ 
      if(this.add) this.addVertex();
    }else if(event.which === 3) this.removeVertex();
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

  addVertex(){
    let vertex = new THREE.Mesh(new THREE.CircleGeometry(0.15, 25), new THREE.MeshBasicMaterial({ color: 0x4683B4 }));
    vertex.position.copy(this.mousePos), vertex.name = "v"+this.vertices.length, this.vertices.push(vertex);
    this.dragging = false, this.geoScene.scene.add(vertex), this.drawLines();
  }

  removeVertex(){
    try{
      this.geoScene.scene.remove(this.currentIndex[0].object);
      this.vertices.splice(parseInt(this.currentIndex[0].object.name.substring(1)), 1);
      let arr = []; this.vertices.forEach(element => { element.name = "v"+arr.length, arr.push(element) });
      this.vertices = arr, this.dragging = false, this.drawLines();
    }catch{}
  }

  removePoints(){
    try{
      while(this.geoScene.scene.children.length){
        this.geoScene.scene.remove(this.geoScene.scene.children[0]);
      }
      this.vertices = [];
      this.type = 'not closed';
      this.geoScene.render();
    }catch{}
  }

  drawLines(){
    this.lines.forEach(element => { this.geoScene.scene.remove(element) });
    this.lines = [];
    this.type = 'concave';
    if(this.vertices.length > 2){
      for (let i = 0; i < this.vertices.length; i++) {
        let geometry = new THREE.Geometry(), name = '';
        try{
          geometry.vertices.push(this.vertices[i].position, this.vertices[i+1].position);
          name = i + '-' + (i+1);
        }catch{
          geometry.vertices.push(this.vertices[i].position, this.vertices[0].position);
          name = i + '-0';
        }
        let line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x000000 }));
        line.name = name, this.lines.push(line);
        this.geoScene.scene.add(line);
      }
    }else this.type = 'not closed';

    let lines: THREE.Vector2[] = [];
    for(let i = 0; i < this.vertices.length; i++){
      if(i+1 < this.vertices.length) lines.push(new THREE.Vector2(i,i+1));
      else lines.push(new THREE.Vector2(i,0));
    }
    if(this.vertices.length === 3){
      let res1 = this.geoScene.lineCross(
        this.vertices[0].position.x, this.vertices[0].position.y,
        this.vertices[1].position.x, this.vertices[1].position.y,
        this.vertices[2].position.x, this.vertices[2].position.y, 0.025
      ), res2 = this.geoScene.lineCross(
        this.vertices[1].position.x, this.vertices[1].position.y,
        this.vertices[0].position.x, this.vertices[0].position.y,
        this.vertices[2].position.x, this.vertices[2].position.y, 0.025
      ), res3 = this.geoScene.lineCross(
        this.vertices[2].position.x, this.vertices[2].position.y,
        this.vertices[0].position.x, this.vertices[0].position.y,
        this.vertices[1].position.x, this.vertices[1].position.y, 0.025
      );
      if(res1 || res2 || res3) this.type = 'crossed lines';
    }else{
      for(let i = 0; i < this.vertices.length; i++){
        for(let j = i+2; j < this.vertices.length; j++){
          this.toCompare(lines[i], lines[j]);
          if(this.intersect) break;
        }
        if(this.intersect){
          this.type = 'crossed lines'
          break;
        }
      }
    }

    if(this.type === 'concave'){
      // http://csharphelper.com/blog/2014/07/determine-whether-a-polygon-is-convex-in-c/#:~:text=To%20see%20if%20a%20polygon,then%20the%20polygon%20is%20convex.
      let min = false, max = false;
      for(let i = 0; i < lines.length; i++){
        let A, B, C;
        B = this.vertices[lines[i].x].position;
        try{
          A = this.vertices[lines[i-1].x].position; 
          C = this.vertices[lines[i+1].x].position; 
        }catch{
          if(i === 0){
            A = this.vertices[lines[lines.length-1].x].position; 
            C = this.vertices[lines[i+1].x].position; 
          }else{
            A = this.vertices[lines[i-1].x].position; 
            C = this.vertices[lines[0].x].position;
          }
        }

        let crossProduct = this.crossProductLength(A.x, A.y, B.x, B.y, C.x, C.y);
        if (crossProduct < 0) min = true;
        else if (crossProduct > 0) max = true;

        if (min && max){
          this.type = 'convex';
          break;
        }
      }
    }

    this.getPolygon();
    this.geoScene.render();
  }

  crossProductLength(Ax, Ay, Bx, By, Cx, Cy){
    // Get the vectors' coordinates.
    let BAx = Ax - Bx;
    let BAy = Ay - By;
    let BCx = Cx - Bx;
    let BCy = Cy - By;

    // Calculate the Z coordinate of the cross product.
    return (BAx * BCy - BAy * BCx);
  }

  toCompare(one, two){
    this.lineIntersection(
      this.vertices[one.x].position, this.vertices[one.y].position, 
      this.vertices[two.x].position, this.vertices[two.y].position
    );
  }

  lineIntersection(startOne, endOne, startTwo, endTwo) {
    // sauce ( ͡° ͜ʖ ͡°) -> http://jsfiddle.net/justin_c_rounds/Gd2S2/light/
    let denominator, a, b, numeratorOne, numeratorTwo;
    denominator = ((endTwo.y - startTwo.y) * (endOne.x - startOne.x)) - ((endTwo.x - startTwo.x) * (endOne.y - startOne.y));

    if (denominator === 0){
      this.intersect = false;
      return
    }

    a = startOne.y - startTwo.y;
    b = startOne.x - startTwo.x;

    numeratorOne = ((endTwo.x - startTwo.x) * a) - ((endTwo.y - startTwo.y) * b);
    numeratorTwo = ((endOne.x - startOne.x) * a) - ((endOne.y - startOne.y) * b);

    a = numeratorOne / denominator;
    b = numeratorTwo / denominator;

    if((a > 0 && a < 1) && (b > 0 && b < 1)) this.intersect = true;
    else this.intersect = false;
  }

  getPolygon() {
    if (this.vertices.length === 3) this.polygon = 'Triângulo: '; else if (this.vertices.length === 4) this.polygon = 'Quadrilátero: ';
    else if (this.vertices.length === 5) this.polygon = 'Pentágono: '; else if (this.vertices.length === 6) this.polygon = 'Hexágono: ';
    else if (this.vertices.length === 7) this.polygon = 'Heptágono: '; else if (this.vertices.length === 8) this.polygon = 'Octógono: ';
    else if (this.vertices.length === 9) this.polygon = 'Eneágono: '; else if (this.vertices.length === 10) this.polygon = 'Decágono: ';
    else if (this.vertices.length === 11) this.polygon = 'Undecágono: '; else if (this.vertices.length === 12) this.polygon = 'Dodecágono: ';
    else if (this.vertices.length === 13) this.polygon = 'Tridecágono: '; else if (this.vertices.length === 14) this.polygon = 'Tetradecágono: ';
    else if (this.vertices.length === 15) this.polygon = 'Pentadecágono: '; else if (this.vertices.length === 16) this.polygon = 'Hexadecágono: ';
    else if (this.vertices.length === 17) this.polygon = 'Heptadecágono: '; else if (this.vertices.length === 18) this.polygon = 'Octadecágono: ';
    else if (this.vertices.length === 19) this.polygon = 'Eneadecágono: '; else if (this.vertices.length === 20) this.polygon = 'Icoságono: ';
    else if (this.vertices.length === 21) this.polygon = 'Hendecoságono: '; else if (this.vertices.length === 22) this.polygon = 'Docoságono: ';
    else if (this.vertices.length > 22) this.polygon = '';
  }

}