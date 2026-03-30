import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MdDescricaoComponent } from './components/md-descricao/md-descricao.component';

const mdRotas: Routes = [
  {
    path: '',
    redirectTo: 'description_primeiro_grau',
    pathMatch: 'full',
  },
  {
    path: 'md_definicao',
    component: MdDescricaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(mdRotas)],
  exports: [RouterModule]
})

export class MdRoutingModule { }
