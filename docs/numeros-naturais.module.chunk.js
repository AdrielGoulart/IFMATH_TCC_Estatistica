webpackJsonp(["numeros-naturais.module"],{

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-adicao/nn-adicao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Soma de dois números naturais:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_NeO_soma.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                        <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                            *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                            invalido!</span>\r\n                    </div>\r\n                    <br>\r\n                \r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <button class=\"btn btn-sucess\" *ngIf=\"perfomedcalculus\" (click)=\"toggle()\">Mostrar/Esconder Passos</button>\r\n            <div *ngIf=\"!showall\">\r\n                <div  [innerHTML] = \"resultados[resultados.length-2]!= null?resultados[resultados.length-2].html :'' \"></div>\r\n            </div>\r\n            <div *ngIf=\"showall\">\r\n             <div id =\"mathsteps\" ><ifmath-ng-resultshtml [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-resultshtml></div>\r\n            </div>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-adicao/nn-adicao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n\n:host ::ng-deep .resultnumber {\n  clear: both;\n  font-size: 7.5vh;\n  width: inherit; }\n\n:host ::ng-deep .digit {\n  float: left;\n  min-width: 4.4vh;\n  max-width: 4.4vh;\n  margin: 0x; }\n\n:host ::ng-deep .topnumber {\n  font-size: 7.5vh;\n  clear: both;\n  margin-bottom: 0px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: 7vh;\n  margin-top: -2.4vh; }\n\n:host ::ng-deep .downnumber {\n  font-size: 7.5vh;\n  clear: both;\n  margin-top: 0px;\n  border-bottom: solid 0.4vh;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: auto; }\n\n:host ::ng-deep .finalresult {\n  font-size: 8vh; }\n\n:host ::ng-deep .leftover {\n  font-size: 3.5vh;\n  float: left;\n  color: grey;\n  margin-bottom: -4vh; }\n\n@media only screen and (max-width: 500px) {\n  :host ::ng-deep .leftover {\n    font-size: 1.2vh; }\n  :host ::ng-deep .finalresult {\n    font-size: 3.2vh; }\n  :host ::ng-deep .topnumber {\n    font-size: 2.7vh; }\n  :host ::ng-deep .downnumber {\n    font-size: 2.7vh;\n    margin-top: -3.1vh; }\n  :host ::ng-deep .digit {\n    min-width: 1.7vh;\n    max-width: 1.7vh; }\n  :host ::ng-deep .resultnumber {\n    font-size: 2.7vh; } }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-adicao/nn-adicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnAdicaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_modal_error_modal_error_component__ = __webpack_require__("./src/app/shared/components/modal-error/modal-error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NnAdicaoComponent = /** @class */ (function () {
    function NnAdicaoComponent(fb, _servico, route) {
        this.fb = fb;
        this._servico = _servico;
        this.route = route;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.showall = false;
        this.perfomedcalculus = false;
    }
    NnAdicaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultados = [];
        //Recebe parametros da rota
        var numbera;
        var numberb;
        this.route.queryParams.subscribe(function (params) {
            numbera = Math.abs(params['a']);
            numberb = Math.abs(params['b']);
        });
        //Verifica se parametros foram recebidos
        if (numbera && numberb) {
            //Realiza calculo se os parametros foram recebidos
            this._servico.postAdicaoS(numbera, numberb)
                .take(1)
                // .do({this.loading = false;})
                .subscribe(function (response) {
                console.log(response);
                if (response.sucesso) {
                    _this.resultados = response.objeto;
                    _this.perfomedcalculus = true;
                }
                _this.loading = false;
            }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred.
                    console.log('An error occurred:', err.error.message);
                }
                else {
                    _this.errorMessage = err.error.message;
                    _this.modalError.show();
                    _this.loading = false;
                }
            });
        }
    };
    NnAdicaoComponent.prototype.toggle = function () {
        if (this.showall) {
            this.showall = false;
        }
        else {
            this.showall = true;
        }
    };
    NnAdicaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postAdicao(numerosNaturais)
            .take(1)
            // .do({this.loading = false;})
            .subscribe(function (response) {
            console.log(response);
            if (response.sucesso) {
                _this.resultados = response.objeto;
                _this.perfomedcalculus = true;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* ViewChild */])('modalError'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_components_modal_error_modal_error_component__["a" /* ModalErrorComponent */])
    ], NnAdicaoComponent.prototype, "modalError", void 0);
    NnAdicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-adicao/nn-adicao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-adicao/nn-adicao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__["a" /* ServicoNumerosNaturais */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], NnAdicaoComponent);
    return NnAdicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-antecessor-sucessor/nn-antecessor-sucessor.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Gera antecessor e sucessor de um número natural:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_NN_antecessor_sucessor.png\"><br />\r\n                <br />\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-8 \">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"n\" formControlName=\"n\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('n').hasError('required') && form.get('n').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-antecessor-sucessor/nn-antecessor-sucessor.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 4%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-antecessor-sucessor/nn-antecessor-sucessor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnAntecessorSucessorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts");
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



var NnAntecessorSucessorComponent = /** @class */ (function () {
    function NnAntecessorSucessorComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            n: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    NnAntecessorSucessorComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    NnAntecessorSucessorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postAntecessorSucessor(numerosNaturais)
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
    NnAntecessorSucessorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-antecessor-sucessor/nn-antecessor-sucessor.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-antecessor-sucessor/nn-antecessor-sucessor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__["a" /* ServicoNumerosNaturais */]])
    ], NnAntecessorSucessorComponent);
    return NnAntecessorSucessorComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-comparacao-numeros/nn-comparacao-numeros.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Comparação entre dois números naturais:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            \r\n            <section class=\"row results\">\r\n                <div *ngIf=\"loading\" class=\"col-sm-12 col-md-12\">\r\n                    <ifmath-ng-loading-spinner></ifmath-ng-loading-spinner>\r\n                </div> \r\n                <div *ngIf=\"!loading\" class=\"col-sm-12\">\r\n                    <li class = \"cresult results__item\" *ngFor=\"let resultado of resultados; let i = index\">\r\n                        <div [attr.data-target]=\"'#resultado'+i\" data-toggle=\"collapse\">\r\n                            <div class=\"results__item__icon\">\r\n                                <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__up\" aria-hidden=\"true\"></i>\r\n                            </div>\r\n                            <div class = \"comparacaostep\">\r\n                                <div class=\"numbera number\" [innerHTML] = \"numeros[i][1]\"></div>\r\n                                <div class=\"sign number\" [innerHTML]=\"numeros[i][0]\"></div>\r\n                                <div class=\"numberb number\" [innerHTML]=\"numeros[i][2]\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"{{'resultado'+ i}}\" class=\"explicacao collapse results__item__text\">\r\n                            <div [innerHTML]=\"resultado.explicacao\"></div>\r\n                        </div>\r\n                    </li>\r\n                    \r\n                </div>\r\n            </section>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-comparacao-numeros/nn-comparacao-numeros.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n:host ::ng-deep .number {\n  float: left;\n  font-size: 6.5vh; }\n\n:host ::ng-deep .cresult {\n  list-style: none;\n  clear: both; }\n\n:host ::ng-deep .comparacaostep {\n  clear: both;\n  float: left; }\n\n:host ::ng-deep .explicacao {\n  float: left;\n  clear: both; }\n\n:host ::ng-deep .showbutton {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-comparacao-numeros/nn-comparacao-numeros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnComparacaoNumerosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts");
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



var NnComparacaoNumerosComponent = /** @class */ (function () {
    function NnComparacaoNumerosComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    NnComparacaoNumerosComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    NnComparacaoNumerosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this.numeros = [];
        this._servico.postComparacaoNumeros(numerosNaturais)
            .take(1)
            // .do({this.loading = false;})
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
                var a;
                for (var _i = 0, _a = _this.resultados; _i < _a.length; _i++) {
                    var resultado = _a[_i];
                    a = resultado.html.split(",");
                    _this.numeros.push(a);
                    console.log(resultado.explicacao);
                }
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
    NnComparacaoNumerosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-comparacao-numeros/nn-comparacao-numeros.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-comparacao-numeros/nn-comparacao-numeros.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__["a" /* ServicoNumerosNaturais */]])
    ], NnComparacaoNumerosComponent);
    return NnComparacaoNumerosComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-descricao/nn-descricao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-description\">\r\n    \r\n    <br>\r\n    <h3>Os números naturais</h3>\r\n      <p class=\"p-justify\">\r\n        Os números naturais são representados por <strong>todos os números positivos</strong>, \r\n        começando pelo zero, e eles são utilizados para indicar uma contagem, medida ou código.\r\n        O símbolo que representa esse conjunto é <strong>N</strong>.\r\n        <br>\r\n        <strong>N*</strong> é o símbolo utilizado para não incluir o elemento zero no conjunto,\r\n        definido como conjunto dos números naturais não-nulos.\r\n        <br>\r\n      </p>\r\n\r\n      <h3>Números pares e ímpares</h3>\r\n      <p class=\"p-justify\">\r\n        Todos os números naturais podem ser definidos como par ou ímpar. Um número é definido como\r\n        <strong>par</strong> quando ele é <strong>divisível por 2</strong> e o <strong>resto</strong>\r\n        dessa divisão <strong>resultar em 0</strong>. Um número é definido como <strong>ímpar</strong>\r\n         se o <strong>resto</strong> dessa divisão for <strong>diferente de 0</strong>. O zero é\r\n         comumente adicionado ao conjunto dos números pares.\r\n        <br>\r\n        Conjunto dos números pares = &#123;0,2,4,6,8,10...&#125;\r\n        <br>\r\n        Conjunto dos números ímpares = &#123;1,3,5,6,7...&#125;\r\n        <br>\r\n\r\n      </p>\r\n\r\n      <br>\r\n\r\n<!--      \r\n  <h3>Antecessor de um número natural</h3>\r\n        <p class=\"p-justify\">\r\n          Todos os números naturais, com exceção do zero, possuem um antecessor. Para que um número\r\n          seja antecessor a outro, ele precisa ser 1 unidade menor que o número em comparação.\r\n          <br>\r\n          <strong>11</strong> é antecessor de <strong>12</strong>.\r\n          <br>\r\n          <strong>29</strong> é antecessor de <strong>30</strong>.\r\n          <br>\r\n        </p>\r\n  \r\n      <br>\r\n\r\n      <h3>Sucessor de um número natural</h3>\r\n        <p class=\"p-justify\">\r\n          Todos os números naturais, possuem um sucessor. Para que um número\r\n          seja sucessor a outro, ele precisa ser 1 unidade maior que o número em comparação.\r\n          <br>\r\n          <strong>7</strong> é sucessor de <strong>6</strong>.\r\n          <br>\r\n          <strong>14</strong> é sucessor de <strong>13</strong>.\r\n          <br>\r\n        </p>-->\r\n\r\n\r\n      <br>\r\n\r\n  <br>\r\n\r\n    </section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-descricao/nn-descricao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-descricao/nn-descricao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnDescricaoComponent; });
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

