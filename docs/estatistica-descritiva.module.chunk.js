webpackJsonp(["estatistica-descritiva.module"],{

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Barras Múltiplas</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n      <!--Vou ter que usar essa forma de input, tenho que adequar as mensagens de erro-->\r\n      <!--Classificação da primeira variável-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Classificação da primeira variável: </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"classifVar1Input\">\r\n      </div>\r\n\r\n      <!--Nomes das variáveis-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Insira os/as <b>{{classifVar1Input}}:</b> </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"classifVarVal1Input\" (ngModelChange)=\"updateClassifVarVal1()\">\r\n      </div>\r\n\r\n      <!--Classificação das demais variáveis-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Classificação das demais variáveis </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"classifVar2Input\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Insira os/as <b>{{classifVar2Input}}:</b> </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"classifVarVal2Input\" (ngModelChange)=\"updateClassifVarVal2()\">\r\n      </div>\r\n\r\n      <!-- Aqui vai estar todos os inputs gerados dinâmicamente -->\r\n      <div *ngFor=\"let series of classifVarVal2; let i = index\" class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Insira a quantidade de <b>{{series}}</b></label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"chartDataSeries[i]\" (ngModelChange)=\"updateChartSeries(i)\">\r\n      </div>\r\n\r\n      <!--Fonte dos dados-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n      <!-- Entradas -->\r\n      <div class=\" mt-4\">\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n          O número de n variáveis deve ser menor que <b>10</b>.\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered\">\r\n                    <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                    <thead class=\"table-info\" style=\"text-align: center;\">\r\n                      <tr>\r\n                        <th class=\"table-secondary\" style=\"vertical-align: middle;\" scope=\"col\" rowspan=\"2\">\r\n                          {{classifVar1Input}}</th>\r\n                        <th class=\"table-warning\" scope=\"colgroup\" [attr.colspan]=\"classifVarVal2.length\">\r\n                          {{classifVar2Input}}</th>\r\n                        <th style=\"vertical-align: middle;\" scope=\"col\" rowspan=\"2\">Total</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <th class=\"table-warning\" scope=\"col\" *ngFor=\"let classDemaisVar of classifVarVal2\">\r\n                          {{classDemaisVar}}</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody style=\"text-align: center;\">\r\n                      <tr *ngFor=\"let variables of classifVarVal1; let ind = index\">\r\n                        <td>{{variables}}</td>\r\n                        <td *ngFor=\"let values of classifVarVal2; let i = index\">\r\n                          {{chartSeries[i].data[ind].toFixed(2) | number:'':'pt'}}</td>\r\n                        <td>{{qtdTotalSeries[ind].toFixed(2) | number:'':'pt'}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                    <caption>Fonte: {{fonteDados}}</caption>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      São gráficos de barras envolvendo múltiplas variáveis.\r\n    </p>\r\n    <hr>\r\n    <!-- Exemplo -->\r\n    <div *ngFor=\"let variaveis of classifVarVal1; let ind = index\" class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"color:rgb(10, 10, 179);\">{{variaveis}}</h3>\r\n      <div *ngFor=\"let valores of classifVarVal2; let i = index\" class=\"accordion\" id=\"accordionExample1\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n            [attr.data-target]=\"'#collapsePrincipal' + i + ind\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                [attr.data-target]=\"'#collapsePrincipal' + i + ind\" aria-expanded=\"false\"\r\n                aria-controls=\"collapsePrincipal\">\r\n                {{valores}} = <ng-katex class=\"explicacao\" equation=\" {{chartSeries[i].data[ind] | number:'':'pt'}}\">\r\n                </ng-katex> Unidades\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                [attr.data-target]=\"'#collapsePrincipal' + i + ind\"></i>\r\n            </h2>\r\n          </div>\r\n          <div [attr.id]=\"'collapsePrincipal' + i + ind\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n            data-parent=\"#accordionExample1\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" [attr.href]=\"'#collapseOne'+ i + ind\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{  \r\n                      \\begin{matrix}\r\n                          Base = {{chartSeries[i].data[ind] | number:'':'pt'}} \\text{ unidades} \\\\\r\n                          Altura = 1 \\text{ unidade} \r\n                       \\end{matrix} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div [attr.id]=\"'collapseOne'+ i + ind\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Desenhamos um retângulo alinhado a esquerda, medindo\r\n                      <ng-katex equation=\"\\color{blue}{ {{chartSeries[i].data[ind] | number:'':'pt'}} }\"></ng-katex>\r\n                      unidades de base e uma unidade de altura.\r\n                      Os dados são unidos e há um espaço entre as/os {{classifVar1Input}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div><br>\r\n    </div>\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Series */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQualiBarrasMultiplasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Series = /** @class */ (function () {
    function Series() {
    }
    return Series;
}());

var EstGraficoQualiBarrasMultiplasComponent = /** @class */ (function () {
    function EstGraficoQualiBarrasMultiplasComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = false;
        this.chartColors = ['#FFFF00', '#424242', '#F44336', '#0000FF', '#008000', '#8B4513', '#800080', '#FF8000'];
        this.title = 'Produção agrícola por região, no ano de 2019, em milhões de toneladas';
        this.fonteDados = 'Dados Fictícios';
        this.qtdTotal = 0;
        this.qtdTotalSeries = [];
        //Variáveis para pegar os nomes básicos das duas Variáveis
        this.classifVar1Input = 'Regiões';
        this.classifVar2Input = 'Produtos';
        //Campos para pegar os valores do Input
        this.classifVarVal1Input = "Norte - Nordeste - Centro Oeste - Sudeste - Sul";
        this.classifVarVal2Input = "Grãos - Frutas - Legumes - Outros";
        //Vetores para os valores digitados
        this.classifVarVal1 = ["Norte", "Nordeste", "Centro Oeste", "Sudeste", "Sul"];
        this.classifVarVal2 = ["Grãos", "Frutas", "Legumes", "Outros"];
        this.inputSeries = "";
        this.chartSeries = [
            {
                name: "Grãos",
                data: [1.5, 2.4, 41, 64, 22]
            },
            {
                name: "Frutas",
                data: [44, 55, 41, 64, 22]
            },
            {
                name: "Legumes",
                data: [53, 32, 33, 52, 13]
            },
            {
                name: "Outros",
                data: [44, 55, 41, 64, 22]
            },
        ];
        this.chartDataSeries = ["1.5 - 2.4 - 41 - 64 - 22",
            "44 - 55 - 41 - 64 - 22",
            "53 - 32 - 33 - 52 - 13",
            "44 - 55 - 41 - 64 - 22"
        ];
        this.series = this.chartSeries;
    }
    EstGraficoQualiBarrasMultiplasComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
        this.chartOptions = {
            series: this.series,
            chart: {
                type: "bar",
                height: 650,
                width: "100%",
            },
            title: {
                text: this.title,
                align: "center",
            },
            colors: this.chartColors,
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: "15px",
                    colors: ["#fff"]
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ["#fff"]
            },
            xaxis: {
                categories: this.classifVarVal1
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        this.sumQtdSeries();
    };
    EstGraficoQualiBarrasMultiplasComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQualiBarrasMultiplasComponent.prototype.sumQtdSeries = function () {
        this.qtdTotalSeries = [];
        var soma;
        var _loop_1 = function (index) {
            soma = 0;
            this_1.chartSeries.forEach(function (element) {
                soma += element.data[index];
            });
            this_1.qtdTotalSeries.push(soma);
        };
        var this_1 = this;
        for (var index = 0; index < this.classifVarVal1.length; index++) {
            _loop_1(index);
        }
        //console.log(this.qtdTotalSeries);
    };
    EstGraficoQualiBarrasMultiplasComponent.prototype.updateChart = function () {
        //if (this.noError && !(this.errorInput)) {
        this.removeElements();
        this.chartOptions = {
            series: this.series,
            chart: {
                type: "bar",
                height: 600,
                width: "100%",
            },
            title: {
                text: this.title,
                align: "center",
            },
            colors: this.chartColors,
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: "15px",
                    colors: ["#fff"]
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ["#fff"]
            },
            xaxis: {
                categories: this.classifVarVal1
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        //}
    };
    EstGraficoQualiBarrasMultiplasComponent.prototype.updateClassifVarVal1 = function () {
        this.classifVarVal1 = [];
        this.classifVarVal1 = this.classifVarVal1Input.split('-');
        this.updateChart();
    };
    EstGraficoQualiBarrasMultiplasComponent.prototype.updateClassifVarVal2 = function () {
        this.classifVarVal2 = [];
        this.classifVarVal2 = this.classifVarVal2Input.split('-');
        this.convertToChartSeries();
        this.sumQtdSeries();
        this.updateChart();
    };
    EstGraficoQualiBarrasMultiplasComponent.prototype.convertToChartSeries = function () {
        this.series = [];
        this.inputSeries = "";
        var copyOfChartSeries = this.chartSeries;
        this.chartSeries = [];
        for (var index = 0; index < this.classifVarVal2.length; index++) {
            var seri = new Series();
            if (copyOfChartSeries[index] != undefined) {
                seri.name = this.classifVarVal2[index];
                seri.data = copyOfChartSeries[index].data;
                this.series.push(seri);
                this.chartSeries.push(seri);
            }
            else {
                seri.name = this.classifVarVal2[index];
                seri.data = [];
                var valor = 10;
                this.inputSeries += valor;
                seri.data.push(valor);
                for (var index_1 = 1; index_1 < this.classifVarVal1.length; index_1++) {
                    valor += 10;
                    seri.data.push(valor);
                    this.inputSeries += " - " + valor;
                    //console.log("Valor:", valor, " i: ", index);
                }
                this.series.push(seri);
                this.chartSeries.push(seri);
                this.chartDataSeries.push(this.inputSeries);
            }
        }
    };
    EstGraficoQualiBarrasMultiplasComponent.prototype.updateChartSeries = function (index) {
        this.series[index].data = this.chartDataSeries[index].split('-').map(function (item) {
            return Number(item);
        });
        this.sumQtdSeries();
        this.updateChart();
    };
    /**
     * Método para colocar as inicializações dos vetores da tela
     */
    EstGraficoQualiBarrasMultiplasComponent.prototype.initializeArrays = function () {
    };
    EstGraficoQualiBarrasMultiplasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quali-barras-multiplas',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQualiBarrasMultiplasComponent);
    return EstGraficoQualiBarrasMultiplasComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Barras</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Nome da Variável: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\" [(ngModel)]=\"nomeVariavel\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Variáveis qualitativas: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - as palavras\"\r\n          [(ngModel)]=\"varQualInput\" (ngModelChange)=\"changeVarQual()\">\r\n        <est-form-msg-error [mostrarErro]=\"errorInputVar\"\r\n          msgErro=\"O número de variáveis deve ser igual ao do campo quantidades\">\r\n        </est-form-msg-error>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Quantidades: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - as palavras\"\r\n          [(ngModel)]=\"quantInput\" (ngModelChange)=\"changeQuant()\">\r\n        <est-form-msg-error [mostrarErro]=\"errorInputQtd\"\r\n          msgErro=\"O número de quantidades deve ser igual ao do campo variáveis\">\r\n        </est-form-msg-error>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Entradas -->\r\n      <div class=\" mt-4\">\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n          O número de n variáveis deve ser menor que <b>10</b>.\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <table class=\"table\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th scope=\"col\">{{nomeVariavel}}</th>\r\n                      <th scope=\"col\">Frequência (fi)</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\"table-light\" *ngFor=\"let element of varQual; let i = index\" style=\"text-align: center;\">\r\n                      <td>{{element}}</td>\r\n                      <td>{{quantidade[i]}}</td>\r\n                    </tr>\r\n                    <tr class=\"table-info\" style=\"text-align: center;\">\r\n                      <th scope=\"row\">Total</th>\r\n                      <td>{{qtdTotal}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O gráfico de barras apresenta dados categorizados em barras retangulares horizontais\r\n      nos quais os retângulos correspondentes a cada categoria é proporcional ao número de\r\n      observações na respectiva categoria. O gráfico de barras é utilizado para realizar\r\n      comparações entre as categorias de uma variável qualitativa.\r\n    </p>\r\n    <hr>\r\n\r\n    <!-- Exemplo -->\r\n    <div *ngFor=\"let varQ of varQual; let i = index\" class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n          [attr.data-target]=\"'#collapsePrincipal' + i\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              [attr.data-target]=\"'#collapsePrincipal' + i\" aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n              {{varQual[i]}} = <ng-katex class=\"explicacao\" equation=\" {{quantidade[i]}}\">\r\n              </ng-katex> Unidades\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              [attr.data-target]=\"'#collapsePrincipal' + i\"></i>\r\n          </h2>\r\n        </div>\r\n        <div [attr.id]=\"'collapsePrincipal' + i\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{  \r\n                      \\begin{matrix}\r\n                          Base = {{quantidade[i]}} \\text{ unidades} \\\\\r\n                          Altura = 1 \\text{ unidade}\r\n                       \\end{matrix} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Desenhamos um retângulo alinhado à esquerda, com base\r\n                    <ng-katex equation=\"\\color{blue}{ {{quantidade[i]}} }\"></ng-katex> unidades e\r\n                    altura 1.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQualiBarrasComponent; });
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

var EstGraficoQualiBarrasComponent = /** @class */ (function () {
    function EstGraficoQualiBarrasComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = false;
        this.varQual = ['Azul', 'Amarelo', 'Vermelho', 'Verde', 'Preto'];
        this.varQualInput = 'Azul - Amarelo - Vermelho - verde - Preto';
        this.quantidade = [12, 7, 4, 1, 7];
        this.quantInput = '12 - 7 - 4 - 1 - 7';
        this.title = 'Cor favorita dos alunos de 7° ano da escola XXY';
        this.fonteDados = 'Dados Fictícios';
        this.nomeVariavel = 'Cor';
        this.firstTime = true;
        this.qtdTotal = 0;
        this.button = [{ title: "Ver a tabela equivalente", route: "est_graficos_setores_tab" }];
    }
    EstGraficoQualiBarrasComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            series: [
                {
                    name: "quantidade",
                    data: this.quantidade
                }
            ],
            chart: {
                type: "bar",
                height: 400
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            title: {
                text: this.title,
                align: "center",
            },
            //Esse faz com que desapareça os números de dentro da barra
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: this.varQual
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        this.somaQuant();
    };
    /**
     * Método Chamado toda vez que o valor da variável varQualInput
     * for alterada
     */
    EstGraficoQualiBarrasComponent.prototype.changeVarQual = function () {
        this.cleanVariables();
        this.varQual = [];
        this.varQual = this.varQualInput.split('-');
        this.verifyInputs();
        this.updateChart();
    };
    EstGraficoQualiBarrasComponent.prototype.changeQuant = function () {
        this.cleanVariables();
        this.quantidade = [];
        var valores = this.quantInput.split('-');
        for (var index = 0; index < valores.length; index++) {
            this.quantidade[index] = Number(valores[index]);
        }
        this.verifyInputs();
        this.somaQuant();
        this.updateChart();
    };
    EstGraficoQualiBarrasComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQualiBarrasComponent.prototype.cleanVariables = function () {
        if (this.firstTime) {
            this.quantidade = [];
            this.varQual = [];
            this.firstTime = false;
        }
    };
    EstGraficoQualiBarrasComponent.prototype.somaQuant = function () {
        this.qtdTotal = this.quantidade.reduce(function (total, numero) {
            return total + numero;
        }, 0);
        //console.log(this.qtdTotal);
    };
    /**
    * Método responsável por controlar o
    * aparecimento das mensagens de erro no html
    */
    EstGraficoQualiBarrasComponent.prototype.verifyInputs = function () {
        if (this.quantidade.length <= 10 && this.varQual.length <= 10) {
            this.errorInput = false;
            if (this.quantidade.length < this.varQual.length) {
                this.errorInputVar = false;
                this.errorInputQtd = true;
                this.noError = false;
            }
            else if (this.quantidade.length > this.varQual.length) {
                this.errorInputQtd = false;
                this.errorInputVar = true;
                this.noError = false;
            }
            else {
                this.errorInputQtd = false;
                this.errorInputVar = false;
                this.noError = true;
            }
        }
        else {
            this.errorInput = true;
            this.errorInputQtd = false;
            this.errorInputVar = false;
        }
    };
    EstGraficoQualiBarrasComponent.prototype.updateChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: [
                    {
                        name: "quantidade",
                        data: this.quantidade
                    }
                ],
                chart: {
                    type: "bar",
                    height: 400
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                title: {
                    text: this.title,
                    align: "center",
                },
                //Esse faz com que desapareça os números de dentro da barra
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: this.varQual,
                }
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQualiBarrasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quali-barras',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQualiBarrasComponent);
    return EstGraficoQualiBarrasComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Colunas Múltiplas</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n      <!--Vou ter que usar essa forma de input, tenho que adequar as mensagens de erro-->\r\n      <!--Classificação da primeira variável-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Classificação da primeira variável: </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"classifVar1Input\">\r\n      </div>\r\n\r\n      <!--Nomes das variáveis-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Insira os/as <b>{{classifVar1Input}}:</b> </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"classifVarVal1Input\" (ngModelChange)=\"updateClassifVarVal1()\">\r\n      </div>\r\n\r\n      <!--Classificação das demais variáveis-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Classificação das demais variáveis </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"classifVar2Input\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Insira os/as <b>{{classifVar2Input}}:</b> </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"classifVarVal2Input\" (ngModelChange)=\"updateClassifVarVal2()\">\r\n      </div>\r\n\r\n      <!-- Aqui vai estar todos os inputs gerados dinâmicamente -->\r\n      <div *ngFor=\"let series of classifVarVal2; let i = index\" class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Insira a quantidade de <b>{{series}}</b></label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"chartDataSeries[i]\" (ngModelChange)=\"updateChartSeries(i)\">\r\n      </div>\r\n\r\n      <!--Fonte dos dados-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n      <!-- Entradas -->\r\n      <div class=\" mt-4\">\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n          O número de n variáveis deve ser menor que <b>10</b>.\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th class=\"table-secondary\" style=\"vertical-align: middle;\" scope=\"col\" rowspan=\"2\">{{classifVar1Input}}</th>\r\n                      <th class=\"table-warning\" scope=\"colgroup\" [attr.colspan]=\"classifVarVal2.length\">{{classifVar2Input}}</th>\r\n                      <th style=\"vertical-align: middle;\" scope=\"col\" rowspan=\"2\">Total</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\"table-warning\" scope=\"col\" *ngFor=\"let classDemaisVar of classifVarVal2\">\r\n                        {{classDemaisVar}}</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody style=\"text-align: center;\">\r\n                    <tr *ngFor=\"let variables of classifVarVal1; let ind = index\">\r\n                      <td>{{variables}}</td>\r\n                      <td *ngFor=\"let values of classifVarVal2; let i = index\">\r\n                        {{chartSeries[i].data[ind].toFixed(2) | number:'':'pt'}}</td>\r\n                      <td>{{qtdTotalSeries[ind].toFixed(2) | number:'':'pt'}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      São gráficos de colunas envolvendo múltiplas variáveis.\r\n    </p>\r\n    <hr>\r\n    <!-- Exemplo -->\r\n    <div *ngFor=\"let variaveis of classifVarVal1; let ind = index\" class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"color:rgb(10, 10, 179);\">{{variaveis}}</h3>\r\n      <div *ngFor=\"let valores of classifVarVal2; let i = index\" class=\"accordion\" id=\"accordionExample1\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n            [attr.data-target]=\"'#collapsePrincipal' + i + ind\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                [attr.data-target]=\"'#collapsePrincipal' + i + ind\" aria-expanded=\"false\"\r\n                aria-controls=\"collapsePrincipal\">\r\n                {{valores}} = <ng-katex class=\"explicacao\" equation=\" {{chartSeries[i].data[ind] | number:'':'pt'}}\">\r\n                </ng-katex> Unidades\r\n              </button>\r\n\r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                [attr.data-target]=\"'#collapsePrincipal' + i + ind\"></i>\r\n            </h2>\r\n          </div>\r\n          <div [attr.id]=\"'collapsePrincipal' + i + ind\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n            data-parent=\"#accordionExample1\">\r\n            <div class=\"card-body\">\r\n              <div class=\"panel-group\" id=\"accordion\">\r\n                <!--Passo 1-->\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" [attr.href]=\"'#collapseOne'+ i + ind\" class=\"\">\r\n                        <p>\r\n                          <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{  \r\n                      \\begin{matrix}\r\n                          Base = {{chartSeries[i].data[ind] | number:'':'pt'}} \\text{ unidades} \\\\\r\n                          Altura = 1 \\text{ unidade} \r\n                       \\end{matrix} }\">\r\n                          </ng-katex>\r\n                          <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseGeratriz\"></i>\r\n                        </p>\r\n                      </a>\r\n                    </h4>\r\n                  </div>\r\n                  <div [attr.id]=\"'collapseOne'+ i + ind\" class=\"panel-collapse collapse\">\r\n                    <div class=\"panel-body\">\r\n                      Desenhamos um retângulo alinhado a esquerda, medindo\r\n                      <ng-katex equation=\"\\color{blue}{ {{chartSeries[i].data[ind] | number:'':'pt'}} }\"></ng-katex>\r\n                      unidades de base e uma unidade de altura.\r\n                      Os dados são unidos e há um espaço entre as/os {{classifVar1Input}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div><br>\r\n    </div>\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Series */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQualiColunasMultiplasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Series = /** @class */ (function () {
    function Series() {
    }
    return Series;
}());

var EstGraficoQualiColunasMultiplasComponent = /** @class */ (function () {
    function EstGraficoQualiColunasMultiplasComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = false;
        this.chartColors = ['#FFFF00', '#424242', '#F44336', '#0000FF', '#008000', '#8B4513', '#800080', '#FF8000'];
        this.title = 'Produção agrícola por região, no ano de 2019, em milhões de toneladas';
        this.fonteDados = 'Dados Fictícios';
        this.qtdTotal = 0;
        this.qtdTotalSeries = [];
        //Variáveis para pegar os nomes básicos das duas Variáveis
        this.classifVar1Input = 'Regiões';
        this.classifVar2Input = 'Produtos';
        //Campos para pegar os valores do Input
        this.classifVarVal1Input = "Norte - Nordeste - Centro Oeste - Sudeste - Sul";
        this.classifVarVal2Input = "Grãos - Frutas - Legumes - Outros";
        //Vetores para os valores digitados
        this.classifVarVal1 = ["Norte", "Nordeste", "Centro Oeste", "Sudeste", "Sul"];
        this.classifVarVal2 = ["Grãos", "Frutas", "Legumes", "Outros"];
        this.inputSeries = "";
        this.chartSeries = [
            {
                name: "Grãos",
                data: [1.5, 2.4, 41, 64, 22]
            },
            {
                name: "Frutas",
                data: [44, 55, 41, 64, 22]
            },
            {
                name: "Legumes",
                data: [53, 32, 33, 52, 13]
            },
            {
                name: "Outros",
                data: [44, 55, 41, 64, 22]
            },
        ];
        this.chartDataSeries = ["1.5 - 2.4 - 41 - 64 - 22",
            "44 - 55 - 41 - 64 - 22",
            "53 - 32 - 33 - 52 - 13",
            "44 - 55 - 41 - 64 - 22"
        ];
        this.series = this.chartSeries;
    }
    EstGraficoQualiColunasMultiplasComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
        this.chartOptions = {
            series: this.series,
            chart: {
                type: "bar",
                height: 650,
                width: "100%",
            },
            title: {
                text: this.title,
                align: "center",
            },
            colors: this.chartColors,
            plotOptions: {
                bar: {
                    horizontal: false,
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
                colors: ["#fff"]
            },
            xaxis: {
                categories: this.classifVarVal1
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        this.sumQtdSeries();
    };
    EstGraficoQualiColunasMultiplasComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQualiColunasMultiplasComponent.prototype.sumQtdSeries = function () {
        this.qtdTotalSeries = [];
        var soma;
        var _loop_1 = function (index) {
            soma = 0;
            this_1.chartSeries.forEach(function (element) {
                soma += element.data[index];
            });
            this_1.qtdTotalSeries.push(soma);
        };
        var this_1 = this;
        for (var index = 0; index < this.classifVarVal1.length; index++) {
            _loop_1(index);
        }
        //console.log(this.qtdTotalSeries);
    };
    EstGraficoQualiColunasMultiplasComponent.prototype.updateChart = function () {
        //if (this.noError && !(this.errorInput)) {
        this.removeElements();
        this.chartOptions = {
            series: this.series,
            chart: {
                type: "bar",
                height: 650,
                width: "100%",
            },
            title: {
                text: this.title,
                align: "center",
            },
            colors: this.chartColors,
            plotOptions: {
                bar: {
                    horizontal: false,
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
                colors: ["#fff"]
            },
            xaxis: {
                categories: this.classifVarVal1
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        //}
    };
    EstGraficoQualiColunasMultiplasComponent.prototype.updateClassifVarVal1 = function () {
        this.classifVarVal1 = [];
        this.classifVarVal1 = this.classifVarVal1Input.split('-');
        this.updateChart();
    };
    EstGraficoQualiColunasMultiplasComponent.prototype.updateClassifVarVal2 = function () {
        this.classifVarVal2 = [];
        this.classifVarVal2 = this.classifVarVal2Input.split('-');
        this.convertToChartSeries();
        this.sumQtdSeries();
        this.updateChart();
    };
    EstGraficoQualiColunasMultiplasComponent.prototype.convertToChartSeries = function () {
        this.series = [];
        var copyOfChartSeries = this.chartSeries;
        this.inputSeries = "";
        this.chartSeries = [];
        for (var index = 0; index < this.classifVarVal2.length; index++) {
            var seri = new Series();
            if (copyOfChartSeries[index] != undefined) {
                seri.name = this.classifVarVal2[index];
                seri.data = copyOfChartSeries[index].data;
                this.series.push(seri);
                this.chartSeries.push(seri);
            }
            else {
                seri.name = this.classifVarVal2[index];
                seri.data = [];
                var valor = 10;
                this.inputSeries += valor;
                seri.data.push(valor);
                for (var index_1 = 1; index_1 < this.classifVarVal1.length; index_1++) {
                    valor += 10;
                    seri.data.push(valor);
                    this.inputSeries += " - " + valor;
                    //console.log("Valor:", valor, " i: ", index);
                }
                this.series.push(seri);
                this.chartSeries.push(seri);
                this.chartDataSeries.push(this.inputSeries);
            }
        }
    };
    EstGraficoQualiColunasMultiplasComponent.prototype.updateChartSeries = function (index) {
        this.series[index].data = this.chartDataSeries[index].split('-').map(function (item) {
            return Number(item);
        });
        this.sumQtdSeries();
        this.updateChart();
    };
    /**
     * Método para colocar as inicializações dos vetores da tela
     */
    EstGraficoQualiColunasMultiplasComponent.prototype.initializeArrays = function () {
    };
    EstGraficoQualiColunasMultiplasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quali-colunas-multiplas',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQualiColunasMultiplasComponent);
    return EstGraficoQualiColunasMultiplasComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Colunas</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Nome da Variável: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\" [(ngModel)]=\"nomeVariavel\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Variáveis qualitativas: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - as palavras\"\r\n          [(ngModel)]=\"varQualInput\" (ngModelChange)=\"changeVarQual()\">\r\n        <est-form-msg-error [mostrarErro]=\"errorInputVar\"\r\n          msgErro=\"O número de variáveis deve ser igual ao do campo quantidades\">\r\n        </est-form-msg-error>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Quantidades: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - as palavras\"\r\n          [(ngModel)]=\"quantInput\" (ngModelChange)=\"changeQuant()\">\r\n        <est-form-msg-error [mostrarErro]=\"errorInputQtd\"\r\n          msgErro=\"O número de quantidades deve ser igual ao do campo variáveis\">\r\n        </est-form-msg-error>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Entradas -->\r\n      <div class=\" mt-4\">\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n          O número de n variáveis deve ser menor que <b>10</b>.\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <table class=\"table\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th scope=\"col\">{{nomeVariavel}}</th>\r\n                      <th scope=\"col\">Frequência (fi)</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\"table-light\" *ngFor=\"let element of varQual; let i = index\" style=\"text-align: center;\">\r\n                      <td>{{element}}</td>\r\n                      <td>{{quantidade[i]}}</td>\r\n                    </tr>\r\n                    <tr class=\"table-info\" style=\"text-align: center;\">\r\n                      <th scope=\"row\">Total</th>\r\n                      <td>{{qtdTotal}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O gráfico de colunas apresenta dados categorizados em barras retangulares\r\n      verticais nos quais os retângulos correspondentes a cada categoria é proporcional\r\n      ao número de observações na respectiva categoria. O gráfico de colunas é utilizado\r\n      para realizar comparações entre as categorias de uma variável qualitativa ou\r\n      quantitativa discreta.\r\n    </p>\r\n    <hr>\r\n\r\n    <!-- Exemplo -->\r\n    <div *ngFor=\"let varQ of varQual; let i = index\" class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n          [attr.data-target]=\"'#collapsePrincipal' + i\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              [attr.data-target]=\"'#collapsePrincipal' + i\" aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n              {{varQual[i]}} = <ng-katex class=\"explicacao\" equation=\" {{quantidade[i]}}\">\r\n              </ng-katex> Unidades\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              [attr.data-target]=\"'#collapsePrincipal' + i\"></i>\r\n          </h2>\r\n        </div>\r\n        <div [attr.id]=\"'collapsePrincipal' + i\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{  \r\n                      \\begin{matrix}\r\n                          Base = 1 \\text{ unidade} \\\\\r\n                          Altura = {{quantidade[i]}} \\text{ unidades}\r\n                       \\end{matrix} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Desenhamos um retângulo alinhado abaixo, medindo uma unidade de base e\r\n                    <ng-katex equation=\"\\color{blue}{ {{quantidade[i]}} }\"></ng-katex> unidades de\r\n                    altura.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQualiColunasComponent; });
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

var EstGraficoQualiColunasComponent = /** @class */ (function () {
    function EstGraficoQualiColunasComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = false;
        this.varQual = ['Azul', 'Amarelo', 'Vermelho', 'Verde', 'Preto'];
        this.varQualInput = 'Azul - Amarelo - Vermelho - verde - Preto';
        this.quantidade = [12, 7, 4, 1, 7];
        this.quantInput = '12 - 7 - 4 - 1 - 7';
        this.title = 'Cor favorita dos alunos de 7° ano da escola XXY';
        this.fonteDados = 'Dados Fictícios';
        this.nomeVariavel = 'Cor';
        this.firstTime = true;
        this.qtdTotal = 0;
        this.button = [{ title: "Ver a tabela equivalente", route: "est_graficos_setores_tab" }];
    }
    EstGraficoQualiColunasComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            series: [
                {
                    name: "quantidade",
                    data: this.quantidade
                }
            ],
            chart: {
                height: 350,
                type: "bar",
            },
            colors: [
                "#008FFB",
            ],
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true
                }
            },
            title: {
                text: this.title,
                align: "center",
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            xaxis: {
                categories: this.varQual,
                labels: {
                    style: {
                        fontSize: "12px"
                    }
                }
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        this.somaQuant();
    };
    /**
     * Método Chamado toda vez que o valor da variável varQualInput
     * for alterada
     */
    EstGraficoQualiColunasComponent.prototype.changeVarQual = function () {
        this.cleanVariables();
        this.varQual = [];
        this.varQual = this.varQualInput.split('-');
        this.verifyInputs();
        this.updateChart();
    };
    EstGraficoQualiColunasComponent.prototype.changeQuant = function () {
        this.cleanVariables();
        this.quantidade = [];
        var valores = this.quantInput.split('-');
        for (var index = 0; index < valores.length; index++) {
            this.quantidade[index] = Number(valores[index]);
        }
        this.verifyInputs();
        this.somaQuant();
        this.updateChart();
    };
    EstGraficoQualiColunasComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQualiColunasComponent.prototype.cleanVariables = function () {
        if (this.firstTime) {
            this.quantidade = [];
            this.varQual = [];
            this.firstTime = false;
        }
    };
    EstGraficoQualiColunasComponent.prototype.somaQuant = function () {
        this.qtdTotal = this.quantidade.reduce(function (total, numero) {
            return total + numero;
        }, 0);
        //console.log(this.qtdTotal);
    };
    /**
    * Método responsável por controlar o
    * aparecimento das mensagens de erro no html
    */
    EstGraficoQualiColunasComponent.prototype.verifyInputs = function () {
        if (this.quantidade.length <= 10 && this.varQual.length <= 10) {
            this.errorInput = false;
            if (this.quantidade.length < this.varQual.length) {
                this.errorInputVar = false;
                this.errorInputQtd = true;
                this.noError = false;
            }
            else if (this.quantidade.length > this.varQual.length) {
                this.errorInputQtd = false;
                this.errorInputVar = true;
                this.noError = false;
            }
            else {
                this.errorInputQtd = false;
                this.errorInputVar = false;
                this.noError = true;
            }
        }
        else {
            this.errorInput = true;
            this.errorInputQtd = false;
            this.errorInputVar = false;
        }
    };
    EstGraficoQualiColunasComponent.prototype.updateChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: [
                    {
                        name: "quantidade",
                        data: this.quantidade
                    }
                ],
                chart: {
                    height: 350,
                    type: "bar",
                },
                colors: [
                    "#008FFB",
                ],
                plotOptions: {
                    bar: {
                        columnWidth: "45%",
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                grid: {
                    show: false
                },
                xaxis: {
                    categories: this.varQual,
                    labels: {
                        style: {
                            fontSize: "12px"
                        }
                    }
                }
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQualiColunasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quali-colunas',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQualiColunasComponent);
    return EstGraficoQualiColunasComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Setores</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <!--Inputs-->\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Nome da Variável: </label>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"variável\"\r\n          [(ngModel)]=\"nomeVariavel\">\r\n      </div>\r\n\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Variáveis qualitativas:</label>\r\n        </div>\r\n        <div class=\"col mb-3\">\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - as palavras\"\r\n            [(ngModel)]=\"varQualInput\" (ngModelChange)=\"changeVarQual()\">\r\n          <est-form-msg-error class=\"mb-3\" style=\"margin-left: auto;\" [mostrarErro]=\"errorInputVar\"\r\n            msgErro=\"O número de variáveis deve ser igual ao do campo quantidades\">\r\n          </est-form-msg-error>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Quantidades: </label>\r\n        </div>\r\n        <div class=\"col mb-2\">\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n            [(ngModel)]=\"quantInput\" (ngModelChange)=\"changeQuant()\" aria-describedby=\"basic-addon1\">\r\n          <est-form-msg-error style=\"margin-left: auto;\" [mostrarErro]=\"errorInputQtd\"\r\n            msgErro=\"O número de quantidades deve ser igual ao do campo variáveis\">\r\n          </est-form-msg-error>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Entradas -->\r\n      <div class=\"mt-4\">\r\n        <div [className]=\"errorInput === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n          O número de n variáveis deve ser menor que <b>10</b>.\r\n        </div>\r\n        <!-- Gráfico -->\r\n        <div id=\"chart\" style=\"width: max-content;\"></div>\r\n      </div>\r\n\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <table class=\"table\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th scope=\"col\">{{nomeVariavel}}</th>\r\n                      <th scope=\"col\">Frequência (fi)</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\"table-light\" *ngFor=\"let element of varQual; let i = index\" style=\"text-align: center;\">\r\n                      <td>{{element}}</td>\r\n                      <td>{{quantidade[i]}}</td>\r\n                    </tr>\r\n                    <tr class=\"table-info\" style=\"text-align: center;\">\r\n                      <th scope=\"row\">Total</th>\r\n                      <td>{{qtdTotal}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O gráfico de setores, popularmente conhecido como gráfico de pizza, consiste\r\n      em apresentar informações na forma de setor circular. Para tanto, basta\r\n      considerar que 100% dos dados equivalem a um setor circular de 360° ou seja o\r\n      ângulo de cada setor circular corresponde a uma porcentagem dos dados presentes no nosso problema.\r\n    </p>\r\n    <hr>\r\n\r\n    <!-- Exemplo -->\r\n    <div *ngFor=\"let varQ of varQual; let i = index\" class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n          [attr.data-target]=\"'#collapsePrincipal' + i\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              [attr.data-target]=\"'#collapsePrincipal' + i\" aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n              {{varQual[i]}} <ng-katex class=\"explicacao\" equation=\" \\approx {{ (((quantidade[i] * 100)/qtdTotal).toFixed(1)) | number:'':'pt' }} \\% \r\n                           \\approx {{ (((quantidade[i] * 360)/qtdTotal).toFixed(1)) | number:'':'pt' }} \\degree\">\r\n              </ng-katex>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              [attr.data-target]=\"'#collapsePrincipal' + i\"></i>\r\n          </h2>\r\n        </div>\r\n        <div [attr.id]=\"'collapsePrincipal' + i\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <!--Passo 1-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{  \r\n                      \\begin{matrix}\r\n                          {{qtdTotal}} & \\text{------} & 100 \\% \\\\\r\n                          {{quantidade[i]}} & \\text{------} & x\r\n                       \\end{matrix} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Utilizamos regra de três para determinar o percentual correspondente à região\r\n                    em questão.\r\n                    <ul>\r\n                      <li>\r\n                        No lado esquerdo temos a quantidade total de dados(\r\n                        <ng-katex equation=\"\\color{red}{ {{qtdTotal}} }\"></ng-katex>) e a\r\n                        quantidade de dados da região em questão (<ng-katex\r\n                          equation=\"\\color{blue}{ {{quantidade[i]}} }\"></ng-katex>).\r\n                      </li>\r\n                      <li>\r\n                        No lado direito temos o percentual associado à quantidade total (100%) e o\r\n                        percentual que desejamos calcular (x).\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ {{qtdTotal}}x = {{quantidade[i]}}\\cdot 100\\% }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Multiplicando em X temos o resultado acima\r\n                    <ul>\r\n                      <li>\r\n                        Observe que as grandezas são diretamente proporcionais\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 3-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ x =  \\dfrac{ {{ quantidade[i] * 100}} }{ {{qtdTotal}} }   }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Após realizar a multiplicação no passo anterior, passamos o número\r\n                    <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ {{qtdTotal}} }\">\r\n                    </ng-katex> dividindo.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 4-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ x \\approx {{ (((quantidade[i] * 100)/qtdTotal).toFixed(1)) | number:'':'pt' }} \\% }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Efetuando a divisão obtemos o percentual equivalente.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 5-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{  \r\n                    \\begin{matrix}\r\n                        {{qtdTotal}} & \\text{------} & 100 \\degree \\\\\r\n                        {{quantidade[i]}} & \\text{------} & \\alpha\r\n                     \\end{matrix} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Utilizamos regra de três para determinar o percentual correspondente à região\r\n                    em questão.\r\n                    <ul>\r\n                      <li>\r\n                        No lado esquerdo temos a quantidade total de dados(\r\n                        <ng-katex equation=\"\\color{red}{ {{qtdTotal}} }\"></ng-katex>) e a\r\n                        quantidade de dados da região em questão\r\n                        (<ng-katex equation=\"\\color{blue}{ {{quantidade[i]}} }\"></ng-katex>).\r\n                      </li>\r\n                      <li>\r\n                        No lado direito temos os graus associados à quantidade total (360º)\r\n                        e os graus que desejamos calcular (<ng-katex equation=\"\\color{black}{ \\alpha }\"></ng-katex>).\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 6-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ {{qtdTotal}} \\alpha = {{quantidade[i]}}\\cdot 360\\degree }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Multiplicando em x temos o resultado acima.\r\n                    <ul>\r\n                      <li>\r\n                        Obeserve que as grandezas são diretamente proporcionais.\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 7-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ \\alpha =  \\dfrac{ {{ quantidade[i] * 360}} }{ {{qtdTotal}} }   }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Após realizar a multiplicação no passo anterior, passamos o número\r\n                    <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ {{qtdTotal}} }\">\r\n                    </ng-katex> dividindo.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <!--Passo 8-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEight\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ \\alpha \\approx {{ (((quantidade[i] * 360)/qtdTotal).toFixed(1)) | number:'':'pt' }} \\degree }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseEight\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Efetuando a divisão obtemos a abertura do ângulo.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQualiSetoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstGraficoQualiSetoresComponent = /** @class */ (function () {
    function EstGraficoQualiSetoresComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = true;
        this.chartColors = ['#F44336', '#E91E63', '#9C27B0', '#00FF7F',
            '#FFA500', '#1E90FF', '#008000',
            '#A0522D', '#FFFF00', '#A9A9A9'];
        this.varQual = ['Azul', 'Amarelo', 'Vermelho', 'Verde', 'Preto'];
        this.varQualInput = 'Azul - Amarelo - Vermelho - verde - Preto';
        this.quantidade = [12, 7, 4, 1, 7];
        this.quantInput = '12 - 7 - 4 - 1 - 7';
        this.title = 'Cor favorita dos alunos de 7° ano da escola XXY';
        this.fonteDados = 'Dados Fictícios';
        this.nomeVariavel = 'Cor';
        this.firstTime = true;
        this.qtdTotal = 0;
        //teste
        this.buttons = [
            { title: "Gráficos", route: "est_graficos" },
            { title: "Tabelas", route: "est_tabelas" }
        ];
    }
    EstGraficoQualiSetoresComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
        this.chartOptions = {
            series: this.quantidade,
            chart: {
                width: 420,
                type: "pie"
            },
            labels: this.varQual,
            colors: this.chartColors,
            responsive: [
                {
                    breakpoint: 360,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                }
            ],
            plotOptions: {
                pie: {},
            },
            title: {
                text: this.title,
                align: "center",
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        this.somaQuant();
    };
    /**
     * Método Chamado toda vez que o valor da variável varQualInput
     * for alterada
     */
    EstGraficoQualiSetoresComponent.prototype.changeVarQual = function () {
        this.cleanVariables();
        this.varQual = [];
        this.varQual = this.varQualInput.split('-');
        this.verifyInputs();
        this.updateChart();
    };
    EstGraficoQualiSetoresComponent.prototype.changeQuant = function () {
        this.cleanVariables();
        this.quantidade = [];
        var valores = this.quantInput.split('-');
        for (var index = 0; index < valores.length; index++) {
            this.quantidade[index] = Number(valores[index]);
        }
        this.verifyInputs();
        this.somaQuant();
        this.updateChart();
    };
    EstGraficoQualiSetoresComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQualiSetoresComponent.prototype.cleanVariables = function () {
        if (this.firstTime) {
            this.quantidade = [];
            this.varQual = [];
            this.firstTime = false;
        }
    };
    EstGraficoQualiSetoresComponent.prototype.somaQuant = function () {
        this.qtdTotal = this.quantidade.reduce(function (total, numero) {
            return total + numero;
        }, 0);
        //console.log(this.qtdTotal);
    };
    /**
  * Método responsável por controlar o
  * aparecimento das mensagens de erro no html
  */
    EstGraficoQualiSetoresComponent.prototype.verifyInputs = function () {
        if (this.quantidade.length <= 10 && this.varQual.length <= 10) {
            this.errorInput = false;
            if (this.quantidade.length < this.varQual.length) {
                this.errorInputVar = false;
                this.errorInputQtd = true;
                this.noError = false;
            }
            else if (this.quantidade.length > this.varQual.length) {
                this.errorInputQtd = false;
                this.errorInputVar = true;
                this.noError = false;
            }
            else {
                this.errorInputQtd = false;
                this.errorInputVar = false;
                this.noError = true;
            }
        }
        else {
            this.errorInput = true;
            this.errorInputQtd = false;
            this.errorInputVar = false;
        }
    };
    EstGraficoQualiSetoresComponent.prototype.updateChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: this.quantidade,
                chart: {
                    width: 400,
                    type: "pie"
                },
                labels: this.varQual,
                colors: this.chartColors,
                responsive: [
                    {
                        breakpoint: 360,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom"
                            },
                        },
                    }
                ],
                plotOptions: {},
                title: {
                    text: this.title,
                    align: "center",
                },
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQualiSetoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quali-setores',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQualiSetoresComponent);
    return EstGraficoQualiSetoresComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Colunas e Linhas</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <!--Inputs-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n            (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Selecione a medida:</label>\r\n        </div>\r\n        <div class=\"col mb-2\">\r\n          <select style=\"height: 90%\" class=\"form-control\" (click)=\"getMedida($event)\">\r\n            <option *ngFor=\"let medida of medidas; let i = index\" [value]=\"medida.nome\">{{ medida.nome }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Período: </label>\r\n        </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe os períodos pela letra a\"\r\n            [(ngModel)]=\"periodoInput\" (ngModelChange)=\"changePeriodo()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Nome da 1º variável: </label>\r\n        </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" [(ngModel)]=\"nomeVariavel1\"\r\n            aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Quantidades: </label>\r\n        </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n            [(ngModel)]=\"qtdVariavel1Input\" (ngModelChange)=\"changeQuant(1)\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Nome da 2º variável: </label>\r\n        </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" [(ngModel)]=\"nomeVariavel2\"\r\n            aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Quantidades: </label>\r\n        </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n            [(ngModel)]=\"qtdVariavel2Input\" (ngModelChange)=\"changeQuant(2)\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div><br><br><br><br>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                <table class=\"table table-borderless\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead style=\"text-align: center;\">\r\n                    <tr style=\"background-color: white;\">\r\n                      <th>&nbsp;</th>\r\n                      <th *ngFor=\"let medida of medidasVetChart; let i = index\" scope=\"col\">{{medida}}</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody style=\"text-align: center; border-right: 1px double black;\">\r\n                    <tr class=\"table-secondary\">\r\n                      <td style=\"border-right: 1.5px double black;\">{{nomeVariavel1}}</td>\r\n                      <td style=\"width: auto; border-top: 1.5px double black;\" *ngFor=\"let qtdVar1 of quantidadeVar1; let i = index\">\r\n                        {{qtdVar1}}</td>\r\n                    </tr>\r\n                    <tr style=\"background-color: white;\">\r\n                      <td style=\"width: auto; border-right: 1.5px double black;\">{{nomeVariavel2}}</td>\r\n                      <td style=\"width: auto; border-bottom: 1.5px double black;\" *ngFor=\"let qtdVar2 of quantidadeVar2; let i = index\">\r\n                        {{qtdVar2}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O gráfico de colunas e linhas pode ser utilizado quando queremos\r\n      relacionar duas variáveis. Neste gráfico apresentamos o gráfico de\r\n      colunas integrado ao gráfico de linhas.\r\n    </p>\r\n    <hr>\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQuantColunasELinhasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstGraficoQuantColunasELinhasComponent = /** @class */ (function () {
    function EstGraficoQuantColunasELinhasComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = true;
        this.title = 'Cor favorita dos alunos de 7° ano da escola XXY';
        this.fonteDados = 'Dados Fictícios';
        this.nomeVariavel1 = 'Lucro';
        this.nomeVariavel2 = 'Preço Unitário';
        this.qtdVariavel1Input = '550-600-500-400-420-480';
        this.qtdVariavel2Input = '205-250-271-302-351-470';
        this.quantidadeVar1 = [550, 600, 500, 400, 420, 480];
        this.quantidadeVar2 = [205, 250, 271, 302, 351, 470];
        this.firstTime = true;
        this.qtdTotal = 0;
        this.day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        this.month = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        this.datasSemanas = null;
        this.dataAtual = new Date;
        this.anos = [];
        this.medidasVetChart = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
        this.medidas = [{ nome: "Meses" }, { nome: "Dias" }, { nome: "Semanas" }, { nome: "Horas" }, { nome: "Anos" }];
        this.medidaAtual = 'Meses';
        this.periodoInput = 'Jan a Jun';
    }
    EstGraficoQuantColunasELinhasComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
        this.InicializeChart();
    };
    EstGraficoQuantColunasELinhasComponent.prototype.changeQuant = function (op) {
        if (op == 1) {
            this.quantidadeVar1 = [];
            var valores = this.qtdVariavel1Input.split('-');
            for (var index = 0; index < valores.length; index++) {
                this.quantidadeVar1.push(Number(valores[index]));
            }
        }
        else {
            this.quantidadeVar2 = [];
            var valores = this.qtdVariavel2Input.split('-');
            for (var index = 0; index < valores.length; index++) {
                this.quantidadeVar2.push(Number(valores[index]));
            }
        }
        this.selectMetodoMedida();
        this.updateChart();
    };
    EstGraficoQuantColunasELinhasComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQuantColunasELinhasComponent.prototype.updateChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: [
                    {
                        name: this.nomeVariavel1,
                        type: "column",
                        data: this.quantidadeVar1
                    },
                    {
                        name: this.nomeVariavel2,
                        type: "line",
                        data: this.quantidadeVar2
                    }
                ],
                chart: {
                    height: 350,
                    type: "line",
                    toolbar: {
                        tools: {
                            zoom: false,
                            zoomin: false,
                            zoomout: false,
                            pan: false,
                            reset: false
                        }
                    }
                },
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: this.title,
                    align: 'center',
                    floating: true
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                xaxis: {
                    type: "category",
                    categories: this.medidasVetChart,
                },
                yaxis: [
                    {},
                    {
                        opposite: true,
                    }
                ]
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQuantColunasELinhasComponent.prototype.InicializeChart = function () {
        this.chartOptions = {
            series: [
                {
                    name: this.nomeVariavel1,
                    type: "column",
                    data: this.quantidadeVar1
                },
                {
                    name: this.nomeVariavel2,
                    type: "line",
                    data: this.quantidadeVar2
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    tools: {
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false
                    }
                }
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: this.title,
                align: 'center'
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            xaxis: {
                type: "category",
                categories: this.medidasVetChart,
            },
            yaxis: [
                {},
                {
                    opposite: true,
                }
            ]
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
    };
    EstGraficoQuantColunasELinhasComponent.prototype.getWeeks = function () {
        //var teste = "8-Jun a 27-Jul";
        this.extractWeekPeriods();
        var dates = this.getDates(this.datasSemanas[0], this.datasSemanas[1]);
        //console.log(dates);
        this.createWeekPeriods(dates);
    };
    EstGraficoQuantColunasELinhasComponent.prototype.extractWeekPeriods = function () {
        this.datasSemanas = [];
        var semanas = this.periodoInput.split('a');
        var dataInicio = semanas[0].trim().split('-');
        var dataFim = semanas[1].trim().split('-');
        for (var index = 0; index <= this.month.length; index++) {
            if (dataInicio[1] == this.month[index]) {
                this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataInicio[0])));
            }
            if (dataFim[1] == this.month[index]) {
                this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataFim[0])));
            }
        }
    };
    /**
     * Método responsável por pegar os dias entre as duas datas de início da semana
     * @param startDate variável que contempla a data de início para a captura do período
     * @param endDate variável que contempla a data final para a captura do período
     */
    EstGraficoQuantColunasELinhasComponent.prototype.getDates = function (startDate, endDate) {
        var dates = [], currentDate = startDate, addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= endDate) {
            dates.push(currentDate);
            //console.log(currentDate.getMonth().toString());
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
    ;
    /**
     * Pega todos os dias presentes entre a semana de início e fim e organiza
     * de modo a pegar as datas de 7 em 7 dias, ou seja a cada uma semana, para então
     * poderem ser utilizadas no gráfico. Calcula também quantas semanas o período vai ter
     * @param period variável que contem o período completo(todos os dias) entre a semana de início e fim
     */
    EstGraficoQuantColunasELinhasComponent.prototype.createWeekPeriods = function (period) {
        this.medidasVetChart = [];
        for (var index = 0; index < period.length; index++) {
            if (index % 7 == 0) {
                this.medidasVetChart.push(String(period[index].getDate()) + "/" + this.getMes(period[index].getMonth()));
            }
        }
    };
    // ------------------------------ Anos
    EstGraficoQuantColunasELinhasComponent.prototype.getYears = function () {
        //var teste = "2018 a 2020";
        //var anos = teste.split('a');
        var anos = this.periodoInput.split('a');
        var anoInicio = Number(anos[0].trim());
        var anoFim = Number(anos[1].trim());
        this.createYearsPeriods(anoInicio, anoFim);
    };
    EstGraficoQuantColunasELinhasComponent.prototype.createYearsPeriods = function (anoI, anoF) {
        this.medidasVetChart = [];
        for (var i = Math.min(anoI, anoF); anoI >= 0 && anoF >= 0 && i <= Math.max(anoI, anoF); i++) {
            this.medidasVetChart.push(String(i));
        }
    };
    // ------------------------------ Anos
    // ------------------------------- Meses
    EstGraficoQuantColunasELinhasComponent.prototype.getMonths = function () {
        //var teste = "Jul a Set";
        ///var meses = teste.split('a');
        var meses = this.periodoInput.split(' a');
        var mesInicio = String(meses[0].trim());
        var mesFim = String(meses[1].trim());
        this.createMonthPeriods(mesInicio, mesFim);
    };
    EstGraficoQuantColunasELinhasComponent.prototype.createMonthPeriods = function (mesI, mesF) {
        this.medidasVetChart = [];
        var indexMesI = this.month.indexOf(mesI);
        var indexMesF = this.month.indexOf(mesF);
        this.medidasVetChart = this.month.slice(indexMesI, indexMesF + 1);
    };
    EstGraficoQuantColunasELinhasComponent.prototype.getMes = function (indexOfMonth) {
        return this.month[indexOfMonth];
    };
    // ------------------------------- FIM Meses
    // ------------------------------- Dias
    EstGraficoQuantColunasELinhasComponent.prototype.getDays = function () {
        this.extractDaysPeriods();
        var dates = this.getDates(this.datasSemanas[0], this.datasSemanas[1]);
        this.createDaysPeriods(dates);
    };
    EstGraficoQuantColunasELinhasComponent.prototype.extractDaysPeriods = function () {
        this.datasSemanas = [];
        var dias = this.periodoInput.split(' a');
        var dataInicio = dias[0].trim().split('-');
        var dataFim = dias[1].trim().split('-');
        for (var index = 0; index <= this.month.length; index++) {
            if (dataInicio[1] == this.month[index]) {
                this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataInicio[0])));
            }
            if (dataFim[1] == this.month[index]) {
                this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataFim[0])));
            }
        }
    };
    EstGraficoQuantColunasELinhasComponent.prototype.createDaysPeriods = function (period) {
        this.medidasVetChart = [];
        for (var index = 0; index < period.length; index++) {
            this.medidasVetChart.push(String(period[index].getDate()) + "/" + this.getMes(period[index].getMonth()));
        }
    };
    // ------------------------------- FIM Dias
    // ------------------------------- Horas
    EstGraficoQuantColunasELinhasComponent.prototype.getHours = function () {
        //var teste = "Jul a Set";
        ///var meses = teste.split('a');
        var horas = this.periodoInput.split('a');
        var horaInicio = String(horas[0].trim());
        var horaFim = String(horas[1].trim());
        this.createHoursPeriods(horaInicio, horaFim);
    };
    EstGraficoQuantColunasELinhasComponent.prototype.createHoursPeriods = function (horaI, horaF) {
        this.medidasVetChart = [];
        var horaFinal = Number(horaF);
        var contador = Number(horaI);
        while (contador <= horaFinal) {
            this.medidasVetChart.push(contador + " h");
            contador++;
        }
    };
    // ------------------------------- FIM Horas
    EstGraficoQuantColunasELinhasComponent.prototype.getMedida = function (event) {
        this.medidaAtual = event.target.value;
        if (this.medidaAtual == "Horas") {
            this.periodoInput = '1 a 10';
            this.getHours();
        }
        else if (this.medidaAtual == "Dias") {
            this.periodoInput = '10-Jun a 15-Jun';
            this.getDays();
        }
        else if (this.medidaAtual == "Semanas") {
            this.periodoInput = '8-Jun a 27-Jul';
            this.getWeeks();
        }
        else if (this.medidaAtual == "Meses") {
            this.periodoInput = 'Jan a Jun';
            this.getMonths();
        }
        else if (this.medidaAtual == "Anos") {
            this.periodoInput = '2000 a 2005';
            this.getYears();
        }
        this.updateChart();
    };
    EstGraficoQuantColunasELinhasComponent.prototype.selectMetodoMedida = function () {
        if (this.medidaAtual == "Horas") {
            this.getHours();
        }
        else if (this.medidaAtual == "Dias") {
            this.getDays();
        }
        else if (this.medidaAtual == "Semanas") {
            this.getWeeks();
        }
        else if (this.medidaAtual == "Meses") {
            this.getMonths();
        }
        else if (this.medidaAtual == "Anos") {
            this.getYears();
        }
    };
    EstGraficoQuantColunasELinhasComponent.prototype.changePeriodo = function () {
        this.selectMetodoMedida();
        this.updateChart();
    };
    EstGraficoQuantColunasELinhasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quant-colunas-e-linhas',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQuantColunasELinhasComponent);
    return EstGraficoQuantColunasELinhasComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Colunas</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Nome da Variável: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Variável\" [(ngModel)]=\"nomeVariavel\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Insira os(as) <b>{{nomeVariavel}}</b> :</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n          [(ngModel)]=\"varQuantInput\" (ngModelChange)=\"changeVarQuant()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <table class=\"table\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th scope=\"col\">{{nomeVariavel}}</th>\r\n                      <th scope=\"col\">Frequência (fi)</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\"table-light\" *ngFor=\"let element of varQuant; let i = index\" style=\"text-align: center;\">\r\n                      <td>{{element}}</td>\r\n                      <td>{{frequenciaAbs[i]}}</td>\r\n                    </tr>\r\n                    <tr class=\"table-info\" style=\"text-align: center;\">\r\n                      <th scope=\"row\">\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ \\Sigma }\">\r\n                        </ng-katex>\r\n                      </th>\r\n                      <td>{{qtdTotal}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O gráfico de colunas apresenta dados categorizados em barras retangulares\r\n      verticais nos quais os retângulos correspondentes a cada categoria é proporcional\r\n      ao número de observações na respectiva categoria. O gráfico de colunas é utilizado\r\n      para realizar comparações entre as categorias de uma variável qualitativa ou\r\n      quantitativa discreta.\r\n    </p>\r\n    <hr>\r\n\r\n    <!-- Exemplo -->\r\n    <div *ngFor=\"let varQ of varQuant; let i = index\" class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n          [attr.data-target]=\"'#collapsePrincipal' + i\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              [attr.data-target]=\"'#collapsePrincipal' + i\" aria-expanded=\"false\" aria-controls=\"collapsePrincipal\">\r\n              {{varQuant[i]}} = <ng-katex class=\"explicacao\" equation=\" {{frequenciaAbs[i]}}\">\r\n              </ng-katex> Unidades\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              [attr.data-target]=\"'#collapsePrincipal' + i\"></i>\r\n          </h2>\r\n        </div>\r\n        <div [attr.id]=\"'collapsePrincipal' + i\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <h5><b>O número {{varQuant[i]}} se repete {{frequenciaAbs[i]}} vezes</b></h5>\r\n            <p>Primeiramente verificamos quantas vezes o número {{varQuant[i]}} se repete</p>\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <hr>\r\n              <!--Passo 2-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" class=\"\">\r\n                      <p>\r\n                        <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{  \r\n                                    \\begin{matrix}\r\n                                        Base = 1 \\text{ unidade} \\\\\r\n                                        Altura = {{frequenciaAbs[i]}} \\text{ unidades}\r\n                                     \\end{matrix} }\">\r\n                        </ng-katex>\r\n                        <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                          data-target=\"#collapseGeratriz\"></i>\r\n                      </p>\r\n                    </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    Desenhamos um retângulo alinhado abaixo, medindo uma unidade de base e\r\n                    <ng-katex equation=\"\\color{blue}{ {{frequenciaAbs[i]}} }\"></ng-katex> unidades de\r\n                    altura.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQuantColunasComponent; });
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

