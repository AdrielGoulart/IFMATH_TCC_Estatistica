import { Directive, Input, forwardRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../directives/abstract/abstract-object-3d'
import { AbstractMesh } from './abstract/abstract-mesh-3d';

@Directive({
  selector: 'geo-spheremesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => SpheremeshDirective) }]
})

export class SpheremeshDirective extends AbstractMesh {

  @Input()
  radius: number;

  @Input()
  widhtSegments: number;

  @Input()
  hightSegments: number;


  constructor() { 
    super();
    console.log('SpheremeshDirective.constructor');

  }

  protected newObject3DInstance():THREE.Mesh{
   console.log('SpheremeshDirective.newObject3DInstance');
   const geometry = new THREE.SphereGeometry(this.radius,this.widhtSegments,this.hightSegments);
   const material: THREE.MeshBasicMaterial = this.getMaterial();
   return new THREE.Mesh(geometry,material);
  }

  protected afterInit(): void {
    console.log('SpheremeshDirective.afterInit');
  }

}
