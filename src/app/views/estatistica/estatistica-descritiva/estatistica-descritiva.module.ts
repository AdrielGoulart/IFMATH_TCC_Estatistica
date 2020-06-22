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

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule,
    EstSharedModule,
    EstatisticaDescritivaRouting
  ],
  declarations: [
    EstViewComponent, 
    EstSidebarComponent, 
    EstDefinicaoComponent, 
    EstReferenciasComponent, 
    EstApresentacaoComponent, EstGraficoDefinicaoComponent
  ]
})
export class EstatisticaDescritivaModule { }
