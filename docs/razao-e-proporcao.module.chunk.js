webpackJsonp(["razao-e-proporcao.module"],{

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-descricao/rp-descricao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-description\">\r\n\r\n<h3>Razão</h3>\r\n<p class=\"p-justify\">\r\n  A palavra razão vem do latim ratio, que significa “divisão”. \r\n  Denominamos razão entre dois números a e b, sendo b diferente de 0, o quociente a : b.<br>\r\n  <strong>de uma razão</strong><br>\r\n  Observe a razão: a:b<br>\r\n  O número a é denominado antecedente, e o número b, consequente.<br>\r\n</p>\r\n\r\n<h3>Proporção</h3>\r\n<p class=\"p-justify\">\r\n  A palavra proporção, do latim proportionis, significa \r\n  “uma relação entre as partes de uma grandeza”. Proporção é uma igualdade entre duas razões.<br>\r\n\r\n  <strong>Elementos de uma proporção</strong>\r\n  dados quatro números racionais não nulos, a, b, c e d, nessa ordem, dizemos que eles \r\n  formam uma proporção quando a razão do primeiro para o segundo é igual à razão do terceiro para o quarto.\r\n</p>\r\n\r\n<h3>Propriedades das Proporções</h3>\r\n  <p class=\"p-justify\">\r\n    <strong>Fundamental:</strong>\r\n    Em toda proporção, o produto dos meios é igual ao produto dos extremos, ou seja:<br>\r\n    <br>\r\n    <img class=\"image-formula image-formula--blackgrey image-center\" src=\"assets/images/formulas/propriedade_RP_propriedade_fundamental.png\"><br />\r\n    <br>\r\n    <strong>Demais Propriedades:</strong><br>\r\n    <br>\r\n    <strong>1ª propriedade:</strong><br>\r\n    Em uma proporção, a soma dos dois primeiros termos está para o segundo (ou primeiro)\r\n    termo assim como a soma dos dois últimos termos está para o quarto (ou terceiro) termo.<br>\r\n    <br>\r\n    <img class=\"image-formula image-formula--blackgrey image-center\" src=\"assets/images/formulas/propriedade_RP_propriedade_1_1.png\"><br />\r\n    <br>\r\n    <img class=\"image-formula image-formula--blackgrey image-center\" src=\"assets/images/formulas/propriedade_RP_propriedade_1_2.png\"><br />\r\n    <br>\r\n    <strong>2ª propriedade:</strong><br>\r\n    Em uma proporção, a diferença dos dois primeiros termos está para o segundo (ou primeiro)\r\n    termo assim como a diferença dos dois últimos está para o quarto (ou terceiro) termo.<br>\r\n    <br>\r\n    <img class=\"image-formula image-formula--blackgrey image-center\" src=\"assets/images/formulas/propriedade_RP_propriedade_2_1.png\"><br />\r\n    <br>\r\n    <img class=\"image-formula image-formula--blackgrey image-center\" src=\"assets/images/formulas/propriedade_RP_propriedade_2_2.png\"><br />\r\n    <strong>3ª propriedade:</strong><br>\r\n    Em uma proporção, a soma dos antecedentes está para a soma dos consequentes assim como cada\r\n    antecedente está para o seu consequente.<br>\r\n    <br>\r\n    <img class=\"image-formula image-formula--blackgrey image-center\" src=\"assets/images/formulas/propriedade_RP_propriedade_3.png\"><br />\r\n    <br>\r\n    <strong>4ª propriedade:</strong><br>\r\n    Em uma proporção, a diferença dos antecedentes está para a diferença dos consequentes assim\r\n    como cada antecedente está para o seu consequente.<br>\r\n    <br>\r\n    <img class=\"image-formula image-formula--blackgrey image-center\" src=\"assets/images/formulas/propriedade_RP_propriedade_4.png\"><br />\r\n    <br>\r\n    <strong>5ª propriedade:</strong><br>\r\n    Em uma proporção, o produto dos antecedentes está para o produto dos consequentes assim como\r\n    o quadrado de cada antecedente está para o quadrado de seu consequente.<br>\r\n    <br>\r\n    <img class=\"image-formula image-formula--blackgrey image-center\" src=\"assets/images/formulas/propriedade_RP_propriedade_5.png\"><br />\r\n    <br>\r\n  </p>\r\n</section>"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-descricao/rp-descricao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-descricao/rp-descricao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpDescricaoComponent; });
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

