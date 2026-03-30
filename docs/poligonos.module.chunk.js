webpackJsonp(["poligonos.module"],{

/***/ "./src/app/views/geometria/poligonos/components/pl-definicao/pl-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n  <div class=\"row definition__group mt-4\">\r\n    <div class=\"col-12\">\r\n      <h3>Polígonos</h3>\r\n      <p class=\"p-justify\">\r\n        A palavra \"polígono\" vem da palavra em grego \"polígonos\" que significa ter muitos lados ou ângulos. <br>\r\n        Em outras palavras, Polígonos são linhas fechadas formadas apenas por segmentos de reta que não se cruzam.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\">\r\n      <img src=\"../../../../../../assets/images/geometria/poligono/poligonos-ex.svg\" alt=\"\" width=\"500px\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" style=\"margin-top: 30px; margin-bottom: 50px;\" />\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h4>Polígonos convexos</h4>\r\n      <p class=\"p-justify\">\r\n        Um polígono é convexo quando não possui reentrâncias, ou melhor, \r\n        se pudermos construir ao menos um segmento com as extremidades A e B no interior do polígono, \r\n        e alguma parte desse segmento estiver fora do polígono, então, esse polígono não será convexo.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\" style=\"display: inline-flexbox;\">\r\n      <img src=\"../../../../../../assets/images/geometria/poligono/convexo-nconvexo.svg\" alt=\"\" width=\"500px\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" style=\"margin-top: 30px; margin-bottom: 50px;\" />\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <p>\r\n        Elementos dos polígonos convexos: <br>\r\n      </p>\r\n      <ul>\r\n        <li><strong>Lados:</strong> são os segmentos de reta que formam o polígono.</li>\r\n        <li><strong>Vértices:</strong> São os pontos de encontro entre os lados de um polígono.</li>\r\n        <li><strong>Ângulos internos:</strong> São os ângulos entre dois lados consecutivos no interior do polígono.</li>\r\n        <li><strong>Diagonais:</strong> São os segmentos de reta que ligam dois vértices não consecutivos.</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\" style=\"display: inline-flexbox;\">\r\n      <img src=\"../../../../../../assets/images/geometria/poligono/elementos-poligonos-convexos.svg\" alt=\"\" width=\"400px\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" style=\"margin-top: 30px; margin-bottom: 50px;\" />\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h4>Polígonos regulares</h4>\r\n      <p class=\"p-justify\">\r\n        Quando um polígono convexo possui todos os lados congruentes e todos os ângulos internos com a mesma medida, ele é chamado de regular.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 col-xl-6\" style=\"display: inline-flexbox;\">\r\n      <img src=\"../../../../../../assets/images/geometria/poligono/poligono-regular-ex.svg\" alt=\"\" width=\"300px\"\r\n        class=\"definition__group__img img-fluid rounded mx-auto d-block justify-content-center\" style=\"margin-top: 30px; margin-bottom: 50px;\" />\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-definicao/pl-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-definicao/pl-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlDefinicaoComponent; });
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

var PlDefinicaoComponent = /** @class */ (function () {
    function PlDefinicaoComponent() {
    }
    PlDefinicaoComponent.prototype.ngOnInit = function () {
    };
    PlDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-definicao',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-definicao/pl-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-definicao/pl-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlDefinicaoComponent);
    return PlDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-n-lados/pl-n-lados.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <h3 style=\"margin-top: 10px;\">Polígonos</h3>\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Clique na tela para definir os vértices do polígono:\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\"\r\n      (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"\r\n      (contextmenu)=\"$event.preventDefault();\"></geo-scene>\r\n\r\n    <button class=\"btn btn-primary m-1 lock\" (click)=\"removePoints()\">Limpar tela</button>\r\n\r\n    <!-- Observação para o usuário -->\r\n    <div style=\"display: flex;\">\r\n      <div class=\"alert alert-primary alert-dismissible obs\" role=\"alert\"\r\n        style=\"text-align: center; margin-top: 10px; margin-right: 5px;\" id=\"obs\">\r\n        Clique com o botão esquerdo para adicionar um vértice\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"alert alert-primary alert-dismissible obs\" role=\"alert\" style=\"text-align: center; margin-top: 10px;\"\r\n        id=\"obs\">\r\n        Clique e arraste com o botão esquerdo para mover um vértice\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"alert alert-primary alert-dismissible obs\" role=\"alert\"\r\n        style=\"text-align: center; margin-top: 10px; margin-left: 5px;\" id=\"obs\">\r\n        Clique com o botão direito para remover um vértice.\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>Propriedades:</h4>\r\n    <p>\r\n      Polígonos são linhas fechadas formadas apenas por segmentos de reta que não se cruzam.\r\n    </p>\r\n\r\n    <div [ngSwitch]=\"type\">\r\n      <div *ngSwitchCase=\"'not closed'\">\r\n        <p>Este não é um polígono pois não é uma figura fechada.</p>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'concave'\">\r\n        <p>Classificação quanto ao número de lados:</p>\r\n        <p>{{polygon}} {{ vertices.length }} lados </p>\r\n        <p>Note que este é um polígono <b>côncavo</b>.</p>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'convex'\">\r\n        <p>Classificação quanto ao número de lados:</p>\r\n        <p>{{polygon}} {{ vertices.length }} lados </p>\r\n        <p>Note que este é um polígono <b>convexo</b>.</p>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'crossed lines'\">\r\n        <p>Este não é um polígono pois as linhas se cruzam.</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-n-lados/pl-n-lados.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-n-lados/pl-n-lados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlNLadosComponent; });
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





var PlNLadosComponent = /** @class */ (function () {
    function PlNLadosComponent() {
        this.add = false;
        this.type = 'not closed';
        this.vertices = [];
        this.lines = [];
        this.intersect = false;
        this.polygon = '';
        this.dragging = false; // Variável para controle do drag
        this.currentIndex = []; // Geometria da cena a qual irá se mover
        // Raycaster da página, utilizado para o "clicar e arrastar"
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
    }
    PlNLadosComponent.prototype.ngOnInit = function () {
        this.geoScene.fieldOfView = 7;
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_3__angular_common_locales_pt__["a" /* default */]);
    };
    PlNLadosComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            this.add = true;
            return;
        }
        var arr = [];
        this.insersects.forEach(function (el) {
            if (el.object.name.charAt(0) == 'v') {
                arr.push(el);
                _this.add = false;
                _this.currentIndex = arr;
                return;
            }
        });
    };
    PlNLadosComponent.prototype.setRaycaster = function (event) {
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
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
    PlNLadosComponent.prototype.mouseMove = function (event) {
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            this.currentIndex[0].object.position.copy(this.mousePos);
            this.drawLines();
        }
    };
    PlNLadosComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true;
        if (event.which === 1) {
            if (this.add)
                this.addVertex();
        }
        else if (event.which === 3)
            this.removeVertex();
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    PlNLadosComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    PlNLadosComponent.prototype.addVertex = function () {
        var vertex = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](0.15, 25), new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 }));
        vertex.position.copy(this.mousePos), vertex.name = "v" + this.vertices.length, this.vertices.push(vertex);
        this.dragging = false, this.geoScene.scene.add(vertex), this.drawLines();
    };
    PlNLadosComponent.prototype.removeVertex = function () {
        try {
            this.geoScene.scene.remove(this.currentIndex[0].object);
            this.vertices.splice(parseInt(this.currentIndex[0].object.name.substring(1)), 1);
            var arr_1 = [];
            this.vertices.forEach(function (element) { element.name = "v" + arr_1.length, arr_1.push(element); });
            this.vertices = arr_1, this.dragging = false, this.drawLines();
        }
        catch (_a) { }
    };
    PlNLadosComponent.prototype.removePoints = function () {
        try {
            while (this.geoScene.scene.children.length) {
                this.geoScene.scene.remove(this.geoScene.scene.children[0]);
            }
            this.vertices = [];
            this.type = 'not closed';
            this.geoScene.render();
        }
        catch (_a) { }
    };
    PlNLadosComponent.prototype.drawLines = function () {
        var _this = this;
        this.lines.forEach(function (element) { _this.geoScene.scene.remove(element); });
        this.lines = [];
        this.type = 'concave';
        if (this.vertices.length > 2) {
            for (var i = 0; i < this.vertices.length; i++) {
                var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), name_1 = '';
                try {
                    geometry.vertices.push(this.vertices[i].position, this.vertices[i + 1].position);
                    name_1 = i + '-' + (i + 1);
                }
                catch (_a) {
                    geometry.vertices.push(this.vertices[i].position, this.vertices[0].position);
                    name_1 = i + '-0';
                }
                var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000 }));
                line.name = name_1, this.lines.push(line);
                this.geoScene.scene.add(line);
            }
        }
        else
            this.type = 'not closed';
        var lines = [];
        for (var i = 0; i < this.vertices.length; i++) {
            if (i + 1 < this.vertices.length)
                lines.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](i, i + 1));
            else
                lines.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](i, 0));
        }
        if (this.vertices.length === 3) {
            var res1 = this.geoScene.lineCross(this.vertices[0].position.x, this.vertices[0].position.y, this.vertices[1].position.x, this.vertices[1].position.y, this.vertices[2].position.x, this.vertices[2].position.y, 0.025), res2 = this.geoScene.lineCross(this.vertices[1].position.x, this.vertices[1].position.y, this.vertices[0].position.x, this.vertices[0].position.y, this.vertices[2].position.x, this.vertices[2].position.y, 0.025), res3 = this.geoScene.lineCross(this.vertices[2].position.x, this.vertices[2].position.y, this.vertices[0].position.x, this.vertices[0].position.y, this.vertices[1].position.x, this.vertices[1].position.y, 0.025);
            if (res1 || res2 || res3)
                this.type = 'crossed lines';
        }
        else {
            for (var i = 0; i < this.vertices.length; i++) {
                for (var j = i + 2; j < this.vertices.length; j++) {
                    this.toCompare(lines[i], lines[j]);
                    if (this.intersect)
                        break;
                }
                if (this.intersect) {
                    this.type = 'crossed lines';
                    break;
                }
            }
        }
        if (this.type === 'concave') {
            // http://csharphelper.com/blog/2014/07/determine-whether-a-polygon-is-convex-in-c/#:~:text=To%20see%20if%20a%20polygon,then%20the%20polygon%20is%20convex.
            var min = false, max = false;
            for (var i = 0; i < lines.length; i++) {
                var A = void 0, B = void 0, C = void 0;
                B = this.vertices[lines[i].x].position;
                try {
                    A = this.vertices[lines[i - 1].x].position;
                    C = this.vertices[lines[i + 1].x].position;
                }
                catch (_b) {
                    if (i === 0) {
                        A = this.vertices[lines[lines.length - 1].x].position;
                        C = this.vertices[lines[i + 1].x].position;
                    }
                    else {
                        A = this.vertices[lines[i - 1].x].position;
                        C = this.vertices[lines[0].x].position;
                    }
                }
                var crossProduct = this.crossProductLength(A.x, A.y, B.x, B.y, C.x, C.y);
                if (crossProduct < 0)
                    min = true;
                else if (crossProduct > 0)
                    max = true;
                if (min && max) {
                    this.type = 'convex';
                    break;
                }
            }
        }
        this.getPolygon();
        this.geoScene.render();
    };
    PlNLadosComponent.prototype.crossProductLength = function (Ax, Ay, Bx, By, Cx, Cy) {
        // Get the vectors' coordinates.
        var BAx = Ax - Bx;
        var BAy = Ay - By;
        var BCx = Cx - Bx;
        var BCy = Cy - By;
        // Calculate the Z coordinate of the cross product.
        return (BAx * BCy - BAy * BCx);
    };
    PlNLadosComponent.prototype.toCompare = function (one, two) {
        this.lineIntersection(this.vertices[one.x].position, this.vertices[one.y].position, this.vertices[two.x].position, this.vertices[two.y].position);
    };
    PlNLadosComponent.prototype.lineIntersection = function (startOne, endOne, startTwo, endTwo) {
        // sauce ( ͡° ͜ʖ ͡°) -> http://jsfiddle.net/justin_c_rounds/Gd2S2/light/
        var denominator, a, b, numeratorOne, numeratorTwo;
        denominator = ((endTwo.y - startTwo.y) * (endOne.x - startOne.x)) - ((endTwo.x - startTwo.x) * (endOne.y - startOne.y));
        if (denominator === 0) {
            this.intersect = false;
            return;
        }
        a = startOne.y - startTwo.y;
        b = startOne.x - startTwo.x;
        numeratorOne = ((endTwo.x - startTwo.x) * a) - ((endTwo.y - startTwo.y) * b);
        numeratorTwo = ((endOne.x - startOne.x) * a) - ((endOne.y - startOne.y) * b);
        a = numeratorOne / denominator;
        b = numeratorTwo / denominator;
        if ((a > 0 && a < 1) && (b > 0 && b < 1))
            this.intersect = true;
        else
            this.intersect = false;
    };
    PlNLadosComponent.prototype.getPolygon = function () {
        if (this.vertices.length === 3)
            this.polygon = 'Triângulo: ';
        else if (this.vertices.length === 4)
            this.polygon = 'Quadrilátero: ';
        else if (this.vertices.length === 5)
            this.polygon = 'Pentágono: ';
        else if (this.vertices.length === 6)
            this.polygon = 'Hexágono: ';
        else if (this.vertices.length === 7)
            this.polygon = 'Heptágono: ';
        else if (this.vertices.length === 8)
            this.polygon = 'Octógono: ';
        else if (this.vertices.length === 9)
            this.polygon = 'Eneágono: ';
        else if (this.vertices.length === 10)
            this.polygon = 'Decágono: ';
        else if (this.vertices.length === 11)
            this.polygon = 'Undecágono: ';
        else if (this.vertices.length === 12)
            this.polygon = 'Dodecágono: ';
        else if (this.vertices.length === 13)
            this.polygon = 'Tridecágono: ';
        else if (this.vertices.length === 14)
            this.polygon = 'Tetradecágono: ';
        else if (this.vertices.length === 15)
            this.polygon = 'Pentadecágono: ';
        else if (this.vertices.length === 16)
            this.polygon = 'Hexadecágono: ';
        else if (this.vertices.length === 17)
            this.polygon = 'Heptadecágono: ';
        else if (this.vertices.length === 18)
            this.polygon = 'Octadecágono: ';
        else if (this.vertices.length === 19)
            this.polygon = 'Eneadecágono: ';
        else if (this.vertices.length === 20)
            this.polygon = 'Icoságono: ';
        else if (this.vertices.length === 21)
            this.polygon = 'Hendecoságono: ';
        else if (this.vertices.length === 22)
            this.polygon = 'Docoságono: ';
        else if (this.vertices.length > 22)
            this.polygon = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], PlNLadosComponent.prototype, "geoScene", void 0);
    PlNLadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-n-lados',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-n-lados/pl-n-lados.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-n-lados/pl-n-lados.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlNLadosComponent);
    return PlNLadosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o tipo de quadrilátero</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida da diagonal (<b><i>d</i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"diagonalX\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('x')\" max=\"10\" min=\"1\" />\r\n          e da diagonal (<b><i>D</i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"diagonalY\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('y')\" max=\"10\" min=\"1\" />\r\n        </p>\r\n\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\"\r\n          style=\"text-align: center;\">\r\n          A medida das diagonais devem ser valores entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <!-- <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\"\r\n      (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"></geo-scene> -->\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Losango</h3>\r\n    <h4>Propriedades:</h4>\r\n    <div>\r\n      Um losango é um quadrilátero que possui quatro lados congruentes (mesma medida) e ângulos congruentes dois a dois.\r\n    </div>\r\n    <div *ngIf=\"quadrado\">\r\n      Quando um losango possui todos os ângulos internos retos, pode ser classificado como um quadrado.\r\n    </div>\r\n\r\n    <!-- Calculos -->\r\n\r\n    <!-- Inicio Calculo Area -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n              Área: <ng-katex class=\"explicacao\" equation=\"A = {{ (diagonalX * diagonalY) / 2 | number:'':'pt' }} \\ u.a.\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\" data-target=\"#collapseArea\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Area - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = \\frac{ {{ diagonalY }} \\cdot {{ diagonalX }} }{ 2 } } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituímos a medida das diagonais <b>D</b> e <b>d</b> na fórmula:\r\n                    <ng-katex equation=\"A = \\frac{D \\cdot d}{2}\"></ng-katex>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Area - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = {{ (diagonalY * diagonalX) / 2 | number:'':'pt' }} \\ u.a.}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final após realizar as multiplicação e divisão.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo Area -->\r\n\r\n      <!-- Inicio Calculo Lado -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingLado\" data-toggle=\"collapse\" data-target=\"#collapseLado\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseLado\"\r\n                aria-expanded=\"false\" aria-controls=\"collapseLado\">\r\n                Lado: <ng-katex class=\"explicacao\" equation=\"l \\approx {{conta_sqrt | number:'':'pt' }} \\ u.m. \">\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseLado\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseLado\" class=\"collapse\" aria-labelledby=\"headingLado\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--Lado - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{l^2 = (\\frac{ {{diagonalY}} }{2})^2 + (\\frac{ {{diagonalX}} }{2})^2 } \">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Conseguimos dividir um losango em quatro triângulos-retângulo, onde a medida do lado é a\r\n                      hipotenusa e a metade de cada uma das diagonais é um dos catetos. Portanto, usamos o Teorema de\r\n                      Pitágoras:\r\n                      <ng-katex equation=\"l^2 = \\frac{D}{2}^2 + \\frac{d}{2}^2 \"></ng-katex>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Lado - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{l^2 = {{diagonalY / 2 | number:'':'pt' }}^2 + {{diagonalX / 2 | number:'':'pt' }}^2 }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos as divisões entre parênteses.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Lado - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{l^2 = {{ (diagonalY / 2) * (diagonalY / 2) | number:'':'pt' }} + {{ (diagonalX / 2) * (diagonalX / 2) | number:'':'pt' }}  }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos as potências.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Lado - Passo 4-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{l^2 = {{ ((diagonalY / 2) * (diagonalY / 2)) + ((diagonalX / 2) * (diagonalX / 2)) | number:'':'pt' }} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Somamos as parcelas.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Lado - Passo 5-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{l = \\sqrt{{ ((diagonalY / 2) * (diagonalY / 2)) + ((diagonalX / 2) * (diagonalX / 2)) | number:'':'pt' }} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Aplicamos a operação de radiciação inversa que é inversa à potência.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Lado - Passo 6-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{l \\approx {{conta_sqrt | number:'':'pt' }} \\ u.m. }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resultado final.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo Lado -->\r\n\r\n      <!-- Inicio Calculo NrDiagonais -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseNrDiagonais\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n                Número de Diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{ (4 * (4-3)) / 2 }} \">\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseNrDiagonais\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingNrDiagonais\"\r\n            data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--NrDiagonais - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot (4 - 3)}{2} } \">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Substituímos número de lados <ng-katex equation=\"N = 4\"></ng-katex> do polígono na fórmula\r\n                      <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \"></ng-katex>.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--NrDiagonais - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot 1}{2} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos as operações entre parênteses.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--NrDiagonais - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{ (4 * (4-3)) / 2 }} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resultado final, após resolvermos a multipliação e divisão.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo NrDiagonais -->\r\n\r\n      <!-- Inicio Calculo SomaAngulosInt -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n            data-target=\"#collapseSomaAngulosInt\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 360\\degree\">\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseSomaAngulosInt\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n            data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--SomaAngulosInt - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = (4 - 2) \\cdot 180\\degree } \">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Substituímos o número de lados <ng-katex equation=\"N = 4\"></ng-katex> na fórmula\r\n                      <ng-katex equation=\"S = (N - 2) \\cdot 180\\degree \"></ng-katex>.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--SomaAngulosInt - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 2 \\cdot 180\\degree }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos as operações entre parênteses.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--SomaAngulosInt - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 360\\degree }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resultado final.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlQuadrilaterosLosangoComponent; });
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






var PlQuadrilaterosLosangoComponent = /** @class */ (function () {
    function PlQuadrilaterosLosangoComponent() {
        this.diagonalX = 7;
        this.diagonalY = 7;
        this.errorInput = false;
        this.quadrado = true;
        this.conta_sqrt = Math.sqrt(((this.diagonalY / 2) * (this.diagonalY / 2)) + ((this.diagonalX / 2) * (this.diagonalX / 2))).toFixed(2);
        this.buttons = [
            { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
            { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
            { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
            { title: "Losango", route: "pl_quadrilateros_losango" },
            { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
        ];
    }
    PlQuadrilaterosLosangoComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
        this.geoScene.fieldOfView = 7;
    };
    PlQuadrilaterosLosangoComponent.prototype.ngAfterViewInit = function () {
        this.drawObjects();
    };
    PlQuadrilaterosLosangoComponent.prototype.ngDoCheck = function () {
        if (this.diagonalX === this.diagonalY)
            this.quadrado = true;
        else
            this.quadrado = false;
    };
    PlQuadrilaterosLosangoComponent.prototype.drawObjects = function () {
        var geometryLine1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLine1.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.diagonalX / 2, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.diagonalX / 2, 0, 0));
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine1, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x0C7A2A, linewidth: 2 }));
        var geometryLine2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLine2.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.diagonalY / 2, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, -this.diagonalY / 2, 0));
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine2, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        var diamond = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        for (var i = -0.03; i <= 0.03; i += 0.015) {
            var diamondLineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            diamondLineGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](i, this.diagonalY / 2 - i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.diagonalX / 2 + i, -i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](i, -this.diagonalY / 2 - i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.diagonalX / 2 + i, -i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](i, this.diagonalY / 2 - i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-i, this.diagonalY / 2 - i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.diagonalX / 2 - i, -i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-i, -this.diagonalY / 2 - i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.diagonalX / 2 - i, -i), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-i, this.diagonalY / 2 - i));
            var diamondLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](diamondLineGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x4683B4 }));
            diamond.add(diamondLine);
        }
        this.geoScene.scene.children[0] = diamond;
        var size = 0.5;
        if (this.diagonalX === 1 && this.diagonalY === 1)
            size = 0.175;
        else if ((this.diagonalX === 1 || this.diagonalY === 1) || (this.diagonalX <= 2.5 && this.diagonalY <= 2.5))
            size = 0.25;
        var geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, size, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](size, size, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](size, -size, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, -size, 0));
        var angleOutline = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry1 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry1, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        angleDot1.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((size) / 2, (size) / 2, 0));
        var angleDotGeometry2 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry2, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        angleDot2.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]((size) / 2, -(size) / 2, 0));
        var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        angle.add(angleOutline, angleDot1, angleDot2);
        if (this.diagonalY === this.diagonalX && this.diagonalY !== 1) {
            size = 0.25;
            var geometryAngle1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryAngle1.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.diagonalX / 2 - 0.325, -size, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.diagonalX / 2 - size - 0.325, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.diagonalX / 2 - 0.325, size, 0));
            var angleOutline1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle1, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            var angleDotGeometry1_1 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
            var angleDot1_1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry1_1, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
            var distance1 = Math.sqrt((Math.pow((geometryAngle1.vertices[0].x - geometryAngle1.vertices[2].x), 2) + Math.pow((geometryAngle1.vertices[0].y - geometryAngle1.vertices[2].y), 2)));
            var distancesRatio1 = distance1 / 2 / distance1;
            var x1 = (1 - distancesRatio1) * geometryAngle1.vertices[2].x + distancesRatio1 * geometryAngle1.vertices[0].x, y1 = (1 - distancesRatio1) * geometryAngle1.vertices[2].y + distancesRatio1 * geometryAngle1.vertices[0].y;
            angleDot1_1.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x1, y1, 0));
            var geometryAngle2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryAngle2.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](size, -this.diagonalY / 2 + 0.325, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, -this.diagonalY / 2 + size + 0.325, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-size, -this.diagonalY / 2 + 0.325, 0));
            var angleOutline2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle2, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            var angleDotGeometry2_1 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
            var angleDot2_1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry2_1, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
            var distance2 = Math.sqrt((Math.pow((geometryAngle2.vertices[0].x - geometryAngle2.vertices[2].x), 2) + Math.pow((geometryAngle2.vertices[0].y - geometryAngle2.vertices[2].y), 2)));
            var distancesRatio2 = distance2 / 2 / distance2;
            var x2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].x + distancesRatio2 * geometryAngle2.vertices[0].x, y2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].y + distancesRatio2 * geometryAngle2.vertices[0].y;
            angleDot2_1.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x2, y2, 0));
            var geometryAngle3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryAngle3.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.diagonalX / 2 + 0.325, -size, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.diagonalX / 2 + size + 0.325, 0, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.diagonalX / 2 + 0.325, size, 0));
            var angleOutline3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle3, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            var angleDotGeometry3 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
            var angleDot3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry3, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
            var distance3 = Math.sqrt((Math.pow((geometryAngle3.vertices[0].x - geometryAngle3.vertices[2].x), 2) + Math.pow((geometryAngle3.vertices[0].y - geometryAngle3.vertices[2].y), 2)));
            var distancesRatio3 = distance3 / 2 / distance3;
            var x3 = (1 - distancesRatio3) * geometryAngle3.vertices[2].x + distancesRatio3 * geometryAngle3.vertices[0].x, y3 = (1 - distancesRatio3) * geometryAngle3.vertices[2].y + distancesRatio3 * geometryAngle3.vertices[0].y;
            angleDot3.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x3, y3, 0));
            var geometryAngle4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryAngle4.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](size, this.diagonalY / 2 - 0.325, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this.diagonalY / 2 - size - 0.325, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-size, this.diagonalY / 2 - 0.325, 0));
            var angleOutline4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle4, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            var angleDotGeometry4 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
            var angleDot4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry4, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
            var distance4 = Math.sqrt((Math.pow((geometryAngle4.vertices[0].x - geometryAngle4.vertices[2].x), 2) + Math.pow((geometryAngle4.vertices[0].y - geometryAngle4.vertices[2].y), 2)));
            var distancesRatio4 = distance4 / 2 / distance4;
            var x4 = (1 - distancesRatio4) * geometryAngle4.vertices[2].x + distancesRatio4 * geometryAngle4.vertices[0].x, y4 = (1 - distancesRatio4) * geometryAngle4.vertices[2].y + distancesRatio4 * geometryAngle4.vertices[0].y;
            angleDot4.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x4, y4, 0));
            var angles = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
            angles.add(angleOutline1, angleDot1_1, angleOutline2, angleDot2_1, angleOutline3, angleDot3, angleOutline4, angleDot4);
            angle.add(angles);
        }
        this.geoScene.scene.children[3] = angle;
        var labelLado = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('ℓ', 0.75, '#4683B4');
        var distance = Math.sqrt((Math.pow((this.diagonalX / 2), 2) + Math.pow((this.diagonalY / 2), 2)));
        var distancesRatio = (distance / 2) / distance;
        var x = distancesRatio * (this.diagonalX / 2) + 0.5, y = -distancesRatio * (this.diagonalY / 2) - 0.5;
        labelLado.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y, 0));
        var labelDiagonalX = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('d', 0.75, '#0C7A2A');
        labelDiagonalX.position.x = -this.diagonalX * 0.5 - 0.7;
        labelDiagonalX.position.y = 0;
        var labelDiagonalY = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('D', 0.75, '#FF0000');
        labelDiagonalY.position.x = 0;
        labelDiagonalY.position.y = this.diagonalY * 0.5 + 0.5;
        if (this.diagonalX >= 4 && this.diagonalY >= 4) {
            labelDiagonalX.position.x = -this.diagonalX / 5;
            labelDiagonalX.position.y = 0.35;
            labelDiagonalY.position.x = 0.35;
            labelDiagonalY.position.y = this.diagonalY / 5;
        }
        var labels = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        labels.add(labelLado, labelDiagonalX, labelDiagonalY);
        this.geoScene.scene.children[4] = labels;
        this.conta_sqrt = Math.sqrt(((this.diagonalY / 2) * (this.diagonalY / 2)) + ((this.diagonalX / 2) * (this.diagonalX / 2))).toFixed(2);
        this.geoScene.render();
    };
    PlQuadrilaterosLosangoComponent.prototype.checkInput = function (input) {
        if ((this.diagonalX >= 1 && this.diagonalX <= 10) && (this.diagonalY >= 1 && this.diagonalY <= 10)) {
            this.errorInput = false;
            this.drawObjects();
        }
        else
            this.errorInput = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], PlQuadrilaterosLosangoComponent.prototype, "geoScene", void 0);
    PlQuadrilaterosLosangoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-quadrilateros-losango',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlQuadrilaterosLosangoComponent);
    return PlQuadrilaterosLosangoComponent;
}());

