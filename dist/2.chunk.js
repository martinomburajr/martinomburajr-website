webpackJsonp([2,15],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_abstract_entity_abstract__ = __webpack_require__(1042);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioEntity; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BioEntity = (function (_super) {
    __extends(BioEntity, _super);
    function BioEntity() {
        var _this = _super.call(this) || this;
        _this.body = '';
        _this.title = '';
        _this.createdDate = Date.now();
        _this.updatedDate = Date.now();
        _this.views = 0;
        _this.version = 'v1.0.0';
        return _this;
    }
    Object.defineProperty(BioEntity.prototype, "Body", {
        get: function () {
            return this.body;
        },
        set: function (value) {
            this.body = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioEntity.prototype, "Title", {
        get: function () {
            return this.title;
        },
        set: function (value) {
            this.title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioEntity.prototype, "CreatedDate", {
        get: function () {
            return this.createdDate;
        },
        set: function (value) {
            this.createdDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioEntity.prototype, "UpdatedDate", {
        get: function () {
            return this.updatedDate;
        },
        set: function (value) {
            this.updatedDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioEntity.prototype, "Views", {
        get: function () {
            return this.views;
        },
        set: function (value) {
            this.views = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioEntity.prototype, "Version", {
        get: function () {
            return this.version;
        },
        set: function (value) {
            this.version = value;
        },
        enumerable: true,
        configurable: true
    });
    return BioEntity;
}(__WEBPACK_IMPORTED_MODULE_0__globals_abstract_entity_abstract__["a" /* AbstractEntity */]));

//# sourceMappingURL=bio.entity.js.map

/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bio_component__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "",
        component: __WEBPACK_IMPORTED_MODULE_1__bio_component__["a" /* BioComponent */],
        data: {
            title: 'Bio'
        }
    }
];
var BioRoutingModule = (function () {
    function BioRoutingModule() {
    }
    return BioRoutingModule;
}());
BioRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], BioRoutingModule);

//# sourceMappingURL=bio.routing.js.map

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractEntity; });
var AbstractEntity = (function () {
    function AbstractEntity() {
    }
    Object.defineProperty(AbstractEntity.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractEntity;
}());

//# sourceMappingURL=entity.abstract.js.map

/***/ }),

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DB_DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DB_BIO; });
var DB_DASH = '/';
var DB_BIO = '/bio';
//# sourceMappingURL=global.const.js.map

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "#bg2 {\r\n\t/* Set your background with this */\r\n\r\n\t\tbackground: rgba(52,140,178,0.3) url(\"/../../../assets/css/images/bg.jpg\") bottom left;\r\n\t\t/*background-repeat: repeat-x;*/\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 0.7;\r\n\t\ttop: 0;\r\n}\r\n\r\n#bg2 .card {\r\n    background-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n}\r\n\r\n\tbody, input, select, textarea {\r\n\t\tcolor: #333;\r\n\t\tfont-family: \"Segoe UI\", sans-serif;\r\n\t\tfont-weight: 300;\r\n\t\tfont-size: 1rem;\r\n\t\tline-height: 1.65;\r\n\t}\r\n\r\n\r\n\t#overlay-bio {\r\n\t\t-webkit-animation: overlay 1.5s 1.5s forwards;\r\n\t\tanimation: overlay 1.5s 1.5s forwards;\r\n\t\tbackground-attachment: fixed, fixed;\r\n\t\tbackground-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n\t\tbackground-position: top left, center center;\r\n\t\tbackground-repeat: repeat, no-repeat;\r\n\t\tbackground-size: auto, cover;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 0.3;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\twidth: 100%;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1066:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"display-8 mt-1 justify-content-center align-content-center align-middle\" style=\"font-style: italic\">\r\n    <div *ngIf=\"isLoading\" style=\"margin-top: 26%; margin-left: 45%;\">\r\n        <span class=\"spinner\">\r\n            Loading...\r\n        </span>\r\n    </div>\r\n    <div *ngIf=\"!isLoading\" style=\"margin-top: 18%; margin-left: 3%; font-size: 1rem\">\r\n        \"{{(bio$ | async)?.Body}}\"\r\n    </div>   \r\n  </div>\r\n</div>"

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clarity_angular__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_angular_src_layout_vertical_nav_providers_vertical_nav_icon_service__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bio_component__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_bio_repository_bio_repository__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bio_routing__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_bio_service_bio_service__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioModule", function() { return BioModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BioModule = (function () {
    function BioModule() {
    }
    return BioModule;
}());
BioModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0_clarity_angular__["a" /* ClarityModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4__bio_routing__["a" /* BioRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__bio_component__["a" /* BioComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__api_bio_service_bio_service__["a" /* BioService */], __WEBPACK_IMPORTED_MODULE_3__api_bio_repository_bio_repository__["a" /* BioRepository */], __WEBPACK_IMPORTED_MODULE_1_clarity_angular_src_layout_vertical_nav_providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */]]
    })
], BioModule);

