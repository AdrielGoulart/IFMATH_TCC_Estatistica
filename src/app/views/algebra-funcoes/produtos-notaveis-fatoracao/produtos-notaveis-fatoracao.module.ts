import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ServicoPnf} from './shared/pnf.service';
import { IPNFExpression} from './shared/pnf.model';

import { PnfRoutingModule } from './produtos-notaveis-fatoracao.routing';
import { PnfViewComponent } from './components/pnf-view/pnf-view.component';
import { PnfSidebarComponent } from './components/pnf-sidebar/pnf-sidebar.component';
import { PnfDefinicaoComponent } from './components/pnf-definicao/pnf-definicao.component';
import { PnfNotableProductComponent } from './components/pnf-prod-notavel/pnf-prod-notavel.component';
import { PnfFatorationComponent } from './components/pnf-fatoracao/pnf-fatoracao.component';



@NgModule({

    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      SharedModule,
      CoreModule,
      PnfRoutingModule,
    ],

    declarations: [
      PnfViewComponent,
      PnfSidebarComponent,
      PnfDefinicaoComponent,
      PnfNotableProductComponent,
      PnfFatorationComponent
    ],

    providers: [ServicoPnf,IPNFExpression]

  })
export class ProdutosNotaveisFatoracaoModule { }
