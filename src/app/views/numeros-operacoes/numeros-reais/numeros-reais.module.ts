import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { NumerosReaisRoutingModule } from './numeros-reais.routing';

import { ServicoNumerosReais } from './shared/numeros-reais.service';

import { NreViewComponent } from './components/nre-view/nre-view.component';
import { NreSidebarComponent } from './components/nre-sidebar/nre-sidebar.component';
import { NreDescricaoComponent } from './components/nre-descricao/nre-descricao.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    NumerosReaisRoutingModule,
  ],
  declarations: [
    NreViewComponent,
    NreSidebarComponent,
    NreDescricaoComponent,
    
  ],

  providers: [ServicoNumerosReais]
})
export class NumerosReaisModule { }
