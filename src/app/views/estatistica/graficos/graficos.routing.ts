import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraDescricaoComponent } from './components/gra-descricao/gra-descricao.component';

const graficosRotas: Routes = [
  {
    path: '',
    redirectTo: 'graficos_definicao',
    pathMatch: 'full',
  },
  {
    path: 'graficos_definicao',
    component: GraDescricaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(graficosRotas)],
  exports: [RouterModule]
})

export class GraficosRoutingModule { }
