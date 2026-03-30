webpackJsonp(["trigonometria.module"],{

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">\r\n                <h3>Descobre o ângulo central de um arco</h3>\r\n            </span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_TR_medida_angulo_excentrico_externo.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g1</span>\r\n                    <input type=\"text\" name=\"graus\" formControlName=\"graus\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g2</span>\r\n                    <input type=\"text\" name=\"grausAux\" formControlName=\"grausAux\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriAnguloExcentricoExternoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriAnguloExcentricoExternoComponent = /** @class */ (function () {
    function TriAnguloExcentricoExternoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            graus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            grausAux: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriAnguloExcentricoExternoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriAnguloExcentricoExternoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postAnguloExcentricoExterno(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriAnguloExcentricoExternoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriAnguloExcentricoExternoComponent);
    return TriAnguloExcentricoExternoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">\r\n                <h3>Descobre o ângulo excentrico interno de um arco</h3>\r\n            </span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_TR_medida_angulo_excentrico_interno.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g1</span>\r\n                    <input type=\"text\" name=\"graus\" formControlName=\"graus\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g2</span>\r\n                    <input type=\"text\" name=\"grausAux\" formControlName=\"grausAux\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriAnguloExcentricoInternoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriAnguloExcentricoInternoComponent = /** @class */ (function () {
    function TriAnguloExcentricoInternoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            graus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            grausAux: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriAnguloExcentricoInternoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriAnguloExcentricoInternoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postAnguloExcentricoInterno(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriAnguloExcentricoInternoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriAnguloExcentricoInternoComponent);
    return TriAnguloExcentricoInternoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-ponteiros/tri-angulo-ponteiros.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">\r\n                <h3>Calcula o ângulo entre os ponteiros de um relógio</h3>\r\n            </span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <p  class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\">\r\n                    Onde, <br>\r\n                    h = horas <br>\r\n                    m = minutos <br>\r\n                </p>\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">h</span>\r\n                    <input type=\"text\" name=\"horas\" formControlName=\"horas\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">m</span>\r\n                    <input type=\"text\" name=\"minutos\" formControlName=\"minutos\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-ponteiros/tri-angulo-ponteiros.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-ponteiros/tri-angulo-ponteiros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriAnguloPonteirosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriAnguloPonteirosComponent = /** @class */ (function () {
    function TriAnguloPonteirosComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            horas: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            minutos: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriAnguloPonteirosComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriAnguloPonteirosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postAnguloPonteiros(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriAnguloPonteirosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-ponteiros/tri-angulo-ponteiros.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-ponteiros/tri-angulo-ponteiros.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriAnguloPonteirosComponent);
    return TriAnguloPonteirosComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-cosseno/tri-cosseno.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n          <div class=\"row ifmath-conteudo__titulo\">\r\n              <span class=\"ifmath-conteudo__txt-titulo\"><h3>Calcula o cosseno de um ângulo a partir de razões trigonométricas</h3></span>\r\n          </div>\r\n          <br>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n              <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/formula_TR_cosseno.png\"><br/>\r\n              <br/>\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n                      <input type=\"text\" name=\"catetoAdjacente\" formControlName=\"catetoAdjacente\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                      <input type=\"text\" name=\"hipotenusa\" formControlName=\"hipotenusa\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n\r\n              <!-- buttons -->\r\n               <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12 col-md-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n  </div>\r\n  <!-- endregion -->\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-cosseno/tri-cosseno.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-cosseno/tri-cosseno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriCossenoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriCossenoComponent = /** @class */ (function () {
    function TriCossenoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            catetoAdjacente: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            hipotenusa: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriCossenoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriCossenoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postCosseno(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriCossenoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-cosseno/tri-cosseno.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-cosseno/tri-cosseno.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriCossenoComponent);
    return TriCossenoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-definicao/tri-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <h3>Definição</h3>\r\n  <p class=\"p-justify\">\r\n    A Trigonometria (trigono: triângulo; metria: medidas) é o estudo da Matemática responsável \r\n    pela relação existente entre os lados e os ângulos de um triângulo.\r\n  </p>\r\n\r\n  <h3>Razões Trigonométricas</h3>\r\n  <p class=\"p-justify\">\r\n    As razões dos lados de um triângulo retângulo são chamadas razões trigonométricas. Três razões \r\n    trigonométricas comuns são o seno (sen), cosseno (cos) e tangente (tan).\r\n  </p>\r\n</section>"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-definicao/tri-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-definicao/tri-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriDefinicaoComponent; });
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

var TriDefinicaoComponent = /** @class */ (function () {
    function TriDefinicaoComponent() {
    }
    TriDefinicaoComponent.prototype.ngOnInit = function () {
    };
    TriDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-definicao/tri-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-definicao/tri-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TriDefinicaoComponent);
    return TriDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n            <div class=\"row ifmath-conteudo__titulo\">\r\n                <span class=\"ifmath-conteudo__txt-titulo\"><h3>Calcula o seno, cosseno e tangente de um ângulo</h3></span>\r\n            </div>\r\n            <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/triangulo_retangulo.png\"><br/>\r\n                <br/>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g</span>\r\n                        <input type=\"text\" name=\"graus\" formControlName=\"graus\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n\r\n                <!-- buttons -->\r\n                 <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n    <!-- region Resultados -->\r\n    <div class=\"col-sm-12 col-md-12\">\r\n      <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n    </div>\r\n    <!-- endregion -->\r\n    </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriFuncoesTrigonometricasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriFuncoesTrigonometricasComponent = /** @class */ (function () {
    function TriFuncoesTrigonometricasComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            graus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriFuncoesTrigonometricasComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriFuncoesTrigonometricasComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postFuncoesTrigonometricas(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriFuncoesTrigonometricasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriFuncoesTrigonometricasComponent);
    return TriFuncoesTrigonometricasComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-graus/tri-media-usando-graus.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n            <div class=\"row ifmath-conteudo__titulo\">\r\n                <span class=\"ifmath-conteudo__txt-titulo\"><h3>Converte um ângulo em graus para radianos</h3></span>\r\n            </div>\r\n            <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/formula_TR_medida_arcos_graus.png\"><br/>\r\n                <br/>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g</span>\r\n                        <input type=\"text\" name=\"graus\" formControlName=\"graus\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n                    <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">m</span>\r\n                        <input type=\"text\" name=\"minutos\" formControlName=\"minutos\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n                    <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">s</span>\r\n                        <input type=\"text\" name=\"segundos\" formControlName=\"segundos\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n\r\n                <!-- buttons -->\r\n                 <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n    <!-- region Resultados -->\r\n    <div class=\"col-sm-12 col-md-12\">\r\n      <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n    </div>\r\n    <!-- endregion -->\r\n    </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-graus/tri-media-usando-graus.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-graus/tri-media-usando-graus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriMediaUsandoGrausComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriMediaUsandoGrausComponent = /** @class */ (function () {
    function TriMediaUsandoGrausComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            graus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            minutos: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            segundos: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriMediaUsandoGrausComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriMediaUsandoGrausComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postMediaUsandoGraus(trigonometria)
            .take(1)
            .do(function () {
            _this.loading = false;
        })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriMediaUsandoGrausComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-graus/tri-media-usando-graus.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-graus/tri-media-usando-graus.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriMediaUsandoGrausComponent);
    return TriMediaUsandoGrausComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-radianos/tri-media-usando-radianos.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">\r\n                <h3>Converte um ângulo em radianos para graus</h3>\r\n            </span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_TR_medida_arcos_radianos.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"numeradorRadianos\" formControlName=\"numeradorRadianos\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">d</span>\r\n                    <input type=\"text\" name=\"denominadorRadianos\" formControlName=\"denominadorRadianos\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-radianos/tri-media-usando-radianos.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-radianos/tri-media-usando-radianos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriMediaUsandoRadianosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriMediaUsandoRadianosComponent = /** @class */ (function () {
    function TriMediaUsandoRadianosComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            numeradorRadianos: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            denominadorRadianos: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriMediaUsandoRadianosComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriMediaUsandoRadianosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postMediaUsandoRadianos(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriMediaUsandoRadianosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-radianos/tri-media-usando-radianos.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-radianos/tri-media-usando-radianos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriMediaUsandoRadianosComponent);
    return TriMediaUsandoRadianosComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-central/tri-medida-angulo-central.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n            <div class=\"row ifmath-conteudo__titulo\">\r\n                <span class=\"ifmath-conteudo__txt-titulo\"><h3>Descobre o ângulo central de um arco</h3></span>\r\n            </div>\r\n            <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/formula_TR_medida_angulo_central.png\"><br/>\r\n                <br/>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g</span>\r\n                        <input type=\"text\" name=\"graus\" formControlName=\"graus\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n\r\n                <!-- buttons -->\r\n                 <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n    <!-- region Resultados -->\r\n    <div class=\"col-sm-12 col-md-12\">\r\n      <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n    </div>\r\n    <!-- endregion -->\r\n    </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-central/tri-medida-angulo-central.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-central/tri-medida-angulo-central.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriMedidaAnguloCentralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriMedidaAnguloCentralComponent = /** @class */ (function () {
    function TriMedidaAnguloCentralComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            graus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriMedidaAnguloCentralComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriMedidaAnguloCentralComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postMedidaAnguloCentral(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriMedidaAnguloCentralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-central/tri-medida-angulo-central.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-central/tri-medida-angulo-central.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriMedidaAnguloCentralComponent);
    return TriMedidaAnguloCentralComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">\r\n                <h3>Descobre o ângulo inscrito de um arco</h3>\r\n            </span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_TR_medida_angulo_inscrito.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g</span>\r\n                    <input type=\"text\" name=\"graus\" formControlName=\"graus\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriMedidaAnguloInscritoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriMedidaAnguloInscritoComponent = /** @class */ (function () {
    function TriMedidaAnguloInscritoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            graus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriMedidaAnguloInscritoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriMedidaAnguloInscritoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postMedidaAnguloInscrito(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriMedidaAnguloInscritoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriMedidaAnguloInscritoComponent);
    return TriMedidaAnguloInscritoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-razao-trigonometrica/tri-razao-trigonometrica.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n            <div class=\"row ifmath-conteudo__titulo\">\r\n                <span class=\"ifmath-conteudo__txt-titulo\"><h3>Calcula os catetos, a hipotenusa e o ângulo de um triângulo retângulo a partir de razões trigonométricas</h3></span>\r\n            </div>\r\n            <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/triangulo_retangulo.png\"><br/>\r\n                <br/>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">g</span>\r\n                        <input type=\"text\" name=\"graus\" formControlName=\"graus\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n                    <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                        <input type=\"text\" name=\"hipotenusa\" formControlName=\"hipotenusa\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n                    <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                        <input type=\"text\" name=\"catetoOposto\" formControlName=\"catetoOposto\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n                    <div class=\"col-md-12 input-group\">\r\n                        <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n                        <input type=\"text\" name=\"catetoAdjacente\" formControlName=\"catetoAdjacente\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                    </div>\r\n\r\n\r\n                <!-- buttons -->\r\n                 <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n    <!-- region Resultados -->\r\n    <div class=\"col-sm-12 col-md-12\">\r\n      <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n    </div>\r\n    <!-- endregion -->\r\n    </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-razao-trigonometrica/tri-razao-trigonometrica.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-razao-trigonometrica/tri-razao-trigonometrica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriRazaoTrigonometricaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriRazaoTrigonometricaComponent = /** @class */ (function () {
    function TriRazaoTrigonometricaComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            graus: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            hipotenusa: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            catetoOposto: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            catetoAdjacente: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriRazaoTrigonometricaComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriRazaoTrigonometricaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postRazaoTrigonometrica(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriRazaoTrigonometricaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-razao-trigonometrica/tri-razao-trigonometrica.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-razao-trigonometrica/tri-razao-trigonometrica.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriRazaoTrigonometricaComponent);
    return TriRazaoTrigonometricaComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-seno/tri-seno.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">\r\n                <h3>Calcula o seno de um ângulo a partir de razões trigonométricas</h3>\r\n            </span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_TR_seno.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"catetoOposto\" formControlName=\"catetoOposto\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"hipotenusa\" formControlName=\"hipotenusa\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-seno/tri-seno.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.img-formula {\n  border: 2px solid #f26528;\n  border-radius: 10px; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-seno/tri-seno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriSenoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriSenoComponent = /** @class */ (function () {
    function TriSenoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            catetoOposto: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            hipotenusa: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriSenoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriSenoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postSeno(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriSenoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-seno/tri-seno.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-seno/tri-seno.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriSenoComponent);
    return TriSenoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-sidebar/tri-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-tri-sidebar\">\r\n  <ul class=\"list-group  list-group-collapse\">\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['tri_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['medida_arcos_grau']\">\r\n      Medida de arcos usando Graus\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['medida_arcos_radiano']\">\r\n      Medida de arcos usando Radianos\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['angulo_ponteiros']\">\r\n      Ângulo Entre Ponteiros\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['medida_angulo_central']\">\r\n      Ângulo do Círculo Central\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['medida_angulo_inscrito']\">\r\n      Ângulo do Círculo Inscritos\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['medida_angulo_excentrico_externo']\">\r\n      Ângulo do Círculo Excentrico Externo\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['medida_angulo_excentrico_interno']\">\r\n      Ângulo do Círculo Excentrico Interno\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['seno']\">\r\n      Triangulo Seno\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['cosseno']\">\r\n      Triangulo Cosseno\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['tangente']\">\r\n      Triangulo Tangente\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['razoes_trigonometricas']\">\r\n      Razões Trigonométrica\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['funcoes_trigonometricas']\">\r\n      Funções Trigonométricas\r\n    </li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-sidebar/tri-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #f26528;\n  border-color: #fda37d; }\n\n#selecionado:hover {\n  color: #fff;\n  background-color: #f26528; }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-sidebar/tri-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriSidebarComponent; });
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

