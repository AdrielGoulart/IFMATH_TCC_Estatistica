webpackJsonp(["polinomios.module"],{

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-add-and-sub/pln-add-and-sub.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" #demoForm=\"ngForm\" [formGroup]=\"formModel\">\r\n    <div class=\"row\">\r\n      <!-- Title -->\r\n      <div class=\"col-sm-12 ifmath-form__title\">\r\n        <h1 class=\"fmath-form__title__text\">Adição e Subtração</h1>\r\n      </div>\r\n      <!-- Fields -->\r\n      <div class=\"col-sm-12 col-md-7\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\" style=\"width: 100px;\" id=\"sizing-addon2\">Polinômio A</span>\r\n          <input type=\"text\" name=\"expression\" formControlName=\"expressionA\" class=\"form-control ifmath-form__contener__body__input\" aria-describedby=\"sizing-addon2\" placeholder=\"3x^2 + 9\">\r\n        </div>\r\n        <div>\r\n          <span class=\"ifmath-form__label ifmath-form__label--error\" *ngIf=\"formModel.get('expressionA').hasError('required') && formModel.get('expressionA').touched\">Campo\r\n            invalido!</span>\r\n        </div>\r\n\r\n        <button type=\"button\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin btn_sign\" (click)=\"changeSign()\">{{ sign }}</button>\r\n\r\n\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\" style=\"width: 100px;\" id=\"sizing-addon2\">Polinômio B</span>\r\n          <input type=\"text\" name=\"Input\" formControlName=\"expressionB\" class=\"form-control ifmath-form__contener__body__input\" aria-describedby=\"sizing-addon2\" placeholder=\"8x^5 - 3x^2\">\r\n        </div>\r\n        <div>\r\n          <span class=\"ifmath-form__label ifmath-form__label--error\" *ngIf=\"formModel.get('expressionB').hasError('required') && formModel.get('expressionB').touched\">Campo\r\n            invalido!</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- buttons -->\r\n\r\n      <div class=\"col-sm-12 col-md-5 ifmath-form__button__group\">\r\n        <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" [disabled]=\"formModel.invalid\" value=\"Calcular\">Calcular</button>\r\n        <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\" (click)=\"onClear()\">Limpar</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n  <!-- endregion -->\r\n\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"results\"></ifmath-ng-results>\r\n  </div>\r\n\r\n  <!-- <div class=\"context-plot\">\r\n    <ifmath-math-plot class=\"plot\"></ifmath-math-plot>\r\n  </div> -->\r\n\r\n\r\n  <!-- endregion -->\r\n</section>\r\n\r\n<ifmath-ng-modal-error #modalError>\r\n  <div class=\"content\">\r\n    <p> {{ errorMessage }} </p>\r\n  </div>\r\n</ifmath-ng-modal-error>"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-add-and-sub/pln-add-and-sub.scss":
/***/ (function(module, exports) {

module.exports = ".btn_sign {\n  width: 50px;\n  padding: 0px;\n  margin: auto 300px;\n  margin-top: 5px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-add-and-sub/pln-add-and-sub.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlnAddAndSubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_polinomios_service__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/shared/polinomios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_modal_error_modal_error_component__ = __webpack_require__("./src/app/shared/components/modal-error/modal-error.component.ts");
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






var PlnAddAndSubComponent = /** @class */ (function () {
    function PlnAddAndSubComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.formModel = this.fb.group({
            expressionA: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            expressionB: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.sign = "+";
    }
    PlnAddAndSubComponent.prototype.onSubmit = function () {
        var _this = this;
        this.onClear();
        this.expressionA = this.formModel.get("expressionA").value.toLowerCase();
        this.expressionB = this.formModel.get("expressionB").value.toLowerCase();
        this.finalExpression =
            "(" + this.expressionA + ") " + this.sign + " (" + this.expressionB + ")";
        if (this.checkPoly()) {
            this.loading = true;
            this._servico
                .postAddAndSub(this.finalExpression)
                .take(1)
                .do(function () {
                _this.loading = false;
            })
                .subscribe(function (response) {
                if (response.sucesso) {
                    _this.results = response.objeto;
                }
                else {
                    _this.errorMessage = response.mensagem
                        .split(":")[1]
                        .replace("}", "");
                    _this.modalError.show();
                }
            }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred.
                    console.log("An error occurred:", err.error.message);
                }
                else {
                    // Backend returns unsuccessful response codes such as 404, 500 etc.
                    console.log("Backend returned status code: ", err.status);
                    console.log("Response body:", err.error);
                    // Log errors if any
                    _this.loading = false;
                    _this.errorMessage =
                        "Aconteceu alguns error de conexão com a internet, verifique a sua rede: " +
                            err.message;
                    _this.modalError.show();
                }
            });
        }
        else {
            this.errorMessage =
                "Adição e subtração de um polinômio pode conter apenas uma incógnita e operações do tipo '+' e '-'.Como no exemplo a seguir: 4x^3 + 12x^2 - 9x";
            this.modalError.show();
        }
    };
    PlnAddAndSubComponent.prototype.onClear = function () {
        this.results = [];
    };
    PlnAddAndSubComponent.prototype.changeSign = function () {
        if (this.sign == "+") {
            this.sign = "-";
        }
        else {
            this.sign = "+";
        }
    };
    PlnAddAndSubComponent.prototype.checkPoly = function () {
        var spell = "";
        for (var i = 0; i < this.finalExpression.length; i++) {
            var c = this.finalExpression.charAt(i).toString();
            if (c.match(/[a-z]/)) {
                if (spell == "") {
                    spell = c.toString();
                }
                else {
                    if (c != spell) {
                        return false;
                    }
                }
            }
            if (c.match(/\*|\/|\./)) {
                return false;
            }
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("modalError"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_components_modal_error_modal_error_component__["a" /* ModalErrorComponent */])
    ], PlnAddAndSubComponent.prototype, "modalError", void 0);
    PlnAddAndSubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-add-and-sub/pln-add-and-sub.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-add-and-sub/pln-add-and-sub.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_polinomios_service__["a" /* ServicoPolinomios */]])
    ], PlnAddAndSubComponent);
    return PlnAddAndSubComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-description/pln-description.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-description\">\r\n\r\n  <h3>Polinômio</h3>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    É uma expressão algébrica inteira em que <strong>há apenas multiplicação entre números e letras.</strong>\r\n    Essas letras devem ser expressas na forma de potência com expoentes naturais (0,1,2,3,...).\r\n    <br>\r\n    As operações envolvendo polinômios podem ser divididas em: Valor Numérico, Adição e Subtração e Multiplicação.\r\n  </p>\r\n\r\n  <h4>Valor Numérico</h4>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    Diz respeito ao valor obtido quando analisamos uma função polinomial (ou polinômio), com um determinado\r\n    valor para a variável x (ou qualquer outra variável presente no polinômio).\r\n  </p>\r\n\r\n  <h5>Como resolver um Valor Numérico?</h5>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    O propósito de se calcular o valor numérico de um polinômio é definir um valor para cada uma das incógnitas do polinômio,\r\n    e realizar os devidos cálculos afim de se obter um valor final para a expressão.\r\n  </p>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <h6>\r\n      Sendo: <br>\r\n      Polinomio = 2x^2 + 5x − 2 <br>\r\n      x = 2 <br>\r\n      </h6>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationOne,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationOne = !isVisibleEquationOne\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationOne\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Substituímos as variáveis pelo seu valor numérico respectivo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> Realizamos a potência dos termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Realizamos a multiplicação dos termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,4)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Por fim, realizamos a soma e a subtração dos termos restantes.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <h5>Gráfico</h5>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <img class=\"mx-auto d-block\" src=\"assets/images/examples/pln_numeric_value.png\"><br />\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <br>\r\n\r\n  <h4>Adição e Subtração</h4>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    Para efetuarmos a adição (e subtração) de polinômios devemos agrupar termos semelhantes. Um termo é considerado semelhante a outro, \r\n    quando possuem a mesma parte literal.\r\n  </p>\r\n\r\n  <h5>Como resolver uma Adição ou Subtração?</h5>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    O propósito de se calcular a adição ou subtração entre dois polinômios é a de agrupar o máximo de elementos possíveis que sejam semelhantes,\r\n    a fim de obter uma nova expressão como resultado final.\r\n  </p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1 (Adição):</h5>\r\n      <h6>\r\n      Sendo: <br>\r\n      Polinomio A = 3x^2 - 2x <br>\r\n      Operação = + (Adição) <br>\r\n      Polinomio B = 9 + 4x^2 + 4x <br>\r\n      </h6>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationTwo,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationTwo = !isVisibleEquationTwo\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationTwo\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwo,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Equação Inicial.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwo,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> Removendo os parênteses dos polinômios.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwo,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Ordenando os termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwo,4)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Soma dos termos semelhantes.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 2 (Subtração):</h5>\r\n      <h6>\r\n      Sendo: <br>\r\n      Polinomio A = 6y^5 - 5y + 4 <br>\r\n      Operação = - (Subtração) <br>\r\n      Polinomio B = 2y^5 - 8y + 4 <br>\r\n      </h6>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationThree,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationThree = !isVisibleEquationThree\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationThree\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationThree,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Equação Inicial.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationThree,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Aplicando a regra de troca de sinais em operações prioritárias, em duplas negações ou em somas de números negativos. \r\n                E, removendo os parênteses dos polinômios.\r\n\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationThree,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Ordenando os termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationThree,4)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Soma dos termos semelhantes.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <br>\r\n\r\n  <h4>Multiplicação</h4>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    Para realizarmos essa operação, multiplicamos coeficiente com coeficiente e parte literal com parte literal de cada monômio, considerando sempre\r\n    a <b>regra de sinais*</b>.\r\n    Para isso, utilizamos a <b>propriedade distributiva**</b>, e caso haja termos semelhantes (com mesma parte literal) devemos reduzi-los.\r\n  </p>\r\n\r\n  <b>*Regra de sinais:</b> Se os dois números multiplicados possuírem o mesmo sinal, o resultado será positivo. E se os dois números possuírem sinais diferentes,\r\n  o resultado será negativo.<br>\r\n  <b>**Propriedade distributiva:</b> Essa propriedade indica que dois ou mais termos presentes numa expressão de soma ou subtração multiplicada por\r\n  outra, é igual à soma ou à diferença da multiplicação de cada um dos termos da adição ou da subtração pelo número. Ou ainda, pode ser\r\n  definida pela expressão algébrica: <b>a x (b + c) = a x b + a x c </b> ou <b>a x (b - c) = a x b - a x c </b>\r\n\r\n  <br><br>\r\n\r\n  <h5>Como resolver uma Multiplicação?</h5>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    O propósito de se calcular a multiplicação, é a de agrupar os elementos, sejam eles semelhantes ou não,\r\n    a fim de se obter uma nova expressão como resultado final.\r\n  </p>\r\n\r\n<!--Multiplica-se os coeficientes, considerando a regra dos sinais, e para as variáveis, somam-se os expoentes pela propriedade das potências.\r\n-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1 :</h5>\r\n      <h6>\r\n      Sendo: <br>\r\n      Polinomio A = x^2 - 25 <br>\r\n      Polinomio B = 3 - x <br>\r\n      </h6>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationFour,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationFour = !isVisibleEquationFour\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationFour\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFour,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Equação Inicial.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFour,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                 Aplicando a propriedade distributiva, onde cada elemento do primeiro termo é multiplicado por cada um dos elementos do segundo termo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFour,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Multiplica-se os coeficientes, considerando a regra dos sinais, e para as variáveis, \r\n                somam-se os expoentes pela propriedade das potências.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFour,4)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Ordenando os termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-description/pln-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlnDescriptionComponent; });
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
// tslint:disable-next-line: quotemark

var PlnDescriptionComponent = /** @class */ (function () {
    function PlnDescriptionComponent() {
        this.equationOne = [];
        this.equationTwo = [];
        this.equationThree = [];
        this.equationFour = [];
        this.isVisibleEquationOne = false;
        this.isVisibleEquationTwo = false;
        this.isVisibleEquationThree = false;
        this.isVisibleEquationFour = false;
        this.options = {
            displayMode: true,
        };
        this.createFirstEquation();
        this.createSecondEquation();
        this.createThirdEquation();
        this.createFourthEquation();
    }
    PlnDescriptionComponent.prototype.createFirstEquation = function () {
        this.equationOne.push('p(x) = 2x^2 + 5x -2');
        this.equationOne.push('p(2) = 2 * 2^2 + 5 * 2 - 2');
        this.equationOne.push('p(2) = 2 * 4 + 5 * 2 - 2');
        this.equationOne.push('p(2) = 8 + 10 - 2');
        this.equationOne.push('p(2) = 16');
    };
    PlnDescriptionComponent.prototype.createSecondEquation = function () {
        this.equationTwo.push('p =  3x^2 - 2x + 9 + 4x^2 + 4x');
        this.equationTwo.push('p =  (3x^2 - 2x) + (9 + 4x^2 + 4x)');
        this.equationTwo.push('p =  3x^2 - 2x + 9 + 4x^2 + 4x');
        this.equationTwo.push('p =  3x^2 + 4x^2 - 2x + 4x + 9');
        this.equationTwo.push('p =  7x^2 + 2x + 9');
    };
    PlnDescriptionComponent.prototype.createThirdEquation = function () {
        this.equationThree.push('p =  6y^5 - 5y + 4 - 2y^5 - 8y + 4');
        this.equationThree.push('p =  (6y^5 - 5y + 4) - (2y^5 - 8y + 4)');
        this.equationThree.push('p =  6y^5 - 5y + 4 - 2y^5 + 8y - 4');
        this.equationThree.push('p =  6y^5 - 2y^5 - 5y + 8y + 4 - 4');
        this.equationThree.push('p =  4y^5 + 3y');
    };
    PlnDescriptionComponent.prototype.createFourthEquation = function () {
        this.equationFour.push('p =  x^2 - 25 * 3 - x');
        this.equationFour.push('p =  (x^2 - 25) * (3 - x)');
        this.equationFour.push('p =  x^2 * 3 + x^2 * (-x) + (-25) * 3 + (-25) * (-x)');
        this.equationFour.push('p =  3x^2 - x^3 - 75 + 25x');
        this.equationFour.push('p =  -x^3 + 3x^2 + 25x - 75');
    };
    PlnDescriptionComponent.prototype.getArrayItem = function (array, index) {
        return array[index];
    };
    PlnDescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-description/pln-description.component.html")
        })
        // tslint:disable-next-line: class-name
        ,
        __metadata("design:paramtypes", [])
    ], PlnDescriptionComponent);
    return PlnDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-multiplication/pln-multiplication.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" #demoForm=\"ngForm\" [formGroup]=\"formModel\">\r\n    <div class=\"row\">\r\n      <!-- Title -->\r\n      <div class=\"col-sm-12 ifmath-form__title\">\r\n        <h1 class=\"fmath-form__title__text\">Multiplicação</h1>\r\n      </div>\r\n      <!-- Fields -->\r\n      <div class=\"col-sm-12 col-md-7\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\" style=\"width: 100px;\">Polinômio A</span>\r\n          <input type=\"text\" name=\"expression\" formControlName=\"expressionA\" class=\"form-control ifmath-form__contener__body__input\" aria-describedby=\"sizing-addon2\" placeholder=\"3x^2 + 9\">\r\n        </div>\r\n        <div>\r\n          <span class=\"ifmath-form__label ifmath-form__label--error\" *ngIf=\"formModel.get('expressionA').hasError('required') && formModel.get('expressionA').touched\">Campo\r\n            invalido!</span>\r\n        </div>\r\n\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\" style=\"width: 100px;\">Polinômio B</span>\r\n          <input type=\"text\" name=\"Input\" formControlName=\"expressionB\" class=\"form-control ifmath-form__contener__body__input\" aria-describedby=\"sizing-addon2\" placeholder=\"8x^5 - 3x^2\">\r\n        </div>\r\n        <div>\r\n          <span class=\"ifmath-form__label ifmath-form__label--error\" *ngIf=\"formModel.get('expressionB').hasError('required') && formModel.get('expressionB').touched\">Campo\r\n            invalido!</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- buttons -->\r\n\r\n      <div class=\"col-sm-12 col-md-5 ifmath-form__button__group\">\r\n        <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" [disabled]=\"formModel.invalid\" value=\"Calcular\">Calcular</button>\r\n        <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\" (click)=\"onClear()\">Limpar</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <!-- endregion -->\r\n\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"results\"></ifmath-ng-results>\r\n  </div>\r\n\r\n  <!-- <div class=\"context-plot\">\r\n      <ifmath-math-plot class=\"plot\"></ifmath-math-plot>\r\n    </div> -->\r\n\r\n\r\n  <!-- endregion -->\r\n</section>\r\n\r\n<ifmath-ng-modal-error #modalError>\r\n  <div class=\"content\">\r\n    <p> {{ errorMessage }} </p>\r\n  </div>\r\n</ifmath-ng-modal-error>"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-multiplication/pln-multiplication.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlnMultiplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_polinomios_service__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/shared/polinomios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_modal_error_modal_error_component__ = __webpack_require__("./src/app/shared/components/modal-error/modal-error.component.ts");
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