/** CHILDREN INDEX
 * 0 - Losango Azul (Contorno)
 * 1 - Linha d (x)
 * 2 - Linha D (y)
 * 3 - Ângulos 90
 * 4 - Labels
 */ 


/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o tipo de quadrilátero</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\" style=\"margin-right: 100px;\">\r\n          Entre com a medida da base (<b><i> b </i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"base\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('base')\" max=\"10\" min=\"1\" />\r\n          da altura (<b><i>h</i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('height')\" max=\"10\" min=\"1\" />\r\n          <label>e do ângulo (<i><b> α </b></i>):</label>\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"angle\"\r\n            style=\"position: absolute; margin-left: 5px;\" oninput=\"this.value = Math.round(Math.abs(this.value));\"\r\n            (ngModelChange)=\"checkInput('angle')\" max=\"180\" min=\"0\" />\r\n          <span style=\"position: absolute; margin-top: 2.5px; font-size: 20px; pointer-events: none;\"\r\n            id=\"degree\">°</span>\r\n        </p>\r\n\r\n        <div [className]=\"errorInputBase === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\" id=\"err\">\r\n          As medidas da base e altura devem ser valores entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n        <div [className]=\"errorInputAngle === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O ângulo <i><b> α </b></i> deve ser um valor contido entre <b>0</b> e <b>180</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\"\r\n      (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"></geo-scene>\r\n\r\n    <button class=\"btn btn-primary m-1 lock\" *ngFor=\"let button of buttons_lock\" (click)=\"vertexClick(button.value)\"\r\n      [id]=\"button.id\">\r\n      {{button.title}}\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Paralelogramo</h3>\r\n    <h4>Propriedades</h4>\r\n\r\n    <p>\r\n      Um paralelogramo é um quadrilátero cujos lados opostos são paralelos.\r\n    </p>\r\n    <div *ngIf=\"angle90\">\r\n      O paralelogramo cujos ângulos internos medem 90° é um retângulo.\r\n    </div>\r\n\r\n    <!-- Calculos -->\r\n\r\n    <!-- Inicio Calculo Area -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n              Área: <ng-katex class=\"explicacao\" equation=\"A = {{base * height | number:'':'pt'}} \\ u.a.\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\" data-target=\"#collapseArea\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Area - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = {{base}} \\cdot {{height | number:'':'pt'}} } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituímos a medida da base <ng-katex equation=\"b = {{base}} \"></ng-katex> e da altura <ng-katex\r\n                      equation=\"h = {{height | number:'':'pt'}} \"></ng-katex> na fórmula:\r\n                    <ng-katex equation=\"A = b \\cdot h \"></ng-katex>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Area - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{A = {{base * height | number:'':'pt'}} \\ u.a.}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo Area -->\r\n\r\n      <!-- Inicio Calculo Lado -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingLado\" data-toggle=\"collapse\" data-target=\"#collapseLado\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseLado\"\r\n                aria-expanded=\"false\" aria-controls=\"collapseLado\">\r\n                Lado: <ng-katex class=\"explicacao\" equation=\"a = {{ height / sinAngle | number:'':'pt' }} \\ u.m. \">\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseLado\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseLado\" class=\"collapse\" aria-labelledby=\"headingLado\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--Lado - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{sen \\ {{angle}} \\degree = \\frac{ {{height | number:'':'pt' }} }{a} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Como obtemos um triângulo retângulo e temos a medida do ângulo <ng-katex\r\n                        equation=\"\\alpha =  {{angle | number:'':'pt'}} \\degree\"></ng-katex>, podemos usar a relação\r\n                      <ng-katex equation=\"sen \\ \\alpha = \\frac{CO}{Hip}\"></ng-katex>\r\n                      ou <ng-katex equation=\"sen \\ \\alpha = \\frac{b}{a}\"></ng-katex>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Lado - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{ {{sinAngle | number:'':'pt'}} \\approx \\frac{ {{height | number:'':'pt' }} }{a} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Escrevemos o valor do seno do ângulo <ng-katex equation=\"\\alpha = {{angle}} \"></ng-katex>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Lado - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{a \\approx \\frac{3}{ {{sinAngle | number:'':'pt'}} } }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Passamos o <b>a</b> para o lado esquerdo da igualdade multiplicando, e o <ng-katex\r\n                        equation=\"{{sinAngle | number:'':'pt'}}\"></ng-katex> para o lado direito dividindo.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Lado - Passo 4-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{a \\approx {{ height / sinAngle | number:'':'pt' }} \\ u.m. }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resultado final.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo Lado -->\r\n\r\n      <!-- Inicio Calculo NrDiagonais -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseNrDiagonais\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n              Número de Diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{ (4 * (4-3)) / 2 }}\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseNrDiagonais\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--NrDiagonais - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot (4 - 3)}{2} } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituímos número de lados <ng-katex equation=\"N = 4\"></ng-katex> do polígono na fórmula\r\n                    <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--NrDiagonais - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot 1}{2} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resolvemos as operações entre parênteses.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--NrDiagonais - Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{ (4 * (4-3)) / 2 }} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final, após resolvermos a multipliação e divisão.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo NrDiagonais -->\r\n\r\n      <!-- Inicio Calculo SomaAngulosInt -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n          data-target=\"#collapseSomaAngulosInt\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n              Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 360\\degree\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--SomaAngulosInt - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 4 \\cdot 90\\degree } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    O quadrado possui quatro ângulos internos retos (90°). Logo, a soma dos ângulos internos é dada por\r\n                    <ng-katex equation=\"S = 4 \\cdot 90\\degree\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--SomaAngulosInt - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 360\\degree}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n      <!-- Inicio Calculo AnguloB -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingAnguloB\" data-toggle=\"collapse\" data-target=\"#collapseAnguloB\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseAnguloB\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseAnguloB\">\r\n              Ângulo β: <ng-katex class=\"explicacao\" equation=\"\\beta = {{ (360 - (2 * angle)) / 2}} \\degree \">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAnguloB\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseAnguloB\" class=\"collapse\" aria-labelledby=\"headingPrincipal\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--AnguloB - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{2 * {{angle}} \\degree + 2\\beta = 360\\degree} \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Como a Soma dos Ângulos Internos é igual a 360°, e temos\r\n                    <ng-katex equation=\"2 \\alpha \\ e \\ 2 \\beta\">\r\n                    </ng-katex> como ângulos; temos que:\r\n                    <ng-katex equation=\"2 \\alpha + 2 \\beta = 360\\degree\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--AnguloB - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ {{2 * angle}} \\degree + 2\\beta = 360\\degree }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Realizamos a multiplicação.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--AnguloB - Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{2\\beta = 360\\degree - {{2 * angle}} \\degree }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Passamos o <ng-katex equation=\"{{2 * angle}}\"></ng-katex> para a direita subtraindo.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--AnguloB - Passo 4-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{2\\beta = {{360 - (2 * angle)}}\\degree }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Realizamos a subtração.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--AnguloB - Passo 5-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{\\beta = \\frac{ {{360 - (2 * angle)}}\\degree }{2} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Passamos o 2 dividindo.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--AnguloB - Passo 6-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{\\beta = {{ (360 - (2 * angle)) / 2}} \\degree }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo AnguloB -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n.alertMid {\n  color: #9e7e00;\n  background-color: #fffaad;\n  border-color: #ffdb4d; }\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlQuadrilaterosParalelogramoComponent; });
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
    Relation[Relation["POS"] = 0] = "POS";
    Relation[Relation["SIZE"] = 1] = "SIZE";
})(Relation || (Relation = {}));
var PlQuadrilaterosParalelogramoComponent = /** @class */ (function () {
    function PlQuadrilaterosParalelogramoComponent() {
        this.relation = Relation.POS;
        this.base = 7;
        this.height = 3;
        this.diff = 2.5;
        this.angle = 30;
        this.oldAngle = 30;
        this.errorInputBase = false;
        this.errorInputAngle = false;
        this.angle90 = false;
        this.sinAngle = Math.sin(this.angle / 180);
        this.dragging = false; // Variável para controle do drag
        this.dragged = ""; // Variavel para controle de qual objeto foi arrastado
        this.currentIndex = []; // Geometria da cena a qual irá se mover
        // Raycaster da página, utilizado para o "clicar e arrastar"
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        this.buttons = [
            { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
            { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
            { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
            { title: "Losango", route: "pl_quadrilateros_losango" },
            { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
        ];
        this.buttons_lock = [
            { title: 'Alterar posição da base', value: 0, id: 'pos' },
            { title: 'Alterar tamanho da base', value: 1, id: 'size' }
        ];
    }
    PlQuadrilaterosParalelogramoComponent.prototype.vertexClick = function (relation) {
        this.relation = relation;
        switch (relation) {
            case Relation.POS:
                document.getElementById('pos').style.color = '#4683B4';
                document.getElementById('pos').style.backgroundColor = '#FFF';
                document.getElementById('size').style.color = '#FFF';
                document.getElementById('size').style.backgroundColor = '#4683B4';
                break;
            case Relation.SIZE:
                document.getElementById('size').style.color = '#4683B4';
                document.getElementById('size').style.backgroundColor = '#FFF';
                document.getElementById('pos').style.color = '#FFF';
                document.getElementById('pos').style.backgroundColor = '#4683B4';
                break;
        }
    };
    PlQuadrilaterosParalelogramoComponent.prototype.ngOnInit = function () {
        this.geoScene.fieldOfView = 7;
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    PlQuadrilaterosParalelogramoComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('pos').style.color = '#4683B4';
        document.getElementById('pos').style.backgroundColor = '#FFF';
        var squareVerticeGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["PlaneGeometry"](0.25, 0.25, 25, 25);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareVerticeGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x444444 }));
        this.geoScene.scene.children[1].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.base / 2 + 1, this.height / 2, 0));
        this.geoScene.scene.children[1].name = 'vertex-topLeft';
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareVerticeGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x444444 }));
        this.geoScene.scene.children[2].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.base / 2 + 1, this.height / 2, 0));
        this.geoScene.scene.children[2].name = 'vertex-topRight';
        this.geoScene.scene.children[3] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareVerticeGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x444444 }));
        this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.base / 2 - 1, -this.height / 2, 0));
        this.geoScene.scene.children[3].name = 'vertex-bottomRight';
        this.geoScene.scene.children[4] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareVerticeGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x444444 }));
        this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.base / 2 - 1, -this.height / 2, 0));
        this.geoScene.scene.children[4].name = 'vertex-bottomLeft';
        this.drawAngle();
        this.drawParallelogram();
        this.drawHeightDashedLine(this.height / 2, -this.height / 2, false);
        this.renderOrder();
        this.geoScene.render();
    };
    PlQuadrilaterosParalelogramoComponent.prototype.ngDoCheck = function () {
        try {
            this.geoScene.addDegreeSymbol(this.angle, 'degree');
        }
        catch (_a) { }
        this.sinAngle = Math.round(Math.sin(((this.angle * Math.PI) / 180) + Number.EPSILON) * 100) / 100; //Calculo Seno do Ângulo
        if (this.angle == 90)
            this.angle90 = true;
        else
            this.angle90 = false;
    };
    PlQuadrilaterosParalelogramoComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        var arr = [];
        this.insersects.forEach(function (el) {
            if (el.object.name == "vertex-topRight" || el.object.name == "vertex-bottomLeft"
                || el.object.name == "vertex-topLeft" || el.object.name == "vertex-bottomRight") {
                arr.push(el);
                _this.currentIndex = arr;
                return;
            }
        });
    };
    PlQuadrilaterosParalelogramoComponent.prototype.setRaycaster = function (event) {
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
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
    PlQuadrilaterosParalelogramoComponent.prototype.mouseMove = function (event) {
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "vertex-topLeft")
                this.dragged = "topLeft";
            else if (this.currentIndex[0].object.name == "vertex-topRight")
                this.dragged = "topRight";
            else if (this.currentIndex[0].object.name == "vertex-bottomRight")
                this.dragged = "bottomRight";
            else if (this.currentIndex[0].object.name == "vertex-bottomLeft")
                this.dragged = "bottomLeft";
            this.drawObjectsMouseInput();
        }
    };
    PlQuadrilaterosParalelogramoComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    PlQuadrilaterosParalelogramoComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    PlQuadrilaterosParalelogramoComponent.prototype.drawObjectsMouseInput = function () {
        if (this.relation === Relation.POS) {
            if (this.dragged === 'topLeft' || this.dragged === 'topRight')
                this.diff = Math.sqrt(Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2));
            else if (this.dragged === 'bottomLeft' || this.dragged === 'bottomRight')
                this.diff = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2));
        }
        else if (this.relation === Relation.SIZE) {
            if (this.dragged === 'topLeft' || this.dragged === 'bottomLeft')
                this.diff = Math.sqrt(Math.pow((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x), 2));
            else if (this.dragged === 'topRight' || this.dragged === 'bottomRight')
                this.diff = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x), 2));
        }
        if (this.dragged === 'topLeft') {
            var mouseX = (this.mousePos.x <= 9 && this.mousePos.x >= -10) && (this.mousePos.x + this.diff <= 10), mouseY = this.mousePos.y >= 0.5 && this.mousePos.y <= 5;
            if (mouseX) {
                if (this.relation === Relation.POS) {
                    this.geoScene.scene.children[1].position.x = this.mousePos.x;
                    this.geoScene.scene.children[2].position.x = this.mousePos.x + this.diff;
                }
                else if (this.relation === Relation.SIZE && Math.sqrt(Math.pow((this.mousePos.x - this.geoScene.scene.children[2].position.x), 2)) <= 10) {
                    if (this.geoScene.scene.children[1].position.x > this.geoScene.scene.children[4].position.x)
                        this.diff *= -1;
                    if (!(this.mousePos.x < this.geoScene.scene.children[1].position.x && this.geoScene.scene.children[4].position.x <= -10
                        && this.geoScene.scene.children[1].position.x > this.geoScene.scene.children[4].position.x)) {
                        this.geoScene.scene.children[1].position.x = this.mousePos.x;
                        this.geoScene.scene.children[4].position.x = this.mousePos.x + this.diff;
                    }
                }
            }
            if (mouseY)
                this.geoScene.scene.children[1].position.y = this.mousePos.y, this.geoScene.scene.children[2].position.y = this.mousePos.y;
        }
        else if (this.dragged === 'topRight') {
            var mouseX = (this.mousePos.x <= 10 && this.mousePos.x >= -9) && (this.mousePos.x - this.diff >= -10), mouseY = this.mousePos.y >= 0.5 && this.mousePos.y <= 5;
            if (mouseX) {
                if (this.relation === Relation.POS) {
                    this.geoScene.scene.children[2].position.x = this.mousePos.x;
                    this.geoScene.scene.children[1].position.x = this.mousePos.x - this.diff;
                }
                else if (this.relation === Relation.SIZE && Math.sqrt(Math.pow((this.mousePos.x - this.geoScene.scene.children[1].position.x), 2)) <= 10) {
                    if (this.geoScene.scene.children[2].position.x > this.geoScene.scene.children[3].position.x)
                        this.diff *= -1;
                    if (!(this.mousePos.x > this.geoScene.scene.children[2].position.x && this.geoScene.scene.children[3].position.x >= 10
                        && this.geoScene.scene.children[2].position.x < this.geoScene.scene.children[3].position.x)) {
                        this.geoScene.scene.children[2].position.x = this.mousePos.x;
                        this.geoScene.scene.children[3].position.x = this.mousePos.x + this.diff;
                    }
                }
            }
            if (mouseY)
                this.geoScene.scene.children[1].position.y = this.mousePos.y, this.geoScene.scene.children[2].position.y = this.mousePos.y;
        }
        else if (this.dragged === 'bottomLeft') {
            var mouseX = (this.mousePos.x <= 9 && this.mousePos.x >= -10) && (this.mousePos.x + this.diff <= 10), mouseY = this.mousePos.y <= -0.5 && this.mousePos.y >= -5;
            if (mouseX) {
                if (this.relation === Relation.POS) {
                    this.geoScene.scene.children[4].position.x = this.mousePos.x;
                    this.geoScene.scene.children[3].position.x = this.mousePos.x + this.diff;
                }
                else if (this.relation === Relation.SIZE && Math.sqrt(Math.pow((this.mousePos.x - this.geoScene.scene.children[3].position.x), 2)) <= 10) {
                    if (this.geoScene.scene.children[1].position.x < this.geoScene.scene.children[4].position.x)
                        this.diff *= -1;
                    if (!(this.mousePos.x < this.geoScene.scene.children[4].position.x && this.geoScene.scene.children[1].position.x <= -10
                        && this.geoScene.scene.children[4].position.x > this.geoScene.scene.children[1].position.x)) {
                        this.geoScene.scene.children[4].position.x = this.mousePos.x;
                        this.geoScene.scene.children[1].position.x = this.mousePos.x + this.diff;
                    }
                }
            }
            if (mouseY)
                this.geoScene.scene.children[3].position.y = this.mousePos.y, this.geoScene.scene.children[4].position.y = this.mousePos.y;
        }
        else if (this.dragged === 'bottomRight') {
            var mouseX = (this.mousePos.x <= 10 && this.mousePos.x >= -9) && (this.mousePos.x - this.diff >= -10), mouseY = this.mousePos.y <= -0.5 && this.mousePos.y >= -5;
            if (mouseX) {
                if (this.relation === Relation.POS) {
                    this.geoScene.scene.children[3].position.x = this.mousePos.x;
                    this.geoScene.scene.children[4].position.x = this.mousePos.x - this.diff;
                }
                else if (this.relation === Relation.SIZE && Math.sqrt(Math.pow((this.mousePos.x - this.geoScene.scene.children[4].position.x), 2)) <= 10) {
                    if (this.geoScene.scene.children[2].position.x < this.geoScene.scene.children[3].position.x)
                        this.diff *= -1;
                    if (!(this.mousePos.x > this.geoScene.scene.children[3].position.x && this.geoScene.scene.children[2].position.x >= 10
                        && this.geoScene.scene.children[3].position.x < this.geoScene.scene.children[2].position.x)) {
                        this.geoScene.scene.children[3].position.x = this.mousePos.x;
                        this.geoScene.scene.children[2].position.x = this.mousePos.x + this.diff;
                    }
                }
            }
            if (mouseY)
                this.geoScene.scene.children[3].position.y = this.mousePos.y, this.geoScene.scene.children[4].position.y = this.mousePos.y;
        }
        if (this.geoScene.scene.children[1].position.x > this.geoScene.scene.children[3].position.x) {
            if (this.relation === Relation.POS) {
                if (this.dragged === 'topLeft' || this.dragged === 'topRight') {
                    this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[1].position.x;
                    this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[3].position.x - Math.abs(this.diff);
                }
                else if (this.dragged === 'bottomLeft' || this.dragged === 'bottomRight') {
                    this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[3].position.x;
                    this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[1].position.x + Math.abs(this.diff);
                }
            }
            else if (this.relation === Relation.SIZE) {
                if (this.dragged === 'topLeft' || this.dragged === 'bottomLeft') {
                    this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[1].position.x;
                    this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[3].position.x + Math.abs(this.diff);
                }
                else if (this.dragged === 'topRight' || this.dragged === 'bottomRight') {
                    this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[3].position.x;
                    this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[1].position.x - Math.abs(this.diff);
                }
            }
        }
        else if (this.geoScene.scene.children[2].position.x < this.geoScene.scene.children[4].position.x) {
            if (this.relation === Relation.POS) {
                if (this.dragged === 'topLeft' || this.dragged === 'topRight') {
                    this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[2].position.x;
                    this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[4].position.x + Math.abs(this.diff);
                }
                else if (this.dragged === 'bottomLeft' || this.dragged === 'bottomRight') {
                    this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[4].position.x;
                    this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[2].position.x - Math.abs(this.diff);
                }
            }
            else if (this.relation === Relation.SIZE) {
                if (this.dragged === 'topLeft' || this.dragged === 'bottomLeft') {
                    this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[4].position.x;
                    this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[2].position.x + Math.abs(this.diff);
                }
                else if (this.dragged === 'topRight' || this.dragged === 'bottomRight') {
                    this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[2].position.x;
                    this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[4].position.x - Math.abs(this.diff);
                }
            }
        }
        if (Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2))) < 1) {
            if (this.dragged === 'topRight' || this.dragged === 'bottomRight')
                this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[2].position.x - 1,
                    this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[3].position.x - 1;
            else if (this.dragged === 'topLeft' || this.dragged === 'bottomLeft')
                this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[1].position.x + 1,
                    this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[4].position.x + 1;
        }
        if (this.geoScene.scene.children[1].position.x < -10)
            this.geoScene.scene.children[1].position.x = -10;
        else if (this.geoScene.scene.children[2].position.x > 10)
            this.geoScene.scene.children[2].position.x = 10;
        else if (this.geoScene.scene.children[3].position.x > 10)
            this.geoScene.scene.children[3].position.x = 10;
        else if (this.geoScene.scene.children[4].position.x < -10)
            this.geoScene.scene.children[4].position.x = -10;
        if (this.geoScene.scene.children[1].position.x > 9)
            this.geoScene.scene.children[1].position.x = 9;
        else if (this.geoScene.scene.children[2].position.x < -9)
            this.geoScene.scene.children[2].position.x = -9;
        else if (this.geoScene.scene.children[3].position.x < -9)
            this.geoScene.scene.children[3].position.x = -9;
        else if (this.geoScene.scene.children[4].position.x > 9)
            this.geoScene.scene.children[4].position.x = 9;
        if (this.dragged === 'topLeft' || this.dragged === 'topRight')
            this.base = Math.sqrt(Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2));
        else if (this.dragged === 'bottomLeft' || this.dragged === 'bottomRight')
            this.base = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2));
        this.drawAngle();
        this.drawParallelogram();
        this.drawHeightDashedLine(this.geoScene.scene.children[1].position.y, this.geoScene.scene.children[4].position.y, true);
        this.geoScene.fromInput = false;
        this.renderOrder();
        this.geoScene.render();
    };
    PlQuadrilaterosParalelogramoComponent.prototype.drawAngle = function () {
        var a = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](this.geoScene.scene.children[4].position.x - this.geoScene.scene.children[1].position.x, this.geoScene.scene.children[4].position.y - this.geoScene.scene.children[1].position.y);
        var d = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](this.geoScene.scene.children[4].position.x - this.geoScene.scene.children[3].position.x, this.geoScene.scene.children[4].position.y - this.geoScene.scene.children[3].position.y);
        var da = d.x * a.x + d.y * a.y;
        var dMod = Math.sqrt(Math.pow(d.x, 2) + Math.pow(d.y, 2));
        var aMod = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
        var cos = da / (dMod * aMod);
        this.angle = Math.acos(cos) * 180 / Math.PI;
        var radiansAlpha = this.angle * (Math.PI / 180);
        var radiansBeta = (180 - this.angle) * (Math.PI / 180);
        var alpha1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"](), alpha2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        var beta1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"](), beta2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        var geometryAngleA = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), geometryAngleB = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), segmentCount = 92, radius = 0.5, size = 0.55, dist = 0.27;
        if (this.base < 2 || this.height < 2)
            radius = 0.35, size = 0.43, dist = 0.2;
        for (var i = 0; i <= segmentCount; i++) {
            var theta = ((i / segmentCount) * radiansAlpha) - (((segmentCount - i) / segmentCount) * radiansAlpha);
            theta /= 2;
            geometryAngleA.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, -Math.cos(theta) * radius, 0));
            if (i == 46) { // quando estiver no ponto ao centro do angulo
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (radius + dist), -Math.cos(theta) * (radius + dist), 0)); // adicionando vertice ao centro do angulo desenhado
                var line1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
                line1.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis
                var alphaL1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', size, '#000000');
                alphaL1.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha
                alpha1.add(line1); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                alpha1.add(alphaL1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
                alpha1.position.copy(this.geoScene.scene.children[4].position);
                var line2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
                line2.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis
                var alphaL2 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('α', size, '#000000');
                alphaL2.position.copy(geometryLine.vertices[1]); // passando o alpha para o ultimo vertice da linha
                alpha2.add(line2); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                alpha2.add(alphaL2); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
                alpha2.position.copy(this.geoScene.scene.children[2].position);
            }
        }
        for (var i = 0; i <= segmentCount; i++) {
            var theta = ((i / segmentCount) * radiansBeta) - (((segmentCount - i) / segmentCount) * radiansBeta);
            theta /= 2;
            geometryAngleB.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * radius, -Math.cos(theta) * radius, 0));
            if (i == 46) { // quando estiver no ponto ao centro do angulo
                var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0)); // adicionando vertice ao centro
                geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * (radius + dist), -Math.cos(theta) * (radius + dist), 0)); // adicionando vertice ao centro do angulo desenhado
                var line1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
                line1.visible = false; // a linha so serve como guia do alpha, para ele poder ser rotacionado usando a Z axis
                var betaL1 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('β', size, '#000000');
                betaL1.position.copy(geometryLine.vertices[1]); // passando o beta para o ultimo vertice da linha
                beta1.add(line1); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                beta1.add(betaL1); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
                beta1.position.copy(this.geoScene.scene.children[3].position);
                var line2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xff0000, linewidth: 2 }));
                line2.visible = false; // a linha so serve como guia do beta, para ele poder ser rotacionado usando a Z axis
                var betaL2 = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('β', size, '#000000');
                betaL2.position.copy(geometryLine.vertices[1]); // passando o beta para o ultimo vertice da linha
                beta2.add(line2); // se voce tentar rotacionar um sprite text sozinho, ou ele nao faz nada, ou ele muda de tamanho insanamente
                beta2.add(betaL2); // agrupando os dois, voce aproveita as propriedades da linha, e o three js faz a parte dele :v
                beta2.position.copy(this.geoScene.scene.children[1].position);
            }
        }
        var rotationA = this.angle * 0.0175 + (180 - this.angle) * 0.00875;
        var rotationB = this.angle * 0.0175 + (180 - (this.angle - 180)) * 0.00875;
        var angle1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000 }));
        var angle2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleA, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000 }));
        angle1.position.copy(this.geoScene.scene.children[4].position);
        angle1.rotateZ(rotationA);
        alpha1.rotateZ(rotationA);
        angle2.position.copy(this.geoScene.scene.children[2].position);
        angle2.rotateZ(rotationA + 180 * 0.0175);
        alpha2.rotateZ(rotationA + 180 * 0.0175);
        var angle3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000 }));
        var angle4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngleB, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000 }));
        angle3.position.copy(this.geoScene.scene.children[3].position);
        angle3.rotateZ(rotationB);
        beta1.rotateZ(rotationB);
        angle4.position.copy(this.geoScene.scene.children[1].position);
        angle4.rotateZ(rotationB + 180 * 0.0175);
        beta2.rotateZ(rotationB + 180 * 0.0175);
        var labelsGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"](), anglesGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        anglesGroup.add(angle1, angle2, angle3, angle4);
        labelsGroup.add(alpha1, alpha2, beta1, beta2);
        this.geoScene.scene.children[6] = anglesGroup;
        this.geoScene.scene.children[9] = labelsGroup;
        this.angle = Math.round(this.angle);
        this.oldAngle = this.angle;
    };
    PlQuadrilaterosParalelogramoComponent.prototype.drawParallelogram = function () {
        var x1 = this.geoScene.scene.children[1].position.x, x4 = this.geoScene.scene.children[4].position.x;
        var parallelogram = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"](), parallelogramLineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), material = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x4683B4 });
        for (var i = -0.045; i <= 0.045; i += 0.015) {
            var mod = 1;
            if (x1 < x4)
                mod = -1;
            parallelogramLineGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[1].position.x + i, this.geoScene.scene.children[1].position.y - i * mod), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[2].position.x + i, this.geoScene.scene.children[2].position.y - i * mod), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[3].position.x + i, this.geoScene.scene.children[3].position.y - i * mod), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[4].position.x + i, this.geoScene.scene.children[4].position.y - i * mod), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[1].position.x + i, this.geoScene.scene.children[1].position.y - i * mod));
        }
        var parallelogramLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](parallelogramLineGeometry, material);
        parallelogram.add(parallelogramLine);
        this.geoScene.scene.children[0] = parallelogram;
        var dist = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x), 2) +
            Math.pow((this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y), 2)) / 2;
        var ratio = dist / 2 / dist;
        var Ax = (1 - ratio) * this.geoScene.scene.children[4].position.x + ratio * this.geoScene.scene.children[1].position.x, Ay = (1 - ratio) * this.geoScene.scene.children[4].position.y + ratio * this.geoScene.scene.children[1].position.y;
        var theta = (20 - dist * 1.5) * 0.0175; // angulo desejado * 0.0175 (mesma coisa que esta formula -> theta = (angulo / 360) * Math.PI * 2)
        if (this.base < 2 && this.height < 2)
            theta += 15 * 0.0175;
        //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
        var xrot = Math.cos(theta) * (Ax - this.geoScene.scene.children[4].position.x) - Math.sin(theta) *
            (Ay - this.geoScene.scene.children[4].position.y) + this.geoScene.scene.children[4].position.x, yrot = Math.sin(theta) * (Ax - this.geoScene.scene.children[4].position.x) + Math.cos(theta) *
            (Ay - this.geoScene.scene.children[4].position.y) + this.geoScene.scene.children[4].position.y;
        var labelA = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('a', 0.75, '#4683B4');
        labelA.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot, yrot, 0));
        var distance = Math.sqrt((Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2)));
        var distancesRatio = distance / 2 / distance;
        var B = (1 - distancesRatio) * this.geoScene.scene.children[4].position.x + distancesRatio * this.geoScene.scene.children[3].position.x;
        var labelB = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('b', 0.75, '#4683B4');
        labelB.position.x = B;
        labelB.position.y = this.geoScene.scene.children[4].position.y - 0.5;
        var labels = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        labels.add(labelA, labelB);
        this.geoScene.scene.children[7] = labels;
    };
    PlQuadrilaterosParalelogramoComponent.prototype.drawHeightDashedLine = function (b, B, calc) {
        var heightDashedLineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), position;
        if (this.geoScene.scene.children[1].position.x > this.geoScene.scene.children[4].position.x)
            position = this.geoScene.scene.children[1].position.x;
        else
            position = this.geoScene.scene.children[4].position.x;
        heightDashedLineGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](position, b - 0.045, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](position, B + 0.045, 0));
        var dashed;
        dashed = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x444444, linewidth: 0.2, dashSize: 0.2, gapSize: 0.2 });
        var line = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](heightDashedLineGeometry, dashed);
        line.computeLineDistances();
        if (this.angle >= 89 && this.angle <= 91)
            line.visible = false;
        this.geoScene.scene.children[5] = line;
        var distance = Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y), 2)));
        var distancesRatio = distance / 2 / distance;
        var y = (1 - distancesRatio) * this.geoScene.scene.children[4].position.y + distancesRatio * this.geoScene.scene.children[1].position.y;
        var labelH = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('h', 0.5, '#666');
        labelH.position.x = position + 0.25;
        labelH.position.y = y;
        if (this.height < 2)
            labelH.position.y = this.geoScene.scene.children[1].position.y + 0.35, labelH.position.x -= 0.25;
        this.geoScene.scene.children[8] = labelH;
        if (calc)
            this.height = Math.abs(B - b);
    };
    PlQuadrilaterosParalelogramoComponent.prototype.changeAngle = function () {
        var centerLeft = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x), 2) +
            Math.pow((this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y), 2)) / 2;
        var centerRight = Math.sqrt(Math.pow((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x), 2) +
            Math.pow((this.geoScene.scene.children[2].position.y - this.geoScene.scene.children[3].position.y), 2)) / 2;
        var ratioLeft = centerLeft / 2 / centerLeft;
        var ratioRight = centerRight / 2 / centerRight;
        var xLeft = (1 - ratioLeft) * this.geoScene.scene.children[4].position.x + ratioLeft * this.geoScene.scene.children[1].position.x, yLeft = (1 - ratioLeft) * this.geoScene.scene.children[4].position.y + ratioLeft * this.geoScene.scene.children[1].position.y, xRight = (1 - ratioRight) * this.geoScene.scene.children[3].position.x + ratioRight * this.geoScene.scene.children[2].position.x, yRight = (1 - ratioRight) * this.geoScene.scene.children[3].position.y + ratioRight * this.geoScene.scene.children[2].position.y;
        var theta = (this.angle - this.oldAngle) * 0.0175;
        //https://math.stackexchange.com/a/814981 -> formula para rotacionar um ponto em um circulo dado um angulo
        var xrot = Math.cos(theta) * (this.geoScene.scene.children[1].position.x - xLeft) - Math.sin(theta) *
            (this.geoScene.scene.children[1].position.y - yLeft) + xLeft, yrot = Math.sin(theta) * (this.geoScene.scene.children[1].position.x - xLeft) + Math.cos(theta) *
            (this.geoScene.scene.children[1].position.y - yLeft) + yLeft;
        var pos1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot, yrot, 0);
        xrot = Math.cos(theta) * (this.geoScene.scene.children[2].position.x - xRight) - Math.sin(theta) *
            (this.geoScene.scene.children[2].position.y - yRight) + xRight,
            yrot = Math.sin(theta) * (this.geoScene.scene.children[2].position.x - xRight) + Math.cos(theta) *
                (this.geoScene.scene.children[2].position.y - yRight) + yRight;
        var pos2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot, yrot, 0);
        xrot = Math.cos(theta) * (this.geoScene.scene.children[3].position.x - xRight) - Math.sin(theta) *
            (this.geoScene.scene.children[3].position.y - yRight) + xRight,
            yrot = Math.sin(theta) * (this.geoScene.scene.children[3].position.x - xRight) + Math.cos(theta) *
                (this.geoScene.scene.children[3].position.y - yRight) + yRight;
        var pos3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot, yrot, 0);
        xrot = Math.cos(theta) * (this.geoScene.scene.children[4].position.x - xLeft) - Math.sin(theta) *
            (this.geoScene.scene.children[4].position.y - yLeft) + xLeft,
            yrot = Math.sin(theta) * (this.geoScene.scene.children[4].position.x - xLeft) + Math.cos(theta) *
                (this.geoScene.scene.children[4].position.y - yLeft) + yLeft;
        var pos4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](xrot, yrot, 0);
        if (pos1.x > pos3.x || pos2.x < pos4.x) {
            if (pos1.x > pos3.x) {
                pos1.x = pos3.x;
                pos2.x = pos1.x + this.base;
                pos4.x = pos3.x - this.base;
            }
            else if (pos2.x < pos4.x) {
                pos2.x = pos4.x;
                pos1.x = pos2.x - this.base;
                pos3.x = pos4.x + this.base;
            }
            pos1.y -= 0.5;
            pos2.y -= 0.5;
            pos3.y += 0.5;
            pos4.y += 0.5;
        }
        if (pos1.y > 10)
            pos1.y -= 1, pos2.y -= 1;
        if (pos4.y < -10)
            pos3.y += 1, pos4.y += 1;
        var height = Math.sqrt((Math.pow((pos1.y - pos4.y), 2)));
        if (height >= 1 && height <= 10) {
            this.geoScene.scene.children[1].position.copy(pos1);
            this.geoScene.scene.children[2].position.copy(pos2);
            this.geoScene.scene.children[3].position.copy(pos3);
            this.geoScene.scene.children[4].position.copy(pos4);
            this.height = height;
            this.errorInputBase = false;
            try {
                document.getElementById('err').classList.remove('alertMid');
            }
            catch (_a) { }
        }
        else if (height > 10) {
            pos1.y -= 0.5, pos2.y -= 0.5;
            pos3.y += 0.5, pos4.y += 0.5;
            document.getElementById('err').classList.add('alertMid');
        }
        else
            document.getElementById('err').classList.add('alertMid');
        this.drawAngle();
        this.drawParallelogram();
        this.drawHeightDashedLine(this.height / 2, -this.height / 2, false);
        this.renderOrder();
        this.geoScene.render();
    };
    PlQuadrilaterosParalelogramoComponent.prototype.renderObjects = function () {
        if (this.base < 2) {
            this.geoScene.scene.children[1].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.base / 2 + 0.5, this.height / 2, 0));
            this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.base / 2 - 0.5, -this.height / 2, 0));
            this.geoScene.scene.children[2].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.base / 2 + 0.5, this.height / 2, 0));
            this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.base / 2 - 0.5, -this.height / 2, 0));
        }
        else {
            this.geoScene.scene.children[1].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.base / 2 + 1, this.height / 2, 0));
            this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.base / 2 - 1, -this.height / 2, 0));
            this.geoScene.scene.children[2].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.base / 2 + 1, this.height / 2, 0));
            this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.base / 2 - 1, -this.height / 2, 0));
        }
        this.drawAngle();
        this.drawParallelogram();
        this.drawHeightDashedLine(this.height / 2, -this.height / 2, false);
        this.geoScene.fromInput = false;
        this.renderOrder();
        this.geoScene.render();
    };
    PlQuadrilaterosParalelogramoComponent.prototype.renderOrder = function () {
        this.geoScene.scene.children[1].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[2].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1;
    };
    PlQuadrilaterosParalelogramoComponent.prototype.checkInput = function (type) {
        this.base = Math.round(this.base), this.angle = Math.round(this.angle);
        var angle = (this.angle > -1 && this.angle < 181);
        var baseHeight = (this.base >= 1 && this.base <= 10) && (this.height >= 1 && this.height <= 10);
        if (angle && baseHeight) {
            this.errorInputAngle = false;
            this.errorInputBase = false;
            if (type === 'angle')
                this.changeAngle();
            else
                this.renderObjects();
        }
        else {
            if (angle)
                this.errorInputAngle = false;
            else
                this.errorInputAngle = true;
            if (baseHeight)
                this.errorInputBase = false;
            else
                this.errorInputBase = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], PlQuadrilaterosParalelogramoComponent.prototype, "geoScene", void 0);
    PlQuadrilaterosParalelogramoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-quadrilateros-paralelogramo',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlQuadrilaterosParalelogramoComponent);
    return PlQuadrilaterosParalelogramoComponent;
}());