var TriSidebarComponent = /** @class */ (function () {
    function TriSidebarComponent() {
    }
    TriSidebarComponent.prototype.ngOnInit = function () {
    };
    TriSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'ifmath-tri-sidebar',
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-sidebar/tri-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-sidebar/tri-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TriSidebarComponent);
    return TriSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-tangente/tri-tangente.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n          <div class=\"row ifmath-conteudo__titulo\">\r\n              <span class=\"ifmath-conteudo__txt-titulo\"><h3>Calcula a tangente de um ângulo a partir de razões trigonométricas</h3></span>\r\n          </div>\r\n          <br>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n              <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/formula_TR_tangente.png\"><br/>\r\n              <br/>\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                      <input type=\"text\" name=\"catetoOposto\" formControlName=\"catetoOposto\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n                      <input type=\"text\" name=\"catetoAdjacente\" formControlName=\"catetoAdjacente\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n\r\n              <!-- buttons -->\r\n               <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12 col-md-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n  </div>\r\n  <!-- endregion -->\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-tangente/tri-tangente.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-tangente/tri-tangente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriTangenteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriTangenteComponent = /** @class */ (function () {
    function TriTangenteComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            catetoOposto: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            catetoAdjacente: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    TriTangenteComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    TriTangenteComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var trigonometria = this.form.value;
        this._servico.postTangente(trigonometria)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
            _this.loading = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // Backend returns unsuccessful response codes such as 404, 500 etc.
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
                // Log errors if any
                _this.loading = false;
            }
        });
    };
    TriTangenteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-tangente/tri-tangente.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-tangente/tri-tangente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_trigonometria_service__["a" /* ServicoTrigonometria */]])
    ], TriTangenteComponent);
    return TriTangenteComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-view/tri-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n    <ifmath-tri-sidebar class=\"slidebar\"></ifmath-tri-sidebar>\r\n    <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/components/tri-view/tri-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriViewComponent; });
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

