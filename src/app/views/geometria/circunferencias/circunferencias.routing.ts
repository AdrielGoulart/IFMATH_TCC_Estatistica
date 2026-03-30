import { ClDefinicaoComponent } from './components/cl-definicao/cl-definicao.component';
import { CfRelacoesMetricasRstComponent } from './components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component';
import { CfRelacoesMetricasRsComponent } from './components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component';
import { CfRelacoesMetricasRcComponent } from './components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CfViewComponent } from './components/cf-view/cf-view.component';
import { CfDefinicaoComponent } from './components/cf-definicao/cf-definicao.component';
import { CfPosicaoRelativaComponent } from './components/cf-posicao-relativa/cf-posicao-relativa.component';
import { CfPosicaoRelativaPcComponent } from './components/cf-posicao-relativa-pc/cf-posicao-relativa-pc.component';
import { CfAngulosComponent } from './components/cf-angulos/cf-angulos.component';
import { CfAnguloCentralComponent } from './components/cf-angulo-central/cf-angulo-central.component';
import { CfAnguloInscritoComponent } from './components/cf-angulo-inscrito/cf-angulo-inscrito.component';
import { CfAnguloCapazComponent } from './components/cf-angulo-capaz/cf-angulo-capaz.component';
import { CfAnguloSegmentoComponent } from './components/cf-angulo-segmento/cf-angulo-segmento.component';
import { CfAnguloNaoPertenceComponent } from './components/cf-angulo-nao-pertence/cf-angulo-nao-pertence.component';
import { CfPosicaoRelativaRcComponent } from './components/cf-posicao-relativa-rc/cf-posicao-relativa-rc.component';
import { CfPosicaoRelativaCcComponent } from './components/cf-posicao-relativa-cc/cf-posicao-relativa-cc.component';
import { CfRelacoesMetricasComponent } from './components/cf-relacoes-metricas/cf-relacoes-metricas.component';
import { CfComprimentoCircunferenciaComponent } from './components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component';
import { CfComprimentoCircunferenciaNpComponent } from './components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component';
import { ClAreaCircComponent } from './components/cl-area-circ/cl-area-circ.component';
import { ClAreaSetorComponent } from './components/cl-area-setor/cl-area-setor.component';
import { ClAreaCoroaComponent } from './components/cl-area-coroa/cl-area-coroa.component';

const routes: Routes = [{
    path: '',
    component: CfViewComponent,
    children: [
        {
            path: '',
            redirectTo: 'cf_definicao',
            pathMatch: 'full',
        },
        {
            path: 'cf_definicao',
            component: CfDefinicaoComponent
        },
        // Rotas posição relativa
        {
            path: 'cf_posicao_relativa',
            component: CfPosicaoRelativaComponent
        },
        {
            path: 'cf_posicao_relativa_pc',
            component: CfPosicaoRelativaPcComponent
        },
        {
            path: 'cf_posicao_relativa_rc',
            component: CfPosicaoRelativaRcComponent
        },
        {
            path: 'cf_posicao_relativa_cc',
            component: CfPosicaoRelativaCcComponent
        },
        // Rotas angulos da circunferência
        {
            path: 'cf_angulos',
            component: CfAngulosComponent
        },
        {
            path: 'cf_angulo_central',
            component: CfAnguloCentralComponent
        },
        {
            path: 'cf_angulo_inscrito',
            component: CfAnguloInscritoComponent
        },
        {
            path: 'cf_angulo_capaz',
            component: CfAnguloCapazComponent
        },
        {
            path: 'cf_angulo_segmento',
            component: CfAnguloSegmentoComponent
        },
        {
            path: 'cf_angulo_nao_pertence',
            component: CfAnguloNaoPertenceComponent
        },
        // Rotas Comprimento da Circunferência
        {
            path: 'cf_comprimento_circunferencia',
            component: CfComprimentoCircunferenciaComponent
        },
        {
            path: 'cf_numero_pi',
            component: CfComprimentoCircunferenciaNpComponent
        },
        // Rotas relações métricas
        {
            path: 'cf_relacoes_metricas',
            component: CfRelacoesMetricasComponent
        },
        {
            path: 'cf_relacoes_metricas_rc',
            component: CfRelacoesMetricasRcComponent
        },
        {
            path: 'cf_relacoes_metricas_rs',
            component: CfRelacoesMetricasRsComponent
        },
        {
            path: 'cf_relacoes_metricas_rst',
            component: CfRelacoesMetricasRstComponent
        },
        // Rotas circulos
        {
            path: 'cl_definicao',
            component: ClDefinicaoComponent
        },
        {
            path: 'cl_area_circ',
            component: ClAreaCircComponent
        },
        {
            path: 'cl_area_coroa',
            component: ClAreaCoroaComponent
        },
        {
            path: 'cl_area_setor',
            component: ClAreaSetorComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CircunferenciasRouting { }