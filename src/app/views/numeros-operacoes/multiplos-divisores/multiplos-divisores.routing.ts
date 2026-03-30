import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MdDescricaoComponent } from './components/md-descricao/md-descricao.component';
import { MdViewComponent } from './components/md-view/md-view.component';
import { MdMmcEncontrarComponent } from './components/md-mmc-encontrar/md-mmc-encontrar.component';
import { MdMmcDecomposicaoComponent } from './components/md-mmc-decomposicao/md-mmc-decomposicao.component';
import { MdMdcDecomposicaoComponent } from './components/md-mdc-decomposicao/md-mdc-decomposicao.component';
import { MdMdcDivisoesSucessivasComponent } from './components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component';
import { MdPrimoVerificaComponent } from './components/md-primo-verifica/md-primo-verifica.component';
import { MdPrimoDecomposicaoComponent } from './components/md-primo-decomposicao/md-primo-decomposicao.component';
import { MdGeraDivisoresComponent } from './components/md-gera-divisores/md-gera-divisores.component';
import { MdGeraMultiplosComponent } from './components/md-gera-multiplos/md-gera-multiplos.component';
import { MdVerificaDivisoresComponent } from './components/md-verifica-divisor/md-verifica-divisores.component';
import { MdVerificaMultiplosComponent } from './components/md-verifica-multiplo/md-verifica-multiplos.component';


const routes: Routes = [
    {
        path: '',
        component: MdViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'md_descricao',
                pathMatch: 'full',
            },
            {
                path: 'md_descricao',
                component: MdDescricaoComponent
            },
            {
                path: 'md_gera_divisores',
                component: MdGeraDivisoresComponent
            },
            {
                path: 'md_gera_multiplos',
                component: MdGeraMultiplosComponent
            },
            {
                path: 'md_verifica_divisores',
                component: MdVerificaDivisoresComponent
            },
            {
                path: 'md_verifica_multiplos',
                component: MdVerificaMultiplosComponent
            },
            {
                path: 'md_mmc_encontrar',
                component: MdMmcEncontrarComponent
            },
            {
                path: 'md_mmc_decomposicao',
                component: MdMmcDecomposicaoComponent

            },
            {
                path: 'md_mdc_divisoes_sucessivas',
                component: MdMdcDivisoesSucessivasComponent
            },
            {
                path: 'md_mdc_decomposicao',
                component: MdMdcDecomposicaoComponent

            },
            {
                path: 'md_primo_verifica',
                component: MdPrimoVerificaComponent
            },
            {
                path: 'md_primo_decomposicao',
                component: MdPrimoDecomposicaoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MultiplosDivisoresRoutingModule { }
