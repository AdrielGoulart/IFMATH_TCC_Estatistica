webpackJsonp(["esfera.module"],{

/***/ "./src/app/views/geometria/esfera/components/es-area-volume/es-area-volume.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"info\">\r\n\r\n  <div class=\"row mt-4\">\r\n    <h3 class=\"col-12 text-center\">Área e Volume</h3>\r\n    <!-- Botões de navegação -->\r\n    <div class=\"col-12 btn-container mt-2 row\">\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a propriedade que deseja calcular referente a esfera</h5>\r\n      <div class=\"row col-12\">\r\n        <geo-btn class=\"mx-auto\" *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\"\r\n          [route]=\"button.route\"></geo-btn>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Breve explicação -->\r\n    <div class=\"content-container col-12 row px-0 d-flex align-items-center justify-content-center\">\r\n      <div class=\"row col-12 mt-5\">\r\n        <div class=\"col-lg-6 col-12 text-center\">\r\n          <h5 class=\"text-center\">Área da esfera</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/area-volume/area-esfera.svg\">\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 text-center\">\r\n          <h5 class=\"text-center mb-0\">Volume da esfera</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/area-volume/volume-esfera.svg\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-area-volume/es-area-volume.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 60vh !important; }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-area-volume/es-area-volume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsAreaVolumeComponent; });
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

var EsAreaVolumeComponent = /** @class */ (function () {
    function EsAreaVolumeComponent() {
        this.buttons = [
            { title: "Área da esfera", route: "es_area" },
            { title: "Volume da esfera", route: "es_volume" }
        ];
    }
    EsAreaVolumeComponent.prototype.ngOnInit = function () {
    };
    EsAreaVolumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-es-area-volume',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-area-volume/es-area-volume.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-area-volume/es-area-volume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsAreaVolumeComponent);
    return EsAreaVolumeComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-area/es-area.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <div class=\"btn-container row \">\r\n    <h3 class=\"col-12 text-center\">Área da esfera</h3>\r\n  </div>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a propriedade que deseja calcular referente a esfera</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- Conteúdo -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <!-- Inputs -->\r\n    <p class=\"mt-4 col-12 text-center\">Entre com a medida do raio(<ng-katex equation=\"\\color{red}r\"></ng-katex>):\r\n      <!-- Campos de entrada -->\r\n      <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n        oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadius()\" max=\"50\" min=\"5\" />\r\n    </p>\r\n    <div [className]=\"errorInput === true ? 'mt-1 alert alert-danger mx-auto' : 'mt-1 alert alert-primary mx-auto'\" role=\"alert\">\r\n      O raio deve ser um valor inteiro contido entre <b>5</b> e <b>50</b>.\r\n    </div>\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 img-fluid order-md-2 order-1\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades:</h3>\r\n    <p>\r\n      É a medida da superfície de uma esfera.\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\" equation=\"A = 4 \\cdot \\pi \\cdot \\color{red}{r}\\color{black}{^2}\"></ng-katex>\r\n    </p>\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/area-volume/area-esfera.svg\">\r\n    </div>\r\n    <br />\r\n    <hr />\r\n\r\n    <!-- Accordion -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n\r\n      <!-- Exemplo -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"heading\" data-toggle=\"collapse\" data-target=\"#collapse\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse\"\r\n              aria-expanded=\"true\" aria-controls=\"collapse\">\r\n              Cálculo = <ng-katex class=\"explicacao\" equation=\"{{ 4 * radius * radius }} \\pi \\ u.a.\">\r\n              </ng-katex>\r\n            </button>\r\n            <!-- ícone -->\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-3\" data-toggle=\"collapse\" data-target=\"#collapse\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapse\" class=\"collapse\" aria-labelledby=\"heading\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"pl-0 pr-0 col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#one\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A = 4 \\cdot \\pi \\cdot \\color{red}{r}\\color{black}{^2}}\">\r\n                            </ng-katex>\r\n\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"one\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para calcular a área da esfera.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ r }\"></ng-katex> = raio\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 2  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#two\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A = 4 \\cdot \\pi \\cdot \\color{red}{ {{radius}} } \\color{black}{ ^2 }}\">\r\n                            </ng-katex>\r\n\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"two\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substitui os valores na fórmulas, eleva o raio(<ng-katex\r\n                          equation=\"\\textcolor{red}{ {{radius}} }\">\r\n                        </ng-katex>) ao quadrado e multiplica por 4.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!-- Passo 3  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#three\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A = {{ 4 * (radius*radius)}}  \\color{black}{ \\pi \\ u.a. }}\">\r\n                            </ng-katex>\r\n\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"three\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final em unidades de área(u.a).\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End exemplo -->\r\n\r\n    </div>\r\n    <!-- end accordion -->\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-area/es-area.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-area/es-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
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




var EsAreaComponent = /** @class */ (function () {
    function EsAreaComponent() {
        this.buttons = [
            { title: "Área da esfera", route: "es_area" },
            { title: "Volume da esfera", route: "es_volume" }
        ];
        this.radius = 40;
        this.PI = Math.PI;
        this.errorInput = false;
        // Cores das linhas
        this.red = 0xCC0000;
        this.blue = 0x4683B4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
    }
    EsAreaComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    EsAreaComponent.prototype.makeElements = function () {
        // ---------------- Esfera ----------------
        // Esfera
        var geometrySphere = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](this.radius, 90, 90);
        var materialSphere = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blue, transparent: true, opacity: 0.5 });
        var sphere = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometrySphere, materialSphere);
        // Ponto do centro da esfera
        var geometryCenterPoint = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](.5, 90, 90);
        var materialCenterPoint = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.black });
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCenterPoint, materialCenterPoint);
        // Label do ponto central
        // TODO: consertar o bug de transparencia do label da origem da esfera
        var labelCenterPoint = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("O", 2, 'black');
        labelCenterPoint.position.set(-1.5, 1.5, -1); // posição da label
        // Linha do raio
        var radiusGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        radiusGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, Math.sin(Math.PI / 4) * this.radius, 0));
        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](radiusGeometry, new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }));
        // Ponto final da linha do raio
        var pointFinalRadius = centerPoint.clone();
        pointFinalRadius.position.set(Math.cos(Math.PI / 4) * this.radius, Math.sin(Math.PI / 4) * this.radius, 0);
        // Label do ponto final do raio
        var labelFinalRadius = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("A", 2, 'black');
        labelFinalRadius.position.set(Math.cos(Math.PI / 4) * this.radius + 1, Math.cos(Math.PI / 4) * this.radius + 1, -1 // posição da label
        );
        // ---------------- Adicionando na cena ----------------
        this.geoScene.scene.add(
        // --- Esfera ---
        labelCenterPoint, sphere, centerPoint, line, pointFinalRadius, labelFinalRadius);
        this.geoScene.render();
    };
    EsAreaComponent.prototype.changeRadius = function () {
        if (this.radius >= 5 && this.radius <= 50) {
            this.alterSphere();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    EsAreaComponent.prototype.alterSphere = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], EsAreaComponent.prototype, "geoScene", void 0);
    EsAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-es-area',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-area/es-area.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-area/es-area.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsAreaComponent);
    return EsAreaComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-calota/es-calota.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <div class=\"btn-container row\">\r\n    <h3 class=\"col-12 text-center\">Calota da esfera</h3>\r\n  </div>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a propriedade que deseja calcular referente a esfera</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <!-- Conteudo -->\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <!-- Inputs -->\r\n    <div class=\"mt-4\">\r\n      <p>\r\n        Entre com a medida do\r\n        raio da esfera(<ng-katex equation=\"\\color{blue}{ r }\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadius()\" max=\"32\" min=\"5\" />\r\n        e altura(<ng-katex equation=\"\\color{red}{ h }\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeHeight()\" max=\"60\" min=\"1\" />\r\n      </p>\r\n    </div>\r\n    <div\r\n      [className]=\"errorInput === true ? 'mt-1 alert alert-danger text-center' : 'mt-1 alert alert-primary text-center'\"\r\n      role=\"alert\">\r\n      O raio deve ser um valor inteiro contido entre <b>5</b> e <b>50</b>. <br>\r\n      A altura deve ser um valor inteiro contido entre <b>1</b> e <b>{{radius * 2}}</b>.\r\n    </div>\r\n\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades:</h3>\r\n    <p class=\"mb-0\">\r\n      Uma secção sempre gera uma calota, se a altura for igual ao raio temos uma semiesfera.\r\n    </p>\r\n\r\n    <!-- Fórmula da área da calota -->\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\color{black}{ A_{calota} = {2} \\pi \\cdot \\color{blue}{r} \\color{black}{ \\cdot \\color{red}{h}  }}\">\r\n      </ng-katex>\r\n    </p>\r\n    <!-- Fórmula do volume da colta -->\r\n    <p class=\"text-center mb-0\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\color{black}{ V_{calota} = \\frac{1}{3} \\cdot \\pi \\cdot \\color{red}{h} \\color{black}{^2 (3 \\cdot }\\color{blue}{r} \\color{black}{-} \\color{red}{h} \\color{black}{)} }\">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/calota-esfera-detalhada.png\">\r\n    </div>\r\n\r\n    <hr class=\"mt-0\" />\r\n\r\n    <!-- Accordion -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <!-- Área da calota -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingGeratriz\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseGeratriz\">\r\n              Área da calota <ng-katex class=\"explicacao\" equation=\" = {{ (radius * height) * 2 }}  \\pi \\ u.a.\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-3\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseGeratriz\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseGeratriz\" class=\"collapse\" aria-labelledby=\"headingGeratriz\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ A_{calota} = {2} \\pi \\cdot \\color{blue}{r} \\color{black}{ \\cdot \\color{red}{h}  }}\">\r\n                            </ng-katex>\r\n\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da área da calota.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ r }\"></ng-katex> = raio\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ h }\"></ng-katex> = altura\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ A_{calota} = {2} \\pi \\cdot \\color{blue}{ {{ radius }} } \\color{black}{ \\cdot } \\color{red}{ {{ height }} } }\">\r\n                            </ng-katex>\r\n\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Aplicando os valores na fórmula, onde o raio é <ng-katex\r\n                          equation=\"\\color{blue}{ {{ radius }} }\"></ng-katex> e a altura <ng-katex\r\n                          equation=\"\\color{red}{ {{ height }} }\"></ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ A_{calota} = {{ (radius * height) * 2 }}  \\color{black}{ \\pi \\ u.a.} }\">\r\n                            </ng-katex>\r\n\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Multiplicamos o raio (<ng-katex equation=\"\\color{blue}{ {{radius}} }\"></ng-katex>) pela (\r\n                        <ng-katex equation=\"\\color{red}{ {{height}} }\"></ng-katex>) e por último multiplicamos por 2\r\n                        dando o resultado final.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end área da calota -->\r\n\r\n      <!-- Volume da calota -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n              <p *ngIf=\"isApprox else elseVolResult\" class=\"mb-0\">\r\n                Volume da calota\r\n                <ng-katex class=\"explicacao\"\r\n                  equation=\"\\approx {{ (1/3 * height * height * ( 3 * radius - height )).toFixed(2) }} \\pi \\ u.v.\">\r\n                </ng-katex>\r\n              </p>\r\n              <ng-template #elseVolResult>\r\n                Volume da calota =\r\n                <ng-katex class=\"explicacao\"\r\n                  equation=\"{{ 1/3 * height * height * ( 3 * radius - height ) }} \\pi \\ u.v.\">\r\n                </ng-katex>\r\n              </ng-template>\r\n\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-3\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseTwo\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <br>\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\color{black}{ V = \\frac{1}{3} \\cdot \\pi \\cdot \\color{red}{h} \\color{black}{^2 (3 \\cdot }\\color{blue}{r} \\color{black}{-} \\color{red}{h} \\color{black}{)} }\">\r\n                      </ng-katex>\r\n\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseGeratriz\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para calcular o volume da calota.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ r }\"></ng-katex> = raio\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ h }\"></ng-katex> = altura\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{V = \\frac{1}{3} \\cdot \\pi \\cdot \\color{red}{ {{ height }} } \\color{black}{ ^2 (3 \\cdot } \\color{blue}{ {{ radius }} } \\color{black}{ - }  \\color{red}{ {{ height }} } \\color{black}{ ) }}\">\r\n                      </ng-katex>\r\n\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseGeratriz\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Multiplica o raio(<ng-katex equation=\"\\textcolor{blue}{ {{radius}} }\"></ng-katex>) por 3 e subtrai\r\n                  pela altura(<ng-katex equation=\"\\textcolor{red}{ {{height}} }\"></ng-katex>). Multiplica o resultado\r\n                  pela altura(<ng-katex equation=\"\\textcolor{red}{ {{height}} }\"></ng-katex>) ao quadrado e por\r\n                  <ng-katex equation=\"\\textcolor{black}{ \\frac{1}{3} }\"></ng-katex>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEight\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\color{black}{V =  {{ 1/3 * height * height * ( 3 * radius - height ) }} } \\color{black}{ \\pi \\ u.v.}\">\r\n                      </ng-katex>\r\n\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseGeratriz\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapseEight\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final.\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- end accordion -->\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-calota/es-calota.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-calota/es-calota.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsCalotaComponent; });
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




