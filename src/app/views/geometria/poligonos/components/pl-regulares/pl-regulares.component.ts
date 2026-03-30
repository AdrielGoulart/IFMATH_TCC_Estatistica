import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

enum Circle {
  NONE = 0,
  INSCRITO = 1,
  CIRCUNSCRITO = 2
}

@Component({
  selector: 'ifmath-pl-regulares',
  templateUrl: './pl-regulares.component.html',
  styleUrls: ['./pl-regulares.component.scss']
})
export class PlRegularesComponent implements AfterViewInit, OnInit {

  @ViewChild(GeoSceneComponent)
  private geoScene: GeoSceneComponent;

  private circle: Circle = Circle.NONE;
  polygon = 'Triângulo Equilátero';
  radius: number;

  lado: number = 5;
  lados: number = 3;
  errorInputSize = false;
  errorInputSides = false;

  private sqrt3 = Math.sqrt(3); //raiz quadrada de 3 pra usar nas contas
  private sqrt2 = Math.sqrt(2); //raiz quadrada de 2 pra usar nas contas
  private seno36 = 0.58778525229; //seno de 36 graus pra usar nas contas
  private cos36 = 0.809017; //cos de 36 graus pra usar nas contas
  private sqrt_example_triangle_hexagono = ((this.lado / 2) / (Math.sqrt(3) / 2)); //resolve a conta do exemplo do triangulo e do hexagono
  private sqrt_example_quadrado = ((this.lado / 2) / (Math.sqrt(2) / 2)); //resolve a conta do exemplo do quadrado
  private sqrt_example_pentagono = ((this.lado / 2) / (this.seno36)); //resolve a conta do exemplo do pentagono

  defaultCase = false;

  buttons_lock = [
    { title: 'Polígono inscrito em uma circunferência', value: 1, id: 'insc' },
    { title: 'Polígono circunscrito a uma circunferência', value: 2, id: 'circun' }
  ];

  circleType(type) {
    if (this.circle === type) type = Circle.NONE;
    this.circle = type;
    switch (type) {
      case Circle.INSCRITO:
        document.getElementById('insc').style.color = '#4683B4';
        document.getElementById('insc').style.backgroundColor = '#FFF';
        document.getElementById('circun').style.color = '#FFF';
        document.getElementById('circun').style.backgroundColor = '#4683B4';
        break;
      case Circle.CIRCUNSCRITO:
        document.getElementById('circun').style.color = '#4683B4';
        document.getElementById('circun').style.backgroundColor = '#FFF';
        document.getElementById('insc').style.color = '#FFF';
        document.getElementById('insc').style.backgroundColor = '#4683B4';
        break;
      case Circle.NONE:
        document.getElementById('circun').style.color = '#FFF';
        document.getElementById('circun').style.backgroundColor = '#4683B4';
        document.getElementById('insc').style.color = '#FFF';
        document.getElementById('insc').style.backgroundColor = '#4683B4';
        break;
    }
    this.drawObjects();
  }

  constructor() { }

  ngOnInit() {
    this.geoScene.fieldOfView = 12.5;
    registerLocaleData(pt);
  }

  ngDoCheck() {
    this.sqrt_example_triangle_hexagono = ((this.lado / 2) / (Math.sqrt(3) / 2));
    this.sqrt_example_quadrado = ((this.lado / 2) / (Math.sqrt(2) / 2));
    this.sqrt_example_pentagono = ((this.lado / 2) / (this.seno36));

    if(this.lados >= 7) this.defaultCase = true;
    else this.defaultCase = false;
  }

  ngAfterViewInit() {
    this.drawObjects();
  }

