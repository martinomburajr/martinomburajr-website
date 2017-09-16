webpackJsonp([1,15],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assembly_assembly_component__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logos_logos_component__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tycho_tycho_component__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_core_portfolio_portfolio_component__ = __webpack_require__(977);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_5_app_core_portfolio_portfolio_component__["a" /* PortfolioComponent */],
        data: {
            title: 'Portfolio'
        }
    },
    {
        path: "tycho",
        component: __WEBPACK_IMPORTED_MODULE_2__tycho_tycho_component__["a" /* TychoComponent */],
        data: {
            title: 'Tycho'
        }
    },
    {
        path: "logos",
        component: __WEBPACK_IMPORTED_MODULE_1__logos_logos_component__["a" /* LogosComponent */],
        data: {
            title: 'Logos'
        }
    },
    {
        path: "assembly",
        component: __WEBPACK_IMPORTED_MODULE_0__assembly_assembly_component__["a" /* AssemblyComponent */],
        data: {
            title: 'Logos'
        }
    },
];
var PortfolioRoutingModule = (function () {
    function PortfolioRoutingModule() {
    }
    return PortfolioRoutingModule;
}());
PortfolioRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]]
    })
], PortfolioRoutingModule);

//# sourceMappingURL=portfolio.routing.js.map

/***/ }),

/***/ 1053:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "#bg2 {\r\n\t\t-webkit-animation: bg 60s linear infinite;\r\n\t\tanimation: bg 60s linear infinite;\r\n\t\t-webkit-backface-visibility: hidden;\r\n\t\tbackface-visibility: hidden;\r\n\t\t-webkit-transform: translate3d(0,0,0);\r\n\t\ttransform: translate3d(0,0,0);\r\n\t/* Set your background with this */\r\n\r\n\t\tbackground: rgba(52,140,178,0.3) url(\"/../../../assets/css/images/bg.jpg\") bottom left;\r\n\t\t/*background-repeat: repeat-x;*/\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 1;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n}\r\n\r\n#bg2 .card {\r\n    background-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n}\r\n\r\n\tbody, input, select, textarea {\r\n\t\tcolor: #333;\r\n\t\tfont-family: \"Segoe UI\", sans-serif;\r\n\t\tfont-weight: 300;\r\n\t\tfont-size: 1rem;\r\n\t\tline-height: 1.65;\r\n\t}\r\n\r\n\r\n\t#overlay-bio {\r\n\t\t-webkit-animation: overlay 1.5s 1.5s forwards;\r\n\t\tanimation: overlay 1.5s 1.5s forwards;\r\n\t\tbackground-attachment: fixed, fixed;\r\n\t\tbackground-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n\t\tbackground-position: top left, center center;\r\n\t\tbackground-repeat: repeat, no-repeat;\r\n\t\tbackground-size: auto, cover;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 0.7;\r\n\t\tposition: fixed;\r\n\t\ttop: 20%;\r\n\t\twidth: 100%;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1074:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1075:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"display-4\" style=\"margin-top: 26%; margin-left: 28%\">\n  <clr-icon shape=\"cog\" size=\"72\" clrVerticalNavIcon></clr-icon>\n... under construction\n</div>\n<div class=\"spinner\" style=\"margin-left: 46%\">\n  Loading...\n</div>"

/***/ }),

/***/ 1076:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"display-4\" style=\"margin-top: 26%; margin-left: 28%\">\r\n        <clr-icon shape=\"cog\" size=\"72\" clrVerticalNavIcon></clr-icon>\r\n    ... under construction\r\n</div>\r\n<div class=\"spinner\" style=\"margin-left: 46%\">\r\n        Loading...\r\n</div>\r\n\r\nFind the side projects I have worked on...\r\n\r\n<!-- <div style=\"background-image: url(./../../../assets/css/images/bg.jpg)\">\r\n    <div class=\"card-deck\">\r\n        <div class=\"card animated FadeIn\">\r\n            \r\n            <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Uplift App</h4>\r\n            <p class=\"card-text\">\r\n                ● Developed a hybrid application that allows users to challenge each other on various categories e.g.\r\n                education, health, whilst donating proceeds to local charities.\r\n                ● Users earn rewards such as vouchers from trusted brands e.g. Vida etc. upon successful completion of\r\n                the challenge.\r\n                ● Developed using AngularJs and Ionic and use of NOSQL Database Firebase.\r\n            </p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n            <small class=\"text-muted\">Dates: Feb 2016 - Nov 2016</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"card animated FadeIn\">\r\n            <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Card title</h4>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n            <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"card animated FadeIn\">\r\n            <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Card title</h4>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n            <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div> -->\r\n"

