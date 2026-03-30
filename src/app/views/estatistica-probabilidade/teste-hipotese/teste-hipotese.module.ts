import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "../../../shared/shared.module";
import { CoreModule } from "../../../core/core.module";
import { TesteHipoteseRoutingModule } from "./teste-hipotese.routing";

import { ServicoTesteHipotese } from "./shared/teste-hipotese.service";

import { ThViewComponent } from "./components/th-view/th-view.component";
import { ThSidebarComponent } from "./components/th-sidebar/th-sidebar.component";
import { ThDescricaoComponent } from "./components/th-descricao/th-descricao.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    TesteHipoteseRoutingModule,
  ],
  declarations: [ThViewComponent, ThSidebarComponent, ThDescricaoComponent],

  providers: [ServicoTesteHipotese],
})
export class TesteHipoteseModule {}
