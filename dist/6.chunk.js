webpackJsonp([6,15],{

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_component__ = __webpack_require__(974);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__music_component__["a" /* MusicComponent */],
        data: {
            title: 'Music'
        }
    }
];
var MusicRoutingModule = (function () {
    function MusicRoutingModule() {
    }
    return MusicRoutingModule;
}());
MusicRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], MusicRoutingModule);

//# sourceMappingURL=music.routing.js.map

/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "#bg2 {\r\n\t\t-webkit-animation: bg 60s linear infinite;\r\n\t\tanimation: bg 60s linear infinite;\r\n\t\t-webkit-backface-visibility: hidden;\r\n\t\tbackface-visibility: hidden;\r\n\t\t-webkit-transform: translate3d(0,0,0);\r\n\t\ttransform: translate3d(0,0,0);\r\n\t/* Set your background with this */\r\n\r\n\t\tbackground: rgba(52,140,178,0.3) url(\"/../../../assets/css/images/bg.jpg\") bottom left;\r\n\t\t/*background-repeat: repeat-x;*/\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 1;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n}\r\n\r\n#bg2 .card {\r\n    background-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n}\r\n\r\n\tbody, input, select, textarea {\r\n\t\tcolor: #333;\r\n\t\tfont-family: \"Segoe UI\", sans-serif;\r\n\t\tfont-weight: 300;\r\n\t\tfont-size: 1rem;\r\n\t\tline-height: 1.65;\r\n\t}\r\n\r\n\r\n\t#overlay-bio {\r\n\t\t-webkit-animation: overlay 1.5s 1.5s forwards;\r\n\t\tanimation: overlay 1.5s 1.5s forwards;\r\n\t\tbackground-attachment: fixed, fixed;\r\n\t\tbackground-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n\t\tbackground-position: top left, center center;\r\n\t\tbackground-repeat: repeat, no-repeat;\r\n\t\tbackground-size: auto, cover;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 0.3;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\twidth: 100%;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1073:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n      <div class=\"row\">\r\n            <div class=\"card col-6\">\r\n                        <div class=\"card-img\">\r\n                        <iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179821730&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>\r\n                        </div>\r\n                        <div class=\"card-block\">\r\n                              <h2 class=\"card-title w-100 text-center\">Titania Ft. Mel.B</h2>\r\n                              <div class=\"card-text\">\r\n                              <p>Over the December break in 2014, I was talking to <a href=\"https://www.instagram.com/melissabrown94/?hl=en\">Melissa Brown</a> and she was working on some piano ideas. So we did a mini-collab whilst I was back in Kenya, and she in South Africa. She sent me the demo to a song she had written and I decided to layer it with some creepy tones</p>\r\n                              </div>\r\n                        </div>\r\n                        <ul class=\"list-group list-group-flush\">\r\n                              <li class=\"list-group-item\">Digital Audio Workstation: Reaper</li>\r\n                              <li class=\"list-group-item\">Drums: Addictive Drums</li>\r\n                              <li class=\"list-group-item\">Guitar: Ibanez RGA7</li>\r\n                              <li class=\"list-group-item\">Guitar Effects: Guitar Rig 5</li>\r\n                        </ul>\r\n                        <div class=\"card-footer\">\r\n                              <a href=\"https://soundcloud.com/martin-ombura-jr\" class=\"btn-link\">Check my soundcloud profile</a>\r\n                        </div>\r\n                  </div>\r\n    \r\n\r\n      <div class=\"card col-6\">\r\n            <div class=\"card-img\">\r\n                  <iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/143096769&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>\r\n            </div>\r\n            <div class=\"card-block\">\r\n                  <h2 class=\"card-title w-100 text-center\">The Hedonist</h2>\r\n                  <div class=\"card-text\">\r\n                  <p>This song was pretty much the first song I ever tried to track and mix. I was awake at like 4:30 am late-2014, could not really sleep and I just decided to jump on. My friend Louis gave me the inspiration to try create some Djent material and upload it!</p>\r\n                  </div>\r\n            </div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                  <li class=\"list-group-item\">Digital Audio Workstation: Reaper</li>\r\n                  <li class=\"list-group-item\">Drums: Addictive Drums</li>\r\n                  <li class=\"list-group-item\">Guitar: Ibanez RGA7</li>\r\n                  <li class=\"list-group-item\">Guitar Effects: Guitar Rig 5</li>\r\n            </ul>\r\n            <div class=\"card-footer\">\r\n                  <a href=\"https://soundcloud.com/martin-ombura-jr\" class=\"btn-link\">Check my soundcloud profile</a>\r\n            </div>\r\n      </div>\r\n      </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_routing__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_component__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicModule", function() { return MusicModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MusicModule = (function () {
    function MusicModule() {
    }
    return MusicModule;
}());
MusicModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__music_routing__["a" /* MusicRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__music_component__["a" /* MusicComponent */]
        ],
        providers: []
    })
], MusicModule);

//# sourceMappingURL=music.module.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    return MusicComponent;
}());
MusicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-music',
        template: __webpack_require__(1073),
        styles: [__webpack_require__(1052)]
    }),
    __metadata("design:paramtypes", [])
], MusicComponent);

//# sourceMappingURL=music.component.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map