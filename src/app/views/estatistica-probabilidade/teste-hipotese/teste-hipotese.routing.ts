import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThDescricaoComponent } from './components/th-descricao/th-descricao.component';
import { ThViewComponent } from './components/th-view/th-view.component';

const routes: Routes = [
    {
        path: '',
        component: ThViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'th_descricao',
                pathMatch: 'full',
            },
            {
                path: 'th_descricao',
                component: ThDescricaoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TesteHipoteseRoutingModule { }
