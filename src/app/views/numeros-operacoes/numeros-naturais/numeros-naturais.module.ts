import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { NumerosNaturaisRoutingModule } from './numeros-naturais.routing';

import { ServicoNumerosNaturais } from './shared/numeros-naturais.service';

import { NnViewComponent } from './components/nn-view/nn-view.component';
import { NnSidebarComponent } from './components/nn-sidebar/nn-sidebar.component';
import { NnDescricaoComponent } from './components/nn-descricao/nn-descricao.component';
import { NnComparacaoNumerosComponent } from './components/nn-comparacao-numeros/nn-comparacao-numeros.component';
import { NnLeituraEscritaComponent } from './components/nn-leitura-escrita/nn-leitura-escrita.component';
import { NnAntecessorSucessorComponent } from './components/nn-antecessor-sucessor/nn-antecessor-sucessor.component';
import { NnAdicaoComponent } from './components/nn-adicao/nn-adicao.component';
import { NnSubtracaoComponent } from './components/nn-subtracao/nn-subtracao.component';
import { NnMultiplicacaoComponent } from './components/nn-multiplicacao/nn-multiplicacao.component';
import { NnDivisaoComponent } from './components/nn-divisao/nn-divisao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    NumerosNaturaisRoutingModule,
  ],
  declarations: [
    NnViewComponent,
    NnSidebarComponent,
    NnDescricaoComponent,
    NnComparacaoNumerosComponent,
    NnAntecessorSucessorComponent,
    NnLeituraEscritaComponent,
    NnAdicaoComponent,
    NnSubtracaoComponent,
    NnMultiplicacaoComponent,
    NnDivisaoComponent
  ],

  providers: [ServicoNumerosNaturais]
})
export class NumerosNaturaisModule { }
