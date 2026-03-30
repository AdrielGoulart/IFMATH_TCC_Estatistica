import { PlQuadrilaterosTrapezioComponent } from './components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component';
import { PlQuadrilaterosRetanguloComponent } from './components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component';
import { PlQuadrilaterosQuadradoComponent } from './components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component';
import { PlQuadrilaterosParalelogramoComponent } from './components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component';
import { PlQuadrilaterosLosangoComponent } from './components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component';
import { PlNLadosComponent } from './components/pl-n-lados/pl-n-lados.component';
import { PlRegularesComponent } from './components/pl-regulares/pl-regulares.component';
import { PlQuadrilaterosComponent } from './components/pl-quadrilateros/pl-quadrilateros.component';
import { PlTriangulosComponent } from './components/pl-triangulos/pl-triangulos.component';
import { PlViewComponent } from './components/pl-view/pl-view.component';
import { PlDefinicaoComponent } from './components/pl-definicao/pl-definicao.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: PlViewComponent,
  children: [
    {
      path: '',
      redirectTo: 'pl_definicao',
      pathMatch: 'full',
    },
    {
        path: 'pl_definicao',
        component: PlDefinicaoComponent
    },

    // Rotas Triangulos
    {
        path: 'pl_triangulos',
        component: PlTriangulosComponent
    },

    // Rotas Quadrilateros
    {
        path: 'pl_quadrilateros',
        component: PlQuadrilaterosComponent
    },
    {
        path: 'pl_quadrilateros_losango',
        component: PlQuadrilaterosLosangoComponent
    },
    {
        path: 'pl_quadrilateros_paralelogramo',
        component: PlQuadrilaterosParalelogramoComponent
    },
    {
        path: 'pl_quadrilateros_quadrado',
        component: PlQuadrilaterosQuadradoComponent
    },
    {
        path: 'pl_quadrilateros_retangulo',
        component: PlQuadrilaterosRetanguloComponent
    },
    {
        path: 'pl_quadrilateros_trapezio',
        component: PlQuadrilaterosTrapezioComponent
    },

    // Rotas Poligonos Regulares
    {
        path: 'pl_regulares',
        component: PlRegularesComponent
    },
    
    // Rotas Poligonos com n lados
    {
        path: 'pl_n_lados',
        component: PlNLadosComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoligonosRouting { }
