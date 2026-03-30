webpackJsonp(["numeros-inteiros.module"],{

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/expressoes/expressoes.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  expressoes works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/expressoes/expressoes.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/expressoes/expressoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressoesComponent; });
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

var ExpressoesComponent = /** @class */ (function () {
    function ExpressoesComponent() {
    }
    ExpressoesComponent.prototype.ngOnInit = function () {
    };
    ExpressoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-expressoes',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/expressoes/expressoes.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/expressoes/expressoes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpressoesComponent);
    return ExpressoesComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-adicao/ni-adicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n      <div class=\"row ifmath-conteudo__titulo\">\r\n          <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n              <h3>Soma de dois números inteiros:</h3>\r\n          </span>\r\n      </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n              <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                  src=\"assets/images/formulas/formula_NeO_soma.png\"><br />\r\n              <br />\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                  <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                      <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                          *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                          invalido!</span>\r\n                  </div>\r\n                  <br>\r\n              \r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                  <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n\r\n              <!-- buttons -->\r\n              <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n      <!-- region Resultados -->\r\n      <div class=\"col-sm-12 col-md-12\">\r\n        <li class=\"aresults results__item\" *ngFor=\"let resultado of resultados; let i = index\">\r\n            <div class=\"results__item__icon\">\r\n                <div [attr.data-target]=\"'#resultado'+i\" data-toggle=\"collapse\">\r\n                <div *ngIf=\"'#resultado'+i; else elseBlock\">\r\n                  <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <ng-template #elseBlock>\r\n                  <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__up\" aria-hidden=\"true\"></i>\r\n                </ng-template>\r\n                </div>\r\n            </div>\r\n            <div class=\"expression\" [innerHtml] = \"expression[i]\"></div>\r\n            <div id=\"{{'resultado'+i}}\" class=\"desc collapse results__item__text\">\r\n                <div class = \"desctext\" [innerHtml] = \"desc[i]\"> </div>\r\n                <a class = \"link\" *ngIf = \"signal[i]==1\" [routerLink]=\"['/numeros_operacoes/numeros_naturais/nn_adicao']\" [queryParams]= \"{a: link[i][0], b: link[i][1]}\">O processo de soma pode ser visto aqui</a>\r\n                <a class = \"link\" *ngIf = \"signal[i]==2\" [routerLink]=\"['/numeros_operacoes/numeros_naturais/nn_subtracao']\" [queryParams]= \"{a: link[i][0], b: link[i][1]}\">O processo de subtração pode ser visto aqui</a>\r\n            </div>\r\n        </li>\r\n          \r\n      </div>\r\n      <!-- endregion -->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-adicao/ni-adicao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n\n:host ::ng-deep .expression {\n  font-size: 7.5vh; }\n\n:host ::ng-deep .aresults {\n  list-style: none; }\n\n:host ::ng-deep .showbutton {\n  float: right;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .desc {\n  font-size: 2.3vh; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-adicao/ni-adicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiAdicaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NiAdicaoComponent = /** @class */ (function () {
    function NiAdicaoComponent(fb, _servico, router, sanitizer) {
        this.fb = fb;
        this._servico = _servico;
        this.router = router;
        this.sanitizer = sanitizer;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.showall = false;
        this.perfomedcalculus = false;
        this.sanitizer.bypassSecurityTrustUrl(" ");
    }
    NiAdicaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
        this.desc = [];
        this.expression = [];
        this.signal = [];
        this.link = [];
    };
    NiAdicaoComponent.prototype.toggle = function () {
        if (this.showall) {
            this.showall = false;
        }
        else {
            this.showall = true;
        }
    };
    NiAdicaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postAdicao(numerosNaturais)
            .take(1)
            // .do({this.loading = false;})
            .subscribe(function (response) {
            console.log(response);
            if (response.sucesso) {
                //Reinicia valores
                _this.resultados = [];
                _this.link = [];
                _this.desc = [];
                _this.expression = [];
                _this.signal = [];
                //Obtem valores do servidor
                _this.resultados = response.objeto;
                var i = _this.resultados.length;
                //Organiza os valores
                for (var x = 0; x < i; x++) {
                    //Adiciona expressao ao passo
                    _this.expression.push(_this.resultados[x].html);
                    //Separa descricao do link
                    var linkdesc = _this.resultados[x].explicacao.split("&");
                    //Vetor para ser adicionado ao vetor de vetores dos valores para o link.
                    var values = [];
                    //Verifica se valores para a geracao de um link foram enviados
                    if (linkdesc.length > 1) {
                        //Organiza os valores do link
                        var linkvalues = linkdesc[1].split(",");
                        //O primeiro valor indica o sinal da operacao
                        if (linkvalues[0] == "+") {
                            _this.signal.push(1);
                        }
                        else {
                            _this.signal.push(2);
                        }
                        //Adiciona os valores
                        values.push(linkvalues[1]);
                        values.push(linkvalues[2]);
                    }
                    //Caso nao tenha sido enviado link usa a variavel signal com valor 0 para indicar isso.
                    else {
                        _this.signal.push(0);
                    }
                    //Adiciona os valores existentes ou não para o link
                    _this.link.push(values);
                    //Adiciona a descricao
                    _this.desc.push(linkdesc[0]);
                }
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
    NiAdicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ni-adicao',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-adicao/ni-adicao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-adicao/ni-adicao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__["a" /* ServicoNumerosInteiros */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NiAdicaoComponent);
    return NiAdicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-antecessor-sucessor/ni-antecessor-sucessor.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n      <div class=\"row ifmath-conteudo__titulo\">\r\n\r\n          <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n              <h3>Gera antecessor e sucessor de um número inteiro:</h3>\r\n          </span>\r\n      </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n              <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                  src=\"assets/images/formulas/formula_NN_antecessor_sucessor.png\"><br />\r\n              <br />\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 \">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">n</span>\r\n                  <input type=\"text\" name=\"n\" formControlName=\"n\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('n').hasError('required') && form.get('n').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n\r\n              <!-- buttons -->\r\n              <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n      <!-- region Resultados -->\r\n      <div class=\"col-sm-12 col-md-12\">\r\n          <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n      </div>\r\n      <!-- endregion -->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-antecessor-sucessor/ni-antecessor-sucessor.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 4%; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-antecessor-sucessor/ni-antecessor-sucessor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiAntecessorSucessorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__numeros_inteiros_shared_numeros_inteiros_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NiAntecessorSucessorComponent = /** @class */ (function () {
    function NiAntecessorSucessorComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            n: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    NiAntecessorSucessorComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    NiAntecessorSucessorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosInteiros = this.form.value;
        this._servico.postAntecessorSucessor(numerosInteiros)
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
    NiAntecessorSucessorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ni-antecessor-sucessor',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-antecessor-sucessor/ni-antecessor-sucessor.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-antecessor-sucessor/ni-antecessor-sucessor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__numeros_inteiros_shared_numeros_inteiros_service__["a" /* ServicoNumerosInteiros */]])
    ], NiAntecessorSucessorComponent);
    return NiAntecessorSucessorComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-comparacao-numeros/ni-comparacao-numeros.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n      <div class=\"row ifmath-conteudo__titulo\">\r\n          <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n              <h3>Comparação entre dois números inteiros:</h3>\r\n          </span>\r\n      </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-12 ifmath-form__title ifmath-conteudo__borda\">\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                  <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                  <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n\r\n              <!-- buttons -->\r\n              <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n      <!-- region Resultados -->\r\n      <div class=\"col-sm-12 col-md-12\">\r\n          \r\n          <section class=\"row results\">\r\n              <div *ngIf=\"loading\" class=\"col-sm-12 col-md-12\">\r\n                  <ifmath-ng-loading-spinner></ifmath-ng-loading-spinner>\r\n              </div> \r\n              <div *ngIf=\"!loading\" class=\"col-sm-12\">\r\n                  <li class = \"cresult results__item\" *ngFor=\"let resultado of resultados; let i = index\">\r\n                      <div [attr.data-target]=\"'#resultado'+i\" data-toggle=\"collapse\">\r\n                          <div class=\"results__item__icon\">\r\n                              <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__up\" aria-hidden=\"true\"></i>\r\n                          </div>\r\n                          <div class = \"comparacaostep\">\r\n                              <div class=\"numbera number\" [innerHTML] = \"numeros[i][1]\"></div>\r\n                              <div class=\"sign number\" [innerHTML]=\"numeros[i][0]\"></div>\r\n                              <div class=\"numberb number\" [innerHTML]=\"numeros[i][2]\"></div>\r\n                          </div>\r\n                      </div>\r\n                      <div id=\"{{'resultado'+ i}}\" class=\"explicacao collapse results__item__text\">\r\n                          <div [innerHTML]=\"resultado.explicacao\"></div>\r\n                      </div>\r\n                  </li>\r\n                  \r\n              </div>\r\n          </section>\r\n      </div>\r\n      <!-- endregion -->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-comparacao-numeros/ni-comparacao-numeros.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n:host ::ng-deep .number {\n  float: left;\n  font-size: 6.5vh; }\n\n:host ::ng-deep .cresult {\n  list-style: none;\n  clear: both; }\n\n:host ::ng-deep .comparacaostep {\n  clear: both;\n  float: left; }\n\n:host ::ng-deep .explicacao {\n  float: left;\n  clear: both; }\n\n:host ::ng-deep .showbutton {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-comparacao-numeros/ni-comparacao-numeros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiComparacaoNumerosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NiComparacaoNumerosComponent = /** @class */ (function () {
    function NiComparacaoNumerosComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    NiComparacaoNumerosComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    NiComparacaoNumerosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosInteiros = this.form.value;
        this.numeros = [];
        this._servico.postComparacaoNumeros(numerosInteiros)
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
    NiComparacaoNumerosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ni-comparacao-numeros',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-comparacao-numeros/ni-comparacao-numeros.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-comparacao-numeros/ni-comparacao-numeros.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__["a" /* ServicoNumerosInteiros */]])
    ], NiComparacaoNumerosComponent);
    return NiComparacaoNumerosComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-descricao/ni-descricao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-description\">\r\n    \r\n    <br>\r\n    <h3>Os números Inteiros</h3>\r\n    <p>Os números inteiros (Z) são compostos pelos números naturais (N), e por todos os números inteiros negativos.\r\n        Podemos representá-los em uma reta numérica da seguinte maneira:</p>\r\n        <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n        src=\"assets/images/retainteiros.jfif\">\r\n    \r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-descricao/ni-descricao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-descricao/ni-descricao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiDescricaoComponent; });
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

