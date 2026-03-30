import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { NumerosInteirosRoutingModule } from './numeros-inteiros.routing';

import { ServicoNumerosInteiros } from './shared/numeros-inteiros.service';

import { NiViewComponent } from './components/ni-view/ni-view.component';
import { NiSidebarComponent } from './components/ni-sidebar/ni-sidebar.component';
import { NiDescricaoComponent } from './components/ni-descricao/ni-descricao.component';
import { NiAdicaoComponent } from './components/ni-adicao/ni-adicao.component';
import { NiSubtracaoComponent } from './components/ni-subtracao/ni-subtracao.component';
import { NiAntecessorSucessorComponent } from './components/ni-antecessor-sucessor/ni-antecessor-sucessor.component';
import { NiComparacaoNumerosComponent } from './components/ni-comparacao-numeros/ni-comparacao-numeros.component';
import { NiMultiplicacaoComponent } from './components/ni-multiplicacao/ni-multiplicacao.component';
import { NiDivisaoComponent } from './components/ni-divisao/ni-divisao.component';
import { NiModuloComponent } from './components/ni-modulo/ni-modulo.component';
import { ExpressoesComponent } from './components/expressoes/expressoes.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    NumerosInteirosRoutingModule,
  ],
  declarations: [
    NiViewComponent,
    NiSidebarComponent,
    NiDescricaoComponent,
    NiAdicaoComponent,
    NiSubtracaoComponent,
    NiAntecessorSucessorComponent,
    NiComparacaoNumerosComponent,
    NiMultiplicacaoComponent,
    NiDivisaoComponent,
    NiModuloComponent,
    ExpressoesComponent
   
  ],

  providers: [ServicoNumerosInteiros]
})
export class NumerosInteirosModule { }