var EsCalotaComponent = /** @class */ (function () {
    function EsCalotaComponent() {
        this.buttons = [
            { title: "Cunha esférica", route: "es_cunha_esferica" },
            { title: "Fuso esférico", route: "es_fuso_esferico" },
            { title: "Calota", route: "es_calota" }
        ];
        this.radius = 30;
        this.height = 5;
        this.errorInput = false;
        // Cores
        this.red = 0xcc0000;
        this.blue = 0x4683b4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        var volResult = 1 / 3 * Math.PI * Math.pow(this.height, 2) * (3 * this.radius - this.height);
        this.isApprox = (Number.isInteger(volResult)) ? false : true;
    }
    EsCalotaComponent.prototype.ngOnInit = function () { };
    EsCalotaComponent.prototype.makeElements = function () {
        var radialSegments = 92;
        // -------------------------- Esfera --------------------------------
        // Esfera
        var materialSphere = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blue,
            transparent: true,
            opacity: 0.5,
            side: __WEBPACK_IMPORTED_MODULE_2_three__["FrontSide"]
        });
        var geomSphere = new __WEBPACK_IMPORTED_MODULE_2_three__["SphereGeometry"](this.radius, 90, 90);
        var sphere = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geomSphere, materialSphere);
        // Ponto do centro do raio da esfera
        var materialRadiusPointCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshStandardMaterial"]({
            emissive: this.black,
            side: __WEBPACK_IMPORTED_MODULE_2_three__["DoubleSide"]
        });
        var geomRadiusPointCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["SphereBufferGeometry"](this.radius / 20, //radius
        radialSegments, //widthSegments
        Math.round(radialSegments / 4), // heightSegments
        0, // phiStart
        Math.PI * 2, // phiLength
        0, // thetaStart
        4 // thetaLength
        );
        var pointCenterRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geomRadiusPointCenter, materialRadiusPointCenter);
        // Linha do raio da esfera
        var radiusGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), // Ponto inicial
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, Math.sin(Math.PI / 4) * this.radius, 0) // Ponto final
        );
        var lineRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }));
        // Ponto final da linha do raio da esfera
        var pointFinalRadius = pointCenterRadius.clone();
        pointFinalRadius.position.set(Math.cos(Math.PI / 4) * this.radius, Math.sin(Math.PI / 4) * this.radius, 0);
        // Label do raio da esfera
        // TODO: consertar o bug de transparencia do label da origem da esfera
        var labelRadiusSphere = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("R = " + this.radius, 2.5, "black");
        labelRadiusSphere.position.set(Math.cos(Math.PI / 3.5) * this.radius, //x
        Math.sin(Math.PI / 10) * this.radius, //y
        0 //z
        );
        // -------------------------- Calota --------------------------------
        // Calota
        var materialCalotte = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshStandardMaterial"]({
            //transparent: true,
            opacity: 0.5,
            emissive: this.blueShadow,
            side: __WEBPACK_IMPORTED_MODULE_2_three__["DoubleSide"]
        });
        var geomCalotte = new __WEBPACK_IMPORTED_MODULE_2_three__["SphereBufferGeometry"](this.radius + 0.05, // radius
        radialSegments, // widthSegments
        Math.round(radialSegments / 4), // heightSegments
        0, // phiStart
        Math.PI * 2, // phiLength
        0, // thetaStart
        (this.height * Math.PI) / (2 * this.radius) // thetaLength
        );
        var calotte = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geomCalotte, materialCalotte);
        // Ponto do centro do raio da calota
        var materialPointCalotte = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshStandardMaterial"]({
            emissive: this.red,
            side: __WEBPACK_IMPORTED_MODULE_2_three__["DoubleSide"]
        });
        var pointCalotaGeom = new __WEBPACK_IMPORTED_MODULE_2_three__["SphereBufferGeometry"](this.radius / 20, // radius
        radialSegments, // widthSegments
        Math.round(radialSegments / 4), // heightSegments
        0, // phiStart
        Math.PI * 2, // phiLength
        0, // thetaStart
        4 // thetaLength
        );
        var pointCenterCalotte = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](pointCalotaGeom, materialPointCalotte);
        pointCenterCalotte.position.set(0, // x
        Math.cos((this.height * Math.PI) / (2 * this.radius)) * this.radius, // y
        0 // z
        );
        // Linha do raio da calota
        var radiusCalotteGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusCalotteGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](// Inicio da linha
        0, // x
        Math.cos((this.height * Math.PI) / (2 * this.radius)) * this.radius, // y
        0), // z
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](// final da linha
        -Math.sin((this.height * Math.PI) / (2 * this.radius)) * this.radius, // x
        Math.cos((this.height * Math.PI) / (2 * this.radius)) * this.radius, // y
        0) // z
        );
        var lineRadiusCalotte = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusCalotteGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: this.red,
            linewidth: 2
        }));
        // Ponto final da linha do raio da calota
        var pointFinalCalotte = pointCenterCalotte.clone();
        pointFinalCalotte.position.set(-Math.sin((this.height * Math.PI) / (2 * this.radius)) * this.radius, // x
        Math.cos((this.height * Math.PI) / (2 * this.radius)) * this.radius, // y
        0 // z
        );
        // Label do raio da calota
        // TODO: consertar o bug de transparencia do label
        var labelRadiusCalotte = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("r = " + (Math.sin((this.height * Math.PI) / this.radius) * this.radius).toFixed(2), 2.5, "red");
        labelRadiusCalotte.position.set(-(Math.sin((this.height * Math.PI) / this.radius) * this.radius) / 2, // x
        Math.cos((this.height * Math.PI) / this.radius) * this.radius - 2, // y
        0 // z
        );
        // ---------------- Adicionando na cena ----------------
        this.geoScene.scene.add(
        // Esfera
        sphere, pointCenterRadius, lineRadius, pointFinalRadius, labelRadiusSphere, 
        // Calota
        calotte, pointCenterCalotte, lineRadiusCalotte, pointFinalCalotte, labelRadiusCalotte);
        this.geoScene.render();
    };
    EsCalotaComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    EsCalotaComponent.prototype.changeRadius = function () {
        var _this = this;
        var volResult = 1 / 3 * Math.PI * Math.pow(this.height, 2) * (3 * this.radius - this.height);
        this.isApprox = (Number.isInteger(volResult)) ? false : true;
        if (this.radius >= 5 && this.radius <= 50) {
            var sizeGeoChildren = this.geoScene.scene.children.length;
            var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
            componentsToDelete.forEach(function (element) {
                _this.geoScene.scene.remove(element);
            });
            this.makeElements();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    EsCalotaComponent.prototype.changeHeight = function () {
        var _this = this;
        var volResult = 1 / 3 * Math.PI * Math.pow(this.height, 2) * (3 * this.radius - this.height);
        this.isApprox = (Number.isInteger(volResult)) ? false : true;
        if (this.height >= 1 && this.height <= this.radius * 2) {
            var sizeGeoChildren = this.geoScene.scene.children.length;
            var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
            componentsToDelete.forEach(function (element) {
                _this.geoScene.scene.remove(element);
            });
            this.makeElements();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], EsCalotaComponent.prototype, "geoScene", void 0);
    EsCalotaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-es-calota",
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-calota/es-calota.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-calota/es-calota.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsCalotaComponent);
    return EsCalotaComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-cunha-esferica/es-cunha-esferica.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <div class=\"btn-container row\">\r\n    <h3 class=\"col-12 text-center\">Cunha esférica</h3>\r\n  </div>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a propriedade que deseja calcular referente a esfera</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <!-- Conteudo -->\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <!-- Inputs -->\r\n    <div class=\"mt-4\">\r\n      <p class=\"text-center\">\r\n        Entre com a medida do\r\n        Raio(<ng-katex equation=\"\\color{blue}{ r }\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadius()\" max=\"50\" min=\"5\" />\r\n        e Ângulo em graus (<ng-katex equation=\"\\color{red}{ \\alpha }\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angle\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeAngle()\" max=\"360\" min=\"1\" />\r\n      </p>\r\n    </div>\r\n\r\n    <div\r\n      [className]=\"errorInput === true ? 'mt-1 alert alert-danger text-center' : 'mt-1 alert alert-primary text-center'\"\r\n      role=\"alert\">\r\n      O raio deve ser um valor inteiro contido entre <b>5</b> e <b>50</b>. <br>\r\n      Ângulo em graus deve ser um valor inteiro contido entre <b>1</b> e <b>360</b>.\r\n    </div>\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades:</h3>\r\n    <p>\r\n      O volume da cunha esférica depende do ângulo <ng-katex equation=\"\\alpha\"></ng-katex>, caso <ng-katex\r\n        equation=\"\\alpha = 360\\degree\"></ng-katex> teremos a esfera toda.\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\color{black}{V_{cunha} = \\frac{\\pi \\cdot \\color{blue}{r}\\color{black}{^3 \\cdot} \\color{red}{\\alpha}}{270 \\degree}}\">\r\n      </ng-katex>\r\n    </p>\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/cunha-esfera-explicação.png\">\r\n    </div>\r\n    <hr />\r\n\r\n    <!-- Accordion -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n\r\n      <!-- Exemplo -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"heading\" data-toggle=\"collapse\" data-target=\"#collapse\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse\"\r\n              aria-expanded=\"true\" aria-controls=\"collapse\">\r\n              <p *ngIf=\"isApprox else elseResult\" class=\"mb-0\">\r\n                Cálculo <ng-katex class=\"explicacao\" equation=\"\\approx {{ result }} \\pi \\ u.v\">\r\n                </ng-katex>\r\n              </p>\r\n              <ng-template #elseResult>\r\n                Cálculo <ng-katex class=\"explicacao\" equation=\"= {{ result }} \\pi \\ u.v\">\r\n                </ng-katex>\r\n              </ng-template>\r\n\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-3\" data-toggle=\"collapse\" data-target=\"#collapse\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapse\" class=\"collapse\" aria-labelledby=\"heading\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo a passo -->\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!-- Passo 1  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#one\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{V_{cunha} = \\frac{\\pi \\cdot \\color{blue}{r}\\color{black}{^3 \\cdot} \\color{red}{\\alpha}}{270 \\degree}}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"one\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Fórmula para calcular o volume da cunha esférica.\r\n                          <ul>\r\n                            <li>\r\n                              <ng-katex equation=\"\\color{blue}{ r }\"></ng-katex> = raio\r\n                            </li>\r\n                            <li>\r\n                              <ng-katex equation=\"\\color{red}{ \\alpha }\"></ng-katex> = ângulo em graus\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!-- Passo 2  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#two\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{V_{cunha} = \\frac{\\pi \\cdot \\color{blue}{ {{ radius }} } \\color{black}{^3  \\cdot} \\color{red}{ {{ angle }} \\degree } }{270 \\degree}}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"two\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Eleva o raio(<ng-katex equation=\"\\textcolor{blue}{ {{radius}} }\"></ng-katex>) ao cubo,\r\n                          multiplica pelo\r\n                          ângulo(<ng-katex equation=\"\\textcolor{red}{ {{angle}} \\degree }\"></ng-katex>) e divide o\r\n                          resultado por\r\n                          <ng-katex equation=\"\\textcolor{black}{ 270 \\degree }.\"></ng-katex>Obtemos\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\color{black}{ \\frac{\\pi \\cdot \\color{black}{ {{ radius * radius * radius * angle }} } } {270}}\">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!-- Passo 3  -->\r\n                    <div *ngIf=\"isApprox\" class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#three\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{V_{cunha} =  \\frac{ {{ topFraction }} }{ {{ bottomFraction }} } \\color{black}{ \\pi \\ u.v. }}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"three\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Simplificando a fração <ng-katex class=\"explicacao\"\r\n                            equation=\"\\color{black}{ \\frac{\\pi \\cdot \\color{black}{ {{ radius * radius * radius * angle }} } } {270}}\">\r\n                          </ng-katex>.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n                    <!-- Passo 4  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#four\" class=\"\">\r\n                            <p *ngIf=\"isApprox else elseBlock\">\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{V_{cunha} \\approx {{ result }}  \\color{black}{ \\pi \\ u.v. }}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                            <ng-template #elseBlock>\r\n                              <ng-katex class=\"explicacao\" id=\"katex\"\r\n                                equation=\"\\textcolor{black}{V_{cunha} = {{ result }} \\pi \\ u.v }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseEleven\"></i>\r\n                            </ng-template>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"four\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final em unidades de volume (u.v).\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- End passo a passo -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End exemplo -->\r\n\r\n    </div>\r\n    <!-- end accordion -->\r\n\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-cunha-esferica/es-cunha-esferica.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-cunha-esferica/es-cunha-esferica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsCunhaEsfericaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_fixtures_fraction__ = __webpack_require__("./src/app/views/geometria/shared/fixtures/fraction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EsCunhaEsfericaComponent = /** @class */ (function () {
    function EsCunhaEsfericaComponent() {
        var _a;
        this.buttons = [
            { title: "Cunha esférica", route: "es_cunha_esferica" },
            { title: "Fuso esférico", route: "es_fuso_esferico" },
            { title: "Calota", route: "es_calota" }
        ];
        this.PI = Math.PI;
        this.angle = 45;
        this.radians = (Math.PI * this.angle) / 180;
        this.radius = 30;
        this.isApprox = false;
        this.errorInput = false;
        // Cores
        this.red = 0xcc0000;
        this.blue = 0x4683b4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        var fraction = new __WEBPACK_IMPORTED_MODULE_3__shared_fixtures_fraction__["a" /* default */](Math.pow(this.radius, 3) * this.angle, 270);
        _a = fraction.factoredArray(), this.topFraction = _a[0], this.bottomFraction = _a[1];
        this.result = (Math.pow(this.radius, 3) * this.angle) / 270;
        this.result = Number.isInteger(this.result)
            ? this.result
            : parseFloat(this.result.toFixed(2));
        this.isApprox = !Number.isInteger(this.result) ? true : false;
    }
    EsCunhaEsfericaComponent.prototype.makeElements = function () {
        // Esfera
        var geometrySphere = new __WEBPACK_IMPORTED_MODULE_2_three__["SphereGeometry"](this.radius, 90, 90);
        var materialSphere = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blue,
            transparent: true,
            opacity: 0.5
        });
        var sphere = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometrySphere, materialSphere);
        // Fuso esférico
        var radialSegments = 192;
        var materialHemiSphere = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshStandardMaterial"]({
            emissive: this.blueShadow,
            roughness: 0.0,
            side: __WEBPACK_IMPORTED_MODULE_2_three__["DoubleSide"]
        });
        // Label do ângulo
        var labelAngle = new __WEBPACK_IMPORTED_MODULE_4_three_spritetext__["a" /* default */]("\u03B1", 2, 'black');
        labelAngle.position.set(-Math.cos(this.radians / 2) * (this.radius + 2.5), 0, Math.sin(this.radians / 2) * (this.radius + 2.5)); // posição da label
        // Criando reta OA
        var vectorOA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        vectorOA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.radius - 5, 0, 0));
        var lineOA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](vectorOA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }));
        // Criando reta OB
        var vectorOB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        vectorOB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-Math.cos(this.radians) * (this.radius + 5), 0, Math.sin(this.radians) * (this.radius + 5)));
        var lineOB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](vectorOB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }));
        var hemiSphereGeom = new __WEBPACK_IMPORTED_MODULE_2_three__["SphereBufferGeometry"](this.radius + 0.05, radialSegments, Math.round(radialSegments / 4), 0, this.radians, 0, Math.PI);
        var hemiSphere = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](hemiSphereGeom, materialHemiSphere);
        var cylinderGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radius, this.radius, 0.01, 32, 1, false, 0, Math.PI);
        var cylinderMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blue });
        var cylinderBack = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](cylinderGeometry, cylinderMaterial);
        cylinderBack.rotateX(-Math.PI / 2);
        cylinderBack.rotateZ((2 * Math.PI) / 2);
        var cylinderFront = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](cylinderGeometry, cylinderMaterial);
        cylinderFront.rotateX(-Math.PI / 2);
        cylinderFront.rotateZ(this.radians + Math.PI);
        this.geoScene.scene.add(sphere, hemiSphere, cylinderBack, cylinderFront, labelAngle, lineOA, lineOB);
        this.geoScene.render();
    };
    EsCunhaEsfericaComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    EsCunhaEsfericaComponent.prototype.changeRadius = function () {
        var _a;
        var _this = this;
        if (this.radius >= 5 && this.radius <= 50) {
            this.errorInput = false;
            var sizeGeoChildren = this.geoScene.scene.children.length;
            var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
            componentsToDelete.forEach(function (element) {
                _this.geoScene.scene.remove(element);
            });
            var fraction = new __WEBPACK_IMPORTED_MODULE_3__shared_fixtures_fraction__["a" /* default */](Math.pow(this.radius, 3) * this.angle, 270);
            _a = fraction.factoredArray(), this.topFraction = _a[0], this.bottomFraction = _a[1];
            this.result = (Math.pow(this.radius, 3) * this.angle) / 270;
            this.result = Number.isInteger(this.result)
                ? this.result
                : parseFloat(this.result.toFixed(2));
            this.isApprox = !Number.isInteger(this.result) ? true : false;
            this.makeElements();
        }
        else {
            this.errorInput = true;
        }
    };
    EsCunhaEsfericaComponent.prototype.changeAngle = function () {
        var _a;
        var _this = this;
        this.radians = (Math.PI * this.angle) / 180;
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
        var fraction = new __WEBPACK_IMPORTED_MODULE_3__shared_fixtures_fraction__["a" /* default */](Math.pow(this.radius, 3) * this.angle, 270);
        _a = fraction.factoredArray(), this.topFraction = _a[0], this.bottomFraction = _a[1];
        this.result = (Math.pow(this.radius, 3) * this.angle) / 270;
        this.result = Number.isInteger(this.result)
            ? this.result
            : parseFloat(this.result.toFixed(2));
        this.isApprox = !Number.isInteger(this.result) ? true : false;
        this.makeElements();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], EsCunhaEsfericaComponent.prototype, "geoScene", void 0);
    EsCunhaEsfericaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-es-cunha-esferica",
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-cunha-esferica/es-cunha-esferica.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-cunha-esferica/es-cunha-esferica.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsCunhaEsfericaComponent);
    return EsCunhaEsfericaComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-definicao/es-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n\r\n  <!-- Esfera -->\r\n  <div class=\"row definition__group mt-4\">\r\n\r\n    <div class=\"col-12\">\r\n      <h3 class=\"text-center\">Definição</h3>\r\n      <!-- Explicação -->\r\n      <p class=\"p-justify\">Dado um ponto O e um segmento de comprimento r.</p>\r\n      <p class=\"p-justify\">\r\n        <i class=\"fa fa-caret-right\"> </i>\r\n        Uma <em>superfície esférica</em> de centro O e raio <em>r</em> é o conjunto\r\n        dos pontos do espaço que distam <em>r</em> do ponto O.\r\n      </p>\r\n      <p class=\"p-justify\">\r\n        <i class=\"fa fa-caret-right\"> </i>\r\n        Uma <em>esfera</em> de centro O e raio <em>r</em> é o conjunto dos pontos\r\n        do espaço cuja distância ao ponto O é menor ou igual a <em>r</em>.\r\n      </p>\r\n    </div>\r\n\r\n    <!-- Observação -->\r\n    <div class=\"row col-12\">\r\n      <div class=\"col-12 col-lg-6\">\r\n        <img src=\"assets/images/geometria/esfera/esfera-definicao-1.png\"\r\n          class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\">\r\n        <p class=\"p-justify\"><strong>1ª)</strong> A superfície esférica é a superfície\r\n          gerada pela rotação de uma semicircunferência em torno de um eixo que contém seu diâmetro.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-12 col-lg-6\">\r\n        <img src=\"assets/images/geometria/esfera/esfera-definicao-2.png\"\r\n          class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\">\r\n        <p class=\"p-justify\"><strong>2ª)</strong> A esfera é o sólido de revolução gerado pela rotação\r\n          de um semicírculo em torno de um eixo que contém o diâmetro.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-definicao/es-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.definition__group__img {\n  max-height: 45vh !important;\n  min-width: 10vw; }\n.definition__group__description {\n  /* \"Traçado\" que tem em cima de duas letras */ }\n.definition__group__description p {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n.definition__group__description--distance:before {\n    display: block;\n    content: '';\n    width: 27px;\n    height: 1px;\n    background: #000; }\n.definition__group p {\n  text-indent: 2em; }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-definicao/es-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsDefinicaoComponent; });
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

