webpackJsonp(["multiplos-divisores.module"],{

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-descricao/md-descricao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-description\">\r\n    \r\n    <br>\r\n    <h3>Múltiplos e Divisores</h3>\r\n      <p class=\"p-justify\">\r\n        Múltiplos são todos os resultados da multiplicação entre um número e qualquer número natural. \r\n        Divisores são os números usados nessa multiplicação.\r\n        <br>\r\n        <br>\r\n        Dizemos que um número é múltiplo de outro quando o primeiro é resultado da multiplicação entre o segundo e \r\n        algum número natural. Nesse mesmo caso, também é possível dizer que o segundo é divisor do primeiro.\r\n      </p>\r\n\r\n      <h3>Critérios de divisibilidade</h3>\r\n      <p class=\"p-justify\">\r\n        CD por 2: \r\n        Um número é divisível por 2 quando ele é par, ou seja, quando termina em um algarismo par (0, 2, 4, 6 ou 8).\r\n\r\n        <br>\r\n        CD por 3: \r\n        Um número é divisível por 3 quando a soma dos valores absolutos dos seus algarismos é divisível por 3.\r\n\r\n        <br>\r\n        CD por 4: \r\n        Um número é divisível por 4 quando termina em 00 ou quando o número formado pela dezena e unidade é divisível por 4.\r\n\r\n        <br>\r\n        CD por 5: \r\n        Um número é divisível por 5 quando o algarismo das unidades é zero (0) ou 5.\r\n\r\n        <br>\r\n        CD por 6: \r\n        Um número é divisível por 6 quando é divisível por 2 e por 3.\r\n   \r\n        <br>\r\n        CD por 7: \r\n        Um número é divisível por 7 quando a diferença entre o dobro do último algarismo e o número formado pelos demais algarismos resulta num número divisível por 7.\r\n\r\n        <br>\r\n        CD por 8: \r\n\r\n        <br>\r\n        CD por 9: \r\n        Um número é divisível por 9 quando a soma dos valores absolutos de seus algarismos é divisível por 9.\r\n\r\n        <br>\r\n        CD por 10: \r\n        Um número é divisível por 10 quando termina em zero (0).\r\n\r\n        <br>\r\n        CD por 11: \r\n        Um número é divisível por 11 quando a diferença entre a soma dos valores absolutos dos algarismos de ordem ímpar e a soma dos valores absolutos dos algarismos de ordem par é divisível por 11.\r\n\r\n        <br>\r\n        CD por 12: \r\n        Um número é divisível por 12 quando é divisível por 3 e por 4. Lembre-se de que: 12 = 3 * 4.\r\n\r\n        <br>\r\n        CD por 25: \r\n        Um número é divisível por 25 quando os dois algarismos finais são 00, 25, 50 ou 75.\r\n      </p>\r\n\r\n      <br>\r\n\r\n  <br>\r\n\r\n    </section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-descricao/md-descricao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-descricao/md-descricao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdDescricaoComponent; });
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

var MdDescricaoComponent = /** @class */ (function () {
    function MdDescricaoComponent() {
    }
    MdDescricaoComponent.prototype.ngOnInit = function () {
    };
    MdDescricaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-descricao/md-descricao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-descricao/md-descricao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MdDescricaoComponent);
    return MdDescricaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-divisores/md-gera-divisores.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Gera os divisores de um número</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite o número que deseja gerar os divisores:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"n\" formControlName=\"n\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('n').hasError('required') && form.get('n').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-divisores/md-gera-divisores.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-divisores/md-gera-divisores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdGeraDivisoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdGeraDivisoresComponent = /** @class */ (function () {
    function MdGeraDivisoresComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            n: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    MdGeraDivisoresComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdGeraDivisoresComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postGeraDivisores(multiplosDivisores)
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
    MdGeraDivisoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-divisores/md-gera-divisores.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-divisores/md-gera-divisores.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdGeraDivisoresComponent);
    return MdGeraDivisoresComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-multiplos/md-gera-multiplos.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Gera os múltiplos de um número</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite o número natural que deseja gerar os múltiplos:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"n\" formControlName=\"n\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('n').hasError('required') && form.get('n').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-multiplos/md-gera-multiplos.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-multiplos/md-gera-multiplos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdGeraMultiplosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
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





var MdGeraMultiplosComponent = /** @class */ (function () {
    function MdGeraMultiplosComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            n: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    MdGeraMultiplosComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdGeraMultiplosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postGeraMultiplos(multiplosDivisores)
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
    MdGeraMultiplosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-multiplos/md-gera-multiplos.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-multiplos/md-gera-multiplos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdGeraMultiplosComponent);
    return MdGeraMultiplosComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-decomposicao/md-mdc-decomposicao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Encontra o MDC de dois números por decomposição:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite os números para ser feita a decomposição e encontrar o máximo divisor comum:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                \r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n                    <input type=\"text\" name=\"c\" formControlName=\"c\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('c').hasError('required') && form.get('c').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-decomposicao/md-mdc-decomposicao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-decomposicao/md-mdc-decomposicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdMdcDecomposicaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdMdcDecomposicaoComponent = /** @class */ (function () {
    function MdMdcDecomposicaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    MdMdcDecomposicaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdMdcDecomposicaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postMdcDecomposicao(multiplosDivisores)
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
    MdMdcDecomposicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-decomposicao/md-mdc-decomposicao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-decomposicao/md-mdc-decomposicao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdMdcDecomposicaoComponent);
    return MdMdcDecomposicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Encontra o MDC de dois números por Divisões Sucessivas:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n    \r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite os números para o cálculo de máximo divisor comum utilizando o método de divisão sucessiva (Algoritmo de Euclides):\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdMdcDivisoesSucessivasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdMdcDivisoesSucessivasComponent = /** @class */ (function () {
    function MdMdcDivisoesSucessivasComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    MdMdcDivisoesSucessivasComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdMdcDivisoesSucessivasComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postMdcDivisoesSucessivas(multiplosDivisores)
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
    MdMdcDivisoesSucessivasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdMdcDivisoesSucessivasComponent);
    return MdMdcDivisoesSucessivasComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-decomposicao/md-mmc-decomposicao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Encontra o mmc de dois números por decomposição:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite os números para ser feita a decomposição e encontrar o mínimo múltiplo comum:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                \r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">c</span>\r\n                    <input type=\"text\" name=\"c\" formControlName=\"c\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('c').hasError('required') && form.get('c').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">d</span>\r\n                    <input type=\"text\" name=\"d\" formControlName=\"d\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('d').hasError('required') && form.get('d').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-decomposicao/md-mmc-decomposicao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-decomposicao/md-mmc-decomposicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdMmcDecomposicaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdMmcDecomposicaoComponent = /** @class */ (function () {
    function MdMmcDecomposicaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            c: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            d: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    MdMmcDecomposicaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdMmcDecomposicaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postMmcDecomposicao(multiplosDivisores)
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
    MdMmcDecomposicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-decomposicao/md-mmc-decomposicao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-decomposicao/md-mmc-decomposicao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdMmcDecomposicaoComponent);
    return MdMmcDecomposicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-encontrar/md-mmc-encontrar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Encontra o mmc de dois números:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <p>\r\n                        O menor dos múltiplos comuns de dois ou mais números, diferente de zero, é denominado mínimo múltiplo comum (mmc).\r\n                    </p>\r\n\r\n                    Digite os números para encontrar o mínimo múltiplo comum:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-encontrar/md-mmc-encontrar.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-encontrar/md-mmc-encontrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdMmcEncontrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdMmcEncontrarComponent = /** @class */ (function () {
    function MdMmcEncontrarComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    MdMmcEncontrarComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdMmcEncontrarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postMmcEncontrar(multiplosDivisores)
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
    MdMmcEncontrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-encontrar/md-mmc-encontrar.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-encontrar/md-mmc-encontrar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdMmcEncontrarComponent);
    return MdMmcEncontrarComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-decomposicao/md-primo-decomposicao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Decompor um número em números primos:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite o número que deseja decompor em números primos:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"n\" formControlName=\"n\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('n').hasError('required') && form.get('n').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                \r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-decomposicao/md-primo-decomposicao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-decomposicao/md-primo-decomposicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdPrimoDecomposicaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdPrimoDecomposicaoComponent = /** @class */ (function () {
    function MdPrimoDecomposicaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            n: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    MdPrimoDecomposicaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdPrimoDecomposicaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postPrimoDecomposicao(multiplosDivisores)
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
    MdPrimoDecomposicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-decomposicao/md-primo-decomposicao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-decomposicao/md-primo-decomposicao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdPrimoDecomposicaoComponent);
    return MdPrimoDecomposicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-verifica/md-primo-verifica.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Verifica se um número é primo:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite o número que deseja verificar se é primo:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"n\" formControlName=\"n\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('n').hasError('required') && form.get('n').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-verifica/md-primo-verifica.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-verifica/md-primo-verifica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdPrimoVerificaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdPrimoVerificaComponent = /** @class */ (function () {
    function MdPrimoVerificaComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            n: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    MdPrimoVerificaComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdPrimoVerificaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postPrimoVerifica(multiplosDivisores)
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
    MdPrimoVerificaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-verifica/md-primo-verifica.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-verifica/md-primo-verifica.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdPrimoVerificaComponent);
    return MdPrimoVerificaComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-sidebar/md-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"sidebar-nav\">\r\n    <ul class=\"list-group  list-group-collapse\">\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_descricao']\">\r\n        Descrição\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_gera_multiplos']\">\r\n        Gerar Múltiplos\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_verifica_multiplos']\">\r\n        Verificar Múltiplos\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_gera_divisores']\">\r\n        Gerar Divisores\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_verifica_divisores']\">\r\n        Verificar Divisores\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_mmc_encontrar']\">\r\n        Encontrar MMC\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_mmc_decomposicao']\">\r\n        Encontrar MMC por Decomposição\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_mdc_divisoes_sucessivas']\">\r\n        Encontrar MDC por divisões sucessivas\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_mdc_decomposicao']\">\r\n        Encontrar MDC por Decomposição\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_primo_verifica']\">\r\n        Verifica se é primo\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['md_primo_decomposicao']\">\r\n        Decomposição de um número em primos\r\n      </li>\r\n    </ul>\r\n  </section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-sidebar/md-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdSidebarComponent; });
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

var MdSidebarComponent = /** @class */ (function () {
    function MdSidebarComponent() {
    }
    MdSidebarComponent.prototype.ngOnInit = function () {
    };
    MdSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'md-sidebar',
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-sidebar/md-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MdSidebarComponent);
    return MdSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-divisor/md-verifica-divisores.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Verifica os divisores de um número</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                 <!-- Fields -->\r\n                 <div class=\"col-md-12 input-group\">\r\n                    Digite o número que se deseja verificar um divisor:\r\n                 </div>\r\n                 <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">m</span>\r\n                    <input type=\"text\" name=\"m\" formControlName=\"m\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('m').hasError('required') && form.get('m').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite um possível divisor:\r\n                 </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"n\" formControlName=\"n\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('n').hasError('required') && form.get('n').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-divisor/md-verifica-divisores.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-divisor/md-verifica-divisores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdVerificaDivisoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdVerificaDivisoresComponent = /** @class */ (function () {
    function MdVerificaDivisoresComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            m: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            n: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    MdVerificaDivisoresComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdVerificaDivisoresComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postVerificaDivisores(multiplosDivisores)
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
    MdVerificaDivisoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-divisor/md-verifica-divisores.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-divisor/md-verifica-divisores.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdVerificaDivisoresComponent);
    return MdVerificaDivisoresComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-multiplo/md-verifica-multiplos.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Verifica os múltiplos de um número</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite o número que se deseja verificar um múltiplo:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">m</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    Digite um possível múltiplo:\r\n                </div>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-multiplo/md-verifica-multiplos.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-multiplo/md-verifica-multiplos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdVerificaMultiplosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdVerificaMultiplosComponent = /** @class */ (function () {
    function MdVerificaMultiplosComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    MdVerificaMultiplosComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    MdVerificaMultiplosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var multiplosDivisores = this.form.value;
        this._servico.postVerificaMultiplos(multiplosDivisores)
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
    MdVerificaMultiplosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-multiplo/md-verifica-multiplos.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-multiplo/md-verifica-multiplos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]])
    ], MdVerificaMultiplosComponent);
    return MdVerificaMultiplosComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-view/md-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n    <md-sidebar class=\"slidebar\"></md-sidebar>\r\n    <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/components/md-view/md-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdViewComponent; });
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

