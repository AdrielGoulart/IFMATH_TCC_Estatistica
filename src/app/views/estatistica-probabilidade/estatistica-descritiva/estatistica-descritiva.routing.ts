import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { EstDefinicaoComponent } from './components/est-definicao/est-definicao.component';
import { EstApresentacaoComponent } from './components/est-apresentacao/est-apresentacao.component'
import { EstReferenciasComponent } from './components/est-referencias/est-referencias.component';
import { EstViewComponent } from './components/est-view/est-view.component';
//Gráficos
import { EstGraficoDefinicaoComponent } from './components/est-grafico-definicao/est-grafico-definicao.component'
import { EstGraficoQualiSetoresComponent } from './components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component';
import { EstGraficoQualiBarrasComponent } from './components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component';
import { EstGraficoQualiColunasComponent } from './components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component';
import { EstGraficoQualiBarrasMultiplasComponent } from './components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component';
import { EstGraficoQualiColunasMultiplasComponent } from './components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component';
import { EstGraficoQuantLinhasComponent } from './components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component';
import { EstGraficoQuantColunasELinhasComponent } from './components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component';
import { EstGraficoQuantColunasComponent } from './components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component';
import { EstGraficoQuantHistogramaComponent } from './components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component';
import { EstGraficoQuantPoligFreqComponent } from './components/Graficos/Quantitativos/est-grafico-quant-polig-freq/est-grafico-quant-polig-freq.component';
import { EstGraficoQuantDispersaoComponent } from './components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component';
//Medidas
import { EstMedidaIsoladoComponent } from './components/Medidas/est-medida-isolado/est-medida-isolado.component';
import { EstMedidaAgrupadoComponent } from './components/Medidas/est-medida-agrupado/est-medida-agrupado.component';
import { EstMedidaClasseComponent } from './components/Medidas/est-medida-classe/est-medida-classe.component';

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
        component: EstGraficoQualiSetoresComponent
      },
      {
        path: 'est_graficos_barras',
        component: EstGraficoQualiBarrasComponent
      },
      {
        path: 'est_graficos_colunas',
        component: EstGraficoQualiColunasComponent
      },

      {
        path: 'est_graficos_barras_mul',
        component: EstGraficoQualiBarrasMultiplasComponent
      },

      {
        path: 'est_graficos_colunas_mul',
        component: EstGraficoQualiColunasMultiplasComponent
      },

      {
        path: 'est_graficos_linhas',
        component: EstGraficoQuantLinhasComponent
      },

      {
        path: 'est_graficos_colunas_e_linhas',
        component: EstGraficoQuantColunasELinhasComponent
      },

      {
        path: 'est_graficos_quant_colunas',
        component: EstGraficoQuantColunasComponent
      },

      {
        path: 'est_graficos_quant_histograma',
        component: EstGraficoQuantHistogramaComponent
      },

      {
        path: 'est_graficos_quant_poligono_frequencia',
        component: EstGraficoQuantPoligFreqComponent
      },

      {
        path: 'est_graficos_quant_dispersao',
        component: EstGraficoQuantDispersaoComponent
      },

      // Rotas Medidas
      {
        path: 'est_medida_isolado',
        component: EstMedidaIsoladoComponent
      },
      {
        path: 'est_medida_agrupado',
        component: EstMedidaAgrupadoComponent
      },
      {
        path: 'est_medida_classe',
        component: EstMedidaClasseComponent
      },
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstatisticaDescritivaRouting { }
