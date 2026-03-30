import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'est-form-msg-error',
  templateUrl: './est-form-msg-error.component.html',
  styleUrls: ['./est-form-msg-error.component.scss']
})
export class EstFormMsgErrorComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor() { }

  ngOnInit() {
  }

}
