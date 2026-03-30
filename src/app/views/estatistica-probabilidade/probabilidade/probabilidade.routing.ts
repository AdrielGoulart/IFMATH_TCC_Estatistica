import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProbDescricaoComponent } from "./components/prob-descricao/prob-descricao.component";
import { ProbViewComponent } from "./components/prob-view/prob-view.component";

const routes: Routes = [
  {
    path: "",
    component: ProbViewComponent,
    children: [
      {
        path: "",
        redirectTo: "prob_descricao",
        pathMatch: "full",
      },
      {
        path: "prob_descricao",
        component: ProbDescricaoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropabilidadeRoutingModule {}
