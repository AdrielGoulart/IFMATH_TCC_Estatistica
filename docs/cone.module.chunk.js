webpackJsonp(["cone.module"],{

/***/ "./src/app/views/geometria/cone/components/cn-area-base/cn-area-base.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n    <div class=\" col-12 text-center\">\r\n      <h3 class=\"text-center\">Área da base</h3>\r\n    </div>\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a área referente ao cone que deseja calcular</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <!-- Entradas -->\r\n    <div class=\" mt-4\">\r\n      <p class=\"text-center\">\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\" oninput=\"this.value = Math.abs(this.value)\"\r\n          (ngModelChange)=\"changeRadius()\" max=\"50\" min=\"5\" />\r\n      </p>\r\n\r\n      <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n        O raio deve ser um valor inteiro contido entre <b>5</b> e <b>50</b>.\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      A base de um cone é um círculo de raio <ng-katex equation=\"r.\"></ng-katex>\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\textcolor{black}{A_b = \\pi \\cdot \\textcolor{red}{r} \\textcolor{black}{^2}}\">\r\n      </ng-katex>\r\n    </p>\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cone/cn-areas/area-base-cone.svg\">\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <!-- Exemplo -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\"\r\n              aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n              Cálculo = <ng-katex class=\"explicacao\" equation=\"{{ radius * radius }}  \\pi \\ u.a. \">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapsePrincipal\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapsePrincipal\" class=\"collapse\" aria-labelledby=\"headingPrincipal\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A_b = \\pi \\cdot \\textcolor{red}{r} \\textcolor{black}{^2}}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Fórmula para o cálculo da base.\r\n                    <ul>\r\n                      <li>\r\n                        <ng-katex equation=\"\\color{red}{ r }\"></ng-katex> = raio\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A_b = \\pi \\cdot \\color{red}{ {{ radius }} } \\color{black}{ ^2 } }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substitui-se o valor de <ng-katex equation=\"r\"></ng-katex>\r\n                    (<ng-katex equation=\"\\color{red}{ {{ radius }} }\"></ng-katex>) na fórmula e\r\n                    elevamos ao quadrado.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A_b = \\pi \\cdot \\color{red}{ {{ radius * radius }} } }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Multiplica-se o resultado do\r\n                    <ng-katex equation=\"\\color{black}{ r^2 }\"></ng-katex>\r\n                    (<ng-katex equation=\"\\color{red}{ {{ radius * radius }} }\"></ng-katex>)\r\n                    pelo valor de <ng-katex equation=\"\\pi.\"></ng-katex>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 4-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A_b = \\color{red}{ {{ radius * radius }} } \\color{black}{ \\pi \\ u.a.} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final em unidades de área (<ng-katex equation=\"u. a.\"></ng-katex>).\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-area-base/cn-area-base.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-area-base/cn-area-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnAreaBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CnAreaBaseComponent = /** @class */ (function () {
    function CnAreaBaseComponent() {
        this.radius = 25;
        this.errorInput = false;
        // Cores
        this.red = 0xcc0000;
        this.blue = 0x4683b4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        // Botoões de navegação
        this.buttons = [
            { title: "Área da base", route: "cn_area_base" },
            { title: "Área lateral", route: "cn_area_lateral" },
            { title: "Área total", route: "cn_area_total" }
        ];
    }
    CnAreaBaseComponent.prototype.makeElements = function () {
        // Cone
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["ConeGeometry"](this.radius, 50, 92);
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blueShadow,
            transparent: true,
            opacity: 0.5
        });
        var cone = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometry, material);
        cone.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 50 / 2, 0));
        // Label do V
        var vLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("V", 2, "this.black");
        vLabel.position.y = 25 + 1;
        // Label do O
        var oLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("O", 2, "this.black");
        oLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 1, 1));
        // Label do A
        var aLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("A", 2, "this.black");
        aLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, 1, Math.sin(Math.PI / 4) * this.radius));
        // Label do r
        var rLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("r", 2, "red");
        rLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((Math.cos(Math.PI / 4) * this.radius) / 2, 1, (Math.sin(Math.PI / 4) * this.radius) / 2));
        rLabel.material.depthTest = false;
        // Label do h
        var hLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("h", 2, "this.black");
        hLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, 25 / 2, 0));
        hLabel.material.depthTest = false;
        // Linha do raio
        var materialRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black });
        var geometryRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryRadius.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, 0, Math.sin(Math.PI / 4) * this.radius));
        var radius = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryRadius, materialRadius);
        radius.name = "reta-raio";
        // Linha da altura
        var materialHeight = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black });
        var geometryHeight = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryHeight.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 25, 0));
        var height = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryHeight, materialHeight);
        height.name = "reta-altura";
        height.material.depthTest = false;
        var baseGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radius, this.radius, -0.01, 92);
        var baseMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blueShadow
        });
        var base = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](baseGeometry, baseMaterial);
        this.geoScene.scene.add(cone, vLabel, oLabel, aLabel, rLabel, radius, base, height, hLabel);
        this.geoScene.render();
    };
    CnAreaBaseComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    CnAreaBaseComponent.prototype.changeRadius = function () {
        if (this.radius > 4 && this.radius < 51) {
            this.alterCone();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CnAreaBaseComponent.prototype.removeElements = function () {
        var _this = this;
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
    };
    CnAreaBaseComponent.prototype.alterCone = function () {
        var _this = this;
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
        // Gera os elementos da cena com os novos valores
        this.makeElements();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CnAreaBaseComponent.prototype, "geoScene", void 0);
    CnAreaBaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-cn-area-base",
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-area-base/cn-area-base.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-area-base/cn-area-base.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnAreaBaseComponent);
    return CnAreaBaseComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-area-lateral/cn-area-lateral.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n    <div class=\" col-12 text-center\">\r\n      <h3 class=\"text-center\">Área lateral</h3>\r\n    </div>\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a área referente ao cone que deseja calcular</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <div class=\"mt-4\">\r\n      <!-- Entradas -->\r\n      <p class=\"text-center\">\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{blue}{r}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeInputs()\" max=\"50\" min=\"5\" />\r\n        e da Altura(<ng-katex equation=\"\\color{red}{h}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeInputs()\" max=\"50\" min=\"5\" />\r\n      </p>\r\n\r\n      <div [className]=\"errorInput === true ? 'mt-1 alert alert-danger' : 'mt-1 alert alert-primary'\" role=\"alert\">\r\n        O raio e a altura devem ser um valor inteiro contido entre <b>5</b> e <b>50</b>.\r\n      </div>\r\n    </div>\r\n\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      A área lateral equivale a área de um setor circular de raio <ng-katex equation=\"g.\"></ng-katex>\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\textcolor{black}{A_l = \\pi \\cdot \\textcolor{blue}{r} \\cdot \\textcolor{black}{ g } }\">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cone/cn-areas/area-lateral-cone.svg\">\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <!-- Accordion -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <!-- Geratriz -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingGeratriz\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseGeratriz\">\r\n              <p *ngIf=\"isApprox else elseGeratriz\" class=\"mb-0\">\r\n                Geratriz\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ geratriz }}  \\ u.c.\"> </ng-katex>\r\n              </p>\r\n              <ng-template #elseGeratriz>\r\n                Geratriz\r\n                <ng-katex class=\"explicacao\" equation=\" = {{ geratriz }}  \\ u.c.\"> </ng-katex>\r\n              </ng-template>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseGeratriz\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseGeratriz\" class=\"collapse\" aria-labelledby=\"headingGeratriz\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            Note que temos um triângulo retângulo, aplicando o teorema de pitágoras temos:\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\color{black}{^2} = \\color{red}{h} \\color{black}{^2 +} \\color{blue}{r} \\color{black}{^2}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da geratriz.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ g }\"></ng-katex> = geratriz\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ h }\"></ng-katex> = altura\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ r }\"></ng-katex> = raio\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\color{black}{^2} = \\color{red}{ {{ height * height }} } \\color{black}{ + } \\color{blue}{ {{ radius * radius }} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Aplicando os valores na fórmula e elevando a altura (<ng-katex\r\n                          equation=\"\\color{red}{ {{ height }} }\"></ng-katex>) ao quadrado e o raio (<ng-katex\r\n                          equation=\"\\color{blue}{ {{ radius }} }\"></ng-katex>) ao quadrado.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\textcolor{black}{ = \\sqrt{ \\textcolor{red}{ {{height * height}} }  + \\textcolor{blue}{ {{ radius * radius }} } }} \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Passamos o expoente do g para o outro lado da igualdade tornando-se uma raíz quadrada dos\r\n                        valores\r\n                        <ng-katex equation=\"\\color{red}{ {{ height * height }} }\"></ng-katex> e\r\n                        <ng-katex equation=\"\\color{blue}{ {{ radius * radius }} }\"></ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\textcolor{black}{ = \\sqrt{ \\textcolor{limegreen}{ {{ height * height + radius * radius }} } }}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePaaso4\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Calculando a soma <ng-katex equation=\"\\color{red}{ {{ height * height }} }\">\r\n                        </ng-katex> + <ng-katex equation=\"\\color{blue}{ {{ radius * radius }} }\"></ng-katex>, e\r\n                        calculando a sua raíz quadrada.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 5 -->\r\n                  <div *ngIf=\"outsideRoot != 1 && insideRoot != 1\" class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\textcolor{black}{ = {{ outsideRoot }} \\sqrt{ \\textcolor{limegreen}{ {{ insideRoot }} } }}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso5\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso5\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Aplicando a fatoração da raíz.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr *ngIf=\"outsideRoot != 1 && insideRoot != 1\">\r\n                  <!-- Passo 6 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6\" class=\"\">\r\n                          <p *ngIf=\"isApprox; else elseBlockGeratriz\">\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ g } \\textcolor{black}{ \\approx \\textcolor{black}{ {{ geratriz }} } \\ u.c.}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso6\"></i>\r\n                          </p>\r\n                          <ng-template #elseBlockGeratriz>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ g } \\textcolor{black}{ = \\textcolor{black}{ {{ geratriz }} } \\ u.c.}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePaaso4\"></i>\r\n                          </ng-template>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso6\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final aproximado na forma decimal em unidades de comprimento.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse geratriz -->\r\n\r\n      <!-- Exemplo -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n              <p *ngIf=\"isApprox else elseResult\" class=\"mb-0\">\r\n                Cálculo da Área Lateral\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ (radius * geratriz).toFixed(2) }}  \\pi \\ u.a.\">\r\n                </ng-katex>\r\n              </p>\r\n              <ng-template #elseResult>\r\n                Cálculo da Área Lateral\r\n                <ng-katex class=\"explicacao\" equation=\"= {{radius * geratriz }}  \\pi \\ u.a.\">\r\n                </ng-katex>\r\n              </ng-template>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseTwo\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_l = \\pi \\cdot \\textcolor{blue}{r} \\cdot \\textcolor{limegreen}{ g } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseSix\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para calcular a área lateral.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ r }\"></ng-katex> = raio\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{limegreen}{ g }\"></ng-katex> = geratriz\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_l = \\pi \\cdot \\textcolor{blue}{ {{radius}} } \\cdot \\textcolor{limegreen}{ {{outsideRoot != 1 ? outsideRoot : '' }} {{ insideRoot !=1 ? '\\\\sqrt{' + insideRoot + '}' : '' }} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseSeven\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Multiplica o raio (<ng-katex equation=\"\\textcolor{blue}{ {{radius}} }\"></ng-katex>) pela geratriz\r\n                  fatorada.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEight\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_l = \\pi \\cdot \\textcolor{red}{  {{ radius * outsideRoot }} {{ insideRoot !=1 ? '\\\\sqrt{' + insideRoot + '}' : '' }} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseEight\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseEight\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Multiplica <ng-katex equation=\"\\pi\"></ng-katex> pelo resultado do passo anterior.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <!-- Passo 4 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseNine\" class=\"\">\r\n                    <p *ngIf=\"isApprox; else elseBlock\">\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_l \\approx \\textcolor{black}{ {{ (radius * geratriz).toFixed(2) }} } \\pi \\ u.a.}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseNine\"></i>\r\n                    </p>\r\n                    <ng-template #elseBlock>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_l = \\textcolor{black}{ {{radius * geratriz }} } \\pi \\ u.a.}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePaaso4\"></i>\r\n                    </ng-template>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseNine\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final aproximado na forma decimal em unidades de área.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-area-lateral/cn-area-lateral.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-area-lateral/cn-area-lateral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnAreaLateralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_squareRoot__ = __webpack_require__("./src/app/views/geometria/shared/fixtures/squareRoot.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CnAreaLateralComponent = /** @class */ (function () {
    function CnAreaLateralComponent() {
        var _a;
        this.radius = 25;
        this.height = 40;
        this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        this.isApprox = true;
        this.errorInput = false;
        // Cores
        this.blue = 0x4683B4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        this.buttons = [
            { title: "Área da base", route: "cn_area_base" },
            { title: "Área lateral", route: "cn_area_lateral" },
            { title: "Área total", route: "cn_area_total" }
        ];
        var squareRoot = new __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_squareRoot__["a" /* SquareRoot */]((Math.pow(this.height, 2)) + (Math.pow(this.radius, 2)), 1);
        squareRoot.factoringRoot();
        _a = squareRoot.getTuple(), this.outsideRoot = _a[0], this.insideRoot = _a[1];
    }
    CnAreaLateralComponent.prototype.makeElements = function () {
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["ConeGeometry"](this.radius, this.height, 92);
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blueShadow, transparent: true, opacity: 0.5 });
        var cone = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometry, material);
        cone.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.height / 2, 0));
        var vLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('V', 2, 'black');
        vLabel.position.y = this.height + 1;
        var oLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 2, 'black');
        oLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 1, 1));
        var aLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 2, 'black');
        aLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, 1, Math.sin(Math.PI / 4) * this.radius));
        var rLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r', 2, 'blue');
        rLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius / 2, 1, Math.sin(Math.PI / 4) * this.radius / 2));
        rLabel.material.depthTest = false;
        var hLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('h', 2, 'red');
        hLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, this.height / 2, 0));
        hLabel.material.depthTest = false;
        var materialRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black });
        var geometryRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryRadius.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, 0, Math.sin(Math.PI / 4) * this.radius));
        var radius = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryRadius, materialRadius);
        radius.name = "reta-raio";
        var materialHeight = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black });
        var geometryHeight = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryHeight.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.height, 0));
        var height = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryHeight, materialHeight);
        height.name = "reta-altura";
        height.material.depthTest = false;
        var baseGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radius, this.radius, -0.01, 92);
        var baseMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blueShadow });
        var base = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](baseGeometry, baseMaterial);
        this.geoScene.scene.add(cone, vLabel, oLabel, aLabel, rLabel, radius, base, height, hLabel);
        this.geoScene.render();
    };
    CnAreaLateralComponent.prototype.changeInputs = function () {
        if (this.radius > 4 && this.radius < 51 && this.height > 4 && this.height < 51) {
            this.changeCone();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CnAreaLateralComponent.prototype.changeCone = function () {
        var _a;
        this.removeElements();
        this.makeElements();
        this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        var squareRoot = new __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_squareRoot__["a" /* SquareRoot */]((Math.pow(this.height, 2)) + (Math.pow(this.radius, 2)), 1);
        squareRoot.factoringRoot();
        _a = squareRoot.getTuple(), this.outsideRoot = _a[0], this.insideRoot = _a[1];
        // Verifica se há necessidade de arredondamento
        this.geratriz = (Number.isInteger(this.geratriz)) ? this.geratriz : parseFloat(this.geratriz.toFixed(2));
        // Verifica se é um valor aproximado
        this.isApprox = (!Number.isInteger(this.geratriz)) ? true : false;
    };
    CnAreaLateralComponent.prototype.removeElements = function () {
        var _this = this;
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
    };
    CnAreaLateralComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
        this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        // Verifica se há necessidade de arredondamento
        this.geratriz = (Number.isInteger(this.geratriz)) ? this.geratriz : parseFloat(this.geratriz.toFixed(2));
        // Verifica se é um valor aproximado
        this.isApprox = (!Number.isInteger(this.geratriz)) ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CnAreaLateralComponent.prototype, "geoScene", void 0);
    CnAreaLateralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cn-area-lateral',
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-area-lateral/cn-area-lateral.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-area-lateral/cn-area-lateral.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnAreaLateralComponent);
    return CnAreaLateralComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-area-total/cn-area-total.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n    <div class=\" col-12 text-center\">\r\n      <h3 class=\"text-center\">Área total</h3>\r\n    </div>\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a área referente ao cone que deseja calcular</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <div class=\"mt-4\">\r\n      <p class=\"text-center\">\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{blue}{r}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeInputs()\" max=\"50\" min=\"5\" />\r\n        e da Altura(<ng-katex equation=\"\\color{red}{h}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeInputs()\" max=\"50 \" min=\"5\" />\r\n      </p>\r\n\r\n      <div [className]=\"errorInput === true ? 'mt-1 alert alert-danger' : 'mt-1 alert alert-primary'\" role=\"alert\">\r\n        O raio e a altura devem ser um valor inteiro contido entre <b>5</b> e <b>50</b>.\r\n      </div>\r\n    </div>\r\n\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      A área total (<ng-katex equation=\"A_t\"></ng-katex>) é obtida somando-se a área da base com a área lateral.\r\n    </p>\r\n    <!-- Fórmula área total -->\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\textcolor{black}{A_t =\\textcolor{RosyBrown}{  A_l }  \\textcolor{black}{+} \\textcolor{DarkViolet}{  A_b } }\">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <p class=\"row text-center\">\r\n      <!-- Fórmula área lateral -->\r\n      <ng-katex class=\"explicacao col-lg-6 col-12\" equation=\"\\textcolor{RosyBrown}{A_l = \\pi \\cdot r \\cdot g }\">\r\n      </ng-katex>\r\n\r\n      <!-- Fórmula área da base -->\r\n      <ng-katex class=\"explicacao col-lg-6 col-12\" equation=\"\\textcolor{DarkViolet}{A_b = \\pi \\cdot r^2}\">\r\n      </ng-katex>\r\n    </p>\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cone/cn-areas/areas-area-total-cone.svg\">\r\n    </div>\r\n\r\n\r\n\r\n    <hr>\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <!-- Exemplo -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingCalculo\" data-toggle=\"collapse\" data-target=\"#collapseCalculo\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCalculo\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseCalculo\">\r\n              <p *ngIf=\"isApprox else elseResult\" class=\"mb-0\">\r\n                Cálculo\r\n                <ng-katex class=\"explicacao\" equation=\"\\approx {{ result }} \\pi \\ u.a.\"></ng-katex>\r\n              </p>\r\n              <ng-template #elseResult>\r\n                Cálculo\r\n                <ng-katex class=\"explicacao\" equation=\" = {{ result }} \\pi \\ u.a.\"></ng-katex>\r\n              </ng-template>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCalculo\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseCalculo\" class=\"collapse\" aria-labelledby=\"headingCalculo\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!--Passo 1-->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_t =\\color{RosyBrown}{  A_l }  \\textcolor{black}{+} \\color{DarkViolet}{  A_b } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseOne\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n\r\n              </div>\r\n              <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para o calculo da área total.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{RosyBrown}{ A_l }\"></ng-katex> = Área Lateral\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{DarkViolet}{ A_b }\"></ng-katex> = Área da Base\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <!--Passo 2-->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_t = \\color{RosyBrown}{ \\pi \\cdot r  \\cdot g } \\textcolor{black}{+} \\color{DarkViolet}{ \\pi \\cdot r^2} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseTwo\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Soma da área lateral mais área da base.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <!--Passo 3-->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                    <p>\r\n                      <ng-katex id=\"passo3\" class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_t =(\\color{RosyBrown}{\\pi \\cdot {{ radius }} \\cdot  {{outsideRoot != 1 ? outsideRoot : '' }} {{ insideRoot !=1 ? '\\\\sqrt{' + insideRoot + '}' : '' }} } \\color{black}{ ) + (} \\color{DarkViolet}{\\pi \\cdot {{radius}}^2} \\color{black}{ )}}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseThree\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substitui os elementos e realiza-se a multiplicação dos elementos dentro dos parênteses.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <!--Passo 4-->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_t =\\color{RosyBrown}{  {{ radius * outsideRoot }} \\pi {{ insideRoot !=1 ? '\\\\sqrt{' + insideRoot + '}' : '' }} } \\color{black}{+} \\color{DarkViolet}{ {{ (radius*radius) }} \\pi } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseFour\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Soma-se os termos semelhantes, se houver.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <!--Passo 5-->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_t = \\textcolor{black}{ {{ mmc }} \\pi ( {{ (factoredRoot != 1) ? factoredRoot : '' }} \\sqrt{ {{ insideRoot }} } + {{ factoredRadius }} ) }}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseFive\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Simplificando a equação.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <!--Passo 6-->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                    <p *ngIf=\"isApprox else elseBlock\">\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_t \\approx \\textcolor{red}{ {{ result }} \\textcolor{black}{\\pi} } \\ u.a.}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseSix\"></i>\r\n                    </p>\r\n                    <ng-template #elseBlock>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{A_t = \\textcolor{red}{ {{ result }} \\textcolor{black}{\\pi} } \\ u.a.}\"></ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseSix\"></i>\r\n                    </ng-template>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final aproximado em decimais em unidades de área.\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-area-total/cn-area-total.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-area-total/cn-area-total.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnAreaTotalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_squareRoot__ = __webpack_require__("./src/app/views/geometria/shared/fixtures/squareRoot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_fixtures_fraction__ = __webpack_require__("./src/app/views/geometria/shared/fixtures/fraction.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CnAreaTotalComponent = /** @class */ (function () {
    function CnAreaTotalComponent() {
        var _a, _b;
        this.radius = 25;
        this.height = 40;
        this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        this.equation = "g = " + this.geratriz + " u.c.";
        this.pi = Math.PI;
        this.isApprox = true;
        this.result = this.radius * this.geratriz + Math.pow(this.radius, 2);
        this.errorInput = false;
        // Cores
        this.blue = 0x4683B4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        this.buttons = [
            { title: "Área da base", route: "cn_area_base" },
            { title: "Área lateral", route: "cn_area_lateral" },
            { title: "Área total", route: "cn_area_total" }
        ];
        var squareRoot = new __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_squareRoot__["a" /* SquareRoot */]((Math.pow(this.height, 2)) + (Math.pow(this.radius, 2)), 1);
        squareRoot.factoringRoot();
        _a = squareRoot.getTuple(), this.outsideRoot = _a[0], this.insideRoot = _a[1];
        this.useFactoring = (this.outsideRoot % this.radius == 0
            || this.radius % this.outsideRoot == 0) ? true : false;
        var fraction = new __WEBPACK_IMPORTED_MODULE_5__shared_fixtures_fraction__["a" /* default */](this.radius, this.outsideRoot);
        _b = fraction.factoredArray(), this.factoredRadius = _b[0], this.factoredRoot = _b[1];
        this.mmc = __WEBPACK_IMPORTED_MODULE_5__shared_fixtures_fraction__["a" /* default */].getMDC(this.outsideRoot, this.radius);
        // this.factoring = 
    }
    CnAreaTotalComponent.prototype.makeElements = function () {
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["ConeGeometry"](this.radius, this.height, 92);
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blueShadow, transparent: true, opacity: 0.5 });
        var cone = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometry, material);
        cone.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.height / 2, 0));
        var vLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('V', 2, 'black');
        vLabel.position.y = this.height + 1;
        var oLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 2, 'black');
        oLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 1, 1));
        var aLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 2, 'black');
        aLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, 1, Math.sin(Math.PI / 4) * this.radius));
        var rLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r', 2, 'blue');
        rLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius / 2, 1, Math.sin(Math.PI / 4) * this.radius / 2));
        rLabel.material.depthTest = false;
        var hLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('h', 2, 'red');
        hLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, this.height / 2, 0));
        hLabel.material.depthTest = false;
        var materialRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black });
        var geometryRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryRadius.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, 0, Math.sin(Math.PI / 4) * this.radius));
        var radius = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryRadius, materialRadius);
        radius.name = "reta-raio";
        var materialHeight = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, depthTest: false });
        var geometryHeight = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryHeight.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.height, 0));
        var height = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryHeight, materialHeight);
        height.name = "reta-altura";
        height.material.depthTest = false;
        var baseGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radius, this.radius, -0.01, 92);
        var baseMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blueShadow });
        var base = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](baseGeometry, baseMaterial);
        this.geoScene.scene.add(cone, vLabel, oLabel, aLabel, rLabel, radius, base, height, hLabel);
        this.geoScene.render();
    };
    CnAreaTotalComponent.prototype.changeInputs = function () {
        if (this.radius > 4 && this.radius < 51 && this.height > 4 && this.height < 51) {
            this.changeCone();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CnAreaTotalComponent.prototype.changeCone = function () {
        var _a, _b;
        this.removeElements();
        this.makeElements();
        this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        this.equation = "g = " + this.geratriz + " u.c.";
        var squareRoot = new __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_squareRoot__["a" /* SquareRoot */]((Math.pow(this.height, 2)) + (Math.pow(this.radius, 2)), 1);
        squareRoot.factoringRoot();
        _a = squareRoot.getTuple(), this.outsideRoot = _a[0], this.insideRoot = _a[1];
        this.result = this.radius * this.geratriz + Math.pow(this.radius, 2);
        // Verifica se há necessidade de arredondamento
        this.result = (Number.isInteger(this.result)) ? this.result : parseFloat(this.result.toFixed(2));
        // Verifica se é um valor aproximado
        this.isApprox = (!Number.isInteger(this.result)) ? true : false;
        this.useFactoring = (this.outsideRoot % this.radius == 0
            || this.radius % this.outsideRoot == 0) ? true : false;
        var fraction = new __WEBPACK_IMPORTED_MODULE_5__shared_fixtures_fraction__["a" /* default */](this.radius, this.outsideRoot);
        _b = fraction.factoredArray(), this.factoredRadius = _b[0], this.factoredRoot = _b[1];
        console.log(this.mmc);
    };
    CnAreaTotalComponent.prototype.removeElements = function () {
        var _this = this;
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
    };
    CnAreaTotalComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
        this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        this.equation = "g = " + this.geratriz + " u.c.";
        // Verifica se há necessidade de arredondamento
        this.result = (Number.isInteger(this.result)) ? this.result : parseFloat(this.result.toFixed(2));
        // Verifica se é um valor aproximado
        this.isApprox = (!Number.isInteger(this.result)) ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CnAreaTotalComponent.prototype, "geoScene", void 0);
    CnAreaTotalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cn-area-total',
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-area-total/cn-area-total.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-area-total/cn-area-total.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnAreaTotalComponent);
    return CnAreaTotalComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-areas/cn-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"info\">\r\n\r\n  <div class=\"row mt-2\">\r\n    <!-- Botões de navegação -->\r\n    <div class=\"btn-container mt-2 row mx-auto\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Áreas</h3>\r\n      </div>\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a área referente ao cone que deseja calcular</h5>\r\n      <div class=\"row col-12\">\r\n        <geo-btn class=\"mx-auto\" *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\"\r\n          [route]=\"button.route\"></geo-btn>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Breve explicação -->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\"row col-12 mt-5\">\r\n        <div class=\"col-lg-4 col-md-6 col-12\">\r\n          <h5 class=\"text-center \">Área da base</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/cone/cn-areas/areas-area-base-cone.svg\">\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-12\">\r\n          <h5 class=\"text-center mb-0\">Área lateral</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/cone/cn-areas/areas-area-lateral-cone.svg\">\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-12\">\r\n          <h5 class=\"text-center mb-0\">Área total</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/cone/cn-areas/areas-area-total-cone.svg\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-areas/cn-areas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-areas/cn-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnAreasComponent; });
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

var CnAreasComponent = /** @class */ (function () {
    function CnAreasComponent() {
        this.buttons = [
            { title: "Área da base", route: "cn_area_base" },
            { title: "Área lateral", route: "cn_area_lateral" },
            { title: "Área total", route: "cn_area_total" }
        ];
    }
    CnAreasComponent.prototype.ngOnInit = function () {
    };
    CnAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cn-areas',
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-areas/cn-areas.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-areas/cn-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnAreasComponent);
    return CnAreasComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-definicao/cn-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n  <!-- Cone -->\r\n  <div class=\"row definition__group mt-4\">\r\n\r\n    <div class=\"col-12\">\r\n      <h3 class=\"text-center\">Definição</h3>\r\n      <!-- Explicação -->\r\n      <p class=\"\"> Vamos considerar um plano <strong>α</strong>, uma região circular <strong>R</strong> nesse\r\n        plano e um ponto <strong>P</strong> não pertencente a <strong>α</strong>.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <!-- Imagem -->\r\n      <img src=\"assets/images/geometria/cone/cn-definicao/elementos-cone.svg\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n      <!-- Explicação -->\r\n      <p class=\"p-justify mt-5\">A reunião de todos os segmentos que ligam cada ponto de <strong>R</strong> ao ponto\r\n        <strong>P</strong> é um sólido chamado <em>cone circular</em>.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <!-- Imagem -->\r\n      <img src=\"assets/images/geometria/cone/cn-definicao/elementos2-cone.svg\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n      <!-- Explicação -->\r\n      <p class=\"p-justify mt-5\">A superfície do cone é formada por uma parte plana, a região circular, que é a sua base,\r\n        e uma parte não-plana, \"curva\", \"arredondada\", que é a sua superfície lateral.\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-definicao/cn-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = ".definition__group__img {\n  max-height: 70vh;\n  min-height: 30vh;\n  min-width: 10vw; }\n\n.definition__group p {\n  text-indent: 2em; }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-definicao/cn-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnDefinicaoComponent; });
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

var CnDefinicaoComponent = /** @class */ (function () {
    function CnDefinicaoComponent() {
    }
    CnDefinicaoComponent.prototype.ngOnInit = function () { };
    CnDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "cn-definicao",
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-definicao/cn-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-definicao/cn-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnDefinicaoComponent);
    return CnDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-elementos/cn-elementos.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n  <!-- Cone -->\r\n  <div class=\"row definition__group mt-4\">\r\n    <div class=\"col-12\">\r\n      <h3 class=\"text-center\">Elementos</h3>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-xl-6 text-center\">\r\n      <!-- Imagem -->\r\n      <img src=\"assets/images/geometria/cone/cn-elementos/elementos5-cone.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid mx-auto d-block justify-content-center\" />\r\n    </div>\r\n    <!-- Explicação -->\r\n    <div class=\"col-12 col-xl-6 d-flex align-items-center\">\r\n      <p>A <u>altura</u> (<strong>h</strong>) do cone é o segmento de reta perpendicular traçado do\r\n        <u>vértice</u> (<strong>V</strong>)\r\n        ao plano da base e a <u>geratriz</u> (<strong>g</strong>) do cone é cada segmento que liga o vértice a um ponto\r\n        da circunferência da base.\r\n      </p>\r\n    </div>\r\n\r\n    <!-- Observações -->\r\n    <div class=\"col-12 text-center\">\r\n      <h4 class=\"text-center text-danger\">Observações</h4>\r\n    </div>\r\n\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <!-- Imagem -->\r\n      <img src=\"assets/images/geometria/cone/cn-elementos/elementos3-cone.svg\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n      <!-- Explicação -->\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <p class=\"p-justify mt-4\">Se o eixo é perpendicular à base, o cone denomina-se <em>cone reto</em>.</p>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n          <p class=\"p-justify mt-4\">Se o eixo é oblíquo à base, o cone é chamado de <em>cone oblíquo</em>.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <!-- Imagem -->\r\n      <img src=\"assets/images/geometria/cone/cn-elementos/elementos4-cone.svg\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n      <!-- Explicação -->\r\n      <p class=\"p-justify mt-4\">\r\n        Um cone reto pode ser obtido girando-se uma região triangular cujo contorno é um triângulo retângulo em torno\r\n        de uma reta que contém um dos catetos.\r\n      </p>\r\n      <p class=\"p-justify\">\r\n        Por esse motivo, o cone reto é considerado um sólido ou <em>corpo de revolução</em> e é chamado <em>cone de\r\n          revolução</em>.\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-elementos/cn-elementos.component.scss":
/***/ (function(module, exports) {

module.exports = ".definition__group__img {\n  max-height: 50vh;\n  min-height: 30vh;\n  min-width: 10vw; }\n\n.definition p {\n  text-indent: 2em; }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-elementos/cn-elementos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnElementosComponent; });
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

var CnElementosComponent = /** @class */ (function () {
    function CnElementosComponent() {
    }
    CnElementosComponent.prototype.ngOnInit = function () { };
    CnElementosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-cn-elementos",
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-elementos/cn-elementos.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-elementos/cn-elementos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnElementosComponent);
    return CnElementosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-sidebar/cn-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"rp-sidebar\">\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cn_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cn_elementos']\">\r\n      Elementos\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cn_areas']\">\r\n      Áreas\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cn_volume']\">\r\n      Volume\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cn_tronco_cone']\">\r\n      Tronco de cone\r\n    </li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-sidebar/cn-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".list-group-item:first-child {\n  border-radius: 0 !important; }\n\n.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #4683B4 !important;\n  border-color: #4683B4 !important; }\n\n#selecionado:hover {\n  color: #fff;\n  background-color: #4683B4; }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-sidebar/cn-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnSidebarComponent; });
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

var CnSidebarComponent = /** @class */ (function () {
    function CnSidebarComponent() {
    }
    CnSidebarComponent.prototype.ngOnInit = function () { };
    CnSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "cn-sidebar",
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-sidebar/cn-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-sidebar/cn-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnSidebarComponent);
    return CnSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-tronco-cone/cn-tronco-cone.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Texto do cabeçalho -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h3>Tronco de cone</h3>\r\n    <h5 class=\"mt-2 col-12 text-center\">Entre com a medida do raio da base menor (<strong>r1</strong>), raio da base\r\n      maior (<strong>r2</strong>), altura (<strong>h</strong>)</h5>\r\n  </div>\r\n\r\n  <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <div class=\"mt-4\">\r\n      <!-- Entradas -->\r\n      <p class=\"text-center\">\r\n        Raio menor (<ng-katex equation=\"\\color{red}{r1}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body mr-4\" type=\"number\" [(ngModel)]=\"radiusSmaller\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadiusSmaller()\" max=\"15\" min=\"3\" />\r\n        Raio maior (<ng-katex equation=\"\\color{limegreen}{r2}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body mr-4\" type=\"number\" [(ngModel)]=\"radiusLarger\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadiusLarger()\" max=\"50\" min=\"16\" />\r\n        Altura (<ng-katex equation=\"\\color{blue}{h}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeHeight()\" max=\"50\" min=\"10\" />\r\n      </p>\r\n\r\n      <div\r\n        [className]=\"errorInput === true ? ' mt-1 alert alert-danger text-center' : ' mt-1 alert alert-primary text-center'\"\r\n        role=\"alert\">\r\n        O raio menor deve ser um valor inteiro contido entre <b>3</b> e <b>15</b>. <br>\r\n        O raio maior deve ser um valor inteiro contido entre <b>16</b> e <b>50</b>. <br>\r\n        A altura deve ser um valor inteiro contido entre <b>10</b> e <b>50</b>. <br>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Cena  -->\r\n    <geo-scene class=\"mt-4 col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p class=\"indent mb-0\">\r\n      A base de um cone é um círculo de raio <ng-katex equation=\"r\"></ng-katex>.\r\n    </p>\r\n    <p class=\"indent\">\r\n      O tronco de cone pode ser considerado um plano paralelo à base que secciona o cone originando um tronco e um\r\n      cone menor e semelhante ao cone original, de forma que para os dois cones podem ser usadas todas as\r\n      relações de semelhança: lineares, de área e de volume.\r\n    </p>\r\n\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\color{black}{A_l} \\textcolor{black}{ = \\pi \\cdot { \\textcolor{black}{g} \\cdot (\\textcolor{red}{r_1}  \\textcolor{black}{+} \\textcolor{limegreen}{r_2} } ) } \">\r\n      </ng-katex>\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\textcolor{black}{V = \\frac{\\pi \\cdot \\textcolor{blue}{h}}{3} \\cdot (\\textcolor{limegreen}{r_2^2} + \\textcolor{limegreen}{r_2} \\cdot \\textcolor{red}{r_1} + \\textcolor{red}{r_1^2})} \">\r\n      </ng-katex>\r\n    </p>\r\n\r\n\r\n    <!--Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cone/cn-tronco-cone/definicao-tronco-cone.png\">\r\n    </div>\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n\r\n      <!-- Geratriz -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingGeratriz\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseGeratriz\">\r\n              <p *ngIf=\"isApprox else elseGeratriz\" class=\"mb-0\">\r\n                Geratriz\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ geratriz }}  \\ u.c.\"> </ng-katex>\r\n              </p>\r\n              <ng-template #elseGeratriz>\r\n                Geratriz\r\n                <ng-katex class=\"explicacao\" equation=\" = {{ geratriz }}  \\ u.c.\"> </ng-katex>\r\n              </ng-template>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseGeratriz\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseGeratriz\" class=\"collapse\" aria-labelledby=\"headingGeratriz\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            Note que temos um triângulo retângulo, aplicando o teorema de pitágoras temos:\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\color{black}{^2} = \\color{red}{h} \\color{black}{^2 +} \\color{limegreen}{r2} \\color{black}{^2}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da geratriz.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{black}{ g }\"></ng-katex> = geratriz\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ h }\"></ng-katex> = altura\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ r2 }\"></ng-katex> = raio maior\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\color{black}{^2} = \\color{red}{ {{ height * height }} } \\color{black}{ + } \\color{limegreen}{ {{ radiusLarger * radiusLarger }} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Aplicando os valores na fórmula e elevando a altura (<ng-katex\r\n                          equation=\"\\color{red}{ {{ height }} }\"></ng-katex>) ao quadrado e o raio (<ng-katex\r\n                          equation=\"\\color{blue}{ {{ radiusLarger }} }\"></ng-katex>) ao quadrado.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\textcolor{black}{ = \\sqrt{ \\textcolor{red}{ {{height * height}} }  + \\textcolor{limegreen}{ {{ radiusLarger * radiusLarger }} } }} \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Passamos o expoente do g para o outro lado da igualdade tornando-se uma raíz quadrada dos\r\n                        valores\r\n                        <ng-katex equation=\"\\color{red}{ {{ height * height }} }\"></ng-katex> e\r\n                        <ng-katex equation=\"\\color{limegreen}{ {{ radiusLarger * radiusLarger }} }\"></ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\textcolor{black}{ = \\sqrt{ \\textcolor{limegreen}{ {{ height * height + radiusLarger * radiusLarger }} } }}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePaaso4\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Calculando a soma <ng-katex equation=\"\\color{red}{ {{ height * height }} }\">\r\n                        </ng-katex> + <ng-katex equation=\"\\color{blue}{ {{ radiusLarger * radiusLarger }} }\"></ng-katex>\r\n                        , e calculando a sua raíz quadrada.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 5 -->\r\n                  <div *ngIf=\"outsideRoot != 1 && insideRoot != 1\" class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{g} \\textcolor{black}{ = {{ outsideRoot }} \\sqrt{ \\textcolor{limegreen}{ {{ insideRoot }} } }}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso5\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso5\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Aplicando a fatoração da raíz.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr *ngIf=\"outsideRoot != 1 && insideRoot != 1\">\r\n                  <!-- Passo 6 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6\" class=\"\">\r\n                          <p *ngIf=\"isApprox; else elseBlockGeratriz\">\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ g } \\textcolor{black}{ \\approx \\textcolor{black}{ {{ geratriz }} } \\ u.c.}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso6\"></i>\r\n                          </p>\r\n                          <ng-template #elseBlockGeratriz>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ g } \\textcolor{black}{ = \\textcolor{black}{ {{ geratriz }} } \\ u.c.}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePaaso4\"></i>\r\n                          </ng-template>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso6\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final aproximado na forma decimal em unidades de comprimento (u.c).\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Área lateral -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingAreLateral\" data-toggle=\"collapse\" data-target=\"#collapseAreLateral\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseAreLateral\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseAreLateral\">\r\n              <p *ngIf=\"areaLateralApprox else elseResultAreaL\" class=\"mb-0\">\r\n                Área Lateral\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ resultAreaLateral }}  \\ u.c.\"> </ng-katex>\r\n              </p>\r\n              <ng-template #elseResultAreaL>\r\n                Área Lateral\r\n                <ng-katex class=\"explicacao\" equation=\" = {{ resultAreaLateral }}  \\ u.c.\"> </ng-katex>\r\n              </ng-template>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAreLateral\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseAreLateral\" class=\"collapse\" aria-labelledby=\"headingAreLateral\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#subcolapsetwo1\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_l} \\textcolor{black}{ = \\pi \\cdot { \\textcolor{peru}{g} \\cdot (\\textcolor{red}{r_1} + \\textcolor{limegreen}{r_2} } ) } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#subcolapsetwo1\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"subcolapsetwo1\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n\r\n                        Fórmula para o cálculo da Área Lateral.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{black}{ A_l }\"></ng-katex> = Altura lateral.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{peru}{ g }\"></ng-katex> = Geratriz.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{r_1}\"></ng-katex> = Raio menor.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{r_2}\"></ng-katex> = Raio maior.\r\n                          </li>\r\n                        </ul>\r\n                        Aplicamos a geratriz(<ng-katex equation=\"\\color{peru}{g}\"></ng-katex>),\r\n                        o Raio menor(<ng-katex equation=\"\\color{blue}{r_1}\"></ng-katex>),\r\n                        e o Raio maior na fórmula(<ng-katex equation=\"\\color{red}{r_2}\"></ng-katex>)\r\n                      </div>\r\n                      <br>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Segundo item  passo2 -->\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#subcolapsetwo2\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_l} \\textcolor{black}{ = \\pi \\cdot { \\textcolor{peru}{ {{outsideRoot != 1 ? outsideRoot : '' }} {{ insideRoot !=1 ? '\\\\sqrt{' + insideRoot + '}' : '' }} }  \\cdot (\\textcolor{red}{ {{radiusSmaller}} } + \\textcolor{limegreen}{ {{radiusLarger}} } } ) } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#subcolapsetwo2\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"subcolapsetwo2\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Aplicando a geratriz(<ng-katex equation=\"\\color{peru}{ {{geratriz}} }\"></ng-katex>),\r\n                        o Raio menor(<ng-katex equation=\"\\color{red}{ {{radiusSmaller}} }\"></ng-katex>),\r\n                        e o Raio maior(<ng-katex equation=\"\\color{limegreen}{ {{radiusLarger}} }\"></ng-katex>) na\r\n                        fórmula.\r\n                      </div>\r\n                      <br>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Segundo item passo3 -->\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#subcolapsetwo3\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_l} \\textcolor{black}{ =\\textcolor{peru}{ {{ outsideRoot * ( radiusLarger + radiusSmaller ) }} {{ insideRoot !=1 ? '\\\\sqrt{' + insideRoot + '}' : '' }} } \\pi \\ u.a } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#subcolapsetwo3\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"subcolapsetwo3\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Multiplicamos (<ng-katex equation=\"\\color{black}{ \\pi }\"></ng-katex>) pela geratriz(<ng-katex\r\n                          equation=\"\\color{peru}{ {{geratriz}} }\"></ng-katex>),\r\n                        e em seguida multiplicamos pelo resultado da soma do Raio menor(<ng-katex\r\n                          equation=\"\\color{red}{ {{radiusSmaller}} }\"></ng-katex>),\r\n                        com o Raio maior(<ng-katex equation=\"\\color{limegreen}{ {{radiusLarger}} }\"></ng-katex>).\r\n                      </div>\r\n                      <br>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Segundo item passo 4 -->\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#subcolapsetwo4\" class=\"\">\r\n                          <p *ngIf=\"areaLateralApprox else elseBlockAl\">\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_l} \\textcolor{black}{ \\approx \\textcolor{black}{ {{ resultAreaLateral }} } \\pi \\ u.a } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#subcolapsetwo4\"></i>\r\n                          </p>\r\n                          <ng-template #elseBlockAl>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_l} \\textcolor{black}{ = \\textcolor{red}{ {{ resultAreaLateral }} } \\pi \\ u.a } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#subcolapsetwo4\"></i>\r\n                          </ng-template>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"subcolapsetwo4\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final.\r\n                      </div>\r\n                      <br>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Volume -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingVolume\" data-toggle=\"collapse\" data-target=\"#collapseVolume\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseVolume\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseVolume\">\r\n              <p *ngIf=\"volumeApprox else elseVolume\" class=\"mb-0\">\r\n                Volume\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ result }}  \\ u.c.\"> </ng-katex>\r\n              </p>\r\n              <ng-template #elseVolume>\r\n                Volume\r\n                <ng-katex class=\"explicacao\" equation=\" = {{ result }}  \\ u.c.\"> </ng-katex>\r\n              </ng-template>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseVolume\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseVolume\" class=\"collapse\" aria-labelledby=\"headingVolume\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--Volume-->\r\n                  <div class=\"panel-body\">\r\n\r\n                    <!-- Passo 1 -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                            <p>\r\n                              <ng-katex id=\"katex\" class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{V = \\frac{\\pi \\cdot \\textcolor{blue}{h}}{3} \\cdot (\\textcolor{limegreen}{r_2}^2 + \\textcolor{limegreen}{r_2} \\cdot \\textcolor{red}{r_1} + \\textcolor{red}{r_1}^2)} \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseFour\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Utilizando a fórmula para o cálculo do volume do tronco do cone, temos as seguintes\r\n                          variáveis:\r\n                          <ul>\r\n                            <li>\r\n                              <ng-katex equation=\"\\textcolor{red}{r_1}\"></ng-katex> = Raio menor\r\n                            </li>\r\n                            <li>\r\n                              <ng-katex equation=\"\\textcolor{limegreen}{r_2}\"></ng-katex> = Raio maior\r\n                            </li>\r\n                            <li>\r\n                              <ng-katex equation=\"\\textcolor{blue}{h}\"></ng-katex> = Altura\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <!-- Passo 2 -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                            <p>\r\n                              <ng-katex id=\"katex\" class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{V = \\frac{\\pi \\cdot \\textcolor{blue}{ {{ height }} }}{3} \\cdot (\\textcolor{limegreen}{ {{ radiusLarger }} }^2 + \\textcolor{limegreen}{ {{ radiusLarger }} } \\cdot \\textcolor{red}{ {{ radiusSmaller }} }  + \\textcolor{red}{ {{ radiusSmaller }} }^2)} \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseSix\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Multiplicamos o <ng-katex equation=\"\\textcolor{black}{h}\"></ng-katex>(<ng-katex\r\n                            equation=\"\\textcolor{blue}{ {{height}} }\"></ng-katex>) por <ng-katex equation=\"\\pi\">\r\n                          </ng-katex>,\r\n                          depois dividimos por 3.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <!-- Passo 3 -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\" class=\"\">\r\n                            <ng-katex id=\"katex\" class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ V = \\textcolor{blue}{ {{ bottomFraction != 1 ? '\\\\frac{' + topFraction + '}{' + bottomFraction + '}' : topFraction }} } \\pi \\cdot (\\textcolor{limegreen}{ {{ radiusLarger }} }^2 + \\textcolor{limegreen}{ {{ radiusLarger }} } \\cdot \\textcolor{red}{ {{ radiusSmaller }} }  + \\textcolor{red}{ {{ radiusSmaller }} }^2)}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseSeven\"></i>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Elevamos <ng-katex equation=\"\\textcolor{black}{r_1}\"></ng-katex>(<ng-katex\r\n                            equation=\"\\textcolor{red}{ {{radiusSmaller}} }\"></ng-katex>)\r\n                          e <ng-katex equation=\"\\textcolor{black}{r_2}\"></ng-katex>(<ng-katex\r\n                            equation=\"\\textcolor{limegreen}{ {{radiusLarger}} }\"></ng-katex>) ao quadrado.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <!-- Passo 4 -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEight\" class=\"\">\r\n                            <ng-katex id=\"katex\" class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ V = \\textcolor{blue}{ {{ bottomFraction != 1 ? '\\\\frac{' + topFraction + '}{' + bottomFraction + '}' : topFraction }} } \\pi \\cdot (\\textcolor{limegreen}{ {{ radiusLarger*radiusLarger }} } + \\textcolor{limegreen}{ {{ radiusLarger }} } \\cdot \\textcolor{red}{ {{ radiusSmaller }} }  + \\textcolor{red}{ {{ radiusSmaller*radiusSmaller }} })}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseEight\"></i>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseEight\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Multiplicamos <ng-katex equation=\"\\textcolor{black}{r_1}\"></ng-katex>(<ng-katex\r\n                            equation=\"\\textcolor{red}{ {{radiusSmaller}} }\"></ng-katex>)\r\n                          e <ng-katex equation=\"\\textcolor{black}{r_2}\"></ng-katex>(<ng-katex\r\n                            equation=\"\\textcolor{limegreen}{ {{radiusLarger}} }\"></ng-katex>) e somamos com seus\r\n                          quadrados.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <!-- Passo 5 -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseNine\" class=\"\">\r\n                            <ng-katex id=\"katex\" class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ V = \\textcolor{blue}{ {{ bottomFraction != 1 ? '\\\\frac{' + topFraction + '}{' + bottomFraction + '}' : topFraction }} } \\pi \\cdot (\\textcolor{peru}{ {{ radiusLarger*radiusLarger + radiusLarger * radiusSmaller + radiusSmaller*radiusSmaller }} } )}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseNine\"></i>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseNine\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Multiplicamos <ng-katex\r\n                            equation=\"\\textcolor{blue}{ {{ bottomFraction != 1 ? '\\\\frac{' + topFraction + '}{' + bottomFraction + '}' : topFraction }} } \\pi\">\r\n                          </ng-katex> pelo resultado da soma.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <!-- Passo 6 -->\r\n                    <div *ngIf=\"bottomFractionResult != 1\" class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTen\" class=\"\">\r\n                            <p>\r\n                              <ng-katex id=\"katex\" class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{V = {{ bottomFractionResult != 1 ? '\\\\frac{' + topFractionResult + '}{' + bottomFractionResult + '}' : topFractionResult }} \\pi \\ u.a }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseTen\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTen\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final em forma de fração.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr *ngIf=\"bottomFractionResult != 1\">\r\n                    <!-- Passo 7 -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEleven\" class=\"\">\r\n                            <p *ngIf=\"volumeApprox else elseBlockVolume\">\r\n                              <ng-katex class=\"explicacao\" id=\"katex\"\r\n                                equation=\"\\textcolor{black}{V \\approx {{ result }} \\pi \\ u.a }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseEleven\"></i>\r\n                            </p>\r\n                            <ng-template #elseBlockVolume>\r\n                              <ng-katex class=\"explicacao\" id=\"katex\"\r\n                                equation=\"\\textcolor{black}{V = {{ result }} \\pi \\ u.a }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseEleven\"></i>\r\n                            </ng-template>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseEleven\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final em unidades de área(u.a).\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n                <!-- end panel-group -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-tronco-cone/cn-tronco-cone.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-tronco-cone/cn-tronco-cone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnTroncoConeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_fraction__ = __webpack_require__("./src/app/views/geometria/shared/fixtures/fraction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_fixtures_squareRoot__ = __webpack_require__("./src/app/views/geometria/shared/fixtures/squareRoot.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CnTroncoConeComponent = /** @class */ (function () {
    function CnTroncoConeComponent() {
        var _a, _b, _c;
        this.errorInput = false;
        this.radiusLarger = 30;
        this.radiusSmaller = 10;
        this.height = 30;
        this.result = ((Math.PI * this.height) / 3) *
            (Math.pow(this.radiusLarger, 2) +
                this.radiusLarger * this.radiusSmaller +
                Math.pow(this.radiusSmaller, 2));
        this.geratriz = Math.sqrt(Math.pow(this.radiusLarger, 2) + Math.pow(this.height, 2));
        this.areaLateralApprox = true;
        this.volumeApprox = true;
        //public equacao: string = `V = \\pi \\cdot \\color{red}{${this.radius}}^2 \\cdot \\color{red}{${this.height}}`;
        //public resultado: string = `V = ${3.14 * (this.radius ^ 2) * this.height}`;
        // Cores das linhas
        this.red = 0xcc0000;
        this.blue = 0x4683b4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        var squareRoot = new __WEBPACK_IMPORTED_MODULE_5__shared_fixtures_squareRoot__["a" /* SquareRoot */](Math.pow(this.height, 2) + Math.pow(this.radiusLarger, 2), 1);
        squareRoot.factoringRoot();
        _a = squareRoot.getTuple(), this.outsideRoot = _a[0], this.insideRoot = _a[1];
        var fraction = new __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_fraction__["a" /* default */](this.height, 3);
        _b = fraction.factoredArray(), this.topFraction = _b[0], this.bottomFraction = _b[1];
        var partialResult = this.height *
            (Math.pow(this.radiusLarger, 2) +
                this.radiusLarger * this.radiusSmaller +
                Math.pow(this.radiusSmaller, 2));
        var resultFraction = new __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_fraction__["a" /* default */](partialResult, 3);
        _c = resultFraction.factoredArray(), this.topFractionResult = _c[0], this.bottomFractionResult = _c[1];
        this.calculateResultado();
        this.updateGeratriz();
        this.calculateResultAreaLateral();
    }
    CnTroncoConeComponent.prototype.makeElements = function () {
        //Tampa de cima
        var geometryCircunference = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusSmaller, 92);
        var materialCircunference = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blueShadow,
            transparent: true,
            opacity: 0.5
        });
        var circunference = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometryCircunference, materialCircunference);
        circunference.position.set(0, this.height / 2 + 0.2, 0);
        circunference.rotateX(-Math.PI / 2);
        this.geoScene.scene.add(circunference);
        // Cone
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blue,
            transparent: true,
            opacity: 0.5
        });
        var cylinderGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radiusSmaller, this.radiusLarger, this.height, 32);
        var cylinder = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](cylinderGeometry, material);
        cylinder.position.y = this.height / 2;
        this.geoScene.scene.add(cylinder);
        // Adicionando ponto central do círculo
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.black
        }));
        centerPoint.position.y = 0.1;
        centerPoint.rotateX(-Math.PI / 2);
        // Adicionando representação da medida do raio Menor
        var radiusGeometrySmaller = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusGeometrySmaller.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.height + 0.5, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radiusSmaller, this.height + 0.5, Math.sin(Math.PI / 4) * this.radiusSmaller));
        var lineSmaller = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusGeometrySmaller, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: this.red,
            linewidth: 2
        }));
        // Adicionando representação da medida do raio Maior
        var radiusGeometryLarger = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusGeometryLarger.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radiusLarger, 0, Math.sin(Math.PI / 4) * this.radiusLarger));
        var lineLarger = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusGeometryLarger, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: "limegreen",
            linewidth: 2
        }));
        // Adicionando label do raio menor da circunferência
        var radiusLabelSmaller = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("r1", 5, "red");
        radiusLabelSmaller.position.x =
            (Math.cos(Math.PI / 4) * this.radiusSmaller) / 2;
        radiusLabelSmaller.position.y = this.height + 3;
        radiusLabelSmaller.position.z =
            (Math.sin(Math.PI / 4) * this.radiusSmaller) / 2;
        // Adicionando label do raio maior da circunferência
        var radiusLabelLarger = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("r2", 5, "limegreen");
        radiusLabelLarger.position.x =
            (Math.cos(Math.PI / 4) * this.radiusLarger) / 2;
        radiusLabelLarger.position.y = 2;
        radiusLabelLarger.position.z =
            (Math.sin(Math.PI / 4) * this.radiusLarger) / 2;
        radiusLabelLarger.material.depthTest = false;
        // Gerando a base superior do cone
        var cylinderBaseTopGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radiusSmaller, this.radiusSmaller, 0.01, 92);
        var cylinderBaseTopMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blueShadow
        });
        var cylinderBaseTop = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](cylinderBaseTopGeometry, cylinderBaseTopMaterial);
        cylinderBaseTop.position.set(0, this.height, 0);
        // Gerando a base inferior do cone
        var cylinderBaseBottomGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radiusLarger, this.radiusLarger, -0.01, 92);
        var cylinderBaseBottomMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blueShadow
        });
        var cylinderBaseBottom = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](cylinderBaseBottomGeometry, cylinderBaseBottomMaterial);
        cylinderBaseBottom.position.set(0, 0, 0);
        this.geoScene.scene.add(lineSmaller, lineLarger, centerPoint, radiusLabelLarger, radiusLabelSmaller, cylinderBaseTop, cylinderBaseBottom);
        this.geoScene.render();
    };
    CnTroncoConeComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
        this.geratriz = Math.sqrt(Math.pow(this.radiusLarger, 2) + Math.pow(this.height, 2));
        this.geratriz = Number.isInteger(this.geratriz)
            ? this.geratriz
            : parseFloat(this.geratriz.toFixed(2));
    };
    CnTroncoConeComponent.prototype.alterCylinder = function () {
        var _a, _b, _c;
        var _this = this;
        var squareRoot = new __WEBPACK_IMPORTED_MODULE_5__shared_fixtures_squareRoot__["a" /* SquareRoot */](Math.pow(this.height, 2) + Math.pow(this.radiusLarger, 2), 1);
        squareRoot.factoringRoot();
        _a = squareRoot.getTuple(), this.outsideRoot = _a[0], this.insideRoot = _a[1];
        var fraction = new __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_fraction__["a" /* default */](this.height, 3);
        _b = fraction.factoredArray(), this.topFraction = _b[0], this.bottomFraction = _b[1];
        var partialResult = this.height *
            (Math.pow(this.radiusLarger, 2) +
                this.radiusLarger * this.radiusSmaller +
                Math.pow(this.radiusSmaller, 2));
        var resultFraction = new __WEBPACK_IMPORTED_MODULE_4__shared_fixtures_fraction__["a" /* default */](partialResult, 3);
        _c = resultFraction.factoredArray(), this.topFractionResult = _c[0], this.bottomFractionResult = _c[1];
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
        // Gera os elementos da cena com os novos valores
        this.makeElements();
        this.calculateResultado();
        this.updateGeratriz();
        this.calculateResultAreaLateral();
    };
    CnTroncoConeComponent.prototype.changeRadiusSmaller = function () {
        if (this.radiusSmaller >= 3 && this.radiusSmaller <= 15) {
            this.alterCylinder();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CnTroncoConeComponent.prototype.changeRadiusLarger = function () {
        if (this.radiusLarger >= 16 && this.radiusLarger <= 50) {
            this.alterCylinder();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CnTroncoConeComponent.prototype.changeHeight = function () {
        if (this.height >= 10 && this.height <= 50) {
            this.alterCylinder();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CnTroncoConeComponent.prototype.calculateResultado = function () {
        this.result =
            (this.height / 3) *
                (Math.pow(this.radiusLarger, 2) +
                    this.radiusLarger * this.radiusSmaller +
                    Math.pow(this.radiusSmaller, 2));
        this.result = Number.isInteger(this.result)
            ? this.result
            : parseFloat(this.result.toFixed(2));
        this.volumeApprox = !Number.isInteger(this.result)
            ? true
            : false;
    };
    CnTroncoConeComponent.prototype.updateGeratriz = function () {
        this.geratriz = Math.sqrt(Math.pow(this.radiusLarger, 2) + Math.pow(this.height, 2));
        this.geratriz = Number.isInteger(this.geratriz)
            ? this.geratriz
            : parseFloat(this.geratriz.toFixed(2));
        this.isApprox = !Number.isInteger(this.geratriz)
            ? true
            : false;
    };
    CnTroncoConeComponent.prototype.calculateResultAreaLateral = function () {
        this.resultAreaLateral =
            (this.radiusLarger + this.radiusSmaller) * this.geratriz;
        this.resultAreaLateral = Number.isInteger(this.resultAreaLateral)
            ? this.resultAreaLateral
            : parseFloat(this.resultAreaLateral.toFixed(2));
        this.areaLateralApprox = !Number.isInteger(this.resultAreaLateral)
            ? true
            : false;
    };
    CnTroncoConeComponent.prototype.changeEqRe = function () {
        // this.equacao = `V = \\pi \\cdot \\color{red}{${this.radius}}^2 \\cdot \\color{red}{${this.height}}`;
        // this.resultado = `V = ${(Math.PI * (this.radius ^ 2) * this.height).toFixed(2)}`;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CnTroncoConeComponent.prototype, "geoScene", void 0);
    CnTroncoConeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-cn-tronco-cone",
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-tronco-cone/cn-tronco-cone.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-tronco-cone/cn-tronco-cone.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnTroncoConeComponent);
    return CnTroncoConeComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-view/cn-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n  <cn-sidebar class=\"slidebar\"></cn-sidebar>\r\n  <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-view/cn-view.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-view/cn-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnViewComponent; });
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

var CnViewComponent = /** @class */ (function () {
    function CnViewComponent() {
    }
    CnViewComponent.prototype.ngOnInit = function () {
    };
    CnViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cn-view',
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-view/cn-view.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-view/cn-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnViewComponent);
    return CnViewComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-volume/cn-volume.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <div class=\"btn-container mt-2 row\">\r\n    <div class=\" col-12 text-center\">\r\n      <h3 class=\"text-center\">Volume</h3>\r\n    </div>\r\n    <h5 class=\"mt-2 col-12 text-center\">Entre com a medida do raio(r) e da altura(h)</h5>\r\n  </div>\r\n\r\n  <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <div class=\"mt-4\">\r\n      <p class=\"text-center\">\r\n        Raio(<ng-katex equation=\"\\color{blue}{r} \\color{black}{ \\ = \\overline{OA} }\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeCone()\" max=\"50\" min=\"5\" />\r\n        Altura(<ng-katex equation=\"\\color{red}{h}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeCone()\" max=\"50\" min=\"5\" />\r\n      </p>\r\n      <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n        O raio deve ser um valor inteiro contido entre <b>5</b> e <b>50</b>. <br>\r\n        A altura deve ser um valor inteiro contido entre <b>5</b> e <b>50</b>.\r\n      </div>\r\n    </div>\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades</h3>\r\n    <p>Pelo princípio de Cavalieri, o volume de um cone é igual a <ng-katex equation=\"\\frac{1}{3}\"></ng-katex> do volume\r\n      de um cilindro, ou seja:</p>\r\n\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao-fracao \"\r\n        equation=\"\\textcolor{black}{V = \\frac{\\pi \\cdot \\textcolor{blue}{r}^2 \\cdot \\textcolor{red}{h}}{3}}\">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cone/cn-areas/area-total-cone.svg\">\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\"\r\n              aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n              <p *ngIf=\"isApprox else elseResult\" class=\"mb-0\">\r\n                Cálculo\r\n                <ng-katex class=\"explicacao\" equation=\"\\approx {{ result }} \\pi \\ u.a \"></ng-katex>\r\n              </p>\r\n              <ng-template #elseResult>\r\n                Cálculo\r\n                <ng-katex class=\"explicacao\" equation=\" = {{ result }} \\pi \\ u.a \"></ng-katex>\r\n              </ng-template>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapsePrincipal\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapsePrincipal\" class=\"collapse\" aria-labelledby=\"headingPrincipal\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao-fracao \"\r\n                          equation=\"\\textcolor{black}{V = \\frac{\\pi \\cdot \\textcolor{blue}{r}^2 \\cdot \\textcolor{red}{h}}{3}}\">\r\n                        </ng-katex>\r\n\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseVolume\"></i>\r\n\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Utilizando a fórmula para o cálculo do volume de um cone temos as seguintes variáveis:\r\n                    <ul>\r\n                      <li>\r\n                        <ng-katex equation=\"\\textcolor{blue}{r}\"></ng-katex> = Raio\r\n                      </li>\r\n                      <li>\r\n                        <ng-katex equation=\"\\textcolor{red}{h}\"></ng-katex> = Altura\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao-fracao\"\r\n                          equation=\"\\textcolor{black}{V = \\frac{\\pi \\cdot \\textcolor{blue}{ {{ radius }} }^2 \\cdot \\textcolor{red}{ {{ height }} }}{3}}\">\r\n                        </ng-katex>\r\n\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseVolume\"></i>\r\n\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituimos os valores do <ng-katex equation=\"\\textcolor{blue}{r}\"></ng-katex> por\r\n                    <ng-katex equation=\"\\textcolor{blue}{ {{radius}} }\"></ng-katex>\r\n                    e do <ng-katex equation=\"\\textcolor{red}{h}\"></ng-katex> por <ng-katex\r\n                      equation=\"\\textcolor{red}{ {{height}} }\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao-fracao\"\r\n                          equation=\"\\textcolor{black}{V = \\frac{\\pi \\cdot \\textcolor{blue}{ {{ radius * radius }} } \\cdot \\textcolor{red}{ {{ height }} } }{3}}\">\r\n                        </ng-katex>\r\n\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseVolume\"></i>\r\n\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Elevando o <ng-katex equation=\"\\textcolor{blue}{ {{radius}} }\"></ng-katex> ao quadradro obtemos:\r\n                    <ng-katex equation=\"\\textcolor{blue}{ {{radius * radius}} }\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Passo 4-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao-fracao\"\r\n                          equation=\"\\textcolor{black}{ V = \\frac{ \\textcolor{red}{ {{ (radius * radius) * height }} } \\cdot \\pi }{3} }\">\r\n                        </ng-katex>\r\n\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseVolume\"></i>\r\n\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Multiplicamos os valores da altura (<ng-katex equation=\"\\textcolor{red}{ {{height}} }\"></ng-katex>\r\n                    ) e\r\n                    raio ao quadrado (<ng-katex equation=\"\\textcolor{blue}{ {{radius * radius}} }\"></ng-katex>) obtendo:\r\n                    <ng-katex equation=\"\\textcolor{red}{ {{radius * radius * height}} }\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Passo 5-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                      <p *ngIf=\"isApprox; else elseBlock\">\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ V \\approx \\textcolor{red}{ {{ result }} } \\pi \\ u.a }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseVolume\"></i>\r\n                      </p>\r\n                      <ng-template #elseBlock>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ V = \\textcolor{red}{ {{ result }} } \\pi \\ u.a }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseVolume\"></i>\r\n                      </ng-template>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Simplificamos a fração por 3 obtendo: <ng-katex equation=\"\\textcolor{red}{ {{result}} }\">\r\n                    </ng-katex> como resultado final em unidades de área.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-volume/cn-volume.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cone/components/cn-volume/cn-volume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnVolumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CnVolumeComponent = /** @class */ (function () {
    function CnVolumeComponent() {
        this.radius = 20; // Valor do raio da base do cone
        this.height = 40; // Valor da altura do cone
        this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        this.equation = "g = " + this.geratriz + " u.c.";
        this.isApprox = false;
        this.result = (Math.pow(this.radius, 2) * this.height) / 3;
        this.errorInput = false;
        // Cores
        this.blue = 0x4683b4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
    }
    /**
     * @description Função para gerar os elementos da cena
     */
    CnVolumeComponent.prototype.makeElements = function () {
        // Criação da geometria do cone
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["ConeGeometry"](this.radius, this.height, 92);
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blueShadow,
            transparent: true,
            opacity: 0.5
        });
        var cone = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometry, material);
        cone.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.height / 2, 0));
        // Label para o ponto V
        var vLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("V", 5, "black");
        vLabel.position.y = this.height + 1;
        // Label para o ponto central da base 'O'
        var oLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("O", 5, "black");
        oLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 2, 1));
        // Label para o ponto A
        var aLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("A", 5, "black");
        aLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, 2, Math.sin(Math.PI / 4) * this.radius));
        // Label para o raio da base r
        var rLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("r", 5, "blue");
        rLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((Math.cos(Math.PI / 4) * this.radius) / 2, 2, (Math.sin(Math.PI / 4) * this.radius) / 2));
        rLabel.material.depthTest = false;
        // Label para a altura h
        var hLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("h", 5, "red");
        hLabel.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, this.height / 2, 0));
        hLabel.material.depthTest = false;
        // Reta que representa o raio da base r
        var materialRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black });
        var geometryRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryRadius.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, 0, Math.sin(Math.PI / 4) * this.radius));
        var radius = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryRadius, materialRadius);
        radius.name = "reta-raio";
        // Reta para representar a altura h
        var materialHeight = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black });
        var geometryHeight = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryHeight.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.height, 0));
        var height = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryHeight, materialHeight);
        height.name = "reta-altura";
        height.material.depthTest = false;
        // Geometria para a base do cone
        var baseGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radius, this.radius, -0.01, 92);
        var baseMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blueShadow
        });
        var base = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](baseGeometry, baseMaterial);
        this.geoScene.scene.add(cone, vLabel, oLabel, aLabel, rLabel, radius, base, height, hLabel);
        this.geoScene.render();
    };
    /**
     * @description Função para alterar os elementos e as fórmulas resultantes confome
     * o usuário altera os valores de h (altura) ou r (raio da base) do cone.
     */
    CnVolumeComponent.prototype.changeCone = function () {
        if ((this.height >= 5 && this.height <= 50) &&
            (this.radius >= 5 && this.radius <= 50)) {
            this.errorInput = false;
            this.removeElements();
            this.makeElements();
            // Valor da geratriz utilizado
            this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
            // Equação da geratriz
            this.equation = "g = " + this.geratriz + " u.c.";
            this.calculateResult();
        }
        else {
            this.errorInput = true;
        }
    };
    CnVolumeComponent.prototype.removeElements = function () {
        var _this = this;
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
    };
    CnVolumeComponent.prototype.calculateResult = function () {
        // Calcula o resultado
        this.result = (Math.pow(this.radius, 2) * this.height) / 3;
        // Verifica se há necessidade de arredondamento
        this.result = Number.isInteger(this.result)
            ? this.result
            : parseFloat(this.result.toFixed(2));
        // Verifica se é um valor aproximado
        this.isApprox = !Number.isInteger(this.result) ? true : false;
    };
    CnVolumeComponent.prototype.ngAfterViewInit = function () {
        // Altera a posição da câmera
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
        // Gera o valor para a geratriz
        this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        // Armazena em uma equação Latex
        this.equation = "g = " + this.geratriz + " u.c.";
        // Calcula os resultados iniciais
        this.calculateResult();
        this.geoScene.render();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CnVolumeComponent.prototype, "geoScene", void 0);
    CnVolumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-cn-volume",
            template: __webpack_require__("./src/app/views/geometria/cone/components/cn-volume/cn-volume.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cone/components/cn-volume/cn-volume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CnVolumeComponent);
    return CnVolumeComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/cone.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConeModule", function() { return ConeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cone_routing__ = __webpack_require__("./src/app/views/geometria/cone/cone.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_geo_shared_module__ = __webpack_require__("./src/app/views/geometria/shared/geo-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cn_view_cn_view_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-view/cn-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cn_sidebar_cn_sidebar_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-sidebar/cn-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cn_definicao_cn_definicao_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-definicao/cn-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cn_elementos_cn_elementos_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-elementos/cn-elementos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_cn_areas_cn_areas_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-areas/cn-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_cn_volume_cn_volume_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-volume/cn-volume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cn_tronco_cone_cn_tronco_cone_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-tronco-cone/cn-tronco-cone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cn_area_base_cn_area_base_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-area-base/cn-area-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cn_area_lateral_cn_area_lateral_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-area-lateral/cn-area-lateral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cn_area_total_cn_area_total_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-area-total/cn-area-total.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Componentes










var ConeModule = /** @class */ (function () {
    function ConeModule() {
    }
    ConeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_geo_shared_module__["a" /* GeoSharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__cone_routing__["a" /* ConeRouting */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_cn_view_cn_view_component__["a" /* CnViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_cn_sidebar_cn_sidebar_component__["a" /* CnSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_cn_definicao_cn_definicao_component__["a" /* CnDefinicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_cn_elementos_cn_elementos_component__["a" /* CnElementosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_cn_areas_cn_areas_component__["a" /* CnAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_cn_volume_cn_volume_component__["a" /* CnVolumeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_cn_tronco_cone_cn_tronco_cone_component__["a" /* CnTroncoConeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_cn_area_base_cn_area_base_component__["a" /* CnAreaBaseComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_cn_area_lateral_cn_area_lateral_component__["a" /* CnAreaLateralComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cn_area_total_cn_area_total_component__["a" /* CnAreaTotalComponent */]
            ]
        })
    ], ConeModule);
    return ConeModule;
}());



/***/ }),

/***/ "./src/app/views/geometria/cone/cone.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConeRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cn_view_cn_view_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-view/cn-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cn_definicao_cn_definicao_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-definicao/cn-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cn_elementos_cn_elementos_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-elementos/cn-elementos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cn_areas_cn_areas_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-areas/cn-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cn_volume_cn_volume_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-volume/cn-volume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cn_tronco_cone_cn_tronco_cone_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-tronco-cone/cn-tronco-cone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cn_area_base_cn_area_base_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-area-base/cn-area-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cn_area_lateral_cn_area_lateral_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-area-lateral/cn-area-lateral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cn_area_total_cn_area_total_component__ = __webpack_require__("./src/app/views/geometria/cone/components/cn-area-total/cn-area-total.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Componentes









var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_cn_view_cn_view_component__["a" /* CnViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'cn_definicao',
                pathMatch: 'full',
            },
            {
                path: 'cn_definicao',
                component: __WEBPACK_IMPORTED_MODULE_3__components_cn_definicao_cn_definicao_component__["a" /* CnDefinicaoComponent */]
            },
            {
                path: 'cn_elementos',
                component: __WEBPACK_IMPORTED_MODULE_4__components_cn_elementos_cn_elementos_component__["a" /* CnElementosComponent */]
            },
            {
                path: 'cn_areas',
                component: __WEBPACK_IMPORTED_MODULE_5__components_cn_areas_cn_areas_component__["a" /* CnAreasComponent */]
            },
            {
                path: 'cn_volume',
                component: __WEBPACK_IMPORTED_MODULE_6__components_cn_volume_cn_volume_component__["a" /* CnVolumeComponent */]
            },
            {
                path: 'cn_tronco_cone',
                component: __WEBPACK_IMPORTED_MODULE_7__components_cn_tronco_cone_cn_tronco_cone_component__["a" /* CnTroncoConeComponent */]
            },
            {
                path: 'cn_area_base',
                component: __WEBPACK_IMPORTED_MODULE_8__components_cn_area_base_cn_area_base_component__["a" /* CnAreaBaseComponent */]
            },
            {
                path: 'cn_area_lateral',
                component: __WEBPACK_IMPORTED_MODULE_9__components_cn_area_lateral_cn_area_lateral_component__["a" /* CnAreaLateralComponent */]
            },
            {
                path: 'cn_area_total',
                component: __WEBPACK_IMPORTED_MODULE_10__components_cn_area_total_cn_area_total_component__["a" /* CnAreaTotalComponent */]
            },
        ]
    }];
