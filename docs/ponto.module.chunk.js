webpackJsonp(["ponto.module"],{

/***/ "./src/app/views/geometria/ponto/componentes/construcao-ponto/construcao-ponto.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-form__contener__body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10 ifmath-form__title ponto\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h5 class=\"fmath-form__title__text\">\r\n                Clique na tela para construir diferentes pontos\r\n              </h5>\r\n            </div>\r\n            <div #container class=\"col-sm-12 resolucao\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button (click)=\"limpar()\" class=\"btn btn-primary botao\">Limpar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/ponto/componentes/construcao-ponto/construcao-ponto.component.scss":
/***/ (function(module, exports) {

module.exports = ".resolucao {\n  text-align: center; }\n\n.ponto {\n  padding-top: 1em;\n  padding-bottom: 1em; }\n\n.botao {\n  margin-top: 1em;\n  border-color: #4683b4;\n  color: #4683b4;\n  background-color: white; }\n\n.botao:hover {\n  background-color: #4683b4;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/views/geometria/ponto/componentes/construcao-ponto/construcao-ponto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstrucaoPontoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_construcao_ponto_ponto_model__ = __webpack_require__("./src/app/views/geometria/ponto/componentes/construcao-ponto/ponto.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConstrucaoPontoComponent = /** @class */ (function () {
    function ConstrucaoPontoComponent(fb) {
        this.fb = fb;
        this.formModel = this.fb.group({});
        this.distanciaCamera = 5;
        this.material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000 });
        this.alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.n = 0;
    }
    ConstrucaoPontoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.container = this.elementRef.nativeElement;
        console.log(this.container);
        this.init();
        this.formModel.valueChanges.subscribe(function (value) {
            _this.animate();
        });
    };
    ConstrucaoPontoComponent.prototype.init = function () {
        var screen = {
            width: 600,
            height: 600
        }, view = {
            angle: 90,
            aspect: screen.width / screen.height,
            near: 0.1,
            far: 1000
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xEEEEEE); // Cor de fundo canvas
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](view.angle, view.aspect, view.near, view.far);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        this.scene.add(this.camera);
        this.camera.position.set(0, 0, this.distanciaCamera);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.renderer.setSize(screen.width, screen.height);
        this.container.appendChild(this.renderer.domElement);
        this.pontos = [];
        this.pontosMesh = [];
        this.render();
    };
    ConstrucaoPontoComponent.prototype.render = function () {
        var self = this;
        (function render() {
            requestAnimationFrame(render);
            self.renderer.render(self.scene, self.camera);
            self.animate();
        }());
    };
    ConstrucaoPontoComponent.prototype.animate = function () {
    };
    ConstrucaoPontoComponent.prototype.adicionaPonto = function (x, y, label) {
        var ponto = new __WEBPACK_IMPORTED_MODULE_3__componentes_construcao_ponto_ponto_model__["a" /* Ponto */](x, y, label);
        this.camera.add(ponto.getMesh());
        this.adicionarTexto(label, ponto.getTexto(), this.scene, 5, this.material);
        ponto.setCordinates(x, y);
        this.scene.add(ponto.getMesh());
        this.pontosMesh.push(ponto.getMesh());
        this.pontos.push(ponto);
    };
    ConstrucaoPontoComponent.prototype.adicionarTexto = function (valor, geom, scene, size, material) {
        var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["FontLoader"]();
        loader.load('https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["TextGeometry"](valor, {
                font: font,
                size: size / 15,
                height: 0.0001,
                curveSegments: 12,
            });
            geom.geometry.dispose();
            geom.geometry = geometry;
            geom.material = material;
            scene.add(geom);
        });
    };
    ConstrucaoPontoComponent.prototype.limpar = function () {
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xEEEEEE); // Cor de fundo canvas
        this.scene.add(this.camera);
        this.n = 0;
    };
    ConstrucaoPontoComponent.prototype.onMouseClick = function (event) {
        if (event.toElement.tagName === 'CANVAS') {
            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            var xDoMouse = event.offsetX;
            var yDoMouse = event.offsetY;
            xDoMouse = (xDoMouse / 600) * 2 - 1;
            yDoMouse = -(yDoMouse / 600) * 2 + 1;
            var raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
            raycaster.setFromCamera(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"](xDoMouse, yDoMouse), this.camera);
            var intersects = raycaster.intersectObjects(this.pontosMesh);
            if (intersects.length === 0) {
                var p = '';
                if (Math.floor(this.n / 26) > 0) {
                    p = Math.floor(this.n / 26) + '';
                }
                this.adicionaPonto(xDoMouse * 5, yDoMouse * 5, this.alfabeto[this.n % 26] + p);
                this.n++;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ConstrucaoPontoComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touch', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConstrucaoPontoComponent.prototype, "onMouseClick", null);
    ConstrucaoPontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-construcao-ponto',
            template: __webpack_require__("./src/app/views/geometria/ponto/componentes/construcao-ponto/construcao-ponto.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/ponto/componentes/construcao-ponto/construcao-ponto.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], ConstrucaoPontoComponent);
    return ConstrucaoPontoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/ponto/componentes/construcao-ponto/ponto.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ponto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("./node_modules/three/build/three.module.js");

var Ponto = /** @class */ (function () {
    function Ponto(x, y, label) {
        this.geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["CircleGeometry"](0.10, 10);
        this.material = new __WEBPACK_IMPORTED_MODULE_0_three__["MeshBasicMaterial"]({ color: 0x000000 });
        this.circle = new __WEBPACK_IMPORTED_MODULE_0_three__["Mesh"](this.geometry, this.material);
        this.circle.position.x = x;
        this.circle.position.y = y;
        this.label = label;
        this.texto = new __WEBPACK_IMPORTED_MODULE_0_three__["Mesh"]();
        this.texto.position.x = x + 0.25;
        this.texto.position.y = y + 0.25;
    }
    Ponto.prototype.getLabel = function () {
        return this.label;
    };
    Ponto.prototype.setCordinates = function (x, y) {
        this.circle.position.x = x;
        this.circle.position.y = y;
        this.texto.position.x = x + 0.25;
        this.texto.position.y = y + 0.25;
    };
    Ponto.prototype.setLabel = function (label) {
        this.label = label;
    };
    Ponto.prototype.setTexto = function (texto) {
        this.texto = texto;
    };
    Ponto.prototype.getTexto = function () {
        return this.texto;
    };
    Ponto.prototype.getMesh = function () {
        return this.circle;
    };
    return Ponto;
}());



/***/ }),

/***/ "./src/app/views/geometria/ponto/componentes/definicao-ponto/definicao-ponto.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-description definicao\">\r\n  \r\n  <h4 class=\"title\">Informações</h4>\r\n  \r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    <span>\r\n      <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n      Um <strong>ponto</strong>, não possui uma forma definida, nem dimensão (medida).\r\n    </span>\r\n  </p>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    <span>\r\n      <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n      Uma marca em uma folha de papel nos dá a noção intuitiva de ponto.\r\n    </span>\r\n  </p>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    <span>\r\n      <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n      Ele é muito importante em construções geométricas de outras figuras. Uma das aplicações é para\r\n      a localização geográfica.\r\n    </span>\r\n  </p>\r\n  <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n    <span>\r\n      <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n      Para a representação de um ponto utilizamos letras maiúsculas do nosso alfabeto, por exemplo:\r\n      A, B, C, ...\r\n    </span>\r\n  </p>\r\n  <div class=\"imagem\">\r\n    <img src=\"assets/images/ponto.png\">\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/ponto/componentes/definicao-ponto/definicao-ponto.component.scss":
/***/ (function(module, exports) {

module.exports = ".definicao {\n  font-size: 20px; }\n\nli {\n  list-style-type: circle; }\n\n.fa {\n  font-size: large;\n  margin-right: 8px; }\n\n.title {\n  padding-top: 2em;\n  padding-bottom: 1.5em; }\n\n.imagem {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/views/geometria/ponto/componentes/definicao-ponto/definicao-ponto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinicaoPontoComponent; });
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

var DefinicaoPontoComponent = /** @class */ (function () {
    function DefinicaoPontoComponent() {
    }
    DefinicaoPontoComponent.prototype.ngOnInit = function () {
    };
    DefinicaoPontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-definicao-ponto',
            template: __webpack_require__("./src/app/views/geometria/ponto/componentes/definicao-ponto/definicao-ponto.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/ponto/componentes/definicao-ponto/definicao-ponto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefinicaoPontoComponent);
    return DefinicaoPontoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/ponto/componentes/sidebar-ponto/sidebar-ponto.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-side-bar\">\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['definicao']\">\r\n      Informações\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['construcao']\">\r\n      Construção\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\"><a>Curiosidades</a></li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/ponto/componentes/sidebar-ponto/sidebar-ponto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarPontoComponent; });
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

var SidebarPontoComponent = /** @class */ (function () {
    function SidebarPontoComponent() {
    }
    SidebarPontoComponent.prototype.ngOnInit = function () {
    };
    SidebarPontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar-ponto',
            template: __webpack_require__("./src/app/views/geometria/ponto/componentes/sidebar-ponto/sidebar-ponto.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SidebarPontoComponent);
    return SidebarPontoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/ponto/ponto.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"ifmath-view\">\r\n  <div class=\"row-offcanvas row-offcanvas-left\">\r\n    <div id=\"sidebar\" class=\"sidebar-offcanvas\">\r\n      <div class=\"col-lg-12\">\r\n        <app-sidebar-ponto></app-sidebar-ponto>\r\n      </div>\r\n    </div>\r\n    <div id=\"main\">\r\n      <div class=\"col-lg-12\">\r\n        <p class=\"d-block d-sm-none\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-xs\" data-toggle=\"offcanvas\">\r\n            <i class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </p>\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"push\"></div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/ponto/ponto.component.scss":
/***/ (function(module, exports) {

module.exports = "body,\nhtml,\n.row-offcanvas {\n  height: 100%; }\n\nbody {\n  padding-top: 50px; }\n\n#sidebar {\n  width: inherit;\n  min-width: 220px;\n  max-width: 220px;\n  background-color: #f5f5f5;\n  float: left;\n  height: 100%;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n#main {\n  height: 100%;\n  overflow: auto; }\n\n/*\r\n   * off Canvas sidebar\r\n   * --------------------------------------------------\r\n   */\n\n@media screen and (max-width: 768px) {\n  .row-offcanvas {\n    position: relative;\n    -webkit-transition: all 0.25s ease-out;\n    transition: all 0.25s ease-out;\n    width: calc(100% + 220px); }\n  .row-offcanvas-left {\n    left: -220px; }\n  .row-offcanvas-left.active {\n    left: 0; }\n  .sidebar-offcanvas {\n    position: absolute;\n    top: 0; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/ponto/ponto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontoComponent; });
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

var PontoComponent = /** @class */ (function () {
    function PontoComponent() {
    }
    PontoComponent.prototype.ngOnInit = function () {
    };
    PontoComponent.prototype.jQueryConfiguracaoSlideBar = function () {
        $(document).ready(function () {
            $('[data-toggle="offcanvas"]').click(function () {
                $('.row-offcanvas').toggleClass('active');
            });
        });
    };
    PontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/geometria/ponto/ponto.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/ponto/ponto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PontoComponent);
    return PontoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/ponto/ponto.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PontoModule", function() { return PontoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_katex__ = __webpack_require__("./node_modules/ng-katex/ng-katex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ponto_routing__ = __webpack_require__("./src/app/views/geometria/ponto/ponto.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ponto_component__ = __webpack_require__("./src/app/views/geometria/ponto/ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_sidebar_ponto_sidebar_ponto_component__ = __webpack_require__("./src/app/views/geometria/ponto/componentes/sidebar-ponto/sidebar-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_definicao_ponto_definicao_ponto_component__ = __webpack_require__("./src/app/views/geometria/ponto/componentes/definicao-ponto/definicao-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_construcao_ponto_construcao_ponto_component__ = __webpack_require__("./src/app/views/geometria/ponto/componentes/construcao-ponto/construcao-ponto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PontoModule = /** @class */ (function () {
    function PontoModule() {
    }
    PontoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__ponto_routing__["a" /* PontoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_katex__["a" /* KatexModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__ponto_component__["a" /* PontoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__componentes_sidebar_ponto_sidebar_ponto_component__["a" /* SidebarPontoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__componentes_definicao_ponto_definicao_ponto_component__["a" /* DefinicaoPontoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__componentes_construcao_ponto_construcao_ponto_component__["a" /* ConstrucaoPontoComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__ponto_component__["a" /* PontoComponent */]
            ],
        })
    ], PontoModule);
    return PontoModule;
}());



/***/ }),

/***/ "./src/app/views/geometria/ponto/ponto.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ponto_component__ = __webpack_require__("./src/app/views/geometria/ponto/ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_definicao_ponto_definicao_ponto_component__ = __webpack_require__("./src/app/views/geometria/ponto/componentes/definicao-ponto/definicao-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_construcao_ponto_construcao_ponto_component__ = __webpack_require__("./src/app/views/geometria/ponto/componentes/construcao-ponto/construcao-ponto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var pontoRotas = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ponto_component__["a" /* PontoComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__componentes_definicao_ponto_definicao_ponto_component__["a" /* DefinicaoPontoComponent */] },
            { path: 'definicao', component: __WEBPACK_IMPORTED_MODULE_3__componentes_definicao_ponto_definicao_ponto_component__["a" /* DefinicaoPontoComponent */] },
            { path: 'construcao', component: __WEBPACK_IMPORTED_MODULE_4__componentes_construcao_ponto_construcao_ponto_component__["a" /* ConstrucaoPontoComponent */] },
        ]
    },
];
var PontoRoutingModule = /** @class */ (function () {
    function PontoRoutingModule() {
    }
    PontoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(pontoRotas)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ]
        })
    ], PontoRoutingModule);
    return PontoRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=ponto.module.chunk.js.map