var EsDefinicaoComponent = /** @class */ (function () {
    function EsDefinicaoComponent() {
    }
    EsDefinicaoComponent.prototype.ngOnInit = function () {
    };
    EsDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-es-definicao',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-definicao/es-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-definicao/es-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsDefinicaoComponent);
    return EsDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-elementos/es-elementos.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n  <!-- Elementos -->\r\n  <div class=\"row definition__group mt-4 \">\r\n\r\n    <h3 class=\"col-12 text-center\">Elementos</h3>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <!-- Explicação -->\r\n      <div>\r\n        <p class=\"p-justify\">\r\n          A nomenclatura seguinte deve-se ao fato de a Terra ser considerada aproximadamente\r\n          uma esfera, tomando-se <em>e</em> como o eixo de rotação.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"></i>\r\n          <em>Centro(O)</em>: ponto O.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"></i>\r\n          <em>Raio(r)</em>: segmento <span class=\"\">OA</span>.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"></i>\r\n          <em>Pólos(P<sub>1</sub> e P<sub>2</sub>)</em>: são as interseções da superfície com\r\n          o eixo.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"></i>\r\n          <em>Equador</em>: é a seção (circunferência) perpendicular ao eixo, pelo centro da\r\n          circunferência.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"></i>\r\n          <em>Paralelo</em>: é uma seção (circunferência) perpendicular ao eixo. É \"paralela\"\r\n          ao equador.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"></i>\r\n          <em>Meridiano</em>: é uma seção (circunferência) cujo plano passa pelo eixo.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"alert alert-primary text-body\" role=\"alert\">\r\n        <p>O plano contém o Equador divide a superfície em dois hemisférios que, em geografia, são\r\n          chamados hemisfério Norte e hemisfério Sul.</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"col-12 col-lg-6 col-xl-6 definition__group__description align-self-center\">\r\n      <img src=\"assets/images/geometria/esfera/esfera-elementos.png\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-elementos/es-elementos.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.definition__group__img {\n  max-height: 70vh;\n  min-height: 30vh;\n  min-width: 10vw; }\n.definition__group__description {\n  /* \"Traçado\" que tem em cima de duas letras */ }\n.definition__group__description--distance:before {\n    display: block;\n    content: '';\n    width: 18px;\n    height: 1px;\n    background: #000; }\n.definition__group p {\n  text-indent: 1em; }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-elementos/es-elementos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsElementosComponent; });
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

var EsElementosComponent = /** @class */ (function () {
    function EsElementosComponent() {
    }
    EsElementosComponent.prototype.ngOnInit = function () {
    };
    EsElementosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-es-elementos',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-elementos/es-elementos.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-elementos/es-elementos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsElementosComponent);
    return EsElementosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-fuso-esferico/es-fuso-esferico.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <div class=\"btn-container row\">\r\n    <h3 class=\"col-12 text-center\">Fuso esférico da esfera</h3>\r\n  </div>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a propriedade que deseja calcular referente a esfera</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <!-- Conteudo -->\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <!-- Inputs -->\r\n    <div class=\"mt-4\">\r\n      <p>\r\n        Entre com a medida do\r\n        Raio(<ng-katex equation=\"\\color{blue}{ r }\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadius()\" max=\"50\" min=\"5\" />\r\n        e do Ângulo em graus(<ng-katex equation=\"\\color{red}{ \\alpha }\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angle\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeAngle()\" max=\"360\" min=\"1\" />\r\n      </p>\r\n    </div>\r\n    <div [className]=\"errorInput == true ? 'mt-1 alert alert-danger text-body' : 'mt-1 alert alert-primary text-body'\"\r\n      role=\"alert\">\r\n      O raio deve ser um valor inteiro contido entre <b>5</b> e <b>50</b> <br>\r\n      O ângulo deve ser um valor inteiro contido entre <b>1</b> e <b>360</b>.\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades:</h3>\r\n    <p>\r\n      O ângulo <ng-katex class=\"\" equation=\"\\alpha\"></ng-katex> define o tamanho do fuso, caso <ng-katex\r\n        equation=\"\\alpha = 360\">\r\n      </ng-katex> temos\r\n      a àrea do fuso esférico.\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\color{black}{A_{fuso} = \\frac{\\pi \\cdot \\color{blue}{r}\\color{black}{^2} \\cdot \\color{red}{α} }{90 \\degree}}\">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/fuso-esfera-explicação.png\">\r\n    </div>\r\n    <hr />\r\n\r\n    <!-- Accordion -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n\r\n      <!-- Exemplo -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"heading\" data-toggle=\"collapse\" data-target=\"#collapse\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse\"\r\n              aria-expanded=\"true\" aria-controls=\"collapse\">\r\n\r\n              <p *ngIf=\"isApprox else elseResult\" class=\"mb-0\">\r\n                Cálculo <ng-katex class=\"explicacao\" equation=\"\\approx {{ result }} \\pi \\ u.a\">\r\n                </ng-katex>\r\n              </p>\r\n              <ng-template #elseResult>\r\n                Cálculo <ng-katex class=\"explicacao\" equation=\"= {{ result }} \\pi \\ u.a\">\r\n                </ng-katex>\r\n              </ng-template>\r\n\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-3\" data-toggle=\"collapse\" data-target=\"#collapse\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapse\" class=\"collapse\" aria-labelledby=\"heading\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!-- Passo a passo -->\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!-- Passo 1  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#one\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{A_{fuso} = \\frac{\\pi \\cdot \\color{blue}{r}\\color{black}{^2} \\cdot \\color{red}{α} }{90 \\degree}}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"one\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Fórmula para calcular o volume do fuso esférico.\r\n                          <ul>\r\n                            <li>\r\n                              <ng-katex equation=\"\\color{blue}{ r }\"></ng-katex> = raio\r\n                            </li>\r\n                            <li>\r\n                              <ng-katex equation=\"\\color{red}{ \\alpha }\"></ng-katex> = ângulo em graus\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!-- Passo 2  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#two\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{A_{fuso} = \\frac{\\pi \\cdot \\color{blue}{ {{ radius }} } \\color{black}{^2}  \\cdot \\color{red}{ {{ angle }} \\degree } }{90 \\degree}}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"two\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Eleva o raio(<ng-katex equation=\"\\textcolor{blue}{ {{radius}} }\"></ng-katex>) ao quadrado,\r\n                          multiplica pelo\r\n                          ângulo(<ng-katex equation=\"\\textcolor{red}{ {{angle}} \\degree }\"></ng-katex>) e divide o\r\n                          resultado por\r\n                          <ng-katex equation=\"\\textcolor{black}{ 90 \\degree }\"></ng-katex>.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!-- Passo 3  -->\r\n                    <div *ngIf=\"isApprox\" class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#three\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{A_{fuso} = { { \\frac{ {{topFraction}} }{ {{bottomFraction}} } } } \\color{black}{ \\pi \\ u.a.} }\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"three\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Simplificando a fração <ng-katex class=\"explicacao\"\r\n                            equation=\"\\color{black}{ \\frac{ {{radius * radius * angle}} }{ 90 \\degree} } \">\r\n                          </ng-katex> .\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!-- Passo 4  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#four\" class=\"\">\r\n                            <p *ngIf=\"isApprox else elseBlock\">\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{A_{fuso} \\approx {{ result }}  \\color{black}{ \\pi \\ u.a. }}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                            <ng-template #elseBlock>\r\n                              <ng-katex class=\"explicacao\" id=\"katex\"\r\n                                equation=\"\\textcolor{black}{A_{fuso} = {{ result }} \\pi \\ u.a }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseEleven\"></i>\r\n                            </ng-template>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"four\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final em unidades de área.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End exemplo -->\r\n\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-fuso-esferico/es-fuso-esferico.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-fuso-esferico/es-fuso-esferico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsFusoEsfericoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_fixtures_fraction__ = __webpack_require__("./src/app/views/geometria/shared/fixtures/fraction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EsFusoEsfericoComponent = /** @class */ (function () {
    function EsFusoEsfericoComponent() {
        var _a;
        this.buttons = [
            { title: "Cunha esférica", route: "es_cunha_esferica" },
            { title: "Fuso esférico", route: "es_fuso_esferico" },
            { title: "Calota", route: "es_calota" }
        ];
        this.radius = 30;
        this.PI = Math.PI;
        this.angle = 45;
        this.radians = (Math.PI * this.angle) / 180;
        this.errorInput = false;
        // Cores
        this.red = 0xCC0000;
        this.blue = 0x4683B4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        var fraction = new __WEBPACK_IMPORTED_MODULE_3__shared_fixtures_fraction__["a" /* default */](Math.pow(this.radius, 2) * this.angle, 90);
        _a = fraction.factoredArray(), this.topFraction = _a[0], this.bottomFraction = _a[1];
        this.result = ((Math.pow(this.radius, 2)) * this.angle) / 90;
        this.result = (Number.isInteger(this.result)) ? this.result : parseFloat(this.result.toFixed(2));
        this.isApprox = (!Number.isInteger(this.result)) ? true : false;
    }
    EsFusoEsfericoComponent.prototype.makeElements = function () {
        // Esfera
        var geometrySphere = new __WEBPACK_IMPORTED_MODULE_2_three__["SphereGeometry"](this.radius, 90, 90);
        var materialSphere = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blue, transparent: true, opacity: 0.5 });
        var sphere = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometrySphere, materialSphere);
        // Fuso esférico
        var radialSegments = 192;
        var materialHemiSphere = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshStandardMaterial"]({
            emissive: this.blueShadow,
            roughness: 0.0,
            side: __WEBPACK_IMPORTED_MODULE_2_three__["DoubleSide"]
        });
        var hemiSphereGeom = new __WEBPACK_IMPORTED_MODULE_2_three__["SphereBufferGeometry"](this.radius + 0.05, radialSegments, Math.round(radialSegments / 4), 0, this.radians, 0, Math.PI);
        var hemiSphere = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](hemiSphereGeom, materialHemiSphere);
        // Label do ângulo
        var labelAngle = new __WEBPACK_IMPORTED_MODULE_4_three_spritetext__["a" /* default */]("\u03B1", 2, 'black');
        labelAngle.position.set(-Math.cos(this.radians / 2) * (this.radius + 2.5), 0, Math.sin(this.radians / 2) * (this.radius + 2.5)); // posição da label
        // Criando reta OA
        var vectorOA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        vectorOA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.radius - 5, 0, 0));
        var lineOA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](vectorOA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }));
        // Criando reta OB
        var vectorOB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        vectorOB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-Math.cos(this.radians) * (this.radius + 5), 0, Math.sin(this.radians) * (this.radius + 5)));
        var lineOB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](vectorOB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }));
        this.geoScene.scene.add(sphere, hemiSphere, lineOA, lineOB, labelAngle);
        this.geoScene.render();
    };
    EsFusoEsfericoComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    EsFusoEsfericoComponent.prototype.changeRadius = function () {
        var _a;
        var _this = this;
        if (this.radius >= 5 && this.radius <= 50) {
            var sizeGeoChildren = this.geoScene.scene.children.length;
            var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
            componentsToDelete.forEach(function (element) {
                _this.geoScene.scene.remove(element);
            });
            var fraction = new __WEBPACK_IMPORTED_MODULE_3__shared_fixtures_fraction__["a" /* default */](Math.pow(this.radius, 2) * this.angle, 90);
            _a = fraction.factoredArray(), this.topFraction = _a[0], this.bottomFraction = _a[1];
            this.result = ((Math.pow(this.radius, 2)) * this.angle) / 90;
            this.result = (Number.isInteger(this.result)) ? this.result : parseFloat(this.result.toFixed(2));
            this.isApprox = (!Number.isInteger(this.result)) ? true : false;
            this.makeElements();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    EsFusoEsfericoComponent.prototype.changeAngle = function () {
        var _a;
        var _this = this;
        if (this.angle >= 1 && this.angle <= 360) {
            this.radians = (Math.PI * this.angle) / 180;
            var sizeGeoChildren = this.geoScene.scene.children.length;
            var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
            componentsToDelete.forEach(function (element) {
                _this.geoScene.scene.remove(element);
            });
            var fraction = new __WEBPACK_IMPORTED_MODULE_3__shared_fixtures_fraction__["a" /* default */](Math.pow(this.radius, 2) * this.angle, 90);
            _a = fraction.factoredArray(), this.topFraction = _a[0], this.bottomFraction = _a[1];
            this.result = ((Math.pow(this.radius, 2)) * this.angle) / 90;
            this.result = (Number.isInteger(this.result)) ? this.result : parseFloat(this.result.toFixed(2));
            this.isApprox = (!Number.isInteger(this.result)) ? true : false;
            this.makeElements();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], EsFusoEsfericoComponent.prototype, "geoScene", void 0);
    EsFusoEsfericoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-es-fuso-esferico',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-fuso-esferico/es-fuso-esferico.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-fuso-esferico/es-fuso-esferico.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsFusoEsfericoComponent);
    return EsFusoEsfericoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-partes-esfera/es-partes-esfera.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"info\">\r\n\r\n  <div class=\"row mt-2\">\r\n    <h3 class=\"col-12 text-center\">Partes de uma esfera</h3>\r\n    <!-- Botões de navegação -->\r\n    <div class=\"col-12 btn-container mt-2 row\">\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a propriedade que deseja calcular referente a esfera</h5>\r\n      <div class=\"row col-12\">\r\n        <geo-btn class=\"mx-auto\" *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\"\r\n          [route]=\"button.route\"></geo-btn>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Breve explicação -->\r\n    <div class=\"content-container col-12 row px-0 d-flex align-items-center justify-content-center\">\r\n      <div class=\"row col-12 mt-5\">\r\n\r\n        <div class=\"col-lg-4 col-12 text-center\">\r\n          <h5 class=\"text-center\">Cunha esférica</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/cunha-esferica.png\">\r\n        </div>\r\n        <div class=\"col-lg-4 col-12 text-center\">\r\n          <h5 class=\"text-center mb-0\">Fuso esférico</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/fuso-esfera.png\">\r\n        </div>\r\n        <div class=\"col-lg-4 col-12 text-center\">\r\n          <h5 class=\"text-center\">Calota</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/calota-esfera.png\">\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-partes-esfera/es-partes-esfera.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 60vh !important; }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-partes-esfera/es-partes-esfera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsPartesEsferaComponent; });
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

var EsPartesEsferaComponent = /** @class */ (function () {
    function EsPartesEsferaComponent() {
        this.buttons = [
            { title: "Cunha esférica", route: "es_cunha_esferica" },
            { title: "Fuso esférico", route: "es_fuso_esferico" },
            { title: "Calota", route: "es_calota" }
        ];
    }
    EsPartesEsferaComponent.prototype.ngOnInit = function () {
    };
    EsPartesEsferaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-es-partes-esfera',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-partes-esfera/es-partes-esfera.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-partes-esfera/es-partes-esfera.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsPartesEsferaComponent);
    return EsPartesEsferaComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-sidebar/es-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"rp-sidebar\">\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['es_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['es_elementos']\">\r\n      Elementos\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['es_area_volume']\">\r\n      Área e Volume\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['es_partes_esfera']\">\r\n      Partes de uma esfera\r\n    </li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-sidebar/es-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-sidebar/es-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsSidebarComponent; });
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

var EsSidebarComponent = /** @class */ (function () {
    function EsSidebarComponent() {
    }
    EsSidebarComponent.prototype.ngOnInit = function () {
    };
    EsSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'es-sidebar',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-sidebar/es-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-sidebar/es-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsSidebarComponent);
    return EsSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-view/es-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n  <es-sidebar class=\"slidebar\"></es-sidebar>\r\n  <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-view/es-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-view/es-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsViewComponent; });
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

var EsViewComponent = /** @class */ (function () {
    function EsViewComponent() {
    }
    EsViewComponent.prototype.ngOnInit = function () {
    };
    EsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-es-view',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-view/es-view.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-view/es-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsViewComponent);
    return EsViewComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-volume/es-volume.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <div class=\"btn-container row\">\r\n    <h3 class=\"col-12 text-center\">Volume da esfera</h3>\r\n  </div>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a propriedade que deseja calcular referente a esfera</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <!-- Conteúdo -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <!-- Inputs -->\r\n    <p class=\"mt-1 col-12 text-center\">Entre com a medida do raio(<ng-katex equation=\"\\color{red}r\"></ng-katex>):\r\n      <!-- Campos de entrada -->\r\n      <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n        oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadius()\" max=\"50\" min=\"5\" />\r\n    </p>\r\n\r\n    <div [className]=\"errorInput == true ? 'mt-1 alert alert-danger text-body mx-auto' : 'mt-1 alert alert-primary text-body mx-auto'\"\r\n      role=\"alert\">\r\n      O raio deve ser um valor inteiro contido entre <b>5</b> e <b>50</b>.\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 img-fluid order-md-2 order-1\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades:</h3>\r\n    <p>\r\n      É o conjunto de todos os seus pontos, desde o centro até a superfície.\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\" \\color{black}{V = \\dfrac{4}{3} \\ \\cdot \\pi \\cdot \\color{red}{r} \\color{black}{^3}} \"></ng-katex>\r\n    </p>\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/esfera/area-volume/volume-esfera.svg\">\r\n    </div>\r\n    <br />\r\n    <!-- Exemplo -->\r\n    <hr />\r\n\r\n    <!-- Accordion -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n\r\n      <!-- Exemplo -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"heading\" data-toggle=\"collapse\" data-target=\"#collapse\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse\"\r\n              aria-expanded=\"true\" aria-controls=\"collapse\">\r\n              <p *ngIf=\"isApprox else elseResult\">\r\n                Cálculo <ng-katex class=\"explicacao\"\r\n                  equation=\"\\approx {{ (4/3 * (radius*radius*radius)).toFixed(2) }} \\pi \\  u.v.\">\r\n                </ng-katex>\r\n              </p>\r\n              <ng-template #elseResult>\r\n                Cálculo <ng-katex class=\"explicacao\" equation=\"= {{ (4/3 * (radius*radius*radius)) }} \\pi \\  u.v.\">\r\n                </ng-katex>\r\n              </ng-template>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-2 ml-3\" data-toggle=\"collapse\"\r\n              data-target=\"#collapse\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapse\" class=\"collapse\" aria-labelledby=\"heading\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo a passo -->\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!-- Passo 1  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#one\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{V = \\dfrac{4}{3} \\ \\cdot \\pi \\cdot \\color{red}{r} \\color{black}{^3}}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapse\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"one\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Fórmula para calcular o volume da esfera.\r\n                          <ul>\r\n                            <li>\r\n                              <ng-katex equation=\"\\color{red}{ r }\"></ng-katex> = raio\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!-- Passo 2  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#two\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{V = \\dfrac{4}{3} \\ \\cdot \\pi \\cdot \\color{red}{ {{radius}} } \\color{black}{ ^3 }}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapse\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"two\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substitui os valores na fórmula, eleva o raio(<ng-katex\r\n                            equation=\"\\textcolor{red}{ {{radius}} }\">\r\n                          </ng-katex>) ao cubo e multiplica por <ng-katex equation=\"\\dfrac{4}{3}\">\r\n                          </ng-katex>.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!-- Passo 3  -->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#three\" class=\"\">\r\n                            <p *ngIf=\"isApprox else elseBlock\">\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{V \\approx {{ (4/3 * (radius*radius*radius)).toFixed(2) }} \\color{black}{ \\pi \\  u.v. }}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapse\"></i>\r\n                            </p>\r\n                            <ng-template #elseBlock>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\color{black}{V = {{ 4/3 * (radius*radius*radius) }} \\color{black}{ \\pi \\  u.v. }}\">\r\n                              </ng-katex>\r\n\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapse\"></i>\r\n                            </ng-template>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"three\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final em unidades de volume(u.v).\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <!-- End passo a passo -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End exemplo -->\r\n\r\n    </div>\r\n    <!-- end accordion -->\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-volume/es-volume.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/esfera/components/es-volume/es-volume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsVolumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
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




var EsVolumeComponent = /** @class */ (function () {
    function EsVolumeComponent() {
        this.buttons = [
            { title: "Área da esfera", route: "es_area" },
            { title: "Volume da esfera", route: "es_volume" }
        ];
        this.radius = 30;
        this.PI = Math.PI;
        this.isApprox = false;
        this.errorInput = false;
        // Cores das linhas
        this.red = 0xCC0000;
        this.blue = 0x4683B4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
    }
    EsVolumeComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 90, 80);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    EsVolumeComponent.prototype.makeElements = function () {
        // ---------------- Esfera ----------------
        // Esfera
        var geometrySphere = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](this.radius, 90, 90);
        var materialSphere = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blue, transparent: true, opacity: 0.5 });
        var sphere = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometrySphere, materialSphere);
        // Ponto do centro da esfera
        var geometryCenterPoint = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](.5, 90, 90);
        var materialCenterPoint = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.black });
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCenterPoint, materialCenterPoint);
        // Label do ponto central
        var labelCenterPoint = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("O", 2, 'black');
        labelCenterPoint.position.set(-1.5, 1.5, -1); // posição da label
        // Linha do raio
        var radiusGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        radiusGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0), new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.cos(Math.PI / 4) * this.radius, Math.sin(Math.PI / 4) * this.radius, 0));
        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](radiusGeometry, new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }));
        // Ponto final da linha do raio
        var finalRadiusPoint = centerPoint.clone();
        finalRadiusPoint.position.set(Math.cos(Math.PI / 4) * this.radius, Math.sin(Math.PI / 4) * this.radius, 0);
        // Label do ponto final do raio
        var labelFinalRadius = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("A", 2, 'black');
        labelFinalRadius.position.set(Math.cos(Math.PI / 4) * this.radius + 1, Math.cos(Math.PI / 4) * this.radius + 1, -1 // posição da label
        );
        // ---------------- Adicionando na cena ----------------
        this.geoScene.scene.add(
        // --- Esfera ---
        labelCenterPoint, sphere, centerPoint, line, finalRadiusPoint, labelFinalRadius);
        this.geoScene.render();
    };
    EsVolumeComponent.prototype.changeRadius = function () {
        this.isApprox = (Number.isInteger(Math.pow(this.radius, 3) * 4 / 3)) ? false : true;
        if (this.radius >= 5 && this.radius <= 50) {
            this.alterSphere();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    EsVolumeComponent.prototype.alterSphere = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], EsVolumeComponent.prototype, "geoScene", void 0);
    EsVolumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-es-volume',
            template: __webpack_require__("./src/app/views/geometria/esfera/components/es-volume/es-volume.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/esfera/components/es-volume/es-volume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EsVolumeComponent);
    return EsVolumeComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/esfera.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsferaModule", function() { return EsferaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_geo_shared_module__ = __webpack_require__("./src/app/views/geometria/shared/geo-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__esfera_routing__ = __webpack_require__("./src/app/views/geometria/esfera/esfera.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_es_view_es_view_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-view/es-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_es_definicao_es_definicao_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-definicao/es-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_es_sidebar_es_sidebar_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-sidebar/es-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_es_elementos_es_elementos_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-elementos/es-elementos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_es_volume_es_volume_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-volume/es-volume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_es_area_es_area_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-area/es-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_es_area_volume_es_area_volume_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-area-volume/es-area-volume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_es_fuso_esferico_es_fuso_esferico_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-fuso-esferico/es-fuso-esferico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_es_calota_es_calota_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-calota/es-calota.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_es_partes_esfera_es_partes_esfera_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-partes-esfera/es-partes-esfera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_es_cunha_esferica_es_cunha_esferica_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-cunha-esferica/es-cunha-esferica.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var EsferaModule = /** @class */ (function () {
    function EsferaModule() {
    }
    EsferaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_geo_shared_module__["a" /* GeoSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__esfera_routing__["a" /* EsferaRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__components_es_view_es_view_component__["a" /* EsViewComponent */], __WEBPACK_IMPORTED_MODULE_8__components_es_definicao_es_definicao_component__["a" /* EsDefinicaoComponent */], __WEBPACK_IMPORTED_MODULE_9__components_es_sidebar_es_sidebar_component__["a" /* EsSidebarComponent */], __WEBPACK_IMPORTED_MODULE_10__components_es_elementos_es_elementos_component__["a" /* EsElementosComponent */], __WEBPACK_IMPORTED_MODULE_11__components_es_volume_es_volume_component__["a" /* EsVolumeComponent */], __WEBPACK_IMPORTED_MODULE_12__components_es_area_es_area_component__["a" /* EsAreaComponent */], __WEBPACK_IMPORTED_MODULE_13__components_es_area_volume_es_area_volume_component__["a" /* EsAreaVolumeComponent */], __WEBPACK_IMPORTED_MODULE_14__components_es_fuso_esferico_es_fuso_esferico_component__["a" /* EsFusoEsfericoComponent */], __WEBPACK_IMPORTED_MODULE_15__components_es_calota_es_calota_component__["a" /* EsCalotaComponent */], __WEBPACK_IMPORTED_MODULE_16__components_es_partes_esfera_es_partes_esfera_component__["a" /* EsPartesEsferaComponent */], __WEBPACK_IMPORTED_MODULE_17__components_es_cunha_esferica_es_cunha_esferica_component__["a" /* EsCunhaEsfericaComponent */]]
        })
    ], EsferaModule);
    return EsferaModule;
}());



