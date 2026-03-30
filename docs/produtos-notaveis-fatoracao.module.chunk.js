webpackJsonp(["produtos-notaveis-fatoracao.module"],{

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-definicao/pnf-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-description\">\r\n  <h3>Produtos‌ ‌Notáveis‌ ‌</h3>\r\n  \r\n  <p class=\"p-justify\">\r\n    Os‌ ‌‌produtos‌ ‌notáveis‌ nada mais ‌são ‌do que multiplicações em que os fatores são polinômios.\r\n    Essas ‌expressões‌ ‌algébricas podem ser‌ ‌utilizadas‌ ‌em‌\r\n    ‌muitos‌ ‌cálculos‌ ‌matemáticos,‌ ‌por‌ ‌exemplo,‌ ‌nas‌ ‌equações‌ ‌de‌\r\n    ‌primeiro‌ ‌e‌ ‌de‌ ‌segundo‌ ‌grau.‌ São cinco os produtos notáveis com maior destaque:\r\n    Quadrado‌ ‌da‌ ‌Soma‌ ‌de‌ ‌Dois‌ ‌Termos‌, Quadrado‌ ‌da‌ ‌Diferença‌ ‌de‌ ‌Dois‌ ‌Termos‌, \r\n    Produto‌ ‌da‌ ‌Soma‌ ‌pela‌ ‌Diferença‌ ‌de‌ ‌Dois‌ ‌Termos‌, ‌Cubo‌ ‌da‌ ‌Soma‌ ‌de‌ ‌Dois‌ ‌Termos‌ e\r\n    ‌Cubo‌ ‌da‌ ‌Diferença‌ ‌de‌ ‌Dois‌ ‌Termos.<br>\r\n  </p>\r\n  <p class=\"p-justify\">\r\n    Como as expressões são representadas por multiplicações entre múltiplos fatores, a \r\n    <b>propriedade distributiva</b> geralmente está associada a elas, e pode ser\r\n    definida como:<br> Propriedade indicando que dois ou mais termos presentes numa expressão de soma ou subtração multiplicada por\r\n    outra, é igual à soma ou à diferença da multiplicação de cada um dos termos da adição ou da subtração pelo número. Ou ainda, pode ser\r\n    definida pela expressão algébrica: <b>a x (b + c) = a x b + a x c </b> ou <b>a x (b - c) = a x b - a x c </b> \r\n  </p>\r\n\r\n  <hr>\r\n\r\n  <h4>Quadrado‌ ‌da‌ ‌Soma‌ ‌de‌ ‌Dois‌ ‌Termos‌</h4>\r\n  <p class=\"p-justify\">\r\n    ‌‌O quadrado‌ ‌da‌ ‌soma‌‌ ‌dos‌ ‌dois‌ ‌termos‌ ‌é‌ ‌representado‌ ‌pela‌\r\n    ‌seguinte‌ ‌expressão:‌ <b>(a‌ ‌+‌ ‌b)²‌ ‌=‌ ‌(a‌ ‌+‌ ‌b)‌ * (a‌ ‌+‌ ‌b)‌ </b>.\r\n    ‌ Logo,‌ ‌ao‌ ‌aplicar‌ ‌a‌ ‌propriedade‌ ‌distributiva‌ ‌temos‌:‌ ‌\r\n    <b>(a‌ ‌+‌ ‌b)²‌ ‌=‌ ‌a²‌ ‌+‌ ‌2ab‌ ‌+‌ ‌b²‌</b>. Assim,‌ ‌o‌ ‌quadrado‌ ‌do‌\r\n    ‌primeiro‌ ‌termo‌ ‌é‌ ‌somado‌ ‌ao‌ ‌dobro‌ ‌do‌ ‌primeiro‌ ‌termo‌ ‌pelo‌\r\n    ‌segundo‌ ‌termo,‌ ‌e‌ ‌por‌ ‌fim,‌ ‌somado‌ ‌ao‌ ‌quadrado‌ ‌do‌ ‌segundo‌\r\n    ‌termo.‌\r\n  </p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationOne,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationOne = !isVisibleEquationOne\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationOne\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de produto notável a partir da equação inicial: Quadrado da soma de dois termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Aplicando o produto notável fazendo o quadrado do primeiro termo, mais o dobro do produto do primeiro \r\n                pelo segundo termo, mais o quadrado do segundo termo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as operações de potência.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as multiplicações.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 5 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 5:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationOne,4)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Ou ainda, colocando em ordem decrescente.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <h4>Quadrado‌ ‌da‌ ‌Diferença‌ ‌de‌ ‌Dois‌ ‌Termos‌</h4>\r\n  <p class=\"p-justify\">\r\n    O‌ ‌‌quadrado‌ ‌da‌ ‌diferença‌ ‌‌dos‌ ‌dois‌ ‌termos‌ ‌é‌ ‌representado‌\r\n    ‌pela‌ ‌seguinte‌ ‌expressão:‌‌ <b>(a‌ ‌–‌ ‌b)²‌ ‌=‌ ‌(a‌ ‌–‌ ‌b)‌ ‌* ‌(a‌\r\n    ‌–‌ ‌b)‌</b>. Assim,‌ ‌ao‌ ‌aplicar‌ ‌a‌ ‌propriedade‌ ‌distributiva‌ ‌temos‌\r\n    ‌que:‌ <b>(a‌ ‌–‌ ‌b)²‌ ‌=‌ ‌a²‌ ‌-‌ ‌2ab‌ ‌+‌ ‌b²</b>.‌ ‌ Logo,‌ ‌o‌ ‌quadrado‌\r\n    ‌do‌ ‌primeiro‌ ‌termo‌ ‌é‌ ‌subtraído‌ ‌ao‌ ‌dobro‌ ‌do‌ ‌produto‌ ‌do‌\r\n    ‌primeiro‌ ‌termo‌ ‌pelo‌ ‌segundo‌ ‌termo‌ ‌e,‌ ‌por‌ ‌fim,‌ ‌somado‌ ‌ao‌\r\n    ‌quadrado‌ ‌do‌ ‌segundo‌ ‌termo.‌ ‌\r\n  </p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationTwo,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationTwo = !isVisibleEquationTwo\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationTwo\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwo,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de produto notável a partir da equação inicial: Quadrado da diferença de dois termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwo,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Aplicando o produto notável fazendo o quadrado do primeiro termo, menos o dobro do produto do primeiro \r\n                pelo segundo termo, mais o quadrado do segundo termo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwo,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as operações de potência.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwo,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as multiplicações.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <h4>Produto‌ ‌da‌ ‌Soma‌ ‌pela‌ ‌Diferença‌ ‌de‌ ‌Dois‌ ‌Termos‌</h4>\r\n\r\n  <p class=\"p-justify\">\r\n\r\n    O‌ ‌‌produto‌ ‌da‌ ‌soma‌ ‌pela‌ ‌diferença‌ ‌dois‌ ‌termos‌ ‌é‌\r\n    ‌representado‌ ‌pela‌ ‌seguinte‌ ‌ expressão:‌ <b>(a‌ ‌+‌ ‌b)‌ ‌* ‌(a‌ ‌–‌\r\n    ‌b)‌ ‌=‌ ‌a²‌ ‌-‌ ‌b²‌ </b>. Nota-se‌ ‌que‌ ‌ao‌ ‌aplicar‌ ‌a‌ ‌propriedade‌\r\n    ‌distributiva‌ ‌da‌ ‌multiplicação,‌ ‌o‌ ‌resultado‌ ‌da‌ ‌expressão‌ ‌é‌\r\n    ‌a‌ ‌subtração‌ ‌do‌ ‌quadrado‌ ‌do‌ ‌primeiro‌ ‌e‌ ‌do‌ ‌segundo‌ ‌termo.‌\r\n  </p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationThree,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationThree = !isVisibleEquationThree\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationThree\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationThree,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de produto notável a partir da equação inicial: Produto da soma pela diferença de dois termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationThree,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Aplicando o produto notável fazendo o quadrado do primeiro termo, menos o quadrado do segundo termo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationThree,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as operações de potência.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationThree,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Ou ainda, colocando em ordem decrescente.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <h4>Cubo‌ ‌da‌ ‌Soma‌ ‌de‌ ‌Dois‌ ‌Termos‌</h4>\r\n  <p class=\"p-justify\">\r\n    O‌ ‌‌cubo‌ ‌da‌ ‌soma‌‌ ‌de‌ ‌dois‌ ‌termos‌ ‌é‌ ‌representado‌ ‌pela‌\r\n    ‌seguinte‌ ‌expressão:‌ <b>(a‌ ‌+‌ ‌b)³‌ ‌=‌ ‌(a‌ ‌+‌ ‌b)‌ ‌* ‌(a‌ ‌+‌ ‌b)‌\r\n    ‌* ‌(a‌ ‌+‌ ‌b)</b>‌. ‌Logo,‌ ‌ao‌ ‌aplicar‌ ‌a‌ ‌propriedade‌ ‌distributiva‌\r\n    ‌temos:‌ <b>a³‌ ‌+‌ ‌3a²b‌ ‌+‌ ‌3ab²‌ ‌+‌ ‌b³‌</b>. ‌Dessa‌ ‌forma,‌ ‌o‌ ‌cubo‌\r\n    ‌do‌ ‌primeiro‌ ‌termo‌ ‌é‌ ‌somado‌ ‌ao‌ ‌triplo‌ ‌do‌ ‌produto‌ ‌do‌\r\n    ‌quadrado‌ ‌ do‌ ‌primeiro‌ ‌termo‌ ‌pelo‌ ‌segundo‌ ‌termo‌ ‌e‌ ‌o‌\r\n    ‌triplo‌ ‌do‌ ‌produto‌ ‌do‌ ‌primeiro‌ ‌termo‌ ‌pelo‌ quadrado‌ ‌do‌\r\n    ‌segundo‌ ‌termo.‌ ‌Por‌ ‌fim,‌ ‌ele‌ ‌é‌ ‌somado‌ ‌ao‌ ‌cubo‌ ‌do‌\r\n    ‌segundo‌ ‌termo.‌ ‌\r\n  </p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationFour,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationFour = !isVisibleEquationFour\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationFour\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFour,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de produto notável a partir da equação inicial: Cubo da soma de dois termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFour,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Aplicando o produto notável fazendo o cubo do primeiro termo, mais o triplo do produto do quadrado\r\n                do primeiro termo pelo segundo termo, mais o triplo do produto do primeiro pelo quadrado do segundo termo,\r\n                mais o cubo do segundo termo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFour,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as operações de potência.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFour,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as multiplicações.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <h4>‌Cubo‌ ‌da‌ ‌Diferença‌ ‌de‌ ‌Dois‌ ‌Termos‌</h4>\r\n  <p class=\"p-justify\">\r\n\r\n    O‌ ‌‌cubo‌ ‌da‌ ‌diferença‌‌ ‌de‌ ‌dois‌ ‌termos‌ ‌é‌ ‌representado‌ ‌pela‌\r\n    ‌seguinte‌ ‌expressão:‌ <b>(a‌ ‌–‌ ‌b)³‌ ‌=‌ ‌(a‌ ‌–‌ ‌b)‌ ‌*‌ ‌(a‌ ‌–‌ ‌b)‌\r\n    ‌* ‌(a‌ ‌–‌ ‌b)‌</b>. Logo,‌ ‌ao‌ ‌aplicar‌ ‌a‌ ‌propriedade‌ ‌distributiva‌\r\n    ‌temos:‌ ‌<b>a³‌ ‌-‌ ‌3a²b‌ ‌+‌ ‌3ab²‌ ‌-‌ ‌b³‌</b>. Assim,‌ ‌o‌ ‌cubo‌ ‌do‌\r\n    ‌primeiro‌ ‌termo‌ ‌é‌ ‌subtraído‌ ‌ao‌ ‌triplo‌ ‌do‌ ‌produto‌ ‌do‌\r\n    ‌quadrado‌ ‌do‌ primeiro‌ ‌termo‌ ‌pelo‌ ‌segundo‌ ‌termo.‌ ‌Por‌\r\n    ‌conseguinte,‌ ‌ele‌ ‌é‌ ‌somado‌ ‌ao‌ ‌triplo‌ ‌do‌ ‌ produto‌ ‌do‌\r\n    ‌primeiro‌ ‌termo‌ ‌pelo‌ ‌quadrado‌ ‌do‌ ‌segundo‌ ‌termo.‌ ‌E,‌ ‌por‌\r\n    ‌fim,‌ ‌é‌ ‌subtraído ao‌ ‌cubo‌ ‌do‌ ‌segundo‌ ‌termo.\r\n  </p>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationFive,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationFive = !isVisibleEquationFive\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationFive\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFive,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de produto notável a partir da equação inicial: Cubo da diferença de dois termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFive,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Aplicando o produto notável fazendo o cubo do primeiro termo, menos o triplo do produto do quadrado\r\n                do primeiro termo pelo segundo termo, mais o triplo do produto do primeiro pelo quadrado do segundo termo,\r\n                menos o cubo do segundo termo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 3:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFive,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as operações de potência.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 4 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFive,3)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Resolvendo as multiplicações.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 5 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 4:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationFive,4)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Ou ainda, colocando em ordem decrescente.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <hr>\r\n\r\n  <h3>Fatoração</h3>\r\n  \r\n  <p class=\"p-justify\">\r\n    A fatoração é responsável por transformar a soma e a subtração de \r\n    expressões algébricas ou equações em um produto com fatores. Também\r\n    pode ser entendido como a simplificação de expressões.<br>\r\n  </p>\r\n  <p class=\"p-justify\">\r\n    As fatorações abordadas são: Fator Comum em Evidência, Agrupamento,\r\n    Trinômio Quadrado Perfeito, Diferença de Dois Quadrados, Cubo perfeito \r\n     (adição e subtração) e Produto de Dois Binômios.\r\n  </p>\r\n\r\n  <hr>\r\n  <h4>‌Fator Comum em Evidência</h4>\r\n  <p class=\"p-justify\">\r\n\r\n  Podemos aplicar a fatoração de polinômios utilizando o inverso da propriedade \r\n  distributiva, colocando fatores comuns em evidência, como na fórmula: \r\n  <b>ax + bx = x. (a + b)</b>. A variável <b>x</b> é comum aos dois termos, assim podemos\r\n   usar da propriedade da multiplicação e colocá-la em evidência sem alterar o resultado.\r\n  </p>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationSix,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationSix = !isVisibleEquationSix\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationSix\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationSix,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de fatoração a partir da equação inicial: Fator comum em evidência.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationSix,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Verificamos o elemento que temos em comum e colocamos em evidência.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <h4>Agrupamento</h4>\r\n  \r\n  <p class=\"p-justify\">\r\n    Consiste em fazer a junção dos termos e variáveis em comum, como\r\n    na fórmula: <b>ax + bx + ay + by = x . (a + b) + y . (a + b) = (x + y) . (a + b)</b>.\r\n    Com a multiplicação de termos e variáveis em comum, podemos agrupar as \r\n    variáveis e os coeficientes em comum, fazendo o produto da soma sem \r\n    alterar o resultado final.\r\n  </p>\r\n<br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationSeven,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationSeven = !isVisibleEquationSeven\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationSeven\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationSeven,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de fatoração a partir da equação inicial: Agrupamento.\r\n                 Note que nesse caso temos um elemento em comum nos primeiros termos e \r\n                 um elemento comum nos últimos termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationSeven,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Colocamos em evidência o elemento que temos em comum nos primeiros termos \r\n                e somamos ao elemento que possuímos em comum nos últimos termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationSeven,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Escrevemos a expressão como o produto da soma de dois termos, sem alterar \r\n                o resultado final.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <h4>Trinômio Quadrado Perfeito</h4>\r\n  \r\n  <p class=\"p-justify\">\r\n    São polinômios formados por três monômios em que o primeiro e o último termos\r\n    são quadrados e o termo central é o dobro do produto entre o primeiro termo e o\r\n    segundo termo, como na fórmula: <b>a² + 2ab + b² = (a + b)²</b>. \r\n    Assim, podemos simplificar reescrevendo o polinômio como o quadrado da soma dos dois termos.\r\n    Caso o sinal do termo central seja negativo, podemos reescrever o polinômio como \r\n    o quadrado da diferença dos dois termos: <b>a² - 2ab + b² = (a - b)²</b>.\r\n  </p>\r\n<br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationEight,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationEight = !isVisibleEquationEight\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationEight\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationEight,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de fatoração a partir da equação inicial: Trinômio quadrado perfeito. \r\n                Note que a expressão é formada por três monômios em que o primeiro e o último termo são quadrados \r\n                e o termo cental é o dobro do produto entre o primeiro termo e o segundo termo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationEight,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Escrevemos a expressão no formato 𝒶² + 2 · 𝒶 · 𝒷 + 𝒷², identificando os elementos que estão \r\n                elevados ao quadrado e os respectivos produtos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationEight,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Identificamos os elementos 𝒶 e 𝒷, e escrevemos o resultado como o quadrado da soma, \r\n                no formato (𝒶 + 𝒷)².\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  \r\n  <h4>Diferença de dois quadrados</h4>\r\n  \r\n  <p class=\"p-justify\">\r\n     Quando temos uma expressão algébrica que apresenta a diferença entre os\r\n     quadrados de dois termos, podemos reescrevê-los como o produto de uma \r\n     soma por uma subtração entre os dois termos, como na fórmula:\r\n     <b>a² – b² = (a + b) . (a – b)</b>. Para verificar essa \r\n     propriedade, basta realizar a <b>distributiva</b>:\r\n    <b>(a + b) . (a – b) = a² – ab + ab – b² = a² – b²</b>\r\n  </p>\r\n<br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationNine,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationNine = !isVisibleEquationNine\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationNine\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationNine,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de fatoração a partir da equação inicial: Diferença de dois quadrados.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationNine,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Escrevemos a expressão no formato 𝒶² − 𝒷², identificando os elementos que estão elevados ao quadrado.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationNine,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Escrevemos a expressão como o produto da soma pela diferença de dois termos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <h4>Cubo Perfeito</h4>\r\n  \r\n  <p class=\"p-justify\">\r\n    É uma expressão algébrica em que dois termos são o cubo de um número e os \r\n    outros dois termos são múltiplos de 3. Podemos encontrar o\r\n    cubo perfeito de duas formas: cubo da adição ou cubo da subtração.\r\n  </p>\r\n\r\n  <h4>Cubo da Adição</h4>\r\n  \r\n  <p class=\"p-justify\">\r\n    É quando temos um polinômio com o primeiro termo ao cubo (a³), \r\n    mais o segundo termo, igual a três vezes o quadrado do primeiro, \r\n    vezes o segundo termo (3 * a² * b), mais três vezes o primeiro termo,\r\n    vezes o quadrado do segundo termo (3 * a * b²), mais o cubo do segundo termo (b³).\r\n    Assim, podemos escrevê-lo como o cubo da soma: <b>a³ + 3a²b + 3ab² + b³ = (a + b)³</b>.\r\n  </p>\r\n<br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationTen,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationTen = !isVisibleEquationTen\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationTen\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTen,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de fatoração a partir da equação inicial: Cubo perfeito (cubo da soma).\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTen,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Escrevemos a expressão no formato 𝒶³ + 3 · 𝒶² · 𝒷 + 3 · 𝒶 · 𝒷² + 𝒷³, identificando \r\n                os elementos que estão elevados ao cubo, ao quadrado e os respectivos produtos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTen,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Identificamos os elementos 𝒶 e 𝒷, e escrevemos o resultado como o quadrado da soma, \r\n                no formato (𝒶 + 𝒷)³.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <h4>Cubo da Subtração</h4>\r\n  \r\n  <p class=\"p-justify\">\r\n    É quando temos um polinômio com o primeiro termo ao cubo (a³), \r\n    menos o segundo termo, igual a três vezes o quadrado do primeiro, \r\n    vezes o segundo termo (3 * a² * b), mais três vezes o primeiro termo, \r\n    vezes o quadrado do segundo termo (3 * a * b²), menos o cubo do segundo termo (b³).\r\n    Então, podemos reescrevê-lo como o cubo da diferença:\r\n    <b>a³ – 3a²b + 3ab² – b³ = (a – b)³</b>.    \r\n  </p>\r\n<br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationEleven,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationEleven = !isVisibleEquationEleven\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationEleven\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationEleven,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de fatoração a partir da equação inicial: Cubo perfeito (cubo da diferença).\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationEleven,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Escrevemos a expressão no formato 𝒶³ − 3 · 𝒶² · 𝒷 + 3 · 𝒶 · 𝒷² − 𝒷³,\r\n                identificando os elementos que estão elevados ao cubo, ao quadrado e os respectivos produtos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationEleven,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Identificamos os elementos 𝒶 e 𝒷, e escrevemos o resultado como o quadrado da diferença, \r\n                no formato (𝒶 − 𝒷)³.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  \r\n  <h4>Produto de dois binômios</h4>\r\n  \r\n  <p class=\"p-justify\">\r\n    É a representação de uma equação do segundo grau, \r\n    no formato: <b>ax^2 + bx + c</b>. No qual é aplicada\r\n    a <b>fórmula de bháskara</b>, que é representada pela fórmula:\r\n    <b>-b +- (√ b^2 - 4 * a * c) / 2</b>; ou ainda pela <b>soma e produto</b>.\r\n    A partir disso são descobertos as duas raízes (x' e x'', ou x¹ e x²) e \r\n    apresentado o valor de <b>a</b> multiplicado pela variável <b>x</b> menos\r\n    o valor da primeira raiz, multiplicado pela variável <b>x</b> menos\r\n    o valor da segunda raiz.\r\n  </p>\r\n<br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Exemplo 1:</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <ng-katex [equation]=\"getArrayItem(equationTwelve,0)\" [options]=\"options\"></ng-katex>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"ifmath-description__button__solution ifmath-description__button__solution--blackgrey\" (click)=\"isVisibleEquationTwelve = !isVisibleEquationTwelve\">Solução\r\n            da Equação</button>\r\n        </div>\r\n        <div *ngIf=\"isVisibleEquationTwelve\" class=\"col-sm-12\">\r\n          <h3>Solução:</h3>\r\n\r\n          <!-- Passo 1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 1:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwelve,0)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\">\r\n                Identificação do tipo de fatoração a partir da equação inicial: Trinômio do segundo grau. \r\n                Note que a expressão é um trinômio no formato 𝒶𝓍² + 𝒷𝓍 + 𝒸.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 2 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwelve,1)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Escrevemos a expressão no formato 𝓍² + (𝒷/𝒶)𝓍 + (𝒸/𝒶), \r\n                identificando os elementos que estão elevados ao quadrado e as respectivas divisões.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Passo 3 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h3 class=\"ifmath-description__step__title\">Passo 2:</h3>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <ng-katex [equation]=\"getArrayItem(equationTwelve,2)\" [options]=\"options\"></ng-katex>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"ifmath-description__text ifmath-description__text--justify\"> \r\n                Identificamos dois elementos 𝓍' e 𝓍'' tal que 𝓍' + 𝓍'' = −(𝒷/𝒶) e 𝓍' · 𝓍'' = 𝒸/𝒶 \r\n                ou utilizando a fórmula de Bháskara e escrevemos o resultado como um \r\n                produto 𝒶 · (𝓍 − 𝓍') · (𝓍 − 𝓍'').\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-definicao/pnf-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = ".p-justify {\n  text-align: justify;\n  text-indent: 2em; }\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-definicao/pnf-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnfDefinicaoComponent; });
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

var PnfDefinicaoComponent = /** @class */ (function () {
    function PnfDefinicaoComponent() {
        this.equationOne = [];
        this.equationTwo = [];
        this.equationThree = [];
        this.equationFour = [];
        this.equationFive = [];
        this.equationSix = [];
        this.equationSeven = [];
        this.equationEight = [];
        this.equationNine = [];
        this.equationTen = [];
        this.equationEleven = [];
        this.equationTwelve = [];
        this.isVisibleEquationOne = false;
        this.isVisibleEquationTwo = false;
        this.isVisibleEquationThree = false;
        this.isVisibleEquationFour = false;
        this.isVisibleEquationFive = false;
        this.isVisibleEquationSix = false;
        this.isVisibleEquationSeven = false;
        this.isVisibleEquationEight = false;
        this.isVisibleEquationNine = false;
        this.isVisibleEquationTen = false;
        this.isVisibleEquationEleven = false;
        this.isVisibleEquationTwelve = false;
        this.options = {
            displayMode: true,
        };
        this.createFirstEquation();
        this.createSecondEquation();
        this.createThirdEquation();
        this.createFourthEquation();
        this.createFifthEquation();
        this.createSixthEquation();
        this.createSeventhEquation();
        this.createEighthEquation();
        this.createNinthEquation();
        this.createTenthEquation();
        this.createEleventhEquation();
        this.createTwelfthEquation();
    }
    PnfDefinicaoComponent.prototype.createFirstEquation = function () {
        this.equationOne.push('p =  (3 + x)^2');
        this.equationOne.push('p =  (3)^2 + 2 * 3 * x + (x)^2');
        this.equationOne.push('p =  9 + 2 * 3 * x + x^2');
        this.equationOne.push('p =  9 + 6x + x^2');
        this.equationOne.push('p =  x^2 + 6x + 9');
    };
    PnfDefinicaoComponent.prototype.createSecondEquation = function () {
        this.equationTwo.push('p =  (x^2 - 5)^2');
        this.equationTwo.push('p =  (x^2)^2 - 2 * x^2 * 5 + (5)^2');
        this.equationTwo.push('p =  x^4 - 2 * x^2 * 5 + 25');
        this.equationTwo.push('p =  x^4 - 10x^2 + 25');
    };
    PnfDefinicaoComponent.prototype.createThirdEquation = function () {
        this.equationThree.push('p =  (5 + a) * (5 - a)');
        this.equationThree.push('p =  (5)^2 - (a)^2');
        this.equationThree.push('p =  25 - a^2');
        this.equationThree.push('p =  -a^2 + 25');
    };
    PnfDefinicaoComponent.prototype.createFourthEquation = function () {
        this.equationFour.push('p =  (y^2 + 9)^2');
        this.equationFour.push('p =  (y^2)^3 + 3 * (y^2)^2 * 9 + 3 * y^2 * (9)^2 + (9)^3');
        this.equationFour.push('p =  y^6 + 3 * y^4 * 9 + 3 * y^2 * 81 + 729');
        this.equationFour.push('p =  y^6 + 27y^4 + 243y^2 + 729');
    };
    PnfDefinicaoComponent.prototype.createFifthEquation = function () {
        this.equationFive.push('p =  (4 - z)^2');
        this.equationFive.push('p =  (4)^3 - 3 * (4)^2 * z + 3 * 4 * (z)^2 - (z)^3');
        this.equationFive.push('p =  64 - 3 * 16 * z + 3 * 4 * z^2 - z^3');
        this.equationFive.push('p =  64 - 48z + 12z^2 - z^3');
        this.equationFive.push('p =  -z^3 + 12z^2 - 48z + 64');
    };
    PnfDefinicaoComponent.prototype.createSixthEquation = function () {
        this.equationSix.push('p =  12 + 2x - 4x^5');
        this.equationSix.push('p =  2 * (6 + x - 2x^5)');
    };
    PnfDefinicaoComponent.prototype.createSeventhEquation = function () {
        this.equationSeven.push('p =  x^3 + 2x^2 - x + 2x^2 + 4x - 2');
        this.equationSeven.push('p =  x * (x^2 + 2x - 1) + 2 * (x^2 + 2x - 1)');
        this.equationSeven.push('p =  (x + 2) * (x^2 + 2x - 1)');
    };
    PnfDefinicaoComponent.prototype.createEighthEquation = function () {
        this.equationEight.push('p =  36 + 12x + x^2');
        this.equationEight.push('p =  (6)^2 + 2 * 6 * x + (x)^2');
        this.equationEight.push('p =  (6 + x)^2');
    };
    PnfDefinicaoComponent.prototype.createNinthEquation = function () {
        this.equationNine.push('p =  16 - x^4');
        this.equationNine.push('p =  (4)^2 - (x^2)^2');
        this.equationNine.push('p =  (4 + x) * (4 - x)');
    };
    PnfDefinicaoComponent.prototype.createTenthEquation = function () {
        this.equationTen.push('p =  j^3 + 9j^2 + 27j + 27');
        this.equationTen.push('p =  (j) ^ 3 + 3 * (j)^2 * 3 + 3 * j * (3)^2 + (3) ^ 3');
        this.equationTen.push('p =  (j + 3) ^ 3');
    };
    PnfDefinicaoComponent.prototype.createEleventhEquation = function () {
        this.equationEleven.push('p =  27x^3 - 54x^2 + 36x - 8');
        this.equationEleven.push('p =  (3x) ^ 3 - 3 * (3x)^2 * 2 + 3 * 3x * (2)^2 - (2) ^ 3');
        this.equationEleven.push('p =  (3x - 2) ^ 3');
    };
    PnfDefinicaoComponent.prototype.createTwelfthEquation = function () {
        this.equationTwelve.push('p =  10 - 9x + 2x^2');
        this.equationTwelve.push('p =  x^2 + (-9/2)x + (10/2)');
        this.equationTwelve.push('p =  2 * (x - 5/2) * (x - 2)');
    };
    PnfDefinicaoComponent.prototype.getArrayItem = function (array, index) {
        return array[index];
    };
    PnfDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-definicao/pnf-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-definicao/pnf-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PnfDefinicaoComponent);
    return PnfDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-fatoracao/pnf-fatoracao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" #demoForm=\"ngForm\" [formGroup]=\"formModel\">\r\n      <div class=\"row\">\r\n        <!-- Title -->\r\n        <div class=\"col-sm-12 ifmath-form__title\">\r\n          <h2 class=\"fmath-form__title__text\"> Fatoração </h2>\r\n        </div>\r\n        <!-- Fields -->\r\n        <div class=\"col-sm-12 col-md-7\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">Expressão</span>\r\n            <input type=\"text\" name=\"expression\" formControlName=\"expression\" class=\"form-control ifmath-form__contener__body__input\"\r\n              aria-describedby=\"sizing-addon2\" placeholder=\"x^2 + 4x + 4\">\r\n          </div>\r\n          <div>\r\n            <span class=\"ifmath-form__label ifmath-form__label--error\" *ngIf=\"formModel.get('expression').hasError('required') && formModel.get('expression').touched\">Campo\r\n              invalido!</span>\r\n          </div>  \r\n        </div>\r\n  \r\n        <!-- buttons -->\r\n        <div class=\"col-sm-12 col-md-5 ifmath-form__button__group\">\r\n          <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" [disabled]=\"formModel.invalid\" value=\"Calcular\">Calcular</button>\r\n          <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\" (click)=\"onClear()\">Limpar</button>\r\n        </div>\r\n      </div>\r\n  \r\n    </form>\r\n  \r\n    <!-- endregion -->\r\n  \r\n    <!-- region Resultados -->\r\n    <div class=\"col-sm-12\">\r\n      <ifmath-ng-results [loading]=\"loading\" [resultados]=\"results\"></ifmath-ng-results>\r\n    </div>\r\n  \r\n    <!-- <div class=\"context-plot\">\r\n      <ifmath-math-plot class=\"plot\"></ifmath-math-plot>\r\n    </div> -->\r\n  \r\n  \r\n    <!-- endregion -->\r\n  </section>\r\n  \r\n  <ifmath-ng-modal-error #modalError>\r\n    <div class=\"content\">\r\n      <p> {{ errorMessage }} </p>\r\n    </div>\r\n  </ifmath-ng-modal-error>\r\n  "

/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-fatoracao/pnf-fatoracao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnfFatorationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pnf_service__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/shared/pnf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pnf_model__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/shared/pnf.model.ts");
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







var PnfFatorationComponent = /** @class */ (function () {
    function PnfFatorationComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.formModel = this.fb.group({
            expression: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    PnfFatorationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.onClear();
        this.finalExpression = new __WEBPACK_IMPORTED_MODULE_3__shared_pnf_model__["a" /* IPNFExpression */];
        this.finalExpression.expression = this.formModel.get('expression').value.toLowerCase();
        this._servico
            .postFatoracao(this.finalExpression)
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
                    'Expressão não pode ser fatorada!';
                _this.modalError.show();
            }
        });
    };
    PnfFatorationComponent.prototype.onClear = function () {
        this.results = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('modalError'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_components_modal_error_modal_error_component__["a" /* ModalErrorComponent */])
    ], PnfFatorationComponent.prototype, "modalError", void 0);
    PnfFatorationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-fatoracao/pnf-fatoracao.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_pnf_service__["a" /* ServicoPnf */]])
    ], PnfFatorationComponent);
    return PnfFatorationComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-prod-notavel/pnf-prod-notavel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- region fomrulario -->\r\n<section class=\"ifmath-form__contener__body\">\r\n    <!-- Form -->\r\n    <form (ngSubmit)=\"onSubmit()\" #demoForm=\"ngForm\" [formGroup]=\"formModel\">\r\n      <div class=\"row\">\r\n        <!-- Title -->\r\n        <div class=\"col-sm-12 ifmath-form__title\">\r\n          <h2 class=\"fmath-form__title__text\"> Produtos Notáveis </h2>\r\n        </div>\r\n        <!-- Fields -->\r\n        <div class=\"col-sm-12 col-md-7\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon input-group-addon--blackgrey\" id=\"sizing-addon2\">Expressão</span>\r\n            <input type=\"text\" name=\"expression\" formControlName=\"expression\" class=\"form-control ifmath-form__contener__body__input\"\r\n              aria-describedby=\"sizing-addon2\" placeholder=\"(2 + x)^2\">\r\n          </div>\r\n          <div>\r\n            <span class=\"ifmath-form__label ifmath-form__label--error\" *ngIf=\"formModel.get('expression').hasError('required') && formModel.get('expression').touched\">Campo\r\n              invalido!</span>\r\n          </div>  \r\n        </div>\r\n  \r\n        <!-- buttons -->\r\n        <div class=\"col-sm-12 col-md-5 ifmath-form__button__group\">\r\n          <button type=\"submit\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" [disabled]=\"formModel.invalid\" value=\"Calcular\">Calcular</button>\r\n          <button type=\"reset\" class=\"btn btn-success btn-success--blackgrey btn-success--semMargin\" value=\"Limpar\" (click)=\"onClear()\">Limpar</button>\r\n        </div>\r\n      </div>\r\n  \r\n    </form>\r\n  \r\n    <!-- endregion -->\r\n  \r\n    <!-- region Resultados -->\r\n    <div class=\"col-sm-12\">\r\n      <ifmath-ng-results [loading]=\"loading\" [resultados]=\"results\"></ifmath-ng-results>\r\n    </div>\r\n  \r\n    <!-- <div class=\"context-plot\">\r\n      <ifmath-math-plot class=\"plot\"></ifmath-math-plot>\r\n    </div> -->\r\n  \r\n  \r\n    <!-- endregion -->\r\n  </section>\r\n  \r\n  <ifmath-ng-modal-error #modalError>\r\n    <div class=\"content\">\r\n      <p> {{ errorMessage }} </p>\r\n    </div>\r\n  </ifmath-ng-modal-error>\r\n  "

