import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { SistemasNumeracaoRoutingModule } from './sistemas-numeracao.routing';

import { ServicoSistemasNumeracao } from './shared/sistemas-numeracao.service';

import { SnViewComponent } from './components/sn-view/sn-view.component';
import { SnSidebarComponent } from './components/sn-sidebar/sn-sidebar.component';
import { SnDescricaoComponent } from './components/sn-descricao/sn-descricao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    SistemasNumeracaoRoutingModule,
  ],
  declarations: [
    SnViewComponent,
    SnSidebarComponent,
    SnDescricaoComponent,
  ],

  providers: [ServicoSistemasNumeracao]
})
export class SistemasNumeracaoModule { }
