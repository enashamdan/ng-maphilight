webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top navbar-inner\">\n    <div class=\"container\">\n\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" ng-init=\"navCollapsed = true\" ng-click=\"navCollapsed = !navCollapsed\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" uiSref=\"home\">Angular MapHilight</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" uib-collapse=\"navCollapsed\">\n            <ul class=\"nav navbar-nav\">\n                <li><a uiSref=\"home\">Home</a></li>\n                <li uib-dropdown>\n                    <a uib-dropdown-toggle href=\"\">Examples <b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a uiSref=\"example1\">Example 1</a></li>\n                        <li><a uiSref=\"example2\">Example 2</a></li>\n                        <li><a uiSref=\"example3\">Example 3</a></li>\n                    </ul>\n                </li>\n                <li><a uiSref=\"contact\">Contact</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1>Angular Maphilight</h1>\n        <p>Spice up your HTML image maps with Angular and highlighting!</p>\n    </div>\n</div>\n\n<div class=\"ui-view-container\">\n    <div ui-view></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maphilight_maphilight_module__ = __webpack_require__("../../../../../src/app/maphilight/maphilight.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__example1_example1_component__ = __webpack_require__("../../../../../src/app/example1/example1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__example2_example2_component__ = __webpack_require__("../../../../../src/app/example2/example2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__maphilight_maphilight_module__["a" /* MaphilightModule */],
                __WEBPACK_IMPORTED_MODULE_3__uirouter_angular__["UIRouterModule"].forRoot({ states: [
                        {
                            name: 'home',
                            url: '/home',
                            component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
                        },
                        {
                            name: 'example1',
                            url: '/example1',
                            component: __WEBPACK_IMPORTED_MODULE_7__example1_example1_component__["a" /* Example1Component */]
                        },
                        {
                            name: 'example2',
                            url: '/example2',
                            component: __WEBPACK_IMPORTED_MODULE_8__example2_example2_component__["a" /* Example2Component */]
                        },
                    ], useHash: true }),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__example1_example1_component__["a" /* Example1Component */],
                __WEBPACK_IMPORTED_MODULE_8__example2_example2_component__["a" /* Example2Component */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/example1/example1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/example1/example1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  example1 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/example1/example1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Example1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Example1Component = /** @class */ (function () {
    function Example1Component() {
    }
    Example1Component.prototype.ngOnInit = function () {
    };
    Example1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-example1',
            template: __webpack_require__("../../../../../src/app/example1/example1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/example1/example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Example1Component);
    return Example1Component;
}());



/***/ }),

/***/ "../../../../../src/app/example2/example2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/example2/example2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <div class=\"col-sm-12\">\n      <h2>Configuration Object:</h2>\n      <p class=\"lead\">You can customize your hilights throught by assigning a configuration object to the  <code>maphilight</code> element's <code>config</code> property.</p>\n    </div>\n  </div>\n  <div>\n    <label>\n      <input type=\"checkbox\" [(ngModel)]=\"hidden\" [value]=\"true\" name=\"hidden\"> Image is hidden\n    </label>\n  </div>\n  <div>\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-danger\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Always On</h3>\n        </div>\n        <div class=\"panel-body\">\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-3 col-sm-9\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"config.alwaysOn\" [value]=\"true\" name=\"alwaysOn\"> Always On\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-3 col-sm-9\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"config.neverOn\" [value]=\"true\" name=\"neverOn\" /> Never On\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-3 col-sm-9\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"config.fade\" [value]=\"true\" name=\"fade\" /> Fade\n                  </label>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Stroke</h3>\n        </div>\n        <div class=\"panel-body\">\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-3 col-sm-9\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"config.stroke\" [value]=\"true\" name=\"stroke\" /> Stroke\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"strokeColor\" class=\"col-sm-3 control-label\">Stroke Color</label>\n              <div class=\"col-sm-9\">\n                <input type=\"color\" class=\"form-control\" id=\"strokeColor\" placeholder=\"Stroke Color\" [(ngModel)]=\"config.strokeColor\" name=\"strokeColor\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"strokeWidth\" class=\"col-sm-3 control-label\">Stroke Width</label>\n              <div class=\"col-sm-9\">\n                <input type=\"number\" step=\"0.5\" class=\"form-control\" id=\"strokeWidth\" placeholder=\"Stroke Width\" [(ngModel)]=\"config.strokeWidth\" name=\"strokeWidth\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"strokeOpacity\" class=\"col-sm-3 control-label\">Stroke Opacity</label>\n              <div class=\"col-sm-9\">\n                <input type=\"number\" step=\"0.1\" class=\"form-control\" id=\"strokeOpacity\" placeholder=\"Stroke Opacity\" [(ngModel)]=\"config.strokeOpacity\" name=\"strokeOpacity\" />\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"panel panel-success\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Fill</h3>\n        </div>\n        <div class=\"panel-body\">\n\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-3 col-sm-9\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"config.fill\" [value]=\"true\" name=\"fill\" /> Fill\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"fillColor\" class=\"col-sm-3 control-label\">Fill Color</label>\n              <div class=\"col-sm-9\">\n                <input type=\"color\" class=\"form-control\" id=\"fillColor\" placeholder=\"Fill Color\" [(ngModel)]=\"config.fillColor\" name=\"fillColor\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"fillOpacity\" class=\"col-sm-3 control-label\">Fill Opacity</label>\n              <div class=\"col-sm-9\">\n                <input type=\"number\" step=\"0.1\" class=\"form-control\" id=\"fillOpacity\" placeholder=\"Fill Opacity\" [(ngModel)]=\"config.fillOpacity\" name=\"fillOpacity\" />\n              </div>\n            </div>\n          </form>\n\n\n        </div>\n      </div>\n\n\n      <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Shadow</h3>\n        </div>\n        <div class=\"panel-body\">\n\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-3 col-sm-9\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"config.shadow\" [value]=\"true\" name=\"shadow\" /> Shadow\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"shadowColor\" class=\"col-sm-3 control-label\">Shadow Color</label>\n              <div class=\"col-sm-9\">\n                <input type=\"color\" class=\"form-control\" id=\"shadowColor\" placeholder=\"Shadow Color\" [(ngModel)]=\"config.shadowColor\" name=\"shadowColor\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"shadowRadius\" class=\"col-sm-3 control-label\">Shadow Radius</label>\n              <div class=\"col-sm-9\">\n                <input type=\"number\" step=\"1\" class=\"form-control\" id=\"shadowRadius\" placeholder=\"Shadow Radius\" [(ngModel)]=\"config.shadowRadius\" name=\"shadowRadius\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"shadowOpacity\" class=\"col-sm-3 control-label\">Shadow Opacity</label>\n              <div class=\"col-sm-9\">\n                <input type=\"number\" step=\"0.1\" class=\"form-control\" id=\"shadowOpacity\" placeholder=\"Shadow Opacity\" [(ngModel)]=\"config.shadowOpacity\" name=\"shadowOpacity\" />\n              </div>\n            </div>\n          </form>\n\n\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"well\">\n        <maphilight\n          id=\"statesMap\"\n          [config]=\"config\"\n          [hidden]=\"hidden\"\n        >\n        <img src=\"assets/states_imgmap.gif\">\n\n        <map>\n          <area shape=\"poly\"\n          coords=\"27,5,25,9,26,13,26,24,26,30,31,34,33,40,40,41,45,42,52,42,57,42,66,44,74,46,77,34,79,20,79,15,61,10,43,5,40,11,28,5\"\n          alt=\"State Profile: Washington\" title=\"State Profile: Washington\" ng-click=\"clicked('h')\">\n          <area shape=\"poly\"\n          coords=\"26,30,23,34,22,40,20,44,18,49,17,54,15,57,11,62,11,66,9,71,10,73,34,80,51,85,63,87,67,73,70,65,69,62,76,52,73,46,58,42,44,42,37,41,33,39,30,34,25,31\"\n          alt=\"State Profile: Oregon\" title=\"State Profile: Oregon\">\n          <area shape=\"poly\"\n          coords=\"9,73,42,83,34,113,68,165,68,168,70,173,67,177,67,180,64,183,65,188,62,191,41,187,40,178,34,172,33,169,30,168,26,163,19,161,17,158,18,153,11,136,13,133,9,128,11,121,8,117,8,115,5,108,4,103,5,99,4,95,3,89,6,85,9,73\"\n          alt=\"State Profile: California\" title=\"State Profile: California\">\n          <area shape=\"poly\"\n          coords=\"80,15,87,16,85,29,89,35,94,44,91,53,96,54,97,61,100,65,101,69,104,67,108,68,112,67,115,70,111,96,64,87,70,64,69,60,76,52,74,46,80,15\"\n          alt=\"State Profile: Idaho\" title=\"State Profile: Idaho\">\n          <area shape=\"poly\" coords=\"42,83,86,92,74,156,71,155,68,165,34,112,42,83\"\n          alt=\"State Profile: Nevada\" title=\"State Profile: Nevada\">\n          <area shape=\"poly\"\n          coords=\"62,191,65,188,63,184,66,182,66,177,70,174,68,167,68,164,71,155,74,157,76,145,98,150,119,153,111,214,95,212,63,192\"\n          alt=\"State Profile: Arizona\" title=\"State Profile: Arizona\">\n          <area shape=\"poly\" coords=\"76,145,86,92,111,96,110,107,125,111,119,153,95,149,76,145\"\n          alt=\"State Profile: Utah\" title=\"State Profile: Utah\">\n          <area shape=\"poly\" coords=\"111,214,119,154,139,156,169,159,166,213,135,210,133,212,120,211,118,215\"\n          alt=\"State Profile: New Mexico\"\n          title=\"State Profile: New Mexico\">\n          <area shape=\"poly\" coords=\"178,159,180,116,148,114,125,111,119,153,145,157\"\n          alt=\"State Profile: Colorado\" title=\"State Profile: Colorado\">\n          <area shape=\"poly\" coords=\"110,107,135,113,165,115,168,72,115,66\" alt=\"State Profile: Wyoming\"\n          title=\"State Profile: Wyoming\">\n          <area shape=\"poly\"\n          coords=\"87,16,113,22,138,26,161,28,171,29,167,72,115,66,115,69,112,67,109,68,105,67,102,69,100,65,100,63,97,61,96,55,91,52,94,44,85,29\"\n          alt=\"State Profile: Montana\" title=\"State Profile: Montana\">\n          <area shape=\"poly\" coords=\"171,29,220,31,225,64,169,61\" alt=\"State Profile: North Dakota\"\n          title=\"State Profile: North Dakota\">\n          <area shape=\"poly\" coords=\"225,64,222,67,226,72,225,100,218,97,215,99,212,96,166,93,169,60\"\n          alt=\"State Profile: South Dakota\"\n          title=\"State Profile: South Dakota\">\n          <area shape=\"poly\"\n          coords=\"166,93,200,95,212,97,216,99,218,97,225,102,229,116,233,128,207,127,180,127,180,117,165,115\"\n          alt=\"State Profile: Nebraska\"\n          title=\"State Profile: Nebraska\">\n          <area shape=\"poly\" coords=\"179,127,178,159,212,161,240,161,241,137,238,134,238,129,221,127\"\n          alt=\"State Profile: Kansas\" title=\"State Profile: Kansas\">\n          <area shape=\"poly\"\n          coords=\"169,159,169,165,194,166,195,187,199,187,201,190,203,190,206,192,208,191,210,194,214,193,220,194,225,196,230,194,236,194,241,197,242,196,242,178,240,173,240,161\"\n          alt=\"State Profile: Oklahoma\" title=\"State Profile: Oklahoma\">\n          <area shape=\"poly\"\n          coords=\"168,165,194,166,195,187,199,187,200,190,204,192,207,191,210,194,213,193,226,196,230,194,236,195,240,198,244,197,247,214,249,221,251,229,249,236,243,240,239,237,239,243,229,251,224,250,225,253,221,254,219,256,217,259,215,262,213,264,214,268,217,280,215,281,198,274,195,267,194,263,187,255,186,248,178,239,173,239,167,238,162,245,149,237,147,228,133,212,136,211,166,213\"\n          alt=\"State Profile: Texas\" title=\"State Profile: Texas\">\n          <area shape=\"poly\"\n          coords=\"245,204,272,203,271,206,274,209,269,223,275,224,284,224,285,229,287,231,282,232,285,234,287,236,290,234,289,239,294,243,292,245,285,240,283,244,281,242,278,244,271,240,269,239,263,241,255,238,248,238,251,227\"\n          alt=\"State Profile: Louisiana\" title=\"State Profile: Louisiana\">\n          <area shape=\"poly\"\n          coords=\"240,166,269,166,278,166,276,169,283,170,280,181,276,187,271,197,273,200,272,203,245,204,245,198,242,198\"\n          alt=\"State Profile: Arkansas\" title=\"State Profile: Arkansas\">\n          <area shape=\"poly\"\n          coords=\"231,122,242,122,263,121,265,123,265,129,272,137,276,138,276,142,275,144,281,150,285,158,287,161,285,165,283,170,277,169,278,166,241,166,241,136,238,134,238,129,233,128\"\n          alt=\"State Profile: Missouri\" title=\"State Profile: Missouri\">\n          <area shape=\"poly\"\n          coords=\"225,92,228,91,265,91,267,92,266,94,271,99,272,101,274,104,275,107,273,110,269,112,269,117,265,122,253,121,231,122,224,100\"\n          alt=\"State Profile: Iowa\" title=\"State Profile: Iowa\">\n          <area shape=\"poly\"\n          coords=\"274,41,264,47,258,53,255,64,254,74,255,78,259,79,262,84,265,86,264,91,226,92,227,77,227,71,223,67,224,63,225,58,220,32,230,32,236,30,244,36,250,34,256,37,261,40,265,38\"\n          alt=\"State Profile: Minnesota\" title=\"State Profile: Minnesota\">\n          <area shape=\"poly\"\n          coords=\"298,180,297,216,298,223,298,229,293,230,287,233,284,224,272,224,270,223,273,210,272,204,273,199,271,196,279,181\"\n          alt=\"State Profile: Mississippi\" title=\"State Profile: Mississippi\">\n          <area shape=\"poly\"\n          coords=\"285,164,289,164,291,163,293,164,297,161,299,162,303,161,332,158,352,156,345,163,337,168,332,172,331,175,319,178,279,181\"\n          alt=\"State Profile: Tennessee\" title=\"State Profile: Tennessee\">\n          <area shape=\"poly\"\n          coords=\"286,164,289,161,285,158,290,156,294,153,295,149,302,149,308,146,312,145,313,142,321,135,329,135,333,136,341,136,342,141,347,146,343,150,341,154,336,158\"\n          alt=\"State Profile: Kentucky\" title=\"State Profile: Kentucky\">\n          <area shape=\"poly\"\n          coords=\"270,98,294,97,293,100,297,106,298,131,296,133,298,138,296,144,295,147,295,152,285,158,282,149,275,144,276,138,265,129,265,122,270,117,269,112,274,107,274,103\"\n          alt=\"State Profile: Illinois\" title=\"State Profile: Illinois\">\n          <area shape=\"poly\"\n          coords=\"258,54,262,54,265,52,268,55,272,54,275,58,279,57,282,61,287,60,293,71,289,78,292,72,293,71,294,77,292,85,293,92,293,97,282,98,270,98,266,94,265,90,264,86,260,80,254,77,254,69,256,60\"\n          alt=\"State Profile: Wisconsin\" title=\"State Profile: Wisconsin\">\n          <area shape=\"poly\"\n          coords=\"270,54,276,52,280,50,285,45,287,45,283,50,288,50,291,53,297,54,302,51,306,51,309,50,310,53,314,53,317,57,311,58,308,58,300,61,296,62,292,69,287,61,283,60,279,57,275,58,273,55\"\n          alt=\"State Profile: Michigan\" title=\"State Profile: Michigan\">\n          <area shape=\"poly\"\n          coords=\"304,103,323,103,327,102,334,93,329,92,334,83,331,76,326,78,324,82,322,80,326,70,324,64,312,61,309,67,308,69,304,73,302,84,306,94\"\n          alt=\"State Profile: Michigan\" title=\"State Profile: Michigan\">\n          <area shape=\"poly\"\n          coords=\"303,103,318,103,321,134,314,142,312,145,303,149,294,149,298,139,296,133,298,131,297,105\"\n          alt=\"State Profile: Indiana\"\n          title=\"State Profile: Indiana\">\n          <area shape=\"poly\"\n          coords=\"298,180,320,179,329,208,327,210,328,220,306,223,307,228,305,230,303,226,301,229,298,229,296,218\"\n          alt=\"State Profile: Alabama\" title=\"State Profile: Alabama\">\n          <area shape=\"poly\"\n          coords=\"318,103,326,103,332,103,336,105,351,96,352,116,351,123,346,125,341,136,321,135\"\n          alt=\"State Profile: Ohio\"\n          title=\"State Profile: Ohio\">\n          <area shape=\"poly\"\n          coords=\"308,228,306,224,328,220,331,223,349,221,356,222,357,218,361,218,377,247,376,249,382,260,382,265,382,269,381,274,375,277,373,272,367,268,363,263,363,259,360,260,357,254,357,250,354,250,354,240,349,236,338,228,334,232,328,234,326,231,323,228,320,229,317,227\"\n          alt=\"State Profile: Florida\" title=\"State Profile: Florida\">\n          <area shape=\"poly\"\n          coords=\"320,178,338,176,340,179,343,180,347,187,354,190,357,193,363,204,363,210,361,213,362,218,357,218,355,222,346,222,331,223,327,219,327,209,329,205\"\n          alt=\"State Profile: Georgia\" title=\"State Profile: Georgia\">\n          <area shape=\"poly\"\n          coords=\"339,176,343,173,358,171,360,173,370,173,382,180,379,186,380,190,376,191,374,194,369,193,369,197,365,198,366,200,363,204,357,193,348,188,341,179\"\n          alt=\"State Profile: South Carolina\" title=\"State Profile: South Carolina\">\n          <area shape=\"poly\"\n          coords=\"329,176,340,175,346,173,357,171,360,173,370,173,381,180,386,178,397,166,396,159,402,158,407,161,395,155,393,153,396,152,400,151,404,156,401,147,351,157,339,167\"\n          alt=\"State Profile: North Carolina\" title=\"State Profile: North Carolina\">\n          <area shape=\"poly\"\n          coords=\"338,157,355,156,400,147,397,142,390,142,394,140,397,139,399,133,397,136,394,138,394,135,387,130,384,130,384,124,376,120,369,129,368,131,366,138,364,134,357,145,350,152,348,148,343,150\"\n          alt=\"State Profile: Virginia\" title=\"State Profile: Virginia\">\n          <area shape=\"poly\"\n          coords=\"353,116,354,119,365,117,363,122,373,117,375,120,367,132,363,132,356,148,351,151,347,146,340,136,349,124\"\n          alt=\"State Profile: West Virginia\" title=\"State Profile: West Virginia\">\n          <area shape=\"rect\" coords=\"402,129,444,139\" alt=\"State Profile: Maryland\"\n          title=\"State Profile: Maryland\">\n          <area shape=\"poly\"\n          coords=\"364,118,393,113,396,126,402,125,401,128,399,136,396,130,394,125,390,124,391,132,387,129,385,129,384,124,372,118,363,122\"\n          alt=\"State Profile: Maryland\" title=\"State Profile: Maryland\">\n          <area shape=\"poly\" coords=\"394,113,396,126,402,124,397,118\" alt=\"State Profile: Delaware\"\n          title=\"State Profile: Delaware\">\n          <area shape=\"rect\" coords=\"405,119,448,128\" alt=\"State Profile: Delaware\"\n          title=\"State Profile: Delaware\">\n          <area shape=\"poly\"\n          coords=\"357,93,361,93,363,92,365,93,390,90,396,95,395,101,398,106,395,115,393,113,355,119,352,117,351,96\"\n          alt=\"State Profile: Pensylvania\" title=\"State Profile: Pennsylvania\">\n          <area shape=\"poly\"\n          coords=\"396,95,405,98,403,100,406,106,405,111,403,118,398,118,395,115,397,110,398,105,395,101\"\n          alt=\"State Profile: New Jersey\"\n          title=\"State Profile: New Jersey\">\n          <area shape=\"rect\" coords=\"402,109,442,118\" alt=\"State Profile: New Jersey\"\n          title=\"State Profile: New Jersey\">\n          <area shape=\"poly\"\n          coords=\"361,87,358,82,362,79,378,76,380,65,386,56,397,53,401,66,405,77,405,85,405,91,404,94,405,95,408,96,416,92,418,93,406,101,404,98,397,95,397,96,389,90,357,94\"\n          alt=\"State Profile: New York\" title=\"State Profile: New York\">\n          <area shape=\"rect\" coords=\"352,68,383,76\" alt=\"State Profile: New York\"\n          title=\"State Profile: New York\">\n          <area shape=\"rect\" coords=\"395,141,426,150\" alt=\"State Profile: Virginia\"\n          title=\"State Profile: Virginia\">\n          <area shape=\"rect\" coords=\"329,85,350,93\" alt=\"State Profile: Michigan\"\n          title=\"State Profile: Michigan\">\n          <area shape=\"rect\" coords=\"364,181,401,196\" alt=\"State Profile: South Carolina\"\n          title=\"State Profile: South Carolina\">\n          <area shape=\"rect\" coords=\"392,157,414,171\" alt=\"State Profile: North Carolina\"\n          title=\"State Profile: North Carolina\">\n          <area shape=\"poly\" coords=\"130,315,136,311,136,315,134,317\" alt=\"State Profile: Alaska\"\n          title=\"State Profile: Alaska\">\n          <area shape=\"poly\"\n          coords=\"161,255,160,258,162,261,162,270,163,273,161,276,163,281,164,293,163,296,163,301,166,301,169,305,179,305,184,309,188,317,192,317,194,325,191,325,187,324,184,314,182,319,172,308,162,304,157,304,151,299,147,299,150,302,144,305,138,307,140,299,133,307,135,309,116,320,101,324,83,325,64,323,51,315,40,301,47,306,55,314,65,321,78,323,89,324,101,322,111,319,122,313,124,307,120,306,114,305,114,297,110,298,109,294,109,287,115,283,120,282,121,278,113,274,111,269,117,267,117,270,123,271,122,266,118,259,119,255,125,253,127,251,132,250,136,248,142,252,148,253,154,255\"\n          alt=\"State Profile: Alaska\" title=\"State Profile: Alaska\">\n          <area shape=\"rect\" coords=\"102,294,108,298\" alt=\"State Profile: Alaska\"\n          title=\"State Profile: Alaska\">\n          <area shape=\"poly\" coords=\"104,280,98,276,99,274,105,278\" alt=\"State Profile: Alaska\"\n          title=\"State Profile: Alaska\">\n          <area shape=\"rect\" coords=\"140,308,173,315\" alt=\"State Profile: Alaska\"\n          title=\"State Profile: Alaska\">\n          <area shape=\"rect\" coords=\"17,253,50,262\" alt=\"State Profile: Hawaii\" title=\"State Profile: Hawaii\">\n          <area shape=\"poly\" coords=\"62,261,62,265,61,269,64,275,69,273,73,269,69,263\"\n          alt=\"State Profile: Hawaii\" title=\"State Profile: Hawaii\">\n          <area shape=\"rect\" coords=\"55,254,62,259\" alt=\"State Profile: Hawaii\" title=\"State Profile: Hawaii\">\n          <area shape=\"rect\" coords=\"50,251,54,256\" alt=\"State Profile: Hawaii\" title=\"State Profile: Hawaii\">\n          <area shape=\"rect\" coords=\"39,246,44,252\" alt=\"State Profile: Hawaii\" title=\"State Profile: Hawaii\">\n          <area shape=\"rect\" coords=\"23,239,29,244\" alt=\"State Profile: Hawaii\" title=\"State Profile: Hawaii\">\n          <area shape=\"rect\" coords=\"17,242,20,247\" alt=\"State Profile: Hawaii\" title=\"State Profile: Hawaii\">\n          <area shape=\"poly\" coords=\"405,85,418,80,419,88,411,91,407,95,404,93,406,92\"\n          alt=\"State Profile: Connecticut\" title=\"State Profile: Connecticut\">\n          <area shape=\"rect\" coords=\"407,101,466,109\" alt=\"State Profile: Connecticut\"\n          title=\"State Profile: Connecticut\">\n          <area shape=\"rect\" coords=\"423,85,454,101\" alt=\"State Profile: Rhode Island\"\n          title=\"State Profile: Rhode Island\">\n          <area shape=\"poly\" coords=\"418,81,420,88,424,86,421,81\" alt=\"State Profile: Rhode Island\"\n          title=\"State Profile: Rhode Island\">\n          <area shape=\"poly\"\n          coords=\"405,76,416,74,423,71,425,73,424,78,428,81,432,79,431,74,435,79,433,84,429,85,421,79,405,85\"\n          alt=\"State Profile: Massachusetts\"\n          title=\"State Profile: Massachusetts\">\n          <area shape=\"rect\" coords=\"427,77,476,85\" alt=\"State Profile: Massachusetts\"\n          title=\"State Profile: Massachusetts\">\n          <area shape=\"poly\" coords=\"397,53,411,51,413,55,409,60,410,67,411,75,405,77\"\n          alt=\"State Profile: Vermont\" title=\"State Profile: Vermont\">\n          <area shape=\"poly\" coords=\"363,52,363,60,382,60,398,52\" alt=\"State Profile: Vermont\"\n          title=\"State Profile: Vermont\">\n          <area shape=\"poly\" coords=\"411,50,411,47,414,47,422,71,411,74,409,60,413,55\"\n          alt=\"State Profile: New Hampshire\" title=\"State Profile: New Hampshire\">\n          <area shape=\"poly\" coords=\"471,72,422,71,428,66,426,58,471,58\" alt=\"State Profile: New Hampshire\"\n          title=\"State Profile: New Hampshire\">\n          <area shape=\"poly\"\n          coords=\"422,71,427,67,426,63,427,59,434,54,434,49,441,47,445,44,441,40,436,35,433,21,428,18,425,20,421,19,419,21,419,26,417,31,416,36,418,38,416,41,416,45,414,46\"\n          alt=\"State Profile: Maine\" title=\"State Profile: Maine\">\n        </map>\n      </maphilight>\n    </div>\n    <div class=\"panel panel-success\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">config JSON object</h3>\n      </div>\n      <div class=\"panel-body\">\n        <pre>{{config | json}}</pre>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/example2/example2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Example2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maphilight_maphilight_component__ = __webpack_require__("../../../../../src/app/maphilight/maphilight.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Example2Component = /** @class */ (function () {
    function Example2Component() {
        this.hidden = false;
        this.config = {
            fade: true,
            alwaysOn: false,
            neverOn: false,
            // fill
            fill: true,
            fillColor: '#ffffff',
            fillOpacity: 0.4,
            // stroke
            stroke: true,
            strokeColor: '#4d0ec0',
            strokeOpacity: 1,
            strokeWidth: 1,
            // shadow:
            shadow: true,
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 10
        };
    }
    Example2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Make sure image is initially visible while maphilight.js loads (and *then* hide it).
        // Otherwise the $(img).height() in maphilight.js may return 0, which causes mouseover effect to break.
        // See also:
        // - https://stackoverflow.com/questions/1472303/jquery-get-width-of-element-when-not-visible-display-none
        // - https://stackoverflow.com/questions/2345784/jquery-get-height-of-hidden-element-in-jquery
        this.maphilightComponent.events.imgLoaded.subscribe(function () {
            console.log("img.height=", _this.maphilightComponent.img.height, "$(this.img).height()=", window.jQuery(_this.maphilightComponent.img).height());
            _this.hidden = true;
        });
        this.maphilightComponent.events.updateMaphilight.subscribe(function () {
            console.log('updateMaphilight');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__maphilight_maphilight_component__["a" /* MaphilightComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__maphilight_maphilight_component__["a" /* MaphilightComponent */])
    ], Example2Component.prototype, "maphilightComponent", void 0);
    Example2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-example2',
            template: __webpack_require__("../../../../../src/app/example2/example2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/example2/example2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Example2Component);
    return Example2Component;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/maphilight/maphilight.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maphilight/maphilight.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content>\n</ng-content>\n"

/***/ }),

/***/ "../../../../../src/app/maphilight/maphilight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaphilightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaphilightComponent = /** @class */ (function () {
    function MaphilightComponent(elRef, differs) {
        this.elRef = elRef;
        this.events = {
            imgLoaded: new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */](),
            updateMaphilight: new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */](),
        };
        this.el = this.elRef.nativeElement;
        this.configDiffer = differs.find({}).create();
    }
    MaphilightComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.img = this.el.querySelector('img');
        this.map = this.el.querySelector('map');
        var id = this.el.getAttribute('id');
        this.img.setAttribute('usemap', '#' + id + ".map");
        this.map.setAttribute('id', id + ".map");
        this.map.setAttribute('name', id + ".map");
        // Wait until image is loaded. Otherwise the $(img).height() in maphilight.js may return 0,
        // which causes mouseover effect to break.
        // See also  https://stackoverflow.com/questions/16084374/jquery-width-and-height-return-0-for-img-element
        this.img.onload = function () {
            _this.events.imgLoaded.next();
            _this.updateMaphilight();
        };
    };
    MaphilightComponent.prototype.updateMaphilight = function () {
        if (!this.img)
            return;
        this.events.updateMaphilight.next();
        window.jQuery(this.img).maphilight(this.configToApply());
    };
    ;
    MaphilightComponent.prototype.ngDoCheck = function () {
        var changes = this.configDiffer.diff(this.config);
        if (changes) {
            this.updateMaphilight();
        }
    };
    MaphilightComponent.prototype.configToApply = function () {
        var config = Object.assign({}, this.config);
        if (config.strokeColor && config.strokeColor[0] == '#')
            config.strokeColor = config.strokeColor.substr(1);
        if (config.fillColor && config.fillColor[0] == '#')
            config.fillColor = config.fillColor.substr(1);
        if (config.shadowColor && config.shadowColor[0] == '#')
            config.shadowColor = config.shadowColor.substr(1);
        return config;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MaphilightComponent.prototype, "config", void 0);
    MaphilightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'maphilight',
            template: __webpack_require__("../../../../../src/app/maphilight/maphilight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/maphilight/maphilight.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* KeyValueDiffers */]])
    ], MaphilightComponent);
    return MaphilightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/maphilight/maphilight.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaphilightModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maphilight_component__ = __webpack_require__("../../../../../src/app/maphilight/maphilight.component.ts");
/* unused harmony reexport MaphilightComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//   import { FormsModule }   from '@angular/forms'




var MaphilightModule = /** @class */ (function () {
    function MaphilightModule() {
    }
    MaphilightModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__maphilight_component__["a" /* MaphilightComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__maphilight_component__["a" /* MaphilightComponent */]]
        })
    ], MaphilightModule);
    return MaphilightModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map