/** CHILDREN INDEX
 * 0 - Paralelogramo Azul (Contorno)
 * 1 - Vertice Superior Esquerdo
 * 2 - Vertice Superior Direito
 * 3 - Vertice Inferior Direito
 * 4 - Vertice Inferior Esquerdo
 * 5 - Linha pontilhada altura
 * 6 - Angulos
 */ 


/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o tipo de quadrilátero</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida do lado(<ng-katex equation=\"\\ell\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"lado\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n        </p>\r\n\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\"\r\n          style=\"text-align: center;\">\r\n          A medida do lado deve ser um valor entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <!-- <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\"\r\n      (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"></geo-scene> -->\r\n\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Quadrado</h3>\r\n    <h4>Propriedades:</h4>\r\n    <p>\r\n      O quadrado é um quadrilátero (quatro lados) regular com lados congruentes (mesma medida) e ângulos internos retos\r\n      (90°). A soma dos ângulos internos é igual a 360°.\r\n    </p>\r\n\r\n    <!-- Calculos -->\r\n\r\n    <!-- Inicio Calculo Area -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n              Área: <ng-katex class=\"explicacao\" equation=\"A = {{ lado * lado }} \\ u.a. \">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\" data-target=\"#collapseArea\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Area - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{A = {{lado}}^2 } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituímos a medida do lado <ng-katex equation=\"\\ell = {{ lado }} \"></ng-katex> na fórmula A =\r\n                    <ng-katex equation=\"\\ell ^2\"></ng-katex>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Area - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{A = {{ lado * lado }} \\ u.a.}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final após resolver a potência.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo Area -->\r\n\r\n      <!-- Inicio Calculo Perimetro -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPerimetro\" data-toggle=\"collapse\" data-target=\"#collapsePerimetro\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsePerimetro\"\r\n              aria-expanded=\"false\" aria-controls=\"collapsePerimetro\">\r\n              Perímetro: <ng-katex class=\"explicacao\" equation=\"P = {{ 4 * lado }} \\ u.m.\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapsePerimetro\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapsePerimetro\" class=\"collapse\" aria-labelledby=\"headingPrincipal\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Perimetro - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = 4 \\cdot {{ lado }} } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituímos a medida do lado <ng-katex equation=\"\\ell = {{ lado }} \"></ng-katex> na fórmula P =\r\n                    <ng-katex equation=\"4 \\cdot \\ell\"></ng-katex>.\r\n                    <p>\r\n                      OBS: O perímetro é a soma de todos os lados do polígono.\r\n                      Como o quadrado tem todos os lados congruentes, o perímetro é o quádruplo da medida do lado.\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Perimetro - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = {{ 4 * lado }} \\ u.m.}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo Perimetro -->\r\n\r\n      <!-- Inicio Calculo NrDiagonais -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseNrDiagonais\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n              Número de Diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{ (4 * (4-3)) / 2 }}\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseNrDiagonais\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--NrDiagonais - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot (4 - 3)}{2} } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituímos número de lados <ng-katex equation=\"N = 4\"></ng-katex> do polígono na fórmula\r\n                    <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--NrDiagonais - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot 1}{2} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resolvemos as operações entre parênteses.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--NrDiagonais - Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{ (4 * (4-3)) / 2 }} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final, após resolvermos a multipliação e divisão.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo NrDiagonais -->\r\n\r\n      <!-- Inicio Calculo TmDiagonais -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTmDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseTmDiagonais\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseTmDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseTmDiagonais\">\r\n              Tamanho da Diagonal: <ng-katex class=\"explicacao\" equation=\"d = {{lado}} \\sqrt 2 \\ u.m.\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseTmDiagonais\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseTmDiagonais\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--TmDiagonais - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{d = {{lado}} \\sqrt 2 } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final após substituir o lado <ng-katex equation=\"\\ell = {{lado}} \"></ng-katex> na fórmula\r\n                    <ng-katex equation=\"d = \\ell \\sqrt 2\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo TmDiagonais -->\r\n\r\n      <!-- Inicio Calculo SomaAngulosInt -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n          data-target=\"#collapseSomaAngulosInt\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n              Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 360\\degree\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--SomaAngulosInt - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 4 \\cdot 90\\degree } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    O quadrado possui quatro ângulos internos retos (90°). Logo, a soma dos ângulos internos é dada por\r\n                    <ng-katex equation=\"S = 4 \\cdot 90\\degree\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--SomaAngulosInt - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 360\\degree}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlQuadrilaterosQuadradoComponent; });
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




var PlQuadrilaterosQuadradoComponent = /** @class */ (function () {
    function PlQuadrilaterosQuadradoComponent() {
        this.lado = 7;
        this.errorInput = false;
        this.buttons = [
            { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
            { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
            { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
            { title: "Losango", route: "pl_quadrilateros_losango" },
            { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
        ];
    }
    PlQuadrilaterosQuadradoComponent.prototype.ngOnInit = function () {
        this.geoScene.fieldOfView = 7;
    };
    PlQuadrilaterosQuadradoComponent.prototype.ngAfterViewInit = function () {
        this.drawObjects();
    };
    PlQuadrilaterosQuadradoComponent.prototype.drawObjects = function () {
        var squareOutlineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["PlaneGeometry"](this.lado, this.lado, 25, 25);
        var squareOutlineMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x4683B4 });
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareOutlineGeometry, squareOutlineMaterial);
        var squareInsideGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["PlaneGeometry"](this.lado - 0.25, this.lado - 0.25, 25, 25);
        var squareInsideMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFFFFFF });
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareInsideGeometry, squareInsideMaterial);
        // https://math.stackexchange.com/a/1490157 -> descobrir a posicao dos vertices de um quadrado dado o ponto do centro
        var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.lado / 2 - 0.125, this.lado / 2 - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.lado / 2 + 0.125, -this.lado / 2 + 0.125, 0));
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        var size = 0.5;
        if (this.lado === 1)
            size = 0.25;
        var geometryAngle1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle1.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.lado / 2 + size + 0.125, this.lado / 2 - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.lado / 2 + size + 0.125, this.lado / 2 - size - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.lado / 2 + 0.125, this.lado / 2 - size - 0.125, 0));
        var angleOutline1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle1, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry1 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry1, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        var distance1 = Math.sqrt((Math.pow((geometryAngle1.vertices[0].x - geometryAngle1.vertices[2].x), 2) + Math.pow((geometryAngle1.vertices[0].y - geometryAngle1.vertices[2].y), 2)));
        var distancesRatio1 = distance1 / 2 / distance1;
        var x1 = (1 - distancesRatio1) * geometryAngle1.vertices[2].x + distancesRatio1 * geometryAngle1.vertices[0].x, y1 = (1 - distancesRatio1) * geometryAngle1.vertices[2].y + distancesRatio1 * geometryAngle1.vertices[0].y;
        angleDot1.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x1, y1, 0));
        var geometryAngle2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle2.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.lado / 2 - size - 0.125, this.lado / 2 - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.lado / 2 - size - 0.125, this.lado / 2 - size - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.lado / 2 - 0.125, this.lado / 2 - size - 0.125, 0));
        var angleOutline2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle2, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry2 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry2, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        var distance2 = Math.sqrt((Math.pow((geometryAngle2.vertices[0].x - geometryAngle2.vertices[2].x), 2) + Math.pow((geometryAngle2.vertices[0].y - geometryAngle2.vertices[2].y), 2)));
        var distancesRatio2 = distance1 / 2 / distance2;
        var x2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].x + distancesRatio2 * geometryAngle2.vertices[0].x, y2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].y + distancesRatio2 * geometryAngle2.vertices[0].y;
        angleDot2.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x2, y2, 0));
        var geometryAngle3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle3.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.lado / 2 - size - 0.125, -this.lado / 2 + 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.lado / 2 - size - 0.125, -this.lado / 2 + size + 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.lado / 2 - 0.125, -this.lado / 2 + size + 0.125, 0));
        var angleOutline3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle3, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry3 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry3, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        var distance3 = Math.sqrt((Math.pow((geometryAngle3.vertices[0].x - geometryAngle3.vertices[2].x), 2) + Math.pow((geometryAngle3.vertices[0].y - geometryAngle3.vertices[2].y), 2)));
        var distancesRatio3 = distance3 / 2 / distance3;
        var x3 = (1 - distancesRatio3) * geometryAngle3.vertices[2].x + distancesRatio3 * geometryAngle3.vertices[0].x, y3 = (1 - distancesRatio3) * geometryAngle3.vertices[2].y + distancesRatio3 * geometryAngle3.vertices[0].y;
        angleDot3.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x3, y3, 0));
        var geometryAngle4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle4.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.lado / 2 + size + 0.125, -this.lado / 2 + 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.lado / 2 + size + 0.125, -this.lado / 2 + size + 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.lado / 2 + 0.125, -this.lado / 2 + size + 0.125, 0));
        var angleOutline4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle4, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry4 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry4, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        var distance4 = Math.sqrt((Math.pow((geometryAngle4.vertices[0].x - geometryAngle4.vertices[2].x), 2) + Math.pow((geometryAngle4.vertices[0].y - geometryAngle4.vertices[2].y), 2)));
        var distancesRatio4 = distance4 / 2 / distance4;
        var x4 = (1 - distancesRatio4) * geometryAngle4.vertices[2].x + distancesRatio4 * geometryAngle4.vertices[0].x, y4 = (1 - distancesRatio4) * geometryAngle4.vertices[2].y + distancesRatio4 * geometryAngle4.vertices[0].y;
        angleDot4.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x4, y4, 0));
        var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        angle.add(angleOutline1, angleDot1, angleOutline2, angleDot2, angleOutline3, angleDot3, angleOutline4, angleDot4);
        this.geoScene.scene.children[3] = angle;
        var labelDiagonal = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('d', 0.75, '#FF0000');
        labelDiagonal.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0.3, -0.3, 0));
        if (this.lado <= 2)
            labelDiagonal.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.lado / 2 - 0.35, -this.lado / 2 - 0.35, 0));
        this.geoScene.scene.children[4] = labelDiagonal;
        var labelLadoR = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('ℓ', 1, '#4683B4');
        labelLadoR.position.x = this.lado * 0.5 + 0.5;
        labelLadoR.position.y = 0;
        var labelLadoD = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('ℓ', 1, '#4683B4');
        labelLadoD.position.x = 0;
        labelLadoD.position.y = -this.lado * 0.5 - 0.7;
        var labelLado = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        labelLado.add(labelLadoR, labelLadoD);
        this.geoScene.scene.children[5] = labelLado;
        this.geoScene.render();
    };
    PlQuadrilaterosQuadradoComponent.prototype.checkInput = function () {
        if (this.lado >= 1 && this.lado <= 10) {
            this.errorInput = false;
            this.drawObjects();
        }
        else
            this.errorInput = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], PlQuadrilaterosQuadradoComponent.prototype, "geoScene", void 0);
    PlQuadrilaterosQuadradoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-quadrilateros-quadrado',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlQuadrilaterosQuadradoComponent);
    return PlQuadrilaterosQuadradoComponent;
}());

