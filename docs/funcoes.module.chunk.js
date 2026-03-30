webpackJsonp(["funcoes.module"],{

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-definicao/fun-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row ifmath-conteudo__titulo\">\r\n  <span class=\"ifmath-conteudo__txt-titulo\">Definição</span>\r\n</div>\r\n<section>\r\n\r\n<p class=\"p-justify\">\r\n  Uma função determina uma relação entre os elementos de dois conjuntos. Podemos defini-la usando uma lei de formação,\r\n  em que, para cada valor de x, temos um valor de f(x). Chamamos os valores do conjunto x de domínio da função e os valores\r\n  do conjunto f(x), ou y, de imagem da função.\r\n</p>\r\n\r\n<p class=\"p-justify\">\r\n  Uma função chama-se função afim quando existem dois números reais a e b tal que f(x) = ax + b, para todo x pertencente aos reais.\r\n  Uma função chama-se função quadrática quando existem números reais a, b, e c, com a diferente de 0, tal que f(x) = ax<sup>2</sup> + bx + c, para todo x pertencente aos reais.\r\n</p>\r\n</section>"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-definicao/fun-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = ".p-justify {\n  text-align: justify;\n  text-indent: 2em; }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-definicao/fun-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunDefinicaoComponent; });
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

var FunDefinicaoComponent = /** @class */ (function () {
    function FunDefinicaoComponent() {
    }
    FunDefinicaoComponent.prototype.ngOnInit = function () {
    };
    FunDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-definicao/fun-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-definicao/fun-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FunDefinicaoComponent);
    return FunDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-encontrar-funcao/fun-encontrar-funcao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">Encontra os coeficientes angular (a) e linear (b) de uma função do 1º Grau</span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_FN_segundo_grau.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">x1</span>\r\n                    <input type=\"text\" name=\"x\" formControlName=\"x\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">f(x1)</span>\r\n                    <input type=\"text\" name=\"X2\" formControlName=\"x2\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">x2</span>\r\n                    <input type=\"text\" name=\"y\" formControlName=\"y\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">f(x2)</span>\r\n                    <input type=\"text\" name=\"y2\" formControlName=\"y2\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-encontrar-funcao/fun-encontrar-funcao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-encontrar-funcao/fun-encontrar-funcao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunEncontrarFuncaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_funcoes_service__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/shared/funcoes.service.ts");
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





var FunEncontrarFuncaoComponent = /** @class */ (function () {
    function FunEncontrarFuncaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            x: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            x2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            y: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            y2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    FunEncontrarFuncaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    FunEncontrarFuncaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var funcoes = this.form.value;
        this._servico.postFUNEncontrarFuncao(funcoes)
            .take(1)
            // .do({this.loading = false;})
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
    FunEncontrarFuncaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-encontrar-funcao/fun-encontrar-funcao.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-encontrar-funcao/fun-encontrar-funcao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_funcoes_service__["a" /* ServicoFuncoes */]])
    ], FunEncontrarFuncaoComponent);
    return FunEncontrarFuncaoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-segundo-grau/fun-segundo-grau.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">Propriedades de uma Função do Segundo Grau</span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_FN_segundo_grau.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n                    <input type=\"text\" name=\"c\" formControlName=\"c\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-segundo-grau/fun-segundo-grau.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-segundo-grau/fun-segundo-grau.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunSegundoGrauComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_funcoes_service__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/shared/funcoes.service.ts");
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





var FunSegundoGrauComponent = /** @class */ (function () {
    function FunSegundoGrauComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    FunSegundoGrauComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    FunSegundoGrauComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var funcoes = this.form.value;
        this._servico.postFUNSegundoGrau(funcoes)
            .take(1)
            // .do({this.loading = false;})
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
    FunSegundoGrauComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-segundo-grau/fun-segundo-grau.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-segundo-grau/fun-segundo-grau.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_funcoes_service__["a" /* ServicoFuncoes */]])
    ], FunSegundoGrauComponent);
    return FunSegundoGrauComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-sidebar/fun-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-side-bar\">\r\n  <ul class=\"list-group  list-group-collapse\">\r\n    \r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" \r\n        [routerLink]=\"['funcoes_definicao']\">\r\n        Definição\r\n    </li>\r\n\r\n    <li class=\"list-group-item list-group-item-action\"   \r\n        [routerLink]=\"['funcoes_encontrar_valor_numerico']\">\r\n        Função do Primeiro Grau Encontrar Valor Numérico\r\n    </li>\r\n\r\n    <li class=\"list-group-item list-group-item-action\"\r\n        [routerLink]=\"['funcoes_encontrar_funcao']\">\r\n      Função do Primeiro Grau Encontrar Função             \r\n    </li>\r\n\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\"  \r\n        [routerLink]=\"['funcoes_segundo_grau']\">\r\n      Função do Segundo Grau\r\n    </li>\r\n    \r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-sidebar/fun-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunSidebarComponent; });
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

var FunSidebarComponent = /** @class */ (function () {
    function FunSidebarComponent() {
    }
    FunSidebarComponent.prototype.ngOnInit = function () {
        this.isSelected = 'd';
    };
    FunSidebarComponent.prototype.redirectTo = function (index) {
        this.isSelected = index;
    };
    FunSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-fun-sidebar',
            template: __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-sidebar/fun-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FunSidebarComponent);
    return FunSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-valor-numerico/fun-valor-numerico.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\">Valor de f(x) de uma Função de 1º Grau para um dado valor</span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-conteudo__img ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_FN_primeiro_grau.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">x</span>\r\n                    <input type=\"text\" name=\"x\" formControlName=\"x\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-valor-numerico/fun-valor-numerico.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-valor-numerico/fun-valor-numerico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunValorNumericoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_funcoes_service__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/shared/funcoes.service.ts");
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