var PlnMultiplicationComponent = /** @class */ (function () {
    function PlnMultiplicationComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.formModel = this.fb.group({
            expressionA: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            expressionB: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    PlnMultiplicationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.onClear();
        this.expressionA = this.formModel.get("expressionA").value.toLowerCase();
        this.expressionB = this.formModel.get("expressionB").value.toLowerCase();
        this.finalExpression =
            "(" + this.expressionA + ") * (" + this.expressionB + ")";
        if (this.checkPoly(this.expressionA) && this.checkPoly(this.expressionB)) {
            this.loading = true;
            this._servico
                .postMultiplication(this.finalExpression)
                .take(1)
                .do(function () {
                _this.loading = false;
            })
                .subscribe(function (response) {
                if (response.sucesso) {
                    _this.results = response.objeto;
                }
                else {
                    _this.errorMessage = response.mensagem
                        .split(":")[1]
                        .replace("}", "");
                    _this.modalError.show();
                }
            }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred.
                    console.log("An error occurred:", err.error.message);
                }
                else {
                    // Backend returns unsuccessful response codes such as 404, 500 etc.
                    console.log("Backend returned status code: ", err.status);
                    console.log("Response body:", err.error);
                    // Log errors if any
                    _this.loading = false;
                    _this.errorMessage =
                        "Aconteceu alguns error de conexão com a internet, verifique a sua rede: " +
                            err.message;
                    _this.modalError.show();
                }
            });
        }
        else {
            this.errorMessage =
                "Uma multiplicação de polinômio pode conter apenas uma incógnita e não pode conter o sinal de '/'. Como no exemplo a seguir: 4x^3 - 12x^2 + 9x";
            this.modalError.show();
        }
    };
    PlnMultiplicationComponent.prototype.onClear = function () {
        this.results = [];
    };
    PlnMultiplicationComponent.prototype.checkPoly = function (expression) {
        var spell = "";
        for (var i = 0; i < expression.length; i++) {
            var c = expression.charAt(i).toString();
            if (c.match(/[a-z]/)) {
                if (spell == "") {
                    spell = c.toString();
                }
                else {
                    if (c != spell) {
                        return false;
                    }
                }
            }
            if (c.match(/\/|\.|\*/)) {
                return false;
            }
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("modalError"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_components_modal_error_modal_error_component__["a" /* ModalErrorComponent */])
    ], PlnMultiplicationComponent.prototype, "modalError", void 0);
    PlnMultiplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-multiplication/pln-multiplication.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_polinomios_service__["a" /* ServicoPolinomios */]])
    ], PlnMultiplicationComponent);
    return PlnMultiplicationComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-sidebar/pln-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-side-bar\">\r\n  <ul class=\"list-group  list-group-collapse\">\r\n\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['pln_descricao']\">\r\n      Definição\r\n    </li>\r\n\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['pln_numeric_value']\">\r\n      Valor Numérico\r\n    </li>\r\n\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['pln_add_and_sub']\">\r\n      Adição e Subtração\r\n    </li>\r\n\r\n    <li class=\"list-group-item list-group-item-action\" [routerLink]=\"['pln_multiplication']\">\r\n      Multiplicação\r\n    </li>\r\n\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-sidebar/pln-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlnSidebarComponent; });
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

