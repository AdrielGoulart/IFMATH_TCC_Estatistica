import { Component, OnInit } from '@angular/core';

import { NavBarService } from './../../../../pagina-inicial/navbar/navbar.service';
@Component({
  selector: 'est-descricao',
  templateUrl: './est-descricao.component.html',
  styleUrls: ['./est-descricao.component.scss']
})
export class EstDescricaoComponent implements OnInit {

  constructor(private _servicoNavBar: NavBarService) { }

  ngOnInit() {
    this._servicoNavBar.mudarTitulo('Estatística');
  }

}
