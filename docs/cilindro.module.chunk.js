webpackJsonp(["cilindro.module"],{

/***/ "./src/app/views/geometria/cilindro/cilindro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CilindroModule", function() { return CilindroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_geo_shared_module__ = __webpack_require__("./src/app/views/geometria/shared/geo-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cilindro_routing__ = __webpack_require__("./src/app/views/geometria/cilindro/cilindro.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ci_view_ci_view_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-view/ci-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ci_sidebar_ci_sidebar_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-sidebar/ci-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ci_definicao_ci_definicao_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-definicao/ci-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ci_elementos_ci_elementos_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-elementos/ci-elementos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ci_areas_ci_areas_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-areas/ci-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ci_volume_ci_volume_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-volume/ci-volume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ci_area_bases_ci_area_bases_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-bases/ci-area-bases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ci_area_lateral_ci_area_lateral_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-lateral/ci-area-lateral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ci_area_total_ci_area_total_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-total/ci-area-total.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var CilindroModule = /** @class */ (function () {
    function CilindroModule() {
    }
    CilindroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_geo_shared_module__["a" /* GeoSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__cilindro_routing__["a" /* CilindroRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__components_ci_view_ci_view_component__["a" /* CiViewComponent */], __WEBPACK_IMPORTED_MODULE_8__components_ci_sidebar_ci_sidebar_component__["a" /* CiSidebarComponent */], __WEBPACK_IMPORTED_MODULE_9__components_ci_definicao_ci_definicao_component__["a" /* CiDefinicaoComponent */], __WEBPACK_IMPORTED_MODULE_10__components_ci_elementos_ci_elementos_component__["a" /* CiElementosComponent */], __WEBPACK_IMPORTED_MODULE_11__components_ci_areas_ci_areas_component__["a" /* CiAreasComponent */], __WEBPACK_IMPORTED_MODULE_12__components_ci_volume_ci_volume_component__["a" /* CiVolumeComponent */], __WEBPACK_IMPORTED_MODULE_13__components_ci_area_bases_ci_area_bases_component__["a" /* CiAreaBasesComponent */], __WEBPACK_IMPORTED_MODULE_14__components_ci_area_lateral_ci_area_lateral_component__["a" /* CiAreaLateralComponent */], __WEBPACK_IMPORTED_MODULE_15__components_ci_area_total_ci_area_total_component__["a" /* CiAreaTotalComponent */]]
        })
    ], CilindroModule);
    return CilindroModule;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/cilindro.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CilindroRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ci_view_ci_view_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-view/ci-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ci_definicao_ci_definicao_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-definicao/ci-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ci_elementos_ci_elementos_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-elementos/ci-elementos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ci_areas_ci_areas_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-areas/ci-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ci_volume_ci_volume_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-volume/ci-volume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ci_area_bases_ci_area_bases_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-bases/ci-area-bases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ci_area_lateral_ci_area_lateral_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-lateral/ci-area-lateral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ci_area_total_ci_area_total_component__ = __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-total/ci-area-total.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_ci_view_ci_view_component__["a" /* CiViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'ci_definicao',
                pathMatch: 'full',
            },
            {
                path: 'ci_definicao',
                component: __WEBPACK_IMPORTED_MODULE_3__components_ci_definicao_ci_definicao_component__["a" /* CiDefinicaoComponent */]
            },
            {
                path: 'ci_elementos',
                component: __WEBPACK_IMPORTED_MODULE_4__components_ci_elementos_ci_elementos_component__["a" /* CiElementosComponent */]
            },
            {
                path: 'ci_areas',
                component: __WEBPACK_IMPORTED_MODULE_5__components_ci_areas_ci_areas_component__["a" /* CiAreasComponent */]
            },
            {
                path: 'ci_area_bases',
                component: __WEBPACK_IMPORTED_MODULE_7__components_ci_area_bases_ci_area_bases_component__["a" /* CiAreaBasesComponent */]
            },
            {
                path: 'ci_area_lateral',
                component: __WEBPACK_IMPORTED_MODULE_8__components_ci_area_lateral_ci_area_lateral_component__["a" /* CiAreaLateralComponent */]
            },
            {
                path: 'ci_area_total',
                component: __WEBPACK_IMPORTED_MODULE_9__components_ci_area_total_ci_area_total_component__["a" /* CiAreaTotalComponent */]
            },
            {
                path: 'ci_volume',
                component: __WEBPACK_IMPORTED_MODULE_6__components_ci_volume_ci_volume_component__["a" /* CiVolumeComponent */]
            },
        ]
    }];
