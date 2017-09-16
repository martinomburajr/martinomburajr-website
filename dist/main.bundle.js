webpackJsonp([11,15],{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationRepository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// export interface IGeolocationRepository {
//     create
//     retrieve
//     update
//     delete
//     purge
// }
var GeolocationRepository = (function () {
    function GeolocationRepository(afAuth, afDB) {
        this.afAuth = afAuth;
        this.afDB = afDB;
    }
    GeolocationRepository.prototype.create = function (geolocation) {
        var purge = this.purge(geolocation);
        try {
            return this.afDB.list('/geolocation').push(purge);
        }
        catch (error) {
            return null;
        }
    };
    GeolocationRepository.prototype.createObject = function (geolocation) {
        try {
            console.log(geolocation);
            var a = this.afDB.list('geolocation').push(geolocation);
            console.log(a.key);
        }
        catch (err) {
            return null;
        }
    };
    GeolocationRepository.prototype.retrieveAll = function () {
        return this.afDB.list('/geolocation');
    };
    GeolocationRepository.prototype.retrieve = function (key) {
        return this.afDB.object('/geolocation' + '/' + key);
    };
    GeolocationRepository.prototype.update = function () { };
    GeolocationRepository.prototype.delete = function () { };
    GeolocationRepository.prototype.purge = function (geolocation) {
        return { accuracy: geolocation.Coordinates.Accuracy,
            altitude: geolocation.Coordinates.Altitude,
            altitudeAccuracy: geolocation.Coordinates.AltitudeAccuracy,
            heading: geolocation.Coordinates.Heading,
            latitude: geolocation.Coordinates.Latitude,
            longitude: geolocation.Coordinates.Longitude,
            timestamp: geolocation.Timestamp
        };
    };
    return GeolocationRepository;
}());
GeolocationRepository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], GeolocationRepository);

var _a, _b;
//# sourceMappingURL=geolocation.repository.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository_geolocation_geolocation_repository__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GEOLOCATION_ERRORS = {
    'errors.location.unsupportedBrowser': 'Browser does not support location services',
    'errors.location.permissionDenied': 'You have rejected access to your location',
    'errors.location.positionUnavailable': 'Unable to determine your location',
    'errors.location.timeout': 'Service timeout has been reached'
};
var GeolocationService = (function () {
    function GeolocationService(gR) {
        this.gR = gR;
    }
    /**
     * Obtains the geographic position, in terms of latitude and longitude coordinates, of the device.
     * @param {Object} [opts] An object literal to specify one or more of the following attributes and desired values:
     *   - enableHighAccuracy: Specify true to obtain the most accurate position possible, or false to optimize in favor of performance and power consumption.
     *   - timeout: An Integer value that indicates the time, in milliseconds, allowed for obtaining the position.
     *              If timeout is Infinity, (the default value) the location request will not time out.
     *              If timeout is zero (0) or negative, the results depend on the behavior of the location provider.
     *   - maximumAge: An Integer value indicating the maximum age, in milliseconds, of cached position information.
     *                 If maximumAge is non-zero, and a cached position that is no older than maximumAge is available, the cached position is used instead of obtaining an updated location.
     *                 If maximumAge is zero (0), watchPosition always tries to obtain an updated position, even if a cached position is already available.
     *                 If maximumAge is Infinity, any cached position is used, regardless of its age, and watchPosition only tries to obtain an updated position if no cached position data exists.
     * @returns {Observable} An observable sequence with the geographical location of the device running the client.
     */
    GeolocationService.prototype.getLocation = function (opts) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(function (position) {
                    observer.next(position);
                    observer.complete();
                }, function (error) {
                    switch (error.code) {
                        case 1:
                            observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                            break;
                        case 2:
                            observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                            break;
                        case 3:
                            observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                            break;
                    }
                }, opts);
            }
            else {
                observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
            }
        });
    };
    GeolocationService.prototype.convertToObject = function (base) {
        var a = {};
        a['accuracy'] = base['coords']['accuracy'];
        a['altitude'] = base['coords']['altitude'];
        a['altitudeAccuracy'] = base['coords']['altitudeAccuracy'];
        a['heading'] = base['coords']['heading'];
        a['latitude'] = base['coords']['latitude'];
        a['longitude'] = base['coords']['longitude'];
        a['timestamp'] = base['timestamp'];
        return a;
    };
    GeolocationService.prototype.upload = function (geolocation) {
        return this.gR.createObject(geolocation);
    };
    GeolocationService.prototype.retrieveAll = function () {
        return this.gR.retrieveAll();
    };
    return GeolocationService;
}());
GeolocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__repository_geolocation_geolocation_repository__["a" /* GeolocationRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__repository_geolocation_geolocation_repository__["a" /* GeolocationRepository */]) === "function" && _a || Object])
], GeolocationService);

