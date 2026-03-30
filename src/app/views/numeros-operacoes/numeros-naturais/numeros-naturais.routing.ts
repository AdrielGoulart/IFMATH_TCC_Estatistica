import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NnDescricaoComponent } from './components/nn-descricao/nn-descricao.component';
import { NnViewComponent } from './components/nn-view/nn-view.component';
import { NnComparacaoNumerosComponent } from './components/nn-comparacao-numeros/nn-comparacao-numeros.component';
import { NnLeituraEscritaComponent } from './components/nn-leitura-escrita/nn-leitura-escrita.component';
import { NnAntecessorSucessorComponent } from './components/nn-antecessor-sucessor/nn-antecessor-sucessor.component';
import { NnAdicaoComponent } from './components/nn-adicao/nn-adicao.component';
import { NnSubtracaoComponent } from './components/nn-subtracao/nn-subtracao.component';
import { NnMultiplicacaoComponent } from './components/nn-multiplicacao/nn-multiplicacao.component';
import { NnDivisaoComponent } from './components/nn-divisao/nn-divisao.component';

const routes: Routes = [
    {
        path: '',
        component: NnViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'nn_descricao',
                pathMatch: 'full',
            },
            {
                path: 'nn_descricao',
                component: NnDescricaoComponent
            },
            {
                path: 'nn_comparacao-numeros',
                component: NnComparacaoNumerosComponent
            },
            {
                path: 'nn_leitura_escrita',
                component: NnLeituraEscritaComponent
            },
            {
                path: 'nn_antecessor_sucessor',
                component: NnAntecessorSucessorComponent
            },
            {
                path: 'nn_adicao',
                component: NnAdicaoComponent
            },
            {
                path: 'nn_subtracao',
                component: NnSubtracaoComponent
            },
            {
                path: 'nn_multiplicacao',
                component: NnMultiplicacaoComponent
            },
            {
                path: 'nn_divisao',
                component: NnDivisaoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NumerosNaturaisRoutingModule { }