/** CHILDREN INDEX
 * 0 - Quadrado Azul (Contorno)
 * 1 - Quadrado Branco (Interno)
 * 2 - Linha Diagonal
 * 3 - Grupo que forma os angulos de 90°
 * 4 - Label da linha diagonal
 * 5 - Grupo com as labels ℓ
 */ 


/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o tipo de quadrilátero</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida do lado(<b><i>a</i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"ladoA\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('A')\" max=\"10\" min=\"1\" />\r\n          e do lado(<b><i>b</i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"ladoB\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('B')\" max=\"10\" min=\"1\" />\r\n        </p>\r\n\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\"\r\n          style=\"text-align: center;\">\r\n          A medida dos lados devem ser valores entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <!-- <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\"\r\n      (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"></geo-scene> -->\r\n\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Retângulo</h3>\r\n    <h4>Propriedades:</h4>\r\n\r\n    <p>O retângulo é um quadrilátero (quatro lados) com lados congruentes (mesma medida) dois a dois e ângulos internos\r\n      retos (90°). A soma dos ângulos internos é igual a 360°.\r\n    </p>\r\n\r\n    <!-- Calculos -->\r\n\r\n    <!-- Inicio Calculo Area -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n              Área: <ng-katex class=\"explicacao\" equation=\"A = {{ ladoA * ladoB }} \\ u.a.\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\" data-target=\"#collapseArea\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Area - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{A = {{ ladoA }} \\cdot {{ ladoB }} } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituímos a medida dos lados <ng-katex equation=\"a = {{ ladoA }} \"></ng-katex> e <ng-katex\r\n                      equation=\"b = {{ ladoB }}\"></ng-katex> na fórmula A =\r\n                    <ng-katex equation=\"a \\cdot b\"></ng-katex>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--Area - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{A = {{ ladoA * ladoB }} \\ u.a.}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final após resolver o produto.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo Area -->\r\n\r\n      <!-- Inicio Calculo Perimetro -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingPerimetro\" data-toggle=\"collapse\" data-target=\"#collapsePerimetro\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#collapsePerimetro\" aria-expanded=\"false\" aria-controls=\"collapsePerimetro\">\r\n                Perímetro: <ng-katex class=\"explicacao\" equation=\"A = {{ 2 * ladoA + 2 * ladoB }} \\ u.m.\">\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapsePerimetro\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapsePerimetro\" class=\"collapse\" aria-labelledby=\"headingPerimetro\"\r\n            data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--Perimetro - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A = 2 \\cdot {{ ladoA }} + 2 \\cdot {{ ladoB }} } \">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Substituímos a medida dos lados <ng-katex equation=\"a = {{ ladoA }} \"></ng-katex> e <ng-katex\r\n                        equation=\"b = {{ ladoB }}\"></ng-katex> na fórmula A =\r\n                      <ng-katex equation=\"2a + 2b\"></ng-katex>\r\n                      <p>\r\n                        OBS: O perímetro é a soma de todos os lados do polígono. Como o retângulo tem os lados iguais\r\n                        dois a dois, o perímetro é igual à soma do dobro dos lados (a) e (b).\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Perimetro - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A = {{ 2 * ladoA }} + {{ 2 * ladoB }} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvendo os produtos.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Perimetro - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A = {{ 2 * ladoA + 2 * ladoB }} \\ u.m. }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvendo os produtos.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo Perimetro -->\r\n\r\n      <!-- Inicio Calculo NrDiagonais -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseNrDiagonais\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n              Número de Diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{ (4 * (4-3)) / 2 }}\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseNrDiagonais\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--NrDiagonais - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot (4 - 3)}{2} } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Substituímos número de lados <ng-katex equation=\"N = 4\"></ng-katex> do polígono na fórmula\r\n                    <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--NrDiagonais - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot 1}{2} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resolvemos as operações entre parênteses.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--NrDiagonais - Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{ (4 * (4-3)) / 2 }} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final, após resolvermos a multipliação e divisão.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo NrDiagonais -->\r\n\r\n      <!-- Inicio Calculo TmDiagonais -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingTmDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseTmDiagonais\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseTmDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseTmDiagonais\">\r\n                Tamanho da Diagonal: <ng-katex class=\"explicacao\" [equation]=\"sqrtValue2\"> u.m.\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseTmDiagonais\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseTmDiagonais\" class=\"collapse\" aria-labelledby=\"headingTmDiagonais\"\r\n            data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--TmDiagonais - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{d^2 = {{ladoA}}^2 + {{ladoB}}^2 } \">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Para calcular o tamanho da diagonal do retângulo usamos o Teorema de Pitágoras <ng-katex\r\n                        equation=\"d^2 = a^2 + b^2\"></ng-katex> onde <b> d </b> é a hipotenusa (diagonal) e <b> a </b> e\r\n                      <b> b </b> são catetos (lados do retângulo).\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--TmDiagonais - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{d^2 = {{ladoA * ladoA}} + {{ladoB * ladoB}} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos as potências.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--TmDiagonais - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{d^2 = {{ (ladoA * ladoA) + (ladoB * ladoB) }} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos a soma.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--TmDiagonais - Passo 4-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{d = \\sqrt{{ (ladoA * ladoA) + (ladoB * ladoB) }} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Realizamos a operação inversa da potência.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--TmDiagonais - Passo 5-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" [equation]=\"sqrtValue1\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resultado final.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo TmDiagonais -->\r\n\r\n      <!-- Inicio Calculo SomaAngulosInt -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n          data-target=\"#collapseSomaAngulosInt\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n              Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 360\\degree\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--SomaAngulosInt - Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 4 \\cdot 90\\degree } \">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    O quadrado possui quatro ângulos internos retos (90°). Logo, a soma dos ângulos internos é dada por\r\n                    <ng-katex equation=\"S = 4 \\cdot 90\\degree\"></ng-katex>.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n              <!--SomaAngulosInt - Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 360\\degree}\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Resultado final.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlQuadrilaterosRetanguloComponent; });
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




var PlQuadrilaterosRetanguloComponent = /** @class */ (function () {
    function PlQuadrilaterosRetanguloComponent() {
        this.ladoA = 10;
        this.ladoB = 5;
        this.oldLadoA = this.ladoA;
        this.oldLadoB = this.ladoB;
        this.errorInput = false;
        this.conta = Math.sqrt((this.ladoA * this.ladoA) + (this.ladoB * this.ladoB)).toFixed(2);
        this.newConta = this.conta.toString().replace(".", ",");
        this.sqrtValue1 = "\\textcolor{black}{d \\approx " + this.newConta + " u.m. }";
        this.sqrtValue2 = "d \\approx " + this.newConta + " u.m.";
        this.buttons = [
            { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
            { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
            { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
            { title: "Losango", route: "pl_quadrilateros_losango" },
            { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
        ];
    }
    PlQuadrilaterosRetanguloComponent.prototype.ngOnInit = function () {
        this.geoScene.fieldOfView = 7;
    };
    PlQuadrilaterosRetanguloComponent.prototype.ngAfterViewInit = function () {
        this.drawObjects();
    };
    PlQuadrilaterosRetanguloComponent.prototype.drawObjects = function () {
        var color = 0x4683B4, colorLbl = '#4683B4';
        var rectangleOutlineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["PlaneGeometry"](this.ladoA, this.ladoB, 25, 25);
        var rectangleOutlineMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: color });
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](rectangleOutlineGeometry, rectangleOutlineMaterial);
        var rectangleInsideGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["PlaneGeometry"](this.ladoA - 0.25, this.ladoB - 0.25, 25, 25);
        var rectangleInsideMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xFFFFFF });
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](rectangleInsideGeometry, rectangleInsideMaterial);
        // https://math.stackexchange.com/a/1490157 -> descobrir a posicao dos vertices de um quadrado dado o ponto do centro
        var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.ladoA / 2 - 0.125, this.ladoB / 2 - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.ladoA / 2 + 0.125, -this.ladoB / 2 + 0.125, 0));
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0xFF0000, linewidth: 2 }));
        var size = 0.5;
        if (this.ladoA === 1 || this.ladoB === 1)
            size = 0.25;
        var geometryAngle1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle1.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.ladoA / 2 + size + 0.125, this.ladoB / 2 - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.ladoA / 2 + size + 0.125, this.ladoB / 2 - size - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.ladoA / 2 + 0.125, this.ladoB / 2 - size - 0.125, 0));
        var angleOutline1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle1, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry1 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot1 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry1, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        var distance1 = Math.sqrt((Math.pow((geometryAngle1.vertices[0].x - geometryAngle1.vertices[2].x), 2) + Math.pow((geometryAngle1.vertices[0].y - geometryAngle1.vertices[2].y), 2)));
        var distancesRatio1 = distance1 / 2 / distance1;
        var x1 = (1 - distancesRatio1) * geometryAngle1.vertices[2].x + distancesRatio1 * geometryAngle1.vertices[0].x, y1 = (1 - distancesRatio1) * geometryAngle1.vertices[2].y + distancesRatio1 * geometryAngle1.vertices[0].y;
        angleDot1.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x1, y1, 0));
        var geometryAngle2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle2.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.ladoA / 2 - size - 0.125, this.ladoB / 2 - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.ladoA / 2 - size - 0.125, this.ladoB / 2 - size - 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.ladoA / 2 - 0.125, this.ladoB / 2 - size - 0.125, 0));
        var angleOutline2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle2, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry2 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot2 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry2, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        var distance2 = Math.sqrt((Math.pow((geometryAngle2.vertices[0].x - geometryAngle2.vertices[2].x), 2) + Math.pow((geometryAngle2.vertices[0].y - geometryAngle2.vertices[2].y), 2)));
        var distancesRatio2 = distance1 / 2 / distance2;
        var x2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].x + distancesRatio2 * geometryAngle2.vertices[0].x, y2 = (1 - distancesRatio2) * geometryAngle2.vertices[2].y + distancesRatio2 * geometryAngle2.vertices[0].y;
        angleDot2.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x2, y2, 0));
        var geometryAngle3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle3.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.ladoA / 2 - size - 0.125, -this.ladoB / 2 + 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.ladoA / 2 - size - 0.125, -this.ladoB / 2 + size + 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.ladoA / 2 - 0.125, -this.ladoB / 2 + size + 0.125, 0));
        var angleOutline3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle3, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry3 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot3 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry3, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        var distance3 = Math.sqrt((Math.pow((geometryAngle3.vertices[0].x - geometryAngle3.vertices[2].x), 2) + Math.pow((geometryAngle3.vertices[0].y - geometryAngle3.vertices[2].y), 2)));
        var distancesRatio3 = distance3 / 2 / distance3;
        var x3 = (1 - distancesRatio3) * geometryAngle3.vertices[2].x + distancesRatio3 * geometryAngle3.vertices[0].x, y3 = (1 - distancesRatio3) * geometryAngle3.vertices[2].y + distancesRatio3 * geometryAngle3.vertices[0].y;
        angleDot3.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x3, y3, 0));
        var geometryAngle4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        geometryAngle4.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.ladoA / 2 + size + 0.125, -this.ladoB / 2 + 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.ladoA / 2 + size + 0.125, -this.ladoB / 2 + size + 0.125, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.ladoA / 2 + 0.125, -this.ladoB / 2 + size + 0.125, 0));
        var angleOutline4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle4, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
        var angleDotGeometry4 = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
        var angleDot4 = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry4, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
        var distance4 = Math.sqrt((Math.pow((geometryAngle4.vertices[0].x - geometryAngle4.vertices[2].x), 2) + Math.pow((geometryAngle4.vertices[0].y - geometryAngle4.vertices[2].y), 2)));
        var distancesRatio4 = distance4 / 2 / distance4;
        var x4 = (1 - distancesRatio4) * geometryAngle4.vertices[2].x + distancesRatio4 * geometryAngle4.vertices[0].x, y4 = (1 - distancesRatio4) * geometryAngle4.vertices[2].y + distancesRatio4 * geometryAngle4.vertices[0].y;
        angleDot4.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x4, y4, 0));
        var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        angle.add(angleOutline1, angleDot1, angleOutline2, angleDot2, angleOutline3, angleDot3, angleOutline4, angleDot4);
        this.geoScene.scene.children[3] = angle;
        var labelDiagonal = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('d', 0.75, '#FF0000');
        labelDiagonal.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0.3, -0.3, 0));
        if (this.ladoA <= 2 || this.ladoB <= 2)
            labelDiagonal.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.ladoA / 2 - 0.35, -this.ladoB / 2 - 0.35, 0));
        this.geoScene.scene.children[4] = labelDiagonal;
        var labelLadoA = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('a', 1, colorLbl);
        labelLadoA.position.x = 0;
        labelLadoA.position.y = -this.ladoB * 0.5 - 0.7;
        var labelLadoB = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('b', 1, colorLbl);
        labelLadoB.position.x = this.ladoA * 0.5 + 0.5;
        labelLadoB.position.y = 0;
        var labelLado = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        labelLado.add(labelLadoA, labelLadoB);
        this.geoScene.scene.children[5] = labelLado;
        this.conta = Math.sqrt((this.ladoA * this.ladoA) + (this.ladoB * this.ladoB)).toFixed(2);
        this.newConta = this.conta.toString().replace(".", ",");
        this.sqrtValue1 = "\\textcolor{black}{d \\approx " + this.newConta + " \\ u.m.}";
        this.sqrtValue2 = "d \\approx " + this.newConta + " \\ u.m.";
        this.oldLadoA = this.ladoA;
        this.oldLadoB = this.ladoB;
        this.geoScene.render();
    };
    PlQuadrilaterosRetanguloComponent.prototype.checkInput = function (input) {
        if ((this.ladoA >= 1 && this.ladoA <= 10) && (this.ladoB >= 1 && this.ladoB <= 10)) {
            if (this.ladoA === this.ladoB) {
                if (input === 'A') {
                    if (this.ladoA === 10)
                        this.ladoB = 9;
                    else if (this.ladoA === 1)
                        this.ladoB = 2;
                    else {
                        if (this.oldLadoA < this.ladoA)
                            this.ladoA++;
                        else if (this.oldLadoA > this.ladoA)
                            this.ladoA--;
                    }
                }
                else if (input === 'B') {
                    if (this.ladoB === 10)
                        this.ladoA = 9;
                    else if (this.ladoB === 1)
                        this.ladoA = 2;
                    else {
                        if (this.oldLadoB < this.ladoB)
                            this.ladoB++;
                        else if (this.oldLadoB > this.ladoB)
                            this.ladoB--;
                    }
                }
            }
            this.errorInput = false;
            this.drawObjects();
        }
        else
            this.errorInput = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], PlQuadrilaterosRetanguloComponent.prototype, "geoScene", void 0);
    PlQuadrilaterosRetanguloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-quadrilateros-retangulo',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlQuadrilaterosRetanguloComponent);
    return PlQuadrilaterosRetanguloComponent;
}());

/** CHILDREN INDEX
 * 0 - Retangulo Azul (Contorno)
 * 1 - Retangulo Branco (Interno)
 * 2 - Linha Diagonal
 * 3 - Grupo que forma o angulo de 90°
 * 4 - Label da linha diagonal
 * 5 - Grupo com as labels a & b
 */ 


/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 row\">\r\n    <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o tipo de quadrilátero</h5>\r\n    <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n  </div>\r\n\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n\r\n    <!-- Botão para inserir a medida do ângulo-->\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com a medida da base (<b><i> {{ b1 }} </i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"baseMin\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('min')\" max=\"10\" min=\"1\" />\r\n          da base (<b><i> {{ b2 }} </i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"baseMax\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('max')\" max=\"10\" min=\"1\" />\r\n          e da altura (<b><i>h</i></b>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"height\"\r\n            oninput=\"this.value = Math.abs(this.value)\" (ngModelChange)=\"checkInput('height')\" max=\"10\" min=\"1\" />\r\n        </p>\r\n\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\"\r\n          style=\"text-align: center;\">\r\n          As medidas das bases e altura devem ser valores entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\"\r\n      (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" (mousemove)=\"mouseMove($event)\"></geo-scene>\r\n\r\n    <button class=\"btn btn-primary m-1 lock\" *ngFor=\"let button of buttons_vertex\"\r\n      (click)=\"lockState($event, button.value)\" [id]=\"button.id\">\r\n      {{button.title}}\r\n    </button>\r\n\r\n    <!-- Observação para o usuário -->\r\n    <div class=\"alert alert-primary alert-dismissible obs\" role=\"alert\" style=\"text-align: center; margin-top: 10px;\" id=\"obs\">\r\n      Você pode clicar nos vértices do trapézio e arrastar para escolher seu tipo.\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h3>Trapézio</h3>\r\n    <button class=\"btn btn-primary m-1\" *ngFor=\"let button of buttons_examples\"\r\n      (click)=\"loadExample($event, button.value)\">\r\n      {{button.title}}\r\n    </button>\r\n    <h4>Propriedades:</h4>\r\n    <div *ngIf=\"relation != 3\">\r\n      <p>\r\n        O trapézio é um quadrilátero (quatro lados) que possui um par de lados paralelos:\r\n        Os lados paralelos dos trapézios são chamados de bases. A base que possui maior medida é chamada de base maior e a\r\n        que possui menor medida é chamada de base menor.\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"relation == 3\">\r\n      <div *ngIf=\"err == 0\">\r\n        É um quadrado, pois todos os lados possuem a mesma medida e os ângulos internos são retos.\r\n      </div>\r\n      <div *ngIf=\"err == 1\">\r\n        É um retângulo, pois possui os lados congruentes dois a dois e os ângulos internos são retos. \r\n      </div>\r\n      <div *ngIf=\"err == 2\">\r\n        É um paralelogramo, pois possui os lados paralelos dois a dois. \r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"relation == 0\">\r\n      <ul>\r\n        <li><b>Trapézio Isósceles</b> são aqueles que possuem lados não paralelos congruentes (com a mesma medida).\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Calculos Trapezio Isosceles -->\r\n\r\n      <!-- Inicio Calculo Area -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n                aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n                Área: <ng-katex class=\"explicacao\" equation=\"A \\approx {{ (( baseMax + baseMin ) * height )/2 | number:'':'pt' }} \\ u.a.\">\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseArea\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--Area - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx \\frac{ ( {{baseMax | number:'':'pt' }} + {{baseMin | number:'':'pt'}} ) \\cdot {{height | number:'':'pt'}} }{2} } \">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Substituímos a medida da base maior <ng-katex equation=\"B = {{baseMax | number:'':'pt'}} \"></ng-katex>, da base\r\n                      menor\r\n                      <ng-katex equation=\"b = {{baseMin | number:'':'pt'}}\"></ng-katex> e da altura <ng-katex equation=\"h = {{height | number:'':'pt'}} \">\r\n                      </ng-katex> na fórmula\r\n                      <ng-katex equation=\"A = \\frac{ (B + b) \\cdot h }{2}\"></ng-katex>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Area - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx \\frac{ ( {{baseMax + baseMin | number:'':'pt'}} ) \\cdot {{height | number:'':'pt'}} }{2} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos as operações entre parênteses.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Area - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx {{ (( baseMax + baseMin ) * height )/2 | number:'':'pt' }} \\ u.a. }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resultado final, após resolvermos a multiplicação e divisão.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo Area -->\r\n\r\n        <!-- Inicio Calculo NrDiagonais -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseNrDiagonais\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n                  Número de Diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{ (4 * (4-3)) / 2 }} \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseNrDiagonais\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingNrDiagonais\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--NrDiagonais - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot (4 - 3)}{2} } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos número de lados <ng-katex equation=\"N = 4\"></ng-katex> do polígono na fórmula\r\n                        <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \"></ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--NrDiagonais - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot 1}{2} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos as operações entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--NrDiagonais - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{ (4 * (4-3)) / 2 }} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final, após resolvermos a multipliação e divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo NrDiagonais -->\r\n\r\n        <!-- Inicio Calculo SomaAngulosInt -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                  Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 360\\degree\">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSomaAngulosInt\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--SomaAngulosInt - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = (4 - 2) \\cdot 180\\degree } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos o número de lados <ng-katex equation=\"N = 4\"></ng-katex> na fórmula\r\n                        <ng-katex equation=\"S = (N - 2) \\cdot 180\\degree \"></ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--SomaAngulosInt - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 2 \\cdot 180\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos as operações entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--SomaAngulosInt - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 360\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"relation == 1\">\r\n      <ul>\r\n        <li><b>Trapézio Escaleno</b> são aqueles que não possuem os lados não paralelos congruentes (com a mesma\r\n          medida), ou\r\n          seja, a medida dos lados não paralelos são diferentes.</li>\r\n      </ul>\r\n\r\n      <!-- Calculos Trapezio Escaleno -->\r\n\r\n      <!-- Inicio Calculo Area -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n                aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n                Área: <ng-katex class=\"explicacao\" equation=\"A \\approx {{ (( baseMax + baseMin ) * height )/2 | number:'':'pt' }} \\ u.a.\">\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseArea\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--Area - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx \\frac{ ( {{baseMax | number:'':'pt'}} + {{baseMin | number:'':'pt'}} ) \\cdot {{height | number:'':'pt'}} }{2} } \">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Substituímos a medida da base maior <ng-katex equation=\"B = {{baseMax | number:'':'pt'}} \"></ng-katex>, da base\r\n                      menor\r\n                      <ng-katex equation=\"b = {{baseMin | number:'':'pt'}}\"></ng-katex> e da altura <ng-katex equation=\"h = {{height | number:'':'pt'}} \">\r\n                      </ng-katex> na fórmula\r\n                      <ng-katex equation=\"A = \\frac{ (B + b) \\cdot h }{2}\"></ng-katex>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Area - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx \\frac{ ( {{baseMax + baseMin | number:'':'pt'}} ) \\cdot {{height | number:'':'pt'}} }{2} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos as operações entre parênteses.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Area - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx {{ (( baseMax + baseMin ) * height )/2 | number:'':'pt' }} \\ u.a. }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resultado final, após resolvermos a multiplicação e divisão.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo Area -->\r\n\r\n        <!-- Inicio Calculo NrDiagonais -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseNrDiagonais\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n                  Número de Diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{ (4 * (4-3)) / 2 }} \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseNrDiagonais\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingNrDiagonais\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--NrDiagonais - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot (4 - 3)}{2} } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos número de lados <ng-katex equation=\"N = 4\"></ng-katex> do polígono na fórmula\r\n                        <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \"></ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--NrDiagonais - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot 1}{2} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos as operações entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--NrDiagonais - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{ (4 * (4-3)) / 2 }} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final, após resolvermos a multipliação e divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo NrDiagonais -->\r\n\r\n        <!-- Inicio Calculo SomaAngulosInt -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                  Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 360\\degree\">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSomaAngulosInt\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--SomaAngulosInt - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = (4 - 2) \\cdot 180\\degree } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos o número de lados <ng-katex equation=\"N = 4\"></ng-katex> na fórmula\r\n                        <ng-katex equation=\"S = (N - 2) \\cdot 180\\degree \"></ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--SomaAngulosInt - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 2 \\cdot 180\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos as operações entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--SomaAngulosInt - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 360\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"relation == 2\">\r\n      <ul>\r\n        <li><b>Trapézio Retângulo</b> são aqueles que um dos lados não paralelos forma um ângulo de 90º com a base.</li>\r\n      </ul>\r\n\r\n      <!-- Calculos Trapezio Retangulo -->\r\n\r\n      <!-- Inicio Calculo Area -->\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n                aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n                Área: <ng-katex class=\"explicacao\" equation=\"A \\approx {{ (( baseMax + baseMin ) * height )/2 | number:'':'pt' }} \\ u.a.\">\r\n                </ng-katex>\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseArea\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--Area - Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx \\frac{ ( {{baseMax | number:'':'pt'}} + {{baseMin | number:'':'pt'}} ) \\cdot {{height | number:'':'pt'}} }{2} } \">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Substituímos a medida da base maior <ng-katex equation=\"B = {{baseMax | number:'':'pt'}} \"></ng-katex>, da base\r\n                      menor\r\n                      <ng-katex equation=\"b = {{baseMin | number:'':'pt'}}\"></ng-katex> e da altura <ng-katex equation=\"h = {{height | number:'':'pt'}} \">\r\n                      </ng-katex> na fórmula\r\n                      <ng-katex equation=\"A = \\frac{ (B + b) \\cdot h }{2}\"></ng-katex>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Area - Passo 2-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx \\frac{ ( {{baseMax + baseMin | number:'':'pt'}} ) \\cdot {{height | number:'':'pt'}} }{2} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resolvemos as operações entre parênteses.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n                <!--Area - Passo 3-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\"\r\n                            equation=\"\\textcolor{black}{A \\approx {{ (( baseMax + baseMin ) * height )/2 | number:'':'pt' }} \\ u.a. }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Resultado final, após resolvermos a multiplicação e divisão.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo Area -->\r\n\r\n        <!-- Inicio Calculo NrDiagonais -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\" data-target=\"#collapseNrDiagonais\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n                  Número de Diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{ (4 * (4-3)) / 2 }} \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseNrDiagonais\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingNrDiagonais\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--NrDiagonais - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot (4 - 3)}{2} } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos número de lados <ng-katex equation=\"N = 4\"></ng-katex> do polígono na fórmula\r\n                        <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \"></ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--NrDiagonais - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot 1}{2} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos as operações entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--NrDiagonais - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{ (4 * (4-3)) / 2 }} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final, após resolvermos a multipliação e divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo NrDiagonais -->\r\n\r\n        <!-- Inicio Calculo SomaAngulosInt -->\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                  Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 360\\degree\">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSomaAngulosInt\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--SomaAngulosInt - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = (4 - 2) \\cdot 180\\degree } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos o número de lados <ng-katex equation=\"N = 4\"></ng-katex> na fórmula\r\n                        <ng-katex equation=\"S = (N - 2) \\cdot 180\\degree \"></ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--SomaAngulosInt - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 2 \\cdot 180\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos as operações entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--SomaAngulosInt - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 360\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlQuadrilaterosTrapezioComponent; });
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
    Relation[Relation["ISO"] = 0] = "ISO";
    Relation[Relation["ESC"] = 1] = "ESC";
    Relation[Relation["RET"] = 2] = "RET";
    Relation[Relation["ERR"] = 3] = "ERR";
})(Relation || (Relation = {}));
var ERR;
(function (ERR) {
    ERR[ERR["QUAD"] = 0] = "QUAD";
    ERR[ERR["RET"] = 1] = "RET";
    ERR[ERR["PAR"] = 2] = "PAR";
})(ERR || (ERR = {}));
var PlQuadrilaterosTrapezioComponent = /** @class */ (function () {
    function PlQuadrilaterosTrapezioComponent() {
        this.relation = Relation.ESC;
        this.err = ERR.RET;
        this.baseMax = 10;
        this.baseMin = 5;
        this.height = 5;
        this.errorInput = false;
        this.lockIsosceles = false;
        this.lockRetangulo = false;
        this.side = "left";
        this.b1 = "b";
        this.b2 = "B";
        this.dragging = false; // Variável para controle do drag
        this.dragged = ""; // Variavel para controle de qual objeto foi arrastado
        this.currentIndex = []; // Geometria da cena a qual irá se mover
        // Raycaster da página, utilizado para o "clicar e arrastar"
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        this.buttons = [
            { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
            { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
            { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
            { title: "Losango", route: "pl_quadrilateros_losango" },
            { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
        ];
        //Botoes do menu da direita
        this.buttons_examples = [
            { title: 'Isósceles', value: 0 },
            { title: 'Escaleno ', value: 1 },
            { title: 'Retângulo', value: 2 }
        ];
        this.buttons_vertex = [
            { title: 'Modo Livre', value: 0, id: 'free' },
            { title: 'Travar Isósceles', value: 1, id: 'iso' },
            { title: 'Travar Retângulo', value: 2, id: 'ret' }
        ];
    }
    PlQuadrilaterosTrapezioComponent.prototype.loadExample = function (event, relation) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        this.relation = relation;
        this.baseMax = 10;
        this.baseMin = 5;
        this.height = 5;
        // Checagem do tipo da relação
        switch (this.relation) {
            case Relation.ISO:
                this.lockRetangulo = false;
                this.lockIsosceles = true;
                this.switchButtons('iso');
                this.side = "left";
                break;
            case Relation.ESC:
                this.baseMax = 9;
                this.baseMin = 4;
                this.lockIsosceles = false;
                this.lockRetangulo = false;
                this.switchButtons('free');
                break;
            case Relation.RET:
                this.lockRetangulo = true;
                this.lockIsosceles = false;
                this.side = "left";
                this.switchButtons('ret');
                break;
        }
        this.renderDefault();
    };
    PlQuadrilaterosTrapezioComponent.prototype.lockState = function (event, value) {
        event.preventDefault(); // Previne o comportamento padrão do evento
        // Checagem do tipo da relação
        switch (value) {
            case 0:
                this.lockIsosceles = false;
                this.lockRetangulo = false;
                this.switchButtons('free');
                break;
            case 1:
                this.lockIsosceles = true;
                this.lockRetangulo = false;
                this.relation = Relation.ISO;
                this.side = "left";
                this.switchButtons('iso');
                break;
            case 2:
                this.lockIsosceles = false;
                this.lockRetangulo = true;
                this.relation = Relation.RET;
                this.side = "left";
                this.switchButtons('ret');
                break;
        }
        this.renderObjects();
    };
    PlQuadrilaterosTrapezioComponent.prototype.switchButtons = function (clicked) {
        if (clicked === 'free') {
            document.getElementById('free').style.color = '#4683B4';
            document.getElementById('free').style.backgroundColor = '#FFF';
            document.getElementById('iso').style.color = '#FFF';
            document.getElementById('iso').style.backgroundColor = '#4683B4';
            document.getElementById('ret').style.color = '#FFF';
            document.getElementById('ret').style.backgroundColor = '#4683B4';
        }
        else if (clicked === 'iso') {
            document.getElementById('iso').style.color = '#4683B4';
            document.getElementById('iso').style.backgroundColor = '#FFF';
            document.getElementById('free').style.color = '#FFF';
            document.getElementById('free').style.backgroundColor = '#4683B4';
            document.getElementById('ret').style.color = '#FFF';
            document.getElementById('ret').style.backgroundColor = '#4683B4';
        }
        else if (clicked === 'ret') {
            document.getElementById('ret').style.color = '#4683B4';
            document.getElementById('ret').style.backgroundColor = '#FFF';
            document.getElementById('iso').style.color = '#FFF';
            document.getElementById('iso').style.backgroundColor = '#4683B4';
            document.getElementById('free').style.color = '#FFF';
            document.getElementById('free').style.backgroundColor = '#4683B4';
        }
    };
    PlQuadrilaterosTrapezioComponent.prototype.ngOnInit = function () {
        this.geoScene.fieldOfView = 7;
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    PlQuadrilaterosTrapezioComponent.prototype.ngAfterViewInit = function () {
        this.renderDefault();
        document.getElementById('free').style.color = '#4683B4';
        document.getElementById('free').style.backgroundColor = '#FFF';
    };
    PlQuadrilaterosTrapezioComponent.prototype.getIndex = function () {
        var _this = this;
        this.insersects = this.raycaster.intersectObjects(this.geoScene.scene.children);
        if (this.insersects.length === 0) {
            this.currentIndex = null;
            return;
        }
        var arr = [];
        this.insersects.forEach(function (el) {
            if (el.object.name == "vertex-topRight" || el.object.name == "vertex-bottomLeft"
                || el.object.name == "vertex-topLeft" || el.object.name == "vertex-bottomRight") {
                arr.push(el);
                _this.currentIndex = arr;
                return;
            }
        });
    };
    PlQuadrilaterosTrapezioComponent.prototype.setRaycaster = function (event) {
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
   * Captura o evento de mouse move na cena
   * @param event evento do mouse
   */
    PlQuadrilaterosTrapezioComponent.prototype.mouseMove = function (event) {
        //Verifica se o usuário está segurando o clique e está clicando em uma geometria válida
        if (this.dragging && this.currentIndex !== null) {
            this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
            // this.currentIndex[0].object.position.copy(this.mousePos);
            // Move os objetos referentes a cada circunferencia em relação a posição do mouse
            if (this.currentIndex[0].object.name == "vertex-topLeft")
                this.dragged = "topLeft";
            else if (this.currentIndex[0].object.name == "vertex-topRight")
                this.dragged = "topRight";
            else if (this.currentIndex[0].object.name == "vertex-bottomRight")
                this.dragged = "bottomRight";
            else if (this.currentIndex[0].object.name == "vertex-bottomLeft")
                this.dragged = "bottomLeft";
            this.drawObjectsMouseInput();
        }
    };
    PlQuadrilaterosTrapezioComponent.prototype.mouseDown = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.setRaycaster(event); // cria um novo raycaster a partir da posição do evento do mouse
        this.getIndex(); // captura o objeto que foi clicado
        this.dragging = true; // muda a variável de controle do drag para true
    };
    /**
     * Captura o evento de mouse up na cena
     * @param event evento do mouse
     */
    PlQuadrilaterosTrapezioComponent.prototype.mouseUp = function (event) {
        event.preventDefault(); // previne o comportamento padrão do evento
        this.dragging = false; // muda a variável de controle do drag para false
        this.currentIndex = null; // anula o elemento clicado
        this.mousePos = null; // anula a posição do mouse
    };
    PlQuadrilaterosTrapezioComponent.prototype.drawObjectsMouseInput = function () {
        var evenR = Math.sqrt(Math.pow((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x), 2)) < 1;
        if (this.dragged === 'topLeft') {
            if (this.lockIsosceles) {
                var mouseX = this.mousePos.x <= -0.5 && this.mousePos.x >= -4.5;
                if (mouseX)
                    this.geoScene.scene.children[1].position.x = this.mousePos.x, this.geoScene.scene.children[2].position.x = -this.mousePos.x;
            }
            else if (this.lockRetangulo) {
                var mouseX = this.mousePos.x <= 3 && this.mousePos.x >= -5;
                if (mouseX)
                    this.geoScene.scene.children[1].position.x = this.mousePos.x, this.geoScene.scene.children[4].position.x = this.mousePos.x;
            }
            else {
                var mouseX = this.mousePos.x <= 4 && this.mousePos.x >= -5;
                if (mouseX)
                    this.geoScene.scene.children[1].position.x = this.mousePos.x;
            }
            var mouseY = this.mousePos.y >= 0.5 && this.mousePos.y <= 5;
            if (mouseY)
                this.geoScene.scene.children[1].position.y = this.mousePos.y, this.geoScene.scene.children[2].position.y = this.mousePos.y;
        }
        else if (this.dragged === 'topRight') {
            if (this.lockIsosceles) {
                var mouseX = this.mousePos.x >= 0.5 && this.mousePos.x <= 4.5;
                if (mouseX)
                    this.geoScene.scene.children[1].position.x = -this.mousePos.x, this.geoScene.scene.children[2].position.x = this.mousePos.x;
            }
            else if (this.lockRetangulo) {
                var mouseX = this.mousePos.x >= -4 && this.mousePos.x <= 4.5;
                if (mouseX)
                    this.geoScene.scene.children[2].position.x = this.mousePos.x;
            }
            else {
                var mouseX = this.mousePos.x >= -4 && this.mousePos.x <= 5;
                if (mouseX)
                    this.geoScene.scene.children[2].position.x = this.mousePos.x;
            }
            var mouseY = this.mousePos.y >= 0.5 && this.mousePos.y <= 5;
            if (mouseY)
                this.geoScene.scene.children[1].position.y = this.mousePos.y, this.geoScene.scene.children[2].position.y = this.mousePos.y;
        }
        else if (this.dragged === 'bottomLeft') {
            if (this.lockIsosceles) {
                var mouseX = this.mousePos.x <= -1 && this.mousePos.x >= -5;
                if (mouseX)
                    this.geoScene.scene.children[3].position.x = -this.mousePos.x, this.geoScene.scene.children[4].position.x = this.mousePos.x;
            }
            else if (this.lockRetangulo) {
                var mouseX = this.mousePos.x <= 3 && this.mousePos.x >= -5;
                if (mouseX)
                    this.geoScene.scene.children[1].position.x = this.mousePos.x, this.geoScene.scene.children[4].position.x = this.mousePos.x;
            }
            else {
                var mouseX = this.mousePos.x <= 4 && this.mousePos.x >= -5;
                if (mouseX)
                    this.geoScene.scene.children[4].position.x = this.mousePos.x;
            }
            var mouseY = this.mousePos.y <= -0.5 && this.mousePos.y >= -5;
            if (mouseY)
                this.geoScene.scene.children[3].position.y = this.mousePos.y, this.geoScene.scene.children[4].position.y = this.mousePos.y;
        }
        else if (this.dragged === 'bottomRight') {
            if (this.lockIsosceles) {
                var mouseX = this.mousePos.x >= 1 && this.mousePos.x <= 5;
                if (mouseX)
                    this.geoScene.scene.children[3].position.x = this.mousePos.x, this.geoScene.scene.children[4].position.x = -this.mousePos.x;
            }
            else if (this.lockRetangulo) {
                var mouseX = this.mousePos.x >= -3 && this.mousePos.x <= 5;
                if (mouseX)
                    this.geoScene.scene.children[3].position.x = this.mousePos.x;
            }
            else {
                var mouseX = this.mousePos.x >= -4 && this.mousePos.x <= 5;
                if (mouseX)
                    this.geoScene.scene.children[3].position.x = this.mousePos.x;
            }
            var mouseY = this.mousePos.y <= -0.5 && this.mousePos.y >= -5;
            if (mouseY)
                this.geoScene.scene.children[3].position.y = this.mousePos.y, this.geoScene.scene.children[4].position.y = this.mousePos.y;
        }
        if (this.lockIsosceles) {
            if (Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x), 2))) < 1) {
                if (this.dragged === 'topLeft' || this.dragged === 'topRight') {
                    this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[1].position.x - 1;
                    this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[2].position.x + 1;
                }
                else if (this.dragged === 'bottomLeft' || this.dragged === 'bottomRight') {
                    this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[4].position.x + 1;
                    this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[3].position.x - 1;
                }
            }
            this.baseMin = this.geoScene.scene.children[2].position.x * 2;
            this.baseMax = this.geoScene.scene.children[3].position.x * 2;
            this.side = "left";
            if (this.baseMax > 10) {
                this.baseMax = 10;
                this.geoScene.scene.children[4].position.x = -5, this.geoScene.scene.children[3].position.x = 5;
            }
            if (this.baseMin < 1) {
                this.baseMin = 1;
                this.geoScene.scene.children[1].position.x = -0.5, this.geoScene.scene.children[2].position.x = 0.5;
            }
        }
        else if (this.lockRetangulo) {
            if (Math.sqrt((Math.pow((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x), 2))) < 1) {
                if (this.dragged === 'topRight')
                    this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[2].position.x + 1;
                else if (this.dragged === 'bottomRight')
                    this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[3].position.x - 1;
            }
            if (Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2))) < 1) {
                if (this.dragged === 'topRight' || this.dragged === 'bottomRight') {
                    this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[2].position.x - 1;
                    this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[2].position.x - 1;
                }
                else if (this.dragged === 'topLeft' || this.dragged === 'bottomLeft') {
                    this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[1].position.x + 1;
                    if (evenR)
                        this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[4].position.x + 2;
                }
            }
            if (this.geoScene.scene.children[2].position.x > 4)
                this.geoScene.scene.children[2].position.x = 4;
            if (this.geoScene.scene.children[3].position.x > 5)
                this.geoScene.scene.children[3].position.x = 5;
            if (this.geoScene.scene.children[1].position.x < -5) {
                this.geoScene.scene.children[1].position.x = -5;
                this.geoScene.scene.children[4].position.x = -5;
            }
            this.baseMin = Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2)));
            this.baseMax = Math.sqrt((Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2)));
            this.side = "left";
        }
        else {
            if (Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2))) < 1) {
                if (this.dragged === 'topRight')
                    this.geoScene.scene.children[1].position.x = this.geoScene.scene.children[2].position.x - 1;
                else if (this.dragged === 'topLeft')
                    this.geoScene.scene.children[2].position.x = this.geoScene.scene.children[1].position.x + 1;
            }
            else if (Math.sqrt((Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2))) < 1) {
                if (this.dragged === 'bottomRight')
                    this.geoScene.scene.children[4].position.x = this.geoScene.scene.children[3].position.x - 1;
                else if (this.dragged === 'bottomLeft')
                    this.geoScene.scene.children[3].position.x = this.geoScene.scene.children[4].position.x + 1;
            }
            this.baseMin = Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2)));
            this.baseMax = Math.sqrt((Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2)));
            this.trapezoidType();
        }
        this.drawTrapezoid();
        this.drawHeightDashedLine(this.geoScene.scene.children[1].position.y, this.geoScene.scene.children[4].position.y, true);
        this.renderOrder();
        this.geoScene.render();
    };
    PlQuadrilaterosTrapezioComponent.prototype.renderObjects = function () {
        var x1 = this.geoScene.scene.children[1].position.x, x2 = this.geoScene.scene.children[2].position.x, x3 = this.geoScene.scene.children[3].position.x, x4 = this.geoScene.scene.children[4].position.x;
        if (Math.sqrt(Math.pow((x1 - x2), 2)) > Math.sqrt(Math.pow((x3 - x4), 2)) && (this.lockIsosceles || this.lockRetangulo)) {
            var b1 = this.baseMin, b2 = this.baseMax;
            this.baseMin = b2, this.baseMax = b1;
        }
        this.geoScene.scene.children[1].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.baseMin / 2, this.height / 2, 0));
        this.geoScene.scene.children[2].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.baseMin / 2, this.height / 2, 0));
        this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.baseMax / 2, -this.height / 2, 0));
        this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.baseMax / 2, -this.height / 2, 0));
        if (this.lockRetangulo) {
            var diff = Math.abs(this.geoScene.scene.children[1].position.x) - Math.abs(this.geoScene.scene.children[4].position.x);
            this.geoScene.scene.children[1].position.x += diff;
            this.geoScene.scene.children[2].position.x += diff;
        }
        this.trapezoidType();
        this.drawTrapezoid();
        this.drawHeightDashedLine(this.height / 2, -this.height / 2, false);
        this.renderOrder();
        this.geoScene.render();
    };
    PlQuadrilaterosTrapezioComponent.prototype.renderDefault = function () {
        var squareVerticeGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["PlaneGeometry"](0.25, 0.25, 25, 25);
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareVerticeGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x444444 }));
        this.geoScene.scene.children[1].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.baseMin / 2, this.height / 2, 0));
        this.geoScene.scene.children[1].name = 'vertex-topLeft';
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareVerticeGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x444444 }));
        this.geoScene.scene.children[2].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.baseMin / 2, this.height / 2, 0));
        this.geoScene.scene.children[2].name = 'vertex-topRight';
        this.geoScene.scene.children[3] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareVerticeGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x444444 }));
        this.geoScene.scene.children[3].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.baseMax / 2, -this.height / 2, 0));
        this.geoScene.scene.children[3].name = 'vertex-bottomRight';
        this.geoScene.scene.children[4] = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](squareVerticeGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x444444 }));
        this.geoScene.scene.children[4].position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](-this.baseMax / 2, -this.height / 2, 0));
        this.geoScene.scene.children[4].name = 'vertex-bottomLeft';
        if (this.relation === Relation.RET) {
            this.geoScene.scene.children[1].position.x = -this.baseMin;
            this.geoScene.scene.children[2].position.x = 0;
        }
        else if (this.relation === Relation.ESC) {
            this.geoScene.scene.children[1].position.x -= 0.5;
            this.geoScene.scene.children[2].position.x -= 0.5;
            this.geoScene.scene.children[3].position.x += 0.5;
            this.geoScene.scene.children[4].position.x += 0.5;
        }
        this.drawTrapezoid();
        this.drawHeightDashedLine(this.height / 2, -this.height / 2, false);
        this.renderOrder();
        this.geoScene.render();
    };
    PlQuadrilaterosTrapezioComponent.prototype.drawTrapezoid = function () {
        var x1 = this.geoScene.scene.children[1].position.x, x2 = this.geoScene.scene.children[2].position.x, x3 = this.geoScene.scene.children[3].position.x, x4 = this.geoScene.scene.children[4].position.x;
        var trapezoid = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"](), trapezoidLineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), material = new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x4683B4 });
        if (this.relation === Relation.ERR) {
            material = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x444444, dashSize: 0.2, gapSize: 0.2 });
            trapezoidLineGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[1].position.x, this.geoScene.scene.children[1].position.y), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[2].position.x, this.geoScene.scene.children[2].position.y), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[3].position.x, this.geoScene.scene.children[3].position.y), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[4].position.x, this.geoScene.scene.children[4].position.y), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[1].position.x, this.geoScene.scene.children[1].position.y));
            var trapezoidLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](trapezoidLineGeometry, material);
            trapezoidLine.computeLineDistances(), trapezoid.add(trapezoidLine);
        }
        else {
            for (var i = -0.045; i <= 0.045; i += 0.015) {
                var modY = 1, modX = 1, xMod = 1, cond = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2))
                    < Math.sqrt(Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2));
                if (Math.sqrt(Math.pow((x1 - x2), 2)) > Math.sqrt(Math.pow((x3 - x4), 2)))
                    modY = -1;
                if (x1 < x4 && x2 < x3) {
                    if (cond)
                        modX = -1;
                    else
                        xMod = -1;
                }
                else if (x1 > x4 && x2 > x3) {
                    if (!cond)
                        modX = -1;
                    else
                        xMod = -1;
                }
                trapezoidLineGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[1].position.x + i * modX, this.geoScene.scene.children[1].position.y - i * modY), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[2].position.x - i * xMod, this.geoScene.scene.children[2].position.y - i * modY), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[3].position.x - i * xMod, this.geoScene.scene.children[3].position.y - i * modY), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[4].position.x + i * modX, this.geoScene.scene.children[4].position.y - i * modY), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[1].position.x + i * modX, this.geoScene.scene.children[1].position.y - i * modY));
            }
            var trapezoidLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](trapezoidLineGeometry, material);
            trapezoid.add(trapezoidLine);
        }
        this.geoScene.scene.children[0] = trapezoid;
        var distance = Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2)));
        var distancesRatio = distance / 2 / distance;
        var b = (1 - distancesRatio) * this.geoScene.scene.children[2].position.x + distancesRatio * this.geoScene.scene.children[1].position.x;
        distance = Math.sqrt((Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2)));
        distancesRatio = distance / 2 / distance;
        var B = (1 - distancesRatio) * this.geoScene.scene.children[4].position.x + distancesRatio * this.geoScene.scene.children[3].position.x;
        var color = '#4683B4';
        if (this.relation === Relation.ERR)
            color = '#444444';
        var labelb = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('b', 0.75, color);
        labelb.position.x = b;
        labelb.position.y = this.geoScene.scene.children[1].position.y + 0.5;
        var labelB = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('B', 0.75, color);
        labelB.position.x = B;
        labelB.position.y = this.geoScene.scene.children[4].position.y - 0.5;
        var distTop = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2)), distBottom = Math.sqrt(Math.pow((this.geoScene.scene.children[3].position.x - this.geoScene.scene.children[4].position.x), 2));
        if (distTop > distBottom) {
            labelb.position.x = B;
            labelb.position.y = this.geoScene.scene.children[4].position.y - 0.5;
            labelB.position.x = b;
            labelB.position.y = this.geoScene.scene.children[1].position.y + 0.5;
            this.b1 = "B";
            this.b2 = "b";
        }
        else {
            this.b1 = "b";
            this.b2 = "B";
        }
        this.geoScene.scene.children[6] = labelb;
        this.geoScene.scene.children[7] = labelB;
    };
    PlQuadrilaterosTrapezioComponent.prototype.drawHeightDashedLine = function (b, B, calc) {
        var angleOrDashed, index, i, x1 = this.geoScene.scene.children[1].position.x, x2 = this.geoScene.scene.children[2].position.x, x3 = this.geoScene.scene.children[3].position.x, x4 = this.geoScene.scene.children[4].position.x;
        if (x1 < x4)
            index = 1, i = 4;
        else
            index = 4, i = 1;
        if (this.relation === Relation.RET) {
            var size = 0.5;
            if (this.height === 1)
                size = 0.25;
            var geometryAngle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            if (this.side === "left") {
                geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[4].position.x + size + 0.05, this.geoScene.scene.children[4].position.y + 0.05, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[4].position.x + size + 0.05, this.geoScene.scene.children[4].position.y + size + 0.05, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[4].position.x + 0.05, this.geoScene.scene.children[4].position.y + size + 0.05, 0));
            }
            else if (this.side === "right") {
                geometryAngle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[3].position.x - size - 0.05, this.geoScene.scene.children[3].position.y + 0.05, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[3].position.x - size - 0.05, this.geoScene.scene.children[3].position.y + size + 0.05, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[3].position.x - 0.05, this.geoScene.scene.children[3].position.y + size + 0.05, 0));
            }
            var angleOutline = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryAngle, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000, linewidth: 2 }));
            var angleDotGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["CircleGeometry"](size / 5, 30);
            var angleDot = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](angleDotGeometry, new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0x000000 }));
            var distance_1 = Math.sqrt((Math.pow((geometryAngle.vertices[0].x - geometryAngle.vertices[2].x), 2) + Math.pow((geometryAngle.vertices[0].y - geometryAngle.vertices[2].y), 2)));
            var distancesRatio_1 = distance_1 / 2 / distance_1;
            var x = (1 - distancesRatio_1) * geometryAngle.vertices[2].x + distancesRatio_1 * geometryAngle.vertices[0].x, y_1 = (1 - distancesRatio_1) * geometryAngle.vertices[2].y + distancesRatio_1 * geometryAngle.vertices[0].y;
            angleDot.position.copy(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x, y_1, 0));
            var angle = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
            angle.add(angleOutline, angleDot);
            angleOrDashed = angle;
        }
        else {
            var heightDashedLineGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            heightDashedLineGeometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[i].position.x, b - 0.045, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[i].position.x, B + 0.045, 0));
            var dashed = void 0;
            dashed = new __WEBPACK_IMPORTED_MODULE_2_three__["LineDashedMaterial"]({ color: 0x444444, linewidth: 0.2, dashSize: 0.2, gapSize: 0.2 });
            angleOrDashed = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](heightDashedLineGeometry, dashed);
            angleOrDashed.computeLineDistances();
        }
        var dark = false;
        if ((x1 > x3 || x2 < x4) && this.relation === Relation.ESC) {
            var geometryLine = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
            geometryLine.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[index].position.x - 0.5, b + 0.1, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[index].position.x - 0.3, b + 0.1, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[index].position.x - 0.4, b + 0.1, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[index].position.x - 0.4, B - 0.1, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[index].position.x - 0.5, B - 0.1, 0), new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this.geoScene.scene.children[index].position.x - 0.3, B - 0.1, 0));
            angleOrDashed = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](geometryLine, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x000000 }));
            dark = true;
        }
        this.geoScene.scene.children[5] = angleOrDashed;
        var distance = Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y), 2)));
        var distancesRatio = distance / 2 / distance;
        var y = (1 - distancesRatio) * this.geoScene.scene.children[4].position.y + distancesRatio * this.geoScene.scene.children[1].position.y;
        var labelH = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('h', 0.5, '#666');
        labelH.position.x = this.geoScene.scene.children[i].position.x + 0.25;
        if (this.relation === Relation.RET) {
            if (this.side === "left")
                labelH.position.x = this.geoScene.scene.children[4].position.x - 0.375;
            else if (this.side === "right")
                labelH.position.x = this.geoScene.scene.children[3].position.x + 0.375;
        }
        labelH.position.y = y;
        if (dark) {
            labelH = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('h', 0.5, '#000');
            labelH.position.x = this.geoScene.scene.children[index].position.x - 0.7;
            labelH.position.y = y;
        }
        this.geoScene.scene.children[8] = labelH;
        if (calc && this.err !== ERR.QUAD)
            this.height = Math.abs(B - b);
        if (this.relation === Relation.ERR) {
            this.geoScene.scene.children[5].visible = false;
            this.geoScene.scene.children[8].visible = false;
        }
        else
            this.err = 3;
    };
    PlQuadrilaterosTrapezioComponent.prototype.trapezoidType = function () {
        var distXR = Math.sqrt(Math.pow((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x), 2)), distXL = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x), 2)), base = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[2].position.x), 2)), height = Math.sqrt(Math.pow((this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y), 2));
        if (Math.abs(this.baseMax - this.baseMin) > 0.025) {
            var dist23 = Math.sqrt((Math.pow((this.geoScene.scene.children[2].position.x - this.geoScene.scene.children[3].position.x), 2) + Math.pow((this.geoScene.scene.children[2].position.y - this.geoScene.scene.children[3].position.y), 2)));
            var dist14 = Math.sqrt((Math.pow((this.geoScene.scene.children[1].position.x - this.geoScene.scene.children[4].position.x), 2) + Math.pow((this.geoScene.scene.children[1].position.y - this.geoScene.scene.children[4].position.y), 2)));
            if (distXL < 0.025)
                this.side = "left", this.relation = Relation.RET;
            else if (distXR < 0.025)
                this.side = "right", this.relation = Relation.RET;
            else if (Math.abs(dist14 - dist23) < 0.005)
                this.relation = Relation.ISO;
            else
                this.relation = Relation.ESC;
        }
        else {
            if (distXR <= 0.025) {
                if (Math.abs(base - height) > 0.025)
                    this.err = ERR.RET;
                else
                    this.err = ERR.QUAD, this.baseMax = this.height;
            }
            else if (distXR > 0.05 && distXL > 0.025)
                this.err = ERR.PAR;
            this.baseMin = this.baseMax;
            this.relation = Relation.ERR;
        }
    };
    PlQuadrilaterosTrapezioComponent.prototype.renderOrder = function () {
        this.geoScene.scene.children[1].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[2].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[3].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[4].renderOrder = this.geoScene.scene.children.length - 1;
        this.geoScene.scene.children[5].renderOrder = this.geoScene.scene.children.length - 1;
    };
    PlQuadrilaterosTrapezioComponent.prototype.checkInput = function (input) {
        this.baseMax = Math.round(this.baseMax), this.baseMin = Math.round(this.baseMin);
        if ((this.baseMax >= 1 && this.baseMax <= 10) && (this.baseMin >= 1 && this.baseMin <= 10) && (this.height >= 1 && this.height <= 10)) {
            var x1 = this.geoScene.scene.children[1].position.x, x2 = this.geoScene.scene.children[2].position.x, x3 = this.geoScene.scene.children[3].position.x, x4 = this.geoScene.scene.children[4].position.x, toleranceL = Math.sqrt(Math.pow((x1 - x4), 2)) < 0.05, toleranceR = Math.sqrt(Math.pow((x2 - x3), 2)) < 0.05;
            if (toleranceL && toleranceR) {
                if (input === 'min') {
                    if (this.baseMin < 9)
                        this.baseMax += 1;
                    else
                        this.baseMin = 9, this.baseMax = 10;
                }
                else if (input === 'max') {
                    if (this.baseMax > 2)
                        this.baseMin -= 1;
                    else
                        this.baseMin = 1, this.baseMax = 2;
                }
            }
            this.errorInput = false;
            this.renderObjects();
        }
        else
            this.errorInput = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], PlQuadrilaterosTrapezioComponent.prototype, "geoScene", void 0);
    PlQuadrilaterosTrapezioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-quadrilateros-trapezio',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlQuadrilaterosTrapezioComponent);
    return PlQuadrilaterosTrapezioComponent;
}());