var RpDescricaoComponent = /** @class */ (function () {
    function RpDescricaoComponent() {
    }
    RpDescricaoComponent.prototype.ngOnInit = function () {
    };
    RpDescricaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-descricao/rp-descricao.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-descricao/rp-descricao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RpDescricaoComponent);
    return RpDescricaoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-equivalentes/rp-razao-equivalentes.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n          <div class=\"row ifmath-conteudo__titulo\">\r\n              <span class=\"ifmath-conteudo__txt-titulo\"><h3>Verifica se duas razões são equivalentes</h3></span>\r\n          </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n            <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/formula_RP_razao_equivalente.png\"><br/>\r\n              <br/>\r\n          </div>\r\n          \r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                      <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                      <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n                    <input type=\"text\" name=\"c\" formControlName=\"c\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">d</span>\r\n                    <input type=\"text\" name=\"d\" formControlName=\"d\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n              \r\n              <!-- buttons -->\r\n               <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12 col-md-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n  </div>\r\n  <!-- endregion -->\r\n  </div>\r\n</section> \r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-equivalentes/rp-razao-equivalentes.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.ifmath-form_img-formula {\n  margin-top: 5%; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-equivalentes/rp-razao-equivalentes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpRazaoEquivalentesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_razao_e_proporcao_service__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.service.ts");
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





var RpRazaoEquivalentesComponent = /** @class */ (function () {
    function RpRazaoEquivalentesComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            d: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    RpRazaoEquivalentesComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    RpRazaoEquivalentesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var razaoProporcao = this.form.value;
        this._servico.postRazaoEquivalente(razaoProporcao)
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
    RpRazaoEquivalentesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-equivalentes/rp-razao-equivalentes.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-equivalentes/rp-razao-equivalentes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_razao_e_proporcao_service__["a" /* ServicoRazaoProporcao */]])
    ], RpRazaoEquivalentesComponent);
    return RpRazaoEquivalentesComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-inversa/rp-razao-inversa.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n          <div class=\"row ifmath-conteudo__titulo\">\r\n              <span class=\"ifmath-conteudo__txt-titulo\"><h3>Determinar a Razão Inversa</h3></span>\r\n          </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n            <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/formula_RP_razao.png\"><br/>\r\n              <br/>\r\n          </div>\r\n          \r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                      <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                      <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n              \r\n              <!-- buttons -->\r\n               <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12 col-md-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n  </div>\r\n  <!-- endregion -->\r\n  </div>\r\n</section> \r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-inversa/rp-razao-inversa.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.ifmath-form_img-formula {\n  margin-top: 1%; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-inversa/rp-razao-inversa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpRazaoInversaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_razao_e_proporcao_service__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.service.ts");
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





var RpRazaoInversaComponent = /** @class */ (function () {
    function RpRazaoInversaComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    RpRazaoInversaComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    RpRazaoInversaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var razaoProporcao = this.form.value;
        this._servico.postRazaoInversa(razaoProporcao)
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
    RpRazaoInversaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-inversa/rp-razao-inversa.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-inversa/rp-razao-inversa.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_razao_e_proporcao_service__["a" /* ServicoRazaoProporcao */]])
    ], RpRazaoInversaComponent);
    return RpRazaoInversaComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao/rp-razao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n          <div class=\"row ifmath-conteudo__titulo\">\r\n              <span class=\"ifmath-conteudo__txt-titulo\"><h3>Razão simplificada entre o primeiro (a) e o segundo (b) número</h3></span>\r\n          </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n              <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/formula_RP_razao.png\"><br/>\r\n              <br/>\r\n          </div>\r\n          \r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                      <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                      <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n              \r\n              <!-- buttons -->\r\n               <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12 col-md-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n  </div>\r\n  <!-- endregion -->\r\n  </div>\r\n</section> \r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao/rp-razao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.ifmath-form_img-formula {\n  margin-top: 1%; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao/rp-razao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpRazaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_razao_e_proporcao_service__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.service.ts");
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





