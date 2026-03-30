import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'est-base-view',
  templateUrl: './est-base-view.component.html',
  styleUrls: ['./est-base-view.component.scss']
})
export class EstBaseViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jQueryConfiguracaoSlideBar();
  }

  private jQueryConfiguracaoSlideBar(): void {
    $(document).ready(function () {
      $('[data-toggle="offcanvas"]').click(function () {
        $('.ifmath-view__row__offcanvas').toggleClass('active');
      });
    });
  }

}