/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-prod-notavel/pnf-prod-notavel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnfNotableProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pnf_service__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/shared/pnf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pnf_model__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/shared/pnf.model.ts");
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







var PnfNotableProductComponent = /** @class */ (function () {
    function PnfNotableProductComponent(fb, _servico) {
        this.fb = fb;
        this._servico = _servico;
        this.formModel = this.fb.group({
            expression: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    PnfNotableProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.onClear();
        this.finalExpression = new __WEBPACK_IMPORTED_MODULE_3__shared_pnf_model__["a" /* IPNFExpression */];
        this.finalExpression.expression = this.formModel.get('expression').value.toLowerCase();
        this._servico
            .postProdutoNotavel(this.finalExpression)
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
                    'Aconteceu algum erro no módulo de processamento, verifique a sua rede: ' +
                        err.message;
                _this.modalError.show();
            }
        });
    };
    PnfNotableProductComponent.prototype.onClear = function () {
        this.results = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('modalError'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_components_modal_error_modal_error_component__["a" /* ModalErrorComponent */])
    ], PnfNotableProductComponent.prototype, "modalError", void 0);
    PnfNotableProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-prod-notavel/pnf-prod-notavel.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_pnf_service__["a" /* ServicoPnf */]])
    ], PnfNotableProductComponent);
    return PnfNotableProductComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-sidebar/pnf-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-side-bar\">\r\n  <ul class=\"list-group  list-group-collapse\">\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['pnf_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['pnf_produto_notavel']\">\r\n      Produto Notável\r\n    </li>\r\n    <li class=\"list-group-item list-group-item-action side-bar__selected\" [routerLink]=\"['pnf_fatoracao']\">\r\n      Fatoração\r\n    </li>\r\n  </ul>\r\n</section>"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-sidebar/pnf-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnfSidebarComponent; });
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

