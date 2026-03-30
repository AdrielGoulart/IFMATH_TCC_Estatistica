import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../../../core/core.module';
import { EstatisticaModule } from '../estatistica.module';
import { MdRoutingModule } from './md.routing';

import { ServicoMedidasDispersao } from './shared/medidas-dispersao.service';

import { MdViewComponent } from './components/md-view/md-view.component';
import { MdSidebarComponent } from './components/md-sidebar/md-sidebar.component';
import { MdDescricaoComponent } from './components/md-descricao/md-descricao.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    EstatisticaModule,
    CoreModule,
    MdRoutingModule
  ],
  declarations: [
    MdViewComponent,
    MdSidebarComponent,
    MdDescricaoComponent
  ],
  exports: [ MdViewComponent ],
  providers: [ ServicoMedidasDispersao ]
})
export class MedidasDispersaoModule { }
