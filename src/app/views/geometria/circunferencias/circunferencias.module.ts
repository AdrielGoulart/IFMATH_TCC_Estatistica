import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeoSharedModule } from '../shared/geo-shared.module';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { CircunferenciasRouting } from './circunferencias.routing';

import { CfDefinicaoComponent } from './components/cf-definicao/cf-definicao.component';
import { CfViewComponent } from './components/cf-view/cf-view.component';
import { CfSidebarComponent } from './components/cf-sidebar/cf-sidebar.component';
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
import { CfRelacoesMetricasRcComponent } from './components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component';
import { CfRelacoesMetricasRsComponent } from './components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component';
import { CfRelacoesMetricasRstComponent } from './components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component';
import { CfComprimentoCircunferenciaComponent } from './components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component';
import { CfComprimentoCircunferenciaNpComponent } from './components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component';
import { FormsModule } from '@angular/forms';
import { ClAreaCircComponent } from './components/cl-area-circ/cl-area-circ.component';
import { ClAreaSetorComponent } from './components/cl-area-setor/cl-area-setor.component';
import { ClAreaCoroaComponent } from './components/cl-area-coroa/cl-area-coroa.component';
import { NoThousandDotsPipe } from './components/pipes/no-thousand-dots.pipe';
import { ClDefinicaoComponent } from './components/cl-definicao/cl-definicao.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule,
    CircunferenciasRouting,
    GeoSharedModule
  ],
  declarations: [
    CfDefinicaoComponent,
    CfViewComponent,
    CfSidebarComponent,
    CfPosicaoRelativaComponent,
    CfPosicaoRelativaPcComponent,
    CfAngulosComponent,
    CfAnguloCentralComponent,
    CfAnguloInscritoComponent,
    CfAnguloCapazComponent,
    CfAnguloSegmentoComponent,
    CfAnguloNaoPertenceComponent,
    CfPosicaoRelativaRcComponent,
    CfPosicaoRelativaCcComponent,
    CfRelacoesMetricasComponent,
    CfRelacoesMetricasRcComponent,
    CfRelacoesMetricasRsComponent,
    CfRelacoesMetricasRstComponent,
    CfComprimentoCircunferenciaComponent,
    CfComprimentoCircunferenciaNpComponent,
    ClAreaCircComponent,
    ClAreaSetorComponent,
    ClAreaCoroaComponent,
    NoThousandDotsPipe,
    ClDefinicaoComponent,]
  })
export class CircunferenciasModule { }