var EstGraficoQuantColunasComponent = /** @class */ (function () {
    function EstGraficoQuantColunasComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = true;
        this.varQuant = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        this.varQuantInput = '7-8-5-8-4-5-7-9-10-1-1-2-3-4-3-1-9-5-4-6-8';
        this.quantidade = [7, 8, 5, 8, 4, 5, 7, 9, 10, 1, 1, 2, 3, 4, 3, 1, 9, 5, 4, 6, 8];
        this.frequenciaAbs = [3, 1, 2, 3, 3, 1, 2, 3, 2, 1];
        this.numerosRep = null;
        this.title = 'Notas da turma XY na avaliação I de Cálculo';
        this.fonteDados = 'Dados Fictícios';
        this.nomeVariavel = 'Notas';
        this.firstTime = true;
        this.qtdTotal = 0;
    }
    EstGraficoQuantColunasComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            series: [
                {
                    name: this.nomeVariavel,
                    data: this.frequenciaAbs
                }
            ],
            chart: {
                height: 350,
                type: "bar",
            },
            colors: [
                "#008FFB",
            ],
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true
                }
            },
            title: {
                text: this.title,
                align: "center",
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            xaxis: {
                categories: this.varQuant,
                labels: {
                    style: {
                        fontSize: "12px"
                    }
                }
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        this.somaQuant();
    };
    /**
     * Método Chamado toda vez que o valor da variável varQuantInput
     * for alterada
     */
    EstGraficoQuantColunasComponent.prototype.changeVarQuant = function () {
        var valores = this.varQuantInput.split('-');
        this.quantidade = [];
        for (var index = 0; index < valores.length; index++) {
            this.quantidade.push(Number(valores[index]));
        }
        this.ordenaValores();
        this.contaNumerosRepetidos();
        this.extraiNumerosRepetidos();
        this.somaQuant();
        this.updateChart();
    };
    /**
   * Ordena os valores do menor para o maior
   */
    EstGraficoQuantColunasComponent.prototype.ordenaValores = function () {
        this.quantidade.sort(function (a, b) {
            return a - b;
        });
    };
    /**
     * Percorre o array quantidade contando os valores repetidos e os eliminando
     */
    EstGraficoQuantColunasComponent.prototype.contaNumerosRepetidos = function () {
        this.numerosRep = this.quantidade.reduce(function (object, item) {
            //console.log(object, item);
            if (!object[item]) {
                object[item] = 1;
            }
            else {
                object[item]++;
            }
            return object;
        }, {});
    };
    /**
     * Extrai do objeto dos números repetidos os seus valores e a quantidade de
     * vezes que se repetem, colocando esses dados em variáveis para a construção da tabela
     */
    EstGraficoQuantColunasComponent.prototype.extraiNumerosRepetidos = function () {
        this.varQuant = [];
        this.frequenciaAbs = [];
        for (var key in this.numerosRep) {
            this.varQuant.push(String(key));
            this.frequenciaAbs.push(this.numerosRep[key]);
        }
    };
    EstGraficoQuantColunasComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    /**
     * Soma todos os valores da coluna fi da tabela
     */
    EstGraficoQuantColunasComponent.prototype.somaQuant = function () {
        this.qtdTotal = this.frequenciaAbs.reduce(function (total, numero) {
            return total + numero;
        }, 0);
    };
    EstGraficoQuantColunasComponent.prototype.updateChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: [
                    {
                        name: this.nomeVariavel,
                        data: this.frequenciaAbs
                    }
                ],
                chart: {
                    height: 350,
                    type: "bar",
                },
                colors: [
                    "#008FFB",
                ],
                plotOptions: {
                    bar: {
                        columnWidth: "45%",
                        distributed: true
                    }
                },
                title: {
                    text: this.title,
                    align: "center",
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                grid: {
                    show: false
                },
                xaxis: {
                    categories: this.varQuant,
                    labels: {
                        style: {
                            fontSize: "12px"
                        }
                    }
                }
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQuantColunasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quant-colunas',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQuantColunasComponent);
    return EstGraficoQuantColunasComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Dispersão</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <!--Inputs-->\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título da Variável X: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"titleVarX\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Insira os Dados de X: </label>\r\n        </div>\r\n        <div class=\"col mb-2\">\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n            [(ngModel)]=\"dadosXInput\" (ngModelChange)=\"changeDadosX()\" aria-describedby=\"basic-addon1\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título da Variável Y: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"titleVarY\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Insira os Dados de Y: </label>\r\n        </div>\r\n        <div class=\"col mb-2\">\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n            [(ngModel)]=\"dadosYInput\" (ngModelChange)=\"changeDadosY()\" aria-describedby=\"basic-addon1\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Entradas -->\r\n      <div class=\"mt-4\">\r\n        <div [className]=\"equal === false ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n          O número de elementos de X deve ser igual ao de Y.\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <table class=\"table\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th scope=\"col\">{{titleVarX}}</th>\r\n                      <th scope=\"col\">{{titleVarY}}</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\"table-light\" *ngFor=\"let element of dadosX; let i = index\"\r\n                      style=\"text-align: center;\">\r\n                      <td>{{element}}</td>\r\n                      <td>{{dadosY[i]}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O gráfico de dispersão mostra as relações entre valores numéricos\r\n      em várias sequências de dados e/ou plotam dois grupos de números\r\n      como coordenadas XY.\r\n    </p>\r\n    <hr>\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n.scroll-center {\n  border: none;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  overflow-x: hidden !important; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQuantDispersaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Coordenada = /** @class */ (function () {
    function Coordenada(x, y) {
        this.x = x;
        this.y = y;
    }
    return Coordenada;
}());
var dadosXY = [];
var EstGraficoQuantDispersaoComponent = /** @class */ (function () {
    function EstGraficoQuantDispersaoComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = true;
        this.quantidade = [12, 7, 4, 1, 7];
        this.quantInput = '';
        this.title = 'Efeito da temperatura no desempenho do XX';
        this.fonteDados = 'Dados Fictícios';
        this.firstTime = true;
        this.qtdTotal = 0;
        /////////////////////////////
        this.titleVarX = 'Temperatura em °C';
        this.dadosXInput = '100 - 110 - 120 - 130 - 140 - 150';
        this.dadosX = [100, 110, 120, 130, 140, 150];
        this.titleVarY = 'Desempenho em litros (l)';
        this.dadosYInput = '45 - 51 - 54 - 61 - 66 - 70';
        this.dadosY = [45, 51, 54, 61, 66, 70];
        this.coodenada = [{ x: 100, y: 45 }, { x: 110, y: 51 }];
        this.equal = true;
    }
    EstGraficoQuantDispersaoComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
        this.initializeDadosXY();
        this.initializeChart();
    };
    EstGraficoQuantDispersaoComponent.prototype.initializeDadosXY = function () {
        var int1 = [100, 45];
        var int2 = [110, 51];
        var int3 = [120, 54];
        var int4 = [130, 61];
        var int5 = [140, 66];
        var int6 = [150, 70];
        dadosXY.push(int1);
        dadosXY.push(int2);
        dadosXY.push(int3);
        dadosXY.push(int4);
        dadosXY.push(int5);
        dadosXY.push(int6);
        console.log(JSON.stringify(dadosXY));
    };
    EstGraficoQuantDispersaoComponent.prototype.addCoordenadaIntoDadosXY = function () {
        this.coodenada = [];
        dadosXY = [];
        if (this.verifyInputsLength()) {
            for (var i = 0; i < this.dadosX.length; i++) {
                this.coodenada.push(new Coordenada(this.dadosX[i], this.dadosY[i]));
            }
            dadosXY = this.coodenada.map(Object.values);
            this.updateChart();
            //console.log(JSON.stringify(dadosXY))
        }
    };
    EstGraficoQuantDispersaoComponent.prototype.changeDadosX = function () {
        this.dadosX = [];
        var valores = this.dadosXInput.split('-');
        for (var index = 0; index < valores.length; index++) {
            this.dadosX[index] = Number(valores[index]);
        }
        this.addCoordenadaIntoDadosXY();
    };
    EstGraficoQuantDispersaoComponent.prototype.changeDadosY = function () {
        this.dadosY = [];
        var valores = this.dadosYInput.split('-');
        for (var index = 0; index < valores.length; index++) {
            this.dadosY[index] = Number(valores[index]);
        }
        this.addCoordenadaIntoDadosXY();
    };
    EstGraficoQuantDispersaoComponent.prototype.verifyInputsLength = function () {
        this.equal = this.dadosY.length == this.dadosX.length ? true : false;
        console.log("Booleano: ", this.equal);
        return this.equal;
    };
    EstGraficoQuantDispersaoComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    /**
  * Método responsável por controlar o
  * aparecimento das mensagens de erro no html
  
    verifyInputs() {
      if (this.quantidade.length <= 10 && this.varQual.length <= 10) {
        this.errorInput = false;
        if (this.quantidade.length < this.varQual.length) {
          this.errorInputVar = false;
          this.errorInputQtd = true;
          this.noError = false;
        } else if (this.quantidade.length > this.varQual.length) {
          this.errorInputQtd = false;
          this.errorInputVar = true;
          this.noError = false;
        } else {
          this.errorInputQtd = false;
          this.errorInputVar = false;
          this.noError = true;
        }
      } else {
        this.errorInput = true;
        this.errorInputQtd = false;
        this.errorInputVar = false;
      }
    }*/
    EstGraficoQuantDispersaoComponent.prototype.updateChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: [{
                        name: "SAMPLE A",
                        data: dadosXY
                    }],
                chart: {
                    height: 350,
                    type: 'scatter',
                    zoom: {
                        enabled: false,
                        type: 'xy'
                    }
                },
                title: {
                    text: "Efeito da temperatura no desempenho do XX",
                    align: 'center'
                },
                xaxis: {
                    title: {
                        text: "Temperatura em °C"
                    },
                    tickAmount: 10,
                    labels: {
                        formatter: function (val) {
                            return parseFloat(val).toFixed(1);
                        }
                    }
                },
                yaxis: {
                    tickAmount: 7,
                    title: {
                        text: "Desempenho em litros (l)",
                    }
                }
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQuantDispersaoComponent.prototype.initializeChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.chartOptions = {
                series: [{
                        name: "SAMPLE A",
                        data: dadosXY
                    }],
                chart: {
                    height: 350,
                    type: 'scatter',
                    zoom: {
                        enabled: false,
                        type: 'xy'
                    }
                },
                title: {
                    text: "Efeito da temperatura no desempenho do XX",
                    align: 'center'
                },
                xaxis: {
                    title: {
                        text: "Temperatura em °C"
                    },
                    tickAmount: 10,
                    labels: {
                        formatter: function (val) {
                            return parseFloat(val).toFixed(1);
                        }
                    }
                },
                yaxis: {
                    tickAmount: 7,
                    title: {
                        text: "Desempenho em litros (l)",
                    }
                }
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQuantDispersaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quant-dispersao',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQuantDispersaoComponent);
    return EstGraficoQuantDispersaoComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Histograma</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Dados: </label>\r\n        </div>\r\n        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\" [(ngModel)]=\"dadosBrutosInput\"\r\n          (ngModelChange)=\"changeDados()\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Alterar o Número de Classes:</label>\r\n        </div>\r\n        <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Classes\" [(ngModel)]=\"nClasses\"\r\n        (ngModelChange)=\"changeNClasses()\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito  -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th scope=\"col\">Lim. Inf</th>\r\n                      <th scope=\"col\">Lim. Sup</th>\r\n                      <th scope=\"col\">f</th>\r\n                      <th scope=\"col\">F</th>\r\n                      <th scope=\"col\">f%</th>\r\n                      <th scope=\"col\">F%</th>\r\n                      <th scope=\"col\">xi</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\"table-light\" *ngFor=\"let element of frequenciaAbs; let i = index\" style=\"text-align: center;\">\r\n                      <td>{{allIntervals[i]}}</td>\r\n                      <td>{{allIntervals[i+1]}}</td>\r\n                      <td>{{frequenciaAbs[i]}}</td>\r\n                      <td>{{frequenciaAbsAc[i]}}</td>\r\n                      <td>{{frequenciaRel[i]}}</td>\r\n                      <td>{{frequenciaRelAc[i]}}</td>\r\n                      <td>{{valorMed[i]}}</td>\r\n                    </tr>\r\n                    <tr class=\"table-info\" style=\"text-align: center;\">\r\n                      <th>&nbsp;</th>\r\n                      <th>&nbsp;</th>\r\n                      <td>{{n}}</td>\r\n                      <th>&nbsp;</th>\r\n                      <td>{{frequenciaRelAc[frequenciaRelAc.length - 1]}}</td>\r\n                      <th>&nbsp;</th>\r\n                      <th>&nbsp;</th>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O histograma é um gráfico de frequência que ilustra a distribuição\r\n      de determinada amostra ou população. Em um histograma, consideramos\r\n      que os dados estão divididos em intervalos de tamanhos iguais e verificamos\r\n      a frequência de cada intervalo.\r\n    </p>\r\n    <hr>\r\n\r\n    <p>\r\n      Para definir a amplitude do intervalo de frequências precisamos\r\n      realizar os seguintes cálculos:<br><br>\r\n\r\n      Número de elementos(n): {{n}}<br>\r\n      Mínimo(m): {{limiteInf}}<br>\r\n      Máximo(M): {{limiteSup}}\r\n    </p>\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDistribuicao\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseDistribuicao\" aria-expanded=\"false\" aria-controls=\"collapseDistribuicao\">\r\n                  Amplitude da Distribuição (A):\r\n                </button>\r\n    \r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseDistribuicao\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseDistribuicao\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <ul>\r\n                  <li>\r\n                    <ng-katex class=\"explicacao\" equation=\"A = \\color{red}{ M } \\color{black}{-} \\color{blue}{ m }\">\r\n                    </ng-katex>\r\n                  </li>\r\n                  <li>\r\n                    <ng-katex class=\"explicacao\"\r\n                      equation=\"A = \\color{red}{ {{limiteSup}} } \\color{black}{-} \\color{blue}{ {{limiteInf}} } = \\color{black}{ {{amplitudeTot}} }\">\r\n                    </ng-katex>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n            data-target=\"#collapseClasses\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseClasses\" aria-expanded=\"false\" aria-controls=\"collapseClasses\">\r\n                Número de Classes (c):\r\n              </button>\r\n  \r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseClasses\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseClasses\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n            data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <ul>\r\n                <li>\r\n                  <ng-katex class=\"explicacao\" equation=\"c = 1 + \\color{red}{ 3,333} \\color{black}{ \\cdot \\log(n)}\">\r\n                  </ng-katex>\r\n                </li>\r\n                <li>\r\n                  <ng-katex class=\"explicacao\"\r\n                    equation=\"c = 1 + \\color{red}{ 3,333} \\color{black}{ \\cdot \\log({{n}})} \\cong {{nClasses}}\">\r\n                  </ng-katex>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n          data-target=\"#collapseAmplClasse\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAmplClasse\" aria-expanded=\"false\" aria-controls=\"collapseAmplClasse\">\r\n              Amplitude da classe (a):\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAmplClasse\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseAmplClasse\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <ul>\r\n              <li>\r\n                <ng-katex class=\"explicacao\" equation=\"a = A \\div c\">\r\n                </ng-katex>\r\n              </li>\r\n              <li>\r\n                <ng-katex class=\"explicacao\" equation=\"a = {{amplitudeTot}} \\div {{nClasses}} \\cong {{intervaloCla}}\">\r\n                </ng-katex>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n      \r\n        \r\n        \r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n.scroll-center {\n  border: none;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  overflow-x: hidden !important; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TableElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQuantHistogramaComponent; });
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

var TableElements = /** @class */ (function () {
    function TableElements() {
    }
    return TableElements;
}());

var EstGraficoQuantHistogramaComponent = /** @class */ (function () {
    function EstGraficoQuantHistogramaComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = true;
        this.varQuant = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        this.varQuantInput = '7-8-5-8-4-5-7-9-10-1-1-2-3-4-3-1-9-5-4-6-8';
        this.quantidade = [7, 8, 5, 8, 4, 5, 7, 9, 10, 1, 1, 2, 3, 4, 3, 1, 9, 5, 4, 6, 8];
        this.title = 'Notas da turma XY na avaliação I de Cálculo';
        this.fonteDados = 'Dados Fictícios';
        this.firstTime = true;
        this.qtdTotal = 0;
        this.dadosBrutosInput = '3-3.6-3.8-3.9-4-4-4-4.2-4.5-4.7-5-5-5.1-5.4-5.7-5.8-5.8-5.8-5.9-5.9-6-6-6-6-6.1-6.3-6.3-6.3-6.5-6.5-6.7-6.8-6.8-6.9-7-7-7.2-7.2-7.2-7.3-7.4-7.5-7.6-7.6-7.8-8.2-8.6-8.8-9-9';
        this.dadosBrutos = [3, 3.6, 3.8, 3.9, 4, 4, 4, 4.2, 4.5, 4.7, 5, 5, 5.1, 5.4, 5.7, 5.8, 5.8, 5.8, 5.9, 5.9, 6, 6, 6, 6, 6.1, 6.3, 6.3, 6.3, 6.5, 6.5, 6.7, 6.8, 6.8, 6.9, 7, 7, 7.2, 7.2, 7.2, 7.3, 7.4, 7.5, 7.6, 7.6, 7.8, 8.2, 8.6, 8.8, 9, 9];
        this.limiteSup = 9;
        this.limiteInf = 3;
        this.amplitudeTot = 6;
        this.intervaloCla = 0.9;
        this.nClasses = 7;
        this.n = 50;
        this.numerosRep = null;
        this.allIntervals = [3, 3.9, 4.8, 5.7, 6.6, 7.5, 8.4, 9.3];
        this.tableElements = [];
        this.frequenciaAbs = [3, 7, 4, 16, 11, 5, 4];
        this.frequenciaAbsAc = [3, 10, 14, 30, 41, 46, 50];
        this.frequenciaRel = [6, 14, 8, 32, 22, 10, 8];
        this.frequenciaRelAc = [6, 20, 28, 60, 82, 92, 100];
        this.valorMed = [3.45, 4.35, 5.25, 6.15, 7.05, 7.95, 8.85];
    }
    EstGraficoQuantHistogramaComponent.prototype.ngOnInit = function () {
        this.InicializeChart();
    };
    EstGraficoQuantHistogramaComponent.prototype.changeDados = function () {
        var valor = this.dadosBrutosInput.split('-');
        this.n = valor.length;
        for (var index = 0; index < valor.length; index++) {
            this.dadosBrutos[index] = Number(valor[index]);
        }
        this.rol();
        this.amplitudeTotal();
        this.numeroClasses();
        this.intervaloClasses();
        this.contaNumerosRepetidos();
        this.formaIntervalos();
        this.frequenciaAbsoluta();
        this.frequenciaAbsolutaGrafico();
        this.frequenciaAcumulada();
        this.frequenciaRelativa();
        this.frequenciaRelativaAcumulada();
        this.valorMedio();
        this.updateChart();
    };
    EstGraficoQuantHistogramaComponent.prototype.formaIntervalos = function () {
        var tabela = null;
        var countInter = 0;
        this.allIntervals = [];
        this.tableElements = [];
        countInter = this.limiteInf + this.intervaloCla;
        this.allIntervals.push(this.limiteInf, countInter);
        for (var index = 0; index < this.nClasses; index++) {
            tabela = new TableElements();
            if (index == 0) {
                //this.intervalos[index] = this.limiteInf + " |----| " + countInter;
                tabela.intervalo = this.limiteInf + " |----> " + countInter;
                this.tableElements.push(tabela);
            }
            else {
                //this.intervalos[index] = countInter + " |----| " + (countInter + this.intervaloCla);
                tabela.intervalo = countInter + " |----> " + (countInter + this.intervaloCla);
                this.tableElements.push(tabela);
                countInter += this.intervaloCla;
                this.allIntervals.push((Number.isInteger(countInter)) ? countInter : parseFloat(countInter.toFixed(1)));
            }
        }
    };
    EstGraficoQuantHistogramaComponent.prototype.contaNumerosRepetidos = function () {
        this.numerosRep = [];
        this.numerosRep = this.dadosBrutos.reduce(function (object, item) {
            //console.log( object , item ); 
            if (!object[item]) {
                object[item] = 1;
            }
            else {
                object[item]++;
            }
            return object;
        }, {});
    };
    /**
   * Ordena os valores do menor para o maior
   */
    EstGraficoQuantHistogramaComponent.prototype.rol = function () {
        this.dadosBrutos.sort(function (a, b) {
            return a - b;
        });
        this.limiteInf = this.dadosBrutos[0];
        this.limiteSup = this.dadosBrutos[this.n - 1];
    };
    //////https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
    EstGraficoQuantHistogramaComponent.prototype.frequenciaAbsoluta = function () {
        var k = 0;
        var countRep = 0;
        for (var index = 0; index < this.allIntervals.length; index++) {
            countRep = 0;
            if (index + 1 != null) {
                for (var key in this.numerosRep) {
                    if (this.numerosRep.hasOwnProperty(key)) {
                        //A key retorna o número(o que está nos dados brutos) e aplicando ela no vetor 
                        //aparece quantas vezes o número repete 
                        k = Number(key);
                        if (k >= this.allIntervals[index] && k < this.allIntervals[index + 1]) {
                            countRep += this.numerosRep[key];
                            this.tableElements[index].frequenciaAbs = countRep;
                        }
                    }
                }
            }
        }
    };
    EstGraficoQuantHistogramaComponent.prototype.frequenciaAbsolutaGrafico = function () {
        this.frequenciaAbs = [];
        for (var freqAbs in this.tableElements) {
            if (Object.prototype.hasOwnProperty.call(this.tableElements, freqAbs)) {
                this.frequenciaAbs.push(this.tableElements[freqAbs].frequenciaAbs);
            }
        }
    };
    EstGraficoQuantHistogramaComponent.prototype.frequenciaAcumulada = function () {
        this.frequenciaAbsAc = [];
        var count = 0;
        this.frequenciaAbsAc.push(this.frequenciaAbs[0]);
        count = this.frequenciaAbsAc[0];
        for (var index = 1; index < this.frequenciaAbs.length; index++) {
            count += this.frequenciaAbs[index];
            this.frequenciaAbsAc.push(Number(count.toFixed(2)));
        }
    };
    EstGraficoQuantHistogramaComponent.prototype.frequenciaRelativa = function () {
        this.frequenciaRel = [];
        for (var index = 0; index < this.frequenciaAbs.length; index++) {
            this.frequenciaRel.push(Number(((this.frequenciaAbs[index] / this.n) * 100).toFixed(2)));
        }
    };
    EstGraficoQuantHistogramaComponent.prototype.frequenciaRelativaAcumulada = function () {
        this.frequenciaRelAc = [];
        var count = 0;
        this.frequenciaRelAc.push(this.frequenciaRel[0]);
        count = this.frequenciaRelAc[0];
        for (var index = 1; index < this.frequenciaRel.length; index++) {
            count += this.frequenciaRel[index];
            this.frequenciaRelAc.push(Number(count.toFixed(2)));
        }
    };
    EstGraficoQuantHistogramaComponent.prototype.valorMedio = function () {
        this.valorMed = [];
        var countValMed = 0;
        for (var index = 0; index < this.allIntervals.length; index++) {
            if (index != this.allIntervals.length - 1) {
                countValMed = Number((this.allIntervals[index] + this.allIntervals[index + 1]) / 2);
                this.valorMed.push((Number.isInteger(countValMed)) ? countValMed : parseFloat(countValMed.toFixed(2)));
            }
        }
    };
    EstGraficoQuantHistogramaComponent.prototype.amplitudeTotal = function () {
        this.amplitudeTot = this.limiteSup - this.limiteInf;
        //console.log("Amplitude total(At): ", this.amplitudeTot);
    };
    EstGraficoQuantHistogramaComponent.prototype.numeroClasses = function () {
        this.nClasses = Math.round(1 + (3.33 * (Math.log10(this.n))));
        //console.log("Número de Classes(c): ", this.nClasses);
    };
    EstGraficoQuantHistogramaComponent.prototype.intervaloClasses = function () {
        this.intervaloCla = (this.amplitudeTot / this.nClasses);
        this.intervaloCla = (Number.isInteger(this.intervaloCla)) ? this.intervaloCla : parseFloat(this.intervaloCla.toFixed(1));
        //console.log("Intevalos de Classe(i): ", this.intervaloCla);
    };
    /**
     * Essa Função por enquanto não se faz necessária, sua criação se deu em virtude o gráfico
     * estar arredondando os valores, mas consegui encontrar uma função dele para resolver o problema
     
    convertIntervals(){
      this.allIntervalsString = [];
      for (let index = 0; index < this.allIntervals.length; index++) {
        this.allIntervalsString.push(String(this.allIntervals[index]));
      }
    }*/
    EstGraficoQuantHistogramaComponent.prototype.changeNClasses = function () {
        this.intervaloClasses();
        this.contaNumerosRepetidos();
        this.formaIntervalos();
        this.frequenciaAbsoluta();
        this.frequenciaAbsolutaGrafico();
        this.frequenciaAcumulada();
        this.frequenciaRelativa();
        this.frequenciaRelativaAcumulada();
        this.valorMedio();
        this.updateChart();
    };
    EstGraficoQuantHistogramaComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQuantHistogramaComponent.prototype.updateChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: [{
                        name: "Quantidade",
                        data: this.frequenciaAbs
                    }],
                chart: {
                    type: "histogram",
                    height: 380,
                    foreColor: "#999",
                },
                title: {
                    text: this.title,
                    align: 'center',
                    style: {
                        color: '#000000'
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            hideOverflowingLabels: false
                        }
                    }
                },
                states: {
                    active: {
                        allowMultipleDataPointsSelection: true
                    }
                },
                xaxis: {
                    //offsetX: -50,
                    range: 2,
                    categories: this.allIntervals,
                    labels: {
                        formatter: function (val) {
                            return String((Number.isInteger(Number(val))) ? Number(val) : parseFloat(Number(val).toFixed(1)));
                        }
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    labels: {
                        offsetX: -5,
                        offsetY: -5
                    },
                },
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQuantHistogramaComponent.prototype.InicializeChart = function () {
        this.chartOptions = {
            series: [{
                    name: "Quantidade",
                    data: this.frequenciaAbs
                }],
            chart: {
                type: "histogram",
                height: 380,
                foreColor: "#999",
            },
            title: {
                text: this.title,
                align: 'center',
                style: {
                    color: '#000000'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        hideOverflowingLabels: false,
                    }
                }
            },
            states: {
                active: {
                    allowMultipleDataPointsSelection: true
                }
            },
            xaxis: {
                categories: this.allIntervals,
                labels: {
                    formatter: function (val) {
                        return String((Number.isInteger(Number(val))) ? Number(val) : parseFloat(Number(val).toFixed(1)));
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                tickAmount: 4,
                labels: {
                    offsetX: -5,
                    offsetY: -5
                },
            },
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
    };
    EstGraficoQuantHistogramaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quant-histograma',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQuantHistogramaComponent);
    return EstGraficoQuantHistogramaComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Gráfico de Linhas</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <!--Inputs-->\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"updateChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Selecione a medida:</label>\r\n        </div>\r\n        <div class=\"col-4 mb-3\">\r\n          <select class=\"form-control border-0 mb-0\" id=\"localChegada\" (click)=\"getMedida($event)\">\r\n            <option *ngFor=\"let medida of medidas; let i = index\" [value]=\"medida.nome\">{{ medida.nome }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Período: </label>\r\n        </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe os períodos pela letra a\"\r\n            [(ngModel)]=\"periodoInput\" (ngModelChange)=\"changePeriodo()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Quantidades: </label>\r\n        </div>\r\n        <div class=\"col mb-2\">\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n            [(ngModel)]=\"quantInput\" (ngModelChange)=\"changeQuant()\" aria-describedby=\"basic-addon1\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n\r\n      <div class=\"row col-12\">\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <table class=\"table\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th scope=\"col\">{{medidaAtual}}</th>\r\n                      <th scope=\"col\">Frequência (fi)</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\"table-light\" *ngFor=\"let element of medidasVetChart; let i = index\" style=\"text-align: center;\">\r\n                      <th scope=\"row\">{{element}}</th>\r\n                      <td>{{quantidade[i]}}</td>\r\n                    </tr>\r\n                    <tr class=\"table-info\" style=\"text-align: center;\">\r\n                      <th scope=\"row\">Total</th>\r\n                      <td>{{qtdTotal}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O gráfico de linhas pode exibir dados ao longo do tempo e é, portanto, ideal \r\n      para mostrar tendências em dados. Para construir este gráfico, associamos as \r\n      datas às quantidades e posteriormente unimos os pontos através de uma linha.\r\n    </p>\r\n    <hr>\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n.scroll-center {\n  border: none;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  overflow-x: hidden !important; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQuantLinhasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstGraficoQuantLinhasComponent = /** @class */ (function () {
    function EstGraficoQuantLinhasComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = true;
        this.quantidade = [205, 250, 271, 302, 351, 470, 718, 974];
        this.quantInput = '205 - 250 - 271 - 302 - 351 - 470 - 718 - 974';
        this.title = 'Número de Infectados pelo COVID-19 em Lages';
        this.fonteDados = 'Secretaria da Saúde - Município de Lages';
        this.firstTime = true;
        this.qtdTotal = 0;
        this.day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        this.month = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        this.datasSemanas = null;
        this.dataAtual = new Date;
        this.anos = [];
        this.medidasVetChart = ["13 h", "14 h", "15 h", "16 h", "17 h"];
        this.medidas = [{ nome: "Meses" }, { nome: "Dias" }, { nome: "Semanas" }, { nome: "Horas" }, { nome: "Anos" }];
        this.medidaAtual = 'Horas';
        this.periodoInput = 'Jan a Ago';
    }
    EstGraficoQuantLinhasComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
        this.chartOptions = {
            series: [
                {
                    name: "Desktops",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                }
            ],
            chart: {
                type: "line",
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: this.title,
                align: "center"
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep"
                ]
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
        this.somaQuant();
    };
    EstGraficoQuantLinhasComponent.prototype.changeQuant = function () {
        this.cleanVariables();
        this.quantidade = [];
        var valores = this.quantInput.split('-');
        for (var index = 0; index < valores.length; index++) {
            this.quantidade[index] = Number(valores[index]);
        }
        this.selectMetodoMedida();
        this.updateChart();
    };
    EstGraficoQuantLinhasComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQuantLinhasComponent.prototype.cleanVariables = function () {
        if (this.firstTime) {
            this.quantidade = [];
            this.firstTime = false;
        }
    };
    EstGraficoQuantLinhasComponent.prototype.somaQuant = function () {
        this.qtdTotal = this.quantidade.reduce(function (total, numero) {
            return total + numero;
        }, 0);
        //console.log(this.qtdTotal);
    };
    /**
  * Método responsável por controlar o
  * aparecimento das mensagens de erro no html
  
    verifyInputs() {
      if (this.quantidade.length <= 10 && this.varQual.length <= 10) {
        this.errorInput = false;
        if (this.quantidade.length < this.varQual.length) {
          this.errorInputVar = false;
          this.errorInputQtd = true;
          this.noError = false;
        } else if (this.quantidade.length > this.varQual.length) {
          this.errorInputQtd = false;
          this.errorInputVar = true;
          this.noError = false;
        } else {
          this.errorInputQtd = false;
          this.errorInputVar = false;
          this.noError = true;
        }
      } else {
        this.errorInput = true;
        this.errorInputQtd = false;
        this.errorInputVar = false;
      }
    }*/
    EstGraficoQuantLinhasComponent.prototype.updateChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: [
                    {
                        name: "Quantidade",
                        data: this.quantidade
                    }
                ],
                chart: {
                    type: "line",
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "straight"
                },
                title: {
                    text: this.title,
                    align: "center"
                },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"],
                        opacity: 0.5
                    }
                },
                xaxis: {
                    categories: this.medidasVetChart
                }
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQuantLinhasComponent.prototype.getWeeks = function () {
        //var teste = "8-Jun a 27-Jul";
        this.extractWeekPeriods();
        var dates = this.getDates(this.datasSemanas[0], this.datasSemanas[1]);
        //console.log(dates);
        this.createWeekPeriods(dates);
    };
    EstGraficoQuantLinhasComponent.prototype.extractWeekPeriods = function () {
        this.datasSemanas = [];
        var semanas = this.periodoInput.split('a');
        var dataInicio = semanas[0].trim().split('-');
        var dataFim = semanas[1].trim().split('-');
        for (var index = 0; index <= this.month.length; index++) {
            if (dataInicio[1] == this.month[index]) {
                this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataInicio[0])));
            }
            if (dataFim[1] == this.month[index]) {
                this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataFim[0])));
            }
        }
    };
    /**
     * Método responsável por pegar os dias entre as duas datas de início da semana
     * @param startDate variável que contempla a data de início para a captura do período
     * @param endDate variável que contempla a data final para a captura do período
     */
    EstGraficoQuantLinhasComponent.prototype.getDates = function (startDate, endDate) {
        var dates = [], currentDate = startDate, addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= endDate) {
            dates.push(currentDate);
            //console.log(currentDate.getMonth().toString());
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
    ;
    /**
     * Pega todos os dias presentes entre a semana de início e fim e organiza
     * de modo a pegar as datas de 7 em 7 dias, ou seja a cada uma semana, para então
     * poderem ser utilizadas no gráfico. Calcula também quantas semanas o período vai ter
     * @param period variável que contem o período completo(todos os dias) entre a semana de início e fim
     */
    EstGraficoQuantLinhasComponent.prototype.createWeekPeriods = function (period) {
        this.medidasVetChart = [];
        for (var index = 0; index < period.length; index++) {
            if (index % 7 == 0) {
                this.medidasVetChart.push(String(period[index].getDate()) + "/" + this.getMes(period[index].getMonth()));
            }
        }
    };
    // ------------------------------ Anos
    EstGraficoQuantLinhasComponent.prototype.getYears = function () {
        //var teste = "2018 a 2020";
        //var anos = teste.split('a');
        var anos = this.periodoInput.split('a');
        var anoInicio = Number(anos[0].trim());
        var anoFim = Number(anos[1].trim());
        this.createYearsPeriods(anoInicio, anoFim);
    };
    EstGraficoQuantLinhasComponent.prototype.createYearsPeriods = function (anoI, anoF) {
        this.medidasVetChart = [];
        for (var i = Math.min(anoI, anoF); anoI >= 0 && anoF >= 0 && i <= Math.max(anoI, anoF); i++) {
            this.medidasVetChart.push(String(i));
        }
    };
    // ------------------------------ Anos
    // ------------------------------- Meses
    EstGraficoQuantLinhasComponent.prototype.getMonths = function () {
        //var teste = "Jul a Set";
        ///var meses = teste.split('a');
        var meses = this.periodoInput.split(' a');
        var mesInicio = String(meses[0].trim());
        var mesFim = String(meses[1].trim());
        this.createMonthPeriods(mesInicio, mesFim);
    };
    EstGraficoQuantLinhasComponent.prototype.createMonthPeriods = function (mesI, mesF) {
        this.medidasVetChart = [];
        var indexMesI = this.month.indexOf(mesI);
        var indexMesF = this.month.indexOf(mesF);
        this.medidasVetChart = this.month.slice(indexMesI, indexMesF + 1);
        console.log(this.medidasVetChart);
    };
    EstGraficoQuantLinhasComponent.prototype.getMes = function (indexOfMonth) {
        return this.month[indexOfMonth];
    };
    // ------------------------------- FIM Meses
    // ------------------------------- Dias
    EstGraficoQuantLinhasComponent.prototype.getDays = function () {
        this.extractDaysPeriods();
        var dates = this.getDates(this.datasSemanas[0], this.datasSemanas[1]);
        console.log(dates);
        this.createDaysPeriods(dates);
    };
    EstGraficoQuantLinhasComponent.prototype.extractDaysPeriods = function () {
        this.datasSemanas = [];
        var dias = this.periodoInput.split(' a');
        var dataInicio = dias[0].trim().split('-');
        var dataFim = dias[1].trim().split('-');
        for (var index = 0; index <= this.month.length; index++) {
            if (dataInicio[1] == this.month[index]) {
                this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataInicio[0])));
            }
            if (dataFim[1] == this.month[index]) {
                this.datasSemanas.push(new Date(this.dataAtual.getFullYear(), index, Number(dataFim[0])));
            }
        }
    };
    EstGraficoQuantLinhasComponent.prototype.createDaysPeriods = function (period) {
        this.medidasVetChart = [];
        for (var index = 0; index < period.length; index++) {
            this.medidasVetChart.push(String(period[index].getDate()) + "/" + this.getMes(period[index].getMonth()));
        }
    };
    // ------------------------------- FIM Dias
    // ------------------------------- Horas
    EstGraficoQuantLinhasComponent.prototype.getHours = function () {
        //var teste = "Jul a Set";
        ///var meses = teste.split('a');
        var horas = this.periodoInput.split('a');
        var horaInicio = String(horas[0].trim());
        var horaFim = String(horas[1].trim());
        this.createHoursPeriods(horaInicio, horaFim);
    };
    EstGraficoQuantLinhasComponent.prototype.createHoursPeriods = function (horaI, horaF) {
        this.medidasVetChart = [];
        var horaFinal = Number(horaF);
        var contador = Number(horaI);
        while (contador <= horaFinal) {
            this.medidasVetChart.push(contador + " h");
            contador++;
        }
    };
    // ------------------------------- FIM Horas
    EstGraficoQuantLinhasComponent.prototype.getMedida = function (event) {
        this.medidaAtual = event.target.value;
        if (this.medidaAtual == "Horas") {
            this.periodoInput = '1 a 7';
            this.getHours();
        }
        else if (this.medidaAtual == "Dias") {
            this.periodoInput = '10-Jun a 17-Jun';
            this.getDays();
        }
        else if (this.medidaAtual == "Semanas") {
            this.periodoInput = '8-Jun a 27-Jul';
            this.getWeeks();
        }
        else if (this.medidaAtual == "Meses") {
            this.periodoInput = 'Jan a Ago';
            this.getMonths();
        }
        else if (this.medidaAtual == "Anos") {
            this.periodoInput = '2000 a 2007';
            this.getYears();
        }
        this.updateChart();
    };
    EstGraficoQuantLinhasComponent.prototype.selectMetodoMedida = function () {
        if (this.medidaAtual == "Horas") {
            this.getHours();
        }
        else if (this.medidaAtual == "Dias") {
            this.getDays();
        }
        else if (this.medidaAtual == "Semanas") {
            this.getWeeks();
        }
        else if (this.medidaAtual == "Meses") {
            this.getMonths();
        }
        else if (this.medidaAtual == "Anos") {
            this.getYears();
        }
    };
    EstGraficoQuantLinhasComponent.prototype.changePeriodo = function () {
        this.selectMetodoMedida();
        this.updateChart();
    };
    EstGraficoQuantLinhasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quant-linhas',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQuantLinhasComponent);
    return EstGraficoQuantLinhasComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-polig-freq/est-grafico-quant-polig-freq.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center\">\r\n\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Polígono de Frequência</h3>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\"\r\n          (ngModelChange)=\"selectChart()\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Dados: </label>\r\n        </div>\r\n        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\" [(ngModel)]=\"dadosBrutosInput\"\r\n          (ngModelChange)=\"changeDados()\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Alterar o Número de Classes:</label>\r\n        </div>\r\n        <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Classes\" [(ngModel)]=\"nClasses\"\r\n        (ngModelChange)=\"changeNClasses()\">\r\n      </div>\r\n\r\n      \r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Gráfico -->\r\n      <div id=\"chart\" style=\"width: 100%;\"></div>\r\n\r\n      <div class=\"row col-12\">\r\n\r\n        <!-- Fonte dos dados -->\r\n        <div class=\"mt-2 col-12\">\r\n          <label class=\"label1\" for=\"inputEmail3\">Fonte: {{fonteDados}}</label>\r\n        </div>\r\n\r\n        <!-- Div usada apenas para fazer com que os botões fiquem do lado direito -->\r\n        <div class=\"col-sm\">\r\n        </div>\r\n\r\n        <!-- Botão Gerar Histograma e Polígono-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Histograma'\" (click)=\"changeChart()\"></est-btn-grafico>\r\n        </div>\r\n\r\n        <!-- Botão Tabela-->\r\n        <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n          <est-btn-grafico [name]=\"'Ver Tabela Equivalente'\" [modalTarget]=\"'#myModal'\"></est-btn-grafico>\r\n        </div>\r\n        \r\n        <!-- Modal janela que vai aparecer-->\r\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header justify-content-center\">\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <caption class=\"titleTable\"><b>{{title}}</b></caption>\r\n                  <thead class=\"table-info\" style=\"text-align: center;\">\r\n                    <tr>\r\n                      <th scope=\"col\">Lim. Inf</th>\r\n                      <th scope=\"col\">Lim. Sup</th>\r\n                      <th scope=\"col\">f</th>\r\n                      <th scope=\"col\">F</th>\r\n                      <th scope=\"col\">f%</th>\r\n                      <th scope=\"col\">F%</th>\r\n                      <th scope=\"col\">xi</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\"table-light\" *ngFor=\"let element of frequenciaAbs; let i = index\" style=\"text-align: center;\">\r\n                      <td>{{allIntervals[i]}}</td>\r\n                      <td>{{allIntervals[i+1]}}</td>\r\n                      <td>{{frequenciaAbs[i]}}</td>\r\n                      <td>{{frequenciaAbsAc[i]}}</td>\r\n                      <td>{{frequenciaRel[i]}}</td>\r\n                      <td>{{frequenciaRelAc[i]}}</td>\r\n                      <td>{{valorMed[i]}}</td>\r\n                    </tr>\r\n                    <tr class=\"table-info\" style=\"text-align: center;\">\r\n                      <th>&nbsp;</th>\r\n                      <th>&nbsp;</th>\r\n                      <td>{{n}}</td>\r\n                      <th>&nbsp;</th>\r\n                      <td>{{frequenciaRelAc[frequenciaRelAc.length - 1]}}</td>\r\n                      <th>&nbsp;</th>\r\n                      <th>&nbsp;</th>\r\n                    </tr>\r\n                  </tbody>\r\n                  <caption>Fonte: {{fonteDados}}</caption>\r\n                </table>\r\n              </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Propriedades</h3>\r\n    <p>\r\n      O polígono de frequência é realizado a partir da união\r\n      dos pontos médios da parte superior das colunas em um histograma.\r\n      Para construir um polígono de frequência, primeiramente precisamos \r\n      construir um histograma.\r\n    </p>\r\n    <hr>\r\n\r\n    <p>\r\n      Para definir a amplitude do intervalo de frequências precisamos\r\n      realizar os seguintes cálculos:<br><br>\r\n\r\n      Número de elementos(n): {{n}}<br>\r\n      Mínimo(m): {{limiteInf}}<br>\r\n      Máximo(M): {{limiteSup}}\r\n    </p>\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDistribuicao\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseDistribuicao\" aria-expanded=\"false\" aria-controls=\"collapseDistribuicao\">\r\n                  Amplitude da Distribuição (A):\r\n                </button>\r\n    \r\n                <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                  data-target=\"#collapseDistribuicao\"></i>\r\n              </h2>\r\n            </div>\r\n            <div id=\"collapseDistribuicao\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n              data-parent=\"#accordionExample\">\r\n              <div class=\"card-body\">\r\n                <ul>\r\n                  <li>\r\n                    <ng-katex class=\"explicacao\" equation=\"A = \\color{red}{ M } \\color{black}{-} \\color{blue}{ m }\">\r\n                    </ng-katex>\r\n                  </li>\r\n                  <li>\r\n                    <ng-katex class=\"explicacao\"\r\n                      equation=\"A = \\color{red}{ {{limiteSup}} } \\color{black}{-} \\color{blue}{ {{limiteInf}} } = \\color{black}{ {{amplitudeTot}} }\">\r\n                    </ng-katex>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n            data-target=\"#collapseClasses\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseClasses\" aria-expanded=\"false\" aria-controls=\"collapseClasses\">\r\n                Número de Classes (c):\r\n              </button>\r\n  \r\n              <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                data-target=\"#collapseClasses\"></i>\r\n            </h2>\r\n          </div>\r\n          <div id=\"collapseClasses\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n            data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n              <ul>\r\n                <li>\r\n                  <ng-katex class=\"explicacao\" equation=\"c = 1 + \\color{red}{ 3,333} \\color{black}{ \\cdot \\log(n)}\">\r\n                  </ng-katex>\r\n                </li>\r\n                <li>\r\n                  <ng-katex class=\"explicacao\"\r\n                    equation=\"c = 1 + \\color{red}{ 3,333} \\color{black}{ \\cdot \\log({{n}})} \\cong {{nClasses}}\">\r\n                  </ng-katex>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPrincipal\" data-toggle=\"collapse\"\r\n          data-target=\"#collapseAmplClasse\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAmplClasse\" aria-expanded=\"false\" aria-controls=\"collapseAmplClasse\">\r\n              Amplitude da classe (a):\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAmplClasse\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseAmplClasse\" class=\"collapse\" aria-labelledby=\"headingPrincipal\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <ul>\r\n              <li>\r\n                <ng-katex class=\"explicacao\" equation=\"a = A \\div c\">\r\n                </ng-katex>\r\n              </li>\r\n              <li>\r\n                <ng-katex class=\"explicacao\" equation=\"a = {{amplitudeTot}} \\div {{nClasses}} \\cong {{intervaloCla}}\">\r\n                </ng-katex>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n      \r\n        \r\n        \r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-polig-freq/est-grafico-quant-polig-freq.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n.scroll-center {\n  border: none;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  overflow-x: hidden !important; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-polig-freq/est-grafico-quant-polig-freq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TableElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoQuantPoligFreqComponent; });
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

