import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PnfDefinicaoComponent } from './components/pnf-definicao/pnf-definicao.component';
import { PnfNotableProductComponent } from './components/pnf-prod-notavel/pnf-prod-notavel.component';
import { PnfFatorationComponent } from './components/pnf-fatoracao/pnf-fatoracao.component';
import { PnfViewComponent } from './components/pnf-view/pnf-view.component';


const router: Routes = [
  {
    path: '',
    component: PnfViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'pnf_definicao',
        pathMatch: 'full',
      },
      {
        path: 'pnf_definicao',
        component: PnfDefinicaoComponent
      },
      {
        path: 'pnf_produto_notavel',
        component: PnfNotableProductComponent
      },
      {
        path: 'pnf_fatoracao',
        component: PnfFatorationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class PnfRoutingModule { }
