import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../../../core/core.module';

import { MtcRoutingModule } from './mtc.routing';
import { EstatisticaModule } from '../estatistica.module';
import { ServicoMedidasTendenciaCentral } from './shared/medidas-tendencia-central.service';

import { MtcViewComponent } from './components/mtc-view/mtc-view.component';
import { MtcSidebarComponent } from './components/mtc-sidebar/mtc-sidebar.component';
import { MtcDescricaoComponent } from './components/mtc-descricao/mtc-descricao.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    EstatisticaModule,
    CoreModule,
    MtcRoutingModule
  ],
  declarations: [
    MtcViewComponent,
    MtcSidebarComponent,
    MtcDescricaoComponent
  ],

  providers: [ServicoMedidasTendenciaCentral]
})
export class MedidasTendenciaCentralModule { }