/** CHILDREN INDEX
 * 0 - Trapezio Azul (Contorno)
 * 1 - Vertice Superior Esquerdo
 * 2 - Vertice Superior Direito
 * 3 - Vertice Inferior Direito
 * 4 - Vertice Inferior Esquerdo
 * 5 - Linha Pontilhada da Alura / Simbolo de Angulo Reto
 */
/* Basicamente isso ai:
                 b
         [1]-----------[2]
         /       .       \
        /        . h      \
       /         .         \
     [4]-------------------[3]
                 B
*/ 


/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n\r\n  <!-- Botões de navegação -->\r\n  <div class=\"btn-container mt-2 rowMod\">\r\n    <div class=\"container-sm border centerMenu\">\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo o tipo de quadrilátero</h5>\r\n      <geo-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></geo-btn>\r\n    </div>\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 56px);\n  border-left: 1px solid #5ca6e3; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 767px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; } }\n.centerMenu {\n  text-align: center;\n  margin-top: 10rem;\n  margin-left: 17.5rem; }\n.rowMod {\n  display: -webkit-box;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlQuadrilaterosComponent; });
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

var PlQuadrilaterosComponent = /** @class */ (function () {
    function PlQuadrilaterosComponent() {
        //botões
        this.buttons = [
            { title: "Quadrado", route: "pl_quadrilateros_quadrado" },
            { title: "Retângulo", route: "pl_quadrilateros_retangulo" },
            { title: "Trapézio", route: "pl_quadrilateros_trapezio" },
            { title: "Losango", route: "pl_quadrilateros_losango" },
            { title: "Paralelogramo", route: "pl_quadrilateros_paralelogramo" }
        ];
    }
    PlQuadrilaterosComponent.prototype.ngOnInit = function () {
    };
    PlQuadrilaterosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-quadrilateros',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlQuadrilaterosComponent);
    return PlQuadrilaterosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-regulares/pl-regulares.component.html":
/***/ (function(module, exports) {

module.exports = "<geo-base-view>\r\n  <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n    <h3 style=\"margin-top: 10px;\">Polígonos Regulares</h3>\r\n    <div class=\"content-container col-12 row px-0 align-items-center justify-content-center\">\r\n      <div class=\" mt-4\">\r\n        <p class=\"text-center\">\r\n          Entre com o número de lados (<strong><i>N</i></strong>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"lados\"\r\n            oninput=\"this.value = Math.round(Math.abs(this.value))\" (ngModelChange)=\"checkInput()\" max=\"22\" min=\"3\" />\r\n\r\n          e com a medida do lado (<ng-katex equation=\"\\ell\"></ng-katex>):\r\n          <input class=\"btn btn-secondary bg-white text-body\" type=\"number\" [(ngModel)]=\"lado\"\r\n            oninput=\"this.value = Math.round(Math.abs(this.value))\" (ngModelChange)=\"checkInput()\" max=\"10\" min=\"1\" />\r\n        </p>\r\n\r\n        <div [className]=\"errorInputSides === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          O número de lados deve ser um valor entre <b>3</b> e <b>22</b>.\r\n        </div>\r\n        <div [className]=\"errorInputSize === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\"\r\n          role=\"alert\" style=\"text-align: center;\">\r\n          A medida do lado deve ser um valor entre <b>1</b> e <b>10</b>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cena -->\r\n    <geo-scene class=\"col-12 row px-0 bg-primary img-fluid\" [hasOrbitControls]=\"false\" [hasPerspective]=\"false\">\r\n    </geo-scene>\r\n\r\n    <button class=\"btn btn-primary m-1 lock\" *ngFor=\"let button of buttons_lock\" (click)=\"circleType(button.value)\"\r\n      [id]=\"button.id\">\r\n      {{button.title}}\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <!-- Propriedades -->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <h4>Propriedades:</h4>\r\n    <p>\r\n      Polígono regular é aquele que tem todos os lados congruentes e todos os ângulos internos congruentes.\r\n    </p>\r\n    <h5>Classificação: {{ polygon }} </h5>\r\n\r\n    <div [ngSwitch]=\"polygon\">\r\n\r\n      <div *ngSwitchCase=\"'Triângulo Equilátero'\">\r\n        Triângulo equilátero é um tipo de triângulo que possui os três lados congruentes (mesma medida). E os ângulos\r\n        internos dessa figura apresentam as mesmas medidas: 60°.\r\n\r\n        <div class=\"text-center\">\r\n          <img src=\"assets\\images\\geometria\\poligono\\triangulo_equilatero.png\" style=\"width: 30%;\">\r\n        </div>\r\n\r\n        <b>Relações Métricas:</b>\r\n        <p>\r\n          Conseguimos determinar o raio da circunferência na qual o triângulo está inscrito:\r\n        </p>\r\n\r\n        <div class=\"text-center\">\r\n          <img src=\"assets\\images\\geometria\\poligono\\ilustracao_triangulo.png\" style=\"width: 100%; margin-bottom: 5%;\">\r\n        </div>\r\n\r\n        <div style=\"margin-bottom: 5%;\">\r\n          <p>\r\n            <ng-katex equation=\"Sen \\ 60\\degree = \"></ng-katex>\r\n            <ng-katex equation=\"\\frac{\\ell / 2}{r}\" style=\"font-size: 1.5em;\"></ng-katex>\r\n          </p>\r\n          <p>\r\n            <ng-katex\r\n              equation=\"r = \\frac{ {{lado}} / 2}{\\sqrt 3 / 2} \\approx {{ sqrt_example_triangle_hexagono | number:'':'pt' }} \"\r\n              style=\"font-size: 1.5em;\"></ng-katex>\r\n          </p>\r\n          <p>\r\n            Conseguimos obter o apótema(a) do triângulo equilátero:\r\n          </p>\r\n          <p>\r\n            <ng-katex equation=\"Cos \\ 60\\degree = \"></ng-katex>\r\n            <ng-katex equation=\"\\frac{a}{r}\" style=\"font-size: 1.5em;\"></ng-katex>\r\n          </p>\r\n          <p>\r\n            <ng-katex\r\n              equation=\"a = \\frac{1}{2} \\cdot {{ sqrt_example_triangle_hexagono | number:'':'pt' }} \\approx {{ (1/2) *  sqrt_example_triangle_hexagono | number:'':'pt'}} \"\r\n              style=\"font-size: 1.5em;\"></ng-katex>\r\n          </p>\r\n        </div>\r\n\r\n        <!-- Calculos Triangulo -->\r\n\r\n        <!-- Inicio Calculo Altura -->\r\n        <div class=\"accordion\" id=\"accordionExample\" style=\"margin-bottom: 5%;\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingAltura\" data-toggle=\"collapse\" data-target=\"#collapseAltura\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseAltura\" aria-expanded=\"false\" aria-controls=\"collapseAltura\">\r\n                  Altura: <ng-katex class=\"explicacao\"\r\n                    equation=\"h \\approx {{ (lado / 2) * sqrt3 | number:'':'pt'}} \\ u.m.\">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseAltura\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseAltura\" class=\"collapse\" aria-labelledby=\"headingAltura\" data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--Altura - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{h = \\frac{ {{lado}} \\sqrt 3}{2} } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos a medida do lado (<ng-katex equation=\"\\ell\"></ng-katex>) na fórmula <ng-katex\r\n                          equation=\"h = \\frac{ \\ell \\sqrt 3}{2} \">\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Altura - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{h = {{lado / 2 | number:'':'pt'}} \\sqrt 3 }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado após a divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Altura - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{h \\approx {{ (lado / 2) * sqrt3 | number:'':'pt'}} \\ u.m. }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após substituir <ng-katex equation=\"\\sqrt 3\"></ng-katex> pelo seu resultado\r\n                        aproximado <ng-katex equation=\"{{sqrt3 | number:'':'pt' }}\"></ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Altura -->\r\n\r\n          <!-- Inicio Calculo Area -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseArea\" aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n                    Área: <ng-katex class=\"explicacao\"\r\n                      equation=\"A \\approx {{ ((lado * lado) / 4) * sqrt3 | number:'':'pt' }} \\ u.a.\">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseArea\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--Area - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{A = \\frac{ {{lado}}^2 \\sqrt 3}{4} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos a medida do lado (<ng-katex equation=\"\\ell\"></ng-katex>) na fórmula <ng-katex\r\n                            equation=\"A = \\frac{\\ell^2 \\sqrt 3}{4} \">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Area - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{A = \\frac{ {{lado * lado}} \\sqrt 3}{4}}\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos a potência.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Area - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{A = {{ (lado * lado) / 4 | number:'':'pt' }} \\sqrt 3 }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final após a divisão.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Area - Passo 4-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{A \\approx {{ ((lado * lado) / 4) * sqrt3 | number:'':'pt' }} \\ u.a. }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final após substituir <ng-katex equation=\"\\sqrt 3\"></ng-katex> pelo seu resultado\r\n                          aproximado <ng-katex equation=\"{{sqrt3 | number:'':'pt' }}\"></ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Area -->\r\n\r\n          <!-- Inicio Calculo Perimetro -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingPerimetro\" data-toggle=\"collapse\" data-target=\"#collapsePerimetro\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePerimetro\" aria-expanded=\"false\" aria-controls=\"collapsePerimetro\">\r\n                    Perímetro: <ng-katex class=\"explicacao\" equation=\"P = {{3 * lado}} \\ u.m. \">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePerimetro\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapsePerimetro\" class=\"collapse\" aria-labelledby=\"headingPerimetro\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--Perimetro - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = 3 \\cdot {{lado}} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Como o triângulo equilátero tem 3 lados com a mesma medida (<ng-katex\r\n                            equation=\"\\ell = {{lado}} \"></ng-katex>), fazemos <ng-katex equation=\"P = 3 \\cdot \\ell\">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Perimetro - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = {{3 * lado}} \\ u.m. }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Perimetro -->\r\n\r\n          <!-- Inicio Calculo SomaAngulosInt -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseSomaAngulosInt\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                    Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 180\\degree\">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSomaAngulosInt\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--SomaAngulosInt - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = (3 - 2) \\cdot 180\\degree } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos o número de lados (N = 3) na fórmula <ng-katex\r\n                            equation=\"S = (N - 2) \\cdot 180\\degree\">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--SomaAngulosInt - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 1 \\cdot 180\\degree }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos as operações entre parênteses.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--SomaAngulosInt - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 180\\degree }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'Quadrado'\">\r\n        Quadrado é um tipo de é um quadrilátero que possui os quatro lados congruentes (mesma medida). E os ângulos\r\n        internos dessa figura apresentam as mesmas medidas: 90°.\r\n\r\n        <div class=\"text-center\">\r\n          <img src=\"assets\\images\\geometria\\poligono\\area_quadrado.png\" style=\"width: 30%;\">\r\n        </div>\r\n\r\n        <b>Relações Métricas:</b>\r\n        <p>\r\n          Conseguimos determinar o raio da circunferência na qual o quadrado está inscrito:\r\n        </p>\r\n\r\n        <div class=\"text-center\">\r\n          <img src=\"assets\\images\\geometria\\poligono\\ilustracao_quadrado.png\" style=\"width: 100%;\">\r\n        </div>\r\n\r\n        <p>\r\n          <ng-katex equation=\"Sen \\ 45\\degree = \"></ng-katex>\r\n          <ng-katex equation=\"\\frac{\\ell / 2}{r}\" style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n        <p>\r\n          <ng-katex equation=\"r = \\frac{\\ell / 2}{\\sqrt 2 / 2} \\approx {{sqrt_example_quadrado | number:'':'pt'}}\"\r\n            style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n\r\n        <p>\r\n          Conseguimos obter também o apótema (a) do quadrado:\r\n        </p>\r\n        <p>\r\n          <ng-katex equation=\"Cos \\ 45\\degree = \"></ng-katex>\r\n          <ng-katex equation=\"\\frac{a}{r}\" style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n        <p>\r\n          <ng-katex\r\n            equation=\"a = \\frac{\\sqrt 2}{2} \\cdot {{sqrt_example_quadrado | number:'':'pt'}} \\approx {{ (sqrt2 / 2) * sqrt_example_quadrado | number:'':'pt'}}\"\r\n            style=\"font-size: 1.5em;\">\r\n          </ng-katex>\r\n        </p>\r\n\r\n        <!-- Calculos Quadrado -->\r\n\r\n        <!-- Inicio Calculo Area -->\r\n        <div class=\"accordion\" id=\"accordionExample\" style=\"margin-bottom: 5%;\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n                  aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n                  Área: <ng-katex class=\"explicacao\" equation=\"A = {{lado * lado}} \\ u.a. \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseArea\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--Area - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{A = {{lado}}^2 } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos a medida do lado (<ng-katex equation=\"\\ell = {{lado}}\"></ng-katex>) na fórmula\r\n                        <ng-katex equation=\"A = \\ell^2 \">.\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Area - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{A = {{lado * lado}} \\ u.a. }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após resolver a potência.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Area -->\r\n\r\n          <!-- Inicio Calculo Perimetro -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingPerimetro\" data-toggle=\"collapse\" data-target=\"#collapsePerimetro\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePerimetro\" aria-expanded=\"false\" aria-controls=\"collapsePerimetro\">\r\n                    Perímetro: <ng-katex class=\"explicacao\" equation=\"P = {{4 * lado}} \\ u.m. \">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePerimetro\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapsePerimetro\" class=\"collapse\" aria-labelledby=\"headingPerimetro\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--Perimetro - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = 4 \\cdot {{lado}} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Como o quadrado tem 4 lados com a mesma medida (<ng-katex equation=\"\\ell = {{lado}}\">\r\n                          </ng-katex>) fazemos <ng-katex equation=\"P = 4 \\cdot \\ell\">.\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Perimetro - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = {{4 * lado}} \\ u.m. }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Perimetro -->\r\n\r\n          <!-- Inicio Calculo SomaAngulosInt -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseSomaAngulosInt\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                    Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = 360\\degree\">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSomaAngulosInt\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--SomaAngulosInt - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = (4 - 2) \\cdot 180\\degree } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos o número de lados (N = 4) na fórmula <ng-katex\r\n                            equation=\"S = (N - 2) \\cdot 180\\degree\">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--SomaAngulosInt - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 2 \\cdot 180\\degree }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos as operações entre parênteses.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--SomaAngulosInt - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 360\\degree }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n          <!-- Inicio Calculo NrDiagonais -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseNrDiagonais\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n                    Número de diagonais: <ng-katex class=\"explicacao\" equation=\"n = 2\">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseNrDiagonais\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingNrDiagonais\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--NrDiagonais - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{n = \\frac{4 \\cdot (4 - 3)}{2} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos o número de lados (N = 4) na fórmula <ng-katex\r\n                            equation=\"n = \\frac{N \\cdot (N - 3)}{2}\">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--NrDiagonais - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{4 \\cdot 1}{2} }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos as operações entre parênteses.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--NrDiagonais - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = 2}\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final, após resolver a multiplicação e divisão.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo NrDiagonais -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngSwitchCase=\"'Pentágono'\">\r\n        Pentágono regular é um polígono que possui os cinco lados congruentes (mesma medida). E os ângulos internos\r\n        dessa figura apresentam as mesmas medidas: 108°.\r\n\r\n        <div class=\"text-center\" p>\r\n          <img src=\"assets\\images\\geometria\\poligono\\area_pentagono.png\" style=\"width: 30%;\">\r\n        </div>\r\n\r\n        <b>\r\n          Relações Métricas:\r\n        </b>\r\n        <p>\r\n          Conseguimos determinar o raio da circunferência na qual o pentágono está inscrito:\r\n        </p>\r\n\r\n        <div class=\"text-center\">\r\n          <img src=\"assets\\images\\geometria\\poligono\\ilustracao_pentagono.png\" style=\"width: 100%;\">\r\n        </div>\r\n\r\n        <p>\r\n          <ng-katex equation=\"Sen \\ 36\\degree = \"></ng-katex>\r\n          <ng-katex equation=\"\\frac{\\ell / 2}{r}\" style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n\r\n        <p>\r\n          <ng-katex\r\n            equation=\"r = \\frac{ {{lado}} / 2}{ {{seno36 | number:'1.0-4':'pt'}} } \\approx {{ sqrt_example_pentagono | number:'':'pt' }} \"\r\n            style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n\r\n        <p>\r\n          Conseguimos obter também o apótema (a) do pentágono regular:\r\n        </p>\r\n\r\n        <p>\r\n          <ng-katex equation=\"Cos \\ 36\\degree = \"></ng-katex>\r\n          <ng-katex equation=\"\\frac{a}{r}\" style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n        <p>\r\n          <ng-katex\r\n            equation=\"a = {{cos36 | number:'1.0-4':'pt'}} \\cdot {{ sqrt_example_pentagono | number:'':'pt' }} \\approx {{ cos36 * sqrt_example_pentagono | number:'':'pt'}} \"\r\n            style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n\r\n        <!-- Calculos Pentagono -->\r\n\r\n        <!-- Inicio Calculo Perimetro -->\r\n        <div class=\"accordion\" id=\"accordionExample\" style=\"margin-bottom: 5%;\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingPerimetro\" data-toggle=\"collapse\" data-target=\"#collapsePerimetro\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapsePerimetro\" aria-expanded=\"false\" aria-controls=\"collapsePerimetro\">\r\n                  Perímetro: <ng-katex class=\"explicacao\" equation=\"P = {{5 * lado}} \\ u.m. \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapsePerimetro\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapsePerimetro\" class=\"collapse\" aria-labelledby=\"headingPerimetro\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--Perimetro - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = 5 \\cdot {{lado}} } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Como o pentágono regulare tem 5 lados com a mesma medida (<ng-katex equation=\"\\ell = {{lado}}\">\r\n                        </ng-katex>) na fórmula\r\n                        <ng-katex equation=\"P = 5 \\cdot \\ell\">.\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Perimetro - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = {{5 * lado}} \\ u.m. }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Perimetro -->\r\n\r\n          <!-- aaaaaaaaaaaaaaa fazer variavel mais compacta para calcular essa parte da area aaaaaaaaaaaaaaa -->\r\n\r\n          <!-- Inicio Calculo Area -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseArea\" aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n                    Área: <ng-katex class=\"explicacao\"\r\n                      equation=\"A = {{ (5 * lado) * (cos36 * sqrt_example_pentagono) | number:'':'pt' }} \\ u.a.\">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseArea\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--Area - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{A = {{ 5 * lado }} \\cdot {{ cos36 * sqrt_example_pentagono | number:'':'pt' }} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos a medida do perímetro (<ng-katex equation=\"P = {{ 5 * lado }}\"></ng-katex>) e do\r\n                          apótema\r\n                          <ng-katex equation=\"{{ cos36 * sqrt_example_pentagono | number:'':'pt' }}\"> na fórmula\r\n                            <ng-katex equation=\"A = P \\cdot a \"></ng-katex>\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Area - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{A = {{ (5 * lado) * (cos36 * sqrt_example_pentagono) | number:'':'pt' }} \\ u.a. }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Area -->\r\n\r\n          <!-- Inicio Calculo SomaAngulosInt -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseSomaAngulosInt\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                    Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = {{3 * 180}} \\degree \">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSomaAngulosInt\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--SomaAngulosInt - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = (5 - 2) \\cdot 180\\degree } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos o número de lados (<ng-katex equation=\"N = 5\"></ng-katex>) na fórmula\r\n                          <ng-katex equation=\"S = (N - 2) \\cdot 180\\degree\">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--SomaAngulosInt - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 3 \\cdot 180\\degree }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos as operações entre parênteses.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--SomaAngulosInt - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = {{3 * 180}} \\degree }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n          <!-- Inicio Calculo NrDiagonais -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseNrDiagonais\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n                    Número de diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{(5 * 2) / 2}}\">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseNrDiagonais\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingNrDiagonais\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--NrDiagonais - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{n = \\frac{5 \\cdot (5 - 3)}{2} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos o número de lados (<ng-katex equation=\"N = 5\"></ng-katex>) na fórmula\r\n                          <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--NrDiagonais - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{5 \\cdot 2}{2} }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos as operações entre parênteses.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--NrDiagonais - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{(5 * 2) / 2}} }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final, após resolver a multiplicação e a divisão.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo NrDiagonais -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngSwitchCase=\"'Hexágono'\">\r\n        Hexágono regular é um polígono que possui seis lados congruentes (mesma medida). E os ângulos internos dessa\r\n        figura apresentam as mesmas medidas: 120º.\r\n\r\n        <div class=\"text-center\" p>\r\n          <img src=\"assets\\images\\geometria\\poligono\\area_hexagono.png\" style=\"width: 30%;\">\r\n        </div>\r\n\r\n        <b>\r\n          Relações Métricas:\r\n        </b>\r\n        <p>\r\n          Conseguimos determinar o raio da circunferência na qual o hexágono está inscrito:\r\n        </p>\r\n\r\n        <div class=\"text-center\">\r\n          <img src=\"assets\\images\\geometria\\poligono\\ilustracao_hexagono.png\" style=\"width: 100%;\">\r\n        </div>\r\n\r\n        <p>\r\n          <ng-katex equation=\"Sen \\ 30\\degree = \"></ng-katex>\r\n          <ng-katex equation=\"\\frac{\\ell / 2}{r}\" style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n\r\n        <p>\r\n          <ng-katex equation=\"r = \\frac{ {{lado}} / 2}{ 1/2 } \\approx {{ (lado / 2) * (1/2) | number:'':'pt'}} \"\r\n            style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n\r\n        <p>\r\n          Conseguimos obter o apótema (a) do hexágono regular:\r\n        </p>\r\n\r\n        <p>\r\n          <ng-katex equation=\"Cos \\ 30\\degree = \"></ng-katex>\r\n          <ng-katex equation=\"\\frac{a}{r}\" style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n        <p>\r\n          <ng-katex\r\n            equation=\"a = \\frac{\\sqrt 3}{2} \\cdot {{ (lado / 2) * (1/2) | number:'':'pt' }} \\approx {{ ((lado / 2) * (1/2)) * (sqrt3/2) | number:'':'pt' }} \"\r\n            style=\"font-size: 1.5em;\"></ng-katex>\r\n        </p>\r\n\r\n        <!-- Calculos Hexagono -->\r\n\r\n        <!-- Inicio Calculo Area -->\r\n        <div class=\"accordion\" id=\"accordionExample\" style=\"margin-bottom: 5%;\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingArea\" data-toggle=\"collapse\" data-target=\"#collapseArea\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseArea\"\r\n                  aria-expanded=\"false\" aria-controls=\"collapseArea\">\r\n                  Área: <ng-katex class=\"explicacao\"\r\n                    equation=\"A \\approx {{((3 * (lado * lado)) / 2) * sqrt3 | number:'':'pt' }} \\ u.a. \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseArea\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseArea\" class=\"collapse\" aria-labelledby=\"headingArea\" data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--Area - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{A = \\frac{3 \\cdot {{lado}}^2 \\cdot \\sqrt 3}{2} } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos a medida do lado (<ng-katex equation=\"\\ell = {{lado}}\">\r\n                        </ng-katex>) na fórmula\r\n                        <ng-katex equation=\"A = \\frac{3 \\ell^2 \\sqrt 3}{2} \">.\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Area - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{A = \\frac{3 \\cdot {{lado * lado}} \\cdot \\sqrt 3}{2} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos a potência.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Area - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{A = {{(3 * (lado * lado)) / 2 | number:'':'pt' }} \\cdot \\sqrt 3 }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos as operações de multiplicação e divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--Area - Passo 4-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{A \\approx {{((3 * (lado * lado)) / 2) * sqrt3 | number:'':'pt' }} \\ u.a. }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após substituir <ng-katex equation=\"\\sqrt 3\"></ng-katex> pelo seu resultado\r\n                        aproximado <ng-katex equation=\"{{sqrt3}} \\ (A = {{(3 * (lado * lado)) / 2}} * {{sqrt3}}) \">\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Area -->\r\n\r\n          <!-- Inicio Calculo Perimetro -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingPerimetro\" data-toggle=\"collapse\" data-target=\"#collapsePerimetro\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePerimetro\" aria-expanded=\"false\" aria-controls=\"collapsePerimetro\">\r\n                    Perímetro: <ng-katex class=\"explicacao\" equation=\"P = {{6 * lado}} \\ u.m. \">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapsePerimetro\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapsePerimetro\" class=\"collapse\" aria-labelledby=\"headingPerimetro\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--Perimetro - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = 6 \\cdot {{lado}} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Como o hexágono regular tem 6 lados com a mesma medida (<ng-katex equation=\"\\ell = {{lado}}\">\r\n                          </ng-katex>) fazemos\r\n                          <ng-katex equation=\"P = 6 \\cdot \\ell \">.\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--Perimetro - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{P = {{6 * lado}} \\ u.m. }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo Perimetro -->\r\n\r\n          <!-- Inicio Calculo SomaAngulosInt -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseSomaAngulosInt\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                    Soma dos Ângulos Internos: <ng-katex class=\"explicacao\" equation=\"S = {{4 * 180}} \\degree \">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseSomaAngulosInt\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--SomaAngulosInt - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = (6 - 2) \\cdot 180\\degree } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos o número de lados (<ng-katex equation=\"N = 6\"></ng-katex>) na fórmula\r\n                          <ng-katex equation=\"S = (N - 2) \\cdot 180\\degree\">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--SomaAngulosInt - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = 4 \\cdot 180\\degree }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos as operações entre parênteses.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--SomaAngulosInt - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{S = {{4 * 180}} \\degree }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n          <!-- Inicio Calculo NrDiagonais -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseNrDiagonais\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n                    Número de diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{(6 * 3) / 2}} \">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseNrDiagonais\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingNrDiagonais\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--NrDiagonais - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{n = \\frac{6 \\cdot (6 - 3)}{2} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos o número de lados (<ng-katex equation=\"N = 6\"></ng-katex>) na fórmula\r\n                          <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--NrDiagonais - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = \\frac{6 \\cdot 3}{2} }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos as operações entre parênteses.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--NrDiagonais - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{n = {{(6 * 3) / 2}} }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final, após resolver a multiplicação e a divisão.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo NrDiagonais -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"defaultCase\">\r\n\r\n        <!-- Calculos Default -->\r\n\r\n        <!-- Inicio Calculo SomaAngulosInt -->\r\n        <div class=\"accordion\" id=\"accordionExample\" style=\"margin-bottom: 5%;\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingSomaAngulosInt\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseSomaAngulosInt\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSomaAngulosInt\" aria-expanded=\"false\" aria-controls=\"collapseSomaAngulosInt\">\r\n                  Soma dos Ângulos Internos: <ng-katex class=\"explicacao\"\r\n                    equation=\"S = {{ (lados - 2) * 180 }} \\degree \">\r\n                  </ng-katex>\r\n                </button>\r\n\r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseSomaAngulosInt\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseSomaAngulosInt\" class=\"collapse\" aria-labelledby=\"headingSomaAngulosInt\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!--SomaAngulosInt - Passo 1-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{S = ( {{lados}} - 2) \\cdot 180\\degree } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituímos o número de lados (<ng-katex equation=\"N = {{lados}} \"></ng-katex>) na fórmula\r\n                        <ng-katex equation=\"S = (N - 2) \\cdot 180\\degree\">\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--SomaAngulosInt - Passo 2-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{S = {{lados - 2}} \\cdot 180\\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos as operações entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!--SomaAngulosInt - Passo 3-->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{S = {{ (lados - 2) * 180 }} \\degree }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapseGeratriz\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo SomaAngulosInt -->\r\n\r\n          <!-- Inicio Calculo NrDiagonais -->\r\n          <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingNrDiagonais\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseNrDiagonais\">\r\n                <h2 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseNrDiagonais\" aria-expanded=\"false\" aria-controls=\"collapseNrDiagonais\">\r\n                    Número de diagonais: <ng-katex class=\"explicacao\" equation=\"n = {{ (lados * (lados - 3)) / 2 }} \">\r\n                    </ng-katex>\r\n                  </button>\r\n\r\n                  <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                    data-target=\"#collapseNrDiagonais\"></i>\r\n                </h2>\r\n              </div>\r\n              <div id=\"collapseNrDiagonais\" class=\"collapse\" aria-labelledby=\"headingNrDiagonais\"\r\n                data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                    <!--NrDiagonais - Passo 1-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{n = \\frac{ {{lados}} \\cdot ( {{lados}} - 3)}{2} } \">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Substituímos o número de lados (<ng-katex equation=\"N = {{lados}} \"></ng-katex>) na fórmula\r\n                          <ng-katex equation=\"n = \\frac{N \\cdot (N - 3)}{2} \">\r\n                          </ng-katex>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--NrDiagonais - Passo 2-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{n = \\frac{ {{lados}} \\cdot {{lados - 3}} }{2} }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resolvemos as operações entre parênteses.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <!--NrDiagonais - Passo 3-->\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                            <p>\r\n                              <ng-katex class=\"explicacao\"\r\n                                equation=\"\\textcolor{black}{n = {{ (lados * (lados - 3)) / 2 }} }\">\r\n                              </ng-katex>\r\n                              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseGeratriz\"></i>\r\n                            </p>\r\n                          </a>\r\n                        </h4>\r\n                      </div>\r\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                        <div class=\"panel-body\">\r\n                          Resultado final, após resolver a multiplicação e a divisão.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Fim Calculo NrDiagonais -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</geo-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-regulares/pl-regulares.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-regulares/pl-regulares.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlRegularesComponent; });
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






var Circle;
(function (Circle) {
    Circle[Circle["NONE"] = 0] = "NONE";
    Circle[Circle["INSCRITO"] = 1] = "INSCRITO";
    Circle[Circle["CIRCUNSCRITO"] = 2] = "CIRCUNSCRITO";
})(Circle || (Circle = {}));
var PlRegularesComponent = /** @class */ (function () {
    function PlRegularesComponent() {
        this.circle = Circle.NONE;
        this.polygon = 'Triângulo Equilátero';
        this.lado = 5;
        this.lados = 3;
        this.errorInputSize = false;
        this.errorInputSides = false;
        this.sqrt3 = Math.sqrt(3); //raiz quadrada de 3 pra usar nas contas
        this.sqrt2 = Math.sqrt(2); //raiz quadrada de 2 pra usar nas contas
        this.seno36 = 0.58778525229; //seno de 36 graus pra usar nas contas
        this.cos36 = 0.809017; //cos de 36 graus pra usar nas contas
        this.sqrt_example_triangle_hexagono = ((this.lado / 2) / (Math.sqrt(3) / 2)); //resolve a conta do exemplo do triangulo e do hexagono
        this.sqrt_example_quadrado = ((this.lado / 2) / (Math.sqrt(2) / 2)); //resolve a conta do exemplo do quadrado
        this.sqrt_example_pentagono = ((this.lado / 2) / (this.seno36)); //resolve a conta do exemplo do pentagono
        this.defaultCase = false;
        this.buttons_lock = [
            { title: 'Polígono inscrito em uma circunferência', value: 1, id: 'insc' },
            { title: 'Polígono circunscrito a uma circunferência', value: 2, id: 'circun' }
        ];
    }
    PlRegularesComponent.prototype.circleType = function (type) {
        if (this.circle === type)
            type = Circle.NONE;
        this.circle = type;
        switch (type) {
            case Circle.INSCRITO:
                document.getElementById('insc').style.color = '#4683B4';
                document.getElementById('insc').style.backgroundColor = '#FFF';
                document.getElementById('circun').style.color = '#FFF';
                document.getElementById('circun').style.backgroundColor = '#4683B4';
                break;
            case Circle.CIRCUNSCRITO:
                document.getElementById('circun').style.color = '#4683B4';
                document.getElementById('circun').style.backgroundColor = '#FFF';
                document.getElementById('insc').style.color = '#FFF';
                document.getElementById('insc').style.backgroundColor = '#4683B4';
                break;
            case Circle.NONE:
                document.getElementById('circun').style.color = '#FFF';
                document.getElementById('circun').style.backgroundColor = '#4683B4';
                document.getElementById('insc').style.color = '#FFF';
                document.getElementById('insc').style.backgroundColor = '#4683B4';
                break;
        }
        this.drawObjects();
    };
    PlRegularesComponent.prototype.ngOnInit = function () {
        this.geoScene.fieldOfView = 12.5;
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_pt__["a" /* default */]);
    };
    PlRegularesComponent.prototype.ngDoCheck = function () {
        this.sqrt_example_triangle_hexagono = ((this.lado / 2) / (Math.sqrt(3) / 2));
        this.sqrt_example_quadrado = ((this.lado / 2) / (Math.sqrt(2) / 2));
        this.sqrt_example_pentagono = ((this.lado / 2) / (this.seno36));
        if (this.lados >= 7)
            this.defaultCase = true;
        else
            this.defaultCase = false;
    };
    PlRegularesComponent.prototype.ngAfterViewInit = function () {
        this.drawObjects();
    };
    PlRegularesComponent.prototype.drawObjects = function () {
        var porygon = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), one = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](0, 0), zero = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](0, 0);
        for (var mod_1 = -0.1; mod_1 <= 0.1; mod_1 += 0.05) {
            for (var i = 0; i <= this.lados; i++) {
                var angle = (Math.PI / 2) + (i / this.lados) * 2 * Math.PI, x_1 = Math.cos(angle) * (this.lado + mod_1), y_1 = Math.sin(angle) * (this.lado + mod_1);
                porygon.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x_1, y_1, 0));
                if (mod_1 === 0 && i === 0)
                    zero = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](x_1, y_1);
                else if (mod_1 === 0 && i === 1)
                    one = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"](x_1, y_1);
            }
        }
        var distance = Math.sqrt(Math.pow((one.x - zero.x), 2) + Math.pow((one.y - zero.y), 2)), distancesRatio = distance / 2 / distance, x = (1 - distancesRatio) * zero.x + distancesRatio * one.x, y = (1 - distancesRatio) * zero.y + distancesRatio * one.y, radius = Math.sqrt(Math.pow((x), 2) + Math.pow((y), 2));
        var circle = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), mod = this.lado + 0.25;
        this.radius = this.lado;
        if (this.circle === Circle.CIRCUNSCRITO) {
            this.radius = radius;
            mod = radius - 0.05;
            if (this.lado <= 5)
                mod = radius - 0.05;
        }
        else if (this.lado <= 5)
            mod = this.lado + 0.15;
        for (var i = 0; i <= 360; i++) {
            var theta = (i / 1080) * 360;
            circle.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](Math.sin(theta) * mod, Math.cos(theta) * mod, 0));
        }
        this.geoScene.scene.children[0] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](porygon, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x4683B4 }));
        this.geoScene.scene.children[1] = new __WEBPACK_IMPORTED_MODULE_2_three__["Line"](circle, new __WEBPACK_IMPORTED_MODULE_2_three__["LineBasicMaterial"]({ color: 0x999999 }));
        if (this.circle === Circle.NONE)
            this.geoScene.scene.children[1].visible = false;
        var ang = ((this.lados - 2) * 180) / this.lados;
        var pos = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0);
        for (var i = 0; i <= 2; i++) {
            var angle = ((ang * 0.0175 / 2) + (i / this.lados) * 2 * (ang * 0.0175)), x_2 = Math.cos(angle) * (this.lado), y_2 = Math.sin(angle) * (this.lado);
            pos = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](x_2, y_2, 0);
            break;
        }
        distance = Math.sqrt(Math.pow((pos.x), 2) + Math.pow((pos.y), 2)),
            distancesRatio = (distance + 0.6) / distance;
        pos.x = distancesRatio * pos.x,
            pos.y = distancesRatio * pos.y;
        this.geoScene.scene.children[2] = new __WEBPACK_IMPORTED_MODULE_3_three_spritetext__["a" /* default */]('ℓ', 1, '#4683B4');
        this.geoScene.scene.children[2].position.copy(pos);
        this.getPolygon();
        this.geoScene.render();
    };
    PlRegularesComponent.prototype.checkInput = function () {
        var condSides = this.lados >= 3 && this.lados <= 22;
        var condSize = this.lado >= 1 && this.lado <= 10;
        if (condSides && condSize) {
            this.errorInputSides = false;
            this.errorInputSize = false;
            this.drawObjects();
        }
        else {
            if (condSize)
                this.errorInputSides = true;
            else
                this.errorInputSides = false;
            if (condSides)
                this.errorInputSize = true;
            else
                this.errorInputSize = false;
        }
    };
    PlRegularesComponent.prototype.getPolygon = function () {
        if (this.lados === 3)
            this.polygon = 'Triângulo Equilátero';
        else if (this.lados === 4)
            this.polygon = 'Quadrado';
        else if (this.lados === 5)
            this.polygon = 'Pentágono';
        else if (this.lados === 6)
            this.polygon = 'Hexágono';
        else if (this.lados === 7)
            this.polygon = 'Heptágono';
        else if (this.lados === 8)
            this.polygon = 'Octógono';
        else if (this.lados === 9)
            this.polygon = 'Eneágono';
        else if (this.lados === 10)
            this.polygon = 'Decágono';
        else if (this.lados === 11)
            this.polygon = 'Undecágono';
        else if (this.lados === 12)
            this.polygon = 'Dodecágono';
        else if (this.lados === 13)
            this.polygon = 'Tridecágono';
        else if (this.lados === 14)
            this.polygon = 'Tetradecágono';
        else if (this.lados === 15)
            this.polygon = 'Pentadecágono';
        else if (this.lados === 16)
            this.polygon = 'Hexadecágono';
        else if (this.lados === 17)
            this.polygon = 'Heptadecágono';
        else if (this.lados === 18)
            this.polygon = 'Octadecágono';
        else if (this.lados === 19)
            this.polygon = 'Eneadecágono';
        else if (this.lados === 20)
            this.polygon = 'Icoságono';
        else if (this.lados === 21)
            this.polygon = 'Hendecoságono';
        else if (this.lados === 22)
            this.polygon = 'Docoságono';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_components_geo_scene_geo_scene_component__["a" /* GeoSceneComponent */])
    ], PlRegularesComponent.prototype, "geoScene", void 0);
    PlRegularesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-regulares',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-regulares/pl-regulares.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-regulares/pl-regulares.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlRegularesComponent);
    return PlRegularesComponent;
}());

