import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { EstDefinicaoComponent } from './components/est-definicao/est-definicao.component';
import { EstApresentacaoComponent } from './components/est-apresentacao/est-apresentacao.component'
import { EstReferenciasComponent } from './components/est-referencias/est-referencias.component';
import { EstViewComponent } from './components/est-view/est-view.component';
//Gráficos
import { EstGraficoDefinicaoComponent } from './components/est-grafico-definicao/est-grafico-definicao.component'
import { EstGraficoSetoresComponent } from './components/est-grafico-setores/est-grafico-setores.component';
import {  EstGraficoBarrasComponent } from './components/est-grafico-barras/est-grafico-barras.component';

const routes: Routes = [{
  
  path: '',
  component: EstViewComponent,
  children: [
      {
          path: '',
          redirectTo: 'est_definicao',
          pathMatch: 'full',
      },
      
      //Rotas menu lateral principal
      {
        path: 'est_definicao',
        component: EstDefinicaoComponent
      },
      {
        path: 'est_apresentacao',
        component: EstApresentacaoComponent
      },
      {
        path: 'est_referencias',
        component: EstReferenciasComponent
      },
      //Rotas Gráficos
      {
        path: 'est_graficos',
        component: EstGraficoDefinicaoComponent
      },
      {
        path: 'est_graficos_setores',
        component: EstGraficoSetoresComponent
      },
      {
        path: 'est_graficos_barras',
        component: EstGraficoBarrasComponent
      },
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstatisticaDescritivaRouting { }
