import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrDescricaoComponent } from './components/fr-descricao/fr-descricao.component';
import { FrViewComponent } from './components/fr-view/fr-view.component';

const routes: Routes = [
    {
        path: '',
        component: FrViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'fr_descricao',
                pathMatch: 'full',
            },
            {
                path: 'fr_descricao',
                component: FrDescricaoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FracoesRoutingModule { }