/***/ }),

/***/ "./src/app/views/geometria/esfera/esfera.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsferaRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_es_view_es_view_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-view/es-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_es_definicao_es_definicao_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-definicao/es-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_es_elementos_es_elementos_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-elementos/es-elementos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_es_area_es_area_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-area/es-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_es_volume_es_volume_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-volume/es-volume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_es_area_volume_es_area_volume_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-area-volume/es-area-volume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_es_fuso_esferico_es_fuso_esferico_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-fuso-esferico/es-fuso-esferico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_es_calota_es_calota_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-calota/es-calota.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_es_partes_esfera_es_partes_esfera_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-partes-esfera/es-partes-esfera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_es_cunha_esferica_es_cunha_esferica_component__ = __webpack_require__("./src/app/views/geometria/esfera/components/es-cunha-esferica/es-cunha-esferica.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_es_view_es_view_component__["a" /* EsViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'es_definicao',
                pathMatch: 'full',
            },
            {
                path: 'es_definicao',
                component: __WEBPACK_IMPORTED_MODULE_3__components_es_definicao_es_definicao_component__["a" /* EsDefinicaoComponent */],
            },
            {
                path: 'es_elementos',
                component: __WEBPACK_IMPORTED_MODULE_4__components_es_elementos_es_elementos_component__["a" /* EsElementosComponent */],
            },
            {
                path: 'es_area_volume',
                component: __WEBPACK_IMPORTED_MODULE_7__components_es_area_volume_es_area_volume_component__["a" /* EsAreaVolumeComponent */],
            },
            {
                path: 'es_area',
                component: __WEBPACK_IMPORTED_MODULE_5__components_es_area_es_area_component__["a" /* EsAreaComponent */],
            },
            {
                path: 'es_volume',
                component: __WEBPACK_IMPORTED_MODULE_6__components_es_volume_es_volume_component__["a" /* EsVolumeComponent */],
            },
            {
                path: 'es_partes_esfera',
                component: __WEBPACK_IMPORTED_MODULE_10__components_es_partes_esfera_es_partes_esfera_component__["a" /* EsPartesEsferaComponent */],
            },
            {
                path: 'es_fuso_esferico',
                component: __WEBPACK_IMPORTED_MODULE_8__components_es_fuso_esferico_es_fuso_esferico_component__["a" /* EsFusoEsfericoComponent */],
            },
            {
                path: 'es_calota',
                component: __WEBPACK_IMPORTED_MODULE_9__components_es_calota_es_calota_component__["a" /* EsCalotaComponent */]
            },
            {
                path: 'es_cunha_esferica',
                component: __WEBPACK_IMPORTED_MODULE_11__components_es_cunha_esferica_es_cunha_esferica_component__["a" /* EsCunhaEsfericaComponent */],
            },
        ]
    }];
var EsferaRouting = /** @class */ (function () {
    function EsferaRouting() {
    }
    EsferaRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], EsferaRouting);
    return EsferaRouting;
}());



/***/ })

});
//# sourceMappingURL=esfera.module.chunk.js.map