var PlnSidebarComponent = /** @class */ (function () {
    function PlnSidebarComponent() {
    }
    PlnSidebarComponent.prototype.ngOnInit = function () {
    };
    PlnSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pln-sidebar',
            template: __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-sidebar/pln-sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PlnSidebarComponent);
    return PlnSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-valor-numerico/pln-valor-numerico.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n\r\n  <!-- Form -->\r\n  <form (ngSubmit)=\"onSubmit()\" #demoForm=\"ngForm\" [formGroup]=\"formModel\">\r\n    <div class=\"row\">\r\n\r\n      \r\n      <h3>Valor Numérico</h3>\r\n      <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n        É uma expressão algébrica inteira em que <strong>há apenas multiplicação entre números e letras.</strong>\r\n        Essas letras devem ser expressas na forma de potência com expoentes naturais (0,1,2,3,...).\r\n        <br>\r\n        As operações envolvendo polinômios podem ser divididas em: Valor Numérico, Adição e Subtração e Multiplicação.\r\n      </p>\r\n\r\n      <!-- Fields -->\r\n      <div class=\"col-sm-12 col-md-7\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon input-group-addon--blackgrey\"  style=\"width: 100px;\" id=\"sizing-addon2\">P(x)</span>\r\n          <input type=\"text\" name=\"expression\" formControlName=\"expression\" class=\"form-control ifmath-form__contener__body__input\"\r\n            aria-describedby=\"sizing-addon2\" placeholder=\"3x^2 + 4x + 9\">\r\n        </div>\r\n        <div>\r\n          <span class=\"ifmath-form__label ifmath-form__label--error\" *ngIf=\"formModel.get('expression').hasError('required') && formModel.get('expression').touched\">Campo\r\n            invalido!</span>\r\n        </div>\r\n\r\n        <!-- Variable Inputs -->\r\n        <div class=\"input-group\">\r\n            <span class=\"input-group-addon input-group-addon--blackgrey\"  style=\"width: 100px;\"  id=\"sizing-addon2\">x</span>\r\n            <input type=\"text\" name=\"Input\" formControlName=\"userInput\" class=\"form-control ifmath-form__contener__body__input\"\r\n              aria-describedby=\"sizing-addon2\">\r\n          </div>\r\n          <div>\r\n            <span class=\"ifmath-form__label ifmath-form__label--error\" *ngIf=\"formModel.get('expression').hasError('required') && formModel.get('expression').touched\">Campo\r\n              invalido!</span>\r\n          </div>\r\n\r\n      </div>\r\n\r\n      <!-- buttons -->\r\n      <div class=\"col-sm-12 col-md-5 ifmath-form__button__group\">\r\n        <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" [disabled]=\"formModel.invalid\" value=\"Calcular\">Calcular</button>\r\n        <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\" (click)=\"onClear()\">Limpar</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <!-- endregion -->\r\n\r\n  <!-- region Resultados -->\r\n  <div class=\"col-sm-12\">\r\n    <ifmath-ng-results [loading]=\"loading\" [resultados]=\"results\"></ifmath-ng-results>\r\n  </div>\r\n\r\n  <!-- <div class=\"context-plot\">\r\n    <ifmath-math-plot class=\"plot\"></ifmath-math-plot>\r\n  </div> -->\r\n\r\n\r\n  <!-- endregion -->\r\n</section>\r\n\r\n<ifmath-ng-modal-error #modalError>\r\n  <div class=\"content\">\r\n    <p> {{ errorMessage }} </p>\r\n  </div>\r\n</ifmath-ng-modal-error>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-valor-numerico/pln-valor-numerico.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlnNumericValueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_polinomios_service__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/shared/polinomios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_polinomios_model__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/shared/polinomios.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_modal_error_modal_error_component__ = __webpack_require__("./src/app/shared/components/modal-error/modal-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlnNumericValueComponent = /** @class */ (function () {
    function PlnNumericValueComponent(fb, _servico, polyNumeric) {
        this.fb = fb;
        this._servico = _servico;
        this.polyNumeric = polyNumeric;
        this.formModel = this.fb.group({
            expression: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            userInput: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    PlnNumericValueComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.onClear();
        var numeric = new __WEBPACK_IMPORTED_MODULE_3__shared_polinomios_model__["b" /* NumericValue */];
        numeric.literal = 'x';
        numeric.coefficient = parseInt(this.formModel.get('userInput').value);
        this.polyNumeric.expression = this.formModel.get('expression').value;
        this.polyNumeric.inputs.push(numeric);
        this.polyNumeric.expression = this.setUp(this.polyNumeric.expression);
        this._servico
            .postNumericValue(this.polyNumeric)
            .take(1)
            .do(function () {
            _this.loading = false;
            _this.polyNumeric.inputs = [];
        })
            .subscribe(function (response) {
            if (response.sucesso) {
                _this.results = response.objeto;
            }
            else {
                _this.errorMessage = response.mensagem
                    .split(':')[1]
                    .replace('}', '');
                _this.modalError.show();
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
                _this.errorMessage =
                    'Aconteceu alguns error de conexão com a internet, verifique a sua rede: ' +
                        err.message;
                _this.modalError.show();
            }
        });
    };
    PlnNumericValueComponent.prototype.onClear = function () {
        this.results = [];
    };
    PlnNumericValueComponent.prototype.setUp = function (expression) {
        function isNumeric(value) {
            return /^-{0,1}\d+$/.test(value);
        }
        var newExp = [];
        var count = 0;
        for (var index = 0; index < expression.length; index++) {
            if (expression.charAt(index) == "x") {
                if (isNumeric(expression.charAt(index - 1))) {
                    newExp[count] = "*";
                    newExp[count + 1] = "x";
                    count += 2;
                }
                else {
                    newExp[count] = "x";
                    count++;
                }
            }
            else {
                newExp[count] = expression.charAt(index);
                count++;
            }
        }
        return newExp.join("");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('modalError'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_components_modal_error_modal_error_component__["a" /* ModalErrorComponent */])
    ], PlnNumericValueComponent.prototype, "modalError", void 0);
    PlnNumericValueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-valor-numerico/pln-valor-numerico.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_polinomios_service__["a" /* ServicoPolinomios */], __WEBPACK_IMPORTED_MODULE_3__shared_polinomios_model__["a" /* IPolynomialNumericValue */]])
    ], PlnNumericValueComponent);
    return PlnNumericValueComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-view/pln-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n    <ifmath-pln-sidebar class=\"slidebar\"></ifmath-pln-sidebar>\r\n    <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/components/pln-view/pln-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlnViewComponent; });
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

