webpackJsonp(["triangulo.module"],{

/***/ "./src/app/views/geometria/triangulo/componentes/angulo-compreendido/angulo-compreendido.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"arial.js\"></script> -->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css\">\r\n<form [formGroup]=\"formModel\">\r\n  <div class=\"angulo-compreendido\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-xl-8 angulo-compreendido__triangulo\">\r\n        <div class=\"col-sm-12 col-md-12 angulo-compreendido__triangulo__entrada\">\r\n          <h6>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 col-md-4\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon2\">Ângulo Â</span>\r\n                  <input type=\"number\" name=\"anguloVerticeA\" formControlName=\"anguloVerticeA\" class=\"form-control angulo-compreendido__entrada__input\"\r\n                    aria-describedby=\"sizing-addon2\" min=\"1\">\r\n                  <div class=\"angulo-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('anguloVerticeA').hasError('required') && formModel.get('anguloVerticeA').touched\">Campo\r\n                      inválido!</span>\r\n                  </div>\r\n                  <div class=\"angulo-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('anguloVerticeA').hasError('min')\">Campo inválido!</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-4\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon2\">Ângulo B</span>\r\n                  <input type=\"number\" name=\"anguloVerticeB\" formControlName=\"anguloVerticeB\" class=\"form-control angulo-compreendido__entrada__input\"\r\n                    aria-describedby=\"sizing-addon2\" min=\"1\">\r\n                  <div class=\"angulo-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('anguloVerticeB').hasError('required') && formModel.get('anguloVerticeB').touched\">Campo\r\n                      inválido!</span>\r\n                  </div>\r\n                  <div class=\"angulo-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('anguloVerticeB').hasError('min')\">Campo inválido!</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-4\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon input-grande\" id=\"sizing-addon2\">Lado compreendido</span>\r\n                  <input type=\"number\" name=\"ladoC\" formControlName=\"ladoC\" class=\"form-control angulo-compreendido__entrada__input\"\r\n                    aria-describedby=\"sizing-addon2\" min=\"1\">\r\n                  <div class=\"angulo-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('ladoC').hasError('required') && formModel.get('ladoC').touched\">Campo\r\n                      inválido!</span>\r\n                  </div>\r\n                  <div class=\"angulo-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('ladoC').hasError('min')\">Campo inválido!</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </h6>\r\n        </div>\r\n        <div *ngIf=\"this.formModel.get('isTriangle').value\"> {{notTriangle}} </div>\r\n        <div #container class=\"col-sm-12 col-md-12 angulo-compreendido__triangulo__desenho\">\r\n          <!-- resolução -->\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 col-xl-4 angulo-compreendido__resolucao\">\r\n        <div class=\"col-sm-12 col-md-12\">\r\n          <h4>Propriedades</h4>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-md-12 angulo-compreendido__resolucao__accordion\">\r\n          <div class=\"accordion\" id=\"accordionPropriedades\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header angulo-compreendido__explicacao__opcao__botao\" id=\"headingOne\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" (click)=\"onSetArea()\">\r\n                Área\r\n                = {{areaTemplate}}\r\n                <div class=\"angulo-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down angulo-compreendido__explicacao__opcao__botao__icon__fa__down\"\r\n                    aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 angulo-compreendido__resultado\">\r\n                        <span class=\"angulo-compreendido__resultado__explicacao\">\r\n                          Para mudar a base, basta escolher um lado e clicar sobre ele.\r\n                        </span>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"col-sm-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"angulo-compreendido__resultado__formula\" [equation]=\"equacaoArea\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\">Fórmula para calcular a área.\r\n                            </span>\r\n                            <span>\r\n                              <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseA'\">\r\n                                h = altura | a = base\r\n                              </div>\r\n                              <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseB'\">\r\n                                h = altura | b = base\r\n                              </div>\r\n                              <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseC'\">\r\n                                h = altura | c = base\r\n                              </div>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"col-sm-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"angulo-compreendido__resultado__formula\" [equation]=\"equacaoArea2\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\">Substituir os valores na fórmula.\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"col-sm-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"angulo-compreendido__resultado__formula\" [equation]=\"equacaoArea3\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\"> Resultado.</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header angulo-compreendido__explicacao__opcao__botao\" id=\"headingTwo\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\" (click)=\"onSetBaseAltura()\">\r\n                Base e Altura\r\n                <div class=\"angulo-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down angulo-compreendido__explicacao__opcao__botao__icon__fa__down\"\r\n                    aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 angulo-compreendido__resultado\">\r\n                        <span class=\"angulo-compreendido__resultado__explicacao\">\r\n                          Para mudar a base, basta escolher um lado e clicar sobre ele.\r\n                        </span>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-md-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            Base = {{ formModel.get('base').value }}\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            Altura = {{ formModel.get('altura').value }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header angulo-compreendido__explicacao__opcao__botao\" id=\"headingThree\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\" (click)=\"onSetMedidaLados()\">\r\n                Medida dos lados\r\n                <div class=\"angulo-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down angulo-compreendido__explicacao__opcao__botao__icon__fa__down\"\r\n                    aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\">Para saber o valor da medida de\r\n                              algum lado,\r\n                              basta escolher um lado e clicar sobre ele.\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <br>\r\n                          <br>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            Lado {{ formModel.get('ladoLetra').value }} = {{ formModel.get('ladoValor').value }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header angulo-compreendido__explicacao__opcao__botao\" id=\"headingFour\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseFour\" aria-expanded=\"true\" aria-controls=\"collapseFour\" (click)=\"onSetPerimetro()\">\r\n                Perímetro = {{perimetroTemplate}}\r\n                <div class=\"angulo-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down angulo-compreendido__explicacao__opcao__botao__icon__fa__down\"\r\n                    aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"angulo-compreendido__resultado__formula\" [equation]=\"equacaoPerimetro\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\">Fórmula para calcular o perímetro.\r\n                              Basta\r\n                              somar a medida dos lados!\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"angulo-compreendido__resultado__formula\" [equation]=\"equacaoPerimetro2\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\">Substituir os valores na fórmula.\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"angulo-compreendido__resultado__formula\" [equation]=\"equacaoPerimetro3\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\"> Resultado.</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header angulo-compreendido__explicacao__opcao__botao\" id=\"headingFive\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseFive\" aria-expanded=\"true\" aria-controls=\"collapseFive\" (click)=\"onSetTipoLados()\">\r\n                Tipo quanto aos Lados = {{formModel.get('tipoLados').value}}\r\n                <div class=\"angulo-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down angulo-compreendido__explicacao__opcao__botao__icon__fa__down\"\r\n                    aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\">\r\n                              {{ formModel.get('tipoLados').value }}\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Equilátero'\">\r\n                              O triângulo é equilátero porque os três lados possuem a mesma medida.\r\n                            </span>\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Escaleno'\">\r\n                              O triângulo é escaleno porque os três lados possuem medidas diferentes.\r\n                            </span>\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Isósceles'\">\r\n                              {{ formModel.get('tipoLadosIsosceles').value }}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header angulo-compreendido__explicacao__opcao__botao\" id=\"headingSix\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseSix\" aria-expanded=\"true\" aria-controls=\"collapseSix\" (click)=\"onSetTipoAngulos()\">\r\n                Tipo quanto as Ângulos = {{formModel.get('tipoAngulos').value}}\r\n                <div class=\"angulo-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down angulo-compreendido__explicacao__opcao__botao__icon__fa__down\"\r\n                    aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingSix\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 angulo-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\">\r\n                              {{ formModel.get('tipoAngulos').value }}\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Retângulo'\">\r\n                              O triângulo é retângulo porque possui um ângulo reto.\r\n                              <br> <br>\r\n                              <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                              O ângulo se torna reto quando seus lados são semi–retas opostas e a medida for de dois\r\n                              retos de 180°.\r\n                            </span>\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Obtusângulo'\">\r\n                              O triângulo é obtusângulo porque possui um ângulo obtuso.\r\n                              <br> <br>\r\n                              <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                              O ângulo se torna obtuso quando sua medida é maior que a medida de um ângulo reto de 90°.\r\n                            </span>\r\n                            <span class=\"angulo-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Acutângulo'\">\r\n                              O triângulo é acutângulo porque possui os três ângulos internos agudos.\r\n                              <br> <br>\r\n                              <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                              O ângulo se torna agudo quando sua medida é menor que a medida de um ângulo reto de 90°.\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <h4>Medida dos ângulos</h4>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Ângulo A = {{ anguloVerticeA }} &deg;\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Ângulo B = {{ anguloVerticeB }} &deg;\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Ângulo C = {{ anguloVerticeC }} &deg;\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/angulo-compreendido/angulo-compreendido.component.scss":
/***/ (function(module, exports) {

module.exports = ".angulo-compreendido {\n  margin-top: 0.5em;\n  height: auto;\n  margin-left: 0%; }\n  .angulo-compreendido__triangulo {\n    padding-left: 0px; }\n  .angulo-compreendido__triangulo__entrada {\n      padding-top: 0.5em;\n      padding-bottom: 0.5em;\n      padding-left: 15px; }\n  .angulo-compreendido__triangulo__entrada__input {\n        max-width: 80px; }\n  .angulo-compreendido__triangulo__entrada__titulo {\n        text-align: center;\n        padding-top: 1em; }\n  .angulo-compreendido__triangulo__entrada__validacao {\n        padding-left: 1em; }\n  .angulo-compreendido__triangulo__desenho {\n      padding-top: 1em;\n      padding-left: 1em;\n      text-align: center; }\n  .angulo-compreendido__resolucao {\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgba(70, 131, 180, 0.555);\n    border-top: none;\n    border-bottom: none;\n    border-right: none;\n    padding-left: 15px; }\n  .angulo-compreendido__resolucao__accordion {\n      padding-top: 1em; }\n  .angulo-compreendido--desabilitado {\n    display: none; }\n  .angulo-compreendido__erro {\n    width: 600px;\n    height: 600px; }\n  .angulo-compreendido__explicacao {\n    text-align: left;\n    margin-bottom: 1em; }\n  .angulo-compreendido__explicacao__opcao {\n      text-align: center; }\n  .angulo-compreendido__explicacao__opcao__botao {\n        cursor: pointer;\n        border-color: #4683b4;\n        color: #4683b4;\n        background-color: white !important; }\n  .angulo-compreendido__explicacao__opcao__botao__icon {\n          float: right;\n          font-size: 18px; }\n  .angulo-compreendido__explicacao__opcao__botao__icon__fa__down {\n            color: #99f510; }\n  .angulo-compreendido__explicacao__opcao__botao:hover {\n        background-color: #4683b4 !important;\n        color: white; }\n  .angulo-compreendido__explicacao__opcao__botao:link {\n        background-color: #4683b4 !important; }\n  .angulo-compreendido__resultado__explicacao {\n    text-align: center;\n    font-size: 20px; }\n  .angulo-compreendido__resultado__formula {\n    font-size: 25px;\n    text-align: center; }\n  .angulo-compreendido__resultado__formula--direita {\n      float: right; }\n  .angulo-compreendido__resultado__formula--esquerda {\n      float: left; }\n  .angulo-compreendido__conteudo {\n    border: solid 1px;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #4683b4;\n    margin-bottom: 1em; }\n  .dropdown-menu {\n  background-color: rgba(70, 131, 180, 0.555); }\n  .dropdown-item:hover {\n  background-color: #4683b4;\n  cursor: pointer; }\n  .input-group {\n  margin-top: 0.5em; }\n  .input-group-addon {\n    background-color: #4683b4;\n    text-align: center;\n    padding-top: 7px;\n    color: white;\n    font-size: 18px; }\n  .input-group-addon {\n  padding-left: 0.5em;\n  padding-right: 0.5em; }\n  ul {\n  list-style-type: none; }\n  .card-header {\n  background-color: rgba(70, 131, 180, 0.555); }\n  .card {\n  border-color: rgba(70, 131, 180, 0.555); }\n  #bordaCard {\n  border-bottom: none; }\n  @media screen and (max-width: 765px) {\n  .teste {\n    text-align: left; } }\n  @media screen and (min-width: 765px) {\n  .teste {\n    text-align: right;\n    padding-top: 1em; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/angulo-compreendido/angulo-compreendido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnguloCompreendidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnguloCompreendidoComponent = /** @class */ (function () {
    function AnguloCompreendidoComponent(fb) {
        this.fb = fb;
        this.formModel = this.fb.group({
            anguloVerticeA: [45, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            anguloVerticeB: [45, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            ladoC: [6, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            alturaVerticeA: [''],
            alturaVerticeB: [''],
            alturaVerticeC: [''],
            tipoLados: [''],
            tipoAngulos: [''],
            base: [0],
            altura: [0],
            ladoValor: [0],
            ladoLetra: [''],
            propriedade: [''],
            propriedadeDesenho: [''],
            tipoLadosIsosceles: [''],
            isTriangle: ['true'],
        });
        this.distanciaCamera = 5;
        this.geom = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this.stop = false;
        this.notTriangle = '';
    }
    AnguloCompreendidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.container = this.elementRef.nativeElement;
        console.log(this.container);
        this.init();
        this.formModel.valueChanges.subscribe(function (value) {
            _this.animate();
        });
    };
    AnguloCompreendidoComponent.prototype.ngOnDestroy = function () {
        this.stop = true;
    };
    AnguloCompreendidoComponent.prototype.init = function () {
        if (window.innerWidth > 1200) {
            this.screen = {
                width: window.innerWidth / 2.5,
                height: window.innerWidth / 2.5
            };
        }
        else if (window.innerWidth > 769) {
            this.screen = {
                width: window.innerWidth / 1.5,
                height: window.innerWidth / 1.5
            };
        }
        else {
            this.screen = {
                width: window.innerWidth * 0.9,
                height: window.innerWidth * 0.9
            };
        }
        var view = {
            angle: 90,
            aspect: this.screen.width / this.screen.height,
            near: 0.1,
            far: 1000
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xffffff); // Cor de fundo canvas
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](view.angle, view.aspect, view.near, view.far);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        this.scene.add(this.camera);
        this.camera.position.set(0, 0, this.distanciaCamera);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.container.appendChild(this.renderer.domElement);
        this.ladoA = 4;
        this.ladoB = 4;
        // this.ladoC = 6;
        this.letraA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.letraB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.letraC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelAltura = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.a = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.b = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.c = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.acharPontos();
        this.criarBaseAltura();
        this.criarTriangulo();
        this.scene.add(this.triangulo);
        this.moverCameraCentroTriangulo();
        this.adicionarLinhasTriangulo();
        this.formModel.get('propriedadeDesenho').setValue('BaseC');
        this.render();
    };
    AnguloCompreendidoComponent.prototype.render = function () {
        var self = this;
        (function render() {
            if (!self.stop) {
                requestAnimationFrame(render);
                self.renderer.render(self.scene, self.camera);
                self.animate();
            }
        }());
    };
    AnguloCompreendidoComponent.prototype.animate = function () {
        if (this.isTriangle()) {
            this.acharPontos();
            this.atualizarBaseAltura();
            this.moverCameraCentroTriangulo();
            this.desabilitardestaque();
            // this.calcularAngulos();
            this.calcularPerimetro();
            this.calcularArea();
            this.tipoTriangulos();
            this.calcularAlturaVertices();
            this.destaque();
            this.atualizarPontos();
            this.adicionarTexto('A', this.letraA, this.scene, this.distanciaCamera);
            this.adicionarTexto('B', this.letraB, this.scene, this.distanciaCamera);
            this.adicionarTexto('C', this.letraC, this.scene, this.distanciaCamera);
            this.adicionarTexto('a', this.labelLadoA, this.scene, this.distanciaCamera);
            this.adicionarTexto('b', this.labelLadoB, this.scene, this.distanciaCamera);
            this.adicionarTexto('c', this.labelLadoC, this.scene, this.distanciaCamera);
            this.adicionarTexto('h', this.labelAltura, this.scene, this.distanciaCamera);
            this.atualizarLabelVertices();
            this.atualizarLabelLados();
            this.atualizarLabelAltura();
            this.mostrarResultadoArea();
            this.mostrarResultadoBaseAltura();
            this.mostrarResultadoMedidaLados();
            this.mostrarResultadoPerimetro();
            this.formModel.get('isTriangle').setValue('true');
        }
        else {
            this.formModel.get('isTriangle').setValue('false');
            this.falseTriangle();
        }
    };
    AnguloCompreendidoComponent.prototype.isTriangle = function () {
        var a = this.formModel.get('anguloVerticeA').value * 1;
        var b = this.formModel.get('anguloVerticeB').value * 1;
        if (a + b < 180) {
            this.notTriangle = '';
            this.formModel.get('isTriangle').setValue('true');
            return true;
        }
        else {
            this.notTriangle = 'A soma dos ângulos dos vertices A e B devem ser menor que 180°';
            this.formModel.get('isTriangle').setValue('false');
            return false;
        }
    };
    AnguloCompreendidoComponent.prototype.criarPonto = function (x, y) {
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["CircleGeometry"](this.distanciaCamera / 50, 10);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x000000 });
        var circle = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        circle.position.x = x;
        circle.position.y = y;
        circle.position.z = 0.1;
        return circle;
    };
    AnguloCompreendidoComponent.prototype.criarTriangulo = function () {
        this.geom = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        var v1 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY, 0);
        var v2 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY, 0);
        var v3 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY, 0);
        var triangle = new __WEBPACK_IMPORTED_MODULE_1_three__["Triangle"](v1, v2, v3);
        this.geom.vertices.push(triangle.a);
        this.geom.vertices.push(triangle.b);
        this.geom.vertices.push(triangle.c);
        this.geom.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2));
        this.geom.verticesNeedUpdate = true;
        var mat = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x90EE90, transparent: true, opacity: 0.5, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this.triangulo = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geom, mat);
        this.geom.verticesNeedUpdate = true;
        this.triangulo.name = 'triangulo';
    };
    AnguloCompreendidoComponent.prototype.acharPontos = function () {
        this.anguloVerticeA = this.formModel.get('anguloVerticeA').value;
        this.anguloVerticeB = this.formModel.get('anguloVerticeB').value;
        this.anguloVerticeC = 180 - this.anguloVerticeA - this.anguloVerticeB;
        var a;
        var b;
        var c = this.formModel.get('ladoC').value;
        this.cordAX = 0;
        this.cordAY = 0;
        this.cordBX = c * 1;
        this.cordBY = 0;
        var anguloB = this.anguloVerticeA * (Math.PI / 180);
        var anguloC = this.anguloVerticeC * (Math.PI / 180);
        var anguloA = this.anguloVerticeB * (Math.PI / 180);
        a = (c / Math.sin(anguloC)) * Math.sin(anguloA);
        b = (c / Math.sin(anguloC)) * Math.sin(anguloB);
        var x = this.cordBX - (Math.cos(anguloA) * b);
        var y = Math.sin(anguloA) * b + this.cordBY;
        this.cordCX = x;
        this.cordCY = y;
        this.ladoA = b;
        this.ladoB = a;
        this.formModel.get('ladoC').setValue(c);
    };
    AnguloCompreendidoComponent.prototype.atualizarPontos = function () {
        this.scene.remove(this.a);
        this.scene.remove(this.b);
        this.scene.remove(this.c);
        this.a.geometry.dispose();
        this.b.geometry.dispose();
        this.c.geometry.dispose();
        this.a = this.criarPonto(this.cordAX, this.cordAY);
        this.a.name = "verticeA";
        this.b = this.criarPonto(this.cordBX, this.cordBY);
        this.b.name = "verticeB";
        this.c = this.criarPonto(this.cordCX, this.cordCY);
        this.c.name = "verticeC";
        this.scene.add(this.a);
        this.scene.add(this.b);
        this.scene.add(this.c);
        this.a.position.x = this.cordAX;
        this.a.position.y = this.cordAY;
        this.b.position.x = this.cordBX;
        this.b.position.y = this.cordBY;
        this.c.position.x = this.cordCX;
        this.c.position.y = this.cordCY;
        // Atualiza Triangulo
        this.geom.verticesNeedUpdate = true;
        this.geom.vertices[0].set(this.a.position.x, this.a.position.y, 0);
        this.geom.vertices[1].set(this.b.position.x, this.b.position.y, 0);
        this.geom.vertices[2].set(this.c.position.x, this.c.position.y, 0);
    };
    AnguloCompreendidoComponent.prototype.moverCameraCentroTriangulo = function () {
        // E Escala
        var temp;
        var e = this.cordCY;
        if (this.cordCX >= this.cordAX && this.cordCX <= this.cordBX) {
            temp = this.cordBX;
            if (temp > e) {
                e = temp;
            }
        }
        else if (this.cordCX < this.cordAX) {
            temp = this.cordBX - this.cordCX;
            if (temp > e) {
                e = temp;
            }
        }
        else {
            temp = this.cordCX - this.cordAX;
            if (temp > e) {
                e = temp;
            }
        }
        this.camera.position.z = (e * 1.25) / 1.5;
        this.distanciaCamera = this.camera.position.z;
        // Centro triangulo
        var m = this.cordBX * 1;
        var f = this.cordCX;
        this.camera.position.x = (m + f) / 3;
        this.camera.position.y = (this.cordAY + this.cordBY + this.cordCY) / 3;
    };
    AnguloCompreendidoComponent.prototype.adicionarLinhasTriangulo = function () {
        // //destaque
        // AB
        var spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY)]);
        var materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFF0000 });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueAB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueAB);
        // BC
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00FF00 });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueBC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueBC);
        // CA
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x0000FF });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueCA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueCA);
    };
    AnguloCompreendidoComponent.prototype.atualizarLinhasTriangulo = function (opacidadeAB, opacidadeBC, opacidadeCA) {
        var largura = this.distanciaCamera / 100;
        this.scene.remove(this.linhadestaqueAB);
        this.linhadestaqueAB.geometry.dispose();
        var spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY)]);
        var materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFF0000, opacity: opacidadeAB });
        materialLinhadestaque.transparent = true;
        var geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhadestaqueAB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha, materialLinhadestaque);
        this.linhadestaqueAB.name = 'linhadestaqueAB';
        this.scene.add(this.linhadestaqueAB);
        this.scene.remove(this.linhadestaqueBC);
        this.linhadestaqueBC.geometry.dispose();
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00FF00, opacity: opacidadeBC });
        materialLinhadestaque.transparent = true;
        var geometriaLinha2 = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhadestaqueBC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha2, materialLinhadestaque);
        this.linhadestaqueBC.name = 'linhadestaqueBC';
        this.scene.add(this.linhadestaqueBC);
        this.scene.remove(this.linhadestaqueCA);
        this.linhadestaqueCA.geometry.dispose();
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x0000FF, opacity: opacidadeCA });
        materialLinhadestaque.transparent = true;
        var geometriaLinha3 = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhadestaqueCA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha3, materialLinhadestaque);
        this.linhadestaqueCA.name = 'linhadestaqueCA';
        this.scene.add(this.linhadestaqueCA);
    };
    // public calcularAngulos(): void {
    //   let DAB = this.formModel.get('ladoA').value;
    //   let DBC = this.formModel.get('ladoB').value;
    //   let DCA = this.formModel.get('ladoC').value;
    //   this.anguloVerticeA = (Math.acos((Math.pow(DAB, 2) + Math.pow(DCA, 2) - Math.pow(DBC, 2)) /
    //     (2 * DAB * DCA)) * 180 / Math.PI).toFixed(2);
    //   this.anguloVerticeB = (Math.acos((Math.pow(DAB, 2) + Math.pow(DBC, 2) - Math.pow(DCA, 2)) /
    //     (2 * DAB * DBC)) * 180 / Math.PI).toFixed(2);
    //   this.anguloVerticeC = (Math.acos((Math.pow(DBC, 2) + Math.pow(DCA, 2) - Math.pow(DAB, 2)) /
    //     (2 * DBC * DCA)) * 180 / Math.PI).toFixed(2);
    // }
    AnguloCompreendidoComponent.prototype.criarBaseAltura = function () {
        var distancia = this.camera.position.z * 2;
        var curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, 0),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, 0)]);
        this.retaBaseB = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        var materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseA = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseB, materialLinha);
        this.scene.add(this.linhaRetaBaseA);
        var AX = this.cordAX;
        var AY = this.cordAY;
        var BX = this.cordBX;
        var BY = this.cordBY;
        var CX = this.cordCX;
        var CY = this.cordCY;
        var mA = (CY - AY) / (CX - AX);
        var mB = (CY - BY) / (CX - BX);
        this.pontoRetaAAY = (mA * (this.distanciaCamera * 2 - AX)) + AY;
        this.pontoRetaABY = (mA * (-this.distanciaCamera * 2 - AX)) + AY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.camera.position.z * 2, this.pontoRetaAAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-this.camera.position.z * 2, this.pontoRetaABY)]);
        this.retaBaseA = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseB = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseA, materialLinha);
        this.scene.add(this.linhaRetaBaseB);
        this.pontoRetaCAY = (mB * (this.distanciaCamera * 2 - BX)) + BY;
        this.pontoRetaCBY = (mB * (-this.distanciaCamera * 2 - BX)) + BY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.camera.position.z * 2, this.pontoRetaCAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-this.camera.position.z * 2, this.pontoRetaCBY)]);
        this.retaBaseC = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseC = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseC, materialLinha);
        this.scene.add(this.linhaRetaBaseC);
        var mA2 = (-1 / mA);
        var mB2 = (-1 / mB);
        this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
        this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, CY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, 0)]);
        this.caminhoAlturaC = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaC = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaC, materialLinha);
        this.scene.add(this.linhaAlturaC);
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, BY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
        this.caminhoAlturaA = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaB = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaA, materialLinha);
        this.scene.add(this.linhaAlturaB);
        this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
        this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, AY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
        this.caminhoAlturaB = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaA = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaB, materialLinha);
        this.scene.add(this.linhaAlturaA);
    };
    AnguloCompreendidoComponent.prototype.atualizarBaseAltura = function () {
        var distancia = this.camera.position.z + 10;
        var curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, 0),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, 0)]);
        this.retaBaseB.setFromPoints(curva.getPoints(1));
        this.retaBaseB.verticesNeedUpdate = true;
        var AX = this.cordAX;
        var AY = this.cordAY;
        var BX = this.cordBX;
        var BY = this.cordBY;
        var CX = this.cordCX;
        var CY = this.cordCY;
        var mA = (CY - AY) / (CX - AX);
        var mB = (CY - BY) / (CX - BX);
        this.pontoRetaAAY = (mA * ((distancia) - AX)) + AY;
        this.pontoRetaABY = (mA * ((-distancia) - AX)) + AY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaAAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaABY)]);
        this.retaBaseA.setFromPoints(curva.getPoints(1));
        this.retaBaseA.verticesNeedUpdate = true;
        this.pontoRetaCAY = (mB * (distancia - BX)) + BY;
        this.pontoRetaCBY = (mB * (-distancia - BX)) + BY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaCAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaCBY)]);
        this.retaBaseC.setFromPoints(curva.getPoints(1));
        this.retaBaseC.verticesNeedUpdate = true;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, CY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, 0)]);
        this.caminhoAlturaC.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaC.verticesNeedUpdate = true;
        var mA2 = (-1 / mA);
        var mB2 = (-1 / mB);
        this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
        this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, BY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
        this.caminhoAlturaA.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaA.verticesNeedUpdate = true;
        this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
        this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, AY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
        this.caminhoAlturaB.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaB.verticesNeedUpdate = true;
    };
    AnguloCompreendidoComponent.prototype.calcularPerimetro = function () {
        this.perimetro = this.ladoA + this.ladoB + this.formModel.get('ladoC').value;
    };
    AnguloCompreendidoComponent.prototype.calcularArea = function () {
        var ax = this.cordAX;
        var ay = this.cordAY;
        var bx = this.cordBX;
        var by = this.cordBY;
        var cx = this.cordCX;
        var cy = this.cordCY;
        this.area = (Math.abs((ax * by) + (ay * cx) + (bx * cy) - (by * cx) - (ax * cy) - (ay * bx)) * 0.5);
        this.areaTemplate = this.area.toFixed(2);
    };
    AnguloCompreendidoComponent.prototype.tipoTriangulos = function () {
        if (this.anguloVerticeA === 90 || this.anguloVerticeB === 90 || this.anguloVerticeC === 90) {
            this.formModel.get('tipoAngulos').setValue('Retângulo');
        }
        else if (this.anguloVerticeA > 90 || this.anguloVerticeB > 90 || this.anguloVerticeC > 90) {
            this.formModel.get('tipoAngulos').setValue('Obtusângulo');
        }
        else {
            this.formModel.get('tipoAngulos').setValue('Acutângulo');
        }
        var AB = this.formModel.get('ladoC').value;
        var BC = this.ladoA;
        var CA = this.ladoB;
        if (AB === BC && BC === CA) {
            this.formModel.get('tipoLados').setValue('Equilátero');
        }
        else if (AB !== BC && BC !== CA && CA !== AB) {
            this.formModel.get('tipoLados').setValue('Escaleno');
        }
        else {
            this.formModel.get('tipoLados').setValue('Isósceles');
            if (this.ladoA === this.ladoB) {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado a e o lado b possuem as medidas iguais.');
            }
            else if (this.ladoB === this.formModel.get('ladoC').value) {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado b e o lado c possuem as medidas iguais.');
            }
            else {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado c e o lado a possuem as medidas iguais.');
            }
        }
    };
    AnguloCompreendidoComponent.prototype.calcularAlturaVertices = function () {
        this.formModel.get('alturaVerticeA').setValue((this.area * 2) / this.ladoA);
        this.formModel.get('alturaVerticeB').setValue((this.area * 2) / this.ladoB);
        this.formModel.get('alturaVerticeC').setValue((this.area * 2) / this.formModel.get('ladoC').value);
    };
    AnguloCompreendidoComponent.prototype.desabilitardestaque = function () {
        this.atualizarLinhasTriangulo(0.2, 0.2, 0.2);
        this.linhaRetaBaseA.visible = false;
        this.linhaRetaBaseB.visible = false;
        this.linhaRetaBaseC.visible = false;
        this.linhaAlturaA.visible = false;
        this.linhaAlturaB.visible = false;
        this.linhaAlturaC.visible = false;
        this.triangulo.visible = false;
        this.labelAltura.visible = false;
    };
    AnguloCompreendidoComponent.prototype.destaque = function () {
        var ep = this.formModel.get('propriedade').value; // Escolha Principal
        var es = this.formModel.get('propriedadeDesenho').value; // Escolha Secundaria
        if (ep === 'area') {
            this.triangulo.visible = true;
            this.labelAltura.visible = true;
            if (es === 'BaseC') {
                this.linhaAlturaC.visible = true;
                this.linhaRetaBaseA.visible = true;
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.linhaAlturaB.visible = true;
                this.linhaRetaBaseB.visible = true;
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.linhaAlturaA.visible = true;
                this.linhaRetaBaseC.visible = true;
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'baseAltura') {
            this.labelAltura.visible = true;
            if (es === 'BaseC') {
                this.linhaAlturaC.visible = true;
                this.linhaRetaBaseA.visible = true;
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.linhaAlturaB.visible = true;
                this.linhaRetaBaseB.visible = true;
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.linhaAlturaA.visible = true;
                this.linhaRetaBaseC.visible = true;
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'medidaLados') {
            if (es === 'BaseC') {
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'perimetro') {
            this.atualizarLinhasTriangulo(1, 1, 1);
        }
        else if (ep === 'tipo') {
            this.atualizarLinhasTriangulo(1, 1, 1);
        }
    };
    AnguloCompreendidoComponent.prototype.adicionarTexto = function (valor, geom, scene, size) {
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000 });
        var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["FontLoader"]();
        loader.load('https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["TextGeometry"](valor, {
                font: font,
                size: size / 15,
                height: 0.0001,
                curveSegments: 12,
            });
            geom.geometry.dispose();
            geom.geometry = geometry;
            geom.material = material;
            scene.add(geom);
        });
    };
    AnguloCompreendidoComponent.prototype.atualizarLabelVertices = function () {
        var x, y, mx, my;
        var ed = 20; // divisor
        // A
        mx = (this.cordBX + this.cordCX) / 2;
        my = (this.cordBY + this.cordCY) / 2;
        if (this.cordAX > mx) {
            x = this.cordAX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordAX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordAY > my) {
            y = this.cordAY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordAY - this.distanciaCamera / (ed / 2);
        }
        this.letraA.position.x = x;
        this.letraA.position.y = y;
        // B
        mx = (this.cordAX + this.cordCX) / 2;
        my = (this.cordAY + this.cordCY) / 2;
        if (this.cordBX > mx) {
            x = this.cordBX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordBX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordBY > my) {
            y = this.cordBY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordBY - this.distanciaCamera / (ed / 2);
        }
        this.letraB.position.x = x;
        this.letraB.position.y = y;
        // C
        mx = (this.cordBX + this.cordAX) / 2;
        my = (this.cordBY + this.cordAY) / 2;
        if (this.cordCX > mx) {
            x = this.cordCX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordCX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordCY > my) {
            y = this.cordCY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordCY - this.distanciaCamera / (ed / 2);
        }
        this.letraC.position.x = x;
        this.letraC.position.y = y;
    };
    AnguloCompreendidoComponent.prototype.atualizarLabelLados = function () {
        var centrox = (this.cordAX + this.cordBX + this.cordCX) / 3;
        var centroy = (this.cordAY + this.cordBY + this.cordCY) / 3;
        var x, y, mx, my;
        var ed = 20; // divisor
        // A
        mx = (this.cordBX + this.cordCX) / 2;
        my = (this.cordBY + this.cordCY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoA.position.x = x;
        this.labelLadoA.position.y = y;
        // B
        mx = (this.cordAX + this.cordCX) / 2;
        my = (this.cordAY + this.cordCY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoB.position.x = x;
        this.labelLadoB.position.y = y;
        // C
        mx = (this.cordBX + this.cordAX) / 2;
        my = (this.cordBY + this.cordAY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoC.position.x = x;
        this.labelLadoC.position.y = y;
    };
    AnguloCompreendidoComponent.prototype.atualizarLabelAltura = function () {
        var es = this.formModel.get('propriedadeDesenho').value; // Escolha Secundaria
        if (es === 'BaseC') {
            this.labelAltura.position.x = this.cordCX;
            this.labelAltura.position.y = this.cordCY / 2;
        }
        else if (es === 'BaseB') {
            this.labelAltura.position.x = (this.cordBX + this.pontoRetaIntersecAX) / 2;
            this.labelAltura.position.y = (this.cordBY + this.pontoRetaIntersecAY) / 2;
        }
        else {
            this.labelAltura.position.x = (this.cordAX + this.pontoRetaIntersecBX) / 2;
            this.labelAltura.position.y = (this.cordAY + this.pontoRetaIntersecBY) / 2;
        }
    };
    AnguloCompreendidoComponent.prototype.onMouseClick = function (event) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        var xDoMouse = event.offsetX;
        var yDoMouse = event.offsetY;
        xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
        yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
        var raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        raycaster.setFromCamera(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](xDoMouse, yDoMouse), this.camera);
        var intersects = raycaster.intersectObjects([this.linhadestaqueAB, this.linhadestaqueBC, this.linhadestaqueCA]);
        if (intersects.length > 0) {
            var intersectedObject = intersects[0].object;
            if (intersectedObject.name === 'linhadestaqueAB') {
                this.formModel.get('propriedadeDesenho').setValue('BaseC');
            }
            else if (intersectedObject.name === 'linhadestaqueBC') {
                this.formModel.get('propriedadeDesenho').setValue('BaseA');
            }
            else if (intersectedObject.name === 'linhadestaqueCA') {
                this.formModel.get('propriedadeDesenho').setValue('BaseB');
            }
        }
    };
    AnguloCompreendidoComponent.prototype.onSetArea = function () {
        this.formModel.get('propriedade').setValue('area');
    };
    AnguloCompreendidoComponent.prototype.onSetBaseAltura = function () {
        this.formModel.get('propriedade').setValue('baseAltura');
    };
    AnguloCompreendidoComponent.prototype.onSetMedidaLados = function () {
        this.formModel.get('propriedade').setValue('medidaLados');
    };
    AnguloCompreendidoComponent.prototype.onSetPerimetro = function () {
        this.formModel.get('propriedade').setValue('perimetro');
    };
    AnguloCompreendidoComponent.prototype.onSetTipoLados = function () {
        this.formModel.get('propriedade').setValue('tipoLados');
    };
    AnguloCompreendidoComponent.prototype.onSetTipoAngulos = function () {
        this.formModel.get('propriedade').setValue('tipoAngulos');
    };
    AnguloCompreendidoComponent.prototype.onSetMedidaAngulos = function () {
        this.formModel.get('propriedade').setValue('medidaAngulos');
    };
    AnguloCompreendidoComponent.prototype.mostrarResultadoArea = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        var base;
        var altura;
        var letraBase;
        if (selecionado === 'BaseA') {
            base = this.ladoA.toFixed(2);
            altura = (this.formModel.get('alturaVerticeA').value).toFixed(2);
            letraBase = 'a';
        }
        else if (selecionado === 'BaseB') {
            base = this.ladoB.toFixed(2);
            altura = (this.formModel.get('alturaVerticeB').value).toFixed(2);
            letraBase = 'b';
        }
        else if (selecionado === 'BaseC') {
            base = this.formModel.get('ladoC').value;
            altura = (this.formModel.get('alturaVerticeC').value).toFixed(2);
            letraBase = 'c';
        }
        this.equacaoArea = 'A = \\frac{' + letraBase + '\\times h }{2}';
        this.equacaoArea2 = 'A = \\frac{' + base.toFixed(2)
            + '\\times' + altura + '}{2}';
        this.equacaoArea3 = 'A = ' + this.areaTemplate + 'u.a.';
    };
    AnguloCompreendidoComponent.prototype.mostrarResultadoBaseAltura = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        if (selecionado === 'BaseA') {
            this.formModel.get('base').setValue(this.ladoA.toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeA').value).toFixed(2));
        }
        else if (selecionado === 'BaseB') {
            this.formModel.get('base').setValue(this.ladoB.toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeB').value).toFixed(2));
        }
        else if (selecionado === 'BaseC') {
            this.formModel.get('base').setValue(this.formModel.get('ladoC').value.toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeC').value).toFixed(2));
        }
    };
    AnguloCompreendidoComponent.prototype.mostrarResultadoMedidaLados = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        if (selecionado === 'BaseA') {
            this.formModel.get('ladoValor').setValue(this.ladoA.toFixed(2));
            this.formModel.get('ladoLetra').setValue('a');
        }
        else if (selecionado === 'BaseB') {
            this.formModel.get('ladoValor').setValue(this.ladoB.toFixed(2));
            this.formModel.get('ladoLetra').setValue('b');
        }
        else if (selecionado === 'BaseC') {
            this.formModel.get('ladoValor').setValue(this.formModel.get('ladoC').value.toFixed(2));
            this.formModel.get('ladoLetra').setValue('c');
        }
    };
    AnguloCompreendidoComponent.prototype.mostrarResultadoPerimetro = function () {
        this.equacaoPerimetro = 'P = a + b + c';
        this.equacaoPerimetro2 = 'P =' + this.ladoA.toFixed(2) +
            '+' + this.ladoB.toFixed(2) +
            '+' + this.formModel.get('ladoC').value.toFixed(2);
        this.equacaoPerimetro3 = 'P =' + this.perimetro.toFixed(2) + ' u.m.';
        this.perimetroTemplate = this.perimetro.toFixed(2);
    };
    AnguloCompreendidoComponent.prototype.falseTriangle = function () {
        this.camera.position.x = -300;
        this.camera.position.y = -300;
        this.camera.position.z = 5;
    };
    AnguloCompreendidoComponent.prototype.onWindowResize = function (event) {
        if (event.target.innerWidth > 1200) {
            this.screen.width = event.target.innerWidth / 2.5;
            this.screen.height = event.target.innerWidth / 2.5;
        }
        else if (event.target.innerWidth > 769) {
            this.screen.width = event.target.innerWidth / 1.5;
            this.screen.height = event.target.innerWidth / 1.5;
        }
        else {
            this.screen.width = event.target.innerWidth * 0.9;
            this.screen.height = event.target.innerWidth * 0.9;
        }
        this.renderer.setSize(this.screen.width, this.screen.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AnguloCompreendidoComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touch', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AnguloCompreendidoComponent.prototype, "onMouseClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AnguloCompreendidoComponent.prototype, "onWindowResize", null);
    AnguloCompreendidoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-angulo-compreendido',
            template: __webpack_require__("./src/app/views/geometria/triangulo/componentes/angulo-compreendido/angulo-compreendido.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/triangulo/componentes/angulo-compreendido/angulo-compreendido.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AnguloCompreendidoComponent);
    return AnguloCompreendidoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/angulos-internos/angulos-internos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/angulos-internos/angulos-internos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  angulos-internos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/angulos-internos/angulos-internos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngulosInternosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AngulosInternosComponent = /** @class */ (function () {
    function AngulosInternosComponent() {
    }
    AngulosInternosComponent.prototype.ngOnInit = function () {
    };
    AngulosInternosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-angulos-internos',
            template: __webpack_require__("./src/app/views/geometria/triangulo/componentes/angulos-internos/angulos-internos.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/triangulo/componentes/angulos-internos/angulos-internos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngulosInternosComponent);
    return AngulosInternosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/definicao-triangulo/definicao-triangulo.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-description definicao\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12\">\r\n            <h3 class=\"title\">Triângulos</h3>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"col-md-12 col-sm-12\">\r\n            <h4 class=\"title\">Definição</h4>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12\">\r\n            <p class=\"ifmath-description__text ifmath-description__text--justify definicao\">\r\n                <span>\r\n                    <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                    Triângulo ou trilátero é um polígono que tem três lados e três ângulos.\r\n                </span>\r\n            </p>\r\n            <p class=\"ifmath-description__text ifmath-description__text--justify definicao\">\r\n                <span>\r\n                    <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                    Podemos, ainda, definir triângulo como uma figura geométrica formada por três segmentos,\r\n                    cujas extremidades são três pontos não alinhados.\r\n                </span>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12\">\r\n            <h4 class=\"title\">Elementos</h4>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-6 legenda\">\r\n                    Vértices: A, B, C <br>\r\n                    Lados: a, b, c <br>\r\n                    Ângulos: &alpha;, &beta;, &gamma;\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-6 imagem\">\r\n                    <img src=\"assets/images/triangulo.PNG\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/definicao-triangulo/definicao-triangulo.component.scss":
/***/ (function(module, exports) {

module.exports = ".definicao {\n  font-size: 20px; }\n\n.imagem {\n  text-align: left; }\n\nimg {\n  width: 300px;\n  height: 200px; }\n\n.legenda {\n  text-align: center;\n  padding-top: 3em;\n  font-size: 24px; }\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/definicao-triangulo/definicao-triangulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinicaoTrianguloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefinicaoTrianguloComponent = /** @class */ (function () {
    function DefinicaoTrianguloComponent() {
    }
    DefinicaoTrianguloComponent.prototype.ngOnInit = function () {
    };
    DefinicaoTrianguloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-definicao-triangulo',
            template: __webpack_require__("./src/app/views/geometria/triangulo/componentes/definicao-triangulo/definicao-triangulo.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/triangulo/componentes/definicao-triangulo/definicao-triangulo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefinicaoTrianguloComponent);
    return DefinicaoTrianguloComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/lado-compreendido/lado-compreendido.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"arial.js\"></script> -->\r\n\r\n<form [formGroup]=\"formModel\">\r\n  <div class=\"lado-compreendido\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-xl-8 lado-compreendido__triangulo\">\r\n        <div class=\"col-sm-12 col-md-12 lado-compreendido__triangulo__entrada\">\r\n          <h6>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 col-md-4\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon2\">Lado b</span>\r\n                  <input type=\"number\" name=\"ladoB\" formControlName=\"ladoB\" class=\"form-control lado-compreendido__entrada__input\"\r\n                    aria-describedby=\"sizing-addon2\" min=\"1\">\r\n                  <div class=\"lado-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('ladoB').hasError('required') && formModel.get('ladoB').touched\">Campo\r\n                      inválido!</span>\r\n                  </div>\r\n                  <div class=\"lado-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('ladoB').hasError('min')\">Campo inválido!</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-4\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon2\">Lado c</span>\r\n                  <input type=\"number\" name=\"ladoC\" formControlName=\"ladoC\" class=\"form-control lado-compreendido__entrada__input\"\r\n                    aria-describedby=\"sizing-addon2\">\r\n                  <div class=\"lado-compreendido__entrada__validacao\" min=\"1\">\r\n                    <span *ngIf=\"formModel.get('ladoC').hasError('required') && formModel.get('ladoC').touched\">Campo\r\n                      inválido!</span>\r\n                  </div>\r\n                  <div class=\"lado-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('ladoC').hasError('min')\">Campo inválido!</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-4\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon input-grande\" id=\"sizing-addon2\">Ângulo compreendido</span>\r\n                  <input type=\"number\" name=\"anguloVerticeA\" formControlName=\"anguloVerticeA\" class=\"form-control lado-compreendido__entrada__input\"\r\n                    aria-describedby=\"sizing-addon2\" min=\"1\">\r\n                  <div class=\"lado-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('anguloVerticeA').hasError('required') && formModel.get('anguloVerticeA').touched\">Campo\r\n                      inválido!</span>\r\n                  </div>\r\n                  <div class=\"lado-compreendido__entrada__validacao\">\r\n                    <span *ngIf=\"formModel.get('anguloVerticeA').hasError('min')\">Campo inválido!</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </h6>\r\n        </div>\r\n        <div *ngIf=\"this.formModel.get('isTriangle').value\"> {{notTriangle}} </div>\r\n        <div #container class=\"col-sm-12 col-md-12 lado-compreendido__triangulo__desenho\">\r\n          <!-- resolução -->\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 col-xl-4 lado-compreendido__resolucao\">\r\n        <div class=\"col-sm-12 col-md-12\">\r\n          <h4>Propriedades</h4>\r\n        </div>\r\n        \r\n        <div class=\"col-sm-12 col-md-12 lado-compreendido__resolucao__accordion\">\r\n          <div class=\"accordion\" id=\"accordionPropriedades\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header lado-compreendido__explicacao__opcao__botao\" id=\"headingOne\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" (click)=\"onSetArea()\">\r\n                Área\r\n                = {{areaTemplate}}\r\n                <div class=\"lado-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down lado-compreendido__explicacao__opcao__botao__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 lado-compreendido__resultado\">\r\n                        <span class=\"lado-compreendido__resultado__explicacao\">\r\n                          Para mudar a base, basta escolher um lado e clicar sobre ele.\r\n                        </span>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"col-sm-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"lado-compreendido__resultado__formula\" [equation]=\"equacaoArea\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\">Fórmula para calcular a área.\r\n                            </span>\r\n                            <span>\r\n                              <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseA'\">\r\n                                h = altura | a = base\r\n                              </div>\r\n                              <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseB'\">\r\n                                h = altura | b = base\r\n                              </div>\r\n                              <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseC'\">\r\n                                h = altura | c = base\r\n                              </div>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"col-sm-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"lado-compreendido__resultado__formula\" [equation]=\"equacaoArea2\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\">Substituir os valores na fórmula. </span>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"col-sm-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"lado-compreendido__resultado__formula\" [equation]=\"equacaoArea3\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\"> Resultado.</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header lado-compreendido__explicacao__opcao__botao\" id=\"headingTwo\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\" (click)=\"onSetBaseAltura()\">\r\n                Base e Altura\r\n                <div class=\"lado-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down lado-compreendido__explicacao__opcao__botao__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 lado-compreendido__resultado\">\r\n                        <span class=\"lado-compreendido__resultado__explicacao\">\r\n                          Para mudar a base, basta escolher um lado e clicar sobre ele.\r\n                        </span>\r\n                        <hr>\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-md-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            Base = {{ formModel.get('base').value }}\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            Altura = {{ formModel.get('altura').value }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header lado-compreendido__explicacao__opcao__botao\" id=\"headingThree\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\" (click)=\"onSetMedidaLados()\">\r\n                Medida dos lados\r\n                <div class=\"lado-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down lado-compreendido__explicacao__opcao__botao__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\">Para saber o valor da medida de algum lado,\r\n                              basta escolher um lado e clicar sobre ele.\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <br>\r\n                          <br>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            Lado {{ formModel.get('ladoLetra').value }} = {{ formModel.get('ladoValor').value }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header lado-compreendido__explicacao__opcao__botao\" id=\"headingFour\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseFour\" aria-expanded=\"true\" aria-controls=\"collapseFour\" (click)=\"onSetPerimetro()\">\r\n                Perímetro = {{perimetroTemplate}}\r\n                <div class=\"lado-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down lado-compreendido__explicacao__opcao__botao__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"lado-compreendido__resultado__formula\" [equation]=\"equacaoPerimetro\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\">Fórmula para calcular o perímetro. Basta\r\n                              somar a medida dos lados!\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"lado-compreendido__resultado__formula\" [equation]=\"equacaoPerimetro2\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\">Substituir os valores na fórmula. </span>\r\n                            <hr>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <ng-katex class=\"lado-compreendido__resultado__formula\" [equation]=\"equacaoPerimetro3\"></ng-katex>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\"> Resultado.</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header lado-compreendido__explicacao__opcao__botao\" id=\"headingFive\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseFive\" aria-expanded=\"true\" aria-controls=\"collapseFive\" (click)=\"onSetTipoLados()\">\r\n                Tipo quanto aos Lados = {{formModel.get('tipoLados').value}}\r\n                <div class=\"lado-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down lado-compreendido__explicacao__opcao__botao__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\">\r\n                              {{ formModel.get('tipoLados').value }}\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Equilátero'\">\r\n                              O triângulo é equilátero porque os três lados possuem a mesma medida.\r\n                            </span>\r\n                            <span class=\"lado-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Escaleno'\">\r\n                              O triângulo é escaleno porque os três lados possuem medidas diferentes.\r\n                            </span>\r\n                            <span class=\"lado-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Isósceles'\">\r\n                              {{ formModel.get('tipoLadosIsosceles').value }}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header lado-compreendido__explicacao__opcao__botao\" id=\"headingSix\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseSix\" aria-expanded=\"true\" aria-controls=\"collapseSix\" (click)=\"onSetTipoAngulos()\">\r\n                Tipo quanto as Ângulos = {{formModel.get('tipoAngulos').value}}\r\n                <div class=\"lado-compreendido__explicacao__opcao__botao__icon\">\r\n                  <i class=\" fa fa-arrow-circle-down lado-compreendido__explicacao__opcao__botao__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingSix\" data-parent=\"#accordionPropriedades\">\r\n                <div class=\"card-body\">\r\n                  <h5>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-12 lado-compreendido__resultado\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\">\r\n                              {{ formModel.get('tipoAngulos').value }}\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <span class=\"lado-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Retângulo'\">\r\n                              O triângulo é retângulo porque possui um ângulo reto.\r\n                              <br> <br>\r\n                              <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                              O ângulo se torna reto quando seus lados são semi–retas opostas e a medida for de dois\r\n                              retos de 180°.\r\n                            </span>\r\n                            <span class=\"lado-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Obtusângulo'\">\r\n                              O triângulo é obtusângulo porque possui um ângulo obtuso.\r\n                              <br> <br>\r\n                              <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                              O ângulo se torna obtuso quando sua medida é maior que a medida de um ângulo reto de 90°.\r\n                            </span>\r\n                            <span class=\"lado-compreendido__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Acutângulo'\">\r\n                              O triângulo é acutângulo porque possui os três ângulos internos agudos.\r\n                              <br> <br>\r\n                              <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                              O ângulo se torna agudo quando sua medida é menor que a medida de um ângulo reto de 90°.\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12\">\r\n                            <h4>Medida dos ângulos</h4>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Ângulo A = {{ anguloVerticeA }} &deg;\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Ângulo B = {{ anguloVerticeB }} &deg;\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Ângulo C = {{ anguloVerticeC }} &deg;\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/lado-compreendido/lado-compreendido.component.scss":
/***/ (function(module, exports) {

module.exports = ".lado-compreendido {\n  margin-top: 0.5em;\n  height: auto;\n  margin-left: 0%; }\n  .lado-compreendido__triangulo {\n    padding-left: 0px; }\n  .lado-compreendido__triangulo__entrada {\n      padding-top: 0.5em;\n      padding-bottom: 0.5em;\n      padding-left: 15px; }\n  .lado-compreendido__triangulo__entrada__input {\n        max-width: 80px; }\n  .lado-compreendido__triangulo__entrada__titulo {\n        text-align: center;\n        padding-top: 1em; }\n  .lado-compreendido__triangulo__entrada__validacao {\n        padding-left: 1em; }\n  .lado-compreendido__triangulo__desenho {\n      padding-top: 1em;\n      padding-left: 1em;\n      text-align: center; }\n  .lado-compreendido__resolucao {\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgba(70, 131, 180, 0.555);\n    border-top: none;\n    border-bottom: none;\n    border-right: none;\n    padding-left: 15px; }\n  .lado-compreendido__resolucao__accordion {\n      padding-top: 1em; }\n  .lado-compreendido--desabilitado {\n    display: none; }\n  .lado-compreendido__erro {\n    width: 600px;\n    height: 600px; }\n  .lado-compreendido__explicacao {\n    text-align: left;\n    margin-bottom: 1em; }\n  .lado-compreendido__explicacao__opcao {\n      text-align: center; }\n  .lado-compreendido__explicacao__opcao__botao {\n        cursor: pointer;\n        border-color: #4683b4;\n        color: #4683b4;\n        background-color: white !important; }\n  .lado-compreendido__explicacao__opcao__botao__icon {\n          float: right;\n          font-size: 18px; }\n  .lado-compreendido__explicacao__opcao__botao__icon__fa__down {\n            color: #99f510; }\n  .lado-compreendido__explicacao__opcao__botao:hover {\n        background-color: #4683b4 !important;\n        color: white; }\n  .lado-compreendido__explicacao__opcao__botao:link {\n        background-color: #4683b4 !important; }\n  .lado-compreendido__resultado__explicacao {\n    text-align: center;\n    font-size: 20px; }\n  .lado-compreendido__resultado__formula {\n    font-size: 25px;\n    text-align: center; }\n  .lado-compreendido__resultado__formula--direita {\n      float: right; }\n  .lado-compreendido__resultado__formula--esquerda {\n      float: left; }\n  .lado-compreendido__conteudo {\n    border: solid 1px;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #4683b4;\n    margin-bottom: 1em; }\n  .dropdown-menu {\n  background-color: rgba(70, 131, 180, 0.555); }\n  .dropdown-item:hover {\n  background-color: #4683b4;\n  cursor: pointer; }\n  .input-group {\n  margin-top: 0.5em; }\n  .input-group-addon {\n    background-color: #4683b4;\n    text-align: center;\n    padding-top: 7px;\n    color: white;\n    font-size: 18px; }\n  .input-group-addon {\n  padding-left: 0.5em;\n  padding-right: 0.5em; }\n  ul {\n  list-style-type: none; }\n  .card-header {\n  background-color: rgba(70, 131, 180, 0.555); }\n  .card {\n  border-color: rgba(70, 131, 180, 0.555); }\n  #bordaCard {\n  border-bottom: none; }\n  @media screen and (max-width: 765px) {\n  .teste {\n    text-align: left; } }\n  @media screen and (min-width: 765px) {\n  .teste {\n    text-align: right;\n    padding-top: 1em; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/lado-compreendido/lado-compreendido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LadoCompreendidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LadoCompreendidoComponent = /** @class */ (function () {
    function LadoCompreendidoComponent(fb) {
        this.fb = fb;
        this.formModel = this.fb.group({
            anguloVerticeA: [45, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            ladoB: [4, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            ladoC: [6, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            alturaVerticeA: [''],
            alturaVerticeB: [''],
            alturaVerticeC: [''],
            tipoLados: [''],
            tipoAngulos: [''],
            base: [0],
            altura: [0],
            ladoValor: [0],
            ladoLetra: [''],
            propriedade: [''],
            propriedadeDesenho: [''],
            tipoLadosIsosceles: [''],
            isTriangle: ['true'],
        });
        this.distanciaCamera = 5;
        this.geom = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this.stop = false;
        this.notTriangle = '';
    }
    LadoCompreendidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.container = this.elementRef.nativeElement;
        console.log(this.container);
        this.init();
        this.formModel.valueChanges.subscribe(function (value) {
            _this.animate();
        });
    };
    LadoCompreendidoComponent.prototype.ngOnDestroy = function () {
        this.stop = true;
    };
    LadoCompreendidoComponent.prototype.init = function () {
        if (window.innerWidth > 1200) {
            this.screen = {
                width: window.innerWidth / 2.5,
                height: window.innerWidth / 2.5
            };
        }
        else if (window.innerWidth > 769) {
            this.screen = {
                width: window.innerWidth / 1.5,
                height: window.innerWidth / 1.5
            };
        }
        else {
            this.screen = {
                width: window.innerWidth * 0.9,
                height: window.innerWidth * 0.9
            };
        }
        var view = {
            angle: 90,
            aspect: this.screen.width / this.screen.height,
            near: 0.1,
            far: 1000
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xffffff); // Cor de fundo canvas
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](view.angle, view.aspect, view.near, view.far);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        this.scene.add(this.camera);
        this.camera.position.set(0, 0, this.distanciaCamera);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.container.appendChild(this.renderer.domElement);
        this.ladoA = 4;
        this.ladoB = 4;
        this.ladoC = 6;
        this.letraA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.letraB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.letraC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelAltura = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.a = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.b = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.c = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.achandoPontos();
        this.criaBaseAltura();
        this.criarTriangulo();
        this.scene.add(this.triangulo);
        this.moverCameraCentroTriangulo();
        this.adicionaLinhasTriangulo();
        this.formModel.get('propriedadeDesenho').setValue('BaseC');
        this.render();
    };
    LadoCompreendidoComponent.prototype.render = function () {
        var self = this;
        (function render() {
            if (!self.stop) {
                requestAnimationFrame(render);
                self.renderer.render(self.scene, self.camera);
                self.animate();
            }
        }());
    };
    LadoCompreendidoComponent.prototype.animate = function () {
        if (this.isTriangle()) {
            this.achandoPontos();
            this.atualizaBaseAltura();
            this.moverCameraCentroTriangulo();
            this.DesabilitaDestaque();
            this.calcularAngulos();
            this.calcularPerimetro();
            this.calcularArea();
            this.tipoTriangulos();
            this.CalcularAlturaVertices();
            this.Destaque();
            this.atualizarPontos();
            this.adicionaTexto('A', this.letraA, this.scene, this.distanciaCamera);
            this.adicionaTexto('B', this.letraB, this.scene, this.distanciaCamera);
            this.adicionaTexto('C', this.letraC, this.scene, this.distanciaCamera);
            this.adicionaTexto('a', this.labelLadoA, this.scene, this.distanciaCamera);
            this.adicionaTexto('b', this.labelLadoB, this.scene, this.distanciaCamera);
            this.adicionaTexto('c', this.labelLadoC, this.scene, this.distanciaCamera);
            this.adicionaTexto('h', this.labelAltura, this.scene, this.distanciaCamera);
            this.atualizaLabelVertices();
            this.atualizaLabelLados();
            this.atualizaLabelAltura();
            this.mostrarResultadoArea();
            this.mostrarResultadoBaseAltura();
            this.mostrarResultadoMedidaLados();
            this.mostrarResultadoPerimetro();
            this.formModel.get('isTriangle').setValue('true');
        }
        else {
            this.formModel.get('isTriangle').setValue('false');
            this.falseTriangle();
        }
    };
    LadoCompreendidoComponent.prototype.isTriangle = function () {
        if (this.formModel.get('anguloVerticeA').value < 180) {
            this.notTriangle = '';
            this.formModel.get('isTriangle').setValue('true');
            return true;
        }
        else {
            this.notTriangle = 'O ângulo do vertice A deve ser maior que 0° e menor que 180°';
            this.formModel.get('isTriangle').setValue('false');
            return false;
        }
    };
    LadoCompreendidoComponent.prototype.criarPonto = function (x, y) {
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["CircleGeometry"](this.distanciaCamera / 50, 10);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x000000 });
        var circle = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        circle.position.x = x;
        circle.position.y = y;
        return circle;
    };
    LadoCompreendidoComponent.prototype.criarTriangulo = function () {
        this.geom = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        var v1 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY, 0);
        var v2 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY, 0);
        var v3 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY, 0);
        var triangle = new __WEBPACK_IMPORTED_MODULE_1_three__["Triangle"](v1, v2, v3);
        this.geom.vertices.push(triangle.a);
        this.geom.vertices.push(triangle.b);
        this.geom.vertices.push(triangle.c);
        this.geom.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2));
        this.geom.verticesNeedUpdate = true;
        var mat = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x90EE90, transparent: true, opacity: 0.5, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this.triangulo = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geom, mat);
        this.geom.verticesNeedUpdate = true;
        this.triangulo.name = 'triangulo';
    };
    LadoCompreendidoComponent.prototype.achandoPontos = function () {
        var a = this.formModel.get('anguloVerticeA').value;
        var b = this.formModel.get('ladoB').value;
        var c = this.formModel.get('ladoC').value;
        this.cordAX = 0;
        this.cordAY = 0;
        this.cordBX = c * 1;
        this.cordBY = 0;
        this.anguloVerticeA = a;
        var angulo = a * (Math.PI / 180);
        var x = Math.cos(angulo) * b;
        var y = Math.sin(angulo) * b;
        this.cordCX = x;
        this.cordCY = y;
        this.ladoA = (Math.sqrt(Math.pow(this.cordCY, 2) + Math.pow((this.cordBX - this.cordCX), 2)));
    };
    LadoCompreendidoComponent.prototype.atualizarPontos = function () {
        this.scene.remove(this.a);
        this.scene.remove(this.b);
        this.scene.remove(this.c);
        this.a.geometry.dispose();
        this.b.geometry.dispose();
        this.c.geometry.dispose();
        this.a = this.criarPonto(this.cordAX, this.cordAY);
        this.a.name = "verticeA";
        this.b = this.criarPonto(this.cordBX, this.cordBY);
        this.b.name = "verticeB";
        this.c = this.criarPonto(this.cordCX, this.cordCY);
        this.c.name = "verticeC";
        this.scene.add(this.a);
        this.scene.add(this.b);
        this.scene.add(this.c);
        this.a.position.x = this.cordAX;
        this.a.position.y = this.cordAY;
        this.b.position.x = this.cordBX;
        this.b.position.y = this.cordBY;
        this.c.position.x = this.cordCX;
        this.c.position.y = this.cordCY;
        // Atualiza Triangulo
        this.geom.verticesNeedUpdate = true;
        this.geom.vertices[0].set(this.a.position.x, this.a.position.y, 0);
        this.geom.vertices[1].set(this.b.position.x, this.b.position.y, 0);
        this.geom.vertices[2].set(this.c.position.x, this.c.position.y, 0);
    };
    LadoCompreendidoComponent.prototype.moverCameraCentroTriangulo = function () {
        // e Escala
        var temp;
        var e = this.cordCY;
        if (this.cordCX >= this.cordAX && this.cordCX <= this.cordBX) {
            temp = this.cordBX;
            if (temp > e) {
                e = temp;
            }
        }
        else if (this.cordCX < this.cordAX) {
            temp = this.cordBX - this.cordCX;
            if (temp > e) {
                e = temp;
            }
        }
        else {
            temp = this.cordCX - this.cordAX;
            if (temp > e) {
                e = temp;
            }
        }
        this.camera.position.z = (e * 1.25) / 1.5;
        this.distanciaCamera = this.camera.position.z;
        // Centro triangulo
        var m = this.cordBX * 1;
        var f = this.cordCX;
        this.camera.position.x = (m + f) / 3;
        this.camera.position.y = (this.cordAY + this.cordBY + this.cordCY) / 3;
    };
    LadoCompreendidoComponent.prototype.adicionaLinhasTriangulo = function () {
        // //Destaque
        // AB
        var spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY)]);
        var materialLinhaDestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFF0000 });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhaDestaqueAB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhaDestaque);
        this.scene.add(this.linhaDestaqueAB);
        // BC
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhaDestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00FF00 });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhaDestaqueBC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhaDestaque);
        this.scene.add(this.linhaDestaqueBC);
        // CA
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhaDestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x0000FF });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhaDestaqueCA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhaDestaque);
        this.scene.add(this.linhaDestaqueCA);
    };
    LadoCompreendidoComponent.prototype.atualizaLinhasTriangulo = function (opacidadeAB, opacidadeBC, opacidadeCA) {
        var largura = this.distanciaCamera / 100;
        this.scene.remove(this.linhaDestaqueAB);
        this.linhaDestaqueAB.geometry.dispose();
        var spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY)]);
        var materialLinhaDestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFF0000, opacity: opacidadeAB });
        materialLinhaDestaque.transparent = true;
        var geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhaDestaqueAB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha, materialLinhaDestaque);
        this.linhaDestaqueAB.name = 'linhaDestaqueBC';
        this.scene.add(this.linhaDestaqueAB);
        this.scene.remove(this.linhaDestaqueBC);
        this.linhaDestaqueBC.geometry.dispose();
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhaDestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00FF00, opacity: opacidadeBC });
        materialLinhaDestaque.transparent = true;
        var geometriaLinha2 = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhaDestaqueBC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha2, materialLinhaDestaque);
        this.linhaDestaqueBC.name = 'linhaDestaqueAB';
        this.scene.add(this.linhaDestaqueBC);
        this.scene.remove(this.linhaDestaqueCA);
        this.linhaDestaqueCA.geometry.dispose();
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhaDestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x0000FF, opacity: opacidadeCA });
        materialLinhaDestaque.transparent = true;
        var geometriaLinha3 = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhaDestaqueCA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha3, materialLinhaDestaque);
        this.linhaDestaqueCA.name = 'linhaDestaqueCA';
        this.scene.add(this.linhaDestaqueCA);
    };
    LadoCompreendidoComponent.prototype.calcularAngulos = function () {
        var DAB = this.ladoA;
        var DBC = this.formModel.get('ladoB').value;
        var DCA = this.formModel.get('ladoC').value;
        this.anguloVerticeB = (Math.acos((Math.pow(DAB, 2) + Math.pow(DCA, 2) - Math.pow(DBC, 2)) /
            (2 * DAB * DCA)) * 180 / Math.PI).toFixed(2);
        this.anguloVerticeC = (Math.acos((Math.pow(DAB, 2) + Math.pow(DBC, 2) - Math.pow(DCA, 2)) /
            (2 * DAB * DBC)) * 180 / Math.PI).toFixed(2);
        // this.anguloVerticeA = (Math.acos((Math.pow(DBC, 2) + Math.pow(DCA, 2) - Math.pow(DAB, 2)) /
        // (2 * DBC * DCA)) * 180 / Math.PI).toFixed(2);
    };
    LadoCompreendidoComponent.prototype.criaBaseAltura = function () {
        var distancia = this.camera.position.z * 2;
        var curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, 0),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, 0)]);
        this.retaBaseB = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        var materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseA = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseB, materialLinha);
        this.scene.add(this.linhaRetaBaseA);
        var AX = this.cordAX;
        var AY = this.cordAY;
        var BX = this.cordBX;
        var BY = this.cordBY;
        var CX = this.cordCX;
        var CY = this.cordCY;
        var mA = (CY - AY) / (CX - AX);
        var mB = (CY - BY) / (CX - BX);
        this.pontoRetaAAY = (mA * (this.distanciaCamera * 2 - AX)) + AY;
        this.pontoRetaABY = (mA * (-this.distanciaCamera * 2 - AX)) + AY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.camera.position.z * 2, this.pontoRetaAAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-this.camera.position.z * 2, this.pontoRetaABY)]);
        this.retaBaseA = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseB = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseA, materialLinha);
        this.scene.add(this.linhaRetaBaseB);
        this.pontoRetaCAY = (mB * (this.distanciaCamera * 2 - BX)) + BY;
        this.pontoRetaCBY = (mB * (-this.distanciaCamera * 2 - BX)) + BY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.camera.position.z * 2, this.pontoRetaCAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-this.camera.position.z * 2, this.pontoRetaCBY)]);
        this.retaBaseC = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseC = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseC, materialLinha);
        this.scene.add(this.linhaRetaBaseC);
        var mA2 = (-1 / mA);
        var mB2 = (-1 / mB);
        this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
        this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, CY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, 0)]);
        this.caminhoAlturaC = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaC = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaC, materialLinha);
        this.scene.add(this.linhaAlturaC);
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, BY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
        this.caminhoAlturaA = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaB = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaA, materialLinha);
        this.scene.add(this.linhaAlturaB);
        this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
        this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, AY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
        this.caminhoAlturaB = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaA = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaB, materialLinha);
        this.scene.add(this.linhaAlturaA);
    };
    LadoCompreendidoComponent.prototype.atualizaBaseAltura = function () {
        var AX = this.cordAX;
        var AY = this.cordAY;
        var BX = this.cordBX;
        var BY = this.cordBY;
        var CX = this.cordCX;
        var CY = this.cordCY;
        var distancia = this.camera.position.z + 10;
        var curva;
        var mC = (BY - AY) / (BX - AX);
        var mB = (CY - BY) / (CX - BX);
        var mA = (CY - AY) / (CX - AX);
        var mA2 = (-1 / mA);
        var mB2 = (-1 / mB);
        var mC2 = (-1 / mC);
        if (BX === AX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, -distancia)]);
        }
        else {
            this.pontoRetaBAY = (mC * (distancia - AX)) + AY;
            this.pontoRetaBBY = (mC * (-distancia - AX)) + AY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaBBY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaBAY)]);
        }
        this.retaBaseB.setFromPoints(curva.getPoints(1));
        this.retaBaseB.verticesNeedUpdate = true;
        if (CX === AX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, -distancia)]);
        }
        else {
            this.pontoRetaAAY = (mA * ((distancia) - AX)) + AY;
            this.pontoRetaABY = (mA * ((-distancia) - AX)) + AY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaAAY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaABY)]);
        }
        this.retaBaseA.setFromPoints(curva.getPoints(1));
        this.retaBaseA.verticesNeedUpdate = true;
        if (CX === BX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, -distancia)]);
        }
        else {
            this.pontoRetaCAY = (mB * (distancia - BX)) + BY;
            this.pontoRetaCBY = (mB * (-distancia - BX)) + BY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaCAY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaCBY)]);
        }
        this.retaBaseC.setFromPoints(curva.getPoints(1));
        this.retaBaseC.verticesNeedUpdate = true;
        // linha da altura
        if (BX === AX) {
            this.pontoRetaIntersecCX = AX;
            this.pontoRetaIntersecCY = CY;
        }
        else if (BY === AY) {
            this.pontoRetaIntersecCX = CX;
            this.pontoRetaIntersecCY = AY;
        }
        else {
            this.pontoRetaIntersecCX = ((-mC2 * CX) + CY + (mC * BX) - BY) / (-mC2 + mC);
            this.pontoRetaIntersecCY = ((mC2) * (this.pontoRetaIntersecCX - CX)) + CY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, CY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecCX, this.pontoRetaIntersecCY)]);
        this.caminhoAlturaC.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaC.verticesNeedUpdate = true;
        // linha da altura
        if (CX === AX) {
            this.pontoRetaIntersecAX = AX;
            this.pontoRetaIntersecAY = BY;
        }
        else if (CY === AY) {
            this.pontoRetaIntersecAX = BX;
            this.pontoRetaIntersecAY = AY;
        }
        else {
            this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
            this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, BY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
        this.caminhoAlturaA.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaA.verticesNeedUpdate = true;
        // linha da altura
        if (CX === BX) {
            this.pontoRetaIntersecBX = BX;
            this.pontoRetaIntersecBY = AY;
        }
        else {
            this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
            this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, AY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
        this.caminhoAlturaB.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaB.verticesNeedUpdate = true;
    };
    LadoCompreendidoComponent.prototype.calcularPerimetro = function () {
        this.perimetro = this.ladoA + this.ladoB + this.ladoC;
    };
    LadoCompreendidoComponent.prototype.calcularArea = function () {
        var ax = this.cordAX;
        var ay = this.cordAY;
        var bx = this.cordBX;
        var by = this.cordBY;
        var cx = this.cordCX;
        var cy = this.cordCY;
        this.area = (Math.abs((ax * by) + (ay * cx) + (bx * cy) - (by * cx) - (ax * cy) - (ay * bx)) * 0.5);
        this.areaTemplate = this.area.toFixed(2);
    };
    LadoCompreendidoComponent.prototype.tipoTriangulos = function () {
        if (this.anguloVerticeA === 90 || this.anguloVerticeB === 90 || this.anguloVerticeC === 90) {
            this.formModel.get('tipoAngulos').setValue('Retângulo');
        }
        else if (this.anguloVerticeA > 90 || this.anguloVerticeB > 90 || this.anguloVerticeC > 90) {
            this.formModel.get('tipoAngulos').setValue('Obtusângulo');
        }
        else {
            this.formModel.get('tipoAngulos').setValue('Acutângulo');
        }
        var AB = this.formModel.get('ladoC').value;
        var BC = this.ladoA;
        var CA = this.formModel.get('ladoB').value;
        if (AB === BC && BC === CA) {
            this.formModel.get('tipoLados').setValue('Equilátero');
        }
        else if (AB !== BC && BC !== CA && CA !== AB) {
            this.formModel.get('tipoLados').setValue('Escaleno');
        }
        else {
            this.formModel.get('tipoLados').setValue('Isósceles');
            if (this.ladoA === this.formModel.get('ladoB').value) {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado a e o lado b possuem as medidas iguais.');
            }
            else if (this.formModel.get('ladoB').value === this.formModel.get('ladoC').value) {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado b e o lado c possuem as medidas iguais.');
            }
            else {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado c e o lado a possuem as medidas iguais.');
            }
        }
    };
    LadoCompreendidoComponent.prototype.CalcularAlturaVertices = function () {
        this.formModel.get('alturaVerticeA').setValue((this.area * 2) / this.ladoA);
        this.formModel.get('alturaVerticeB').setValue((this.area * 2) / this.formModel.get('ladoB').value);
        this.formModel.get('alturaVerticeC').setValue((this.area * 2) / this.formModel.get('ladoC').value);
    };
    LadoCompreendidoComponent.prototype.DesabilitaDestaque = function () {
        this.atualizaLinhasTriangulo(0.2, 0.2, 0.2);
        this.linhaRetaBaseA.visible = false;
        this.linhaRetaBaseB.visible = false;
        this.linhaRetaBaseC.visible = false;
        this.linhaAlturaA.visible = false;
        this.linhaAlturaB.visible = false;
        this.linhaAlturaC.visible = false;
        this.triangulo.visible = false;
        this.labelAltura.visible = false;
    };
    LadoCompreendidoComponent.prototype.Destaque = function () {
        var ep = this.formModel.get('propriedade').value; // Escolha Principal
        var es = this.formModel.get('propriedadeDesenho').value; // Escolha Secundaria
        if (ep === 'area') {
            this.triangulo.visible = true;
            this.labelAltura.visible = true;
            if (es === 'BaseC') {
                this.linhaAlturaC.visible = true;
                this.linhaRetaBaseA.visible = true;
                this.atualizaLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.linhaAlturaB.visible = true;
                this.linhaRetaBaseB.visible = true;
                this.atualizaLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.linhaAlturaA.visible = true;
                this.linhaRetaBaseC.visible = true;
                this.atualizaLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'baseAltura') {
            this.labelAltura.visible = true;
            if (es === 'BaseC') {
                this.linhaAlturaC.visible = true;
                this.linhaRetaBaseA.visible = true;
                this.atualizaLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.linhaAlturaB.visible = true;
                this.linhaRetaBaseB.visible = true;
                this.atualizaLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.linhaAlturaA.visible = true;
                this.linhaRetaBaseC.visible = true;
                this.atualizaLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'medidaLados') {
            if (es === 'BaseC') {
                this.atualizaLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.atualizaLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.atualizaLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'perimetro') {
            this.atualizaLinhasTriangulo(1, 1, 1);
        }
        else if (ep === 'tipo') {
            this.atualizaLinhasTriangulo(1, 1, 1);
        }
    };
    LadoCompreendidoComponent.prototype.adicionaTexto = function (valor, geom, scene, size) {
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000 });
        var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["FontLoader"]();
        loader.load('https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["TextGeometry"](valor, {
                font: font,
                size: size / 15,
                height: 0.0001,
                curveSegments: 12,
            });
            geom.geometry.dispose();
            geom.geometry = geometry;
            geom.material = material;
            scene.add(geom);
        });
    };
    LadoCompreendidoComponent.prototype.atualizaLabelVertices = function () {
        var x, y, mx, my;
        var ed = 20; // divisor
        // A
        mx = (this.cordBX + this.cordCX) / 2;
        my = (this.cordBY + this.cordCY) / 2;
        if (this.cordAX > mx) {
            x = this.cordAX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordAX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordAY > my) {
            y = this.cordAY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordAY - this.distanciaCamera / (ed / 2);
        }
        this.letraA.position.x = x;
        this.letraA.position.y = y;
        // B
        mx = (this.cordAX + this.cordCX) / 2;
        my = (this.cordAY + this.cordCY) / 2;
        if (this.cordBX > mx) {
            x = this.cordBX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordBX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordBY > my) {
            y = this.cordBY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordBY - this.distanciaCamera / (ed / 2);
        }
        this.letraB.position.x = x;
        this.letraB.position.y = y;
        // C
        mx = (this.cordBX + this.cordAX) / 2;
        my = (this.cordBY + this.cordAY) / 2;
        if (this.cordCX > mx) {
            x = this.cordCX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordCX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordCY > my) {
            y = this.cordCY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordCY - this.distanciaCamera / (ed / 2);
        }
        this.letraC.position.x = x;
        this.letraC.position.y = y;
    };
    LadoCompreendidoComponent.prototype.atualizaLabelLados = function () {
        var centrox = (this.cordAX + this.cordBX + this.cordCX) / 3;
        var centroy = (this.cordAY + this.cordBY + this.cordCY) / 3;
        var x, y, mx, my;
        var ed = 20; // divisor
        // A
        mx = (this.cordBX + this.cordCX) / 2;
        my = (this.cordBY + this.cordCY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoA.position.x = x;
        this.labelLadoA.position.y = y;
        // B
        mx = (this.cordAX + this.cordCX) / 2;
        my = (this.cordAY + this.cordCY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoB.position.x = x;
        this.labelLadoB.position.y = y;
        // C
        mx = (this.cordBX + this.cordAX) / 2;
        my = (this.cordBY + this.cordAY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoC.position.x = x;
        this.labelLadoC.position.y = y;
    };
    LadoCompreendidoComponent.prototype.atualizaLabelAltura = function () {
        var es = this.formModel.get('propriedadeDesenho').value; // Escolha Secundaria
        if (es === 'BaseC') {
            this.labelAltura.position.x = this.cordCX;
            this.labelAltura.position.y = this.cordCY / 2;
        }
        else if (es === 'BaseB') {
            this.labelAltura.position.x = (this.cordBX + this.pontoRetaIntersecAX) / 2;
            this.labelAltura.position.y = (this.cordBY + this.pontoRetaIntersecAY) / 2;
        }
        else {
            this.labelAltura.position.x = (this.cordAX + this.pontoRetaIntersecBX) / 2;
            this.labelAltura.position.y = (this.cordAY + this.pontoRetaIntersecBY) / 2;
        }
    };
    LadoCompreendidoComponent.prototype.onMouseClick = function (event) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        var xDoMouse = event.offsetX;
        var yDoMouse = event.offsetY;
        xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
        yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
        var raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        raycaster.setFromCamera(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](xDoMouse, yDoMouse), this.camera);
        var intersects = raycaster.intersectObjects([this.linhaDestaqueAB, this.linhaDestaqueBC, this.linhaDestaqueCA]);
        if (intersects.length > 0) {
            var intersectedObject = intersects[0].object;
            if (intersectedObject.name === 'linhaDestaqueAB') {
                this.formModel.get('propriedadeDesenho').setValue('BaseA');
            }
            else if (intersectedObject.name === 'linhaDestaqueBC') {
                this.formModel.get('propriedadeDesenho').setValue('BaseC');
            }
            else if (intersectedObject.name === 'linhaDestaqueCA') {
                this.formModel.get('propriedadeDesenho').setValue('BaseB');
            }
        }
    };
    LadoCompreendidoComponent.prototype.onSetArea = function () {
        this.formModel.get('propriedade').setValue('area');
    };
    LadoCompreendidoComponent.prototype.onSetBaseAltura = function () {
        this.formModel.get('propriedade').setValue('baseAltura');
    };
    LadoCompreendidoComponent.prototype.onSetMedidaLados = function () {
        this.formModel.get('propriedade').setValue('medidaLados');
    };
    LadoCompreendidoComponent.prototype.onSetPerimetro = function () {
        this.formModel.get('propriedade').setValue('perimetro');
    };
    LadoCompreendidoComponent.prototype.onSetTipoLados = function () {
        this.formModel.get('propriedade').setValue('tipoLados');
    };
    LadoCompreendidoComponent.prototype.onSetTipoAngulos = function () {
        this.formModel.get('propriedade').setValue('tipoAngulos');
    };
    LadoCompreendidoComponent.prototype.onSetMedidaAngulos = function () {
        this.formModel.get('propriedade').setValue('medidaAngulos');
    };
    LadoCompreendidoComponent.prototype.mostrarResultadoArea = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        var base;
        var altura;
        var letraBase;
        if (selecionado === 'BaseA') {
            base = this.ladoA.toFixed(2);
            altura = (this.formModel.get('alturaVerticeA').value).toFixed(2);
            letraBase = 'a';
        }
        else if (selecionado === 'BaseB') {
            base = this.formModel.get('ladoB').value;
            altura = (this.formModel.get('alturaVerticeB').value).toFixed(2);
            letraBase = 'b';
        }
        else if (selecionado === 'BaseC') {
            base = this.formModel.get('ladoC').value;
            altura = (this.formModel.get('alturaVerticeC').value).toFixed(2);
            letraBase = 'c';
        }
        this.equacaoArea = 'A = \\frac{' + letraBase + '\\times h }{2}';
        this.equacaoArea2 = 'A = \\frac{' + base.toFixed(2)
            + '\\times' + altura + '}{2}';
        this.equacaoArea3 = 'A = ' + this.areaTemplate + 'u.a.';
    };
    LadoCompreendidoComponent.prototype.mostrarResultadoBaseAltura = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        if (selecionado === 'BaseA') {
            this.formModel.get('base').setValue(this.ladoA.toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeA').value).toFixed(2));
        }
        else if (selecionado === 'BaseB') {
            this.formModel.get('base').setValue(this.formModel.get('ladoB').value.toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeB').value).toFixed(2));
        }
        else if (selecionado === 'BaseC') {
            this.formModel.get('base').setValue(this.formModel.get('ladoC').value.toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeC').value).toFixed(2));
        }
    };
    LadoCompreendidoComponent.prototype.mostrarResultadoMedidaLados = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        if (selecionado === 'BaseA') {
            this.formModel.get('ladoValor').setValue(this.ladoA.toFixed(2));
            this.formModel.get('ladoLetra').setValue('a');
        }
        else if (selecionado === 'BaseB') {
            this.formModel.get('ladoValor').setValue(this.formModel.get('ladoB').value.toFixed(2));
            this.formModel.get('ladoLetra').setValue('b');
        }
        else if (selecionado === 'BaseC') {
            this.formModel.get('ladoValor').setValue(this.formModel.get('ladoC').value.toFixed(2));
            this.formModel.get('ladoLetra').setValue('c');
        }
    };
    LadoCompreendidoComponent.prototype.mostrarResultadoPerimetro = function () {
        this.equacaoPerimetro = 'P = a + b + c';
        this.equacaoPerimetro2 = 'P =' + this.ladoA.toFixed(2) +
            '+' + this.formModel.get('ladoB').value.toFixed(2) +
            '+' + this.formModel.get('ladoC').value.toFixed(2);
        this.equacaoPerimetro3 = 'P =' + this.perimetro.toFixed(2) + ' u.m.';
        this.perimetroTemplate = this.perimetro.toFixed(2);
    };
    LadoCompreendidoComponent.prototype.falseTriangle = function () {
        this.camera.position.x = -300;
        this.camera.position.y = -300;
        this.camera.position.z = 5;
    };
    LadoCompreendidoComponent.prototype.onWindowResize = function (event) {
        if (event.target.innerWidth > 1200) {
            this.screen.width = event.target.innerWidth / 2.5;
            this.screen.height = event.target.innerWidth / 2.5;
        }
        else if (event.target.innerWidth > 769) {
            this.screen.width = event.target.innerWidth / 1.5;
            this.screen.height = event.target.innerWidth / 1.5;
        }
        else {
            this.screen.width = event.target.innerWidth * 0.9;
            this.screen.height = event.target.innerWidth * 0.9;
        }
        this.renderer.setSize(this.screen.width, this.screen.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LadoCompreendidoComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touch', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LadoCompreendidoComponent.prototype, "onMouseClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LadoCompreendidoComponent.prototype, "onWindowResize", null);
    LadoCompreendidoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lado-compreendido',
            template: __webpack_require__("./src/app/views/geometria/triangulo/componentes/lado-compreendido/lado-compreendido.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/triangulo/componentes/lado-compreendido/lado-compreendido.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], LadoCompreendidoComponent);
    return LadoCompreendidoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/sidebar-triangulo/sidebar-triangulo.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-side-bar\">\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['definicao']\">Definição</li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['tres_vertices']\">\r\n      Conhecendo os 3 vértices\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['tres_lados']\">\r\n      Conhecendo os 3 lados\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['lado_compreendido']\">\r\n      Dois lados e o ângulo compreendido\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['angulo_compreendido']\">\r\n      Dois ângulos e o lado compreendido\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected disabled\" >\r\n      Teorema de Pitágoras\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected disabled\" >\r\n      Soma dos ângulos internos\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\"><a>Curiosidades</a></li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/sidebar-triangulo/sidebar-triangulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarTrianguloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarTrianguloComponent = /** @class */ (function () {
    function SidebarTrianguloComponent() {
    }
    SidebarTrianguloComponent.prototype.ngOnInit = function () {
    };
    SidebarTrianguloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidebar-triangulo',
            template: __webpack_require__("./src/app/views/geometria/triangulo/componentes/sidebar-triangulo/sidebar-triangulo.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SidebarTrianguloComponent);
    return SidebarTrianguloComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/teorema-pitagoras/teorema-pitagoras.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/teorema-pitagoras/teorema-pitagoras.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  teorema-pitagoras works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/teorema-pitagoras/teorema-pitagoras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeoremaPitagorasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeoremaPitagorasComponent = /** @class */ (function () {
    function TeoremaPitagorasComponent() {
    }
    TeoremaPitagorasComponent.prototype.ngOnInit = function () {
    };
    TeoremaPitagorasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teorema-pitagoras',
            template: __webpack_require__("./src/app/views/geometria/triangulo/componentes/teorema-pitagoras/teorema-pitagoras.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/triangulo/componentes/teorema-pitagoras/teorema-pitagoras.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeoremaPitagorasComponent);
    return TeoremaPitagorasComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/tres-lados/tres-lados.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"arial.js\"></script> -->\r\n<form [formGroup]=\"formModel\">\r\n  <div class=\"tres-lados\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-7 tres-lados__triangulo\">\r\n          <div class=\"col-sm-12 col-md-12 tres-lados__triangulo__entrada\">\r\n            <h6>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3 col-md-3 texto\">\r\n                  Lados\r\n                </div>\r\n                <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"number\" name=\"ladoA\" formControlName=\"ladoA\" class=\"form-control tres-lados__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\" min=\"1\">\r\n                    <div class=\"tres-lados__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('ladoA').hasError('required') && formModel.get('ladoA').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                    <div class=\"tres-lados__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('ladoA').hasError('min')\">Campo inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"number\" name=\"ladoB\" formControlName=\"ladoB\" class=\"form-control tres-lados__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\" min=\"1\">\r\n                    <div class=\"tres-lados__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('ladoB').hasError('required') && formModel.get('ladoB').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                    <div class=\"tres-lados__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('ladoB').hasError('min')\">Campo inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">c</span>\r\n                    <input type=\"number\" name=\"ladoC\" formControlName=\"ladoC\" class=\"form-control tres-lados__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\" min=\"1\">\r\n                    <div class=\"tres-lados__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('ladoC').hasError('required') && formModel.get('ladoC').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                    <div class=\"tres-lados__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('ladoC').hasError('min')\">Campo inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </h6>\r\n          </div>\r\n          <div *ngIf=\"this.formModel.get('isTriangle').value\"> \r\n           <h5>\r\n             {{notTriangle}} \r\n           </h5> \r\n          </div>\r\n          <div #container class=\"col-sm-12 col-md-12 tres-lados__triangulo__desenho\">\r\n            <!--   resolução -->\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-xl-5 tres-lados__resolucao\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-md-12\">\r\n              <h4>Propriedades</h4>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-12 tres-lados__resolucao__accordion\">\r\n              <div class=\"accordion\" id=\"accordionPropriedades\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header tres-lados__explicacao__opcao__botao\" id=\"headingOne\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" (click)=\"onSetArea()\">\r\n                    Área\r\n                    = {{areaTemplate}}\r\n                    <div class=\"tres-lados__explicacao__opcao__botao__icon\">\r\n                      <i class=\" fa fa-arrow-circle-down tres-lados__explicacao__opcao__botao__icon__fa__down\"\r\n                        aria-hidden=\"true\"></i>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPropriedades\">\r\n                    <div class=\"card-body\">\r\n                      <h5>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12 tres-lados__resultado\">\r\n                            <span class=\"tres-lados__resultado__explicacao\">\r\n                              Para mudar a base, basta escolher um lado e clicar sobre ele.\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <ng-katex class=\"tres-lados__resultado__formula\" [equation]=\"equacaoArea\"></ng-katex>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\">Fórmula para calcular a área.\r\n                                </span>\r\n                                <span>\r\n                                  <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseA'\">\r\n                                    h = altura | a = base\r\n                                  </div>\r\n                                  <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseB'\">\r\n                                    h = altura | b = base\r\n                                  </div>\r\n                                  <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseC'\">\r\n                                    h = altura | c = base\r\n                                  </div>\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <ng-katex class=\"tres-lados__resultado__formula\" [equation]=\"equacaoArea2\"></ng-katex>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\">Substituir os valores na fórmula.\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <ng-katex class=\"tres-lados__resultado__formula\" [equation]=\"equacaoArea3\"></ng-katex>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\"> Resultado.</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header tres-lados__explicacao__opcao__botao\" id=\"headingTwo\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\" (click)=\"onSetBaseAltura()\">\r\n                    Base e Altura\r\n                    <div class=\"tres-lados__explicacao__opcao__botao__icon\">\r\n                      <i class=\" fa fa-arrow-circle-down tres-lados__explicacao__opcao__botao__icon__fa__down\"\r\n                        aria-hidden=\"true\"></i>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionPropriedades\">\r\n                    <div class=\"card-body\">\r\n                      <h5>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12 tres-lados__resultado\">\r\n                            <span class=\"tres-lados__resultado__explicacao\">\r\n                              Para mudar a base, basta escolher um lado e clicar sobre ele.\r\n                            </span>\r\n                            <hr>\r\n                          </div>\r\n                          <div class=\"col-sm-12 col-md-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                Base = {{ formModel.get('base').value }}\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                Altura = {{ formModel.get('altura').value }}\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header tres-lados__explicacao__opcao__botao\" id=\"headingThree\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\" (click)=\"onSetMedidaLados()\">\r\n                    Medida dos lados\r\n                    <div class=\"tres-lados__explicacao__opcao__botao__icon\">\r\n                      <i class=\" fa fa-arrow-circle-down tres-lados__explicacao__opcao__botao__icon__fa__down\"\r\n                        aria-hidden=\"true\"></i>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionPropriedades\">\r\n                    <div class=\"card-body\">\r\n                      <h5>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\">Para saber o valor da medida de algum\r\n                                  lado,\r\n                                  basta escolher um lado e clicar sobre ele.\r\n                                </span>\r\n                                <hr>\r\n                              </div>\r\n                              <br>\r\n                              <br>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                Lado {{ formModel.get('ladoLetra').value }} = {{ formModel.get('ladoValor').value }}\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header tres-lados__explicacao__opcao__botao\" id=\"headingFour\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseFour\" aria-expanded=\"true\" aria-controls=\"collapseFour\" (click)=\"onSetPerimetro()\">\r\n                    Perímetro = {{perimetroTemplate}}\r\n                    <div class=\"tres-lados__explicacao__opcao__botao__icon\">\r\n                      <i class=\" fa fa-arrow-circle-down tres-lados__explicacao__opcao__botao__icon__fa__down\"\r\n                        aria-hidden=\"true\"></i>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionPropriedades\">\r\n                    <div class=\"card-body\">\r\n                      <h5>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <ng-katex class=\"tres-lados__resultado__formula\" [equation]=\"equacaoPerimetro\"></ng-katex>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\">Fórmula para calcular o perímetro.\r\n                                  Basta\r\n                                  somar a medida dos lados!\r\n                                </span>\r\n                                <hr>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <ng-katex class=\"tres-lados__resultado__formula\" [equation]=\"equacaoPerimetro2\"></ng-katex>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\">Substituir os valores na fórmula.\r\n                                </span>\r\n                                <hr>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <ng-katex class=\"tres-lados__resultado__formula\" [equation]=\"equacaoPerimetro3\"></ng-katex>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\"> Resultado.</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header tres-lados__explicacao__opcao__botao\" id=\"headingFive\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseFive\" aria-expanded=\"true\" aria-controls=\"collapseFive\" (click)=\"onSetTipoLados()\">\r\n                    Tipo quanto aos Lados = {{formModel.get('tipoLados').value}}\r\n                    <div class=\"tres-lados__explicacao__opcao__botao__icon\">\r\n                      <i class=\" fa fa-arrow-circle-down tres-lados__explicacao__opcao__botao__icon__fa__down\"\r\n                        aria-hidden=\"true\"></i>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordionPropriedades\">\r\n                    <div class=\"card-body\">\r\n                      <h5>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\">\r\n                                  {{ formModel.get('tipoLados').value }}\r\n                                </span>\r\n                                <hr>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Equilátero'\">\r\n                                  O triângulo é equilátero porque os três lados possuem a mesma medida.\r\n                                </span>\r\n                                <span class=\"tres-lados__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Escaleno'\">\r\n                                  O triângulo é escaleno porque os três lados possuem medidas diferentes.\r\n                                </span>\r\n                                <span class=\"tres-lados__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Isósceles'\">\r\n                                  {{ formModel.get('tipoLadosIsosceles').value }}\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header tres-lados__explicacao__opcao__botao\" id=\"headingSix\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSix\" aria-expanded=\"true\" aria-controls=\"collapseSix\" (click)=\"onSetTipoAngulos()\">\r\n                    Tipo quanto as Ângulos = {{formModel.get('tipoAngulos').value}}\r\n                    <div class=\"tres-lados__explicacao__opcao__botao__icon\">\r\n                      <i class=\" fa fa-arrow-circle-down tres-lados__explicacao__opcao__botao__icon__fa__down\"\r\n                        aria-hidden=\"true\"></i>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingSix\" data-parent=\"#accordionPropriedades\">\r\n                    <div class=\"card-body\">\r\n                      <h5>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-md-12 tres-lados__resultado\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\">\r\n                                  {{ formModel.get('tipoAngulos').value }}\r\n                                </span>\r\n                                <hr>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <span class=\"tres-lados__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Retângulo'\">\r\n                                  O triângulo é retângulo porque possui um ângulo reto.\r\n                                  <br> <br>\r\n                                  <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                                  O ângulo se torna reto quando seus lados são semi–retas opostas e a medida for de\r\n                                  dois\r\n                                  retos de 180°.\r\n                                </span>\r\n                                <span class=\"tres-lados__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Obtusângulo'\">\r\n                                  O triângulo é obtusângulo porque possui um ângulo obtuso.\r\n                                  <br> <br>\r\n                                  <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                                  O ângulo se torna obtuso quando sua medida é maior que a medida de um ângulo reto de\r\n                                  90°.\r\n                                </span>\r\n                                <span class=\"tres-lados__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Acutângulo'\">\r\n                                  O triângulo é acutângulo porque possui os três ângulos internos agudos.\r\n                                  <br> <br>\r\n                                  <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                                  O ângulo se torna agudo quando sua medida é menor que a medida de um ângulo reto de\r\n                                  90°.\r\n                                </span>\r\n                                <hr>\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                <h4>Medida dos ângulos</h4>\r\n                                <div class=\"col-sm-12 col-md-12\">\r\n                                  Ângulo A = {{ anguloVerticeA }} &deg;\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-12\">\r\n                                  Ângulo B = {{ anguloVerticeB }} &deg;\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-12\">\r\n                                  Ângulo C = {{ anguloVerticeC }} &deg;\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/tres-lados/tres-lados.component.scss":
/***/ (function(module, exports) {

module.exports = ".tres-lados {\n  margin-top: 0.5em;\n  height: auto;\n  margin-left: 0%; }\n  .tres-lados__triangulo {\n    padding-left: 0px; }\n  .tres-lados__triangulo__entrada {\n      padding-top: 0.5em;\n      padding-bottom: 0.5em;\n      padding-left: 15px; }\n  .tres-lados__triangulo__entrada__titulo {\n        text-align: center;\n        padding-top: 1em; }\n  .tres-lados__triangulo__entrada__validacao {\n        padding-left: 1em; }\n  .tres-lados__triangulo__desenho {\n      padding-top: 1em;\n      padding-left: 1em;\n      text-align: center; }\n  .tres-lados__resolucao {\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgba(70, 131, 180, 0.555);\n    border-top: none;\n    border-bottom: none;\n    border-right: none;\n    padding-left: 15px; }\n  .tres-lados__resolucao__accordion {\n      padding-top: 1em; }\n  .tres-lados--desabilitado {\n    display: none; }\n  .tres-lados__erro {\n    width: 600px;\n    height: 600px; }\n  .tres-lados__explicacao {\n    text-align: left;\n    margin-bottom: 1em; }\n  .tres-lados__explicacao__opcao {\n      text-align: center; }\n  .tres-lados__explicacao__opcao__botao {\n        cursor: pointer;\n        border-color: #4683b4;\n        color: #4683b4;\n        background-color: white !important; }\n  .tres-lados__explicacao__opcao__botao__icon {\n          float: right;\n          font-size: 18px; }\n  .tres-lados__explicacao__opcao__botao__icon__fa__down {\n            color: #99f510; }\n  .tres-lados__explicacao__opcao__botao:hover {\n        background-color: #4683b4 !important;\n        color: white; }\n  .tres-lados__explicacao__opcao__botao:link {\n        background-color: #4683b4 !important; }\n  .tres-lados__resultado__explicacao {\n    text-align: center;\n    font-size: 20px; }\n  .tres-lados__resultado__formula {\n    font-size: 25px;\n    text-align: center; }\n  .tres-lados__resultado__formula--direita {\n      float: right; }\n  .tres-lados__resultado__formula--esquerda {\n      float: left; }\n  .tres-lados__conteudo {\n    border: solid 1px;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #4683b4;\n    margin-bottom: 1em; }\n  .dropdown-menu {\n  background-color: rgba(70, 131, 180, 0.555); }\n  .dropdown-item:hover {\n  background-color: #4683b4;\n  cursor: pointer; }\n  .input-group {\n  margin-top: 0.5em; }\n  .input-group-addon {\n    background-color: #4683b4;\n    width: 3em;\n    text-align: center;\n    padding-top: 7px;\n    color: white;\n    font-size: 18px; }\n  ul {\n  list-style-type: none; }\n  .card-header {\n  background-color: rgba(70, 131, 180, 0.555); }\n  .card {\n  border-color: rgba(70, 131, 180, 0.555); }\n  #bordaCard {\n  border-bottom: none; }\n  @media screen and (max-width: 768px) {\n  .texto {\n    text-align: left; }\n  .form-control {\n    max-width: 4em; } }\n  @media screen and (min-width: 768px) {\n  .texto {\n    text-align: right;\n    padding-top: 1em; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/tres-lados/tres-lados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TresLadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TresLadosComponent = /** @class */ (function () {
    function TresLadosComponent(fb) {
        this.fb = fb;
        this.formModel = this.fb.group({
            ladoA: [4, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            ladoB: [4, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            ladoC: [6, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1)]],
            alturaVerticeA: [''],
            alturaVerticeB: [''],
            alturaVerticeC: [''],
            tipoLados: [''],
            tipoAngulos: [''],
            base: [0],
            altura: [0],
            ladoValor: [0],
            ladoLetra: [''],
            propriedade: [''],
            propriedadeDesenho: [''],
            isTriangle: ['true'],
            tipoLadosIsosceles: [''],
        });
        this.distanciaCamera = 5;
        this.geom = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this.stop = false;
    }
    TresLadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.container = this.elementRef.nativeElement;
        console.log(this.container);
        this.init();
        this.formModel.valueChanges.subscribe(function (value) {
            _this.animate();
        });
    };
    TresLadosComponent.prototype.ngOnDestroy = function () {
        this.stop = true;
    };
    TresLadosComponent.prototype.init = function () {
        if (window.innerWidth > 1200) {
            this.screen = {
                width: window.innerWidth / 2.5,
                height: window.innerWidth / 2.5
            };
        }
        else if (window.innerWidth > 769) {
            this.screen = {
                width: window.innerWidth / 1.5,
                height: window.innerWidth / 1.5
            };
        }
        else {
            this.screen = {
                width: window.innerWidth * 0.9,
                height: window.innerWidth * 0.9
            };
        }
        var view = {
            angle: 90,
            aspect: this.screen.width / this.screen.height,
            near: 0.1,
            far: 1000
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xffffff); // Cor de fundo canvas
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](view.angle, view.aspect, view.near, view.far);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        this.scene.add(this.camera);
        this.camera.position.set(0, 0, this.distanciaCamera);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.container.appendChild(this.renderer.domElement);
        this.letraA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.letraB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.letraC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelAltura = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.a = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.b = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.c = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.acharPontos();
        this.criarBaseAltura();
        this.criarTriangulo();
        this.scene.add(this.triangulo);
        this.moverCameraCentroTriangulo();
        this.adicionarLinhasTriangulo();
        this.formModel.get('propriedadeDesenho').setValue('BaseC');
        this.render();
    };
    TresLadosComponent.prototype.render = function () {
        var self = this;
        (function render() {
            if (!self.stop) {
                requestAnimationFrame(render);
                self.renderer.render(self.scene, self.camera);
                self.animate();
            }
        }());
    };
    TresLadosComponent.prototype.animate = function () {
        if (this.isTriangle()) {
            this.acharPontos();
            this.atualizarBaseAltura();
            this.moverCameraCentroTriangulo();
            this.desabilitardestaque();
            this.calcularAngulos();
            this.calcularPerimetro();
            this.calcularArea();
            this.tipoTriangulos();
            this.calcularAlturaVertices();
            this.destaque();
            this.atualizarPontos();
            this.adicionarTexto('A', this.letraA, this.scene, this.distanciaCamera);
            this.adicionarTexto('B', this.letraB, this.scene, this.distanciaCamera);
            this.adicionarTexto('C', this.letraC, this.scene, this.distanciaCamera);
            this.adicionarTexto('a = ' + this.formModel.get('ladoA').value, this.labelLadoA, this.scene, this.distanciaCamera);
            this.adicionarTexto('b = ' + this.formModel.get('ladoB').value, this.labelLadoB, this.scene, this.distanciaCamera);
            this.adicionarTexto('c = ' + this.formModel.get('ladoC').value, this.labelLadoC, this.scene, this.distanciaCamera);
            this.adicionarTexto('h', this.labelAltura, this.scene, this.distanciaCamera);
            this.atualizarLabelVertices();
            this.atualizarLabelLados();
            this.atualizarLabelAltura();
            this.mostrarResultadoArea();
            this.mostrarResultadoBaseAltura();
            this.mostrarResultadoMedidaLados();
            this.mostrarResultadoPerimetro();
            this.formModel.get('isTriangle').setValue('true');
        }
        else {
            this.formModel.get('isTriangle').setValue('false');
            this.falseTriangle();
        }
    };
    TresLadosComponent.prototype.isTriangle = function () {
        var a = this.formModel.get('ladoA').value * 1;
        var b = this.formModel.get('ladoB').value * 1;
        var c = this.formModel.get('ladoC').value * 1;
        if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
            this.notTriangle = '';
            return true;
        }
        else {
            if ((a + b) <= c) {
                this.notTriangle = 'A medida do lado a + a medida do lado b obrigatoriamente deve ser maior que a medida do lado c.';
            }
            else if ((a + c) <= b) {
                this.notTriangle = 'A medida do lado a + a medida do lado c obrigatoriamente deve ser maior que a medida do lado b.';
            }
            else if ((b + c) <= a) {
                this.notTriangle = 'A medida do lado b + a medida do lado c obrigatoriamente deve ser maior que a medida do lado a.';
            }
            return false;
        }
    };
    TresLadosComponent.prototype.criarPonto = function (x, y) {
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["CircleGeometry"](this.distanciaCamera / 50, 10);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x000000 });
        var circle = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        circle.position.x = x;
        circle.position.y = y;
        circle.position.z = 0.1;
        return circle;
    };
    TresLadosComponent.prototype.criarTriangulo = function () {
        this.geom = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        var v1 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY, 0);
        var v2 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY, 0);
        var v3 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY, 0);
        var triangle = new __WEBPACK_IMPORTED_MODULE_1_three__["Triangle"](v1, v2, v3);
        this.geom.vertices.push(triangle.a);
        this.geom.vertices.push(triangle.b);
        this.geom.vertices.push(triangle.c);
        this.geom.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2));
        this.geom.verticesNeedUpdate = true;
        var mat = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x90EE90, transparent: true, opacity: 0.5, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this.triangulo = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geom, mat);
        this.geom.verticesNeedUpdate = true;
        this.triangulo.name = 'triangulo';
    };
    TresLadosComponent.prototype.acharPontos = function () {
        var b = this.formModel.get('ladoA').value;
        var a = this.formModel.get('ladoB').value;
        var c = this.formModel.get('ladoC').value;
        this.cordAX = 0;
        this.cordAY = 0;
        this.cordBX = c * 1;
        this.cordBY = 0;
        // let angulo1 = (Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c)));
        var angulo2 = (Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)));
        var x = this.cordBX - (Math.cos(angulo2) * b);
        var y = Math.sin(angulo2) * b + this.cordBY;
        this.cordCX = x;
        this.cordCY = y;
    };
    TresLadosComponent.prototype.atualizarPontos = function () {
        this.scene.remove(this.a);
        this.scene.remove(this.b);
        this.scene.remove(this.c);
        this.a.geometry.dispose();
        this.b.geometry.dispose();
        this.c.geometry.dispose();
        this.a = this.criarPonto(this.cordAX, this.cordAY);
        this.a.name = "verticeA";
        this.b = this.criarPonto(this.cordBX, this.cordBY);
        this.b.name = "verticeB";
        this.c = this.criarPonto(this.cordCX, this.cordCY);
        this.c.name = "verticeC";
        this.scene.add(this.a);
        this.scene.add(this.b);
        this.scene.add(this.c);
        this.a.position.x = this.cordAX;
        this.a.position.y = this.cordAY;
        this.b.position.x = this.cordBX;
        this.b.position.y = this.cordBY;
        this.c.position.x = this.cordCX;
        this.c.position.y = this.cordCY;
        // Atualiza Triangulo
        this.geom.verticesNeedUpdate = true;
        this.geom.vertices[0].set(this.a.position.x, this.a.position.y, 0);
        this.geom.vertices[1].set(this.b.position.x, this.b.position.y, 0);
        this.geom.vertices[2].set(this.c.position.x, this.c.position.y, 0);
    };
    TresLadosComponent.prototype.moverCameraCentroTriangulo = function () {
        // E Escala
        var temp;
        var e = this.cordCY;
        if (this.cordCX >= this.cordAX && this.cordCX <= this.cordBX) {
            temp = this.cordBX;
            if (temp > e) {
                e = temp;
            }
        }
        else if (this.cordCX < this.cordAX) {
            temp = this.cordBX - this.cordCX;
            if (temp > e) {
                e = temp;
            }
        }
        else {
            temp = this.cordCX - this.cordAX;
            if (temp > e) {
                e = temp;
            }
        }
        this.camera.position.z = (e * 1.25) / 1.5;
        this.distanciaCamera = this.camera.position.z;
        // Centro triangulo
        var m = this.cordBX * 1;
        var f = this.cordCX;
        this.camera.position.x = (m + f) / 3;
        this.camera.position.y = (this.cordAY + this.cordBY + this.cordCY) / 3;
    };
    TresLadosComponent.prototype.adicionarLinhasTriangulo = function () {
        // //destaque
        // AB
        var spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY)]);
        var materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFF0000 });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueAB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueAB);
        // BC
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00FF00 });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueBC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueBC);
        // CA
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x0000FF });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueCA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueCA);
    };
    TresLadosComponent.prototype.atualizarLinhasTriangulo = function (opacidadeAB, opacidadeBC, opacidadeCA) {
        var largura = this.distanciaCamera / 100;
        this.scene.remove(this.linhadestaqueAB);
        this.linhadestaqueAB.geometry.dispose();
        var spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY)]);
        var materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFF0000, opacity: opacidadeAB });
        materialLinhadestaque.transparent = true;
        var geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhadestaqueAB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha, materialLinhadestaque);
        this.linhadestaqueAB.name = 'linhadestaqueBC';
        this.scene.add(this.linhadestaqueAB);
        this.scene.remove(this.linhadestaqueBC);
        this.linhadestaqueBC.geometry.dispose();
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00FF00, opacity: opacidadeBC });
        materialLinhadestaque.transparent = true;
        var geometriaLinha2 = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhadestaqueBC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha2, materialLinhadestaque);
        this.linhadestaqueBC.name = 'linhadestaqueAB';
        this.scene.add(this.linhadestaqueBC);
        this.scene.remove(this.linhadestaqueCA);
        this.linhadestaqueCA.geometry.dispose();
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x0000FF, opacity: opacidadeCA });
        materialLinhadestaque.transparent = true;
        var geometriaLinha3 = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 7, false);
        this.linhadestaqueCA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha3, materialLinhadestaque);
        this.linhadestaqueCA.name = 'linhadestaqueCA';
        this.scene.add(this.linhadestaqueCA);
    };
    TresLadosComponent.prototype.calcularAngulos = function () {
        var DAB = this.formModel.get('ladoA').value;
        var DBC = this.formModel.get('ladoB').value;
        var DCA = this.formModel.get('ladoC').value;
        this.anguloVerticeB = (Math.acos((Math.pow(DAB, 2) + Math.pow(DCA, 2) - Math.pow(DBC, 2)) /
            (2 * DAB * DCA)) * 180 / Math.PI).toFixed(2);
        this.anguloVerticeC = (Math.acos((Math.pow(DAB, 2) + Math.pow(DBC, 2) - Math.pow(DCA, 2)) /
            (2 * DAB * DBC)) * 180 / Math.PI).toFixed(2);
        this.anguloVerticeA = (Math.acos((Math.pow(DBC, 2) + Math.pow(DCA, 2) - Math.pow(DAB, 2)) /
            (2 * DBC * DCA)) * 180 / Math.PI).toFixed(2);
        this.anguloVerticeA = this.anguloVerticeA * 1;
        this.anguloVerticeB = this.anguloVerticeB * 1;
        this.anguloVerticeC = this.anguloVerticeC * 1;
    };
    TresLadosComponent.prototype.criarBaseAltura = function () {
        var distancia = this.camera.position.z * 2;
        var curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, 0),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, 0)]);
        this.retaBaseB = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        var materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseA = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseB, materialLinha);
        this.scene.add(this.linhaRetaBaseA);
        var AX = this.cordAX;
        var AY = this.cordAY;
        var BX = this.cordBX;
        var BY = this.cordBY;
        var CX = this.cordCX;
        var CY = this.cordCY;
        var mA = (CY - AY) / (CX - AX);
        var mB = (CY - BY) / (CX - BX);
        this.pontoRetaAAY = (mA * (this.distanciaCamera * 2 - AX)) + AY;
        this.pontoRetaABY = (mA * (-this.distanciaCamera * 2 - AX)) + AY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.camera.position.z * 2, this.pontoRetaAAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-this.camera.position.z * 2, this.pontoRetaABY)]);
        this.retaBaseA = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseB = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseA, materialLinha);
        this.scene.add(this.linhaRetaBaseB);
        this.pontoRetaCAY = (mB * (this.distanciaCamera * 2 - BX)) + BY;
        this.pontoRetaCBY = (mB * (-this.distanciaCamera * 2 - BX)) + BY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.camera.position.z * 2, this.pontoRetaCAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-this.camera.position.z * 2, this.pontoRetaCBY)]);
        this.retaBaseC = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseC = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseC, materialLinha);
        this.scene.add(this.linhaRetaBaseC);
        var mA2 = (-1 / mA);
        var mB2 = (-1 / mB);
        this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
        this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, CY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, 0)]);
        this.caminhoAlturaC = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaC = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaC, materialLinha);
        this.scene.add(this.linhaAlturaC);
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, BY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
        this.caminhoAlturaA = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaB = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaA, materialLinha);
        this.scene.add(this.linhaAlturaB);
        this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
        this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, AY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
        this.caminhoAlturaB = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaA = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaB, materialLinha);
        this.scene.add(this.linhaAlturaA);
    };
    TresLadosComponent.prototype.atualizarBaseAltura = function () {
        var AX = this.cordAX;
        var AY = this.cordAY;
        var BX = this.cordBX;
        var BY = this.cordBY;
        var CX = this.cordCX;
        var CY = this.cordCY;
        var distancia = this.camera.position.z + 10;
        var curva;
        var mC = (BY - AY) / (BX - AX);
        var mB = (CY - BY) / (CX - BX);
        var mA = (CY - AY) / (CX - AX);
        var mA2 = (-1 / mA);
        var mB2 = (-1 / mB);
        var mC2 = (-1 / mC);
        if (BX === AX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, -distancia)]);
        }
        else {
            this.pontoRetaBAY = (mC * (distancia - AX)) + AY;
            this.pontoRetaBBY = (mC * (-distancia - AX)) + AY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaBBY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaBAY)]);
        }
        this.retaBaseB.setFromPoints(curva.getPoints(1));
        this.retaBaseB.verticesNeedUpdate = true;
        if (CX === AX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, -distancia)]);
        }
        else {
            this.pontoRetaAAY = (mA * ((distancia) - AX)) + AY;
            this.pontoRetaABY = (mA * ((-distancia) - AX)) + AY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaAAY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaABY)]);
        }
        this.retaBaseA.setFromPoints(curva.getPoints(1));
        this.retaBaseA.verticesNeedUpdate = true;
        if (CX === BX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, -distancia)]);
        }
        else {
            this.pontoRetaCAY = (mB * (distancia - BX)) + BY;
            this.pontoRetaCBY = (mB * (-distancia - BX)) + BY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaCAY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaCBY)]);
        }
        this.retaBaseC.setFromPoints(curva.getPoints(1));
        this.retaBaseC.verticesNeedUpdate = true;
        // linha da altura
        if (BX === AX) {
            this.pontoRetaIntersecCX = AX;
            this.pontoRetaIntersecCY = CY;
        }
        else if (BY === AY) {
            this.pontoRetaIntersecCX = CX;
            this.pontoRetaIntersecCY = AY;
        }
        else {
            this.pontoRetaIntersecCX = ((-mC2 * CX) + CY + (mC * BX) - BY) / (-mC2 + mC);
            this.pontoRetaIntersecCY = ((mC2) * (this.pontoRetaIntersecCX - CX)) + CY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, CY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecCX, this.pontoRetaIntersecCY)]);
        this.caminhoAlturaC.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaC.verticesNeedUpdate = true;
        // linha da altura
        if (CX === AX) {
            this.pontoRetaIntersecAX = AX;
            this.pontoRetaIntersecAY = BY;
        }
        else if (CY === AY) {
            this.pontoRetaIntersecAX = BX;
            this.pontoRetaIntersecAY = AY;
        }
        else {
            this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
            this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, BY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
        this.caminhoAlturaA.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaA.verticesNeedUpdate = true;
        // linha da altura
        if (CX === BX) {
            this.pontoRetaIntersecBX = BX;
            this.pontoRetaIntersecBY = AY;
        }
        else {
            this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
            this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, AY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
        this.caminhoAlturaB.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaB.verticesNeedUpdate = true;
    };
    TresLadosComponent.prototype.calcularPerimetro = function () {
        this.perimetro = this.formModel.get('ladoA').value + this.formModel.get('ladoB').value + this.formModel.get('ladoC').value;
    };
    TresLadosComponent.prototype.calcularArea = function () {
        var ax = this.cordAX;
        var ay = this.cordAY;
        var bx = this.cordBX;
        var by = this.cordBY;
        var cx = this.cordCX;
        var cy = this.cordCY;
        this.area = (Math.abs((ax * by) + (ay * cx) + (bx * cy) - (by * cx) - (ax * cy) - (ay * bx)) * 0.5);
        this.areaTemplate = this.area.toFixed(2);
    };
    TresLadosComponent.prototype.tipoTriangulos = function () {
        if (this.anguloVerticeA === 90 || this.anguloVerticeB === 90 || this.anguloVerticeC === 90) {
            this.formModel.get('tipoAngulos').setValue('Retângulo');
        }
        else if (this.anguloVerticeA > 90 || this.anguloVerticeB > 90 || this.anguloVerticeC > 90) {
            this.formModel.get('tipoAngulos').setValue('Obtusângulo');
        }
        else {
            this.formModel.get('tipoAngulos').setValue('Acutângulo');
        }
        var AB = this.formModel.get('ladoC').value;
        var BC = this.formModel.get('ladoA').value;
        var CA = this.formModel.get('ladoB').value;
        if (AB === BC && BC === CA) {
            this.formModel.get('tipoLados').setValue('Equilátero');
        }
        else if (AB !== BC && BC !== CA && CA !== AB) {
            this.formModel.get('tipoLados').setValue('Escaleno');
        }
        else {
            this.formModel.get('tipoLados').setValue('Isósceles');
            if (this.formModel.get('ladoA').value === this.formModel.get('ladoB').value) {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado a e o lado b possuem as medidas iguais.');
            }
            else if (this.formModel.get('ladoB').value === this.formModel.get('ladoC').value) {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado b e o lado c possuem as medidas iguais.');
            }
            else {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado c e o lado a possuem as medidas iguais.');
            }
        }
    };
    TresLadosComponent.prototype.calcularAlturaVertices = function () {
        this.formModel.get('alturaVerticeA').setValue((this.area * 2) / this.formModel.get('ladoA').value);
        this.formModel.get('alturaVerticeB').setValue((this.area * 2) / this.formModel.get('ladoB').value);
        this.formModel.get('alturaVerticeC').setValue((this.area * 2) / this.formModel.get('ladoC').value);
    };
    TresLadosComponent.prototype.desabilitardestaque = function () {
        this.atualizarLinhasTriangulo(0.2, 0.2, 0.2);
        this.linhaRetaBaseA.visible = false;
        this.linhaRetaBaseB.visible = false;
        this.linhaRetaBaseC.visible = false;
        this.linhaAlturaA.visible = false;
        this.linhaAlturaB.visible = false;
        this.linhaAlturaC.visible = false;
        this.triangulo.visible = false;
        this.labelAltura.visible = false;
    };
    TresLadosComponent.prototype.destaque = function () {
        var ep = this.formModel.get('propriedade').value; // Escolha Principal
        var es = this.formModel.get('propriedadeDesenho').value; // Escolha Secundaria
        if (ep === 'area') {
            this.triangulo.visible = true;
            this.labelAltura.visible = true;
            if (es === 'BaseC') {
                this.linhaAlturaC.visible = true;
                this.linhaRetaBaseA.visible = true;
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.linhaAlturaB.visible = true;
                this.linhaRetaBaseB.visible = true;
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.linhaAlturaA.visible = true;
                this.linhaRetaBaseC.visible = true;
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'baseAltura') {
            this.labelAltura.visible = true;
            if (es === 'BaseC') {
                this.linhaAlturaC.visible = true;
                this.linhaRetaBaseA.visible = true;
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.linhaAlturaB.visible = true;
                this.linhaRetaBaseB.visible = true;
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.linhaAlturaA.visible = true;
                this.linhaRetaBaseC.visible = true;
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'medidaLados') {
            if (es === 'BaseC') {
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'perimetro') {
            this.atualizarLinhasTriangulo(1, 1, 1);
        }
        else if (ep === 'tipo') {
            this.atualizarLinhasTriangulo(1, 1, 1);
        }
    };
    TresLadosComponent.prototype.adicionarTexto = function (valor, geom, scene, size) {
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000 });
        var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["FontLoader"]();
        loader.load('https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["TextGeometry"](valor, {
                font: font,
                size: size / 15,
                height: 0.0001,
                curveSegments: 12,
            });
            geom.geometry.dispose();
            geom.geometry = geometry;
            geom.material = material;
            scene.add(geom);
        });
    };
    TresLadosComponent.prototype.atualizarLabelVertices = function () {
        var x, y, mx, my;
        var ed = 20; // Divisor
        // A
        mx = (this.cordBX + this.cordCX) / 2;
        my = (this.cordBY + this.cordCY) / 2;
        if (this.cordAX > mx) {
            x = this.cordAX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordAX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordAY > my) {
            y = this.cordAY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordAY - this.distanciaCamera / (ed / 2);
        }
        this.letraA.position.x = x;
        this.letraA.position.y = y;
        // B
        mx = (this.cordAX + this.cordCX) / 2;
        my = (this.cordAY + this.cordCY) / 2;
        if (this.cordBX > mx) {
            x = this.cordBX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordBX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordBY > my) {
            y = this.cordBY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordBY - this.distanciaCamera / (ed / 2);
        }
        this.letraB.position.x = x;
        this.letraB.position.y = y;
        // C
        mx = (this.cordBX + this.cordAX) / 2;
        my = (this.cordBY + this.cordAY) / 2;
        if (this.cordCX > mx) {
            x = this.cordCX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordCX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordCY > my) {
            y = this.cordCY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordCY - this.distanciaCamera / (ed / 2);
        }
        this.letraC.position.x = x;
        this.letraC.position.y = y;
    };
    TresLadosComponent.prototype.atualizarLabelLados = function () {
        var centrox = (this.cordAX + this.cordBX + this.cordCX) / 3;
        var centroy = (this.cordAY + this.cordBY + this.cordCY) / 3;
        var x, y, mx, my;
        var ed = 20; // Divisor
        // A
        mx = (this.cordBX + this.cordCX) / 2;
        my = (this.cordBY + this.cordCY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoA.position.x = x;
        this.labelLadoA.position.y = y;
        // B
        mx = (this.cordAX + this.cordCX) / 2;
        my = (this.cordAY + this.cordCY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoB.position.x = x;
        this.labelLadoB.position.y = y;
        // C
        mx = (this.cordBX + this.cordAX) / 2;
        my = (this.cordBY + this.cordAY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoC.position.x = x;
        this.labelLadoC.position.y = y;
    };
    TresLadosComponent.prototype.atualizarLabelAltura = function () {
        var es = this.formModel.get('propriedadeDesenho').value; // Escolha Secundaria
        if (es === 'BaseC') {
            this.labelAltura.position.x = this.cordCX;
            this.labelAltura.position.y = this.cordCY / 2;
        }
        else if (es === 'BaseB') {
            this.labelAltura.position.x = (this.cordBX + this.pontoRetaIntersecAX) / 2;
            this.labelAltura.position.y = (this.cordBY + this.pontoRetaIntersecAY) / 2;
        }
        else {
            this.labelAltura.position.x = (this.cordAX + this.pontoRetaIntersecBX) / 2;
            this.labelAltura.position.y = (this.cordAY + this.pontoRetaIntersecBY) / 2;
        }
    };
    TresLadosComponent.prototype.onMouseClick = function (event) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        var xDoMouse = event.offsetX;
        var yDoMouse = event.offsetY;
        xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
        yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
        var raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        raycaster.setFromCamera(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](xDoMouse, yDoMouse), this.camera);
        var intersects = raycaster.intersectObjects([this.linhadestaqueAB, this.linhadestaqueBC, this.linhadestaqueCA]);
        if (intersects.length > 0) {
            var intersectedObject = intersects[0].object;
            if (intersectedObject.name === 'linhadestaqueAB') {
                this.formModel.get('propriedadeDesenho').setValue('BaseA');
            }
            else if (intersectedObject.name === 'linhadestaqueBC') {
                this.formModel.get('propriedadeDesenho').setValue('BaseC');
            }
            else if (intersectedObject.name === 'linhadestaqueCA') {
                this.formModel.get('propriedadeDesenho').setValue('BaseB');
            }
        }
    };
    TresLadosComponent.prototype.onSetArea = function () {
        this.formModel.get('propriedade').setValue('area');
    };
    TresLadosComponent.prototype.onSetBaseAltura = function () {
        this.formModel.get('propriedade').setValue('baseAltura');
    };
    TresLadosComponent.prototype.onSetMedidaLados = function () {
        this.formModel.get('propriedade').setValue('medidaLados');
    };
    TresLadosComponent.prototype.onSetPerimetro = function () {
        this.formModel.get('propriedade').setValue('perimetro');
    };
    TresLadosComponent.prototype.onSetTipoLados = function () {
        this.formModel.get('propriedade').setValue('tipoLados');
    };
    TresLadosComponent.prototype.onSetTipoAngulos = function () {
        this.formModel.get('propriedade').setValue('tipoAngulos');
    };
    TresLadosComponent.prototype.onSetMedidaAngulos = function () {
        this.formModel.get('propriedade').setValue('medidaAngulos');
    };
    TresLadosComponent.prototype.mostrarResultadoArea = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        var base;
        var altura;
        var letraBase;
        if (selecionado === 'BaseA') {
            base = this.formModel.get('ladoA').value;
            altura = (this.formModel.get('alturaVerticeA').value).toFixed(2);
            letraBase = 'a';
        }
        else if (selecionado === 'BaseB') {
            base = this.formModel.get('ladoB').value;
            altura = (this.formModel.get('alturaVerticeB').value).toFixed(2);
            letraBase = 'b';
        }
        else if (selecionado === 'BaseC') {
            base = this.formModel.get('ladoC').value;
            altura = (this.formModel.get('alturaVerticeC').value).toFixed(2);
            letraBase = 'c';
        }
        this.equacaoArea = 'A = \\frac{' + letraBase + '\\times h }{2}';
        this.equacaoArea2 = 'A = \\frac{' + base.toFixed(2)
            + '\\times' + altura + '}{2}';
        this.equacaoArea3 = 'A = ' + this.areaTemplate + 'u.a.';
    };
    TresLadosComponent.prototype.mostrarResultadoBaseAltura = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        if (selecionado === 'BaseA') {
            this.formModel.get('base').setValue((this.formModel.get('ladoA').value).toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeA').value).toFixed(2));
        }
        else if (selecionado === 'BaseB') {
            this.formModel.get('base').setValue((this.formModel.get('ladoB').value).toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeB').value).toFixed(2));
        }
        else if (selecionado === 'BaseC') {
            this.formModel.get('base').setValue((this.formModel.get('ladoC').value).toFixed(2));
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeC').value).toFixed(2));
        }
    };
    TresLadosComponent.prototype.mostrarResultadoMedidaLados = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        if (selecionado === 'BaseA') {
            this.formModel.get('ladoValor').setValue((this.formModel.get('ladoA').value).toFixed(2));
            this.formModel.get('ladoLetra').setValue('a');
        }
        else if (selecionado === 'BaseB') {
            this.formModel.get('ladoValor').setValue((this.formModel.get('ladoB').value).toFixed(2));
            this.formModel.get('ladoLetra').setValue('b');
        }
        else if (selecionado === 'BaseC') {
            this.formModel.get('ladoValor').setValue((this.formModel.get('ladoC').value).toFixed(2));
            this.formModel.get('ladoLetra').setValue('c');
        }
    };
    TresLadosComponent.prototype.mostrarResultadoPerimetro = function () {
        this.equacaoPerimetro = 'P = a + b + c';
        this.equacaoPerimetro2 = 'P =' + (this.formModel.get('ladoA').value.toFixed(2)) +
            '+' + (this.formModel.get('ladoB').value.toFixed(2)) +
            '+' + (this.formModel.get('ladoC').value.toFixed(2));
        this.equacaoPerimetro3 = 'P =' + this.perimetro.toFixed(2) + ' u.m.';
        this.perimetroTemplate = this.perimetro.toFixed(2);
    };
    TresLadosComponent.prototype.falseTriangle = function () {
        this.camera.position.x = -300;
        this.camera.position.y = -300;
        this.camera.position.z = 5;
    };
    TresLadosComponent.prototype.onWindowResize = function (event) {
        if (event.target.innerWidth > 1200) {
            this.screen.width = event.target.innerWidth / 2.5;
            this.screen.height = event.target.innerWidth / 2.5;
        }
        else if (event.target.innerWidth > 769) {
            this.screen.width = event.target.innerWidth / 1.5;
            this.screen.height = event.target.innerWidth / 1.5;
        }
        else {
            this.screen.width = event.target.innerWidth * 0.9;
            this.screen.height = event.target.innerWidth * 0.9;
        }
        this.renderer.setSize(this.screen.width, this.screen.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TresLadosComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touch', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TresLadosComponent.prototype, "onMouseClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TresLadosComponent.prototype, "onWindowResize", null);
    TresLadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tres-lados',
            template: __webpack_require__("./src/app/views/geometria/triangulo/componentes/tres-lados/tres-lados.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/triangulo/componentes/tres-lados/tres-lados.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], TresLadosComponent);
    return TresLadosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/tres-vertices/tres-vertices.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"arial.js\"></script> -->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css\">\r\n<form [formGroup]=\"formModel\">\r\n  <div class=\"tres-vertices\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-7 tres-vertices__triangulo\">\r\n          <div class=\"col-sm-12 col-md-12 tres-vertices__triangulo__entrada\">\r\n            <h6>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-4\">\r\n                  <span>Vértice A</span>\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">x</span>\r\n                    <input type=\"number\" name=\"cordAX\" formControlName=\"cordAX\" class=\"form-control tres-vertices__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n                    <div class=\"tres-vertices__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('cordAX').hasError('required') && formModel.get('cordAX').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">y</span>\r\n                    <input type=\"number\" name=\"cordAY\" formControlName=\"cordAY\" class=\"form-control tres-vertices__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n                    <div class=\"tres-vertices__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('cordAY').hasError('required') && formModel.get('cordAY').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-4\">\r\n                  <span>Vértice B</span>\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">x</span>\r\n                    <input type=\"number\" name=\"cordBX\" formControlName=\"cordBX\" class=\"form-control tres-vertices__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n                    <div class=\"tres-vertices__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('cordBX').hasError('required') && formModel.get('cordBX').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">y</span>\r\n                    <input type=\"number\" name=\"cordBY\" formControlName=\"cordBY\" class=\"form-control tres-vertices__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n                    <div class=\"tres-vertices__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('cordBY').hasError('required') && formModel.get('cordBY').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-4\">\r\n                  <span>Vértice C</span>\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">x</span>\r\n                    <input type=\"number\" name=\"cordCX\" formControlName=\"cordCX\" class=\"form-control tres-vertices__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n                    <div class=\"tres-vertices__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('cordCX').hasError('required') && formModel.get('cordCX').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">y</span>\r\n                    <input type=\"number\" name=\"cordCY\" formControlName=\"cordCY\" class=\"form-control tres-vertices__entrada__input\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n                    <div class=\"tres-vertices__entrada__validacao\">\r\n                      <span *ngIf=\"formModel.get('cordCY').hasError('required') && formModel.get('cordCY').touched\">Campo\r\n                        inválido!</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </h6>\r\n          </div>\r\n          <div #container class=\"col-sm-12 col-md-12 tres-vertices__triangulo__desenho\">\r\n            <!-- resolução -->\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-xl-5 tres-vertices__resolucao\">\r\n          <div class=\"col-sm-12 col-md-12\">\r\n            <h4>Propriedades</h4>\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-12 tres-vertices__resolucao__accordion\">\r\n            <div class=\"accordion\" id=\"accordionPropriedades\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header tres-vertices__explicacao__opcao__botao\" id=\"headingOne\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" (click)=\"onSetArea()\">\r\n                  Área\r\n                  = {{areaTemplate}}\r\n                  <div class=\"tres-vertices__explicacao__opcao__botao__icon\">\r\n                    <i class=\"fa fa-arrow-circle-down tres-vertices__explicacao__opcao__botao__icon__fa__down\"\r\n                      aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPropriedades\">\r\n                  <div class=\"card-body\">\r\n                    <h5>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-12 tres-vertices__resultado\">\r\n                          <span class=\"tres-vertices__resultado__explicacao\">\r\n                            Para mudar a base, basta escolher um lado e clicar sobre ele.\r\n                          </span>\r\n                          <hr>\r\n                        </div>\r\n                        <div class=\"col-sm-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <ng-katex class=\"tres-vertices__resultado__formula\" [equation]=\"equacaoArea\"></ng-katex>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\">Fórmula para calcular a área.\r\n                              </span>\r\n                              <span>\r\n                                <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseA'\">\r\n                                  h = altura | a = base\r\n                                </div>\r\n                                <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseB'\">\r\n                                  h = altura | b = base\r\n                                </div>\r\n                                <div *ngIf=\"formModel.get('propriedadeDesenho').value === 'BaseC'\">\r\n                                  h = altura | c = base\r\n                                </div>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <hr>\r\n                        </div>\r\n                        <div class=\"col-sm-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <ng-katex class=\"tres-vertices__resultado__formula\" [equation]=\"equacaoArea2\"></ng-katex>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\">Substituir os valores na fórmula.\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <hr>\r\n                        </div>\r\n                        <div class=\"col-sm-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <ng-katex class=\"tres-vertices__resultado__formula\" [equation]=\"equacaoArea3\"></ng-katex>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\"> Resultado.</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header tres-vertices__explicacao__opcao__botao\" id=\"headingTwo\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\" (click)=\"onSetBaseAltura()\">\r\n                  Base e Altura\r\n                  <div class=\"tres-vertices__explicacao__opcao__botao__icon\">\r\n                    <i class=\" fa fa-arrow-circle-down tres-vertices__explicacao__opcao__botao__icon__fa__down\"\r\n                      aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionPropriedades\">\r\n                  <div class=\"card-body\">\r\n                    <h5>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-12 tres-vertices__resultado\">\r\n                          <span class=\"tres-vertices__resultado__explicacao\">\r\n                            Para mudar a base, basta escolher um lado e clicar sobre ele.\r\n                          </span>\r\n                          <hr>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Base = {{ formModel.get('base').value }}\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Altura = {{ formModel.get('altura').value }}\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header tres-vertices__explicacao__opcao__botao\" id=\"headingThree\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\" (click)=\"onSetMedidaLados()\">\r\n                  Medida dos lados\r\n                  <div class=\"tres-vertices__explicacao__opcao__botao__icon\">\r\n                    <i class=\" fa fa-arrow-circle-down tres-vertices__explicacao__opcao__botao__icon__fa__down\"\r\n                      aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionPropriedades\">\r\n                  <div class=\"card-body\">\r\n                    <h5>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\">Para saber o valor da medida de algum\r\n                                lado,\r\n                                basta escolher um lado e clicar sobre ele.\r\n                              </span>\r\n                              <hr>\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              Lado {{ formModel.get('ladoLetra').value }} = {{ formModel.get('ladoValor').value }}\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header tres-vertices__explicacao__opcao__botao\" id=\"headingFour\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseFour\" aria-expanded=\"true\" aria-controls=\"collapseFour\" (click)=\"onSetPerimetro()\">\r\n                  Perímetro = {{perimetroTemplate}}\r\n                  <div class=\"tres-vertices__explicacao__opcao__botao__icon\">\r\n                    <i class=\" fa fa-arrow-circle-down tres-vertices__explicacao__opcao__botao__icon__fa__down\"\r\n                      aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionPropriedades\">\r\n                  <div class=\"card-body\">\r\n                    <h5>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <ng-katex class=\"tres-vertices__resultado__formula\" [equation]=\"equacaoPerimetro\"></ng-katex>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\">Fórmula para calcular o perímetro.\r\n                                Basta\r\n                                somar a medida dos lados!\r\n                              </span>\r\n                              <hr>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <ng-katex class=\"tres-vertices__resultado__formula\" [equation]=\"equacaoPerimetro2\"></ng-katex>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\">Substituir os valores na fórmula.\r\n                              </span>\r\n                              <hr>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <ng-katex class=\"tres-vertices__resultado__formula\" [equation]=\"equacaoPerimetro3\"></ng-katex>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\"> Resultado.</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header tres-vertices__explicacao__opcao__botao\" id=\"headingFive\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseFive\" aria-expanded=\"true\" aria-controls=\"collapseFive\" (click)=\"onSetTipoLados()\">\r\n                  Tipo quanto aos Lados = {{formModel.get('tipoLados').value}}\r\n                  <div class=\"tres-vertices__explicacao__opcao__botao__icon\">\r\n                    <i class=\" fa fa-arrow-circle-down tres-vertices__explicacao__opcao__botao__icon__fa__down\"\r\n                      aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordionPropriedades\">\r\n                  <div class=\"card-body\">\r\n                    <h5>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\">\r\n                                {{ formModel.get('tipoLados').value }}\r\n                              </span>\r\n                              <hr>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Equilátero'\">\r\n                                O triângulo é equilátero porque os três lados possuem a mesma medida.\r\n                              </span>\r\n                              <span class=\"tres-vertices__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Escaleno'\">\r\n                                O triângulo é escaleno porque os três lados possuem medidas diferentes.\r\n                              </span>\r\n                              <span class=\"tres-vertices__resultado__explicacao\" *ngIf=\"formModel.get('tipoLados').value === 'Isósceles'\">\r\n                                {{ formModel.get('tipoLadosIsosceles').value }}\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header tres-vertices__explicacao__opcao__botao\" id=\"headingSix\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSix\" aria-expanded=\"true\" aria-controls=\"collapseSix\" (click)=\"onSetTipoAngulos()\">\r\n                  Tipo quanto as Ângulos = {{formModel.get('tipoAngulos').value}}\r\n                  <div class=\"tres-vertices__explicacao__opcao__botao__icon\">\r\n                    <i class=\" fa fa-arrow-circle-down tres-vertices__explicacao__opcao__botao__icon__fa__down\"\r\n                      aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingSix\" data-parent=\"#accordionPropriedades\">\r\n                  <div class=\"card-body\">\r\n                    <h5>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-12 tres-vertices__resultado\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\">\r\n                                {{ formModel.get('tipoAngulos').value }}\r\n                              </span>\r\n                              <hr>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <span class=\"tres-vertices__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Retângulo'\">\r\n                                O triângulo é retângulo porque possui um ângulo reto.\r\n                                <br> <br>\r\n                                <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                                O ângulo se torna reto quando seus lados são semi–retas opostas e a medida for de dois\r\n                                retos de 180°.\r\n                              </span>\r\n                              <span class=\"tres-vertices__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Obtusângulo'\">\r\n                                O triângulo é obtusângulo porque possui um ângulo obtuso.\r\n                                <br> <br>\r\n                                <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                                O ângulo se torna obtuso quando sua medida é maior que a medida de um ângulo reto de\r\n                                90°.\r\n                              </span>\r\n                              <span class=\"tres-vertices__resultado__explicacao\" *ngIf=\"formModel.get('tipoAngulos').value === 'Acutângulo'\">\r\n                                O triângulo é acutângulo porque possui os três ângulos internos agudos.\r\n                                <br> <br>\r\n                                <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                                O ângulo se torna agudo quando sua medida é menor que a medida de um ângulo reto de\r\n                                90°.\r\n                              </span>\r\n                              <hr>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-12\">\r\n                              <h4>Medida dos ângulos</h4>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                Ângulo A = {{ anguloVerticeA }} &deg;\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                Ângulo B = {{ anguloVerticeB }} &deg;\r\n                              </div>\r\n                              <div class=\"col-sm-12 col-md-12\">\r\n                                Ângulo C = {{ anguloVerticeC }} &deg;\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/tres-vertices/tres-vertices.component.scss":
/***/ (function(module, exports) {

module.exports = ".tres-vertices {\n  margin-top: 0.5em;\n  height: auto;\n  margin-left: 0%; }\n  .tres-vertices__triangulo {\n    padding-left: 0px; }\n  .tres-vertices__triangulo__entrada {\n      padding-top: 0.5em;\n      padding-bottom: 0.5em;\n      padding-left: 15px; }\n  .tres-vertices__triangulo__entrada__input {\n        max-width: 80px; }\n  .tres-vertices__triangulo__entrada__titulo {\n        text-align: center;\n        padding-top: 1em; }\n  .tres-vertices__triangulo__entrada__validacao {\n        padding-left: 1em; }\n  .tres-vertices__triangulo__desenho {\n      padding-top: 1em;\n      padding-left: 1em;\n      text-align: center; }\n  .tres-vertices__resolucao {\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgba(70, 131, 180, 0.555);\n    border-top: none;\n    border-bottom: none;\n    border-right: none;\n    padding-left: 15px; }\n  .tres-vertices__resolucao__accordion {\n      padding-top: 1em;\n      width: 100%;\n      display: inline-block; }\n  .tres-vertices--desabilitado {\n    display: none; }\n  .tres-vertices__erro {\n    width: 600px;\n    height: 600px; }\n  .tres-vertices__explicacao {\n    text-align: left;\n    margin-bottom: 1em; }\n  .tres-vertices__explicacao__opcao {\n      text-align: center; }\n  .tres-vertices__explicacao__opcao__botao {\n        cursor: pointer;\n        border-color: #4683b4;\n        color: #4683b4;\n        background-color: white !important;\n        display: block;\n        width: 100%; }\n  .tres-vertices__explicacao__opcao__botao__icon {\n          float: right;\n          font-size: 18px; }\n  .tres-vertices__explicacao__opcao__botao__icon__fa__down {\n            color: #99f510; }\n  .tres-vertices__explicacao__opcao__botao:hover {\n        background-color: #4683b4 !important;\n        color: white; }\n  .tres-vertices__explicacao__opcao__botao:link {\n        background-color: #4683b4 !important; }\n  .tres-vertices__resultado__explicacao {\n    text-align: center;\n    font-size: 20px; }\n  .tres-vertices__resultado__formula {\n    font-size: 25px;\n    text-align: center; }\n  .tres-vertices__resultado__formula--direita {\n      float: right; }\n  .tres-vertices__resultado__formula--esquerda {\n      float: left; }\n  .tres-vertices__conteudo {\n    border: solid 1px;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: #4683b4;\n    margin-bottom: 1em; }\n  .dropdown-menu {\n  background-color: rgba(70, 131, 180, 0.555); }\n  .dropdown-item:hover {\n  background-color: #4683b4;\n  cursor: pointer; }\n  .input-group {\n  margin-top: 0.5em; }\n  .input-group-addon {\n    background-color: #4683b4;\n    width: 3em;\n    text-align: center;\n    padding-top: 7px;\n    color: white;\n    font-size: 18px; }\n  ul {\n  list-style-type: none; }\n  .card-header {\n  background-color: rgba(70, 131, 180, 0.555);\n  width: 100%; }\n  .card {\n  border-color: rgba(70, 131, 180, 0.555);\n  display: block;\n  width: 100%; }\n  #bordaCard {\n  border-bottom: none; }\n  @media screen and (max-width: 765px) {\n  .teste {\n    text-align: left; } }\n  @media screen and (min-width: 765px) {\n  .teste {\n    text-align: right;\n    padding-top: 1em; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/componentes/tres-vertices/tres-vertices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TresVerticesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TresVerticesComponent = /** @class */ (function () {
    function TresVerticesComponent(fb) {
        this.fb = fb;
        this.formModel = this.fb.group({
            cordAX: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            cordAY: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            cordBX: [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            cordBY: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            cordCX: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            cordCY: [4, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            tipoLados: [''],
            tipoAngulos: [''],
            base: [0],
            altura: [0],
            ladoValor: [0],
            ladoLetra: [''],
            alturaVerticeA: [''],
            alturaVerticeB: [''],
            alturaVerticeC: [''],
            propriedade: [''],
            propriedadeDesenho: [''],
            tipoLadosIsosceles: [''],
        });
        this.distanciaCamera = 5;
        this.geom = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this.equacao = '2 \\times 2';
        this.intersected = false;
        this.stop = false;
    }
    TresVerticesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.container = this.elementRef.nativeElement;
        console.log(this.container);
        this.init();
        this.formModel.valueChanges.subscribe(function (value) {
            _this.animate();
        });
    };
    TresVerticesComponent.prototype.ngOnDestroy = function () {
        this.stop = true;
    };
    TresVerticesComponent.prototype.init = function () {
        if (window.innerWidth > 1200) {
            this.screen = {
                width: window.innerWidth / 2.5,
                height: window.innerWidth / 2.5
            };
        }
        else if (window.innerWidth > 769) {
            this.screen = {
                width: window.innerWidth / 1.5,
                height: window.innerWidth / 1.5
            };
        }
        else {
            this.screen = {
                width: window.innerWidth * 0.9,
                height: window.innerWidth * 0.9
            };
        }
        var view = {
            angle: 90,
            aspect: this.screen.width / this.screen.height,
            near: 0.1,
            far: 1000
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xffffff); // Cor de fundo canvas
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](view.angle, view.aspect, view.near, view.far);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        this.scene.add(this.camera);
        this.camera.position.set(0, 0, this.distanciaCamera);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.container.appendChild(this.renderer.domElement);
        this.letraA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.letraB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.letraC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelLadoC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.labelAltura = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.a = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.b = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.c = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        this.acharPontos();
        this.calcularDistanciaPontos();
        this.criarBaseAltura();
        this.criarTriangulo();
        this.scene.add(this.triangulo);
        this.adicionarLinhasTriangulo();
        this.needScaleUpdate = true;
        this.formModel.get('propriedadeDesenho').setValue('BaseC');
        this.render();
    };
    TresVerticesComponent.prototype.render = function () {
        var self = this;
        (function render() {
            if (!self.stop) {
                requestAnimationFrame(render);
                self.renderer.render(self.scene, self.camera);
                self.animate();
            }
        }());
    };
    TresVerticesComponent.prototype.animate = function () {
        // if (this.isTriangle()) {
        this.acharPontos();
        this.calcularDistanciaPontos();
        this.atualizarBaseAltura();
        this.moverCameraCentroTriangulo();
        this.desabilitardestaque();
        this.calcularAngulos();
        this.calcularPerimetro();
        this.calcularArea();
        this.tipoTriangulos();
        this.calcularAlturaVertices();
        this.destaque();
        this.atualizarPontos();
        this.adicionarTexto('A', this.letraA, this.scene, this.distanciaCamera);
        this.adicionarTexto('B', this.letraB, this.scene, this.distanciaCamera);
        this.adicionarTexto('C', this.letraC, this.scene, this.distanciaCamera);
        this.adicionarTexto('a', this.labelLadoA, this.scene, this.distanciaCamera);
        this.adicionarTexto('b', this.labelLadoB, this.scene, this.distanciaCamera);
        this.adicionarTexto('c', this.labelLadoC, this.scene, this.distanciaCamera);
        this.adicionarTexto('h', this.labelAltura, this.scene, this.distanciaCamera);
        this.atualizarLabelVertices();
        this.atualizarLabelLados();
        this.atualizarLabelAltura();
        this.mostrarResultadoArea();
        this.mostrarResultadoBaseAltura();
        this.mostrarResultadoMedidaLados();
        this.mostrarResultadoPerimetro();
        // } else {
        //   console.log('Não é um triângulo');
        // }
    };
    // public isTriangle() {
    //   let a: number = this.formModel.get('anguloVerticeA').value * 1;
    //   let b: number = this.formModel.get('anguloVerticeB').value * 1;
    //   if (a+b<180) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    TresVerticesComponent.prototype.criarPonto = function (x, y) {
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["CircleGeometry"](this.distanciaCamera / 50, 10);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x000000 });
        var circle = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        circle.position.x = x;
        circle.position.y = y;
        circle.position.z = 0.1;
        return circle;
    };
    TresVerticesComponent.prototype.criarTriangulo = function () {
        this.geom = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        var v1 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY, 0);
        var v2 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY, 0);
        var v3 = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY, 0);
        var triangle = new __WEBPACK_IMPORTED_MODULE_1_three__["Triangle"](v1, v2, v3);
        this.geom.vertices.push(triangle.a);
        this.geom.vertices.push(triangle.b);
        this.geom.vertices.push(triangle.c);
        this.geom.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2));
        this.geom.verticesNeedUpdate = true;
        var mat = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x90EE90, transparent: true, opacity: 0.5, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this.triangulo = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geom, mat);
        this.geom.verticesNeedUpdate = true;
        this.triangulo.name = 'triangulo';
    };
    TresVerticesComponent.prototype.acharPontos = function () {
        this.cordAX = this.formModel.get('cordAX').value * 1;
        this.cordAY = this.formModel.get('cordAY').value * 1;
        this.cordBX = this.formModel.get('cordBX').value * 1;
        this.cordBY = this.formModel.get('cordBY').value * 1;
        this.cordCX = this.formModel.get('cordCX').value * 1;
        this.cordCY = this.formModel.get('cordCY').value * 1;
    };
    TresVerticesComponent.prototype.atualizarPontos = function () {
        if (this.needScaleUpdate) {
            this.scene.remove(this.a);
            this.scene.remove(this.b);
            this.scene.remove(this.c);
            this.a.geometry.dispose();
            this.b.geometry.dispose();
            this.c.geometry.dispose();
            this.a = this.criarPonto(this.cordAX, this.cordAY);
            this.a.name = "verticeA";
            this.b = this.criarPonto(this.cordBX, this.cordBY);
            this.b.name = "verticeB";
            this.c = this.criarPonto(this.cordCX, this.cordCY);
            this.c.name = "verticeC";
            this.scene.add(this.a);
            this.scene.add(this.b);
            this.scene.add(this.c);
            this.needScaleUpdate = false;
        }
        this.a.position.x = this.cordAX;
        this.a.position.y = this.cordAY;
        this.b.position.x = this.cordBX;
        this.b.position.y = this.cordBY;
        this.c.position.x = this.cordCX;
        this.c.position.y = this.cordCY;
        // Atualiza Triangulo
        this.geom.verticesNeedUpdate = true;
        this.geom.vertices[0].set(this.a.position.x, this.a.position.y, 0);
        this.geom.vertices[1].set(this.b.position.x, this.b.position.y, 0);
        this.geom.vertices[2].set(this.c.position.x, this.c.position.y, 0);
    };
    TresVerticesComponent.prototype.moverCameraCentroTriangulo = function () {
        var ax = this.cordAX;
        var ay = this.cordAY;
        var bx = this.cordBX;
        var by = this.cordBY;
        var cx = this.cordCX;
        var cy = this.cordCY;
        var e = Math.max(Math.abs(ax - bx), Math.abs(ax - cx), Math.abs(bx - cx), Math.abs(ay - cy), Math.abs(ay - by), Math.abs(by - cy));
        if ((!this.intersected) && ((this.distanciaCamera > ((e / 1.25) * 1.5)) ||
            ((this.camera.position.x + this.distanciaCamera) < this.cordAX) ||
            ((this.camera.position.x + this.distanciaCamera) < this.cordBX) ||
            ((this.camera.position.x + this.distanciaCamera) < this.cordCX) ||
            ((this.camera.position.x - this.distanciaCamera) > this.cordAX) ||
            ((this.camera.position.x - this.distanciaCamera) > this.cordBX) ||
            ((this.camera.position.x - this.distanciaCamera) > this.cordCX) ||
            ((this.camera.position.y + this.distanciaCamera) < this.cordAY) ||
            ((this.camera.position.y + this.distanciaCamera) < this.cordBY) ||
            ((this.camera.position.y + this.distanciaCamera) < this.cordCY) ||
            ((this.camera.position.y - this.distanciaCamera) > this.cordAY) ||
            ((this.camera.position.y - this.distanciaCamera) > this.cordBY) ||
            ((this.camera.position.y - this.distanciaCamera) > this.cordCY))) {
            // E Escala
            console.log("ScaleUpdate!!\n");
            this.needScaleUpdate = true;
            this.camera.position.z = (e * 1.25) / 1.5;
            this.distanciaCamera = this.camera.position.z;
            // Centro triangulo
            var m = this.cordBX * 1;
            var f = this.cordCX;
            this.camera.position.x = (this.cordAX + this.cordBX + this.cordCX) / 3;
            this.camera.position.y = (this.cordAY + this.cordBY + this.cordCY) / 3;
        }
    };
    TresVerticesComponent.prototype.adicionarLinhasTriangulo = function () {
        // //destaque
        // AB
        var spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY)]);
        var materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFF0000 });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueAB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueAB);
        // BC
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00FF00 });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueBC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueBC);
        // CA
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x0000FF });
        this.geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, 0.05, 7, false);
        this.linhadestaqueCA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this.geometriaLinha, materialLinhadestaque);
        this.scene.add(this.linhadestaqueCA);
    };
    TresVerticesComponent.prototype.atualizarLinhasTriangulo = function (opacidadeAB, opacidadeBC, opacidadeCA) {
        var largura = this.distanciaCamera / 100;
        this.scene.remove(this.linhadestaqueAB);
        this.linhadestaqueAB.geometry.dispose();
        var spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY)]);
        var materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFF0000, opacity: opacidadeAB });
        materialLinhadestaque.transparent = true;
        var geometriaLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 3, false);
        this.linhadestaqueAB = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha, materialLinhadestaque);
        this.linhadestaqueAB.name = 'linhadestaqueAB';
        this.scene.add(this.linhadestaqueAB);
        this.scene.remove(this.linhadestaqueBC);
        this.linhadestaqueBC.geometry.dispose();
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordBX, this.cordBY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00FF00, opacity: opacidadeBC });
        materialLinhadestaque.transparent = true;
        var geometriaLinha2 = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 3, false);
        this.linhadestaqueBC = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha2, materialLinhadestaque);
        this.linhadestaqueBC.name = 'linhadestaqueBC';
        this.scene.add(this.linhadestaqueBC);
        this.scene.remove(this.linhadestaqueCA);
        this.linhadestaqueCA.geometry.dispose();
        spline = new __WEBPACK_IMPORTED_MODULE_1_three__["CatmullRomCurve3"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordAX, this.cordAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.cordCX, this.cordCY)]);
        materialLinhadestaque = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x0000FF, opacity: opacidadeCA });
        materialLinhadestaque.transparent = true;
        var geometriaLinha3 = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](spline, 1, largura, 3, false);
        this.linhadestaqueCA = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometriaLinha3, materialLinhadestaque);
        this.linhadestaqueCA.name = 'linhadestaqueCA';
        this.scene.add(this.linhadestaqueCA);
    };
    TresVerticesComponent.prototype.calcularDistanciaPontos = function () {
        var ax = this.cordAX;
        var ay = this.cordAY;
        var bx = this.cordBX;
        var by = this.cordBY;
        var cx = this.cordCX;
        var cy = this.cordCY;
        this.ladoC = (Math.sqrt(Math.pow((ay - by), 2) + Math.pow((bx - ax), 2)));
        this.ladoA = (Math.sqrt(Math.pow((cy - by), 2) + Math.pow((cx - bx), 2)));
        this.ladoB = (Math.sqrt(Math.pow((ay - cy), 2) + Math.pow((ax - cx), 2)));
        this.ladoATemplate = this.ladoA.toFixed(2);
        this.ladoBTemplate = this.ladoB.toFixed(2);
        this.ladoCTemplate = this.ladoC.toFixed(2);
    };
    TresVerticesComponent.prototype.calcularAngulos = function () {
        var DAB = this.ladoA;
        var DBC = this.ladoB;
        var DCA = this.ladoC;
        this.anguloVerticeB = (Math.acos((Math.pow(DAB, 2) + Math.pow(DCA, 2) - Math.pow(DBC, 2)) /
            (2 * DAB * DCA)) * 180 / Math.PI).toFixed(2);
        this.anguloVerticeC = (Math.acos((Math.pow(DAB, 2) + Math.pow(DBC, 2) - Math.pow(DCA, 2)) /
            (2 * DAB * DBC)) * 180 / Math.PI).toFixed(2);
        this.anguloVerticeA = (Math.acos((Math.pow(DBC, 2) + Math.pow(DCA, 2) - Math.pow(DAB, 2)) /
            (2 * DBC * DCA)) * 180 / Math.PI).toFixed(2);
        this.anguloVerticeA = this.anguloVerticeA * 1;
        this.anguloVerticeB = this.anguloVerticeB * 1;
        this.anguloVerticeC = this.anguloVerticeC * 1;
    };
    TresVerticesComponent.prototype.criarBaseAltura = function () {
        var distancia = this.camera.position.z * 2;
        var curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, 0),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, 0)]);
        this.retaBaseB = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        var materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseA = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseB, materialLinha);
        this.scene.add(this.linhaRetaBaseA);
        var AX = this.cordAX;
        var AY = this.cordAY;
        var BX = this.cordBX;
        var BY = this.cordBY;
        var CX = this.cordCX;
        var CY = this.cordCY;
        var mA = (CY - AY) / (CX - AX);
        var mB = (CY - BY) / (CX - BX);
        this.pontoRetaAAY = (mA * (this.distanciaCamera * 2 - AX)) + AY;
        this.pontoRetaABY = (mA * (-this.distanciaCamera * 2 - AX)) + AY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.camera.position.z * 2, this.pontoRetaAAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-this.camera.position.z * 2, this.pontoRetaABY)]);
        this.retaBaseA = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseB = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseA, materialLinha);
        this.scene.add(this.linhaRetaBaseB);
        this.pontoRetaCAY = (mB * (this.distanciaCamera * 2 - BX)) + BY;
        this.pontoRetaCBY = (mB * (-this.distanciaCamera * 2 - BX)) + BY;
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.camera.position.z * 2, this.pontoRetaCAY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-this.camera.position.z * 2, this.pontoRetaCBY)]);
        this.retaBaseC = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(1));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x555555 });
        this.linhaRetaBaseC = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](this.retaBaseC, materialLinha);
        this.scene.add(this.linhaRetaBaseC);
        var mA2 = (-1 / mA);
        var mB2 = (-1 / mB);
        this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
        this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, CY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, 0)]);
        this.caminhoAlturaC = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaC = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaC, materialLinha);
        this.scene.add(this.linhaAlturaC);
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, BY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
        this.caminhoAlturaA = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaB = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaA, materialLinha);
        this.scene.add(this.linhaAlturaB);
        this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
        this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
        // linha da altura
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, AY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
        this.caminhoAlturaB = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]().setFromPoints(curva.getPoints(30));
        materialLinha = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000CD });
        this.linhaAlturaA = new __WEBPACK_IMPORTED_MODULE_1_three__["LineSegments"](this.caminhoAlturaB, materialLinha);
        this.scene.add(this.linhaAlturaA);
    };
    TresVerticesComponent.prototype.atualizarBaseAltura = function () {
        var AX = this.cordAX;
        var AY = this.cordAY;
        var BX = this.cordBX;
        var BY = this.cordBY;
        var CX = this.cordCX;
        var CY = this.cordCY;
        var distancia = this.camera.position.z + 10;
        var curva;
        var mC = (BY - AY) / (BX - AX);
        var mB = (CY - BY) / (CX - BX);
        var mA = (CY - AY) / (CX - AX);
        var mA2 = (-1 / mA);
        var mB2 = (-1 / mB);
        var mC2 = (-1 / mC);
        if (BX === AX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, -distancia)]);
        }
        else {
            this.pontoRetaBAY = (mC * (distancia - AX)) + AY;
            this.pontoRetaBBY = (mC * (-distancia - AX)) + AY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaBBY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaBAY)]);
        }
        this.retaBaseB.setFromPoints(curva.getPoints(1));
        this.retaBaseB.verticesNeedUpdate = true;
        if (CX === AX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, -distancia)]);
        }
        else {
            this.pontoRetaAAY = (mA * ((distancia) - AX)) + AY;
            this.pontoRetaABY = (mA * ((-distancia) - AX)) + AY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaAAY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaABY)]);
        }
        this.retaBaseA.setFromPoints(curva.getPoints(1));
        this.retaBaseA.verticesNeedUpdate = true;
        if (CX === BX) {
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, distancia),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, -distancia)]);
        }
        else {
            this.pontoRetaCAY = (mB * (distancia - BX)) + BY;
            this.pontoRetaCBY = (mB * (-distancia - BX)) + BY;
            curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](distancia, this.pontoRetaCAY),
                new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](-distancia, this.pontoRetaCBY)]);
        }
        this.retaBaseC.setFromPoints(curva.getPoints(1));
        this.retaBaseC.verticesNeedUpdate = true;
        // linha da altura
        if (BX === AX) {
            this.pontoRetaIntersecCX = AX;
            this.pontoRetaIntersecCY = CY;
        }
        else if (BY === AY) {
            this.pontoRetaIntersecCX = CX;
            this.pontoRetaIntersecCY = AY;
        }
        else {
            this.pontoRetaIntersecCX = ((-mC2 * CX) + CY + (mC * BX) - BY) / (-mC2 + mC);
            this.pontoRetaIntersecCY = ((mC2) * (this.pontoRetaIntersecCX - CX)) + CY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](CX, CY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecCX, this.pontoRetaIntersecCY)]);
        this.caminhoAlturaC.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaC.verticesNeedUpdate = true;
        // linha da altura
        if (CX === AX) {
            this.pontoRetaIntersecAX = AX;
            this.pontoRetaIntersecAY = BY;
        }
        else if (CY === AY) {
            this.pontoRetaIntersecAX = BX;
            this.pontoRetaIntersecAY = AY;
        }
        else {
            this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
            this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](BX, BY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
        this.caminhoAlturaA.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaA.verticesNeedUpdate = true;
        // linha da altura
        if (CX === BX) {
            this.pontoRetaIntersecBX = BX;
            this.pontoRetaIntersecBY = AY;
        }
        else {
            this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
            this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
        }
        curva = new __WEBPACK_IMPORTED_MODULE_1_three__["SplineCurve"]([new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](AX, AY),
            new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
        this.caminhoAlturaB.setFromPoints(curva.getPoints(30));
        this.caminhoAlturaB.verticesNeedUpdate = true;
    };
    TresVerticesComponent.prototype.calcularPerimetro = function () {
        this.perimetro = this.ladoA + this.ladoB + this.ladoC;
    };
    TresVerticesComponent.prototype.calcularArea = function () {
        var ax = this.cordAX;
        var ay = this.cordAY;
        var bx = this.cordBX;
        var by = this.cordBY;
        var cx = this.cordCX;
        var cy = this.cordCY;
        this.area = (Math.abs((ax * by) + (ay * cx) + (bx * cy) - (by * cx) - (ax * cy) - (ay * bx)) * 0.5);
        this.areaTemplate = this.area.toFixed(2);
    };
    TresVerticesComponent.prototype.tipoTriangulos = function () {
        if (this.anguloVerticeA === 90 || this.anguloVerticeB === 90 || this.anguloVerticeC === 90) {
            this.formModel.get('tipoAngulos').setValue('Retângulo');
        }
        else if (this.anguloVerticeA > 90 || this.anguloVerticeB > 90 || this.anguloVerticeC > 90) {
            this.formModel.get('tipoAngulos').setValue('Obtusângulo');
        }
        else {
            this.formModel.get('tipoAngulos').setValue('Acutângulo');
        }
        var AB = this.ladoC;
        var BC = this.ladoA;
        var CA = this.ladoB;
        if (AB === BC && BC === CA) {
            this.formModel.get('tipoLados').setValue('Equilátero');
        }
        else if (AB !== BC && BC !== CA && CA !== AB) {
            this.formModel.get('tipoLados').setValue('Escaleno');
        }
        else {
            this.formModel.get('tipoLados').setValue('Isósceles');
            if (this.ladoATemplate === this.ladoBTemplate) {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado a e o lado b possuem as medidas iguais.');
            }
            else if (this.ladoBTemplate === this.ladoCTemplate) {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado b e o lado c possuem as medidas iguais.');
            }
            else {
                this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado c e o lado a possuem as medidas iguais.');
            }
        }
    };
    TresVerticesComponent.prototype.calcularAlturaVertices = function () {
        this.formModel.get('alturaVerticeA').setValue((this.area * 2) / this.ladoA);
        this.formModel.get('alturaVerticeB').setValue((this.area * 2) / this.ladoB);
        this.formModel.get('alturaVerticeC').setValue((this.area * 2) / this.ladoC);
    };
    TresVerticesComponent.prototype.desabilitardestaque = function () {
        this.atualizarLinhasTriangulo(0.2, 0.2, 0.2);
        this.linhaRetaBaseA.visible = false;
        this.linhaRetaBaseB.visible = false;
        this.linhaRetaBaseC.visible = false;
        this.linhaAlturaA.visible = false;
        this.linhaAlturaB.visible = false;
        this.linhaAlturaC.visible = false;
        this.triangulo.visible = false;
        this.labelAltura.visible = false;
    };
    TresVerticesComponent.prototype.destaque = function () {
        var ep = this.formModel.get('propriedade').value; // Escolha Principal
        var es = this.formModel.get('propriedadeDesenho').value; // Escolha Secundaria
        if (ep === 'area') {
            this.triangulo.visible = true;
            this.labelAltura.visible = true;
            if (es === 'BaseC') {
                this.linhaAlturaC.visible = true;
                this.linhaRetaBaseA.visible = true;
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.linhaAlturaB.visible = true;
                this.linhaRetaBaseB.visible = true;
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.linhaAlturaA.visible = true;
                this.linhaRetaBaseC.visible = true;
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'baseAltura') {
            this.labelAltura.visible = true;
            if (es === 'BaseC') {
                this.linhaAlturaC.visible = true;
                this.linhaRetaBaseA.visible = true;
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.linhaAlturaB.visible = true;
                this.linhaRetaBaseB.visible = true;
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.linhaAlturaA.visible = true;
                this.linhaRetaBaseC.visible = true;
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'medidaLados') {
            if (es === 'BaseC') {
                this.atualizarLinhasTriangulo(1, 0.2, 0.2);
            }
            else if (es === 'BaseB') {
                this.atualizarLinhasTriangulo(0.2, 0.2, 1);
            }
            else {
                this.atualizarLinhasTriangulo(0.2, 1, 0.2);
            }
        }
        else if (ep === 'perimetro') {
            this.atualizarLinhasTriangulo(1, 1, 1);
        }
        else if (ep === 'tipo') {
            this.atualizarLinhasTriangulo(1, 1, 1);
        }
    };
    TresVerticesComponent.prototype.adicionarTexto = function (valor, geom, scene, size) {
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000 });
        var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["FontLoader"]();
        loader.load('https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["TextGeometry"](valor, {
                font: font,
                size: size / 15,
                height: 0.0001,
                curveSegments: 12,
            });
            geom.geometry.dispose();
            geom.geometry = geometry;
            geom.material = material;
            scene.add(geom);
        });
    };
    TresVerticesComponent.prototype.atualizarLabelVertices = function () {
        var x, y, mx, my;
        var ed = 20; // divisor
        // A
        mx = (this.cordBX + this.cordCX) / 2;
        my = (this.cordBY + this.cordCY) / 2;
        if (this.cordAX > mx) {
            x = this.cordAX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordAX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordAY > my) {
            y = this.cordAY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordAY - this.distanciaCamera / (ed / 2);
        }
        this.letraA.position.x = x;
        this.letraA.position.y = y;
        // B
        mx = (this.cordAX + this.cordCX) / 2;
        my = (this.cordAY + this.cordCY) / 2;
        if (this.cordBX > mx) {
            x = this.cordBX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordBX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordBY > my) {
            y = this.cordBY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordBY - this.distanciaCamera / (ed / 2);
        }
        this.letraB.position.x = x;
        this.letraB.position.y = y;
        // C
        mx = (this.cordBX + this.cordAX) / 2;
        my = (this.cordBY + this.cordAY) / 2;
        if (this.cordCX > mx) {
            x = this.cordCX + this.distanciaCamera / (ed / 2);
        }
        else {
            x = this.cordCX - this.distanciaCamera / (ed / 2);
        }
        if (this.cordCY > my) {
            y = this.cordCY + this.distanciaCamera / (ed / 2);
        }
        else {
            y = this.cordCY - this.distanciaCamera / (ed / 2);
        }
        this.letraC.position.x = x;
        this.letraC.position.y = y;
    };
    TresVerticesComponent.prototype.atualizarLabelLados = function () {
        var centrox = (this.cordAX + this.cordBX + this.cordCX) / 3;
        var centroy = (this.cordAY + this.cordBY + this.cordCY) / 3;
        var x, y, mx, my;
        var ed = 20; // divisor
        // A
        mx = (this.cordBX + this.cordCX) / 2;
        my = (this.cordBY + this.cordCY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoA.position.x = x;
        this.labelLadoA.position.y = y;
        // B
        mx = (this.cordAX + this.cordCX) / 2;
        my = (this.cordAY + this.cordCY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoB.position.x = x;
        this.labelLadoB.position.y = y;
        // C
        mx = (this.cordBX + this.cordAX) / 2;
        my = (this.cordBY + this.cordAY) / 2;
        if (mx > centrox) {
            x = mx + this.distanciaCamera / (ed / 2);
        }
        else {
            x = mx - this.distanciaCamera / (ed / 2);
        }
        if (my > centroy) {
            y = my + this.distanciaCamera / (ed / 2);
        }
        else {
            y = my - this.distanciaCamera / (ed / 2);
        }
        this.labelLadoC.position.x = x;
        this.labelLadoC.position.y = y;
    };
    TresVerticesComponent.prototype.atualizarLabelAltura = function () {
        var es = this.formModel.get('propriedadeDesenho').value; // Escolha Secundaria
        if (es === 'BaseC') {
            this.labelAltura.position.x = (this.cordCX + this.pontoRetaIntersecCX) / 2;
            this.labelAltura.position.y = (this.cordCY + this.pontoRetaIntersecCY) / 2;
        }
        else if (es === 'BaseB') {
            this.labelAltura.position.x = (this.cordBX + this.pontoRetaIntersecAX) / 2;
            this.labelAltura.position.y = (this.cordBY + this.pontoRetaIntersecAY) / 2;
        }
        else {
            this.labelAltura.position.x = (this.cordAX + this.pontoRetaIntersecBX) / 2;
            this.labelAltura.position.y = (this.cordAY + this.pontoRetaIntersecBY) / 2;
        }
    };
    TresVerticesComponent.prototype.onMouseClick = function (event) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        var xDoMouse = event.offsetX;
        var yDoMouse = event.offsetY;
        xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
        yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
        var raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        raycaster.setFromCamera(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](xDoMouse, yDoMouse), this.camera);
        var intersects = raycaster.intersectObjects([this.a, this.b, this.c, this.linhadestaqueAB, this.linhadestaqueBC, this.linhadestaqueCA]);
        if (intersects.length > 0) {
            var intersectedObject = intersects[0].object;
            if (intersectedObject.name === 'linhadestaqueAB') {
                this.formModel.get('propriedadeDesenho').setValue('BaseC');
            }
            else if (intersectedObject.name === 'linhadestaqueBC') {
                this.formModel.get('propriedadeDesenho').setValue('BaseA');
            }
            else if (intersectedObject.name === 'linhadestaqueCA') {
                this.formModel.get('propriedadeDesenho').setValue('BaseB');
            }
        }
    };
    TresVerticesComponent.prototype.onMouseMove = function (event) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        if (event.buttons > 0) {
            var xDoMouse = event.offsetX;
            var yDoMouse = event.offsetY;
            xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
            yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
            var raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
            raycaster.setFromCamera(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](xDoMouse, yDoMouse), this.camera);
            var intersects = raycaster.intersectObjects([this.a, this.b, this.c]);
            if (intersects.length > 0) {
                this.intersected = true;
                this.intersectedObject = intersects[0].object;
            }
            if (this.intersected) {
                if (this.intersectedObject.name === "verticeA") {
                    this.formModel.get('cordAX').setValue(((xDoMouse * this.distanciaCamera) + this.camera.position.x).toFixed(1));
                    this.formModel.get('cordAY').setValue(((yDoMouse * this.distanciaCamera) + this.camera.position.y).toFixed(1));
                }
                else {
                    if (this.intersectedObject.name === "verticeB") {
                        this.formModel.get('cordBX').setValue(((xDoMouse * this.distanciaCamera) + this.camera.position.x).toFixed(1));
                        this.formModel.get('cordBY').setValue(((yDoMouse * this.distanciaCamera) + this.camera.position.y).toFixed(1));
                    }
                    else {
                        if (this.intersectedObject.name === "verticeC") {
                            this.formModel.get('cordCX').setValue(((xDoMouse * this.distanciaCamera) + this.camera.position.x).toFixed(1));
                            this.formModel.get('cordCY').setValue(((yDoMouse * this.distanciaCamera) + this.camera.position.y).toFixed(1));
                        }
                    }
                }
            }
        }
        else {
            this.intersected = false;
        }
    };
    TresVerticesComponent.prototype.onSetArea = function () {
        this.formModel.get('propriedade').setValue('area');
    };
    TresVerticesComponent.prototype.onSetBaseAltura = function () {
        this.formModel.get('propriedade').setValue('baseAltura');
    };
    TresVerticesComponent.prototype.onSetMedidaLados = function () {
        this.formModel.get('propriedade').setValue('medidaLados');
    };
    TresVerticesComponent.prototype.onSetPerimetro = function () {
        this.formModel.get('propriedade').setValue('perimetro');
    };
    TresVerticesComponent.prototype.onSetTipoLados = function () {
        this.formModel.get('propriedade').setValue('tipoLados');
    };
    TresVerticesComponent.prototype.onSetTipoAngulos = function () {
        this.formModel.get('propriedade').setValue('tipoAngulos');
    };
    TresVerticesComponent.prototype.onSetMedidaAngulos = function () {
        this.formModel.get('propriedade').setValue('medidaAngulos');
    };
    TresVerticesComponent.prototype.mostrarResultadoArea = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        var base;
        var altura;
        var letraBase;
        if (selecionado === 'BaseA') {
            base = this.ladoATemplate;
            altura = (this.formModel.get('alturaVerticeA').value).toFixed(2);
            letraBase = 'a';
        }
        else if (selecionado === 'BaseB') {
            base = this.ladoBTemplate;
            altura = (this.formModel.get('alturaVerticeB').value).toFixed(2);
            letraBase = 'b';
        }
        else if (selecionado === 'BaseC') {
            base = this.ladoCTemplate;
            altura = (this.formModel.get('alturaVerticeC').value).toFixed(2);
            letraBase = 'c';
        }
        this.equacaoArea = 'A = \\frac{' + letraBase + '\\times h }{2}';
        this.equacaoArea2 = 'A = \\frac{' + base
            + '\\times' + altura + '}{2}';
        this.equacaoArea3 = 'A = ' + this.areaTemplate + 'u.a.';
    };
    TresVerticesComponent.prototype.mostrarResultadoBaseAltura = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        if (selecionado === 'BaseA') {
            this.formModel.get('base').setValue(this.ladoATemplate);
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeA').value).toFixed(2));
        }
        else if (selecionado === 'BaseB') {
            this.formModel.get('base').setValue(this.ladoBTemplate);
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeB').value).toFixed(2));
        }
        else if (selecionado === 'BaseC') {
            this.formModel.get('base').setValue(this.ladoCTemplate);
            this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeC').value).toFixed(2));
        }
    };
    TresVerticesComponent.prototype.mostrarResultadoMedidaLados = function () {
        var selecionado = this.formModel.get('propriedadeDesenho').value;
        if (selecionado === 'BaseA') {
            this.formModel.get('ladoValor').setValue(this.ladoATemplate);
            this.formModel.get('ladoLetra').setValue('a');
        }
        else if (selecionado === 'BaseB') {
            this.formModel.get('ladoValor').setValue(this.ladoBTemplate);
            this.formModel.get('ladoLetra').setValue('b');
        }
        else if (selecionado === 'BaseC') {
            this.formModel.get('ladoValor').setValue(this.ladoCTemplate);
            this.formModel.get('ladoLetra').setValue('c');
        }
    };
    TresVerticesComponent.prototype.mostrarResultadoPerimetro = function () {
        this.equacaoPerimetro = 'P = a + b + c';
        this.equacaoPerimetro2 = 'P =' + this.ladoATemplate +
            '+' + this.ladoBTemplate +
            '+' + this.ladoCTemplate;
        this.equacaoPerimetro3 = 'P =' + this.perimetro.toFixed(2) + ' u.m.';
        this.perimetroTemplate = this.perimetro.toFixed(2);
    };
    TresVerticesComponent.prototype.onWindowResize = function (event) {
        if (event.target.innerWidth > 1200) {
            this.screen.width = event.target.innerWidth / 2.5;
            this.screen.height = event.target.innerWidth / 2.5;
        }
        else if (event.target.innerWidth > 769) {
            this.screen.width = event.target.innerWidth / 1.5;
            this.screen.height = event.target.innerWidth / 1.5;
        }
        else {
            this.screen.width = event.target.innerWidth * 0.9;
            this.screen.height = event.target.innerWidth * 0.9;
        }
        this.renderer.setSize(this.screen.width, this.screen.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TresVerticesComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touch', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TresVerticesComponent.prototype, "onMouseClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TresVerticesComponent.prototype, "onMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TresVerticesComponent.prototype, "onWindowResize", null);
    TresVerticesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tres-vertices',
            template: __webpack_require__("./src/app/views/geometria/triangulo/componentes/tres-vertices/tres-vertices.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/triangulo/componentes/tres-vertices/tres-vertices.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], TresVerticesComponent);
    return TresVerticesComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/triangulo.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\nbody,html,.row-offcanvas {\r\n    height:100%;\r\n  }\r\n  \r\n  body {\r\n    padding-top: 50px;\r\n  }\r\n  \r\n  #sidebar {\r\n    width: inherit;\r\n    min-width: 220px;\r\n    max-width: 220px;\r\n    background-color:#f5f5f5;\r\n    float: left;\r\n    height:100%;\r\n    position:relative;\r\n    overflow-y:auto;\r\n    overflow-x:hidden;\r\n  }\r\n  \r\n  #main {\r\n    height:100%;\r\n    overflow:auto;\r\n  }\r\n  \r\n  .col-main {\r\n    padding-left: 0px !important;\r\n    margin-left: 0px !important;\r\n  }\r\n  \r\n  /*\r\n   * off Canvas sidebar\r\n   * --------------------------------------------------\r\n   */\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .row-offcanvas {\r\n      position: relative;\r\n      -webkit-transition: all 0.25s ease-out;\r\n      transition: all 0.25s ease-out;\r\n      width:calc(100% + 220px);\r\n    }\r\n      \r\n    .row-offcanvas-left\r\n    {\r\n      left: -220px;\r\n    }\r\n  \r\n    .row-offcanvas-left.active {\r\n      left: 0;\r\n    }\r\n  \r\n    .sidebar-offcanvas {\r\n      position: absolute;\r\n      top: 0;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/triangulo.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css\">\r\n<section class=\"ifmath-view\">\r\n  <div class=\"row-offcanvas row-offcanvas-left\">\r\n    <div id=\"sidebar\" class=\"sidebar-offcanvas\">\r\n      <div class=\"col-lg-12\">\r\n        <sidebar-triangulo></sidebar-triangulo>\r\n      </div>\r\n    </div>\r\n    <div id=\"main\">\r\n      <div class=\"col-lg-12\">\r\n        <p class=\"d-block d-sm-none\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-xs\" data-toggle=\"offcanvas\">\r\n            <i class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </p>\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"push\"></div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/triangulo/triangulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrianguloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrianguloComponent = /** @class */ (function () {
    function TrianguloComponent() {
    }
    TrianguloComponent.prototype.ngOnInit = function () {
    };
    TrianguloComponent.prototype.jQueryConfiguracaoSlideBar = function () {
        $(document).ready(function () {
            $('[data-toggle="offcanvas"]').click(function () {
                $('.row-offcanvas').toggleClass('active');
            });
        });
    };
    TrianguloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/geometria/triangulo/triangulo.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/triangulo/triangulo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrianguloComponent);
    return TrianguloComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/triangulo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrianguloModule", function() { return TrianguloModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_katex__ = __webpack_require__("./node_modules/ng-katex/ng-katex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__triangulo_routing__ = __webpack_require__("./src/app/views/geometria/triangulo/triangulo.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__triangulo_component__ = __webpack_require__("./src/app/views/geometria/triangulo/triangulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_sidebar_triangulo_sidebar_triangulo_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/sidebar-triangulo/sidebar-triangulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_tres_vertices_tres_vertices_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/tres-vertices/tres-vertices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_tres_lados_tres_lados_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/tres-lados/tres-lados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_angulo_compreendido_angulo_compreendido_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/angulo-compreendido/angulo-compreendido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_lado_compreendido_lado_compreendido_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/lado-compreendido/lado-compreendido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_teorema_pitagoras_teorema_pitagoras_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/teorema-pitagoras/teorema-pitagoras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_angulos_internos_angulos_internos_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/angulos-internos/angulos-internos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_definicao_triangulo_definicao_triangulo_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/definicao-triangulo/definicao-triangulo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var TrianguloModule = /** @class */ (function () {
    function TrianguloModule() {
    }
    TrianguloModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__triangulo_routing__["a" /* TrianguloRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_katex__["a" /* KatexModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__triangulo_component__["a" /* TrianguloComponent */],
                __WEBPACK_IMPORTED_MODULE_9__componentes_sidebar_triangulo_sidebar_triangulo_component__["a" /* SidebarTrianguloComponent */],
                __WEBPACK_IMPORTED_MODULE_10__componentes_tres_vertices_tres_vertices_component__["a" /* TresVerticesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__componentes_tres_lados_tres_lados_component__["a" /* TresLadosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__componentes_angulo_compreendido_angulo_compreendido_component__["a" /* AnguloCompreendidoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__componentes_lado_compreendido_lado_compreendido_component__["a" /* LadoCompreendidoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__componentes_teorema_pitagoras_teorema_pitagoras_component__["a" /* TeoremaPitagorasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__componentes_angulos_internos_angulos_internos_component__["a" /* AngulosInternosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__componentes_definicao_triangulo_definicao_triangulo_component__["a" /* DefinicaoTrianguloComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__triangulo_component__["a" /* TrianguloComponent */]
            ],
        })
    ], TrianguloModule);
    return TrianguloModule;
}());



