import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { EstDefinicaoComponent } from './components/est-definicao/est-definicao.component';
import { EstApresentacaoComponent } from './components/est-apresentacao/est-apresentacao.component'
import { EstReferenciasComponent } from './components/est-referencias/est-referencias.component';
import { EstViewComponent } from './components/est-view/est-view.component';
import { EstGraficoDefinicaoComponent } from './components/est-grafico-definicao/est-grafico-definicao.component'

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
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstatisticaDescritivaRouting { }
