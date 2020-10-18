import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { EstBaseViewComponent } from './components/est-base-view/est-base-view.component';
import { EstBtnComponent } from './components/est-btn/est-btn.component';
import { EstRightbarComponent } from './components/est-rightbar/est-rightbar.component';
import { EstChartComponent } from './components/est-chart/est-chart.component';
import { EstFormMsgErrorComponent } from './components/est-form-msg-error/est-form-msg-error.component';
import { EstBtnGraficoComponent } from './components/est-btn-grafico/est-btn-grafico.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[EstBaseViewComponent, EstBtnComponent, EstBtnGraficoComponent, EstFormMsgErrorComponent],
  declarations: [EstBaseViewComponent, EstBtnComponent, EstRightbarComponent, EstChartComponent, EstFormMsgErrorComponent, EstBtnGraficoComponent]
})
export class EstSharedModule { }
