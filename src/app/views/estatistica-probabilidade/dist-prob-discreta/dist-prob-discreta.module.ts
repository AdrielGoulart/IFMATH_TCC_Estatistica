import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "../../../shared/shared.module";
import { CoreModule } from "../../../core/core.module";
import { DistribuicaoProbabilidadeDiscretaRoutingModule } from "./dist-prob-discreta.routing";

import { ServicoDistribuicaoProbabilidadeDiscreta } from "./shared/dist-prob-discreta.service";

import { DpdViewComponent } from "./components/dpd-view/dpd-view.component";
import { DpdSidebarComponent } from "./components/dpd-sidebar/dpd-sidebar.component";
import { DpdDescricaoComponent } from "./components/dpd-descricao/dpd-descricao.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    DistribuicaoProbabilidadeDiscretaRoutingModule,
  ],
  declarations: [DpdViewComponent, DpdSidebarComponent, DpdDescricaoComponent],

  providers: [ServicoDistribuicaoProbabilidadeDiscreta],
})
export class DistribuicaoProbabilidadeDiscretaModule {}