var NnDescricaoComponent = /** @class */ (function () {
    function NnDescricaoComponent() {
    }
    NnDescricaoComponent.prototype.ngOnInit = function () {
    };
    NnDescricaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-descricao/nn-descricao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-descricao/nn-descricao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NnDescricaoComponent);
    return NnDescricaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-divisao/nn-divisao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Divisão de dois números naturais:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_NeO_divisao.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-resultshtml [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-resultshtml>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-divisao/nn-divisao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n\n:host ::ng-deep .resultnumber {\n  clear: both;\n  font-size: 3.3vh;\n  width: inherit; }\n\n:host ::ng-deep .bottomDigit {\n  float: left;\n  font-size: 3.5vh; }\n\n:host ::ng-deep .digit {\n  float: left;\n  min-width: 4.4vh;\n  max-width: 4.4vh;\n  margin: 0; }\n\n:host ::ng-deep .digitSub {\n  float: left;\n  min-width: 4.4vh;\n  max-width: 4.4vh;\n  margin: 0;\n  border-bottom: 2px solid #000; }\n\n:host ::ng-deep .seta-4 {\n  border-top: 20px solid black;\n  border-left: 25px solid transparent;\n  border-right: 25px solid transparent;\n  margin: 20px 0px 10px 15%;\n  float: left; }\n\n:host ::ng-deep .fa {\n  clear: both; }\n\n:host ::ng-deep .coverLeftSide {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: (1fr)[2];\n      grid-template-rows: repeat(2, 1fr);\n  row-gap: 1px; }\n\n:host ::ng-deep .coverRightSide {\n  display: -ms-grid;\n  display: grid;\n  margin-left: 10px;\n  -ms-grid-rows: (1fr)[2];\n      grid-template-rows: repeat(2, 1fr);\n  row-gap: 1px;\n  max-height: 30px; }\n\n:host ::ng-deep .divoperation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  margin-bottom: 2px; }\n\n:host ::ng-deep .addoperation2 {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left; }\n\n:host ::ng-deep .step {\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .halfnumber {\n  font-size: 2.35vh; }\n\n:host ::ng-deep .dividendo {\n  font-size: 3.5vh;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: auto;\n  margin-top: 0; }\n\n:host ::ng-deep .topUnity {\n  font-size: 3.5vh;\n  clear: both;\n  margin-bottom: 0px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: 7vh;\n  margin-top: -2.4vh; }\n\n:host ::ng-deep .divisor {\n  height: 10px;\n  font-size: 3.5vh;\n  padding-left: 4px;\n  clear: left;\n  margin-top: 0px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: auto;\n  position: relative;\n  border-bottom: 2px solid #000;\n  border-left: 2px solid #000;\n  text-align: left; }\n\n:host ::ng-deep .finalresult {\n  font-size: 8vh; }\n\n:host ::ng-deep .leftover {\n  font-size: 3.5vh;\n  float: left;\n  color: grey;\n  margin-bottom: -4vh; }\n\n:host ::ng-deep .leftoverf {\n  font-size: 5vh;\n  float: left; }\n\n:host ::ng-deep .finalresult {\n  font-size: 5vh;\n  float: left; }\n\n@media only screen and (max-width: 500px) {\n  :host ::ng-deep .leftover {\n    font-size: 1.2vh; }\n  :host ::ng-deep .leftoverf {\n    font-size: 3.5vh; }\n  :host ::ng-deep .finalresult {\n    font-size: 3.2vh; }\n  :host ::ng-deep .dividendo {\n    font-size: 2.7vh; }\n  :host ::ng-deep .divisor {\n    font-size: 2.7vh;\n    margin-top: -3.1vh; }\n  :host ::ng-deep .digit {\n    min-width: 1.7vh;\n    max-width: 1.7vh; }\n  :host ::ng-deep .resultnumber {\n    font-size: 2.7vh; } }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-divisao/nn-divisao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnDivisaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NnDivisaoComponent = /** @class */ (function () {
    function NnDivisaoComponent(fb, _servico, route) {
        this.fb = fb;
        this._servico = _servico;
        this.route = route;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    NnDivisaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultados = [];
        this.resultados = [];
        //Recebe parametros da rota
        var numbera;
        var numberb;
        this.route.queryParams.subscribe(function (params) {
            numbera = Math.abs(params['a']);
            numberb = Math.abs(params['b']);
        });
        //Verifica se parametros foram recebidos
        if (numbera && numberb) {
            //Realiza calculo se os parametros foram recebidos
            this._servico.postDivisaoS(numbera, numberb)
                .take(1)
                // .do({this.loading = false;})
                .subscribe(function (response) {
                console.log(response);
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
        }
    };
    NnDivisaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postDivisao(numerosNaturais)
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
    NnDivisaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-divisao/nn-divisao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-divisao/nn-divisao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__["a" /* ServicoNumerosNaturais */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], NnDivisaoComponent);
    return NnDivisaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-leitura-escrita/nn-leitura-escrita.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Leitura e escrita de um número:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n\r\n                </div>\r\n            <div class=\"col-sm-12 col-md-8 \">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                    <input type=\"text\" name=\"n\" formControlName=\"n\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('n').hasError('required') && form.get('n').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-leitura-escrita/nn-leitura-escrita.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-leitura-escrita/nn-leitura-escrita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnLeituraEscritaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts");
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





var NnLeituraEscritaComponent = /** @class */ (function () {
    function NnLeituraEscritaComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            n: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    NnLeituraEscritaComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    NnLeituraEscritaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postLeituraEscrita(numerosNaturais)
            .take(1)
            .do(function () { _this.loading = false; })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
            }
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
    NnLeituraEscritaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-leitura-escrita/nn-leitura-escrita.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-leitura-escrita/nn-leitura-escrita.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__["a" /* ServicoNumerosNaturais */]])
    ], NnLeituraEscritaComponent);
    return NnLeituraEscritaComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-multiplicacao/nn-multiplicacao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            \r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Multiplicação de dois números naturais:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_NeO_multiplicacao.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n         <!-- region Resultados -->\r\n         <div class=\"col-sm-12 col-md-12\">\r\n            <div *ngIf=\"showall\">\r\n            <section class=\"row results\">\r\n              <div *ngIf=\"loading\" class=\"col-sm-12\">\r\n                <ifmath-ng-loading-spinner></ifmath-ng-loading-spinner>\r\n              </div> \r\n                <div *ngIf=\"!loading\" class=\"col-sm-12\">\r\n                    <li class=\"mresults results__item\" *ngFor=\"let resultado of resultados; let i = index\">\r\n                        <div [attr.data-target]=\"'#resultado'+i\" data-toggle=\"collapse\">\r\n                          <div class=\"results__item__icon\">\r\n                            <div *ngIf=\"'#resultado'+i; else elseBlock\">\r\n                              <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                            </div>\r\n                            <ng-template #elseBlock>\r\n                              <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__up\" aria-hidden=\"true\"></i>\r\n                            </ng-template>\r\n                          </div>\r\n                          <div id=\"{{'operacao'+i}}\" *ngIf = \"!(resultados.length-1==i)\"> \r\n                            <div class=\"multoperation\">\r\n                              <div class=\"leftovers\" [innerHTML] = \"leftovers1[i]\" *ngIf=\"leftovers1[i]!==undefined\">\r\n                  \r\n                              </div>\r\n                              <div class=\"topnumber\" [innerHTML] =\"topnumber[i]\" *ngIf=\"topnumber[i]!==undefined && sumresult[i]=='-'\">\r\n                                \r\n                              </div>\r\n                              <div class=\"bottomnumber\" [innerHTML] = \"bottomnumber[i]\" *ngIf=\"bottomnumber[i]!==undefined && sumresult[i]=='-'\" ></div>\r\n                              \r\n                              <div class = \"leftovers\" [innerHTML] = \"leftovers2[i]\" *ngIf=\"leftovers2[i]!==undefined\"></div>  \r\n                              <div class=\"digit plussign\" *ngIf=\"!(sumresult[i]=='-')\">+</div>  \r\n                              <div class=\"multresults\" >\r\n                                <div *ngFor = \"let mresult of mresults[i]; let t = index\" id=\"{{'multresult'+t}}\"class = \"multresult\"  >\r\n                                  <div id= \"{{'mresult'+t}}\"[innerHTML] = \"mresult\"></div>\r\n                                </div>\r\n                                \r\n                              </div>\r\n                              <div class=\"padme\">\r\n                                \r\n                                <div class=\"sumresult multresult\" [innerHTML] =\"sumresult[i]\" *ngIf=\"sumresult[i]!='-'\">\r\n                                \r\n                                </div>\r\n                                <div class=\"clear\"></div>\r\n                              </div>\r\n                            </div>\r\n                  \r\n                          </div>\r\n                          <div class=\"operacao\" id =\"{{'operacao+i'}}\" *ngIf = \"resultados.length-1==i\">\r\n                            <div class=\"finalresult\" [innerHTML]=\"resultado.html\">\r\n\r\n                            </div>\r\n\r\n                          </div>\r\n                            \r\n                          \r\n                        </div>\r\n                        <div id=\"{{'resultado'+ i}}\" class=\"explicacao collapse results__item__text\">\r\n                          <div [innerHTML]=\"resultado.explicacao\"></div>\r\n                        </div>\r\n                      </li>\r\n                  </div>\r\n                \r\n            </section>\r\n            </div>\r\n            <button class=\"btn btn-sucess\" *ngIf=\"perfomedcalculus\" (click)=\"toggle()\">Mostrar/Esconder Passos</button>\r\n            <div *ngIf=\"!showall\">\r\n                <div class=\"finalresult\" [innerHTML] = \"resultados[resultados.length-1]!= null?resultados[resultados.length-1].html :'' \"></div>\r\n            </div> \r\n            \r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-multiplicacao/nn-multiplicacao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n:host ::ng-deep .clear {\n  clear: both; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n\n:host ::ng-deep .resultnumber {\n  clear: both;\n  font-size: 7.5vh;\n  width: inherit; }\n\n:host ::ng-deep .multresults {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  list-style: none; }\n\n:host ::ng-deep .multoperation {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  clear: both;\n  width: 100%;\n  padding-bottom: 2.3vh;\n  border-bottom: inset 0.3vh; }\n\n:host ::ng-deep .mresults {\n  list-style: none;\n  overflow: hidden; }\n\n:host ::ng-deep .padme {\n  padding-top: 4.4vh;\n  float: left;\n  clear: both; }\n\n:host ::ng-deep .sumresult {\n  border-top: solid 0.4vh;\n  margin-bottom: 0;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .multresult {\n  clear: both;\n  float: left;\n  font-size: 7.5vh;\n  min-height: 7.5vh;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  margin-top: -4.4vh; }\n\n:host ::ng-deep .highlightr {\n  color: red; }\n\n:host ::ng-deep .highlightb {\n  color: blue; }\n\n:host ::ng-deep .showbutton {\n  float: right;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .digit {\n  float: left;\n  min-width: 4.4vh;\n  max-width: 4.4vh;\n  margin: 0x; }\n\n:host ::ng-deep .plussign {\n  font-size: 6vh;\n  float: left; }\n\n:host ::ng-deep .operation {\n  float: left;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .topnumber {\n  font-size: 7.5vh;\n  clear: both;\n  margin-bottom: 0px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: 7vh;\n  margin-top: -2.4vh; }\n\n:host ::ng-deep .bottomnumber {\n  font-size: 7.5vh;\n  clear: both;\n  margin-top: 0px;\n  border-bottom: solid 0.4vh;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: auto; }\n\n:host ::ng-deep .finalresult {\n  font-size: 8vh;\n  float: left;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .explicacao {\n  float: left;\n  margin-top: 2vh;\n  clear: both;\n  font-size: 2.7vh;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .leftovers {\n  font-size: 3.5vh;\n  float: left;\n  color: grey;\n  clear: both; }\n\n@media only screen and (max-width: 500px) {\n  :host ::ng-deep .leftovers {\n    font-size: 1.2vh; }\n  :host ::ng-deep .finalresult {\n    font-size: 3.2vh; }\n  :host ::ng-deep .padme {\n    padding: 0px; }\n  :host ::ng-deep .plussign {\n    font-size: 3vh; }\n  :host ::ng-deep .multresult {\n    font-size: 2.7vh;\n    min-height: 2.7vh;\n    margin: 0px; }\n  :host ::ng-deep .sumresult {\n    margin-top: 0px; }\n  :host ::ng-deep .topnumber {\n    font-size: 2.7vh;\n    margin-top: 0px; }\n  :host ::ng-deep .bottomnumber {\n    font-size: 2.7vh;\n    margin-top: -3.1vh; }\n  :host ::ng-deep .digit {\n    min-width: 1.7vh;\n    max-width: 1.7vh; }\n  :host ::ng-deep .explicacao {\n    font-size: 1.3vh; }\n  :host ::ng-deep .resultnumber {\n    font-size: 2.7vh; } }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-multiplicacao/nn-multiplicacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnMultiplicacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NnMultiplicacaoComponent = /** @class */ (function () {
    function NnMultiplicacaoComponent(fb, _servico, route) {
        this.fb = fb;
        this._servico = _servico;
        this.route = route;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.showall = false;
        this.perfomedcalculus = false;
    }
    NnMultiplicacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultados = [];
        var numbera;
        var numberb;
        this.route.queryParams.subscribe(function (params) {
            numbera = Math.abs(params['a']);
            numberb = Math.abs(params['b']);
        });
        //Verifica se parametros foram recebidos
        if (numbera && numberb) {
            this.loading = true;
            this._servico.postMultiplicacaoS(numbera, numberb)
                .take(1)
                // .do({this.loading = false;})
                .subscribe(function (response) {
                if (response.sucesso) {
                    _this.resultados = response.objeto;
                    _this.paintValues();
                    _this.perfomedcalculus = true;
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
        }
    };
    NnMultiplicacaoComponent.prototype.toggle = function () {
        if (this.showall) {
            this.showall = false;
        }
        else {
            this.showall = true;
        }
    };
    NnMultiplicacaoComponent.prototype.paintValues = function () {
        var a;
        var b;
        this.topnumber = []; // Indice 0
        this.bottomnumber = []; // Indice 1
        this.leftovers1 = []; // Indice 2 
        this.leftovers2 = []; // Indice 3
        this.mresults = []; // Indice 4
        this.sumresult = []; // Indice 5
        this.finalanswer = "";
        var ba = this.resultados.length;
        for (var x = 0; x < ba; x++) {
            var at;
            at = this.resultados[x].html;
            a = at.split(",");
            if (a.length < 2) {
                continue;
            }
            var c = a[0];
            if (a[0] == "-") {
                b = "&nbsp;";
            }
            else {
                b = "";
                for (var y = 0; y < c.length; y++) {
                    if (c.charAt(y) == "&") {
                        b = b + "<div class='digit highlightb'>" + c.charAt(y + 1) + "</div>";
                        y++;
                    }
                    else if (c.charAt(y) == "_") {
                        b = b + "<div class='digit'>&nbsp</div>";
                    }
                    else {
                        b = b + "<div class='digit'>" + c.charAt(y) + "</div>";
                    }
                }
            }
            this.topnumber.push(b);
            c = a[1];
            if (a[1] == "-") {
                b = "&nbsp;";
            }
            else {
                b = "";
                for (var y = 0; y < c.length; y++) {
                    if (c.charAt(y) == "&") {
                        b = b + "<div class='digit highlightr'>" + c.charAt(y + 1) + "</div>";
                        y++;
                    }
                    else if (c.charAt(y) == "_") {
                        b = b + "<div class='digit'>&nbsp;</div>";
                    }
                    else {
                        b = b + "<div class='digit'>" + c.charAt(y) + "</div>";
                    }
                }
            }
            this.bottomnumber.push(b);
            var d = a[2].split("s");
            var e;
            if (a[2] == "-") {
                e = ["&nbsp;"];
            }
            else {
                e = [];
                for (var y = 0; y < d.length; y++) {
                    c = d[y];
                    b = "";
                    for (var z = 0; z < c.length; z++) {
                        if (c.charAt(z) == "_") {
                            b = b + "<div class='digit'>&nbsp;</div>";
                        }
                        else {
                            b = b + "<div class='digit'>" + c.charAt(z) + "</div>";
                        }
                    }
                    e.push(b);
                }
            }
            this.mresults.push(e);
            c = a[3];
            if (a[3] == "-") {
                b = "&nbsp;";
            }
            else {
                b = "";
                for (var y = 0; y < c.length; y++) {
                    if (c.charAt(y) == "_") {
                        b = b + "<div class='digit'>&nbsp;</div>";
                    }
                    else {
                        b = b + "<div class='digit'>" + c.charAt(y) + "</div>";
                    }
                }
            }
            this.leftovers1.push(b);
            c = a[4];
            if (a[4] == "-") {
                b = "&nbsp;";
            }
            else {
                b = "";
                for (var y = 0; y < c.length; y++) {
                    if (c.charAt(y) == "&") {
                        b = b + "<div class='digit highlightr'>" + c[y + 1] + "</div>";
                        y++;
                    }
                    else if (c.charAt(y) == "_") {
                        b = b + "<div class='digit'>&nbsp</div>";
                    }
                    else {
                        b = b + "<div class='digit'>" + c.charAt(y) + "</div>";
                    }
                }
            }
            this.leftovers2.push(b);
            c = a[5];
            if (a[5] == "-") {
                b = '-';
            }
            else {
                b = "";
                for (var y = 0; y < c.length; y++) {
                    if (c.charAt(y) == "_") {
                        b = b + "<div class='digit'>&nbsp</div>";
                    }
                    else {
                        b = b + "<div class='digit'>" + c.charAt(y) + "</div>";
                    }
                }
            }
            this.sumresult.push(b);
        }
    };
    NnMultiplicacaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postMultiplicacao(numerosNaturais)
            .take(1)
            // .do({this.loading = false;})
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.resultados = response.objeto;
                _this.paintValues();
                _this.perfomedcalculus = true;
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
    NnMultiplicacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-multiplicacao/nn-multiplicacao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-multiplicacao/nn-multiplicacao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__["a" /* ServicoNumerosNaturais */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], NnMultiplicacaoComponent);
    return NnMultiplicacaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-sidebar/nn-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"sidebar-nav\">\r\n    <ul class=\"list-group  list-group-collapse\">\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['nn_descricao']\">\r\n        Descrição\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['nn_leitura_escrita']\">\r\n          Escrita de um Número\r\n        </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['nn_antecessor_sucessor']\">\r\n            Antecessor e Sucessor\r\n        </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['nn_comparacao-numeros']\">\r\n          Comparação entre Números\r\n        </li>\r\n       <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['nn_adicao']\">\r\n          Adição\r\n         </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['nn_subtracao']\">\r\n          Subtração\r\n       </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['nn_multiplicacao']\">\r\n          Multiplicação\r\n       </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['nn_divisao']\">\r\n         Divisão\r\n      </li>\r\n    </ul>\r\n  </section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-sidebar/nn-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnSidebarComponent; });
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

var NnSidebarComponent = /** @class */ (function () {
    function NnSidebarComponent() {
    }
    NnSidebarComponent.prototype.ngOnInit = function () {
    };
    NnSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nn-sidebar',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-sidebar/nn-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NnSidebarComponent);
    return NnSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-subtracao/nn-subtracao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n        <div class=\"row ifmath-conteudo__titulo\">\r\n            <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n                <h3>Subtração de dois números naturais:</h3>\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- Title -->\r\n            <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n                <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                    src=\"assets/images/formulas/formula_NeO_subtracao.png\"><br />\r\n                <br />\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-8\">\r\n                <!-- Fields -->\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                    <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-md-12 input-group\">\r\n                    <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                    <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                        aria-describedby=\"sizing-addon2\">\r\n                </div>\r\n                <div>\r\n                    <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                        *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                        invalido!</span>\r\n                </div>\r\n                <br>\r\n\r\n                <!-- buttons -->\r\n                <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                    <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                    <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                        value=\"Limpar\">Limpar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <!-- endregion -->\r\n    <div class=\"row\">\r\n        <!-- region Resultados -->\r\n        <div class=\"col-sm-12 col-md-12\">\r\n            <ifmath-ng-resultshtml [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-resultshtml>\r\n        </div>\r\n        <!-- endregion -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-subtracao/nn-subtracao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n\n:host ::ng-deep .resultnumber {\n  clear: both;\n  font-size: 3.5vh;\n  width: inherit; }\n\n:host ::ng-deep .digit {\n  float: left;\n  min-width: 4.4vh;\n  max-width: 4.4vh;\n  margin: 0x; }\n\n:host ::ng-deep .seta-4 {\n  border-top: 20px solid black;\n  border-left: 25px solid transparent;\n  border-right: 25px solid transparent;\n  margin: 20px 0px 10px 15%;\n  float: left; }\n\n:host ::ng-deep .fa {\n  clear: both; }\n\n:host ::ng-deep .addoperation {\n  display: inline-block;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  clear: left; }\n\n:host ::ng-deep .addoperation2 {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left; }\n\n:host ::ng-deep .step {\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .halfnumber {\n  font-size: 2.35vh; }\n\n:host ::ng-deep .topnumber {\n  font-size: 3.5vh;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: auto;\n  margin-top: 0; }\n\n:host ::ng-deep .topUnity {\n  font-size: 3.5vh;\n  clear: both;\n  margin-bottom: 0px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: 7vh;\n  margin-top: -2.4vh; }\n\n:host ::ng-deep .downnumber {\n  font-size: 3.5vh;\n  clear: both;\n  margin-top: 0px;\n  border-bottom: solid 0.4vh;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  float: left;\n  height: auto; }\n\n:host ::ng-deep .finalresult {\n  font-size: 8vh; }\n\n:host ::ng-deep .leftover {\n  font-size: 3.5vh;\n  float: left;\n  color: grey;\n  margin-bottom: -4vh; }\n\n@media only screen and (max-width: 500px) {\n  :host ::ng-deep .leftover {\n    font-size: 1.2vh; }\n  :host ::ng-deep .finalresult {\n    font-size: 3.2vh; }\n  :host ::ng-deep .topnumber {\n    font-size: 2.7vh; }\n  :host ::ng-deep .downnumber {\n    font-size: 2.7vh;\n    margin-top: -3.1vh; }\n  :host ::ng-deep .digit {\n    min-width: 1.7vh;\n    max-width: 1.7vh; }\n  :host ::ng-deep .resultnumber {\n    font-size: 2.7vh; } }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-subtracao/nn-subtracao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnSubtracaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NnSubtracaoComponent = /** @class */ (function () {
    function NnSubtracaoComponent(fb, _servico, route) {
        this.fb = fb;
        this._servico = _servico;
        this.route = route;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    NnSubtracaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultados = [];
        var numbera;
        var numberb;
        this.route.queryParams.subscribe(function (params) {
            numbera = params['a'];
            numberb = params['b'];
        });
        //Verifica se parametros foram recebidos
        if (numbera && numberb) {
            numberb = Math.abs(numberb);
            numbera = Math.abs(numbera);
            this.loading = true;
            if (numberb > numbera) {
                var temp = numbera;
                numbera = numberb;
                numberb = temp;
            }
            this._servico.postSubtracaoS(numbera, numberb)
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
        }
    };
    NnSubtracaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postSubtracao(numerosNaturais)
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
    NnSubtracaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-subtracao/nn-subtracao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-subtracao/nn-subtracao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_numeros_naturais_service__["a" /* ServicoNumerosNaturais */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], NnSubtracaoComponent);
    return NnSubtracaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-view/nn-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n    <nn-sidebar class=\"slidebar\"></nn-sidebar>\r\n    <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/components/nn-view/nn-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NnViewComponent; });
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

var NnViewComponent = /** @class */ (function () {
    function NnViewComponent() {
    }
    NnViewComponent.prototype.ngOnInit = function () {
    };
    NnViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-view/nn-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], NnViewComponent);
    return NnViewComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/numeros-naturais.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumerosNaturaisModule", function() { return NumerosNaturaisModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__numeros_naturais_routing__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/numeros-naturais.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_numeros_naturais_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nn_view_nn_view_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-view/nn-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nn_sidebar_nn_sidebar_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-sidebar/nn-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_nn_descricao_nn_descricao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-descricao/nn-descricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nn_comparacao_numeros_nn_comparacao_numeros_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-comparacao-numeros/nn-comparacao-numeros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_nn_leitura_escrita_nn_leitura_escrita_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-leitura-escrita/nn-leitura-escrita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_nn_antecessor_sucessor_nn_antecessor_sucessor_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-antecessor-sucessor/nn-antecessor-sucessor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_nn_adicao_nn_adicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-adicao/nn-adicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_nn_subtracao_nn_subtracao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-subtracao/nn-subtracao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_nn_multiplicacao_nn_multiplicacao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-multiplicacao/nn-multiplicacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_nn_divisao_nn_divisao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-divisao/nn-divisao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var NumerosNaturaisModule = /** @class */ (function () {
    function NumerosNaturaisModule() {
    }
    NumerosNaturaisModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__numeros_naturais_routing__["a" /* NumerosNaturaisRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_nn_view_nn_view_component__["a" /* NnViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_nn_sidebar_nn_sidebar_component__["a" /* NnSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_nn_descricao_nn_descricao_component__["a" /* NnDescricaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_nn_comparacao_numeros_nn_comparacao_numeros_component__["a" /* NnComparacaoNumerosComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_nn_antecessor_sucessor_nn_antecessor_sucessor_component__["a" /* NnAntecessorSucessorComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_nn_leitura_escrita_nn_leitura_escrita_component__["a" /* NnLeituraEscritaComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_nn_adicao_nn_adicao_component__["a" /* NnAdicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_nn_subtracao_nn_subtracao_component__["a" /* NnSubtracaoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_nn_multiplicacao_nn_multiplicacao_component__["a" /* NnMultiplicacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_nn_divisao_nn_divisao_component__["a" /* NnDivisaoComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared_numeros_naturais_service__["a" /* ServicoNumerosNaturais */]]
        })
    ], NumerosNaturaisModule);
    return NumerosNaturaisModule;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/numeros-naturais.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumerosNaturaisRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nn_descricao_nn_descricao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-descricao/nn-descricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nn_view_nn_view_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-view/nn-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nn_comparacao_numeros_nn_comparacao_numeros_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-comparacao-numeros/nn-comparacao-numeros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nn_leitura_escrita_nn_leitura_escrita_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-leitura-escrita/nn-leitura-escrita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nn_antecessor_sucessor_nn_antecessor_sucessor_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-antecessor-sucessor/nn-antecessor-sucessor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nn_adicao_nn_adicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-adicao/nn-adicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nn_subtracao_nn_subtracao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-subtracao/nn-subtracao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nn_multiplicacao_nn_multiplicacao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-multiplicacao/nn-multiplicacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_nn_divisao_nn_divisao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-naturais/components/nn-divisao/nn-divisao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__components_nn_view_nn_view_component__["a" /* NnViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'nn_descricao',
                pathMatch: 'full',
            },
            {
                path: 'nn_descricao',
                component: __WEBPACK_IMPORTED_MODULE_2__components_nn_descricao_nn_descricao_component__["a" /* NnDescricaoComponent */]
            },
            {
                path: 'nn_comparacao-numeros',
                component: __WEBPACK_IMPORTED_MODULE_4__components_nn_comparacao_numeros_nn_comparacao_numeros_component__["a" /* NnComparacaoNumerosComponent */]
            },
            {
                path: 'nn_leitura_escrita',
                component: __WEBPACK_IMPORTED_MODULE_5__components_nn_leitura_escrita_nn_leitura_escrita_component__["a" /* NnLeituraEscritaComponent */]
            },
            {
                path: 'nn_antecessor_sucessor',
                component: __WEBPACK_IMPORTED_MODULE_6__components_nn_antecessor_sucessor_nn_antecessor_sucessor_component__["a" /* NnAntecessorSucessorComponent */]
            },
            {
                path: 'nn_adicao',
                component: __WEBPACK_IMPORTED_MODULE_7__components_nn_adicao_nn_adicao_component__["a" /* NnAdicaoComponent */]
            },
            {
                path: 'nn_subtracao',
                component: __WEBPACK_IMPORTED_MODULE_8__components_nn_subtracao_nn_subtracao_component__["a" /* NnSubtracaoComponent */]
            },
            {
                path: 'nn_multiplicacao',
                component: __WEBPACK_IMPORTED_MODULE_9__components_nn_multiplicacao_nn_multiplicacao_component__["a" /* NnMultiplicacaoComponent */]
            },
            {
                path: 'nn_divisao',
                component: __WEBPACK_IMPORTED_MODULE_10__components_nn_divisao_nn_divisao_component__["a" /* NnDivisaoComponent */]
            },
        ]
    }
];
var NumerosNaturaisRoutingModule = /** @class */ (function () {
    function NumerosNaturaisRoutingModule() {
    }
    NumerosNaturaisRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], NumerosNaturaisRoutingModule);
    return NumerosNaturaisRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-naturais/shared/numeros-naturais.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoNumerosNaturais; });
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




