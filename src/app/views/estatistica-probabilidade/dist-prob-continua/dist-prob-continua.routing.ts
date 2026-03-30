import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DpcDescricaoComponent } from "./components/dpc-descricao/dpc-descricao.component";
import { DpcViewComponent } from "./components/dpc-view/dpc-view.component";

const routes: Routes = [
  {
    path: "",
    component: DpcViewComponent,
    children: [
      {
        path: "",
        redirectTo: "dpc_descricao",
        pathMatch: "full",
      },
      {
        path: "dpc_descricao",
        component: DpcDescricaoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribuicaoProbabilidadeContinuaRoutingModule {}
