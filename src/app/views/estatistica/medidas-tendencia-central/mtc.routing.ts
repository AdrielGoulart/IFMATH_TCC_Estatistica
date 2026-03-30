import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MtcDescricaoComponent } from './components/mtc-descricao/mtc-descricao.component';


const mtcRotas: Routes = [
  {
    path: '',
    redirectTo: 'description_primeiro_grau',
    pathMatch: 'full',
  },
  {
    path: 'mtc_definicao',
    component: MtcDescricaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(mtcRotas)],
  exports: [RouterModule]
})

export class MtcRoutingModule { }
