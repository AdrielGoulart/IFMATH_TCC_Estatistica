import  { EstatisticaDescritivaRouting } from './estatistica-descritiva.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { EstSharedModule } from './shared/est-shared.module';

//Componentes
import { EstViewComponent } from './components/est-view/est-view.component';
import { EstSidebarComponent } from './components/est-sidebar/est-sidebar.component';
import { EstDefinicaoComponent } from './components/est-definicao/est-definicao.component';
import { EstReferenciasComponent } from './components/est-referencias/est-referencias.component';
import { EstApresentacaoComponent } from './components/est-apresentacao/est-apresentacao.component';

//Gráficos
import { EstGraficoDefinicaoComponent } from './components/est-grafico-definicao/est-grafico-definicao.component';
import { EstGraficoSetoresComponent } from './components/est-grafico-setores/est-grafico-setores.component';
import { EstGraficoBarrasComponent } from './components/est-grafico-barras/est-grafico-barras.component';
import { EstGraficoColunasComponent } from './components/est-grafico-colunas/est-grafico-colunas.component';
import { EstGraficoBarrasMultiplasComponent } from './components/est-grafico-barras-multiplas/est-grafico-barras-multiplas.component';
import { EstGraficoColunasMultiplasComponent } from './components/est-grafico-colunas-multiplas/est-grafico-colunas-multiplas.component';
import { EstGraficoLinhasComponent } from './components/est-grafico-linhas/est-grafico-linhas.component';
import { EstGraficoColunasELinhasComponent } from './components/est-grafico-colunas-e-linhas/est-grafico-colunas-e-linhas.component';
import { EstGraficoQuantColunasComponent } from './components/est-grafico-quant-colunas/est-grafico-quant-colunas.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule,
    EstSharedModule,
    EstatisticaDescritivaRouting,
  ],
  declarations: [
    EstViewComponent, 
    EstSidebarComponent, 
    EstDefinicaoComponent, 
    EstReferenciasComponent, 
    EstApresentacaoComponent, 
    EstGraficoDefinicaoComponent, 
    EstGraficoSetoresComponent, 
    EstGraficoBarrasComponent, 
    EstGraficoColunasComponent, 
    EstGraficoBarrasMultiplasComponent, 
    EstGraficoColunasMultiplasComponent, 
    EstGraficoLinhasComponent, 
    EstGraficoColunasELinhasComponent, 
    EstGraficoQuantColunasComponent
  ]
})
export class EstatisticaDescritivaModule { }