var MdViewComponent = /** @class */ (function () {
    function MdViewComponent() {
    }
    MdViewComponent.prototype.ngOnInit = function () {
    };
    MdViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-view/md-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MdViewComponent);
    return MdViewComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/multiplos-divisores.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplosDivisoresModule", function() { return MultiplosDivisoresModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__multiplos_divisores_routing__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/multiplos-divisores.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_multiplos_divisores_service__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_md_view_md_view_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-view/md-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_md_sidebar_md_sidebar_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-sidebar/md-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_md_descricao_md_descricao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-descricao/md-descricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_md_mmc_encontrar_md_mmc_encontrar_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-encontrar/md-mmc-encontrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_md_mmc_decomposicao_md_mmc_decomposicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-decomposicao/md-mmc-decomposicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_md_mdc_divisoes_sucessivas_md_mdc_divisoes_sucessivas_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_md_mdc_decomposicao_md_mdc_decomposicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-decomposicao/md-mdc-decomposicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_md_primo_verifica_md_primo_verifica_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-verifica/md-primo-verifica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_md_primo_decomposicao_md_primo_decomposicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-decomposicao/md-primo-decomposicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_md_gera_divisores_md_gera_divisores_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-divisores/md-gera-divisores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_md_gera_multiplos_md_gera_multiplos_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-multiplos/md-gera-multiplos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_md_verifica_divisor_md_verifica_divisores_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-divisor/md-verifica-divisores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_md_verifica_multiplo_md_verifica_multiplos_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-multiplo/md-verifica-multiplos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var MultiplosDivisoresModule = /** @class */ (function () {
    function MultiplosDivisoresModule() {
    }
    MultiplosDivisoresModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__multiplos_divisores_routing__["a" /* MultiplosDivisoresRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_md_view_md_view_component__["a" /* MdViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_md_sidebar_md_sidebar_component__["a" /* MdSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_md_descricao_md_descricao_component__["a" /* MdDescricaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_md_mmc_encontrar_md_mmc_encontrar_component__["a" /* MdMmcEncontrarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_md_mmc_decomposicao_md_mmc_decomposicao_component__["a" /* MdMmcDecomposicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_md_mdc_decomposicao_md_mdc_decomposicao_component__["a" /* MdMdcDecomposicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_md_mdc_divisoes_sucessivas_md_mdc_divisoes_sucessivas_component__["a" /* MdMdcDivisoesSucessivasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_md_primo_verifica_md_primo_verifica_component__["a" /* MdPrimoVerificaComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_md_primo_decomposicao_md_primo_decomposicao_component__["a" /* MdPrimoDecomposicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_md_gera_divisores_md_gera_divisores_component__["a" /* MdGeraDivisoresComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_md_gera_multiplos_md_gera_multiplos_component__["a" /* MdGeraMultiplosComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_md_verifica_divisor_md_verifica_divisores_component__["a" /* MdVerificaDivisoresComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_md_verifica_multiplo_md_verifica_multiplos_component__["a" /* MdVerificaMultiplosComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared_multiplos_divisores_service__["a" /* ServicoMultiplosDivisores */]]
        })
    ], MultiplosDivisoresModule);
    return MultiplosDivisoresModule;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/multiplos-divisores.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplosDivisoresRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_md_descricao_md_descricao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-descricao/md-descricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_md_view_md_view_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-view/md-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_md_mmc_encontrar_md_mmc_encontrar_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-encontrar/md-mmc-encontrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_md_mmc_decomposicao_md_mmc_decomposicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mmc-decomposicao/md-mmc-decomposicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_md_mdc_decomposicao_md_mdc_decomposicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-decomposicao/md-mdc-decomposicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_md_mdc_divisoes_sucessivas_md_mdc_divisoes_sucessivas_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-mdc-divisoes-sucessivas/md-mdc-divisoes-sucessivas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_md_primo_verifica_md_primo_verifica_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-verifica/md-primo-verifica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_md_primo_decomposicao_md_primo_decomposicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-primo-decomposicao/md-primo-decomposicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_md_gera_divisores_md_gera_divisores_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-divisores/md-gera-divisores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_md_gera_multiplos_md_gera_multiplos_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-gera-multiplos/md-gera-multiplos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_md_verifica_divisor_md_verifica_divisores_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-divisor/md-verifica-divisores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_md_verifica_multiplo_md_verifica_multiplos_component__ = __webpack_require__("./src/app/views/numeros-operacoes/multiplos-divisores/components/md-verifica-multiplo/md-verifica-multiplos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__components_md_view_md_view_component__["a" /* MdViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'md_descricao',
                pathMatch: 'full',
            },
            {
                path: 'md_descricao',
                component: __WEBPACK_IMPORTED_MODULE_2__components_md_descricao_md_descricao_component__["a" /* MdDescricaoComponent */]
            },
            {
                path: 'md_gera_divisores',
                component: __WEBPACK_IMPORTED_MODULE_10__components_md_gera_divisores_md_gera_divisores_component__["a" /* MdGeraDivisoresComponent */]
            },
            {
                path: 'md_gera_multiplos',
                component: __WEBPACK_IMPORTED_MODULE_11__components_md_gera_multiplos_md_gera_multiplos_component__["a" /* MdGeraMultiplosComponent */]
            },
            {
                path: 'md_verifica_divisores',
                component: __WEBPACK_IMPORTED_MODULE_12__components_md_verifica_divisor_md_verifica_divisores_component__["a" /* MdVerificaDivisoresComponent */]
            },
            {
                path: 'md_verifica_multiplos',
                component: __WEBPACK_IMPORTED_MODULE_13__components_md_verifica_multiplo_md_verifica_multiplos_component__["a" /* MdVerificaMultiplosComponent */]
            },
            {
                path: 'md_mmc_encontrar',
                component: __WEBPACK_IMPORTED_MODULE_4__components_md_mmc_encontrar_md_mmc_encontrar_component__["a" /* MdMmcEncontrarComponent */]
            },
            {
                path: 'md_mmc_decomposicao',
                component: __WEBPACK_IMPORTED_MODULE_5__components_md_mmc_decomposicao_md_mmc_decomposicao_component__["a" /* MdMmcDecomposicaoComponent */]
            },
            {
                path: 'md_mdc_divisoes_sucessivas',
                component: __WEBPACK_IMPORTED_MODULE_7__components_md_mdc_divisoes_sucessivas_md_mdc_divisoes_sucessivas_component__["a" /* MdMdcDivisoesSucessivasComponent */]
            },
            {
                path: 'md_mdc_decomposicao',
                component: __WEBPACK_IMPORTED_MODULE_6__components_md_mdc_decomposicao_md_mdc_decomposicao_component__["a" /* MdMdcDecomposicaoComponent */]
            },
            {
                path: 'md_primo_verifica',
                component: __WEBPACK_IMPORTED_MODULE_8__components_md_primo_verifica_md_primo_verifica_component__["a" /* MdPrimoVerificaComponent */]
            },
            {
                path: 'md_primo_decomposicao',
                component: __WEBPACK_IMPORTED_MODULE_9__components_md_primo_decomposicao_md_primo_decomposicao_component__["a" /* MdPrimoDecomposicaoComponent */]
            }
        ]
    }
];
var MultiplosDivisoresRoutingModule = /** @class */ (function () {
    function MultiplosDivisoresRoutingModule() {
    }
    MultiplosDivisoresRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], MultiplosDivisoresRoutingModule);
    return MultiplosDivisoresRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/multiplos-divisores/shared/multiplos-divisores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoMultiplosDivisores; });
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




var ServicoMultiplosDivisores = /** @class */ (function () {
    function ServicoMultiplosDivisores(_http) {
        this._http = _http;
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url;
    }
    ServicoMultiplosDivisores.prototype.postMmcEncontrar = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/mmc/calcular_mmc';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postMmcDecomposicao = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/mmc/mmc_decomposicao';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postGeraDivisores = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/factor/gera_divisores';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postGeraMultiplos = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/multiplos_divisores/md_gera_multiplos';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postMdcDecomposicao = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/mdc/decomposicao';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postMdcDivisoesSucessivas = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/mdc/divisoes_sucessivas';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postPrimoDecomposicao = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/prime/primo_decomposicao';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postVerificaDivisores = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/factor/verifica_divisor';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postVerificaMultiplos = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/multiplos_divisores/md_verifica_multiplos';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores.prototype.postPrimoVerifica = function (multiplosDivisores) {
        var url = this.baseUrl + 'api/prime/verifica_primo';
        var body = JSON.stringify(multiplosDivisores);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoMultiplosDivisores = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicoMultiplosDivisores);
    return ServicoMultiplosDivisores;
}());



/***/ })

});
//# sourceMappingURL=multiplos-divisores.module.chunk.js.map