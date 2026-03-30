import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlnViewComponent } from './components/pln-view/pln-view.component';
import { PlnDescriptionComponent } from './components/pln-description/pln-description.component';
import { PlnNumericValueComponent } from './components/pln-valor-numerico/pln-valor-numerico';
import { PlnAddAndSubComponent } from './components/pln-add-and-sub/pln-add-and-sub';
import { PlnMultiplicationComponent } from './components/pln-multiplication/pln-multiplication';

const routes: Routes = [

  {
    path: '',
    component: PlnViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'pln_descricao',
        pathMatch: 'full',
      },
      {
        path: 'pln_descricao',
        component: PlnDescriptionComponent
      },
      //path para valor numerico e outros...
      {
        path: 'pln_numeric_value',
        component: PlnNumericValueComponent
      },
      {
        path: 'pln_add_and_sub',
        component: PlnAddAndSubComponent
      },
      {
        path: 'pln_multiplication',
        component: PlnMultiplicationComponent
      }
    ]
  }



];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolinomiosRoutingModule { }
