import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { MultiplosDivisoresRoutingModule } from './multiplos-divisores.routing';

import { ServicoMultiplosDivisores } from './shared/multiplos-divisores.service';

import { MdViewComponent } from './components/md-view/md-view.component';
import { MdSidebarComponent } from './components/md-sidebar/md-sidebar.component';
import { MdDescricaoComponent } from './components/md-descricao/md-descricao.component';
import { MdMmcEncontrarComponent } from './components/md-mmc-encontrar/md-mmc-encontrar.component'
import { MdMmcDecomposicaoComponent } from './components/md-mmc-decomposicao/md-mmc-decomposicao.component'
import { MdMdcDivisoesSucessivasComponent } from './components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component'
import { MdMdcDecomposicaoComponent } from './components/md-mdc-decomposicao/md-mdc-decomposicao.component'
import { MdPrimoVerificaComponent } from './components/md-primo-verifica/md-primo-verifica.component';
import { MdPrimoDecomposicaoComponent } from './components/md-primo-decomposicao/md-primo-decomposicao.component';
import { MdGeraDivisoresComponent } from './components/md-gera-divisores/md-gera-divisores.component';
import { MdGeraMultiplosComponent } from './components/md-gera-multiplos/md-gera-multiplos.component';
import { MdVerificaDivisoresComponent } from './components/md-verifica-divisor/md-verifica-divisores.component';
import { MdVerificaMultiplosComponent } from './components/md-verifica-multiplo/md-verifica-multiplos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    MultiplosDivisoresRoutingModule,
  ],
  declarations: [
    MdViewComponent,
    MdSidebarComponent,
    MdDescricaoComponent,
    MdMmcEncontrarComponent,
    MdMmcDecomposicaoComponent,
    MdMdcDecomposicaoComponent,
    MdMdcDivisoesSucessivasComponent,
    MdPrimoVerificaComponent,
    MdPrimoDecomposicaoComponent,
    MdGeraDivisoresComponent,
    MdGeraMultiplosComponent,
    MdVerificaDivisoresComponent,
    MdVerificaMultiplosComponent
  ],

  providers: [ServicoMultiplosDivisores]
})
export class MultiplosDivisoresModule { }
