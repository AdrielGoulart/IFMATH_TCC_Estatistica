import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ifmath-est-btn',
  templateUrl: './est-btn.component.html',
  styleUrls: ['./est-btn.component.scss']
})
export class EstBtnComponent implements OnInit {

  @Input() name: string = '';
  @Input() route: string = '';

  constructor() { }

  ngOnInit() {
  }

}