/***/ }),

/***/ "./src/app/views/geometria/triangulo/triangulo.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrianguloRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__triangulo_component__ = __webpack_require__("./src/app/views/geometria/triangulo/triangulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_tres_vertices_tres_vertices_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/tres-vertices/tres-vertices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_tres_lados_tres_lados_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/tres-lados/tres-lados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_lado_compreendido_lado_compreendido_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/lado-compreendido/lado-compreendido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_angulos_internos_angulos_internos_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/angulos-internos/angulos-internos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_teorema_pitagoras_teorema_pitagoras_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/teorema-pitagoras/teorema-pitagoras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_angulo_compreendido_angulo_compreendido_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/angulo-compreendido/angulo-compreendido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_definicao_triangulo_definicao_triangulo_component__ = __webpack_require__("./src/app/views/geometria/triangulo/componentes/definicao-triangulo/definicao-triangulo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var trianguloRotas = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__triangulo_component__["a" /* TrianguloComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_9__componentes_definicao_triangulo_definicao_triangulo_component__["a" /* DefinicaoTrianguloComponent */] },
            { path: 'definicao', component: __WEBPACK_IMPORTED_MODULE_9__componentes_definicao_triangulo_definicao_triangulo_component__["a" /* DefinicaoTrianguloComponent */] },
            { path: 'tres_vertices', component: __WEBPACK_IMPORTED_MODULE_3__componentes_tres_vertices_tres_vertices_component__["a" /* TresVerticesComponent */] },
            { path: 'tres_lados', component: __WEBPACK_IMPORTED_MODULE_4__componentes_tres_lados_tres_lados_component__["a" /* TresLadosComponent */] },
            { path: 'angulo_compreendido', component: __WEBPACK_IMPORTED_MODULE_8__componentes_angulo_compreendido_angulo_compreendido_component__["a" /* AnguloCompreendidoComponent */] },
            { path: 'lado_compreendido', component: __WEBPACK_IMPORTED_MODULE_5__componentes_lado_compreendido_lado_compreendido_component__["a" /* LadoCompreendidoComponent */] },
            { path: 'teorema_pitagoras', component: __WEBPACK_IMPORTED_MODULE_7__componentes_teorema_pitagoras_teorema_pitagoras_component__["a" /* TeoremaPitagorasComponent */] },
            { path: 'angulos_internos', component: __WEBPACK_IMPORTED_MODULE_6__componentes_angulos_internos_angulos_internos_component__["a" /* AngulosInternosComponent */] }
        ]
    },
];
var TrianguloRoutingModule = /** @class */ (function () {
    function TrianguloRoutingModule() {
    }
    TrianguloRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(trianguloRotas)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ]
        })
    ], TrianguloRoutingModule);
    return TrianguloRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=triangulo.module.chunk.js.map