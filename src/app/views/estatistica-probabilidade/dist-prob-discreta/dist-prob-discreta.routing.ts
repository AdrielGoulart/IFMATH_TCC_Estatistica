import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DpdDescricaoComponent } from "./components/dpd-descricao/dpd-descricao.component";
import { DpdViewComponent } from "./components/dpd-view/dpd-view.component";

const routes: Routes = [
  {
    path: "",
    component: DpdViewComponent,
    children: [
      {
        path: "",
        redirectTo: "dpd_descricao",
        pathMatch: "full",
      },
      {
        path: "dpd_descricao",
        component: DpdDescricaoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribuicaoProbabilidadeDiscretaRoutingModule {}