/** CHILDREN INDEX
 * 0 - Poligono Regular Azul (Contorno)
 * 1 - Circulo
 * 2 - Label
 */


/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-sidebar/pl-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"rp-sidebar\">\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['pl_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action disabled\"> <!--  [routerLink]=\"['pl_triangulos']\" -->\r\n      Triângulos\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['pl_quadrilateros']\">\r\n      Quadriláteros\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['pl_regulares']\">\r\n      Polígonos Regulares\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['pl_n_lados']\">\r\n      Polígonos com “n” lados\r\n    </li>\r\n  </ul>\r\n</section>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-sidebar/pl-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".list-group-item:first-child {\n  border-radius: 0 !important; }\n\n.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #4683B4 !important;\n  border-color: #4683B4 !important; }\n\n#selecionado:hover {\n  color: #fff;\n  background-color: #4683B4; }\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-sidebar/pl-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlSidebarComponent; });
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

var PlSidebarComponent = /** @class */ (function () {
    function PlSidebarComponent() {
    }
    PlSidebarComponent.prototype.ngOnInit = function () {
    };
    PlSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pl-sidebar',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-sidebar/pl-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-sidebar/pl-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlSidebarComponent);
    return PlSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-triangulos/pl-triangulos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pl-triangulos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-triangulos/pl-triangulos.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-triangulos/pl-triangulos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlTriangulosComponent; });
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