var PnfSidebarComponent = /** @class */ (function () {
    function PnfSidebarComponent() {
    }
    PnfSidebarComponent.prototype.ngOnInit = function () {
    };
    PnfSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-pnf-sidebar',
            template: __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-sidebar/pnf-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PnfSidebarComponent);
    return PnfSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-view/pnf-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n  <ifmath-pnf-sidebar class=\"slidebar\"></ifmath-pnf-sidebar>\r\n  <router-outlet class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-view/pnf-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnfViewComponent; });
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

var PnfViewComponent = /** @class */ (function () {
    function PnfViewComponent() {
    }
    PnfViewComponent.prototype.ngOnInit = function () {
    };
    PnfViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-view/pnf-view.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PnfViewComponent);
    return PnfViewComponent;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/produtos-notaveis-fatoracao.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosNotaveisFatoracaoModule", function() { return ProdutosNotaveisFatoracaoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pnf_service__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/shared/pnf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pnf_model__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/shared/pnf.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__produtos_notaveis_fatoracao_routing__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/produtos-notaveis-fatoracao.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pnf_view_pnf_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-view/pnf-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pnf_sidebar_pnf_sidebar_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-sidebar/pnf-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_pnf_definicao_pnf_definicao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-definicao/pnf-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pnf_prod_notavel_pnf_prod_notavel_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-prod-notavel/pnf-prod-notavel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pnf_fatoracao_pnf_fatoracao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-fatoracao/pnf-fatoracao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ProdutosNotaveisFatoracaoModule = /** @class */ (function () {
    function ProdutosNotaveisFatoracaoModule() {
    }
    ProdutosNotaveisFatoracaoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__produtos_notaveis_fatoracao_routing__["a" /* PnfRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__components_pnf_view_pnf_view_component__["a" /* PnfViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_pnf_sidebar_pnf_sidebar_component__["a" /* PnfSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_pnf_definicao_pnf_definicao_component__["a" /* PnfDefinicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_pnf_prod_notavel_pnf_prod_notavel_component__["a" /* PnfNotableProductComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pnf_fatoracao_pnf_fatoracao_component__["a" /* PnfFatorationComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_pnf_service__["a" /* ServicoPnf */], __WEBPACK_IMPORTED_MODULE_7__shared_pnf_model__["a" /* IPNFExpression */]]
        })
    ], ProdutosNotaveisFatoracaoModule);
    return ProdutosNotaveisFatoracaoModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/produtos-notaveis-fatoracao.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnfRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pnf_definicao_pnf_definicao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-definicao/pnf-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pnf_prod_notavel_pnf_prod_notavel_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-prod-notavel/pnf-prod-notavel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pnf_fatoracao_pnf_fatoracao_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-fatoracao/pnf-fatoracao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pnf_view_pnf_view_component__ = __webpack_require__("./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/components/pnf-view/pnf-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var router = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__components_pnf_view_pnf_view_component__["a" /* PnfViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'pnf_definicao',
                pathMatch: 'full',
            },
            {
                path: 'pnf_definicao',
                component: __WEBPACK_IMPORTED_MODULE_2__components_pnf_definicao_pnf_definicao_component__["a" /* PnfDefinicaoComponent */]
            },
            {
                path: 'pnf_produto_notavel',
                component: __WEBPACK_IMPORTED_MODULE_3__components_pnf_prod_notavel_pnf_prod_notavel_component__["a" /* PnfNotableProductComponent */]
            },
            {
                path: 'pnf_fatoracao',
                component: __WEBPACK_IMPORTED_MODULE_4__components_pnf_fatoracao_pnf_fatoracao_component__["a" /* PnfFatorationComponent */]
            }
        ]
    }
];
var PnfRoutingModule = /** @class */ (function () {
    function PnfRoutingModule() {
    }
    PnfRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(router)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], PnfRoutingModule);
    return PnfRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/shared/pnf.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IPNFExpression; });
var IPNFExpression = /** @class */ (function () {
    function IPNFExpression() {
    }
    return IPNFExpression;
}());



/***/ }),

/***/ "./src/app/views/algebra-funcoes/produtos-notaveis-fatoracao/shared/pnf.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoPnf; });
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




var ServicoPnf = /** @class */ (function () {
    function ServicoPnf(_http) {
        this._http = _http;
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url;
    }
    ServicoPnf.prototype.postProdutoNotavel = function (pnf) {
        var url = this.baseUrl + '/api/produtos_notaveis_fatoracao/produto_notavel';
        var body = JSON.stringify(pnf);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoPnf.prototype.postFatoracao = function (pnf) {
        var url = this.baseUrl + '/api/produtos_notaveis_fatoracao/fatoracao';
        var body = JSON.stringify(pnf);
        var options = {
            headers: this.httpHeaders
        };
        return this._http.post(url, body, options).map(function (response) { return response; });
    };
    ServicoPnf = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServicoPnf);
    return ServicoPnf;
}());



/***/ })

});
//# sourceMappingURL=produtos-notaveis-fatoracao.module.chunk.js.map