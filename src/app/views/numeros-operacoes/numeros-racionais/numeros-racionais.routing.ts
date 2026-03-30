import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NrDescricaoComponent } from './components/nr-descricao/nr-descricao.component';
import { NrViewComponent } from './components/nr-view/nr-view.component';

const routes: Routes = [
    {
        path: '',
        component: NrViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'nr_descricao',
                pathMatch: 'full',
            },
            {
                path: 'nr_descricao',
                component: NrDescricaoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NumerosRacionaisRoutingModule { }
