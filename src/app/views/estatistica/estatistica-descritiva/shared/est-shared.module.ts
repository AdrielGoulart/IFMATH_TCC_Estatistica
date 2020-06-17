import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { EstBaseViewComponent } from './components/est-base-view/est-base-view.component';
import { EstBtnComponent } from './components/est-btn/est-btn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[EstBaseViewComponent, EstBtnComponent],
  declarations: [EstBaseViewComponent, EstBtnComponent]
})
export class EstSharedModule { }