  drawObjects() {
    let porygon = new THREE.Geometry(),
      one = new THREE.Vector2(0, 0),
      zero = new THREE.Vector2(0, 0);
    for (let mod = -0.1; mod <= 0.1; mod += 0.05) {
      for (let i = 0; i <= this.lados; i++) {
        let angle = (Math.PI / 2) + (i / this.lados) * 2 * Math.PI,
          x = Math.cos(angle) * (this.lado + mod),
          y = Math.sin(angle) * (this.lado + mod);
        porygon.vertices.push(new THREE.Vector3(x, y, 0));
        if (mod === 0 && i === 0) zero = new THREE.Vector2(x, y);
        else if (mod === 0 && i === 1) one = new THREE.Vector2(x, y);
      }
    }

    let distance = Math.sqrt((one.x - zero.x) ** 2 + (one.y - zero.y) ** 2),
      distancesRatio = distance / 2 / distance,
      x = (1 - distancesRatio) * zero.x + distancesRatio * one.x,
      y = (1 - distancesRatio) * zero.y + distancesRatio * one.y,
      radius = Math.sqrt((x) ** 2 + (y) ** 2);

    let circle = new THREE.Geometry(), mod = this.lado + 0.25;
    this.radius = this.lado;

    if (this.circle === Circle.CIRCUNSCRITO) {
      this.radius = radius;
      mod = radius - 0.05;
      if (this.lado <= 5) mod = radius - 0.05;
    } else if (this.lado <= 5) mod = this.lado + 0.15;

    for (let i = 0; i <= 360; i++) {
      let theta = (i / 1080) * 360;
      circle.vertices.push(
        new THREE.Vector3(Math.sin(theta) * mod, Math.cos(theta) * mod, 0)
      );
    }

    this.geoScene.scene.children[0] = new THREE.Line(porygon, new THREE.LineBasicMaterial({ color: 0x4683B4 }));
    this.geoScene.scene.children[1] = new THREE.Line(circle, new THREE.LineBasicMaterial({ color: 0x999999 }));
    if (this.circle === Circle.NONE) this.geoScene.scene.children[1].visible = false;

    let ang = ((this.lados - 2) * 180) / this.lados;

    let pos = new THREE.Vector3(0, 0, 0);
    for (let i = 0; i <= 2; i++) {
      let angle = ((ang * 0.0175 / 2) + (i / this.lados) * 2 * (ang * 0.0175)),
        x = Math.cos(angle) * (this.lado),
        y = Math.sin(angle) * (this.lado);
      pos = new THREE.Vector3(x, y, 0);
      break;
    }
    distance = Math.sqrt((pos.x) ** 2 + (pos.y) ** 2),
      distancesRatio = (distance + 0.6) / distance;
    pos.x = distancesRatio * pos.x,
      pos.y = distancesRatio * pos.y;

    this.geoScene.scene.children[2] = new SpriteText('ℓ', 1, '#4683B4');
    this.geoScene.scene.children[2].position.copy(pos);

    this.getPolygon();
    this.geoScene.render();
  }

  checkInput() {
    let condSides = this.lados >= 3 && this.lados <= 22;
    let condSize = this.lado >= 1 && this.lado <= 10;
    if (condSides && condSize) {
      this.errorInputSides = false;
      this.errorInputSize = false;
      this.drawObjects();
    } else {
      if (condSize) this.errorInputSides = true;
      else this.errorInputSides = false;
      if (condSides) this.errorInputSize = true;
      else this.errorInputSize = false;
    }
  }

  getPolygon() {
    if (this.lados === 3) this.polygon = 'Triângulo Equilátero'; else if (this.lados === 4) this.polygon = 'Quadrado';
    else if (this.lados === 5) this.polygon = 'Pentágono'; else if (this.lados === 6) this.polygon = 'Hexágono';
    else if (this.lados === 7) this.polygon = 'Heptágono'; else if (this.lados === 8) this.polygon = 'Octógono';
    else if (this.lados === 9) this.polygon = 'Eneágono'; else if (this.lados === 10) this.polygon = 'Decágono';
    else if (this.lados === 11) this.polygon = 'Undecágono'; else if (this.lados === 12) this.polygon = 'Dodecágono';
    else if (this.lados === 13) this.polygon = 'Tridecágono'; else if (this.lados === 14) this.polygon = 'Tetradecágono';
    else if (this.lados === 15) this.polygon = 'Pentadecágono'; else if (this.lados === 16) this.polygon = 'Hexadecágono';
    else if (this.lados === 17) this.polygon = 'Heptadecágono'; else if (this.lados === 18) this.polygon = 'Octadecágono';
    else if (this.lados === 19) this.polygon = 'Eneadecágono'; else if (this.lados === 20) this.polygon = 'Icoságono';
    else if (this.lados === 21) this.polygon = 'Hendecoságono'; else if (this.lados === 22) this.polygon = 'Docoságono';
  }

}

/** CHILDREN INDEX
 * 0 - Poligono Regular Azul (Contorno)
 * 1 - Circulo
 * 2 - Label
 */
