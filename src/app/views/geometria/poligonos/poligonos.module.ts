import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeoSharedModule } from '../shared/geo-shared.module';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { FormsModule } from '@angular/forms';
import { PoligonosRouting } from './poligonos.routing';

import { PlViewComponent } from './components/pl-view/pl-view.component';
import { PlSidebarComponent } from './components/pl-sidebar/pl-sidebar.component';
import { PlDefinicaoComponent } from './components/pl-definicao/pl-definicao.component';
import { PlTriangulosComponent } from './components/pl-triangulos/pl-triangulos.component';
import { PlQuadrilaterosComponent } from './components/pl-quadrilateros/pl-quadrilateros.component';
import { PlRegularesComponent } from './components/pl-regulares/pl-regulares.component';
import { PlNLadosComponent } from './components/pl-n-lados/pl-n-lados.component';
import { PlQuadrilaterosQuadradoComponent } from './components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component';
import { PlQuadrilaterosRetanguloComponent } from './components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component';
import { PlQuadrilaterosTrapezioComponent } from './components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component';
import { PlQuadrilaterosLosangoComponent } from './components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component';
import { PlQuadrilaterosParalelogramoComponent } from './components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule,
    GeoSharedModule,
    PoligonosRouting
  ],
  declarations: [
    PlViewComponent,
    PlSidebarComponent,
    PlDefinicaoComponent,
    PlTriangulosComponent,
    PlQuadrilaterosComponent,
    PlRegularesComponent,
    PlNLadosComponent,
    PlQuadrilaterosQuadradoComponent,
    PlQuadrilaterosRetanguloComponent,
    PlQuadrilaterosTrapezioComponent,
    PlQuadrilaterosLosangoComponent,
    PlQuadrilaterosParalelogramoComponent,
  ]
})
export class PoligonosModule { }
