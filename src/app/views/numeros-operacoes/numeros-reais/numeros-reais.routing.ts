import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NreDescricaoComponent } from './components/nre-descricao/nre-descricao.component';
import { NreViewComponent } from './components/nre-view/nre-view.component';

const routes: Routes = [
    {
        path: '',
        component: NreViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'nre_descricao',
                pathMatch: 'full',
            },
            {
                path: 'nre_descricao',
                component: NreDescricaoComponent
            },
           
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NumerosReaisRoutingModule { }
