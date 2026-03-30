import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { EstatisticaRoutingModule } from './estatistica.routing';
import { EstBtnComponent } from './shared/components/est-btn/est-btn.component';
import { EstBaseViewComponent } from './shared/components/est-base-view/est-base-view.component';

import { EstEntradasComponent } from './shared/components/est-entradas/est-entradas.component';
import { EntradasModule } from './shared/components/est-entradas/entradas.module';
import { EstDescricaoComponent } from './shared/components/est-descricao/est-descricao.component';
import { EstSidebarComponent } from './shared/components/est-sidebar/est-sidebar.component';
import { EstViewComponent } from './shared/components/est-view/est-view.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    EntradasModule,
    EstatisticaRoutingModule,
  ],
  declarations: [
    EstBaseViewComponent,
    EstEntradasComponent,
    EstDescricaoComponent,
    EstSidebarComponent,
    EstViewComponent,
    EstBtnComponent
  ],

  exports:[
    EstBaseViewComponent,
  ]
})

export class EstatisticaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EstatisticaModule,
      providers: []
    };
  }
}
