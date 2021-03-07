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
import { EstGraficoQualiSetoresComponent } from './components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component';
import { EstGraficoQualiBarrasComponent } from './components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component';
import { EstGraficoQualiColunasComponent } from './components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component';
import { EstGraficoQualiBarrasMultiplasComponent } from './components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component';
import { EstGraficoQualiColunasMultiplasComponent } from './components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component';
import { EstGraficoQuantLinhasComponent } from './components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component';
import { EstGraficoQuantColunasELinhasComponent } from './components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component';
import { EstGraficoQuantColunasComponent } from './components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component';
import { EstGraficoQuantHistogramaComponent } from './components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component';
import { EstGraficoQuantPoligonoFrequenciaComponent } from './components/Graficos/Quantitativos/est-grafico-quant-poligono-frequencia/est-grafico-quant-poligono-frequencia.component';
import { EstGraficoQuantDispersaoComponent } from './components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component';


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
    EstGraficoQualiBarrasComponent, 
    EstGraficoQualiColunasComponent, 
    EstGraficoQualiSetoresComponent, 
    EstGraficoQualiBarrasMultiplasComponent, 
    EstGraficoQualiColunasMultiplasComponent, 
    EstGraficoQuantLinhasComponent, 
    EstGraficoQuantColunasELinhasComponent,
    EstGraficoQuantColunasComponent, 
    EstGraficoQuantHistogramaComponent, 
    EstGraficoQuantPoligonoFrequenciaComponent, 
    EstGraficoQuantDispersaoComponent,
    
  ]
})
export class EstatisticaDescritivaModule { }