var TriViewComponent = /** @class */ (function () {
    function TriViewComponent() {
    }
    TriViewComponent.prototype.ngOnInit = function () {
    };
    TriViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-view/tri-view.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TriViewComponent);
    return TriViewComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoTrigonometria; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicoTrigonometria = /** @class */ (function () {
    function ServicoTrigonometria(_http) {
        this._http = _http;
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].url;
    }
    ServicoTrigonometria.prototype.postAnguloExcentricoExterno = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/medida_angulo_excentrico_externo';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postAnguloExcentricoInterno = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/medida_angulo_excentrico_interno';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postAnguloPonteiros = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/angulo_ponteiros';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postCosseno = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/cosseno';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postFuncoesTrigonometricas = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/funcoes_trigonometricas';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postMediaUsandoGraus = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/medida_arcos_grau';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postMediaUsandoRadianos = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/medida_arcos_radiano';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postMedidaAnguloCentral = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/medida_angulo_central';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postMedidaAnguloInscrito = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/medida_angulo_inscrito';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postRazaoTrigonometrica = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/razoes_trigonometricas';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postSeno = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/seno';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria.prototype.postTangente = function (trigonometria) {
        var url = this.baseUrl + 'api/trigonometria/tangente';
        var body = JSON.stringify(trigonometria);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoTrigonometria = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicoTrigonometria);
    return ServicoTrigonometria;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/trigonometria.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrigonometriaModule", function() { return TrigonometriaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_trigonometria_service__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/shared/trigonometria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trigonometria_routing__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/trigonometria.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tri_sidebar_tri_sidebar_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-sidebar/tri-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tri_view_tri_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-view/tri-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tri_definicao_tri_definicao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-definicao/tri-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tri_media_usando_radianos_tri_media_usando_radianos_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-radianos/tri-media-usando-radianos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tri_medida_angulo_central_tri_medida_angulo_central_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-central/tri-medida-angulo-central.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tri_angulo_ponteiros_tri_angulo_ponteiros_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-ponteiros/tri-angulo-ponteiros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tri_medida_angulo_inscrito_tri_medida_angulo_inscrito_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_tri_angulo_excentrico_externo_tri_angulo_excentrico_externo_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_tri_angulo_excentrico_interno_tri_angulo_excentrico_interno_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_tri_seno_tri_seno_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-seno/tri-seno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_tri_cosseno_tri_cosseno_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-cosseno/tri-cosseno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_tri_tangente_tri_tangente_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-tangente/tri-tangente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tri_razao_trigonometrica_tri_razao_trigonometrica_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-razao-trigonometrica/tri-razao-trigonometrica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_tri_funcoes_trigonometricas_tri_funcoes_trigonometricas_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_tri_media_usando_graus_tri_media_usando_graus_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-graus/tri-media-usando-graus.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var TrigonometriaModule = /** @class */ (function () {
    function TrigonometriaModule() {
    }
    TrigonometriaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__trigonometria_routing__["a" /* TrigonometriaRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_tri_sidebar_tri_sidebar_component__["a" /* TriSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_tri_view_tri_view_component__["a" /* TriViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_tri_definicao_tri_definicao_component__["a" /* TriDefinicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_tri_media_usando_radianos_tri_media_usando_radianos_component__["a" /* TriMediaUsandoRadianosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_tri_medida_angulo_central_tri_medida_angulo_central_component__["a" /* TriMedidaAnguloCentralComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_tri_angulo_ponteiros_tri_angulo_ponteiros_component__["a" /* TriAnguloPonteirosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_tri_medida_angulo_inscrito_tri_medida_angulo_inscrito_component__["a" /* TriMedidaAnguloInscritoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_tri_angulo_excentrico_externo_tri_angulo_excentrico_externo_component__["a" /* TriAnguloExcentricoExternoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_tri_angulo_excentrico_interno_tri_angulo_excentrico_interno_component__["a" /* TriAnguloExcentricoInternoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_tri_seno_tri_seno_component__["a" /* TriSenoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_tri_cosseno_tri_cosseno_component__["a" /* TriCossenoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_tri_tangente_tri_tangente_component__["a" /* TriTangenteComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_tri_razao_trigonometrica_tri_razao_trigonometrica_component__["a" /* TriRazaoTrigonometricaComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_tri_funcoes_trigonometricas_tri_funcoes_trigonometricas_component__["a" /* TriFuncoesTrigonometricasComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_tri_media_usando_graus_tri_media_usando_graus_component__["a" /* TriMediaUsandoGrausComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_trigonometria_service__["a" /* ServicoTrigonometria */]]
        })
    ], TrigonometriaModule);
    return TrigonometriaModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/trigonometria/trigonometria.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrigonometriaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tri_definicao_tri_definicao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-definicao/tri-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tri_media_usando_graus_tri_media_usando_graus_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-graus/tri-media-usando-graus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tri_media_usando_radianos_tri_media_usando_radianos_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-media-usando-radianos/tri-media-usando-radianos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tri_angulo_ponteiros_tri_angulo_ponteiros_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-ponteiros/tri-angulo-ponteiros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tri_medida_angulo_central_tri_medida_angulo_central_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-central/tri-medida-angulo-central.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tri_medida_angulo_inscrito_tri_medida_angulo_inscrito_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tri_angulo_excentrico_externo_tri_angulo_excentrico_externo_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tri_angulo_excentrico_interno_tri_angulo_excentrico_interno_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tri_seno_tri_seno_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-seno/tri-seno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tri_cosseno_tri_cosseno_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-cosseno/tri-cosseno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tri_tangente_tri_tangente_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-tangente/tri-tangente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tri_razao_trigonometrica_tri_razao_trigonometrica_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-razao-trigonometrica/tri-razao-trigonometrica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tri_funcoes_trigonometricas_tri_funcoes_trigonometricas_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_tri_view_tri_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/trigonometria/components/tri-view/tri-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_15__components_tri_view_tri_view_component__["a" /* TriViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'tri_definicao',
                pathMatch: 'full',
            },
            {
                path: 'tri_definicao',
                component: __WEBPACK_IMPORTED_MODULE_2__components_tri_definicao_tri_definicao_component__["a" /* TriDefinicaoComponent */]
            },
            {
                path: 'medida_arcos_grau',
                component: __WEBPACK_IMPORTED_MODULE_3__components_tri_media_usando_graus_tri_media_usando_graus_component__["a" /* TriMediaUsandoGrausComponent */]
            },
            {
                path: 'medida_arcos_radiano',
                component: __WEBPACK_IMPORTED_MODULE_4__components_tri_media_usando_radianos_tri_media_usando_radianos_component__["a" /* TriMediaUsandoRadianosComponent */]
            },
            {
                path: 'angulo_ponteiros',
                component: __WEBPACK_IMPORTED_MODULE_5__components_tri_angulo_ponteiros_tri_angulo_ponteiros_component__["a" /* TriAnguloPonteirosComponent */]
            },
            {
                path: 'medida_angulo_central',
                component: __WEBPACK_IMPORTED_MODULE_6__components_tri_medida_angulo_central_tri_medida_angulo_central_component__["a" /* TriMedidaAnguloCentralComponent */]
            },
            {
                path: 'medida_angulo_inscrito',
                component: __WEBPACK_IMPORTED_MODULE_7__components_tri_medida_angulo_inscrito_tri_medida_angulo_inscrito_component__["a" /* TriMedidaAnguloInscritoComponent */]
            },
            {
                path: 'medida_angulo_excentrico_externo',
                component: __WEBPACK_IMPORTED_MODULE_8__components_tri_angulo_excentrico_externo_tri_angulo_excentrico_externo_component__["a" /* TriAnguloExcentricoExternoComponent */]
            },
            {
                path: 'medida_angulo_excentrico_interno',
                component: __WEBPACK_IMPORTED_MODULE_9__components_tri_angulo_excentrico_interno_tri_angulo_excentrico_interno_component__["a" /* TriAnguloExcentricoInternoComponent */]
            },
            {
                path: 'seno',
                component: __WEBPACK_IMPORTED_MODULE_10__components_tri_seno_tri_seno_component__["a" /* TriSenoComponent */]
            },
            {
                path: 'cosseno',
                component: __WEBPACK_IMPORTED_MODULE_11__components_tri_cosseno_tri_cosseno_component__["a" /* TriCossenoComponent */]
            },
            {
                path: 'tangente',
                component: __WEBPACK_IMPORTED_MODULE_12__components_tri_tangente_tri_tangente_component__["a" /* TriTangenteComponent */]
            },
            {
                path: 'razoes_trigonometricas',
                component: __WEBPACK_IMPORTED_MODULE_13__components_tri_razao_trigonometrica_tri_razao_trigonometrica_component__["a" /* TriRazaoTrigonometricaComponent */]
            },
            {
                path: 'funcoes_trigonometricas',
                component: __WEBPACK_IMPORTED_MODULE_14__components_tri_funcoes_trigonometricas_tri_funcoes_trigonometricas_component__["a" /* TriFuncoesTrigonometricasComponent */]
            },
        ]
    }
];
var TrigonometriaRoutingModule = /** @class */ (function () {
    function TrigonometriaRoutingModule() {
    }
    TrigonometriaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], TrigonometriaRoutingModule);
    return TrigonometriaRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=trigonometria.module.chunk.js.map