var PlTriangulosComponent = /** @class */ (function () {
    function PlTriangulosComponent() {
    }
    PlTriangulosComponent.prototype.ngOnInit = function () {
    };
    PlTriangulosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pl-triangulos',
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-triangulos/pl-triangulos.component.html"),
            styles: [__webpack_require__("./src/app/views/geometria/poligonos/components/pl-triangulos/pl-triangulos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlTriangulosComponent);
    return PlTriangulosComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-view/pl-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n  <pl-sidebar class=\"slidebar\"></pl-sidebar>\r\n  <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>"

/***/ }),

/***/ "./src/app/views/geometria/poligonos/components/pl-view/pl-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlViewComponent; });
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

var PlViewComponent = /** @class */ (function () {
    function PlViewComponent() {
    }
    PlViewComponent.prototype.ngOnInit = function () {
    };
    PlViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/geometria/poligonos/components/pl-view/pl-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PlViewComponent);
    return PlViewComponent;
}());



/***/ }),

/***/ "./src/app/views/geometria/poligonos/poligonos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoligonosModule", function() { return PoligonosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_geo_shared_module__ = __webpack_require__("./src/app/views/geometria/shared/geo-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__poligonos_routing__ = __webpack_require__("./src/app/views/geometria/poligonos/poligonos.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pl_view_pl_view_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-view/pl-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pl_sidebar_pl_sidebar_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-sidebar/pl-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pl_definicao_pl_definicao_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-definicao/pl-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pl_triangulos_pl_triangulos_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-triangulos/pl-triangulos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_pl_quadrilateros_pl_quadrilateros_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pl_regulares_pl_regulares_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-regulares/pl-regulares.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pl_n_lados_pl_n_lados_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-n-lados/pl-n-lados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pl_quadrilateros_pl_quadrilateros_quadrado_pl_quadrilateros_quadrado_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_pl_quadrilateros_pl_quadrilateros_retangulo_pl_quadrilateros_retangulo_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pl_quadrilateros_pl_quadrilateros_trapezio_pl_quadrilateros_trapezio_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pl_quadrilateros_pl_quadrilateros_losango_pl_quadrilateros_losango_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pl_quadrilateros_pl_quadrilateros_paralelogramo_pl_quadrilateros_paralelogramo_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var PoligonosModule = /** @class */ (function () {
    function PoligonosModule() {
    }
    PoligonosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_geo_shared_module__["a" /* GeoSharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__poligonos_routing__["a" /* PoligonosRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_pl_view_pl_view_component__["a" /* PlViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_pl_sidebar_pl_sidebar_component__["a" /* PlSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_pl_definicao_pl_definicao_component__["a" /* PlDefinicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_pl_triangulos_pl_triangulos_component__["a" /* PlTriangulosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_pl_quadrilateros_pl_quadrilateros_component__["a" /* PlQuadrilaterosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_pl_regulares_pl_regulares_component__["a" /* PlRegularesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pl_n_lados_pl_n_lados_component__["a" /* PlNLadosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_pl_quadrilateros_pl_quadrilateros_quadrado_pl_quadrilateros_quadrado_component__["a" /* PlQuadrilaterosQuadradoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_pl_quadrilateros_pl_quadrilateros_retangulo_pl_quadrilateros_retangulo_component__["a" /* PlQuadrilaterosRetanguloComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_pl_quadrilateros_pl_quadrilateros_trapezio_pl_quadrilateros_trapezio_component__["a" /* PlQuadrilaterosTrapezioComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pl_quadrilateros_pl_quadrilateros_losango_pl_quadrilateros_losango_component__["a" /* PlQuadrilaterosLosangoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pl_quadrilateros_pl_quadrilateros_paralelogramo_pl_quadrilateros_paralelogramo_component__["a" /* PlQuadrilaterosParalelogramoComponent */],
            ]
        })
    ], PoligonosModule);
    return PoligonosModule;
}());



/***/ }),

/***/ "./src/app/views/geometria/poligonos/poligonos.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoligonosRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pl_quadrilateros_pl_quadrilateros_trapezio_pl_quadrilateros_trapezio_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-trapezio/pl-quadrilateros-trapezio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pl_quadrilateros_pl_quadrilateros_retangulo_pl_quadrilateros_retangulo_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-retangulo/pl-quadrilateros-retangulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pl_quadrilateros_pl_quadrilateros_quadrado_pl_quadrilateros_quadrado_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-quadrado/pl-quadrilateros-quadrado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pl_quadrilateros_pl_quadrilateros_paralelogramo_pl_quadrilateros_paralelogramo_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-paralelogramo/pl-quadrilateros-paralelogramo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pl_quadrilateros_pl_quadrilateros_losango_pl_quadrilateros_losango_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros-losango/pl-quadrilateros-losango.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pl_n_lados_pl_n_lados_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-n-lados/pl-n-lados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pl_regulares_pl_regulares_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-regulares/pl-regulares.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pl_quadrilateros_pl_quadrilateros_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-quadrilateros/pl-quadrilateros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pl_triangulos_pl_triangulos_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-triangulos/pl-triangulos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pl_view_pl_view_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-view/pl-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pl_definicao_pl_definicao_component__ = __webpack_require__("./src/app/views/geometria/poligonos/components/pl-definicao/pl-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__components_pl_view_pl_view_component__["a" /* PlViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'pl_definicao',
                pathMatch: 'full',
            },
            {
                path: 'pl_definicao',
                component: __WEBPACK_IMPORTED_MODULE_10__components_pl_definicao_pl_definicao_component__["a" /* PlDefinicaoComponent */]
            },
            // Rotas Triangulos
            {
                path: 'pl_triangulos',
                component: __WEBPACK_IMPORTED_MODULE_8__components_pl_triangulos_pl_triangulos_component__["a" /* PlTriangulosComponent */]
            },
            // Rotas Quadrilateros
            {
                path: 'pl_quadrilateros',
                component: __WEBPACK_IMPORTED_MODULE_7__components_pl_quadrilateros_pl_quadrilateros_component__["a" /* PlQuadrilaterosComponent */]
            },
            {
                path: 'pl_quadrilateros_losango',
                component: __WEBPACK_IMPORTED_MODULE_4__components_pl_quadrilateros_pl_quadrilateros_losango_pl_quadrilateros_losango_component__["a" /* PlQuadrilaterosLosangoComponent */]
            },
            {
                path: 'pl_quadrilateros_paralelogramo',
                component: __WEBPACK_IMPORTED_MODULE_3__components_pl_quadrilateros_pl_quadrilateros_paralelogramo_pl_quadrilateros_paralelogramo_component__["a" /* PlQuadrilaterosParalelogramoComponent */]
            },
            {
                path: 'pl_quadrilateros_quadrado',
                component: __WEBPACK_IMPORTED_MODULE_2__components_pl_quadrilateros_pl_quadrilateros_quadrado_pl_quadrilateros_quadrado_component__["a" /* PlQuadrilaterosQuadradoComponent */]
            },
            {
                path: 'pl_quadrilateros_retangulo',
                component: __WEBPACK_IMPORTED_MODULE_1__components_pl_quadrilateros_pl_quadrilateros_retangulo_pl_quadrilateros_retangulo_component__["a" /* PlQuadrilaterosRetanguloComponent */]
            },
            {
                path: 'pl_quadrilateros_trapezio',
                component: __WEBPACK_IMPORTED_MODULE_0__components_pl_quadrilateros_pl_quadrilateros_trapezio_pl_quadrilateros_trapezio_component__["a" /* PlQuadrilaterosTrapezioComponent */]
            },
            // Rotas Poligonos Regulares
            {
                path: 'pl_regulares',
                component: __WEBPACK_IMPORTED_MODULE_6__components_pl_regulares_pl_regulares_component__["a" /* PlRegularesComponent */]
            },
            // Rotas Poligonos com n lados
            {
                path: 'pl_n_lados',
                component: __WEBPACK_IMPORTED_MODULE_5__components_pl_n_lados_pl_n_lados_component__["a" /* PlNLadosComponent */]
            },
        ]
    }];
var PoligonosRouting = /** @class */ (function () {
    function PoligonosRouting() {
    }
    PoligonosRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_12__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_12__angular_router__["e" /* RouterModule */]]
        })
    ], PoligonosRouting);
    return PoligonosRouting;
}());



/***/ })

});
//# sourceMappingURL=poligonos.module.chunk.js.map