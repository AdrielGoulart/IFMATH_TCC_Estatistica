import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  ContentChildren
} from '@angular/core';
import * as THREE from 'three';
import "./js/EnableThreeExamples";
import "three/examples/js/controls/OrbitControls";
import "three/examples/js/loaders/ColladaLoader";
import { AbstractObject3D } from './directives/abstract/abstract-object-3d';
import { Scene, Line3, Object3D } from 'three';
import SpriteText from 'three-spritetext';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { start } from 'repl';
import { last } from '@angular/router/src/utils/collection';
import { p } from '@angular/core/src/render3';
import { posix } from 'path';

@Component({
  selector: 'geo-scene',
  templateUrl: './geo-scene.component.html',
  styleUrls: ['./geo-scene.component.scss']
})
export class GeoSceneComponent implements AfterViewInit {

  @Input('sharedData') data: any;

  @Input('pointsLimit') pointsLimit: any;

  @Input('hasPerspective') hasPerspective: any;

  @Input('hasOrbitControls') hasOrbitControls: any;

  @Input('hasClickHandler') hasClickHandler: any;

  @Input('hasLabel') hasLabel: boolean = false;

  @Input('hasPoint') hasPoint: boolean = false;

  @Input ('hasLine') hasLine: boolean = false;

  @Input ('hasPointLine') hasPointLine: boolean = false;

  @Input ('shorten') shorten: boolean = false;

  @Input('pointToDelete') pointsToDelete: number = 0;

  private labels : string = 'A';

  @ContentChildren(AbstractObject3D, {
    descendants: false
  })
  childNodes: QueryList<AbstractObject3D<THREE.Object3D>>;

  private renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  public cameraTarget: THREE.Vector3;
  public scene: THREE.Scene;

  public fieldOfView: number = 45;
  public nearClippingPane: number = 1;
  public farClippingPane: number = 1000;

  public controls: THREE.OrbitControls;

  private arrayLabel = [];

  public equation = [];

  public lineLenght: any;
  public reverseLine: boolean = false;
  public extraLabel: boolean = false;
  public points = [];
  public fromInput: boolean = false;
  public fromRightbar: boolean = false;

  public defaultObjects: any = [];
  public returnFromGeoScene: boolean = false;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  constructor() {

    this.data = {
      intersects: [],
      scene: {}
    }

    this.render = this.render.bind(this);
    this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
  }

  public get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  public getCamera() : THREE.Camera {
    return this.camera;
  }

  private createScene() {
    this.scene = new THREE.Scene();
  }

  private onModelLoadingCompleted(collada) {
    let modelScene = collada.scene;
    this.scene.add(modelScene);
    this.render();
  }

  private createCamera() {
    let aspectRatio = this.getAspectRatio();

    if(this.shorten) this.fieldOfView = 12;

    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );

