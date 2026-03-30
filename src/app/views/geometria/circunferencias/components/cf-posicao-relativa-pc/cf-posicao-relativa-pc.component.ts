import { Component, OnInit, ViewChild, DoCheck, ElementRef } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';

enum Relation {
  INSIDE = 0,
  OUTSIDE = 1,
  ON = 2
}

@Component({
  selector: 'cf-posicao-relativa-pc',
  templateUrl: './cf-posicao-relativa-pc.component.html',
  styleUrls: ['./cf-posicao-relativa-pc.component.scss']
})

export class CfPosicaoRelativaPcComponent implements OnInit, DoCheck {
  // Variáveis que determinam se é interno, externo ou pertencente
  distancePointCenter: number;
  radius: number;
  
  verifyPosition: any;

  cardID: any;

  relation: Relation;

  //Verificacao e variaveis dos inputs
  public errorInputRadius: boolean = false;
  public errorInputDistance: boolean = false;
  public radiusExt: number = 10;
  public radiusInt: number = 9.65;

  // variaveis para correcao de bugs visuais
  private sceneUpdate: number = 0;
  private screenUpdate: number = 0;


  //array de labels adicionados junto ao ponto
  arraylabel: any[];

  //Botões
  buttons: Object[] = [
    { title: "Ponto e Circunferência", route: "cf_posicao_relativa_pc" },
    { title: "Reta e Circunferência", route: "cf_posicao_relativa_rc" },
    { title: "Circunferência e Circunferência", route: "cf_posicao_relativa_cc" }
  ];

  // Variável com os botões de exemplos de relações
  buttons_examples = [
    { title: 'Interno', value: 0 },
    { title: 'Externo', value: 1 },
    { title: 'Pertence', value: 2 }
  ];

  loadExample(event: MouseEvent, relation) {
    event.preventDefault(); // Previne o comportamento padrão do evento
    this.relation = relation;

    // Checagem do tipo da relação
    if (this.relation == Relation.INSIDE) {
      this.drawDefaultPoints('#one');
    } else if (this.relation == Relation.OUTSIDE) {
      this.drawDefaultPoints('#two');
    } else if (this.relation == Relation.ON) {
      this.drawDefaultPoints('#three');
    }
  }

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;
  public data: any;

  constructor() {
    this.data = {
      intersects: []
    }
  }

  ngDoCheck() {
    if(!this.geoScene.fromInput && this.screenUpdate > 0){
      this.distancePointCenter = this.geoScene.lineLenght-0.5;
      if(this.distancePointCenter > 20) this.distancePointCenter = 20;
      this.checkClick();
    }
    if (this.distancePointCenter < 1) this.distancePointCenter = 0;
  }

  ngOnInit() {
    if(this.screenUpdate < 1){
      this.radius = 10;
      this.makeElements();
      this.geoScene.fromRightbar = true;
      this.screenUpdate++;
    }
  }

  /**
   * @see this.cards
  */
  private checkClick() {
    console.log(this.data.intersects.length);
    if (this.data.intersects.length == 2 || (this.data.intersects.length == 3 && (this.distancePointCenter >= this.radius && this.distancePointCenter <= this.radius+1))) {
      //pertence ou seja id = three
      this.distancePointCenter = this.radius;
      this.relation = Relation.ON;
    }else if (this.data.intersects.length == 3 || this.data.intersects.length == 4) {
      //interno ou seja id = one
      this.distancePointCenter = Math.round(this.distancePointCenter);
      if(this.distancePointCenter == this.radius) this.distancePointCenter -= 1;
      this.relation = Relation.INSIDE;
    }
    else if (this.data.intersects.length == 1) {
      //externo ou seja id = two
      this.distancePointCenter = Math.round(this.distancePointCenter);
      if(this.distancePointCenter == this.radius) this.distancePointCenter += 1;
      this.relation = Relation.OUTSIDE;
    }
  }
  private checkClickInput() {
    if (this.distancePointCenter > this.radius) {
      //externo ou seja id = two
      this.relation = Relation.OUTSIDE;
      
    }
    else if (this.distancePointCenter == this.radius) {
      //pertence ou seja id = three
      this.relation = Relation.ON;
    }
    else{
      //interno ou seja id = one
      this.relation = Relation.INSIDE;
    }
  }
  
