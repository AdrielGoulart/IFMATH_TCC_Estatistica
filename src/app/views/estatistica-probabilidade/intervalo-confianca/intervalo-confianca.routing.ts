import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IcDescricaoComponent } from "./components/ic-descricao/ic-descricao.component";
import { IcViewComponent } from "./components/ic-view/ic-view.component";
const routes: Routes = [
  {
    path: "",
    component: IcViewComponent,
    children: [
      {
        path: "",
        redirectTo: "ic_descricao",
        pathMatch: "full",
      },
      {
        path: "ic_descricao",
        component: IcDescricaoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntervaloConfiancaRoutingModule {}
