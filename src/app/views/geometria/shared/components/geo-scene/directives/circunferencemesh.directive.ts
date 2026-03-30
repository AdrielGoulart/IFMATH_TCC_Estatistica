import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractMesh } from './abstract/abstract-mesh-3d';
import * as THREE from 'three';
import { AbstractObject3D } from './abstract/abstract-object-3d';

@Directive({
  selector: 'geo-circunferencemesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => CircunferencemeshDirective) }]
})
export class CircunferencemeshDirective extends AbstractMesh {

  @Input()
  segmentCount: number;

  @Input()
  radius: number;

  @Input()
  color: string;

  constructor() {
    super();
  }

  protected newObject3DInstance(): THREE.Mesh {
    let material = new THREE.MeshBasicMaterial({
      color: this.color
    });
  
    let circleGeometry = new THREE.CircleGeometry( this.radius, this.segmentCount );              
    return new THREE.Mesh( circleGeometry, material );
  }

  protected afterInit(): void { }

}
