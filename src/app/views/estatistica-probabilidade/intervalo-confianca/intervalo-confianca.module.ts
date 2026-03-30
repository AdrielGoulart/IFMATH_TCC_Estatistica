import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "../../../shared/shared.module";
import { CoreModule } from "../../../core/core.module";
import { IntervaloConfiancaRoutingModule } from "./intervalo-confianca.routing";

import { ServicoIntervaloConfianca } from "./shared/intervalo-confianca.service";

import { IcViewComponent } from "./components/ic-view/ic-view.component";
import { IcSidebarComponent } from "./components/ic-sidebar/ic-sidebar.component";
import { IcDescricaoComponent } from "./components/ic-descricao/ic-descricao.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    IntervaloConfiancaRoutingModule,
  ],
  declarations: [IcViewComponent, IcSidebarComponent, IcDescricaoComponent],

  providers: [ServicoIntervaloConfianca],
})
export class IntervaloConfiancaModule {}
