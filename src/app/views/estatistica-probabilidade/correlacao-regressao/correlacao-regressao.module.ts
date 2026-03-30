import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "../../../shared/shared.module";
import { CoreModule } from "../../../core/core.module";
import { CorrelacaoRegressaoRoutingModule } from "./correlacao-regressao.routing";

import { ServicoCorrelacaoRegressao } from "./shared/correlacao-regressao.service";

import { CrViewComponent } from "./components/cr-view/cr-view.component";
import { CrSidebarComponent } from "./components/cr-sidebar/cr-sidebar.component";
import { CrDescricaoComponent } from "./components/cr-descricao/cr-descricao.component";
import { CrCaracteristicaComponent } from "./components/cr-caracteristica/cr-caracteristica.component";
import { CrCorrelacaoComponent } from "./components/cr-correlacao/cr-correlacao.component";
import { CrRegressaoComponent } from "./components/cr-regressao/cr-regressao.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    CorrelacaoRegressaoRoutingModule,
  ],
  declarations: [
    CrViewComponent,
    CrSidebarComponent,
    CrDescricaoComponent,
    CrCaracteristicaComponent,
    CrCorrelacaoComponent,
    CrRegressaoComponent,
  ],

  providers: [ServicoCorrelacaoRegressao],
})
export class CorrelacaoRegressaoModule {}