var RpRazaoComponent = /** @class */ (function () {
    function RpRazaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    RpRazaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    RpRazaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var razaoProporcao = this.form.value;
        this._servico.postRazao(razaoProporcao)
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
    RpRazaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao/rp-razao.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao/rp-razao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_razao_e_proporcao_service__["a" /* ServicoRazaoProporcao */]])
    ], RpRazaoComponent);
    return RpRazaoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-sidebar/rp-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"sidebar-nav\">\r\n  <ul class=\"list-group  list-group-collapse\">\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['rp_descricao']\">\r\n      Descrição\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['razao']\">\r\n      Razão\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['razao_inversa']\">\r\n      Razão Inversa\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['razao_equivalente']\">\r\n      Razão Equivalente\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['proporcao']\">\r\n      Verificar Proporção\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action\"  [routerLink]=\"['proporcao_termo_desconhecido']\">\r\n      Proporção Termo Desconhecido\r\n    </li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-sidebar/rp-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpSidebarComponent; });
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

var RpSidebarComponent = /** @class */ (function () {
    function RpSidebarComponent() {
    }
    RpSidebarComponent.prototype.ngOnInit = function () {
    };
    RpSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rp-sidebar',
            template: __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-sidebar/rp-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RpSidebarComponent);
    return RpSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-termo-desconhecido/rp-termo-desconhecido.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n    <div class=\"row ifmath-conteudo__titulo\">\r\n      <span class=\"ifmath-conteudo__txt-titulo\">\r\n        <h3>Encontrar o Termo Desconhecido de duas razões</h3>\r\n      </span>\r\n    </div>\r\n    <div class=\"row\">\r\n      <!-- Title -->\r\n      <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n        <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n          src=\"assets/images/formulas/formula_RP_razao_equivalente.png\"><br />\r\n        <br />\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 col-md-8\">\r\n        <!-- Fields -->\r\n        <div class=\"col-md-12 input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n          <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n        </div>\r\n        <div class=\"col-md-12 input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n          <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n        </div>\r\n        <div class=\"col-md-12 input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n          <input type=\"text\" name=\"c\" formControlName=\"c\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n        </div>\r\n        <div class=\"col-md-12 input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">d</span>\r\n          <input type=\"text\" name=\"d\" formControlName=\"d\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n        </div>\r\n\r\n        <!-- buttons -->\r\n        <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n          <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n            value=\"Calcular\">Calcular</button>\r\n          <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n            value=\"Limpar\">Limpar</button>\r\n        </div>\r\n\r\n        <br>\r\n        <div class=\"alert alert-danger\" *ngIf=\"form.errors?.umaIncognita\" role=\"alert\">\r\n          É necessario ter somento uma incognita da formula!\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n    <!-- region Resultados -->\r\n    <div class=\"col-sm-12 col-md-12\">\r\n      <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n    </div>\r\n    <!-- endregion -->\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-termo-desconhecido/rp-termo-desconhecido.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.ifmath-form_img-formula {\n  margin-top: 5%; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-termo-desconhecido/rp-termo-desconhecido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpTermoDesconhecidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_razao_e_proporcao_service__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_razao_e_proporcao_validation__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RpTermoDesconhecidoComponent = /** @class */ (function () {
    function RpTermoDesconhecidoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].required],
            d: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].required],
        }, { validator: __WEBPACK_IMPORTED_MODULE_3__shared_razao_e_proporcao_validation__["a" /* SoPodeUmaIncognita */] });
    }
    RpTermoDesconhecidoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    RpTermoDesconhecidoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var razaoProporcao = this.form.value;
        this._servico.postTermoDesconhecido(razaoProporcao)
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
    RpTermoDesconhecidoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-termo-desconhecido/rp-termo-desconhecido.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-termo-desconhecido/rp-termo-desconhecido.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_razao_e_proporcao_service__["a" /* ServicoRazaoProporcao */]])
    ], RpTermoDesconhecidoComponent);
    return RpTermoDesconhecidoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-verifica-proporcao/rp-verifica-proporcao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n          <div class=\"row ifmath-conteudo__titulo\">\r\n              <span class=\"ifmath-conteudo__txt-titulo\"><h3>Verifica se uma razão é proporcional a outra</h3></span>\r\n          </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n            <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\" src=\"assets/images/formulas/formula_RP_razao_equivalente.png\"><br/>\r\n              <br/>\r\n          </div>\r\n          \r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                      <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                      <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                      <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n                    <input type=\"text\" name=\"c\" formControlName=\"c\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n                  <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">d</span>\r\n                    <input type=\"text\" name=\"d\" formControlName=\"d\" class=\"form-control\" aria-describedby=\"sizing-addon2\">\r\n                  </div>\r\n              \r\n              <!-- buttons -->\r\n               <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12 col-md-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n  </div>\r\n  <!-- endregion -->\r\n  </div>\r\n</section> \r\n\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-verifica-proporcao/rp-verifica-proporcao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.alinhamento-texto {\n  text-align: left; }\n\n.ifmath-form_img-formula {\n  margin-top: 5%; }\n\n@media (min-width: 576px) {\n  .borda-desc-form {\n    border-right: 1px solid white; } }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-verifica-proporcao/rp-verifica-proporcao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpVerificaProporcaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_razao_e_proporcao_service__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.service.ts");
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





