import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { FracoesRoutingModule } from './fracoes.routing';

import { ServicoFracoes } from './shared/fracoes.service';

import { FrViewComponent } from './components/fr-view/fr-view.component';
import { FrSidebarComponent } from './components/fr-sidebar/fr-sidebar.component';
import { FrDescricaoComponent } from './components/fr-descricao/fr-descricao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    FracoesRoutingModule,
  ],
  declarations: [
    FrViewComponent,
    FrSidebarComponent,
    FrDescricaoComponent,
  ],

  providers: [ServicoFracoes]
})
export class FracoesModule { }