var FunValorNumericoComponent = /** @class */ (function () {
    function FunValorNumericoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            x: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    FunValorNumericoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    FunValorNumericoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var funcoes = this.form.value;
        this._servico.postFUNEncontrarValor(funcoes)
            .take(1)
            // .do({this.loading = false;})
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
    FunValorNumericoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-valor-numerico/fun-valor-numerico.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-valor-numerico/fun-valor-numerico.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_funcoes_service__["a" /* ServicoFuncoes */]])
    ], FunValorNumericoComponent);
    return FunValorNumericoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-view/fun-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n  <ifmath-fun-sidebar class=\"slidebar\"></ifmath-fun-sidebar>\r\n  <router-outlet class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/components/fun-view/fun-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunViewComponent; });
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

var FunViewComponent = /** @class */ (function () {
    function FunViewComponent() {
    }
    FunViewComponent.prototype.ngOnInit = function () {
    };
    FunViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-view/fun-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FunViewComponent);
    return FunViewComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/funcoes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncoesModule", function() { return FuncoesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_funcoes_service__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/shared/funcoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__funcoes_routing__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/funcoes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fun_view_fun_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-view/fun-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_fun_sidebar_fun_sidebar_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-sidebar/fun-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fun_definicao_fun_definicao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-definicao/fun-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_fun_segundo_grau_fun_segundo_grau_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-segundo-grau/fun-segundo-grau.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_fun_valor_numerico_fun_valor_numerico_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-valor-numerico/fun-valor-numerico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_fun_encontrar_funcao_fun_encontrar_funcao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-encontrar-funcao/fun-encontrar-funcao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FuncoesModule = /** @class */ (function () {
    function FuncoesModule() {
    }
    FuncoesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__funcoes_routing__["a" /* FuncoesRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_fun_view_fun_view_component__["a" /* FunViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_fun_sidebar_fun_sidebar_component__["a" /* FunSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_fun_definicao_fun_definicao_component__["a" /* FunDefinicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_fun_segundo_grau_fun_segundo_grau_component__["a" /* FunSegundoGrauComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_fun_valor_numerico_fun_valor_numerico_component__["a" /* FunValorNumericoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_fun_encontrar_funcao_fun_encontrar_funcao_component__["a" /* FunEncontrarFuncaoComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_funcoes_service__["a" /* ServicoFuncoes */]]
        })
    ], FuncoesModule);
    return FuncoesModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/funcoes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncoesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fun_definicao_fun_definicao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-definicao/fun-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fun_valor_numerico_fun_valor_numerico_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-valor-numerico/fun-valor-numerico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fun_encontrar_funcao_fun_encontrar_funcao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-encontrar-funcao/fun-encontrar-funcao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fun_segundo_grau_fun_segundo_grau_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-segundo-grau/fun-segundo-grau.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_fun_view_fun_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/funcoes/components/fun-view/fun-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var router = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__components_fun_view_fun_view_component__["a" /* FunViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'funcoes_definicao',
                pathMatch: 'full',
            },
            {
                path: 'funcoes_definicao',
                component: __WEBPACK_IMPORTED_MODULE_2__components_fun_definicao_fun_definicao_component__["a" /* FunDefinicaoComponent */]
            },
            {
                path: 'funcoes_encontrar_valor_numerico',
                component: __WEBPACK_IMPORTED_MODULE_3__components_fun_valor_numerico_fun_valor_numerico_component__["a" /* FunValorNumericoComponent */]
            },
            {
                path: 'funcoes_encontrar_funcao',
                component: __WEBPACK_IMPORTED_MODULE_4__components_fun_encontrar_funcao_fun_encontrar_funcao_component__["a" /* FunEncontrarFuncaoComponent */]
            },
            {
                path: 'funcoes_segundo_grau',
                component: __WEBPACK_IMPORTED_MODULE_5__components_fun_segundo_grau_fun_segundo_grau_component__["a" /* FunSegundoGrauComponent */]
            }
        ]
    }
];
var FuncoesRoutingModule = /** @class */ (function () {
    function FuncoesRoutingModule() {
    }
    FuncoesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(router)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], FuncoesRoutingModule);
    return FuncoesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/funcoes/shared/funcoes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoFuncoes; });
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




var ServicoFuncoes = /** @class */ (function () {
    function ServicoFuncoes(_http) {
        this._http = _http;
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url;
    }
    ServicoFuncoes.prototype.postFUNEncontrarValor = function (funcoes) {
        var url = this.baseUrl + '/api/funcoes/funcao_primeiro_grau';
        var body = JSON.stringify(funcoes);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoFuncoes.prototype.postFUNEncontrarFuncao = function (funcoes) {
        var url = this.baseUrl + '/api/funcoes/funcao_primeiro_grau_descobrir_funcao';
        var body = JSON.stringify(funcoes);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoFuncoes.prototype.postFUNSegundoGrau = function (funcoes) {
        var url = this.baseUrl + '/api/funcoes/funcao_segundo_grau';
        var body = JSON.stringify(funcoes);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoFuncoes = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicoFuncoes);
    return ServicoFuncoes;
}());



/***/ })

});
//# sourceMappingURL=funcoes.module.chunk.js.map