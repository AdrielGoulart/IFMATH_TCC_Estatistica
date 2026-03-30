import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../../../core/core.module';
import { GraficosRoutingModule } from './graficos.routing';
import { EstatisticaModule } from '../estatistica.module';
import { ServicoGraficos } from './shared/graficos.service';

import { GraViewComponent } from './components/gra-view/gra-view.component';
import { GraSidebarComponent } from './components/gra-sidebar/gra-sidebar.component';
import { GraDescricaoComponent } from './components/gra-descricao/gra-descricao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    EstatisticaModule,
    CoreModule,
    GraficosRoutingModule
  ],
  declarations: [
    GraViewComponent,
    GraSidebarComponent,
    GraDescricaoComponent
  ],
  providers: [ ServicoGraficos ]
})
export class GraficosModule { }
