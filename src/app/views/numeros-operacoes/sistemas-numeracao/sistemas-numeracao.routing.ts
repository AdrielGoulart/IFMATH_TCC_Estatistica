import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnDescricaoComponent } from './components/sn-descricao/sn-descricao.component';
import { SnViewComponent } from './components/sn-view/sn-view.component';

const routes: Routes = [
    {
        path: '',
        component: SnViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'sn_descricao',
                pathMatch: 'full',
            },
            {
                path: 'sn_descricao',
                component: SnDescricaoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SistemasNumeracaoRoutingModule { }