  public drawDefaultPoints(cardID : string){
    if(cardID == "#one"){
      //interno
      this.distancePointCenter = 5;
      this.radius = 10;
    }
    else if(cardID == "#two"){
      //externo
      this.distancePointCenter = 15;
      this.radius = 10;
    }
    else if(cardID == "#three"){
      //Pertence, card id = 3
      this.distancePointCenter = 10;
      this.radius = 10;
    }
    this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("line"));
    this.invisibleElements();
    this.checkInput();
  }

  public addPonto(pos){
    //removendo a label e ponto
    this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("circle"),this.geoScene.scene.getObjectByName("label"));
    
    const pointGeometry = new THREE.Geometry();
    pointGeometry.vertices.push(new THREE.Vector3(0, 0, 0.5),new THREE.Vector3(pos.x, 0, 0.5));
    const line = new THREE.Line(pointGeometry,
      new THREE.LineBasicMaterial({
        color: 0x0000ff,
        linewidth: 2
      }));
    line.name = "line";
    // Adicionando label do ponto
    const pointLabel = new SpriteText('A', 2, 'blue');
    pointLabel.position.y = 1.5;
    pointLabel.position.x = pos.x;
    pointLabel.name = "label";

    this.geoScene.scene.add(line);
    this.geoScene.scene.add(pointLabel);
    this.geoScene.addPoint(pos);

    this.geoScene.fromInput = true;
    this.geoScene.fromRightbar = true;

    this.geoScene.render();
    if(this.sceneUpdate === 0){
       this.sceneUpdate++;
       this.reDraw();
    }else{
      this.sceneUpdate = 0;
      this.checkClickInput();
    }
  }


  private makeElements() {
    // Adicionando novas circunferências na cena
    let material = new THREE.MeshBasicMaterial({
      color: 0x000000
    });
    let circleGeometry = new THREE.CircleGeometry(this.radiusExt+0.5, 92);
    let circleOne = new THREE.Mesh( circleGeometry, material )
    if(this.screenUpdate >= 1){
      this.geoScene.scene.add(circleOne);
      this.geoScene.defaultObjects[0] = circleOne;
    }

    let materialTwo = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    let circleGeometryTwo = new THREE.CircleGeometry(this.radiusInt+0.5, 92);
    let circleTwo = new THREE.Mesh( circleGeometryTwo, materialTwo )
    if(this.screenUpdate >= 1){
      this.geoScene.scene.add(circleTwo);
      this.geoScene.defaultObjects[1] = circleTwo;
    }

    // Adicionando ponto central do círculo
    const centerPoint = new THREE.Mesh(
      new THREE.CircleGeometry(0.25, 30),
      new THREE.MeshBasicMaterial({
        color: 0x000000
      })
    );
    centerPoint.position.z = 0.6;
    // Adicionando representação da medida do raio
    const radiusGeometry = new THREE.Geometry();
    radiusGeometry.vertices.push(new THREE.Vector3(0, 0, 0.5), new THREE.Vector3(this.radiusInt+0.5, 0, 0.5));
    const line = new THREE.Line(radiusGeometry,
      new THREE.LineBasicMaterial({
        color: 0xff0000,
        linewidth: 2
      }));
      line.name = "line";
    // Adicionando label do raio da circunferência
    const radiusLabel = new SpriteText('r', 2, 'red');
    radiusLabel.position.y = 1.75;
    radiusLabel.position.x = this.radiusInt / 2;
    if(this.radius < 3){
      radiusLabel.position.y = 0;
      radiusLabel.position.x = this.radiusExt + 1;
    }

    if(this.screenUpdate >= 1){
      this.geoScene.scene.add(line);
      this.geoScene.scene.add(centerPoint);
      this.geoScene.scene.add(radiusLabel);
      this.geoScene.defaultObjects[2] = line;
      this.geoScene.defaultObjects[3] = centerPoint;
      this.geoScene.defaultObjects[4] = radiusLabel;
    }

    if(!this.geoScene.defaultObjects.length){
      this.geoScene.defaultObjects.push(circleOne);
      this.geoScene.defaultObjects.push(circleTwo);
      this.geoScene.defaultObjects.push(centerPoint);
      this.geoScene.defaultObjects.push(line);
      this.geoScene.defaultObjects.push(radiusLabel);
    }
  }

  private reDraw() {
    // Remove todos os elementos da cena
    this.geoScene.scene.children.forEach(element => {
      this.geoScene.scene.remove(element);
    });
    this.makeElements();
    let pos = new THREE.Vector3(-this.distancePointCenter-0.25, 0, 0.5);
    this.addPonto(pos);
  }

  private invisibleElements() {
    // Remove a visibilidade todos os elementos da cena
    this.geoScene.scene.children.forEach(element => {
      element.visible = false;
    });
  }
  
  checkInput() {
    const checkRadius = (this.radius >= 1 && this.radius <= 10);
    const checkDistance = (this.distancePointCenter > -1 && this.distancePointCenter < 81);
    if (checkRadius && checkDistance) {
      this.radiusExt = this.radius;
      this.radiusInt = this.radius - 0.35;
      this.errorInputDistance = false;
      this.errorInputRadius = false;
      this.reDraw();
    }else{
      if(!checkRadius) this.errorInputRadius = true;
      else this.errorInputRadius = false;
      if(!checkDistance) this.errorInputDistance = true;
      else this.errorInputDistance = false;
      this.invisibleElements();
    }
  }
}