var _a;
// export var geolocationServiceInjectables: Array<any> = [
//   provide(GeolocationService, { useClass: GeolocationService })
// ];
//# sourceMappingURL=geolocation.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_geolocation_geolocation_service__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(glS, afDB) {
        this.glS = glS;
        this.afDB = afDB;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.load();
    };
    HomeComponent.prototype.load = function () {
        var _this = this;
        this.glS.getLocation({}).map(function (location) { return _this.glS.convertToObject(location); })
            .subscribe(function (x) { return x; });
        this.glS.retrieveAll().subscribe(function (x) { return x; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(528),
        styles: [__webpack_require__(526)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service_geolocation_geolocation_service__["a" /* GeolocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service_geolocation_geolocation_service__["a" /* GeolocationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
        //console.log("LayoutComponent")
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(529)
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCE4mqZsQ-E_2V4p3iTaYWi7Z_VJloxRdU",
        authDomain: "martinomburajr-a1bcd.firebaseapp.com",
        databaseURL: "https://martinomburajr-a1bcd.firebaseio.com",
        projectId: "martinomburajr-a1bcd",
        storageBucket: "martinomburajr-a1bcd.appspot.com",
        messagingSenderId: "480917818210"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./core/articles/articles.module": [
		796,
		9
	],
	"./core/bio/bio.module": [
		797,
		2
	],
	"./core/bio/subcomponents/education/education.module": [
		798,
		5
	],
	"./core/bio/subcomponents/education/secondary-education/secondary-education.module": [
		799,
		0
	],
	"./core/bio/subcomponents/education/tertiary-education/tertiary-education.module": [
		800,
		4
	],
	"./core/bio/subcomponents/work-experience/work-experience.module": [
		801,
		8
	],
	"./core/contact/contact.module": [
		802,
		3
	],
	"./core/maps/maps.module": [
		803,
		7
	],
	"./core/music/music.module": [
		804,
		6
	],
	"./core/portfolio/portfolio.module": [
		805,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(231);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'body',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clarity_angular_layout_vertical_nav_providers_vertical_nav_icon_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_layout_shared_aside_directive__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_layout_shared_breadcrumb_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_repository_geolocation_geolocation_repository__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_service_geolocation_geolocation_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_home_home_module__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_layout_layout_layout_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_layout_shared_nav_dropdown_directive__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_layout_shared_sidebar_directive__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__environments_environment__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            // HomeComponent,
            __WEBPACK_IMPORTED_MODULE_16__core_layout_layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__core_layout_shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_9__core_layout_shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__core_layout_shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_8__core_layout_shared_aside_directive__["a" /* AsideToggleDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["a" /* ClarityModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutes */],
            // BioModule,
            __WEBPACK_IMPORTED_MODULE_14__core_home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].firebase, 'martinomburajr-a1bcd'),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__api_service_geolocation_geolocation_service__["a" /* GeolocationService */], __WEBPACK_IMPORTED_MODULE_12__api_repository_geolocation_geolocation_repository__["a" /* GeolocationRepository */], __WEBPACK_IMPORTED_MODULE_0_clarity_angular_layout_vertical_nav_providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_layout_layout_layout_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'bio',
        pathMatch: 'full',
    },
    // {
    //   path: 'bio',
    //   component: BioComponent,
    // },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__core_layout_layout_layout_component__["a" /* LayoutComponent */],
        data: {
            title: 'Bio'
        },
        children: [
            // {
            //   path: 'home',
            //   loadChildren: './core/home/home.module#HomeModule'
            // },
            {
                path: 'bio',
                loadChildren: './core/bio/bio.module#BioModule'
            },
            {
                path: 'bio/education',
                loadChildren: './core/bio/subcomponents/education/education.module#EducationModule'
            },
            {
                path: 'bio/education/tertiary',
                loadChildren: './core/bio/subcomponents/education/tertiary-education/tertiary-education.module#TertiaryEducationModule'
            },
            {
                path: 'bio/education/secondary',
                loadChildren: './core/bio/subcomponents/education/secondary-education/secondary-education.module#SecondaryEducationModule'
            },
            {
                path: 'bio/work-experience',
                loadChildren: './core/bio/subcomponents/work-experience/work-experience.module#WorkExperienceModule'
            },
            // {
            //   path: 'bio/education/secondary-education',
            //   loadChildren: './core/bio/subcomponent/education/secondary-education.module#SecondaryEducationModule'
            // },
            {
                path: 'maps',
                loadChildren: './core/maps/maps.module#MapsModule'
            },
            {
                path: 'portfolio',
                loadChildren: './core/portfolio/portfolio.module#PortfolioModule'
            },
            {
                path: 'music',
                loadChildren: './core/music/music.module#MusicModule'
            },
            {
                path: 'articles',
                loadChildren: './core/articles/articles.module#ArticlesModule'
            },
            {
                path: 'contact',
                loadChildren: './core/contact/contact.module#ContactModule'
            },
        ]
    }
];
var AppRoutes = (function () {
    function AppRoutes() {
    }
    return AppRoutes;
}());
AppRoutes = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutes);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__home_routing__["a" /* HomeRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]
        ],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
        data: {
            title: 'Home'
        }
    },
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home.routing.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideToggleDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    return AsideToggleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '.aside-menu-toggler',
    }),
    __metadata("design:paramtypes", [])
], AsideToggleDirective);

//# sourceMappingURL=aside.directive.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Component */])({
        selector: 'breadcrumbs',
        template: "\n  <template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.label.title&&last\" [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </template>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], BreadcrumbsComponent);

var _a, _b;
//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = (function () {
    function NavDropdownDirective() {
        this._open = false;
    }
    /**
    * Checks if the dropdown menu is open or not.
    */
    NavDropdownDirective.prototype.isOpen = function () { return this._open; };
    /**
    * Opens the dropdown menu.
    */
    NavDropdownDirective.prototype.open = function () {
        this._open = true;
    };
    /**
    * Closes the dropdown menu .
    */
    NavDropdownDirective.prototype.close = function () {
        this._open = false;
    };
    /**
    * Toggles the dropdown menu.
    */
    NavDropdownDirective.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    return NavDropdownDirective;
}());
NavDropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '.nav-dropdown',
        host: {
            '[class.open]': '_open',
        }
    })
], NavDropdownDirective);

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    return NavDropdownToggleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '.nav-dropdown-toggle',
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
//# sourceMappingURL=nav-dropdown.directive.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export SidebarToggleDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    return SidebarToggleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '.sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], SidebarToggleDirective);

