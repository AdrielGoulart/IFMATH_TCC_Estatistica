import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrDescricaoComponent } from "./components/cr-descricao/cr-descricao.component";
import { CrViewComponent } from "./components/cr-view/cr-view.component";
import { CrCaracteristicaComponent } from "./components/cr-caracteristica/cr-caracteristica.component";
import { CrCorrelacaoComponent } from "./components/cr-correlacao/cr-correlacao.component";
import { CrRegressaoComponent } from "./components/cr-regressao/cr-regressao.component";

const routes: Routes = [
  {
    path: "",
    component: CrViewComponent,
    children: [
      {
        path: "",
        redirectTo: "cr_descricao",
        pathMatch: "full",
      },
      {
        path: "cr_descricao",
        component: CrDescricaoComponent,
      },
      {
        path: "",
        redirectTo: "cr_caracteristica",
        pathMatch: "full",
      },
      {
        path: "cr_caracteristica",
        component: CrCaracteristicaComponent,
      },
      {
        path: "",
        redirectTo: "cr_correlacao",
        pathMatch: "full",
      },
      {
        path: "cr_correlacao",
        component: CrCorrelacaoComponent,
      },
      {
        path: "",
        redirectTo: "cr_regressao",
        pathMatch: "full",
      },
      {
        path: "cr_regressao",
        component: CrRegressaoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrelacaoRegressaoRoutingModule {}
