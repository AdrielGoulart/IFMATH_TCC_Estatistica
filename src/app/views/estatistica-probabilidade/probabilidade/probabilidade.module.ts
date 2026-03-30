import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "../../../shared/shared.module";
import { CoreModule } from "../../../core/core.module";
import { PropabilidadeRoutingModule } from "./probabilidade.routing";

import { ServicoPropabilidade } from "./shared/probabilidade.service";

import { ProbViewComponent } from "./components/prob-view/prob-view.component";
import { ProbSidebarComponent } from "./components/prob-sidebar/prob-sidebar.component";
import { ProbDescricaoComponent } from "./components/prob-descricao/prob-descricao.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    PropabilidadeRoutingModule,
  ],
  declarations: [
    ProbViewComponent,
    ProbSidebarComponent,
    ProbDescricaoComponent,
  ],

  providers: [ServicoPropabilidade],
})
export class ProbabilidadeModule {}