var NiDescricaoComponent = /** @class */ (function () {
    function NiDescricaoComponent() {
    }
    NiDescricaoComponent.prototype.ngOnInit = function () {
    };
    NiDescricaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-descricao/ni-descricao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-descricao/ni-descricao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiDescricaoComponent);
    return NiDescricaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-divisao/ni-divisao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n      <div class=\"row ifmath-conteudo__titulo\">\r\n          <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n              <h3>Divisão de dois números inteiros:</h3>\r\n          </span>\r\n      </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n              <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                  src=\"assets/images/formulas/formula_NeO_divisao.png\"><br />\r\n              <br />\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                  <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                  <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n\r\n              <!-- buttons -->\r\n              <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n      <!-- region Resultados -->\r\n      <div class=\"col-sm-12 col-md-12\">\r\n        <li class=\"aresults results__item\" *ngFor=\"let resultado of resultados; let i = index\">\r\n            <div class=\"results__item__icon\">\r\n                <div [attr.data-target]=\"'#resultado'+i\" data-toggle=\"collapse\">\r\n                <div *ngIf=\"'#resultado'+i; else elseBlock\">\r\n                  <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <ng-template #elseBlock>\r\n                  <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__up\" aria-hidden=\"true\"></i>\r\n                </ng-template>\r\n                </div>\r\n            </div>\r\n            <div class=\"expression\" [innerHtml] = \"expression[i]\"></div>\r\n            <div id=\"{{'resultado'+i}}\" class=\"desc collapse results__item__text\">\r\n                <div class = \"desctext\" [innerHtml] = \"desc[i]\"> </div>\r\n                <a class = \"link\" *ngIf = \"signal[i]==1\" [routerLink]=\"['/numeros_operacoes/numeros_naturais/nn_divisao']\" [queryParams]= \"{a: link[i][0], b: link[i][1]}\">O processo de divisão pode ser visto aqui</a>\r\n            </div>\r\n        </li>\r\n      </div>\r\n      <!-- endregion -->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-divisao/ni-divisao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n\n:host ::ng-deep .expression {\n  font-size: 7.5vh; }\n\n:host ::ng-deep .aresults {\n  list-style: none; }\n\n:host ::ng-deep .showbutton {\n  float: right;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .desc {\n  font-size: 2.3vh; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-divisao/ni-divisao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiDivisaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NiDivisaoComponent = /** @class */ (function () {
    function NiDivisaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.showall = false;
        this.perfomedcalculus = false;
    }
    NiDivisaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    NiDivisaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postDivisao(numerosNaturais)
            .take(1)
            // .do({this.loading = false;})
            .subscribe(function (response) {
            console.log(response);
            if (response.sucesso) {
                //Reinicia valores
                _this.resultados = [];
                _this.link = [];
                _this.desc = [];
                _this.expression = [];
                _this.signal = [];
                //Obtem valores do servidor
                _this.resultados = response.objeto;
                var i = _this.resultados.length;
                //Organiza os valores
                for (var x = 0; x < i; x++) {
                    //Adiciona expressao ao passo
                    _this.expression.push(_this.resultados[x].html);
                    //Separa descricao do link
                    var linkdesc = _this.resultados[x].explicacao.split("&");
                    //Vetor para ser adicionado ao vetor de vetores dos valores para o link.
                    var values = [];
                    //Verifica se valores para a geracao de um link foram enviados
                    if (linkdesc.length > 1) {
                        //Organiza os valores do link
                        var linkvalues = linkdesc[1].split(",");
                        _this.signal.push(1);
                        //Adiciona os valores
                        values.push(linkvalues[0]);
                        values.push(linkvalues[1]);
                    }
                    //Caso nao tenha sido enviado link usa a variavel signal com valor 0 para indicar isso.
                    else {
                        _this.signal.push(0);
                    }
                    //Adiciona os valores existentes ou não para o link
                    _this.link.push(values);
                    //Adiciona a descricao
                    _this.desc.push(linkdesc[0]);
                }
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
    NiDivisaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ni-divisao',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-divisao/ni-divisao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-divisao/ni-divisao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__["a" /* ServicoNumerosInteiros */]])
    ], NiDivisaoComponent);
    return NiDivisaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-modulo/ni-modulo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region formulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n      <div class=\"row ifmath-conteudo__titulo\">\r\n          <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n              <h3>Módulo de um número inteiro</h3>\r\n          </span>\r\n          \r\n      </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda \">\r\n            <div class = \"title\">\r\n              |-a| = a <br>\r\n              |+a| = a\r\n            </div>\r\n            <br />\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8 \">\r\n              <!-- Fields -->\r\n             \r\n              <div class=\"col-md-12 input-group\">\r\n                  \r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                  <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n              \r\n\r\n              <!-- buttons -->\r\n              <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n      <!-- region Resultados -->\r\n      <div class=\"col-sm-12 col-md-12\">\r\n        <ifmath-ng-results [loading]=\"loading\" [resultados]=\"resultados\"></ifmath-ng-results>\r\n      </div>\r\n      <!-- endregion -->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-modulo/ni-modulo.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n:host ::ng-deep .number {\n  float: left;\n  font-size: 6.5vh; }\n\n:host ::ng-deep .cresult {\n  list-style: none;\n  clear: both; }\n\n:host ::ng-deep .comparacaostep {\n  clear: both;\n  float: left; }\n\n:host ::ng-deep .explicacao {\n  float: left;\n  clear: both; }\n\n:host ::ng-deep .showbutton {\n  float: right; }\n\n:host ::ng-deep .title {\n  font-size: 5vh;\n  border: 2px solid black;\n  border-radius: 35px;\n  font-style: \"Courier\"; }\n\n:host ::ng-deep .forms {\n  float: left; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-modulo/ni-modulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiModuloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NiModuloComponent = /** @class */ (function () {
    function NiModuloComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    NiModuloComponent.prototype.ngOnInit = function () {
        this.resultados = [];
    };
    NiModuloComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosInteiros = this.form.value;
        this._servico.postModulo(numerosInteiros)
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
    NiModuloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ni-modulo',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-modulo/ni-modulo.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-modulo/ni-modulo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__["a" /* ServicoNumerosInteiros */]])
    ], NiModuloComponent);
    return NiModuloComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-multiplicacao/ni-multiplicacao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n      <div class=\"row ifmath-conteudo__titulo\">\r\n          <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n              <h3>Multiplicacao de dois números inteiros</h3>\r\n          </span>\r\n      </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n              <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                  src=\"assets/images/formulas/formula_NeO_multiplicacao.png\"><br />\r\n              <br />\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                  <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                      <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                          *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                          invalido!</span>\r\n                  </div>\r\n                  <br>\r\n              \r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                  <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n\r\n              <!-- buttons -->\r\n              <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n      <!-- region Resultados -->\r\n      <div class=\"col-sm-12 col-md-12\">\r\n        <li class=\"aresults results__item\" *ngFor=\"let resultado of resultados; let i = index\">\r\n            <div class=\"results__item__icon\">\r\n                <div [attr.data-target]=\"'#resultado'+i\" data-toggle=\"collapse\">\r\n                <div *ngIf=\"'#resultado'+i; else elseBlock\">\r\n                  <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <ng-template #elseBlock>\r\n                  <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__up\" aria-hidden=\"true\"></i>\r\n                </ng-template>\r\n                </div>\r\n            </div>\r\n            <div class=\"expression\" [innerHtml] = \"expression[i]\"></div>\r\n            <div id=\"{{'resultado'+i}}\" class=\"desc collapse results__item__text\">\r\n                <div class = \"desctext\" [innerHtml] = \"desc[i]\"> </div>\r\n                <a class = \"link\" *ngIf = \"i==1\" [routerLink]=\"['/numeros_operacoes/numeros_naturais/nn_multiplicacao']\" [queryParams]= \"{a: numbera, b: numberb}\">O processo de multiplicação pode ser visto aqui</a>\r\n            </div>\r\n        </li>\r\n          \r\n      </div>\r\n      <!-- endregion -->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-multiplicacao/ni-multiplicacao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n\n:host ::ng-deep .expression {\n  font-size: 7.5vh; }\n\n:host ::ng-deep .aresults {\n  list-style: none; }\n\n:host ::ng-deep .showbutton {\n  float: right;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .desc {\n  font-size: 2.3vh; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-multiplicacao/ni-multiplicacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiMultiplicacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NiMultiplicacaoComponent = /** @class */ (function () {
    function NiMultiplicacaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.showall = false;
        this.perfomedcalculus = false;
    }
    NiMultiplicacaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
        this.desc = [];
        this.expression = [];
        this.numbera = '';
        this.numberb = '';
    };
    NiMultiplicacaoComponent.prototype.toggle = function () {
        if (this.showall) {
            this.showall = false;
        }
        else {
            this.showall = true;
        }
    };
    NiMultiplicacaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosInteiros = this.form.value;
        this._servico.postMultiplicacao(numerosInteiros)
            .take(1)
            // .do({this.loading = false;})
            .subscribe(function (response) {
            console.log(response);
            if (response.sucesso) {
                _this.resultados = response.objeto;
                //Obtem os valores de expressoes
                _this.expression = _this.resultados.map(function (a) { return a.html; });
                //Obtem os valores de descricao
                _this.desc = _this.resultados.map(function (a) { return a.explicacao; });
                //Separa os dados da descricao dos dados usados para a criacao do link
                var x = _this.desc[1].split('&');
                _this.desc[1] = x[0];
                //Obtem os dados do link
                var y = x[1].split(',');
                console.log(x);
                _this.numbera = y[0];
                _this.numberb = y[1];
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
    NiMultiplicacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ni-multiplicacao',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-multiplicacao/ni-multiplicacao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-multiplicacao/ni-multiplicacao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__["a" /* ServicoNumerosInteiros */]])
    ], NiMultiplicacaoComponent);
    return NiMultiplicacaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-sidebar/ni-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"sidebar-nav\">\r\n    <ul class=\"list-group  list-group-collapse\">\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ni_descricao']\">\r\n        Descrição\r\n      </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ni_antecessor_sucessor']\">\r\n            Antecessor e Sucessor\r\n        </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ni_comparacao_numeros']\">\r\n          Comparação entre Números\r\n        </li>\r\n        <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ni_modulo']\">\r\n          Modulo\r\n       </li>\r\n        <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ni_adicao']\">\r\n          Adição\r\n         </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ni_subtracao']\">\r\n          Subtração\r\n       </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ni_multiplicacao']\">\r\n          Multiplicação\r\n       </li>\r\n      <li id=\"selected-yellow\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['ni_divisao']\">\r\n         Divisão\r\n      </li>\r\n     \r\n    </ul>\r\n  </section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-sidebar/ni-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiSidebarComponent; });
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

var NiSidebarComponent = /** @class */ (function () {
    function NiSidebarComponent() {
    }
    NiSidebarComponent.prototype.ngOnInit = function () {
    };
    NiSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ni-sidebar',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-sidebar/ni-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NiSidebarComponent);
    return NiSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-subtracao/ni-subtracao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" #demoForm=\"ngForm\">\r\n      <div class=\"row ifmath-conteudo__titulo\">\r\n          <span class=\"ifmath-conteudo__txt-titulo\"><br>\r\n              <h3>Subtração de dois números inteiros</h3>\r\n          </span>\r\n      </div>\r\n      <div class=\"row\">\r\n          <!-- Title -->\r\n          <div class=\"col-sm-12 col-md-4 ifmath-form__title ifmath-conteudo__borda\">\r\n              <img class=\"ifmath-form_img-formula ifmath-form_img-formula--blackgrey\"\r\n                  src=\"assets/images/formulas/formula_NeO_subtracao.png\"><br />\r\n              <br />\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8\">\r\n              <!-- Fields -->\r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">a</span>\r\n                  <input type=\"text\" name=\"a\" formControlName=\"a\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                      <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                          *ngIf=\"form.get('a').hasError('required') && form.get('a').touched\">Campo\r\n                          invalido!</span>\r\n                  </div>\r\n                  <br>\r\n              \r\n              <div class=\"col-md-12 input-group\">\r\n                  <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">b</span>\r\n                  <input type=\"text\" name=\"b\" formControlName=\"b\" class=\"form-control\"\r\n                      aria-describedby=\"sizing-addon2\">\r\n              </div>\r\n              <div>\r\n                  <span class=\"ifmath-form__label ifmath-form__label--error\"\r\n                      *ngIf=\"form.get('b').hasError('required') && form.get('b').touched\">Campo\r\n                      invalido!</span>\r\n              </div>\r\n              <br>\r\n\r\n              <!-- buttons -->\r\n              <div class=\"col-sm-12 col-md-12 ifmath-form__button__group\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      [disabled]='form.invalid' value=\"Calcular\">Calcular</button>\r\n                  <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\"\r\n                      value=\"Limpar\">Limpar</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </form>\r\n  <!-- endregion -->\r\n  <div class=\"row\">\r\n      <!-- region Resultados -->\r\n      <div class=\"col-sm-12 col-md-12\">\r\n        <li class=\"aresults results__item\" *ngFor=\"let resultado of resultados; let i = index\">\r\n            <div class=\"results__item__icon\">\r\n                <div [attr.data-target]=\"'#resultado'+i\" data-toggle=\"collapse\">\r\n                <div *ngIf=\"'#resultado'+i; else elseBlock\">\r\n                  <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__down\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <ng-template #elseBlock>\r\n                  <i class=\"showbutton fa fa-arrow-circle-down results__item__icon__fa__up\" aria-hidden=\"true\"></i>\r\n                </ng-template>\r\n                </div>\r\n            </div>\r\n            <div class=\"expression\" [innerHtml] = \"expression[i]\"></div>\r\n            <div id=\"{{'resultado'+i}}\" class=\"desc collapse results__item__text\">\r\n                <div class = \"desctext\" [innerHtml] = \"desc[i]\"> </div>\r\n                <a class = \"link\" *ngIf = \"signal[i]==1\" [routerLink]=\"['/numeros_operacoes/numeros_naturais/nn_adicao']\" [queryParams]= \"{a: link[i][0], b: link[i][1]}\">O processo de soma pode ser visto aqui</a>\r\n                <a class = \"link\" *ngIf = \"signal[i]==2\" [routerLink]=\"['/numeros_operacoes/numeros_naturais/nn_subtracao']\" [queryParams]= \"{a: link[i][0], b: link[i][1]}\">O processo de subtração pode ser visto aqui</a>\r\n            </div>\r\n        </li>\r\n          \r\n      </div>\r\n      <!-- endregion -->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-subtracao/ni-subtracao.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.ifmath-form_img-formula {\n  margin-top: 12%; }\n\n:host ::ng-deep .expression {\n  font-size: 7.5vh; }\n\n:host ::ng-deep .aresults {\n  list-style: none; }\n\n:host ::ng-deep .showbutton {\n  float: right;\n  clear: both;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n:host ::ng-deep .desc {\n  font-size: 2.3vh; }\n"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-subtracao/ni-subtracao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiSubtracaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NiSubtracaoComponent = /** @class */ (function () {
    function NiSubtracaoComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.form = this.fb.group({
            a: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            b: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.showall = false;
        this.perfomedcalculus = false;
    }
    NiSubtracaoComponent.prototype.ngOnInit = function () {
        this.resultados = [];
        this.desc = [];
        this.expression = [];
        this.signal = [];
        this.link = [];
    };
    NiSubtracaoComponent.prototype.toggle = function () {
        if (this.showall) {
            this.showall = false;
        }
        else {
            this.showall = true;
        }
    };
    NiSubtracaoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var numerosNaturais = this.form.value;
        this._servico.postSubtracao(numerosNaturais)
            .take(1)
            // .do({this.loading = false;})
            .subscribe(function (response) {
            console.log(response);
            if (response.sucesso) {
                //Reinicia valores
                _this.resultados = [];
                _this.link = [];
                _this.desc = [];
                _this.expression = [];
                _this.signal = [];
                //Obtem valores do servidor
                _this.resultados = response.objeto;
                var i = _this.resultados.length;
                //Organiza os valores
                for (var x = 0; x < i; x++) {
                    //Adiciona expressao ao passo
                    _this.expression.push(_this.resultados[x].html);
                    //Separa descricao do link
                    var linkdesc = _this.resultados[x].explicacao.split("&");
                    //Vetor para ser adicionado ao vetor de vetores dos valores para o link.
                    var values = [];
                    //Verifica se valores para a geracao de um link foram enviados
                    if (linkdesc.length > 1) {
                        //Organiza os valores do link
                        var linkvalues = linkdesc[1].split(",");
                        //O primeiro valor indica o sinal da operacao
                        if (linkvalues[0] == "+") {
                            _this.signal.push(1);
                        }
                        else {
                            _this.signal.push(2);
                        }
                        //Adiciona os valores
                        values.push((linkvalues[1]));
                        values.push((linkvalues[2]));
                    }
                    //Caso nao tenha sido enviado link usa a variavel signal com valor 0 para indicar isso.
                    else {
                        _this.signal.push(0);
                    }
                    //Adiciona os valores existentes ou não para o link
                    _this.link.push(values);
                    //Adiciona a descricao
                    _this.desc.push(linkdesc[0]);
                }
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
    NiSubtracaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-ni-subtracao',
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-subtracao/ni-subtracao.component.html"),
            styles: [__webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-subtracao/ni-subtracao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_numeros_inteiros_service__["a" /* ServicoNumerosInteiros */]])
    ], NiSubtracaoComponent);
    return NiSubtracaoComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-view/ni-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n    <ni-sidebar class=\"slidebar\"></ni-sidebar>\r\n    <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>"

/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-view/ni-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiViewComponent; });
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

var NiViewComponent = /** @class */ (function () {
    function NiViewComponent() {
    }
    NiViewComponent.prototype.ngOnInit = function () {
    };
    NiViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-view/ni-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], NiViewComponent);
    return NiViewComponent;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/numeros-inteiros.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumerosInteirosModule", function() { return NumerosInteirosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__numeros_inteiros_routing__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/numeros-inteiros.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_numeros_inteiros_service__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ni_view_ni_view_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-view/ni-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ni_sidebar_ni_sidebar_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-sidebar/ni-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ni_descricao_ni_descricao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-descricao/ni-descricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ni_adicao_ni_adicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-adicao/ni-adicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ni_subtracao_ni_subtracao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-subtracao/ni-subtracao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ni_antecessor_sucessor_ni_antecessor_sucessor_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-antecessor-sucessor/ni-antecessor-sucessor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ni_comparacao_numeros_ni_comparacao_numeros_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-comparacao-numeros/ni-comparacao-numeros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ni_multiplicacao_ni_multiplicacao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-multiplicacao/ni-multiplicacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ni_divisao_ni_divisao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-divisao/ni-divisao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_ni_modulo_ni_modulo_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-modulo/ni-modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_expressoes_expressoes_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/expressoes/expressoes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var NumerosInteirosModule = /** @class */ (function () {
    function NumerosInteirosModule() {
    }
    NumerosInteirosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__numeros_inteiros_routing__["a" /* NumerosInteirosRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_ni_view_ni_view_component__["a" /* NiViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_ni_sidebar_ni_sidebar_component__["a" /* NiSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_ni_descricao_ni_descricao_component__["a" /* NiDescricaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_ni_adicao_ni_adicao_component__["a" /* NiAdicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_ni_subtracao_ni_subtracao_component__["a" /* NiSubtracaoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_ni_antecessor_sucessor_ni_antecessor_sucessor_component__["a" /* NiAntecessorSucessorComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_ni_comparacao_numeros_ni_comparacao_numeros_component__["a" /* NiComparacaoNumerosComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_ni_multiplicacao_ni_multiplicacao_component__["a" /* NiMultiplicacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_ni_divisao_ni_divisao_component__["a" /* NiDivisaoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_ni_modulo_ni_modulo_component__["a" /* NiModuloComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_expressoes_expressoes_component__["a" /* ExpressoesComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared_numeros_inteiros_service__["a" /* ServicoNumerosInteiros */]]
        })
    ], NumerosInteirosModule);
    return NumerosInteirosModule;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/numeros-inteiros.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumerosInteirosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ni_descricao_ni_descricao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-descricao/ni-descricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ni_view_ni_view_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-view/ni-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ni_antecessor_sucessor_ni_antecessor_sucessor_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-antecessor-sucessor/ni-antecessor-sucessor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ni_adicao_ni_adicao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-adicao/ni-adicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ni_comparacao_numeros_ni_comparacao_numeros_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-comparacao-numeros/ni-comparacao-numeros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ni_divisao_ni_divisao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-divisao/ni-divisao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ni_multiplicacao_ni_multiplicacao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-multiplicacao/ni-multiplicacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ni_subtracao_ni_subtracao_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-subtracao/ni-subtracao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ni_modulo_ni_modulo_component__ = __webpack_require__("./src/app/views/numeros-operacoes/numeros-inteiros/components/ni-modulo/ni-modulo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__components_ni_view_ni_view_component__["a" /* NiViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'ni_descricao',
                pathMatch: 'full',
            },
            {
                path: 'ni_descricao',
                component: __WEBPACK_IMPORTED_MODULE_2__components_ni_descricao_ni_descricao_component__["a" /* NiDescricaoComponent */]
            },
            {
                path: 'ni_antecessor_sucessor',
                component: __WEBPACK_IMPORTED_MODULE_4__components_ni_antecessor_sucessor_ni_antecessor_sucessor_component__["a" /* NiAntecessorSucessorComponent */]
            },
            {
                path: 'ni_comparacao_numeros',
                component: __WEBPACK_IMPORTED_MODULE_6__components_ni_comparacao_numeros_ni_comparacao_numeros_component__["a" /* NiComparacaoNumerosComponent */]
            },
            {
                path: 'ni_adicao',
                component: __WEBPACK_IMPORTED_MODULE_5__components_ni_adicao_ni_adicao_component__["a" /* NiAdicaoComponent */]
            },
            {
                path: 'ni_subtracao',
                component: __WEBPACK_IMPORTED_MODULE_9__components_ni_subtracao_ni_subtracao_component__["a" /* NiSubtracaoComponent */]
            },
            {
                path: 'ni_multiplicacao',
                component: __WEBPACK_IMPORTED_MODULE_8__components_ni_multiplicacao_ni_multiplicacao_component__["a" /* NiMultiplicacaoComponent */]
            },
            {
                path: 'ni_divisao',
                component: __WEBPACK_IMPORTED_MODULE_7__components_ni_divisao_ni_divisao_component__["a" /* NiDivisaoComponent */]
            },
            {
                path: 'ni_modulo',
                component: __WEBPACK_IMPORTED_MODULE_10__components_ni_modulo_ni_modulo_component__["a" /* NiModuloComponent */]
            },
        ]
    }
];
var NumerosInteirosRoutingModule = /** @class */ (function () {
    function NumerosInteirosRoutingModule() {
    }
    NumerosInteirosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], NumerosInteirosRoutingModule);
    return NumerosInteirosRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/numeros-operacoes/numeros-inteiros/shared/numeros-inteiros.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoNumerosInteiros; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServicoNumerosInteiros = /** @class */ (function () {
    function ServicoNumerosInteiros(_http) {
        this._http = _http;
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].url;
    }
    ServicoNumerosInteiros.prototype.postAdicao = function (numerosInteiros) {
        var url = this.baseUrl + '/api/numerosinteiros/somar';
        var body = JSON.stringify(numerosInteiros);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosInteiros.prototype.postMultiplicacao = function (numerosInteiros) {
        var url = this.baseUrl + '/api/numerosinteiros/multiplicar';
        var body = JSON.stringify(numerosInteiros);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosInteiros.prototype.postComparacaoNumeros = function (numerosInteiros) {
        var url = this.baseUrl + '/api/numerosinteiros/comparar';
        var body = JSON.stringify(numerosInteiros);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosInteiros.prototype.postAntecessorSucessor = function (numerosInteiros) {
        var url = this.baseUrl + '/api/antecessor_sucessor_inteiro/ver_antecessor_sucessor_inteiro';
        var body = JSON.stringify(numerosInteiros);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosInteiros.prototype.postSubtracao = function (numerosInteiros) {
        var url = this.baseUrl + '/api/numerosinteiros/subtrair';
        var body = JSON.stringify(numerosInteiros);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosInteiros.prototype.postDivisao = function (numerosInteiros) {
        var url = this.baseUrl + '/api/numerosinteiros/dividir';
        var body = JSON.stringify(numerosInteiros);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosInteiros.prototype.postModulo = function (numerosInteiros) {
        var url = this.baseUrl + '/api/modulo/calcular_modulo';
        var body = JSON.stringify(numerosInteiros);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoNumerosInteiros = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicoNumerosInteiros);
    return ServicoNumerosInteiros;
}());



/***/ })

});
//# sourceMappingURL=numeros-inteiros.module.chunk.js.map