var PlnViewComponent = /** @class */ (function () {
    function PlnViewComponent() {
    }
    PlnViewComponent.prototype.ngOnInit = function () {
    };
    PlnViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-view/pln-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PlnViewComponent);
    return PlnViewComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/polinomios.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolinomiosModule", function() { return PolinomiosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_polinomios_service__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/shared/polinomios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pln_view_pln_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-view/pln-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pln_sidebar_pln_sidebar_component__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-sidebar/pln-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pln_description_pln_description_component__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-description/pln-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pln_valor_numerico_pln_valor_numerico__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-valor-numerico/pln-valor-numerico.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__polinomios_routing__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/polinomios.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_polinomios_model__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/shared/polinomios.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pln_add_and_sub_pln_add_and_sub__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-add-and-sub/pln-add-and-sub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pln_multiplication_pln_multiplication__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-multiplication/pln-multiplication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PolinomiosModule = /** @class */ (function () {
    function PolinomiosModule() {
    }
    PolinomiosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_11__polinomios_routing__["a" /* PolinomiosRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_pln_view_pln_view_component__["a" /* PlnViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_pln_sidebar_pln_sidebar_component__["a" /* PlnSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_pln_description_pln_description_component__["a" /* PlnDescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_pln_valor_numerico_pln_valor_numerico__["a" /* PlnNumericValueComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pln_add_and_sub_pln_add_and_sub__["a" /* PlnAddAndSubComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_pln_multiplication_pln_multiplication__["a" /* PlnMultiplicationComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_polinomios_service__["a" /* ServicoPolinomios */], __WEBPACK_IMPORTED_MODULE_12__shared_polinomios_model__["a" /* IPolynomialNumericValue */]]
        })
    ], PolinomiosModule);
    return PolinomiosModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/polinomios.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolinomiosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pln_view_pln_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-view/pln-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pln_description_pln_description_component__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-description/pln-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pln_valor_numerico_pln_valor_numerico__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-valor-numerico/pln-valor-numerico.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pln_add_and_sub_pln_add_and_sub__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-add-and-sub/pln-add-and-sub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pln_multiplication_pln_multiplication__ = __webpack_require__("./src/app/views/algebra-funcoes/polinomios/components/pln-multiplication/pln-multiplication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_pln_view_pln_view_component__["a" /* PlnViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'pln_descricao',
                pathMatch: 'full',
            },
            {
                path: 'pln_descricao',
                component: __WEBPACK_IMPORTED_MODULE_3__components_pln_description_pln_description_component__["a" /* PlnDescriptionComponent */]
            },
            //path para valor numerico e outros...
            {
                path: 'pln_numeric_value',
                component: __WEBPACK_IMPORTED_MODULE_4__components_pln_valor_numerico_pln_valor_numerico__["a" /* PlnNumericValueComponent */]
            },
            {
                path: 'pln_add_and_sub',
                component: __WEBPACK_IMPORTED_MODULE_5__components_pln_add_and_sub_pln_add_and_sub__["a" /* PlnAddAndSubComponent */]
            },
            {
                path: 'pln_multiplication',
                component: __WEBPACK_IMPORTED_MODULE_6__components_pln_multiplication_pln_multiplication__["a" /* PlnMultiplicationComponent */]
            }
        ]
    }
];
var PolinomiosRoutingModule = /** @class */ (function () {
    function PolinomiosRoutingModule() {
    }
    PolinomiosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], PolinomiosRoutingModule);
    return PolinomiosRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/shared/polinomios.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IPolynomialNumericValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NumericValue; });
var IPolynomialNumericValue = /** @class */ (function () {
    function IPolynomialNumericValue() {
        this.inputs = [];
    }
    return IPolynomialNumericValue;
}());

var NumericValue = /** @class */ (function () {
    function NumericValue() {
    }
    return NumericValue;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/polinomios/shared/polinomios.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoPolinomios; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicoPolinomios = /** @class */ (function () {
    function ServicoPolinomios(_http) {
        this._http = _http;
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url;
    }
    ServicoPolinomios.prototype.postNumericValue = function (numericValue) {
        var url = this.baseUrl + '/api/polynomial_equation/numeric_value';
        var body = JSON.stringify(numericValue);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options);
    };
    ServicoPolinomios.prototype.postAddAndSub = function (expression) {
        var url = this.baseUrl + '/api/polynomial_equation/add_and_sub';
        var body = JSON.stringify(expression);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options);
    };
    ServicoPolinomios.prototype.postMultiplication = function (expression) {
        var url = this.baseUrl + '/api/polynomial_equation/multiplication';
        var body = JSON.stringify(expression);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options);
    };
    ServicoPolinomios = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicoPolinomios);
    return ServicoPolinomios;
}());



/***/ })

});
//# sourceMappingURL=polinomios.module.chunk.js.map