/***/ }),

/***/ 1077:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <a href=\"https://tycho-fc797.firebaseapp.com\" class=\"card clickable\">\n          <div class=\"card-img\">\n              <img src=\"../../../../assets/images/portfolio/tycho/workouts.jpg\">\n          </div>\n            <div class=\"card-title\">\n              <div class=\"display-8 w-100 text-center\">Project Tycho</div>\n            </div>\n          <div class=\"card-block\">\n              <p class=\"card-text\">\n                  Project Tycho is the code name for the fitness app designed by <a href=\"https://www.scarlaria.com\">Scarlaria</a> to allow users to schedule workouts and view the statistics of their workouts.\n              </p>\n          </div>\n          <div class=\"card-block\">\n              <div class=\" card-title display-8 w-100 text-center\"><a href =\"https://tree.taiga.io/project/scarlaria-tycho-web/backlog\">Features</a></div>\n              <ul class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item\">CRUD Workouts/Exercises/Logged-Workouts & Goals</li>\n                  <li class=\"list-group-item\">View Charts based on Logged-Workouts</li>\n                  <li class=\"list-group-item\">\n                    Authentication w/ Email/Google/Twitter\n                  </li>\n              </ul>\n          </div>\n          <div class=\"card-footer w-100\">\n              <div class=\"align-content-end\">\n                  <img src=\"../../../../assets/images/angular-icon.png\" height=\"30px\">\n                  <img src=\"../../../../assets/images/typescript-icon.png\" height=\"30px\">\n                  <img src=\"../../../../assets/images/firebase-icon.png\" height=\"30px\">\n              </div>\n        </div>\n      </a>\n  </div>\n</div>"

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clarity_angular_layout_vertical_nav_providers_vertical_nav_icon_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_angular__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portfolio_routing__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_component__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tycho_tycho_component__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logos_logos_component__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assembly_assembly_component__ = __webpack_require__(975);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PortfolioModule = (function () {
    function PortfolioModule() {
    }
    return PortfolioModule;
}());
PortfolioModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1_clarity_angular__["a" /* ClarityModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_2__portfolio_routing__["a" /* PortfolioRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_6__tycho_tycho_component__["a" /* TychoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__logos_logos_component__["a" /* LogosComponent */],
            __WEBPACK_IMPORTED_MODULE_8__assembly_assembly_component__["a" /* AssemblyComponent */],
            __WEBPACK_IMPORTED_MODULE_8__assembly_assembly_component__["a" /* AssemblyComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0_clarity_angular_layout_vertical_nav_providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */]]
    })
], PortfolioModule);

//# sourceMappingURL=portfolio.module.js.map

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssemblyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssemblyComponent = (function () {
    function AssemblyComponent() {
    }
    AssemblyComponent.prototype.ngOnInit = function () {
    };
    return AssemblyComponent;
}());
AssemblyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-assembly',
        template: __webpack_require__(1074),
        styles: [__webpack_require__(1053)]
    }),
    __metadata("design:paramtypes", [])
], AssemblyComponent);

//# sourceMappingURL=assembly.component.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogosComponent = (function () {
    function LogosComponent() {
    }
    LogosComponent.prototype.ngOnInit = function () {
    };
    return LogosComponent;
}());
LogosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-logos',
        template: __webpack_require__(1075),
        styles: [__webpack_require__(1054)]
    }),
    __metadata("design:paramtypes", [])
], LogosComponent);

//# sourceMappingURL=logos.component.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__(1076),
        styles: [__webpack_require__(1055)]
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);

//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TychoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TychoComponent = (function () {
    function TychoComponent() {
    }
    TychoComponent.prototype.ngOnInit = function () {
    };
    return TychoComponent;
}());
TychoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-tycho',
        template: __webpack_require__(1077),
        styles: [__webpack_require__(1056)]
    }),
    __metadata("design:paramtypes", [])
], TychoComponent);

//# sourceMappingURL=tycho.component.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map