var ConeRouting = /** @class */ (function () {
    function ConeRouting() {
    }
    ConeRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */]]
        })
    ], ConeRouting);
    return ConeRouting;
}());



/***/ }),

/***/ "./src/app/views/geometria/shared/fixtures/squareRoot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquareRoot; });
var SquareRoot = /** @class */ (function () {
    function SquareRoot(a, b) {
        if (b === void 0) { b = 1; }
        this.insideRoot = a;
        this.outsideRoot = b;
    }
    SquareRoot.prototype.factoringRoot = function () {
        var d = 2;
        while (Math.pow(d, 2) <= this.insideRoot) {
            if ((this.insideRoot % (Math.pow(d, 2))) == 0) {
                this.insideRoot = this.insideRoot / Math.pow(d, 2);
                this.outsideRoot = this.outsideRoot * d;
            }
            else {
                d++;
            }
        }
    };
    SquareRoot.prototype.getOutsideRoot = function () {
        return this.outsideRoot;
    };
    SquareRoot.prototype.getInsideRoot = function () {
        return this.insideRoot;
    };
    SquareRoot.prototype.getTuple = function () {
        return [this.outsideRoot, this.insideRoot];
    };
    return SquareRoot;
}());



/***/ })

});
//# sourceMappingURL=cone.module.chunk.js.map