var ServicoNumerosNaturais = /** @class */ (function () {
    function ServicoNumerosNaturais(_http) {
        this._http = _http;
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url;
    }
    ServicoNumerosNaturais.prototype.postComparacaoNumeros = function (numerosNaturais) {
        var url = this.baseUrl + '/api/numeros_naturais/comparacao-numeros';
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postLeituraEscrita = function (numerosNaturais) {
        var url = this.baseUrl + '/api/leitura_escrita/ler_escrever_numero';
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postAntecessorSucessor = function (numerosNaturais) {
        var url = this.baseUrl + '/api/antecessor_sucessor/ver_antecessor_sucessor';
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postAdicao = function (numerosNaturais) {
        var url = this.baseUrl + '/api/adicao/somar';
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postAdicaoS = function (na, nb) {
        var url = this.baseUrl + '/api/adicao/somar';
        var numerosNaturais;
        (function (numerosNaturais) {
            numerosNaturais[numerosNaturais["a"] = na] = "a";
            numerosNaturais[numerosNaturais["b"] = nb] = "b";
        })(numerosNaturais || (numerosNaturais = {}));
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postSubtracao = function (numerosNaturais) {
        var url = this.baseUrl + '/api/numeros_naturais/subtracao';
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postSubtracaoS = function (na, nb) {
        var url = this.baseUrl + '/api/numeros_naturais/subtracao';
        var numerosNaturais;
        (function (numerosNaturais) {
            numerosNaturais[numerosNaturais["a"] = na] = "a";
            numerosNaturais[numerosNaturais["b"] = nb] = "b";
        })(numerosNaturais || (numerosNaturais = {}));
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postMultiplicacao = function (numerosNaturais) {
        var url = this.baseUrl + '/api/numeros_naturais/multiplicacao';
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postMultiplicacaoS = function (numbera, numberb) {
        var url = this.baseUrl + '/api/numeros_naturais/multiplicacao';
        var numerosNaturais;
        (function (numerosNaturais) {
            numerosNaturais[numerosNaturais["a"] = numbera] = "a";
            numerosNaturais[numerosNaturais["b"] = numberb] = "b";
        })(numerosNaturais || (numerosNaturais = {}));
        ;
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postDivisao = function (numerosNaturais) {
        var url = this.baseUrl + '/api/numeros_naturais/divisao';
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais.prototype.postDivisaoS = function (numbera, numberb) {
        var url = this.baseUrl + '/api/numeros_naturais/divisao';
        var numerosNaturais;
        (function (numerosNaturais) {
            numerosNaturais[numerosNaturais["a"] = numbera] = "a";
            numerosNaturais[numerosNaturais["b"] = numberb] = "b";
        })(numerosNaturais || (numerosNaturais = {}));
        var body = JSON.stringify(numerosNaturais);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosNaturais = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicoNumerosNaturais);
    return ServicoNumerosNaturais;
}());



/***/ })

});
//# sourceMappingURL=numeros-naturais.module.chunk.js.map