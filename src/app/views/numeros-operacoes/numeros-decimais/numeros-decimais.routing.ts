import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NdAdicaoComponent } from './components/nd-adicao/nd-adicao.component';

import { NdDescricaoComponent } from './components/nd-descricao/nd-descricao.component';
import { NdViewComponent } from './components/nd-view/nd-view.component';

const routes: Routes = [
    {
        path: '',
        component: NdViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'nd_descricao',
                pathMatch: 'full',
            },
            {
                path: 'nd_descricao',
                component: NdDescricaoComponent
            },
            {
                path: 'nd_adicao',
                component: NdAdicaoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NumerosDecimaisRoutingModule { }
