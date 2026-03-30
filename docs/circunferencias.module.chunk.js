webpackJsonp(["circunferencias.module"],{

/***/ "./src/app/views/geometria/circunferencias/circunferencias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircunferenciasModule", function() { return CircunferenciasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_geo_shared_module__ = __webpack_require__("./src/app/views/geometria/shared/geo-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__circunferencias_routing__ = __webpack_require__("./src/app/views/geometria/circunferencias/circunferencias.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cf_definicao_cf_definicao_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-definicao/cf-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cf_view_cf_view_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-view/cf-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cf_sidebar_cf_sidebar_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-sidebar/cf-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cf_posicao_relativa_cf_posicao_relativa_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa/cf-posicao-relativa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cf_posicao_relativa_pc_cf_posicao_relativa_pc_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-pc/cf-posicao-relativa-pc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_cf_angulos_cf_angulos_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulos/cf-angulos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_cf_angulo_central_cf_angulo_central_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-central/cf-angulo-central.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cf_angulo_inscrito_cf_angulo_inscrito_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-inscrito/cf-angulo-inscrito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cf_angulo_capaz_cf_angulo_capaz_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-capaz/cf-angulo-capaz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cf_angulo_segmento_cf_angulo_segmento_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-segmento/cf-angulo-segmento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cf_angulo_nao_pertence_cf_angulo_nao_pertence_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-nao-pertence/cf-angulo-nao-pertence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cf_posicao_relativa_rc_cf_posicao_relativa_rc_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-rc/cf-posicao-relativa-rc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cf_posicao_relativa_cc_cf_posicao_relativa_cc_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-cc/cf-posicao-relativa-cc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_cf_relacoes_metricas_cf_relacoes_metricas_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas/cf-relacoes-metricas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_cf_relacoes_metricas_rc_cf_relacoes_metricas_rc_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_cf_relacoes_metricas_rs_cf_relacoes_metricas_rs_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_cf_relacoes_metricas_rst_cf_relacoes_metricas_rst_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_cf_comprimento_circunferencia_cf_comprimento_circunferencia_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_cf_comprimento_circunferencia_np_cf_comprimento_circunferencia_np_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_cl_area_circ_cl_area_circ_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-circ/cl-area-circ.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_cl_area_setor_cl_area_setor_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-setor/cl-area-setor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_cl_area_coroa_cl_area_coroa_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-coroa/cl-area-coroa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_pipes_no_thousand_dots_pipe__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/pipes/no-thousand-dots.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_cl_definicao_cl_definicao_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-definicao/cl-definicao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var CircunferenciasModule = /** @class */ (function () {
    function CircunferenciasModule() {
    }
    CircunferenciasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__circunferencias_routing__["a" /* CircunferenciasRouting */],
                __WEBPACK_IMPORTED_MODULE_2__shared_geo_shared_module__["a" /* GeoSharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_cf_definicao_cf_definicao_component__["a" /* CfDefinicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_cf_view_cf_view_component__["a" /* CfViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_cf_sidebar_cf_sidebar_component__["a" /* CfSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_cf_posicao_relativa_cf_posicao_relativa_component__["a" /* CfPosicaoRelativaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_cf_posicao_relativa_pc_cf_posicao_relativa_pc_component__["a" /* CfPosicaoRelativaPcComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_cf_angulos_cf_angulos_component__["a" /* CfAngulosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_cf_angulo_central_cf_angulo_central_component__["a" /* CfAnguloCentralComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_cf_angulo_inscrito_cf_angulo_inscrito_component__["a" /* CfAnguloInscritoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_cf_angulo_capaz_cf_angulo_capaz_component__["a" /* CfAnguloCapazComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_cf_angulo_segmento_cf_angulo_segmento_component__["a" /* CfAnguloSegmentoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cf_angulo_nao_pertence_cf_angulo_nao_pertence_component__["a" /* CfAnguloNaoPertenceComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_cf_posicao_relativa_rc_cf_posicao_relativa_rc_component__["a" /* CfPosicaoRelativaRcComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_cf_posicao_relativa_cc_cf_posicao_relativa_cc_component__["a" /* CfPosicaoRelativaCcComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_cf_relacoes_metricas_cf_relacoes_metricas_component__["a" /* CfRelacoesMetricasComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_cf_relacoes_metricas_rc_cf_relacoes_metricas_rc_component__["a" /* CfRelacoesMetricasRcComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_cf_relacoes_metricas_rs_cf_relacoes_metricas_rs_component__["a" /* CfRelacoesMetricasRsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_cf_relacoes_metricas_rst_cf_relacoes_metricas_rst_component__["a" /* CfRelacoesMetricasRstComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_cf_comprimento_circunferencia_cf_comprimento_circunferencia_component__["a" /* CfComprimentoCircunferenciaComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_cf_comprimento_circunferencia_np_cf_comprimento_circunferencia_np_component__["a" /* CfComprimentoCircunferenciaNpComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_cl_area_circ_cl_area_circ_component__["a" /* ClAreaCircComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_cl_area_setor_cl_area_setor_component__["a" /* ClAreaSetorComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_cl_area_coroa_cl_area_coroa_component__["a" /* ClAreaCoroaComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_pipes_no_thousand_dots_pipe__["a" /* NoThousandDotsPipe */],
                __WEBPACK_IMPORTED_MODULE_30__components_cl_definicao_cl_definicao_component__["a" /* ClDefinicaoComponent */],
            ]
        })
    ], CircunferenciasModule);
    return CircunferenciasModule;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/circunferencias.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircunferenciasRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cl_definicao_cl_definicao_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-definicao/cl-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cf_relacoes_metricas_rst_cf_relacoes_metricas_rst_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cf_relacoes_metricas_rs_cf_relacoes_metricas_rs_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cf_relacoes_metricas_rc_cf_relacoes_metricas_rc_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cf_view_cf_view_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-view/cf-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cf_definicao_cf_definicao_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-definicao/cf-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cf_posicao_relativa_cf_posicao_relativa_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa/cf-posicao-relativa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cf_posicao_relativa_pc_cf_posicao_relativa_pc_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-pc/cf-posicao-relativa-pc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cf_angulos_cf_angulos_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulos/cf-angulos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_cf_angulo_central_cf_angulo_central_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-central/cf-angulo-central.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_cf_angulo_inscrito_cf_angulo_inscrito_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-inscrito/cf-angulo-inscrito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cf_angulo_capaz_cf_angulo_capaz_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-capaz/cf-angulo-capaz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cf_angulo_segmento_cf_angulo_segmento_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-segmento/cf-angulo-segmento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cf_angulo_nao_pertence_cf_angulo_nao_pertence_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-nao-pertence/cf-angulo-nao-pertence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cf_posicao_relativa_rc_cf_posicao_relativa_rc_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-rc/cf-posicao-relativa-rc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cf_posicao_relativa_cc_cf_posicao_relativa_cc_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-cc/cf-posicao-relativa-cc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cf_relacoes_metricas_cf_relacoes_metricas_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas/cf-relacoes-metricas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_cf_comprimento_circunferencia_cf_comprimento_circunferencia_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_cf_comprimento_circunferencia_np_cf_comprimento_circunferencia_np_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_cl_area_circ_cl_area_circ_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-circ/cl-area-circ.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_cl_area_setor_cl_area_setor_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-setor/cl-area-setor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_cl_area_coroa_cl_area_coroa_component__ = __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-coroa/cl-area-coroa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__components_cf_view_cf_view_component__["a" /* CfViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'cf_definicao',
                pathMatch: 'full',
            },
            {
                path: 'cf_definicao',
                component: __WEBPACK_IMPORTED_MODULE_7__components_cf_definicao_cf_definicao_component__["a" /* CfDefinicaoComponent */]
            },
            // Rotas posição relativa
            {
                path: 'cf_posicao_relativa',
                component: __WEBPACK_IMPORTED_MODULE_8__components_cf_posicao_relativa_cf_posicao_relativa_component__["a" /* CfPosicaoRelativaComponent */]
            },
            {
                path: 'cf_posicao_relativa_pc',
                component: __WEBPACK_IMPORTED_MODULE_9__components_cf_posicao_relativa_pc_cf_posicao_relativa_pc_component__["a" /* CfPosicaoRelativaPcComponent */]
            },
            {
                path: 'cf_posicao_relativa_rc',
                component: __WEBPACK_IMPORTED_MODULE_16__components_cf_posicao_relativa_rc_cf_posicao_relativa_rc_component__["a" /* CfPosicaoRelativaRcComponent */]
            },
            {
                path: 'cf_posicao_relativa_cc',
                component: __WEBPACK_IMPORTED_MODULE_17__components_cf_posicao_relativa_cc_cf_posicao_relativa_cc_component__["a" /* CfPosicaoRelativaCcComponent */]
            },
            // Rotas angulos da circunferência
            {
                path: 'cf_angulos',
                component: __WEBPACK_IMPORTED_MODULE_10__components_cf_angulos_cf_angulos_component__["a" /* CfAngulosComponent */]
            },
            {
                path: 'cf_angulo_central',
                component: __WEBPACK_IMPORTED_MODULE_11__components_cf_angulo_central_cf_angulo_central_component__["a" /* CfAnguloCentralComponent */]
            },
            {
                path: 'cf_angulo_inscrito',
                component: __WEBPACK_IMPORTED_MODULE_12__components_cf_angulo_inscrito_cf_angulo_inscrito_component__["a" /* CfAnguloInscritoComponent */]
            },
            {
                path: 'cf_angulo_capaz',
                component: __WEBPACK_IMPORTED_MODULE_13__components_cf_angulo_capaz_cf_angulo_capaz_component__["a" /* CfAnguloCapazComponent */]
            },
            {
                path: 'cf_angulo_segmento',
                component: __WEBPACK_IMPORTED_MODULE_14__components_cf_angulo_segmento_cf_angulo_segmento_component__["a" /* CfAnguloSegmentoComponent */]
            },
            {
                path: 'cf_angulo_nao_pertence',
                component: __WEBPACK_IMPORTED_MODULE_15__components_cf_angulo_nao_pertence_cf_angulo_nao_pertence_component__["a" /* CfAnguloNaoPertenceComponent */]
            },
            // Rotas Comprimento da Circunferência
            {
                path: 'cf_comprimento_circunferencia',
                component: __WEBPACK_IMPORTED_MODULE_19__components_cf_comprimento_circunferencia_cf_comprimento_circunferencia_component__["a" /* CfComprimentoCircunferenciaComponent */]
            },
            {
                path: 'cf_numero_pi',
                component: __WEBPACK_IMPORTED_MODULE_20__components_cf_comprimento_circunferencia_np_cf_comprimento_circunferencia_np_component__["a" /* CfComprimentoCircunferenciaNpComponent */]
            },
            // Rotas relações métricas
            {
                path: 'cf_relacoes_metricas',
                component: __WEBPACK_IMPORTED_MODULE_18__components_cf_relacoes_metricas_cf_relacoes_metricas_component__["a" /* CfRelacoesMetricasComponent */]
            },
            {
                path: 'cf_relacoes_metricas_rc',
                component: __WEBPACK_IMPORTED_MODULE_3__components_cf_relacoes_metricas_rc_cf_relacoes_metricas_rc_component__["a" /* CfRelacoesMetricasRcComponent */]
            },
            {
                path: 'cf_relacoes_metricas_rs',
                component: __WEBPACK_IMPORTED_MODULE_2__components_cf_relacoes_metricas_rs_cf_relacoes_metricas_rs_component__["a" /* CfRelacoesMetricasRsComponent */]
            },
            {
                path: 'cf_relacoes_metricas_rst',
                component: __WEBPACK_IMPORTED_MODULE_1__components_cf_relacoes_metricas_rst_cf_relacoes_metricas_rst_component__["a" /* CfRelacoesMetricasRstComponent */]
            },
            // Rotas circulos
            {
                path: 'cl_definicao',
                component: __WEBPACK_IMPORTED_MODULE_0__components_cl_definicao_cl_definicao_component__["a" /* ClDefinicaoComponent */]
            },
            {
                path: 'cl_area_circ',
                component: __WEBPACK_IMPORTED_MODULE_21__components_cl_area_circ_cl_area_circ_component__["a" /* ClAreaCircComponent */]
            },
            {
                path: 'cl_area_coroa',
                component: __WEBPACK_IMPORTED_MODULE_23__components_cl_area_coroa_cl_area_coroa_component__["a" /* ClAreaCoroaComponent */]
            },
            {
                path: 'cl_area_setor',
                component: __WEBPACK_IMPORTED_MODULE_22__components_cl_area_setor_cl_area_setor_component__["a" /* ClAreaSetorComponent */]
            }
        ]
    }];
var CircunferenciasRouting = /** @class */ (function () {
    function CircunferenciasRouting() {
    }
    CircunferenciasRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */]]
        })
    ], CircunferenciasRouting);
    return CircunferenciasRouting;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-capaz/cf-angulo-capaz.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o ângulo da circunferência em relação a um vértice</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\" style=\"margin-right: 100px;\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n          <label>e do ângulo (<i><b> α </b></i>):</label>\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angle\" oninput=\"this.value = Math.round(Math.abs(this.value));\"\r\n            (ngModelChange)=\"checkInput()\" max=\"180\" min=\"0\" style=\"position: absolute; margin-left: 5px;\" />\r\n          <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\" id=\"degree\">°</span>\r\n        </p>\r\n        \r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\" style=\"text-align: center;\">\r\n            O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n          </div>\r\n        <div [className]=\"errorInputAngle === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\" style=\"text-align: center;\">\r\n          O ângulo <i><b> α </b></i> deve ser um valor contido entre <b> 0° </b> e <b>180°</b>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n    class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>\r\n      Arco Capaz\r\n    </h4>\r\n    <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\"\r\n      (click)=\"loadExample($event, button.value)\">\r\n      {{button.title}}\r\n    </button>\r\n    <hr />\r\n    <h5>\r\n      Propriedades:\r\n    </h5>\r\n    <div *ngIf=\"relation == 0\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <p>O Arco Capaz representa o conjunto de pontos do plano capazes de '”ver”um segmento sob um ângulo inscrito conhecido.</p>\r\n        <p>Esse lugar geométrico é constituído por um par de arcos, simétricos em relação ao segmento.</p>\r\n        <p>Todos os ângulos inscritos numa circunferência e que determinam um mesmo arco sobre ela, são iguais e valem a metade da medida desse arco.</p>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 1\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <p>O Arco Capaz representa o conjunto de pontos do plano capazes de '”ver”um segmento sob um ângulo inscrito conhecido.</p>\r\n        <p>Esse lugar geométrico é constituído por um par de arcos, simétricos em relação ao segmento.</p>\r\n        <p>Todos os ângulos inscritos numa circunferência e que determinam um mesmo arco sobre ela, são iguais e valem a metade da medida desse arco.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-capaz/cf-angulo-capaz.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-capaz/cf-angulo-capaz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfAnguloCapazComponent; });
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





/**
 * Enum para definir a relação entre as circunferÊncias
 */
var Relation;
(function (Relation) {
    Relation[Relation["ARC"] = 0] = "ARC";
    Relation[Relation["PAR"] = 1] = "PAR";
})(Relation || (Relation = {}));
var CfAnguloCapazComponent = /** @class */ (function () {
    function CfAnguloCapazComponent() {
        this.relation = Relation.ARC;
        this.angle = 45;
        this.showAngle = this.angle;
        this.oldAngle = this.angle;
        this.dragging = false; // Variável para controle do drag
        this.dragged = ""; // Variavel para controle de qual objeto foi arrastado
        this.currentIndex = []; // Geometria da cena a qual irá se mover
        // Raycaster da página, utilizado para o "clicar e arrastar"
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        // Propriedades da circunferência principal
        this.radius = 9;
        this.radiusExt = 30; // Circunferência que forma a linha
        this.radiusInt = 29; // Circunferência queserá a "parte de dentro"
        this.blue = 0x4683B4;
        this.red = 0xFF0000;
        this.preto = 0x000000;
        //botões
        this.buttons = [
            { title: "Ângulo Central", route: "cf_angulo_central" },
            { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
            { title: "Arco Capaz", route: "cf_angulo_capaz" },
            { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
            { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
        ];
        //Botoes do menu da direita
        this.buttons_examples = [
            { title: 'Arco Capaz', value: 0 },
            { title: 'Par de Arcos Capazes', value: 1 }
        ];
        this.slide = 21;
    }
    CfAnguloCapazComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        this.radiusExt = 30;
        this.angle = 45;
        // Checagem do tipo da relação
        switch (this.relation) {
            case Relation.ARC:
                this.checkInput();
                break;
            case Relation.PAR:
                this.checkInput();
                break;
        }
    };
    CfAnguloCapazComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        var arr = [];
        this.insersects.forEach(function (el) {
            if (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "vertice") {
                arr.push(el);
                _this.currentIndex = arr;
                return;
            }
        });
    };
    CfAnguloCapazComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    CfAnguloCapazComponent.prototype.ngDoCheck = function () {
        if (this.angle >= 0 && this.angle <= 180) {
            this.showAngle = this.angle;
            this.oldAngle = this.angle;
        }
        this.geoScene.addDegreeSymbol(this.angle, 'degree');
    };
    /**
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
    CfAnguloCapazComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
            this.insersects.forEach(function (el) {
                if (el.object.name == "ponto-a" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (el.object.name == "ponto-b" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (el.object.name == "vertice" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length >= 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "ponto-a") {
                this.dragged = "A";
            }
            else if (this.currentIndex[0].object.name == "ponto-b") {
                this.dragged = "B";
            }
            else if (this.currentIndex[0].object.name == "vertice") {
                this.dragged = "M";
            }
            if (this.angle === 180)
                this.angle = 179.9;
            this.reDrawPointsToCircle();
            this.reDrawAngle();
            this.reDrawArc();
            if (this.relation === Relation.PAR) {
                this.geoScene.scene.children.forEach(function (el) {
                    if (el.name === "label-o")
                        el.position.x = +2;
                    el.position.x += _this.slide;
                    if (el.name === "label-a" || el.name === "label-b") {
                        el.position.x = 0;
                    }
                });
                this.geoScene.scene.children[0].position.setX(this.geoScene.scene.getObjectByName("label-o").position.x - 2);
                if (this.angle <= 90) {
                    this.geoScene.scene.children[1].position.x = -this.geoScene.scene.children[0].position.x;
                    this.geoScene.scene.getObjectByName("label-o").visible = true;
                    try {
                        this.geoScene.scene.getObjectByName("label-o").visible = true;
                    }
                    catch (_a) { }
                }
                else {
                    this.geoScene.scene.children[0].visible = false;
                    this.geoScene.scene.children[1].visible = false;
                    this.geoScene.scene.getObjectByName("label-o").visible = false;
                    try {
                        this.geoScene.scene.getObjectByName("label-o").visible = false;
                    }
                    catch (_b) { }
                }
                this.mirror();
            }
            this.geoScene.render();
        }
    };
    CfAnguloCapazComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfAnguloCapazComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    CfAnguloCapazComponent.prototype.reDrawPointsToCircle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var verticePoint = this.geoScene.scene.getObjectByName("vertice");
        var lineA = this.geoScene.scene.getObjectByName("line-a");
        var lineB = this.geoScene.scene.getObjectByName("line-b");
        var lineAB = this.geoScene.scene.getObjectByName("line-ab");
        this.geoScene.scene.remove(lineA);
        this.geoScene.scene.remove(lineB);
        this.geoScene.scene.remove(lineAB);
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "A") {
            var distance = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2) //distancia entre o ponto zero e A
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointA.position.x = (distancesRatio * circlePointA.position.x); // posicao do x na linha quando a distancia for o valor do raio
            circlePointA.position.y = (distancesRatio * circlePointA.position.y); // posicao do y na linha quando a distancia for o valor do raio
            circlePointB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](circlePointA.position.x, -circlePointA.position.y, 0.6));
            if (this.relation === Relation.PAR) {
                verticePoint.position.x = this.radiusExt - 0.5;
                verticePoint.position.y = 0;
                this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
                this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
            }
        }
        else if (this.dragged === "B") {
            var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio
            circlePointB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](circlePointB.position.x, -circlePointB.position.y, 0.6));
            if (this.relation === Relation.PAR) {
                verticePoint.position.x = this.radiusExt - 0.5;
                verticePoint.position.y = 0;
                this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
                this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
            }
        }
        var a = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](verticePoint.position.x - circlePointA.position.x, verticePoint.position.y - circlePointA.position.y);
        var b = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](verticePoint.position.x - circlePointB.position.x, verticePoint.position.y - circlePointB.position.y);
        var ab = a.x * b.x + a.y * b.y;
        var aMod = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
        var bMod = Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2));
        var cos = ab / (aMod * bMod);
        var angle = Math.acos(cos) * 180 / Math.PI;
        var radians = angle * (Math.PI / 180);
        if (this.dragged !== "A" && this.dragged !== "B")
            radians = this.angle * (Math.PI / 180);
        var bCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.cos(radians) * (this.radiusExt - 0.5)), -(Math.sin(radians) * (this.radiusExt - 0.5)), 0.5), aCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.cos(radians) * (this.radiusExt - 0.5)), Math.sin(radians) * (this.radiusExt - 0.5), 0.5);
        if (this.dragged === "M") {
            var distance = Math.sqrt((Math.pow((verticePoint.position.x), 2) + Math.pow((verticePoint.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            verticePoint.position.x = (distancesRatio * verticePoint.position.x); // posicao do x na linha quando a distancia for o valor do raio
            verticePoint.position.y = (distancesRatio * verticePoint.position.y); // posicao do y na linha quando a distancia for o valor do raio
            if (this.relation === Relation.PAR) {
                circlePointA.position.copy(aCordinates);
                circlePointB.position.copy(bCordinates);
                if (verticePoint.position.x <= circlePointA.position.x + 1) {
                    verticePoint.position = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.cos(1 * (Math.PI / 180)) * (this.radiusExt - 0.5)), Math.sin(1 * (Math.PI / 180)) * (this.radiusExt - 0.5), 0.5);
                }
            }
        }
        if (this.relation === Relation.PAR)
            this.slide = -aCordinates.x;
        var distanceA = Math.sqrt((Math.pow((circlePointA.position.x - verticePoint.position.x), 2) + Math.pow((circlePointA.position.y - verticePoint.position.y), 2) //distancia entre o ponto V e A
        ));
        var distancesRatioA = (distanceA + 3) / distanceA;
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x - verticePoint.position.x), 2) + Math.pow((circlePointB.position.y - verticePoint.position.y), 2) //distancia entre o ponto V e B
        ));
        var distancesRatioB = (distanceB + 3) / distanceB;
        var xA = (1 - distancesRatioA) * verticePoint.position.x + distancesRatioA * circlePointA.position.x, yA = (1 - distancesRatioA) * verticePoint.position.y + distancesRatioA * circlePointA.position.y;
        var xB = (1 - distancesRatioB) * verticePoint.position.x + distancesRatioB * circlePointB.position.x, yB = (1 - distancesRatioB) * verticePoint.position.y + distancesRatioB * circlePointB.position.y;
        var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](verticePoint.position.x, verticePoint.position.y, 0.6));
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xA, yA, 0.6));
        lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineA.name = "line-a";
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](verticePoint.position.x, verticePoint.position.y, 0.6));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
        lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineB.name = "line-b";
        var geometryLineAB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineAB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](circlePointA.position.x, circlePointA.position.y, 0.6));
        geometryLineAB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](circlePointB.position.x, circlePointB.position.y, 0.6));
        lineAB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineAB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.blue, linewidth: 2 }));
        lineAB.name = "line-ab";
        // reordenando a renderizacao para os pontos nao ficarem em baixo da linha da circunferencia
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1; // vertice
        this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 2; // ponto a
        this.geoScene.scene.children[10].renderOrder = this.geoScene.scene.children.length - 3; // ponto b
        this.geoScene.scene.add(lineA, lineB, lineAB);
        this.geoScene.scene.children[13].renderOrder = this.geoScene.scene.children.length - 4;
        this.geoScene.scene.children[14].renderOrder = this.geoScene.scene.children.length - 5;
        this.geoScene.scene.children[15].renderOrder = this.geoScene.scene.children.length - 6;
        var lbls = ["A", "B", "M"];
        for (var i = 0; i < lbls.length; i++)
            this.reDrawLabel(lbls[i]);
        this.geoScene.render();
    };
    CfAnguloCapazComponent.prototype.reDrawAngle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var verticePoint = this.geoScene.scene.getObjectByName("vertice");
        //https://stackoverflow.com/a/1354158 - formula para descobrir o angulo entre tres pontos, sendo um o vertice
        var a = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](verticePoint.position.x - circlePointA.position.x, verticePoint.position.y - circlePointA.position.y);
        var b = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](verticePoint.position.x - circlePointB.position.x, verticePoint.position.y - circlePointB.position.y);
        var ab = a.x * b.x + a.y * b.y;
        var aMod = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
        var bMod = Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2));
        var cos = ab / (aMod * bMod);
        this.angle = Math.acos(cos) * 180 / Math.PI;
        var ang = this.geoScene.scene.getObjectByName("angle");
        var alphaGroup = this.geoScene.scene.getObjectByName("alpha");
        this.geoScene.scene.remove(ang, alphaGroup);
        alphaGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        alphaGroup.name = "alpha";
        var geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }), segmentCount = 92, radians = Math.acos(cos), radius = 5;
        if (this.radiusExt < 20)
            radius = 3;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = ((i / segmentCount) * radians) - (((segmentCount - i) / segmentCount) * radians);
            theta /= 2;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, -Math.cos(theta) * radius, 0));
            if (i == 46) { // quando estiver no ponto ao centro do angulo
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (radius + 2.5), -Math.cos(theta) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado
                var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
                line.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis
                var alpha_1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 5, '0x000000');
                alpha_1.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha
                alphaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                alphaGroup.add(alpha_1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
            }
        }
        var alpha = Math.atan2(circlePointA.position.y - verticePoint.position.y, circlePointA.position.x - verticePoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (verticePoint.position.x > 0 && alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var beta = Math.atan2(circlePointB.position.y - verticePoint.position.y, circlePointB.position.x - verticePoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (verticePoint.position.x > 0 && beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var rotation = beta * 0.00875 + alpha * 0.00875 + this.angle * 0.0175 + (90 - this.angle) * 0.0175; // sinceramente, nao sei explicar como cheguei nisso ai, mas funciona ¯\_(ツ)_/¯
        if (rotation.toString() !== 'NaN') {
            ang = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
            ang.position.copy(verticePoint.position); // movendo o angulo do centro para o vertice
            ang.rotateZ(rotation); // rotacionando o angulo para posicao entre as linhas
            ang.name = "angle";
            alphaGroup.position.copy(verticePoint.position); // movendo o alpha do centro para o vertice
            alphaGroup.rotateZ(rotation); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.add(ang, alphaGroup);
            this.angle = Math.round(this.angle);
        }
        else
            this.angle = 0;
        if (this.angle < 1 || this.angle > 179) {
            var distanceAV = Math.sqrt(Math.pow((circlePointA.position.x - verticePoint.position.x), 2) + Math.pow((circlePointA.position.y - verticePoint.position.y), 2));
            var distanceBV = Math.sqrt(Math.pow((circlePointB.position.x - verticePoint.position.x), 2) + Math.pow((circlePointB.position.y - verticePoint.position.y), 2));
            if (distanceAV < distanceBV)
                this.geoScene.scene.getObjectByName("line-a").visible = false;
            else if (distanceAV > distanceBV)
                this.geoScene.scene.getObjectByName("line-b").visible = false;
        }
    };
    CfAnguloCapazComponent.prototype.reDrawArc = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var vertex = this.geoScene.scene.getObjectByName("vertice");
        // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
        var alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo a angulo da reta B de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo
        var segmentCount = Math.round(360 * 2 - this.angle), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.blue, linewidth: 2 }), radians = (360 - this.angle * 2) * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        // rotacionar 1 grau -> 0.0175
        var rotation = (alpha - 90) * 0.0175;
        var rotationPar = (alpha + 90) * 0.0175;
        if (circlePointB.position.y > circlePointA.position.y && circlePointA.position.x < vertex.position.x) {
            rotation = (beta - 90) * 0.0175;
            rotationPar = (beta + 90) * 0.0175;
        }
        else if (circlePointB.position.y < circlePointA.position.y && circlePointA.position.x > vertex.position.x) {
            rotation = (beta - 90) * 0.0175;
            rotationPar = (beta + 90) * 0.0175;
        }
        if (rotation.toString() !== 'NaN') {
            materialArc.depthTest = false;
            var arcPar = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
            arcPar.position.x -= this.slide * 2;
            arcPar.rotateZ(rotationPar);
            arcPar.name = "arcPar";
            var arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
            arc.position.x = 0;
            arc.rotateZ(rotation);
            arc.name = "arc";
            if (this.relation === Relation.PAR)
                this.geoScene.scene.children[2] = arcPar;
            this.geoScene.scene.children[3] = arc;
            this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1;
            this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 2;
            this.geoScene.scene.children[10].renderOrder = this.geoScene.scene.children.length - 3;
        }
    };
    CfAnguloCapazComponent.prototype.reDrawLabel = function (label) {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var verticePoint = this.geoScene.scene.getObjectByName("vertice");
        var labelA = this.geoScene.scene.getObjectByName("label-a");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        var labelM = this.geoScene.scene.getObjectByName("label-m");
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "A") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2) //distancia entre o ponto zero e A
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointA.position.x, distancesRatio * circlePointA.position.y, 0.6));
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointB.position.x, distancesRatio * circlePointB.position.y, 0.6));
        }
        else if (label === "M") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((verticePoint.position.x), 2) + Math.pow((verticePoint.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelM.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * verticePoint.position.x, distancesRatio * verticePoint.position.y, 0.6));
        }
        this.geoScene.render();
    };
    CfAnguloCapazComponent.prototype.changeAngle = function () {
        var _this = this;
        if (this.angle >= 0 && this.angle <= 180) {
            var radians = this.angle * (Math.PI / 180);
            var bCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.cos(radians) * (this.radiusExt - 0.5)), -(Math.sin(radians) * (this.radiusExt - 0.5)), 0.5), aCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.cos(radians) * (this.radiusExt - 0.5)), Math.sin(radians) * (this.radiusExt - 0.5), 0.5);
            this.slide = -aCordinates.x;
            this.geoScene.scene.remove(this.geoScene.scene.getObjectByName('line-a'), this.geoScene.scene.getObjectByName('line-b'), this.geoScene.scene.getObjectByName('line-ab'), this.geoScene.scene.getObjectByName('angle'));
            var vertex = this.geoScene.scene.getObjectByName("vertice");
            vertex.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.radiusExt - 0.5, 0, 0));
            var pointA = this.geoScene.scene.getObjectByName("ponto-a");
            pointA.position.copy(aCordinates);
            var pointB = this.geoScene.scene.getObjectByName('ponto-b');
            pointB.position.copy(bCordinates);
            var distanceA = Math.sqrt((Math.pow((pointA.position.x - vertex.position.x), 2) + Math.pow((pointA.position.y - vertex.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatioA = (distanceA + 3) / distanceA;
            var distanceB = Math.sqrt((Math.pow((pointB.position.x - vertex.position.x), 2) + Math.pow((pointB.position.y - vertex.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatioB = (distanceB + 3) / distanceB;
            var xA = (1 - distancesRatioA) * (this.radiusExt - 0.5) + distancesRatioA * aCordinates.x, yA = distancesRatioA * aCordinates.y;
            var xB = (1 - distancesRatioB) * (this.radiusExt - 0.5) + distancesRatioB * bCordinates.x, yB = distancesRatioB * bCordinates.y;
            var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertex.position.x, vertex.position.y, 0.5));
            geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xA, yA, 0.6));
            var lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
            lineA.name = "line-a";
            var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertex.position.x, vertex.position.y, 0.5));
            geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
            var lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
            lineB.name = "line-b";
            var geometryLineAB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryLineAB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](pointA.position.x, pointA.position.y, 0.6));
            geometryLineAB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](pointB.position.x, pointB.position.y, 0.6));
            var lineAB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineAB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.blue, linewidth: 2 }));
            lineAB.name = "line-ab";
            this.reDrawAngle();
            this.reDrawArc();
            if (this.angle === 0) {
                this.geoScene.scene.getObjectByName("alpha").visible = false;
            }
            var lbls = ["A", "B", "M"];
            for (var i = 0; i < lbls.length; i++)
                this.reDrawLabel(lbls[i]);
            this.geoScene.scene.add(lineA, lineB, lineAB);
            this.geoScene.scene.children[13].renderOrder = this.geoScene.scene.children.length - 4;
            this.geoScene.scene.children[14].renderOrder = this.geoScene.scene.children.length - 5;
            this.geoScene.scene.children[15].renderOrder = this.geoScene.scene.children.length - 6;
            if (this.relation === Relation.PAR) {
                this.geoScene.scene.children.forEach(function (el) {
                    if (el.name === "label-o")
                        el.position.x = +2;
                    el.position.x += _this.slide;
                    if (el.name === "label-a" || el.name === "label-b") {
                        el.position.x = 0;
                    }
                });
                if (this.angle <= 90) {
                    this.geoScene.scene.children[1].position.x = -this.geoScene.scene.children[0].position.x;
                    this.geoScene.scene.getObjectByName("label-o").visible = true;
                    try {
                        this.geoScene.scene.getObjectByName("label-o").visible = true;
                    }
                    catch (_a) { }
                }
                else {
                    this.geoScene.scene.children[0].visible = false;
                    this.geoScene.scene.children[1].visible = false;
                    this.geoScene.scene.getObjectByName("label-o").visible = false;
                    try {
                        this.geoScene.scene.getObjectByName("label-o").visible = false;
                    }
                    catch (_b) { }
                }
            }
            this.mirror();
            this.showAngle = this.angle;
            this.oldAngle = this.angle;
            this.geoScene.render();
        }
        else {
            this.showAngle = this.oldAngle;
        }
    };
    CfAnguloCapazComponent.prototype.ngAfterViewInit = function () {
        this.reDrawDefault();
        // Label do ponto central
        var labelCircleCenter = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, this.preto.toString());
        labelCircleCenter.position.x = -2.5;
        labelCircleCenter.position.y = -3;
        labelCircleCenter.name = "label-o";
        // --------------  Ponto do vértice --------------
        var circleVertex = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30);
        var materialVertex = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.red });
        var vertexPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleVertex, materialVertex);
        vertexPoint.position.x = 29.5;
        vertexPoint.position.y = 0;
        vertexPoint.name = 'vertice';
        // Label do ponto do vétice
        var labelCircleVertex = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('M', 5, this.preto.toString());
        labelCircleVertex.position.x = 34;
        labelCircleVertex.position.y = 0;
        labelCircleVertex.name = 'label-m';
        //  -------------- Linha de cima --------------
        var geometryLineUp = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineUp.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29.5, 0, 0.1));
        geometryLineUp.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0.1));
        //Material da linha
        var materialLine = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 });
        var lineUp = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineUp, materialLine);
        lineUp.name = 'line-a';
        // Label da linha da esquerda
        var labelLineUp = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 5, this.preto.toString());
        labelLineUp.position.x = -25;
        labelLineUp.position.y = 25;
        labelLineUp.name = 'label-a';
        // Ponto da linha da esquerda
        var circleLineUp = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30);
        var materialCircleUp = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.red });
        var circleUpPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleLineUp, materialCircleUp);
        circleUpPoint.position.x = -21;
        circleUpPoint.position.y = 21;
        circleUpPoint.name = 'ponto-a';
        //  -------------- Linha de baixo --------------
        var geometryLineDown = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineDown.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29.5, 0, 0.1));
        geometryLineDown.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0.1));
        //Material da linha
        var materialLineDown = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 });
        var lineDown = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineDown, materialLineDown);
        lineDown.name = 'line-b';
        // Label da linha da direita
        var labelLineDown = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, this.preto.toString());
        labelLineDown.position.x = -25;
        labelLineDown.position.y = -25;
        labelLineDown.name = 'label-b';
        // Ponto da linha da direita
        var circleLineDown = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30);
        var materialCircleDown = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.red });
        var circleDownPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleLineDown, materialCircleDown);
        circleDownPoint.position.x = -21;
        circleDownPoint.position.y = -21;
        circleDownPoint.name = 'ponto-b';
        //  -------------- Linha que conecta a linha da esquerda e da direita --------------
        var geometryLineConnectLR = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineConnectLR.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0.1));
        geometryLineConnectLR.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0.1));
        //Material da linha
        var materialLineConnectLR = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.blue, linewidth: 2 });
        var lineConnectLR = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineConnectLR, materialLineConnectLR);
        lineConnectLR.name = 'line-ab';
        // -------------- Ângulo --------------
        var segmentCount = 92, radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.preto, linewidth: 2 }), radians = 45 * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        var alpha = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 5, '0x000000');
        alpha.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](22, 0, 0));
        alpha.name = "alpha";
        var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        angle.position.x = 29.5;
        angle.position.y = 0;
        angle.rotateZ(157 * 0.0175);
        angle.name = 'angle';
        // Adiciona os objetos na cena
        this.geoScene.scene.add(labelCircleCenter, vertexPoint, labelCircleVertex, circleUpPoint, lineUp, labelLineUp, lineDown, labelLineDown, circleDownPoint, lineConnectLR, angle, alpha);
        // Chamando o render da cena
        this.geoScene.render();
    };
    CfAnguloCapazComponent.prototype.mirror = function () {
        try {
            this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("l-vertice"), this.geoScene.scene.getObjectByName("l-labelVerticeLinha"), this.geoScene.scene.getObjectByName("l-label-o"), this.geoScene.scene.getObjectByName("l-lineALinha"), this.geoScene.scene.getObjectByName("l-lineBLinha"), this.geoScene.scene.getObjectByName("l-alphaLinha"), this.geoScene.scene.getObjectByName("l-anguloLinha"));
            // reordenando a renderizacao para os pontos nao ficarem em baixo da linha da circunferencia
            this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1; // vertice
            this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 2; // ponto a
            this.geoScene.scene.children[10].renderOrder = this.geoScene.scene.children.length - 3; // ponto b
        }
        catch (_a) { }
        if (this.relation === Relation.PAR) {
            var verticeLinha = this.geoScene.scene.getObjectByName("vertice").clone();
            verticeLinha.position.x = -verticeLinha.position.x;
            verticeLinha.position.y = -verticeLinha.position.y;
            verticeLinha.name = "l-vertice";
            var labelVerticeLinha = this.geoScene.scene.getObjectByName("label-m").clone();
            labelVerticeLinha.position.x = -labelVerticeLinha.position.x;
            labelVerticeLinha.position.y = -labelVerticeLinha.position.y;
            var linhaVertice = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("M'", 5, '0x000000');
            linhaVertice.position.copy(labelVerticeLinha.position);
            labelVerticeLinha = linhaVertice;
            labelVerticeLinha.name = "l-labelVerticeLinha";
            var labelCentroLinha = this.geoScene.scene.getObjectByName("label-o").clone();
            labelCentroLinha.position.x = -labelCentroLinha.position.x;
            var linhaCentro = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("O'", 4, '0x000000');
            linhaCentro.position.copy(labelCentroLinha.position);
            labelCentroLinha = linhaCentro;
            labelCentroLinha.name = "l-label-o";
            try {
                if (this.geoScene.scene.getObjectByName("label-o").visible)
                    labelCentroLinha.visible = true;
                else
                    labelCentroLinha.visible = false;
            }
            catch (_b) { }
            var lineALinha = this.geoScene.scene.getObjectByName("line-a").clone();
            lineALinha.position.x = -lineALinha.position.x;
            lineALinha.name = "l-lineALinha";
            lineALinha.rotateZ(180 * 0.0175);
            var lineBLinha = this.geoScene.scene.getObjectByName("line-b").clone();
            lineBLinha.position.x = -lineBLinha.position.x;
            lineBLinha.name = "l-lineBLinha";
            lineBLinha.rotateZ(180 * 0.0175);
            var alphaLinha = this.geoScene.scene.getObjectByName("alpha").clone();
            alphaLinha.add(new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]("   '", 5, '0x000000'));
            alphaLinha.children[2].position.copy(alphaLinha.children[1].position);
            alphaLinha.name = "l-alphaLinha";
            alphaLinha.rotateZ(180 * 0.0175);
            alphaLinha.position.x = -alphaLinha.position.x;
            alphaLinha.position.y = -alphaLinha.position.y;
            var anguloLinha = this.geoScene.scene.getObjectByName("angle").clone();
            anguloLinha.name = "l-anguloLinha";
            anguloLinha.rotateZ(178 * 0.0175);
            anguloLinha.position.x = -anguloLinha.position.x;
            anguloLinha.position.y = -anguloLinha.position.y;
            this.geoScene.scene.add(labelCentroLinha, labelVerticeLinha, verticeLinha, lineALinha, lineBLinha, alphaLinha, anguloLinha);
        }
    };
    CfAnguloCapazComponent.prototype.reDrawDefault = function () {
        if (this.relation === Relation.ARC) {
            // Adicionando novas circunferências na cena
            var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
                color: 0xcfcfcf
            });
            var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
            this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
            var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
                color: 0xffffff
            });
            var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
            this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
            this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
            this.geoScene.scene.children[2].position.x = 0;
            try {
                this.geoScene.scene.getObjectByName("label-o").position.x = -2;
            }
            catch (_a) { }
            ;
            var segmentCount = Math.round(270 * 2), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.blue, linewidth: 2 }), radians = 270 * (Math.PI) / 180;
            for (var i = 0; i <= segmentCount; i++) {
                var theta = (i / segmentCount) * radians;
                geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
            }
            materialArc.depthTest = false;
            var arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
            arc.position.x = 0;
            arc.rotateZ(45 * 0.0175);
            arc.name = "arc";
            this.geoScene.scene.children[3] = arc;
        }
        else if (this.relation === Relation.PAR) {
            this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
            this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
            this.geoScene.scene.children[0].name = "center";
            var segmentCount = Math.round(270 * 2), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.blue, linewidth: 2 }), radians = 270 * (Math.PI) / 180;
            for (var i = 0; i <= segmentCount; i++) {
                var theta = (i / segmentCount) * radians;
                geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
            }
            materialArc.depthTest = false;
            var arcPar = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
            arcPar.position.x = 0;
            arcPar.rotateZ((180 + 45) * 0.0175);
            arcPar.name = "arcPar";
            var arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
            arc.position.x = 0;
            arc.rotateZ(45 * 0.0175);
            arc.name = "arc";
            this.geoScene.scene.children[2] = arcPar;
            this.geoScene.scene.children[3] = arc;
            this.geoScene.scene.children[0].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.6));
            this.geoScene.scene.children[1].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-42, 0, 0.6));
            this.geoScene.scene.children[2].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-42, 0, 0.6));
            this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.6));
        }
    };
    CfAnguloCapazComponent.prototype.checkInput = function () {
        var checkAngle = (this.angle >= 0 && this.angle <= 180);
        var checkRadius = (this.radius >= 1 && this.radius <= 10);
        if (checkRadius && checkAngle) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputAngle = false;
            this.errorInputRadius = false;
            this.reDrawDefault();
            this.changeAngle();
        }
        else {
            if (!checkRadius)
                this.errorInputRadius = true;
            else
                this.errorInputRadius = false;
            if (!checkAngle)
                this.errorInputAngle = true;
            else
                this.errorInputAngle = false;
            this.showAngle = this.oldAngle;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfAnguloCapazComponent.prototype, "geoScene", void 0);
    CfAnguloCapazComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-angulo-capaz',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-capaz/cf-angulo-capaz.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-capaz/cf-angulo-capaz.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfAnguloCapazComponent);
    return CfAnguloCapazComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-central/cf-angulo-central.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o ângulo da circunferência em relação a um vértice</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\" style=\"margin-right: 100px;\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n          <label>e do ângulo (<i><b> α </b></i>):</label>\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angle\" style=\"position: absolute; margin-left: 10px;\"\r\n          oninput=\"this.value = Math.round(Math.abs(this.value))\" (ngModelChange)=\"checkInput()\" max=\"360\" min=\"0\" />\r\n          <span style=\"position: absolute; margin-top: -7.5px; font-size: 20px; pointer-events: none;\" id=\"degree\">°</span>\r\n        </p>\r\n\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n        <div [className]=\"errorInputAngle === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O ângulo deve ser um valor contido entre <b>0°</b> e <b>360°</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"90\" [color]=\"'rgb(70,131,180)'\">\r\n      </geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"90\" [color]=\"'rgb(255,255,255)'\">\r\n      </geo-circunferencemesh>\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>\r\n      Ângulo Central\r\n    </h4>\r\n    <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\"\r\n      (click)=\"loadExample($event, button.value)\">\r\n      {{button.title}}\r\n    </button>\r\n    <hr />\r\n    <h5>\r\n      Propriedades:\r\n    </h5>\r\n    <div *ngIf=\"relation == 0\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <p>Um ângulo central é um ângulo cujo vértice se encontra no centro da circunferência.</p>\r\n        <p>Duas semirretas o compõem e interceptam a circunferência em dois pontos distintos.</p>\r\n        <br>\r\n        <h5>Exemplo</h5>\r\n        <p class=\"text-center\"><img class=\"img-fluid\" style=\"width: 275px;\"\r\n            src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/Angulo_central.svg\"></p>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\alpha = A\\widehat{O}B\"></ng-katex>\r\n          </strong></h5>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\alpha = {{ showAngle }}\\degree\"></ng-katex>\r\n          </strong></h5>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 1\">\r\n      <!-- Puxar do backend -->\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <p>O ângulo central entre A e B determina um arco <ng-katex equation=\"\\ \\overgroup{AB}\"></ng-katex>\r\n        </p>\r\n\r\n        <p>O comprimento do arco, é a distância percorrida sobre a circunferência de A até B.\r\n          Sua medida é igual à do próprio ângulo central multiplicada pelo tamanho do raio da circunferência:</p>\r\n        <ng-katex equation=\"Med\\ \\overgroup{AB} = \\alpha * r\"></ng-katex>\r\n        <br>\r\n        <h5>Exemplo:</h5>\r\n        <p class=\"text-center\"><img class=\"img-fluid\" style=\"width: 275px;\"\r\n            src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/Angulo_central_comprimento_arco.svg\">\r\n        </p>\r\n\r\n        <!-- Calculos -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapsePrincipal\" aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n                  Cálculo = <ng-katex class=\"explicacao\"\r\n                    equation=\"{{ (showAngle * radius)/180 | number:'1.0-3':'pt'}} \\ \\pi  \\ u.m \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapsePrincipal\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapsePrincipal\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\r\n                            \\textcolor{black}{\r\n                            \\begin{array}{cc}\r\n                              180\\degree & \\pi \\\\\r\n                              {{showAngle}}\\degree & x\r\n                           \\end{array}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Precisamos converter a medida do ângulo em radianos, usando regra de três.\r\n                        <ul>\r\n                          <li>\r\n                            Medidas da Esquerda em Graus\r\n                          </li>\r\n                          <li>\r\n                            Medidas da Direita em Radianos\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{180\\degree x = {{ showAngle }}\\degree \\pi }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Multiplicando em X, temos os valores acima.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{x = {{ showAngle }}\\degree \\pi / 180\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Agora, passamos o 180 dividindo.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 4-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{x = {{showAngle / 180 | number:'1.0-3':'pt'}} \\pi }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Realizando a divisão, obtemos o ângulo em radianos.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Passo 5-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{Med\\ \\overgroup{AB} = \">\r\n                            </ng-katex>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{Med\\ \\overgroup{AB} = {{(showAngle / 180) | number:'1.0-3':'pt' }} \\pi * {{radius}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo o ângulo e o raio na fórmula:\r\n                        <ng-katex equation=\"Med\\ \\overgroup{AB} = \\alpha * r\"></ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Passo 6-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{Med\\ \\overgroup{AB} = {{ (showAngle * radius)/180 | number:'1.0-3':'pt'}} \\ \\pi \\ u.m}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Efetuamos as respectivas multiplicações e divisões e obtivemos o resultado.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-central/cf-angulo-central.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n#err {\n  color: red;\n  visibility: hidden;\n  font-style: italic; }\n.angle #degree {\n  position: absolute; }\n.angle {\n  width: 100%;\n  margin-bottom: 10px; }\n#degree {\n  padding: 10px;\n  min-width: 40px; }\n#angle {\n  width: 100%;\n  padding: 10px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-central/cf-angulo-central.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfAnguloCentralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Enum para definir a relação entre as circunferÊncias
 */
var Relation;
(function (Relation) {
    Relation[Relation["ANG"] = 0] = "ANG";
    Relation[Relation["ARC"] = 1] = "ARC";
})(Relation || (Relation = {}));
var CfAnguloCentralComponent = /** @class */ (function () {
    function CfAnguloCentralComponent() {
        this.relation = 0;
        this.errorInputAngle = false;
        this.errorInputRadius = false;
        this.dragging = false; // Variável para controle do drag
        this.dragged = ""; // Variavel para controle de qual objeto foi arrastado
        this.currentIndex = []; // Geometria da cena a qual irá se mover
        // Raycaster da página, utilizado para o "clicar e arrastar"
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        // Linha B da circunferência
        // private lineB;
        // Variável que armazena o ângulo entre as duas retas
        this.angle = 90;
        this.oldAngle = this.angle;
        this.showAngle = this.angle;
        // Propriedades da circunferência principal
        this.radius = 9;
        this.radiusExt = 30; // Circunferência que forma a linha
        this.radiusInt = 29; // Circunferência queserá a "parte de dentro"
        // Cores das linhas
        this.red = 0xFF0000;
        this.blue = 0x4683B4;
        this.black = 0x000000;
        //botões para outros componentes
        this.buttons = [
            { title: "Ângulo Central", route: "cf_angulo_central" },
            { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
            { title: "Arco Capaz", route: "cf_angulo_capaz" },
            { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
            { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
        ];
        //Botoes do menu da direita
        this.buttons_examples = [
            { title: 'Ângulo', value: 0 },
            { title: 'Comprimento do Arco', value: 1 }
        ];
    }
    CfAnguloCentralComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        // Checagem do tipo da relação
        switch (this.relation) {
            case Relation.ANG:
                // code here
                break;
            case Relation.ARC:
                //code here
                break;
        }
    };
    CfAnguloCentralComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    CfAnguloCentralComponent.prototype.ngDoCheck = function () {
        if (this.angle >= 0 && this.angle <= 360) {
            this.showAngle = this.angle;
            this.oldAngle = this.angle;
        }
        var degree = document.getElementById('degree');
        degree.style.display = 'unset';
        if (this.angle.toString().length == 1)
            degree.style.marginLeft = '38px';
        else if (this.angle.toString().length == 2)
            degree.style.marginLeft = '43px';
        else if (this.angle.toString().length == 3)
            degree.style.marginLeft = '48px';
        else if (this.angle.toString().length == 4)
            degree.style.marginLeft = '53px';
        else
            degree.style.display = 'none';
    };
    /**
    * Captura o evento de mouse down na cena
    * @param event evento do mouse
    */
    CfAnguloCentralComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfAnguloCentralComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    CfAnguloCentralComponent.prototype.reDrawPointsToCircle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-two");
        var lineA = this.geoScene.scene.getObjectByName("line-a");
        var lineB = this.geoScene.scene.getObjectByName("line-b");
        this.geoScene.scene.remove(lineA);
        this.geoScene.scene.remove(lineB);
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "A") {
            var distance = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e A
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((distancesRatio * circlePointA.position.x), (distancesRatio * circlePointA.position.y), 0));
        }
        else if (this.dragged === "B") {
            var distance = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((distancesRatio * circlePointB.position.x), (distancesRatio * circlePointB.position.y), 0));
        }
        var distanceA = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioA = (distanceA + 3) / distanceA;
        var distanceB = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioB = (distanceB + 3) / distanceB;
        var xA = distancesRatioA * circlePointA.position.x, yA = distancesRatioA * circlePointA.position.y;
        var xB = distancesRatioB * circlePointB.position.x, yB = distancesRatioB * circlePointB.position.y;
        var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xA, yA, 0.6));
        lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }));
        lineA.name = "line-a";
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
        lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }));
        lineB.name = "line-b";
        this.geoScene.scene.add(lineA);
        this.geoScene.scene.add(lineB);
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 2;
        this.geoScene.render();
    };
    CfAnguloCentralComponent.prototype.reDrawLabel = function (label) {
        var circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-two");
        var labelA = this.geoScene.scene.getObjectByName("label-a");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        this.geoScene.scene.remove(labelA);
        this.geoScene.scene.remove(labelB);
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "A") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e A
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelA.position.x = (distancesRatio * circlePointA.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
            labelA.position.y = (distancesRatio * circlePointA.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
            labelB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
        }
        this.geoScene.scene.add(labelA);
        this.geoScene.scene.add(labelB);
        this.geoScene.render();
    };
    CfAnguloCentralComponent.prototype.reDrawAngle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-two");
        // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
        var alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo a angulo da reta B de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo
        this.angle = alpha - beta; //tirando a diferenca dos dois, temos o angulo entre A e B
        if (this.angle < 0)
            this.angle += 360; // caso o angulo seja negativo
        var ang = this.geoScene.scene.getObjectByName("angle");
        var arc = this.geoScene.scene.getObjectByName("arc");
        var alphaGroup = this.geoScene.scene.getObjectByName("alpha");
        this.geoScene.scene.remove(ang, arc, alphaGroup);
        alphaGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        alphaGroup.name = "alpha";
        // Criando nova presentação para o angulo
        var segmentCount = Math.round(this.angle * 2), radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }), radians = this.angle * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
            if (i == Math.round(this.angle)) {
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (radius + 2.25), Math.cos(theta) * (radius + 2.25), 0));
                var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
                line.visible = false;
                var alpha_1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '0x000000');
                alpha_1.position.copy(geometryLine.vertices[1]);
                alphaGroup.add(line);
                alphaGroup.add(alpha_1);
            }
        }
        // rotacionar 1 grau -> 0.0175
        var rotation = (alpha - 90) * 0.0175; // o angulo comeca a ser desenhado nos 90 graus e sempre sai do ponto A
        ang = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        ang.position.x = 0;
        ang.rotateZ(rotation);
        ang.name = "angle";
        arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
        arc.position.x = 0;
        arc.rotateZ(rotation);
        arc.name = "arc";
        alphaGroup.position.copy(ang.position);
        alphaGroup.rotateZ(rotation);
        this.geoScene.scene.add(ang, arc, alphaGroup);
        this.angle = Math.round(this.angle);
    };
    /**
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
    CfAnguloCentralComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
            this.insersects.forEach(function (el) {
                if (el.object.name == "circunference-one" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (el.object.name == "circunference-two" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length === 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "circunference-one") {
                this.dragged = "A";
            }
            else if (this.currentIndex[0].object.name == "circunference-two") {
                this.dragged = "B";
            }
            this.reDrawPointsToCircle();
            this.reDrawLabel(this.dragged);
            this.reDrawAngle();
            this.geoScene.render();
        }
    };
    CfAnguloCentralComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        var arr = [];
        this.insersects.forEach(function (el) {
            if (el.object.name == "circunference-one" || el.object.name == "circunference-two") {
                arr.push(el);
                _this.currentIndex = arr;
                console.log(arr);
                return;
            }
        });
    };
    CfAnguloCentralComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    CfAnguloCentralComponent.prototype.changeAngle = function () {
        var lineA = this.geoScene.scene.getObjectByName("line-a");
        var lineB = this.geoScene.scene.getObjectByName("line-b");
        this.geoScene.scene.remove(lineA);
        this.geoScene.scene.remove(lineB);
        //Reseta a reta e ponto A
        this.geoScene.scene.getObjectByName("circunference-one").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.radiusExt - 0.5, 0.5));
        // Calcula o valor em radianos do angulo
        var radians = this.angle * (Math.PI) / 180;
        // Calcula o Y e X do ponto B
        var y = Math.cos(radians) * (this.radiusExt - 0.5), x = Math.sin(radians) * (this.radiusExt - 0.5);
        // Atualiza o ponto B
        this.geoScene.scene.getObjectByName("circunference-two").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0.5));
        var distanceA = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioA = (distanceA + 3) / distanceA;
        var distanceB = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioB = (distanceB + 3) / distanceB;
        var xA = distancesRatioA * this.centerPointOne.position.x, yA = distancesRatioA * this.centerPointOne.position.y;
        var xB = distancesRatioB * x, yB = distancesRatioB * y;
        var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xA, yA, 0.6));
        lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }));
        lineA.name = "line-a";
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
        lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }));
        lineB.name = "line-b";
        this.reDrawAngle();
        this.showAngle = this.angle;
        this.oldAngle = this.angle;
        // resetando as labels
        var lbls = ["A", "B"];
        for (var i = 0; i < lbls.length; i++)
            this.reDrawLabel(lbls[i]);
        this.geoScene.scene.add(lineA, lineB);
        this.geoScene.render();
    };
    CfAnguloCentralComponent.prototype.ngAfterViewInit = function () {
        // --------------  Ponto do centro --------------
        this.centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blue }));
        this.centerPoint.position.x = 0;
        this.centerPoint.position.y = 0;
        this.centerPoint.name = "circunference-center";
        // Label do ponto central
        var labelCenterPoint = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, this.black);
        labelCenterPoint.position.x = -2;
        labelCenterPoint.position.y = -2;
        //  -------------- Linha (A) --------------
        var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.1));
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 32.5, 0.1));
        var materialLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 });
        var lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, materialLineA);
        lineA.name = "line-a";
        // Label da linha A
        var labelLineA = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 5, this.black);
        labelLineA.position.x = 0;
        labelLineA.position.y = 34;
        labelLineA.name = "label-a";
        // Ponto da linha A
        this.centerPointOne = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.red }));
        this.centerPointOne.position.x = 0;
        this.centerPointOne.position.y = 29.5;
        this.centerPointOne.name = "circunference-one";
        // --------------  Linha (B) --------------
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.1));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](32.5, 0, 0.1));
        var materialLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 });
        var lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, materialLineB);
        lineB.name = "line-b";
        // Label da linha B
        var labelLineB = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, this.black);
        labelLineB.position.x = 34;
        labelLineB.position.y = 0;
        labelLineB.name = "label-b";
        // Ponto da linha B
        this.centerPointTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.red }));
        this.centerPointTwo.position.x = 29.5;
        this.centerPointTwo.position.y = 0;
        this.centerPointTwo.name = "circunference-two";
        // -------------- Ângulo --------------
        var segmentCount = Math.round(this.angle * 2), radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 });
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * Math.PI / 4 * 2;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        angle.position.x = 0;
        angle.name = "angle";
        var arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
        arc.position.x = 0;
        arc.name = "arc";
        var alpha = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '0x000000');
        alpha.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](5.2, 5.2, 0));
        alpha.name = "alpha";
        // Adiciona os objetos na cena
        this.geoScene.scene.add(this.centerPoint, // 2
        labelCenterPoint, // 3
        labelLineA, // 4
        this.centerPointOne, // 5
        labelLineB, // 6
        this.centerPointTwo, // 7
        angle, // 8
        arc, // 9
        alpha, // 10
        lineA, // 11
        lineB // 12
        );
        // Chamando o render da cena
        this.geoScene.render();
    };
    CfAnguloCentralComponent.prototype.reDrawDefault = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blue
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blue }));
        this.reDrawPointsToCircle();
        this.changeAngle();
        this.geoScene.render();
    };
    CfAnguloCentralComponent.prototype.checkInput = function () {
        var checkRadius = (this.radius >= 1 && this.radius <= 10);
        var checkAngle = (this.angle > -1 && this.angle < 361);
        if (checkRadius && checkAngle) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputAngle = false;
            this.errorInputRadius = false;
            this.reDrawDefault();
        }
        else {
            if (!checkRadius)
                this.errorInputRadius = true;
            else
                this.errorInputRadius = false;
            if (!checkAngle)
                this.errorInputAngle = true;
            else
                this.errorInputAngle = false;
            this.showAngle = this.oldAngle;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfAnguloCentralComponent.prototype, "geoScene", void 0);
    CfAnguloCentralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-angulo-central',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-central/cf-angulo-central.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-central/cf-angulo-central.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfAnguloCentralComponent);
    return CfAnguloCentralComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-inscrito/cf-angulo-inscrito.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o ângulo da circunferência em relação a um vértice</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\" style=\"margin-right: 100px;\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('radius')\" max=\"10\" min=\"1\" />\r\n          <label>e do ângulo (<i><b> α </b></i>):</label>\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angle\" style=\"position: absolute; margin-left: 5px;\"\r\n            oninput=\"this.value = Math.round(Math.abs(this.value));\" (ngModelChange)=\"checkInput('alpha')\" max=\"180\" min=\"0\" />\r\n          <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\" id=\"degreeA\">°</span>\r\n          <br>\r\n          <label style=\"margin-left: 106.5px;\">ou (<i><b> β </b></i>):</label>\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angleBeta\" style=\"position: absolute; margin-left: 5px;\"\r\n            oninput=\"this.value = Math.round(Math.abs(this.value));\" (ngModelChange)=\"checkInput('beta')\" max=\"360\" min=\"0\" />\r\n          <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\" id=\"degreeB\">°</span>\r\n        </p>\r\n\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n        <div [className]=\"errorInputAngle === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O ângulo <i><b> α </b></i> deve ser um valor contido entre <b>0</b> e <b>180</b> e o ângulo <i><b> β </b></i>\r\n          deve ser um valor contido entre <b>0°</b> e <b>360°</b>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"90\" [color]=\"'rgb(70,131,180)'\">\r\n      </geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"90\" [color]=\"'rgb(255,255,255)'\">\r\n      </geo-circunferencemesh>\r\n    </geo-scene>\r\n    <button class=\"btn btn-primary m-1\" (click)=\"lockArc()\">{{lockArcText}}</button>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>\r\n      Ângulo Inscrito\r\n    </h4>\r\n    <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\"\r\n      (click)=\"loadExample($event, button.value)\">\r\n      {{button.title}}\r\n    </button>\r\n    <hr />\r\n    <h5>\r\n      Propriedades:\r\n    </h5>\r\n    <div *ngIf=\"relation == 0\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Interno</h5>\r\n        <p>Ângulo inscrito é todo ângulo que tem vértice na circunferência e lados secantes a ela, ou seja, duas\r\n          semirretas o compõem e interceptam a circunferência em pontos distintos.</p>\r\n        <p>Qualquer ângulo central mede o dobro do ângulo inscrito que determina o mesmo arco.</p>\r\n        <br>\r\n        <h5>Exemplo:</h5>\r\n        <p class=\"text-center\"><img class=\"img-fluid\" style=\"width: 275px;\"\r\n            src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/inscrito-interno.svg\">\r\n        </p>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\alpha = A\\widehat{V}B\"></ng-katex>\r\n          </strong></h5>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\beta = A\\widehat{O}B\"></ng-katex>\r\n          </strong></h5>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\alpha = {{ showAngle }}\\degree\"></ng-katex>\r\n          </strong>\r\n          <strong>\r\n            <ng-katex equation=\"\\beta = {{ showAngleBeta }}\\degree\"></ng-katex>\r\n          </strong></h5>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 1\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Externo</h5>\r\n        <p>Ângulo inscrito é todo ângulo que tem vértice na circunferência e lados secantes a ela, ou seja, duas\r\n          semirretas o compõem e interceptam a circunferência em pontos distintos.</p>\r\n        <p>Qualquer ângulo central mede o dobro do ângulo inscrito que determina o mesmo arco.</p>\r\n        <br>\r\n        <h5>Exemplo:</h5>\r\n        <p class=\"text-center\"><img class=\"img-fluid\" style=\"width: 275px;\"\r\n            src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/inscrito-externo.svg\">\r\n        </p>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\alpha = A\\widehat{V}B\"></ng-katex>\r\n          </strong></h5>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\beta = A\\widehat{O}B\"></ng-katex>\r\n          </strong></h5>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\alpha = {{ showAngle }}\\degree\"></ng-katex>\r\n          </strong>\r\n          <strong>\r\n            <ng-katex equation=\"\\beta = {{ showAngleBeta }}\\degree\"></ng-katex>\r\n          </strong></h5>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 2\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Pertence</h5>\r\n        <p>Ângulo inscrito é todo ângulo que tem vértice na circunferência e lados secantes a ela, ou seja, duas\r\n          semirretas o compõem e interceptam a circunferência em pontos distintos.</p>\r\n        <p>Qualquer ângulo central mede o dobro do ângulo inscrito que determina o mesmo arco.</p>\r\n        <br>\r\n        <h5>Exemplo:</h5>\r\n        <p class=\"text-center\"><img class=\"img-fluid\" style=\"width: 275px;\"\r\n            src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/inscrito-pertence.svg\">\r\n        </p>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\alpha = A\\widehat{V}B\"></ng-katex>\r\n          </strong></h5>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\beta = A\\widehat{O}B\"></ng-katex>\r\n          </strong></h5>\r\n        <h5 class=\"text-center\"><strong>\r\n            <ng-katex equation=\"\\alpha = {{ showAngle }}\\degree\"></ng-katex>\r\n          </strong>\r\n          <strong>\r\n            <ng-katex equation=\"\\beta = {{ showAngleBeta }}\\degree\"></ng-katex>\r\n          </strong></h5>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 3\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Comprimento do Arco</h5>\r\n        <p>A qualquer ângulo inscrito <ng-katex equation=\"\\alpha\"></ng-katex>, corresponde um ângulo central que\r\n          determina, na circunferência,\r\n          o mesmo arco <ng-katex equation=\"\\overgroup{AB}.\"></ng-katex>\r\n        </p>\r\n        <p>Qualquer ângulo inscrito mede metade do ângulo central que determina o mesmo arco.</p>\r\n        <p>Considerando <ng-katex equation=\"Med \\overgroup{AB} = {β * r}\"></ng-katex>\r\n        </p>\r\n\r\n        <!-- Atribuir propriedades no style global depois... -->\r\n        <div *ngIf=\"subRelation == 0\">\r\n          <h5>Exemplo: Interno</h5>\r\n          <img class=\"img-fluid\" src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/{{image}}\"\r\n            style=\"width: 10rem;\">\r\n        </div>\r\n        <div *ngIf=\"subRelation == 1\">\r\n          <h5>Exemplo: Externo</h5>\r\n          <img class=\"img-fluid\" src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/{{image}}\"\r\n            style=\"width: 10rem;\">\r\n        </div>\r\n        <div *ngIf=\"subRelation == 2\">\r\n          <h5>Exemplo: Pertence</h5>\r\n          <img class=\"img-fluid\" src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/{{image}}\"\r\n            style=\"width: 10rem;\">\r\n        </div>\r\n\r\n        <!-- <p class=\"text-center\"><img class=\"img-fluid\" style=\"width: 275px;\"\r\n            src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/{{image}}\">\r\n        </p> -->\r\n\r\n        <!-- Calculos -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapsePrincipal\" aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n                  Cálculo = <ng-katex class=\"explicacao\" equation=\"{{ ((showAngle * 2) * radius) }} \\ \\pi \\ u.m \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapsePrincipal\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapsePrincipal\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{\\alpha = {{ showAngle }} \\degree}\">\r\n                            </ng-katex>\r\n                          </p>\r\n                          <p>\r\n                            <ng-katex\r\n                              equation=\"\\textcolor{black}{β = \\alpha * 2 = {{ showAngle }}\\degree * 2 = {{ showAngle * 2 }}\\degree }\">\r\n                            </ng-katex>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Determinamos a medida do ângulo central β correspondente.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\r\n                            \\textcolor{black}{\r\n                            \\begin{array}{cc}\r\n                              180\\degree & \\pi \\\\\r\n                              {{ showAngle * 2 }}\\degree & x\r\n                           \\end{array}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Precisamos converter a medida do ângulo β em radianos, usando regra de três.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{180\\degree x = {{ showAngle * 2 }}\\degree \\pi }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Multiplicando em X, temos os valores acima.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 4-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{x = {{ showAngle * 2 | number:'1.0-3':'pt'}}\\degree \\pi  / 180\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Agora, passamos o 180 dividindo.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Passo 5-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{Med\\ \\overgroup{AB} = \">\r\n                            </ng-katex>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{x = {{ (showAngle * 2) / 180 | number:'1.0-3':'pt' }} \\pi }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Realizando a divisão, obtemos o ângulo em radianos.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Passo 6-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{Med\\ \\overgroup{AB} = {{ showAngle * 2 }} \\pi * {{ radius }} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo o ângulo e o raio na fórmula.\r\n                        <ng-katex equation=\"Med \\overgroup{AB} = {β * r}\"></ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Passo 7-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{Med\\ \\overgroup{AB} = {{ ((showAngle * 2) * radius) }} \\ \\pi \\ u.m }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Efetuamos as respectivas multiplicações e divisões e obtivemos o resultado.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-inscrito/cf-angulo-inscrito.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n#err {\n  color: red;\n  visibility: hidden;\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-inscrito/cf-angulo-inscrito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfAnguloInscritoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Enum para definir a relação entre as circunferÊncias
 */
var Relation;
(function (Relation) {
    Relation[Relation["INSIDE"] = 0] = "INSIDE";
    Relation[Relation["OUTSIDE"] = 1] = "OUTSIDE";
    Relation[Relation["ON"] = 2] = "ON";
    Relation[Relation["ARC"] = 3] = "ARC";
})(Relation || (Relation = {}));
var CfAnguloInscritoComponent = /** @class */ (function () {
    function CfAnguloInscritoComponent() {
        this.relation = Relation.INSIDE;
        this.errorInputAngle = false;
        this.errorInputRadius = false;
        this.lockArcText = "Travar Comprimento do Arco";
        this.lockArcState = false;
        /*
        SubRelation - Verifica qual foi a ultima relation ativada e aplica na area de comprimento do arco com a imagem do mesmo
        */
        this.subRelation = Relation.INSIDE;
        this.dragging = false; // Variável para controle do drag
        this.dragged = ""; // Variavel para controle de qual objeto foi arrastado
        this.currentIndex = []; // Geometria da cena a qual irá se mover
        // Raycaster da página, utilizado para o "clicar e arrastar"
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        // Propriedades da circunferência principal
        this.radius = 9;
        this.radiusExt = 30; // Circunferência que forma a linha
        this.radiusInt = 29; // Circunferência que será a "parte de dentro"
        // Variável que armazena o ângulo entre as duas retas
        this.angle = 90;
        this.angleBeta = 180;
        this.showAngle = this.angle;
        this.showAngleBeta = this.angleBeta;
        this.oldAngle = this.angle;
        this.oldAngleBeta = this.angleBeta;
        this.input = 'alpha';
        this.image = 'inscrito-interno.svg';
        //botões
        this.buttons = [
            { title: "Ângulo Central", route: "cf_angulo_central" },
            { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
            { title: "Arco Capaz", route: "cf_angulo_capaz" },
            { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
            { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
        ];
        //Botoes do menu da direita
        this.buttons_examples = [
            { title: 'Interno', value: 0 },
            { title: 'Externo', value: 1 },
            { title: 'Pertence', value: 2 },
            { title: 'Comprimento do Arco', value: 3 },
        ];
        this.ext = false;
        this.pert = false;
    }
    CfAnguloInscritoComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        // Checagem do tipo da relação
        switch (this.relation) {
            case Relation.INSIDE:
                // code here
                this.subRelation = Relation.INSIDE;
                break;
            case Relation.OUTSIDE:
                // code here
                this.subRelation = Relation.OUTSIDE;
                break;
            case Relation.ON:
                // code here
                this.subRelation = Relation.ON;
                break;
            case Relation.ARC:
                // code here
                this.lockArcText = "Destravar Comprimento do Arco";
                this.lockArcState = true;
                break;
        }
        if (this.relation !== Relation.ARC) {
            this.lockArcText = "Travar Comprimento do Arco";
            this.lockArcState = false;
            this.reDrawClick();
        }
    };
    CfAnguloInscritoComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    CfAnguloInscritoComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        var arr = [];
        this.insersects.forEach(function (el) {
            if (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "vertice") {
                arr.push(el);
                _this.currentIndex = arr;
                return;
            }
        });
    };
    CfAnguloInscritoComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    CfAnguloInscritoComponent.prototype.ngDoCheck = function () {
        if (this.angle >= 0 && this.angle <= 180) {
            this.showAngle = this.angle;
            this.showAngleBeta = this.showAngleBeta;
            this.oldAngle = this.angle;
            this.oldAngleBeta = this.angleBeta;
        }
        try {
            this.geoScene.addDegreeSymbol(this.angle, 'degreeA');
            this.geoScene.addDegreeSymbol(this.angleBeta, 'degreeB');
        }
        catch (_a) { }
    };
    /**
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
    CfAnguloInscritoComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
            this.insersects.forEach(function (el) {
                if (el.object.name == "ponto-a" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (el.object.name == "ponto-b" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (el.object.name == "vertice" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length >= 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "ponto-a") {
                this.dragged = "A";
            }
            else if (this.currentIndex[0].object.name == "ponto-b") {
                this.dragged = "B";
            }
            else if (this.currentIndex[0].object.name == "vertice") {
                this.dragged = "V";
            }
            this.reDrawPointsToCircle();
            this.reDrawLabel(this.dragged);
            this.reDrawAngle();
            this.reDrawArc();
            this.angleType();
            this.geoScene.render();
        }
    };
    CfAnguloInscritoComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfAnguloInscritoComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    CfAnguloInscritoComponent.prototype.reDrawPointsToCircle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var verticePoint = this.geoScene.scene.getObjectByName("vertice");
        var lineA = this.geoScene.scene.getObjectByName("line-a");
        var lineB = this.geoScene.scene.getObjectByName("line-b");
        var lineC = this.geoScene.scene.getObjectByName("line-c");
        var lineD = this.geoScene.scene.getObjectByName("line-d");
        this.geoScene.scene.remove(lineA);
        this.geoScene.scene.remove(lineB);
        this.geoScene.scene.remove(lineC);
        this.geoScene.scene.remove(lineD);
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "A") {
            var distance = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e A
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointA.position.x = (distancesRatio * circlePointA.position.x); // posicao do x na linha quando a distancia for o valor do raio
            circlePointA.position.y = (distancesRatio * circlePointA.position.y); // posicao do y na linha quando a distancia for o valor do raio
        }
        else if (this.dragged === "B") {
            var distance = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio
            circlePointB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio
        }
        else if (this.dragged === "V") {
            var distance = Math.sqrt((Math.pow((this.vertice.position.x), 2) + Math.pow((this.vertice.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            verticePoint.position.x = (distancesRatio * verticePoint.position.x); // posicao do x na linha quando a distancia for o valor do raio
            verticePoint.position.y = (distancesRatio * verticePoint.position.y); // posicao do y na linha quando a distancia for o valor do raio
        }
        var distanceA = Math.sqrt((Math.pow((this.centerPointOne.position.x - this.vertice.position.x), 2) + Math.pow((this.centerPointOne.position.y - this.vertice.position.y), 2) //distancia entre o ponto V e A
        ));
        var distancesRatioA = (distanceA + 3) / distanceA;
        var distanceB = Math.sqrt((Math.pow((this.centerPointTwo.position.x - this.vertice.position.x), 2) + Math.pow((this.centerPointTwo.position.y - this.vertice.position.y), 2) //distancia entre o ponto V e B
        ));
        var distancesRatioB = (distanceB + 3) / distanceB;
        var distanceC = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e A
        ));
        var distancesRatioC = (this.radiusExt - 0.5) / distanceC;
        var distanceD = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioD = (this.radiusExt - 0.5) / distanceD;
        var xA = (1 - distancesRatioA) * verticePoint.position.x + distancesRatioA * circlePointA.position.x, yA = (1 - distancesRatioA) * verticePoint.position.y + distancesRatioA * circlePointA.position.y;
        var xB = (1 - distancesRatioB) * verticePoint.position.x + distancesRatioB * circlePointB.position.x, yB = (1 - distancesRatioB) * verticePoint.position.y + distancesRatioB * circlePointB.position.y;
        var xC = distancesRatioC * circlePointA.position.x, yC = distancesRatioC * circlePointA.position.y;
        var xD = distancesRatioD * circlePointB.position.x, yD = distancesRatioD * circlePointB.position.y;
        var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.vertice.position.x, this.vertice.position.y, 0.6));
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xA, yA, 0.6));
        lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineA.name = "line-a";
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.vertice.position.x, this.vertice.position.y, 0.6));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
        lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineB.name = "line-b";
        var geometryLineC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.6));
        geometryLineC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xC, yC, 0.6));
        lineC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x00f500, linewidth: 2 }));
        lineC.name = "line-c";
        var geometryLineD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.6));
        geometryLineD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xD, yD, 0.6));
        lineD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x00f000, linewidth: 2 }));
        lineD.name = "line-d";
        // reordenando a renderizacao para os pontos nao ficarem em baixo da linha da circunferencia
        this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 1; // vertice
        this.geoScene.scene.children[6].renderOrder = this.geoScene.scene.children.length - 2; // ponto a
        this.geoScene.scene.children[9].renderOrder = this.geoScene.scene.children.length - 3; // ponto b
        if (this.angle < 180) {
            this.geoScene.scene.add(lineA);
            this.geoScene.scene.add(lineB);
        }
        this.geoScene.scene.add(lineC);
        this.geoScene.scene.add(lineD);
        this.geoScene.render();
    };
    CfAnguloInscritoComponent.prototype.reDrawAngle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var verticePoint = this.geoScene.scene.getObjectByName("vertice");
        //https://stackoverflow.com/a/1354158 - formula para descobrir o angulo entre tres pontos, sendo um o vertice
        var a = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](verticePoint.position.x - circlePointA.position.x, verticePoint.position.y - circlePointA.position.y);
        var b = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](verticePoint.position.x - circlePointB.position.x, verticePoint.position.y - circlePointB.position.y);
        var ab = a.x * b.x + a.y * b.y;
        var aMod = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
        var bMod = Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2));
        var cos = ab / (aMod * bMod);
        this.angle = Math.acos(cos) * 180 / Math.PI;
        var ang = this.geoScene.scene.getObjectByName("angle");
        var alphaGroup = this.geoScene.scene.getObjectByName("alpha");
        this.geoScene.scene.remove(ang, alphaGroup);
        alphaGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        alphaGroup.name = "alpha";
        var geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }), segmentCount = 92, radians = Math.acos(cos), radius = 5;
        if (this.radiusExt < 20)
            radius = 3;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = ((i / segmentCount) * radians) - (((segmentCount - i) / segmentCount) * radians);
            theta /= 2;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, -Math.cos(theta) * radius, 0));
            if (i == 46) { // quando estiver no ponto ao centro do angulo
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (radius + 2.5), -Math.cos(theta) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado
                var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
                line.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis
                var alpha_1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 5, '0x000000');
                alpha_1.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha
                alphaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                alphaGroup.add(alpha_1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
            }
        }
        var alpha = Math.atan2(circlePointA.position.y - verticePoint.position.y, circlePointA.position.x - verticePoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (verticePoint.position.x > 0 && alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var beta = Math.atan2(circlePointB.position.y - verticePoint.position.y, circlePointB.position.x - verticePoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (verticePoint.position.x > 0 && beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var rotation = beta * 0.00875 + alpha * 0.00875 + this.angle * 0.0175 + (90 - this.angle) * 0.0175; // sinceramente, nao sei explicar como cheguei nisso ai, mas funciona ¯\_(ツ)_/¯
        if (rotation.toString() !== 'NaN') {
            ang = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
            ang.position.copy(verticePoint.position); // movendo o angulo do centro para o vertice
            ang.rotateZ(rotation); // rotacionando o angulo para posicao entre as linhas
            ang.name = "angle";
            alphaGroup.position.copy(verticePoint.position); // movendo o alpha do centro para o vertice
            alphaGroup.rotateZ(rotation); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.add(ang, alphaGroup);
            this.angle = Math.round(this.angle);
        }
        else
            this.angle = 0;
        if (this.angle < 1 || this.angle > 179) {
            var distanceAV = Math.sqrt(Math.pow((circlePointA.position.x - verticePoint.position.x), 2) + Math.pow((circlePointA.position.y - verticePoint.position.y), 2));
            var distanceBV = Math.sqrt(Math.pow((circlePointB.position.x - verticePoint.position.x), 2) + Math.pow((circlePointB.position.y - verticePoint.position.y), 2));
            if (distanceAV < distanceBV)
                this.geoScene.scene.getObjectByName("line-a").visible = false;
            else if (distanceAV > distanceBV)
                this.geoScene.scene.getObjectByName("line-b").visible = false;
        }
    };
    CfAnguloInscritoComponent.prototype.reDrawArc = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var vertex = this.geoScene.scene.getObjectByName("vertice");
        // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
        var alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo a angulo da reta B de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo
        this.angleBeta = beta - alpha; //tirando a diferenca dos dois, temos o angulo entre A e B
        if (this.angleBeta < 0)
            this.angleBeta += 360; // caso o angulo seja negativo
        var changePivotByEquation = !(this.angleBeta / 2 >= this.angle - 1 && this.angleBeta / 2 <= this.angle + 1); // Inverter a a direcao do arco (se vai do A ao B ou do B ao A)
        var changePivotByDefault = (this.angleBeta > 178 && this.angleBeta < 181); // caso especifico para 180 graus
        if (changePivotByDefault) {
            var conditionMaior = void 0, conditionMenor = void 0, zero = false;
            if (circlePointA.position.x > circlePointB.position.x) {
                conditionMaior = vertex.position.y > circlePointA.position.y;
                conditionMenor = vertex.position.y > circlePointB.position.y;
            }
            else if (circlePointA.position.x < circlePointB.position.x) {
                conditionMaior = vertex.position.y < circlePointB.position.y;
                conditionMenor = vertex.position.y < circlePointA.position.y;
            }
            else {
                zero = true;
            }
            if (!zero) {
                if (vertex.position.x > 0)
                    changePivotByDefault = conditionMaior;
                else if (vertex.position.x < 0)
                    changePivotByDefault = conditionMenor;
                else {
                    if (vertex.position.y > 0)
                        changePivotByDefault = false;
                    else
                        changePivotByDefault = true;
                }
            }
            else {
                if (circlePointA.position.y > circlePointB.position.y) {
                    if (vertex.position.x > 0)
                        changePivotByDefault = false;
                    else if (vertex.position.x < 0)
                        changePivotByDefault = true;
                }
                else {
                    if (vertex.position.x > 0)
                        changePivotByDefault = true;
                    else if (vertex.position.x < 0)
                        changePivotByDefault = false;
                }
            }
            if (vertex.position.x === 0 && circlePointA.position.x > circlePointB.position.x)
                changePivotByDefault = true;
        }
        if (changePivotByDefault || changePivotByEquation) {
            this.angleBeta = alpha - beta; //tirando a diferenca dos dois, temos o angulo entre A e B
            if (this.angleBeta < 0)
                this.angleBeta += 360; // caso o angulo seja negativo
        }
        var ang = this.geoScene.scene.getObjectByName("angle-beta");
        var arc = this.geoScene.scene.getObjectByName("arc");
        var betaGroup = this.geoScene.scene.getObjectByName("beta");
        this.geoScene.scene.remove(ang, arc, betaGroup);
        betaGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        betaGroup.name = "beta";
        var color = 0xff0000;
        if (this.angle < 1 || this.angle > 179)
            color = 0x00f500;
        // Criando nova presentação para o angulo
        var segmentCount = Math.round(this.angleBeta * 2), radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: color, linewidth: 2 }), radians = this.angleBeta * (Math.PI) / 180;
        if (this.radiusExt < 20)
            radius = 4;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
            if (i == Math.round(this.angleBeta)) {
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (radius + 2.25), Math.cos(theta) * (radius + 2.25), 0));
                var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
                line.visible = false;
                var beta_1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('β', 4, '0x000000');
                beta_1.position.copy(geometryLine.vertices[1]);
                betaGroup.add(line);
                betaGroup.add(beta_1);
            }
        }
        // rotacionar 1 grau -> 0.0175
        var rotation = (beta - 90) * 0.0175; // o angulo comeca a ser desenhado nos 90 graus e sempre sai do ponto B
        if (changePivotByDefault || changePivotByEquation)
            rotation = (alpha - 90) * 0.0175; // o angulo comeca a ser desenhado nos 90 graus e sempre sai do ponto A
        if (rotation.toString() !== 'NaN') {
            ang = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
            ang.position.x = 0;
            ang.rotateZ(rotation);
            ang.name = "angle-beta";
            arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
            arc.position.x = 0;
            arc.rotateZ(rotation);
            arc.name = "arc";
            betaGroup.position.copy(ang.position);
            betaGroup.rotateZ(rotation);
            this.geoScene.scene.add(ang, arc, betaGroup);
            this.angleBeta = Math.round(this.angleBeta);
            this.showAngleBeta = this.angleBeta;
        }
        else
            this.angleBeta = 0;
    };
    CfAnguloInscritoComponent.prototype.reDrawLabel = function (label) {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var verticePoint = this.geoScene.scene.getObjectByName("vertice");
        var labelA = this.geoScene.scene.getObjectByName("label-a");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        var labelV = this.geoScene.scene.getObjectByName("label-v");
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "A") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e A
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointA.position.x, distancesRatio * circlePointA.position.y, 0.6));
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointB.position.x, distancesRatio * circlePointB.position.y, 0.6));
        }
        else if (label === "V") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((verticePoint.position.x), 2) + Math.pow((verticePoint.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelV.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * verticePoint.position.x, distancesRatio * verticePoint.position.y, 0.6));
            5;
        }
        this.geoScene.render();
    };
    CfAnguloInscritoComponent.prototype.changeAngle = function () {
        if (this.input === 'beta') {
            this.angle = this.angleBeta / 2;
        }
        console.log(this.input);
        if (this.angle >= 0 && this.angle <= 180) {
            var radians = this.angle * (Math.PI / 180);
            var aCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.sin(radians) * (this.radiusExt - 0.5)), -(Math.cos(radians) * (this.radiusExt - 0.5)), 0.5), bCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(radians) * (this.radiusExt - 0.5), -(Math.cos(radians) * (this.radiusExt - 0.5)), 0.5);
            this.geoScene.scene.remove(this.geoScene.scene.getObjectByName('line-a'), this.geoScene.scene.getObjectByName('line-b'), this.geoScene.scene.getObjectByName('angle'), this.geoScene.scene.getObjectByName('angle-beta'));
            var vertex = this.geoScene.scene.getObjectByName("vertice");
            var pointA = this.geoScene.scene.getObjectByName("ponto-a");
            pointA.position.copy(aCordinates);
            var pointB = this.geoScene.scene.getObjectByName('ponto-b');
            pointB.position.copy(bCordinates);
            var distanceA = Math.sqrt((Math.pow((pointA.position.x - vertex.position.x), 2) + Math.pow((pointA.position.y - vertex.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatioA = (distanceA + 3) / distanceA;
            var distanceB = Math.sqrt((Math.pow((pointB.position.x - vertex.position.x), 2) + Math.pow((pointB.position.y - vertex.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatioB = (distanceB + 3) / distanceB;
            var xA = distancesRatioA * aCordinates.x, yA = (1 - distancesRatioA) * (this.radiusExt - 0.5) + distancesRatioA * aCordinates.y;
            var xB = distancesRatioB * bCordinates.x, yB = (1 - distancesRatioB) * (this.radiusExt - 0.5) + distancesRatioB * bCordinates.y;
            var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertex.position.x, vertex.position.y, 0.6));
            geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xA, yA, 0.6));
            var lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
            lineA.name = "line-a";
            var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertex.position.x, vertex.position.y, 0.6));
            geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
            var lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
            lineB.name = "line-b";
            vertex.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.radiusExt - 0.5, 0));
            this.reDrawAngle();
            this.reDrawArc();
            if (this.angle > 179) {
                this.geoScene.scene.getObjectByName("angle").rotateZ(3.15);
                this.geoScene.scene.getObjectByName("alpha").rotateZ(3.15);
            }
            else if (this.angle === 0) {
                this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("alpha"));
                this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("beta"));
            }
            var lbls = ["A", "B", "V"];
            for (var i = 0; i < lbls.length; i++)
                this.reDrawLabel(lbls[i]);
            this.geoScene.scene.add(lineA, lineB);
            this.showAngle = this.angle;
            this.showAngleBeta = this.angleBeta;
            this.oldAngle = this.angle;
            this.oldAngleBeta = this.angleBeta;
            this.geoScene.render();
            this.angleType();
        }
        else {
            this.showAngle = this.oldAngle;
            this.showAngleBeta = this.oldAngleBeta;
        }
    };
    CfAnguloInscritoComponent.prototype.angleType = function () {
        var type;
        var pontoA = this.geoScene.scene.getObjectByName("ponto-a").position;
        var pontoB = this.geoScene.scene.getObjectByName("ponto-b").position;
        var vertex = this.geoScene.scene.getObjectByName("vertice").position;
        var centerCrossA = this.geoScene.lineCross(0, 0, vertex.x, vertex.y, pontoA.x, pontoA.y, 0.2);
        var centerCrossB = this.geoScene.lineCross(0, 0, vertex.x, vertex.y, pontoB.x, pontoB.y, 0.2);
        if (vertex.x === 0) {
            centerCrossA = (pontoA.x >= -0.25 && pontoA.x <= 0.25);
            centerCrossB = (pontoB.x >= -0.25 && pontoB.x <= 0.25);
        }
        if (centerCrossA || centerCrossB)
            type = Relation.ON;
        else {
            //https://www.youtube.com/watch?v=H9qu9Xptf-w -> video da formula para achar um ponto dentro de um triangulo
            var A = this.area(vertex.x, vertex.y, pontoA.x, pontoA.y, pontoB.x, pontoB.y);
            var A1 = this.area(0, 0, pontoA.x, pontoA.y, pontoB.x, pontoB.y);
            var A2 = this.area(vertex.x, vertex.y, 0, 0, pontoB.x, pontoB.y);
            var A3 = this.area(vertex.x, vertex.y, pontoA.x, pontoA.y, 0, 0);
            if (A1 + A2 + A3 <= A + 0.5 && A1 + A2 + A3 >= A - 0.5)
                type = Relation.INSIDE;
            else { //por mais que nao esteja no triagulo, se o angulo for maior que 180 graus, ele sempre sera interno
                if (this.angleBeta >= 180)
                    type = Relation.INSIDE;
                else
                    type = Relation.OUTSIDE;
            }
        }
        if (!this.lockArcState) {
            this.relation = type;
        }
        else {
            this.relation = Relation.ARC;
            if (type === Relation.ON) {
                this.image = 'inscrito-pertence.svg';
                this.subRelation = Relation.ON;
            }
            else if (type === Relation.INSIDE) {
                this.image = 'inscrito-interno.svg';
                this.subRelation = Relation.INSIDE;
            }
            else if (type === Relation.OUTSIDE) {
                this.image = 'inscrito-externo.svg';
                this.subRelation = Relation.OUTSIDE;
            }
        }
    };
    CfAnguloInscritoComponent.prototype.area = function (x1, y1, x2, y2, x3, y3) {
        var X1 = x1 * (y2 - y3);
        var X2 = x2 * (y3 - y1);
        var X3 = x3 * (y1 - y2);
        var x = X1 + X2 + X3;
        return Math.abs(x / 2);
    };
    CfAnguloInscritoComponent.prototype.lockArc = function () {
        if (!this.lockArcState) {
            this.lockArcState = true;
            this.lockArcText = "Destravar Comprimento do Arco";
            this.relation = Relation.ARC;
        }
        else {
            this.lockArcState = false;
            this.lockArcText = "Travar Comprimento do Arco";
            this.angleType();
        }
    };
    CfAnguloInscritoComponent.prototype.ngAfterViewInit = function () {
        // --------------  Ponto do centro --------------
        var circleCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30);
        var materialCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 });
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleCenter, materialCenter);
        this.centerPoint = centerPoint;
        // Label do ponto central
        var labelCircleCenter = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, '0x4683B4');
        labelCircleCenter.position.x = -2;
        labelCircleCenter.position.y = -2;
        // --------------  Ponto do vértice --------------
        var circleVertex = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.25, 30);
        var materialVertex = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 });
        var vertexPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleVertex, materialVertex);
        vertexPoint.position.x = 0;
        vertexPoint.position.y = 29.5;
        vertexPoint.name = "vertice";
        this.vertice = vertexPoint;
        // Label do ponto do vétice
        var labelCircleVertex = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('V', 5, '0x000000');
        labelCircleVertex.position.x = 0;
        labelCircleVertex.position.y = 35;
        labelCircleVertex.name = "label-v";
        //  -------------- Linha da esquerda --------------
        var geometryLineLeft = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineLeft.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 29.5, 0.1));
        geometryLineLeft.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-33, -3.5, 0.1));
        //Material da linha
        var materialLine = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 });
        var lineLeft = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineLeft, materialLine);
        lineLeft.name = 'line-a';
        var geometryLineLeftC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineLeftC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.1));
        geometryLineLeftC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-30, 0, 0.1));
        //Material da linha
        var materialLineC = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x00F500, linewidth: 2 });
        var lineLeftC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineLeftC, materialLineC);
        lineLeftC.name = 'line-c';
        // Label da linha da esquerda
        var labelLineLeft = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 5, '0xFF0000');
        labelLineLeft.position.x = -35;
        labelLineLeft.position.y = 0;
        labelLineLeft.name = "label-a";
        // Ponto da linha da esquerda
        var circleLineLeft = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30);
        var materialCircleLeft = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 });
        var circleLeftPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleLineLeft, materialCircleLeft);
        circleLeftPoint.position.x = -29.5;
        circleLeftPoint.position.y = 0;
        circleLeftPoint.name = "ponto-a";
        this.centerPointOne = circleLeftPoint;
        //  -------------- Linha da direita --------------
        var geometryLineRight = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineRight.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 29.5, 0.1));
        geometryLineRight.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, -3.5, 0.1));
        //Material da linha
        var materialLineRight = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 });
        var lineRight = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineRight, materialLineRight);
        lineRight.name = 'line-b';
        var geometryLineRightD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineRightD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.1));
        geometryLineRightD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](30, 0, 0.1));
        //Material da linha
        var materialLineD = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x00F500, linewidth: 2 });
        var lineRightD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineRightD, materialLineD);
        lineRightD.name = 'line-d';
        // Label da linha da direita
        var labelLineRight = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, '0xFF0000');
        labelLineRight.position.x = 35;
        labelLineRight.position.y = 0;
        labelLineRight.name = "label-b";
        // Ponto da linha da direita
        var circleLineRight = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30);
        var materialCircleRight = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 });
        var circleRightPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleLineRight, materialCircleRight);
        circleRightPoint.position.x = 29.5;
        circleRightPoint.position.y = 0;
        circleRightPoint.name = "ponto-b";
        this.centerPointTwo = circleRightPoint;
        // -------------- Ângulo --------------
        var segmentCount = 92, radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }), radians = this.angleBeta * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * (-Math.PI / 2) - Math.PI / 2;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        angle.position.x = 0;
        angle.position.y = 29.5;
        angle.rotateZ(0.8);
        angle.name = "angle";
        segmentCount = Math.round(this.angleBeta * 2),
            radius = 5,
            geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](),
            geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](),
            materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 });
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        var angleBeta = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        angleBeta.position.x = 0;
        angleBeta.rotateZ(-90 * 0.0175);
        angleBeta.name = "angle-beta";
        var arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
        arc.position.x = 0;
        arc.rotateZ(-90 * 0.0175);
        arc.name = "arc";
        var alpha = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 5, '0x000000');
        alpha.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 22, 0));
        alpha.name = "alpha";
        var beta = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('β', 4, '0x000000');
        beta.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, -7.25, 0));
        beta.name = "beta";
        // Adiciona os objetos na cena
        this.geoScene.scene.add(centerPoint, labelCircleCenter, vertexPoint, labelCircleVertex, circleLeftPoint, lineLeft, lineLeftC, labelLineLeft, lineRight, lineRightD, labelLineRight, circleRightPoint, angle, angleBeta, alpha, beta, arc);
        // Chamando o render da cena
        this.geoScene.render();
    };
    CfAnguloInscritoComponent.prototype.reDrawDefault = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        this.dragged = "V";
        this.changeAngle();
        this.reDrawPointsToCircle();
    };
    CfAnguloInscritoComponent.prototype.reDrawClick = function () {
        this.radiusExt = 30;
        this.radiusInt = 29;
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        if (this.relation === Relation.INSIDE) {
            this.angle = 90;
            this.angleBeta = 180;
            this.geoScene.scene.getObjectByName("ponto-a").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-29.5, 0, 0.6));
            this.geoScene.scene.getObjectByName("ponto-b").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29.5, 0, 0.6));
            this.geoScene.scene.getObjectByName("vertice").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 29.5, 0.6));
        }
        else if (this.relation === Relation.OUTSIDE) {
            this.angle = 25;
            this.angleBeta = 50;
            this.geoScene.scene.getObjectByName("ponto-a").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18.5, -21.5, 0.6));
            this.geoScene.scene.getObjectByName("ponto-b").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29.5, 0, 0.6));
            this.geoScene.scene.getObjectByName("vertice").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 29.5, 0.6));
        }
        else if (this.relation === Relation.ON) {
            this.angle = 45;
            this.angleBeta = 90;
            this.geoScene.scene.getObjectByName("ponto-a").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, -29.5, 0.6));
            this.geoScene.scene.getObjectByName("ponto-b").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29.5, 0, 0.6));
            this.geoScene.scene.getObjectByName("vertice").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 29.5, 0.6));
        }
        this.reDrawPointsToCircle();
        this.reDrawAngle();
        var lbls = ["A", "B", "V"];
        for (var i = 0; i < lbls.length; i++)
            this.reDrawLabel(lbls[i]);
        this.reDrawArc();
        this.geoScene.render();
    };
    CfAnguloInscritoComponent.prototype.checkInput = function (input) {
        this.input = input;
        var checkRadius = (this.radius >= 1 && this.radius <= 10);
        var checkAngle = (this.angle > -1 && this.angle < 181) && (this.angleBeta > -1 && this.angleBeta < 361);
        if (checkRadius && checkAngle) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputAngle = false;
            this.errorInputRadius = false;
            this.reDrawDefault();
        }
        else {
            if (!checkRadius)
                this.errorInputRadius = true;
            else
                this.errorInputRadius = false;
            if (!checkAngle)
                this.errorInputAngle = true;
            else
                this.errorInputAngle = false;
            this.showAngle = this.oldAngle;
            this.showAngleBeta = this.oldAngleBeta;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfAnguloInscritoComponent.prototype, "geoScene", void 0);
    CfAnguloInscritoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-angulo-inscrito',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-inscrito/cf-angulo-inscrito.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-inscrito/cf-angulo-inscrito.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfAnguloInscritoComponent);
    return CfAnguloInscritoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-nao-pertence/cf-angulo-nao-pertence.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o ângulo da circunferência em relação a um vértice</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <div *ngIf=\"relation == 0\">\r\n          <p class=\"text-center\" style=\"margin-right: 100px;\">\r\n            Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n            <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n              oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('radius')\" max=\"10\" min=\"1\" />\r\n            <label>e do ângulo (<i><b> α </b></i>):</label>\r\n            <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angleAlpha\" style=\"position: absolute; margin-left: 5px;\"\r\n              oninput=\"this.value = Math.round(Math.abs(this.value));\" (ngModelChange)=\"checkInput('alpha')\" max=\"180\" min=\"0\" />\r\n            <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\" id=\"degreeA\">°</span>\r\n            <label style=\"margin-left: 106.5px;\">ou (<i><b> β </b></i>):</label>\r\n            <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angleBeta\" style=\"position: absolute; margin-left: 5px;\"\r\n              oninput=\"this.value = Math.round(Math.abs(this.value));\" (ngModelChange)=\"checkInput('beta')\" max=\"180\" min=\"0\" />\r\n            <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\" id=\"degreeB\">°</span>\r\n          </p>\r\n\r\n          <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n            role=\"alert\" style=\"text-align: center;\">\r\n            O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n          </div>\r\n          <div [className]=\"errorInputAngle === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n            role=\"alert\" style=\"text-align: center;\">\r\n            Os ângulos <i><b> α </b></i> e <i><b> β </b></i> devem ser valores contidos entre <b>0°</b> e <b>180°</b>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"relation == 1\">\r\n          <p class=\"text-center\" style=\"margin-right: 100px;\">\r\n            Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n            <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n              oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('radius')\" max=\"10\" min=\"1\" />\r\n            <label>e do ângulo (<i><b> α </b></i>):</label>\r\n            <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angleAlpha\" style=\"position: absolute; margin-left: 5px;\"\r\n              oninput=\"this.value = Math.round(Math.abs(this.value));\" (ngModelChange)=\"checkInput('alpha')\" max=\"180\" min=\"0\" />\r\n            <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\" id=\"degreeA\">°</span>\r\n          </p>\r\n\r\n          <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n            role=\"alert\" style=\"text-align: center;\">\r\n            O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n          </div>\r\n          <div [className]=\"errorInputAngle === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n            role=\"alert\" style=\"text-align: center;\">\r\n            O ângulo <i><b> α </b></i> deve ser um valor contido entre <b>0</b> e <b>180</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"30\" [segmentCount]=\"92\" [color]=\"'rgb(70,131,180)'\"></geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"29\" [segmentCount]=\"92\" [color]=\"'rgb(255,255,255)'\"></geo-circunferencemesh>\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>\r\n      Ângulo Excêntrico\r\n    </h4>\r\n    <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\"\r\n      (click)=\"loadExample($event, button.value)\">\r\n      {{button.title}}\r\n    </button>\r\n    <hr />\r\n\r\n    <div *ngIf=\"relation == 0\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n\r\n        <div class=\"text-center\">\r\n          <h5>Ângulo\r\n            <label class=\"switch\" style=\"width: 53px; height: 25px;\">\r\n              <input type=\"checkbox\" id=\"myCheck\" (click)=\"changeArc()\">\r\n              <span class=\"slider round\"></span>\r\n            </label>\r\n            Comprimento do Arco</h5>\r\n        </div>\r\n\r\n        <div id=\"properties\">\r\n          <h5 class=\"alert-heading\">Ângulo</h5>\r\n          <p>Ângulo excêntrico interior é todo ângulo que tem vértice na região interior da circunferência, as retas que\r\n            o\r\n            compõem interceptam a circunferência em quatro pontos distintos.\r\n            Exemplo:\r\n            <img src=\"assets\\images\\geometria\\cincunferencia\\cf-angulos\\angulo_excentrico_interior.svg\"\r\n              style=\"width: 90%; margin-top: -15%;\">\r\n          </p>\r\n        </div>\r\n\r\n        <div id=\"comprimentoArco\" style=\"display: none;\">\r\n          <h5 class=\"alert-heading\">Comprimento do Arco</h5>\r\n          <p>A qualquer ângulo excêntrico interior <ng-katex equation=\"\\alpha\"></ng-katex>, correspondem dois arcos\r\n            <ng-katex equation=\"{{arc1}}\"></ng-katex> e <ng-katex equation=\"{{arc2}}\"></ng-katex>.\r\n          </p>\r\n          <p>\r\n            O comprimento de cada um dos arcos, é a distância percorrida sobre a circunferência de A até B e de C até D.\r\n            A soma das medidas do comprimento dos arcos AB e CD é igual ao dobro da medida do ângulo excêntrico interior\r\n            <ng-katex equation=\"\\alpha\"></ng-katex> multiplicado pelo raio da circunferência:\r\n          </p>\r\n          <p>\r\n            (Med\r\n            <ng-katex equation=\"{{arc1}}\"></ng-katex>\r\n            + Med\r\n            <ng-katex equation=\"{{arc2}}\"></ng-katex>) = 2 * <ng-katex equation=\"\\alpha\"></ng-katex> * r\r\n          </p>\r\n          <p>Exemplo:</p>\r\n          <img src=\"assets\\images\\geometria\\cincunferencia\\cf-angulos\\angulo_excentrico_comprimento_arco.svg\"\r\n            style=\"width: 60%; margin-top: -10%; margin-left: -10%;\">\r\n\r\n          <div class=\"accordion\" id=\"accordionExample\" style=\"margin-top: -10%;\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingGeratriz\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\">\r\n                <h2 class=\"mb-0\">\r\n                  <!-- parte 1 -->\r\n                  <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\"\r\n                    aria-expanded=\"true\" aria-controls=\"collapseGeratriz\">\r\n                    <p class=\"mb-0\">\r\n                      <ng-katex equation=\"(Med {{arc1}} + Med {{arc2}}) = \" style=\"font-size: 80%;\">\r\n                      </ng-katex>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"{{ 2 * (angleAlpha / 180) * radius | number:'1.0-3':'pt'}} \\pi \\ u.c.\"> </ng-katex>\r\n                    </p>\r\n                  </button>\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseGeratriz\"></i>\r\n                </h2>\r\n              </div>\r\n\r\n              <div id=\"collapseGeratriz\" class=\"collapse\" aria-labelledby=\"headingGeratriz\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                      <!-- Panel -->\r\n                      <div class=\"panel-group\" id=\"accordion\">\r\n                        <!-- Passo 1 -->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOnePart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\" equation=\"\r\n                            \\textcolor{black}{\r\n                            \\begin{array}{cc}\r\n                              180\\degree & \\pi \\\\\r\n                              {{ angleAlpha }}\\degree & x\r\n                           \\end{array}}\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseOnePart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Precisamos converter a medida do ângulo em radianos, usando regra de três.\r\n                              <ul>\r\n                                <li>\r\n                                  Medidas da Esquerda em Graus\r\n                                </li>\r\n                                <li>\r\n                                  Medidas da Direita em Radianos\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 2-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwoPart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{180\\degree x = {{ angleAlpha }}\\degree \\pi }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseTwoPart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Multiplicando em X, temos os valores acima.\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 3-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThreePart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{x = {{ angleAlpha }}\\degree \\pi / 180\\degree }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseThreePart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Agora, passamos o 180 dividindo.\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 4-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFourPart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{x = {{angleAlpha / 180 | number:'1.0-3':'pt'}} \\pi }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseFourPart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Realizando a divisão, obtemos o ângulo em radianos.\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 5-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFivePart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{ (Med {{arc1}} + Med {{arc2}}) = }\"\r\n                                    style=\"font-size: 60%;\">\r\n                                  </ng-katex>\r\n                                </p>\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{ 2 * {{angleAlpha / 180 | number:'1.0-3':'pt'}} \\pi * {{ radius }} }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseFivePart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Substituindo na fórmula:\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{ (Med {{arc1}} + Med {{arc2}}) = 2 * \\alpha * r }\">\r\n                              </ng-katex>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 6-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSixPart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{ (Med {{arc1}} + Med {{arc2}}) = }\"\r\n                                    style=\"font-size: 60%;\">\r\n                                  </ng-katex>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{ {{ 2 * (angleAlpha / 180) * radius | number:'1.0-3':'pt'}} \\pi \\ u.c. }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseSixPart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              <p>\r\n                                Realizando as multiplicações chegamos à soma dos arcos.\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Parte 2 -->\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapsePart2\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePart2\" aria-expanded=\"false\" aria-controls=\"collapsePart2\">\r\n                    <p class=\"mb-0\">\r\n                      <ng-katex equation=\"(Med \\overgroup{BC} + Med \\overgroup{AD}) = \" style=\"font-size: 80%;\">\r\n                      </ng-katex>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"{{ 2 * (1 - (angleAlpha / 180)) * radius | number:'1.0-3':'pt'}} \\pi \\ u.c.\">\r\n                      </ng-katex>\r\n                    </p>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePart2\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapsePart2\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                <!-- Panel -->\r\n                <div class=\"card-body\">\r\n                  <!-- Passo 1  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOnePart2\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ β = \\pi - {{ (angleAlpha / 180) | number:'1.0-3':'pt'}} \\pi = \r\n                              {{ 1 - (angleAlpha / 180) | number:'1.0-3':'pt'}} \\pi}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseOnePart2\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOnePart2\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        <p>\r\n                          Como os ângulos <ng-katex equation=\"\\alpha\"></ng-katex> e β são suplementares, sabemos que:\r\n                        </p>\r\n                        <ng-katex equation=\"β = \\pi - \\alpha\"></ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwoPart2\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ (Med \\overgroup{BC} + Med \\overgroup{AD}) = }\"\r\n                              style=\"font-size: 80%;\">\r\n                            </ng-katex>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ 2 * {{ 1 -  (angleAlpha / 180) | number:'1.0-3':'pt'}} \\pi * {{ radius }} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseTwoPart2\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwoPart2\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        <p>\r\n                          Substituindo na fórmula:\r\n                        </p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ (Med \\overgroup{BC} + Med \\overgroup{AD}) = 2 * \\beta * r }\">\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThreePart2\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ (Med \\overgroup{BC} + Med \\overgroup{AD}) = }\"\r\n                              style=\"font-size: 80%;\">\r\n                            </ng-katex>\r\n                          </p>\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ {{ 2 * (1 - (angleAlpha / 180)) * radius | number:'1.0-3':'pt'}} \\pi \\ u.c.}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseThreePart2\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThreePart2\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        <p>\r\n                          Realizando as multiplicações chegamos à soma dos arcos.\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Parte 3 -->\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapsePart3\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePart3\" aria-expanded=\"false\" aria-controls=\"collapsePart3\">\r\n                    <p style=\"margin-left: -10%;\">\r\n                      <ng-katex equation=\"(Med {{arc1}} + Med {{arc2}} +\" style=\"font-size: 60%;\">\r\n                      </ng-katex>\r\n                      <!-- </p>\r\n                    <p> -->\r\n                      <ng-katex equation=\"Med \\overgroup{BC} + Med \\overgroup{AD}) = \" style=\"font-size: 60%;\">\r\n                      </ng-katex>\r\n\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"{{ (2 * (angleAlpha / 180) * radius) + (2 * (1 - (angleAlpha / 180)) * radius) | number:'1.0-3':'pt'}} \\pi \\ u.c.\">\r\n                      </ng-katex>\r\n                    </p>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePart3\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapsePart3\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                <!-- Panel -->\r\n                <div class=\"card-body\">\r\n                  <!-- Passo 1  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOnePart3\" class=\"\">\r\n                          <p>\r\n                            <ng-katex equation=\"\\textcolor{black}{(Med {{arc1}} + Med {{arc2}} +}\"\r\n                              style=\"font-size: 60%;\">\r\n                            </ng-katex>\r\n                            <ng-katex equation=\"\\textcolor{black}{Med \\overgroup{BC} + Med \\overgroup{AD}) = }\"\r\n                              style=\"font-size: 60%;\">\r\n                            </ng-katex>\r\n                            <ng-katex\r\n                              equation=\"\\textcolor{black}{ {{ 2 * (angleAlpha / 180) * radius | number:'1.0-3':'pt'}} \\pi + {{ 2 * (1 - (angleAlpha / 180)) * radius | number:'1.0-3':'pt'}} \\pi } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseOnePart3\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOnePart3\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Somamos as medidas dos arcos calculados anteriormente.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwoPart3\" class=\"\">\r\n                          <p>\r\n                            <ng-katex equation=\"\\textcolor{black}{(Med {{arc1}} + Med {{arc2}} +}\"\r\n                              style=\"font-size: 60%;\">\r\n                            </ng-katex>\r\n                            <!-- </p>\r\n                          <p> -->\r\n                            <ng-katex equation=\"\\textcolor{black}{Med \\overgroup{BC} + Med \\overgroup{AD}) = }\"\r\n                              style=\"font-size: 60%;\">\r\n                            </ng-katex>\r\n                            <ng-katex\r\n                              equation=\"\\textcolor{black}{ {{ (2 * (angleAlpha / 180) * radius) + (2 * (1 - (angleAlpha / 180)) * radius) | number:'1.0-3':'pt'}} \\pi \\ u.c. } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseOnePart3\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwoPart3\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        A soma das medidas dos quatro arcos é igual a medida do comprimento da circunferência que também\r\n                        pode ser\r\n                        determinada por <ng-katex equation=\"C = 2 * \\pi * r\"></ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"relation == 1\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n\r\n        <div class=\"text-center\">\r\n          <h5>Ângulo\r\n            <label class=\"switch\" style=\"width: 53px; height: 25px;\">\r\n              <input type=\"checkbox\" id=\"myCheck\" (click)=\"changeArc()\">\r\n              <span class=\"slider round\"></span>\r\n            </label>\r\n            Comprimento do Arco</h5>\r\n        </div>\r\n\r\n        <div id=\"properties\">\r\n          <h5 class=\"alert-heading\">Externo</h5>\r\n          <p>Ângulo excêntrico exterior é todo ângulo que tem vértice na região exterior da circunferência, as\r\n            semi retas\r\n            que o compõem são secantes à circunferência e a interceptam a em quatro pontos distintos ou são\r\n            tangentes à\r\n            ela.\r\n            Exemplo:\r\n            <img src=\"assets\\images\\geometria\\cincunferencia\\cf-angulos\\angulo_excentrico_exterior.svg\"\r\n              style=\"width: 90%;\">\r\n          </p>\r\n        </div>\r\n\r\n        <div id=\"comprimentoArco\" style=\"display: none;\">\r\n          <h5 class=\"alert-heading\">Comprimento do Arco</h5>\r\n          <p>A qualquer ângulo excêntrico exterior <ng-katex equation=\"\\alpha\"></ng-katex>, correspondem dois arcos\r\n            <ng-katex equation=\"{{arc1}}\"></ng-katex> e <ng-katex equation=\"{{arc2}}\"></ng-katex>.\r\n          </p>\r\n          <p>\r\n            O comprimento de cada um dos arcos, é a distância percorrida sobre a circunferência de A até B e de C até\r\n            D.\r\n            A diferença entre as medidas do comprimento dos arcos AB e CD é igual ao dobro da medida do ângulo\r\n            excêntrico exterior\r\n            <ng-katex equation=\"\\alpha\"></ng-katex>:\r\n          </p>\r\n          <p>\r\n            (Med\r\n            <ng-katex equation=\"{{arc1}}\"></ng-katex>\r\n            - Med\r\n            <ng-katex equation=\"{{arc2}}\"></ng-katex>) = 2 * <ng-katex equation=\"\\alpha\"></ng-katex> * r\r\n          </p>\r\n          <p>Exemplo:</p>\r\n          <img src=\"assets\\images\\geometria\\cincunferencia\\cf-angulos\\angulo_excentrico_exterior.svg\"\r\n            style=\"width: 60%; margin-top: -10%;\">\r\n\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingGeratriz\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\">\r\n                <h2 class=\"mb-0\">\r\n                  <!-- parte 1 -->\r\n                  <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseGeratriz\"\r\n                    aria-expanded=\"true\" aria-controls=\"collapseGeratriz\">\r\n                    <p class=\"mb-0\">\r\n                      <ng-katex equation=\"(Med {{arc1}} - Med {{arc2}}) = \" style=\"font-size: 80%;\">\r\n                      </ng-katex>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"{{ 2 * (angleAlpha / 180) * radius | number:'1.0-3':'pt'}} \\pi \\ u.c.\"> </ng-katex>\r\n                    </p>\r\n                  </button>\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseGeratriz\"></i>\r\n                </h2>\r\n              </div>\r\n\r\n              <div id=\"collapseGeratriz\" class=\"collapse\" aria-labelledby=\"headingGeratriz\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                      <!-- Panel -->\r\n                      <div class=\"panel-group\" id=\"accordion\">\r\n                        <!-- Passo 1 -->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOnePart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\" equation=\"\r\n                              \\textcolor{black}{\r\n                              \\begin{array}{cc}\r\n                                180\\degree & \\pi \\\\\r\n                                {{ angleAlpha }}\\degree & x\r\n                             \\end{array}}\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseOnePart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Precisamos converter a medida do ângulo em radianos, usando regra de três.\r\n                              <ul>\r\n                                <li>\r\n                                  Medidas da Esquerda em Graus\r\n                                </li>\r\n                                <li>\r\n                                  Medidas da Direita em Radianos\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 2-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwoPart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{180\\degree x = {{ angleAlpha }}\\degree \\pi }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseTwoPart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Multiplicando em X, temos os valores acima.\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 3-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThreePart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{x = {{ angleAlpha }}\\degree \\pi / 180\\degree }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseThreePart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Agora, passamos o 180 dividindo.\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 4-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFourPart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{x = {{angleAlpha / 180 | number:'1.0-3':'pt'}} \\pi }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseFourPart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Realizando a divisão, obtemos o ângulo em radianos.\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 5-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFivePart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{ (Med {{arc1}} - Med {{arc2}}) = }\"\r\n                                    style=\"font-size: 60%;\">\r\n                                  </ng-katex>\r\n                                </p>\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{ 2 * {{angleAlpha / 180 | number:'1.0-3':'pt'}} \\pi * {{ radius }} }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseFivePart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              Substituindo na fórmula:\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{ (Med {{arc1}} - Med {{arc2}}) = 2 * \\alpha * r }\">\r\n                              </ng-katex>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                        <!--Passo 6-->\r\n                        <div class=\"panel panel-default\">\r\n                          <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSixPart1\" class=\"\">\r\n                                <p>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{ (Med {{arc1}} - Med {{arc2}}) = }\"\r\n                                    style=\"font-size: 60%;\">\r\n                                  </ng-katex>\r\n                                  <ng-katex class=\"explicacao\"\r\n                                    equation=\"\\textcolor{black}{ {{ 2 * (angleAlpha / 180) * radius | number:'1.0-3':'pt'}} \\pi \\ u.c. }\">\r\n                                  </ng-katex>\r\n                                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                    data-target=\"#collapseGeratriz\"></i>\r\n                                </p>\r\n                              </a>\r\n                            </h4>\r\n                          </div>\r\n                          <div id=\"collapseSixPart1\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                              <p>\r\n                                Realizando as multiplicações chegamos à soma dos arcos.\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <hr>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-nao-pertence/cf-angulo-nao-pertence.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s; }\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 17px;\n  width: 18px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s; }\ninput:checked + .slider {\n  background-color: #2196F3; }\ninput:focus + .slider {\n  -webkit-box-shadow: 0 0 1px #2196F3;\n          box-shadow: 0 0 1px #2196F3; }\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px; }\n.slider.round:before {\n  border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-nao-pertence/cf-angulo-nao-pertence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfAnguloNaoPertenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Enum para definir a relação entre as circunferÊncias
 */
var Relation;
(function (Relation) {
    Relation[Relation["IN"] = 0] = "IN";
    Relation[Relation["OUT"] = 1] = "OUT";
})(Relation || (Relation = {}));
var CfAnguloNaoPertenceComponent = /** @class */ (function () {
    function CfAnguloNaoPertenceComponent() {
        this.relation = Relation.IN;
        this.angleAlpha = 57;
        this.angleBeta = 123;
        this.errorInputAngle = false;
        this.errorInputRadius = false;
        this.showAngleAlpha = this.angleAlpha;
        this.showAngleBeta = this.angleBeta;
        this.oldAngleAlpha = this.angleAlpha;
        this.oldAngleBeta = this.angleBeta;
        this.radius = 9;
        this.radiusExt = 30;
        this.radiusInt = 29;
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        this.dragging = false;
        this.dragged = "";
        this.currentIndex = [];
        this.onArc = false;
        this.ext = false;
        this.arc1 = "\\overgroup{AB}";
        this.arc2 = "\\overgroup{CD}";
        this.buttons = [
            { title: "Ângulo Central", route: "cf_angulo_central" },
            { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
            { title: "Arco Capaz", route: "cf_angulo_capaz" },
            { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
            { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
        ];
        this.buttons_examples = [
            { title: 'Interno', value: 0 },
            { title: 'Externo', value: 1 },
        ];
    }
    CfAnguloNaoPertenceComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        // Checagem do tipo da relação
        switch (this.relation) {
            case Relation.IN:
                this.reDrawDefault();
                this.angleAlpha = 57;
                this.angleBeta = 123;
                this.ext = false;
                break;
            case Relation.OUT:
                this.reDrawDefault();
                this.angleAlpha = 33;
                this.ext = true;
                break;
        }
    };
    CfAnguloNaoPertenceComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    // resolver bug na mudança de angulo
    CfAnguloNaoPertenceComponent.prototype.changeArc = function () {
        var text = document.getElementById("properties");
        var comprimento = document.getElementById("comprimentoArco");
        if (text.style.display == "none") {
            text.style.display = "block";
            comprimento.style.display = "none";
        }
        else {
            text.style.display = "none";
            comprimento.style.display = "block";
        }
    };
    CfAnguloNaoPertenceComponent.prototype.ngDoCheck = function () {
        try {
            this.geoScene.addDegreeSymbol(this.angleAlpha, 'degreeA');
            this.geoScene.addDegreeSymbol(this.angleBeta, 'degreeB');
        }
        catch (_a) { }
    };
    CfAnguloNaoPertenceComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        this.currentIndex = [];
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        this.insersects.forEach(function (el) {
            if (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "ponto-c"
                || el.object.name == "ponto-d" /* || el.object.name == "ponto-p"*/) {
                _this.currentIndex.push(el);
                return;
            }
        });
    };
    CfAnguloNaoPertenceComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    /**
    * Captura o evento de mouse down na cena
    * @param event evento do mouse
    */
    CfAnguloNaoPertenceComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfAnguloNaoPertenceComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    /**
     * Captura o evento de mouse move na cena
     * @param event evento do mouse
     */
    CfAnguloNaoPertenceComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na ponto A, B, C, D ou P
            this.insersects.forEach(function (el) {
                if (_this.currentIndex.length < 2 && (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "ponto-c"
                    || el.object.name == "ponto-d" || el.object.name == "ponto-p")) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length >= 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "ponto-a")
                this.dragged = "A";
            else if (this.currentIndex[0].object.name == "ponto-b")
                this.dragged = "B";
            else if (this.currentIndex[0].object.name == "ponto-c")
                this.dragged = "C";
            else if (this.currentIndex[0].object.name == "ponto-d")
                this.dragged = "D";
            else if (this.currentIndex[0].object.name == "ponto-p")
                this.dragged = "P";
            this.reDrawPointsToCircle();
            this.reDrawLabel(this.dragged);
            this.reDrawArc();
            this.reDrawAngle();
            this.pointsDrawOrder();
            this.geoScene.render();
        }
    };
    CfAnguloNaoPertenceComponent.prototype.reDrawPointsToCircle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var lineAC = this.geoScene.scene.getObjectByName("line-ac");
        var lineBD = this.geoScene.scene.getObjectByName("line-bd");
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "P") {
            // TODO
        }
        else if (this.dragged === "A") {
            var distance = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointA.position.x);
            var y = (distancesRatio * circlePointA.position.y);
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "B") {
            var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointB.position.x);
            var y = (distancesRatio * circlePointB.position.y);
            circlePointB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "C") {
            var distance = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointC.position.x);
            var y = (distancesRatio * circlePointC.position.y);
            circlePointC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "D") {
            var distance = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointD.position.x);
            var y = (distancesRatio * circlePointD.position.y);
            circlePointD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        if (this.dragged !== "P" && !this.geoScene.fromInput) {
            // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
            var a1 = circlePointC.position.y - circlePointA.position.y;
            var b1 = circlePointA.position.x - circlePointC.position.x;
            var c1 = a1 * (circlePointA.position.x) + b1 * (circlePointA.position.y);
            var a2 = circlePointD.position.y - circlePointB.position.y;
            var b2 = circlePointB.position.x - circlePointD.position.x;
            var c2 = a2 * (circlePointB.position.x) + b2 * (circlePointB.position.y);
            var determinant = a1 * b2 - a2 * b1;
            vertexPoint.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((c1 * b2 - c2 * b1) / determinant, (a1 * c2 - a2 * c1) / determinant, 0));
            var distance = Math.sqrt((Math.pow((vertexPoint.position.x), 2) + Math.pow((vertexPoint.position.y), 2)));
            if (distance + 0.5 > this.radiusExt)
                this.relation = Relation.OUT;
            else
                this.relation = Relation.IN;
        }
        if (this.geoScene.fromInput && this.relation === Relation.OUT) {
            circlePointB = vertexPoint;
            circlePointC = vertexPoint;
        }
        var distanceDB = Math.sqrt((Math.pow((circlePointB.position.x - circlePointD.position.x), 2) + Math.pow((circlePointB.position.y - circlePointD.position.y), 2)));
        var distancesRatioDB = (distanceDB + 3) / distanceDB;
        var distanceBD = Math.sqrt((Math.pow((circlePointD.position.x - circlePointB.position.x), 2) + Math.pow((circlePointD.position.y - circlePointB.position.y), 2)));
        var distancesRatioBD = (distanceBD + 3) / distanceBD;
        var distanceCA = Math.sqrt((Math.pow((circlePointA.position.x - circlePointC.position.x), 2) + Math.pow((circlePointA.position.y - circlePointC.position.y), 2)));
        var distancesRatioCA = (distanceCA + 3) / distanceCA;
        var distanceAC = Math.sqrt((Math.pow((circlePointC.position.x - circlePointA.position.x), 2) + Math.pow((circlePointC.position.y - circlePointA.position.y), 2)));
        var distancesRatioAC = (distanceAC + 3) / distanceAC;
        var xDB = (1 - distancesRatioDB) * circlePointD.position.x + distancesRatioDB * circlePointB.position.x, yDB = (1 - distancesRatioDB) * circlePointD.position.y + distancesRatioDB * circlePointB.position.y, xBD = (1 - distancesRatioBD) * circlePointB.position.x + distancesRatioBD * circlePointD.position.x, yBD = (1 - distancesRatioBD) * circlePointB.position.y + distancesRatioBD * circlePointD.position.y, xCA = (1 - distancesRatioCA) * circlePointC.position.x + distancesRatioCA * circlePointA.position.x, yCA = (1 - distancesRatioCA) * circlePointC.position.y + distancesRatioCA * circlePointA.position.y, xAC = (1 - distancesRatioAC) * circlePointA.position.x + distancesRatioAC * circlePointC.position.x, yAC = (1 - distancesRatioAC) * circlePointA.position.y + distancesRatioAC * circlePointC.position.y;
        var geometryLineBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xBD, yBD, 0));
        if (!(this.relation === Relation.OUT && this.geoScene.fromInput))
            geometryLineBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xDB, yDB, 0));
        if (this.relation === Relation.OUT)
            geometryLineBD.vertices.push(vertexPoint.position);
        var geometryLineAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xCA, yCA, 0));
        if (!(this.relation === Relation.OUT && this.geoScene.fromInput))
            geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xAC, yAC, 0));
        if (this.relation === Relation.OUT)
            geometryLineAC.vertices.push(vertexPoint.position);
        lineBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineBD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineBD.name = "line-bd";
        lineAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineAC.name = "line-ac";
        this.geoScene.scene.children[8] = lineAC;
        this.geoScene.scene.children[9] = lineBD;
    };
    CfAnguloNaoPertenceComponent.prototype.reDrawAngle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        if (!this.geoScene.fromInput) {
            var a = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertexPoint.position.x - circlePointA.position.x, vertexPoint.position.y - circlePointA.position.y);
            var b = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertexPoint.position.x - circlePointB.position.x, vertexPoint.position.y - circlePointB.position.y);
            var ba = b.x * a.x + b.y * a.y;
            var bMod = Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2));
            var aMod = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
            var cos = ba / (bMod * aMod);
            this.angleAlpha = Math.acos(cos) * 180 / Math.PI;
            this.angleBeta = 180 - this.angleAlpha;
        }
        var radiansBA = this.angleAlpha * (Math.PI / 180);
        var radiansDC = this.angleBeta * (Math.PI / 180);
        var alphaGroup = this.geoScene.scene.getObjectByName("alpha");
        var betaGroup = this.geoScene.scene.getObjectByName("beta");
        alphaGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        alphaGroup.name = "alpha";
        betaGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        betaGroup.name = "beta";
        var alphaCopy, betaCopy;
        alphaCopy = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        alphaGroup.name = "alpha-c";
        betaCopy = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        betaGroup.name = "beta-c";
        var geometryAngleAlpha = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryAngleBeta = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngleAlpha = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }), materialAngleBeta = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x0000FF, linewidth: 2 });
        var segmentCount = 92, radius = 5;
        if (this.radiusExt < 20)
            radius = 3;
        for (var i = 0; i <= segmentCount; i++) {
            var thetaA = ((i / segmentCount) * radiansBA) - (((segmentCount - i) / segmentCount) * radiansBA);
            var thetaB = ((i / segmentCount) * radiansDC) - (((segmentCount - i) / segmentCount) * radiansDC);
            thetaA /= 2;
            thetaB /= 2;
            geometryAngleAlpha.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * radius, -Math.cos(thetaA) * radius, 0));
            geometryAngleBeta.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaB) * radius, -Math.cos(thetaB) * radius, 0));
            if (i == 46) { // quando estiver no ponto ao centro do angulo
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * (radius + 2.5), -Math.cos(thetaA) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado
                var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
                line.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis
                var alpha_1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '#FF0000');
                if (this.relation === Relation.OUT) {
                    materialAngleAlpha = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 });
                    alpha_1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '0x000000');
                }
                alpha_1.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha
                alphaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                alphaGroup.add(alpha_1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
                geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * (radius + 2.5), -Math.cos(thetaA) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado
                line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
                line.visible = false; // a linha so serve como guia do beta, para ele poder ser rotacionado usando a Z axis
                var beta_1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('β', 4, '#0000FF');
                beta_1.position.copy(geometryLine.vertices[1]); // passando o beta para o ultimo vertice da linha
                betaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                betaGroup.add(beta_1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
                geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaB) * (radius + 2.5), -Math.cos(thetaB) * (radius + 2.5), 0)); // adicionando vertice ao centro do angulo desenhado
                betaGroup.add(line); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                betaGroup.add(beta_1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
                if (this.relation === Relation.IN) {
                    var alphaC = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '#FF0000');
                    alphaC.position.copy(geometryLine.vertices[1]);
                    var betaC = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('β', 4, '#0000FF');
                    betaC.position.copy(geometryLine.vertices[1]);
                    alphaCopy.add(line);
                    alphaCopy.add(alphaC);
                    betaCopy.add(line);
                    betaCopy.add(betaC);
                }
            }
        }
        var alpha = Math.atan2(circlePointA.position.y - vertexPoint.position.y, circlePointA.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var beta = Math.atan2(circlePointB.position.y - vertexPoint.position.y, circlePointB.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var rotationBA = beta * 0.00875 + alpha * 0.00875 + this.angleAlpha * 0.0175 + (90 - this.angleAlpha) * 0.0175;
        var rotationDC = rotationBA - this.angleBeta * 0.0175 - (90 - this.angleBeta) * 0.0175;
        if (!this.geoScene.fromInput) {
            if (this.relation === Relation.OUT) {
                var higher = this.geoScene.scene.children[3].position.y, lower = higher;
                for (var i = 3; i < 7; i++) {
                    if (this.geoScene.scene.children[i].position.y > higher)
                        higher = this.geoScene.scene.children[i].position.y;
                    if (this.geoScene.scene.children[i].position.y < lower)
                        lower = this.geoScene.scene.children[i].position.y;
                }
                if (vertexPoint.position.x < 0 && vertexPoint.position.y > lower && vertexPoint.position.y < higher) {
                    rotationBA += 180 * 0.0175;
                    rotationDC += 180 * 0.0175;
                }
            }
        }
        if (rotationBA.toString() !== 'NaN') {
            this.geoScene.scene.children[10] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleAlpha, materialAngleAlpha);
            this.geoScene.scene.children[10].rotateZ(rotationBA); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[10].name = "angle-alpha";
            this.geoScene.scene.children[20] = alphaGroup;
            this.geoScene.scene.children[20].rotateZ(rotationBA); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[22] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleAlpha, materialAngleAlpha);
            this.geoScene.scene.children[22].rotateZ(rotationBA + 180 * 0.0175); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[22].name = "angle-alpha";
            this.geoScene.scene.children[24] = alphaCopy;
            this.geoScene.scene.children[24].rotateZ(rotationBA + 180 * 0.0175); // rotacionando o alpha para posicao entre as linhas
            this.angleAlpha = Math.round(this.angleAlpha);
        }
        else
            this.angleAlpha = 0;
        if (rotationDC.toString() !== 'NaN') {
            this.geoScene.scene.children[11] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleBeta, materialAngleBeta);
            this.geoScene.scene.children[11].rotateZ(rotationDC); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[11].name = "angle-beta";
            this.geoScene.scene.children[21] = betaGroup;
            this.geoScene.scene.children[21].rotateZ(rotationDC); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[23] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleBeta, materialAngleBeta);
            this.geoScene.scene.children[23].rotateZ(rotationDC + 180 * 0.0175); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[23].name = "angle-beta";
            this.geoScene.scene.children[25] = betaCopy;
            this.geoScene.scene.children[25].rotateZ(rotationDC + 180 * 0.0175); // rotacionando o alpha para posicao entre as linhas
            if (this.relation === Relation.OUT) {
                this.geoScene.scene.children[11].visible = false;
                this.geoScene.scene.children[21].visible = false;
                this.geoScene.scene.children[22].visible = false;
                this.geoScene.scene.children[23].visible = false;
                this.geoScene.scene.children[24].visible = false;
                this.geoScene.scene.children[25].visible = false;
            }
            this.angleBeta = Math.round(this.angleBeta);
        }
        else
            this.angleBeta = 0;
        this.geoScene.scene.children[10].position.copy(vertexPoint.position);
        this.geoScene.scene.children[11].position.copy(vertexPoint.position);
        this.geoScene.scene.children[19].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertexPoint.position.x, vertexPoint.position.y - 3, 0));
        this.geoScene.scene.children[20].position.copy(vertexPoint.position);
        this.geoScene.scene.children[21].position.copy(vertexPoint.position);
        this.geoScene.scene.children[22].position.copy(vertexPoint.position);
        this.geoScene.scene.children[23].position.copy(vertexPoint.position);
        this.geoScene.scene.children[24].position.copy(vertexPoint.position);
        this.geoScene.scene.children[25].position.copy(vertexPoint.position);
    };
    CfAnguloNaoPertenceComponent.prototype.reDrawArc = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
        var alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo
        var charlie = Math.atan2(circlePointC.position.y, circlePointC.position.x) * (180 / Math.PI); // convertendo o angulo da reta C de radianos para graus
        if (charlie < 0)
            charlie += 360; // caso o angulo seja negativo
        var delta = Math.atan2(circlePointD.position.y, circlePointD.position.x) * (180 / Math.PI); // convertendo o angulo da reta D de radianos para graus
        if (delta < 0)
            delta += 360; // caso o angulo seja negativo
        var AB = alpha - beta, BA = beta - alpha, AC = alpha - charlie, CA = charlie - alpha, AD = alpha - delta, DA = delta - alpha, BC = beta - charlie, CB = charlie - beta, BD = beta - delta, DB = delta - beta, CD = charlie - delta, DC = delta - charlie;
        if (AB < 0) {
            AB += 360;
        }
        if (BA < 0) {
            BA += 360;
        }
        if (AC < 0) {
            AC += 360;
        }
        if (CA < 0) {
            CA += 360;
        }
        if (AD < 0) {
            AD += 360;
        }
        if (DA < 0) {
            DA += 360;
        }
        if (BC < 0) {
            BC += 360;
        }
        if (CB < 0) {
            CB += 360;
        }
        if (BD < 0) {
            BD += 360;
        }
        if (DB < 0) {
            DB += 360;
        }
        if (CD < 0) {
            CD += 360;
        }
        if (DC < 0) {
            DC += 360;
        }
        var arcAlphaAD = BA;
        var arcAlphaBC = DC;
        if (AB < DB) {
            arcAlphaAD = AB;
            arcAlphaBC = CD;
        }
        this.arc1 = "\\overgroup{AB}";
        this.arc2 = "\\overgroup{CD}";
        if (this.relation === Relation.OUT) {
            arcAlphaAD = DA;
            arcAlphaBC = CB;
            this.arc1 = "\\overgroup{AD}";
            this.arc2 = "\\overgroup{BC}";
            if (this.ext) {
                this.arc1 = "\\overgroup{AC}";
                this.arc2 = "\\overgroup{BD}";
            }
            if (CA < CD && DB < DC) {
                arcAlphaAD = AD;
                arcAlphaBC = BC;
                this.arc1 = "AD";
                this.arc2 = "BC";
                if (this.ext) {
                    this.arc1 = "\\overgroup{AC}";
                    this.arc2 = "\\overgroup{BD}";
                }
            }
            else if (CA < CD) {
                arcAlphaAD = DC;
                arcAlphaBC = AB;
                this.arc1 = "\\overgroup{AB}";
                this.arc2 = "\\overgroup{CD}";
            }
            else if (DB < DC) {
                arcAlphaAD = BA;
                arcAlphaBC = CD;
                this.arc1 = "\\overgroup{AB}";
                this.arc2 = "\\overgroup{CD}";
            }
        }
        var radiansDA = arcAlphaAD * (Math.PI / 180);
        var radiansBC = arcAlphaBC * (Math.PI / 180);
        var segmentCount = arcAlphaAD * 2, geometryArcDA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArcBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 });
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansDA;
            geometryArcDA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        segmentCount = arcAlphaBC * 2;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansBC;
            geometryArcBC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        // rotacionar 1 grau -> 0.0175
        var rotationBA = (alpha - 90) * 0.0175;
        var rotationDC = (charlie - 90) * 0.0175;
        if (AB > DB) {
            rotationBA = (beta - 90) * 0.0175;
            rotationDC = (delta - 90) * 0.0175;
        }
        if (this.relation === Relation.OUT) {
            rotationBA = (delta - 90) * 0.0175;
            rotationDC = (charlie - 90) * 0.0175;
            if (CA < CD && DB < DC) {
                rotationBA = (alpha - 90) * 0.0175;
                rotationDC = (beta - 90) * 0.0175;
            }
            else if (CA < CD)
                rotationDC = (alpha - 90) * 0.0175;
            else if (DB < DC)
                rotationBA = (beta - 90) * 0.0175;
        }
        if (rotationBA.toString() !== 'NaN' && rotationDC.toString() !== 'NaN') {
            materialArc.depthTest = false;
            var arcDA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArcDA, materialArc);
            arcDA.rotateZ(rotationBA);
            arcDA.name = "arc-da";
            var arcBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArcBC, materialArc);
            arcBC.rotateZ(rotationDC);
            arcBC.name = "arc-bc";
            this.geoScene.scene.children[12] = arcDA;
            this.geoScene.scene.children[13] = arcBC;
        }
    };
    CfAnguloNaoPertenceComponent.prototype.reDrawLabel = function (label) {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var labelA = this.geoScene.scene.getObjectByName("label-a");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        var labelC = this.geoScene.scene.getObjectByName("label-c");
        var labelD = this.geoScene.scene.getObjectByName("label-d");
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "A") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2) //distancia entre o ponto zero e A
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointA.position.x, distancesRatio * circlePointA.position.y, 0.6));
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointB.position.x, distancesRatio * circlePointB.position.y, 0.6));
        }
        else if (label === "C") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            if (!this.ext)
                labelC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointC.position.x, distancesRatio * circlePointC.position.y, 0.6));
            else
                labelD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointC.position.x, distancesRatio * circlePointC.position.y, 0.6));
        }
        else if (label === "D") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            if (!this.ext)
                labelD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointD.position.x, distancesRatio * circlePointD.position.y, 0.6));
            else
                labelC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointD.position.x, distancesRatio * circlePointD.position.y, 0.6));
        }
    };
    CfAnguloNaoPertenceComponent.prototype.changeAngle = function () {
        var radians = this.angleBeta / 2 * (Math.PI / 180);
        var aCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.sin(radians) * (this.radiusExt - 0.5)), (Math.cos(radians) * (this.radiusExt - 0.5)), 0.5), bCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.sin(radians) * (this.radiusExt - 0.5)), -(Math.cos(radians) * (this.radiusExt - 0.5)), 0.5), cCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((Math.sin(radians) * (this.radiusExt - 0.5)), -(Math.cos(radians) * (this.radiusExt - 0.5)), 0.5), dCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((Math.sin(radians) * (this.radiusExt - 0.5)), (Math.cos(radians) * (this.radiusExt - 0.5)), 0.5);
        this.geoScene.scene.children[7].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
        if (this.relation === Relation.OUT) {
            if (this.angleAlpha === 180)
                this.angleAlpha = 179.9;
            this.geoScene.scene.children[7].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](35, 0, 0));
            var radians_1 = (90 - this.angleAlpha) * (Math.PI / 180);
            aCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.sin(radians_1) * (this.radiusExt - 0.5)), (Math.cos(radians_1) * (this.radiusExt - 0.5)), 0.5), dCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-(Math.sin(radians_1) * (this.radiusExt - 0.5)), -(Math.cos(radians_1) * (this.radiusExt - 0.5)), 0.5);
            cCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((this.radiusExt - 0.5), (Math.cos(radians_1) * (this.radiusExt - 0.5) / 9), 0.5), bCordinates = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((this.radiusExt - 0.5), -(Math.cos(radians_1) * (this.radiusExt - 0.5) / 9), 0.5);
            this.oldAngleAlpha = this.angleAlpha;
            this.oldAngleBeta = this.angleBeta;
        }
        this.geoScene.scene.children[3].position.copy(aCordinates);
        this.geoScene.scene.children[4].position.copy(bCordinates);
        this.geoScene.scene.children[5].position.copy(cCordinates);
        this.geoScene.scene.children[6].position.copy(dCordinates);
        if (this.relation == Relation.IN)
            this.geoScene.fromInput = true;
        else
            this.geoScene.fromInput = false;
        this.reDrawPointsToCircle();
        this.geoScene.fromInput = true;
        this.reDrawArc();
        this.reDrawAngle();
        var lbls = ["A", "B", "C", "D"];
        for (var i = 0; i < lbls.length; i++)
            this.reDrawLabel(lbls[i]);
        if (this.relation === Relation.OUT)
            this.geoScene.scene.children[19].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[7].position.x + 3, 0, 0));
        this.geoScene.fromInput = false;
        this.geoScene.render();
    };
    CfAnguloNaoPertenceComponent.prototype.ngAfterViewInit = function () {
        // ------------------------------ Pontos ------------------------------
        // O
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        this.geoScene.scene.children[2].visible = false;
        // A
        this.geoScene.scene.children[3] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
        this.geoScene.scene.children[3].name = "ponto-a";
        // B
        this.geoScene.scene.children[4] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0));
        this.geoScene.scene.children[4].name = "ponto-b";
        // C
        this.geoScene.scene.children[5] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[5].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, -6, 0));
        this.geoScene.scene.children[5].name = "ponto-c";
        // D
        this.geoScene.scene.children[6] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[6].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
        this.geoScene.scene.children[6].name = "ponto-d";
        // P
        this.geoScene.scene.children[7] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](0.75, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        this.geoScene.scene.children[7].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[7].name = "ponto-p";
        // ------------------------------ Linhas ------------------------------
        // Vertices
        var geometryAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
        geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, -6, 0));
        var geometryBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
        geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0));
        // AC
        this.geoScene.scene.children[8] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[8].name = "line-ac";
        // BD
        this.geoScene.scene.children[9] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[9].name = "line-bd";
        // ------------------------- Arcos e Ângulos --------------------------
        var segmentCount = 92, radius = 5, geometryAngleAlpha = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryAngleBeta = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArcDA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArcBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), radiansAlpha = 70 * (Math.PI) / 180, radiansBeta = 110 * (Math.PI) / 180, radiansArcAlpha = 90 * (Math.PI) / 180, radiansArcBeta = 25 * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansAlpha;
            geometryAngleAlpha.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansBeta;
            geometryAngleBeta.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
        }
        segmentCount = 360;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansArcAlpha;
            geometryArcDA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansArcBeta;
            geometryArcBC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        // Ângulo Alpha
        this.geoScene.scene.children[10] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleAlpha, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x0000FF, linewidth: 2 }));
        this.geoScene.scene.children[10].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[10].rotateZ(-220 * 0.0175);
        this.geoScene.scene.children[10].name = "angle-alpha";
        // Ângulo Beta
        this.geoScene.scene.children[11] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleBeta, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        this.geoScene.scene.children[11].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[11].rotateZ(50 * 0.0175);
        this.geoScene.scene.children[11].name = "angle-beta";
        // Ângulo Alpha Espelhado
        this.geoScene.scene.children[22] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleAlpha, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x0000FF, linewidth: 2 }));
        this.geoScene.scene.children[22].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[22].rotateZ(-40 * 0.0175);
        this.geoScene.scene.children[22].name = "angle-alpha-c";
        // Ângulo Beta Espelhado
        this.geoScene.scene.children[23] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleBeta, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        this.geoScene.scene.children[23].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[23].rotateZ(230 * 0.0175);
        this.geoScene.scene.children[23].name = "angle-beta-c";
        // Arco DA
        this.geoScene.scene.children[12] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArcDA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        this.geoScene.scene.children[12].rotateZ(-225 * 0.0175);
        this.geoScene.scene.children[12].name = "arc-da";
        // Arco BC
        this.geoScene.scene.children[13] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArcBC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        this.geoScene.scene.children[13].rotateZ(-77 * 0.0175);
        this.geoScene.scene.children[13].name = "arc-bc";
        // ------------------------------ Labels ------------------------------
        // O
        this.geoScene.scene.children[14] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, '0x000000');
        this.geoScene.scene.children[14].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-2.5, -2.5, 0));
        this.geoScene.scene.children[14].visible = false;
        // A
        this.geoScene.scene.children[15] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 5, '0x000000');
        this.geoScene.scene.children[15].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, 25, 0));
        this.geoScene.scene.children[15].name = "label-a";
        // B
        this.geoScene.scene.children[16] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, '0x000000');
        this.geoScene.scene.children[16].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, -25, 0));
        this.geoScene.scene.children[16].name = "label-b";
        // C
        this.geoScene.scene.children[17] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('C', 5, '0x000000');
        this.geoScene.scene.children[17].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, -9, 0));
        this.geoScene.scene.children[17].name = "label-c";
        // D
        this.geoScene.scene.children[18] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('D', 5, '0x000000');
        this.geoScene.scene.children[18].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, 9, 0));
        this.geoScene.scene.children[18].name = "label-d";
        // P
        this.geoScene.scene.children[19] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('P', 3, '0x000000');
        this.geoScene.scene.children[19].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, -3, 0));
        this.geoScene.scene.children[19].name = "label-p";
        // Alpha
        this.geoScene.scene.children[20] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4, '#FF0000');
        this.geoScene.scene.children[20].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](10, 0, 0));
        this.geoScene.scene.children[20].name = "alpha";
        // Beta
        this.geoScene.scene.children[21] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('β', 4, '#0000FF');
        this.geoScene.scene.children[21].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 8, 0));
        this.geoScene.scene.children[21].name = "beta";
        // Alpha Espelhado
        this.geoScene.scene.children[24] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4, '#FF0000');
        this.geoScene.scene.children[24].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](26, 0, 0));
        this.geoScene.scene.children[24].name = "alpha";
        // Beta Espelhado
        this.geoScene.scene.children[25] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('β', 4, '#0000FF');
        this.geoScene.scene.children[25].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, -8, 0));
        this.geoScene.scene.children[25].name = "beta";
        this.reDrawAngle();
        this.pointsDrawOrder();
        this.geoScene.render();
    };
    CfAnguloNaoPertenceComponent.prototype.reDrawDefault = function () {
        this.radius = 9;
        this.radiusExt = 30;
        this.radiusInt = 29;
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.ngAfterViewInit();
        if (this.relation === Relation.OUT) {
            this.geoScene.scene.children[5].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
            this.geoScene.scene.children[6].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, -6, 0));
            this.geoScene.scene.children[7].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
            this.geoScene.scene.children[19].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](52, 0, 0));
            var geometryAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
            geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
            var geometryBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
            geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0));
            this.geoScene.scene.children[8] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
            this.geoScene.scene.children[9] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
            var segmentCount = 92, radius = 5, geometryAngleAlpha = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), radiansAlpha = 30 * (Math.PI) / 180;
            for (var i = 0; i <= segmentCount; i++) {
                var theta = (i / segmentCount) * radiansAlpha;
                geometryAngleAlpha.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
            }
            this.geoScene.scene.children[10] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleAlpha, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            this.geoScene.scene.children[10].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
            this.geoScene.scene.children[10].rotateZ(-195 * 0.0175);
            this.geoScene.scene.children[10].name = "angle-alpha";
            this.geoScene.scene.children[20].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
            this.geoScene.scene.children[17].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, -9, 0));
            this.geoScene.scene.children[18].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, 9, 0));
            this.geoScene.scene.children[11].visible = false;
            this.geoScene.scene.children[21].visible = false;
            this.geoScene.scene.children[22].visible = false;
            this.geoScene.scene.children[23].visible = false;
            this.geoScene.scene.children[24].visible = false;
            this.geoScene.scene.children[25].visible = false;
        }
        this.pointsDrawOrder();
        this.geoScene.render();
    };
    CfAnguloNaoPertenceComponent.prototype.reDrawDefaultClick = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.reDrawArc();
        var pts = ["A", "B", "C", "D"];
        for (var i = 0; i < pts.length; i++) {
            this.dragged = pts[i];
            this.reDrawPointsToCircle();
            this.reDrawAngle();
            this.reDrawLabel(this.dragged);
        }
        this.geoScene.render();
    };
    CfAnguloNaoPertenceComponent.prototype.pointsDrawOrder = function () {
        this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 2;
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 3;
        this.geoScene.scene.children[6].renderOrder = this.geoScene.scene.children.length - 4;
        this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 5;
    };
    CfAnguloNaoPertenceComponent.prototype.checkInput = function (input) {
        var checkRadius = (this.radius >= 1 && this.radius <= 10);
        var checkAngle = (this.angleAlpha > -1 && this.angleAlpha < 181) && (this.angleBeta > -1 && this.angleBeta < 181);
        if (checkRadius && checkAngle) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputAngle = false;
            this.errorInputRadius = false;
            if (input === 'radius')
                this.reDrawDefaultClick();
            else {
                if (input === 'beta')
                    this.angleAlpha = 180 - this.angleBeta;
                if (input === 'alpha')
                    this.angleBeta = 180 - this.angleAlpha;
                this.changeAngle();
            }
        }
        else {
            if (!checkRadius)
                this.errorInputRadius = true;
            else
                this.errorInputRadius = false;
            if (!checkAngle)
                this.errorInputAngle = true;
            else
                this.errorInputAngle = false;
            this.showAngleAlpha = this.oldAngleAlpha;
            this.showAngleBeta = this.oldAngleBeta;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfAnguloNaoPertenceComponent.prototype, "geoScene", void 0);
    CfAnguloNaoPertenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-angulo-nao-pertence',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-nao-pertence/cf-angulo-nao-pertence.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-nao-pertence/cf-angulo-nao-pertence.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfAnguloNaoPertenceComponent);
    return CfAnguloNaoPertenceComponent;
}());

/** Children order (CTRL+F e ta safe :v)
 * 0 - Circulo Externo (Azul, radiusExt)
 * 1 - Circulo Interno (Branco, radiusInt)
 * 2 - Ponto do Centro (0,0)  ~ Criado apenas para caso peçam para colocar depois ~
 * 3 - Ponto A
 * 4 - Ponto B
 * 5 - Ponto C
 * 6 - Ponto D
 * 7 - Ponto P
 * 8 - Linha AC
 * 9 - Linha BD
 * 10 - Ângulo Alpha
 * 11 - Ângulo Beta
 * 12 - Arco DA
 * 13 - Arco BC
 * 14 - Label do Ponto do Centro  ~ Criado apenas para caso peçam para colocar depois ~
 * 15 - Label do Ponto A
 * 16 - Label do Ponto B
 * 17 - Label do Ponto C
 * 18 - Label do Ponto D
 * 19 - Label do Ponto P
 * 20 - Label do Ângulo Alpha
 * 21 - Label do Ângulo Beta
 * 22 - Ângulo Alpha Espelhado
 * 23 - Ângulo Beta Espelhado
 * 24 - Label do Ângulo Alpha Espelhado
 * 25 - Label do Ângulo Beta Espelhado
*/


/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-segmento/cf-angulo-segmento.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o ângulo da circunferência em relação a um vértice</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\" style=\"margin-right: 100px;\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n          <label>e do ângulo (<i><b> α </b></i>):</label>\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angle\" style=\"position: absolute; margin-left: 5px;\"\r\n            oninput=\"this.value = Math.round(Math.abs(this.value))\" (ngModelChange)=\"checkInput()\" max=\"180\" min=\"0\" />\r\n          <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\" id=\"degree\">°</span>\r\n        </p>\r\n\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n        <div [className]=\"errorInputAngle === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O ângulo deve ser um valor contido entre <b>0°</b> e <b>180°</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"90\" [color]=\"'rgb(70,131,180)'\">\r\n      </geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"90\" [color]=\"'rgb(255,255,255)'\">\r\n      </geo-circunferencemesh>\r\n    </geo-scene>\r\n\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h4>\r\n      Ângulo de Segmento\r\n    </h4>\r\n    <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\"\r\n      (click)=\"loadExample($event, button.value)\">\r\n      {{button.title}}\r\n    </button>\r\n    <hr />\r\n\r\n    <h5>\r\n      Propriedades:\r\n    </h5>\r\n    <div *ngIf=\"relation == 0\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <p>Ângulo de segmento é todo ângulo que tem vértice na circunferência, um lado secante e o outro tangente à ela,\r\n          ou seja, duas semirretas o compõem e uma delas intercepta a circunferência e a outra é tangente à ela.\r\n        </p>\r\n        <p>Em outras palavras podemos dizer que o ângulo de segmento é o ângulo medido entre uma corda da circunferência\r\n          e a reta tangente à circunferência em um dos extremos desta corda.\r\n        </p>\r\n\r\n        <p class=\"text-center\"><img class=\"img-fluid\" style=\"width: 275px;\"\r\n            src=\"../../../../../../assets/images/geometria/cincunferencia/cf-angulos/cf_angulo_segmento.svg\">\r\n        </p>\r\n\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 1\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <p>A qualquer ângulo de segmento\r\n          <ng-katex equation=\"\\alpha,\">\r\n          </ng-katex>\r\n          corresponde um arco\r\n          <ng-katex equation=\"\\overgroup{VB}.\">\r\n          </ng-katex>\r\n        </p>\r\n        <p>\r\n          O comprimento do arco, é a distância percorrida sobre a circunferência de A até B.\r\n        </p>\r\n        <p>Sua medida é igual ao dobro da medida do ângulo de segmento\r\n          <ng-katex equation=\"\\alpha\"></ng-katex>\r\n          multiplicada pelo tamanho do raio da circunferência.\r\n        </p>\r\n        <p>\r\n          Considerando:\r\n          <ng-katex equation=\"Med\\overgroup{VB} = 2 * \\alpha * r\"></ng-katex>\r\n        </p>\r\n\r\n        <!-- Calculos -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapsePrincipal\" aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n                  Cálculo = <ng-katex class=\"explicacao\"\r\n                    equation=\"{{ (2 * showAngle * radius)/180 | number:'1.0-3':'pt'}} \\ \\pi  \\ u.m \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapsePrincipal\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapsePrincipal\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\r\n                            \\textcolor{black}{\r\n                            \\begin{array}{cc}\r\n                              180\\degree & \\pi \\\\\r\n                              {{showAngle}}\\degree & x\r\n                           \\end{array}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Precisamos converter a medida do ângulo em radianos, usando regra de três.\r\n                        <ul>\r\n                          <li>\r\n                            Medidas da Esquerda em Graus\r\n                          </li>\r\n                          <li>\r\n                            Medidas da Direita em Radianos\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{180\\degree x = {{ showAngle }}\\degree \\pi }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Multiplicando em X, temos os valores acima.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{x = {{ showAngle }}\\degree \\pi / 180\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Agora, passamos o 180 dividindo.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--Passo 4-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{x = {{showAngle / 180 | number:'1.0-3':'pt'}} \\pi }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Realizando a divisão, obtemos o ângulo em radianos.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Passo 5-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{Med\\ \\overgroup{VB} = \">\r\n                            </ng-katex>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{Med\\ \\overgroup{VB} = 2 * {{( showAngle / 180) | number:'1.0-3':'pt' }} \\pi * {{radius}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo o ângulo e o raio na fórmula:\r\n                        <ng-katex equation=\"Med\\ \\overgroup{VB} = 2 * \\alpha * r\"></ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Passo 6-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{Med\\ \\overgroup{VB} = {{ (2 * showAngle * radius)/180 | number:'1.0-3':'pt'}} \\ \\pi \\ u.m}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Efetuamos as respectivas multiplicações e divisões e obtivemos o resultado.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-segmento/cf-angulo-segmento.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulo-segmento/cf-angulo-segmento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfAnguloSegmentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Enum para definir a relação entre as circunferÊncias
 */
var Relation;
(function (Relation) {
    Relation[Relation["ANG"] = 0] = "ANG";
    Relation[Relation["CPA"] = 1] = "CPA";
})(Relation || (Relation = {}));
var CfAnguloSegmentoComponent = /** @class */ (function () {
    function CfAnguloSegmentoComponent() {
        this.errorInputAngle = false;
        this.errorInputRadius = false;
        this.relation = Relation.ANG;
        this.dragging = false;
        this.dragged = "";
        this.currentIndex = null;
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        this.angle = 60;
        this.oldAngle = this.angle;
        this.showAngle = this.angle;
        // Propriedades da circunferência principal
        this.radius = 9;
        this.radiusExt = 30; // Circunferência que forma a linha
        this.radiusInt = 29; // Circunferência queserá a "parte de dentro"
        //botões
        this.buttons = [
            { title: "Ângulo Central", route: "cf_angulo_central" },
            { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
            { title: "Arco Capaz", route: "cf_angulo_capaz" },
            { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
            { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
        ];
        this.buttons_examples = [
            { title: 'Ângulo', value: 0 },
            { title: 'Comprimento do Arco', value: 1 }
        ];
    }
    CfAnguloSegmentoComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    CfAnguloSegmentoComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        // Checagem do tipo da relação
        switch (this.relation) {
            case Relation.ANG:
                this.checkInput();
                break;
            case Relation.CPA:
                this.checkInput();
                break;
        }
    };
    CfAnguloSegmentoComponent.prototype.ngDoCheck = function () {
        if (this.angle >= 0 && this.angle <= 180) {
            this.showAngle = this.angle;
            this.oldAngle = this.angle;
        }
        this.geoScene.addDegreeSymbol(this.angle, 'degree');
    };
    CfAnguloSegmentoComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        var arr = [];
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        this.insersects.forEach(function (el) {
            if (el.object.name == "circunference-point-b" || el.object.name == "circunference-point-v") {
                arr.push(el);
                _this.currentIndex = arr;
                console.log(arr);
                return;
            }
        });
    };
    CfAnguloSegmentoComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    /**
    * Captura o evento de mouse down na cena
    * @param event evento do mouse
    */
    CfAnguloSegmentoComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfAnguloSegmentoComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    /**
     * Captura o evento de mouse move na cena
     * @param event evento do mouse
     */
    CfAnguloSegmentoComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
            this.insersects.forEach(function (el) {
                if (el.object.name == "circunference-point-b" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (el.object.name == "circunference-point-v" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length === 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "circunference-point-b") {
                this.dragged = "B";
            }
            else if (this.currentIndex[0].object.name == "circunference-point-v") {
                this.dragged = "V";
            }
            this.reDrawPointsToCircle();
            this.reDrawLabel(this.dragged);
            this.reDrawAngle();
            this.geoScene.render();
        }
    };
    CfAnguloSegmentoComponent.prototype.reDrawPointsToCircle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("circunference-point-a");
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-point-b");
        var vertexPoint = this.geoScene.scene.getObjectByName("circunference-point-v");
        var verticeGroup = this.geoScene.scene.getObjectByName("g-vertice");
        var lineB = this.geoScene.scene.getObjectByName("line-b");
        this.geoScene.scene.remove(lineB);
        this.geoScene.scene.remove(verticeGroup);
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "V") {
            verticeGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
            verticeGroup.name = "g-vertice";
            var distance = Math.sqrt((Math.pow((vertexPoint.position.x), 2) + Math.pow((vertexPoint.position.y), 2) //distancia entre o ponto zero e V
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var position = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((distancesRatio * vertexPoint.position.x), (distancesRatio * vertexPoint.position.y), 0);
            vertexPoint.position.copy(position);
            var segmentCount = 360, geometryTanArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialTanArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }), radius = this.radiusExt, radians = Math.PI;
            for (var i = 0; i <= segmentCount; i++) {
                var theta = (i / segmentCount) * radians;
                geometryTanArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
                if (i === 2 || i === segmentCount - 2) {
                    geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
                }
            }
            var alpha = Math.atan2(vertexPoint.position.y, vertexPoint.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
            if (alpha < 0)
                alpha += 360; // caso o angulo seja negativo
            var tanArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryTanArc, materialTanArc);
            tanArc.position.copy(position);
            tanArc.visible = false;
            var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
            circlePointA.position.copy(geometryLine.vertices[1]);
            verticeGroup.add(circlePointA);
            verticeGroup.add(tanArc);
            verticeGroup.add(line);
            verticeGroup.position.copy(vertexPoint.position);
            verticeGroup.rotateZ((alpha - 90) * 0.0175);
        }
        else if (this.dragged === "B") {
            var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((distancesRatio * circlePointB.position.x), (distancesRatio * circlePointB.position.y), 0));
        }
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointB.position.y - vertexPoint.position.y), 2)));
        var distancesRatioB = (distanceB + 3) / distanceB;
        var xB = (1 - distancesRatioB) * vertexPoint.position.x + distancesRatioB * circlePointB.position.x, yB = (1 - distancesRatioB) * vertexPoint.position.y + distancesRatioB * circlePointB.position.y;
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertexPoint.position.x, vertexPoint.position.y, 0.6));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
        lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineB.name = "line-b";
        this.geoScene.scene.add(lineB);
        this.geoScene.scene.add(verticeGroup);
        this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 2;
        this.geoScene.render();
    };
    CfAnguloSegmentoComponent.prototype.reDrawLabel = function (label) {
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-point-b");
        var verticePoint = this.geoScene.scene.getObjectByName("circunference-point-v");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        var vertex = this.geoScene.scene.getObjectByName("label-v");
        this.geoScene.scene.remove(labelB);
        this.geoScene.scene.remove(vertex);
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "V") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((verticePoint.position.x), 2) + Math.pow((verticePoint.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            vertex.position.x = (distancesRatio * verticePoint.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
            vertex.position.y = (distancesRatio * verticePoint.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
            labelB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
        }
        this.geoScene.scene.add(labelB);
        this.geoScene.scene.add(vertex);
        this.geoScene.render();
    };
    CfAnguloSegmentoComponent.prototype.reDrawAngle = function () {
        var vertexPoint = this.geoScene.scene.getObjectByName("circunference-point-v");
        this.reDrawArc();
        this.angle /= 2;
        this.angle += 5;
        var ang = this.geoScene.scene.getObjectByName("angle");
        var alphaGroup = this.geoScene.scene.getObjectByName("alpha");
        this.geoScene.scene.remove(ang, alphaGroup);
        alphaGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        alphaGroup.name = "alpha";
        // Criando nova presentação para o angulo
        var segmentCount = Math.round(this.angle * 2), radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }), radians = this.angle * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
            if (i == Math.round(this.angle)) {
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (radius + 2.25), Math.cos(theta) * (radius + 2.25), 0));
                var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
                line.visible = false;
                var alpha = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '0x000000');
                alpha.position.copy(geometryLine.vertices[1]);
                alphaGroup.add(line);
                alphaGroup.add(alpha);
            }
        }
        var vert = Math.atan2(vertexPoint.position.y, vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (vertexPoint.position.x > 0 && vert < 0)
            vert += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var rotation = (this.angle - 180 + vert) * 0.0175 + 175 * 0.0175; // mesmo esquema do angulo inscrito, funciona mas nao sei explicar, cheguei nisso ai por trial & error :v
        ang = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        ang.position.copy(vertexPoint.position);
        ang.rotateZ(rotation);
        ang.name = "angle";
        alphaGroup.position.copy(ang.position);
        alphaGroup.rotateZ(rotation);
        this.geoScene.scene.add(ang, alphaGroup);
        this.angle -= 5;
        this.angle = Math.round(this.angle);
        if (this.angle === 180)
            this.geoScene.scene.getObjectByName("line-b").visible = false;
        else if (this.angle === 0) {
            this.geoScene.scene.getObjectByName("line-b").visible = false;
            this.geoScene.scene.getObjectByName("angle").visible = false;
            this.geoScene.scene.getObjectByName("alpha").visible = false;
        }
    };
    CfAnguloSegmentoComponent.prototype.reDrawArc = function () {
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-point-b");
        var vertexPoint = this.geoScene.scene.getObjectByName("circunference-point-v");
        // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
        var alpha = Math.atan2(vertexPoint.position.y, vertexPoint.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo a angulo da reta B de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo
        if (!this.geoScene.fromInput) {
            this.angle = beta - alpha; //tirando a diferenca dos dois, temos o angulo entre A e B
            if (this.angle < 0)
                this.angle += 360; // caso o angulo seja negativo
        }
        else
            this.angle *= 2;
        var arc = this.geoScene.scene.getObjectByName("arc");
        this.geoScene.scene.remove(arc);
        // Criando nova presentação para o angulo
        var segmentCount = Math.round(this.angle * 2), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }), radians = this.angle * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        var rotation = (beta - 90) * 0.0175;
        materialArc.depthTest = false;
        arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
        arc.position.x = 0;
        arc.rotateZ(rotation);
        arc.name = "arc";
        this.geoScene.scene.add(arc);
    };
    CfAnguloSegmentoComponent.prototype.changeAngle = function () {
        // Calcula o valor em radianos do angulo
        var radians = (135 - this.angle) * (Math.PI) / 90;
        // Calcula o Y e X do ponto B
        var y = Math.cos(radians) * (this.radiusExt - 0.5), x = Math.sin(radians) * (this.radiusExt - 0.5);
        // Atualiza o ponto B
        this.geoScene.scene.getObjectByName("circunference-point-b").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0.5));
        //Reseta a reta A e ponto V
        this.geoScene.scene.getObjectByName("circunference-point-v").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.radiusExt + 0.5, 0, 0.5));
        this.dragged = "V";
        this.reDrawPointsToCircle();
        this.reDrawAngle();
        this.showAngle = this.angle;
        this.oldAngle = this.angle;
        // resetando as labels
        var lbls = ["V", "B"];
        for (var i = 0; i < lbls.length; i++)
            this.reDrawLabel(lbls[i]);
        this.geoScene.render();
        this.geoScene.fromInput = false;
    };
    CfAnguloSegmentoComponent.prototype.ngAfterViewInit = function () {
        // --------------  Ponto do centro --------------
        var circleCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30);
        var materialCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 });
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleCenter, materialCenter);
        // Label do ponto central
        var labelCircleCenter = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, '0x4683B4');
        labelCircleCenter.position.x = -3;
        labelCircleCenter.position.y = -3;
        //  -------------- Linha para baixo (V para B) --------------
        var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-30, 0, 0.1));
        geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](19, -27.5, 0.1));
        var lineVB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        lineVB.name = "line-b";
        // -------------- Ponto do V --------------
        var circlePointV = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        circlePointV.position.x = -29.5;
        circlePointV.position.y = 0;
        circlePointV.name = "circunference-point-v";
        // Label do ponto A
        var labelPointV = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('V', 5, '0xFF0000');
        labelPointV.position.x = -34;
        labelPointV.position.y = 0;
        labelPointV.name = "label-v";
        // -------------- Ponto do B --------------
        var circlePointB = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        circlePointB.position.x = 15.5;
        circlePointB.position.y = -25.5;
        circlePointB.name = "circunference-point-b";
        // Label do ponto B
        var labelPointB = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, '0xFF0000');
        labelPointB.position.x = 21.5;
        labelPointB.position.y = -25.5;
        labelPointB.name = "label-b";
        //  -------------- Ponto do A --------------
        var circlePointA = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        circlePointA.position.x = -30;
        circlePointA.position.y = -35;
        circlePointA.name = "circunference-point-a";
        circlePointA.visible = false;
        // --------------  Linha para baixo (V para A) --------------
        var geometryLineTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineTwo.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-30, 30, 0.1));
        geometryLineTwo.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-30, -30, 0.1));
        var lineVA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineTwo, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        lineVA.name = "g-vertice";
        // -------------- Ângulo --------------
        var segmentCount = 92, radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }), radians = this.angle * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        angle.position.x = -30;
        angle.rotateZ(-90 * 0.0175);
        angle.name = "angle";
        segmentCount = 360,
            radius = 5,
            radians = this.angle * 2 * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        materialArc.depthTest = false;
        var arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
        arc.position.x = 0;
        arc.rotateZ(-150 * 0.0175);
        arc.name = "arc";
        var alpha = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '0x000000');
        alpha.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-26.5, -6.5, 0));
        alpha.name = "alpha";
        // Adiciona os objetos na cena
        this.geoScene.scene.add(centerPoint, labelCircleCenter, lineVB, circlePointV, labelPointV, circlePointB, labelPointB, circlePointA, lineVA, arc, angle, alpha);
        this.geoScene.render();
    };
    CfAnguloSegmentoComponent.prototype.reDrawDefault = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        material.depthTest = false;
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        materialTwo.depthTest = false;
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        this.changeAngle();
    };
    CfAnguloSegmentoComponent.prototype.checkInput = function () {
        var checkRadius = (this.radius >= 1 && this.radius <= 10);
        var checkAngle = (this.angle > -1 && this.angle < 181);
        if (checkRadius && checkAngle) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputAngle = false;
            this.errorInputRadius = false;
            this.geoScene.fromInput = true;
            this.reDrawDefault();
        }
        else {
            if (!checkRadius)
                this.errorInputRadius = true;
            else
                this.errorInputRadius = false;
            if (!checkAngle)
                this.errorInputAngle = true;
            else
                this.errorInputAngle = false;
            this.showAngle = this.oldAngle;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfAnguloSegmentoComponent.prototype, "geoScene", void 0);
    CfAnguloSegmentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-angulo-segmento',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-segmento/cf-angulo-segmento.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulo-segmento/cf-angulo-segmento.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfAnguloSegmentoComponent);
    return CfAnguloSegmentoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulos/cf-angulos.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 rowMod\">\r\n    <div class=\"container-sm border centerMenu\">\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o ângulo da circunferência em relação a um vértice</h5>\r\n      <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulos/cf-angulos.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n.centerMenu {\n  text-align: center;\n  margin-top: 10rem;\n  margin-left: 17.5rem; }\n.rowMod {\n  display: -webkit-box;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-angulos/cf-angulos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfAngulosComponent; });
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

var CfAngulosComponent = /** @class */ (function () {
    function CfAngulosComponent() {
        //botões
        this.buttons = [
            { title: "Ângulo Central", route: "cf_angulo_central" },
            { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
            { title: "Arco Capaz", route: "cf_angulo_capaz" },
            { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
            { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
        ];
        //Accordion
        this.cards = [
            { id: "one", title: "a", content: '' },
            { id: "two", title: "a", content: "b" },
            { id: "three", title: "a", content: "b" },
            { id: "four", title: "a", content: "b" }
        ];
    }
    CfAngulosComponent.prototype.ngAfterViewInit = function () {
    };
    CfAngulosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-angulos',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulos/cf-angulos.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-angulos/cf-angulos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfAngulosComponent);
    return CfAngulosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a explicação de como chegar no pi ou ou calcular o comprimento de\r\n      uma circunferência</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <!-- Botão para inserir a medida do ângulo-->\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <div class=\" mt-4\">\r\n      <p class=\"text-center\">\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"diametro\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"20\" min=\"2\" />\r\n      </p>\r\n      <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\" style=\"text-align: center;\">\r\n          O diâmetro deve ser um valor inteiro contido entre <b>2</b> e <b>20</b>.\r\n        </div>\r\n    </div>\r\n  \r\n\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"92\" [color]=\"'rgb(0,0,0)'\"></geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"92\" [color]=\"'rgb(255,255,255)'\">\r\n      </geo-circunferencemesh>\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>\r\n      O Número PI (<ng-katex equation=\"\\pi\"></ng-katex>):\r\n    </h4>\r\n    <p>\r\n      Quando dividimos a medida do comprimento de qualquer circunferência\r\n      pela medida do seu diâmetro, obtemos sempre o mesmo resultado:\r\n      <ng-katex equation=\"3.141592\"></ng-katex>...\r\n    </p>\r\n    <br />\r\n    <p>\r\n      Logo, <ng-katex equation=\"\\frac{C}{\\color{red}d}=\\pi\"></ng-katex>.\r\n    </p>\r\n    <br />\r\n    <p>\r\n      Sendo assim,\r\n      <ng-katex equation=\"{{equacao}}\"></ng-katex>\r\n    </p>\r\n    <br />\r\n    <p>\r\n      <ng-katex equation=\"\\pi = 3,14\"></ng-katex>\r\n    </p>\r\n    <br />\r\n    <p>\r\n      Esse número é chamado de <b>pi</b> (<ng-katex equation=\"\\pi\"></ng-katex>,\r\n      no alfabeto grego).\r\n    </p>\r\n    <br />\r\n    <p>\r\n      Costuma-se considerar: <ng-katex equation=\"\\pi = 3,14\"></ng-katex>\r\n    </p>\r\n  </div>\r\n\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfComprimentoCircunferenciaNpComponent; });
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





var CfComprimentoCircunferenciaNpComponent = /** @class */ (function () {
    function CfComprimentoCircunferenciaNpComponent() {
        //botões
        this.buttons = [
            { title: "O número pi", route: "cf_numero_pi" },
            { title: "Comprimento da Circunferência", route: "cf_comprimento_circunferencia" },
        ];
        this.diametro = 18;
        this.radiusExt = 30;
        this.radiusInt = 29;
        // Muda o ponto pra virgula
        this.conta = (this.diametro * Math.PI);
        this.newConta = this.conta.toString().replace(".", ",");
        this.equacao = "\\frac{" + this.newConta + "}{\\color{red}" + this.diametro + "}=\\pi";
        this.resultado = "\\pi = " + ((this.diametro * Math.PI) / this.diametro).toFixed(2);
    }
    CfComprimentoCircunferenciaNpComponent.prototype.ngAfterViewInit = function () {
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.5));
        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 29, 0.5));
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 });
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometry, material);
        var materialCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 });
        var circleCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30);
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleCenter, materialCenter);
        centerPoint.position.z = 0.6;
        this.geoScene.scene.add(line);
        this.geoScene.scene.add(centerPoint);
        var labelDiameter = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('d/2', 5, 'red');
        labelDiameter.position.x = 5;
        labelDiameter.position.y = this.radiusInt / 2;
        this.geoScene.scene.add(labelDiameter);
        this.geoScene.render();
    };
    CfComprimentoCircunferenciaNpComponent.prototype.alterCircunferenceRadius = function () {
        // Remove os elementos da cena
        this.geoScene.removeAll();
        // Criando novas circunferencias
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material));
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xffffff });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo));
        var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.5));
        geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.radiusInt, 0));
        var materialLine = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 });
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, materialLine);
        line.renderOrder = 0;
        var materialCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 });
        var circleCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30);
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleCenter, materialCenter);
        centerPoint.position.z = 0.6;
        this.geoScene.scene.add(line);
        this.geoScene.scene.add(centerPoint);
        // labelDiameter.scale.set();
        var labelDiameter = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('d/2', 5, 'red');
        labelDiameter.position.x = 5;
        labelDiameter.position.y = this.radiusInt / 2;
        if (this.radiusExt < 13)
            labelDiameter.position.y = this.radiusExt + 2;
        this.geoScene.scene.add(labelDiameter);
        // Chamando o render da cena
        this.geoScene.render();
        // Muda o ponto pra virgula
        var conta = (this.diametro * Math.PI);
        var newConta = conta.toString().replace(".", ",");
        this.equacao = "\\frac{" + newConta + "}{\\color{red}" + this.diametro + "}=\\pi";
        this.resultado = "\\pi = " + ((this.diametro * Math.PI) / this.diametro).toFixed(2);
    };
    CfComprimentoCircunferenciaNpComponent.prototype.checkInput = function () {
        if (this.diametro >= 2 && this.diametro <= 20) {
            this.radiusExt = this.diametro * 1.25 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputRadius = false;
            this.alterCircunferenceRadius();
        }
        else
            this.errorInputRadius = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfComprimentoCircunferenciaNpComponent.prototype, "geoScene", void 0);
    CfComprimentoCircunferenciaNpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-comprimento-circunferencia-np',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia-np/cf-comprimento-circunferencia-np.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfComprimentoCircunferenciaNpComponent);
    return CfComprimentoCircunferenciaNpComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a explicação de como chegar no pi ou ou calcular o comprimento de\r\n      uma circunferência</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <!-- Botão para inserir a medida do ângulo-->\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <div class=\" mt-4\">\r\n      <p class=\"text-center\">\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n      </p>\r\n      <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n        role=\"alert\" style=\"text-align: center;\">\r\n        O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"92\" [color]=\"'rgb(0,0,0)'\"></geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"92\" [color]=\"'rgb(255,255,255)'\">\r\n      </geo-circunferencemesh>\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>\r\n      Comprimento da circunferência:\r\n    </h4>\r\n    <p>\r\n      Podemos determinar a medida aproximada do comprimento da circunferência,\r\n      envolvendo-a com um cordão e, em seguida, medindo-o.\r\n    </p>\r\n    <br />\r\n    <p>\r\n      A relação entre a medida do Comprimento (<ng-katex equation=\"C\"></ng-katex>) e a medida do diâmetro (<ng-katex\r\n        equation=\"d\"></ng-katex>) da circunferência é:\r\n      <ng-katex equation=\"\\frac{C}{d}=\\pi\"></ng-katex>\r\n    </p>\r\n    <br />\r\n    <p>\r\n      Logo: <ng-katex equation=\"C = d \\cdot \\pi\"></ng-katex>\r\n    </p>\r\n    <br />\r\n    <p>\r\n      Sabendo que a medida do diâmetro é o dobro da medida do raio: <ng-katex equation=\"d = 2\\color{red}{r}\"></ng-katex>\r\n      .\r\n      Então: <ng-katex equation=\"C = 2 \\cdot \\color{red}{r} \\cdot \\pi\"></ng-katex>\r\n    </p>\r\n    <br />\r\n    <p>\r\n      <ng-katex equation=\"C = 2\\pi \\cdot \\color{red}{r}\"></ng-katex>\r\n    </p>\r\n\r\n    <hr />\r\n    <h5>Exemplo: </h5>\r\n    <p>\r\n      <ng-katex [equation]=\"equacao\"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"C = {{ 2 * radius }} \\ \\pi \\ u.c. \"></ng-katex>\r\n    </p>\r\n\r\n    <p>\r\n      Ou, utilizando a aproximação: <ng-katex equation=\"\\pi = \\color{blue}{3,14}\"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"C = {{ 2 * radius }} \\cdot \\color{blue}{3,14} \"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"C = {{ 2 * radius * 3.14 | number:'':'pt' }} \"></ng-katex>\r\n    </p>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\ngeo-btn {\n  margin-left: 5rem; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfComprimentoCircunferenciaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CfComprimentoCircunferenciaComponent = /** @class */ (function () {
    function CfComprimentoCircunferenciaComponent() {
        this.radius = 9;
        this.radiusExt = 30; // Raio do círculo exterior
        this.radiusInt = 29; // Raio do círculo interior
        // Botões
        this.buttons = [{
                title: "O número pi",
                route: "cf_numero_pi"
            },
            {
                title: "Comprimento da Circunferência",
                route: "cf_comprimento_circunferencia"
            },
        ];
        this.equacao = "C = 2 \\cdot \\pi \\cdot \\color{red}{" + this.radius + "}";
        this.resultado = "C = " + 2 * 3.14 * this.radius;
    }
    CfComprimentoCircunferenciaComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    CfComprimentoCircunferenciaComponent.prototype.makeElements = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x000000
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material));
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo));
        // Adicionando ponto central do círculo
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x000000
        }));
        centerPoint.position.z = 0.6;
        // Adicionando representação da medida do raio
        var radiusGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.5), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.radiusInt, 0.5));
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0xff0000,
            linewidth: 2
        }));
        line.renderOrder = 0;
        // Adicionando label do raio da circunferência
        var radiusLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r', 5, 'red');
        radiusLabel.position.x = 4;
        radiusLabel.position.y = this.radiusInt / 2;
        if (this.radiusExt < 9)
            radiusLabel.position.y = this.radiusExt + 2;
        this.geoScene.scene.add(line);
        this.geoScene.scene.add(centerPoint);
        this.geoScene.scene.add(radiusLabel);
        this.geoScene.render();
    };
    CfComprimentoCircunferenciaComponent.prototype.ngAfterViewInit = function () {
        this.makeElements();
    };
    CfComprimentoCircunferenciaComponent.prototype.alterCircunferenceRadius = function () {
        // Remove todos os elementos da cena
        this.geoScene.removeAll();
        // Gera os elementos da cena com os novos valores
        this.makeElements();
    };
    CfComprimentoCircunferenciaComponent.prototype.checkInput = function () {
        if (this.radius >= 1 && this.radius <= 10) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.equacao = "C = 2 \\cdot 3,14 \\cdot \\color{red}{" + this.radius + "}";
            this.resultado = "C = " + 2 * 3.14 * this.radius;
            this.errorInputRadius = false;
            this.alterCircunferenceRadius();
        }
        else
            this.errorInputRadius = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfComprimentoCircunferenciaComponent.prototype, "geoScene", void 0);
    CfComprimentoCircunferenciaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-comprimento-circunferencia',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-comprimento-circunferencia/cf-comprimento-circunferencia.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfComprimentoCircunferenciaComponent);
    return CfComprimentoCircunferenciaComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-definicao/cf-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n  <!-- Circunferência -->\r\n  <div class=\"row definition__group mt-4\">\r\n    <div class=\"col-12\">\r\n      <h3>Circunferência</h3>\r\n      <p class=\"p-justify\">\r\n        Circunferência é o conjunto de todos os pontos de um plano que estão a uma distância fixa de um ponto fixo\r\n        chamado\r\n        de centro.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <img src=\"../../../../../../assets/images/geometria/cincunferencia/circunferencia.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6 definition__group__description align-self-center mt-4\">\r\n      <p><span class=\"font-weight-bold\">O</span> - Centro da circunferência (ponto fixo)</p><br>\r\n      <p><span class=\"font-weight-bold\">P</span> - Um dos pontos que estão a uma distância fixa do centro da\r\n        circunferência</p><br>\r\n      <p>\r\n        <span class=\"definition__group__description--distance font-weight-bold\">OP</span> - Raio(de medida r) da\r\n        circunferência(de distância fixa).\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Diâmetro -->\r\n  <div class=\"row definition__group mt-4\">\r\n    <div class=\"col-12\">\r\n      <h3>Diâmetro</h3>\r\n      <p class=\"p-justify\">\r\n        Diâmetro é o segmento com extremidades em dois pontos de uma circunferência, passando sempre pelo centro.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <img src=\"../../../../../../assets/images/geometria/cincunferencia/diametro.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6 definition__group__description align-self-center mt-4\">\r\n      <p><span class=\"definition__group__description--distance font-weight-bold mr-2\">AC</span> e\r\n        <span class=\"definition__group__description--distance font-weight-bold ml-2 mr-2\">BD </span> são diâmetros.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Raio -->\r\n  <div class=\"row definition__group mt-4\">\r\n    <div class=\"col-12\">\r\n      <h3>Raio</h3>\r\n      <p class=\"p-justify\">\r\n        Raio é o segmento que une o centro a qualquer ponto da circunferência.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <img src=\"../../../../../../assets/images/geometria/cincunferencia/raio.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6 definition__group__description align-self-center  mt-4\">\r\n      <p>Em uma circunferência, podemos traçar infinitos raios. Todos serão congruentes</p>\r\n      <p>\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2\">OA</span> =\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">OB</span> =\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">OC</span> =\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">OD</span> =\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">OE</span> =\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">OF</span> =\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">...</span> =\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">r</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Corda -->\r\n  <div class=\"row definition__group mt-4\">\r\n    <div class=\"col-12\">\r\n      <h3>Corda</h3>\r\n      <p class=\"p-justify\">\r\n        Corda é o segmento com extremidades em dois pontos da circunferência.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <img src=\"../../../../../../assets/images/geometria/cincunferencia/corda.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6 definition__group__description align-self-center  mt-4\">\r\n      <p>\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2\">AB</span> ,\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">CF</span> e\r\n        <span class=\"definition__group__description--distance font-weight-bold mr-2 ml-2\">DE</span> são cordas.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Flecha -->\r\n  <div class=\"row definition__group mt-4\">\r\n    <div class=\"col-12\">\r\n      <h3>Flecha</h3>\r\n      <p class=\"p-justify\">\r\n        Flecha é o segmento de reta com extremidades no ponto médio de uma corda e no ponto médio do arco determinado\r\n        pela corda.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <img src=\"../../../../../../assets/images/geometria/cincunferencia/flecha.png\" alt=\"\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" />\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6 definition__group__description align-self-center  mt-4\">\r\n      \r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-definicao/cf-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.definition__group__img {\n  max-height: 30vh;\n  min-height: 30vh;\n  min-width: 10vw; }\n.definition__group__description {\n  /* \"Traçado\" que tem em cima de duas letras */ }\n.definition__group__description p {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n.definition__group__description--distance:before {\n    display: block;\n    content: '';\n    width: 18px;\n    height: 1px;\n    background: #000; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-definicao/cf-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfDefinicaoComponent; });
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

var CfDefinicaoComponent = /** @class */ (function () {
    function CfDefinicaoComponent() {
    }
    CfDefinicaoComponent.prototype.ngOnInit = function () {
    };
    CfDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cf-definicao',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-definicao/cf-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-definicao/cf-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfDefinicaoComponent);
    return CfDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-cc/cf-posicao-relativa-cc.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a posição de uma geometria em relação a uma circunferência</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <!-- Inserção de valores do usuário -->\r\n    <div class=\" mt-4\">\r\n      <p class=\"text-center\">\r\n        Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r1}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radiusOne\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n        da primeira circunferência\r\n        <br>\r\n        <br>\r\n        Entre com a medida do raio (<ng-katex equation=\"\\color{red}{r2}\"></ng-katex>):\r\n        <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radiusTwo\"\r\n          oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n        da segunda circunferência\r\n      </p>\r\n\r\n      <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n        role=\"alert\" style=\"text-align: center;\">\r\n        Os raios deve ser valores inteiros contidos entre <b>1</b> e <b>10</b>.\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\" [shorten]=\"true\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n    </geo-scene>\r\n\r\n    <!-- Observação para o usuário -->\r\n    <div class=\"alert alert-primary alert-dismissible obs\" role=\"alert\" style=\"text-align: center;\" id=\"obs\">\r\n      Você pode clicar e arrastar o centro das circunferências.\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>\r\n      Posição relativa entre duas circunferências\r\n    </h4>\r\n    <h5>\r\n      Exemplos:\r\n    </h5>\r\n    <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\"\r\n      (click)=\"loadExample($event, button.value)\">\r\n      {{button.title}}\r\n    </button>\r\n    <hr />\r\n    <h5>\r\n      Propriedades:\r\n    </h5>\r\n    <div *ngIf=\"relation == 0\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Circunferências Secantes</h5>\r\n        <p>Duas circunferências são secantes quando possuem dois pontos comuns.</p>\r\n        <p>Podemos deduzir se as circunferências A e B são secantes usando a seguinte fórmula:</p>\r\n        <p>\r\n          <ng-katex equation=\"|r1 - r2| < d < r1 + r2\"></ng-katex>\r\n        </p>\r\n        <p>Sabendo que, r1 é o raio da circunferência A, r2 é o raio da circunferência B e d é a distância entre as\r\n          circunferências. Logo: </p>\r\n        <p>\r\n          <ng-katex equation=\"|{{radiusOne}} - {{radiusTwo}}| < {{distance}} < {{radiusOne}} + {{radiusTwo}}\"></ng-katex>\r\n          <br />\r\n          <ng-katex equation=\"{{subRadius}} < {{distance}} < {{sumRadius}}\"></ng-katex>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 1\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Circunferências Tangentes Interiores</h5>\r\n        <p>\r\n          Duas circunferências são tangentes interiores quando têm apenas um ponto comum, uma é interna à outra, e a\r\n          distância entre os seus centros é igual à\r\n          diferença, em módulo, entre as medidas dos seus raios.\r\n        </p>\r\n        <p>Podemos deduzir se as circunferências A e B são secantes usando a seguinte fórmula:</p>\r\n        <p>\r\n          <ng-katex equation=\"d = |r1 - r2|\"></ng-katex>\r\n        </p>\r\n        <p>Sabendo que, r1 é o raio da circunferência A, r2 é o raio da circunferência B e d é a distância entre as\r\n          circunferências. Logo: </p>\r\n        <p>\r\n          <ng-katex equation=\"{{distance}} = |{{radiusOne}} - {{radiusTwo}}|\"></ng-katex>\r\n          <br />\r\n          <ng-katex equation=\"{{distance}} = {{subRadius}}\"></ng-katex>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 2\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Circunferências Tangentes Exteriores</h5>\r\n        <p>Duas circunferências são tangentes exteriores quando têm apenas um ponto comum, suas regiões internas não\r\n          têm pontos comuns, e a distância entre os\r\n          seus centros é igual à soma das medidas dos seus raios.</p>\r\n        <p>Podemos deduzir se as circunferências A e B são secantes usando a seguinte fórmula:</p>\r\n        <p>\r\n          <ng-katex equation=\"d = r1 + r2\"></ng-katex>\r\n        </p>\r\n        <p>Sabendo que, r1 é o raio da circunferência A, r2 é o raio da circunferência B e d é a distância entre as\r\n          circunferências. Logo: </p>\r\n        <p>\r\n          <ng-katex equation=\"{{distance}} = {{radiusOne}} + {{radiusTwo}}\"></ng-katex>\r\n          <br />\r\n          <ng-katex equation=\"{{distance}} = {{sumRadius}}\"></ng-katex>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 3\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Circunferências Internas</h5>\r\n        <p>\r\n          Duas circunferências são internas quando não tem ponto comum, uma é interna à outra, e a distância entre os\r\n          centros é maior ou igual a zero e menor que a\r\n          diferença, em módulo, entre as medidas dos raios.\r\n        </p>\r\n        <p>Podemos deduzir se as circunferências A e B são secantes usando a seguinte fórmula:</p>\r\n        <p>\r\n          <ng-katex equation=\"0 \\leq d < |r1 - r2|\"></ng-katex>\r\n        </p>\r\n        <p>Sabendo que, r1 é o raio da circunferência A, r2 é o raio da circunferência B e d é a distância entre as\r\n          circunferências. Logo: </p>\r\n        <p>\r\n          <ng-katex equation=\"0 \\leq {{distance}} < {{radiusOne}} - {{radiusTwo}}\"></ng-katex>\r\n          <br />\r\n          <ng-katex equation=\"0 \\leq {{distance}} < {{subRadius}}\"></ng-katex>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 4\">\r\n      <div class=\"alert alert-primary\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Circunferências Externas</h5>\r\n        <p>\r\n          Duas circunferências são consideradas externas quando não possuem pontos em comum. A condição para que isso\r\n          ocorra é que a distância\r\n          entre os centros das circunferências deve ser maior que a soma das medidas de seus raios.\r\n        </p>\r\n        <p></p>\r\n        <p>\r\n          <ng-katex equation=\"d > r1 + r2\"></ng-katex>\r\n        </p>\r\n        <p>Sabendo que, r1 é o raio da circunferência A, r2 é o raio da circunferência B e d é a distância entre as\r\n          circunferências. Logo: </p>\r\n        <p>\r\n          <ng-katex equation=\"{{distance}} > {{radiusOne}} + {{radiusTwo}}\"></ng-katex>\r\n          <br />\r\n          <ng-katex equation=\"{{distance}} > {{sumRadius}}\"></ng-katex>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-cc/cf-posicao-relativa-cc.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n.obs {\n  opacity: 60%; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-cc/cf-posicao-relativa-cc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfPosicaoRelativaCcComponent; });
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




/**
 * Enum para definir a relação entre as circunferÊncias
 */
var Relation;
(function (Relation) {
    Relation[Relation["SECANT"] = 0] = "SECANT";
    Relation[Relation["INTERNAL_TANGENTS"] = 1] = "INTERNAL_TANGENTS";
    Relation[Relation["EXTERNAL_TANGENTS"] = 2] = "EXTERNAL_TANGENTS";
    Relation[Relation["INTERNAL"] = 3] = "INTERNAL";
    Relation[Relation["EXTERNAL"] = 4] = "EXTERNAL";
})(Relation || (Relation = {}));
var CfPosicaoRelativaCcComponent = /** @class */ (function () {
    function CfPosicaoRelativaCcComponent() {
        this.dragging = false; // Variável para controle do drag
        this.currentIndex = null; // Geometria da cena a qual irá se mover
        // Raycaster da página, utilizado para o "clicar e arrastar"
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        // Distância entre as circunferencias
        this.distance = 60;
        this.radiusOne = 10;
        this.radiusTwo = 5;
        this.sumRadius = 45;
        this.subRadius = 15;
        // Variável que armazena a relação entre as circunferências
        this.relation = Relation.EXTERNAL;
        this.errorInputRadius = false;
        //
        this.intersectCount = 0;
        // Variável com os botões de exemplos de relações
        this.buttons_examples = [
            { title: 'Secantes', value: 0 },
            { title: 'Tangentes Ext.', value: 2 },
            { title: 'Tangentes Int.', value: 1 },
            { title: 'Externas', value: 4 },
            { title: 'Internas', value: 3 }
        ];
        // Botões para outros componentes
        this.buttons = [
            { title: "Ponto e Circunferência", route: "cf_posicao_relativa_pc" },
            { title: "Reta e Circunferência", route: "cf_posicao_relativa_rc" },
            { title: "Circunferência e Circunferência", route: "cf_posicao_relativa_cc" }
        ];
    }
    CfPosicaoRelativaCcComponent.prototype.ngDoCheck = function () {
        this.distance = Math.round(this.distance);
    };
    /**
     * Carrega o exemplo da relação para a página
     * @param event Evento do mouse click
     * @param relation Relação a ser exibida
     */
    CfPosicaoRelativaCcComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        this.radiusOne = 10;
        this.radiusTwo = 5;
        this.sumRadius = 15;
        this.subRadius = 5;
        this.reDraw();
        this.errorInputRadius = false;
        // Checagem do tipo da relação
        switch (this.relation) {
            case Relation.SECANT:
                this.loadToScene(-10, 0, 0, 0);
                break;
            case Relation.EXTERNAL_TANGENTS:
                this.loadToScene(-10, 5, 0, 0);
                break;
            case Relation.INTERNAL_TANGENTS:
                this.loadToScene(0, -5, 0, 0);
                break;
            case Relation.INTERNAL:
                this.loadToScene(0, -2.5, 0, -2.5);
                break;
            case Relation.EXTERNAL:
                this.loadToScene(-10, 10, 0, 0);
                break;
        }
    };
    CfPosicaoRelativaCcComponent.prototype.checkInput = function () {
        var inputRadiusOne = (this.radiusOne >= 1 && this.radiusOne <= 10);
        var inputRadiusTwo = (this.radiusTwo >= 1 && this.radiusTwo <= 10);
        if (inputRadiusOne && inputRadiusTwo) {
            this.sumRadius = this.radiusOne + this.radiusTwo;
            this.subRadius = Math.abs(this.radiusOne - this.radiusTwo);
            this.reDraw();
            this.errorInputRadius = false;
            if (this.radiusOne === 10 && this.radiusTwo === 10) {
                this.relation = Relation.EXTERNAL_TANGENTS;
                var tangentPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](0.25, 10), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
                tangentPoint.name = "tangentPoint";
                this.geoScene.scene.add(tangentPoint);
                this.geoScene.render();
            }
            else
                this.relation = Relation.EXTERNAL;
        }
        else {
            this.errorInputRadius = true;
        }
    };
    /**
     * Move as geometrias para as coordenadas fornecidas recalculando as propriedades
     * @param x0 coordenada X do centro da circunferencia A
     * @param x1 coordenada X do centro da circunferencia B
     * @param y0 coordenada Y do centro da circunferencia A
     * @param y1 coordenada Y do centro da circunferencia B
     */
    CfPosicaoRelativaCcComponent.prototype.loadToScene = function (x0, x1, y0, y1) {
        // Movendo geometrias relativas a circunferencia A
        this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x0, y0, 0.5)); // Centro da circunferencia A
        this.geoScene.scene.children[0].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x0, y0, 0.5)); // Circunferencia A
        var posLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x0 + (Math.cos(0) * 10), y0, 0.5); // Linha do raio 1 (A)
        this.geoScene.scene.children[1].position.copy(posLine);
        var posSprite = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x0 + 1.75, y0 + this.radiusTwo / 2, 0.5); // Sprite r1
        this.geoScene.scene.children[2].position.copy(posSprite);
        // Movendo geometrias relativas a circunferencia B
        this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x1, y1, 0.5)); // Centro da circunferencia B
        this.geoScene.scene.children[7].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x1, y1, 0.5)); // Circunferencia B
        posLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x1 - (Math.cos(0) * 10), y1, 0.5); // Linha do raio 2 (B)
        this.geoScene.scene.children[5].position.copy(posLine);
        posSprite = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x1 - 1.75, y1 + this.radiusTwo / 2, 0.5); // Sprite r2
        this.geoScene.scene.children[6].position.copy(posSprite);
        // Calculo da distância entre as circunferencias
        this.distance = Math.sqrt(Math.pow((x0 - x1), 2) + Math.pow((y0 - y1), 2));
        // Cria uma nova reta para representar a distância
        var distanceLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        distanceLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPointOne.position.x, this.centerPointOne.position.y, 0.6));
        distanceLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPointTwo.position.x, this.centerPointTwo.position.y, 0.6));
        var distanceLineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](distanceLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0x000000, linewidth: 2
        }));
        this.hasTangentPoint();
        // Remove a antiga linha da distância
        this.geoScene.scene.remove(this.geoScene.scene.children[8]);
        // Adiciona a nova linha da distância na cena
        this.geoScene.scene.add(distanceLineGeometry);
        // Renderiza novamente a cena
        this.geoScene.render();
    };
    /**
     * Captura o evento de mouse down na cena
     * @param event evento do mouse
     */
    CfPosicaoRelativaCcComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfPosicaoRelativaCcComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        console.log(this.insersects.length);
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    /**
     * Captura o evento de mouse move na cena
     * @param event evento do mouse
     */
    CfPosicaoRelativaCcComponent.prototype.mouseMove = function (event) {
        var _this = this;
        // Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
            this.insersects.forEach(function (el) {
                if (el.object.name == "circunference-one") {
                    el.object.position.copy(_this.mousePos);
                }
                else if (el.object.name == "circunference-two") {
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex.object.name == "circunference-one") {
                this.geoScene.scene.children[0].position.copy(this.mousePos);
                var posLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.mousePos.x + (Math.cos(0) * 10), this.mousePos.y, 0.4);
                this.geoScene.scene.children[1].position.copy(posLine);
                var posSprite = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.mousePos.x + 2.5, this.mousePos.y + this.radiusOne / 2, 0.4);
                if (this.radiusOne < 4)
                    posSprite.y = this.mousePos.y + this.radiusOne + 1;
                this.geoScene.scene.children[2].position.copy(posSprite);
            }
            else if (this.currentIndex.object.name == "circunference-two") {
                this.geoScene.scene.children[7].position.copy(this.mousePos);
                var posLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.mousePos.x - (Math.cos(0) * 10), this.mousePos.y, 0.4);
                this.geoScene.scene.children[5].position.copy(posLine);
                var posSprite = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.mousePos.x - 1.75, this.mousePos.y + this.radiusTwo / 2, 0.4);
                if (this.radiusTwo < 4)
                    posSprite.y = this.mousePos.y + this.radiusTwo + 1;
                this.geoScene.scene.children[6].position.copy(posSprite);
            }
            // Bloqueia um ponto de ficar em cima do outro
            if (this.insersects.length >= 5 && (this.centerPointOne.position.x == this.centerPointTwo.position.x)) {
                this.loadToScene(-10, 10, 0, 0);
                this.distance = Math.round(this.distance); //Arredonda o numero exibido da distancia interna
            }
            else
                this.drawFigures();
        }
    };
    CfPosicaoRelativaCcComponent.prototype.drawFigures = function () {
        // Calcula e cria uma nova linha de distância
        var distanceLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        distanceLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPointOne.position.x, this.centerPointOne.position.y, 0.6));
        distanceLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPointTwo.position.x, this.centerPointTwo.position.y, 0.6));
        var distanceLineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](distanceLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0x000000,
            linewidth: 2
        }));
        this.distance = Math.sqrt((Math.pow((this.centerPointOne.position.x - this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointOne.position.y - this.centerPointTwo.position.y), 2)));
        var distanceHigh = this.distance + 0.05;
        var distanceLow = this.distance - 0.05;
        // Verifica a relação entre as circunferências
        if ((Math.abs((this.radiusOne - this.radiusTwo)) < distanceLow && distanceHigh < this.radiusOne + this.radiusTwo)) {
            this.relation = Relation.SECANT;
        }
        else if ((this.radiusOne + this.radiusTwo) >= distanceLow && (this.radiusOne + this.radiusTwo) <= distanceHigh) {
            this.relation = Relation.EXTERNAL_TANGENTS;
        }
        else if (Math.abs(this.radiusOne - this.radiusTwo) >= distanceLow && Math.abs(this.radiusOne - this.radiusTwo) <= distanceHigh) {
            this.relation = Relation.INTERNAL_TANGENTS;
        }
        else if (distanceLow > (this.radiusOne + this.radiusTwo)) {
            this.relation = Relation.EXTERNAL;
        }
        else {
            this.relation = Relation.INTERNAL;
        }
        this.hasTangentPoint();
        this.subRadius = Math.abs(this.radiusOne - this.radiusTwo);
        this.sumRadius = this.radiusOne + this.radiusTwo;
        this.distance = Math.round(this.distance);
        if (this.relation === Relation.SECANT && this.distance === this.subRadius)
            this.distance += 1;
        if (this.relation === Relation.SECANT && this.distance === this.sumRadius)
            this.distance -= 1;
        else if (this.relation === Relation.EXTERNAL && this.distance === this.sumRadius)
            this.distance += 1;
        else if (this.relation === Relation.INTERNAL && this.distance === this.subRadius)
            this.distance -= 1;
        // Remove e adiciona a nova linha de distância
        this.geoScene.scene.remove(this.geoScene.scene.children[8]);
        this.geoScene.scene.add(distanceLineGeometry);
        // Renderiza todos os elementos novamente
        this.geoScene.render();
    };
    /**
     * Captura o indice do elemento clicado se e somente se um destes elementos for um centro de circunferencia
     */
    CfPosicaoRelativaCcComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        this.insersects.forEach(function (el) {
            if (el.object.name == "circunference-one" || el.object.name == "circunference-two") {
                _this.currentIndex = el;
                console.log(el);
                return;
            }
        });
    };
    /**
     * Cria um novo raycaster a partir do clique do mouse
     * @param event evento do mouse
     */
    CfPosicaoRelativaCcComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    CfPosicaoRelativaCcComponent.prototype.hasTangentPoint = function () {
        try {
            this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("tangentPoint"));
        }
        catch (_a) {
            console.log("not found");
        }
        ;
        if (this.relation === Relation.EXTERNAL_TANGENTS || this.relation === Relation.INTERNAL_TANGENTS) {
            var distancesRatio = void 0, centerPointOneX = void 0, centerPointOneY = void 0, centerPointTwoX = void 0, centerPointTwoY = void 0;
            if (this.radiusOne > this.radiusTwo) {
                distancesRatio = this.radiusOne / this.distance;
                centerPointOneX = this.centerPointOne.position.x;
                centerPointOneY = this.centerPointOne.position.y;
                centerPointTwoX = this.centerPointTwo.position.x;
                centerPointTwoY = this.centerPointTwo.position.y;
            }
            else {
                distancesRatio = this.radiusTwo / this.distance;
                centerPointOneX = this.centerPointTwo.position.x;
                centerPointOneY = this.centerPointTwo.position.y;
                centerPointTwoX = this.centerPointOne.position.x;
                centerPointTwoY = this.centerPointOne.position.y;
            }
            var tangentPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](0.25, 10), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
            tangentPoint.position.x = ((1 - distancesRatio) * centerPointOneX + distancesRatio * centerPointTwoX);
            tangentPoint.position.y = ((1 - distancesRatio) * centerPointOneY + distancesRatio * centerPointTwoY);
            tangentPoint.name = "tangentPoint";
            this.geoScene.scene.add(tangentPoint);
        }
    };
    CfPosicaoRelativaCcComponent.prototype.reDraw = function () {
        while (this.geoScene.scene.children.length) {
            this.geoScene.scene.remove(this.geoScene.scene.children[0]);
        }
        this.makeElements();
    };
    CfPosicaoRelativaCcComponent.prototype.makeElements = function () {
        // Adicionando a primeira circunferencia (maior)
        var segmentCount = 92, radius = this.radiusOne, geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), material = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000 });
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * Math.PI * 2;
            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        this.vertices = geometry.vertices;
        var circunference = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometry, material);
        circunference.position.x = -10;
        circunference.name = "circunferenceOne";
        ;
        // Label da linha interna da circunferência maior
        var labelRadius = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r1', 2, 'red');
        labelRadius.position.x = -8.5;
        labelRadius.position.y = this.radiusOne / 2;
        if (this.radiusOne < 4)
            labelRadius.position.y = this.radiusOne + 1;
        // Linha interna
        var geometryTwoCenter = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryTwoCenter.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-10, 0, 0.6));
        geometryTwoCenter.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-10, this.radiusOne, 0.6));
        var circunferenceOneRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryTwoCenter, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0x4683B4, linewidth: 2
        }));
        this.centerPointOne = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](0.25, 10), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        this.centerPointOne.position.x = -10;
        this.centerPointOne.position.z = 0.7;
        this.centerPointOne.name = "circunference-one";
        // Criando circunferencia B
        var radiusTwo = this.radiusTwo, geometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * Math.PI * 2;
            geometryTwo.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radiusTwo, Math.sin(theta) * radiusTwo, 0));
        }
        var circunferenceTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryTwo, material);
        circunferenceTwo.name = "circunferenceTwo";
        circunferenceTwo.position.x = 10;
        // Label da linha interna da circunferência menor
        var labelRadiusTwo = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r2', 2, 'red');
        labelRadiusTwo.position.x = 8.5;
        labelRadiusTwo.position.y = this.radiusTwo / 2;
        if (this.radiusTwo < 4)
            labelRadiusTwo.position.y = this.radiusTwo + 1;
        // Linha interna
        var radiusTwoLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusTwoLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](10, 0, 0.6));
        radiusTwoLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](10, this.radiusTwo, 0.6));
        var circunferenceTwoRadius = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusTwoLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0x4683B4, linewidth: 2
        }));
        this.centerPointTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](0.25, 10), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        this.centerPointTwo.position.x = 10;
        this.centerPointTwo.position.z = 0.7;
        this.centerPointTwo.name = "circunference-two";
        // Linha da distancia entre as duas circunferências
        var distanceLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        distanceLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPointOne.position.x, this.centerPointOne.position.y, 0.6));
        distanceLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPointTwo.position.x, this.centerPointTwo.position.y, 0.6));
        var distanceLineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](distanceLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0x000000, linewidth: 2
        }));
        distanceLineGeometry.name = "distLine";
        this.geoScene.scene.add(circunference, //0
        circunferenceOneRadius, //1
        labelRadius, //2
        this.centerPointOne, //3
        this.centerPointTwo, //4
        circunferenceTwoRadius, //5
        labelRadiusTwo, //6
        circunferenceTwo, //7
        distanceLineGeometry //8
        );
        this.geoScene.render();
    };
    CfPosicaoRelativaCcComponent.prototype.ngAfterViewInit = function () {
        this.makeElements();
        console.log(this.geoScene.scene);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfPosicaoRelativaCcComponent.prototype, "geoScene", void 0);
    CfPosicaoRelativaCcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cf-posicao-relativa-cc',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-cc/cf-posicao-relativa-cc.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-cc/cf-posicao-relativa-cc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfPosicaoRelativaCcComponent);
    return CfPosicaoRelativaCcComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-pc/cf-posicao-relativa-pc.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a posição de uma geometria em relação a uma circunferência</h5>\r\n      <geo-btn *ngFor=\"let button of buttons\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n    </div>\r\n\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\" oninput=\"this.value = Math.abs(this.value)\"\r\n            (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n           e da distância (<i><b> d </b></i>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"distancePointCenter\" oninput=\"this.value = Math.abs(this.value)\"\r\n            (ngModelChange)=\"checkInput()\" max=\"20\" min=\"0\" />\r\n        </p>\r\n  \r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n        <div [className]=\"errorInputDistance === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\" style=\"text-align: center;\">\r\n          A distância deve ser um valor contido entre <b>0</b> e <b>20</b>.\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Cena -->\r\n      <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [pointsLimit]=\"7\" [pointToDelete]=\"4\"\r\n       [hasPerspective]=\"false\" [hasPointLine]=\"true\" [sharedData]=\"data\" [hasPoint]=\"true\" [hasLabel]=\"true\" [shorten]=\"true\">\r\n        <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"92\" [color]=\"'rgb(0,0,0)'\"></geo-circunferencemesh>\r\n        <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"92\" [color]=\"'rgb(255,255,255)'\"></geo-circunferencemesh>\r\n      </geo-scene>\r\n    </div>\r\n\r\n    <!-- Propriedades -->\r\n    <div class=\"rightbar px-3 vh-100\">\r\n      <h4>\r\n        Posição relativa entre ponto e circunferência\r\n      </h4>\r\n      <h5>\r\n        Exemplos:\r\n      </h5>\r\n      <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\" (click)=\"loadExample($event, button.value)\">\r\n        {{button.title}}\r\n      </button>\r\n      <hr/>\r\n      <h5>\r\n        Propriedades:\r\n      </h5>\r\n      <div *ngIf=\"relation == 0\">\r\n          <div class=\"alert alert-primary\" role=\"alert\">\r\n              <h5 class=\"alert-heading\">Interno</h5>\r\n              <p class=\"text-justify\">A distância entre o centro da circunferência (O) e o ponto criado (A) é menor que a medida do raio\r\n                (OA < r), diremos que o ponto A é interno à circunferência.\r\n              </p>\r\n              <p>\r\n                Distância entre o ponto central da circunferência (O) e o ponto criado (A):<br>\r\n                <span class=\"distance font-weight-bold\">OA</span> = {{distancePointCenter}}\r\n              </p>\r\n              <p>\r\n                Raio da circunferência:<br>\r\n                <span class=\"font-weight-bold\">r</span> = {{radius}}\r\n              </p>\r\n          </div>\r\n      </div>\r\n      <div *ngIf=\"relation == 1\">\r\n          <div class=\"alert alert-primary\" role=\"alert\">\r\n            <h5 class=\"alert-heading\">Externo</h5>\r\n            <p class=\"text-justify\">A distância entre o centro da circunferência e o ponto criado é maior que a medida do raio\r\n              (OA > r), diremos que o ponto A é externo à circunferência.\r\n            </p>\r\n            <p>\r\n              Distância entre o ponto central da circunferência (O) e o ponto criado (A):<br>\r\n              <span class=\"distance font-weight-bold\">OA</span> = {{distancePointCenter}}\r\n            </p>\r\n            <p>\r\n              Raio da circunferência:<br>\r\n              <span class=\"font-weight-bold\">r</span> = {{radius}}\r\n            </p>\r\n          </div>\r\n      </div>\r\n      <div *ngIf=\"relation == 2\">\r\n        <div class=\"alert alert-primary\" role=\"alert\">\r\n          <h5 class=\"alert-heading\">Pertence</h5>\r\n          <p class=\"text-justify\">A distância entre o centro da circunferência e o ponto criado é igual a medida do raio\r\n            (OA = r), diremos que o ponto A pertence a circunferência.\r\n          </p>\r\n          <p>\r\n            Distância entre o ponto central da circunferência (O) e o ponto criado (A):<br>\r\n            <span class=\"distance font-weight-bold\">OA</span> = {{distancePointCenter}}\r\n          </p>\r\n          <p>\r\n            Raio da circunferência:<br>\r\n            <span class=\"font-weight-bold\">r</span> = {{radius}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-pc/cf-posicao-relativa-pc.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-pc/cf-posicao-relativa-pc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfPosicaoRelativaPcComponent; });
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




var Relation;
(function (Relation) {
    Relation[Relation["INSIDE"] = 0] = "INSIDE";
    Relation[Relation["OUTSIDE"] = 1] = "OUTSIDE";
    Relation[Relation["ON"] = 2] = "ON";
})(Relation || (Relation = {}));
var CfPosicaoRelativaPcComponent = /** @class */ (function () {
    function CfPosicaoRelativaPcComponent() {
        //Verificacao e variaveis dos inputs
        this.errorInputRadius = false;
        this.errorInputDistance = false;
        this.radiusExt = 10;
        this.radiusInt = 9.65;
        // variaveis para correcao de bugs visuais
        this.sceneUpdate = 0;
        this.screenUpdate = 0;
        //Botões
        this.buttons = [
            { title: "Ponto e Circunferência", route: "cf_posicao_relativa_pc" },
            { title: "Reta e Circunferência", route: "cf_posicao_relativa_rc" },
            { title: "Circunferência e Circunferência", route: "cf_posicao_relativa_cc" }
        ];
        // Variável com os botões de exemplos de relações
        this.buttons_examples = [
            { title: 'Interno', value: 0 },
            { title: 'Externo', value: 1 },
            { title: 'Pertence', value: 2 }
        ];
        this.data = {
            intersects: []
        };
    }
    CfPosicaoRelativaPcComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        // Checagem do tipo da relação
        if (this.relation == Relation.INSIDE) {
            this.drawDefaultPoints('#one');
        }
        else if (this.relation == Relation.OUTSIDE) {
            this.drawDefaultPoints('#two');
        }
        else if (this.relation == Relation.ON) {
            this.drawDefaultPoints('#three');
        }
    };
    CfPosicaoRelativaPcComponent.prototype.ngDoCheck = function () {
        if (!this.geoScene.fromInput && this.screenUpdate > 0) {
            this.distancePointCenter = this.geoScene.lineLenght - 0.5;
            if (this.distancePointCenter > 20)
                this.distancePointCenter = 20;
            this.checkClick();
        }
        if (this.distancePointCenter < 1)
            this.distancePointCenter = 0;
    };
    CfPosicaoRelativaPcComponent.prototype.ngOnInit = function () {
        if (this.screenUpdate < 1) {
            this.radius = 10;
            this.makeElements();
            this.geoScene.fromRightbar = true;
            this.screenUpdate++;
        }
    };
    /**
     * @see this.cards
    */
    CfPosicaoRelativaPcComponent.prototype.checkClick = function () {
        console.log(this.data.intersects.length);
        if (this.data.intersects.length == 2 || (this.data.intersects.length == 3 && (this.distancePointCenter >= this.radius && this.distancePointCenter <= this.radius + 1))) {
            //pertence ou seja id = three
            this.distancePointCenter = this.radius;
            this.relation = Relation.ON;
        }
        else if (this.data.intersects.length == 3 || this.data.intersects.length == 4) {
            //interno ou seja id = one
            this.distancePointCenter = Math.round(this.distancePointCenter);
            if (this.distancePointCenter == this.radius)
                this.distancePointCenter -= 1;
            this.relation = Relation.INSIDE;
        }
        else if (this.data.intersects.length == 1) {
            //externo ou seja id = two
            this.distancePointCenter = Math.round(this.distancePointCenter);
            if (this.distancePointCenter == this.radius)
                this.distancePointCenter += 1;
            this.relation = Relation.OUTSIDE;
        }
    };
    CfPosicaoRelativaPcComponent.prototype.checkClickInput = function () {
        if (this.distancePointCenter > this.radius) {
            //externo ou seja id = two
            this.relation = Relation.OUTSIDE;
        }
        else if (this.distancePointCenter == this.radius) {
            //pertence ou seja id = three
            this.relation = Relation.ON;
        }
        else {
            //interno ou seja id = one
            this.relation = Relation.INSIDE;
        }
    };
    CfPosicaoRelativaPcComponent.prototype.drawDefaultPoints = function (cardID) {
        if (cardID == "#one") {
            //interno
            this.distancePointCenter = 5;
            this.radius = 10;
        }
        else if (cardID == "#two") {
            //externo
            this.distancePointCenter = 15;
            this.radius = 10;
        }
        else if (cardID == "#three") {
            //Pertence, card id = 3
            this.distancePointCenter = 10;
            this.radius = 10;
        }
        this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("line"));
        this.invisibleElements();
        this.checkInput();
    };
    CfPosicaoRelativaPcComponent.prototype.addPonto = function (pos) {
        //removendo a label e ponto
        this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("circle"), this.geoScene.scene.getObjectByName("label"));
        var pointGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        pointGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.5), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](pos.x, 0, 0.5));
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](pointGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0x0000ff,
            linewidth: 2
        }));
        line.name = "line";
        // Adicionando label do ponto
        var pointLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 2, 'blue');
        pointLabel.position.y = 1.5;
        pointLabel.position.x = pos.x;
        pointLabel.name = "label";
        this.geoScene.scene.add(line);
        this.geoScene.scene.add(pointLabel);
        this.geoScene.addPoint(pos);
        this.geoScene.fromInput = true;
        this.geoScene.fromRightbar = true;
        this.geoScene.render();
        if (this.sceneUpdate === 0) {
            this.sceneUpdate++;
            this.reDraw();
        }
        else {
            this.sceneUpdate = 0;
            this.checkClickInput();
        }
    };
    CfPosicaoRelativaPcComponent.prototype.makeElements = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x000000
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt + 0.5, 92);
        var circleOne = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        if (this.screenUpdate >= 1) {
            this.geoScene.scene.add(circleOne);
            this.geoScene.defaultObjects[0] = circleOne;
        }
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt + 0.5, 92);
        var circleTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        if (this.screenUpdate >= 1) {
            this.geoScene.scene.add(circleTwo);
            this.geoScene.defaultObjects[1] = circleTwo;
        }
        // Adicionando ponto central do círculo
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](0.25, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x000000
        }));
        centerPoint.position.z = 0.6;
        // Adicionando representação da medida do raio
        var radiusGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.5), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.radiusInt + 0.5, 0, 0.5));
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0xff0000,
            linewidth: 2
        }));
        line.name = "line";
        // Adicionando label do raio da circunferência
        var radiusLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r', 2, 'red');
        radiusLabel.position.y = 1.75;
        radiusLabel.position.x = this.radiusInt / 2;
        if (this.radius < 3) {
            radiusLabel.position.y = 0;
            radiusLabel.position.x = this.radiusExt + 1;
        }
        if (this.screenUpdate >= 1) {
            this.geoScene.scene.add(line);
            this.geoScene.scene.add(centerPoint);
            this.geoScene.scene.add(radiusLabel);
            this.geoScene.defaultObjects[2] = line;
            this.geoScene.defaultObjects[3] = centerPoint;
            this.geoScene.defaultObjects[4] = radiusLabel;
        }
        if (!this.geoScene.defaultObjects.length) {
            this.geoScene.defaultObjects.push(circleOne);
            this.geoScene.defaultObjects.push(circleTwo);
            this.geoScene.defaultObjects.push(centerPoint);
            this.geoScene.defaultObjects.push(line);
            this.geoScene.defaultObjects.push(radiusLabel);
        }
    };
    CfPosicaoRelativaPcComponent.prototype.reDraw = function () {
        var _this = this;
        // Remove todos os elementos da cena
        this.geoScene.scene.children.forEach(function (element) {
            _this.geoScene.scene.remove(element);
        });
        this.makeElements();
        var pos = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.distancePointCenter - 0.25, 0, 0.5);
        this.addPonto(pos);
    };
    CfPosicaoRelativaPcComponent.prototype.invisibleElements = function () {
        // Remove a visibilidade todos os elementos da cena
        this.geoScene.scene.children.forEach(function (element) {
            element.visible = false;
        });
    };
    CfPosicaoRelativaPcComponent.prototype.checkInput = function () {
        var checkRadius = (this.radius >= 1 && this.radius <= 10);
        var checkDistance = (this.distancePointCenter > -1 && this.distancePointCenter < 81);
        if (checkRadius && checkDistance) {
            this.radiusExt = this.radius;
            this.radiusInt = this.radius - 0.35;
            this.errorInputDistance = false;
            this.errorInputRadius = false;
            this.reDraw();
        }
        else {
            if (!checkRadius)
                this.errorInputRadius = true;
            else
                this.errorInputRadius = false;
            if (!checkDistance)
                this.errorInputDistance = true;
            else
                this.errorInputDistance = false;
            this.invisibleElements();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfPosicaoRelativaPcComponent.prototype, "geoScene", void 0);
    CfPosicaoRelativaPcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cf-posicao-relativa-pc',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-pc/cf-posicao-relativa-pc.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-pc/cf-posicao-relativa-pc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfPosicaoRelativaPcComponent);
    return CfPosicaoRelativaPcComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-rc/cf-posicao-relativa-rc.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n    <!-- Botões de navegação -->\r\n    <div class=\"btn-container mt-2 row\">\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a posição de uma geometria em relação a uma circunferência</h5>\r\n      <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n    </div>\r\n\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <!-- Cena -->\r\n      <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\" [pointsLimit]=\"10\" [pointToDelete]=\"9\" [hasLabel]=\"true\" [hasPoint]=\"true\" [hasLine]=\"true\">\r\n        <geo-circunferencemesh [radius]=\"30\" [segmentCount]=\"45\" [color]=\"'rgb(0,0,0)'\"></geo-circunferencemesh>\r\n        <geo-circunferencemesh [radius]=\"29\" [segmentCount]=\"45\" [color]=\"'rgb(255,255,255)'\"></geo-circunferencemesh>\r\n        <geo-circunferencemesh [radius]=\"1\" [segmentCount]=\"30\" [color]=\"'rgb(0,0,0)'\"></geo-circunferencemesh>\r\n      </geo-scene>\r\n      <div class=\"mt-1 alert alert-danger elementToFadeInAndOut\" role=\"alert\" style=\"text-align: center;\" id=\"err\">\r\n        Não foi possível verificar a posição do mouse, tente novamente.\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Propriedades -->\r\n    <div class=\"rightbar px-3 vh-100\">\r\n      <h4>\r\n        Posição relativa entre reta e circunferência\r\n      </h4>\r\n      <h5>\r\n        Exemplos:\r\n      </h5>\r\n      <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\" (click)=\"loadExample($event, button.value)\">\r\n        {{button.title}}\r\n      </button>\r\n      <hr/>\r\n      <h5>\r\n        Propriedades:\r\n      </h5>\r\n      <div *ngIf=\"relation == 0\">\r\n          <div class=\"alert alert-primary\" role=\"alert\">\r\n              <h5 class=\"alert-heading\">Reta Secante</h5>\r\n              <p>Uma reta é secante a uma circunferência quando tem dois pontos comuns com ela.</p>\r\n              <p>A palavra secante vem de seccionar, que significa \"cortar\".</p>\r\n              <p>\r\n                Pontos em comum: <span class=\"font-weight-bold\">{{ p1 }}</span> e <span class=\"font-weight-bold\">{{ p2 }}</span>\r\n              </p>\r\n              <p>\r\n                Distância do centro à reta secante:<br>\r\n                <span class=\"distance font-weight-bold\">d</span> = {{ distanceCenter | number:'1.0-3':'pt' }}\r\n              </p>\r\n              <p>\r\n                Raio:<br>\r\n                <span class=\"font-weight-bold\">r</span> = {{ radius }}\r\n              </p>\r\n              <h6 class=\"alert-heading\">Exemplo</h6>\r\n              <p>A reta <span class=\"emphasize\">s</span> é secante à circunferência C.</p>\r\n              <p class=\"text-center\"><img class=\"img-fluid\" src=\"../../../../../../assets/images/geometria/cincunferencia/cf-posicao-relativa/reta-secante.png\"></p>\r\n              <h5 class=\"alert-heading text-center\">d < r</h5>\r\n              <h5 class=\"alert-heading text-center\">s ∩ C={{ '{' }}A, B{{ '}' }}</h5>\r\n          </div>\r\n      </div>\r\n      <div *ngIf=\"relation == 1\">\r\n          <div class=\"alert alert-primary\" role=\"alert\">\r\n            <h5 class=\"alert-heading\">Reta Tangente</h5>\r\n            \r\n            <p>Uma reta é tangente a uma circunferência quando tem apenas um ponto em comum com ela. </p>\r\n            <p>A palavra tangente vem de tanger, que significa \"tocar\".</p>\r\n            <p>\r\n              Distância do centro à reta tangente:<br>\r\n              <span class=\"distance font-weight-bold\">d</span> = {{ distanceCenter | number:'1.0-3':'pt' }}\r\n            </p>\r\n            <p>\r\n              Raio:<br>\r\n              <span class=\"font-weight-bold\">r</span> = {{ radius }}\r\n            </p>\r\n            <h6 class=\"alert-heading\">Exemplo</h6>\r\n            <p>A reta <span class=\"emphasize\">t</span> é tangente à circunferência C, e A é denominado <span class=\"font-weight-bold\">ponto de tangência</span> (ou ponto de contato).</p>\r\n            <p class=\"text-center\"><img class=\"img-fluid\" src=\"../../../../../../assets/images/geometria/cincunferencia/cf-posicao-relativa/reta-tangente.png\"></p>\r\n            <h5 class=\"alert-heading text-center\">d = r</h5>\r\n            <h5 class=\"alert-heading text-center\">t ∩ C={{ '{' }}A{{ '}' }}</h5>\r\n            <p>OBS: Observe que a distância do centro (O) à reta (<span class=\"emphasize\">t</span>) é igual a medida do raio. Assim d = r.</p>\r\n          </div>\r\n      </div>\r\n      <div *ngIf=\"relation == 2\">\r\n        <div class=\"alert alert-primary\" role=\"alert\">\r\n          <h5 class=\"alert-heading\">Reta Externa</h5>\r\n          <p>Uma reta é externa a uma circunferência quando não tem nenhum ponto em comum com ela.\r\n          </p>\r\n          <p>\r\n            Distância do centro à reta externa:<br>\r\n            <span class=\"distance font-weight-bold\">d</span> = {{ distanceCenter | number:'1.0-3':'pt' }}\r\n            </p>\r\n            <p>\r\n              Raio:<br>\r\n              <span class=\"font-weight-bold\">r</span> = {{ radius }}\r\n            </p>\r\n          <p class=\"font-weight-bold\">Exemplo</p>\r\n          <p>A reta <span class=\"emphasize\">t</span> é externa à circunferência C.</p>\r\n          <p class=\"text-center\"><img class=\"img-fluid\" src=\"../../../../../../assets/images/geometria/cincunferencia/cf-posicao-relativa/reta-externa.png\"></p>\r\n          <h5 class=\"alert-heading text-center\">d > r</h5>\r\n          <p>OBS: Observe que a distância de uma reta externa ao centro de uma circunferência é maior que seu raio.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </geo-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-rc/cf-posicao-relativa-rc.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #5ca6e3 !important; }\n.card .card-header {\n    border-color: #5ca6e3 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #5ca6e3 solid; }\n.card .card-header:hover {\n    border-color: #5ca6e3 !important;\n    background-color: #5ca6e3; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #5ca6e3 solid; }\n.card .btn {\n    color: #5ca6e3;\n    text-decoration: none; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #5ca6e3;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #5ca6e3;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.emphasize {\n  color: red;\n  font-style: italic; }\n.elementToFadeInAndOut {\n  opacity: 0; }\n@-webkit-keyframes fade {\n  0%, 100% {\n    opacity: 0; }\n  20%, 80% {\n    opacity: 1; } }\n@keyframes fade {\n  0%, 100% {\n    opacity: 0; }\n  20%, 80% {\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-rc/cf-posicao-relativa-rc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfPosicaoRelativaRcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Enum para definir a relação entre as circunferÊncias
 */
var Relation;
(function (Relation) {
    Relation[Relation["SECANT"] = 0] = "SECANT";
    Relation[Relation["TANGENT"] = 1] = "TANGENT";
    Relation[Relation["EXTERNAL"] = 2] = "EXTERNAL";
})(Relation || (Relation = {}));
var CfPosicaoRelativaRcComponent = /** @class */ (function () {
    function CfPosicaoRelativaRcComponent() {
        // Variáveis das retas
        this.distanceCenter = 0;
        this.radius = 10;
        this.p1 = 'A';
        this.p2 = 'B';
        this.autoBots = [];
        this.labelPos = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"];
        // variaveis para correcao de bugs visuais
        this.fromRightbar = false;
        this.screenUpdate = 0;
        //Botões
        this.buttons = [
            { title: "Ponto e Circunferência", route: "cf_posicao_relativa_pc" },
            { title: "Reta e Circunferência", route: "cf_posicao_relativa_rc" },
            { title: "Circunferência e Circunferência", route: "cf_posicao_relativa_cc" }
        ];
        // Variável com os botões de exemplos de relações
        this.buttons_examples = [
            { title: 'Secante', value: 0 },
            { title: 'Tangente', value: 1 },
            { title: 'Externa', value: 2 }
        ];
        this.data = {
            intersects: []
        };
    }
    CfPosicaoRelativaRcComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        // Checagem do tipo da relação
        if (this.relation == Relation.SECANT) {
            this.drawDefaultPoints('#one');
        }
        else if (this.relation == Relation.TANGENT) {
            this.drawDefaultPoints('#two');
        }
        else if (this.relation == Relation.EXTERNAL) {
            this.drawDefaultPoints('#three');
        }
    };
    CfPosicaoRelativaRcComponent.prototype.ngDoCheck = function () {
        this.distanceCenter = Math.round(this.geoScene.lineLenght);
        if (this.fromRightbar && this.geoScene.returnFromGeoScene) {
            this.m = null;
            this.b = null;
            this.fromRightbar = false;
            this.geoScene.returnFromGeoScene = false;
            this.verifyRelativePosition(this.m, this.b);
        }
        else if (this.screenUpdate > 1 && this.geoScene.returnFromGeoScene) {
            this.m = this.geoScene.equation[0];
            this.b = this.geoScene.equation[1];
            this.verifyRelativePosition(this.m, this.b);
            this.geoScene.returnFromGeoScene = false;
        }
        else if (!this.fromRightbar) {
            this.m = this.geoScene.equation[0];
            this.b = this.geoScene.equation[1];
            this.verifyRelativePosition(this.m, this.b);
        }
        this.distanceCenter = (this.distanceCenter + 10) / 4;
    };
    CfPosicaoRelativaRcComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_3__angular_common_locales_pt__["a" /* default */]);
        if (this.screenUpdate < 1) {
            this.defaultElements();
            this.screenUpdate++;
        }
    };
    /**Equação geral da circunferencia x²+y²=r² (30²=900)
     * a circunferência setada na cena tem raio 30
     *Substituindo y da circunferência por y da eq. geral da reta
     *
     * @link https://www.youtube.com/watch?v=4GANOVj7cYU
     */
    CfPosicaoRelativaRcComponent.prototype.verifyRelativePosition = function (m, b1) {
        /**a = x²+mx²
         * b = 2mxb
         * c = b²-900
        */
        var a = 1 + Math.pow(m, 2);
        var b = 2 * m * b1;
        var c = (Math.pow(b1, 2)) - 900;
        var delta = (Math.pow(b, 2)) - (4 * a * c);
        if (this.distanceCenter === 30)
            delta = 0;
        if (delta > 0) {
            //secante
            this.relation = Relation.SECANT;
            this.p1 = this.geoScene.points[0];
            this.p2 = this.geoScene.points[1];
            this.geoScene.points = [];
        }
        else if (delta == 0) {
            //tangente
            this.relation = Relation.TANGENT;
        }
        else if (delta < 0) {
            //externa
            this.relation = Relation.EXTERNAL;
        }
        else {
            this.relation = null;
        }
        this.fromRightbar = false;
    };
    CfPosicaoRelativaRcComponent.prototype.defaultProperties = function (cardID) {
        this.geoScene.fromInput = true;
        if (cardID == "#one") {
            //secante
            this.geoScene.addLabel('r', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](15, 3), 'blue'); // label da linha tracejada do raio
            this.geoScene.addLabel('d', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](-4, 0), 'blue'); // label da linha solida da distancia
            this.geoScene.addLabel('s', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](-75, -20), 'red'); // label da linha solida s
            this.geoScene.addLabel('O', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](3, -3), 'black'); // label do ponto do centro
            this.geoScene.addLabel('C(O,r)', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](24, -27), 'black'); // label da circunferencia
            this.geoScene.checkLabel(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](28, 16)); // label ponto A
            this.geoScene.checkLabel(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](-33, -6)); // label ponto B
            this.geoScene.addPoint(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](25.5, 14.5, 0.5)); // ponto A
            this.geoScene.addPoint(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-28.5, -5.9, 0.5)); // ponto B
            this.geoScene.drawPointLine(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](25, 14), true, false); // linha tracejada do raio
            this.geoScene.drawPointLine(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](-2, 4), false, false); // linha solida da distancia
            this.autoBots[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](190, 75.8531, 0); // ponto 0 da linha s
            this.autoBots[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-210, -73.6392, 0); // ponto 1 da linha s
            this.p1 = 'A';
            this.p2 = 'B';
        }
        else if (cardID == "#two") {
            //tangente
            this.geoScene.addLabel('t', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](-65, 33), 'red'); // label da linha solida t
            this.geoScene.addLabel('r', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](3, 15), 'blue'); // label da linha tracejada do raio
            this.geoScene.addLabel('d', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](-3, 15), 'blue'); // label da linha solida da distancia
            this.geoScene.addLabel('O', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](3, -3), 'black'); // label do ponto do centro
            this.geoScene.addLabel('C(O,r)', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](24, -27), 'black'); // label da circunferencia
            this.geoScene.checkLabel(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](0, 31)); // label ponto A
            this.geoScene.addPoint(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 29.5, 0.5)); // ponto A
            this.geoScene.drawPointLine(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](0, 30), false, false); // linha solida da distancia e raio
            this.autoBots[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](200, 29.1185, 0); // ponto 0 da linha t
            this.autoBots[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-200, 30.8814, 0); // ponto 1 da linha t
        }
        else {
            //externo
            this.geoScene.addLabel('r', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](15, 3), 'blue'); // label da linha tracejada do raio
            this.geoScene.addLabel('t', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](80, -20), 'red'); // label da linha solida t
            this.geoScene.addLabel('O', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](3, -3), 'black'); // label do ponto do centro
            this.geoScene.drawPointLine(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](25, 14), true, false); // linha tracejada do raio
            this.geoScene.addLabel('C(O,r)', new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](24, -27), 'black'); // label da circunferencia
            this.autoBots[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](200, -136.0041, 0);
            this.autoBots[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-200, 231.4101, 0);
            this.geoScene.lineLenght = 35;
        }
        return this.autoBots;
    };
    CfPosicaoRelativaRcComponent.prototype.drawDefaultPoints = function (cardID) {
        this.geoScene.scene.remove(this.geoScene.scene.getObjectByName("circ-rc_deletable"));
        this.reDraw();
        var pos = this.defaultProperties(cardID);
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0xff0000
        });
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometry.vertices.push(pos[0], pos[1]);
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometry, material);
        line.name = "circ-rc_deletable";
        this.geoScene.scene.add(line);
        this.geoScene.render();
        this.geoScene.fromRightbar = true;
        this.fromRightbar = true;
    };
    CfPosicaoRelativaRcComponent.prototype.defaultElements = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x000000
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](30, 360);
        var circleOne = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        circleOne.name = "circleOne";
        if (this.screenUpdate >= 1)
            this.geoScene.scene.add(circleOne);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](29, 92);
        var circleTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        circleTwo.name = "circleTwo";
        if (this.screenUpdate >= 1)
            this.geoScene.scene.add(circleTwo);
        // Adicionando ponto central do círculo
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x000000
        }));
        if (!this.geoScene.defaultObjects.length) {
            this.geoScene.defaultObjects.push(circleOne);
            this.geoScene.defaultObjects.push(circleTwo);
            this.geoScene.defaultObjects.push(centerPoint);
        }
        centerPoint.position.z = 0.6;
        if (this.screenUpdate >= 1)
            this.geoScene.scene.add(centerPoint);
    };
    CfPosicaoRelativaRcComponent.prototype.reDraw = function () {
        // Remove todos os elementos da cena
        while (this.geoScene.scene.children.length) {
            this.geoScene.scene.remove(this.geoScene.scene.children[0]);
        }
        this.defaultElements();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfPosicaoRelativaRcComponent.prototype, "geoScene", void 0);
    CfPosicaoRelativaRcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cf-posicao-relativa-rc',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-rc/cf-posicao-relativa-rc.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa-rc/cf-posicao-relativa-rc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfPosicaoRelativaRcComponent);
    return CfPosicaoRelativaRcComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa/cf-posicao-relativa.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 rowMod\">\r\n      <div class=\"container-sm border centerMenu\">\r\n        <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a posição de uma geometria em relação a uma circunferência\r\n        </h5>\r\n        <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n      </div>\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa/cf-posicao-relativa.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n.centerMenu {\n  text-align: center;\n  margin-top: 10rem;\n  margin-left: 17.5rem; }\n.rowMod {\n  display: -webkit-box;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-posicao-relativa/cf-posicao-relativa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfPosicaoRelativaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CfPosicaoRelativaComponent = /** @class */ (function () {
    function CfPosicaoRelativaComponent() {
        //Botões
        this.buttons = [
            { title: "Ponto e Circunferência", route: "cf_posicao_relativa_pc" },
            { title: "Reta e Circunferência", route: "cf_posicao_relativa_rc" },
            { title: "Circunferência e Circunferência", route: "cf_posicao_relativa_cc" }
        ];
        //Accordion
        this.cards = [
            { id: "one", title: "a", content: "b" },
            { id: "two", title: "a", content: "b" },
            { id: "three", title: "a", content: "b" },
            { id: "four", title: "a", content: "b" }
        ];
        this.data = {
            intersects: []
        };
    }
    CfPosicaoRelativaComponent.prototype.ngDoCheck = function () {
        if (this.data.intersects.length == 1) {
            alert('Dentro');
        }
    };
    CfPosicaoRelativaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfPosicaoRelativaComponent.prototype, "geoScene", void 0);
    CfPosicaoRelativaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cf-posicao-relativa',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa/cf-posicao-relativa.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-posicao-relativa/cf-posicao-relativa.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfPosicaoRelativaComponent);
    return CfPosicaoRelativaComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha uma das relações</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n        </p>\r\n\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"30\" [segmentCount]=\"92\" [color]=\"'rgb(70,131,180)'\"></geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"29\" [segmentCount]=\"92\" [color]=\"'rgb(255,255,255)'\"></geo-circunferencemesh>\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <div *ngIf=\"relation == 0\">\r\n      <h3>As cordas não se interceptam.</h3>\r\n    </div>\r\n\r\n    <div *ngIf=\"relation == 1\">\r\n      <h4>Relação entre Cordas</h4>\r\n      <h5>Propriedades:</h5>\r\n\r\n      <p>\r\n        Consideremos duas cordas <ng-katex equation=\"\\overline{AD}\"></ng-katex> e <ng-katex equation=\"\\overline{BC}\">\r\n        </ng-katex>, que se interceptam em certo ponto P.\r\n      </p>\r\n      <p>\r\n        Considerando os triângulos formados APD e BPC, temos:\r\n      </p>\r\n      <ul>\r\n        <li>\r\n          <ng-katex equation=\"A\\widehat{P}D = B\\widehat{P}C\"></ng-katex> (são ângulos opostos pelo vértice)\r\n        </li>\r\n        <li>\r\n          <ng-katex equation=\"\\widehat{A} = \\widehat{D}\"></ng-katex> (são ângulos inscritos no mesmo arco)\r\n        </li>\r\n      </ul>\r\n\r\n      <p>\r\n        Todo par de triângulos que tem dois ângulos internos congruentes são semelhantes, temos:\r\n      </p>\r\n      <ng-katex equation=\"\\vartriangle APD \\approx \\ \\vartriangle BPC\r\n    \"></ng-katex>\r\n\r\n      <p>\r\n        E, portanto:\r\n      </p>\r\n      <ng-katex equation=\"\\frac{\\overline{PA}}{\\overline{PB}}\"></ng-katex> = <ng-katex\r\n        equation=\"\\frac{\\overline{PD}}{\\overline{PC}} \\to \\overline{PA} \\cdot \\overline{PC} = \\overline{PB} \\cdot \\overline{PD}\">\r\n      </ng-katex>\r\n\r\n      <p>\r\n        Exemplo:\r\n        Considerando a circunferência ao lado temos que:\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PA} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePA | number: '1.0-3':'pt' }} \\ u.m.\"></ng-katex>\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PB} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePB | number: '1.0-3':'pt' }} \\ u.m.\"></ng-katex>\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PC} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePC | number: '1.0-3':'pt' }} \\ u.m.\"></ng-katex>\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PD} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePD | number: '1.0-3':'pt' }} \\ u.m.\"></ng-katex>\r\n      </p>\r\n\r\n      <p>\r\n        Então:\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PA} \\cdot \\overline{PC} = \\overline{PB} \\cdot \\overline{PD}\"></ng-katex>\r\n      </p>\r\n\r\n      <p>\r\n        <ng-katex equation=\" {{ distancePA | number: '1.0-3':'pt' }} \"></ng-katex> <ng-katex equation=\" \\cdot \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePC | number: '1.0-3':'pt' }} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePB | number: '1.0-3':'pt' }} \"></ng-katex> <ng-katex equation=\" \\cdot \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePD | number: '1.0-3':'pt' }} \"></ng-katex>\r\n      </p>\r\n\r\n      <!-- <ng-katex equation=\" {{ result1 }} = {{ result2 }} \"></ng-katex> -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfRelacoesMetricasRcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Relation;
(function (Relation) {
    Relation[Relation["TRUE"] = 1] = "TRUE";
    Relation[Relation["FALSE"] = 0] = "FALSE";
})(Relation || (Relation = {}));
var CfRelacoesMetricasRcComponent = /** @class */ (function () {
    function CfRelacoesMetricasRcComponent() {
        this.angle = 57;
        this.relation = Relation.TRUE;
        this.distancePA = 13;
        this.distancePB = 4;
        this.distancePC = 4;
        this.distancePD = 13;
        this.result1 = 52;
        this.result2 = 52;
        this.errorInputRadius = false;
        this.showAngle = this.angle;
        this.oldAngle = this.angle;
        this.visible = true;
        this.radius = 9;
        this.radiusExt = 30;
        this.radiusInt = 29;
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        this.dragging = false;
        this.dragged = "";
        this.currentIndex = [];
        //Botões
        this.buttons = [
            { title: "Relação entre Cordas", route: "cf_relacoes_metricas_rc" },
            { title: "Relação entre Segmentos Secantes", route: "cf_relacoes_metricas_rs" },
            { title: "Relação entre Segmentos Secante e Tangente", route: "cf_relacoes_metricas_rst" }
        ];
    }
    CfRelacoesMetricasRcComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    CfRelacoesMetricasRcComponent.prototype.ngDoCheck = function () {
        this.result1 = Math.round(this.distancePA * this.distancePC);
        this.result2 = Math.round(this.distancePB * this.distancePD);
    };
    CfRelacoesMetricasRcComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        this.currentIndex = [];
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        this.insersects.forEach(function (el) {
            if (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "ponto-c"
                || el.object.name == "ponto-d" /* || el.object.name == "ponto-p"*/) {
                _this.currentIndex.push(el);
                return;
            }
        });
    };
    CfRelacoesMetricasRcComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    /**
    * Captura o evento de mouse down na cena
    * @param event evento do mouse
    */
    CfRelacoesMetricasRcComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfRelacoesMetricasRcComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    /**
     * Captura o evento de mouse move na cena
     * @param event evento do mouse
     */
    CfRelacoesMetricasRcComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na ponto A, B, C, D ou P
            this.insersects.forEach(function (el) {
                if (_this.currentIndex.length < 2 && (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "ponto-c"
                    || el.object.name == "ponto-d" || el.object.name == "ponto-p")) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length >= 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "ponto-a")
                this.dragged = "A";
            else if (this.currentIndex[0].object.name == "ponto-b")
                this.dragged = "B";
            else if (this.currentIndex[0].object.name == "ponto-c")
                this.dragged = "C";
            else if (this.currentIndex[0].object.name == "ponto-d")
                this.dragged = "D";
            else if (this.currentIndex[0].object.name == "ponto-p")
                this.dragged = "P";
            this.reDrawPointsToCircle();
            this.reDrawLabel(this.dragged);
            this.reDrawAngle();
            this.pointsDrawOrder();
            this.geoScene.render();
        }
    };
    CfRelacoesMetricasRcComponent.prototype.reDrawPointsToCircle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var lineAC = this.geoScene.scene.getObjectByName("line-ac");
        var lineBD = this.geoScene.scene.getObjectByName("line-bd");
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "P") {
            // TODO
        }
        else if (this.dragged === "A") {
            var distance = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointA.position.x);
            var y = (distancesRatio * circlePointA.position.y);
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "B") {
            var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointB.position.x);
            var y = (distancesRatio * circlePointB.position.y);
            circlePointB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "C") {
            var distance = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointC.position.x);
            var y = (distancesRatio * circlePointC.position.y);
            circlePointC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "D") {
            var distance = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointD.position.x);
            var y = (distancesRatio * circlePointD.position.y);
            circlePointD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        if (this.dragged !== "P" && !this.geoScene.fromInput) {
            // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
            var a1 = circlePointC.position.y - circlePointA.position.y;
            var b1 = circlePointA.position.x - circlePointC.position.x;
            var c1 = a1 * (circlePointA.position.x) + b1 * (circlePointA.position.y);
            var a2 = circlePointD.position.y - circlePointB.position.y;
            var b2 = circlePointB.position.x - circlePointD.position.x;
            var c2 = a2 * (circlePointB.position.x) + b2 * (circlePointB.position.y);
            var determinant = a1 * b2 - a2 * b1;
            vertexPoint.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((c1 * b2 - c2 * b1) / determinant, (a1 * c2 - a2 * c1) / determinant, 0));
            var distance = Math.sqrt((Math.pow((vertexPoint.position.x), 2) + Math.pow((vertexPoint.position.y), 2)));
            if (distance + 0.5 > this.radiusExt)
                this.visible = false;
            else
                this.visible = true;
        }
        this.distanceBetweenPoints();
        var distanceDB = Math.sqrt((Math.pow((circlePointB.position.x - circlePointD.position.x), 2) + Math.pow((circlePointB.position.y - circlePointD.position.y), 2)));
        var distancesRatioDB = (distanceDB + 3) / distanceDB;
        var distanceBD = Math.sqrt((Math.pow((circlePointD.position.x - circlePointB.position.x), 2) + Math.pow((circlePointD.position.y - circlePointB.position.y), 2)));
        var distancesRatioBD = (distanceBD + 3) / distanceBD;
        var distanceCA = Math.sqrt((Math.pow((circlePointA.position.x - circlePointC.position.x), 2) + Math.pow((circlePointA.position.y - circlePointC.position.y), 2)));
        var distancesRatioCA = (distanceCA + 3) / distanceCA;
        var distanceAC = Math.sqrt((Math.pow((circlePointC.position.x - circlePointA.position.x), 2) + Math.pow((circlePointC.position.y - circlePointA.position.y), 2)));
        var distancesRatioAC = (distanceAC + 3) / distanceAC;
        var xDB = (1 - distancesRatioDB) * circlePointD.position.x + distancesRatioDB * circlePointB.position.x, yDB = (1 - distancesRatioDB) * circlePointD.position.y + distancesRatioDB * circlePointB.position.y, xBD = (1 - distancesRatioBD) * circlePointB.position.x + distancesRatioBD * circlePointD.position.x, yBD = (1 - distancesRatioBD) * circlePointB.position.y + distancesRatioBD * circlePointD.position.y, xCA = (1 - distancesRatioCA) * circlePointC.position.x + distancesRatioCA * circlePointA.position.x, yCA = (1 - distancesRatioCA) * circlePointC.position.y + distancesRatioCA * circlePointA.position.y, xAC = (1 - distancesRatioAC) * circlePointA.position.x + distancesRatioAC * circlePointC.position.x, yAC = (1 - distancesRatioAC) * circlePointA.position.y + distancesRatioAC * circlePointC.position.y;
        var geometryLineBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xBD, yBD, 0));
        geometryLineBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xDB, yDB, 0));
        var geometryLineAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xCA, yCA, 0));
        geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xAC, yAC, 0));
        lineBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineBD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineBD.name = "line-bd";
        lineAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineAC.name = "line-ac";
        this.geoScene.scene.children[8] = lineAC;
        this.geoScene.scene.children[9] = lineBD;
        var geometryAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAD.vertices.push(circlePointA.position);
        geometryAD.vertices.push(circlePointD.position);
        var geometryBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryBC.vertices.push(circlePointB.position);
        geometryBC.vertices.push(circlePointC.position);
        var dashed;
        dashed = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x0000ff, linewidth: 2, dashSize: 2, gapSize: 2 });
        var lineAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAD, dashed);
        lineAD.computeLineDistances();
        var lineBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBC, dashed);
        lineBC.computeLineDistances();
        // Corda 1
        this.geoScene.scene.children[10] = lineAD;
        this.geoScene.scene.children[10].name = "line-ad";
        // Corda 2
        this.geoScene.scene.children[11] = lineBC;
        this.geoScene.scene.children[11].name = "line-bc";
    };
    CfRelacoesMetricasRcComponent.prototype.distanceBetweenPoints = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        var distanceA = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
        var distancesRatioA = this.radius / distanceA; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xA = (distancesRatioA * circlePointA.position.x), yA = (distancesRatioA * circlePointA.position.y);
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2)));
        var distancesRatioB = this.radius / distanceB; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xB = (distancesRatioB * circlePointB.position.x), yB = (distancesRatioB * circlePointB.position.y);
        var distanceC = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2)));
        var distancesRatioC = this.radius / distanceC; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xC = (distancesRatioC * circlePointC.position.x), yC = (distancesRatioC * circlePointC.position.y);
        var distanceD = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2)));
        var distancesRatioD = this.radius / distanceD; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xD = (distancesRatioD * circlePointD.position.x), yD = (distancesRatioD * circlePointD.position.y);
        // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
        var a1 = yC - yA;
        var b1 = xA - xC;
        var c1 = a1 * (xA) + b1 * (yA);
        var a2 = yD - yB;
        var b2 = xB - xD;
        var c2 = a2 * (xB) + b2 * (yB);
        var determinant = a1 * b2 - a2 * b1;
        var xV = (c1 * b2 - c2 * b1) / determinant, yV = (a1 * c2 - a2 * c1) / determinant;
        this.distancePA = Math.sqrt((Math.pow((xA - xV), 2) + Math.pow((yA - yV), 2)));
        this.distancePB = Math.sqrt((Math.pow((xB - xV), 2) + Math.pow((yB - yV), 2)));
        this.distancePC = Math.sqrt((Math.pow((xC - xV), 2) + Math.pow((yC - yV), 2)));
        this.distancePD = Math.sqrt((Math.pow((xD - xV), 2) + Math.pow((yD - yV), 2)));
    };
    CfRelacoesMetricasRcComponent.prototype.reDrawAngle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var angleC, angleCorda, angleCordaCopy, angle, angleCopy;
        if (!this.geoScene.fromInput) {
            var a = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertexPoint.position.x - circlePointA.position.x, vertexPoint.position.y - circlePointA.position.y);
            var d = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertexPoint.position.x - circlePointD.position.x, vertexPoint.position.y - circlePointD.position.y);
            var da = d.x * a.x + d.y * a.y;
            var dMod = Math.sqrt(Math.pow(d.x, 2) + Math.pow(d.y, 2));
            var aMod = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
            var cos = da / (dMod * aMod);
            this.angle = Math.acos(cos) * 180 / Math.PI;
            var C = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](circlePointA.position.x - vertexPoint.position.x, circlePointA.position.y - vertexPoint.position.y);
            var D = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](circlePointA.position.x - circlePointD.position.x, circlePointA.position.y - circlePointD.position.y);
            var DC = D.x * C.x + D.y * C.y;
            var DMod = Math.sqrt(Math.pow(D.x, 2) + Math.pow(D.y, 2));
            var CMod = Math.sqrt(Math.pow(C.x, 2) + Math.pow(C.y, 2));
            cos = DC / (DMod * CMod);
            angleC = (Math.acos(cos) * 180 / Math.PI) / 2;
        }
        var radiansDA = this.angle * (Math.PI / 180);
        var radiansCorda = angleC * (Math.PI / 180);
        angleCorda = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        angleCordaCopy = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        var geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryAngleCorda = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 });
        var segmentCount = 92, radius = 5;
        if (this.radiusExt < 20)
            radius = 3;
        for (var i = 0; i <= segmentCount; i++) {
            var thetaA = ((i / segmentCount) * radiansDA) - (((segmentCount - i) / segmentCount) * radiansDA);
            var thetaC = ((i / segmentCount) * radiansCorda) - (((segmentCount - i) / segmentCount) * radiansCorda);
            thetaA /= 2;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * radius, -Math.cos(thetaA) * radius, 0));
            geometryAngleCorda.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * radius, -Math.cos(thetaC) * radius, 0));
            if (i == 30 || i == 61) {
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * (radius - 1), -Math.cos(thetaC) * (radius - 1), 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * (radius + 1), -Math.cos(thetaC) * (radius + 1), 0)); // adicionando vertice ao centro do angulo desenhado
                angleCorda.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 })));
                angleCordaCopy.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 })));
            }
            else if (i == 46) { // quando estiver no ponto ao centro do angulo
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * (radius - 1), -Math.cos(thetaA) * (radius - 1), 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * (radius + 1), -Math.cos(thetaA) * (radius + 1), 0)); // adicionando vertice ao centro do angulo desenhado
                angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
                angleCopy = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            }
        }
        var alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var delta = Math.atan2(circlePointD.position.y, circlePointD.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (delta < 0)
            delta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var AB = alpha - beta, AD = alpha - delta;
        if (AB < 0)
            AB += 360;
        if (AD < 0)
            AD += 360;
        alpha = Math.atan2(circlePointA.position.y - vertexPoint.position.y, circlePointA.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        beta = Math.atan2(circlePointB.position.y - vertexPoint.position.y, circlePointB.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var charlie = Math.atan2(circlePointC.position.y - vertexPoint.position.y, circlePointC.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (charlie < 0)
            charlie += 360; // caso o angulo seja negativo e o vertice esteja a direita
        delta = Math.atan2(circlePointD.position.y - vertexPoint.position.y, circlePointD.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (delta < 0)
            delta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var rotationDA = delta * 0.00875 + alpha * 0.00875 + this.angle * 0.0175 + (90 - this.angle) * 0.0175;
        var rotationCordaA = alpha * 0.0175 + (270 - angleC) * 0.0175;
        var rotationCordaB = beta * 0.0175 + (angleC - 90) * 0.0175;
        if (AD < AB) {
            rotationCordaA = charlie * 0.0175 + (angleC - 270) * 0.0175;
            rotationCordaB = delta * 0.0175 + (90 - angleC) * 0.0175;
        }
        if (!this.geoScene.fromInput) {
            var higher = this.geoScene.scene.children[3].position.y, lower = higher;
            for (var i = 3; i < 7; i++) {
                if (this.geoScene.scene.children[i].position.y > higher)
                    higher = this.geoScene.scene.children[i].position.y;
                if (this.geoScene.scene.children[i].position.y < lower)
                    lower = this.geoScene.scene.children[i].position.y;
            }
            if (vertexPoint.position.x < 0 && vertexPoint.position.y > lower && vertexPoint.position.y < higher) {
                rotationDA += 180 * 0.0175;
            }
        }
        if (rotationDA.toString() !== 'NaN') {
            this.geoScene.scene.children[12] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
            this.geoScene.scene.children[12].rotateZ(rotationDA); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[12].name = "angle";
            this.geoScene.scene.children[20] = angle;
            this.geoScene.scene.children[20].rotateZ(rotationDA); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[13] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
            this.geoScene.scene.children[13].rotateZ(rotationDA + 180 * 0.0175); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[13].name = "angle-c";
            this.geoScene.scene.children[21] = angleCopy;
            this.geoScene.scene.children[21].rotateZ(rotationDA + 180 * 0.0175); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[22] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleCorda, materialAngle);
            this.geoScene.scene.children[22].rotateZ(rotationCordaA); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[22].name = "angle-corda";
            this.geoScene.scene.children[24] = angleCorda;
            this.geoScene.scene.children[24].rotateZ(rotationCordaA); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[23] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleCorda, materialAngle);
            this.geoScene.scene.children[23].rotateZ(rotationCordaB); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[23].name = "angle-corda-c";
            this.geoScene.scene.children[25] = angleCordaCopy;
            this.geoScene.scene.children[25].rotateZ(rotationCordaB); // rotacionando o alpha para posicao entre as linhas
            this.angle = Math.round(this.angle);
        }
        else
            this.angle = 0;
        this.geoScene.scene.children[12].position.copy(vertexPoint.position);
        this.geoScene.scene.children[13].position.copy(vertexPoint.position);
        this.geoScene.scene.children[19].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertexPoint.position.x, vertexPoint.position.y - 3, 0));
        this.geoScene.scene.children[20].position.copy(vertexPoint.position);
        this.geoScene.scene.children[21].position.copy(vertexPoint.position);
        this.geoScene.scene.children[22].position.copy(circlePointA.position);
        this.geoScene.scene.children[23].position.copy(circlePointB.position);
        this.geoScene.scene.children[24].position.copy(circlePointA.position);
        this.geoScene.scene.children[25].position.copy(circlePointB.position);
        if (this.visible) {
            this.geoScene.scene.children[7].visible = true;
            this.geoScene.scene.children[10].visible = true;
            this.geoScene.scene.children[11].visible = true;
            this.geoScene.scene.children[12].visible = true;
            this.geoScene.scene.children[13].visible = true;
            this.geoScene.scene.children[19].visible = true;
            this.geoScene.scene.children[20].visible = true;
            this.geoScene.scene.children[21].visible = true;
            this.geoScene.scene.children[22].visible = true;
            this.geoScene.scene.children[23].visible = true;
            this.geoScene.scene.children[24].visible = true;
            this.geoScene.scene.children[25].visible = true;
            this.relation = Relation.TRUE;
        }
        else {
            this.geoScene.scene.children[7].visible = false;
            this.geoScene.scene.children[10].visible = false;
            this.geoScene.scene.children[11].visible = false;
            this.geoScene.scene.children[12].visible = false;
            this.geoScene.scene.children[13].visible = false;
            this.geoScene.scene.children[19].visible = false;
            this.geoScene.scene.children[20].visible = false;
            this.geoScene.scene.children[21].visible = false;
            this.geoScene.scene.children[22].visible = false;
            this.geoScene.scene.children[23].visible = false;
            this.geoScene.scene.children[24].visible = false;
            this.geoScene.scene.children[25].visible = false;
            this.relation = Relation.FALSE;
        }
    };
    CfRelacoesMetricasRcComponent.prototype.reDrawLabel = function (label) {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var labelA = this.geoScene.scene.getObjectByName("label-a");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        var labelC = this.geoScene.scene.getObjectByName("label-c");
        var labelD = this.geoScene.scene.getObjectByName("label-d");
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "A") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2) //distancia entre o ponto zero e A
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointA.position.x, distancesRatio * circlePointA.position.y, 0.6));
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointB.position.x, distancesRatio * circlePointB.position.y, 0.6));
        }
        else if (label === "C") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointC.position.x, distancesRatio * circlePointC.position.y, 0.6));
        }
        else if (label === "D") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointD.position.x, distancesRatio * circlePointD.position.y, 0.6));
        }
    };
    CfRelacoesMetricasRcComponent.prototype.ngAfterViewInit = function () {
        // ------------------------------ Pontos ------------------------------
        // O
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        // A
        this.geoScene.scene.children[3] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
        this.geoScene.scene.children[3].name = "ponto-a";
        // B
        this.geoScene.scene.children[4] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
        this.geoScene.scene.children[4].name = "ponto-b";
        // C
        this.geoScene.scene.children[5] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[5].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, -6, 0));
        this.geoScene.scene.children[5].name = "ponto-c";
        // D
        this.geoScene.scene.children[6] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[6].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0));
        this.geoScene.scene.children[6].name = "ponto-d";
        // P
        this.geoScene.scene.children[7] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](0.75, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        this.geoScene.scene.children[7].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[7].name = "ponto-p";
        // ------------------------------ Linhas ------------------------------
        // Vertices
        var geometryAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-24, 22.75, 0));
        geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](31, -7, 0));
        var geometryBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](31, 7, 0));
        geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-24, -22.75, 0));
        var geometryAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
        geometryAD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0));
        var geometryBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryBC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
        geometryBC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, -6, 0));
        var dashed;
        dashed = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x0000ff, linewidth: 2, dashSize: 2, gapSize: 2 });
        var lineAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAD, dashed);
        lineAD.computeLineDistances();
        var lineBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBC, dashed);
        lineBC.computeLineDistances();
        // AC
        this.geoScene.scene.children[8] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[8].name = "line-ac";
        // BD
        this.geoScene.scene.children[9] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[9].name = "line-bd";
        // Corda 1
        this.geoScene.scene.children[10] = lineAD;
        this.geoScene.scene.children[10].name = "line-ad";
        // Corda 2
        this.geoScene.scene.children[11] = lineBC;
        this.geoScene.scene.children[11].name = "line-bc";
        // ------------------------- Arcos e Ângulos --------------------------
        var segmentCount = 92, radius = 5, geometryAngleAlpha = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryAngleBeta = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArcDA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArcBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), radiansAlpha = 70 * (Math.PI) / 180, radiansBeta = 110 * (Math.PI) / 180, radiansArcAlpha = 90 * (Math.PI) / 180, radiansArcBeta = 25 * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansAlpha;
            geometryAngleAlpha.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansBeta;
            geometryAngleBeta.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
        }
        segmentCount = 360;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansArcAlpha;
            geometryArcDA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radiansArcBeta;
            geometryArcBC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        // Ângulo Alpha
        this.geoScene.scene.children[12] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleAlpha, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x0000FF, linewidth: 2 }));
        this.geoScene.scene.children[12].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[12].rotateZ(-220 * 0.0175);
        this.geoScene.scene.children[12].name = "angle-alpha";
        // Ângulo Alpha Espelhado
        this.geoScene.scene.children[13] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleAlpha, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x0000FF, linewidth: 2 }));
        this.geoScene.scene.children[13].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[13].rotateZ(-40 * 0.0175);
        this.geoScene.scene.children[13].name = "angle-alpha-c";
        // ------------------------------ Labels ------------------------------
        // O
        this.geoScene.scene.children[14] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, '0x000000');
        this.geoScene.scene.children[14].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-2.5, -2.5, 0));
        // A
        this.geoScene.scene.children[15] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 5, '0x000000');
        this.geoScene.scene.children[15].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, 25, 0));
        this.geoScene.scene.children[15].name = "label-a";
        // B
        this.geoScene.scene.children[16] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, '0x000000');
        this.geoScene.scene.children[16].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, 9, 0));
        this.geoScene.scene.children[16].name = "label-b";
        // C
        this.geoScene.scene.children[17] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('C', 5, '0x000000');
        this.geoScene.scene.children[17].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, -9, 0));
        this.geoScene.scene.children[17].name = "label-c";
        // D
        this.geoScene.scene.children[18] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('D', 5, '0x000000');
        this.geoScene.scene.children[18].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, -25, 0));
        this.geoScene.scene.children[18].name = "label-d";
        // P
        this.geoScene.scene.children[19] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('P', 3, '0x000000');
        this.geoScene.scene.children[19].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, -3, 0));
        this.geoScene.scene.children[19].name = "label-p";
        // Alpha
        this.geoScene.scene.children[20] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4, '#FF0000');
        this.geoScene.scene.children[20].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](10, 0, 0));
        this.geoScene.scene.children[20].name = "alpha";
        // Alpha Espelhado
        this.geoScene.scene.children[21] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4, '#FF0000');
        this.geoScene.scene.children[21].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](26, 0, 0));
        this.geoScene.scene.children[21].name = "alpha";
        this.reDrawAngle();
        this.pointsDrawOrder();
        this.geoScene.render();
    };
    CfRelacoesMetricasRcComponent.prototype.reDrawDefault = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        var pts = ["A", "B", "C", "D"];
        for (var i = 0; i < pts.length; i++) {
            this.dragged = pts[i];
            this.reDrawPointsToCircle();
            this.reDrawAngle();
            this.reDrawLabel(this.dragged);
        }
        this.geoScene.render();
    };
    CfRelacoesMetricasRcComponent.prototype.pointsDrawOrder = function () {
        this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 2;
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 3;
        this.geoScene.scene.children[6].renderOrder = this.geoScene.scene.children.length - 4;
        this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 5;
    };
    CfRelacoesMetricasRcComponent.prototype.checkInput = function () {
        if (this.radius >= 1 && this.radius <= 10) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputRadius = false;
            this.reDrawDefault();
        }
        else {
            this.errorInputRadius = true;
            this.showAngle = this.oldAngle;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfRelacoesMetricasRcComponent.prototype, "geoScene", void 0);
    CfRelacoesMetricasRcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-relacoes-metricas-rc',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rc/cf-relacoes-metricas-rc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfRelacoesMetricasRcComponent);
    return CfRelacoesMetricasRcComponent;
}());

/** Children order (CTRL+F e ta safe :v)
 * 0 - Circulo Externo (Azul, radiusExt)
 * 1 - Circulo Interno (Branco, radiusInt)
 * 2 - Ponto do Centro (0,0)
 * 3 - Ponto A
 * 4 - Ponto B
 * 5 - Ponto C
 * 6 - Ponto D
 * 7 - Ponto P
 * 8 - Linha AC
 * 9 - Linha BD
 * 10 - Linha Pontilhada AD
 * 11 - Linha Pontilhada BC
 * 12 - Ângulo
 * 13 - Ângulo Espelhado
 * 14 - Label do Ponto do Centro
 * 15 - Label do Ponto A
 * 16 - Label do Ponto B
 * 17 - Label do Ponto C
 * 18 - Label do Ponto D
 * 19 - Label do Ponto P
 * 20 - Label do Ângulo
 * 21 - Label do Ângulo Espelhado
 * 22 - Ângulo Corda
 * 23 - Ângulo Corda Espelhado
 * 24 - Label do Ângulo Corda
 * 25 - Label do Ângulo Corda Espelhado
*/


/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha uma das relações</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n        </p>\r\n\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"30\" [segmentCount]=\"92\" [color]=\"'rgb(70,131,180)'\"></geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"29\" [segmentCount]=\"92\" [color]=\"'rgb(255,255,255)'\"></geo-circunferencemesh>\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <div *ngIf=\"relation == 0\">\r\n      <h3>Não são segmentos secantes.</h3>\r\n    </div>\r\n\r\n    <div *ngIf=\"relation == 1\">\r\n      <h4>Relação entre Segmentos Secantes</h4>\r\n      <h5>Propriedades:</h5>\r\n      <p>\r\n        Consideramos duas secantes traçadas de um mesmo ponto exterior P.\r\n      </p>\r\n      <ul>\r\n        <li>\r\n          <ng-katex equation=\"\\overline{PA}\"></ng-katex> é um segmento de reta secante e <ng-katex\r\n            equation=\"\\overline{PC}\"></ng-katex> é parte desse segmento externa à circunferência;\r\n        </li>\r\n        <li>\r\n          <ng-katex equation=\"\\overline{PB}\"></ng-katex> é um segmento de reta secante e <ng-katex\r\n            equation=\"\\overline{PD}\"></ng-katex> é a parte desse segmento externa à circunferência;\r\n        </li>\r\n      </ul>\r\n\r\n      <p>\r\n        Considerando os triângulos PAD e PBC, temos:\r\n      </p>\r\n      <ul>\r\n        <li>\r\n          <ng-katex equation=\"\\widehat{P}\"></ng-katex> (ângulo comum)\r\n        </li>\r\n        <li>\r\n          <ng-katex equation=\"\\widehat{A} = \\widehat{D}\"></ng-katex> (são ângulos inscritos no mesmo arco)\r\n        </li>\r\n      </ul>\r\n\r\n      <p>\r\n        Assim temos:\r\n      </p>\r\n      <ng-katex equation=\"\\vartriangle PAD \\approx \\ \\vartriangle PBC\"></ng-katex>\r\n\r\n      <p>\r\n        E, portanto:\r\n      </p>\r\n      <ng-katex equation=\"\\frac{\\overline{PA}}{\\overline{PB}}\"></ng-katex> = <ng-katex\r\n        equation=\"\\frac{\\overline{PD}}{\\overline{PC}} \\to \\overline{PA} \\cdot \\overline{PC} = \\overline{PB} \\cdot \\overline{PD}\">\r\n      </ng-katex>\r\n\r\n      <p>\r\n        Exemplo:\r\n      </p>\r\n      <p>\r\n        Considerando a circunferência ao lado temos que:\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PA} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePA | number: '1.0-3':'pt' | noThousandDots }} \\ u.m. \"></ng-katex>\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PB} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePB | number: '1.0-3':'pt' | noThousandDots }} \\ u.m. \"></ng-katex>\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PC} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePC | number: '1.0-3':'pt' | noThousandDots }} \\ u.m. \"></ng-katex>\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PD} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePD | number: '1.0-3':'pt' | noThousandDots }} \\ u.m. \"></ng-katex>\r\n      </p>\r\n\r\n      <p>\r\n        Então:\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\"\\overline{PA} \\cdot \\overline{PB} = \\overline{PC} \\cdot \\overline{PD}\"></ng-katex>\r\n      </p>\r\n      <p>\r\n        <ng-katex equation=\" {{ distancePA | number: '1.0-3':'pt' | noThousandDots }} \"></ng-katex><ng-katex equation=\" \\cdot \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePC | number: '1.0-3':'pt' | noThousandDots }} = \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePB | number: '1.0-3':'pt' | noThousandDots }} \"></ng-katex><ng-katex equation=\" \\cdot \"></ng-katex>\r\n        <ng-katex equation=\" {{ distancePD | number: '1.0-3':'pt' | noThousandDots }} \"></ng-katex>\r\n      </p>\r\n\r\n      <!-- <ng-katex equation=\" {{ result1 }} = {{ result2 }} \"></ng-katex> -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfRelacoesMetricasRsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Relation;
(function (Relation) {
    Relation[Relation["TRUE"] = 1] = "TRUE";
    Relation[Relation["FALSE"] = 0] = "FALSE";
})(Relation || (Relation = {}));
var CfRelacoesMetricasRsComponent = /** @class */ (function () {
    function CfRelacoesMetricasRsComponent() {
        this.angle = 57;
        this.relation = Relation.TRUE;
        this.distancePA = 22;
        this.distancePB = 6;
        this.distancePC = 6;
        this.distancePD = 22;
        this.result1 = 0;
        this.result2 = 0;
        this.errorInputRadius = false;
        this.showAngle = this.angle;
        this.oldAngle = this.angle;
        this.visible = true;
        this.radius = 9;
        this.radiusExt = 30;
        this.radiusInt = 29;
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        this.dragging = false;
        this.dragged = "";
        this.currentIndex = [];
        //Botões
        this.buttons = [
            { title: "Relação entre Cordas", route: "cf_relacoes_metricas_rc" },
            { title: "Relação entre Segmentos Secantes", route: "cf_relacoes_metricas_rs" },
            { title: "Relação entre Segmentos Secante e Tangente", route: "cf_relacoes_metricas_rst" }
        ];
    }
    CfRelacoesMetricasRsComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    CfRelacoesMetricasRsComponent.prototype.ngDoCheck = function () {
        this.result1 = Math.round(this.distancePA * this.distancePC);
        this.result2 = Math.round(this.distancePB * this.distancePD);
    };
    CfRelacoesMetricasRsComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        this.currentIndex = [];
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        this.insersects.forEach(function (el) {
            if (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "ponto-c"
                || el.object.name == "ponto-d" || el.object.name == "ponto-p") {
                _this.currentIndex.push(el);
                return;
            }
        });
    };
    CfRelacoesMetricasRsComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    /**
    * Captura o evento de mouse down na cena
    * @param event evento do mouse
    */
    CfRelacoesMetricasRsComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfRelacoesMetricasRsComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    /**
     * Captura o evento de mouse move na cena
     * @param event evento do mouse
     */
    CfRelacoesMetricasRsComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na ponto A, B, C, D ou P
            this.insersects.forEach(function (el) {
                if (_this.currentIndex.length < 2 && (el.object.name == "ponto-a" || el.object.name == "ponto-b" || el.object.name == "ponto-c"
                    || el.object.name == "ponto-d" || el.object.name == "ponto-p")) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length >= 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "ponto-a")
                this.dragged = "A";
            else if (this.currentIndex[0].object.name == "ponto-b")
                this.dragged = "B";
            else if (this.currentIndex[0].object.name == "ponto-c")
                this.dragged = "C";
            else if (this.currentIndex[0].object.name == "ponto-d")
                this.dragged = "D";
            else if (this.currentIndex[0].object.name == "ponto-p")
                this.dragged = "P";
            this.reDrawPointsToCircle();
            this.reDrawLabel(this.dragged);
            this.reDrawAngle();
            this.pointsDrawOrder();
            this.geoScene.render();
        }
    };
    CfRelacoesMetricasRsComponent.prototype.reDrawPointsToCircle = function () {
        var _this = this;
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var lineAC = this.geoScene.scene.getObjectByName("line-ac");
        var lineBD = this.geoScene.scene.getObjectByName("line-bd");
        var distanceA = Math.sqrt((Math.pow((circlePointA.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointA.position.y - vertexPoint.position.y), 2)));
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointB.position.y - vertexPoint.position.y), 2)));
        var distanceC = Math.sqrt((Math.pow((circlePointC.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointC.position.y - vertexPoint.position.y), 2)));
        var distanceD = Math.sqrt((Math.pow((circlePointD.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointD.position.y - vertexPoint.position.y), 2)));
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "P") {
            var distance_1 = Math.sqrt((Math.pow((vertexPoint.position.x), 2) + Math.pow((vertexPoint.position.y), 2)));
            if (distance_1 < this.radiusExt + 0.5) {
                var distancesRatio = (this.radiusExt + 0.5) / distance_1; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
                var x_1 = (distancesRatio * vertexPoint.position.x);
                var y_1 = (distancesRatio * vertexPoint.position.y);
                vertexPoint.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x_1, y_1, 0));
            }
            circlePointA.position.copy(vertexPoint.position);
            circlePointD.position.copy(vertexPoint.position);
            var distA = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
            var distD = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2)));
            var distancesRatioA = (this.radiusExt - 0.5) / distA;
            var distancesRatioD = (this.radiusExt - 0.5) / distD;
            var thetaA = 10 * 0.0175, thetaB = -10 * 0.0175; // angulo desejado * 0.0175 (mesma coisa que esta formula -> theta = (angulo / 360) * Math.PI * 2)
            //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
            var x = (distancesRatioA * circlePointA.position.x), y = (distancesRatioA * circlePointA.position.y);
            var xrot = Math.cos(thetaA) * (x) - Math.sin(thetaA) * (y), yrot = Math.sin(thetaA) * (x) + Math.cos(thetaA) * (y);
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot, yrot, 0));
            x = (distancesRatioD * circlePointD.position.x), y = (distancesRatioD * circlePointD.position.y);
            xrot = Math.cos(thetaB) * (x) - Math.sin(thetaB) * (y), yrot = Math.sin(thetaB) * (x) + Math.cos(thetaB) * (y);
            circlePointD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot, yrot, 0));
            var posC = null, posB = null;
            for (var i = 0; i <= 360; i++) {
                var theta = i * 0.0175;
                var pos = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * this.radiusExt, Math.sin(theta) * this.radiusExt, 0);
                var crossC = this.geoScene.lineCross(pos.x, pos.y, vertexPoint.position.x, vertexPoint.position.y, circlePointA.position.x, circlePointA.position.y, 2);
                var crossB = this.geoScene.lineCross(pos.x, pos.y, vertexPoint.position.x, vertexPoint.position.y, circlePointD.position.x, circlePointD.position.y, 2);
                if (crossC) {
                    if (posC === null)
                        posC = pos;
                    else {
                        var dist = Math.sqrt(Math.pow((posC.x - vertexPoint.position.x), 2) + Math.pow((posC.y - vertexPoint.position.y), 2));
                        var newDist = Math.sqrt(Math.pow((pos.x - vertexPoint.position.x), 2) + Math.pow((pos.y - vertexPoint.position.y), 2));
                        if (newDist > dist)
                            posC = pos;
                    }
                }
                if (crossB) {
                    if (posB === null)
                        posB = pos;
                    else {
                        var dist = Math.sqrt(Math.pow((posB.x - vertexPoint.position.x), 2) + Math.pow((posB.y - vertexPoint.position.y), 2));
                        var newDist = Math.sqrt(Math.pow((pos.x - vertexPoint.position.x), 2) + Math.pow((pos.y - vertexPoint.position.y), 2));
                        if (newDist > dist)
                            posB = pos;
                    }
                }
            }
            if (!(posC.x <= vertexPoint.position.x + 1 && posC.x >= vertexPoint.position.x - 1))
                circlePointC.position.copy(posC);
            if (!(posB.x <= vertexPoint.position.x + 1 && posB.x >= vertexPoint.position.x - 1))
                circlePointB.position.copy(posB);
            var pts = ["A", "B", "C", "D"];
            pts.forEach(function (element) { _this.reDrawLabel(element); });
        }
        else if (this.dragged === "A") {
            var distance_2 = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance_2; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointA.position.x);
            var y = (distancesRatio * circlePointA.position.y);
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "B") {
            var distance_3 = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance_3; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointB.position.x);
            var y = (distancesRatio * circlePointB.position.y);
            circlePointB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "C") {
            var distance_4 = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance_4; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointC.position.x);
            var y = (distancesRatio * circlePointC.position.y);
            circlePointC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "D") {
            var distance_5 = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance_5; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointD.position.x);
            var y = (distancesRatio * circlePointD.position.y);
            circlePointD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
        var a1 = circlePointC.position.y - circlePointA.position.y;
        var b1 = circlePointA.position.x - circlePointC.position.x;
        if (distanceA > distanceC) {
            a1 = circlePointA.position.y - circlePointC.position.y;
            b1 = circlePointC.position.x - circlePointA.position.x;
        }
        var c1 = a1 * (circlePointA.position.x) + b1 * (circlePointA.position.y);
        var a2 = circlePointD.position.y - circlePointB.position.y;
        var b2 = circlePointB.position.x - circlePointD.position.x;
        if (distanceD > distanceB) {
            a2 = circlePointB.position.y - circlePointD.position.y;
            b2 = circlePointD.position.x - circlePointB.position.x;
        }
        var c2 = a2 * (circlePointB.position.x) + b2 * (circlePointB.position.y);
        this.determinant = a1 * b2 - a2 * b1;
        if (this.dragged !== "P")
            vertexPoint.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((c1 * b2 - c2 * b1) / this.determinant, (a1 * c2 - a2 * c1) / this.determinant, 0));
        var distance = Math.sqrt((Math.pow((vertexPoint.position.x), 2) + Math.pow((vertexPoint.position.y), 2)));
        if (distance + 0.5 < this.radiusExt)
            this.visible = false;
        else
            this.visible = true;
        this.distanceBetweenPoints();
        var distanceDB = Math.sqrt((Math.pow((circlePointB.position.x - circlePointD.position.x), 2) + Math.pow((circlePointB.position.y - circlePointD.position.y), 2)));
        var distancesRatioDB = (distanceDB + 3) / distanceDB;
        var distanceBD = Math.sqrt((Math.pow((circlePointD.position.x - circlePointB.position.x), 2) + Math.pow((circlePointD.position.y - circlePointB.position.y), 2)));
        var distancesRatioBD = (distanceBD + 3) / distanceBD;
        var distanceCA = Math.sqrt((Math.pow((circlePointA.position.x - circlePointC.position.x), 2) + Math.pow((circlePointA.position.y - circlePointC.position.y), 2)));
        var distancesRatioCA = (distanceCA + 3) / distanceCA;
        var distanceAC = Math.sqrt((Math.pow((circlePointC.position.x - circlePointA.position.x), 2) + Math.pow((circlePointC.position.y - circlePointA.position.y), 2)));
        var distancesRatioAC = (distanceAC + 3) / distanceAC;
        var xDB = (1 - distancesRatioDB) * circlePointD.position.x + distancesRatioDB * circlePointB.position.x, yDB = (1 - distancesRatioDB) * circlePointD.position.y + distancesRatioDB * circlePointB.position.y, xBD = (1 - distancesRatioBD) * circlePointB.position.x + distancesRatioBD * circlePointD.position.x, yBD = (1 - distancesRatioBD) * circlePointB.position.y + distancesRatioBD * circlePointD.position.y, xCA = (1 - distancesRatioCA) * circlePointC.position.x + distancesRatioCA * circlePointA.position.x, yCA = (1 - distancesRatioCA) * circlePointC.position.y + distancesRatioCA * circlePointA.position.y, xAC = (1 - distancesRatioAC) * circlePointA.position.x + distancesRatioAC * circlePointC.position.x, yAC = (1 - distancesRatioAC) * circlePointA.position.y + distancesRatioAC * circlePointC.position.y;
        var geometryLineBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        if (this.dragged !== "P") {
            geometryLineBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xBD, yBD, 0));
            geometryLineBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xDB, yDB, 0));
            geometryLineBD.vertices.push(vertexPoint.position);
        }
        else {
            if (distanceD > distanceB) {
                geometryLineBD.vertices.push(vertexPoint.position);
                geometryLineBD.vertices.push(circlePointD.position);
                geometryLineBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xBD, yBD, 0));
            }
            else if (distanceD < distanceB) {
                geometryLineBD.vertices.push(vertexPoint.position);
                geometryLineBD.vertices.push(circlePointB.position);
                geometryLineBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xDB, yDB, 0));
            }
        }
        var geometryLineAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        if (this.dragged !== "P") {
            geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xCA, yCA, 0));
            geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xAC, yAC, 0));
            geometryLineAC.vertices.push(vertexPoint.position);
        }
        else {
            if (distanceA > distanceC) {
                geometryLineAC.vertices.push(vertexPoint.position);
                geometryLineAC.vertices.push(circlePointA.position);
                geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xCA, yCA, 0));
            }
            else if (distanceA < distanceC) {
                geometryLineAC.vertices.push(vertexPoint.position);
                geometryLineAC.vertices.push(circlePointC.position);
                geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xAC, yAC, 0));
            }
        }
        lineBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineBD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineBD.name = "line-bd";
        lineAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineAC.name = "line-ac";
        this.geoScene.scene.children[8] = lineAC;
        this.geoScene.scene.children[9] = lineBD;
        var alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var charlie = Math.atan2(circlePointC.position.y, circlePointC.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (charlie < 0)
            charlie += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var delta = Math.atan2(circlePointD.position.y, circlePointD.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (delta < 0)
            delta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var AB = alpha - beta, AC = alpha - charlie, DB = delta - beta, DC = delta - charlie;
        if (AB < 0)
            AB += 360;
        if (AC < 0)
            AC += 360;
        if (DB < 0)
            DB += 360;
        if (DC < 0)
            DC += 360;
        var geometryAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        var geometryBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        if (AB < AC) {
            if (DB < DC) {
                geometryAD.vertices.push(circlePointA.position);
                geometryAD.vertices.push(circlePointB.position);
                geometryBC.vertices.push(circlePointC.position);
                geometryBC.vertices.push(circlePointD.position);
            }
            else {
                geometryAD.vertices.push(circlePointA.position);
                geometryAD.vertices.push(circlePointD.position);
                geometryBC.vertices.push(circlePointC.position);
                geometryBC.vertices.push(circlePointB.position);
            }
        }
        else if (AB > AC) {
            if (DB < DC) {
                geometryAD.vertices.push(circlePointD.position);
                geometryAD.vertices.push(circlePointA.position);
                geometryBC.vertices.push(circlePointB.position);
                geometryBC.vertices.push(circlePointC.position);
            }
            else {
                geometryAD.vertices.push(circlePointB.position);
                geometryAD.vertices.push(circlePointA.position);
                geometryBC.vertices.push(circlePointD.position);
                geometryBC.vertices.push(circlePointC.position);
            }
        }
        var dashed;
        dashed = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x0000ff, linewidth: 2, dashSize: 2, gapSize: 2 });
        var lineAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAD, dashed);
        lineAD.computeLineDistances();
        var lineBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBC, dashed);
        lineBC.computeLineDistances();
        // Corda 1
        this.geoScene.scene.children[10] = lineAD;
        this.geoScene.scene.children[10].name = "line-ad";
        // Corda 2
        this.geoScene.scene.children[11] = lineBC;
        this.geoScene.scene.children[11].name = "line-bc";
    };
    CfRelacoesMetricasRsComponent.prototype.distanceBetweenPoints = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var distA = Math.sqrt((Math.pow((circlePointA.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointA.position.y - vertexPoint.position.y), 2)));
        var distB = Math.sqrt((Math.pow((circlePointB.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointB.position.y - vertexPoint.position.y), 2)));
        var distC = Math.sqrt((Math.pow((circlePointC.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointC.position.y - vertexPoint.position.y), 2)));
        var distD = Math.sqrt((Math.pow((circlePointD.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointD.position.y - vertexPoint.position.y), 2)));
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        var distanceA = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
        var distancesRatioA = this.radius / distanceA; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xA = (distancesRatioA * circlePointA.position.x), yA = (distancesRatioA * circlePointA.position.y);
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2)));
        var distancesRatioB = this.radius / distanceB; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xB = (distancesRatioB * circlePointB.position.x), yB = (distancesRatioB * circlePointB.position.y);
        var distanceC = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2)));
        var distancesRatioC = this.radius / distanceC; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xC = (distancesRatioC * circlePointC.position.x), yC = (distancesRatioC * circlePointC.position.y);
        var distanceD = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2)));
        var distancesRatioD = this.radius / distanceD; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xD = (distancesRatioD * circlePointD.position.x), yD = (distancesRatioD * circlePointD.position.y);
        // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
        var a1 = yC - yA;
        var b1 = xA - xC;
        if (distA > distC) {
            a1 = yA - yC;
            b1 = xC - xA;
        }
        var c1 = a1 * (xA) + b1 * (yA);
        var a2 = yD - yB;
        var b2 = xB - xD;
        if (distD > distB) {
            a2 = yB - yD;
            b2 = xD - xB;
        }
        var c2 = a2 * (xB) + b2 * (yB);
        var determinant = a1 * b2 - a2 * b1;
        var xV = (c1 * b2 - c2 * b1) / determinant, yV = (a1 * c2 - a2 * c1) / determinant;
        this.distancePA = Math.sqrt((Math.pow((xA - xV), 2) + Math.pow((yA - yV), 2)));
        this.distancePB = Math.sqrt((Math.pow((xB - xV), 2) + Math.pow((yB - yV), 2)));
        this.distancePC = Math.sqrt((Math.pow((xC - xV), 2) + Math.pow((yC - yV), 2)));
        this.distancePD = Math.sqrt((Math.pow((xD - xV), 2) + Math.pow((yD - yV), 2)));
    };
    CfRelacoesMetricasRsComponent.prototype.reDrawAngle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var angleC, angleCorda, angleCordaCopy, angle, C, B, vertex;
        var distanceA = Math.sqrt((Math.pow((circlePointA.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointA.position.y - vertexPoint.position.y), 2)));
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointB.position.y - vertexPoint.position.y), 2)));
        var distanceC = Math.sqrt((Math.pow((circlePointC.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointC.position.y - vertexPoint.position.y), 2)));
        var distanceD = Math.sqrt((Math.pow((circlePointD.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointD.position.y - vertexPoint.position.y), 2)));
        var a = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertexPoint.position.x - circlePointA.position.x, vertexPoint.position.y - circlePointA.position.y);
        var d = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertexPoint.position.x - circlePointD.position.x, vertexPoint.position.y - circlePointD.position.y);
        var da = d.x * a.x + d.y * a.y;
        var dMod = Math.sqrt(Math.pow(d.x, 2) + Math.pow(d.y, 2));
        var aMod = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
        var cos = da / (dMod * aMod);
        this.angle = Math.acos(cos) * 180 / Math.PI;
        if (distanceA > distanceC)
            vertex = circlePointA.position;
        else
            vertex = circlePointC.position;
        if (distanceD > distanceB) {
            C = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertex.x - vertexPoint.position.x, vertex.y - vertexPoint.position.y);
            B = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertex.x - circlePointB.position.x, vertex.y - circlePointB.position.y);
        }
        else {
            C = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertex.x - vertexPoint.position.x, vertex.y - vertexPoint.position.y);
            B = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertex.x - circlePointD.position.x, vertex.y - circlePointD.position.y);
        }
        var BC = B.x * C.x + B.y * C.y;
        var BMod = Math.sqrt(Math.pow(B.x, 2) + Math.pow(B.y, 2));
        var CMod = Math.sqrt(Math.pow(C.x, 2) + Math.pow(C.y, 2));
        cos = BC / (BMod * CMod);
        angleC = (Math.acos(cos) * 180 / Math.PI) / 2;
        var radiansDA = this.angle * (Math.PI / 180);
        var radiansCorda = angleC * (Math.PI / 180);
        angleCorda = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        angleCordaCopy = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        var geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryAngleCorda = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 });
        var segmentCount = 92, radius = 5;
        if (this.radiusExt < 20)
            radius = 3;
        for (var i = 0; i <= segmentCount; i++) {
            var thetaA = ((i / segmentCount) * radiansDA) - (((segmentCount - i) / segmentCount) * radiansDA);
            var thetaC = ((i / segmentCount) * radiansCorda) - (((segmentCount - i) / segmentCount) * radiansCorda);
            thetaA /= 2;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * radius, -Math.cos(thetaA) * radius, 0));
            geometryAngleCorda.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * radius, -Math.cos(thetaC) * radius, 0));
            if (i == 30 || i == 61) {
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * (radius - 1), -Math.cos(thetaC) * (radius - 1), 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * (radius + 1), -Math.cos(thetaC) * (radius + 1), 0)); // adicionando vertice ao centro do angulo desenhado
                angleCorda.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 })));
                angleCordaCopy.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 })));
            }
            else if (i == 46) { // quando estiver no ponto ao centro do angulo
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * (radius - 1), -Math.cos(thetaA) * (radius - 1), 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * (radius + 1), -Math.cos(thetaA) * (radius + 1), 0)); // adicionando vertice ao centro do angulo desenhado
                angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            }
        }
        var alpha = Math.atan2(circlePointA.position.y - vertexPoint.position.y, circlePointA.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var beta = Math.atan2(circlePointB.position.y - vertexPoint.position.y, circlePointB.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var charlie = Math.atan2(circlePointC.position.y - vertexPoint.position.y, circlePointC.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (charlie < 0)
            charlie += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var delta = Math.atan2(circlePointD.position.y - vertexPoint.position.y, circlePointD.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (delta < 0)
            delta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var angleModA = (270 - angleC);
        var angleModB = (angleC - 90);
        if (this.determinant > 0) {
            angleModA = -(90 - angleC);
            angleModB = -(angleC - 270);
        }
        var rotationDA = delta * 0.00875 + alpha * 0.00875 + this.angle * 0.0175 + (90 - this.angle) * 0.0175;
        var rotationCordaA = alpha * 0.0175 + angleModA * 0.0175;
        if (distanceA < distanceC)
            rotationCordaA = charlie * 0.0175 + angleModA * 0.0175;
        var rotationCordaB = delta * 0.0175 + angleModB * 0.0175;
        if (distanceD < distanceB)
            rotationCordaB = beta * 0.0175 + angleModB * 0.0175;
        if (!this.geoScene.fromInput) {
            var higher = this.geoScene.scene.children[3].position.y, lower = higher;
            for (var i = 3; i < 7; i++) {
                if (this.geoScene.scene.children[i].position.y > higher)
                    higher = this.geoScene.scene.children[i].position.y;
                if (this.geoScene.scene.children[i].position.y < lower)
                    lower = this.geoScene.scene.children[i].position.y;
            }
            if (vertexPoint.position.x < 0 && vertexPoint.position.y > lower && vertexPoint.position.y < higher) {
                rotationDA += 180 * 0.0175;
            }
        }
        if (rotationDA.toString() !== 'NaN') {
            this.geoScene.scene.children[12] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
            this.geoScene.scene.children[12].rotateZ(rotationDA); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[12].name = "angle";
            this.geoScene.scene.children[19] = angle;
            this.geoScene.scene.children[19].rotateZ(rotationDA); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[20] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleCorda, materialAngle);
            this.geoScene.scene.children[20].rotateZ(rotationCordaA); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[20].name = "angle-corda";
            this.geoScene.scene.children[22] = angleCorda;
            this.geoScene.scene.children[22].rotateZ(rotationCordaA); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[21] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleCorda, materialAngle);
            this.geoScene.scene.children[21].rotateZ(rotationCordaB); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[21].name = "angle-corda-c";
            this.geoScene.scene.children[23] = angleCordaCopy;
            this.geoScene.scene.children[23].rotateZ(rotationCordaB); // rotacionando o alpha para posicao entre as linhas
            this.angle = Math.round(this.angle);
        }
        else
            this.angle = 0;
        this.geoScene.scene.children[12].position.copy(vertexPoint.position);
        this.geoScene.scene.children[18].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertexPoint.position.x, vertexPoint.position.y - 4, 0));
        this.geoScene.scene.children[19].position.copy(vertexPoint.position);
        this.geoScene.scene.children[20].position.copy(vertexPoint.position);
        if (distanceA > distanceC) {
            this.geoScene.scene.children[20].position.copy(circlePointA.position);
            this.geoScene.scene.children[22].position.copy(circlePointA.position);
        }
        else {
            this.geoScene.scene.children[20].position.copy(circlePointC.position);
            this.geoScene.scene.children[22].position.copy(circlePointC.position);
        }
        if (distanceB > distanceD) {
            this.geoScene.scene.children[21].position.copy(circlePointB.position);
            this.geoScene.scene.children[23].position.copy(circlePointB.position);
        }
        else {
            this.geoScene.scene.children[21].position.copy(circlePointD.position);
            this.geoScene.scene.children[23].position.copy(circlePointD.position);
        }
        if (this.visible) {
            this.geoScene.scene.children[7].visible = true;
            this.geoScene.scene.children[10].visible = true;
            this.geoScene.scene.children[11].visible = true;
            this.geoScene.scene.children[12].visible = true;
            this.geoScene.scene.children[18].visible = true;
            this.geoScene.scene.children[19].visible = true;
            this.geoScene.scene.children[20].visible = true;
            this.geoScene.scene.children[21].visible = true;
            this.geoScene.scene.children[22].visible = true;
            this.geoScene.scene.children[23].visible = true;
            this.relation = Relation.TRUE;
        }
        else {
            this.geoScene.scene.children[7].visible = false;
            this.geoScene.scene.children[10].visible = false;
            this.geoScene.scene.children[11].visible = false;
            this.geoScene.scene.children[12].visible = false;
            this.geoScene.scene.children[18].visible = false;
            this.geoScene.scene.children[19].visible = false;
            this.geoScene.scene.children[20].visible = false;
            this.geoScene.scene.children[21].visible = false;
            this.geoScene.scene.children[22].visible = false;
            this.geoScene.scene.children[23].visible = false;
            this.relation = Relation.FALSE;
        }
    };
    CfRelacoesMetricasRsComponent.prototype.reDrawLabel = function (label) {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var labelA = this.geoScene.scene.getObjectByName("label-a");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        var labelC = this.geoScene.scene.getObjectByName("label-c");
        var labelD = this.geoScene.scene.getObjectByName("label-d");
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "A") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2) //distancia entre o ponto zero e A
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointA.position.x, distancesRatio * circlePointA.position.y, 0.6));
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointB.position.x, distancesRatio * circlePointB.position.y, 0.6));
        }
        else if (label === "C") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointC.position.x, distancesRatio * circlePointC.position.y, 0.6));
        }
        else if (label === "D") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointD.position.x, distancesRatio * circlePointD.position.y, 0.6));
        }
    };
    CfRelacoesMetricasRsComponent.prototype.ngAfterViewInit = function () {
        // ------------------------------ Pontos ------------------------------
        // O
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        // A
        this.geoScene.scene.children[3] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
        this.geoScene.scene.children[3].name = "ponto-a";
        // B
        this.geoScene.scene.children[4] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, -6, 0));
        this.geoScene.scene.children[4].name = "ponto-b";
        // C
        this.geoScene.scene.children[5] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[5].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
        this.geoScene.scene.children[5].name = "ponto-c";
        // D
        this.geoScene.scene.children[6] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[6].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0));
        this.geoScene.scene.children[6].name = "ponto-d";
        // P
        this.geoScene.scene.children[7] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.25, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        this.geoScene.scene.children[7].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
        this.geoScene.scene.children[7].name = "ponto-p";
        // ------------------------------ Linhas ------------------------------
        // Vertices
        var geometryAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, 22.25, 0));
        geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
        var geometryBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, -22.25, 0));
        geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
        var geometryAB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
        geometryAB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, -6, 0));
        var geometryDC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryDC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
        geometryDC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, -21, 0));
        var dashed;
        dashed = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x0000ff, linewidth: 2, dashSize: 2, gapSize: 2 });
        var lineAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAB, dashed);
        lineAD.computeLineDistances();
        var lineBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryDC, dashed);
        lineBC.computeLineDistances();
        // AC
        this.geoScene.scene.children[8] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[8].name = "line-ac";
        // BD
        this.geoScene.scene.children[9] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[9].name = "line-bd";
        // Corda 1
        this.geoScene.scene.children[10] = lineAD;
        this.geoScene.scene.children[10].name = "line-ad";
        // Corda 2
        this.geoScene.scene.children[11] = lineBC;
        this.geoScene.scene.children[11].name = "line-bc";
        // ------------------------- Arcos e Ângulos --------------------------
        var segmentCount = 92, radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), radians = 70 * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        // Ângulo Alpha
        this.geoScene.scene.children[12] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x0000FF, linewidth: 2 }));
        this.geoScene.scene.children[12].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[12].rotateZ(-220 * 0.0175);
        this.geoScene.scene.children[12].name = "angle-alpha";
        // ------------------------------ Labels ------------------------------
        // O
        this.geoScene.scene.children[13] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, '0x000000');
        this.geoScene.scene.children[13].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-2.5, -2.5, 0));
        // A
        this.geoScene.scene.children[14] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 5, '0x000000');
        this.geoScene.scene.children[14].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, 25, 0));
        this.geoScene.scene.children[14].name = "label-a";
        // B
        this.geoScene.scene.children[15] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, '0x000000');
        this.geoScene.scene.children[15].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, -9, 0));
        this.geoScene.scene.children[15].name = "label-b";
        // C
        this.geoScene.scene.children[16] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('C', 5, '0x000000');
        this.geoScene.scene.children[16].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, 9, 0));
        this.geoScene.scene.children[16].name = "label-c";
        // D
        this.geoScene.scene.children[17] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('D', 5, '0x000000');
        this.geoScene.scene.children[17].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, -25, 0));
        this.geoScene.scene.children[17].name = "label-d";
        // P
        this.geoScene.scene.children[18] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('P', 4, '0x000000');
        this.geoScene.scene.children[18].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, -4, 0));
        this.geoScene.scene.children[18].name = "label-p";
        // Alpha
        this.geoScene.scene.children[19] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4, '#FF0000');
        this.geoScene.scene.children[19].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](10, 0, 0));
        this.geoScene.scene.children[19].name = "angle";
        this.reDrawAngle();
        this.pointsDrawOrder();
        this.geoScene.render();
    };
    CfRelacoesMetricasRsComponent.prototype.reDrawDefault = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        var pts = ["A", "B", "C", "D"];
        for (var i = 0; i < pts.length; i++) {
            this.dragged = pts[i];
            this.reDrawPointsToCircle();
            this.reDrawAngle();
            this.reDrawLabel(this.dragged);
        }
        this.geoScene.render();
    };
    CfRelacoesMetricasRsComponent.prototype.pointsDrawOrder = function () {
        this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 2;
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 3;
        this.geoScene.scene.children[6].renderOrder = this.geoScene.scene.children.length - 4;
        this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 5;
    };
    CfRelacoesMetricasRsComponent.prototype.checkInput = function () {
        if (this.radius >= 1 && this.radius <= 10) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputRadius = false;
            this.reDrawDefault();
        }
        else {
            this.errorInputRadius = true;
            this.showAngle = this.oldAngle;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfRelacoesMetricasRsComponent.prototype, "geoScene", void 0);
    CfRelacoesMetricasRsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-relacoes-metricas-rs',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rs/cf-relacoes-metricas-rs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfRelacoesMetricasRsComponent);
    return CfRelacoesMetricasRsComponent;
}());

/** Children order (CTRL+F e ta safe :v)
 * 0 - Circulo Externo (Azul, radiusExt)
 * 1 - Circulo Interno (Branco, radiusInt)
 * 2 - Ponto do Centro (0,0)
 * 3 - Ponto A
 * 4 - Ponto B
 * 5 - Ponto C
 * 6 - Ponto D
 * 7 - Ponto P
 * 8 - Linha AC
 * 9 - Linha BD
 * 10 - Linha Pontilhada AD
 * 11 - Linha Pontilhada BC
 * 12 - Ângulo
 * 13 - Label do Ponto do Centro
 * 14 - Label do Ponto A
 * 15 - Label do Ponto B
 * 16 - Label do Ponto C
 * 17 - Label do Ponto D
 * 18 - Label do Ponto P
 * 19 - Label do Ângulo
 * 20 - Ângulo Corda
 * 21 - Ângulo Corda Espelhado
 * 22 - Label do Ângulo Corda
 * 23 - Label do Ângulo Corda Espelhado
*/


/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a posição de uma geometria em relação a uma circunferência</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n        </p>\r\n\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"30\" [segmentCount]=\"92\" [color]=\"'rgb(70,131,180)'\"></geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"29\" [segmentCount]=\"92\" [color]=\"'rgb(255,255,255)'\"></geo-circunferencemesh>\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>Relação entre Segmentos Secantes e Tangente</h4>\r\n    <h5>Propriedades:</h5>\r\n\r\n    <p>\r\n      Consideremos dois segmentos, um segmento secante e um segmento tangente, traçadas de um mesmo ponto externo P.\r\n    </p>\r\n    <ul>\r\n      <li>\r\n        <ng-katex equation=\"\\overline{PA}\"></ng-katex> é um segmento de reta secante e <ng-katex\r\n          equation=\"\\overline{PC}\"></ng-katex> é parte desse segmento externa à circunferência.\r\n      </li>\r\n      <li>\r\n        <ng-katex equation=\"\\overline{PB}\"></ng-katex> é um segmento de reta tangente.\r\n      </li>\r\n    </ul>\r\n\r\n    <p>\r\n      Considerando os triângulos PAB e PBC, temos:\r\n    </p>\r\n    <ul>\r\n      <li>\r\n        <ng-katex equation=\"\\widehat{P} = \\widehat{P}\"></ng-katex> (ângulo comum)\r\n      </li>\r\n      <li>\r\n        <ng-katex equation=\"\\widehat{A} \\approxeq \\widehat{B}\"></ng-katex> (são ângulos inscritos no mesmo arco)\r\n      </li>\r\n    </ul>\r\n\r\n    <p>\r\n      Assim temos:\r\n    </p>\r\n    <ng-katex equation=\"\\vartriangle PAB \\approx \\ \\vartriangle PBC\"></ng-katex>\r\n\r\n    <p>\r\n      E, portanto:\r\n    </p>\r\n    <ng-katex equation=\"\\frac{\\overline{PA}}{\\overline{PB}}\"></ng-katex> = <ng-katex\r\n      equation=\"\\frac{\\overline{PB}}{\\overline{PC}} \\to \\overline{PB}^{2} = \\overline{PA} \\cdot \\overline{PC}\">\r\n    </ng-katex>\r\n\r\n    <p>\r\n      Exemplo:\r\n    </p>\r\n    <p>\r\n      Considerando a circunferência ao lado temos que:\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"\\overline{PA} = \"></ng-katex>\r\n      <ng-katex equation=\" {{ distancePA | number: '1.0-3':'pt' | noThousandDots }} \\ u.m. \"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"\\overline{PB} = \"></ng-katex>\r\n      <ng-katex equation=\" {{ distancePB | number: '1.0-3':'pt' | noThousandDots }} \\ u.m. \"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"\\overline{PC} = \"></ng-katex>\r\n      <ng-katex equation=\" {{ distancePC | number: '1.0-3':'pt' | noThousandDots }} \\ u.m. \"></ng-katex>\r\n    </p>\r\n\r\n    <p>\r\n      Então:\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"\\overline{PB}^{2} = \\overline{PA} \\cdot \\overline{PC}\"></ng-katex>\r\n    </p>\r\n\r\n    <p>\r\n      <ng-katex equation=\" {{ distancePB | number: '1.0-3':'pt' | noThousandDots }}^{2} =\"></ng-katex>\r\n      <ng-katex equation=\" {{ distancePA | number: '1.0-3':'pt' | noThousandDots }} \"></ng-katex>\r\n      <ng-katex equation=\" \\cdot \"></ng-katex>\r\n      <ng-katex equation=\" {{ distancePC | number: '1.0-3':'pt' | noThousandDots }} \"></ng-katex>\r\n    </p>\r\n    <p>\r\n\r\n      <!-- <ng-katex equation=\" {{ result1 }} = {{ result2 }} \"></ng-katex> -->\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfRelacoesMetricasRstComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CfRelacoesMetricasRstComponent = /** @class */ (function () {
    function CfRelacoesMetricasRstComponent() {
        this.angle = 57;
        this.errorInputRadius = false;
        this.showAngle = this.angle;
        this.oldAngle = this.angle;
        this.visible = true;
        this.radius = 9;
        this.radiusExt = 30;
        this.radiusInt = 29;
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        this.dragging = false;
        this.dragged = "";
        this.currentIndex = [];
        this.distancePA = 0;
        this.distancePB = 0;
        this.distancePC = 0;
        this.result1 = 0;
        this.result2 = 0;
        //Botões
        this.buttons = [
            { title: "Relação entre Cordas", route: "cf_relacoes_metricas_rc" },
            { title: "Relação entre Segmentos Secantes", route: "cf_relacoes_metricas_rs" },
            { title: "Relação entre Segmentos Secante e Tangente", route: "cf_relacoes_metricas_rst" }
        ];
    }
    CfRelacoesMetricasRstComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    CfRelacoesMetricasRstComponent.prototype.ngDoCheck = function () {
        this.result1 = Math.round(Math.pow(this.distancePB, 2));
        this.result2 = Math.round(this.distancePA * this.distancePC);
    };
    CfRelacoesMetricasRstComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        this.currentIndex = [];
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        this.insersects.forEach(function (el) {
            if (el.object.name == "ponto-a" || el.object.name == "ponto-b"
                || el.object.name == "ponto-c" || el.object.name == "ponto-p") {
                _this.currentIndex.push(el);
                return;
            }
        });
    };
    CfRelacoesMetricasRstComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    /**
    * Captura o evento de mouse down na cena
    * @param event evento do mouse
    */
    CfRelacoesMetricasRstComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    CfRelacoesMetricasRstComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    /**
     * Captura o evento de mouse move na cena
     * @param event evento do mouse
     */
    CfRelacoesMetricasRstComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na ponto A, B, C, D ou P
            this.insersects.forEach(function (el) {
                if (_this.currentIndex.length < 2 && (el.object.name == "ponto-a" || el.object.name == "ponto-b"
                    || el.object.name == "ponto-c" || el.object.name == "ponto-p")) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length >= 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "ponto-a")
                this.dragged = "A";
            else if (this.currentIndex[0].object.name == "ponto-b")
                this.dragged = "B";
            else if (this.currentIndex[0].object.name == "ponto-c")
                this.dragged = "C";
            else if (this.currentIndex[0].object.name == "ponto-d")
                this.dragged = "D";
            else if (this.currentIndex[0].object.name == "ponto-p")
                this.dragged = "P";
            this.reDrawPointsToCircle();
            this.reDrawLabel(this.dragged);
            this.reDrawAngle();
            this.pointsDrawOrder();
            this.geoScene.render();
        }
    };
    CfRelacoesMetricasRstComponent.prototype.reDrawPointsToCircle = function () {
        var _this = this;
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var lineAC = this.geoScene.scene.getObjectByName("line-ac");
        var lineBD = this.geoScene.scene.getObjectByName("line-bd");
        var distanceA = Math.sqrt((Math.pow((circlePointA.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointA.position.y - vertexPoint.position.y), 2)));
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointB.position.y - vertexPoint.position.y), 2)));
        var distanceC = Math.sqrt((Math.pow((circlePointC.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointC.position.y - vertexPoint.position.y), 2)));
        var distanceD = Math.sqrt((Math.pow((circlePointD.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointD.position.y - vertexPoint.position.y), 2)));
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "P") {
            var distance_1 = Math.sqrt((Math.pow((vertexPoint.position.x), 2) + Math.pow((vertexPoint.position.y), 2)));
            if (distance_1 < this.radiusExt + 0.5) {
                var distancesRatio_1 = (this.radiusExt + 0.5) / distance_1; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
                var x_1 = (distancesRatio_1 * vertexPoint.position.x);
                var y_1 = (distancesRatio_1 * vertexPoint.position.y);
                vertexPoint.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x_1, y_1, 0));
            }
            circlePointA.position.copy(vertexPoint.position);
            var dist = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / dist;
            var thetaA = 10 * 0.0175, thetaB = -10 * 0.0175; // angulo desejado * 0.0175 (mesma coisa que esta formula -> theta = (angulo / 360) * Math.PI * 2)
            //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
            var x = (distancesRatio * circlePointA.position.x), y = (distancesRatio * circlePointA.position.y);
            var xrot = Math.cos(thetaA) * (x) - Math.sin(thetaA) * (y), yrot = Math.sin(thetaA) * (x) + Math.cos(thetaA) * (y);
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot, yrot, 0));
            var posC = null;
            for (var i = 0; i <= 360; i++) {
                var theta_1 = i * 0.0175;
                var pos_1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta_1) * this.radiusExt, Math.sin(theta_1) * this.radiusExt, 0);
                var cross = this.geoScene.lineCross(pos_1.x, pos_1.y, vertexPoint.position.x, vertexPoint.position.y, circlePointA.position.x, circlePointA.position.y, 2);
                if (cross) {
                    if (posC === null)
                        posC = pos_1;
                    else {
                        var dist_1 = Math.sqrt(Math.pow((posC.x - vertexPoint.position.x), 2) + Math.pow((posC.y - vertexPoint.position.y), 2));
                        var newDist = Math.sqrt(Math.pow((pos_1.x - vertexPoint.position.x), 2) + Math.pow((pos_1.y - vertexPoint.position.y), 2));
                        if (newDist > dist_1)
                            posC = pos_1;
                    }
                }
            }
            if (!(posC.x <= vertexPoint.position.x + 1.5 && posC.x >= vertexPoint.position.x - 1.5))
                circlePointC.position.copy(posC);
            // https://stackoverflow.com/a/15846131 -> achar os pontos tangentes de uma circunferencia dados o centro da circ. e um ponto P
            var dx = -vertexPoint.position.x;
            var dy = -vertexPoint.position.y;
            var dd = Math.sqrt(dx * dx + dy * dy);
            var a = Math.asin((this.radiusExt - 0.5) / dd);
            var b = Math.atan2(dy, dx);
            circlePointB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((this.radiusExt - 0.5) * -Math.sin(b + a), (this.radiusExt - 0.5) * Math.cos(b + a), 0));
            var pts = ["A", "B", "C", "D"];
            pts.forEach(function (element) { _this.reDrawLabel(element); });
        }
        else if (this.dragged === "A") {
            var distance_2 = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance_2; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointA.position.x);
            var y = (distancesRatio * circlePointA.position.y);
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "B") {
            var distance_3 = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2) //distancia entre o ponto zero e V
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance_3; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var position = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((distancesRatio * circlePointB.position.x), (distancesRatio * circlePointB.position.y), 0);
            circlePointB.position.copy(position);
        }
        else if (this.dragged === "C") {
            var distance_4 = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance_4; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointC.position.x);
            var y = (distancesRatio * circlePointC.position.y);
            circlePointC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        else if (this.dragged === "D") {
            var distance_5 = Math.sqrt((Math.pow((circlePointD.position.x), 2) + Math.pow((circlePointD.position.y), 2)));
            var distancesRatio = (this.radiusExt - 0.5) / distance_5; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            var x = (distancesRatio * circlePointD.position.x);
            var y = (distancesRatio * circlePointD.position.y);
            circlePointD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        }
        var theta1 = (1 / 360) * Math.PI;
        var pos = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta1), Math.sin(theta1), 0);
        var theta = 90 * 0.0175;
        //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
        var xrot1 = Math.cos(theta) * (pos.x - circlePointB.position.x) - Math.sin(theta) * (pos.y - circlePointB.position.y) + circlePointB.position.x, yrot1 = Math.sin(theta) * (pos.x - circlePointB.position.x) + Math.cos(theta) * (pos.y - circlePointB.position.y) + circlePointB.position.y, xrot359 = Math.cos(-theta) * (pos.x - circlePointB.position.x) - Math.sin(-theta) * (pos.y - circlePointB.position.y) + circlePointB.position.x, yrot359 = Math.sin(-theta) * (pos.x - circlePointB.position.x) + Math.cos(-theta) * (pos.y - circlePointB.position.y) + circlePointB.position.y;
        var distance1 = Math.sqrt((Math.pow((xrot1 - vertexPoint.position.x), 2) + Math.pow((yrot1 - vertexPoint.position.y), 2)));
        var distance359 = Math.sqrt((Math.pow((xrot359 - vertexPoint.position.x), 2) + Math.pow((yrot359 - vertexPoint.position.y), 2)));
        if (distance1 >= distance359)
            circlePointD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot1, yrot1, 0));
        else
            circlePointD.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot359, yrot359, 0));
        // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
        var a1 = circlePointC.position.y - circlePointA.position.y;
        var b1 = circlePointA.position.x - circlePointC.position.x;
        if (distanceA > distanceC) {
            a1 = circlePointA.position.y - circlePointC.position.y;
            b1 = circlePointC.position.x - circlePointA.position.x;
        }
        var c1 = a1 * (circlePointA.position.x) + b1 * (circlePointA.position.y);
        var a2 = circlePointB.position.y - circlePointD.position.y;
        var b2 = circlePointD.position.x - circlePointB.position.x;
        var c2 = a2 * (circlePointB.position.x) + b2 * (circlePointB.position.y);
        this.determinant = a1 * b2 - a2 * b1;
        if (this.dragged !== "P")
            vertexPoint.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((c1 * b2 - c2 * b1) / this.determinant, (a1 * c2 - a2 * c1) / this.determinant, 0));
        var distance = Math.sqrt((Math.pow((vertexPoint.position.x), 2) + Math.pow((vertexPoint.position.y), 2)));
        if (distance + 0.5 < this.radiusExt)
            this.visible = false;
        else
            this.visible = true;
        this.distanceBetweenPoints();
        var distanceCA = Math.sqrt((Math.pow((circlePointA.position.x - circlePointC.position.x), 2) + Math.pow((circlePointA.position.y - circlePointC.position.y), 2)));
        var distancesRatioCA = (distanceCA + 3) / distanceCA;
        var distanceAC = Math.sqrt((Math.pow((circlePointC.position.x - circlePointA.position.x), 2) + Math.pow((circlePointC.position.y - circlePointA.position.y), 2)));
        var distancesRatioAC = (distanceAC + 3) / distanceAC;
        var distanceVB = Math.sqrt((Math.pow((circlePointB.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointB.position.y - vertexPoint.position.y), 2)));
        var distancesRatioVB = (distanceVB + this.radiusExt) / distanceVB;
        var xCA = (1 - distancesRatioCA) * circlePointC.position.x + distancesRatioCA * circlePointA.position.x, yCA = (1 - distancesRatioCA) * circlePointC.position.y + distancesRatioCA * circlePointA.position.y, xAC = (1 - distancesRatioAC) * circlePointA.position.x + distancesRatioAC * circlePointC.position.x, yAC = (1 - distancesRatioAC) * circlePointA.position.y + distancesRatioAC * circlePointC.position.y, xVB = (1 - distancesRatioVB) * vertexPoint.position.x + distancesRatioVB * circlePointB.position.x, yVB = (1 - distancesRatioVB) * vertexPoint.position.y + distancesRatioVB * circlePointB.position.y;
        var geometryLineVB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineVB.vertices.push(circlePointB.position);
        geometryLineVB.vertices.push(vertexPoint.position);
        var geometryDashedLineVB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryDashedLineVB.vertices.push(circlePointB.position);
        geometryDashedLineVB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xVB, yVB, 0));
        var dashedVB;
        dashedVB = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0xff0000, linewidth: 2, dashSize: 2, gapSize: 2 });
        var geometryLineAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        if (this.dragged !== "P") {
            geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xCA, yCA, 0));
            geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xAC, yAC, 0));
            geometryLineAC.vertices.push(vertexPoint.position);
        }
        else {
            if (distanceA > distanceC) {
                geometryLineAC.vertices.push(vertexPoint.position);
                geometryLineAC.vertices.push(circlePointA.position);
                geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xCA, yCA, 0));
            }
            else if (distanceA < distanceC) {
                geometryLineAC.vertices.push(vertexPoint.position);
                geometryLineAC.vertices.push(circlePointC.position);
                geometryLineAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xAC, yAC, 0));
            }
        }
        var lineVB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineVB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        var lineDashedVB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryDashedLineVB, dashedVB);
        lineDashedVB.computeLineDistances();
        var bdGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        bdGroup.add(lineVB, lineDashedVB);
        lineAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
        lineAC.name = "line-ac";
        lineBD = bdGroup;
        lineBD.name = "line-bd";
        this.geoScene.scene.children[8] = lineAC;
        this.geoScene.scene.children[9] = lineBD;
        var alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var charlie = Math.atan2(circlePointC.position.y, circlePointC.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (charlie < 0)
            charlie += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var AB = alpha - beta, AC = alpha - charlie, BA = beta - alpha, BC = beta - charlie;
        if (AB < 0)
            AB += 360;
        if (AC < 0)
            AC += 360;
        if (BA < 0)
            BA += 360;
        if (BC < 0)
            BC += 360;
        var geometryAB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        var geometryBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        if (AB < AC) {
            if (BC < BA) {
                geometryAB.vertices.push(circlePointA.position);
                geometryAB.vertices.push(circlePointB.position);
                geometryBC.vertices.push(circlePointC.position);
                geometryBC.vertices.push(circlePointB.position);
            }
            else {
                geometryAB.vertices.push(circlePointA.position);
                geometryAB.vertices.push(circlePointB.position);
                geometryBC.vertices.push(circlePointC.position);
                geometryBC.vertices.push(circlePointB.position);
            }
        }
        else if (AB > AC) {
            if (BC < BC) {
                geometryAB.vertices.push(circlePointB.position);
                geometryAB.vertices.push(circlePointA.position);
                geometryBC.vertices.push(circlePointB.position);
                geometryBC.vertices.push(circlePointC.position);
            }
            else {
                geometryAB.vertices.push(circlePointB.position);
                geometryAB.vertices.push(circlePointA.position);
                geometryBC.vertices.push(circlePointB.position);
                geometryBC.vertices.push(circlePointC.position);
            }
        }
        var dashed;
        dashed = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x0000ff, linewidth: 2, dashSize: 2, gapSize: 2 });
        var lineAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAB, dashed);
        lineAD.computeLineDistances();
        var lineBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBC, dashed);
        lineBC.computeLineDistances();
        // Corda 1
        this.geoScene.scene.children[10] = lineAD;
        this.geoScene.scene.children[10].name = "line-ad";
        // Corda 2
        this.geoScene.scene.children[11] = lineBC;
        this.geoScene.scene.children[11].name = "line-bc";
    };
    CfRelacoesMetricasRstComponent.prototype.distanceBetweenPoints = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var distA = Math.sqrt((Math.pow((circlePointA.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointA.position.y - vertexPoint.position.y), 2)));
        var distC = Math.sqrt((Math.pow((circlePointC.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointC.position.y - vertexPoint.position.y), 2)));
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        var distanceA = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2)));
        var distancesRatioA = this.radius / distanceA; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xA = (distancesRatioA * circlePointA.position.x), yA = (distancesRatioA * circlePointA.position.y);
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2)));
        var distancesRatioB = this.radius / distanceB; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xB = (distancesRatioB * circlePointB.position.x), yB = (distancesRatioB * circlePointB.position.y);
        var distanceC = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2)));
        var distancesRatioC = this.radius / distanceC; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
        var xC = (distancesRatioC * circlePointC.position.x), yC = (distancesRatioC * circlePointC.position.y);
        var theta1 = (1 / 360) * Math.PI;
        var pos = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta1), Math.sin(theta1), 0);
        var theta = 90 * 0.0175;
        //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
        var xrot1 = Math.cos(theta) * (pos.x - xB) - Math.sin(theta) * (pos.y - yB) + xB, yrot1 = Math.sin(theta) * (pos.x - xB) + Math.cos(theta) * (pos.y - yB) + yB, xrot359 = Math.cos(-theta) * (pos.x - xB) - Math.sin(-theta) * (pos.y - yB) + xB, yrot359 = Math.sin(-theta) * (pos.x - xB) + Math.cos(-theta) * (pos.y - yB) + yB;
        var distance1 = Math.sqrt((Math.pow((xrot1 - vertexPoint.position.x), 2) + Math.pow((yrot1 - vertexPoint.position.y), 2)));
        var distance359 = Math.sqrt((Math.pow((xrot359 - vertexPoint.position.x), 2) + Math.pow((yrot359 - vertexPoint.position.y), 2)));
        var xD, yD;
        if (distance1 > distance359)
            xD = xrot1, yD = yrot1;
        else
            xD = xrot359, yD = yrot359;
        // achar o ponto de interseccao entre duas linhas https://www.geeksforgeeks.org/program-for-point-of-intersection-of-two-lines/
        var a1 = yC - yA;
        var b1 = xA - xC;
        if (distA > distC) {
            a1 = yA - yC;
            b1 = xC - xA;
        }
        var c1 = a1 * (xA) + b1 * (yA);
        var a2 = yB - yD;
        var b2 = xD - xB;
        var c2 = a2 * (xB) + b2 * (yB);
        var determinant = a1 * b2 - a2 * b1;
        var xV = (c1 * b2 - c2 * b1) / determinant, yV = (a1 * c2 - a2 * c1) / determinant;
        this.distancePA = Math.sqrt((Math.pow((xA - xV), 2) + Math.pow((yA - yV), 2)));
        this.distancePC = Math.sqrt((Math.pow((xC - xV), 2) + Math.pow((yC - yV), 2)));
        this.distancePB = Math.sqrt((this.distancePA * this.distancePC));
    };
    CfRelacoesMetricasRstComponent.prototype.reDrawAngle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var circlePointD = this.geoScene.scene.getObjectByName("ponto-d");
        var vertexPoint = this.geoScene.scene.getObjectByName("ponto-p");
        var angleC, angleCorda, angleCordaCopy, angle, C, B, vertex;
        var distanceA = Math.sqrt((Math.pow((circlePointA.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointA.position.y - vertexPoint.position.y), 2)));
        var distanceB = Math.sqrt((Math.pow((circlePointB.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointB.position.y - vertexPoint.position.y), 2)));
        var distanceC = Math.sqrt((Math.pow((circlePointC.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointC.position.y - vertexPoint.position.y), 2)));
        var distanceD = Math.sqrt((Math.pow((circlePointD.position.x - vertexPoint.position.x), 2) + Math.pow((circlePointD.position.y - vertexPoint.position.y), 2)));
        var a = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertexPoint.position.x - circlePointA.position.x, vertexPoint.position.y - circlePointA.position.y);
        var b = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertexPoint.position.x - circlePointB.position.x, vertexPoint.position.y - circlePointB.position.y);
        var ba = b.x * a.x + b.y * a.y;
        var bMod = Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2));
        var aMod = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
        var cos = ba / (bMod * aMod);
        this.angle = Math.acos(cos) * 180 / Math.PI;
        if (distanceA > distanceC)
            vertex = circlePointA.position;
        else
            vertex = circlePointC.position;
        C = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertex.x - vertexPoint.position.x, vertex.y - vertexPoint.position.y);
        B = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](vertex.x - circlePointB.position.x, vertex.y - circlePointB.position.y);
        var BC = B.x * C.x + B.y * C.y;
        var BMod = Math.sqrt(Math.pow(B.x, 2) + Math.pow(B.y, 2));
        var CMod = Math.sqrt(Math.pow(C.x, 2) + Math.pow(C.y, 2));
        cos = BC / (BMod * CMod);
        angleC = (Math.acos(cos) * 180 / Math.PI) / 2;
        var radiansDA = this.angle * (Math.PI / 180);
        var radiansCorda = angleC * (Math.PI / 180);
        angleCorda = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        angleCordaCopy = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        var geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryAngleCorda = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 });
        var segmentCount = 92, radius = 5;
        if (this.radiusExt < 20)
            radius = 3;
        for (var i = 0; i <= segmentCount; i++) {
            var thetaA = ((i / segmentCount) * radiansDA) - (((segmentCount - i) / segmentCount) * radiansDA);
            var thetaC = ((i / segmentCount) * radiansCorda) - (((segmentCount - i) / segmentCount) * radiansCorda);
            thetaA /= 2;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * radius, -Math.cos(thetaA) * radius, 0));
            geometryAngleCorda.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * radius, -Math.cos(thetaC) * radius, 0));
            if (i == 30 || i == 61) {
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * (radius - 1), -Math.cos(thetaC) * (radius - 1), 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaC) * (radius + 1), -Math.cos(thetaC) * (radius + 1), 0)); // adicionando vertice ao centro do angulo desenhado
                angleCorda.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 })));
                angleCordaCopy.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 })));
            }
            else if (i == 46) { // quando estiver no ponto ao centro do angulo
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * (radius - 1), -Math.cos(thetaA) * (radius - 1), 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(thetaA) * (radius + 1), -Math.cos(thetaA) * (radius + 1), 0)); // adicionando vertice ao centro do angulo desenhado
                angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            }
        }
        var alpha = Math.atan2(circlePointA.position.y - vertexPoint.position.y, circlePointA.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var beta = Math.atan2(circlePointB.position.y - vertexPoint.position.y, circlePointB.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var charlie = Math.atan2(circlePointC.position.y - vertexPoint.position.y, circlePointC.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta A de radianos para graus
        if (charlie < 0)
            charlie += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var delta = Math.atan2(circlePointD.position.y - vertexPoint.position.y, circlePointD.position.x - vertexPoint.position.x) * (180 / Math.PI); // convertendo o angulo da reta B de radianos para graus
        if (delta < 0)
            delta += 360; // caso o angulo seja negativo e o vertice esteja a direita
        var angleModA = (270 - angleC);
        var angleModB = (angleC - 90);
        console.log(this.determinant);
        if (this.determinant > 0) {
            angleModA = -(90 - angleC);
            angleModB = -(angleC - 270);
        }
        var rotationDA = beta * 0.00875 + alpha * 0.00875 + this.angle * 0.0175 + (90 - this.angle) * 0.0175;
        var rotationCordaA = alpha * 0.0175 + angleModA * 0.0175;
        if (distanceA < distanceC)
            rotationCordaA = charlie * 0.0175 + angleModA * 0.0175;
        var rotationCordaB = beta * 0.0175 + angleModB * 0.0175;
        if (!this.geoScene.fromInput) {
            var higher = this.geoScene.scene.children[3].position.y, lower = higher;
            for (var i = 3; i < 6; i++) {
                if (this.geoScene.scene.children[i].position.y > higher)
                    higher = this.geoScene.scene.children[i].position.y;
                if (this.geoScene.scene.children[i].position.y < lower)
                    lower = this.geoScene.scene.children[i].position.y;
            }
            if (vertexPoint.position.x < 0 && vertexPoint.position.y > lower && vertexPoint.position.y < higher) {
                rotationDA += 180 * 0.0175;
            }
        }
        if (rotationDA.toString() !== 'NaN') {
            this.geoScene.scene.children[12] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
            this.geoScene.scene.children[12].rotateZ(rotationDA); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[12].name = "angle";
            this.geoScene.scene.children[18] = angle;
            this.geoScene.scene.children[18].rotateZ(rotationDA); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[19] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleCorda, materialAngle);
            this.geoScene.scene.children[19].rotateZ(rotationCordaA); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[19].name = "angle-corda";
            this.geoScene.scene.children[21] = angleCorda;
            this.geoScene.scene.children[21].rotateZ(rotationCordaA); // rotacionando o alpha para posicao entre as linhas
            this.geoScene.scene.children[20] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleCorda, materialAngle);
            this.geoScene.scene.children[20].rotateZ(rotationCordaB); // rotacionando o angulo para posicao entre as linhas
            this.geoScene.scene.children[20].name = "angle-corda-c";
            this.geoScene.scene.children[22] = angleCordaCopy;
            this.geoScene.scene.children[22].rotateZ(rotationCordaB); // rotacionando o alpha para posicao entre as linhas
            this.angle = Math.round(this.angle);
        }
        else
            this.angle = 0;
        this.geoScene.scene.children[12].position.copy(vertexPoint.position);
        this.geoScene.scene.children[17].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](vertexPoint.position.x, vertexPoint.position.y - 4, 0));
        this.geoScene.scene.children[18].position.copy(vertexPoint.position);
        this.geoScene.scene.children[19].position.copy(vertexPoint.position);
        if (distanceA > distanceC) {
            this.geoScene.scene.children[19].position.copy(circlePointA.position);
            this.geoScene.scene.children[21].position.copy(circlePointA.position);
        }
        else {
            this.geoScene.scene.children[19].position.copy(circlePointC.position);
            this.geoScene.scene.children[21].position.copy(circlePointC.position);
        }
        this.geoScene.scene.children[20].position.copy(circlePointB.position);
        this.geoScene.scene.children[22].position.copy(circlePointB.position);
        if (this.visible) {
            this.geoScene.scene.children[7].visible = true;
            this.geoScene.scene.children[10].visible = true;
            this.geoScene.scene.children[11].visible = true;
            this.geoScene.scene.children[12].visible = true;
            this.geoScene.scene.children[17].visible = true;
            this.geoScene.scene.children[18].visible = true;
            this.geoScene.scene.children[19].visible = true;
            this.geoScene.scene.children[20].visible = true;
            this.geoScene.scene.children[21].visible = true;
            this.geoScene.scene.children[22].visible = true;
        }
        else {
            this.geoScene.scene.children[7].visible = false;
            this.geoScene.scene.children[10].visible = false;
            this.geoScene.scene.children[11].visible = false;
            this.geoScene.scene.children[12].visible = false;
            this.geoScene.scene.children[17].visible = false;
            this.geoScene.scene.children[18].visible = false;
            this.geoScene.scene.children[19].visible = false;
            this.geoScene.scene.children[20].visible = false;
            this.geoScene.scene.children[21].visible = false;
            this.geoScene.scene.children[22].visible = false;
        }
    };
    CfRelacoesMetricasRstComponent.prototype.reDrawLabel = function (label) {
        var circlePointA = this.geoScene.scene.getObjectByName("ponto-a");
        var circlePointB = this.geoScene.scene.getObjectByName("ponto-b");
        var circlePointC = this.geoScene.scene.getObjectByName("ponto-c");
        var labelA = this.geoScene.scene.getObjectByName("label-a");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        var labelC = this.geoScene.scene.getObjectByName("label-c");
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "A") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointA.position.x), 2) + Math.pow((circlePointA.position.y), 2) //distancia entre o ponto zero e A
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointA.position.x, distancesRatio * circlePointA.position.y, 0.6));
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointB.position.x), 2) + Math.pow((circlePointB.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointB.position.x, distancesRatio * circlePointB.position.y, 0.6));
        }
        else if (label === "C") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((circlePointC.position.x), 2) + Math.pow((circlePointC.position.y), 2) //distancia entre o ponto zero e V
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelC.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](distancesRatio * circlePointC.position.x, distancesRatio * circlePointC.position.y, 0.6));
        }
    };
    CfRelacoesMetricasRstComponent.prototype.ngAfterViewInit = function () {
        // ------------------------------ Pontos ------------------------------
        // O
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        // A
        this.geoScene.scene.children[3] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
        this.geoScene.scene.children[3].name = "ponto-a";
        // B
        this.geoScene.scene.children[4] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](21, -21, 0));
        this.geoScene.scene.children[4].name = "ponto-b";
        // C
        this.geoScene.scene.children[5] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[5].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
        this.geoScene.scene.children[5].name = "ponto-c";
        // D
        this.geoScene.scene.children[6] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[6].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-3, -40, 0));
        this.geoScene.scene.children[6].name = "ponto-d";
        this.geoScene.scene.children[6].visible = false;
        // P
        this.geoScene.scene.children[7] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.25, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        this.geoScene.scene.children[7].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
        this.geoScene.scene.children[7].name = "ponto-p";
        // ------------------------------ Linhas ------------------------------
        // Vertices
        var geometryAC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, 22.25, 0));
        geometryAC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
        var geometryBD = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-3, -40, 0));
        geometryBD.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](49, 0, 0));
        var geometryAB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-21, 21, 0));
        geometryAB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](21, -21, 0));
        var geometryDC = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryDC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](29, 6, 0));
        geometryDC.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](21, -21, 0));
        var dashed;
        dashed = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x0000ff, linewidth: 2, dashSize: 2, gapSize: 2 });
        var lineAD = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAB, dashed);
        lineAD.computeLineDistances();
        var lineBC = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryDC, dashed);
        lineBC.computeLineDistances();
        // AC
        this.geoScene.scene.children[8] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAC, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[8].name = "line-ac";
        // BD
        this.geoScene.scene.children[9] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryBD, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000 }));
        this.geoScene.scene.children[9].name = "line-bd";
        // Corda 1
        this.geoScene.scene.children[10] = lineAD;
        this.geoScene.scene.children[10].name = "line-ad";
        // Corda 2
        this.geoScene.scene.children[11] = lineBC;
        this.geoScene.scene.children[11].name = "line-bc";
        // ------------------------- Arcos e Ângulos --------------------------
        var segmentCount = 92, radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), radians = 70 * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        // Ângulo Alpha
        this.geoScene.scene.children[12] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x0000FF, linewidth: 2 }));
        this.geoScene.scene.children[12].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, 0, 0));
        this.geoScene.scene.children[12].rotateZ(-220 * 0.0175);
        this.geoScene.scene.children[12].name = "angle-alpha";
        // ------------------------------ Labels ------------------------------
        // O
        this.geoScene.scene.children[13] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, '0x000000');
        this.geoScene.scene.children[13].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-2.5, -2.5, 0));
        // A
        this.geoScene.scene.children[14] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 5, '0x000000');
        this.geoScene.scene.children[14].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-25, 25, 0));
        this.geoScene.scene.children[14].name = "label-a";
        // B
        this.geoScene.scene.children[15] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, '0x000000');
        this.geoScene.scene.children[15].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, -9, 0));
        this.geoScene.scene.children[15].name = "label-b";
        // C
        this.geoScene.scene.children[16] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('C', 5, '0x000000');
        this.geoScene.scene.children[16].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](33, 9, 0));
        this.geoScene.scene.children[16].name = "label-c";
        // P
        this.geoScene.scene.children[17] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('P', 4, '0x000000');
        this.geoScene.scene.children[17].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](18, -4, 0));
        this.geoScene.scene.children[17].name = "label-p";
        // Alpha
        this.geoScene.scene.children[18] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4, '#FF0000');
        this.geoScene.scene.children[18].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](10, 0, 0));
        this.geoScene.scene.children[18].name = "angle";
        this.reDrawPointsToCircle();
        this.reDrawAngle();
        this.pointsDrawOrder();
        this.geoScene.render();
    };
    CfRelacoesMetricasRstComponent.prototype.reDrawDefault = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        var pts = ["A", "B", "C", "D"];
        for (var i = 0; i < pts.length; i++) {
            this.dragged = pts[i];
            this.reDrawPointsToCircle();
            this.reDrawAngle();
            this.reDrawLabel(this.dragged);
        }
        this.geoScene.render();
    };
    CfRelacoesMetricasRstComponent.prototype.pointsDrawOrder = function () {
        this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 2;
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 3;
        this.geoScene.scene.children[6].renderOrder = this.geoScene.scene.children.length - 4;
        this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 5;
    };
    CfRelacoesMetricasRstComponent.prototype.checkInput = function () {
        if (this.radius >= 1 && this.radius <= 10) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputRadius = false;
            this.reDrawDefault();
        }
        else {
            this.errorInputRadius = true;
            this.showAngle = this.oldAngle;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], CfRelacoesMetricasRstComponent.prototype, "geoScene", void 0);
    CfRelacoesMetricasRstComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cf-relacoes-metricas-rst',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas-rst/cf-relacoes-metricas-rst.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfRelacoesMetricasRstComponent);
    return CfRelacoesMetricasRstComponent;
}());

/** Children order (CTRL+F e ta safe :v)
 * 0 - Circulo Externo (Azul, radiusExt)
 * 1 - Circulo Interno (Branco, radiusInt)
 * 2 - Ponto do Centro (0,0)
 * 3 - Ponto A
 * 4 - Ponto B
 * 5 - Ponto C
 * 6 - Ponto D
 * 7 - Ponto P
 * 8 - Linha AC
 * 9 - Linha BD
 * 10 - Linha Pontilhada AD
 * 11 - Linha Pontilhada BC
 * 12 - Ângulo
 * 13 - Label do Ponto do Centro
 * 14 - Label do Ponto A
 * 15 - Label do Ponto B
 * 16 - Label do Ponto C
 * 17 - Label do Ponto P
 * 18 - Label do Ângulo
 * 19 - Ângulo Corda
 * 20 - Ângulo Corda Espelhado
 * 21 - Label do Ângulo Corda
 * 22 - Label do Ângulo Corda Espelhado
*/


/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas/cf-relacoes-metricas.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 rowMod\">\r\n    <div class=\"container-sm border centerMenu\">\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha uma das relações</h5>\r\n      <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas/cf-relacoes-metricas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n.centerMenu {\n  text-align: center;\n  margin-top: 10rem;\n  margin-left: 17.5rem; }\n.rowMod {\n  display: -webkit-box;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas/cf-relacoes-metricas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfRelacoesMetricasComponent; });
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

var CfRelacoesMetricasComponent = /** @class */ (function () {
    function CfRelacoesMetricasComponent() {
        //Botões
        this.buttons = [
            { title: "Relação entre Cordas", route: "cf_relacoes_metricas_rc" },
            { title: "Relação entre Segmentos Secantes", route: "cf_relacoes_metricas_rs" },
            { title: "Relação entre Segmentos Secante e Tangente", route: "cf_relacoes_metricas_rst" }
        ];
    }
    CfRelacoesMetricasComponent.prototype.ngOnInit = function () {
    };
    CfRelacoesMetricasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cf-relacoes-metricas',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas/cf-relacoes-metricas.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-relacoes-metricas/cf-relacoes-metricas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfRelacoesMetricasComponent);
    return CfRelacoesMetricasComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-sidebar/cf-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"rp-sidebar\">\r\n  <h4 class=\"title\">Circunferência</h4>\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cf_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cf_posicao_relativa']\">\r\n      Posição Relativa\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cf_angulos']\">\r\n      Ângulos e Arcos na Circunferência\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cf_comprimento_circunferencia']\">\r\n      Comprimento da Circunferência\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cf_relacoes_metricas']\">\r\n      Relações Métricas\r\n    </li>\r\n  </ul>\r\n  <h4 class=\"title\">Círculo</h4>\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cl_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cl_area_circ']\">\r\n      Área do Círculo\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cl_area_setor']\">\r\n      Área de um setor circular\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['cl_area_coroa']\">\r\n      Área da coroa circular\r\n    </li>\r\n  </ul>\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-sidebar/cf-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".list-group-item:first-child {\n  border-radius: 0 !important; }\n\n.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #4683B4 !important;\n  border-color: #4683B4 !important; }\n\n#selecionado:hover {\n  color: #fff;\n  background-color: #4683B4; }\n\n.title {\n  color: #505050;\n  background-color: #efefef;\n  margin: 0px;\n  padding: 10px;\n  text-align: center;\n  font-weight: normal;\n  pointer-events: none; }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-sidebar/cf-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfSidebarComponent; });
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

var CfSidebarComponent = /** @class */ (function () {
    function CfSidebarComponent() {
    }
    CfSidebarComponent.prototype.ngOnInit = function () {
    };
    CfSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cf-sidebar',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-sidebar/cf-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cf-sidebar/cf-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfSidebarComponent);
    return CfSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-view/cf-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n  <cf-sidebar class=\"slidebar\"></cf-sidebar>\r\n  <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cf-view/cf-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfViewComponent; });
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

var CfViewComponent = /** @class */ (function () {
    function CfViewComponent() {
    }
    CfViewComponent.prototype.ngOnInit = function () {
    };
    CfViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cf-view/cf-view.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CfViewComponent);
    return CfViewComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-circ/cl-area-circ.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botão para inserir a medida do ângulo-->\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <h3 style=\"margin-top: 10px;\">Área do Círculo</h3>\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n        </p>\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n\r\n      <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n        <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"92\" [color]=\"'rgb(0,0,0)'\"></geo-circunferencemesh>\r\n        <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"92\" [color]=\"'rgb(0, 149, 255)'\">\r\n        </geo-circunferencemesh>\r\n      </geo-scene>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>Propriedades:</h4>\r\n    <p>\r\n      Podemos determinar a medida aproximada da área de um círculo de centro O e raio r por:\r\n    </p>\r\n\r\n    <p class=\"text-center\">\r\n      <ng-katex equation=\"A = \\pi r^2\"></ng-katex>\r\n    </p>\r\n\r\n    <p>\r\n      Exemplo:\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"A = \\pi \\cdot {{ radius }}^2 \"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"A = {{ radius * radius }} \\ \\pi \\ u.a. \"></ng-katex>\r\n    </p>\r\n    <p>\r\n      Ou, utilizando a aproximação: <ng-katex equation=\"\\pi = 3,14\"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"A = {{ radius }}^2 \\cdot 3,14 \"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"A = {{ (radius * radius) * 3.14 | number:'':'pt' }} \\ u.a. \"></ng-katex>\r\n    </p>\r\n\r\n  </div>\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-circ/cl-area-circ.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-circ/cl-area-circ.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClAreaCircComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClAreaCircComponent = /** @class */ (function () {
    function ClAreaCircComponent() {
        this.radius = 9;
        this.radiusExt = 30; // Raio do círculo exterior
        this.radiusInt = 29; // Raio do círculo interior
        // Botões
        this.buttons = [{
                title: "O número pi",
                route: "cf_numero_pi"
            },
            {
                title: "Comprimento da Circunferência",
                route: "cf_comprimento_circunferencia"
            },
        ];
        this.equacao = "C = 2 \\cdot 3,14 \\cdot \\color{red}{" + this.radius + "}";
        this.resultado = "C = " + 2 * 3.14 * this.radius;
    }
    ClAreaCircComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    ClAreaCircComponent.prototype.makeElements = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material));
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xe1eef7
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo));
        // Adicionando ponto central do círculo
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        }));
        centerPoint.position.z = 0.6;
        var labelCenterPoint = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 5, '#000');
        labelCenterPoint.position.x = -3;
        labelCenterPoint.position.y = -3;
        // Adicionando representação da medida do raio
        var radiusGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.5), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.radiusInt, 0.5));
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0xff0000,
            linewidth: 2
        }));
        line.renderOrder = 0;
        // Adicionando label do raio da circunferência
        var radiusLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r', 5, 'red');
        radiusLabel.position.x = 4;
        radiusLabel.position.y = this.radiusInt / 2;
        if (this.radiusExt < 9)
            radiusLabel.position.y = this.radiusExt + 2;
        this.geoScene.scene.add(line);
        this.geoScene.scene.add(centerPoint);
        this.geoScene.scene.add(labelCenterPoint);
        this.geoScene.scene.add(radiusLabel);
        this.geoScene.render();
    };
    ClAreaCircComponent.prototype.ngAfterViewInit = function () {
        this.makeElements();
    };
    ClAreaCircComponent.prototype.alterCircunferenceRadius = function () {
        // Remove todos os elementos da cena
        this.geoScene.removeAll();
        // Gera os elementos da cena com os novos valores
        this.makeElements();
    };
    ClAreaCircComponent.prototype.checkInput = function () {
        if (this.radius >= 1 && this.radius <= 10) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.equacao = "C = 2 \\cdot 3,14 \\cdot \\color{red}{" + this.radius + "}";
            this.resultado = "C = " + 2 * 3.14 * this.radius;
            this.errorInputRadius = false;
            this.alterCircunferenceRadius();
        }
        else
            this.errorInputRadius = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], ClAreaCircComponent.prototype, "geoScene", void 0);
    ClAreaCircComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cl-area-circ',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-circ/cl-area-circ.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-circ/cl-area-circ.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClAreaCircComponent);
    return ClAreaCircComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-coroa/cl-area-coroa.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botão para inserir a medida do ângulo-->\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <h3 style=\"margin-top: 10px;\">Área de uma coroa circular</h3>\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida do raio maior (<ng-katex equation=\"\\color{blue}{R}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('max')\" max=\"10\" min=\"2\" />\r\n        </p>\r\n        <p class=\"text-center\">\r\n          Entre com a medida do raio menor (<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radiusMn\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('min')\" max=\"9\" min=\"1\" />\r\n        </p>\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          Os raios devem ser valores inteiros diferentes, contidos entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n\r\n      <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n        <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"92\" [color]=\"'rgb(0,0,0)'\"></geo-circunferencemesh>\r\n        <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"92\" [color]=\"'rgb(0, 149, 255)'\">\r\n        </geo-circunferencemesh>\r\n      </geo-scene>\r\n    </div>\r\n  </div>\r\n      \r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>Propriedades:</h4>\r\n\r\n    <p style=\"text-align: justify;\">\r\n      Chamamos de coroa circular a região compreendida entre duas circunferências concêntricas (que possuam o mesmo\r\n      centro O), que estão em um mesmo plano e com raios de medidas diferentes.\r\n      A área da coroa circular (A) é dada pela diferença entre a área do círculo de raio maior (<ng-katex\r\n        equation=\"A_R\"></ng-katex>) e a área do círculo\r\n      de raio menor (<ng-katex equation=\"A_r\"></ng-katex>).\r\n      Assim, a área de uma coroa circular é dada por:\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex equation=\"A = A_R - A_r\"></ng-katex>\r\n    </p>\r\n    <p>\r\n      ou ainda:\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex equation=\"A = \\pi R^2 - \\pi r^2\"></ng-katex>\r\n    </p>\r\n\r\n    <!-- Calculos -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\"\r\n              aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n              Cálculo: <ng-katex class=\"explicacao\"\r\n                equation=\"A = {{ (radius * radius) - (radiusMn * radiusMn) }} \\ \\pi \\ u.a. \">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapsePrincipal\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapsePrincipal\" class=\"collapse\" aria-labelledby=\"headingPrincipal\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = \\pi \\cdot {{radius}}^2 - \\pi \\cdot {{radiusMn}}^2 } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituindo os dados na fórmula.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = \\pi \\cdot {{radius * radius}} - \\pi \\cdot {{radiusMn * radiusMn}} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resolvendo a potências.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = {{ (radius * radius) - (radiusMn * radiusMn) }} \\ \\pi \\ u.a. }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <p>\r\n      Ou, utilizando a aproximação: <ng-katex equation=\"\\pi = 3,14\"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"A = {{ (radius * radius) - (radiusMn * radiusMn) }} \\cdot 3,14\"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"A = {{ ( (radius * radius) - (radiusMn * radiusMn) ) * 3.14 | number:'':'pt' }} \\ u.a.\"></ng-katex>\r\n    </p>\r\n\r\n  </div>\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-coroa/cl-area-coroa.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-coroa/cl-area-coroa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClAreaCoroaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClAreaCoroaComponent = /** @class */ (function () {
    function ClAreaCoroaComponent() {
        this.radius = 9;
        this.radiusMn = 2;
        this.radiusExt = 30; // Raio do círculo exterior
        this.radiusInt = 29; // Raio do círculo interior
        this.radiusMin = 12.5; // Raio do círculo interior
        this.radiusMint = 11.5; // Raio do círculo interior
        // Botões
        this.buttons = [{
                title: "O número pi",
                route: "cf_numero_pi"
            },
            {
                title: "Comprimento da Circunferência",
                route: "cf_comprimento_circunferencia"
            },
        ];
        this.equacao = "C = 2 \\cdot 3,14 \\cdot \\color{red}{" + this.radius + "}";
        this.resultado = "C = " + 2 * 3.14 * this.radius;
    }
    ClAreaCoroaComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    ClAreaCoroaComponent.prototype.makeElements = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material));
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xe1eef7
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo));
        var materialThree = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        });
        var circleGeometryThree = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusMin, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryThree, materialThree));
        var materialFour = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryFour = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusMint, 92);
        this.geoScene.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryFour, materialFour));
        // Adicionando ponto central do círculo
        var centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0x4683B4
        }));
        centerPoint.position.z = 0.6;
        var labelCenterPoint = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 5, '#000');
        labelCenterPoint.position.x = -3;
        labelCenterPoint.position.y = -3;
        // Adicionando representação da medida do raio
        var radiusMnGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusMnGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.5), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.radiusMint, 0.5));
        var lineMn = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusMnGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0xff0000,
            linewidth: 2
        }));
        lineMn.renderOrder = 0;
        // Adicionando label do raio da circunferência
        var radiusMnLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('r', 5, 'red');
        radiusMnLabel.position.x = 4;
        radiusMnLabel.position.y = this.radiusMint / 2;
        var radiusGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        radiusGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.5), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.radiusInt, 0, 0.5));
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](radiusGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({
            color: 0x009423,
            linewidth: 2
        }));
        line.renderOrder = 0;
        // Adicionando label do raio da circunferência
        var radiusLabel = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('R', 5, '#009423');
        radiusLabel.position.x = this.radiusInt / 2;
        radiusLabel.position.y = -4;
        this.geoScene.scene.add(line);
        this.geoScene.scene.add(lineMn);
        this.geoScene.scene.add(centerPoint);
        this.geoScene.scene.add(labelCenterPoint);
        this.geoScene.scene.add(radiusLabel);
        this.geoScene.scene.add(radiusMnLabel);
        this.geoScene.render();
    };
    ClAreaCoroaComponent.prototype.ngAfterViewInit = function () {
        this.makeElements();
    };
    ClAreaCoroaComponent.prototype.alterCircunferenceRadius = function () {
        // Remove todos os elementos da cena
        this.geoScene.removeAll();
        // Gera os elementos da cena com os novos valores
        this.makeElements();
    };
    ClAreaCoroaComponent.prototype.checkInput = function (input) {
        var conditionMin = this.radiusMn >= 1 && this.radiusMn <= 9;
        var conditionMax = this.radius >= 2 && this.radius <= 10;
        if (conditionMax && conditionMin) {
            if (!(this.radius > this.radiusMn)) {
                if (input === 'min')
                    this.radius += 1;
                if (input === 'max')
                    this.radiusMn -= 1;
            }
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.radiusMin = this.radiusMn * 2.5 + 7.5;
            this.radiusMint = this.radiusMin - 1;
            this.equacao = "C = 2 \\cdot 3,14 \\cdot \\color{red}{" + this.radius + "}";
            this.resultado = "C = " + 2 * 3.14 * this.radius;
            this.errorInputRadius = false;
            this.alterCircunferenceRadius();
        }
        else
            this.errorInputRadius = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], ClAreaCoroaComponent.prototype, "geoScene", void 0);
    ClAreaCoroaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cl-area-coroa',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-coroa/cl-area-coroa.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-coroa/cl-area-coroa.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClAreaCoroaComponent);
    return ClAreaCoroaComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-setor/cl-area-setor.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <h3 style=\"margin-top: 10px;\">Área de um setor circular</h3>\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\" style=\"margin-right: 100px;\">\r\n          Entre com a medida do raio(<ng-katex equation=\"\\color{red}{r}\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"radius\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n          <label>e do ângulo (<i><b> α </b></i>):</label>\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angle\"\r\n            oninput=\"this.value = Math.round(Math.abs(this.value));\" (ngModelChange)=\"checkInput()\" max=\"360\" min=\"0\"\r\n            style=\"position: absolute; margin-left: 5px;\" />\r\n          <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\"\r\n            id=\"degree\">°</span>\r\n        </p>\r\n\r\n        <div [className]=\"errorInputRadius === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O raio deve ser um valor inteiro contido entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n        <div [className]=\"errorInputAngle === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O ângulo deve ser um valor contido entre <b>0°</b> e <b>360°</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n      <geo-circunferencemesh [radius]=\"radiusExt\" [segmentCount]=\"90\" [color]=\"'rgb(70,131,180)'\">\r\n      </geo-circunferencemesh>\r\n      <geo-circunferencemesh [radius]=\"radiusInt\" [segmentCount]=\"90\" [color]=\"'rgb(255,255,255)'\">\r\n      </geo-circunferencemesh>\r\n    </geo-scene>\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>Propriedades:</h4>\r\n\r\n    <p>\r\n      A área de um setor circular de raio r e ângulo central de medida alpha, em grau, é dada por:\r\n    </p>\r\n    <p class=\"text-center\">\r\n      <ng-katex style=\"font-size: 25px;\" equation=\"A = \\frac{\\alpha \\cdot \\pi \\cdot r^2}{360 \\degree}\"></ng-katex>\r\n    </p>\r\n\r\n    <!-- Calculos -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsePrincipal\"\r\n              aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n              Cálculo: <ng-katex class=\"explicacao\"\r\n                equation=\"A = {{ angle * (radius * radius) / 360 | number:'':'pt' }} \\ \\pi \\ u.a. \">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapsePrincipal\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapsePrincipal\" class=\"collapse\" aria-labelledby=\"headingPrincipal\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = \\frac{ {{ angle }} \\degree \\cdot \\pi \\cdot {{ radius }}^2 }{360 \\degree} } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituindo os dados na fórmula.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = \\frac{ {{ angle }} \\degree \\cdot \\pi \\cdot {{ radius * radius }} }{360 \\degree} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resolvendo a potência.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ A = {{ angle * (radius * radius) / 360 | number:'':'pt' }} \\ \\pi \\ u.a. }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final. Após realizar as multiplicações e divisões.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <p>\r\n      Ou, utilizando a aproximação: <ng-katex equation=\"\\pi = 3,14\"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"A = {{ angle * (radius * radius) / 360 | number:'':'pt' }} \\cdot 3,14 \"></ng-katex>\r\n    </p>\r\n    <p>\r\n      <ng-katex equation=\"A = {{ (angle * (radius * radius) / 360) * 3.14 | number:'':'pt' }} \\ u.a. \"></ng-katex>\r\n    </p>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-setor/cl-area-setor.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-area-setor/cl-area-setor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClAreaSetorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__ = __webpack_require__("./src/app/views/geometria/shared/components/geo-scene/geo-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_spritetext__ = __webpack_require__("./node_modules/three-spritetext/dist/three-spritetext.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClAreaSetorComponent = /** @class */ (function () {
    function ClAreaSetorComponent() {
        this.errorInputAngle = false;
        this.errorInputRadius = false;
        this.dragging = false; // Variável para controle do drag
        this.dragged = ""; // Variavel para controle de qual objeto foi arrastado
        this.currentIndex = []; // Geometria da cena a qual irá se mover
        // Raycaster da página, utilizado para o "clicar e arrastar"
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        // Linha B da circunferência
        // private lineB;
        // Variável que armazena o ângulo entre as duas retas
        this.angle = 90;
        this.oldAngle = this.angle;
        this.showAngle = this.angle;
        // Propriedades da circunferência principal
        this.radius = 9;
        this.radiusExt = 30; // Circunferência que forma a linha
        this.radiusInt = 29; // Circunferência queserá a "parte de dentro"
        // Cores das linhas
        this.red = 0xFF0000;
        this.blue = 0x4683B4;
        this.black = 0x000000;
        //botões para outros componentes
        this.buttons = [
            { title: "Ângulo Central", route: "cf_angulo_central" },
            { title: "Ângulo Inscrito", route: "cf_angulo_inscrito" },
            { title: "Arco Capaz", route: "cf_angulo_capaz" },
            { title: "Ângulo de Segmento", route: "cf_angulo_segmento" },
            { title: "Ângulo Excêntrico", route: "cf_angulo_nao_pertence" }
        ];
    }
    ClAreaSetorComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    ClAreaSetorComponent.prototype.ngDoCheck = function () {
        if (this.angle >= 0 && this.angle <= 360) {
            this.showAngle = this.angle;
            this.oldAngle = this.angle;
        }
        this.geoScene.addDegreeSymbol(this.angle, 'degree');
    };
    /**
    * Captura o evento de mouse down na cena
    * @param event evento do mouse
    */
    ClAreaSetorComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    ClAreaSetorComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    ClAreaSetorComponent.prototype.reDrawPointsToCircle = function () {
        var centerPoint = this.geoScene.scene.getObjectByName("circunference-center");
        var circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-two");
        var lineA = this.geoScene.scene.getObjectByName("line-a");
        var lineB = this.geoScene.scene.getObjectByName("line-b");
        this.geoScene.scene.remove(lineA);
        this.geoScene.scene.remove(lineB);
        this.geoScene.scene.remove(centerPoint);
        //formula usada para achar a posicao do ponto https://math.stackexchange.com/a/1630886
        if (this.dragged === "A") {
            var distance = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e A
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((distancesRatio * circlePointA.position.x), (distancesRatio * circlePointA.position.y), 0));
        }
        else if (this.dragged === "B") {
            var distance = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
            ));
            var distancesRatio = (this.radiusExt - 0.5) / distance; //razao entre a distancia total e o raio da circunferencia (no caso, o raio seria a 'dt' na formula do link acima)
            circlePointB.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((distancesRatio * circlePointB.position.x), (distancesRatio * circlePointB.position.y), 0));
        }
        var distanceA = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioA = (distanceA + 3) / distanceA;
        var distanceB = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioB = (distanceB + 3) / distanceB;
        var xA = distancesRatioA * circlePointA.position.x, yA = distancesRatioA * circlePointA.position.y;
        var xB = distancesRatioB * circlePointB.position.x, yB = distancesRatioB * circlePointB.position.y;
        var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xA, yA, 0.6));
        lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }));
        lineA.name = "line-a";
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
        lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }));
        lineB.name = "line-b";
        this.geoScene.scene.add(centerPoint);
        this.geoScene.scene.add(lineA);
        this.geoScene.scene.add(lineB);
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[7].renderOrder = this.geoScene.scene.children.length - 2;
    };
    ClAreaSetorComponent.prototype.reDrawLabel = function (label) {
        var circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-two");
        var labelA = this.geoScene.scene.getObjectByName("label-a");
        var labelB = this.geoScene.scene.getObjectByName("label-b");
        this.geoScene.scene.remove(labelA);
        this.geoScene.scene.remove(labelB);
        var distancesRatio = (this.radiusExt + 5) / this.radiusExt;
        if (label === "A") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e A
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelA.position.x = (distancesRatio * circlePointA.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
            labelA.position.y = (distancesRatio * circlePointA.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
        }
        else if (label === "B") {
            if (this.dragging) {
                var distance = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
                ));
                distancesRatio = (distance + 5) / distance; // razao entre a distacia total mais 5 e a distancia total
            }
            labelB.position.x = (distancesRatio * circlePointB.position.x); // posicao do x na linha quando a distancia for o valor do raio + 5
            labelB.position.y = (distancesRatio * circlePointB.position.y); // posicao do y na linha quando a distancia for o valor do raio + 5
        }
        this.geoScene.scene.add(labelA);
        this.geoScene.scene.add(labelB);
    };
    ClAreaSetorComponent.prototype.reDrawAngle = function () {
        var circlePointA = this.geoScene.scene.getObjectByName("circunference-one");
        var circlePointB = this.geoScene.scene.getObjectByName("circunference-two");
        // descobrindo o angulo entre as duas linhas (tirando a diferenca entre cada um em relacao a 0 graus) https://math.stackexchange.com/a/94598
        var alpha = Math.atan2(circlePointA.position.y, circlePointA.position.x) * (180 / Math.PI); // convertendo a angulo da reta A de radianos para graus
        if (alpha < 0)
            alpha += 360; // caso o angulo seja negativo
        var beta = Math.atan2(circlePointB.position.y, circlePointB.position.x) * (180 / Math.PI); // convertendo a angulo da reta B de radianos para graus
        if (beta < 0)
            beta += 360; // caso o angulo seja negativo
        this.angle = alpha - beta; //tirando a diferenca dos dois, temos o angulo entre A e B
        if (this.angle < 0)
            this.angle += 360; // caso o angulo seja negativo
        this.paintSlice(alpha);
        var ang = this.geoScene.scene.getObjectByName("angle");
        var arc = this.geoScene.scene.getObjectByName("arc");
        var alphaGroup = this.geoScene.scene.getObjectByName("alpha");
        this.geoScene.scene.remove(ang, arc, alphaGroup);
        alphaGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        alphaGroup.name = "alpha";
        // Criando nova presentação para o angulo
        var segmentCount = Math.round(this.angle * 2), radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }), radians = this.angle * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
            if (i == Math.round(this.angle)) {
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0));
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (radius + 2.25), Math.cos(theta) * (radius + 2.25), 0));
                var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
                line.visible = false;
                var alpha_1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '0x000000');
                alpha_1.position.copy(geometryLine.vertices[1]);
                alphaGroup.add(line);
                alphaGroup.add(alpha_1);
            }
        }
        // rotacionar 1 grau -> 0.0175
        var rotation = (alpha - 90) * 0.0175; // o angulo comeca a ser desenhado nos 90 graus e sempre sai do ponto A
        ang = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        ang.position.x = 0;
        ang.rotateZ(rotation);
        ang.name = "angle";
        arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
        arc.position.x = 0;
        arc.rotateZ(rotation);
        arc.name = "arc";
        alphaGroup.position.copy(ang.position);
        alphaGroup.rotateZ(rotation);
        this.geoScene.scene.add(ang, arc, alphaGroup);
        this.angle = Math.round(this.angle);
    };
    ClAreaSetorComponent.prototype.paintSlice = function (rotation) {
        this.geoScene.scene.remove(this.geoScene.scene.getObjectByName('slice'));
        var segmentCount = Math.round(this.angle * 3), radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xe1eef7, linewidth: 2 }), radians = this.angle * (Math.PI) / 180;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * radians;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, Math.cos(theta) * radius, 0.6));
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt), Math.cos(theta) * (this.radiusInt), 0.6));
        }
        materialArc.depthTest = false;
        var slice = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
        slice.position.x = 0;
        slice.rotateZ((rotation - 90) * 0.0175);
        slice.name = "slice";
        this.geoScene.scene.add(slice);
    };
    /**
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
    ClAreaSetorComponent.prototype.mouseMove = function (event) {
        var _this = this;
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // verifica se o clique foi na circunferencia um (A) ou dois (B) e copia a posição do mouse para elas
            this.insersects.forEach(function (el) {
                if (el.object.name == "circunference-one" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (el.object.name == "circunference-two" && _this.currentIndex.length < 2) {
                    el.object.position.copy(_this.mousePos);
                }
                else if (_this.currentIndex.length === 2) {
                    el = _this.currentIndex[0];
                    el.object.position.copy(_this.mousePos);
                }
            });
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "circunference-one") {
                this.dragged = "A";
            }
            else if (this.currentIndex[0].object.name == "circunference-two") {
                this.dragged = "B";
            }
            this.reDrawPointsToCircle();
            this.reDrawLabel(this.dragged);
            this.reDrawAngle();
            this.geoScene.scene.getObjectByName('circunference-center').renderOrder = this.geoScene.scene.children.length - 3;
            this.geoScene.scene.getObjectByName('line-a').renderOrder = this.geoScene.scene.children.length - 4;
            this.geoScene.scene.getObjectByName('line-b').renderOrder = this.geoScene.scene.children.length - 5;
            this.geoScene.render();
        }
    };
    ClAreaSetorComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        var arr = [];
        this.insersects.forEach(function (el) {
            if (el.object.name == "circunference-one" || el.object.name == "circunference-two") {
                arr.push(el);
                _this.currentIndex = arr;
                console.log(arr);
                return;
            }
        });
    };
    ClAreaSetorComponent.prototype.setRaycaster = function (event) {
        event.preventDefault();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.offsetX / this.geoScene.canvas.clientWidth) * 2 - 1;
        mouse.y = -(event.offsetY / this.geoScene.canvas.clientHeight) * 2 + 1;
        var vector = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](mouse.x, mouse.y, 0.8);
        vector.unproject(this.geoScene.getCamera());
        var direction = vector.sub(this.geoScene.getCamera().position).normalize();
        var distance = -this.geoScene.getCamera().position.z / direction.z;
        var pos = this.geoScene.getCamera().position.clone().add(direction.multiplyScalar(distance));
        this.mousePos = pos;
        this.raycaster.setFromCamera(mouse, this.geoScene.getCamera());
    };
    ClAreaSetorComponent.prototype.changeAngle = function () {
        var lineA = this.geoScene.scene.getObjectByName("line-a");
        var lineB = this.geoScene.scene.getObjectByName("line-b");
        this.geoScene.scene.remove(lineA);
        this.geoScene.scene.remove(lineB);
        //Reseta a reta e ponto A
        this.geoScene.scene.getObjectByName("circunference-one").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.radiusExt - 0.5, 0.5));
        // Calcula o valor em radianos do angulo
        var radians = this.angle * (Math.PI) / 180;
        // Calcula o Y e X do ponto B
        var y = Math.cos(radians) * (this.radiusExt - 0.5), x = Math.sin(radians) * (this.radiusExt - 0.5);
        // Atualiza o ponto B
        this.geoScene.scene.getObjectByName("circunference-two").position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0.5));
        var distanceA = Math.sqrt((Math.pow((this.centerPointOne.position.x), 2) + Math.pow((this.centerPointOne.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioA = (distanceA + 3) / distanceA;
        var distanceB = Math.sqrt((Math.pow((this.centerPointTwo.position.x), 2) + Math.pow((this.centerPointTwo.position.y), 2) //distancia entre o ponto zero e B
        ));
        var distancesRatioB = (distanceB + 3) / distanceB;
        var xA = distancesRatioA * this.centerPointOne.position.x, yA = distancesRatioA * this.centerPointOne.position.y;
        var xB = distancesRatioB * x, yB = distancesRatioB * y;
        var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xA, yA, 0.6));
        lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }));
        lineA.name = "line-a";
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.centerPoint.position.x, this.centerPoint.position.y, 0.6));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xB, yB, 0.6));
        lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 }));
        lineB.name = "line-b";
        this.reDrawAngle();
        this.showAngle = this.angle;
        this.oldAngle = this.angle;
        // resetando as labels
        var lbls = ["A", "B"];
        for (var i = 0; i < lbls.length; i++)
            this.reDrawLabel(lbls[i]);
        this.geoScene.scene.add(lineA, lineB);
        this.geoScene.scene.getObjectByName('circunference-center').renderOrder = this.geoScene.scene.children.length - 3;
        this.geoScene.scene.getObjectByName('line-a').renderOrder = this.geoScene.scene.children.length - 4;
        this.geoScene.scene.getObjectByName('line-b').renderOrder = this.geoScene.scene.children.length - 5;
        this.geoScene.render();
    };
    ClAreaSetorComponent.prototype.ngAfterViewInit = function () {
        this.paintSlice(90);
        // --------------  Ponto do centro --------------
        this.centerPoint = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blue }));
        this.centerPoint.position.x = 0;
        this.centerPoint.position.y = 0;
        this.centerPoint.name = "circunference-center";
        // Label do ponto central
        var labelCenterPoint = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('O', 4, this.black);
        labelCenterPoint.position.x = -2;
        labelCenterPoint.position.y = -2;
        //  -------------- Linha (A) --------------
        var geometryLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.1));
        geometryLineA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 32.5, 0.1));
        var materialLineA = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 });
        var lineA = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineA, materialLineA);
        lineA.name = "line-a";
        // Label da linha A
        var labelLineA = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('A', 5, this.black);
        labelLineA.position.x = 0;
        labelLineA.position.y = 34;
        labelLineA.name = "label-a";
        // Ponto da linha A
        this.centerPointOne = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.red }));
        this.centerPointOne.position.x = 0;
        this.centerPointOne.position.y = 29.5;
        this.centerPointOne.name = "circunference-one";
        // --------------  Linha (B) --------------
        var geometryLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0.1));
        geometryLineB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](32.5, 0, 0.1));
        var materialLineB = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 });
        var lineB = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLineB, materialLineB);
        lineB.name = "line-b";
        // Label da linha B
        var labelLineB = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 5, this.black);
        labelLineB.position.x = 34;
        labelLineB.position.y = 0;
        labelLineB.name = "label-b";
        // Ponto da linha B
        this.centerPointTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1.5, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.red }));
        this.centerPointTwo.position.x = 29.5;
        this.centerPointTwo.position.y = 0;
        this.centerPointTwo.name = "circunference-two";
        // -------------- Ângulo --------------
        var segmentCount = Math.round(this.angle * 2), radius = 5, geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.black, linewidth: 2 }), geometryArc = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), materialArc = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: this.red, linewidth: 2 });
        for (var i = 0; i <= segmentCount; i++) {
            var theta = (i / segmentCount) * Math.PI / 4 * 2;
            geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
            geometryArc.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt - 0.2), Math.cos(theta) * (this.radiusInt - 0.2), 0.6), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (this.radiusInt + 0.8), Math.cos(theta) * (this.radiusInt + 0.8), 0.6));
        }
        var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, materialAngle);
        angle.position.x = 0;
        angle.name = "angle";
        var arc = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryArc, materialArc);
        arc.position.x = 0;
        arc.name = "arc";
        var alpha = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', 4.5, '0x000000');
        alpha.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](5.2, 5.2, 0));
        alpha.name = "alpha";
        // Adiciona os objetos na cena
        this.geoScene.scene.add(this.centerPoint, // 2
        labelCenterPoint, // 3
        labelLineA, // 4
        this.centerPointOne, // 5
        labelLineB, // 6
        this.centerPointTwo, // 7
        angle, // 8
        arc, // 9
        alpha, // 10
        lineA, // 11
        lineB // 12
        );
        // Chamando o render da cena
        this.geoScene.render();
    };
    ClAreaSetorComponent.prototype.reDrawDefault = function () {
        // Adicionando novas circunferências na cena
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: this.blue
        });
        var circleGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusExt, 90);
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometry, material);
        var materialTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({
            color: 0xffffff
        });
        var circleGeometryTwo = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](this.radiusInt, 90);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](circleGeometryTwo, materialTwo);
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](1, 30), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: this.blue }));
        this.reDrawPointsToCircle();
        this.changeAngle();
    };
    ClAreaSetorComponent.prototype.checkInput = function () {
        var checkRadius = (this.radius >= 1 && this.radius <= 10);
        var checkAngle = (this.angle > -1 && this.angle < 361);
        if (checkRadius && checkAngle) {
            this.radiusExt = this.radius * 2.5 + 7.5;
            this.radiusInt = this.radiusExt - 1;
            this.errorInputAngle = false;
            this.errorInputRadius = false;
            this.reDrawDefault();
        }
        else {
            if (!checkRadius)
                this.errorInputRadius = true;
            else
                this.errorInputRadius = false;
            if (!checkAngle)
                this.errorInputAngle = true;
            else
                this.errorInputAngle = false;
            this.showAngle = this.oldAngle;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], ClAreaSetorComponent.prototype, "geoScene", void 0);
    ClAreaSetorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cl-area-setor',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-setor/cl-area-setor.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cl-area-setor/cl-area-setor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClAreaSetorComponent);
    return ClAreaSetorComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-definicao/cl-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n  <!-- Circunferência -->\r\n  <div class=\"row definition__group mt-4\">\r\n    <div class=\"col-12\">\r\n      <h3>Círculo</h3>\r\n      <p class=\"p-justify\">\r\n        Definição de círculo: \"Círculo é a união de uma circunferência com todos os pontos internos a ela.”\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <img src=\"../../../../../../assets/images/geometria/cincunferencia/circulo1.svg\" alt=\"\" width=\"400px\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" style=\"margin-top: 30px; margin-bottom: 50px;\" />\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <p class=\"p-justify\">\r\n        Para o círculo valem todas as propriedades de raio, diâmetro e cordas de uma circunferência. <br>\r\n        Além dessas propriedades, os círculos são divididos em dois conjuntos de pontos iguais, chamados de <strong><i>semicírculos</i></strong>, por um diâmetro qualquer.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <img src=\"../../../../../../assets/images/geometria/cincunferencia/circulo2.svg\" alt=\"\" width=\"400px\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" style=\"margin-top: 30px; margin-bottom: 50px;\" />\r\n    </div>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-definicao/cl-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/cl-definicao/cl-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClDefinicaoComponent; });
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

var ClDefinicaoComponent = /** @class */ (function () {
    function ClDefinicaoComponent() {
    }
    ClDefinicaoComponent.prototype.ngOnInit = function () {
    };
    ClDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-cl-definicao',
            template: __webpack_require__("./src/app/views/geometria/circunferencias/components/cl-definicao/cl-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/circunferencias/components/cl-definicao/cl-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClDefinicaoComponent);
    return ClDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/circunferencias/components/pipes/no-thousand-dots.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoThousandDotsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoThousandDotsPipe = /** @class */ (function () {
    function NoThousandDotsPipe() {
    }
    NoThousandDotsPipe.prototype.transform = function (value, args) {
        if (value) {
            return value.replace('.', '');
        }
        return '';
    };
    NoThousandDotsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'noThousandDots'
        })
    ], NoThousandDotsPipe);
    return NoThousandDotsPipe;
}());



/***/ })

});
//# sourceMappingURL=circunferencias.module.chunk.js.map