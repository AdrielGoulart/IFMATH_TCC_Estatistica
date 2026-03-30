import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "../../../shared/shared.module";
import { CoreModule } from "../../../core/core.module";
import { DistribuicaoProbabilidadeContinuaRoutingModule } from "./dist-prob-continua.routing";

import { ServicoDistribuicaoProbabilidadeContinua } from "./shared/dist-prob-continua.service";

import { DpcViewComponent } from "./components/dpc-view/dpc-view.component";
import { DpcSidebarComponent } from "./components/dpc-sidebar/dpc-sidebar.component";
import { DpcDescricaoComponent } from "./components/dpc-descricao/dpc-descricao.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    DistribuicaoProbabilidadeContinuaRoutingModule,
  ],
  declarations: [DpcViewComponent, DpcSidebarComponent, DpcDescricaoComponent],

  providers: [ServicoDistribuicaoProbabilidadeContinua],
})
export class DistribuicaoProbabilidadeContinuaModule {}
