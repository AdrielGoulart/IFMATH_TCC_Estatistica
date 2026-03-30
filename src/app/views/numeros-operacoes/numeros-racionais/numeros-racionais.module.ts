import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { NumerosRacionaisRoutingModule } from './numeros-racionais.routing';

import { ServicoNumerosRacionais } from './shared/numeros-racionais.service';

import { NrViewComponent } from './components/nr-view/nr-view.component';
import { NrSidebarComponent } from './components/nr-sidebar/nr-sidebar.component';
import { NrDescricaoComponent } from './components/nr-descricao/nr-descricao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    NumerosRacionaisRoutingModule,
  ],
  declarations: [
    NrViewComponent,
    NrSidebarComponent,
    NrDescricaoComponent
  ],

  providers: [ServicoNumerosRacionais]
})
export class NumerosRacionaisModule { }