var CilindroRouting = /** @class */ (function () {
    function CilindroRouting() {
    }
    CilindroRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], CilindroRouting);
    return CilindroRouting;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-bases/ci-area-bases.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <div class=\" col-12 text-center\">\r\n      <h3 class=\"text-center\">Área da base</h3>\r\n    </div>\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a área referente ao cilindro que deseja calcular</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <div class=\"mt-4\">\r\n      <p class=\"text-center\">\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{blue}{r}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadius()\" max=\"50\" min=\"5\" />\r\n      </p>\r\n      <div\r\n        [className]=\"errorInput === true ? 'mt-1 alert alert-danger text-center' : 'mt-1 alert alert-primary text-center'\"\r\n        role=\"alert\">\r\n        O raio deve ser um valor inteiro contido entre <b>5</b> e <b>50</b>.\r\n      </div>\r\n    </div>\r\n\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      As bases de um cilindro são dois círculos de raio <ng-katex equation=\"r\"></ng-katex>.\r\n    </p>\r\n\r\n    <!-- Fórmula da área das bases -->\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\" equation=\"\\color{black}{A_b = 2 \\cdot \\pi \\cdot} \\color{blue}{r} \\color{black}{^2}\">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cilindro/cilindro-areas-bases.png\">\r\n    </div>\r\n\r\n    <hr />\r\n\r\n\r\n    <!--Collapse que comtempla os passos-->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <!-- Exemplo -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingGeratriz\" data-toggle=\"collapse\" data-target=\"#collapseExemplo\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExemplo\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseExemplo\">\r\n              Cálculo = <ng-katex class=\"explicacao\" equation=\"{{2 * (radius * radius) }} \\pi \\ u.a.\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseExemplo\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseExemplo\" class=\"collapse\" aria-labelledby=\"headingGeratriz\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"painel-group\" id=\"accordion\">\r\n\r\n              <!--Primeiro passo-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_b = 2 \\cdot \\pi \\cdot} \\color{blue}{r} \\color{black}{^2}\">\r\n                        </ng-katex>\r\n\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapsePasso1\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapsePasso1\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Fórmula para o cálculo da área da base do cilindro.\r\n                    <ul>\r\n                      <li>\r\n                        <ng-katex equation=\"\\color{blue}{ r }\"></ng-katex> = raio.\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Segundo passo-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2\" class=\"\">\r\n                      <p>\r\n\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_b  = 2 \\cdot \\pi} \\cdot \\color{blue}{ {{radius}} } \\color{black}{^2}\">\r\n                        </ng-katex>\r\n\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapsePasso2\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapsePasso2\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Aplicando o raio (<ng-katex equation=\"\\color{blue}{ {{ radius }} }\"></ng-katex>) na fórmula e o\r\n                    elevando ao quadrado.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Terceiro passo-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_b= 2 \\cdot \\pi \\cdot} \\color{blue}{ {{ radius * radius }} }\">\r\n                        </ng-katex>\r\n\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapsePasso3\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapsePasso3\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Fórmula após o raio (<ng-katex equation=\"\\color{blue}{ {{ radius }} }\"></ng-katex>) ter sido elevado\r\n                    ao quadrado. Agora\r\n                    realizamos as multiplicações entre 2 e o raio(<ng-katex\r\n                      equation=\"\\color{blue}{ {{ radius * radius }} }\"></ng-katex>).\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Quarto passo-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4\" class=\"\">\r\n                      <p>\r\n\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_b =} \\ {{2 * (radius * radius) }}  \\color{black}{ \\pi \\ u.a. }\">\r\n                        </ng-katex>\r\n\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapsePasso4\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapsePasso4\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final da multiplicação em medidas de unidade de Área\r\n                    (<ng-katex class=\"explicacao\" equation=\"\\ u.a\"></ng-katex>).\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-bases/ci-area-bases.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-bases/ci-area-bases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiAreaBasesComponent; });
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




