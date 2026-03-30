import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NiDescricaoComponent } from './components/ni-descricao/ni-descricao.component';
import { NiViewComponent } from './components/ni-view/ni-view.component';
import { NiAntecessorSucessorComponent} from './components/ni-antecessor-sucessor/ni-antecessor-sucessor.component';
import { NiAdicaoComponent} from './components/ni-adicao/ni-adicao.component';
import { NiComparacaoNumerosComponent } from './components/ni-comparacao-numeros/ni-comparacao-numeros.component';
import { NiDivisaoComponent} from './components/ni-divisao/ni-divisao.component';
import { NiMultiplicacaoComponent } from './components/ni-multiplicacao/ni-multiplicacao.component';
import { NiSubtracaoComponent } from './components/ni-subtracao/ni-subtracao.component';
import { NiModuloComponent } from './components/ni-modulo/ni-modulo.component';


const routes: Routes = [
    {
        path: '',
        component: NiViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'ni_descricao',
                pathMatch: 'full',
            },
            {
                path: 'ni_descricao',
                component: NiDescricaoComponent
            },
            {
                path: 'ni_antecessor_sucessor',
                component: NiAntecessorSucessorComponent
            },
            {
                path: 'ni_comparacao_numeros',
                component: NiComparacaoNumerosComponent
            },
            {
                path: 'ni_adicao',
                component: NiAdicaoComponent
            },
            {
                path: 'ni_subtracao',
                component: NiSubtracaoComponent 
            },
            {
                path:'ni_multiplicacao',
                component: NiMultiplicacaoComponent
            },
            {
                path: 'ni_divisao',
                component: NiDivisaoComponent
            },
            {
                path: 'ni_modulo',
                component: NiModuloComponent
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NumerosInteirosRoutingModule { }
