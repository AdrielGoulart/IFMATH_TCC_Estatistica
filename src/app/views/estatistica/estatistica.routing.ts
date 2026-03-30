import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstDescricaoComponent } from './shared/components/est-descricao/est-descricao.component';
import { EstViewComponent } from './shared/components/est-view/est-view.component';

const routes: Routes = [
    {
        path: '',
        component: EstViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'descricao',
                pathMatch: 'full',
            },
            {
                path: 'descricao',
                component: EstDescricaoComponent
            },
            // {
            //     path: 'medidas_tendencia_central',
            //     // tslint:disable-next-line:max-line-length
            //     loadChildren: './features/medidas-tendencia-central/medidas-tendencia-central.module#MedidasTendenciaCentralModule',
            // },
            // {
            //     path: 'medidas_de_dispersao',
            //     loadChildren: '.features/medidas-dispersao/medidas-dispersao.module#MedidasDispersaoModule',
            // },
            // {
            //     path: 'graficos',
            //     loadChildren: './features/graficos/graficos.module#GraficosModule',
            // }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EstatisticaRoutingModule { }