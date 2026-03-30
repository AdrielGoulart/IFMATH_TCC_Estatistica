import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { NumerosDecimaisRoutingModule } from './numeros-decimais.routing';

import { ServicoNumerosDecimais } from './shared/numeros-decimais.service';

import { NdViewComponent } from './components/nd-view/nd-view.component';
import { NdSidebarComponent } from './components/nd-sidebar/nd-sidebar.component';
import { NdDescricaoComponent } from './components/nd-descricao/nd-descricao.component';
import { NdAdicaoComponent} from './components/nd-adicao/nd-adicao.component';
import { NdSubtracaoComponent } from './components/nd-subtracao/nd-subtracao.component';
import { NdDivisaoComponent } from './components/nd-divisao/nd-divisao.component';
import { NdMultiplicacaoComponent } from './components/nd-multiplicacao/nd-multiplicacao.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    NumerosDecimaisRoutingModule,
  ],
  declarations: [
    NdViewComponent,
    NdSidebarComponent,
    NdDescricaoComponent,
    NdAdicaoComponent,
    NdSubtracaoComponent,
    NdDivisaoComponent,
    NdMultiplicacaoComponent
  ],

  providers: [ServicoNumerosDecimais]
})
export class NumerosDecimaisModule { }
