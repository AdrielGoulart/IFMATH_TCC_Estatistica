import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EntrMenuComponent } from './entr-menu/entr-menu.component';
import { EntrViewComponent } from './entr-view/entr-view.component';
import { DadosIsoladosComponent } from './dados-isolados/dados-isolados.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    EntrMenuComponent,
    EntrViewComponent,
    DadosIsoladosComponent
  ],
  exports: [
    EntrViewComponent
  ]
})

export class EntradasModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EntradasModule,
      providers: []
    };
  }
}
