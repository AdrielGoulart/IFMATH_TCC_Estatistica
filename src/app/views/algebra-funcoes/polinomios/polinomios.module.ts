import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import { ServicoPolinomios } from './shared/polinomios.service';

import { PlnViewComponent } from './components/pln-view/pln-view.component';
import { PlnSidebarComponent } from './components/pln-sidebar/pln-sidebar.component';
import { PlnDescriptionComponent } from './components/pln-description/pln-description.component';
import { PlnNumericValueComponent } from './components/pln-valor-numerico/pln-valor-numerico';
import { PolinomiosRoutingModule } from './polinomios.routing';
import { IPolynomialNumericValue } from './shared/polinomios.model';
import { PlnAddAndSubComponent } from './components/pln-add-and-sub/pln-add-and-sub';
import { PlnMultiplicationComponent } from './components/pln-multiplication/pln-multiplication';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    PolinomiosRoutingModule,
  ],

  declarations: [
    PlnViewComponent,
    PlnSidebarComponent,
    PlnDescriptionComponent,
    PlnNumericValueComponent,
    PlnAddAndSubComponent,
    PlnMultiplicationComponent,
  ],

  providers: [ServicoPolinomios, IPolynomialNumericValue]

})

export class PolinomiosModule { }