    this.camera.position.set(0, 0, 100);
  }

  private getAspectRatio(): number {
    let height = this.canvas.clientHeight;

    if (height === 0) {
      return 0;
    }

    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRendering() {
    this.addControls();
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.autoClear = true;

    this.childNodes.forEach(child => {
      this.scene.add(child.getObject());
    });

    let component: GeoSceneComponent = this;

    (function render() {
      component.render();
    }());
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public addControls() {
    if (this.hasPerspective && this.hasOrbitControls) {
      this.controls = new THREE.OrbitControls(this.camera, this.canvas);
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed = 1.2;
      this.controls.addEventListener('change', this.render);
      this.controls.update();
      this.scene.add(new THREE.AxesHelper(200));
    }
  }

  public addPoint(pos) {
    let color;
    if(this.extraLabel) color = 0x00ff00;
    else color = 0x0000ff;

    let size = 1;
    if (this.shorten) size = 0.35;

    const geometry = new THREE.CircleGeometry(size, 10);
    const material = new THREE.MeshBasicMaterial({ color });
    const circle = new THREE.Mesh(geometry, material);

    circle.position.copy(pos);
    circle.name = "circle";

    this.scene.add(circle);
  }

  /**
   * função para achar equação geral da reta
   * @link https://mundoeducacao.bol.uol.com.br/matematica/equacao-fundamental-reta.htm
   * */
  public findEqByTwoPoints(x1 : number,x2 : number, y1 : number, y2 : number){
    let m : number = (y2 - y1) / (x2 - x1);
    let b : number = y1 - m*x1;
    this.equation[0] = m;
    this.equation[1] = b;
    return this.equation;
  }

  public lineCross(x, y, x1, y1, x2, y2, precision) {
    let m = (y2 - y1) / (x2 - x1);
    return Math.abs((m * (x - x1)) - (y - y1)) <= precision;
  }

  public setPointsToLine(m: number, b: number, x1 : number, x2 : number){
    m = this.equation[0];
    b = this.equation[1];
    let y1 = m*x1 + b;
    let y2 = m*x2 + b;
    let pointsY: number[] = [y1,y2];
    return pointsY;
  }

  /* EVENTS */

  public onMouseDown(event: MouseEvent) {

    if (this.hasPoint == true) {
      this.needPoint(event);
    }

  }

  private findAllObjects(pred: THREE.Object3D[], parent: THREE.Object3D) {
    if (parent.children.length > 0) {
      parent.children.forEach((i) => {
        pred.push(i);
        this.findAllObjects(pred, i);
      });
    }
  }

  private needPoint(event: MouseEvent) {

    this.deletePoints(this.pointsToDelete);

    if(this.fromRightbar){
      this.removeAll();
      this.defaultObjects.forEach(element => {
        this.scene.add(element);
        this.fromRightbar = false;
        this.fromInput = true;
      });
    }

    event.preventDefault();

    let mouse = new THREE.Vector2();
    mouse.x = (event.offsetX / this.canvas.clientWidth) * 2 - 1;
    mouse.y = - (event.offsetY / this.canvas.clientHeight) * 2 + 1;

    let vector = new THREE.Vector3(
      mouse.x, mouse.y, 0.5
    );

    vector.unproject(this.camera);

    let direction = vector.sub(this.camera.position).normalize();
    let distance = - this.camera.position.z / direction.z;
    let pos = this.camera.position.clone().add(direction.multiplyScalar(distance));

    this.checkLabel(pos);
    if(this.hasPointLine) this.drawPointLine(pos, false, false);

    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);
    let intersects = raycaster.intersectObjects(this.scene.children);
    this.data.intersects = intersects;

    this.addPoint(pos);

    //Condição para inserir linha
    if (this.hasLine == true && this.scene.children.length > 5) {
      //Pontos passados pelo usuário
      let x1 = this.scene.children[4].position.x;
      let x2 = this.scene.children[6].position.x;
      let y1 = this.scene.children[4].position.y;
      let y2 = this.scene.children[6].position.y;

      this.findEqByTwoPoints(x1,x2,y1,y2);
      //Traçar reta onde os Xs dos pontos valem 200 para ficar maior que a cena
      let py1 = this.setPointsToLine(this.equation[0],this.equation[1],200,-200)[0];
      let py2 = this.setPointsToLine(this.equation[0],this.equation[1],200,-200)[1];
      let material = new THREE.LineBasicMaterial({
        color: 0xff0000
      });

      let geometry = new THREE.Geometry();

      geometry.vertices.push(
        new THREE.Vector3(200 , py1, 0 ),
        new THREE.Vector3(-200 , py2, 0)
      );

      let line = new THREE.Line( geometry, material );
      this.scene.add( line );

      try{
        this.checkReta(x1,x2,y1,y2,py1,py2);
      }catch(err){
        this.deletePoints(this.pointsToDelete);
        this.removeAll();
        this.defaultObjects.forEach(element => {
          this.scene.add(element);
        });
        this.labels = 'A';
        this.extraLabel = false;
        this.hasPoint = false;
        document.getElementById("err").style.animation = 'fade 3s linear';
        setTimeout(() => {
          document.getElementById("err").style.animation = '';
          this.hasPoint = true;
        }, 3000);
      }
    }
    this.render();
    this.returnFromGeoScene = true;
  }

  addLabel(char, pos, color){
    if(this.reverseLine){
      pos.x /= 2;
      pos.y /= 2;
      this.reverseLine = false;
    }

    let size = 5;
    if(this.shorten) size = 2;

    let lineLabel = new SpriteText(char, size, color);
    lineLabel.position.x = pos.x;
    lineLabel.position.y = pos.y;
    lineLabel.name = "label";
    this.scene.add(lineLabel);
  }

  public checkLabel(pos: any) {
    if (this.hasLabel == true) {
      if(this.fromInput){
        this.arrayLabel = [];
        this.labels = 'A';
        this.fromInput = false;
      }
      let color, size;
      if(this.extraLabel){
        color = 'green';
        this.extraLabel = false;
      }
      else color = 'blue';
      if(this.hasPoint) size = 5;
      else size = 7;

      if(this.shorten) size -= 3;

      // adiciona label ao ponto
      var label = new SpriteText(this.labels, size, color);
      this.labels = String.fromCharCode(this.labels.charCodeAt(0) + 1);
      this.arrayLabel.push(label.text);
      label.position.x = pos.x;
      label.position.y = pos.y + 3;
      if(this.shorten) label.position.y = pos.y + 1;
      label.name = "label";

      if(this.hasPointLine && !this.hasLine) this.checkLabelDirection(label, pos);

      this.scene.add(label);
    }
  }

  public drawPointLine(pos, dashed: boolean, reversePoint: boolean){
    const pointGeometry = new THREE.Geometry();
    let x, y;
    if(this.reverseLine){
      x = -pos.x;
      y = -pos.y;
    }else{
      x = pos.x;
      y = pos.y;
    }
    pointGeometry.vertices.push(new THREE.Vector3(0, 0, 0.5),new THREE.Vector3(x, y, 0.5));
    let material;
    if(dashed){
      material = new THREE.LineDashedMaterial({
          color: 0x0000ff,
          linewidth: 2,
          dashSize: 1,
          gapSize: 1,
        });
    }else{
      material = new THREE.LineBasicMaterial({
        color: 0x0000ff,
        linewidth: 2
      })
    }
    const line = new THREE.Line(pointGeometry, material);
    line.name = "line";
    if(dashed) line.computeLineDistances();

    //Calcular a distancia entre os pontos
    if(!this.reverseLine) this.lineLenght = Math.sqrt((Math.pow(pos.x,2) + Math.pow(pos.y,2)));
    else if(reversePoint){
      this.addLabel('d',new THREE.Vector3(x,y,0.5),'blue');
      this.addPoint(new THREE.Vector3(x,y,0.5));
    }else{
      this.addLabel('d',new THREE.Vector3(x,y,0.5),'blue');
    }

    this.scene.add(line);
    this.fromInput = false;
  }

  private checkLabelDirection(label, pos){
    if(pos.y >= 0){
      label.position.x = pos.x;
      label.position.y = pos.y + 3;
      if(this.shorten) label.position.y = pos.y + 1.5;
    }else{
      label.position.x = pos.x;
      label.position.y = pos.y - 5;
      if(this.shorten) label.position.y = pos.y - 1.75;
    }
  }

  public removeAll(){
    //remove todos os elementos da cena
    while(this.scene.children.length){
      this.scene.remove(this.scene.children[0]);
    }
  }

  public getArrayLabel(): any[] {
    return this.arrayLabel;
  }

  public deletePoints(pointsDel: number) {
    if (this.scene.children.length > this.pointsLimit) {
      let i: number;
      for (i = 0; i < pointsDel; i++) {
        this.scene.remove(this.scene.children[this.pointsLimit-i+1]);
      }
      this.labels = 'A';
    }
  }

  public addDegreeSymbol(angle, id){
    let degree = document.getElementById(id);
    degree.style.display = 'unset';

    if(angle.toString().length == 1) degree.style.marginLeft = '50px';
    else if(angle.toString().length == 2) degree.style.marginLeft = '55px';
    else if(angle.toString().length == 3) degree.style.marginLeft = '60px';
    else if(angle.toString().length == 4) degree.style.marginLeft = '65px';
    else degree.style.display = 'none';
  }

  /* LIFECYCLE */
  ngAfterViewInit(){
    this.createScene();
    this.createCamera();
    this.startRendering();
    this.addControls();
    this.data.scene = this.scene;
  }

  checkReta(x1,x2,y1,y2,py1,py2){
    let center = new THREE.Vector3(0,0,0.5);
    let lineStart = new THREE.Vector3(200 , py1, 0.5);
    let lineEnd = new THREE.Vector3(-200 , py2, 0.5);
    let lineLenght = this.distanceBetweenFeatureLines(center, center, lineStart, lineEnd, 'dist');
    this.lineLenght = lineLenght;
    let lineCenter = this.distanceBetweenFeatureLines(center, center, lineStart, lineEnd, 'pt');
    let distFromA = Math.sqrt((Math.pow(x1,2) + Math.pow(y1,2)));
    let distFromB = Math.sqrt((Math.pow(x2,2) + Math.pow(y2,2)));
    console.log(distFromA);
    console.log(distFromB);

    if(this.lineLenght >= 29.5 && this.lineLenght <= 30.2){
      this.drawPointLine(lineCenter, false, true);
      this.pointsLimit = 10;
      this.pointsToDelete = 9;
    }else if(this.lineLenght > 30.2){
      if(this.lineLenght < 30.5) lineLenght = 30.6;
      this.drawPointLine(lineCenter, true , false);
      this.pointsLimit = 9;
      this.pointsToDelete = 8;
    }else{
      this.reverseLine = true;
      this.drawPointLine(lineCenter, false, true);
      if(distFromB >= 28.5 && distFromB < 30.5){
        if(distFromA >= 28.5 && distFromA < 30.5){
          this.reverseLine = false;
          this.drawPointLine(new THREE.Vector3(x1,y1,0.5), true, false);
          this.reverseLine = true;
          this.addLabel('r',new THREE.Vector3(x1,y1,0.5),'blue');
          this.pointsLimit = 12;
          this.pointsToDelete = 11;
          this.points.push('A');
          this.points.push('B');
        }else{
          let arr: THREE.Vector3[] = [];
          let lastPoint = 0, index;
          for (let i = 0; i <= 360; i++) {
            let theta = (i / 360) * 30;
            let position = new THREE.Vector3(Math.sin(theta) * 30, Math.cos(theta) * 30, 0.5);
            if (this.lineCross(position.x, position.y, x1, y1, x2, y2, 1)) arr.push(new THREE.Vector3(position.x,position.y,0.5));
          }
          for (let i = 1; i < arr.length; i++) {
            let dist = Math.sqrt((Math.pow((arr[i].x-x2),2) + Math.pow((arr[i].y-y2),2)));
            if(dist > lastPoint){
              index = new THREE.Vector3(arr[i].x, arr[i].y, 0.5);
              lastPoint = dist;
            }
          }

          this.reverseLine = false;
          this.drawPointLine(new THREE.Vector3(x2,y2,0.5), true, false);
          this.reverseLine = true;
          this.addLabel('r',new THREE.Vector3(x2,y2,0.5),'blue');

          this.extraLabel = true;
          this.addPoint(index);
          this.checkLabel(index);

          this.pointsLimit = 14;
          this.pointsToDelete = 13;

          this.points.push('B');
          this.points.push('C');
        }
      }else{
        if(distFromA >= 28.5 && distFromA < 30.5){
          let arr: THREE.Vector3[] = [];
          let lastPoint = 0, index;
          for (let i = 0; i <= 360; i++) {
            let theta = (i / 360) * 30;
            let position = new THREE.Vector3(Math.sin(theta) * 30, Math.cos(theta) * 30, 0.5);
            if (this.lineCross(position.x, position.y, x1, y1, x2, y2, 1)) arr.push(new THREE.Vector3(position.x,position.y,0.5));
          }
          for (let i = 1; i < arr.length; i++) {
            let dist = Math.sqrt((Math.pow((arr[i].x-x1),2) + Math.pow((arr[i].y-y1),2)));
            if(dist > lastPoint){
              index = new THREE.Vector3(arr[i].x, arr[i].y, 0.5);
              lastPoint = dist;
            }
          }

          this.reverseLine = false;
          this.drawPointLine(new THREE.Vector3(x1,y1,0.5), true, false);
          this.reverseLine = true;
          this.addLabel('r',new THREE.Vector3(x1,y1,0.5),'blue');

          this.extraLabel = true;
          this.addPoint(index);
          this.checkLabel(index);

          this.pointsLimit = 14;
          this.pointsToDelete = 13;

          this.points.push('A');
          this.points.push('C');
        }else{
          let arr: THREE.Vector3[] = [];
          let lastPoint = 0, index;
          for (let i = 0; i <= 360; i++) {
            let theta = (i / 360) * 30;
            let position = new THREE.Vector3(Math.sin(theta) * 30, Math.cos(theta) * 30, 0.5);
            if (this.lineCross(position.x, position.y, x1, y1, x2, y2, 1)) arr.push(new THREE.Vector3(position.x,position.y,0.5));
          }
          for (let i = 1; i < arr.length; i++) {
            let dist = Math.sqrt((Math.pow((arr[i].x-arr[0].x),2) + Math.pow((arr[i].y-arr[0].y),2)));
            if(dist > lastPoint){
              index = new THREE.Vector3(arr[i].x, arr[i].y, 0.5);
              lastPoint = dist;
            }
          }
          this.reverseLine = false;
          this.drawPointLine(new THREE.Vector3(arr[0].x,arr[0].y,0.5), true, false);
          this.reverseLine = true;
          this.addLabel('r',new THREE.Vector3(arr[0].x,arr[0].y,0.5),'blue');

          this.extraLabel = true;
          this.addPoint(arr[0]);
          this.checkLabel(arr[0]);
          this.extraLabel = true;
          this.addPoint(index);
          this.checkLabel(index);

          this.pointsLimit = 16;
          this.pointsToDelete = 15;

          this.points.push('C');
          this.points.push('D');
        }
      }
    }
    this.lineLenght = lineLenght;
  }

  /**
   * metodo para descobrir o ponto na linha que esta mais proximo ao centro da figura
   * @link https://gist.github.com/cuberoot/b5047c83cf277fee1b82
   * Copyright 2001 softSurfer, 2012 Dan Sunday
   * */
  distanceBetweenFeatureLines(startPt1, endPt1, startPt2, endPt2, rtrn) {
    var u, v, w, a, b, c, d, e, D, sc, sN, sD, tc, tN, tD;

    u = new THREE.Vector3();
    u.subVectors(endPt1, startPt1);
    v = new THREE.Vector3();
    v.subVectors(endPt2, startPt2);
    w = new THREE.Vector3();
    w.subVectors(startPt1, startPt2);

    a = u.dot(u);           // sempre >= 0
    b = u.dot(v);
    c = v.dot(v);           // sempre >= 0
    d = u.dot(w);
    e = v.dot(w);

    D = (a * c) - (b * b);  // sempre >= 0
    sD = D;                 // default sD = D >= 0
    tD = D;                 // default tD = D >= 0

    // computar os parametros da linha dos dois pontos mais proximos
    if (D < Number.EPSILON) {
        // as linhas sao quase paralelas
        sN = 0.0;         // forcar o uso do P0 no segmento S1
        sD = 1.0;         // para previnir qualquer divisao por 0.0 depois
        tN = e;
        tD = c;
    }else{
        // pegar os pontos mais proximos das linhas infinitas
        sN = (b*e - c*d);
        tN = (a*e - b*d);
        if (sN < 0.0) {
            // sc < 0 => a borda de s=0 eh visivel
            sN = 0.0;
            tN = e;
            tD = c;
        }else if (sN > sD){
            // sc > 1  => a borda de s=1 eh visivel
            sN = sD;
            tN = e + b;
            tD = c;
        }
    }

    if (tN < 0.0) {
        // tc < 0 => a borda de t=0 eh visivel
        tN = 0.0;
        // recomputar sc para esta borda
        if (-d < 0.0){
            sN = 0.0;
        }else if (-d > a){
            sN = sD;
        }else{
            sN = -d;
            sD = a;
        }
    }else if (tN > tD){
        // tc > 1  => a borda de t=1 eh visivel
        tN = tD;
        // recomputar sc para esta borda
        if ((-d + b) < 0.0){
            sN = 0;
        }else if ((-d + b) > a){
            sN = sD;
        }else{
            sN = (-d +  b);
            sD = a;
        }
    }

    // por fim, fazer a divisao para ter sc e tc
    sc = (Math.abs(sN) < Number.EPSILON ? 0.0 : sN / sD);
    tc = (Math.abs(tN) < Number.EPSILON ? 0.0 : tN / tD);

    // pegar a diferenca dos dois pontos mais proximos
    var sc_mult_u = new THREE.Vector3();
    sc_mult_u.copy(u);
    sc_mult_u.multiplyScalar(sc);
    var tc_mult_v = new THREE.Vector3();
    tc_mult_v.copy(v);
    tc_mult_v.multiplyScalar(tc);
    var dP = new THREE.Vector3();
    dP.copy(w);
    dP.add(sc_mult_u);
    dP.sub(tc_mult_v);

    if(rtrn === 'dist') return dP.length();   // retornar a distancia mais proxima
    else if(rtrn === 'pt'){
      this.reverseLine = true;
      return new THREE.Vector3(dP.x, dP.y, dP.z);
    }
  }
}