//# sourceMappingURL=bio.module.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavIconService; });
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VerticalNavIconService = (function () {
    function VerticalNavIconService() {
        this._icons = 0;
    }
    Object.defineProperty(VerticalNavIconService.prototype, "hasIcons", {
        get: function () {
            return this._icons > 0;
        },
        enumerable: true,
        configurable: true
    });
    VerticalNavIconService.prototype.registerIcon = function () {
        this._icons++;
    };
    VerticalNavIconService.prototype.unregisterIcon = function () {
        this._icons--;
    };
    return VerticalNavIconService;
}());
VerticalNavIconService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], VerticalNavIconService);

//# sourceMappingURL=vertical-nav-icon.service.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioRepository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BioRepository = (function () {
    function BioRepository(afAuth, afDB) {
        this.afAuth = afAuth;
        this.afDB = afDB;
    }
    /**
     * Pushes an element to the database
     *
     * @param {{}} bioEntity
     * @returns {firebase.database.ThenableReference}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.create = function (bioEntity) {
        return this.afDB.list(__WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["a" /* DB_BIO */]).push(bioEntity);
    };
    /**
     * Retrieves a database obejct by the key
     *
     * @param {string} key
     * @returns {FirebaseObjectObservable<{}>}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.retrieveByKey = function (key) {
        return this.afDB.object(__WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["a" /* DB_BIO */] + __WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["b" /* DB_DASH */] + key);
    };
    /**
     * Retrieves a database object based on array of keys
     *
     * @param {Array<string>} keys
     * @returns {Observable<{}>}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.retrieveByKeys = function (keys) {
        var _this = this;
        var bios = new Array();
        keys.map(function (key) {
            bios.push(_this.afDB.object(__WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["a" /* DB_BIO */] + __WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["b" /* DB_DASH */] + key));
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].combineLatest(bios);
    };
    /**
     * Retrieves a database object based on array of keys
     *
     * @param {Array<string>} keys
     * @returns {Observable<{}>}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.retrieveByKeysWithQuery = function (keys, query) {
        var _this = this;
        var bios = new Array();
        keys.forEach(function (key) {
            bios.push(_this.afDB.object(__WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["a" /* DB_BIO */] + __WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["b" /* DB_DASH */] + key, query));
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].combineLatest(bios);
    };
    ;
    /**
     * Retrieves all elements from the database without a query
     *
     * @returns {FirebaseListObservable<{}[]>}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.retrieveAllWithQuery = function (query) {
        try {
            return this.afDB.list(__WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["a" /* DB_BIO */], query);
        }
        catch (e) {
            console.log('Failed');
            return;
        }
    };
    /**
     * Retrieves all elements from the database with a query
     *
     * @returns {FirebaseListObservable<{}[]>}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.retrieveAll = function () {
        return this.afDB.list(__WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["a" /* DB_BIO */]);
    };
    /**
     * Updates a value by a given path. The base @exercise path is used The update method uses the firebase update function
     *
     * @param {string} path
     * @param {Object} object
     * @returns {firebase.Promise<void>}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.update = function (key, object) {
        return this.afDB.object(__WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["a" /* DB_BIO */] + __WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["b" /* DB_DASH */] + key).update(object);
    };
    /**
     * Updates a value given a path that is injected directly to the database, and replaces it using the object
     *
     * @param {string} path
     * @param {Object} object
     * @param {string} [key]
     * @returns {firebase.Promise<void>}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.updateWithPath = function (path, object, key) {
        if (key) {
            return this.afDB.object(path + __WEBPACK_IMPORTED_MODULE_1__globals_const_global_const__["b" /* DB_DASH */] + key).update(object);
        }
        else {
            return this.afDB.object(path).update(object);
        }
    };
    /**
     * Similar to update, the function needs to know if the operation is contextual Deletes an element from the database based on an key
     *
     * @param {string} id
     *
     * @memberof IRepository
     */
    BioRepository.prototype.delete = function (isContextual, path) {
        return;
    };
    /**
     * A purge transforms an entity object into a regular object simplified for the database. It is the exact object
     * that shall be sent to the database
     *
     * @param {BioEntity} bioEntity
     * @returns {{}}
     *
     * @memberof IRepository
     */
    BioRepository.prototype.purge = function (bioEntity) {
        return;
    };
    return BioRepository;
}());
BioRepository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], BioRepository);