var TableElements = /** @class */ (function () {
    function TableElements() {
    }
    return TableElements;
}());

var EstGraficoQuantPoligFreqComponent = /** @class */ (function () {
    function EstGraficoQuantPoligFreqComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = true;
        this.varQuant = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        this.varQuantInput = '7-8-5-8-4-5-7-9-10-1-1-2-3-4-3-1-9-5-4-6-8';
        this.quantidade = [7, 8, 5, 8, 4, 5, 7, 9, 10, 1, 1, 2, 3, 4, 3, 1, 9, 5, 4, 6, 8];
        this.title = 'Notas da turma XY na avaliação I de Cálculo';
        this.fonteDados = 'Dados Fictícios';
        this.firstTime = true;
        this.textButton = 'Ver Histograma';
        this.isHistogram = false;
        this.dadosBrutosInput = '3-3.6-3.8-3.9-4-4-4-4.2-4.5-4.7-5-5-5.1-5.4-5.7-5.8-5.8-5.8-5.9-5.9-6-6-6-6-6.1-6.3-6.3-6.3-6.5-6.5-6.7-6.8-6.8-6.9-7-7-7.2-7.2-7.2-7.3-7.4-7.5-7.6-7.6-7.8-8.2-8.6-8.8-9-9';
        this.dadosBrutos = [3, 3.6, 3.8, 3.9, 4, 4, 4, 4.2, 4.5, 4.7, 5, 5, 5.1, 5.4, 5.7, 5.8, 5.8, 5.8, 5.9, 5.9, 6, 6, 6, 6, 6.1, 6.3, 6.3, 6.3, 6.5, 6.5, 6.7, 6.8, 6.8, 6.9, 7, 7, 7.2, 7.2, 7.2, 7.3, 7.4, 7.5, 7.6, 7.6, 7.8, 8.2, 8.6, 8.8, 9, 9];
        this.limiteSup = 9;
        this.limiteInf = 3;
        this.amplitudeTot = 6;
        this.intervaloCla = 0.9;
        this.nClasses = 7;
        this.n = 50;
        this.numerosRep = null;
        this.allIntervals = [3, 3.9, 4.8, 5.7, 6.6, 7.5, 8.4, 9.3];
        this.tableElements = [];
        this.frequenciaAbs = [3, 7, 4, 16, 11, 5, 4];
        this.frequenciaAbsAc = [3, 10, 14, 30, 41, 46, 50];
        this.frequenciaRel = [6, 14, 8, 32, 22, 10, 8];
        this.frequenciaRelAc = [6, 20, 28, 60, 82, 92, 100];
        this.valorMed = [3.45, 4.35, 5.25, 6.15, 7.05, 7.95, 8.85];
    }
    EstGraficoQuantPoligFreqComponent.prototype.ngOnInit = function () {
        this.InicializePoligonoChart();
    };
    EstGraficoQuantPoligFreqComponent.prototype.changeDados = function () {
        var valor = this.dadosBrutosInput.split('-');
        this.n = valor.length;
        for (var index = 0; index < valor.length; index++) {
            this.dadosBrutos[index] = Number(valor[index]);
        }
        this.rol();
        this.amplitudeTotal();
        this.numeroClasses();
        this.intervaloClasses();
        this.contaNumerosRepetidos();
        this.formaIntervalos();
        this.frequenciaAbsoluta();
        this.frequenciaAbsolutaGrafico();
        this.frequenciaAcumulada();
        this.frequenciaRelativa();
        this.frequenciaRelativaAcumulada();
        this.valorMedio();
        this.selectChart();
    };
    EstGraficoQuantPoligFreqComponent.prototype.selectChart = function () {
        if (this.isHistogram) {
            this.updateHistogramaChart();
        }
        else {
            this.updatePoligonoChart();
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.formaIntervalos = function () {
        var tabela = null;
        var countInter = 0;
        this.allIntervals = [];
        this.tableElements = [];
        countInter = this.limiteInf + this.intervaloCla;
        this.allIntervals.push(this.limiteInf, countInter);
        for (var index = 0; index < this.nClasses; index++) {
            tabela = new TableElements();
            if (index == 0) {
                //this.intervalos[index] = this.limiteInf + " |----| " + countInter;
                tabela.intervalo = this.limiteInf + " |----> " + countInter;
                this.tableElements.push(tabela);
            }
            else {
                //this.intervalos[index] = countInter + " |----| " + (countInter + this.intervaloCla);
                tabela.intervalo = countInter + " |----> " + (countInter + this.intervaloCla);
                this.tableElements.push(tabela);
                countInter += this.intervaloCla;
                this.allIntervals.push((Number.isInteger(countInter)) ? countInter : parseFloat(countInter.toFixed(1)));
            }
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.contaNumerosRepetidos = function () {
        this.numerosRep = [];
        this.numerosRep = this.dadosBrutos.reduce(function (object, item) {
            //console.log( object , item ); 
            if (!object[item]) {
                object[item] = 1;
            }
            else {
                object[item]++;
            }
            return object;
        }, {});
    };
    /**
   * Ordena os valores do menor para o maior
   */
    EstGraficoQuantPoligFreqComponent.prototype.rol = function () {
        this.dadosBrutos.sort(function (a, b) {
            return a - b;
        });
        this.limiteInf = this.dadosBrutos[0];
        this.limiteSup = this.dadosBrutos[this.n - 1];
    };
    //////https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
    EstGraficoQuantPoligFreqComponent.prototype.frequenciaAbsoluta = function () {
        var k = 0;
        var countRep = 0;
        for (var index = 0; index < this.allIntervals.length; index++) {
            countRep = 0;
            if (index + 1 != null) {
                for (var key in this.numerosRep) {
                    if (this.numerosRep.hasOwnProperty(key)) {
                        //A key retorna o número(o que está nos dados brutos) e aplicando ela no vetor 
                        //aparece quantas vezes o número repete 
                        k = Number(key);
                        if (k >= this.allIntervals[index] && k < this.allIntervals[index + 1]) {
                            countRep += this.numerosRep[key];
                            this.tableElements[index].frequenciaAbs = countRep;
                        }
                    }
                }
            }
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.frequenciaAbsolutaGrafico = function () {
        this.frequenciaAbs = [];
        for (var freqAbs in this.tableElements) {
            if (Object.prototype.hasOwnProperty.call(this.tableElements, freqAbs)) {
                this.frequenciaAbs.push(this.tableElements[freqAbs].frequenciaAbs);
            }
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.frequenciaAcumulada = function () {
        this.frequenciaAbsAc = [];
        var count = 0;
        this.frequenciaAbsAc.push(this.frequenciaAbs[0]);
        count = this.frequenciaAbsAc[0];
        for (var index = 1; index < this.frequenciaAbs.length; index++) {
            count += this.frequenciaAbs[index];
            this.frequenciaAbsAc.push(Number(count.toFixed(2)));
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.frequenciaRelativa = function () {
        this.frequenciaRel = [];
        for (var index = 0; index < this.frequenciaAbs.length; index++) {
            this.frequenciaRel.push(Number(((this.frequenciaAbs[index] / this.n) * 100).toFixed(2)));
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.frequenciaRelativaAcumulada = function () {
        this.frequenciaRelAc = [];
        var count = 0;
        this.frequenciaRelAc.push(this.frequenciaRel[0]);
        count = this.frequenciaRelAc[0];
        for (var index = 1; index < this.frequenciaRel.length; index++) {
            count += this.frequenciaRel[index];
            this.frequenciaRelAc.push(Number(count.toFixed(2)));
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.valorMedio = function () {
        this.valorMed = [];
        var countValMed = 0;
        for (var index = 0; index < this.allIntervals.length; index++) {
            if (index != this.allIntervals.length - 1) {
                countValMed = Number((this.allIntervals[index] + this.allIntervals[index + 1]) / 2);
                this.valorMed.push((Number.isInteger(countValMed)) ? countValMed : parseFloat(countValMed.toFixed(2)));
            }
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.amplitudeTotal = function () {
        this.amplitudeTot = this.limiteSup - this.limiteInf;
        //console.log("Amplitude total(At): ", this.amplitudeTot);
    };
    EstGraficoQuantPoligFreqComponent.prototype.numeroClasses = function () {
        this.nClasses = Math.round(1 + (3.33 * (Math.log10(this.n))));
        //console.log("Número de Classes(c): ", this.nClasses);
    };
    EstGraficoQuantPoligFreqComponent.prototype.intervaloClasses = function () {
        this.intervaloCla = (this.amplitudeTot / this.nClasses);
        this.intervaloCla = (Number.isInteger(this.intervaloCla)) ? this.intervaloCla : parseFloat(this.intervaloCla.toFixed(1));
        //console.log("Intevalos de Classe(i): ", this.intervaloCla);
    };
    /**
     * Essa Função por enquanto não se faz necessária, sua criação se deu em virtude o gráfico
     * estar arredondando os valores, mas consegui encontrar uma função dele para resolver o problema
     
    convertIntervals(){
      this.allIntervalsString = [];
      for (let index = 0; index < this.allIntervals.length; index++) {
        this.allIntervalsString.push(String(this.allIntervals[index]));
      }
    }*/
    EstGraficoQuantPoligFreqComponent.prototype.changeNClasses = function () {
        this.intervaloClasses();
        this.contaNumerosRepetidos();
        this.formaIntervalos();
        this.frequenciaAbsoluta();
        this.frequenciaAbsolutaGrafico();
        this.frequenciaAcumulada();
        this.frequenciaRelativa();
        this.frequenciaRelativaAcumulada();
        this.valorMedio();
        this.selectChart();
    };
    EstGraficoQuantPoligFreqComponent.prototype.removeElements = function () {
        this.chart.destroy();
    };
    EstGraficoQuantPoligFreqComponent.prototype.changeChart = function () {
        if (this.isHistogram) {
            this.isHistogram = false;
            this.updatePoligonoChart();
        }
        else {
            this.isHistogram = true;
            this.updateHistogramaChart();
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.updateHistogramaChart = function () {
        if (this.noError && !(this.errorInput)) {
            this.removeElements();
            this.chartOptions = {
                series: [{
                        name: "Quantidade",
                        data: this.frequenciaAbs
                    }],
                chart: {
                    type: "histogram",
                    height: 380,
                    foreColor: "#999",
                },
                title: {
                    text: this.title,
                    align: 'center',
                    style: {
                        color: '#000000'
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            hideOverflowingLabels: false
                        }
                    }
                },
                states: {
                    active: {
                        allowMultipleDataPointsSelection: true
                    }
                },
                xaxis: {
                    categories: this.allIntervals,
                    labels: {
                        formatter: function (val) {
                            return String((Number.isInteger(Number(val))) ? Number(val) : parseFloat(Number(val).toFixed(1)));
                        }
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    labels: {
                        offsetX: -5,
                        offsetY: -5
                    },
                },
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQuantPoligFreqComponent.prototype.InicializePoligonoChart = function () {
        var valorMedio = this.valorMed.slice();
        var frequenciaAbs = this.frequenciaAbs.slice();
        valorMedio.push(this.valorMed[this.valorMed.length - 1] + this.intervaloCla);
        valorMedio.unshift(this.valorMed[0] - this.intervaloCla);
        frequenciaAbs.unshift(0);
        frequenciaAbs.push(0);
        //this.removeElements()
        this.chartOptions = {
            series: [
                {
                    name: "frequência",
                    data: frequenciaAbs
                }
            ],
            chart: {
                type: "line",
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: this.title,
                align: "center"
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: valorMedio,
                labels: {
                    formatter: function (val) {
                        return String((Number.isInteger(Number(val))) ? Number(val) : parseFloat(Number(val).toFixed(2)));
                    }
                },
            }
        };
        this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
        this.chart.render();
    };
    EstGraficoQuantPoligFreqComponent.prototype.updatePoligonoChart = function () {
        if (this.noError && !(this.errorInput)) {
            var valorMedio = this.valorMed.slice();
            var frequenciaAbs = this.frequenciaAbs.slice();
            valorMedio.push(this.valorMed[this.valorMed.length - 1] + this.intervaloCla);
            valorMedio.unshift(this.valorMed[0] - this.intervaloCla);
            frequenciaAbs.unshift(0);
            frequenciaAbs.push(0);
            this.removeElements();
            this.chartOptions = {
                series: [
                    {
                        name: "frequência",
                        data: frequenciaAbs
                    }
                ],
                chart: {
                    type: "line",
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "straight"
                },
                title: {
                    text: this.title,
                    align: "center"
                },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"],
                        opacity: 0.5
                    }
                },
                xaxis: {
                    categories: valorMedio,
                    labels: {
                        formatter: function (val) {
                            return String((Number.isInteger(Number(val))) ? Number(val) : parseFloat(Number(val).toFixed(2)));
                        }
                    },
                }
            };
            this.chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            this.chart.render();
        }
    };
    EstGraficoQuantPoligFreqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-quant-polig-freq',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-polig-freq/est-grafico-quant-polig-freq.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-polig-freq/est-grafico-quant-polig-freq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoQuantPoligFreqComponent);
    return EstGraficoQuantPoligFreqComponent;
}());

/*var options = {
  series: [{
  name: 'Website Blog',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Social Media',
  type: 'line',
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  width: [0, 4]
},
title: {
  text: 'Traffic Sources'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
xaxis: {
  type: 'datetime'
},
yaxis: [{
  title: {
    text: 'Website Blog',
  },

}, {
  opposite: true,
  title: {
    text: 'Social Media'
  }
}]
};*/ 


/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-agrupado/est-medida-agrupado.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center row justify-content-around\">\r\n\r\n    <!-- Botões de navegação -->\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Dados Agrupados</h3>\r\n      </div>\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a maneira de entrada de dados:</h5>\r\n      <est-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></est-btn>\r\n      <br><br><br>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Entre com os valoes de xi:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n          [(ngModel)]=\"xiInput\" (ngModelChange)=\"changeDados()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Entre com os valoes de fi:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n          [(ngModel)]=\"fiInput\" (ngModelChange)=\"changeDados()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!-- Entradas -->\r\n      <div class=\"mt-4\">\r\n        <div [className]=\"errorInput === true || errorOrdemXi === true ? ' mt-1 alert alert-danger' : ' mt-1 alert alert-primary'\" role=\"alert\">\r\n          {{msgErro}}\r\n        </div>\r\n      </div>\r\n\r\n      <!--AQUI VAI IR A TABELA-->\r\n      <table class=\"table\">\r\n        <caption class=\"titleTable\">{{title}}</caption>\r\n        <thead style=\"text-align: center;\">\r\n          <tr style=\"border-top: 1px double black;\">\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">Xi</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">fi</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody style=\"border-bottom: 1px double black;\">\r\n          <tr class=\"table-light\" *ngFor=\"let element of xi; let i = index\" style=\"text-align: center;\">\r\n            <td>{{element}}</td>\r\n            <td>{{fi[i]}}</td>\r\n          </tr>\r\n          <tr style=\"text-align: center;border-top: 1px double black;\">\r\n            <th scope=\"row\">Soma</th>\r\n            <td>{{frequenciaAbsSoma}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <caption>Fonte: {{fonteDados}}</caption>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Dados Agrupados</h3>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"amostra\" value=\"option1\" checked\r\n        (click)=\"setRadio(true)\">\r\n      <label class=\"form-check-label\" for=\"amostra\">\r\n        Amostra\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"populacao\" value=\"option2\"\r\n        (click)=\"setRadio(false)\">\r\n      <label class=\"form-check-label\" for=\"populacao\">\r\n        População\r\n      </label>\r\n    </div>\r\n    <hr>\r\n\r\n    <!-- Accordion Medidas de Tendência Central-->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"font-size: large;\">Medidas de Tendência Central</h3>\r\n      <p>As medidas de tendência central são medidas que caracterizam um conjunto.\r\n        Tais parâmetros estatísticos indicam valores representativos de um conjunto\r\n        de dados.\r\n      </p>\r\n      <!-- Média Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMedia\" data-toggle=\"collapse\" data-target=\"#collapseMedia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMedia\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseMedia\">\r\n              <p>\r\n                Média:\r\n                <ng-katex class=\"explicacao\" equation=\" \\overline{x} \\approx {{ media | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMedia\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseMedia\" class=\"collapse\" aria-labelledby=\"headingMedia\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\sum_{} xi \\cdot fi =  {{valorSomatorioMedia}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Primeiramente calcula-se o somatório de\r\n                        <ng-katex class=\"explicacao\" equation=\" \\textcolor{black}{\\sum_{} xi \\cdot fi}\"> </ng-katex>\r\n                        que é dado por {{ formulaMedia}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} = \\dfrac{ {{valorSomatorioMedia}} } { {{frequenciaAbsSoma}} }}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula:\r\n                        <ng-katex equation=\"\\color{black}{ \\overline{x} = \\frac{\\sum_{} xi.fi}{\\sum_{} fi} }\">\r\n                        </ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} = {{media.toFixed(3) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Média Amostra-->\r\n\r\n      <!-- Média População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMedia\" data-toggle=\"collapse\" data-target=\"#collapseMedia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMedia\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseMedia\">\r\n              <p>\r\n                Média:\r\n                <ng-katex class=\"explicacao\" equation=\"\\mu \\approx {{ media | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMedia\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseMedia\" class=\"collapse\" aria-labelledby=\"headingMedia\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\sum_{} xi \\cdot fi =  {{valorSomatorioMedia}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Primeiramente calcula-se o somatório de\r\n                        <ng-katex class=\"explicacao\" equation=\" \\textcolor{black}{\\sum_{} xi \\cdot fi}\"> </ng-katex>\r\n                        que é dado por {{ formulaMedia}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu = \\dfrac{ {{valorSomatorioMedia}} } { {{frequenciaAbsSoma}} }}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula:\r\n                        <ng-katex equation=\"\\color{black}{ \\mu = \\frac{\\sum_{} xi.fi}{\\sum_{} fi} }\">\r\n                        </ng-katex>.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu = {{media.toFixed(3) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Média População-->\r\n\r\n      <!-- Moda -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingModa\" data-toggle=\"collapse\" data-target=\"#collapseModa\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseModa\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseModa\">\r\n              <p class=\"mb-0\" style=\"font-size: large;\">\r\n                Moda: Mo = {{ resultadoModa }}\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseModa\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseModa\" class=\"collapse\" aria-labelledby=\"headingModa\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            A série é {{tipoModa}} e {{formulaModa}}\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Moda -->\r\n\r\n      <!-- Mediana -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMediana\" data-toggle=\"collapse\" data-target=\"#collapseMediana\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMediana\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseMediana\">\r\n              <p>\r\n                Mediana: Md\r\n                <ng-katex class=\"explicacao\" equation=\" = {{ mediana | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMediana\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseMediana\" class=\"collapse\" aria-labelledby=\"headingMediana\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ Md = {{mediana | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  <ul>\r\n                    <li>\r\n                      Primeiramente ordena-se os elementos\r\n                    </li>\r\n                    <li>\r\n                      {{numerosOrdenadosMediana}}\r\n                    </li>\r\n                    <li>\r\n                      Se a quantidade de elementos for par, a mediana será exatamente\r\n                      o valor do ponto médio entre os dois valores centrais da distribuição.\r\n                      Se for ímpar a mediana será o termo central, ou seja a quantidade de elementos a\r\n                      esquerda do termo, deve ser a mesma do que a quantidade de elementos a direita.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Mediana -->\r\n\r\n    </div>\r\n    <hr>\r\n\r\n\r\n    <!-- Accordion Medidas de Dispersão-->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"font-size: large;\">Medidas de Dispersão</h3>\r\n      <p>As medidas de dispersão são medidas que caracterizam um\r\n        conjunto de dados e são usadas para determinar a variedade\r\n        de um conjunto de dados.\r\n      </p>\r\n      <!-- Amplitude Total -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingAmplitude\" data-toggle=\"collapse\" data-target=\"#collapseAmplitude\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseAmplitude\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseAmplitude\">\r\n              <p>\r\n                Amplitude Total:\r\n                <ng-katex class=\"explicacao\" equation=\" A_t = {{ amplitude }}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAmplitude\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseAmplitude\" class=\"collapse\" aria-labelledby=\"headingAmplitude\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} = \\color{red}{L_s} \\color{black}{ -} \\color{blue}{L_i}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da amplitude total.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ A_t }\"></ng-katex> = amplitude total\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ L_s }\"></ng-katex> = limite superior\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ L_i }\"></ng-katex> = limite inferior\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} = \\color{red}{ {{limiteSuperior}} } \\color{black}{ -} \\color{blue}{ {{limiteInferior}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os valores na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} =  \\color{black}{ {{amplitude}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Subtraindo os valores obtemos a amplitude total.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Amplitude Total -->\r\n\r\n      <!-- Desvio Padrão Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingDesvioPadrao\" data-toggle=\"collapse\" data-target=\"#collapseDevioPadrao\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\" aria-expanded=\"false\" aria-controls=\"collapseDevioPadrao\">\r\n              <p>\r\n                Desvio Padrão:\r\n                <ng-katex class=\"explicacao\" equation=\" s \\approx {{ desvio.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseDevioPadrao\" class=\"collapse\" aria-labelledby=\"headingDesvioPadrao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sum_{} \\left( xi - \\overline{x} \\right)^2 = {{somatorioDesvAmos.toFixed(3) | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Primeiramente calcula-se o somatório.\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{ \\dfrac{ \\sum_{} \\left( xi - \\overline{x} \\right)^2 }{ n - 1} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para o cálculo do desvio padrão.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{limegreen}{ s }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ n }\"></ng-katex> = número de elementos.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\sum_{} \\left( xi - \\overline{x} \\right)^2 }\"></ng-katex> =\r\n                      Somatório dos quadrados da diferença entre xi e a média.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{ \\dfrac{ {{somatorioDesvAmos.toFixed(3) | number:'':'pt'}} }{ {{frequenciaAbsSoma}} - 1} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substituindo os dados na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 5 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{ \\dfrac{ {{somatorioDesvAmos.toFixed(3) | number:'':'pt'}} }{ {{frequenciaAbsSoma - 1}} } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso5Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso5Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolvemos a subtração no denominador.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 6 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{  {{ (somatorioDesvAmos/(frequenciaAbsSoma -1)).toFixed(3) | number:'':'pt'}} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso6Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso6Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolvemos a divisão.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 7 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso7Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ s = {{desvio | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso7Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso7Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final após raiz quadrada.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Desvio Padrão Amostra-->\r\n\r\n      <!-- Desvio Padrão População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingDesvioPadrao\" data-toggle=\"collapse\" data-target=\"#collapseDevioPadrao\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\" aria-expanded=\"false\" aria-controls=\"collapseDevioPadrao\">\r\n              <p>\r\n                Desvio Padrão:\r\n                <ng-katex class=\"explicacao\" equation=\" \\sigma \\approx {{ desvioPop.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseDevioPadrao\" class=\"collapse\" aria-labelledby=\"headingDesvioPadrao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sum_{} \\left( xi - \\overline{\\mu} \\right)^2 = {{somatorioDesvPop.toFixed(3) | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Primeiramente calcula-se o somatório.\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\dfrac{ \\sum_{} \\left( xi - \\mu \\right)^2 }{ n } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para o cálculo do desvio padrão.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{limegreen}{ \\sigma }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ n }\"></ng-katex> = número de elementos.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\sum_{} \\left( xi - \\mu \\right)^2 }\"></ng-katex> =\r\n                      Somatório dos quadrados da diferença entre xi e a média.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\dfrac{ {{somatorioDesvPop | number:'':'pt'}} }{ {{frequenciaAbsSoma}}} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substituindo os dados na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 4 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\dfrac{ {{somatorioDesvPop | number:'':'pt'}} }{ {{frequenciaAbsSoma}} } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso4Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso4Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se a subtração no denominador.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 5 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{  {{ (somatorioDesvPop/frequenciaAbsSoma).toFixed(3) | number:'':'pt'}} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso5Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso5Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolvemos a divisão.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 6 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = {{desvioPop | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso6Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso6Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final após raiz quadrada.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Desvio População -->\r\n\r\n      <!-- Variância Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingVariancia\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseVariancia\">\r\n              <p class=\"mb-0\">\r\n                Variância:\r\n                <ng-katex class=\"explicacao\" equation=\" s^2 \\approx {{ varianci | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseVariancia\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseVariancia\" class=\"collapse\" aria-labelledby=\"headingVariancia\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Variancia\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{s^2 \\cong {{(desvio * desvio).toFixed(3) | number:'':'pt'}}}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Variancia\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Variancia\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Eleva-se o desvio padrão ao quadrado.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Variância Amostra -->\r\n\r\n      <!-- Variância População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingVariancia\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseVariancia\">\r\n              <p class=\"mb-0\">\r\n                Variância:\r\n                <ng-katex class=\"explicacao\" equation=\" \\sigma^2 \\approx {{ varianciaPop.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseVariancia\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseVariancia\" class=\"collapse\" aria-labelledby=\"headingVariancia\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Variancia\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{\\sigma^2 \\cong {{varianciaPop.toFixed(3) | number:'':'pt'}}}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Variancia\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Variancia\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Eleva-se o desvio padrão ao quadrado.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Variância População-->\r\n\r\n      <!-- Coeficiente de Variação Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingCoefVariacao\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseCoefVar\">\r\n              <p class=\"mb-0\">\r\n                Coeficiente de Variação:\r\n                <ng-katex class=\"explicacao\" equation=\" cv \\approx {{ coefVariacao.toFixed(3) | number:'':'pt' }} \\% \">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoefVar\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoefVar\" class=\"collapse\" aria-labelledby=\"headingCoefVariacao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ cv = \\dfrac{ \\color{red}{s} } { \\color{blue}{\\overline{x} }} \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para calcular o coenficiênte de variação.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ cv }\"></ng-katex> = coeficiente de variação.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ s }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\overline{x}}\"></ng-katex> = média da distribuição.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = \\frac{ {{desvio.toFixed(3) | number:'':'pt'}} } { {{media | number:'':'pt'}} } \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substirui-se o valor do desvio padrão e da média na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = {{coefVariacao.toFixed(3) | number:'':'pt'}} \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se o produto e divisão respectivamente.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Coeficiênte de Variação -->\r\n\r\n\r\n      <!-- Coeficiente de Variação População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingCoefVariacao\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseCoefVar\">\r\n              <p class=\"mb-0\">\r\n                Coeficiente de Variação:\r\n                <ng-katex class=\"explicacao\"\r\n                  equation=\" cv \\approx {{ coefVariacaoPop.toFixed(3) | number:'':'pt' }} \\% \">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoefVar\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoefVar\" class=\"collapse\" aria-labelledby=\"headingCoefVariacao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ cv = \\dfrac{ \\color{red}{\\sigma} } { \\color{blue}{ \\mu }} \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para calcular o coenficiênte de variação.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ cv }\"></ng-katex> = coeficiente de variação.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ \\sigma }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\mu }\"></ng-katex> = média da distribuição.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = \\frac{ {{desvio.toFixed(3) | number:'':'pt'}} } { {{media | number:'':'pt'}} } \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substirui-se o valor do desvio padrão e da média na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = {{coefVariacaoPop.toFixed(3) | number:'':'pt'}} \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se o produto e divisão respectivamente.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Coeficiênte de Variação População-->\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-agrupado/est-medida-agrupado.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-agrupado/est-medida-agrupado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstMedidaAgrupadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstMedidaAgrupadoComponent = /** @class */ (function () {
    function EstMedidaAgrupadoComponent() {
        this.errorInput = false;
        this.errorOrdemXi = false;
        this.qtdTotalX = 0;
        this.qtdTotalF = 0;
        this.media = 7.333;
        this.mediana = 7;
        this.amplitude = 3;
        this.desvio = 1.0328;
        this.varianci = 1.067;
        this.coefVariacao = 14.084;
        this.desvioPop = 0.943;
        this.varianciaPop = 0.889;
        this.coefVariacaoPop = 12.856;
        this.title = 'Idade dos estudantes da turma XXy';
        this.xi = [6, 7, 8, 9];
        this.xiInput = '6 - 7 - 8 - 9';
        this.fi = [1, 3, 1, 1, 1];
        this.fiInput = '1 - 3 - 1 - 1';
        this.fonteDados = 'Dados Fictícios';
        this.firstTime = true;
        this.repetidas = {};
        this.aberto = [];
        this.numerosRep = null;
        this.frequenciaAbsSoma = 6;
        this.formulaMedia = '6.1 + 7.3 + 8.1 + 9.1';
        this.valorModa = [7];
        this.formulaModa = ' 7 é o número que mais se repete.';
        this.resultadoModa = '7';
        this.tipoModa = 'unimodal';
        this.numerosOrdenadosMediana = '6 - 7 - 7 - 7 - 8 - 9';
        this.limiteSuperior = 9;
        this.limiteInferior = 6;
        this.somatorioXi = '7² + 8² + 7² + 9² + 7² + 6²';
        this.xiQuadrado = 328;
        this.n = 6;
        this.isAmostra = true;
        this.dados = [];
        this.qtdTotal = 44;
        this.msgErro = 'O número de elementos em xi deve ser igual ao número de elementos em fi.';
        //Desvio Padrão
        this.somatorioDesvAmos = 5.11;
        this.somatorioDesvPop = 5.11;
        //Media
        this.valorSomatorioMedia = 44;
        // Botoões de navegação
        this.buttons = [
            { title: "Dados Isolados", route: "est_medida_isolado" },
            { title: "Dados Agrupados", route: "est_medida_agrupado" },
            { title: "Dados em Classes", route: "est_medida_classe" }
        ];
    }
    EstMedidaAgrupadoComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
    };
    EstMedidaAgrupadoComponent.prototype.changeDados = function () {
        this.xi = [];
        this.fi = [];
        var valoresX = this.xiInput.split('-');
        for (var index = 0; index < valoresX.length; index++) {
            this.xi[index] = Number(valoresX[index]);
        }
        console.log('valor xi', this.xi);
        var valoresF = this.fiInput.split('-');
        for (var index = 0; index < valoresF.length; index++) {
            this.fi[index] = Number(valoresF[index]);
        }
        console.log('valor fi', this.fi);
        this.verificaOrdem();
        if (!this.errorOrdemXi) {
            if (this.xi.length == this.fi.length) {
                this.errorInput = false;
                this.msgErro = 'O número de elementos em xi deve ser igual ao número de elementos em fi.';
                //this.verifyInputs();
                this.criaVetCompleto();
                this.somaQuant();
                this.calculaMedia();
                this.AgrupaArray();
                this.calculaModa();
                this.calculaMediana();
                this.amplitudeTotal();
                this.desvioPadrão();
                this.variancia();
                this.coeficienteVariacao();
                //Populacao
                this.desvioPadrãoPopulacao();
                this.varianciaPopulacao();
                this.coeficienteVariacaoPopulacao();
            }
            else {
                this.errorInput = true;
                this.msgErro = 'O número de elementos em xi deve ser igual ao número de elementos em fi.';
            }
        }
    };
    EstMedidaAgrupadoComponent.prototype.somaQuant = function () {
        this.qtdTotalX = this.xi.reduce(function (total, numero) {
            return total + numero;
        }, 0);
        this.qtdTotalF = this.fi.reduce(function (total, numero) {
            return total + numero;
        }, 0);
        //console.log(this.qtdTotal);
        var posicao = 0;
        for (var index = 0; index < this.xi.length; index++) {
            for (var i = 0; i < this.fi[index]; i++) {
                this.aberto[posicao] = this.xi[index];
                posicao++;
            }
        }
    };
    //Isolados/Populaçõa
    EstMedidaAgrupadoComponent.prototype.calculaMedia = function () {
        this.somaQuant();
        var cima = 0;
        var baixo = 0;
        for (var index = 0; index < this.xi.length; index++) {
            cima += this.fi[index] * this.xi[index];
            baixo += this.fi[index];
        }
        this.media = cima / baixo;
        this.valorSomatorioMedia = cima;
        //console.log(this.media);
    };
    EstMedidaAgrupadoComponent.prototype.AgrupaArray = function () {
        var collettion = this.aberto;
        var mapper = {};
        collettion.forEach(function (element) {
            var _a;
            if (mapper[element]) {
                mapper[element].count = mapper[element].count + 1;
                return;
            }
            mapper = __assign(__assign({}, mapper), (_a = {}, _a[element] = { count: 1 }, _a));
        });
        this.repetidas = mapper;
        //console.log('MAPPER :::: ', mapper)
    };
    //Isolados/Populaçõa
    EstMedidaAgrupadoComponent.prototype.calculaModa = function () {
        var isGreater = {};
        var repetidasArray = Object.entries(this.repetidas);
        repetidasArray.forEach(function (element) {
            //console.log('element', element[1]);
            var count = element && element[1] && element[1].count ? element[1].count : 0;
            var isGreaterCount = isGreater && isGreater[1] && isGreater[1].count ? isGreater[1].count : 0;
            //console.log('count', count);
            //console.log('isGreaterCount', isGreaterCount);
            if (count > isGreaterCount)
                isGreater = element;
            //arrumar pra bimodal
            // if(count == isGreaterCount) {
            //   let modaUm = element;
            //   let modaDois = isGreater
            //   isGreater={modaUm, modaDois};
            // }
        });
    };
    //Isolados/Populaçõa
    EstMedidaAgrupadoComponent.prototype.calculaMediana = function () {
        var dadosLength = this.aberto.length % 2;
        var dadosOrdenados = this.dados.sort(function (a, b) { return a - b; });
        var medianaTemp = dadosOrdenados.length / 2;
        if (dadosLength == 0) {
            this.mediana = (dadosOrdenados[medianaTemp - 1] + dadosOrdenados[medianaTemp]) / 2;
            //console.log('mediana par', this.mediana);
        }
        else {
            var medianaArrendonda = Math.floor(medianaTemp);
            this.mediana = dadosOrdenados[medianaArrendonda];
            //console.log('mediana impar', this.mediana);
        }
    };
    //Isolados/População
    EstMedidaAgrupadoComponent.prototype.amplitudeTotal = function () {
        var dadosOrdenados = this.xi.sort(function (a, b) { return a - b; });
        this.limiteInferior = dadosOrdenados[0];
        this.limiteSuperior = dadosOrdenados[dadosOrdenados.length - 1];
        this.amplitude = this.limiteSuperior - this.limiteInferior;
        //console.log('amplitude',this.amplitude);
    };
    //Isolado
    EstMedidaAgrupadoComponent.prototype.desvioPadrão = function () {
        var somatorio = 0;
        var n = 0;
        for (var index = 0; index < this.xi.length; index++) {
            somatorio += this.fi[index] * Math.pow(this.xi[index] - this.media, 2);
            //console.log('somatorio', somatorio)
        }
        for (var index = 0; index < this.fi.length; index++) {
            n += this.fi[index];
            //console.log('N no for',n, this.fi[index])    
        }
        //console.log('numero', n);
        var divisao = somatorio / (n - 1);
        //console.log('divisao', divisao);
        this.desvio = Math.sqrt(divisao);
        this.somatorioDesvAmos = somatorio;
        //console.log('desvio', this.desvio);
    };
    //Isolado
    EstMedidaAgrupadoComponent.prototype.variancia = function () {
        this.varianci = Math.pow(this.desvio, 2);
        //console.log('variancia', this.varianci);
    };
    //Isolado
    EstMedidaAgrupadoComponent.prototype.coeficienteVariacao = function () {
        this.coefVariacao = (this.desvio / this.media) * 100;
        //console.log(this.coefVariacao);
    };
    //População
    EstMedidaAgrupadoComponent.prototype.desvioPadrãoPopulacao = function () {
        var somatorioPop = 0;
        var n = 0;
        for (var index = 0; index < this.xi.length; index++) {
            somatorioPop += this.fi[index] * Math.pow(this.xi[index] - this.media, 2);
            //console.log('somatorioPop', somatorioPop)
        }
        for (var index = 0; index < this.fi.length; index++) {
            n += this.fi[index];
            //console.log('N no for',n, this.fi[index])    
        }
        var divisao = somatorioPop / (n);
        this.desvioPop = Math.sqrt(divisao);
        this.somatorioDesvPop = somatorioPop;
        //console.log('desvioPop', this.desvioPop);
    };
    //Populacao
    EstMedidaAgrupadoComponent.prototype.varianciaPopulacao = function () {
        this.varianciaPop = Math.pow(this.desvioPop, 2);
        //console.log('varianciaPop', this.varianciaPop);
    };
    //Populacao
    EstMedidaAgrupadoComponent.prototype.coeficienteVariacaoPopulacao = function () {
        this.coefVariacaoPop = (this.desvioPop / this.media) * 100;
        //console.log('coefPopu', this.coefVariacaoPop);
    };
    //////////////////////////////////////////////
    EstMedidaAgrupadoComponent.prototype.criaVetCompleto = function () {
        this.dados = [];
        var qtdNumero = 0;
        for (var i = 0; i < this.xi.length; i++) {
            qtdNumero = this.fi[i];
            for (var index = 0; index < qtdNumero; index++) {
                this.dados.push(this.xi[i]);
            }
        }
        this.n = this.dados.length;
        this.somaVetDados();
        this.ordenaValores();
        this.ordenaValoresMediana();
        this.contaNumerosRepetidos();
        this.modaCalc();
        this.formatFormulaModa();
        this.aplicaNumerosFormulaMedia();
        this.calculaSomatorioXi();
        this.criaValoresSomatorioXi();
        this.somaFreqAcumulada();
    };
    /**
       * Percorre o array dados contando os valores repetidos e os eliminando
       */
    EstMedidaAgrupadoComponent.prototype.contaNumerosRepetidos = function () {
        this.numerosRep = this.dados.reduce(function (object, item) {
            //console.log(object, item);
            if (!object[item]) {
                object[item] = 1;
            }
            else {
                object[item]++;
            }
            return object;
        }, {});
    };
    EstMedidaAgrupadoComponent.prototype.modaCalc = function () {
        this.valorModa = [];
        var max = this.fi.reduce(function (a, b) {
            return Math.max(a, b);
        });
        var count = 0;
        for (var key in this.numerosRep) {
            if ((max == this.numerosRep[key])) {
                this.valorModa.push(Number(key));
            }
        }
        if (this.valorModa.length == 0) {
            this.tipoModa = 'amodal';
        }
        else if (this.valorModa.length == 1) {
            this.tipoModa = 'unimodal';
        }
        else if (this.valorModa.length == 2) {
            this.tipoModa = 'bimodal';
        }
        else if (this.valorModa.length > 2) {
            this.tipoModa = 'multimodal';
        }
    };
    EstMedidaAgrupadoComponent.prototype.formatFormulaModa = function () {
        this.formulaModa = '';
        this.resultadoModa = '';
        if (this.valorModa.length != 0) {
            if (this.valorModa.length == 1) {
                this.formulaModa += ' e ' + this.valorModa[0] + ' é o número que mais se repete.';
                this.resultadoModa += this.valorModa[0];
            }
            else if (this.valorModa.length > 1) {
                this.formulaModa += ' os números ' + this.valorModa[0];
                this.resultadoModa += this.valorModa[0];
                for (var i = 1; i < this.valorModa.length; i++) {
                    this.formulaModa += ' e ' + this.valorModa[i];
                    this.resultadoModa += ' e ' + this.valorModa[i];
                }
                this.formulaModa += ' são os que mais se repetem.';
            }
        }
    };
    EstMedidaAgrupadoComponent.prototype.aplicaNumerosFormulaMedia = function () {
        //var teste = [7,8,7,9,7,6]
        this.formulaMedia = '';
        this.formulaMedia += this.dados[0] + '.' + this.fi[0] + ' + ';
        for (var i = 1; i < this.fi.length - 1; i++) {
            this.formulaMedia += this.xi[i] + '.' + this.fi[i] + ' + ';
        }
        this.formulaMedia += this.xi[this.xi.length - 1] + '.' + this.fi[this.fi.length - 1];
    };
    /**
  * Ordena os valores do menor para o maior
  */
    EstMedidaAgrupadoComponent.prototype.ordenaValores = function () {
        this.dados.sort(function (a, b) {
            return a - b;
        });
    };
    EstMedidaAgrupadoComponent.prototype.somaVetDados = function () {
        this.qtdTotal = this.dados.reduce(function (total, numero) {
            return total + numero;
        }, 0);
    };
    EstMedidaAgrupadoComponent.prototype.ordenaValoresMediana = function () {
        this.numerosOrdenadosMediana = '';
        this.numerosOrdenadosMediana += this.dados[0];
        for (var i = 1; i < this.dados.length; i++) {
            this.numerosOrdenadosMediana += ' -' + this.dados[i];
        }
    };
    EstMedidaAgrupadoComponent.prototype.calculaSomatorioXi = function () {
        this.xiQuadrado = 0;
        for (var i = 0; i < this.dados.length; i++) {
            this.xiQuadrado += (this.dados[i] * this.dados[i]);
        }
    };
    EstMedidaAgrupadoComponent.prototype.criaValoresSomatorioXi = function () {
        var valores = this.dados;
        this.somatorioXi = '';
        this.somatorioXi += valores[0];
        for (var i = 1; i < valores.length; i++) {
            this.somatorioXi += '² +' + valores[i];
        }
        this.somatorioXi += '²';
    };
    EstMedidaAgrupadoComponent.prototype.somaFreqAcumulada = function () {
        this.frequenciaAbsSoma = this.fi.reduce(function (total, numero) {
            return total + numero;
        }, 0);
    };
    EstMedidaAgrupadoComponent.prototype.setRadio = function (isAmostra) {
        this.isAmostra = isAmostra;
    };
    EstMedidaAgrupadoComponent.prototype.verificaOrdem = function () {
        var contMaiores = 0;
        for (var i = 0; i < this.xi.length; i++) {
            for (var j = 0; j < this.xi.length; j++) {
                if ((this.xi[i] > this.xi[j]) && (i < j) && this.xi[j] != null) {
                    contMaiores += 1;
                }
            }
        }
        if (contMaiores > 0) {
            this.errorOrdemXi = true;
            this.msgErro = 'Os dados do campo Xi devem estar em ordem crescente.';
        }
        else {
            this.errorOrdemXi = false;
        }
    };
    EstMedidaAgrupadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-medida-agrupado',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-agrupado/est-medida-agrupado.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-agrupado/est-medida-agrupado.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstMedidaAgrupadoComponent);
    return EstMedidaAgrupadoComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-classe/est-medida-classe.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center row justify-content-around\">\r\n\r\n    <!-- Botões de navegação -->\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Dados em Classes</h3>\r\n      </div>\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a maneira de entrada de dados:</h5>\r\n      <est-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></est-btn>\r\n      <br><br><br>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Entre com os limites inferiores:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n          [(ngModel)]=\"limiteInferiorInput\" (ngModelChange)=\"changeDados()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Entre com os limites superiores:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n          [(ngModel)]=\"limiteSuperiorInput\" (ngModelChange)=\"changeDados()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Entre com os valoes de fi:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n          [(ngModel)]=\"valorfiInput\" (ngModelChange)=\"changeDados()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n\r\n      <!--AQUI VAI IR A TABELA-->\r\n      <table class=\"table\">\r\n        <caption class=\"titleTable\">{{title}}</caption>\r\n        <thead style=\"text-align: center;\">\r\n          <tr style=\"border-top: 1px double black;\">\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">&nbsp;</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">Limites</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">&nbsp;</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">Xi</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">fi</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">Fi</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">xi.fi</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">xi².fi</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody style=\"border-bottom: 1px double black;\">\r\n          <tr class=\"table-light\" *ngFor=\"let Li of limiteInferior; let i = index\" style=\"text-align: center;\">\r\n            <td>{{Li}}</td>\r\n            <td>|-------------</td>\r\n            <td>{{limiteSuperior[i]}}</td>\r\n            <td>{{valorXi[i].toFixed(2) | number:'':'pt' }}</td>\r\n            <td>{{valorfi[i].toFixed(2) | number:'':'pt' }}</td>\r\n            <td>{{arrayFi[i].toFixed(2) | number:'':'pt' }}</td>\r\n            <td>{{valorxifi[i].toFixed(2) | number:'':'pt' }}</td>\r\n            <td>{{valorxifiQuad[i].toFixed(2) | number:'':'pt' }}</td>\r\n          </tr>\r\n          <tr style=\"text-align: center;border-top: 1px double black;\">\r\n            <th>&nbsp;</th>\r\n            <th scope=\"row\">Soma</th>\r\n            <th>&nbsp;</th>\r\n            <th scope=\"row\">-</th>\r\n            <td>{{qtdTotalfi}}</td>\r\n            <th scope=\"row\">-</th>\r\n            <td>{{qtdTotalXi.toFixed(2) | number:'':'pt'}}</td>\r\n            <td>{{qtdTotalxifiQuad.toFixed(2) | number:'':'pt'}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <caption>Fonte: {{fonteDados}}</caption>\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Dados em Classes</h3>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"amostra\" value=\"option1\" checked\r\n        (click)=\"setRadio(true)\">\r\n      <label class=\"form-check-label\" for=\"amostra\">\r\n        Amostra\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"populacao\" value=\"option2\"\r\n        (click)=\"setRadio(false)\">\r\n      <label class=\"form-check-label\" for=\"populacao\">\r\n        População\r\n      </label>\r\n    </div>\r\n    <hr>\r\n\r\n    <!-- Accordion Medidas de Tendência Central-->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"font-size: large;\">Medidas de Tendência Central</h3>\r\n      <p>As medidas de tendência central são medidas que caracterizam um conjunto.\r\n        Tais parâmetros estatísticos indicam valores representativos de um conjunto\r\n        de dados.\r\n      </p>\r\n\r\n      <!-- Média Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMedia\" data-toggle=\"collapse\" data-target=\"#collapseMedia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMedia\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseMedia\">\r\n              <p>\r\n                Média:\r\n                <ng-katex class=\"explicacao\" equation=\" \\overline{x} \\approx {{ media | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMedia\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseMedia\" class=\"collapse\" aria-labelledby=\"headingMedia\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} = \\dfrac{ \\sum_{} xi \\cdot fi } { \\sum_{} fi } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da média\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr><br>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} = \\dfrac{ {{ qtdTotalXi}} } { {{qtdTotalfi}} } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} \\approx {{ media | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final, após fazer a divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Média Amostra-->\r\n\r\n      <!-- Média População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMedia\" data-toggle=\"collapse\" data-target=\"#collapseMedia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMedia\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseMedia\">\r\n              <p>\r\n                Média:\r\n                <ng-katex class=\"explicacao\" equation=\"\\mu \\approx {{ media | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMedia\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseMedia\" class=\"collapse\" aria-labelledby=\"headingMedia\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu = \\dfrac{ \\sum_{} xi \\cdot fi } { \\sum_{} fi } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da média\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr><br>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu = \\dfrac{ {{qtdTotalXi}} } { {{qtdTotalfi}} } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Susbstituindo os dados na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu \\approx {{ media | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final, após fazer a divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Média População-->\r\n\r\n      <!-- Moda -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingModa\" data-toggle=\"collapse\" data-target=\"#collapseModa\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseModa\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseModa\">\r\n              <p class=\"mb-0\" style=\"font-size: large;\">\r\n                Moda:\r\n                <ng-katex class=\"explicacao\" equation=\"Mo =\"> </ng-katex> {{ resultadoModa}}\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseModa\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseModa\" class=\"collapse\" aria-labelledby=\"headingModa\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            Ponto médio da classe com maior frequência, nesse caso a série é {{tipoModa}} e {{formulaModa}}.\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Moda -->\r\n\r\n      <!-- Mediana -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMediana\" data-toggle=\"collapse\" data-target=\"#collapseMediana\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMediana\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseMediana\">\r\n              <p>\r\n                Mediana:\r\n                <ng-katex class=\"explicacao\" equation=\" Md = {{ mediana | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMediana\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseMediana\" class=\"collapse\" aria-labelledby=\"headingMediana\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ Pme = \\dfrac{ \\sum_{} fi} { 2 } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Primeiramente precisamos determinar a posição da mediana,\r\n                  descobrindo o seu ponto médio, usando a fórmula logo acima.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ Pme = \\dfrac{ {{qtdTotalfi}} } { 2 } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substiruindo os dados na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ Pme =  {{(qtdTotalfi / 2) | number:'':'pt'}}  } \">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Calculando a divisão, temos a posição da mediana da distribuição.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 4  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ Me = Lime + \\left( \\dfrac{Pme - Fa}{fme} \\right) \\cdot i  } \">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso4Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso4Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para o cálculo da mediana.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{limegreen}{ Lime }\"></ng-katex> = Limite inferior da classe mediana.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ Pme }\"></ng-katex> = posição da mediana.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ Fa }\"></ng-katex> = frequência acumulada da classe anterior.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ fme }\"></ng-katex> = frequência da classe.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{green}{ i }\"></ng-katex> = amplitude.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 5  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ Me = {{limiteInfMed}} + \\left( \\dfrac{ {{qtdTotalfi/2 | number:'':'pt'}} - {{frecAcAnt}} }{ {{frecClasse}} } \\right) \\cdot {{amplitude}}  } \">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso5Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso5Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substituindo os valores na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 6  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ Me = {{limiteInfMed}} + \\dfrac{ {{(qtdTotalfi/2) - frecAcAnt | number:'':'pt'}} }{ {{frecClasse}} } \\cdot {{amplitude}}  } \">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso6Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso6Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolvemos a subtração entre parênteses.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 7  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso7Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ Me = {{limiteInfMed}} + \\dfrac{ {{((qtdTotalfi/2) - frecAcAnt) * amplitude | number:'':'pt'}} }{ {{frecClasse}} }  } \">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso7Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso7Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolvemos o produto.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 8  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso8Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ Me = {{mediana.toFixed(3) | number:'':'pt'}}  } \">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso8Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso8Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final após a soma.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Mediana -->\r\n\r\n      <!-- Quartis-->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMedia\" data-toggle=\"collapse\" data-target=\"#collapseQuartis\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseQuartis\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseQuartis\">\r\n              <p>\r\n                Quartis:\r\n                <ng-katex class=\"explicacao\"\r\n                  equation=\" Q_1 = {{Q1 | number:'':'pt'}} \\ Q_2 = {{mediana | number:'':'pt'}} \\ Q_3 = {{Q3 | number:'':'pt'}} \">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseQuartis\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseQuartis\" class=\"collapse\" aria-labelledby=\"headingMedia\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{PQ_1 = 1 \\cdot \\dfrac{\\sum_{} fi}{4}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Primeiro encontramos a posição do primeiro quartil usando a fórmula acima.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{PQ_1 = 1 \\cdot \\dfrac{ {{qtdTotalfi}} }{4}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Sustituindo os valores na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{PQ_1 = {{(1 * (qtdTotalfi/ 4)) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Valor da posição do primeiro quartil.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{Q_1 = {{limiteInfQ1}} + \\left( \\dfrac{ {{qtdTotalfi/4 | number:'':'pt'}} - {{frecAcAntQ1}} }{ {{frecClasseQ1}} } \\right) \\cdot {{amplitude}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo do primeiro quartil, note que é a mesma fórmula usada para calcular\r\n                        a mediana, mudando apenas os dados aplicados sobre ela, obtendo assim a fórmula:\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ Q_1 = LiQ_1 + \\left( \\dfrac{PQ1 - Fa}{fQ_1} \\right) \\cdot i  } \">\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 5  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ Q_1 = {{limiteInfQ1}} + \\dfrac{ {{(qtdTotalfi/4) - frecAcAntQ1 | number:'':'pt'}} }{ {{frecClasseQ1}} } \\cdot {{amplitude}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso5Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso5Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos a subtração entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 6  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ Q_1 = {{limiteInfQ1}} + \\dfrac{ {{((qtdTotalfi/4) - frecAcAntQ1) * amplitude | number:'':'pt'}} }{ {{frecClasseQ1}} }  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso6Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso6Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos o produto.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 7  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso7Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ Q_1 = {{Q1.toFixed(3) | number:'':'pt'}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso7Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso7Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a soma.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 8  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso8Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ Q_2 = {{mediana.toFixed(3) | number:'':'pt'}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso8Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso8Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final. O segundo quartil é igual a mediana.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <!--agsdygasdghsdghsdhshdhsdsa-->\r\n\r\n                  <!-- Passo 9 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso9Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{PQ_3 = 3 \\cdot \\dfrac{\\sum_{} fi}{4}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso9Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso9Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Primeiro encontramos a posição do terceiro quartil usando a fórmula acima.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 10 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso10Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{PQ_3 = 3 \\cdot \\dfrac{ {{qtdTotalfi}} }{4}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso10Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso10Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Sustituindo os valores na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 11 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso11Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{PQ_3 = {{(3 * (qtdTotalfi/ 4)) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso11Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso11Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Valor da posição do terceiro quartil.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 12 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso12Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{Q_3 = {{limiteInfQ3}} + \\left( \\dfrac{ {{qtdTotalfi/4 | number:'':'pt'}} - {{frecAcAntQ3}} }{ {{frecClasseQ3}} } \\right) \\cdot {{amplitude}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso12Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso12Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo do terceiro quartil:\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{ Q_3 = LiQ_3 + \\left( \\dfrac{PQ3 - Fa}{fQ_3} \\right) \\cdot i  } \">\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 13  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso13Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ Q_3 = {{limiteInfQ3}} + \\dfrac{ {{((qtdTotalfi/4) * 3) - frecAcAntQ3 | number:'':'pt'}} }{ {{frecClasseQ3}} } \\cdot {{amplitude}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso13Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso13Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos a subtração entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 14  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso14Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ Q_3 = {{limiteInfQ3}} + \\dfrac{ {{(((qtdTotalfi/4) * 3) - frecAcAntQ3) * amplitude | number:'':'pt'}} }{ {{frecClasseQ3}} }  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso14Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso14Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos o produto.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 15  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso15Quartis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ Q_3 = {{Q3.toFixed(3) | number:'':'pt'}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso15Quartis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso15Quartis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a soma.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Quartis-->\r\n\r\n      <!-- Percentis-->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMedia\" data-toggle=\"collapse\" data-target=\"#collapsePercentis\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsePercentis\"\r\n              aria-expanded=\"true\" aria-controls=\"collapsePercentis\">\r\n              <p>\r\n                Percentis:\r\n                <ng-katex class=\"explicacao\"\r\n                  equation=\" P_{10} = {{P10 | number:'':'pt'}} \\ P_{90} = {{P90 | number:'':'pt'}} \">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapsePercentis\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapsePercentis\" class=\"collapse\" aria-labelledby=\"headingMedia\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{P_{P_{10}} = 10 \\cdot \\dfrac{\\sum_{} fi}{100}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Primeiro encontramos a posição do percentil 10 usando a fórmula acima.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{P_{P_{10}} = 10 \\cdot \\dfrac{ {{qtdTotalfi}} }{100}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Sustituindo os valores na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{P_{P_{10}} = {{(10 * (qtdTotalfi/ 100)) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Valor da posição do percentil 10.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{P_{10} = {{limiteInfP10}} + \\left( \\dfrac{ {{ (qtdTotalfi/100) * 10 | number:'':'pt'}} - {{frecAcAntP10}} }{ {{frecClasseP10}} } \\right) \\cdot {{amplitude}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo do percenti 10, note que é a mesma fórmula usada para calcular\r\n                        a mediana, mudando apenas os dados aplicados sobre ela, obtendo assim a fórmula:\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{P_{10} = LiP_{10} + \\left( \\dfrac{P_{P_{10}} - Fa}{f_{P_{10}}} \\right) \\cdot i  } \">\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 5  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ P_{10} = {{limiteInfP10}} + \\dfrac{ {{((qtdTotalfi/100) * 10) - frecAcAntP10 | number:'':'pt'}} }{ {{frecClasseP10}} } \\cdot {{amplitude}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso5Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso5Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos a subtração entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 6  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ P_{10} = {{limiteInfP10}} + \\dfrac{ {{(((qtdTotalfi/100) * 10) - frecAcAntP10) * amplitude | number:'':'pt'}} }{ {{frecClasseP10}} }  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso6Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso6Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos o produto.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 7  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso7Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ P_{10} = {{P10.toFixed(3) | number:'':'pt'}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso7Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso7Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a soma.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n\r\n                  <!-- Passo 8 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso8Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{P_{P_{90}} = 90 \\cdot \\dfrac{\\sum_{} fi}{100}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso8Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso8Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Primeiro encontramos a posição do percentil 90 usando a fórmula acima.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 9 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso9Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{P_{P_{90}} = 90 \\cdot \\dfrac{ {{qtdTotalfi}} }{100}}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso9Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso9Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Sustituindo os valores na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 10 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso10Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{P_{P_{10}} = {{(90 * (qtdTotalfi/ 100)) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso10Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso10Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Valor da posição do percentil 90.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 11 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso11Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{P_{90} = {{limiteInfP90}} + \\left( \\dfrac{ {{ (qtdTotalfi/100) * 90 | number:'':'pt'}} - {{frecAcAntP90}} }{ {{frecClasseP90}} } \\right) \\cdot {{amplitude}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso11Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso11Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo do percentil 90, note que é a mesma fórmula usada para calcular\r\n                        a mediana, mudando apenas os dados aplicados sobre ela, obtendo assim a fórmula:\r\n                        <ng-katex class=\"explicacao\"\r\n                          equation=\"\\textcolor{black}{P_{90} = LiP_{90} + \\left( \\dfrac{P_{P_{90}} - Fa}{f_{P_{90}}} \\right) \\cdot i  } \">\r\n                        </ng-katex>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 12  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso12Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ P_{90} = {{limiteInfP90}} + \\dfrac{ {{((qtdTotalfi/100) * 90) - frecAcAntP90 | number:'':'pt'}} }{ {{frecClasseP90}} } \\cdot {{amplitude}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso12Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso12Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos a subtração entre parênteses.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 13  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso13Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ P_{90} = {{limiteInfP90}} + \\dfrac{ {{(((qtdTotalfi/100) * 90) - frecAcAntP90) * amplitude | number:'':'pt'}} }{ {{frecClasseP90}} }  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso13Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso13Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvemos o produto.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 14  -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso14Percentis\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\textcolor{black}{ P_{90} = {{P90.toFixed(3) | number:'':'pt'}}  } \">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso14Percentis\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso14Percentis\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a soma.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Percentis-->\r\n    </div>\r\n\r\n    <hr>\r\n\r\n\r\n    <!-- Accordion Medidas de Dispersão-->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"font-size: large;\">Medidas de Dispersão</h3>\r\n      <p>As medidas de dispersão são medidas que caracterizam um\r\n        conjunto de dados e são usadas para determinar a variedade\r\n        de um conjunto de dados.\r\n      </p>\r\n      <!-- Amplitude Total -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingAmplitude\" data-toggle=\"collapse\" data-target=\"#collapseAmplitude\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseAmplitude\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseAmplitude\">\r\n              <p>\r\n                Amplitude Total:\r\n                <ng-katex class=\"explicacao\" equation=\" A_t = {{ amplitudeTot }}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAmplitude\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseAmplitude\" class=\"collapse\" aria-labelledby=\"headingAmplitude\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} = \\color{red}{L_s} \\color{black}{ -} \\color{blue}{L_i}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da amplitude total.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ A_t }\"></ng-katex> = amplitude total\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ L_s }\"></ng-katex> = limite superior\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ L_i }\"></ng-katex> = limite inferior\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} = \\color{red}{ {{limiteSuperiorLs}} } \\color{black}{ -} \\color{blue}{ {{limiteInferiorLi}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os valores na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} =  \\color{black}{ {{amplitudeTot}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Subtraindo os valores obtemos a amplitude total.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Amplitude Total -->\r\n\r\n      <!-- Desvio Padrão Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingDesvioPadrao\" data-toggle=\"collapse\" data-target=\"#collapseDevioPadrao\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\" aria-expanded=\"false\" aria-controls=\"collapseDevioPadrao\">\r\n              <p>\r\n                Desvio Padrão:\r\n                <ng-katex class=\"explicacao\" equation=\" s \\approx {{ desvio.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseDevioPadrao\" class=\"collapse\" aria-labelledby=\"headingDesvioPadrao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sum_{} \\left( xi - \\overline{x} \\right)^2 = {{somatorioDesvAmos.toFixed(3) | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Primeiramente calcula-se o somatório.\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{ \\dfrac{ \\sum_{} \\left( xi - \\overline{x} \\right)^2 }{ n - 1} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para o cálculo do desvio padrão.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{limegreen}{ s }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ n }\"></ng-katex> = número de elementos.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\sum_{} \\left( xi - \\overline{x} \\right)^2 }\"></ng-katex> =\r\n                      somatório de xi menos a média , elevados ao quadrado.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{ \\dfrac{ {{somatorioDesvAmos.toFixed(3) | number:'':'pt'}} }{ {{qtdTotalfi}} - 1} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substituindo os dados na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 5 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{ \\dfrac{ {{somatorioDesvAmos.toFixed(3) | number:'':'pt'}} }{ {{qtdTotalfi - 1}} } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso5Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso5Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolvemos a subtração no denominador.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 6 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{  {{ (somatorioDesvAmos/(qtdTotalfi -1)).toFixed(3) | number:'':'pt'}} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso6Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso6Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolvemos a divisão.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 7 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso7Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ s = {{desvio | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso7Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso7Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final após raiz quadrada.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Desvio Padrão Amostra-->\r\n\r\n      <!-- Desvio Padrão População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingDesvioPadrao\" data-toggle=\"collapse\" data-target=\"#collapseDevioPadrao\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\" aria-expanded=\"false\" aria-controls=\"collapseDevioPadrao\">\r\n              <p>\r\n                Desvio Padrão:\r\n                <ng-katex class=\"explicacao\" equation=\" \\sigma \\approx {{ desvioPop.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseDevioPadrao\" class=\"collapse\" aria-labelledby=\"headingDesvioPadrao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sum_{} \\left( xi - \\overline{\\mu} \\right)^2 = {{somatorioDesvPop.toFixed(3) | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Primeiramente calcula-se o somatório.\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\dfrac{ \\sum_{} \\left( xi - \\mu \\right)^2 }{ n } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para o cálculo do desvio padrão.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{limegreen}{ \\sigma }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ n }\"></ng-katex> = número de elementos.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\sum_{} \\left( xi - \\mu \\right)^2 }\"></ng-katex> = somatório de\r\n                      xi menos a média, elevados ao quadrado.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\dfrac{ {{somatorioDesvPop | number:'':'pt'}} }{ {{qtdTotalfi}}} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substituindo os dados na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 4 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\dfrac{ {{somatorioDesvPop | number:'':'pt'}} }{ {{qtdTotalfi}} } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso4Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso4Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se a subtração no denominador.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 5 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{  {{ (somatorioDesvPop/qtdTotalfi).toFixed(3) | number:'':'pt'}} } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso5Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso5Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolvemos a divisão.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 6 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = {{desvioPop | number:'':'pt'}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso6Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso6Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final após raiz quadrada.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Desvio População -->\r\n\r\n      <!-- Variância Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingVariancia\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseVariancia\">\r\n              <p class=\"mb-0\">\r\n                Variância:\r\n                <ng-katex class=\"explicacao\" equation=\" s^2 \\approx {{ varianci.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseVariancia\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseVariancia\" class=\"collapse\" aria-labelledby=\"headingVariancia\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Variancia\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{s^2 = {{desvio.toFixed(3) | number:'':'pt' }}^2}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Variancia\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Variancia\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Eleva-se o desvio padrão ao quadrado.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Variancia\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{s^2 \\cong {{varianci.toFixed(3) | number:'':'pt'}}}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Variancia\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Variancia\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final após a potência.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Variância Amostra -->\r\n\r\n      <!-- Variância População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingVariancia\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseVariancia\">\r\n              <p class=\"mb-0\">\r\n                Variância:\r\n                <ng-katex class=\"explicacao\" equation=\" \\sigma^2 \\approx {{ varianciaPop.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseVariancia\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseVariancia\" class=\"collapse\" aria-labelledby=\"headingVariancia\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Variancia\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{\\sigma^2 = {{desvioPop}}^2 }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Variancia\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Variancia\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Eleva-se o desvio padrão ao quadrado.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Variancia\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{\\sigma^2 \\cong {{varianciaPop.toFixed(3) | number:'':'pt'}}}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Variancia\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Variancia\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resultado final após a potência.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Variância População-->\r\n\r\n      <!-- Coeficiente de Variação Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingCoefVariacao\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseCoefVar\">\r\n              <p class=\"mb-0\">\r\n                Coeficiente de Variação:\r\n                <ng-katex class=\"explicacao\" equation=\" cv \\approx {{ coefVariacao.toFixed(3) | number:'':'pt' }} \\% \">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoefVar\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoefVar\" class=\"collapse\" aria-labelledby=\"headingCoefVariacao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ cv = \\dfrac{ \\color{red}{s} } { \\color{blue}{\\overline{x} }} \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para calcular o coenficiênte de variação.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ cv }\"></ng-katex> = coeficiente de variação.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ s }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\overline{x}}\"></ng-katex> = média da distribuição.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = \\frac{ {{desvio.toFixed(3) | number:'':'pt'}} } { {{media | number:'':'pt'}} } \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substirui-se o valor do desvio padrão e da média na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = {{coefVariacao.toFixed(3) | number:'':'pt'}} \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se o produto e divisão respectivamente.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Coeficiênte de Variação -->\r\n\r\n\r\n      <!-- Coeficiente de Variação População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingCoefVariacao\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseCoefVar\">\r\n              <p class=\"mb-0\">\r\n                Coeficiente de Variação:\r\n                <ng-katex class=\"explicacao\"\r\n                  equation=\" cv \\approx {{ coefVariacaoPop.toFixed(3) | number:'':'pt' }} \\% \">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoefVar\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoefVar\" class=\"collapse\" aria-labelledby=\"headingCoefVariacao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ cv = \\dfrac{ \\color{red}{\\sigma} } { \\color{blue}{ \\mu }} \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para calcular o coenficiênte de variação.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ cv }\"></ng-katex> = coeficiente de variação.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ \\sigma }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\mu }\"></ng-katex> = média da distribuição.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = \\frac{ {{desvio.toFixed(3) | number:'':'pt'}} } { {{media | number:'':'pt'}} } \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substirui-se o valor do desvio padrão e da média na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = {{coefVariacaoPop.toFixed(3) | number:'':'pt'}} \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se o produto e divisão respectivamente.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Coeficiênte de Variação População-->\r\n      <hr>\r\n    </div>\r\n\r\n    <!-- Accordion Medidas de assimetria e curtose-->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"font-size: large;\">Medidas de assimetria e curtose</h3>\r\n      <p><b>Assimetria:</b> É o grau de desvio da simetria de uma distribuição.\r\n        Ela é positiva para as distribuições assimétricas à direita, negativa para aquelas assimétricas à esquerda e\r\n        para distribuições simétricas o seu valor é zero.\r\n      </p>\r\n      <p><b>Curtose:</b> Indica o grau de achatamento de uma distribuição, tomando como referência a curva normal.\r\n      </p>\r\n\r\n      <!-- 1 coeficiente de assimetria de pearson Amostra -->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPearson1\" data-toggle=\"collapse\" data-target=\"#collapseCoefPearson\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoefPearson\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseCoefPearson\">\r\n              <p>\r\n                1° Coeficiente de Assimetria de Pearson:\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ pearson1.toFixed(3) | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoefPearson\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoefPearson\" class=\"collapse\" aria-labelledby=\"headingPearson1\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Coef1Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_1 = \\dfrac{\\overline{x} - Mo}{s}  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Coef1Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Coef1Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo do 1° coeficiente de Pearson.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ e_1 }\"></ng-katex> = 1° coeficiente de Pearson.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ \\overline{x} }\"></ng-katex> = média da distribuição.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ Mo }\"></ng-katex> = moda da distribuição.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{black}{ s }\"></ng-katex> = desvio padrão.\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Coef1Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_1 = \\dfrac{ {{media.toFixed(3) | number:'':'pt'}} - {{moda.toFixed(3) | number:'':'pt'}} } { {{desvio | number:'':'pt'}} }  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Coef1Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Coef1Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Coef1Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_1 = \\dfrac{ {{(media - moda).toFixed(3) | number:'':'pt'}} } { {{desvio | number:'':'pt'}} }  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Coef1Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Coef1Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Realizamos a subtração primeiro.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Coef1Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_1 = {{pearson1.toFixed(3) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Coef1Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Coef1Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a subtração.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse 1 coeficiente de assimetria de pearson Amostra-->\r\n\r\n      <!-- 1 coeficiente de assimetria de pearson População -->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPearson1\" data-toggle=\"collapse\" data-target=\"#collapseCoefPearson\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoefPearson\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseCoefPearson\">\r\n              <p>\r\n                1° Coeficiente de Assimetria de Pearson:\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ pearson1Pop.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoefPearson\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoefPearson\" class=\"collapse\" aria-labelledby=\"headingPearson1\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Coef1Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\" equation=\"\\color{black}{ e_1 = \\dfrac{\\mu - Mo}{\\sigma}  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Coef1Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Coef1Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo do 1° coeficiente de Pearson.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ e_1 }\"></ng-katex> = 1° coeficiente de Pearson.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ \\mu }\"></ng-katex> = média da distribuição.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ Mo }\"></ng-katex> = moda da distribuição.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{black}{ \\sigma }\"></ng-katex> = desvio padrão.\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Coef1Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_1 = \\dfrac{ {{media.toFixed(3) | number:'':'pt'}} - {{moda.toFixed(3) | number:'':'pt'}} } { {{desvioPop | number:'':'pt'}} }  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Coef1Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Coef1Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Coef1Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_1 = \\dfrac{ {{(media - moda).toFixed(3) | number:'':'pt'}} } { {{desvioPop | number:'':'pt'}} }  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Coef1Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Coef1Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Realizamos a subtração primeiro.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Coef1Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_1 = {{pearson1Pop.toFixed(3) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Coef1Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Coef1Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a subtração.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse 1 coeficiente de assimetria de pearson População-->\r\n\r\n      <!-- 2 coeficiente de assimetria de pearson Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPearson1\" data-toggle=\"collapse\" data-target=\"#collapseCoef2Pearson\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoef2Pearson\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseCoef2Pearson\">\r\n              <p>\r\n                2° Coeficiente de Assimetria de Pearson:\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ pearson2.toFixed(3) | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoef2Pearson\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoef2Pearson\" class=\"collapse\" aria-labelledby=\"headingPearson1\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Coef2Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_2 = \\dfrac{ 3 \\cdot \\left( \\overline{x} - Me \\right)} { s }}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Coef2Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Coef2Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo do 2° coeficiente de Pearson.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ e_2 }\"></ng-katex> = 1° coeficiente de Pearson.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ \\overline{x} }\"></ng-katex> = média da distribuição.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ Me }\"></ng-katex> = mediana da distribuição.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{black}{ s }\"></ng-katex> = desvio padrão.\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Coef2Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_2 = \\dfrac{ 3 \\cdot \\left( {{media.toFixed(3) | number:'':'pt'}} - {{mediana.toFixed(3) | number:'':'pt'}} \\right) } { {{desvio | number:'':'pt'}} }  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Coef2Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Coef2Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Coef2Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_2 = \\dfrac{ 3 \\cdot {{(media - mediana).toFixed(3) | number:'':'pt'}} } { {{desvio | number:'':'pt'}} }  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Coef2Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Coef2Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Realizamos a subtração primeiro.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Coef2Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_2 = {{pearson2Pop.toFixed(3) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Coef2Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Coef2Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a subtração.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse 2 coeficiente de assimetria de pearson Amostra-->\r\n\r\n      <!-- 2 coeficiente de assimetria de pearson População -->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingPearson1\" data-toggle=\"collapse\" data-target=\"#collapseCoef2Pearson\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoef2Pearson\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseCoef2Pearson\">\r\n              <p>\r\n                2° Coeficiente de Assimetria de Pearson:\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ pearson2Pop.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoef2Pearson\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoef2Pearson\" class=\"collapse\" aria-labelledby=\"headingPearson1\"\r\n          data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Coef2Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_2 = \\dfrac{ 3 \\cdot \\left( \\mu - Me \\right) } {\\sigma}  }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Coef2Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Coef2Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo do 2° coeficiente de Pearson.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ e_2 }\"></ng-katex> = 1° coeficiente de Pearson.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ \\mu }\"></ng-katex> = média da distribuição.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ Me }\"></ng-katex> = mediana da distribuição.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{black}{ \\sigma }\"></ng-katex> = desvio padrão.\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Coef2Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_2 = \\dfrac{ 3 \\cdot \\left( {{media.toFixed(3) | number:'':'pt'}} - {{mediana.toFixed(3) | number:'':'pt'}} \\right)} { {{desvioPop | number:'':'pt'}} } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Coef2Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Coef2Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Coef2Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_2 = \\dfrac{ 3 \\cdot \\left( {{(media - mediana).toFixed(3) | number:'':'pt'}} \\right)} { {{desvioPop | number:'':'pt'}}  } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Coef2Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Coef2Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Realizamos a subtração primeiro.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Coef2Pearson\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ e_2 = {{pearson2Pop.toFixed(3) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Coef2Pearson\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Coef2Pearson\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a subtração.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse 2 coeficiente de assimetria de pearson População-->\r\n\r\n      <!-- Curtose -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingCurtose\" data-toggle=\"collapse\" data-target=\"#collapseCurtose\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCurtose\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseCurtose\">\r\n              <p>\r\n                Curtose:\r\n                <ng-katex class=\"explicacao\" equation=\" \\approx {{ curtose.toFixed(3) | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCurtose\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseCurtose\" class=\"collapse\" aria-labelledby=\"headingCurtose\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Curtose\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ C = \\dfrac{Q_3 - Q_1}{2 \\cdot \\left(  P_{90} - P_{10} \\right)} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Curtose\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Curtose\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da geratriz.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ C }\"></ng-katex> = curtose.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ Q_3 \\ Q_1 }\"></ng-katex> = quartil 3 e quartil 1.\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ P_{90} \\ P_{10} }\"></ng-katex> = percentil 90 e percentil\r\n                            10.\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Curtose\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ C = \\dfrac{ {{Q3.toFixed(3) | number:'':'pt'}} - {{Q1.toFixed(3) | number:'':'pt'}} } {2 \\cdot \\left(  {{P90.toFixed(3) | number:'':'pt'}} - {{P10.toFixed(3) | number:'':'pt'}} \\right)} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Curtose\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Curtose\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substiruindo os valores na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Curtose\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ C = \\dfrac{ {{(Q3 - Q1).toFixed(3) | number:'':'pt'}} } {2 \\cdot \\left(  {{(P90 - P10).toFixed(3) | number:'':'pt'}} \\right) } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Curtose\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Curtose\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvendo as substrações.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Curtose\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ C = \\dfrac{ {{(Q3 - Q1).toFixed(3) | number:'':'pt'}} } { {{((P90 - P10)*2).toFixed(3) | number:'':'pt'}}  } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Curtose\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Curtose\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resolvendo a multiplicação no denominador.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 5 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Curtose\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{ C = {{curtose.toFixed(3) | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso5Curtose\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso5Curtose\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Resultado final após a divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse curtose -->\r\n    </div>\r\n    <hr>\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-classe/est-medida-classe.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-classe/est-medida-classe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstMedidaClasseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstMedidaClasseComponent = /** @class */ (function () {
    function EstMedidaClasseComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = false;
        this.qtdTotalfi = 6;
        this.qtdTotalXi = 47;
        this.qtdTotalxifiQuad = 373.5;
        this.media = 7.833;
        this.tamanho = 0;
        this.mediana = 7.667;
        this.amplitude = 1;
        this.amplitudeTot = 4;
        this.desvio = 1.011;
        this.varianci = 1.022;
        this.coefVariacao = 12.907;
        this.desvioPop = 0.934;
        this.varianciaPop = 0.889;
        this.coefVariacaoPop = 12.036;
        this.somafi = 0;
        this.title = 'Idade dos estudantes da turma XXy';
        this.limiteInferior = [6, 7, 8, 9];
        this.limiteSuperior = [7, 8, 9, 10];
        this.valorfi = [1, 3, 1, 1];
        this.limiteInferiorInput = '6 - 7 - 8 - 9';
        this.limiteSuperiorInput = '7 - 8 - 9 - 10';
        this.valorfiInput = '1 - 3 - 1 - 1';
        this.arrayFi = [1, 4, 5, 6];
        this.valorXi = [6.5, 7.5, 8.5, 9.5];
        this.valorxifi = [6.5, 22.5, 8.5, 9.5];
        this.valorxifiQuad = [42.25, 168.75, 72.25, 90.25];
        this.fonteDados = 'Dados Fictícios';
        this.firstTime = true;
        this.totalfi = 0;
        this.aberto = [];
        this.Q1 = 7.167;
        this.Q2 = 0;
        this.Q3 = 8.5;
        this.P10 = 6.6;
        this.P90 = 9.4;
        this.pearson1 = 0.3294;
        this.pearson2 = 0.4926;
        this.pearson1Pop = 0.361;
        this.pearson2Pop = 0.542;
        this.curtose = 0.2380;
        this.moda = 7.5;
        this.repetidas = {};
        this.numerosRep = null;
        this.valorModa = [7];
        this.formulaModa = ' 7,5 é o número que mais se repete.';
        this.resultadoModa = '7,5';
        this.tipoModa = 'unimodal';
        this.limiteSuperiorLs = 9;
        this.limiteInferiorLi = 6;
        this.somatorioXi = '7² + 8² + 7² + 9² + 7² + 6²';
        this.somatorioXiMediaP1 = '7² + 8² + 7² + 9² + 7² + 6²';
        this.isAmostra = true;
        this.dados = [];
        //Desvio Padrão
        this.somatorioDesvAmos = 5.11;
        this.somatorioDesvPop = 5.11;
        //Mediana
        this.frecAcAnt = 1;
        this.frecClasse = 3;
        this.limiteInfMed = 7;
        this.limiteSupMed = 8;
        //Quartil Q1
        this.frecAcAntQ1 = 1;
        this.frecClasseQ1 = 3;
        this.limiteInfQ1 = 7;
        this.limiteSupQ1 = 8;
        //Quartil Q3
        this.frecAcAntQ3 = 4;
        this.frecClasseQ3 = 1;
        this.limiteInfQ3 = 8;
        this.limiteSupQ3 = 9;
        //Percentil P10
        this.frecAcAntP10 = 0;
        this.frecClasseP10 = 1;
        this.limiteInfP10 = 6;
        this.limiteSupP10 = 7;
        //Percentil 90
        this.frecAcAntP90 = 5;
        this.frecClasseP90 = 1;
        this.limiteInfP90 = 9;
        this.limiteSupP90 = 10;
        // Botoões de navegação
        this.buttons = [
            { title: "Dados Isolados", route: "est_medida_isolado" },
            { title: "Dados Agrupados", route: "est_medida_agrupado" },
            { title: "Dados em Classes", route: "est_medida_classe" }
        ];
    }
    EstMedidaClasseComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
        this.criaSomatorioXiMedia();
    };
    EstMedidaClasseComponent.prototype.changeDados = function () {
        //console.log('chamada da funcao');
        this.cleanVariables();
        this.limiteInferior = [];
        this.limiteSuperior = [];
        this.valorfi = [];
        this.valorXi = [];
        this.valorxifi = [];
        var valoresLimInf = this.limiteInferiorInput.split('-');
        for (var index = 0; index < valoresLimInf.length; index++) {
            this.limiteInferior[index] = Number(valoresLimInf[index]);
        }
        //console.log('limites inf', this.limiteInferior);
        var valoresLimSup = this.limiteSuperiorInput.split('-');
        for (var index = 0; index < valoresLimSup.length; index++) {
            this.limiteSuperior[index] = Number(valoresLimSup[index]);
        }
        //console.log('limites sup', this.limiteSuperior);
        var valoresfi = this.valorfiInput.split('-');
        for (var index = 0; index < valoresfi.length; index++) {
            this.valorfi[index] = Number(valoresfi[index]);
        }
        if ((this.limiteSuperior.length == this.limiteInferior.length) && (this.limiteSuperior.length == this.valorfi.length)) {
            //console.log('valor if', this.valorfi);
            //calcula Xi
            for (var index = 0; index < this.limiteInferior.length; index++) {
                this.valorXi[index] = (this.limiteInferior[index] + this.limiteSuperior[index]) / 2;
            }
            //console.log('valor Xi', this.valorXi);
            //calcula xifi
            for (var index = 0; index < this.limiteInferior.length; index++) {
                this.valorxifi[index] = this.valorXi[index] * this.valorfi[index];
            }
            //console.log('valor xifi', this.valorxifi);
            var posicao = 0;
            for (var index = 0; index < this.valorXi.length; index++) {
                for (var i = 0; i < this.valorfi[index]; i++) {
                    this.aberto[posicao] = this.valorXi[index];
                    posicao++;
                }
            }
            //console.log('aberto', this.aberto);
            //this.verifyInputs();
            this.criaVetCompleto();
            this.calcXiFiQuadrado();
            this.somaQuant();
            this.calculaf1();
            this.calculaMedia();
            this.AgrupaArray();
            //console.log('moda:');
            this.calculaModa();
            this.calculaMediana();
            this.amplitudeTotal();
            this.desvioPadrão();
            this.variancia();
            this.coeficienteVariacao();
            this.quartil();
            this.percentil();
            this.pearson();
            this.calculaCurtose();
            //Populacao
            this.desvioPadrãoPopulacao();
            this.varianciaPopulacao();
            this.coeficienteVariacaoPopulacao();
            this.pearsonPopulacao();
        }
    };
    EstMedidaClasseComponent.prototype.cleanVariables = function () {
        if (this.firstTime) {
            this.limiteInferior = [];
            this.limiteSuperior = [];
            this.valorfi = [];
            this.firstTime = false;
            this.arrayFi = [];
            this.aberto = [];
        }
    };
    EstMedidaClasseComponent.prototype.calculaf1 = function () {
        //calcula fi
        this.totalfi = 0;
        for (var index = 0; index < this.valorfi.length; index++) {
            this.totalfi += this.valorfi[index];
            this.arrayFi[index] = this.totalfi;
        }
        //console.log('Array Fi', this.arrayFi);
    };
    //Isolados/Populaçõa
    EstMedidaClasseComponent.prototype.calculaMedia = function () {
        var somaXifi = 0;
        this.qtdTotalXi = 0;
        this.somaQuant();
        for (var index = 0; index < this.valorxifi.length; index++) {
            somaXifi += this.valorxifi[index];
            this.qtdTotalXi += this.valorxifi[index];
        }
        //console.log('soma xifi', somaXifi);
        //console.log('total fi', this.totalfi);
        this.media = somaXifi / this.totalfi;
        //console.log('media', this.media);
    };
    EstMedidaClasseComponent.prototype.somaQuant = function () {
        this.qtdTotalfi = this.valorfi.reduce(function (total, numero) {
            return total + numero;
        }, 0);
    };
    EstMedidaClasseComponent.prototype.AgrupaArray = function () {
        var collettion = this.aberto;
        var mapper = {};
        collettion.forEach(function (element) {
            var _a;
            if (mapper[element]) {
                mapper[element].count = mapper[element].count + 1;
                return;
            }
            mapper = __assign(__assign({}, mapper), (_a = {}, _a[element] = { count: 1 }, _a));
        });
        this.repetidas = mapper;
        //console.log('MAPPER :::: ', mapper)
    };
    //Isolados/Populaçõa
    EstMedidaClasseComponent.prototype.calculaModa = function () {
        var isGreater = {};
        var repetidasArray = Object.entries(this.repetidas);
        repetidasArray.forEach(function (element) {
            //console.log('element', element[1]);
            var count = element && element[1] && element[1].count ? element[1].count : 0;
            var isGreaterCount = isGreater && isGreater[1] && isGreater[1].count ? isGreater[1].count : 0;
            //console.log('count', count);
            //console.log('isGreaterCount', isGreaterCount);
            if (count > isGreaterCount)
                isGreater = element;
            //arrumar pra bimodal
            // if(count == isGreaterCount) {
            //   let modaUm = element;
            //   let modaDois = isGreater
            //   isGreater={modaUm, modaDois};
            // }
        });
        //console.log('moda', isGreater);
    };
    //Isolados/Populaçõa
    EstMedidaClasseComponent.prototype.calculaMediana = function () {
        var pontoMediana = this.totalfi / 2;
        var Lime = 0;
        var Fa = 0;
        var fme = 0;
        var i = 0;
        var indice = 0;
        for (var index = 0; index < this.arrayFi.length; index++) {
            if (pontoMediana <= this.arrayFi[index] && indice == 0) {
                Lime = this.limiteInferior[index];
                Fa = this.arrayFi[index - 1];
                fme = this.valorfi[index];
                i = this.limiteSuperior[index] - this.limiteInferior[index];
                indice++;
            }
            else {
                //console.log("erro");
            }
        }
        // console.log('lime', Lime);
        // console.log('Pme', pontoMediana);
        // console.log('Fa', Fa);
        // console.log('fme', fme);
        // console.log('i', i);
        this.mediana = Lime + ((pontoMediana - Fa) / fme) * i;
        this.limiteInfMed = Lime;
        this.frecAcAnt = Fa;
        this.frecClasse = fme;
        this.amplitude = i;
        //console.log('mediana', this.media);
    };
    //Isolados/Populaçõa
    EstMedidaClasseComponent.prototype.amplitudeTotal = function () {
        var limSup = this.limiteSuperior.length;
        this.amplitudeTot = this.limiteSuperior[limSup - 1] - this.limiteInferior[0];
        this.limiteInferiorLi = this.limiteInferior[0];
        this.limiteSuperiorLs = this.limiteSuperior[limSup - 1];
        //console.log('amplitude', this.amplitude);
    };
    //Isolado
    EstMedidaClasseComponent.prototype.desvioPadrão = function () {
        var somatorio = 0;
        for (var index = 0; index < this.valorfi.length; index++) {
            somatorio += (Math.pow(this.valorXi[index] - this.media, 2));
        }
        console.log('somatorio', somatorio);
        var divisao = somatorio / (this.totalfi - 1);
        this.desvio = Math.sqrt(divisao);
        this.somatorioDesvAmos = somatorio;
        //console.log('desvio', this.desvio);
    };
    //Isolado
    EstMedidaClasseComponent.prototype.variancia = function () {
        this.varianci = Math.pow(this.desvio, 2);
        //console.log('variancia', this.varianci);
    };
    //Isolado
    EstMedidaClasseComponent.prototype.coeficienteVariacao = function () {
        this.coefVariacao = (this.desvio / this.media) * 100;
        //console.log('coef variacao', this.coefVariacao);
    };
    //População
    EstMedidaClasseComponent.prototype.desvioPadrãoPopulacao = function () {
        var somatorioPop = 0;
        for (var index = 0; index < this.valorfi.length; index++) {
            somatorioPop += (Math.pow(this.valorXi[index] - this.media, 2));
        }
        var divisao = somatorioPop / (this.totalfi);
        this.desvioPop = Math.sqrt(divisao);
        this.somatorioDesvPop = somatorioPop;
        //console.log('desvio', this.desvio);
    };
    //População
    EstMedidaClasseComponent.prototype.varianciaPopulacao = function () {
        this.varianciaPop = Math.pow(this.desvioPop, 2);
        //console.log('varianciaPop', this.varianciaPop);
    };
    //População
    EstMedidaClasseComponent.prototype.coeficienteVariacaoPopulacao = function () {
        this.coefVariacaoPop = (this.desvioPop / this.media) * 100;
        //console.log('coefPopu', this.coefVariacaoPop);
    };
    EstMedidaClasseComponent.prototype.quartil = function () {
        var PQ1 = (1 * this.totalfi) / 4;
        var Liq1 = 0;
        var fa1 = 0;
        var fq1 = 0;
        var i1 = 0;
        var indice1 = 0;
        for (var index = 0; index < this.arrayFi.length; index++) {
            if (PQ1 <= this.arrayFi[index] && indice1 == 0) {
                Liq1 = this.limiteInferior[index];
                fa1 = this.arrayFi[index - 1];
                fq1 = this.valorfi[index];
                i1 = this.limiteSuperior[index] - this.limiteInferior[index];
                indice1++;
            }
            else {
                //console.log("erro");
            }
        }
        // console.log('liq1', Liq1);
        // console.log('PQ1', PQ1);
        // console.log('fa1', fa1);
        // console.log('fq1', fq1);
        // console.log('i1', i1);
        this.Q1 = Liq1 + ((PQ1 - fa1) / fq1) * i1;
        this.limiteInfQ1 = Liq1;
        this.frecAcAntQ1 = fa1;
        this.frecClasseQ1 = fq1;
        this.amplitude = i1;
        //console.log('Q1', this.Q1);
        this.Q2 = this.mediana;
        //console.log('Q2', this.Q2);
        var PQ3 = (3 * this.totalfi) / 4;
        var Liq3 = 0;
        var fa3 = 0;
        var fq3 = 0;
        var i3 = 0;
        var indice3 = 0;
        for (var index = 0; index < this.arrayFi.length; index++) {
            if (PQ3 <= this.arrayFi[index] && indice3 == 0) {
                Liq3 = this.limiteInferior[index];
                fa3 = this.arrayFi[index - 1];
                fq3 = this.valorfi[index];
                i3 = this.limiteSuperior[index] - this.limiteInferior[index];
                indice3++;
            }
            else {
                //console.log("erro");
            }
        }
        // console.log('liq3', Liq3);
        // console.log('PQ3', PQ3);
        // console.log('fa3', fa3);
        // console.log('fq3', fq3);
        // console.log('i3', i3);
        this.Q3 = Liq3 + ((PQ3 - fa3) / fq3) * i3;
        this.limiteInfQ3 = Liq3;
        this.frecAcAntQ3 = fa3;
        this.frecClasseQ3 = fq3;
        this.amplitude = i3;
        //console.log('Q3', this.Q3);
    };
    EstMedidaClasseComponent.prototype.percentil = function () {
        var PP10 = (10 * this.totalfi) / 100;
        var Lip10 = 0;
        var fa10 = 0;
        var fp10 = 0;
        var i10 = 0;
        var indice10 = 0;
        for (var index = 0; index < this.arrayFi.length; index++) {
            if (PP10 <= this.arrayFi[index] && indice10 == 0) {
                Lip10 = this.limiteInferior[index];
                if (this.arrayFi[index - 1] == null) {
                    fa10 = 0;
                }
                else
                    fa10 = this.arrayFi[index - 1];
                fp10 = this.valorfi[index];
                i10 = this.limiteSuperior[index] - this.limiteInferior[index];
                indice10++;
            }
            else {
                //console.log("erro");
            }
        }
        // console.log('lip10', Lip10);
        // console.log('PP10', PP10);
        // console.log('fa10', fa10);
        // console.log('fp10', fp10);
        // console.log('i10', i10);
        this.P10 = Lip10 + ((PP10 - fa10) / fp10) * i10;
        this.limiteInfP10 = Lip10;
        this.frecAcAntP10 = fa10;
        this.frecClasseP10 = fp10;
        this.amplitude = i10;
        //console.log('P10', this.P10);
        var PP90 = (90 * this.totalfi) / 100;
        var Lip90 = 0;
        var fa90 = 0;
        var fp90 = 0;
        var i90 = 0;
        var indice90 = 0;
        for (var index = 0; index < this.arrayFi.length; index++) {
            if (PP90 <= this.arrayFi[index] && indice90 == 0) {
                Lip90 = this.limiteInferior[index];
                if (this.arrayFi[index - 1] == null) {
                    fa90 = 0;
                }
                else
                    fa90 = this.arrayFi[index - 1];
                fp90 = this.valorfi[index];
                i90 = this.limiteSuperior[index] - this.limiteInferior[index];
                indice90++;
            }
            else {
                //console.log("erro");
            }
        }
        // console.log('lip90', Lip90);
        // console.log('PP90', PP90);
        // console.log('fa90', fa90);
        // console.log('fp90', fp90);
        // console.log('i90', i90);
        this.P90 = Lip90 + ((PP90 - fa90) / fp90) * i90;
        this.limiteInfP90 = Lip90;
        this.frecAcAntP90 = fa90;
        this.frecClasseP90 = fp90;
        this.amplitude = i90;
        //console.log('P90', this.P90);
    };
    EstMedidaClasseComponent.prototype.pearson = function () {
        this.pearson1 = (this.media - this.moda) / this.desvio;
        this.pearson2 = (3 * (this.media - this.mediana)) / this.desvio;
    };
    EstMedidaClasseComponent.prototype.pearsonPopulacao = function () {
        this.pearson1Pop = (this.media - this.moda) / this.desvioPop;
        this.pearson2Pop = (3 * (this.media - this.mediana)) / this.desvioPop;
    };
    EstMedidaClasseComponent.prototype.calculaCurtose = function () {
        this.curtose = (this.Q3 - this.Q1) / (2 * (this.P90 - this.P10));
    };
    //////////////////////////////////////////////////
    EstMedidaClasseComponent.prototype.calcXiFiQuadrado = function () {
        this.valorxifiQuad = [];
        for (var i = 0; i < this.valorXi.length; i++) {
            this.valorxifiQuad.push((this.valorXi[i] * this.valorXi[i]) * this.valorfi[i]);
        }
        this.qtdTotalxifiQuad = 0;
        this.qtdTotalxifiQuad = this.valorxifiQuad.reduce(function (total, numero) {
            return total + numero;
        }, 0);
    };
    EstMedidaClasseComponent.prototype.criaSomatorioXiMedia = function () {
        this.somatorioXiMediaP1 = '';
        //this.somatorioXiMediaP1 += '\\left('+this.valorfi[0]+'-'+'\\frac{{{'+ this.qtdTotalXi +'}}} {{{'+this.qtdTotalfi+'}}}\\right) ^ 2 + ';
        var mmcSomat = eval("(" + this.valorfi[0] + "*" + this.qtdTotalfi + ") -" + this.qtdTotalXi);
        this.somatorioXiMediaP1 += '\\left(' + '\\frac{' + mmcSomat + '} {' + this.qtdTotalfi + '}\\right) ^ 2';
        for (var i = 1; i < this.valorfi.length; i++) {
            mmcSomat = 0;
            var mmcSomat = eval("(" + this.valorfi[i] + "*" + this.qtdTotalfi + ") -" + this.qtdTotalXi);
            this.somatorioXiMediaP1 += '+ \\left(' + '\\frac{' + mmcSomat + '} {' + this.qtdTotalfi + '}\\right) ^ 2';
        }
    };
    EstMedidaClasseComponent.prototype.criaVetCompleto = function () {
        this.dados = [];
        var qtdNumero = 0;
        for (var i = 0; i < this.valorXi.length; i++) {
            qtdNumero = this.valorfi[i];
            for (var index = 0; index < qtdNumero; index++) {
                this.dados.push(this.valorXi[i]);
            }
        }
        this.contaNumerosRepetidos();
        this.modaCalc();
        this.formatFormulaModa();
    };
    /**
       * Percorre o array dados contando os valores repetidos e os eliminando
       */
    EstMedidaClasseComponent.prototype.contaNumerosRepetidos = function () {
        this.numerosRep = this.dados.reduce(function (object, item) {
            //console.log(object, item);
            if (!object[item]) {
                object[item] = 1;
            }
            else {
                object[item]++;
            }
            return object;
        }, {});
    };
    EstMedidaClasseComponent.prototype.modaCalc = function () {
        this.valorModa = [];
        var max = this.valorfi.reduce(function (a, b) {
            return Math.max(a, b);
        });
        var count = 0;
        for (var key in this.numerosRep) {
            if ((max == this.numerosRep[key])) {
                this.valorModa.push(Number(key));
            }
        }
        if (this.valorModa.length == 0) {
            this.tipoModa = 'amodal';
        }
        else if (this.valorModa.length == 1) {
            this.tipoModa = 'unimodal';
        }
        else if (this.valorModa.length == 2) {
            this.tipoModa = 'bimodal';
        }
        else if (this.valorModa.length > 2) {
            this.tipoModa = 'multimodal';
        }
    };
    EstMedidaClasseComponent.prototype.formatFormulaModa = function () {
        this.formulaModa = '';
        this.resultadoModa = '';
        if (this.valorModa.length != 0) {
            if (this.valorModa.length == 1) {
                this.formulaModa += ' e ' + this.valorModa[0] + ' é o número que mais se repete.';
                this.resultadoModa += this.valorModa[0];
            }
            else if (this.valorModa.length > 1) {
                this.formulaModa += ' os valores ' + this.valorModa[0];
                this.resultadoModa += this.valorModa[0];
                for (var i = 1; i < this.valorModa.length; i++) {
                    this.formulaModa += ' e ' + this.valorModa[i];
                    this.resultadoModa += ' e ' + this.valorModa[i];
                }
                this.formulaModa += ' são os que mais se repetem.';
            }
        }
    };
    EstMedidaClasseComponent.prototype.setRadio = function (isAmostra) {
        this.isAmostra = isAmostra;
    };
    EstMedidaClasseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-medida-classe',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-classe/est-medida-classe.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-classe/est-medida-classe.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstMedidaClasseComponent);
    return EstMedidaClasseComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-isolado/est-medida-isolado.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n\r\n  <div class=\"scroll-center row justify-content-around\">\r\n\r\n\r\n    <!-- Botões de navegação -->\r\n    <div class=\"btn-container mt-2 row align-items-center justify-content-center\">\r\n      <div class=\" col-12 text-center\">\r\n        <h3 class=\"text-center\">Dados Isolados</h3>\r\n      </div>\r\n      <h5 class=\"mt-2 col-12 text-center\">Escolha abaixo a maneira de entrada de dados:</h5>\r\n      <est-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></est-btn>\r\n      <br><br><br>\r\n    </div>\r\n\r\n    <!--Inputs-->\r\n    <div class=\"form-group row input-container col-12\">\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Título dos Dados: </label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Título\" [(ngModel)]=\"title\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\" id=\"basic-addon1\">Entre com os Dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Separe por - os valores\"\r\n          [(ngModel)]=\"dadoInput\" (ngModelChange)=\"changeDados()\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <label class=\"label\">Fonte dos dados:</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Fonte\" [(ngModel)]=\"fonteDados\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n      <!--AQUI VAI IR A TABELA-->\r\n      <table class=\"table\">\r\n        <caption class=\"titleTable\">{{title}}</caption>\r\n        <thead style=\"text-align: center;\">\r\n          <tr style=\"border-top: 1px double black;\">\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">Xi</th>\r\n            <th scope=\"col\" style=\"border-bottom: 1px double black;\">fi</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody style=\"border-bottom: 1px double black;\">\r\n          <tr class=\"table-light\" *ngFor=\"let element of dadosXi; let i = index\" style=\"text-align: center;\">\r\n            <td>{{element}}</td>\r\n            <td>{{frequenciaAbs[i]}}</td>\r\n          </tr>\r\n          <tr style=\"text-align: center;border-top: 1px double black;\">\r\n            <th scope=\"row\">Soma</th>\r\n            <td>{{frequenciaAbsSoma}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <caption>Fonte: {{fonteDados}}</caption>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!--Propriedades-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n\r\n    <h3>Dados Isolados</h3>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"amostra\" value=\"option1\" checked\r\n        (click)=\"setRadio(true)\">\r\n      <label class=\"form-check-label\" for=\"amostra\">\r\n        Amostra\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"populacao\" value=\"option2\"\r\n        (click)=\"setRadio(false)\">\r\n      <label class=\"form-check-label\" for=\"populacao\">\r\n        População\r\n      </label>\r\n    </div>\r\n    <hr>\r\n\r\n    <!-- Accordion Medidas de Tendência Central-->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"font-size: large;\">Medidas de Tendência Central</h3>\r\n      <p>As medidas de tendência central são medidas que caracterizam um conjunto.\r\n        Tais parâmetros estatísticos indicam valores representativos de um conjunto\r\n        de dados.\r\n      </p>\r\n      <!-- Média Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMedia\" data-toggle=\"collapse\" data-target=\"#collapseMedia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMedia\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseMedia\">\r\n              <p>\r\n                Média:\r\n                <ng-katex class=\"explicacao\" equation=\" \\overline{x} \\approx {{ media | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMedia\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseMedia\" class=\"collapse\" aria-labelledby=\"headingMedia\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} = \\dfrac{ \\sum_{} xi } { n } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da média\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr><br>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} = \\dfrac{ {{ formulaMedia}} } { {{dados.length}} } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} = \\dfrac{ {{ qtdTotal}} } { {{dados.length}} } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Soma-se os elementos do numerador.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\overline{x} \\approx {{ media | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Procede-se a divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Média Amostra-->\r\n\r\n      <!-- Média População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMedia\" data-toggle=\"collapse\" data-target=\"#collapseMedia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMedia\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseMedia\">\r\n              <p>\r\n                Média:\r\n                <ng-katex class=\"explicacao\" equation=\"\\mu \\approx {{ media | number:'':'pt'}}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMedia\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseMedia\" class=\"collapse\" aria-labelledby=\"headingMedia\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu = \\dfrac{ \\sum_{} xi } { n } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da média\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr><br>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu = \\dfrac{ {{ formulaMedia}} } { {{dados.length}} } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os dados na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu = \\dfrac{ {{ qtdTotal}} } { {{dados.length}} } }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Soma-se os elementos do numerador.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 4 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Media\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\" \\textcolor{black}{\\mu \\approx {{ media | number:'':'pt'}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso4Media\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso4Media\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Procede-se a divisão.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Média População-->\r\n\r\n      <!-- Moda -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingModa\" data-toggle=\"collapse\" data-target=\"#collapseModa\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseModa\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseModa\">\r\n              <p class=\"mb-0\" style=\"font-size: large;\">\r\n                Moda: Mo = {{ resultadoModa }}\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseModa\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseModa\" class=\"collapse\" aria-labelledby=\"headingModa\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            A série é {{tipoModa}} {{formulaModa}}\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Moda -->\r\n\r\n      <!-- Mediana -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMediana\" data-toggle=\"collapse\" data-target=\"#collapseMediana\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMediana\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseMediana\">\r\n              <p>\r\n                Mediana: Md\r\n                <ng-katex class=\"explicacao\" equation=\" = {{ mediana | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseMediana\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseMediana\" class=\"collapse\" aria-labelledby=\"headingMediana\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Mediana\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ {{numerosOrdenadosMediana}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Mediana\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Mediana\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  <ul>\r\n                    <li>\r\n                      Primeiramente ordena-se os elementos.\r\n                    </li>\r\n                    <li>\r\n                      Se a quantidade de elementos for par, a mediana será exatamente\r\n                      o valor do ponto médio entre os dois valores centrais da distribuição.\r\n                      Se for ímpar a mediana será o termo central, ou seja a quantidade de elementos a\r\n                      esquerda do termo, deve ser a mesma do que a quantidade de elementos a direita.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Mediana -->\r\n\r\n    </div>\r\n    <hr>\r\n\r\n\r\n    <!-- Accordion Medidas de Dispersão-->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n      <h3 style=\"font-size: large;\">Medidas de Dispersão</h3>\r\n      <p>As medidas de dispersão são medidas que caracterizam um\r\n        conjunto de dados e são usadas para determinar a variedade\r\n        de um conjunto de dados.\r\n      </p>\r\n      <!-- Amplitude Total -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingAmplitude\" data-toggle=\"collapse\" data-target=\"#collapseAmplitude\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseAmplitude\"\r\n              aria-expanded=\"true\" aria-controls=\"collapseAmplitude\">\r\n              <p>\r\n                Amplitude Total:\r\n                <ng-katex class=\"explicacao\" equation=\" A_t = {{ amplitude }}\"> </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseAmplitude\"></i>\r\n          </h2>\r\n        </div>\r\n\r\n        <div id=\"collapseAmplitude\" class=\"collapse\" aria-labelledby=\"headingAmplitude\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3\">\r\n                <!-- Panel -->\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                  <!-- Passo 1 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} = \\color{red}{L_s} \\color{black}{ -} \\color{blue}{L_i}\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso1Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso1Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Fórmula para o cálculo da amplitude total.\r\n                        <ul>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{limegreen}{ A_t }\"></ng-katex> = amplitude total\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{red}{ L_s }\"></ng-katex> = limite superior\r\n                          </li>\r\n                          <li>\r\n                            <ng-katex equation=\"\\color{blue}{ L_i }\"></ng-katex> = limite inferior\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 2 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} = \\color{red}{ {{limiteSuperior}} } \\color{black}{ -} \\color{blue}{ {{limiteInferior}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso2Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso2Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Substituindo os valores na fórmula.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                  <!-- Passo 3 -->\r\n                  <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                      <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Amplitude\" class=\"\">\r\n                          <p>\r\n                            <ng-katex class=\"explicacao\"\r\n                              equation=\"\\color{black}{A_t} =  \\color{black}{ {{amplitude}} }\">\r\n                            </ng-katex>\r\n                            <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                              data-target=\"#collapsePasso3Amplitude\"></i>\r\n                          </p>\r\n                        </a>\r\n                      </h4>\r\n                    </div>\r\n                    <div id=\"collapsePasso3Amplitude\" class=\"panel-collapse collapse\">\r\n                      <div class=\"panel-body\">\r\n                        Subtraindo os valores obtemos a amplitude total.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n\r\n                </div>\r\n                <!-- end panel -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end collapse Amplitude Total -->\r\n\r\n      <!-- Desvio Padrão Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingDesvioPadrao\" data-toggle=\"collapse\" data-target=\"#collapseDevioPadrao\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\" aria-expanded=\"false\" aria-controls=\"collapseDevioPadrao\">\r\n              <p>\r\n                Desvio Padrão:\r\n                <ng-katex class=\"explicacao\" equation=\" s \\approx {{ desvio.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseDevioPadrao\" class=\"collapse\" aria-labelledby=\"headingDesvioPadrao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ \\sum_{} xi^2 = {{xiQuadrado}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Primeiramente calcula-se o somatório de\r\n                  <ng-katex equation=\"\\textcolor{black}{ \\sum_{} xi^2}\"></ng-katex> que é dado\r\n                  por {{somatorioXi}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ s = \\sqrt{ \\frac{1}{ n - 1} \\cdot \r\n                        \\left[ \\sum_{} xi^2 - n \\cdot  \\overline{x}^2 \\right] } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para o cálculo do desvio padrão.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{limegreen}{ s }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ n }\"></ng-katex> = número de elementos.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\sum_{} xi^2 }\"></ng-katex> = somatório de xi elevado ao\r\n                      quadrado.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ \\overline{x}^2 }\"></ng-katex> = média da distribuição ao\r\n                      quadrado.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{ \\frac{1}{ {{n}} - 1} \\cdot \r\n                        \\left[ {{xiQuadrado}} - {{n}} \\cdot  \\left( \\frac{ {{qtdTotal}} }{ {{n}} } \\right) ^2 \\right] } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substituindo os dados na fórmula temos a representação completa dos dados\r\n                  para o cáculo do desvio padrão.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 4 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \\sqrt{ \\frac{1}{ {{n - 1}}} \\cdot \r\n                        \\left[ {{xiQuadrado}} - {{n}} \\cdot  \\frac{ {{qtdTotal * qtdTotal}} }{ {{n * n}} } \\right] } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso4Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso4Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se a subtração no primeiro denominador e a potência.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 5 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ s = \\sqrt{ \\frac{1}{ {{n - 1}}} \\cdot \r\n                        \\left[ {{xiQuadrado}} - \\frac{ {{(qtdTotal * qtdTotal) * n }} }{ {{n * n}} } \\right] } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso5Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso5Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Multiplica-se\r\n                  <ng-katex equation=\"\\color{black}{ {{n}} \\cdot  \\frac{ {{qtdTotal * qtdTotal}} }{ {{n * n}} } }\">\r\n                  </ng-katex>.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 6 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ s = \\sqrt{ \\frac{1}{ {{n - 1}}} \\cdot \r\n                        \\frac{ {{ ((n * n) * xiQuadrado) - ((qtdTotal * qtdTotal) * n )  }} } { {{n*n}} } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso6Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso6Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve a operação entre colchetes.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 7 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso7Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ s = \r\n                          \\sqrt{ \\frac{ {{ 1 * ((xiQuadrado * (n * n)) - ( 1 * ((qtdTotal * qtdTotal) * n)))  }} } { {{ (n-1) * (n*n) }} } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso7Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso7Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Multiplica-se os elementos que estão no radical.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 8 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso8Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ s \\cong \r\n                            {{ desvio.toFixed(4) | number:'':'pt'}}  } \">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso8Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso8Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se a raiz quadrada e obtemos o valor dos desvio padrão.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Desvio Padrão Amostra-->\r\n\r\n      <!-- Desvio Padrão População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingDesvioPadrao\" data-toggle=\"collapse\" data-target=\"#collapseDevioPadrao\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\" aria-expanded=\"false\" aria-controls=\"collapseDevioPadrao\">\r\n              <p>\r\n                Desvio Padrão:\r\n                <ng-katex class=\"explicacao\" equation=\" \\sigma \\approx {{ desvioPop.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseDevioPadrao\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseDevioPadrao\" class=\"collapse\" aria-labelledby=\"headingDesvioPadrao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ \\sum_{} xi^2 = {{xiQuadrado}} }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Primeiramente calcula-se o somatório de\r\n                  <ng-katex equation=\"\\textcolor{black}{ \\sum_{} xi^2}\"></ng-katex> que é dado\r\n                  por {{somatorioXi}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\frac{1}{ n } \\cdot \r\n                        \\left[ \\sum_{} xi^2 - n \\cdot  \\overline{x}^2 \\right] } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para o cálculo do desvio padrão.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{limegreen}{ \\sigma }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ n }\"></ng-katex> = número de elementos.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\sum_{} xi^2 }\"></ng-katex> = somatório de xi elevado ao\r\n                      quadrado.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ \\overline{x}^2 }\"></ng-katex> = média da distribuição ao\r\n                      quadrado.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\frac{1}{ {{n}}} \\cdot \r\n                        \\left[ {{xiQuadrado}} - {{n}} \\cdot  \\left( \\frac{ {{qtdTotal}} }{ {{n}} } \\right) ^2 \\right] } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substituindo os dados na fórmula temos a representação completa dos dados\r\n                  para o cáculo do desvio padrão.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 4 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso4Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\frac{1}{ {{n}}} \\cdot \r\n                        \\left[ {{xiQuadrado}} - {{n}} \\cdot  \\frac{ {{qtdTotal * qtdTotal}} }{ {{n * n}} } \\right] } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso4Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso4Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se a subtração no primeiro denominador e a potência.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 5 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso5Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\frac{1}{ {{n}}} \\cdot \r\n                        \\left[ {{xiQuadrado}} - \\frac{ {{(qtdTotal * qtdTotal) * n }} }{ {{n * n}} } \\right] } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso5Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso5Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Multiplica-se\r\n                  <ng-katex equation=\"\\color{black}{ {{n}} \\cdot  \\frac{ {{qtdTotal * qtdTotal}} }{ {{n * n}} } }\">\r\n                  </ng-katex>.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 6 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso6Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ \\sigma = \\sqrt{ \\frac{1}{ {{n}}} \\cdot \r\n                        \\frac{ {{ ((n * n) * xiQuadrado) - ((qtdTotal * qtdTotal) * n )  }} } { {{n*n}} } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso6Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso6Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve a operação entre colchetes.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 7 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso7Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ \\sigma = \r\n                          \\sqrt{ \\frac{ {{ 1 * ((xiQuadrado * (n * n)) - ( 1 * ((qtdTotal * qtdTotal) * n)))  }} } { {{ n * (n*n) }} } } }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso7Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso7Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Multiplica-se os elementos que estão no radical.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 8 -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso8Desvio\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\" equation=\"\\textcolor{black}{ \\sigma \\cong \r\n                            {{ desvioPop.toFixed(4) | number:'':'pt'}}  } \">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso8Desvio\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso8Desvio\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se a raiz quadrada e obtemos o valor dos desvio padrão.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Desvio População -->\r\n\r\n      <!-- Variância Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingVariancia\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseVariancia\">\r\n              <p class=\"mb-0\">\r\n                Variância:\r\n                <ng-katex class=\"explicacao\" equation=\" s^2 \\approx {{ varianci | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseVariancia\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseVariancia\" class=\"collapse\" aria-labelledby=\"headingVariancia\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Variancia\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{s^2 \\cong {{(desvio * desvio).toFixed(3) | number:'':'pt'}}}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Variancia\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Variancia\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Eleva-se o desvio padrão ao quadrado.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Variância Amostra -->\r\n\r\n      <!-- Variância População-->\r\n      <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingVariancia\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseVariancia\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseVariancia\">\r\n              <p class=\"mb-0\">\r\n                Variância:\r\n                <ng-katex class=\"explicacao\" equation=\" \\sigma^2 \\approx {{ varianciaPop.toFixed(3) | number:'':'pt'}}\">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseVariancia\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseVariancia\" class=\"collapse\" aria-labelledby=\"headingVariancia\" data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1Variancia\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{\\sigma^2 \\cong {{varianciaPop.toFixed(3) | number:'':'pt'}}}\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1Variancia\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1Variancia\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Eleva-se o desvio padrão ao quadrado.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Variância População-->\r\n\r\n      <!-- Coeficiente de Variação Amostra-->\r\n      <div *ngIf=\"isAmostra\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingCoefVariacao\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseCoefVar\">\r\n              <p class=\"mb-0\">\r\n                Coeficiente de Variação:\r\n                <ng-katex class=\"explicacao\" equation=\" cv \\approx {{ coefVariacao.toFixed(3) | number:'':'pt' }} \\% \">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoefVar\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoefVar\" class=\"collapse\" aria-labelledby=\"headingCoefVariacao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ cv = \\dfrac{ \\color{red}{s} } { \\color{blue}{\\overline{x} }} \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para calcular o coenficiênte de variação.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ cv }\"></ng-katex> = coeficiente de variação.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ s }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\overline{x}}\"></ng-katex> = média da distribuição.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = \\frac{ {{desvio.toFixed(3) | number:'':'pt'}} } { {{media | number:'':'pt'}} } \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substirui-se o valor do desvio padrão e da média na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = {{coefVariacao.toFixed(3) | number:'':'pt'}} \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se o produto e divisão respectivamente.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Coeficiênte de Variação -->\r\n\r\n\r\n       <!-- Coeficiente de Variação População-->\r\n       <div *ngIf=\"isAmostra === false\" class=\"card\">\r\n        <div class=\"card-header\" id=\"headingCoefVariacao\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\">\r\n          <h2 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseCoefVar\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseCoefVar\">\r\n              <p class=\"mb-0\">\r\n                Coeficiente de Variação:\r\n                <ng-katex class=\"explicacao\" equation=\" cv \\approx {{ coefVariacaoPop.toFixed(3) | number:'':'pt' }} \\% \">\r\n                </ng-katex>\r\n              </p>\r\n            </button>\r\n\r\n            <i class=\"fa fa-arrow-circle-down float-right mt-2 mr-4\" data-toggle=\"collapse\"\r\n              data-target=\"#collapseCoefVar\"></i>\r\n          </h2>\r\n        </div>\r\n        <div id=\"collapseCoefVar\" class=\"collapse\" aria-labelledby=\"headingCoefVariacao\"\r\n          data-parent=\"#accordionExample\">\r\n          <!-- Panel -->\r\n          <div class=\"card-body\">\r\n\r\n            <!-- Passo 1  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso1CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{ cv = \\dfrac{ \\color{red}{\\sigma} } { \\color{blue}{ \\mu }} \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso1CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso1CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Fórmula para calcular o coenficiênte de variação.\r\n                  <ul>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{black}{ cv }\"></ng-katex> = coeficiente de variação.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{red}{ \\sigma }\"></ng-katex> = desvio padrão.\r\n                    </li>\r\n                    <li>\r\n                      <ng-katex equation=\"\\color{blue}{ \\mu }\"></ng-katex> = média da distribuição.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 2  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso2CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = \\frac{ {{desvio.toFixed(3) | number:'':'pt'}} } { {{media | number:'':'pt'}} } \\cdot 100 \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso2CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso2CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Substirui-se o valor do desvio padrão e da média na fórmula.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <!-- Passo 3  -->\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePasso3CoefVar\" class=\"\">\r\n                    <p>\r\n                      <ng-katex class=\"explicacao\"\r\n                        equation=\"\\textcolor{black}{cv = {{coefVariacaoPop.toFixed(3) | number:'':'pt'}} \\% }\">\r\n                      </ng-katex>\r\n                      <i class=\"fa fa-arrow-circle-down float-right mt-2\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapsePasso3CoefVar\"></i>\r\n                    </p>\r\n                  </a>\r\n                </h4>\r\n              </div>\r\n              <div id=\"collapsePasso3CoefVar\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  Resolve-se o produto e divisão respectivamente.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n          </div>\r\n          <!-- end panel  -->\r\n        </div>\r\n      </div><!-- end collapse Coeficiênte de Variação População-->\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-isolado/est-medida-isolado.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n:host {\n  width: 100%;\n  height: 100%; }\n.btn-container {\n  display: contents; }\n.card {\n  border-color: #ff7f50 !important; }\n.card .card-header {\n    border-color: #ff7f50 !important;\n    background-color: white;\n    text-decoration: none;\n    padding: 7px 0 7px 0;\n    border-bottom: 2px #ff7f50 solid; }\n.card .card-header:hover {\n    border-color: #ff7f50 !important;\n    background-color: #ff7f50; }\n.card .card-header:hover .btn {\n      color: white;\n      text-decoration: none; }\n.card .card-body {\n    border-bottom: 2px #ff7f50 solid; }\n.card .btn {\n    color: #ff7f50;\n    text-decoration: none; }\n.label {\n  padding-top: 7px;\n  text-align: right;\n  margin-right: 10px; }\n.titleTable {\n  caption-side: top;\n  color: black;\n  text-align: center;\n  font-size: larger; }\ninput[type=\"number\"] {\n  max-width: 90px; }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .input-group-prepend, .col-4 {\n    width: 100%;\n    margin-top: 0; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.rightbar {\n  height: calc(100vh - 80px) !important;\n  border-left: 1px solid #ff7f50;\n  overflow-y: scroll;\n  /* ícone da flecha para abrir a explicação*/ }\n.rightbar img {\n    max-height: 25vh !important; }\n.rightbar i {\n    color: #99f510;\n    font-size: 12;\n    margin-right: 1vw; }\n.rightbar .indent {\n    text-indent: 2em; }\n.rightbar .explicacao {\n    font-size: 18px !important; }\n.rightbar .explicacao-fracao {\n    font-size: 20px !important; }\n/* Scroll dentro do rightbar */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 7px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical das propriedades em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .rightbar {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    overflow-y: hidden !important; } }\n.ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n.ifmath-theme .container {\n    margin-bottom: 2%; }\n.ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n.ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n.ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n.ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n.ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n.ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n.ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n.ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n@media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n@media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n.ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n.ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n.ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n.ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n.ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n.ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n.ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n.ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n.ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n.ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n.ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n.ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n.ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n.ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n.ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n.ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n.ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n.ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n.ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n.ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n.scroll-center {\n  height: calc(100vh - 80px) !important;\n  overflow-y: scroll; }\n/* Scroll para os itens do centro da tela */\n::-webkit-scrollbar-track {\n  background-color: #E8E9E9;\n  border-radius: 3px; }\n::-webkit-scrollbar {\n  width: 5px;\n  background: white; }\n::-webkit-scrollbar-thumb {\n  background: #ff7f50;\n  border-radius: 3px; }\n/* Retira a linha vertical do meio da tela em versões com a tela menor que 800px*/\n@media only screen and (max-width: 991px) {\n  .scroll-center {\n    border: none;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  ::-webkit-scrollbar {\n    width: 7px;\n    background: white;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-isolado/est-medida-isolado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstMedidaIsoladoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstMedidaIsoladoComponent = /** @class */ (function () {
    function EstMedidaIsoladoComponent() {
        this.errorInput = false;
        this.errorInputVar = false;
        this.errorInputQtd = false;
        this.noError = false;
        this.qtdTotal = 44;
        this.media = 7.333;
        this.tamanho = 0;
        this.mediana = 7;
        this.amplitude = 3;
        this.desvio = 1.0328;
        this.varianci = 1.067;
        this.coefVariacao = 14.084;
        this.desvioPop = 0.943;
        this.varianciaPop = 0.889;
        this.coefVariacaoPop = 12.856;
        this.title = 'Idade dos estudantes da turma XXy';
        this.dados = [7, 8, 7, 9, 7, 6];
        this.dadoInput = '7 - 8 - 7 - 9 - 7 - 6';
        this.fonteDados = 'Dados Fictícios';
        this.firstTime = true;
        this.repetidas = {};
        this.numerosRep = null;
        this.frequenciaAbs = [1, 3, 1, 1];
        this.frequenciaAbsSoma = 6;
        this.formulaMedia = '7 + 8 + 7 + 9 + 7 + 6';
        this.dadosXi = ['6', '7', '8', '9'];
        this.valorModa = [7];
        this.formulaModa = ' 7 é o número que mais se repete.';
        this.resultadoModa = '7';
        this.tipoModa = 'unimodal';
        this.numerosOrdenadosMediana = '6 - 7 - 7 - 7 - 8 - 9';
        this.limiteSuperior = 9;
        this.limiteInferior = 6;
        this.somatorioXi = '7² + 8² + 7² + 9² + 7² + 6²';
        this.xiQuadrado = 328;
        this.n = 6;
        this.isAmostra = true;
        // Botoões de navegação
        this.buttons = [
            { title: "Dados Isolados", route: "est_medida_isolado" },
            { title: "Dados Agrupados", route: "est_medida_agrupado" },
            { title: "Dados em Classes", route: "est_medida_classe" }
        ];
    }
    EstMedidaIsoladoComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_locales_pt__["a" /* default */]);
    };
    EstMedidaIsoladoComponent.prototype.changeDados = function () {
        //console.log('chamada da funcao');
        this.cleanVariables();
        this.dados = [];
        var valores = this.dadoInput.split('-');
        for (var index = 0; index < valores.length; index++) {
            this.dados[index] = Number(valores[index]);
        }
        this.n = this.dados.length;
        this.somaQuant();
        this.somaFreqAcumulada();
        this.ordenaValores();
        this.ordenaValoresMediana();
        this.contaNumerosRepetidos();
        this.extraiNumerosRepetidos();
        this.modaCalc();
        this.formatFormulaModa();
        this.calculaMedia();
        this.aplicaNumerosFormulaMedia();
        this.AgrupaArray();
        this.calculaModa();
        this.calculaMediana();
        this.amplitudeTotal();
        this.desvioPadrão();
        this.calculaSomatorioXi();
        this.criaValoresSomatorioXi();
        this.variancia();
        this.coeficienteVariacao();
        //Populacao
        this.desvioPadrãoPopulacao();
        this.varianciaPopulacao();
        this.coeficienteVariacaoPopulacao();
    };
    EstMedidaIsoladoComponent.prototype.cleanVariables = function () {
        if (this.firstTime) {
            this.dados = [];
            this.firstTime = false;
        }
    };
    //Isolados/Populaçõa
    EstMedidaIsoladoComponent.prototype.calculaMedia = function () {
        this.somaQuant();
        this.media = this.qtdTotal / this.dados.length;
    };
    EstMedidaIsoladoComponent.prototype.somaQuant = function () {
        this.qtdTotal = this.dados.reduce(function (total, numero) {
            return total + numero;
        }, 0);
    };
    EstMedidaIsoladoComponent.prototype.AgrupaArray = function () {
        var collettion = this.dados;
        var mapper = {};
        collettion.forEach(function (element) {
            var _a;
            if (mapper[element]) {
                mapper[element].count = mapper[element].count + 1;
                return;
            }
            mapper = __assign(__assign({}, mapper), (_a = {}, _a[element] = { count: 1 }, _a));
        });
        this.repetidas = mapper;
    };
    //Isolados/Populaçõa
    EstMedidaIsoladoComponent.prototype.calculaModa = function () {
        var isGreater = {};
        var repetidasArray = Object.entries(this.repetidas);
        repetidasArray.forEach(function (element) {
            //console.log('element', element[1]);
            var count = element && element[1] && element[1].count ? element[1].count : 0;
            var isGreaterCount = isGreater && isGreater[1] && isGreater[1].count ? isGreater[1].count : 0;
            //console.log('count', count);
            //console.log('isGreaterCount', isGreaterCount);
            if (count > isGreaterCount)
                isGreater = element;
            //arrumar pra bimodal
            // if(count == isGreaterCount) {
            //   let modaUm = element;
            //   let modaDois = isGreater
            //   isGreater={modaUm, modaDois};
            // }
        });
        //this.moda = isGreater;
        //console.log('Moda', isGreater);
    };
    //Isolados/Populaçõa
    EstMedidaIsoladoComponent.prototype.calculaMediana = function () {
        var dadosLength = this.dados.length % 2;
        var dadosOrdenados = this.dados.sort(function (a, b) { return a - b; });
        var medianaTemp = dadosOrdenados.length / 2;
        if (dadosLength == 0) {
            this.mediana = (dadosOrdenados[medianaTemp - 1] + dadosOrdenados[medianaTemp]) / 2;
        }
        else {
            var medianaArrendonda = Math.floor(medianaTemp);
            this.mediana = dadosOrdenados[medianaArrendonda];
        }
    };
    //Isolados/Populaçõa
    EstMedidaIsoladoComponent.prototype.amplitudeTotal = function () {
        this.dados.sort(function (a, b) { return a - b; });
        this.limiteInferior = this.dados[0];
        this.limiteSuperior = this.dados[this.dados.length - 1];
        this.amplitude = this.limiteSuperior - this.limiteInferior;
    };
    //Isolado
    EstMedidaIsoladoComponent.prototype.desvioPadrão = function () {
        var somatorio = 0;
        for (var index = 0; index < this.dados.length; index++) {
            somatorio += Math.pow(this.dados[index] - this.media, 2);
        }
        var divisao = somatorio / (this.dados.length - 1);
        this.desvio = Math.sqrt(divisao);
    };
    //Isolado
    EstMedidaIsoladoComponent.prototype.variancia = function () {
        this.varianci = Math.pow(this.desvio, 2);
    };
    //Isolado
    EstMedidaIsoladoComponent.prototype.coeficienteVariacao = function () {
        this.coefVariacao = (this.desvio / this.media) * 100;
    };
    //População
    EstMedidaIsoladoComponent.prototype.desvioPadrãoPopulacao = function () {
        var somatorioPop = 0;
        for (var index = 0; index < this.dados.length; index++) {
            somatorioPop += Math.pow(this.dados[index] - this.media, 2);
        }
        var divisao = somatorioPop / (this.dados.length);
        this.desvioPop = Math.sqrt(divisao);
    };
    //População
    EstMedidaIsoladoComponent.prototype.varianciaPopulacao = function () {
        this.varianciaPop = Math.pow(this.desvioPop, 2);
    };
    //População
    EstMedidaIsoladoComponent.prototype.coeficienteVariacaoPopulacao = function () {
        this.coefVariacaoPop = (this.desvioPop / this.media) * 100;
    };
    ////////////////////////////////////////////////////////////////////////////
    /**
       * Percorre o array dados contando os valores repetidos e os eliminando
       */
    EstMedidaIsoladoComponent.prototype.contaNumerosRepetidos = function () {
        this.numerosRep = this.dados.reduce(function (object, item) {
            //console.log(object, item);
            if (!object[item]) {
                object[item] = 1;
            }
            else {
                object[item]++;
            }
            return object;
        }, {});
    };
    /**
    * Extrai do objeto dos números repetidos os seus valores e a quantidade de
    * vezes que se repetem, colocando esses dados em variáveis para a construção da tabela
    */
    EstMedidaIsoladoComponent.prototype.extraiNumerosRepetidos = function () {
        this.frequenciaAbs = [];
        this.dadosXi = [];
        for (var key in this.numerosRep) {
            this.dadosXi.push(String(key));
            this.frequenciaAbs.push(this.numerosRep[key]);
        }
    };
    EstMedidaIsoladoComponent.prototype.modaCalc = function () {
        this.valorModa = [];
        var max = this.frequenciaAbs.reduce(function (a, b) {
            return Math.max(a, b);
        });
        var count = 0;
        for (var key in this.numerosRep) {
            if ((max == this.numerosRep[key])) {
                this.valorModa.push(Number(key));
            }
        }
        if (this.valorModa.length == 0) {
            this.tipoModa = 'amodal';
        }
        else if (this.valorModa.length == 1) {
            this.tipoModa = 'unimodal';
        }
        else if (this.valorModa.length == 2) {
            this.tipoModa = 'bimodal';
        }
        else if (this.valorModa.length > 2) {
            this.tipoModa = 'multimodal';
        }
    };
    EstMedidaIsoladoComponent.prototype.formatFormulaModa = function () {
        this.formulaModa = '';
        this.resultadoModa = '';
        if (this.valorModa.length != 0) {
            if (this.valorModa.length == 1) {
                this.formulaModa += ' e ' + this.valorModa[0] + ' é o número que mais se repete.';
                this.resultadoModa += this.valorModa[0];
            }
            else if (this.valorModa.length > 1) {
                this.formulaModa += ' os números ' + this.valorModa[0];
                this.resultadoModa += this.valorModa[0];
                for (var i = 1; i < this.valorModa.length; i++) {
                    this.formulaModa += ' e ' + this.valorModa[i];
                    this.resultadoModa += ' e ' + this.valorModa[i];
                }
                this.formulaModa += ' são os que mais se repetem.';
            }
        }
    };
    EstMedidaIsoladoComponent.prototype.aplicaNumerosFormulaMedia = function () {
        //var teste = [7,8,7,9,7,6]
        this.formulaMedia = '';
        this.formulaMedia += this.dados[0] + ' + ';
        for (var i = 1; i < this.dados.length - 1; i++) {
            this.formulaMedia += this.dados[i] + ' + ';
        }
        this.formulaMedia += this.dados[this.dados.length - 1];
    };
    /**
  * Ordena os valores do menor para o maior
  */
    EstMedidaIsoladoComponent.prototype.ordenaValores = function () {
        this.dados.sort(function (a, b) {
            return a - b;
        });
    };
    EstMedidaIsoladoComponent.prototype.ordenaValoresMediana = function () {
        this.numerosOrdenadosMediana = '';
        this.numerosOrdenadosMediana += this.dados[0];
        for (var i = 1; i < this.dados.length; i++) {
            this.numerosOrdenadosMediana += ' -' + this.dados[i];
        }
    };
    EstMedidaIsoladoComponent.prototype.calculaSomatorioXi = function () {
        this.xiQuadrado = 0;
        for (var i = 0; i < this.dados.length; i++) {
            this.xiQuadrado += (this.dados[i] * this.dados[i]);
        }
    };
    EstMedidaIsoladoComponent.prototype.criaValoresSomatorioXi = function () {
        var valores = this.dadoInput.split('-');
        this.somatorioXi = '';
        this.somatorioXi += valores[0];
        for (var i = 1; i < valores.length; i++) {
            this.somatorioXi += '² +' + valores[i];
        }
        this.somatorioXi += '²';
    };
    EstMedidaIsoladoComponent.prototype.somaFreqAcumulada = function () {
        this.frequenciaAbsSoma = this.frequenciaAbs.reduce(function (total, numero) {
            return total + numero;
        }, 0);
    };
    EstMedidaIsoladoComponent.prototype.setRadio = function (isAmostra) {
        this.isAmostra = isAmostra;
    };
    EstMedidaIsoladoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-medida-isolado',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-isolado/est-medida-isolado.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-isolado/est-medida-isolado.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstMedidaIsoladoComponent);
    return EstMedidaIsoladoComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-apresentacao/est-apresentacao.component.html":
/***/ (function(module, exports) {

module.exports = "<est-base-view>\r\n<!--Conteúdo teórico -->\r\n  <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center text-justify\">\r\n \r\n    <h3 class=\"text-center\"><strong>Apresentação de Dados</strong></h3>\r\n      <br><br><br>\r\n      <!-- Explicação -->\r\n      <p class=\"p-justify\"> O objetivo da <strong>apresentação de dados</strong> é exibir dados \r\n        de uma pesquisa.\r\n      </p>\r\n      <p class=\"p-justify\"> Toda a característica que, observada em uma unidade de pesquisa, \r\n        pode variar de unidade para unidade é chamada de Variável. Exemplos: idade, \r\n        nota das provas, entre outras. As variáveis são subdivididas em qualitativas e \r\n        quantitativas. \r\n      </p>\r\n\r\n      <!-- Variáveis Qualitativas-->\r\n      <p class=\"p-justify\"> <strong>Variáveis Qualitativas:</strong> As variáveis qualitativas (ou categóricas) \r\n        são aquelas que representam uma classificação dos indivíduos que pode ser nominal ou ordinal.\r\n      </p>\r\n      <ul>\r\n        <li>\r\n          <span style=\"color: rgb(18, 76, 184);\">Variáveis nominais:</span> não existe ordenação dentre as categorias. \r\n          <br><strong>Exemplos:</strong> cor dos olhos, fumante/não fumante, doente/sadio.\r\n        </li>\r\n        <br>\r\n        <li>\r\n          <span style=\"color: rgb(18, 76, 184);\">Variáveis ordinais:</span> existe uma ordenação entre as categorias. \r\n          <br><strong>Exemplos:</strong> escolaridade (1º, 2º, 3º graus), estágio da doença \r\n          (inicial, intermediário, terminal).\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Variáveis Quantitativas-->\r\n      <p class=\"p-justify\"> <strong>Variáveis Quantitativas:</strong>  As variáveis quantitativas são \r\n        aquelas que podem ser descritas por números, sendo estas classificadas entre contínuas e \r\n        discretas.\r\n      </p>\r\n    \r\n      <ul>\r\n        <li>\r\n          <span style=\"color: rgb(18, 76, 184);\">Variáveis discretas:</span> a variável é avaliada em números que são resultados de contagens. \r\n          <br><strong>Exemplos:</strong> número de filhos, número de bactérias por litro de leite.\r\n        </li>\r\n        <br>\r\n        <li>\r\n          <span style=\"color: rgb(18, 76, 184);\">Variáveis contínuas:</span> a variável é avaliada em números que são resultados de \r\n          medições e, por isso, podem assumir valores com casas decimais. \r\n          <br><strong>Exemplos:</strong> massa (balança), altura (régua).\r\n        </li>\r\n      </ul>\r\n\r\n  </div>\r\n\r\n  <!--Mini menu lateral-->\r\n  <div class=\"rightbar px-3 vh-100\">\r\n    <div class=\"row content-container col-12 row px-0 align-items-center justify-content-center\">\r\n        <div class=\"principalDiv\">\r\n         <div class=\"textDiv\">\r\n           <p class=\"p-justify\"><strong> Dados podem ser apresentados na forma de uma tabela, ou gráfico.\r\n            Escolha abaixo a propriedade que deseja acessar:</strong> \r\n            </p>\r\n         </div>\r\n            <est-btn *ngFor=\"let button of buttons; let i = index\" [name]=\"button.title\" [route]=\"button.route\"></est-btn>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n</est-base-view>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-apresentacao/est-apresentacao.component.scss":
/***/ (function(module, exports) {

module.exports = ".ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n  .ifmath-theme .container {\n    margin-bottom: 2%; }\n  .ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n  .ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n  .ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n  .ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n  .ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n  .ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n  .ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n  .ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n  @media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n  .ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n  .ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n  .ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n  .ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n  .ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n  .ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n  .ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n  .ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n  .ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n  .ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n  .ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n  .ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n  .ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n  .ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n  .ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n  .ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n  .ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n  .ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n  .ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n  .ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n  .ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n  .ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n  .rightbar {\n  height: calc(100vh - 80px) !important; }\n  .rightbar .principalDiv {\n    position: relative;\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%);\n    width: 50%; }\n  .rightbar .textDiv {\n    background-color: coral;\n    border-radius: 20%;\n    float: left;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-apresentacao/est-apresentacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstApresentacaoComponent; });
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

var EstApresentacaoComponent = /** @class */ (function () {
    function EstApresentacaoComponent() {
        // Botoões de navegação
        this.buttons = [
            { title: "Gráficos", route: "est_graficos" }
        ];
    }
    EstApresentacaoComponent.prototype.ngOnInit = function () {
    };
    EstApresentacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-apresentacao',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-apresentacao/est-apresentacao.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-apresentacao/est-apresentacao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstApresentacaoComponent);
    return EstApresentacaoComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-definicao/est-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n  <!-- Estatística Descritiva -->\r\n  <div class=\"row definition__group mt-4\">\r\n\r\n    <div class=\"col-12\">\r\n      <h3 class=\"text-center\">Definição</h3>\r\n      <br>\r\n      <!-- Explicação -->\r\n      <p class=\"p-justify\"> A <strong>estatística</strong> está relacionada aos métodos para coleta, \r\n        organização, resumo, apresentação e análise de dados, bem como à obtenção de conclusões básicas\r\n        e à tomada de decisões razoáveis baseadas em tais análises.\r\n      </p>\r\n      <p class=\"p-justify\"> O termo estatística também pode ser usado, em sentido restrito para \r\n        designar os próprios dados ou números deles derivados como, por exemplo, as médias. Assim \r\n        falamos em estatística de empregos, de acidentes, de gastos etc.\r\n      </p>\r\n      <br>\r\n      <h5 class=\"\">Estatística Descritiva</h5>\r\n\r\n      <p class=\"p-justify\"> A parte da estatística que busca somente descrever e analisar um \r\n        determinado grupo, sem concluir ou inferir algo de um grupo maior, é denominada\r\n        estatística descritiva ou indutiva.\r\n      </p>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-definicao/est-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = ".definition__group__img {\n  max-height: 70vh;\n  min-height: 30vh;\n  min-width: 10vw; }\n\n.definition__group p {\n  text-indent: 2em; }\n\n.p-justify {\n  text-align: justify;\n  text-indent: 2em; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-definicao/est-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstDefinicaoComponent; });
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

var EstDefinicaoComponent = /** @class */ (function () {
    function EstDefinicaoComponent() {
    }
    EstDefinicaoComponent.prototype.ngOnInit = function () {
    };
    EstDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-definicao',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-definicao/est-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-definicao/est-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstDefinicaoComponent);
    return EstDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-grafico-definicao/est-grafico-definicao.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"definition\">\r\n  <!-- Estatística Descritiva -->\r\n  <div class=\"row definition__group mt-4\">\r\n\r\n    <div class=\"col-12\">\r\n      <h3 class=\"text-center\">Gráficos</h3>\r\n      <br>\r\n      <!-- Explicação -->\r\n      <p class=\"p-justify\"> Os <strong>gráficos</strong> estatísticos são ferramentas \r\n        para descrição de dados, uma vez que possuem a capacidade de transmitir várias informações \r\n        ao leitor, em apenas uma figura. Escolha abaixo o tipo de gráfico que deseja acessar:\r\n      </p>\r\n\r\n    </div>\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-sm\">\r\n            <div class=\"leftDiv\">\r\n            <div class=\"textDiv \">\r\n              <p> <strong> Variáveis Qualitativas</strong> </p>\r\n            </div>\r\n            <est-btn *ngFor=\"let grafico of graficosQuali; let i = index\" [name]=\"grafico.title\" [route]=\"grafico.route\"></est-btn>\r\n          </div>\r\n        </div>\r\n\r\n        <!--Variáveis Quantitativas-->\r\n          <div class=\"col-sm rigthDiv\">\r\n            <div class=\"textDiv \">\r\n              <p> <strong> Variáveis Quantitativas</strong> </p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                <div class=\"rigthDiv\">\r\n                  <div class=\"textDiv \">\r\n                    <p> <strong> Discretas</strong> </p>\r\n                  </div>\r\n                  <est-btn *ngFor=\"let grafico of graficosQuantDis; let i = index\" [name]=\"grafico.title\" [route]=\"grafico.route\"></est-btn>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm\">\r\n                <div class=\"rigthDiv\">\r\n                  <div class=\"textDiv \">\r\n                    <p> <strong> Contínuas</strong> </p>\r\n                  </div>\r\n                  <est-btn *ngFor=\"let grafico of graficosQuantCont; let i = index\" [name]=\"grafico.title\" [route]=\"grafico.route\"></est-btn>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-grafico-definicao/est-grafico-definicao.component.scss":
/***/ (function(module, exports) {

module.exports = ".ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n  .ifmath-theme .container {\n    margin-bottom: 2%; }\n  .ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n  .ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n  .ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n  .ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n  .ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n  .ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n  .ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n  .ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n  @media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n  .ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n  .ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n  .ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n  .ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n  .ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n  .ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n  .ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n  .ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n  .ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n  .ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n  .ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n  .ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n  .ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n  .ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n  .ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n  .ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n  .ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n  .ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n  .ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n  .ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n  .ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n  .ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n  .leftDiv {\n  position: relative;\n  background-color: white;\n  border: 0.5px solid;\n  border-color: coral; }\n  .rigthDiv {\n  position: relative;\n  background-color: white;\n  border: 0.5px solid;\n  border-color: coral;\n  bottom: 3%; }\n  .textDiv {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-grafico-definicao/est-grafico-definicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstGraficoDefinicaoComponent; });
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

var EstGraficoDefinicaoComponent = /** @class */ (function () {
    function EstGraficoDefinicaoComponent() {
        this.graficosQuali = [
            { title: "Gráfico de Setores", route: "est_graficos_setores" },
            { title: "Gráfico de Barras", route: "est_graficos_barras" },
            { title: "Gráfico de Colunas", route: "est_graficos_colunas" },
            { title: "Gráfico de Barras Múltiplas", route: "est_graficos_barras_mul" },
            { title: "Gráfico de Colunas Múltiplas", route: "est_graficos_colunas_mul" }
        ];
        this.graficosQuantDis = [
            { title: "Gráfico de Colunas", route: "est_graficos_quant_colunas" },
            { title: "Gráfico de Linhas", route: "est_graficos_linhas" },
            { title: "Gráfico de Colunas e Linhas", route: "est_graficos_colunas_e_linhas" },
            { title: "Gráfico de Dispersão", route: "est_graficos_quant_dispersao" },
        ];
        this.graficosQuantCont = [
            { title: "Histograma", route: "est_graficos_quant_histograma" },
            { title: "Polígono de Frequência", route: "est_graficos_quant_poligono_frequencia" },
        ];
    }
    EstGraficoDefinicaoComponent.prototype.ngOnInit = function () {
    };
    EstGraficoDefinicaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-grafico-definicao',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-grafico-definicao/est-grafico-definicao.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-grafico-definicao/est-grafico-definicao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstGraficoDefinicaoComponent);
    return EstGraficoDefinicaoComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-referencias/est-referencias.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Página de referências</p>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-referencias/est-referencias.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-referencias/est-referencias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstReferenciasComponent; });
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

var EstReferenciasComponent = /** @class */ (function () {
    function EstReferenciasComponent() {
    }
    EstReferenciasComponent.prototype.ngOnInit = function () { };
    EstReferenciasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-referencias',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-referencias/est-referencias.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-referencias/est-referencias.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstReferenciasComponent);
    return EstReferenciasComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-sidebar/est-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"rp-sidebar\">\r\n  <ul class=\"list-group list-group-collapse\">\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['est_definicao']\">\r\n      Definição\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['est_apresentacao']\">\r\n      Apresentação de dados\r\n    </li>\r\n    <li id=\"selecionado\" class=\"list-group-item list-group-item-action\" [routerLink]=\"['est_medida_isolado']\">\r\n      Medidas de Tendência Central, Dispersão, Assimetria e Curtose\r\n    </li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-sidebar/est-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".list-group-item:first-child {\n  border-radius: 0 !important; }\n\n.active {\n  z-index: 2;\n  color: #fff;\n  background-color: coral !important;\n  border-color: coral !important; }\n\n#selecionado:hover {\n  color: #fff;\n  background-color: coral; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-sidebar/est-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstSidebarComponent; });
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

var EstSidebarComponent = /** @class */ (function () {
    function EstSidebarComponent() {
    }
    EstSidebarComponent.prototype.ngOnInit = function () {
    };
    EstSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-sidebar',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-sidebar/est-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-sidebar/est-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstSidebarComponent);
    return EstSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-view/est-view.component.html":
/***/ (function(module, exports) {

module.exports = "<ifmath-ng-base-view>\r\n  <est-sidebar class=\"slidebar\"></est-sidebar>\r\n  <router-outlet  class=\"content\"></router-outlet>\r\n</ifmath-ng-base-view>\r\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-view/est-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-view/est-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstViewComponent; });
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

var EstViewComponent = /** @class */ (function () {
    function EstViewComponent() {
    }
    EstViewComponent.prototype.ngOnInit = function () {
    };
    EstViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-view',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-view/est-view.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-view/est-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstViewComponent);
    return EstViewComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/estatistica-descritiva.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstatisticaDescritivaModule", function() { return EstatisticaDescritivaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__estatistica_descritiva_routing__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/estatistica-descritiva.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_est_shared_module__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/est-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_est_view_est_view_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-view/est-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_est_sidebar_est_sidebar_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-sidebar/est-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_est_definicao_est_definicao_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-definicao/est-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_est_referencias_est_referencias_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-referencias/est-referencias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_est_apresentacao_est_apresentacao_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-apresentacao/est-apresentacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_est_grafico_definicao_est_grafico_definicao_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-grafico-definicao/est-grafico-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Graficos_Qualitativos_est_grafico_quali_setores_est_grafico_quali_setores_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Graficos_Qualitativos_est_grafico_quali_barras_est_grafico_quali_barras_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Graficos_Qualitativos_est_grafico_quali_colunas_est_grafico_quali_colunas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Graficos_Qualitativos_est_grafico_quali_barras_multiplas_est_grafico_quali_barras_multiplas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Graficos_Qualitativos_est_grafico_quali_colunas_multiplas_est_grafico_quali_colunas_multiplas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_Graficos_Quantitativos_est_grafico_quant_linhas_est_grafico_quant_linhas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_Graficos_Quantitativos_est_grafico_quant_colunas_e_linhas_est_grafico_quant_colunas_e_linhas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_Graficos_Quantitativos_est_grafico_quant_colunas_est_grafico_quant_colunas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Graficos_Quantitativos_est_grafico_quant_histograma_est_grafico_quant_histograma_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_Graficos_Quantitativos_est_grafico_quant_polig_freq_est_grafico_quant_polig_freq_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-polig-freq/est-grafico-quant-polig-freq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_Graficos_Quantitativos_est_grafico_quant_dispersao_est_grafico_quant_dispersao_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_Medidas_est_medida_isolado_est_medida_isolado_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-isolado/est-medida-isolado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_Medidas_est_medida_agrupado_est_medida_agrupado_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-agrupado/est-medida-agrupado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_Medidas_est_medida_classe_est_medida_classe_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-classe/est-medida-classe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Componentes





//Gráficos












//Medidas



var EstatisticaDescritivaModule = /** @class */ (function () {
    function EstatisticaDescritivaModule() {
    }
    EstatisticaDescritivaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_est_shared_module__["a" /* EstSharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__estatistica_descritiva_routing__["a" /* EstatisticaDescritivaRouting */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_est_view_est_view_component__["a" /* EstViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_est_sidebar_est_sidebar_component__["a" /* EstSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_est_definicao_est_definicao_component__["a" /* EstDefinicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_est_referencias_est_referencias_component__["a" /* EstReferenciasComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_est_apresentacao_est_apresentacao_component__["a" /* EstApresentacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_est_grafico_definicao_est_grafico_definicao_component__["a" /* EstGraficoDefinicaoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_Graficos_Qualitativos_est_grafico_quali_barras_est_grafico_quali_barras_component__["a" /* EstGraficoQualiBarrasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_Graficos_Qualitativos_est_grafico_quali_colunas_est_grafico_quali_colunas_component__["a" /* EstGraficoQualiColunasComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_Graficos_Qualitativos_est_grafico_quali_setores_est_grafico_quali_setores_component__["a" /* EstGraficoQualiSetoresComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_Graficos_Qualitativos_est_grafico_quali_barras_multiplas_est_grafico_quali_barras_multiplas_component__["a" /* EstGraficoQualiBarrasMultiplasComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_Graficos_Qualitativos_est_grafico_quali_colunas_multiplas_est_grafico_quali_colunas_multiplas_component__["a" /* EstGraficoQualiColunasMultiplasComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_Graficos_Quantitativos_est_grafico_quant_linhas_est_grafico_quant_linhas_component__["a" /* EstGraficoQuantLinhasComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_Graficos_Quantitativos_est_grafico_quant_colunas_e_linhas_est_grafico_quant_colunas_e_linhas_component__["a" /* EstGraficoQuantColunasELinhasComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_Graficos_Quantitativos_est_grafico_quant_colunas_est_grafico_quant_colunas_component__["a" /* EstGraficoQuantColunasComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_Graficos_Quantitativos_est_grafico_quant_histograma_est_grafico_quant_histograma_component__["a" /* EstGraficoQuantHistogramaComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_Graficos_Quantitativos_est_grafico_quant_polig_freq_est_grafico_quant_polig_freq_component__["a" /* EstGraficoQuantPoligFreqComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_Graficos_Quantitativos_est_grafico_quant_dispersao_est_grafico_quant_dispersao_component__["a" /* EstGraficoQuantDispersaoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_Medidas_est_medida_isolado_est_medida_isolado_component__["a" /* EstMedidaIsoladoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_Medidas_est_medida_agrupado_est_medida_agrupado_component__["a" /* EstMedidaAgrupadoComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_Medidas_est_medida_classe_est_medida_classe_component__["a" /* EstMedidaClasseComponent */],
            ]
        })
    ], EstatisticaDescritivaModule);
    return EstatisticaDescritivaModule;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/estatistica-descritiva.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstatisticaDescritivaRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_est_definicao_est_definicao_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-definicao/est-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_est_apresentacao_est_apresentacao_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-apresentacao/est-apresentacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_est_referencias_est_referencias_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-referencias/est-referencias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_est_view_est_view_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-view/est-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_est_grafico_definicao_est_grafico_definicao_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/est-grafico-definicao/est-grafico-definicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Graficos_Qualitativos_est_grafico_quali_setores_est_grafico_quali_setores_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-setores/est-grafico-quali-setores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Graficos_Qualitativos_est_grafico_quali_barras_est_grafico_quali_barras_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras/est-grafico-quali-barras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Graficos_Qualitativos_est_grafico_quali_colunas_est_grafico_quali_colunas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas/est-grafico-quali-colunas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Graficos_Qualitativos_est_grafico_quali_barras_multiplas_est_grafico_quali_barras_multiplas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-barras-multiplas/est-grafico-quali-barras-multiplas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Graficos_Qualitativos_est_grafico_quali_colunas_multiplas_est_grafico_quali_colunas_multiplas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Qualitativos/est-grafico-quali-colunas-multiplas/est-grafico-quali-colunas-multiplas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Graficos_Quantitativos_est_grafico_quant_linhas_est_grafico_quant_linhas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-linhas/est-grafico-quant-linhas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Graficos_Quantitativos_est_grafico_quant_colunas_e_linhas_est_grafico_quant_colunas_e_linhas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas-e-linhas/est-grafico-quant-colunas-e-linhas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Graficos_Quantitativos_est_grafico_quant_colunas_est_grafico_quant_colunas_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-colunas/est-grafico-quant-colunas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Graficos_Quantitativos_est_grafico_quant_histograma_est_grafico_quant_histograma_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-histograma/est-grafico-quant-histograma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Graficos_Quantitativos_est_grafico_quant_polig_freq_est_grafico_quant_polig_freq_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-polig-freq/est-grafico-quant-polig-freq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Graficos_Quantitativos_est_grafico_quant_dispersao_est_grafico_quant_dispersao_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Graficos/Quantitativos/est-grafico-quant-dispersao/est-grafico-quant-dispersao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_Medidas_est_medida_isolado_est_medida_isolado_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-isolado/est-medida-isolado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_Medidas_est_medida_agrupado_est_medida_agrupado_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-agrupado/est-medida-agrupado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_Medidas_est_medida_classe_est_medida_classe_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/components/Medidas/est-medida-classe/est-medida-classe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Componentes




//Gráficos












//Medidas



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__components_est_view_est_view_component__["a" /* EstViewComponent */],
        children: [
            {
                path: '',
                redirectTo: 'est_definicao',
                pathMatch: 'full',
            },
            //Rotas menu lateral principal
            {
                path: 'est_definicao',
                component: __WEBPACK_IMPORTED_MODULE_2__components_est_definicao_est_definicao_component__["a" /* EstDefinicaoComponent */]
            },
            {
                path: 'est_apresentacao',
                component: __WEBPACK_IMPORTED_MODULE_3__components_est_apresentacao_est_apresentacao_component__["a" /* EstApresentacaoComponent */]
            },
            {
                path: 'est_referencias',
                component: __WEBPACK_IMPORTED_MODULE_4__components_est_referencias_est_referencias_component__["a" /* EstReferenciasComponent */]
            },
            //Rotas Gráficos
            {
                path: 'est_graficos',
                component: __WEBPACK_IMPORTED_MODULE_6__components_est_grafico_definicao_est_grafico_definicao_component__["a" /* EstGraficoDefinicaoComponent */]
            },
            {
                path: 'est_graficos_setores',
                component: __WEBPACK_IMPORTED_MODULE_7__components_Graficos_Qualitativos_est_grafico_quali_setores_est_grafico_quali_setores_component__["a" /* EstGraficoQualiSetoresComponent */]
            },
            {
                path: 'est_graficos_barras',
                component: __WEBPACK_IMPORTED_MODULE_8__components_Graficos_Qualitativos_est_grafico_quali_barras_est_grafico_quali_barras_component__["a" /* EstGraficoQualiBarrasComponent */]
            },
            {
                path: 'est_graficos_colunas',
                component: __WEBPACK_IMPORTED_MODULE_9__components_Graficos_Qualitativos_est_grafico_quali_colunas_est_grafico_quali_colunas_component__["a" /* EstGraficoQualiColunasComponent */]
            },
            {
                path: 'est_graficos_barras_mul',
                component: __WEBPACK_IMPORTED_MODULE_10__components_Graficos_Qualitativos_est_grafico_quali_barras_multiplas_est_grafico_quali_barras_multiplas_component__["a" /* EstGraficoQualiBarrasMultiplasComponent */]
            },
            {
                path: 'est_graficos_colunas_mul',
                component: __WEBPACK_IMPORTED_MODULE_11__components_Graficos_Qualitativos_est_grafico_quali_colunas_multiplas_est_grafico_quali_colunas_multiplas_component__["a" /* EstGraficoQualiColunasMultiplasComponent */]
            },
            {
                path: 'est_graficos_linhas',
                component: __WEBPACK_IMPORTED_MODULE_12__components_Graficos_Quantitativos_est_grafico_quant_linhas_est_grafico_quant_linhas_component__["a" /* EstGraficoQuantLinhasComponent */]
            },
            {
                path: 'est_graficos_colunas_e_linhas',
                component: __WEBPACK_IMPORTED_MODULE_13__components_Graficos_Quantitativos_est_grafico_quant_colunas_e_linhas_est_grafico_quant_colunas_e_linhas_component__["a" /* EstGraficoQuantColunasELinhasComponent */]
            },
            {
                path: 'est_graficos_quant_colunas',
                component: __WEBPACK_IMPORTED_MODULE_14__components_Graficos_Quantitativos_est_grafico_quant_colunas_est_grafico_quant_colunas_component__["a" /* EstGraficoQuantColunasComponent */]
            },
            {
                path: 'est_graficos_quant_histograma',
                component: __WEBPACK_IMPORTED_MODULE_15__components_Graficos_Quantitativos_est_grafico_quant_histograma_est_grafico_quant_histograma_component__["a" /* EstGraficoQuantHistogramaComponent */]
            },
            {
                path: 'est_graficos_quant_poligono_frequencia',
                component: __WEBPACK_IMPORTED_MODULE_16__components_Graficos_Quantitativos_est_grafico_quant_polig_freq_est_grafico_quant_polig_freq_component__["a" /* EstGraficoQuantPoligFreqComponent */]
            },
            {
                path: 'est_graficos_quant_dispersao',
                component: __WEBPACK_IMPORTED_MODULE_17__components_Graficos_Quantitativos_est_grafico_quant_dispersao_est_grafico_quant_dispersao_component__["a" /* EstGraficoQuantDispersaoComponent */]
            },
            // Rotas Medidas
            {
                path: 'est_medida_isolado',
                component: __WEBPACK_IMPORTED_MODULE_18__components_Medidas_est_medida_isolado_est_medida_isolado_component__["a" /* EstMedidaIsoladoComponent */]
            },
            {
                path: 'est_medida_agrupado',
                component: __WEBPACK_IMPORTED_MODULE_19__components_Medidas_est_medida_agrupado_est_medida_agrupado_component__["a" /* EstMedidaAgrupadoComponent */]
            },
            {
                path: 'est_medida_classe',
                component: __WEBPACK_IMPORTED_MODULE_20__components_Medidas_est_medida_classe_est_medida_classe_component__["a" /* EstMedidaClasseComponent */]
            },
        ]
    }];
var EstatisticaDescritivaRouting = /** @class */ (function () {
    function EstatisticaDescritivaRouting() {
    }
    EstatisticaDescritivaRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */]]
        })
    ], EstatisticaDescritivaRouting);
    return EstatisticaDescritivaRouting;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-base-view/est-base-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ifmath-view\">\r\n\r\n  <div class=\"row mt-2\">\r\n\r\n    <!-- Botões e conteúdo -->\r\n    <div class=\"col-lg-7 col-12\">\r\n      <!-- Botões -->\r\n      <div class=\"row justify-content-around\">\r\n        <ng-content select=\".btn-container\"></ng-content>\r\n      </div>\r\n      <!--Coloca os componentes centrais da tela sobre uma barra de rolagem-->\r\n      <div>\r\n        <ng-content select=\".scroll-center\"></ng-content>\r\n      </div>\r\n      <!-- Inputs -->\r\n      <div class=\"form-group row\">\r\n        <ng-content select=\".input-container\"></ng-content>\r\n      </div>\r\n      <!-- Conteúdo abaixo dos botões -->\r\n      <div class=\"row justify-content-center\">\r\n        <ng-content select=\".content-container\"></ng-content>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Propriedades -->\r\n    <div class=\"col-lg-5 col-12\">\r\n      <ng-content select=\".rightbar\"></ng-content>\r\n    </div>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-base-view/est-base-view.component.scss":
/***/ (function(module, exports) {

module.exports = ".ifmath-view {\n  height: 100%;\n  width: 100%;\n  background-color: #FFF; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-base-view/est-base-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstBaseViewComponent; });
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

var EstBaseViewComponent = /** @class */ (function () {
    function EstBaseViewComponent() {
    }
    EstBaseViewComponent.prototype.ngOnInit = function () {
    };
    EstBaseViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-base-view',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-base-view/est-base-view.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-base-view/est-base-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstBaseViewComponent);
    return EstBaseViewComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn-grafico/est-btn-grafico.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default m-2\" data-toggle=\"modal\" [attr.data-target]=\"modalTarget\">\r\n  {{ name }}\r\n</button>"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn-grafico/est-btn-grafico.component.scss":
/***/ (function(module, exports) {

module.exports = ".ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n  .ifmath-theme .container {\n    margin-bottom: 2%; }\n  .ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n  .ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n  .ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n  .ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n  .ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n  .ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n  .ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n  .ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n  @media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n  .ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n  .ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n  .ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n  .ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n  .ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n  .ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n  .ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n  .ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n  .ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n  .ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n  .ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n  .ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n  .ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n  .ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n  .ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n  .ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n  .ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n  .ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n  .ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n  .ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n  .ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n  .ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n  button {\n  border-color: #ff7f50;\n  background-color: black;\n  color: #ff7f50;\n  white-space: normal;\n  min-width: -webkit-fill-available; }\n  button:hover {\n  border-color: #ff7f50;\n  background-color: #ff7f50;\n  color: black; }\n  .selected {\n  background-color: #ff7f50; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn-grafico/est-btn-grafico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstBtnGraficoComponent; });
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

var EstBtnGraficoComponent = /** @class */ (function () {
    function EstBtnGraficoComponent() {
        this.name = '';
        this.modalTarget = '';
    }
    EstBtnGraficoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], EstBtnGraficoComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], EstBtnGraficoComponent.prototype, "modalTarget", void 0);
    EstBtnGraficoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-btn-grafico',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn-grafico/est-btn-grafico.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn-grafico/est-btn-grafico.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstBtnGraficoComponent);
    return EstBtnGraficoComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn/est-btn.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default m-2\" [routerLink]=\"['../', route]\">\r\n  {{ name }}\r\n</button>\r\n\r\n<!--[routerLink]=\"['cf_definicao']\"-->\r\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn/est-btn.component.scss":
/***/ (function(module, exports) {

module.exports = ".ifmath-theme {\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px; }\n  .ifmath-theme .container {\n    margin-bottom: 2%; }\n  .ifmath-theme__image__container {\n    margin-top: 0.0px;\n    width: 100%; }\n  .ifmath-theme__image__container--blackblackgrey {\n      background-color: #CFD5D2; }\n  .ifmath-theme__image__container--green {\n      background-color: #359d6e; }\n  .ifmath-theme__image__container--purple {\n      background-color: #d1a3ff; }\n  .ifmath-theme__image__container--coral {\n      background-color: #ff7f50; }\n  .ifmath-theme__image__container--blue {\n      background-color: #5ca6e3; }\n  .ifmath-theme__image__right {\n    margin-top: 5px;\n    text-align: right; }\n  .ifmath-theme__titled__centralized {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .ifmath-theme h4 {\n    margin-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n    color: #474747; }\n  @media screen and (max-width: 768px) {\n    .ifmath-theme h1 {\n      font-size: 3em; }\n    .ifmath-theme img {\n      display: none; } }\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n    .ifmath-theme h1 {\n      font-size: 3.5em; }\n    .ifmath-theme img {\n      height: 95px; } }\n  .ifmath-theme a {\n    height: 75px;\n    width: 250px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    margin-left: 10px; }\n  .ifmath-theme .col-lg-4,\n  .ifmath-theme .col-md-6 {\n    text-align: center; }\n  .ifmath-theme .btn {\n    white-space: normal;\n    margin-top: 15px;\n    padding: inherit; }\n  .ifmath-theme .btn-outline-success {\n      height: 80px;\n      width: 270px;\n      border-width: 2px;\n      font-weight: bold; }\n  .ifmath-theme .btn-outline-success--blackgrey {\n        border-color: #CFD5D2;\n        color: #CFD5D2; }\n  .ifmath-theme .btn-outline-success--blackgrey:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #CFD5D2;\n          border-color: #8f9290; }\n  .ifmath-theme .btn-outline-success--blackgrey:active, .ifmath-theme .btn-outline-success--blackgrey:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #CFD5D2 !important;\n          border-color: #8f9290 !important; }\n  .ifmath-theme .btn-outline-success--blackgrey.disabled, .ifmath-theme .btn-outline-success--blackgrey:disabled {\n          color: #CFD5D2; }\n  .ifmath-theme .btn-outline-success--blackgrey.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--green {\n        border-color: #53d89c;\n        color: #359d6e; }\n  .ifmath-theme .btn-outline-success--green:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #359d6e;\n          border-color: #53d89c; }\n  .ifmath-theme .btn-outline-success--green:active, .ifmath-theme .btn-outline-success--green:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #359d6e !important;\n          border-color: #53d89c !important; }\n  .ifmath-theme .btn-outline-success--green.disabled, .ifmath-theme .btn-outline-success--green:disabled {\n          color: #359d6e; }\n  .ifmath-theme .btn-outline-success--green.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--purple {\n        border-color: #9a4ee6;\n        color: #d1a3ff; }\n  .ifmath-theme .btn-outline-success--purple:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #d1a3ff;\n          border-color: #9a4ee6; }\n  .ifmath-theme .btn-outline-success--purple:active, .ifmath-theme .btn-outline-success--purple:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #d1a3ff !important;\n          border-color: #9a4ee6 !important; }\n  .ifmath-theme .btn-outline-success--purple.disabled, .ifmath-theme .btn-outline-success--purple:disabled {\n          color: #d1a3ff; }\n  .ifmath-theme .btn-outline-success--purple.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--coral {\n        border-color: #ff7f50;\n        color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #ff7f50;\n          border-color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral:active, .ifmath-theme .btn-outline-success--coral:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #ff7f50 !important;\n          border-color: #ff7f50 !important; }\n  .ifmath-theme .btn-outline-success--coral.disabled, .ifmath-theme .btn-outline-success--coral:disabled {\n          color: #ff7f50; }\n  .ifmath-theme .btn-outline-success--coral.disabled:hover {\n          color: black; }\n  .ifmath-theme .btn-outline-success--blue {\n        border-color: #5ca6e3;\n        color: #5ca6e3; }\n  .ifmath-theme .btn-outline-success--blue:hover {\n          font-weight: bold;\n          color: black;\n          background-color: #5ca6e3;\n          border-color: #4683b4; }\n  .ifmath-theme .btn-outline-success--blue:active, .ifmath-theme .btn-outline-success--blue:focus {\n          color: black;\n          outline: none !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n          background-color: #5ca6e3 !important;\n          border-color: #4683b4 !important; }\n  .ifmath-theme .btn-outline-success--blue.disabled, .ifmath-theme .btn-outline-success--blue:disabled {\n          color: #5ca6e3; }\n  .ifmath-theme .btn-outline-success--blue.disabled:hover {\n          color: black; }\n  button {\n  border-color: #ff7f50;\n  background-color: black;\n  color: #ff7f50;\n  white-space: normal;\n  min-width: -webkit-fill-available; }\n  button:hover {\n  border-color: #ff7f50;\n  background-color: #ff7f50;\n  color: black; }\n  .selected {\n  background-color: #ff7f50; }\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn/est-btn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstBtnComponent; });
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

var EstBtnComponent = /** @class */ (function () {
    function EstBtnComponent() {
        this.name = '';
        this.route = '';
    }
    EstBtnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], EstBtnComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], EstBtnComponent.prototype, "route", void 0);
    EstBtnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-btn',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn/est-btn.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn/est-btn.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstBtnComponent);
    return EstBtnComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-chart/est-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Esse é o meu Chart</p>\r\n<div id=\"divChart\">\r\n  <canvas id=\"estChart\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-chart/est-chart.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-chart/est-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstChartComponent; });
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

var EstChartComponent = /** @class */ (function () {
    function EstChartComponent() {
    }
    EstChartComponent.prototype.ngOnInit = function () {
    };
    EstChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ifmath-est-chart',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-chart/est-chart.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-chart/est-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstChartComponent);
    return EstChartComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-form-msg-error/est-form-msg-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mostrarErro\">\r\n  <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\r\n  <span class=\"sr-only\">(error)</span>\r\n  <div class=\"alert alert-danger errorDiv\" role=\"alert\">\r\n    {{ msgErro }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-form-msg-error/est-form-msg-error.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-form-msg-error/est-form-msg-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstFormMsgErrorComponent; });
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

var EstFormMsgErrorComponent = /** @class */ (function () {
    function EstFormMsgErrorComponent() {
    }
    EstFormMsgErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], EstFormMsgErrorComponent.prototype, "msgErro", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EstFormMsgErrorComponent.prototype, "mostrarErro", void 0);
    EstFormMsgErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-form-msg-error',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-form-msg-error/est-form-msg-error.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-form-msg-error/est-form-msg-error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstFormMsgErrorComponent);
    return EstFormMsgErrorComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-rightbar/est-rightbar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-rightbar/est-rightbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-rightbar/est-rightbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstRightbarComponent; });
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

var EstRightbarComponent = /** @class */ (function () {
    function EstRightbarComponent() {
    }
    EstRightbarComponent.prototype.ngOnInit = function () {
    };
    EstRightbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'est-rightbar',
            template: __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-rightbar/est-rightbar.component.html"),
            styles: [__webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-rightbar/est-rightbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstRightbarComponent);
    return EstRightbarComponent;
}());



/***/ }),

/***/ "./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/est-shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstSharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_est_base_view_est_base_view_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-base-view/est-base-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_est_btn_est_btn_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn/est-btn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_est_rightbar_est_rightbar_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-rightbar/est-rightbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_est_chart_est_chart_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-chart/est-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_est_form_msg_error_est_form_msg_error_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-form-msg-error/est-form-msg-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_est_btn_grafico_est_btn_grafico_component__ = __webpack_require__("./src/app/views/estatistica-probabilidade/estatistica-descritiva/shared/components/est-btn-grafico/est-btn-grafico.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Components






var EstSharedModule = /** @class */ (function () {
    function EstSharedModule() {
    }
    EstSharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__components_est_base_view_est_base_view_component__["a" /* EstBaseViewComponent */], __WEBPACK_IMPORTED_MODULE_4__components_est_btn_est_btn_component__["a" /* EstBtnComponent */], __WEBPACK_IMPORTED_MODULE_8__components_est_btn_grafico_est_btn_grafico_component__["a" /* EstBtnGraficoComponent */], __WEBPACK_IMPORTED_MODULE_7__components_est_form_msg_error_est_form_msg_error_component__["a" /* EstFormMsgErrorComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__components_est_base_view_est_base_view_component__["a" /* EstBaseViewComponent */], __WEBPACK_IMPORTED_MODULE_4__components_est_btn_est_btn_component__["a" /* EstBtnComponent */], __WEBPACK_IMPORTED_MODULE_5__components_est_rightbar_est_rightbar_component__["a" /* EstRightbarComponent */], __WEBPACK_IMPORTED_MODULE_6__components_est_chart_est_chart_component__["a" /* EstChartComponent */], __WEBPACK_IMPORTED_MODULE_7__components_est_form_msg_error_est_form_msg_error_component__["a" /* EstFormMsgErrorComponent */], __WEBPACK_IMPORTED_MODULE_8__components_est_btn_grafico_est_btn_grafico_component__["a" /* EstBtnGraficoComponent */]]
        })
    ], EstSharedModule);
    return EstSharedModule;
}());



/***/ })

});
//# sourceMappingURL=estatistica-descritiva.module.chunk.js.map