var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    //Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    return MobileSidebarToggleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '.mobile-sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], MobileSidebarToggleDirective);

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    //Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    //Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    return SidebarOffCanvasCloseDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '.sidebar-close',
    }),
    __metadata("design:paramtypes", [])
], SidebarOffCanvasCloseDirective);

var SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
//# sourceMappingURL=sidebar.directive.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "#bg2 {\r\n\t\t-webkit-animation: bg 60s linear infinite;\r\n\t\tanimation: bg 60s linear infinite;\r\n\t\t-webkit-backface-visibility: hidden;\r\n\t\tbackface-visibility: hidden;\r\n\t\t-webkit-transform: translate3d(0,0,0);\r\n\t\ttransform: translate3d(0,0,0);\r\n\t/* Set your background with this */\r\n\r\n\t\tbackground: rgba(52,140,178,0.3) url(\"/../../../assets/css/images/bg.jpg\") bottom left;\r\n\t\t/*background-repeat: repeat-x;*/\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 1;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n}\r\n\r\n#bg2 .card {\r\n    background-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n}\r\n\r\n\tbody, input, select, textarea {\r\n\t\tcolor: #333;\r\n\t\tfont-family: \"Segoe UI\", sans-serif;\r\n\t\tfont-weight: 300;\r\n\t\tfont-size: 1rem;\r\n\t\tline-height: 1.65;\r\n\t}\r\n\r\n\r\n\t#overlay-bio {\r\n\t\t-webkit-animation: overlay 1.5s 1.5s forwards;\r\n\t\tanimation: overlay 1.5s 1.5s forwards;\r\n\t\tbackground-attachment: fixed, fixed;\r\n\t\tbackground-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n\t\tbackground-position: top left, center center;\r\n\t\tbackground-repeat: repeat, no-repeat;\r\n\t\tbackground-size: auto, cover;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 0.3;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\twidth: 100%;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n\t<head>\r\n\t\t<title>Martin Ombura Jr.</title>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<!--[if lte IE 8]><script src=\"assets/js/ie/html5shiv.js\"></script><![endif]-->\r\n\t\t<link rel=\"stylesheet\" href=\"./assets/css/main.css\" />\r\n\t\t<!--[if lte IE 8]><link rel=\"stylesheet\" href=\"assets/css/ie8.css\" /><![endif]-->\r\n\t\t<!--[if lte IE 9]><link rel=\"stylesheet\" href=\"assets/css/ie9.css\" /><![endif]-->\r\n\t</head>\r\n\t<body class=\"loading\">\r\n\t\t<nav>\r\n\r\n\t\t</nav>\r\n\t\t<div id=\"wrapper\">\r\n\t\t\t<div id=\"bg\"></div>\r\n\t\t\t<div id=\"overlay\"></div>\r\n\t\t\t<div id=\"main\" >\r\n\t\t\t<!-- Header -->\r\n\t\t\t\t<header id=\"header\" style=\"position: -6rem\">\r\n\t\t\t\t\t<h1> <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/bio']\">Martin Ombura Jr.</a></h1>\r\n\t\t\t\t\t<div style=\"padding: 0.5rem\"></div>\r\n\t\t\t\t\t<div class=\"display-7\"> <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/bio']\">Bio</a> </div>\r\n\t\t\t\t\t<p>Software Engineer &nbsp;&bull;&nbsp; Guitarist &nbsp;&bull;&nbsp; Calesthenite</p>\r\n\t\t\t\t\t<div style=\"padding: 0.5rem\"></div>\r\n\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"https://www.facebook.com/martinomburajr\" class=\"icon fa-facebook\" target=\"_blank\"><span class=\"label\">Facebook</span></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"https://twitter.com/martinomburajr\" class=\"icon fa-twitter\" target=\"_blank\"><span class=\"label\">Twitter</span></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"https://www.instagram.com/martinomburajr/\" class=\"icon fa-instagram\" target=\"_blank\"><span class=\"label\">Instagram</span></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"https://za.linkedin.com/in/martinomburajr\" class=\"icon fa-linkedin\" target=\"_blank\"><span class=\"label\">LinkedIn</span></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"https://github.com/martinomburajr\" class=\"icon fa-github\" target=\"_blank\"><span class=\"label\">Github</span></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:martin@scarlaria.com?\" class=\"icon fa-envelope-o\" target=\"_blank\"><span class=\"label\">Email</span></a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\t\t\t\t</header>\r\n\r\n\t\t\t<!-- Footer -->\r\n\t\t\t\t<footer id=\"footer\">\r\n\t\t\t\t\t<span class=\"copyright\"> <a href=\"http://www.scarlaria.com\" target=\"_blank\">&copy;&nbsp;&bull;&nbsp; Scarlaria &nbsp;&bull;&nbsp;</a></span>\r\n\t\t\t\t</footer>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--[if lte IE 8]><script src=\"assets/js/ie/respond.min.js\"></script><![endif]-->\r\n\t\t<script>\r\n\t\t\t// window.onload = function() { document.body.className = ''; }\r\n\t\t\t// window.ontouchmove = function() { return false; }\r\n\t\t\t// window.onorientationchange = function() { document.body.scrollTop = 0; }\r\n\t\t</script>\r\n\t</body>\r\n</html>"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"content-container\">\r\n        <div class=\"content-area\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <clr-vertical-nav [clrVerticalNavCollapsible]=\"true\" [(clrVerticalNavCollapsed)]=\"collapsed\">\r\n        <clr-vertical-nav-group routerLinkActive=\"active\">\r\n                <a clrVerticalNavLink\r\n                [routerLink]=\"['/bio']\"\r\n                    routerLinkActive=\"active\">\r\n                    <clr-icon shape=\"user\" clrVerticalNavIcon></clr-icon>\r\n                    Bio\r\n                </a>\r\n                <clr-vertical-nav-group-children *clrIfExpanded=\"true\">\r\n                    <a clrVerticalNavLink\r\n                    [routerLink]=\"['/bio/education']\"\r\n                        routerLinkActive=\"active\">\r\n                        <clr-icon shape=\"lightbulb\" clrVerticalNavIcon></clr-icon>\r\n                        Education\r\n                    </a>\r\n                    <!-- <clr-vertical-nav-group-children *clrIfExpanded=\"true\">\r\n                            <a clrVerticalNavLink\r\n                            [routerLink]=\"['/bio/education/tertiary']\"\r\n                                routerLinkActive=\"active\">\r\n                                <clr-icon shape=\"world\" clrVerticalNavIcon></clr-icon>\r\n                                Tertiary\r\n                            </a>\r\n                        </clr-vertical-nav-group-children>\r\n                    <clr-vertical-nav-group-children *clrIfExpanded=\"true\">\r\n                            <a clrVerticalNavLink\r\n                            [routerLink]=\"['/bio/education/secondary']\"\r\n                                routerLinkActive=\"active\">\r\n                                <clr-icon shape=\"book\" clrVerticalNavIcon></clr-icon>\r\n                                Secondary\r\n                            </a>\r\n                    </clr-vertical-nav-group-children> -->\r\n                </clr-vertical-nav-group-children>\r\n                <clr-vertical-nav-group-children *clrIfExpanded=\"true\">\r\n                    <a clrVerticalNavLink\r\n                    [routerLink]=\"['/bio/work-experience']\"\r\n                        routerLinkActive=\"active\">\r\n                        <clr-icon shape=\"clipboard\" clrVerticalNavIcon></clr-icon>\r\n                        Work Experience\r\n                    </a>\r\n                </clr-vertical-nav-group-children>\r\n            </clr-vertical-nav-group>\r\n            <clr-vertical-nav-group routerLinkActive=\"active\">\r\n                <a clrVerticalNavLink\r\n                [routerLink]=\"['/portfolio']\"\r\n                    routerLinkActive=\"active\">\r\n                    <clr-icon shape=\"folder\" clrVerticalNavIcon></clr-icon>\r\n                    Portfolio\r\n                </a>\r\n                <clr-vertical-nav-group-children *clrIfExpanded=\"true\">\r\n                    <a clrVerticalNavLink\r\n                    [routerLink]=\"['/portfolio/tycho']\"\r\n                       routerLinkActive=\"active\">\r\n                       <clr-icon shape=\"flame\" clrVerticalNavIcon></clr-icon>\r\n                        Project Tycho\r\n                    </a>\r\n                </clr-vertical-nav-group-children>\r\n                <clr-vertical-nav-group-children *clrIfExpanded=\"true\">\r\n                    <a clrVerticalNavLink\r\n                    [routerLink]=\"['/portfolio/logos']\"\r\n                       routerLinkActive=\"active\">\r\n                       <clr-icon shape=\"clipboard\" clrVerticalNavIcon></clr-icon>\r\n                        Project Logos\r\n                    </a>\r\n                </clr-vertical-nav-group-children>\r\n                <!-- <clr-vertical-nav-group-children *clrIfExpanded=\"true\">\r\n                    <a clrVerticalNavLink\r\n                    [routerLink]=\"['/portfolio/assembly']\"\r\n                       routerLinkActive=\"active\">\r\n                       <clr- icon shape=\"clipboard\" clrVerticalNavIcon></clr-icon>\r\n                        Assembler\r\n                    </a>\r\n                </clr-vertical-nav-group-children> -->\r\n            </clr-vertical-nav-group>\r\n            <clr-vertical-nav-group routerLinkActive=\"active\">\r\n                <clr-icon shape=\"compass\" clrVerticalNavIcon></clr-icon>\r\n                Hobbies\r\n                <clr-vertical-nav-group-children *clrIfExpanded=\"true\">\r\n                    <a clrVerticalNavLink\r\n                    [routerLink]=\"['/music']\"\r\n                       routerLinkActive=\"active\">\r\n                       <clr-icon shape=\"flame\" clrVerticalNavIcon></clr-icon>\r\n                        Music\r\n                    </a>\r\n                    <a clrVerticalNavLink\r\n                    [routerLink]=\"['/articles']\"\r\n                       routerLinkActive=\"active\">\r\n                       <clr-icon shape=\"clipboard\" clrVerticalNavIcon></clr-icon>\r\n                        Articles\r\n                    </a>\r\n                </clr-vertical-nav-group-children>\r\n            </clr-vertical-nav-group>\r\n            <a clrVerticalNavLink routerLinkActive=\"active\"[routerLink]=\"['/contact']\">\r\n                <clr-icon shape=\"chat-bubble\" clrVerticalNavIcon></clr-icon>\r\n                Contact\r\n            </a>\r\n            <a clrVerticalNavLink routerLinkActive=\"active\" href=\"./../../../assets/other/martinombura-cv.pdf\" class=\"bottom-left btn-primary\">\r\n                <clr-icon shape=\"download\" clrVerticalNavIcon></clr-icon>\r\n                CV/Resume\r\n            </a>\r\n            <a clrVerticalNavLink routerLinkActive=\"active\" href=\"./../../../assets/other/recommendations.zip\" class=\"bottom-left btn-warning\">\r\n                <clr-icon shape=\"download\" clrVerticalNavIcon></clr-icon>\r\n                Recommendation Letters\r\n            </a>\r\n         </clr-vertical-nav>\r\n    </div>\r\n</div>\r\n\r\n\r\n<footer class=\"app-footer\">\r\n    <div class=\"row w-100\">\r\n        <!-- <div class=\"float-left\">\r\n                <a href=\"https://scarlaria.com\">@martinomburajr</a>\r\n        </div> -->\r\n        <div class=\"float-right\">\r\n            <img src=\"../../../../assets/images/angular-icon.png\" height=\"30px\">\r\n            <img src=\"../../../../assets/images/typescript-icon.png\" height=\"30px\">\r\n            <img src=\"../../../../assets/images/firebase-icon.png\" height=\"30px\">\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ })

},[792]);
//# sourceMappingURL=main.bundle.js.map