var _a, _b;
//# sourceMappingURL=bio.repository.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_bio_entity__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository_bio_repository__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BioService = (function () {
    function BioService(bR) {
        this.bR = bR;
    }
    BioService.prototype.retrieveAll = function () {
        return this.bR.retrieveAll();
    };
    BioService.prototype.retrieveAllAsEntity = function () {
        var _this = this;
        return this.bR.retrieveAll().map(function (object) { return _this.convert(object); })
            .combineAll();
    };
    BioService.prototype.retrieveAllWithQuery = function (query) {
        return this.bR.retrieveAllWithQuery(query);
    };
    BioService.prototype.retrieveAllAsEntityWithQuery = function (query) {
        var _this = this;
        var a = this.bR.retrieveAllWithQuery(query)
            .map(function (objects) { return _this.convertObjects(objects); });
        // .combineAll()
        a.subscribe(function (x) { return console.log(x); });
        return a;
    };
    BioService.prototype.create = function (bioEntity) {
        return;
    };
    BioService.prototype.update = function (key, bioEntity) {
        return;
    };
    BioService.prototype.delete = function (key) {
        return;
    };
    BioService.prototype.search = function (objects$, searchField, searchItem) {
        return;
    };
    BioService.prototype.convert = function (object) {
        var bioEntity = new __WEBPACK_IMPORTED_MODULE_0__entity_bio_entity__["a" /* BioEntity */]();
        if (object['$key']) {
            bioEntity.Id = object['$key'];
        }
        if (object['createdDate']) {
            bioEntity.CreatedDate = object['createdDate'];
        }
        if (object['title']) {
            bioEntity.Title = object['title'];
        }
        if (object['body']) {
            bioEntity.Body = object['body'];
        }
        if (object['updatedDate']) {
            bioEntity.UpdatedDate = object['updatedDate'];
        }
        if (object['version']) {
            bioEntity.Version = object['version'];
        }
        if (object['views']) {
            bioEntity.Views = object['views'];
        }
        return bioEntity;
    };
    BioService.prototype.convertObjects = function (objects) {
        var _this = this;
        return new Array().concat(objects.map(function (object) { return _this.convert(object); }));
    };
    return BioService;
}());
BioService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repository_bio_repository__["a" /* BioRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repository_bio_repository__["a" /* BioRepository */]) === "function" && _a || Object])
], BioService);

var _a;
//# sourceMappingURL=bio.service.js.map

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_bio_service_bio_service__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BioComponent = (function () {
    function BioComponent(bS, afDb, afAuth) {
        this.bS = bS;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.isLoading = true;
        this.bio$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"](function (x) { return x; });
        this.title = 'Bio';
    }
    BioComponent.prototype.ngOnInit = function () {
        var _this = this;
        var b = this.retrieveBio();
        this.bio$ = this.loadBio(b);
        this.bio$.subscribe(function (x) {
            _this.isLoading = false;
        });
    };
    BioComponent.prototype.retrieveBio = function () {
        var query = {};
        query.query = {};
        query.query.orderByKey = true;
        query.query.limitToFirst = 1;
        return this.bS.retrieveAllAsEntityWithQuery(query);
    };
    BioComponent.prototype.loadBio = function (bio, index) {
        if (index === void 0) { index = 0; }
        return bio.map(function (x) { return x[0]; });
    };
    BioComponent.prototype.onCVClick = function () {
        //     var storage = firebase.storage();
        //     let pathReference = storage.ref('CV/Martin Ombura CV (May 2017).pdf');
        //     var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/martinomburajr-a1bcd.appspot.com/o/CV%2FMartin%20Ombura%20CV%20(May%202017).pdf?alt=media&token=18141941-48f3-4e05-bcf9-ec56bf84d73c');
        //     // Create a reference to the file we want to download
        // var starsRef = pathReference.getDownloadURL().then(function(url) {
        //   // Insert url into an <img> tag to "download"
        //   this.downloadURL = url;
        // }).catch(function(error) {
        //   // A full list of error codes is available at
        //   // https://firebase.google.com/docs/storage/web/handle-errors
        //   switch (error.name) {
        //     case 'storage/object_not_found':
        //       console.log('File doesnt exist')
        //       break;
        //     case 'storage/unauthorized':
        //       console.log('User doesnt have permission to access the object')
        //       break;
        //     case 'storage/canceled':
        //       console.log('User canceled the upload');
        //       break;
        //     case 'storage/unknown':
        //       console.log('Unknown error occurred, inspect the server response');
        //       break;
        //   }
        //     });    
    };
    return BioComponent;
}());
BioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
        selector: 'app-bio',
        template: __webpack_require__(1066),
        styles: [__webpack_require__(1045)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_bio_service_bio_service__["a" /* BioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_bio_service_bio_service__["a" /* BioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object])
], BioComponent);

var _a, _b, _c;
//# sourceMappingURL=bio.component.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map