var RpVerificaProporcaoComponent = /** @class */ (function () {
    function RpVerificaProporcaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            d: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    RpVerificaProporcaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    RpVerificaProporcaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var razaoProporcao = this.form.value;
        this._servico.postVerificaProporcao(razaoProporcao)
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
    RpVerificaProporcaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-verifica-proporcao/rp-verifica-proporcao.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-verifica-proporcao/rp-verifica-proporcao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_razao_e_proporcao_service__["a" /* ServicoRazaoProporcao */]])
    ], RpVerificaProporcaoComponent);
    return RpVerificaProporcaoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-view/rp-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n    <rp-sidebar class=\"slidebar\"></rp-sidebar>\r\n    <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-view/rp-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpViewComponent; });
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

var RpViewComponent = /** @class */ (function () {
    function RpViewComponent() {
    }
    RpViewComponent.prototype.ngOnInit = function () {
    };
    RpViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-view/rp-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], RpViewComponent);
    return RpViewComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/razao-e-proporcao.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazaoProporcaoModule", function() { return RazaoProporcaoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__razao_e_proporcao_routing__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/razao-e-proporcao.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_razao_e_proporcao_service__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_rp_view_rp_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-view/rp-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_rp_sidebar_rp_sidebar_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-sidebar/rp-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_rp_descricao_rp_descricao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-descricao/rp-descricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_rp_razao_rp_razao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao/rp-razao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_rp_razao_equivalentes_rp_razao_equivalentes_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-equivalentes/rp-razao-equivalentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_rp_razao_inversa_rp_razao_inversa_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-inversa/rp-razao-inversa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_rp_termo_desconhecido_rp_termo_desconhecido_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-termo-desconhecido/rp-termo-desconhecido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_rp_verifica_proporcao_rp_verifica_proporcao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-verifica-proporcao/rp-verifica-proporcao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var RazaoProporcaoModule = /** @class */ (function () {
    function RazaoProporcaoModule() {
    }
    RazaoProporcaoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__razao_e_proporcao_routing__["a" /* RazaoProporcaoRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_rp_view_rp_view_component__["a" /* RpViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_rp_sidebar_rp_sidebar_component__["a" /* RpSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_rp_descricao_rp_descricao_component__["a" /* RpDescricaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_rp_razao_rp_razao_component__["a" /* RpRazaoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_rp_razao_equivalentes_rp_razao_equivalentes_component__["a" /* RpRazaoEquivalentesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_rp_razao_inversa_rp_razao_inversa_component__["a" /* RpRazaoInversaComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_rp_termo_desconhecido_rp_termo_desconhecido_component__["a" /* RpTermoDesconhecidoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_rp_verifica_proporcao_rp_verifica_proporcao_component__["a" /* RpVerificaProporcaoComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared_razao_e_proporcao_service__["a" /* ServicoRazaoProporcao */]]
        })
    ], RazaoProporcaoModule);
    return RazaoProporcaoModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/razao-e-proporcao.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RazaoProporcaoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_rp_descricao_rp_descricao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-descricao/rp-descricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_rp_razao_rp_razao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao/rp-razao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_rp_razao_inversa_rp_razao_inversa_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-inversa/rp-razao-inversa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_rp_razao_equivalentes_rp_razao_equivalentes_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-razao-equivalentes/rp-razao-equivalentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_rp_verifica_proporcao_rp_verifica_proporcao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-verifica-proporcao/rp-verifica-proporcao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_rp_termo_desconhecido_rp_termo_desconhecido_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-termo-desconhecido/rp-termo-desconhecido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_rp_view_rp_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/razao-e-proporcao/components/rp-view/rp-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__components_rp_view_rp_view_component__["a" /* RpViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'rp_descricao',
                pathMatch: 'full',
            },
            {
                path: 'rp_descricao',
                component: __WEBPACK_IMPORTED_MODULE_2__components_rp_descricao_rp_descricao_component__["a" /* RpDescricaoComponent */]
            },
            {
                path: 'razao',
                component: __WEBPACK_IMPORTED_MODULE_3__components_rp_razao_rp_razao_component__["a" /* RpRazaoComponent */]
            },
            {
                path: 'razao_inversa',
                component: __WEBPACK_IMPORTED_MODULE_4__components_rp_razao_inversa_rp_razao_inversa_component__["a" /* RpRazaoInversaComponent */]
            },
            {
                path: 'razao_equivalente',
                component: __WEBPACK_IMPORTED_MODULE_5__components_rp_razao_equivalentes_rp_razao_equivalentes_component__["a" /* RpRazaoEquivalentesComponent */]
            },
            {
                path: 'proporcao',
                component: __WEBPACK_IMPORTED_MODULE_6__components_rp_verifica_proporcao_rp_verifica_proporcao_component__["a" /* RpVerificaProporcaoComponent */]
            },
            {
                path: 'proporcao_termo_desconhecido',
                component: __WEBPACK_IMPORTED_MODULE_7__components_rp_termo_desconhecido_rp_termo_desconhecido_component__["a" /* RpTermoDesconhecidoComponent */]
            },
        ]
    }
];
var RazaoProporcaoRoutingModule = /** @class */ (function () {
    function RazaoProporcaoRoutingModule() {
    }
    RazaoProporcaoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], RazaoProporcaoRoutingModule);
    return RazaoProporcaoRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRazaoProporcao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicoRazaoProporcao = /** @class */ (function () {
    function ServicoRazaoProporcao(_http) {
        this._http = _http;
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url;
    }
    ServicoRazaoProporcao.prototype.postRazao = function (razaoProporcao) {
        var url = this.baseUrl + 'api/razao_e_proporcao/razao';
        var body = JSON.stringify(razaoProporcao);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoRazaoProporcao.prototype.postRazaoInversa = function (razaoProporcao) {
        var url = this.baseUrl + 'api/razao_e_proporcao/razao_inversa';
        var body = JSON.stringify(razaoProporcao);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoRazaoProporcao.prototype.postRazaoEquivalente = function (razaoProporcao) {
        var url = this.baseUrl + 'api/razao_e_proporcao/razao_equivalente';
        var body = JSON.stringify(razaoProporcao);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoRazaoProporcao.prototype.postTermoDesconhecido = function (razaoProporcao) {
        var url = this.baseUrl + 'api/razao_e_proporcao/proporcao_termo_desconhecido';
        var body = JSON.stringify(razaoProporcao);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoRazaoProporcao.prototype.postVerificaProporcao = function (razaoProporcao) {
        var url = this.baseUrl + 'api/razao_e_proporcao/proporcao';
        var body = JSON.stringify(razaoProporcao);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoRazaoProporcao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicoRazaoProporcao);
    return ServicoRazaoProporcao;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/razao-e-proporcao/shared/razao-e-proporcao.validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SoPodeUmaIncognita;
function SoPodeUmaIncognita(control) {
    var a = control.get('a').value;
    var b = control.get('b').value;
    var c = control.get('c').value;
    var d = control.get('d').value;
    var cont = 0;
    if (isNumber(a)) {
        cont++;
    }
    if (isNumber(b)) {
        cont++;
    }
    if (isNumber(c)) {
        cont++;
    }
    if (isNumber(d)) {
        cont++;
    }
    return cont === 3 ? null : { umaIncognita: true };
}
function isNumber(value) {
    return value !== '' || isNaN(Number(value.toString()));
}


/***/ })

});
//# sourceMappingURL=razao-e-proporcao.module.chunk.js.map