var CiAreaBasesComponent = /** @class */ (function () {
    function CiAreaBasesComponent() {
        this.buttons = [
            { title: "Área das bases", route: "ci_area_bases" },
            { title: "Área lateral", route: "ci_area_lateral" },
            { title: "Área total", route: "ci_area_total" }
        ];
        // Cores das linhas
        this.blue = 0x4683B4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        // Raio da base
        this.radius = 30;
        this.PI = Math.PI;
        this.errorInput = false;
        this.isApprox = true;
    }
    CiAreaBasesComponent.prototype.makeElements = function () {
        // Cilindro
        var geometryCylinder = new __WEBPACK_IMPORTED_MODULE_1_three__["CylinderGeometry"](this.radius, this.radius, 50, 32);
        var materialCylinder = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blue });
        var cylinder = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCylinder, materialCylinder);
        cylinder.position.copy(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](-60, 0, 0));
        cylinder.name = "cilindro";
        // Parte de cima do cilindro
        var geometryCircunferenceTop = new __WEBPACK_IMPORTED_MODULE_1_three__["CircleGeometry"](this.radius, 90, 10);
        var materialCircunferenceTop = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blueShadow });
        var circunferenceTop = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCircunferenceTop, materialCircunferenceTop);
        circunferenceTop.position.set(-60, 25.01, 0);
        circunferenceTop.rotateX(-Math.PI / 2);
        circunferenceTop.name = "base-superior";
        // Parte de baixo do cilindro
        var geometryCircunferenceBottom = new __WEBPACK_IMPORTED_MODULE_1_three__["CircleGeometry"](this.radius, 90, 10);
        var materialCircunferenceBottom = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blueShadow });
        var circunferenceBottom = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCircunferenceBottom, materialCircunferenceBottom);
        circunferenceBottom.position.set(-60, -25.01, 0);
        circunferenceBottom.rotateX(Math.PI / 2);
        circunferenceBottom.name = "base-inferior";
        // Linha do raio
        var materialRadius = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: this.black });
        var geometryRadius = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        geometryRadius.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](-60, 25.01, 0), new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.radius - 60, 25.01, 0));
        var radius = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometryRadius, materialRadius);
        radius.name = "reta-raio";
        // Label do raio
        var labelRadius = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r', 6, 'black');
        labelRadius.position.x = (this.radius / 2) - 60;
        labelRadius.position.y = 29;
        labelRadius.name = "label-raio";
        // Label da borda
        var labelBorder = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 6, 'red');
        labelBorder.position.x = this.radius - 60;
        labelBorder.position.y = 29;
        labelBorder.name = "label-a";
        // Label do centro
        var labelCenter = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 6, 'red');
        labelCenter.position.x = -1 - 60;
        labelCenter.position.y = 29;
        labelCenter.name = "label-o";
        // Gerando as bases do cilindro
        var cylinderBaseTopGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["CircleGeometry"](this.radius, 90, 10);
        var cylinderBaseTopMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blueShadow });
        var cylinderBaseTop = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](cylinderBaseTopGeometry, cylinderBaseTopMaterial);
        cylinderBaseTop.position.set(60, 25.001, 0);
        var cylinderBaseTop2 = cylinderBaseTop.clone();
        cylinderBaseTop.rotateX(-Math.PI / 2);
        cylinderBaseTop.name = "base-superior-exemplo";
        cylinderBaseTop2.rotateX(Math.PI / 2);
        cylinderBaseTop2.name = "base-superior2-exemplo";
        var cylinderBaseBottomGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["CircleGeometry"](this.radius, 90, 10);
        var cylinderBaseBottomMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blueShadow });
        var cylinderBaseBottom = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](cylinderBaseBottomGeometry, cylinderBaseBottomMaterial);
        cylinderBaseBottom.position.set(60, -25.001, 0);
        var cylinderBaseBottom2 = cylinderBaseBottom.clone();
        cylinderBaseBottom.rotateX(-Math.PI / 2);
        cylinderBaseBottom.name = "base-inferior-exemplo";
        cylinderBaseBottom2.rotateX(Math.PI / 2);
        cylinderBaseBottom2.name = "base-inferior2-exemplo";
        this.geoScene.scene.add(cylinder, circunferenceTop, circunferenceBottom, radius, labelRadius, labelBorder, labelCenter, cylinderBaseTop, cylinderBaseTop2, cylinderBaseBottom, cylinderBaseBottom2);
        this.geoScene.render();
    };
    CiAreaBasesComponent.prototype.removeElements = function () {
        var _this = this;
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
    };
    CiAreaBasesComponent.prototype.changeRadius = function () {
        if (this.radius >= 5 && this.radius <= 50) {
            this.removeElements();
            this.makeElements();
            this.geoScene.render();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CiAreaBasesComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(0, 80, 160);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CiAreaBasesComponent.prototype, "geoScene", void 0);
    CiAreaBasesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ci-area-bases',
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-bases/ci-area-bases.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-bases/ci-area-bases.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiAreaBasesComponent);
    return CiAreaBasesComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-lateral/ci-area-lateral.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <div class=\" col-12 text-center\">\r\n      <h3 class=\"text-center\">Área lateral</h3>\r\n    </div>\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a área referente ao cilindro que deseja calcular</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"btn-container mt-2 row\">\r\n    <!-- Campos de entrada -->\r\n    <div class=\"content-container col-12 row px-0 mx-auto d-flex justify-content-center mt-4\" align=\"center\">\r\n      <p>\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{blue}r\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadius()\" max=\"9\" min=\"3\" />\r\n\r\n        e da altura(<ng-katex equation=\"\\color{red}h\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeHeight()\" max=\"14\" min=\"3\" />\r\n      </p>\r\n\r\n      <div\r\n        [className]=\"errorInput === true ? 'mt-1 alert alert-danger text-center' : 'mt-1 alert alert-primary text-center'\"\r\n        role=\"alert\">\r\n        O raio deve ser um valor inteiro contido entre <b>3</b> e <b>9</b>. <br>\r\n        A altura deve ser um valor inteiro contido entre <b>3</b> e <b>14</b>.\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid mb-4\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades</h3>\r\n    <p>A área lateral corresponde a área de um retângulo de medida <ng-katex equation=\"2 \\cdot \\pi \\cdot r\"></ng-katex>\r\n      por\r\n      <ng-katex equation=\"h\"></ng-katex>.\r\n    </p>\r\n\r\n    <!-- Fórmula da área lateral -->\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\textcolor{black}{A_l = 2 \\cdot \\pi} \\textcolor{blue}{\\cdot r} \\cdot \\textcolor{red}{ h} \">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cilindro/cilindro-areas-laterais.png\">\r\n    </div>\r\n\r\n    <hr />\r\n\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n              Cálculo = <ng-katex class=\"explicacao\" equation=\"{{ 2 * radius * height }} \\pi \\ u.a.\">\r\n              </ng-katex>\r\n            </button>\r\n            <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseTwo\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n\r\n              <!-- Passo 1  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A_l = 2 \\cdot \\pi} \\cdot \\textcolor{blue}{r} \\cdot \\textcolor{red}{h} \">\r\n                        </ng-katex>\r\n\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseThree\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Fórmula para o cálculo da Área Lateral.\r\n                    <ul>\r\n                      <li>\r\n                        <ng-katex equation=\"\\textcolor{blue}{ r }\"></ng-katex> = Raio.\r\n                      </li>\r\n                      <li>\r\n                        <ng-katex equation=\"\\textcolor{red}{ h }\"></ng-katex> = Altura.\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 2  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{A_l = 2 \\cdot \\pi} \\cdot \\textcolor{blue}{ {{ radius }} }\r\n                          \\color{black}{ \\cdot } \\textcolor{red}{ {{ height }} }\"> </ng-katex>\r\n\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseFour\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Aplicando os valores do raio(<ng-katex equation=\"\\color{blue}{ {{ radius }} }\"></ng-katex>)\r\n                    e da altura (<ng-katex equation=\"\\color{red}{ {{ height }} }\"></ng-katex>) na fórmula e então\r\n                    Multiplicamos 2 * raio(<ng-katex equation=\"\\color{blue}{ {{ radius }} }\"></ng-katex>) *\r\n                    altura (<ng-katex equation=\"\\color{red}{ {{ height }} }\"></ng-katex>).\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 3  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_l =} \\color{red}{ {{ 2 * radius * height }} } \\color{black}{ \\cdot \\pi u.a }\">\r\n                        </ng-katex>\r\n\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseFive\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado após a multiplicação. Agora\r\n                    multiplicamos esse resultado por\r\n                    <ng-katex equation=\"\\color{black}{ \\pi }\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 4  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_l =} {{ 2 * radius * height }} \\color{black}{ \\pi \\ u.a. }\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseSix\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final da multiplicação em medidas de unidade de área\r\n                    (<ng-katex class=\"explicacao\" equation=\"\\ u.a\"></ng-katex>).\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-lateral/ci-area-lateral.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-lateral/ci-area-lateral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiAreaLateralComponent; });
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




var CiAreaLateralComponent = /** @class */ (function () {
    function CiAreaLateralComponent() {
        this.buttons = [
            { title: "Área das bases", route: "ci_area_bases" },
            { title: "Área lateral", route: "ci_area_lateral" },
            { title: "Área total", route: "ci_area_total" }
        ];
        // Cores das linhas
        this.red = 0xcc0000;
        this.blue = 0x4683b4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        // Raio da base
        this.radius = 5;
        this.height = 7;
        this.PI = Math.PI;
        this.errorInput = false;
        // Variável de controle
        this.deslocXRectangle = 20;
        this.deslocXExample = -(this.deslocXRectangle + 10);
    }
    CiAreaLateralComponent.prototype.makeElements = function () {
        // ---------------- Lateral do cilindro ----------------
        // Label do exemplo cilindro
        var labelTitle = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("Lateral do cilindro aberta", 2, "black");
        labelTitle.position.set(this.deslocXRectangle, this.height + 5, 0); // posição do label
        // Retângulo
        var geometryRectangle = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](2 * Math.PI * this.radius, this.height + this.height, 32);
        var materialrectangle = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.blue,
            side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"]
        });
        var rectangle = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryRectangle, materialrectangle);
        rectangle.position.set(this.deslocXRectangle, 0, 0);
        // Linha 2πR (largura do retângulo)
        var geometryLineWidth = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](2 * Math.PI * this.radius, 0.1, 32);
        var materialLineWidth = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.black,
            side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"]
        });
        var lineWidth = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryLineWidth, materialLineWidth);
        lineWidth.position.set(this.deslocXRectangle, -this.height - 2, 0); // posição da linha
        // Linha vertical da esquerda |---------
        var geometryLineWidthLeft = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](0.1, 3, 32);
        var materialLineWidthLeft = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.black,
            side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"]
        });
        var lineWidthLeft = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryLineWidthLeft, materialLineWidthLeft);
        lineWidthLeft.position.set(-(Math.PI * this.radius) + this.deslocXRectangle, -this.height - 2, 0); // posição da linha
        // Linha vertical da direita ---------|
        var lineWidthRight = lineWidthLeft.clone();
        lineWidthRight.position.set(Math.PI * this.radius + this.deslocXRectangle, -this.height - 2, 0); // posição da linha
        // Label 2πR
        var labelWidth = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("2\u03C0" + this.radius, 2, "black");
        labelWidth.position.set(this.deslocXRectangle, -this.height - 2 + 1, 0); // posição da label da linha
        // Linha horizontal (altura do retângulo)
        var geometryLineHeight = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](this.height + this.height, 0.1, 32);
        var materialLineHeight = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.black,
            side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"]
        });
        var lineHeight = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryLineHeight, materialLineHeight);
        lineHeight.position.set(Math.PI * this.radius + 2 + this.deslocXRectangle, 0, 0); // posição da label da linha
        lineHeight.rotateZ(-Math.PI / 2);
        // Linha horizontal (topo da linha da orientação da altura)
        var lineHeightTop = lineWidthRight.clone();
        lineHeightTop.position.set(Math.PI * this.radius + 2 + this.deslocXRectangle, this.height, 0); // posição da label da linha
        lineHeightTop.rotateZ(-Math.PI / 2);
        // Linha horizontal (pé da linha da orientação da altura)
        var lineHeightBottom = lineWidthRight.clone();
        lineHeightBottom.position.set(Math.PI * this.radius + 2 + this.deslocXRectangle, -this.height, 0); // posição da label da linha
        lineHeightBottom.rotateZ(-Math.PI / 2);
        // Label h (altura)
        var labelHeight = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("h = " + this.height, 2, "black");
        labelHeight.position.set(Math.PI * this.radius + 5 + this.deslocXRectangle, 1.3, 0); // posição da label da linha
        // ---------------- Exemplo da esquerda ----------------
        // Label do exemplo cilindro
        var labelTitleEx = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("Cilindro fechado", 2, "black");
        labelTitleEx.position.set(this.deslocXExample, this.height + 5, 0); // posição do label
        // Cilindro
        var geometryCylinder = new __WEBPACK_IMPORTED_MODULE_1_three__["CylinderGeometry"](this.radius, this.radius, this.height + this.height, 32);
        var materialCylinder = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blue });
        var cylinderEx = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCylinder, materialCylinder);
        cylinderEx.position.x = this.deslocXExample;
        // Parte de cima do exemplo do cilindro
        var geometryCircunferenceTop = new __WEBPACK_IMPORTED_MODULE_1_three__["CylinderGeometry"](this.radius, this.radius, 0.15, 90);
        var materialCircunferenceTop = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.blueShadow
        });
        var circunferenceTopEx = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCircunferenceTop, materialCircunferenceTop);
        circunferenceTopEx.position.set(this.deslocXExample, this.height + 0.01, 0); // Posição da parte de cima do exemplo do cilindro
        // Parte de baixo do exemplo do cilindro
        var circunferenceBottomEx = circunferenceTopEx.clone();
        circunferenceBottomEx.position.set(this.deslocXExample, -this.height - 0.01, 0); // Posição da parte de baixo do exemplo do cilindro
        // Anel em volta do cilindro de exemplo
        var geometryCylinderRingEx = new __WEBPACK_IMPORTED_MODULE_1_three__["CylinderGeometry"](this.radius + 0.2, 2, 0, 32);
        var materialCylinderRingEx = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.black
        });
        var cylinderRingEx = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCylinderRingEx, materialCylinderRingEx);
        cylinderRingEx.position.x = this.deslocXExample;
        cylinderRingEx.position.y = -(this.height / 2) + 0.05;
        // Label do anel em volta do cilindro
        var labelRingEx = labelWidth.clone();
        labelRingEx.position.set(this.deslocXExample + 2, -(this.height / 2) + 3, this.radius + 2); // posição da label do anel do cilindro
        // ---------------- Adicionando na cena ----------------
        this.geoScene.scene.add(
        // --- Cilindro do exemplo ---
        labelTitleEx, cylinderEx, circunferenceTopEx, circunferenceBottomEx, cylinderRingEx, labelRingEx, 
        // --- Cilindro aberto ---
        labelTitle, rectangle, 
        // Largura
        lineWidth, lineWidthLeft, lineWidthRight, labelWidth, 
        // Altura
        lineHeight, lineHeightTop, lineHeightBottom, labelHeight);
        this.geoScene.render();
    };
    CiAreaLateralComponent.prototype.removeElements = function () {
        var _this = this;
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
    };
    CiAreaLateralComponent.prototype.changeRadius = function () {
        if (this.radius >= 3 && this.radius <= 9) {
            this.removeElements();
            this.makeElements();
            this.geoScene.render();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CiAreaLateralComponent.prototype.changeHeight = function () {
        if (this.height >= 3 && this.height <= 14) {
            this.removeElements();
            this.makeElements();
            this.geoScene.render();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CiAreaLateralComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(0, 32, 62);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CiAreaLateralComponent.prototype, "geoScene", void 0);
    CiAreaLateralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-ci-area-lateral",
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-lateral/ci-area-lateral.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-lateral/ci-area-lateral.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiAreaLateralComponent);
    return CiAreaLateralComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-total/ci-area-total.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <div class=\" col-12 text-center\">\r\n      <h3 class=\"text-center\">Área total</h3>\r\n    </div>\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a área referente ao cilindro que deseja calcular</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"btn-container mt-2 row\">\r\n    <!-- Campos de entrada -->\r\n    <div class=\"content-container col-12 row px-0 mx-auto d-flex justify-content-center mt-4\" align=\"center\">\r\n      <p>\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{blue}r\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeRadius()\" max=\"9\" min=\"5\" />\r\n        e da altura(<ng-katex equation=\"\\color{red}h\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"changeHeight()\" max=\"18\" min=\"5\" />\r\n      </p>\r\n\r\n      <div\r\n        [className]=\"errorInput === true ? 'mt-1 alert alert-danger text-center' : 'mt-1 alert alert-primary text-center'\"\r\n        role=\"alert\">\r\n        O raio deve ser um valor inteiro contido entre <b>5</b> e <b>9</b>. <br>\r\n        A altura deve ser um valor inteiro contido entre <b>5</b> e <b>18</b>.\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid mb-4\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      A área total é obtida somando-se a área lateral <ng-katex equation=\"A_l = \\pi \\cdot r \\cdot h\"></ng-katex> com a\r\n      área das bases <ng-katex equation=\"A_b = \\pi \\cdot r^2 \"></ng-katex>, assim:\r\n    </p>\r\n\r\n    <!-- Fórmula da área total -->\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\"\r\n        equation=\"\\color{black}{A_t = \\color{orchid}{ A_l } \\color{black}{+ 2 \\cdot} \\color{limegreen}{ A_b }}\">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cilindro/cilindro-area-total.png\">\r\n    </div>\r\n\r\n    <hr />\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n              Cálculo = <ng-katex class=\"explicacao\"\r\n                equation=\"{{ 2 * this.radius * (this.height + this.radius) }} \\pi \\ u.a.\">\r\n              </ng-katex>\r\n            </button>\r\n            <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseTwo\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!-- Passo 1  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A_t = \\textcolor{orchid}{ A_l } \\textcolor{black}{+ 2 \\cdot} \\textcolor{limegreen}{ A_b }}\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseThree\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Fórmula para o cálculo da área total.\r\n                    <ul>\r\n                      <li>\r\n                        <ng-katex equation=\"\\textcolor{orchid}{ A_l }\"></ng-katex> = Área lateral.\r\n                      </li>\r\n                      <li>\r\n                        <ng-katex equation=\"\\color{limegreen}{ A_b }\"></ng-katex> = Área das bases.\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 2  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A_t = 2 \\cdot \\pi \\cdot \\textcolor{blue}{r} \\cdot \\textcolor{red}{h} + 2 \\cdot \\pi \\cdot \\textcolor{blue}{r}^2} \">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseFour\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Expandindo a Área lateral(<ng-katex\r\n                      equation=\"\\textcolor{orchid}{A_l} = \\pi \\cdot \\textcolor{blue}{r} \\cdot \\textcolor{red}{h}\">\r\n                    </ng-katex>)\r\n                    e Àrea das bases(<ng-katex equation=\"\\textcolor{limegreen}{A_b} = \\pi \\cdot \\textcolor{blue}{r}^2 \">\r\n                    </ng-katex>).\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 3  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_t = 2 \\cdot \\pi \\cdot \\textcolor{blue}{r} \\cdot ( \\textcolor{red}{h} + \\textcolor{blue}{r} )}\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseFive\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Põe em evidência os fatores comuns dos polinômios.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 4  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_t = 2 \\cdot \\pi \\cdot \\color{blue}{ {{ radius }} } \\color{black}{\\cdot} \\color{black}{(} \\color{red}{ {{ height }} } \\color{black}{+} \\color{blue}{ {{ radius }} } \\color{black}{)}}\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseSix\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substitui os elementos e realiza-se os cálculos.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 5  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_t = \\color{red}{ {{ 2 * this.radius * (this.height + this.radius) }} } \\color{black}{ \\cdot \\pi  u.a }}\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseSeven\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Multiplica o resultado por <ng-katex equation=\"\\pi\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 6  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEight\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{A_t = {{ 2 * this.radius * (this.height + this.radius) }} \\color{black}{  \\pi \\ u.a }}\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseSeven\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseEight\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final da multiplicação em medidas de unidade de área\r\n                    (<ng-katex class=\"explicacao\" equation=\"\\ u.a\"></ng-katex>).\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-total/ci-area-total.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-area-total/ci-area-total.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiAreaTotalComponent; });
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




var CiAreaTotalComponent = /** @class */ (function () {
    function CiAreaTotalComponent() {
        this.buttons = [
            { title: "Área das bases", route: "ci_area_bases" },
            { title: "Área lateral", route: "ci_area_lateral" },
            { title: "Área total", route: "ci_area_total" }
        ];
        // Cores das linhas
        this.red = 0xcc0000;
        this.blue = 0x4683b4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        // Raio da base
        this.radius = 5;
        this.height = 10;
        this.PI = Math.PI;
        this.errorInput = false;
        this.resultado = 2 * Math.PI * this.radius * (this.radius + this.height);
        this.areaTotal = Number.isInteger(this.resultado)
            ? this.resultado
            : parseFloat(this.resultado.toFixed(2));
    }
    CiAreaTotalComponent.prototype.makeElements = function () {
        // ---------------- Cilindro aberto ----------------
        // Label do exemplo cilindro
        var labelTitle = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("Cilindro aberto", 2, "black");
        labelTitle.position.set(20, this.height + 5, 0); // posição do label
        // Retângulo
        var geometryRectangle = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](2 * Math.PI * this.radius, this.height + this.height, 32);
        var materialrectangle = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.blue,
            side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"]
        });
        var rectangle = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryRectangle, materialrectangle);
        rectangle.position.set(20, 0, -5);
        // Base de cima do cilindro
        var geometryCircunferenceTop = new __WEBPACK_IMPORTED_MODULE_1_three__["CylinderGeometry"](this.radius, this.radius, 0.15, 90);
        var materialCircunferenceTop = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.blueShadow
        });
        var circunferenceTop = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCircunferenceTop, materialCircunferenceTop);
        circunferenceTop.position.set(20, this.height + 0.1, 0);
        circunferenceTop.rotateY(-Math.PI / 2);
        // Base de baixc do cilindro
        var geometryCircunferenceBottom = new __WEBPACK_IMPORTED_MODULE_1_three__["CylinderGeometry"](this.radius, this.radius, 0.15, 90);
        var materialCircunferenceBottom = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.blueShadow
        });
        var circunferenceBottom = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCircunferenceBottom, materialCircunferenceBottom);
        circunferenceBottom.position.set(20, -this.height + 0.1, 0);
        circunferenceBottom.rotateY(-Math.PI / 2);
        // Linha 2πR
        var geometryLine = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](2 * Math.PI * this.radius, 0.1, 32);
        var materialLine = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.black,
            side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"]
        });
        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryLine, materialLine);
        line.position.set(20, 0.05 - this.height / 2, -4.9); // posição da linha
        // Label 2πR
        var labelWidth = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("2\u03C0" + this.radius, 2, "black");
        labelWidth.position.set(20, -(this.height / 2) + 2, -3.0); // posição da label da linha
        // ---------------- Exemplo da esquerda ----------------
        // Label do exemplo cilindro
        var labelTitleEx = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("Cilindro fechado", 2, "black");
        labelTitleEx.position.set(-20, this.height + 5, 0); // posição do label
        // Cilindro
        var geometryCylinder = new __WEBPACK_IMPORTED_MODULE_1_three__["CylinderGeometry"](this.radius, this.radius, this.height + this.height, 32);
        var materialCylinder = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: this.blue });
        var cylinderEx = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCylinder, materialCylinder);
        cylinderEx.position.x = -20;
        // Parte de cima do exemplo do cilindro
        var circunferenceTopEx = circunferenceTop.clone();
        circunferenceTopEx.position.set(-20, this.height + 0.01, 0); // Posição da parte de cima do exemplo do cilindro
        // Parte de baixo do exemplo do cilindro
        var circunferenceBottomEx = circunferenceBottom.clone();
        circunferenceBottomEx.position.set(-20, -this.height - 0.01, 0); // Posição da parte de baixo do exemplo do cilindro
        // Anel em volta do cilindro de exemplo
        var geometryCylinderRingEx = new __WEBPACK_IMPORTED_MODULE_1_three__["CylinderGeometry"](this.radius + 0.2, 2, 0, 32);
        var materialCylinderRingEx = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({
            color: this.black
        });
        var cylinderRingEx = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometryCylinderRingEx, materialCylinderRingEx);
        cylinderRingEx.position.x = -20;
        cylinderRingEx.position.y = -(this.height / 2) + 0.05;
        // Label do anel em volta do cilindro
        var labelRingEx = labelWidth.clone();
        labelRingEx.position.set(-18, -(this.height / 2) + 3, this.radius + 2); // posição da label do anel do cilindro
        // ---------------- Adicionando na cena ----------------
        this.geoScene.scene.add(
        // Cilindro do exemplo
        labelTitleEx, cylinderEx, circunferenceTop, circunferenceBottom, cylinderRingEx, labelRingEx, 
        // Cilindro aberto
        labelTitle, rectangle, circunferenceTopEx, circunferenceBottomEx, line, labelWidth);
        this.geoScene.render();
    };
    CiAreaTotalComponent.prototype.removeElements = function () {
        var _this = this;
        // Remove todos os elementos da cena
        var sizeGeoChildren = this.geoScene.scene.children.length;
        var componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
        componentsToDelete.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
    };
    CiAreaTotalComponent.prototype.changeRadius = function () {
        if (this.radius >= 5 && this.radius <= 9) {
            this.removeElements();
            this.makeElements();
            this.areaTotal = 2 * Math.PI * this.radius * (this.radius + this.height);
            this.areaTotal = Number.isInteger(this.areaTotal)
                ? this.areaTotal
                : parseFloat(this.areaTotal.toFixed(2));
            this.geoScene.render();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CiAreaTotalComponent.prototype.changeHeight = function () {
        if (this.height >= 5 && this.height <= 18) {
            this.removeElements();
            this.makeElements();
            this.areaTotal = 2 * Math.PI * this.radius * (this.radius + this.height);
            this.areaTotal = Number.isInteger(this.areaTotal)
                ? this.areaTotal
                : parseFloat(this.areaTotal.toFixed(2));
            this.geoScene.render();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CiAreaTotalComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(0, 20, 50);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CiAreaTotalComponent.prototype, "geoScene", void 0);
    CiAreaTotalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-ci-area-total",
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-total/ci-area-total.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-area-total/ci-area-total.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiAreaTotalComponent);
    return CiAreaTotalComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-areas/ci-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"info\">\r\n\r\n  <div class=\"row mt-2\">\r\n    <!-- Botões de navegação -->\r\n    <div class=\"btn-container mt-2 row\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Áreas</h3>\r\n      </div>\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a área referente ao cilindro que deseja calcular</h5>\r\n      <div class=\"row col-12\">\r\n        <geo-btn class=\"mx-auto\" *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\"\r\n          [route]=\"button.route\"></geo-btn>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Breve explicação -->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\"row col-12 mt-5\">\r\n        <div class=\"col-lg-4 col-md-6 col-12\">\r\n          <h5 class=\"text-center \">Área das bases</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/cilindro/cilindro-areas-bases.png\">\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-12\">\r\n          <h5 class=\"text-center mb-0\">Área lateral</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/cilindro/cilindro-areas-laterais.png\">\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-12\">\r\n          <h5 class=\"text-center mb-0\">Área total</h5>\r\n          <img class=\"img-fluid\" src=\"assets/images/geometria/cilindro/cilindro-area-total.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-areas/ci-areas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-areas/ci-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiAreasComponent; });
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

var CiAreasComponent = /** @class */ (function () {
    function CiAreasComponent() {
        this.buttons = [
            { title: "Área das bases", route: "ci_area_bases" },
            { title: "Área lateral", route: "ci_area_lateral" },
            { title: "Área total", route: "ci_area_total" }
        ];
    }
    CiAreasComponent.prototype.ngOnInit = function () {
    };
    CiAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ci-areas',
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-areas/ci-areas.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-areas/ci-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiAreasComponent);
    return CiAreasComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-definicao/ci-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n\r\n  <!-- Cilindro -->\r\n  <div class=\"row definition__group mt-4\">\r\n    <h3 class=\"col-12 text-center\">Definição</h3>\r\n    <div class=\"col-12\">\r\n      <!-- Explicação -->\r\n      <p class=\"p-justify\">Considere dois planos <strong>α</strong> e <strong>β</strong>, distintos e paralelos,\r\n        e um segmento de reta\r\n        MN com <strong>M</strong> pertencente a <strong>α</strong> e <strong>N</strong> pertencente a\r\n        <strong>β</strong>.</p>\r\n      <p>Dado um círculo <strong>C</strong> de centro <strong>O</strong> e raio <strong>r</strong>, contido em α,\r\n        chamamos de cilíndro\r\n        circular (ou simplesmente cilindro) à reunião de todos os segmentos de reta,\r\n        paralelos e congruentes ao segmento MN, que unem um ponto do círculo <strong>C</strong> a a um ponto\r\n        <strong>β</strong>. <ng-katex class=\"explicacao\" equation=\"\\overline{MN}\">\r\n        </ng-katex> ser perpendicular a <span>α</span>, o cilíndro é reto.\r\n      </p>\r\n    </div>\r\n    <!-- Imagem -->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <img src=\"assets/images/geometria/cilindro/cilindro.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n    <!-- Imagem -->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <img src=\"assets/images/geometria/cilindro/cilindro2.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n\r\n    <!-- Explicação -->\r\n    <p class=\"p-justify mt-5\">Um cilindro reto pode ser obtido também girando-se uma região retangular em torno de uma\r\n      reta\r\n      que contém um de seus lados. Por isso, o cilindro circular reto pode ser chamado também de cilindro de revolução,\r\n      uma vez que é o sólido gerado quando uma região retangular faz um giro completo em torno do eixo determinado por\r\n      um de seus lados.\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"col-lg-12 col-xl-12\">\r\n      <img src=\"assets/images/geometria/cilindro/cilindro3.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-definicao/ci-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.definition__group__img {\n  max-height: 45vh !important;\n  min-width: 10vw; }\n.definition__group__description {\n  /* \"Traçado\" que tem em cima de duas letras */ }\n.definition__group__description p {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n.definition__group__description--distance:before {\n    display: block;\n    content: '';\n    width: 27px;\n    height: 1px;\n    background: #000; }\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-definicao/ci-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiDefinicaoComponent; });
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

var CiDefinicaoComponent = /** @class */ (function () {
    function CiDefinicaoComponent() {
    }
    CiDefinicaoComponent.prototype.ngOnInit = function () {
    };
    CiDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ci-definicao',
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-definicao/ci-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-definicao/ci-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiDefinicaoComponent);
    return CiDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-elementos/ci-elementos.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n\r\n  <!-- Elementos -->\r\n  <div class=\"row definition__group mt-4 \">\r\n      <h3 class=\"col-12 text-center\">Elementos</h3>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <!-- Explicação -->\r\n    <div class=\"\">\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"> </i>\r\n          Os pontos do cilindro que pertencem ao plano β formam um círculo congruente aquele que está\r\n          contido em α e esses dois círculos são as <strong>bases</strong> do cilindro.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"> </i>\r\n           A reta determinada pelos centros <strong>O</strong> e <strong>O'</strong> é chamado\r\n           <strong>eixo</strong> do cilindro.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"> </i>\r\n            Todo segmento de reta paralelo ao eixo do cilindro, com uma extremidade na circunferência\r\n            contido em α e a outra na circunferência do círculo contido em β, é chamado <strong>geratriz</strong>\r\n            do cilindro.\r\n        </p>\r\n        <p class=\"p-justify\">\r\n          <i class=\"fa fa-caret-right\"> </i>\r\n            A distância entre β e α é a <strong>altura</strong> do cilindro.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <!-- Imagem -->\r\n    <div class=\"col-12 col-lg-6 col-xl-6 definition__group__description align-self-center\">\r\n        <img src=\"assets/images/geometria/cilindro/cilindro-elementos.png\" alt=\"\"\r\n          class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n      </div>\r\n\r\n\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-elementos/ci-elementos.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.definition__group__img {\n  max-height: 70vh;\n  min-height: 30vh;\n  min-width: 10vw; }\n.definition__group__description {\n  /* \"Traçado\" que tem em cima de duas letras */ }\n.definition__group__description--distance:before {\n    display: block;\n    content: '';\n    width: 18px;\n    height: 1px;\n    background: #000; }\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-elementos/ci-elementos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiElementosComponent; });
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

var CiElementosComponent = /** @class */ (function () {
    function CiElementosComponent() {
    }
    CiElementosComponent.prototype.ngOnInit = function () {
    };
    CiElementosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ci-elementos',
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-elementos/ci-elementos.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-elementos/ci-elementos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiElementosComponent);
    return CiElementosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-sidebar/ci-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"rp-sidebar\">\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ci_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ci_elementos']\">\r\n      Elementos\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ci_areas']\">\r\n      Áreas\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ci_volume']\">\r\n      Volume\r\n    </li>\r\n    <!-- <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cf_relacoes_metricas']\">\r\n      Construção\r\n    </li> -->\r\n  </ul>\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-sidebar/ci-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-sidebar/ci-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiSidebarComponent; });
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

var CiSidebarComponent = /** @class */ (function () {
    function CiSidebarComponent() {
    }
    CiSidebarComponent.prototype.ngOnInit = function () {
    };
    CiSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ci-sidebar',
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-sidebar/ci-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-sidebar/ci-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiSidebarComponent);
    return CiSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-view/ci-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n  <ci-sidebar class=\"slidebar\"></ci-sidebar>\r\n  <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-view/ci-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-view/ci-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiViewComponent; });
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

var CiViewComponent = /** @class */ (function () {
    function CiViewComponent() {
    }
    CiViewComponent.prototype.ngOnInit = function () {
    };
    CiViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ci-view',
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-view/ci-view.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-view/ci-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiViewComponent);
    return CiViewComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-volume/ci-volume.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <div class=\" col-12 text-center\">\r\n      <h3 class=\"text-center\">Volume</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Conteúdo -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <!-- Campos de entrada -->\r\n    <div class=\"content-container col-12 row px-0 mx-auto d-flex justify-content-center mt-4\" align=\"center\">\r\n      <p>\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{blue}r\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\" oninput=\"this.value = Math.abs(this.value)\"\r\n          (ngModelChange)=\"changeRadius()\" max=\"41\" min=\"5\" />\r\n        e da altura(<ng-katex equation=\"\\color{red}h\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\" oninput=\"this.value = Math.abs(this.value)\"\r\n          (ngModelChange)=\"changeHeight()\" max=\"41\" min=\"5\" />\r\n      </p>\r\n\r\n      <div\r\n        [className]=\"errorInput === true ? 'mt-1 alert alert-danger text-center' : 'mt-1 alert alert-primary text-center'\"\r\n        role=\"alert\">\r\n        O raio deve ser um valor inteiro contido entre <b>5</b> e <b>41</b>. <br>\r\n        A altura deve ser um valor inteiro contido entre <b>5</b> e <b>41</b>.\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"true\" [hasPerspective]=\"true\">\r\n    </geo-scene>\r\n\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O volume de um cilindro é obtido pelo produto da área da base pela altura(h),\r\n      ou seja:\r\n    </p>\r\n\r\n\r\n    <!-- Fórmula do volume -->\r\n    <p class=\"text-center\">\r\n      <ng-katex class=\"explicacao\" equation=\"V = \\pi \\cdot \\textcolor{blue}{r}^2 \\cdot \\textcolor{red}{h}\">\r\n      </ng-katex>\r\n    </p>\r\n\r\n    <!-- Imagem -->\r\n    <div class=\"text-center\">\r\n      <img class=\"img-fluid\" src=\"assets/images/geometria/cilindro/cilindro-volume.png\">\r\n    </div>\r\n\r\n    <hr />\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n              Cálculo = <ng-katex class=\"explicacao\"\r\n              equation=\"{{(this.radius * this.radius) * this.height}} \\cdot \\pi \\ u.v.\">\r\n            </ng-katex>\r\n            </button>\r\n            <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseTwo\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!-- Passo 1  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{V = \\pi \\cdot \\textcolor{blue}{r}^2 \\cdot \\textcolor{red}{h}}\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseOne\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Fórmula para o cálculo do volume.\r\n                    <ul>\r\n                      <li>\r\n                        <ng-katex equation=\"\\color{blue}{ r }\"></ng-katex> = raio.\r\n                      </li>\r\n                      <li>\r\n                        <ng-katex equation=\"\\color{red}{ h }\"></ng-katex> = altura.\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 2  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{V = \\pi \\cdot \\textcolor{blue}{ {{this.radius}} } \\color{black}{^2} \\cdot \\color{red}{{this.height}}}\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseThree\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Aplicando o raio(<ng-katex equation=\"\\color{blue}{ {{ radius }} }\"></ng-katex>)\r\n                    e a altura(<ng-katex equation=\"\\color{red}{ {{ height }} }\"></ng-katex>) na fórmula.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!-- Passo 3  -->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\color{black}{V = \\color{black}{{(this.radius * this.radius) * this.height}} \\color{black}{\\cdot \\pi \\ u.v.}}\">\r\n                        </ng-katex>\r\n                        <i id=\"katex\" class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseFour\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final em unidades de volume \r\n                    (<ng-katex class=\"explicacao\" equation=\"\\ u.v\"></ng-katex>).\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-volume/ci-volume.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/cilindro/components/ci-volume/ci-volume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiVolumeComponent; });
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




var CiVolumeComponent = /** @class */ (function () {
    function CiVolumeComponent() {
        this.radius = 15;
        this.height = 30;
        // Cores das linhas
        this.red = 0xcc0000;
        this.blue = 0x4683b4;
        this.blueShadow = 0x3f76a2;
        this.black = 0x000000;
        this.errorInput = false;
    }
    CiVolumeComponent.prototype.makeElements = function () {
        //Tampa de cima
        var geometryCircunference = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radius, 92);
        var materialCircunference = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blueShadow
        });
        var circunference = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometryCircunference, materialCircunference);
        circunference.position.set(0, this.height / 2 + 0.2, 0);
        circunference.rotateX(-Math.PI / 2);
        //Tampa de baixo
        var circunferenceBottom = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](geometryCircunference, materialCircunference);
        circunferenceBottom.position.set(0, -(this.height / 2 + 0.2), 0);
        circunferenceBottom.rotateX(+Math.PI / 2);
        this.geoScene.scene.add(circunference);
        this.geoScene.scene.add(circunferenceBottom);
        // Cilindro em si
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blue
        });
        var cylinderGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CylinderGeometry"](this.radius, this.radius, this.height, 32);
        var cylinder = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](cylinderGeometry, material);
        this.geoScene.scene.add(cylinder);
        // Adicionando ponto central do círculo
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.black
        }));
        centerPoint.position.y = this.height / 2 + 1;
        centerPoint.rotateX(-Math.PI / 2);
        // Adicionando representação da medida do raio
        var radiusGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.height / 2 + 1, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.radius, this.height / 2 + 1, 0));
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: this.red,
            linewidth: 2
        }));
        // Adicionando label do raio da circunferência
        var radiusLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("r", 5, "red");
        radiusLabel.position.x = this.radius / 2;
        radiusLabel.position.y = this.height / 2 + 5;
        this.geoScene.scene.add(line, centerPoint, radiusLabel);
        this.geoScene.render();
    };
    CiVolumeComponent.prototype.ngAfterViewInit = function () {
        this.geoScene.camera.position.set(100, 50, 50);
        this.geoScene.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        this.makeElements();
    };
    CiVolumeComponent.prototype.alterCylinder = function () {
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
    CiVolumeComponent.prototype.changeRadius = function () {
        if (this.radius >= 5 && this.radius <= 41) {
            this.alterCylinder();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    CiVolumeComponent.prototype.changeHeight = function () {
        if (this.height >= 5 && this.height <= 41) {
            this.alterCylinder();
            this.errorInput = false;
        }
        else {
            this.errorInput = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CiVolumeComponent.prototype, "geoScene", void 0);
    CiVolumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ifmath-ci-volume",
            template: __webpack_require__("./src/app/views/geometria/cilindro/components/ci-volume/ci-volume.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/cilindro/components/ci-volume/ci-volume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiVolumeComponent);
    return CiVolumeComponent;
}());



/***/ })

});
//# sourceMappingURL=cilindro.module.chunk.js.map