webpackJsonp([0,15],Array(799).concat([
/* 799 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clarity_angular_src__ = __webpack_require__(1002);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__secondary_education_routing__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secondary_education_component__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clarity_angular_layout_vertical_nav_providers_vertical_nav_icon_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryEducationModule", function() { return SecondaryEducationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SecondaryEducationModule = (function () {
    function SecondaryEducationModule() {
    }
    return SecondaryEducationModule;
}());
SecondaryEducationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0_clarity_angular_src__["ClarityModule"].forChild(),
            __WEBPACK_IMPORTED_MODULE_1__secondary_education_routing__["a" /* SecondaryEducationRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__secondary_education_component__["a" /* SecondaryEducationComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3_clarity_angular_layout_vertical_nav_providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */]]
    })
], SecondaryEducationModule);

//# sourceMappingURL=secondary-education.module.js.map

/***/ }),
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(911);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrIconModule; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClrIconModule = (function () {
    function ClrIconModule() {
    }
    return ClrIconModule;
}());
ClrIconModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* ICON_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* ICON_DIRECTIVES */]] })
], ClrIconModule);

//# sourceMappingURL=icon.module.js.map

/***/ }),
/* 807 */
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
/* 808 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridRenderOrganizer; });
/*
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


var DatagridRenderOrganizer = (function () {
    function DatagridRenderOrganizer() {
        this.widths = [];
        this._clearWidths = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._tableMode = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._computeWidths = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._alignColumns = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.scrollbar = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.scrollbarWidth = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._done = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(DatagridRenderOrganizer.prototype, "clearWidths", {
        get: function () {
            return this._clearWidths.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridRenderOrganizer.prototype, "tableMode", {
        get: function () {
            return this._tableMode.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridRenderOrganizer.prototype, "computeWidths", {
        get: function () {
            return this._computeWidths.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridRenderOrganizer.prototype, "alignColumns", {
        get: function () {
            return this._alignColumns.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridRenderOrganizer.prototype, "done", {
        get: function () {
            return this._done.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DatagridRenderOrganizer.prototype.resize = function () {
        this.widths.length = 0;
        this._clearWidths.next();
        this._tableMode.next(true);
        this._computeWidths.next();
        this._tableMode.next(false);
        this._alignColumns.next();
        this.scrollbar.next();
        this._done.next();
    };
    return DatagridRenderOrganizer;
}());
DatagridRenderOrganizer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], DatagridRenderOrganizer);

//# sourceMappingURL=render-organizer.js.map

/***/ }),
/* 809 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Popover; });
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var Point;
(function (Point) {
    Point[Point["RIGHT_CENTER"] = 0] = "RIGHT_CENTER";
    Point[Point["RIGHT_TOP"] = 1] = "RIGHT_TOP";
    Point[Point["RIGHT_BOTTOM"] = 2] = "RIGHT_BOTTOM";
    Point[Point["TOP_CENTER"] = 3] = "TOP_CENTER";
    Point[Point["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Point[Point["TOP_LEFT"] = 5] = "TOP_LEFT";
    Point[Point["BOTTOM_CENTER"] = 6] = "BOTTOM_CENTER";
    Point[Point["BOTTOM_RIGHT"] = 7] = "BOTTOM_RIGHT";
    Point[Point["BOTTOM_LEFT"] = 8] = "BOTTOM_LEFT";
    Point[Point["LEFT_CENTER"] = 9] = "LEFT_CENTER";
    Point[Point["LEFT_TOP"] = 10] = "LEFT_TOP";
    Point[Point["LEFT_BOTTOM"] = 11] = "LEFT_BOTTOM";
})(Point || (Point = {}));
var POSITION_RELATIVE = "relative";
var POSITION_ABSOLUTE = "absolute";
var POSITION_FIXED = "fixed";
var OVERFLOW_SCROLL = "scroll";
var OVERFLOW_AUTO = "auto";
var Popover = (function () {
    function Popover(element) {
        this.element = element;
        /*
         * Containers up to the first positioned one will have an event on scroll
         */
        this.scrollableElements = [];
        this.boundOnScrollListener = this.emitScrollEvent.bind(this);
        // Browsers don't agree with what to do if some of these are not specified, so we set them all to be safe.
        element.style.position = POSITION_ABSOLUTE;
        element.style.top = 0;
        element.style.bottom = "auto";
        element.style.left = 0;
        element.style.right = "auto";
    }
    // TODO: need a way to account for parameters that change dynamically (positioning).
    Popover.prototype.anchor = function (anchor, anchorAlign, popoverAlign, _a) {
        // TODO: we are assuming here that the popover is inside or next to the anchor.
        // We'd need to go up the popover tree too otherwise
        var _b = _a === void 0 ? {} : _a, _c = _b.offsetX, offsetX = _c === void 0 ? 0 : _c, _d = _b.offsetY, offsetY = _d === void 0 ? 0 : _d, _e = _b.useAnchorParent, useAnchorParent = _e === void 0 ? false : _e;
        this.addScrollEventListeners(anchor);
        if (useAnchorParent) {
            anchor = anchor.parentNode;
        }
        // explicitly override anchor's style to static
        anchor.style.position = "static";
        var anchorRect = anchor.getBoundingClientRect();
        var popoverRect = this.element.getBoundingClientRect();
        // position of left top corner of anchor + the offset
        var leftDiff = anchorRect.left - popoverRect.left + offsetX;
        var topDiff = anchorRect.top - popoverRect.top + offsetY;
        // first, adjust positioning based on anchor's align point
        switch (anchorAlign) {
            case Point.LEFT_TOP:
            case Point.TOP_LEFT:
                break;
            case Point.TOP_CENTER:
                leftDiff += anchorRect.width / 2;
                break;
            case Point.TOP_RIGHT:
                leftDiff += anchorRect.width;
                break;
            case Point.RIGHT_TOP:
                leftDiff += anchorRect.width;
                break;
            case Point.LEFT_BOTTOM:
                topDiff += anchorRect.height;
                break;
            case Point.BOTTOM_LEFT:
                topDiff += anchorRect.height;
                break;
            case Point.BOTTOM_CENTER:
                topDiff += anchorRect.height;
                leftDiff += anchorRect.width / 2;
                break;
            case Point.BOTTOM_RIGHT:
                topDiff += anchorRect.height;
                leftDiff += anchorRect.width;
                break;
            case Point.RIGHT_BOTTOM:
                topDiff += anchorRect.height;
                leftDiff += anchorRect.width;
                break;
            case Point.LEFT_CENTER:
                topDiff += anchorRect.height / 2;
                break;
            case Point.RIGHT_CENTER:
                topDiff += anchorRect.height / 2;
                leftDiff += anchorRect.width;
                break;
            default:
        }
        // second, adjust positioning based on popover's align point
        switch (popoverAlign) {
            case Point.LEFT_TOP:
            case Point.TOP_LEFT:
                break;
            case Point.TOP_CENTER:
                leftDiff -= popoverRect.width / 2;
                break;
            case Point.TOP_RIGHT:
                leftDiff -= popoverRect.width;
                break;
            case Point.RIGHT_TOP:
                leftDiff -= popoverRect.width;
                break;
            case Point.LEFT_BOTTOM:
                topDiff -= popoverRect.height;
                break;
            case Point.BOTTOM_LEFT:
                topDiff -= popoverRect.height;
                break;
            case Point.BOTTOM_CENTER:
                topDiff -= popoverRect.height;
                leftDiff -= popoverRect.width / 2;
                break;
            case Point.BOTTOM_RIGHT:
                topDiff -= popoverRect.height;
                leftDiff -= popoverRect.width;
                break;
            case Point.RIGHT_BOTTOM:
                topDiff -= popoverRect.height;
                leftDiff -= popoverRect.width;
                break;
            case Point.LEFT_CENTER:
                topDiff -= popoverRect.height / 2;
                break;
            case Point.RIGHT_CENTER:
                topDiff -= popoverRect.height / 2;
                leftDiff -= popoverRect.width;
                break;
            default:
        }
        // Third, adjust with popover's margins based on the two align points.
        // Here, we make an assumption that popover is primarily positioned outside the
        // anchor with minor offset. Without this assumption, it's impossible to apply
        // the popover's margins in a predictable way. For example, assume that a popover
        // and its anchor are exactly the same size. if a popover is positioned inside the
        // anchor (which is technically possible), then it becomes impossible to know what to do
        // if the popover has a non-zero margin value all around (because applying the margin in
        // all four directions will result in no margin visually, which isn't what we want).
        // Therefore, our logic makes assumptions about margins of interest given the points,
        // and only covers the cases where popover is outside the anchor.
        var popoverComputedStyle = getComputedStyle(this.element);
        var marginLeft = parseInt(popoverComputedStyle.marginLeft, 10);
        var marginRight = parseInt(popoverComputedStyle.marginRight, 10);
        var marginTop = parseInt(popoverComputedStyle.marginTop, 10);
        var marginBottom = parseInt(popoverComputedStyle.marginBottom, 10);
        switch (anchorAlign) {
            case Point.LEFT_TOP:
            case Point.TOP_LEFT:
            case Point.TOP_RIGHT:
            case Point.RIGHT_TOP:
                if (popoverAlign === Point.BOTTOM_RIGHT || popoverAlign === Point.RIGHT_BOTTOM) {
                    topDiff -= marginBottom;
                    leftDiff -= marginRight;
                }
                if (popoverAlign === Point.BOTTOM_LEFT || popoverAlign === Point.LEFT_BOTTOM) {
                    topDiff -= marginTop;
                    leftDiff += marginLeft;
                }
                if (popoverAlign === Point.TOP_LEFT || popoverAlign === Point.LEFT_TOP) {
                    topDiff += marginTop;
                    leftDiff += marginLeft;
                }
                if (popoverAlign === Point.TOP_RIGHT || popoverAlign === Point.RIGHT_TOP) {
                    topDiff += marginTop;
                    leftDiff -= marginRight;
                }
                break;
            case Point.LEFT_BOTTOM:
            case Point.BOTTOM_LEFT:
            case Point.BOTTOM_RIGHT:
            case Point.RIGHT_BOTTOM:
                if (popoverAlign === Point.BOTTOM_LEFT || popoverAlign === Point.LEFT_BOTTOM) {
                    topDiff -= marginBottom;
                    leftDiff += marginLeft;
                }
                if (popoverAlign === Point.BOTTOM_RIGHT || popoverAlign === Point.RIGHT_BOTTOM) {
                    topDiff -= marginBottom;
                    leftDiff -= marginRight;
                }
                if (popoverAlign === Point.TOP_LEFT || popoverAlign === Point.LEFT_TOP) {
                    topDiff += marginTop;
                    leftDiff += marginLeft;
                }
                if (popoverAlign === Point.TOP_RIGHT || popoverAlign === Point.RIGHT_TOP) {
                    topDiff += marginTop;
                    leftDiff -= marginRight;
                }
                break;
            case Point.TOP_CENTER:
                topDiff -= marginBottom;
                leftDiff += marginLeft;
                leftDiff -= marginRight;
                break;
            case Point.BOTTOM_CENTER:
                topDiff += marginTop;
                leftDiff += marginLeft;
                leftDiff -= marginRight;
                break;
            case Point.LEFT_CENTER:
                topDiff += marginTop;
                topDiff -= marginBottom;
                leftDiff -= marginRight;
                break;
            case Point.RIGHT_CENTER:
                topDiff += marginTop;
                topDiff -= marginBottom;
                leftDiff += marginLeft;
                break;
            default:
        }
        this.element.style.transform = "translateX(" + leftDiff + "px) translateY(" + topDiff + "px)";
        return this._scroll.asObservable();
    };
    Popover.prototype.release = function () {
        this.element.style.transform = "";
        this.removeScrollEventListeners();
    };
    Popover.prototype.isPositioned = function (container) {
        var position = getComputedStyle(container).position;
        return position === POSITION_RELATIVE || position === POSITION_ABSOLUTE || position === POSITION_FIXED;
    };
    Popover.prototype.emitScrollEvent = function () {
        this._scroll.next();
    };
    Popover.prototype.addScrollEventListeners = function (e) {
        this._scroll = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        var anchor = e;
        var current = e;
        while (current && current !== document) {
            if (this.scrolls(current)) {
                current.addEventListener("scroll", this.boundOnScrollListener);
                this.scrollableElements.push(current);
            }
            if (current !== anchor && this.isPositioned(current)) {
                break;
            }
            current = current.parentNode;
        }
    };
    Popover.prototype.removeScrollEventListeners = function () {
        for (var _i = 0, _a = this.scrollableElements; _i < _a.length; _i++) {
            var elem = _a[_i];
            elem.removeEventListener("scroll", this.boundOnScrollListener);
        }
        this.scrollableElements.length = 0;
        if (this._scroll) {
            this._scroll.complete();
            delete this._scroll;
        }
    };
    Popover.prototype.scrolls = function (container) {
        var computedStyles = getComputedStyle(container);
        return computedStyles.overflowX === OVERFLOW_SCROLL || computedStyles.overflowX === OVERFLOW_AUTO ||
            computedStyles.overflowY === OVERFLOW_SCROLL || computedStyles.overflowY === OVERFLOW_AUTO;
    };
    return Popover;
}());

//# sourceMappingURL=popover.js.map

/***/ }),
/* 810 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfOpenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var IfOpenService = (function () {
    function IfOpenService() {
        /********
         * @property _openChange
         *
         * @description
         * A RXJS Subject that updates and provides subscriptions to for the current open state of a component template
         * implemting the IfOpen structural directive.
         *
         * @type {Subject<boolean>}
         * @private
         */
        this._openChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(IfOpenService.prototype, "openChange", {
        /*********
         * @function openChange
         *
         * @description
         * A getter function that provides an observable for the _opened Subject.
         *
         * @returns {Observable<boolean>}
         */
        get: function () {
            return this._openChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IfOpenService.prototype, "open", {
        /*********
         *
         * @function open
         *
         * @description
         * A getter that returns the current value of this IfOpen instance.
         * @returns {boolean}
         */
        get: function () {
            return this._open;
        },
        /*********
         * @function open
         *
         * @description
         * A setter function that updates the current state of _open for this instance of IfOpen structural directive. And,
         * broadcasts the new value to all subscribers.
         *
         * @param value
         */
        set: function (value) {
            value = !!value;
            if (this._open !== value) {
                this._open = value;
                this._openChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    IfOpenService.prototype.toggleWithEvent = function (event) {
        this.originalEvent = event;
        this.open = !this.open;
        delete this.originalEvent;
    };
    return IfOpenService;
}());
IfOpenService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    /*********
     * @class IfOpenService
     *
     * @description
     * An injectable service used by IfOpen structural directives and the components that implemnt IfOpen in their
     * templates. It holds the value of the open state and provides an Observable that both the directive and the
     * implementing component can subscribe to in order to take action on open value changes.
     *
     */
], IfOpenService);

//# sourceMappingURL=if-open.service.js.map

/***/ }),
/* 811 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FiltersProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredFilter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var FiltersProvider = (function () {
    function FiltersProvider() {
        /**
         * This subject is the list of filters that changed last, not the whole list.
         * We emit a list rather than just one filter to allow batch changes to several at once.
         */
        this._change = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * List of all filters, whether they're active or not
         */
        this._all = [];
    }
    Object.defineProperty(FiltersProvider.prototype, "change", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if at least one filter is currently active
     */
    FiltersProvider.prototype.hasActiveFilters = function () {
        // We do not use getActiveFilters() because this function will be called much more often
        // and stopping the loop early might be relevant.
        for (var _i = 0, _a = this._all; _i < _a.length; _i++) {
            var filter = _a[_i].filter;
            if (filter && filter.isActive()) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns a list of all currently active filters
     */
    FiltersProvider.prototype.getActiveFilters = function () {
        var ret = [];
        for (var _i = 0, _a = this._all; _i < _a.length; _i++) {
            var filter = _a[_i].filter;
            if (filter && filter.isActive()) {
                ret.push(filter);
            }
        }
        return ret;
    };
    /**
     * Registers a filter, and returns a deregistration function
     */
    FiltersProvider.prototype.add = function (filter) {
        var _this = this;
        var index = this._all.length;
        var subscription = filter.changes.subscribe(function () { return _this._change.next([filter]); });
        var hasUnregistered = false;
        var registered = new RegisteredFilter(filter, function () {
            if (hasUnregistered) {
                return;
            }
            subscription.unsubscribe();
            _this._all.splice(index, 1);
            if (filter.isActive()) {
                _this._change.next([]);
            }
            hasUnregistered = true;
        });
        this._all.push(registered);
        if (filter.isActive()) {
            this._change.next([filter]);
        }
        return registered;
    };
    /**
     * Accepts an item if it is accepted by all currently active filters
     */
    FiltersProvider.prototype.accepts = function (item) {
        for (var _i = 0, _a = this._all; _i < _a.length; _i++) {
            var filter = _a[_i].filter;
            if (filter && filter.isActive() && !filter.accepts(item)) {
                return false;
            }
        }
        return true;
    };
    return FiltersProvider;
}());
FiltersProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], FiltersProvider);

var RegisteredFilter = (function () {
    function RegisteredFilter(filter, unregister) {
        this.filter = filter;
        this.unregister = unregister;
    }
    return RegisteredFilter;
}());

//# sourceMappingURL=filters.js.map

/***/ }),
/* 812 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideableColumnService; });
/*
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


/**
 * @class HideableColumnService
 *
 * @description
 * An @Injectable provider class that enables
 *
 * 1. Managing, track hideability of DatagridColumns
 *
 */
var HideableColumnService = (function () {
    function HideableColumnService() {
        /**********
         * @property dgHiddenColumnMap
         *
         * @description
         * An array of DatagridHideableColumn.
         * NOTE: because we can have columns w/o the *clrDgHideableColumn directive
         * this array will have empty spaces a.k.a nulls. This is needed to be able to map
         * DatagridCells to DatagridColumns in the RowRenderer.
         *
         *
         * @type { DatagridHideableColumn[] }
         */
        this._columnList = [];
        /**********
         *
         * @property dgHiddenColumnMapChange
         *
         * @description
         * A behavior subject that can broadcast updates to the column list.
         * NOTE: I am using BehaviorSubject because <clr-dg-column-toggle> is not getting the latest _columnListChange
         * on page load.
         *
         * @type {BehaviorSubject<DatagridColumn[]>}
         */
        this._columnListChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this._columnList);
    }
    Object.defineProperty(HideableColumnService.prototype, "canHideNextColumn", {
        /**********
         *
         * @property canHideNextColumn
         *
         * @description
         * Service function that is called by clr-dg-column-toggle component. Use this if you need to ask if you can hide
         * a column. It acts as a guard against hiding all the columns making sure there is at least one column displayed.
         *
         * @returns {boolean}
         */
        get: function () {
            var hiddenColumns = this._columnList.filter(function (column) { return column !== undefined; }).filter(function (column) { return column.hidden; });
            return (this._columnList.length - hiddenColumns.length > 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HideableColumnService.prototype, "checkForAllColumnsVisible", {
        /**********
         *
         * @property checkForAllColumnsVisible
         *
         * @description
         * For when you need to know if the datagrid's columns are all showing.
         *
         * @return {boolean}
         */
        get: function () {
            return !this._columnList.some(function (column) { return column && column.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HideableColumnService.prototype, "columnListChange", {
        /***********
         * @property columnListChange
         *
         * @description
         * A public property that enables subscribers to hear updates to the column map.
         * Use this if you need to do something whenever the Datagrid's column list is changed (i.e *ngIf on a column).
         *
         * @returns {Observable<DatagridHideableColumn[]>}
         */
        get: function () {
            return this._columnListChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**********
     *
     * @function getColumns
     *
     * @description
     * Public function that returns the current list of columns. I needed an array of to iterate on in the RowRenderer
     * but subscribing to the _columnListChange changes did not seem like the correct way to get it.
     *
     * @returns {DatagridColumn[]}
     */
    HideableColumnService.prototype.getColumns = function () {
        return this._columnList;
    };
    /**********
     * @function showHiddenColumns
     *
     * @description
     * Iterate through the current _columnList:
     * - if it has a DatagridHideableColumn and is hidden then show it.
     * - if it's DatagridHideableColumn was previously the last column visible, turn that flag off.
     *
     */
    HideableColumnService.prototype.showHiddenColumns = function () {
        this._columnList.forEach(function (column) {
            if (column && column.hidden === true) {
                column.hidden = false;
            }
            if (column && column.lastVisibleColumn) {
                column.lastVisibleColumn = false;
            }
        });
    };
    /**
     * @function updateColumnList
     *
     * @param columns: DatagridColumn[]
     *
     * @description
     * Creates an array of DatagridHideableColumn's || null based column array passed as param.
     * Is dependent on the order in @ContentChildren in Datagrid.
     *
     * @param columns
     *
     */
    HideableColumnService.prototype.updateColumnList = function (columns) {
        this._columnList = columns; // clear the list
        this.updateForLastVisibleColumn(); // Update our visibility state for UI
        this._columnListChange.next(this._columnList); // Broadcast it
    };
    /**********
     *
     * @function updateForLastVisibleColumn
     *
     * @description
     * Gets the current visible count for all columns.
     * When it is greater than 1 it marks everything as false for the lastVisibleColumn.
     * When visible count is not > 1 (i.e) 1. , it finds the only column that is not hidden and marks it as the
     * lastVisibleColumn.
     *
     * @return void
     *
     */
    HideableColumnService.prototype.updateForLastVisibleColumn = function () {
        // There is more than one column showing, make sure nothing is marked lastVisibleColumn
        if (this.canHideNextColumn) {
            this._columnList.map(function (column) {
                if (column && column.lastVisibleColumn) {
                    column.lastVisibleColumn = false;
                }
            });
        }
        else {
            // The visibleCount is down to only one column showing. Find it and flag it as the lastVisibleColumn
            this._columnList.map(function (column) {
                if (column && !column.hidden) {
                    column.lastVisibleColumn = true;
                }
            });
        }
    };
    /**********
     *
     * @function getColumnById
     *
     * @description
     * Return a HideableColumn in this._columnList for the given id.
     *
     * @param id
     *
     * @type string
     *
     * @returns HideableColumn
     *
     */
    HideableColumnService.prototype.getColumnById = function (id) {
        if (id) {
            return this._columnList.find(function (column) { return column && column.id === id; });
        }
        return;
    };
    return HideableColumnService;
}());
HideableColumnService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], HideableColumnService);

//# sourceMappingURL=hideable-column.service.js.map

/***/ }),
/* 813 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomAdapter; });
/*
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
/*
 * If we someday want to be able to render the datagrid in a webworker,
 * this is where we would test if we're in headless mode. Right now it's not testing anything, but any access
 * to native DOM elements' methods and properties in the Datagrid happens here.
 */

var DomAdapter = (function () {
    function DomAdapter() {
    }
    DomAdapter.prototype.userDefinedWidth = function (element) {
        element.classList.add("datagrid-cell-width-zero");
        var userDefinedWidth = parseInt(getComputedStyle(element).getPropertyValue("width"), 10);
        element.classList.remove("datagrid-cell-width-zero");
        return userDefinedWidth;
    };
    DomAdapter.prototype.scrollBarWidth = function (element) {
        return element.offsetWidth - element.clientWidth;
    };
    DomAdapter.prototype.scrollWidth = function (element) {
        return element.scrollWidth || 0;
    };
    DomAdapter.prototype.computedHeight = function (element) {
        return parseInt(getComputedStyle(element).getPropertyValue("height"), 10);
    };
    DomAdapter.prototype.clientRectRight = function (element) {
        return parseInt(element.getBoundingClientRect().right, 10);
    };
    DomAdapter.prototype.clientRectWidth = function (element) {
        return parseInt(element.getBoundingClientRect().width, 10);
    };
    DomAdapter.prototype.minWidth = function (element) {
        return parseInt(getComputedStyle(element).getPropertyValue("min-width"), 10);
    };
    DomAdapter.prototype.focus = function (element) {
        element.focus();
    };
    return DomAdapter;
}());
DomAdapter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], DomAdapter);

//# sourceMappingURL=dom-adapter.js.map

/***/ }),
/* 814 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(1008);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrCommonPopoverModule; });
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



var ClrCommonPopoverModule = (function () {
    function ClrCommonPopoverModule() {
    }
    return ClrCommonPopoverModule;
}());
ClrCommonPopoverModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* POPOVER_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* POPOVER_DIRECTIVES */]] })
], ClrCommonPopoverModule);

//# sourceMappingURL=popover.module.js.map

/***/ }),
/* 815 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expand; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var Expand = (function () {
    function Expand() {
        this.expandable = 0;
        this.replace = false;
        this._loading = false;
        this._expanded = false;
        // TODO: Move this to the datagrid RowExpand.
        // I spent some time doing this but ran into a couple of issues
        // Will take care of this later.
        this._animate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._expandChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(Expand.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (value) {
            value = !!value;
            if (value !== this._loading) {
                this._loading = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expand.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (value) {
            value = !!value;
            if (value !== this._expanded) {
                this._expanded = value;
                this._animate.next();
                this._expandChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expand.prototype, "animate", {
        get: function () {
            return this._animate.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expand.prototype, "expandChange", {
        get: function () {
            return this._expandChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Expand.prototype.startLoading = function () {
        this.loading = true;
    };
    Expand.prototype.doneLoading = function () {
        this.loading = false;
        this._animate.next();
    };
    return Expand;
}());
Expand = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Expand);

//# sourceMappingURL=expand.js.map

/***/ }),
/* 816 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort__ = __webpack_require__(849);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */





var Items = (function () {
    function Items(_filters, _sort, _page) {
        this._filters = _filters;
        this._sort = _sort;
        this._page = _page;
        /**
         * Indicates if the data is currently loading
         */
        this.loading = false;
        // TODO: Verify that trackBy is registered for the *ngFor case too
        /**
         * Tracking function to identify objects. Default is reference equality.
         */
        this.trackBy = function (index, item) { return item; };
        /**
         * Whether we should use smart items for this datagrid or let the user handle
         * everything.
         */
        this._smart = false;
        /**
         * List of items currently displayed
         */
        this._displayed = [];
        /**
         * The Observable that lets other classes subscribe to items changes
         */
        this._change = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._allChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    /**
     * Cleans up our subscriptions to other providers
     */
    Items.prototype.destroy = function () {
        if (this._filtersSub) {
            this._filtersSub.unsubscribe();
        }
        if (this._sortSub) {
            this._sortSub.unsubscribe();
        }
        if (this._pageSub) {
            this._pageSub.unsubscribe();
        }
    };
    Object.defineProperty(Items.prototype, "smart", {
        get: function () {
            return this._smart;
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.smartenUp = function () {
        var _this = this;
        this._smart = true;
        /*
         * These observers trigger a chain of function: filter -> sort -> paginate
         * An observer up the chain re-triggers all the operations that follow it.
         */
        this._filtersSub = this._filters.change.subscribe(function () { return _this._filterItems(); });
        this._sortSub = this._sort.change.subscribe(function () {
            // Special case, if the datagrid went from sorted to unsorted, we have to re-filter
            // to get the original order back
            if (!_this._sort.comparator) {
                _this._filterItems();
            }
            else {
                _this._sortItems();
            }
        });
        this._pageSub = this._page.change.subscribe(function () { return _this._changePage(); });
    };
    Object.defineProperty(Items.prototype, "all", {
        set: function (items) {
            if (this.smart) {
                this._all = items;
                this.emitAllChanges();
                this._filterItems();
            }
            else {
                this._displayed = items;
                this.emitChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Manually recompute the list of displayed items
     */
    Items.prototype.refresh = function () {
        if (this.smart) {
            this._filterItems();
        }
    };
    Object.defineProperty(Items.prototype, "displayed", {
        get: function () {
            // Ideally we could return an immutable array, but we don't have it in Clarity yet.
            return this._displayed;
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.emitChange = function () {
        this._change.next(this.displayed);
    };
    Object.defineProperty(Items.prototype, "change", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.emitAllChanges = function () {
        if (this.smart) {
            this._allChanges.next(this._all);
        }
    };
    Object.defineProperty(Items.prototype, "allChanges", {
        get: function () {
            return this._allChanges.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "uninitialized", {
        /**
         * Checks if we don't have data to process yet, to abort early operations
         */
        get: function () {
            return !this._all;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * FiltersProvider items from the raw list
     */
    Items.prototype._filterItems = function () {
        var _this = this;
        if (this.uninitialized) {
            return;
        }
        if (this._filters.hasActiveFilters()) {
            this._filtered = this._all.filter(function (item) { return _this._filters.accepts(item); });
        }
        else {
            // Work on a shallow copy of the array, to not modify the user's model
            this._filtered = this._all.slice();
        }
        this._page.totalItems = this._filtered.length;
        this._sortItems();
    };
    /**
     * Sorts items in the filtered list
     */
    Items.prototype._sortItems = function () {
        var _this = this;
        if (this.uninitialized) {
            return;
        }
        if (this._sort.comparator) {
            this._filtered.sort(function (a, b) { return _this._sort.compare(a, b); });
        }
        this._changePage();
    };
    /**
     * Extracts the current page from the sorted list
     */
    Items.prototype._changePage = function () {
        if (this.uninitialized) {
            return;
        }
        if (this._page.size > 0) {
            this._displayed = this._filtered.slice(this._page.firstItem, this._page.lastItem + 1);
        }
        else {
            this._displayed = this._filtered;
        }
        this.emitChange();
    };
    return Items;
}());
Items = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__filters__["b" /* FiltersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__filters__["b" /* FiltersProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__sort__["a" /* Sort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sort__["a" /* Sort */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__page__["a" /* Page */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__page__["a" /* Page */]) === "function" && _c || Object])
], Items);

var _a, _b, _c;
//# sourceMappingURL=items.js.map

/***/ }),
/* 817 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var Page = (function () {
    function Page() {
        /**
         * Page size, a value of 0 means no pagination
         */
        this._size = 0;
        /**
         * Total items (needed to guess the last page)
         */
        this._totalItems = 0;
        /**
         * The Observable that lets other classes subscribe to page changes
         */
        this._change = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._sizeChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * Current page
         */
        this._current = 1;
    }
    Object.defineProperty(Page.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            var oldSize = this._size;
            if (size !== oldSize) {
                this._size = size;
                // Yeap. That's the formula to keep the first item from the old page still
                // displayed in the new one.
                this._current = Math.floor(oldSize / size * (this._current - 1)) + 1;
                // We always emit an event even if the current page index didn't change, because
                // the size changing means the items inside the page are different
                this._change.next(this._current);
                this._sizeChange.next(this._size);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "totalItems", {
        get: function () {
            return this._totalItems;
        },
        set: function (total) {
            this._totalItems = total;
            // If we have less items than before, we might need to change the current page
            if (this.current > this.last) {
                this.current = this.last;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "last", {
        get: function () {
            if (this._last) {
                return this._last;
            }
            // If the last page isn't known, we compute it from the last item's index
            if (this.size > 0 && this.totalItems) {
                return Math.ceil(this.totalItems / this.size);
            }
            return 1;
        },
        set: function (page) {
            this._last = page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "change", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "sizeChange", {
        get: function () {
            return this._sizeChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (page) {
            if (page !== this._current) {
                this._current = page;
                this._change.next(page);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves to the previous page if it exists
     */
    Page.prototype.previous = function () {
        if (this.current > 1) {
            this.current--;
        }
    };
    /**
     * Moves to the next page if it exists
     */
    Page.prototype.next = function () {
        if (this.current < this.last) {
            this.current++;
        }
    };
    Object.defineProperty(Page.prototype, "firstItem", {
        /**
         * Index of the first item displayed on the current page, starting at 0
         */
        get: function () {
            if (this.size === 0) {
                return 0;
            }
            return (this.current - 1) * this.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "lastItem", {
        /**
         * Index of the last item displayed on the current page, starting at 0
         */
        get: function () {
            if (this.size === 0) {
                return this.totalItems - 1;
            }
            var lastInPage = (this.current) * this.size - 1;
            if (this.totalItems) {
                lastInPage = Math.min(lastInPage, this.totalItems - 1);
            }
            return lastInPage;
        },
        enumerable: true,
        configurable: true
    });
    return Page;
}());
Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Page);

//# sourceMappingURL=page.js.map

/***/ }),
/* 818 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowActionService; });
/*
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

var RowActionService = (function () {
    function RowActionService() {
        this.actionableCount = 0;
    }
    RowActionService.prototype.register = function () {
        this.actionableCount++;
    };
    RowActionService.prototype.unregister = function () {
        this.actionableCount--;
    };
    Object.defineProperty(RowActionService.prototype, "hasActionableRow", {
        /**
         * false means no rows with action
         */
        get: function () {
            return this.actionableCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    return RowActionService;
}());
RowActionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], RowActionService);

//# sourceMappingURL=row-action-service.js.map

/***/ }),
/* 819 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StackViewCustomTags; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var StackView = (function () {
    function StackView() {
        /**
         * Undocumented experimental feature: inline editing.
         */
        this.editable = false;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this._editMode = false;
        this.editingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * End of undocumented experimental feature.
         */
    }
    Object.defineProperty(StackView.prototype, "editing", {
        get: function () {
            return this.editable && this._editMode;
        },
        set: function (value) {
            if (this.editable) {
                this._editMode = value;
                this.editingChange.emit(value);
                if (!value) {
                    this.save.emit(null);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return StackView;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrStackSave"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], StackView.prototype, "save", void 0);
StackView = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-stack-view",
        template: "\n        <ng-content select=\"clr-stack-header\"></ng-content>\n        <dl class=\"stack-view\"><ng-content></ng-content></dl>\n    ",
        // Custom elements are inline by default.
        styles: ["\n        :host { display: block; }\n    "]
    })
], StackView);

var StackViewCustomTags = (function () {
    function StackViewCustomTags() {
    }
    return StackViewCustomTags;
}());
StackViewCustomTags = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-stack-label, clr-stack-content" })
], StackViewCustomTags);

var _a;
//# sourceMappingURL=stack-view.js.map

/***/ }),
/* 820 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clrResponsiveNavCodes__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clrResponsiveNavControlMessage__ = __webpack_require__(1003);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrResponsiveNavigationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */




var ClrResponsiveNavigationService = (function () {
    function ClrResponsiveNavigationService() {
        this.responsiveNavList = [];
        this.registerNavSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.controlNavSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.closeAllNavs(); // We start with all navs closed
    }
    Object.defineProperty(ClrResponsiveNavigationService.prototype, "registeredNavs", {
        get: function () {
            return this.registerNavSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrResponsiveNavigationService.prototype, "navControl", {
        get: function () {
            return this.controlNavSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ClrResponsiveNavigationService.prototype.registerNav = function (navLevel) {
        if (!navLevel || this.isNavRegistered(navLevel)) {
            return;
        }
        this.responsiveNavList.push(navLevel);
        this.registerNavSubject.next(this.responsiveNavList);
    };
    ClrResponsiveNavigationService.prototype.isNavRegistered = function (navLevel) {
        if (this.responsiveNavList.indexOf(navLevel) > -1) {
            console.error("Multiple clr-nav-level " + navLevel +
                " attributes found. Please make sure that only one exists");
            return true;
        }
        return false;
    };
    ClrResponsiveNavigationService.prototype.unregisterNav = function (navLevel) {
        var index = this.responsiveNavList.indexOf(navLevel);
        if (index > -1) {
            this.responsiveNavList.splice(index, 1);
            this.registerNavSubject.next(this.responsiveNavList);
        }
    };
    ClrResponsiveNavigationService.prototype.sendControlMessage = function (controlCode, navLevel) {
        var message = new __WEBPACK_IMPORTED_MODULE_3__clrResponsiveNavControlMessage__["a" /* ClrResponsiveNavControlMessage */](controlCode, navLevel);
        this.controlNavSubject.next(message);
    };
    ClrResponsiveNavigationService.prototype.closeAllNavs = function () {
        var message = new __WEBPACK_IMPORTED_MODULE_3__clrResponsiveNavControlMessage__["a" /* ClrResponsiveNavControlMessage */](__WEBPACK_IMPORTED_MODULE_2__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLOSE_ALL, -999);
        this.controlNavSubject.next(message);
    };
    return ClrResponsiveNavigationService;
}());
ClrResponsiveNavigationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClrResponsiveNavigationService);

//# sourceMappingURL=clrResponsiveNavigationService.js.map

/***/ }),
/* 821 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(1021);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrConditionalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var ClrConditionalModule = (function () {
    function ClrConditionalModule() {
    }
    return ClrConditionalModule;
}());
ClrConditionalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CONDITIONAL_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CONDITIONAL_DIRECTIVES */]] })
], ClrConditionalModule);

//# sourceMappingURL=conditional.module.js.map

/***/ }),
/* 822 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IF_ACTIVE_ID; });
/* unused harmony export tokenFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IF_ACTIVE_ID_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IfActiveService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var activeCounter = 0;
var IF_ACTIVE_ID = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* InjectionToken */]("IF_ACTIVE_ID");
function tokenFactory() {
    return ++activeCounter;
}
var IF_ACTIVE_ID_PROVIDER = {
    provide: IF_ACTIVE_ID,
    useFactory: tokenFactory
};
var IfActiveService = (function () {
    function IfActiveService() {
        /********
         * @property _currentChange
         *
         * @description
         * A RXJS Subject that updates and provides subscriptions to for the current current state of a component template
         * implemting the IfActive structural directive.
         *
         * @type {Subject<any>}
         * @private
         */
        this._currentChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(IfActiveService.prototype, "currentChange", {
        /*********
         * @function currentChange
         *
         * @description
         * A getter function that provides an observable for the _current Subject.
         *
         * @returns {Observable<number>}
         */
        get: function () {
            return this._currentChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IfActiveService.prototype, "current", {
        /*********
         *
         * @function current
         *
         * @description
         * A getter that returns the current value of this IfActive instance.
         * @returns {number}
         */
        get: function () {
            return this._current;
        },
        /*********
         * @function current
         *
         * @description
         * A setter function that updates the current state of _current for this instance of IfActive structural directive.
         * And, broadcasts the new value to all subscribers.
         *
         * @param value
         */
        set: function (value) {
            if (this._current !== value) {
                this._current = value;
                this._currentChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return IfActiveService;
}());
IfActiveService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    /*********
     * @class IfActiveService
     *
     * @description
     * An injectable service used by IfActive structural directives and the components that implement IfActive in their
     * templates. It holds the value of the current state and provides an Observable that both the directive and the
     * implementing component can subscribe to in order to take action on current value changes.
     *
     */
], IfActiveService);

//# sourceMappingURL=if-active.service.js.map

/***/ }),
/* 823 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingListener; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This is an abstract class because we need it to still be a valid token for dependency injection after transpiling.
 * This does not mean you should extend it, simply implementing it is fine.
 */
var LoadingListener = (function () {
    function LoadingListener() {
    }
    return LoadingListener;
}());

//# sourceMappingURL=loading-listener.js.map

/***/ }),
/* 824 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageCollectionService; });
/*
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


/**
 * PageCollectionService manages the collection of pages assigned to the wizard and offers
 * a number of functions useful across the wizards providers and subcomponents -- all related
 * to essentially lookups on the collection of pages.
 *
 * The easiest way to access PageCollectionService is via the wizard. The
 * following example would allow you to access your instance of the wizard from your host
 * component and thereby access the page collection via YourHostComponent.wizard.pageCollection.
 *
 * @example
 * <clr-wizard #wizard ...>
 *
 * @example
 * export class YourHostComponent {
 *   @ViewChild("wizard") wizard: Wizard;
 *   ...
 * }
 *
 * The heart of the page collection is the query list of pages, which it is assigned as a
 * reference to the Wizard.pages QueryList when the wizard is created.
 *
 * @export
 * @class PageCollectionService
 */
var PageCollectionService = (function () {
    function PageCollectionService() {
        // used by the navService to navigate back to first possible step after
        // pages are reset
        /**
         *
         * @private
         *
         * @memberof PageCollectionService
         */
        this._pagesReset = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(PageCollectionService.prototype, "pagesAsArray", {
        /**
         * Converts the PageCollectionService.pages QueryList to an array and returns it.
         *
         * Useful for many instances when you would prefer a QueryList to act like an array.
         *
         * @readonly
         * @type {WizardPage[]}
         * @memberof PageCollectionService
         */
        get: function () {
            return this.pages ? this.pages.toArray() : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageCollectionService.prototype, "pagesCount", {
        /**
         * Returns the length of the pages query list.
         *
         * @readonly
         * @type {number}
         * @memberof PageCollectionService
         */
        get: function () {
            return this.pages ? this.pages.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageCollectionService.prototype, "penultimatePage", {
        /**
         * Returns the next-to-last page in the query list of pages. Operates as a getter
         * so that it isn't working with stale data.
         *
         * @readonly
         * @type {WizardPage}
         * @memberof PageCollectionService
         */
        get: function () {
            var pageCount = this.pagesCount;
            if (pageCount < 2) {
                return;
            }
            return this.pagesAsArray[pageCount - 2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageCollectionService.prototype, "lastPage", {
        /**
         * Returns the last page in the query list of pages. Operates as a getter
         * so that it isn't working with stale data.
         *
         * @readonly
         * @type {WizardPage}
         * @memberof PageCollectionService
         */
        get: function () {
            var pageCount = this.pagesCount;
            if (pageCount < 1) {
                return;
            }
            return this.pagesAsArray[pageCount - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageCollectionService.prototype, "firstPage", {
        /**
         * Returns the first page in the query list of pages. Operates as a getter
         * so that it isn't working with stale data.
         *
         * @readonly
         * @type {WizardPage}
         * @memberof PageCollectionService
         */
        get: function () {
            if (!this.pagesCount) {
                return;
            }
            return this.pagesAsArray[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used mostly internally, but accepts a string ID and returns a WizardPage
     * object that matches the ID passed. Note that IDs here should include the prefix
     * "clr-wizard-page-".
     *
     * Returns the next-to-last page in the query list of pages. Operates as a getter
     * so that it isn't working with stale data.
     *
     * @readonly
     * @type {WizardPage}
     * @param {string} id  ID of the page you're looking for
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.getPageById = function (id) {
        var foundPages = this.pages.filter(function (page) { return id === page.id; });
        return this.checkResults(foundPages, id);
    };
    /**
     * Accepts s number as a parameter and treats that number as the index of the page
     * you're looking for in the collection of pages. Returns a  wizard page object.
     *
     * @param {number} index
     * @returns {WizardPage}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.getPageByIndex = function (index) {
        var pageCount = this.pagesCount;
        var pagesLastIndex = (pageCount > 1) ? pageCount - 1 : 0;
        if (index < 0) {
            throw new Error("Cannot retrieve page with index of " + index);
        }
        if (index > pagesLastIndex) {
            throw new Error("Page index is greater than length of pages array.");
        }
        return this.pagesAsArray[index];
    };
    /**
     * Takes a wizard page object as a parameter and returns its index in the
     * collection of pages.
     *
     * @param {WizardPage} page
     * @returns {number}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.getPageIndex = function (page) {
        var index = this.pagesAsArray.indexOf(page);
        if (index < 0) {
            throw new Error("Requested page cannot be found in collection of pages.");
        }
        return index;
    };
    /**
     * Consolidates guard logic that prevents a couple of unfortunate edge cases with
     * look ups on the collection of pages.
     *
     * @private
     * @param {WizardPage[]} results
     * @param {string} requestedPageId
     * @returns
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.checkResults = function (results, requestedPageId) {
        var foundPagesCount = results.length || 0;
        if (foundPagesCount > 1) {
            throw new Error("More than one page has the requested id " + requestedPageId + ".");
        }
        else if (foundPagesCount < 1) {
            throw new Error("No page can be found with the id " + requestedPageId + ".");
        }
        else {
            return results[0];
        }
    };
    /**
     * Accepts two numeric indexes and returns an array of wizard page objects that include
     * all wizard pages in the page collection from the first index to the second.
     *
     * @param {number} start
     * @param {number} end
     * @returns {WizardPage[]}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.pageRange = function (start, end) {
        var pages = [];
        if (start < 0 || end < 0) {
            return [];
        }
        if (start === null || typeof start === undefined || isNaN(start)) {
            return [];
        }
        if (end === null || typeof end === undefined || isNaN(end)) {
            return [];
        }
        if (end > this.pagesCount) {
            end = this.pagesCount;
        }
        pages = this.pagesAsArray;
        if ((end - start) === 0) {
            // just return the one page they want
            return [this.getPageByIndex(start)];
        }
        // slice end does not include item referenced by end index, which is weird for users
        // incrementing end index here to correct that so users and other methods
        // don't have to think about it
        end = end + 1;
        // slice does not return the last one in the range but it does include the first one
        // does not modify original array
        return pages.slice(start, end);
    };
    /**
     * Accepts two wizard page objects and returns those page objects with all other page
     * objects between them in the page collection. It doesn't care which page is ahead of the
     * other in the parameters. It will be smart enough to figure that out  on its own.
     *
     * @param {WizardPage} page
     * @param {WizardPage} otherPage
     * @returns {WizardPage[]}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.getPageRangeFromPages = function (page, otherPage) {
        var pageIndex = this.getPageIndex(page);
        var otherPageIndex = this.getPageIndex(otherPage);
        var startIndex;
        var endIndex;
        if (pageIndex <= otherPageIndex) {
            startIndex = pageIndex;
            endIndex = otherPageIndex;
        }
        else {
            startIndex = otherPageIndex;
            endIndex = pageIndex;
        }
        return this.pageRange(startIndex, endIndex);
    };
    /**
     * Takes a wizard page object as a parameter and returns the wizard page object of
     * the page immediately before it in the page collection. Returns null if there is
     * no page before the page it is passed.
     *
     * @param {WizardPage} page
     * @returns {WizardPage}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.getPreviousPage = function (page) {
        var myPageIndex = this.getPageIndex(page);
        var previousPageIndex = myPageIndex - 1;
        if (previousPageIndex < 0) {
            return null;
        }
        return this.getPageByIndex(previousPageIndex);
    };
    /**
     * Accepts a wizard page object as a parameter and returns a Boolean that says if
     * the page you sent it is complete.
     *
     * @param {WizardPage} page
     * @returns {boolean}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.previousPageIsCompleted = function (page) {
        var previousPage;
        if (!page) {
            return false;
        }
        previousPage = this.getPreviousPage(page);
        if (null === previousPage) {
            // page is the first page. no previous page.
            return true;
        }
        return previousPage.completed;
    };
    /**
     * Takes a wizard page object as a parameter and returns the wizard page object of
     * the page immediately after it in the page collection. Returns null if there is
     * no page after the page it is passed.
     *
     * @param {WizardPage} page
     * @returns {WizardPage} next page
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.getNextPage = function (page) {
        var myPageIndex = this.getPageIndex(page);
        var nextPageIndex = myPageIndex + 1;
        if (nextPageIndex >= this.pagesAsArray.length) {
            return null;
        }
        return this.getPageByIndex(nextPageIndex);
    };
    /**
     * Takes a wizard page object as a parameter and generates a step item id from the
     * page ID. Returns the generated step item ID as a string.
     *
     * @param {WizardPage} page
     * @returns {string}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.getStepItemIdForPage = function (page) {
        var pageId = page.id;
        var pageIdParts = pageId.split("-").reverse();
        pageIdParts[1] = "step";
        return pageIdParts.reverse().join("-");
    };
    /**
     * Generally only used internally to mark that a specific page has been "committed".
     * This involves marking the page complete and firing the WizardPage.onCommit
     * (clrWizardPageOnCommit) output. Takes the wizard page object that you intend to
     * mark completed as a parameter.
     *
     * @param {WizardPage} page
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.commitPage = function (page) {
        var pageHasOverrides = page.stopNext || page.preventDefault;
        page.completed = true;
        if (!pageHasOverrides) {
            // prevent loop of event emission; alternate flows work off
            // of event emitters this is how they break that cycle.
            page.onCommit.emit(page.id);
        }
    };
    Object.defineProperty(PageCollectionService.prototype, "pagesReset", {
        /**
         * An observable that the navigation service listens to in order to know when
         * the page collection completed states have been reset to false so that way it
         * can also reset the navigation to make the first page in the page collection
         * current/active.
         *
         * @readonly
         * @type {Observable<boolean>}
         * @memberof PageCollectionService
         */
        get: function () {
            return this._pagesReset.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets all completed states of the pages in the page collection to false and
     * notifies the navigation service to likewise reset the navigation.
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.reset = function () {
        this.pagesAsArray.forEach(function (page) {
            page.completed = false;
        });
        this._pagesReset.next(true);
    };
    /**
     * Rolls through all the pages in the page collection to make sure there are no
     * incomplete pages sandwiched between completed pages in the workflow. Identifies
     * the first incomplete page index and sets all pages behind it to a completed
     * state of false.
     *
     * @returns {void}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.updateCompletedStates = function () {
        var firstIncompleteIndex = this.findFirstIncompletePageIndex();
        if (firstIncompleteIndex === this.pagesAsArray.length - 1) {
            // all complete no need to do anything
            return;
        }
        this.pagesAsArray.forEach(function (page, index) {
            if (index > firstIncompleteIndex) {
                page.completed = false;
            }
        });
    };
    /**
     * Retrieves the index of the first incomplete page in the page collection.
     *
     * @returns {number}
     *
     * @memberof PageCollectionService
     */
    PageCollectionService.prototype.findFirstIncompletePageIndex = function () {
        var returnIndex = null;
        this.pagesAsArray.forEach(function (page, index) {
            if (null === returnIndex && false === page.completed) {
                returnIndex = index;
            }
        });
        // fallthrough, all completed, return last page
        if (null === returnIndex) {
            returnIndex = this.pagesCount - 1;
        }
        return returnIndex;
    };
    PageCollectionService.prototype.findFirstIncompletePage = function () {
        var myIncompleteIndex = this.findFirstIncompletePageIndex();
        return this.pagesAsArray[myIncompleteIndex];
    };
    return PageCollectionService;
}());
PageCollectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], PageCollectionService);

//# sourceMappingURL=page-collection.js.map

/***/ }),
/* 825 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_utils_ghost_page_animations__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_hub__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_collection__ = __webpack_require__(824);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardNavigationService; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Performs navigation functions for a wizard and manages the current page. Presented as a
 * separate service to encapsulate the behavior of navigating and completing the wizard so
 * that it can be shared across the wizard and its sub-components.
 *
 * The easiest way to access the navigation service is there a reference on your wizard. The
 * Following example would allow you to access your instance of the wizard from your host
 * component and thereby access the navigation service via YourHostComponent.wizard.navService.
 *
 * @example
 * <clr-wizard #wizard ...>
 *
 * @example
 * export class YourHostComponent {
 *   @ViewChild("wizard") wizard: Wizard;
 *   ...
 * }
 *
 * @export
 * @class WizardNavigationService
 * @implements {OnDestroy}
 */
var WizardNavigationService = (function () {
    /**
     * Creates an instance of WizardNavigationService. Also sets up subscriptions
     * that listen to the button service to determine when a button has been clicked
     * in the wizard. Is also responsible for taking action when the page collection
     * requests that navigation be reset to its pristine state.
     *
     * @param {PageCollectionService} pageCollection
     * @param {ButtonHubService} buttonService
     *
     * @memberof WizardNavigationService
     */
    function WizardNavigationService(pageCollection, buttonService) {
        var _this = this;
        this.pageCollection = pageCollection;
        this.buttonService = buttonService;
        /**
         *
         * @ignore
         * @private
         *
         * @memberof WizardNavigationService
         */
        this._currentChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * A Boolean flag used by the WizardPage to avoid a race condition when pages are
         * loading and there is no current page defined.
         *
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        this.navServiceLoaded = false;
        /**
         * A boolean flag shared across the Wizard subcomponents that follows the value
         * of the Wizard.forceForward (clrWizardForceForwardNavigation) input. When true,
         * navigating backwards in the stepnav menu will reset any skipped pages' completed
         * state to false.
         *
         * This is useful when a wizard executes validation on a page-by-page basis when
         * the next button is clicked.
         *
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        this.forceForwardNavigation = false;
        /**
         *
         * @ignore
         * @private
         *
         * @memberof WizardNavigationService
         */
        this._movedToNextPage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         *
         * @ignore
         * @private
         *
         * @memberof WizardNavigationService
         */
        this._wizardFinished = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         *
         * @ignore
         * @private
         *
         * @memberof WizardNavigationService
         */
        this._movedToPreviousPage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         *
         * @ignore
         * @private
         *
         * @memberof WizardNavigationService
         */
        this._cancelWizard = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * A boolean flag shared across the Wizard subcomponents that follows the value
         * of the Wizard.stopCancel (clrWizardPreventDefaultCancel) input. When true, the cancel
         * routine is subverted and must be reinstated in the host component calling Wizard.close()
         * at some point.
         *
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        this.wizardHasAltCancel = false;
        /**
         * A boolean flag shared across the Wizard subcomponents that follows the value
         * of the Wizard.stopNext (clrWizardPreventDefaultNext) input. When true, the next and finish
         * routines are subverted and must be reinstated in the host component calling Wizard.next(),
         * Wizard.forceNext(), Wizard.finish(), or Wizard.forceFinish().
         *
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        this.wizardHasAltNext = false;
        /**
         * A boolean flag shared across the Wizard subcomponents that follows the value
         * of the Wizard.stopNavigation (clrWizardPreventNavigation) input. When true, all
         * navigational elements in the wizard are disabled.
         *
         * This is intended to freeze the wizard in place. Events are not fired so this is
         * not a way to implement alternate functionality for navigation.
         *
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        this.wizardStopNavigation = false;
        /**
         * A boolean flag shared with the stepnav items that prevents user clicks on
         * stepnav items from navigating the wizard.
         *
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        this.wizardDisableStepnav = false;
        /**
         *
         * @ignore
         * @private
         * @type {string}
         * @memberof WizardNavigationService
         */
        this._wizardGhostPageState = __WEBPACK_IMPORTED_MODULE_2__modal_utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NO_PAGES;
        /**
         *
         * @ignore
         * @private
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        this._hideWizardGhostPages = true;
        this.previousButtonSubscription = this.buttonService.previousBtnClicked.subscribe(function () {
            var currentPage = _this.currentPage;
            if (_this.currentPageIsFirst || currentPage.previousStepDisabled) {
                return;
            }
            currentPage.previousButtonClicked.emit(currentPage);
            if (!currentPage.preventDefault) {
                _this.previous();
            }
        });
        this.nextButtonSubscription = this.buttonService.nextBtnClicked.subscribe(function () {
            _this.checkAndCommitCurrentPage("next");
        });
        this.dangerButtonSubscription = this.buttonService.dangerBtnClicked.subscribe(function () {
            _this.checkAndCommitCurrentPage("danger");
        });
        this.finishButtonSubscription = this.buttonService.finishBtnClicked.subscribe(function () {
            _this.checkAndCommitCurrentPage("finish");
        });
        this.customButtonSubscription = this.buttonService.customBtnClicked.subscribe(function (type) {
            if (!_this.wizardStopNavigation) {
                _this.currentPage.customButtonClicked.emit(type);
            }
        });
        this.cancelButtonSubscription = this.buttonService.cancelBtnClicked.subscribe(function () {
            if (_this.wizardStopNavigation) {
                return;
            }
            if (_this.currentPage.preventDefault) {
                _this.currentPage.pageOnCancel.emit(_this.currentPage);
            }
            else {
                _this.cancel();
            }
        });
        this.pagesResetSubscription = this.pageCollection.pagesReset.subscribe(function () {
            _this.setFirstPageCurrent();
        });
    }
    /**
     *
     * @ignore
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.ngOnDestroy = function () {
        this.previousButtonSubscription.unsubscribe();
        this.nextButtonSubscription.unsubscribe();
        this.dangerButtonSubscription.unsubscribe();
        this.finishButtonSubscription.unsubscribe();
        this.customButtonSubscription.unsubscribe();
        this.cancelButtonSubscription.unsubscribe();
        this.pagesResetSubscription.unsubscribe();
    };
    Object.defineProperty(WizardNavigationService.prototype, "currentPageChanged", {
        /**
         * An Observable that is predominantly used amongst the subcomponents and services
         * of the wizard. It is recommended that users listen to the WizardPage.onLoad
         * (clrWizardPageOnLoad) output instead of this Observable.
         *
         * @private
         *
         * @memberof WizardNavigationService
         */
        get: function () {
            // TODO: MAKE SURE EXTERNAL OUTPUTS SAY 'CHANGE' NOT 'CHANGED'
            // A BREAKING CHANGE SO AWAITING MINOR RELEASE
            return this._currentChanged.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPageTitle", {
        /**
         *
         * @ignore
         * @readonly
         * @type {TemplateRef<any>}
         * @memberof WizardNavigationService
         */
        get: function () {
            // when the querylist of pages is empty. this is the first place it fails...
            if (!this.currentPage) {
                return null;
            }
            return this.currentPage.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPageIsFirst", {
        /**
         * Returns a Boolean that tells you whether or not the current page is the first
         * page in the Wizard.
         *
         * This is helpful for determining whether a page is navigable.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this.pageCollection.firstPage === this.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPageIsNextToLast", {
        /**
         * Returns a Boolean that tells you whether or not the current page is the
         * next to last page in the Wizard.
         *
         * This is used to determine the animation state of ghost pages.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this.pageCollection.penultimatePage === this.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPageIsLast", {
        /**
         * Returns a Boolean that tells you whether or not the current page is the
         * last page in the Wizard.
         *
         * This is used to determine the animation state of ghost pages as well as
         * which buttons should display in the wizard footer.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this.pageCollection.lastPage === this.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPage", {
        /**
         * Returns the WizardPage object of the current page or null.
         *
         * @type {WizardPage}
         * @memberof WizardNavigationService
         */
        get: function () {
            if (!this._currentPage) {
                return null;
            }
            return this._currentPage;
        },
        /**
         * Accepts a WizardPage object, since that object to be the current/active
         * page in the wizard, and emits the WizardPage.onLoad (clrWizardPageOnLoad)
         * event for that page.
         *
         * Note that all of this work is bypassed if the WizardPage object is already
         * the current page.
         *
         * @memberof WizardNavigationService
         */
        set: function (page) {
            if (this._currentPage !== page && !this.wizardStopNavigation) {
                this._currentPage = page;
                page.onLoad.emit(page.id);
                this._currentChanged.next(page);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * (DEPRECATED) A legacy means of setting the current page in the wizard.
     * Deprecated in 0.9.4. Accepts a WizardPage object as a parameter and then
     * tries to set that page to be the current page in the wizard.
     *
     * @param {WizardPage} page
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.setCurrentPage = function (page) {
        this.currentPage = page;
    };
    Object.defineProperty(WizardNavigationService.prototype, "movedToNextPage", {
        /**
         * An observable used internally to alert the wizard that forward navigation
         * has occurred. It is recommended that you use the Wizard.onMoveNext
         * (clrWizardOnNext) output instead of this one.
         *
         * @readonly
         * @type {Observable<boolean>}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this._movedToNextPage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "wizardFinished", {
        /**
         * An observable used internally to alert the wizard that the nav service
         * has approved completion of the wizard.
         *
         * It is recommended that you use the Wizard.wizardFinished (clrWizardOnFinish)
         * output instead of this one.
         *
         * @readonly
         * @type {Observable<boolean>}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this._wizardFinished.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This is a public function that can be used to programmatically advance
     * the user to the next page.
     *
     * When invoked, this method will move the wizard to the next page after
     * successful validation. Note that this method goes through all checks
     * and event emissions as if Wizard.next(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.next(false).
     *
     * @returns {void}
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.next = function () {
        if (this.currentPageIsLast) {
            this.checkAndCommitCurrentPage("finish");
            return;
        }
        this.checkAndCommitCurrentPage("next");
        if (!this.wizardHasAltNext && !this.wizardStopNavigation) {
            this._movedToNextPage.next(true);
        }
    };
    /**
     * Bypasses checks and most event emissions to force a page to navigate forward.
     *
     * Comparable to calling Wizard.next() or Wizard.forceNext().
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.forceNext = function () {
        var currentPage = this.currentPage;
        var nextPage = this.pageCollection.getNextPage(currentPage);
        // catch errant null or undefineds that creep in
        if (!nextPage) {
            throw new Error("The wizard has no next page to go to.");
        }
        if (this.wizardStopNavigation) {
            return;
        }
        if (!currentPage.completed) {
            // this is a state that alt next flows can get themselves in...
            this.pageCollection.commitPage(currentPage);
        }
        this.currentPage = nextPage;
    };
    /**
     * Accepts a button/action type as a parameter. Encapsulates all logic for
     * event emissions, state of the current page, and wizard and page level overrides.
     *
     * Avoid calling this function directly unless you really know what you're doing.
     *
     * @param {string} buttonType
     * @returns {void}
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.checkAndCommitCurrentPage = function (buttonType) {
        var currentPage = this.currentPage;
        var iAmTheLastPage;
        var isNext;
        var isDanger;
        var isDangerNext;
        var isDangerFinish;
        var isFinish;
        if (!currentPage.readyToComplete || this.wizardStopNavigation) {
            return;
        }
        iAmTheLastPage = this.currentPageIsLast;
        isNext = buttonType === "next";
        isDanger = buttonType === "danger";
        isDangerNext = isDanger && !iAmTheLastPage;
        isDangerFinish = isDanger && iAmTheLastPage;
        isFinish = buttonType === "finish" || isDangerFinish;
        if (isFinish && !iAmTheLastPage) {
            return;
        }
        currentPage.primaryButtonClicked.emit(buttonType);
        if (isFinish) {
            currentPage.finishButtonClicked.emit(currentPage);
        }
        else if (isDanger) {
            currentPage.dangerButtonClicked.emit();
        }
        else if (isNext) {
            currentPage.nextButtonClicked.emit();
        }
        if (currentPage.stopNext || currentPage.preventDefault) {
            currentPage.onCommit.emit(currentPage.id);
            return;
        }
        // order is very important with these emitters!
        if (isFinish) {
            // mark page as complete
            if (!this.wizardHasAltNext) {
                this.pageCollection.commitPage(currentPage);
            }
            this._wizardFinished.next();
        }
        if (this.wizardHasAltNext) {
            this.pageCollection.commitPage(currentPage);
            if (isNext || isDangerNext) {
                this._movedToNextPage.next(true);
            }
            // jump out here, no matter what type we're looking at
            return;
        }
        if (isNext || isDangerNext) {
            this.forceNext();
        }
    };
    /**
     * This is a public function that can be used to programmatically conclude
     * the wizard.
     *
     * When invoked, this method will  initiate the work involved with finalizing
     * and finishing the wizard workflow. Note that this method goes through all
     * checks and event emissions as if Wizard.finish(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.finish(false).
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.finish = function () {
        this.checkAndCommitCurrentPage("finish");
    };
    Object.defineProperty(WizardNavigationService.prototype, "movedToPreviousPage", {
        /**
         * Notifies the wizard when backwards navigation has occurred via the
         * previous button.
         *
         * @readonly
         * @type {Observable<boolean>}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this._movedToPreviousPage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Programmatically moves the wizard to the page before the current page.
     *
     * In most instances, it makes more sense to call Wizard.previous()
     * which does the same thing.
     *
     * @returns {void}
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.previous = function () {
        var previousPage;
        if (this.currentPageIsFirst || this.wizardStopNavigation) {
            return;
        }
        previousPage = this.pageCollection.getPreviousPage(this.currentPage);
        if (!previousPage) {
            return;
        }
        this._movedToPreviousPage.next(true);
        if (this.forceForwardNavigation) {
            this.currentPage.completed = false;
        }
        this.currentPage = previousPage;
    };
    Object.defineProperty(WizardNavigationService.prototype, "notifyWizardCancel", {
        /**
         * Notifies the wizard that a user is trying to cancel it.
         *
         * @readonly
         * @type {Observable<any>}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this._cancelWizard.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Allows a hook into the cancel workflow of the wizard from the nav service. Note that
     * this route goes through all checks and event emissions as if a cancel button had
     * been clicked.
     *
     * In most cases, users looking for a hook into the cancel routine are actually looking
     * for a way to close the wizard from their host component because they have prevented
     * the default cancel action.
     *
     * In this instance, it is recommended that you use Wizard.close() to avoid any event
     * emission loop resulting from an event handler calling back into routine that will
     * again evoke the events it handles.
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.cancel = function () {
        this._cancelWizard.next();
    };
    /**
     * Performs all required checks to determine if a user can navigate to a page. Checking at each
     * point if a page is navigable -- completed where the page immediately after the last completed
     * page.
     *
     * Takes two parameters. The first one must be either the WizardPage object or the ID of the
     * WizardPage object that you want to make the current page.
     *
     * The second parameter is optional and is a Boolean flag for "lazy completion". What this means
     * is the Wizard will mark all pages between the current page and the page you want to navigate
     * to as completed. This is useful for informational wizards that do not require user action,
     * allowing an easy means for users to jump ahead.
     *
     * To avoid checks on navigation, use WizardPage.makeCurrent() instead.
     *
     * @param {*} pageToGoToOrId
     * @param {boolean} [lazyComplete=false]
     * @returns
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.goTo = function (pageToGoToOrId, lazyComplete) {
        if (lazyComplete === void 0) { lazyComplete = false; }
        var pageToGoTo;
        var currentPage;
        var myPages;
        var pagesToCheck;
        var okayToMove = true;
        var goingForward;
        var currentPageIndex;
        var goToPageIndex;
        myPages = this.pageCollection;
        pageToGoTo = (typeof pageToGoToOrId === "string") ? myPages.getPageById(pageToGoToOrId) : pageToGoToOrId;
        currentPage = this.currentPage;
        // no point in going to the current page. you're there already!
        // also hard block on any navigation when stopNavigation is true
        if (pageToGoTo === currentPage || this.wizardStopNavigation) {
            return;
        }
        currentPageIndex = myPages.getPageIndex(currentPage);
        goToPageIndex = myPages.getPageIndex(pageToGoTo);
        goingForward = (goToPageIndex > currentPageIndex);
        pagesToCheck = myPages.getPageRangeFromPages(this.currentPage, pageToGoTo);
        okayToMove = lazyComplete || this.canGoTo(pagesToCheck);
        if (!okayToMove) {
            return;
        }
        if (goingForward && lazyComplete) {
            pagesToCheck.forEach(function (page) {
                if (page !== pageToGoTo) {
                    page.completed = true;
                }
            });
        }
        else if (!goingForward && this.forceForwardNavigation) {
            pagesToCheck.forEach(function (page) {
                page.completed = false;
            });
        }
        this.currentPage = pageToGoTo;
    };
    /**
     * Accepts a range of WizardPage objects as a parameter. Performs the work of checking
     * those objects to determine if navigation can be accomplished.
     *
     * @param {WizardPage[]} pagesToCheck
     * @returns {boolean}
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.canGoTo = function (pagesToCheck) {
        var okayToMove = true;
        var myPages = this.pageCollection;
        // previous page can be important when moving because if it's completed it
        // allows us to move to the page even if it's incomplete...
        var previousPagePasses;
        if (!pagesToCheck || pagesToCheck.length < 1) {
            return false;
        }
        pagesToCheck.forEach(function (page) {
            var previousPage;
            if (!okayToMove) {
                return;
            }
            if (page.completed) {
                // default is true. just jump out instead of complicating it.
                return;
            }
            // so we know our page is not completed...
            previousPage = myPages.getPageIndex(page) > 0 ? myPages.getPreviousPage(page) : null;
            previousPagePasses = (previousPage === null) || (previousPage.completed === true);
            // we are false if not the current page AND previous page is not completed
            // (but must have a previous page)
            if (!page.current && !previousPagePasses) {
                okayToMove = false;
            }
            // falls through to true as default
        });
        return okayToMove;
    };
    /**
     * Looks through the collection of pages to find the first one that is incomplete
     * and makes that page the current/active page.
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.setLastEnabledPageCurrent = function () {
        var allPages = this.pageCollection.pagesAsArray;
        var lastCompletedPageIndex = null;
        allPages.forEach(function (page, index) {
            if (page.completed) {
                lastCompletedPageIndex = index;
            }
        });
        if (lastCompletedPageIndex === null) {
            // always is at least the first item...
            lastCompletedPageIndex = 0;
        }
        else if ((lastCompletedPageIndex + 1) < allPages.length) {
            lastCompletedPageIndex = lastCompletedPageIndex + 1;
        }
        this.currentPage = allPages[lastCompletedPageIndex];
    };
    /**
     * Finds the first page in the collection of pages and makes that page the
     * current/active page.
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.setFirstPageCurrent = function () {
        this.currentPage = this.pageCollection.pagesAsArray[0];
    };
    Object.defineProperty(WizardNavigationService.prototype, "wizardGhostPageState", {
        /**
         *
         * @ignore
         * @type {string}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this._wizardGhostPageState;
        },
        /**
         *
         * @ignore
         *
         * @memberof WizardNavigationService
         */
        set: function (value) {
            if (this.hideWizardGhostPages) {
                this._wizardGhostPageState = __WEBPACK_IMPORTED_MODULE_2__modal_utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NO_PAGES;
            }
            else {
                this._wizardGhostPageState = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "hideWizardGhostPages", {
        /**
         *
         * @ignore
         * @type {boolean}
         * @memberof WizardNavigationService
         */
        get: function () {
            return this._hideWizardGhostPages;
        },
        /**
         *
         * @ignore
         *
         * @memberof WizardNavigationService
         */
        set: function (value) {
            this._hideWizardGhostPages = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the stepnav on the left side of the wizard when pages are dynamically
     * added or removed from the collection of pages.
     *
     * @memberof WizardNavigationService
     */
    WizardNavigationService.prototype.updateNavigation = function () {
        var toSetCurrent;
        var currentPageRemoved;
        this.pageCollection.updateCompletedStates();
        currentPageRemoved = this.pageCollection.pagesAsArray.indexOf(this.currentPage) < 0;
        if (currentPageRemoved) {
            toSetCurrent = this.pageCollection.findFirstIncompletePage();
            this.currentPage = toSetCurrent;
        }
    };
    return WizardNavigationService;
}());
WizardNavigationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__page_collection__["a" /* PageCollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__page_collection__["a" /* PageCollectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__button_hub__["a" /* ButtonHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__button_hub__["a" /* ButtonHubService */]) === "function" && _b || Object])
], WizardNavigationService);

var _a, _b;
//# sourceMappingURL=wizard-navigation.js.map

/***/ }),
/* 826 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_signpost_signpost__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hideable_column_service__ = __webpack_require__(812);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridCell; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridCell = (function () {
    function DatagridCell(hideableColumnService) {
        this.hideableColumnService = hideableColumnService;
    }
    Object.defineProperty(DatagridCell.prototype, "hidden", {
        /**
         * @property hidden
         *
         * @description
         * Property used to apply a css class to this cell that hides it when hidden = true.
         *
         * @type {boolean}
         */
        get: function () {
            var column = this.hideableColumnService.getColumnById(this.id);
            return (column) ? column.hidden : false;
        },
        enumerable: true,
        configurable: true
    });
    return DatagridCell;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__popover_signpost_signpost__["a" /* Signpost */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _a || Object)
], DatagridCell.prototype, "signpost", void 0);
DatagridCell = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-cell",
        template: "\n        <ng-content></ng-content>\n    ",
        host: {
            "[class.datagrid-cell]": "true",
            "[class.datagrid-cell--hidden]": "hidden",
            "[class.datagrid-signpost-trigger]": "signpost.length > 0"
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_hideable_column_service__["a" /* HideableColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_hideable_column_service__["a" /* HideableColumnService */]) === "function" && _b || Object])
], DatagridCell);

var _a, _b;
//# sourceMappingURL=datagrid-cell.js.map

/***/ }),
/* 827 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__built_in_comparators_datagrid_property_comparator__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__built_in_filters_datagrid_property_string_filter__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__built_in_filters_datagrid_string_filter_impl__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_custom_filter__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_drag_dispatcher__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_filters__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_sort__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_datagrid_filter_registrar__ = __webpack_require__(851);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridColumn; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */










var nbCount = 0;
var DatagridColumn = (function (_super) {
    __extends(DatagridColumn, _super);
    function DatagridColumn(_sort, filters, _dragDispatcher) {
        var _this = _super.call(this, filters) || this;
        _this._sort = _sort;
        _this._dragDispatcher = _dragDispatcher;
        // deprecated: to be removed - START
        /**
         * Indicates if the column is currently sorted
         *
         * @deprecated This will be removed soon, in favor of the sortOrder mechanism
         */
        _this._sorted = false;
        /**
         * @deprecated This will be removed soon, in favor of the sortOrder mechanism
         */
        _this.sortedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        // deprecated: to be removed - END
        /**
         * Indicates how the column is currently sorted
         */
        _this._sortOrder = __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Unsorted;
        _this.sortOrderChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * A custom filter for this column that can be provided in the projected content
         */
        _this.customFilter = false;
        _this.filterValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this._sortSubscription = _sort.change.subscribe(function (sort) {
            // We're only listening to make sure we emit an event when the column goes from sorted to unsorted
            if (_this.sortOrder !== __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Unsorted && sort.comparator !== _this._sortBy) {
                _this._sortOrder = __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Unsorted;
                _this.sortOrderChange.emit(_this._sortOrder);
            }
            // deprecated: to be removed - START
            if (_this.sorted && sort.comparator !== _this._sortBy) {
                _this._sorted = false;
                _this.sortedChange.emit(false);
            }
            // deprecated: to be removed - END
        });
        _this.columnId = "dg-col-" + nbCount.toString(); // Approximate a GUID
        nbCount++;
        return _this;
        // put index here
    }
    Object.defineProperty(DatagridColumn.prototype, "hidden", {
        /**
         * @property hidden
         *
         * @description
         * A property that allows the column to be hidden / shown with css
         * Note the default allows the DatagridColumn to have an *ngIf on it. (EHCAIWC - will occur if its not initialized)
         *
         * @default false
         *
         * @type boolean
         */
        get: function () {
            return !!this.hideable && this.hideable.hidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "handleElRef", {
        set: function (value) {
            this._dragDispatcher.handleRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "handleTrackerElRef", {
        set: function (value) {
            this._dragDispatcher.handleTrackerRef = value;
        },
        enumerable: true,
        configurable: true
    });
    DatagridColumn.prototype.ngOnDestroy = function () {
        this._sortSubscription.unsubscribe();
    };
    Object.defineProperty(DatagridColumn.prototype, "field", {
        get: function () {
            return this._field;
        },
        set: function (field) {
            if (typeof field === "string") {
                this._field = field;
                if (!this.customFilter) {
                    this.setFilter(new __WEBPACK_IMPORTED_MODULE_3__built_in_filters_datagrid_string_filter_impl__["a" /* DatagridStringFilterImpl */](new __WEBPACK_IMPORTED_MODULE_2__built_in_filters_datagrid_property_string_filter__["a" /* DatagridPropertyStringFilter */](field)));
                }
                if (!this._sortBy) {
                    this._sortBy = new __WEBPACK_IMPORTED_MODULE_1__built_in_comparators_datagrid_property_comparator__["a" /* DatagridPropertyComparator */](field);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "sortBy", {
        get: function () {
            return this._sortBy;
        },
        set: function (comparator) {
            if (typeof comparator === "string") {
                this._sortBy = new __WEBPACK_IMPORTED_MODULE_1__built_in_comparators_datagrid_property_comparator__["a" /* DatagridPropertyComparator */](comparator);
            }
            else {
                if (comparator) {
                    this._sortBy = comparator;
                }
                else {
                    if (this._field) {
                        this._sortBy = new __WEBPACK_IMPORTED_MODULE_1__built_in_comparators_datagrid_property_comparator__["a" /* DatagridPropertyComparator */](this._field);
                    }
                    else {
                        delete this._sortBy;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "sortable", {
        /**
         * Indicates if the column is sortable
         */
        get: function () {
            return !!this._sortBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "sorted", {
        get: function () {
            return this._sorted;
        },
        /**
         * @deprecated This will be removed soon, in favor of the sortOrder mechanism
         */
        set: function (value) {
            if (!value && this.sorted) {
                this._sorted = false;
                this._sort.clear();
            }
            else if (value && !this.sorted) {
                this.sort();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (value) {
            if (typeof value === "undefined") {
                return;
            }
            // only if the incoming order is different from the current one
            if (this._sortOrder === value) {
                return;
            }
            switch (value) {
                // the Unsorted case happens when the current state is either Asc or Desc
                default:
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Unsorted:
                    this._sort.clear();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Asc:
                    this.sort(false);
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Desc:
                    this.sort(true);
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sorts the datagrid based on this column
     */
    DatagridColumn.prototype.sort = function (reverse) {
        if (!this.sortable) {
            return;
        }
        this._sort.toggle(this._sortBy, reverse);
        // setting the private variable to not retrigger the setter logic
        this._sortOrder = this._sort.reverse ? __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Desc : __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Asc;
        this.sortOrderChange.emit(this._sortOrder);
        // deprecated: to be removed - START
        this._sorted = true;
        this.sortedChange.emit(true);
        // deprecated: to be removed - END
    };
    Object.defineProperty(DatagridColumn.prototype, "asc", {
        /**
         * Indicates if the column is currently sorted in ascending order
         */
        get: function () {
            // deprecated: if condition to be removed - START
            if (typeof this.sortOrder === "undefined") {
                return this.sorted && !this._sort.reverse;
            }
            else {
                return this.sortOrder === __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Asc;
            }
            // deprecated: if condition to be removed - END
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "desc", {
        /**
         * Indicates if the column is currently sorted in descending order
         */
        get: function () {
            // deprecated: if condition to be removed - START
            if (typeof this.sortOrder === "undefined") {
                return this.sorted && this._sort.reverse;
            }
            else {
                return this.sortOrder === __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */].Desc;
            }
            // deprecated: if condition to be removed - END
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "projectedFilter", {
        set: function (custom) {
            if (custom) {
                this.deleteFilter();
                this.customFilter = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridColumn.prototype, "filterValue", {
        get: function () {
            return this.filter.value;
        },
        set: function (newValue) {
            if (!this.filter) {
                return;
            }
            if (!newValue) {
                newValue = "";
            }
            if (newValue !== this.filter.value) {
                this.filter.value = newValue;
                this.filterValueChange.emit(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    return DatagridColumn;
}(__WEBPACK_IMPORTED_MODULE_9__utils_datagrid_filter_registrar__["a" /* DatagridFilterRegistrar */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("columnHandle"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object])
], DatagridColumn.prototype, "handleElRef", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("columnHandleTracker"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _c || Object),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _d || Object])
], DatagridColumn.prototype, "handleTrackerElRef", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgField"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DatagridColumn.prototype, "field", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgSortBy"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatagridColumn.prototype, "sortBy", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgSorted"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DatagridColumn.prototype, "sorted", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgSortedChange"),
    __metadata("design:type", Object)
], DatagridColumn.prototype, "sortedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgSortOrder"),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */]) === "function" && _e || Object),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__interfaces_sort_order__["a" /* SortOrder */]) === "function" && _f || Object])
], DatagridColumn.prototype, "sortOrder", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgSortOrderChange"),
    __metadata("design:type", Object)
], DatagridColumn.prototype, "sortOrderChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostBinding */])("class.asc"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], DatagridColumn.prototype, "asc", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostBinding */])("class.desc"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], DatagridColumn.prototype, "desc", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_5__providers_custom_filter__["a" /* CustomFilter */]),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatagridColumn.prototype, "projectedFilter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrFilterValue"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DatagridColumn.prototype, "filterValue", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrFilterValueChange"),
    __metadata("design:type", Object)
], DatagridColumn.prototype, "filterValueChange", void 0);
DatagridColumn = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-column",
        template: "\n        <div class=\"datagrid-column-flex\">\n            <!-- I'm really not happy with that select since it's not very scalable -->\n            <ng-content select=\"clr-dg-filter, clr-dg-string-filter\"></ng-content>\n\n            <clr-dg-string-filter\n                    *ngIf=\"field && !customFilter\"\n                    [clrDgStringFilter]=\"registered\"\n                    [(clrFilterValue)]=\"filterValue\"></clr-dg-string-filter>\n\n            <ng-template #columnTitle><ng-content></ng-content></ng-template>\n\n            <button class=\"datagrid-column-title\" *ngIf=\"sortable\" (click)=\"sort()\" type=\"button\">\n               <ng-container *ngTemplateOutlet=\"columnTitle\"></ng-container>\n            </button>\n\n            <span class=\"datagrid-column-title\" *ngIf=\"!sortable\">\n               <ng-container *ngTemplateOutlet=\"columnTitle\"></ng-container>\n            </span>\n\n            <div class=\"datagrid-column-separator\">\n                <button #columnHandle class=\"datagrid-column-handle\" tabindex=\"-1\" type=\"button\"></button>\n                <div #columnHandleTracker class=\"datagrid-column-handle-tracker\"></div>\n            </div>\n        </div>\n    ",
        host: { "[class.datagrid-column]": "true", "[class.datagrid-column--hidden]": "hidden" }
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__providers_sort__["a" /* Sort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_sort__["a" /* Sort */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__providers_filters__["b" /* FiltersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_filters__["b" /* FiltersProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__providers_drag_dispatcher__["a" /* DragDispatcher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_drag_dispatcher__["a" /* DragDispatcher */]) === "function" && _j || Object])
], DatagridColumn);

var _a, _b, _c, _d, _k, _l, _e, _f, _g, _h, _j;
//# sourceMappingURL=datagrid-column.js.map

/***/ }),
/* 828 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableRowsCount; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var ExpandableRowsCount = (function () {
    function ExpandableRowsCount() {
        this.expandableCount = 0;
    }
    ExpandableRowsCount.prototype.register = function () {
        this.expandableCount++;
    };
    ExpandableRowsCount.prototype.unregister = function () {
        this.expandableCount--;
    };
    Object.defineProperty(ExpandableRowsCount.prototype, "hasExpandableRow", {
        /**
         * false means no rows with action
         */
        get: function () {
            return this.expandableCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    return ExpandableRowsCount;
}());
ExpandableRowsCount = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ExpandableRowsCount);

//# sourceMappingURL=global-expandable-rows.js.map

/***/ }),
/* 829 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items__ = __webpack_require__(816);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Selection; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */




var nbSelection = 0;
var SelectionType;
(function (SelectionType) {
    SelectionType[SelectionType["None"] = 0] = "None";
    SelectionType[SelectionType["Single"] = 1] = "Single";
    SelectionType[SelectionType["Multi"] = 2] = "Multi";
})(SelectionType || (SelectionType = {}));
var Selection = (function () {
    function Selection(_items, _filters) {
        var _this = this;
        this._items = _items;
        this._filters = _filters;
        this._selectionType = SelectionType.None;
        /**
         * Ignore items changes in the same change detection cycle.
         */
        this.debounce = false;
        /**
         * The Observable that lets other classes subscribe to selection changes
         */
        this._change = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.id = "clr-dg-selection" + (nbSelection++);
        this._filtersSub = this._filters.change.subscribe(function () {
            if (!_this._selectable) {
                return;
            }
            _this.clearSelection();
        });
        this._itemsSub = this._items.allChanges.subscribe(function (updatedItems) {
            if (!_this._selectable) {
                return;
            }
            var leftOver;
            if (_this._items.trackBy) {
                var trackBy_1 = _this._items.trackBy;
                var updatedTracked_1 = updatedItems.map(function (item, index) { return trackBy_1(index, item); });
                leftOver = _this.current.filter(function (selected, index) {
                    return updatedTracked_1.indexOf(trackBy_1(index, selected)) > -1;
                });
            }
            else {
                leftOver = _this.current.filter(function (selected) { return updatedItems.indexOf(selected) > -1; });
            }
            if (_this.current.length !== leftOver.length) {
                // TODO: Discussed this with Eudes and this is fine for now.
                // But we need to figure out a different pattern for the
                // child triggering the parent change detection problem.
                // Using setTimeout for now to fix this.
                setTimeout(function () {
                    _this.current = leftOver;
                }, 0);
            }
        });
    }
    Selection.prototype.clearSelection = function () {
        this.current.length = 0;
        this.emitChange();
    };
    Object.defineProperty(Selection.prototype, "selectionType", {
        get: function () {
            return this._selectionType;
        },
        set: function (value) {
            if (value === this.selectionType) {
                return;
            }
            this._selectionType = value;
            if (value === SelectionType.None) {
                delete this.current;
            }
            else {
                this.current = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "_selectable", {
        get: function () {
            return (this._selectionType === SelectionType.Multi) || (this._selectionType === SelectionType.Single);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Cleans up our subscriptions to other providers
     */
    Selection.prototype.destroy = function () {
        this._itemsSub.unsubscribe();
        this._filtersSub.unsubscribe();
    };
    Object.defineProperty(Selection.prototype, "currentSingle", {
        get: function () {
            return this._currentSingle;
        },
        set: function (value) {
            var _this = this;
            if (value === this._currentSingle) {
                return;
            }
            this._currentSingle = value;
            this.emitChange();
            // Ignore items changes in the same change detection cycle.
            this.debounce = true;
            setTimeout(function () { return _this.debounce = false; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (value) {
            var _this = this;
            this._current = value;
            this.emitChange();
            // Ignore items changes in the same change detection cycle.
            this.debounce = true;
            setTimeout(function () { return _this.debounce = false; });
        },
        enumerable: true,
        configurable: true
    });
    Selection.prototype.emitChange = function () {
        if (this._selectionType === SelectionType.Single) {
            this._change.next(this.currentSingle);
        }
        else if (this._selectionType === SelectionType.Multi) {
            this._change.next(this.current);
        }
    };
    Object.defineProperty(Selection.prototype, "change", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks if an item is currently selected
     */
    Selection.prototype.isSelected = function (item) {
        if (this._selectionType === SelectionType.Single) {
            return this.currentSingle === item;
        }
        else if (this._selectionType === SelectionType.Multi) {
            return this.current.indexOf(item) >= 0;
        }
        return false;
    };
    /**
     * Selects or deselects an item
     */
    Selection.prototype.setSelected = function (item, selected) {
        switch (this._selectionType) {
            case SelectionType.None:
                break;
            case SelectionType.Single:
                // in single selection, set currentSingle method should be used
                break;
            case SelectionType.Multi:
                var index = this.current.indexOf(item);
                if (index >= 0 && !selected) {
                    this.current.splice(index, 1);
                    this.emitChange();
                }
                else if (index < 0 && selected) {
                    this.current.push(item);
                    this.emitChange();
                }
                break;
            default:
                break;
        }
    };
    /**
     * Checks if all currently displayed items are selected
     */
    Selection.prototype.isAllSelected = function () {
        var _this = this;
        if ((this._selectionType !== SelectionType.Multi) || !this._items.displayed) {
            return false;
        }
        var displayedItems = this._items.displayed;
        var nbDisplayed = this._items.displayed.length;
        if (nbDisplayed < 1) {
            return false;
        }
        var temp = displayedItems.filter(function (item) { return _this.current.indexOf(item) > -1; });
        return temp.length === displayedItems.length;
    };
    /**
     * Selects or deselects all currently displayed items
     */
    Selection.prototype.toggleAll = function () {
        var _this = this;
        if (this._selectionType === SelectionType.None || this._selectionType === SelectionType.Single) {
            return;
        }
        /*
         * If everything is already selected, we clear.
         * If at least one row isn't selected, we select everything.
         */
        if (this.isAllSelected()) {
            this.current.length = 0;
        }
        else {
            this._items.displayed.forEach(function (item) {
                if (_this.current.indexOf(item) < 0) {
                    _this.current.push(item);
                }
            });
        }
        this.emitChange();
    };
    return Selection;
}());
Selection = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__items__["a" /* Items */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__items__["a" /* Items */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__filters__["b" /* FiltersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__filters__["b" /* FiltersProvider */]) === "function" && _b || Object])
], Selection);

var _a, _b;
//# sourceMappingURL=selection.js.map

/***/ }),
/* 830 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_index__ = __webpack_require__(910);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrFormsModule; });
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



var ClrFormsModule = (function () {
    function ClrFormsModule() {
    }
    return ClrFormsModule;
}());
ClrFormsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__checkbox_index__["a" /* CHECKBOX_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__checkbox_index__["a" /* CHECKBOX_DIRECTIVES */]] })
], ClrFormsModule);

//# sourceMappingURL=forms.module.js.map

/***/ }),
/* 831 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrResponsiveNavCodes; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var ClrResponsiveNavCodes = (function () {
    function ClrResponsiveNavCodes() {
    }
    return ClrResponsiveNavCodes;
}());

ClrResponsiveNavCodes.NAV_LEVEL_1 = 1;
ClrResponsiveNavCodes.NAV_LEVEL_2 = 2;
ClrResponsiveNavCodes.NAV_CLOSE_ALL = "NAV_CLOSE_ALL";
ClrResponsiveNavCodes.NAV_OPEN = "NAV_OPEN";
ClrResponsiveNavCodes.NAV_CLOSE = "NAV_CLOSE";
ClrResponsiveNavCodes.NAV_TOGGLE = "NAV_TOGGLE";
ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU = "open-hamburger-menu";
ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU = "open-overflow-menu";
ClrResponsiveNavCodes.NAV_CLASS_TRIGGER_1 = "header-hamburger-trigger";
ClrResponsiveNavCodes.NAV_CLASS_TRIGGER_2 = "header-overflow-trigger";
ClrResponsiveNavCodes.NAV_CLASS_LEVEL_1 = "clr-nav-level-1";
ClrResponsiveNavCodes.NAV_CLASS_LEVEL_2 = "clr-nav-level-2";
//# sourceMappingURL=clrResponsiveNavCodes.js.map

/***/ }),
/* 832 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_template_ref_template_ref_container__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aria_service__ = __webpack_require__(853);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabLinkDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */




var nbTabLinkComponents = 0;
var TabLinkDirective = (function () {
    function TabLinkDirective(ifActiveService, id, ariaService, el, cfr, viewContainerRef) {
        this.ifActiveService = ifActiveService;
        this.id = id;
        this.ariaService = ariaService;
        this.el = el;
        this.cfr = cfr;
        this.viewContainerRef = viewContainerRef;
        if (!this.tabLinkId) {
            this.tabLinkId = "clr-tab-link-" + (nbTabLinkComponents++);
        }
        // Tab links can be rendered in one of two places: in the main area or inside the overflow dropdown menu.
        // Here, we create a container so that its template can be used to create embeddedView on the fly.
        // See TabsService's renderView() method and how it's used in Tabs class for an example.
        var factory = this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__utils_template_ref_template_ref_container__["a" /* TemplateRefContainer */]);
        this.templateRefContainer =
            this.viewContainerRef.createComponent(factory, 1, undefined, [[this.el.nativeElement]]).instance;
        // if there's no active tab, set the one associated with this link as active
        // it will be overridden if a tab created after this one sets it explicitly
        // TODO: when we have another component using IfActiveService, the same logic might be
        // needed. If this is a recurring pattern, let's consider moving this logic to IfActiveService.
        if (!this.ifActiveService.current) {
            this.ifActiveService.current = id;
        }
    }
    Object.defineProperty(TabLinkDirective.prototype, "ariaControls", {
        get: function () {
            return this.ariaService.ariaControls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabLinkDirective.prototype, "tabLinkId", {
        get: function () {
            return this.ariaService.ariaLabelledBy;
        },
        set: function (id) {
            this.ariaService.ariaLabelledBy = id;
        },
        enumerable: true,
        configurable: true
    });
    TabLinkDirective.prototype.activate = function () {
        this.ifActiveService.current = this.id;
    };
    Object.defineProperty(TabLinkDirective.prototype, "active", {
        get: function () {
            return this.ifActiveService.current === this.id;
        },
        enumerable: true,
        configurable: true
    });
    return TabLinkDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrTabLinkInOverflow"),
    __metadata("design:type", Boolean)
], TabLinkDirective.prototype, "inOverflow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("id"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TabLinkDirective.prototype, "tabLinkId", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TabLinkDirective.prototype, "activate", null);
TabLinkDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: "[clrTabLink]",
        host: {
            "[id]": "tabLinkId",
            "[attr.aria-selected]": "active",
            "[attr.aria-controls]": "ariaControls",
            "role": "presentation",
            "[class.btn]": "true",
            "[class.btn-link]": "!inOverflow",
            "[class.nav-link]": "!inOverflow",
            "[class.nav-item]": "!inOverflow",
            "[class.active]": "active"
        }
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["a" /* IF_ACTIVE_ID */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */]) === "function" && _a || Object, Number, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__aria_service__["a" /* AriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__aria_service__["a" /* AriaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ComponentFactoryResolver */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _e || Object])
], TabLinkDirective);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tab-link.directive.js.map

/***/ }),
/* 833 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractPopover; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



// Literally any annotation would work here, but writing our own @HoneyBadger annotation feels overkill.
var AbstractPopover = (function () {
    function AbstractPopover(injector, parentHost) {
        var _this = this;
        this.parentHost = parentHost;
        this.updateAnchor = false;
        this.popoverOptions = {};
        /*
         * Until https://github.com/angular/angular/issues/8785 is supported, we don't have any way to instantiate
         * a separate directive on the host. So let's do dirty but performant for now.
         */
        this.closeOnOutsideClick = false;
        this.el = injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]);
        this.ifOpenService = injector.get(__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */]);
        this.renderer = injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]);
        // Default anchor is the parent host
        this.anchorElem = parentHost.nativeElement;
        this.popoverInstance = new __WEBPACK_IMPORTED_MODULE_2__popover__["b" /* Popover */](this.el.nativeElement);
        this.subscription = this.ifOpenService.openChange.subscribe(function (change) {
            change ? _this.anchor() : _this.release();
        });
        if (this.ifOpenService.open) {
            this.anchor();
        }
    }
    AbstractPopover.prototype.anchor = function () {
        this.updateAnchor = true;
        // Ugh
        this.ignore = this.ifOpenService.originalEvent;
    };
    AbstractPopover.prototype.release = function () {
        this.detachOutsideClickListener();
        this.popoverInstance.release();
    };
    AbstractPopover.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.updateAnchor) {
            this.updateAnchor = false;
            this.popoverInstance.anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
                .subscribe(function () {
                // if a scroll event is detected, close the popover
                _this.ifOpenService.open = false;
            });
            this.attachOutsideClickListener();
        }
    };
    AbstractPopover.prototype.ngOnDestroy = function () {
        this.release();
        this.subscription.unsubscribe();
    };
    Object.defineProperty(AbstractPopover.prototype, "hidden", {
        /*
         * Fallback to hide when *clrIfOpen is not being used
         */
        get: function () {
            return this.ifOpenService.open ? "visible" : "hidden";
        },
        enumerable: true,
        configurable: true
    });
    AbstractPopover.prototype.attachOutsideClickListener = function () {
        var _this = this;
        if (this.closeOnOutsideClick) {
            this.hostListener = this.renderer.listen(this.el.nativeElement, "click", function (event) { return _this.ignore = event; });
            this.documentListener = this.renderer.listen("document", "click", function (event) {
                if (event === _this.ignore) {
                    delete _this.ignore;
                }
                else {
                    _this.ifOpenService.open = false;
                }
            });
        }
    };
    AbstractPopover.prototype.detachOutsideClickListener = function () {
        if (this.closeOnOutsideClick) {
            if (this.hostListener) {
                this.hostListener();
                delete this.hostListener;
            }
            if (this.documentListener) {
                this.documentListener();
                delete this.documentListener;
            }
        }
    };
    return AbstractPopover;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostBinding */])("style.visibility"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AbstractPopover.prototype, "hidden", null);
AbstractPopover = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object])
], AbstractPopover);

var _a, _b;
//# sourceMappingURL=abstract-popover.js.map

/***/ }),
/* 834 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_conditional_conditional_module__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_popover_module__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(939);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrDropdownModule; });
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






var ClrDropdownModule = (function () {
    function ClrDropdownModule() {
    }
    return ClrDropdownModule;
}());
ClrDropdownModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__common_popover_module__["a" /* ClrCommonPopoverModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__index__["a" /* DROPDOWN_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__index__["a" /* DROPDOWN_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_3__utils_conditional_conditional_module__["a" /* ClrConditionalModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */]]
    })
], ClrDropdownModule);

//# sourceMappingURL=dropdown.module.js.map

/***/ }),
/* 835 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dropdown_service__ = __webpack_require__(941);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dropdown; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var Dropdown = (function () {
    function Dropdown(parent, ifOpenService, dropdownService) {
        var _this = this;
        this.parent = parent;
        this.ifOpenService = ifOpenService;
        this.isMenuClosable = true;
        this._subscription = dropdownService.changes.subscribe(function (value) { return _this.ifOpenService.open = value; });
    }
    Dropdown.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return Dropdown;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrCloseMenuOnItemClick"),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "isMenuClosable", void 0);
Dropdown = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dropdown",
        template: "<ng-content></ng-content>",
        host: {
            "[class.dropdown]": "true",
            // FIXME: remove this as soon as we stop supporting this old <div class="dropdown-menu"> syntax
            "[class.open]": "ifOpenService.open"
        },
        providers: [__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */], __WEBPACK_IMPORTED_MODULE_2__providers_dropdown_service__["b" /* ROOT_DROPDOWN_PROVIDER */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Optional */])()),
    __metadata("design:paramtypes", [Dropdown, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_dropdown_service__["a" /* RootDropdownService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_dropdown_service__["a" /* RootDropdownService */]) === "function" && _b || Object])
], Dropdown);

var _a, _b;
//# sourceMappingURL=dropdown.js.map

/***/ }),
/* 836 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(1022);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrIfExpandModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var ClrIfExpandModule = (function () {
    function ClrIfExpandModule() {
    }
    return ClrIfExpandModule;
}());
ClrIfExpandModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* EXPAND_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* EXPAND_DIRECTIVES */]] })
], ClrIfExpandModule);

//# sourceMappingURL=if-expand.module.js.map

/***/ }),
/* 837 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(954);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrLoadingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var ClrLoadingModule = (function () {
    function ClrLoadingModule() {
    }
    return ClrLoadingModule;
}());
ClrLoadingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* LOADING_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* LOADING_DIRECTIVES */]] })
], ClrLoadingModule);

//# sourceMappingURL=loading.module.js.map

/***/ }),
/* 838 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonHubService; });
/*
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


var ButtonHubService = (function () {
    function ButtonHubService() {
        this._previousBtnClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._nextBtnClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._dangerBtnClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._cancelBtnClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._finishBtnClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._customBtnClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(ButtonHubService.prototype, "previousBtnClicked", {
        get: function () {
            return this._previousBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "nextBtnClicked", {
        get: function () {
            return this._nextBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "dangerBtnClicked", {
        get: function () {
            return this._dangerBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "cancelBtnClicked", {
        get: function () {
            return this._cancelBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "finishBtnClicked", {
        get: function () {
            return this._finishBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "customBtnClicked", {
        get: function () {
            return this._customBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ButtonHubService.prototype.buttonClicked = function (buttonType) {
        if ("previous" === buttonType) {
            this._previousBtnClicked.next();
        }
        else if ("next" === buttonType) {
            this._nextBtnClicked.next();
        }
        else if ("finish" === buttonType) {
            this._finishBtnClicked.next();
        }
        else if ("danger" === buttonType) {
            this._dangerBtnClicked.next();
        }
        else if ("cancel" === buttonType) {
            this._cancelBtnClicked.next();
        }
        else {
            this._customBtnClicked.next(buttonType);
        }
    };
    return ButtonHubService;
}());
ButtonHubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ButtonHubService);

//# sourceMappingURL=button-hub.js.map

/***/ }),
/* 839 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_page_buttons__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_page_header_actions__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_page_navtitle__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_page_title__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_button_hub__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_page_collection__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_wizard_navigation__ = __webpack_require__(825);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardPage; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var wizardPageIndex = 0;
/**
 * The WizardPage component is responsible for displaying the content of each step
 * in the wizard workflow.
 *
 * WizardPage component has hooks into the navigation service (WizardPage.navService),
 * page collection (WizardPage.pageCollection), and button service
 * (WizardPage.buttonService). These three providers are shared across the components
 * within each instance of a Wizard.
 *
 * @export
 * @class WizardPage
 * @implements {OnInit}
 */
var WizardPage = (function () {
    /**
     * Creates an instance of WizardPage.
     *
     * @param {WizardNavigationService} navService
     * @param {PageCollectionService} pageCollection
     * @param {ButtonHubService} buttonService
     *
     * @memberof WizardPage
     */
    function WizardPage(navService, pageCollection, buttonService) {
        this.navService = navService;
        this.pageCollection = pageCollection;
        this.buttonService = buttonService;
        /**
         * @private
         * @ignore
         * @memberof WizardPage
         */
        this._nextStepDisabled = false;
        /**
         * Emits when the value of WizardPage.nextStepDisabled changes.
         * Should emit the new value of nextStepDisabled.
         *
         * @type {EventEmitter <boolean>}
         * @memberof WizardPage
         */
        this.nextStepDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * @private
         * @ignore
         * @memberof WizardPage
         */
        this._previousStepDisabled = false;
        /**
         * Emits when the value of WizardPage.previousStepDisabled changes.
         * Should emit the new value of previousStepDisabled.
         *
         * @type {EventEmitter <boolean>}
         * @memberof WizardPage
         */
        this.previousStepDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * Overrides all actions from the page level, so you can use an alternate function for
         * validation or data-munging with a WizardPage.onCommit (clrWizardPageOnCommit output),
         * WizardPage.onCancel (clrWizardPageOnCancel output), or one
         * of the granular page-level button click event emitters.
         *
         * @type {boolean}
         * @memberof WizardPage
         */
        this.preventDefault = false;
        /**
         *
         * @ignore
         * @private
         *
         * @memberof WizardPage
         */
        this._stopCancel = false;
        /**
         *
         * @ignore
         * @type {EventEmitter <boolean>}
         * @memberof WizardPage
         */
        this.stopCancelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         *
         *
         * @private
         * @ignore
         * @memberof WizardPage
         */
        this._stopNext = false;
        /**
         * An event emitter carried over from a legacy version of WizardPage.
         * Fires an event on WizardPage whenever the next or finish buttons
         * are clicked and the page is the current page of the Wizard.
         *
         * Note that this does not automatically emit an event when a custom
         * button is used in place of a next or finish button.
         *
         * @type {EventEmitter <string>}
         * @memberof WizardPage
         */
        this.onCommit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * Emits an event when WizardPage becomes the current page of the
         * Wizard.
         *
         * @type {EventEmitter <string>}
         * @memberof WizardPage
         */
        this.onLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * Emits an event when the WizardPage invokes the cancel routine for the wizard.
         *
         * Can be used in conjunction with the WizardPage.stopCancel
         * (clrWizardPagePreventDefaultCancel) or WizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) inputs to implement custom cancel
         * functionality at the page level. This is useful if you would like to do
         * validation, save data, or warn users before cancelling the wizard.
         *
         * Note that this requires you to call Wizard.close() from the host component.
         * This constitues a full replacement of the cancel functionality.
         *
         * @type {EventEmitter <WizardPage>}
         * @memberof WizardPage
         */
        this.pageOnCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * Emits an event when the finish button is clicked and the WizardPage is
         * the wizard's current page.
         *
         * Can be used in conjunction with the WizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom finish
         * functionality at the page level. This is useful if you would like to do
         * validation, save data, or warn users before allowing them to complete
         * the wizard.
         *
         * Note that this requires you to call Wizard.finish() or Wizard.forceFinish()
         * from the host component. This combination creates a full replacement of
         * the finish functionality.
         *
         * @type {EventEmitter <WizardPage>}
         * @memberof WizardPage
         */
        this.finishButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * Emits an event when the previous button is clicked and the WizardPage is
         * the wizard's current page.
         *
         * Can be used in conjunction with the WizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom backwards
         * navigation at the page level. This is useful if you would like to do
         * validation, save data, or warn users before allowing them to go
         * backwards in the wizard.
         *
         * Note that this requires you to call Wizard.previous()
         * from the host component. This combination creates a full replacement of
         * the backwards navigation functionality.
         *
         * @type {EventEmitter <WizardPage>}
         * @memberof WizardPage
         */
        this.previousButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * Emits an event when the next button is clicked and the WizardPage is
         * the wizard's current page.
         *
         * Can be used in conjunction with the WizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom forwards
         * navigation at the page level. This is useful if you would like to do
         * validation, save data, or warn users before allowing them to go
         * to the next page in the wizard.
         *
         * Note that this requires you to call Wizard.forceNext() or Wizard.next()
         * from the host component. This combination creates a full replacement of
         * the forward navigation functionality.
         *
         * @type {EventEmitter <WizardPage>}
         * @memberof WizardPage
         */
        this.nextButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * Emits an event when a danger button is clicked and the WizardPage is
         * the wizard's current page. By default, a danger button will act as
         * either a "next" or "finish" button depending on if the WizardPage is the
         * last page or not.
         *
         * Can be used in conjunction with the WizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom forwards
         * or finish navigation at the page level when the danger button is clicked.
         * This is useful if you would like to do validation, save data, or warn
         * users before allowing them to go to the next page in the wizard or
         * finish the wizard.
         *
         * Note that this requires you to call Wizard.finish(), Wizard.forceFinish(),
         * Wizard.forceNext() or Wizard.next() from the host component. This
         * combination creates a full replacement of the forward navigation and
         * finish functionality.
         *
         * @type {EventEmitter <WizardPage>}
         * @memberof WizardPage
         */
        this.dangerButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * Emits an event when a next, finish, or danger button is clicked and the
         * WizardPage is the wizard's current page.
         *
         * Can be used in conjunction with the WizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom forwards
         * or finish navigation at the page level, regardless of the type of
         * primary button.
         *
         * This is useful if you would like to do validation, save data, or warn
         * users before allowing them to go to the next page in the wizard or
         * finish the wizard.
         *
         * Note that this requires you to call Wizard.finish(), Wizard.forceFinish(),
         * Wizard.forceNext() or Wizard.next() from the host component. This
         * combination creates a full replacement of the forward navigation and
         * finish functionality.
         *
         * @type {EventEmitter <WizardPage>}
         * @memberof WizardPage
         */
        this.primaryButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.customButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * An input value that is used internally to generate the WizardPage ID as
         * well as the step nav item ID.
         *
         * Typed as any because it should be able to accept numbers as well as
         * strings. Passing an index for wizard whose pages are created with an
         * ngFor loop is a common use case.
         *
         * @type {*}
         * @memberof WizardPage
         */
        this._id = (wizardPageIndex++).toString();
        /**
         *
         * @ignore
         * @private
         * @type {boolean}
         * @memberof WizardPage
         */
        this._complete = false;
    }
    Object.defineProperty(WizardPage.prototype, "nextStepDisabled", {
        /**
         * A getter that tells whether or not the wizard should be allowed
         * to move to the next page.
         *
         * Useful for in-page validation because it prevents forward navigation
         * and visibly disables the next button.
         *
         * Does not require that you re-implement navigation routines like you
         * would if you were using WizardPage.preventDefault or
         * Wizard.preventDefault.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            return this._nextStepDisabled;
        },
        /**
         * Sets whether the page should allow forward navigation.
         *
         * @memberof WizardPage
         */
        set: function (val) {
            var valBool = !!val;
            if (valBool !== this._nextStepDisabled) {
                this._nextStepDisabled = valBool;
                this.nextStepDisabledChange.emit(valBool);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "previousStepDisabled", {
        /**
         * A getter that tells whether or not the wizard should be allowed
         * to move to the previous page.
         *
         * Useful for in-page validation because it prevents backward navigation
         * and visibly disables the previous button.
         *
         * Does not require that you re-implement navigation routines like you
         * would if you were using WizardPage.preventDefault or
         * Wizard.preventDefault.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            return this._previousStepDisabled;
        },
        /**
         * Sets whether the page should allow backward navigation.
         *
         * @memberof WizardPage
         */
        set: function (val) {
            var valBool = !!val;
            if (valBool !== this._previousStepDisabled) {
                this._previousStepDisabled = valBool;
                this.previousStepDisabledChange.emit(valBool);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "stopCancel", {
        /**
         * A getter that retrieves whether the page is preventing the cancel action.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            return this._stopCancel;
        },
        /**
         * Overrides the cancel action from the page level. Allows you to use an
         * alternate function for validation or data-munging before cancelling the
         * wizard when combined with the WizardPage.onCancel
         * (the clrWizardPageOnCancel output).
         *
         * Requires that you manually close the wizard from your host component,
         * usually with a call to Wizard.forceNext() or wizard.next();
         *
         * @memberof WizardPage
         */
        set: function (val) {
            var valBool = !!val;
            if (valBool !== this._stopCancel) {
                this._stopCancel = valBool;
                this.stopCancelChange.emit(valBool);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "stopNext", {
        /**
         * A getter that tells you whether the page is preventing the next action.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            return this._stopNext;
        },
        /**
         * Overrides forward navigation from the page level. Allows you to use an
         * alternate function for validation or data-munging before moving the
         * wizard to the next pagewhen combined with the WizardPage.onCommit
         * (clrWizardPageOnCommit) or WizardPage.nextButtonClicked
         * (clrWizardPageNext) outputs.
         *
         * Requires that you manually tell the wizard to navigate forward from
         * the hostComponent, usually with a call to Wizard.forceNext() or
         * wizard.next();
         *
         * @memberof WizardPage
         */
        set: function (val) {
            var valBool = !!val;
            if (valBool !== this._stopNext) {
                this._stopNext = valBool;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "id", {
        /**
         * A read-only getter that generates an ID string for the wizard page from
         * either the value passed to the WizardPage "id" input or a wizard page
         * counter shared across all wizard pages in the application.
         *
         * Note that the value passed into the ID input Will be prefixed with
         * "clr-wizard-page-".
         *
         * @readonly
         *
         * @memberof WizardPage
         */
        get: function () {
            // covers things like null, undefined, false, and empty string
            // while allowing zero to pass
            var idIsNonZeroFalsy = (!this._id && this._id !== 0);
            // in addition to non-zero falsy we also want to make sure _id is not a negative
            // number.
            if (idIsNonZeroFalsy || this._id < 0) {
                // guard here in the event that input becomes undefined or null by accident
                this._id = (wizardPageIndex++).toString();
            }
            return "clr-wizard-page-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "readyToComplete", {
        /**
         * A read-only getter that serves as a convenience for those who would rather
         * not think in the terms of !WizardPage.nextStepDisabled. For some use cases,
         * WizardPage.readyToComplete is more logical and declarative.
         *
         * @readonly
         *
         * @memberof WizardPage
         */
        get: function () {
            return !this.nextStepDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "completed", {
        /**
         * A page is marked as completed if it is both readyToComplete and completed,
         * as in the next or finish action has been executed while this page was current.
         *
         * Note there is and open question about how to handle pages that are marked
         * complete but who are no longer readyToComplete. This might indicate an error
         * state for the WizardPage. Currently, the wizard does not acknowledge this state
         * and only returns that the page is incomplete.
         *
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            return this._complete && this.readyToComplete;
            // FOR V2: UNWIND COMPLETED, READYTOCOMPLETE, AND ERRORS
            // SUCH THAT ERRORS IS ITS OWN INPUT. IF A STEP IS
            // INCOMPLETE AND ERRORED, ERRORED WILL NOT SHOW.
            // FIRST QUESTION: AM I GREY OR COLORED?
            // SECOND QUESTION: AM I GREEN OR RED?
        },
        /**
         * A WizardPage can be manually set to completed using this boolean setter.
         * It is recommended that users rely on the convenience functions in the wizard
         * and navigation service instead of manually setting pages’ completion state.
         *
         * @memberof WizardPage
         */
        set: function (value) {
            this._complete = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "current", {
        /**
         * Checks with the navigation service to see if it is the current page.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            return this.navService.currentPage === this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "disabled", {
        get: function () {
            return !this.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "enabled", {
        /**
         * A read-only getter that returns whether or not the page is navigable
         * in the wizard. A wizard page can be navigated to if it is completed
         * or the page before it is completed.
         *
         * This getter handles the logic for enabling or disabling the links in
         * the step nav on the left Side of the wizard.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            return this.current || this.completed || this.previousCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "previousCompleted", {
        /**
         * A read-only getter that returns whether or not the page before this
         * WizardPage is completed. This is useful for determining whether or not
         * a page is navigable if it is not current or already completed.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            var previousPage = this.pageCollection.getPreviousPage(this);
            if (!previousPage) {
                return true;
            }
            return previousPage.completed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "title", {
        /**
         *
         * @ignore
         * @readonly
         * @type {TemplateRef < any >}
         * @memberof WizardPage
         */
        get: function () {
            return this.pageTitle.pageTitleTemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "navTitle", {
        /**
         *
         * @ignore
         * @readonly
         * @type {TemplateRef < any >}
         * @memberof WizardPage
         */
        get: function () {
            if (this.pageNavTitle) {
                return this.pageNavTitle.pageNavTitleTemplateRef;
            }
            return this.pageTitle.pageTitleTemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "headerActions", {
        /**
         *
         * @ignore
         * @readonly
         * @type {TemplateRef < any >}
         * @memberof WizardPage
         */
        get: function () {
            if (!this._headerActions) {
                return;
            }
            return this._headerActions.pageHeaderActionsTemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "hasHeaderActions", {
        /**
         *
         * @ignore
         * @readonly
         * @type {TemplateRef < any >}
         * @memberof WizardPage
         */
        get: function () {
            return !!this._headerActions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "buttons", {
        /**
         *
         * @ignore
         * @readonly
         * @type {TemplateRef < any >}
         * @memberof WizardPage
         */
        get: function () {
            if (!this._buttons) {
                return;
            }
            return this._buttons.pageButtonsTemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardPage.prototype, "hasButtons", {
        /**
         * A read-only getter that returns a boolean that says whether or
         * not the WizardPage includes buttons. Used to determine if the
         * Wizard should override the default button set defined as
         * its direct children.
         *
         * @readonly
         * @type {boolean}
         * @memberof WizardPage
         */
        get: function () {
            return !!this._buttons;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uses the nav service to make the WizardPage the current page in the
     * wizard. Bypasses all checks but still emits the WizardPage.onLoad
     * (clrWizardPageOnLoad) output.
     *
     * In most cases, it is better to use the default navigation functions
     * in Wizard.
     *
     * @memberof WizardPage
     */
    WizardPage.prototype.makeCurrent = function () {
        this.navService.currentPage = this;
    };
    /**
     * Links the nav service and establishes the current page if one is not defined.
     *
     * @memberof WizardPage
     */
    WizardPage.prototype.ngOnInit = function () {
        var navService = this.navService;
        if (!navService.currentPage && !navService.navServiceLoaded) {
            this.makeCurrent();
            this.navService.navServiceLoaded = true;
        }
    };
    Object.defineProperty(WizardPage.prototype, "stepItemId", {
        /**
         * A read-only getter that returns the id used by the step nav item associated with the page.
         *
         * WizardPage needs this ID string for aria information.
         *
         * @readonly
         * @type {string}
         * @memberof WizardPage
         */
        get: function () {
            return this.pageCollection.getStepItemIdForPage(this);
        },
        enumerable: true,
        configurable: true
    });
    return WizardPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_4__directives_page_title__["a" /* WizardPageTitleDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__directives_page_title__["a" /* WizardPageTitleDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__directives_page_title__["a" /* WizardPageTitleDirective */]) === "function" && _a || Object)
], WizardPage.prototype, "pageTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_3__directives_page_navtitle__["a" /* WizardPageNavTitleDirective */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__directives_page_navtitle__["a" /* WizardPageNavTitleDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__directives_page_navtitle__["a" /* WizardPageNavTitleDirective */]) === "function" && _b || Object)
], WizardPage.prototype, "pageNavTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_1__directives_page_buttons__["a" /* WizardPageButtonsDirective */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__directives_page_buttons__["a" /* WizardPageButtonsDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__directives_page_buttons__["a" /* WizardPageButtonsDirective */]) === "function" && _c || Object)
], WizardPage.prototype, "_buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__directives_page_header_actions__["a" /* WizardPageHeaderActionsDirective */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__directives_page_header_actions__["a" /* WizardPageHeaderActionsDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__directives_page_header_actions__["a" /* WizardPageHeaderActionsDirective */]) === "function" && _d || Object)
], WizardPage.prototype, "_headerActions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPageNextDisabled"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardPage.prototype, "nextStepDisabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPageNextDisabledChange"),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _e || Object)
], WizardPage.prototype, "nextStepDisabledChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPagePreviousDisabled"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardPage.prototype, "previousStepDisabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPagePreviousDisabledChange"),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _f || Object)
], WizardPage.prototype, "previousStepDisabledChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPagePreventDefault"),
    __metadata("design:type", Boolean)
], WizardPage.prototype, "preventDefault", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPagePreventDefaultCancel"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardPage.prototype, "stopCancel", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPagePreventDefaultCancelChange"),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _g || Object)
], WizardPage.prototype, "stopCancelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPagePreventDefaultNext"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardPage.prototype, "stopNext", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPageOnCommit"),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _h || Object)
], WizardPage.prototype, "onCommit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPageOnLoad"),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _j || Object)
], WizardPage.prototype, "onLoad", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPageOnCancel"),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _k || Object)
], WizardPage.prototype, "pageOnCancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPageFinish"),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _l || Object)
], WizardPage.prototype, "finishButtonClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPagePrevious"),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _m || Object)
], WizardPage.prototype, "previousButtonClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPageNext"),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _o || Object)
], WizardPage.prototype, "nextButtonClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPageDanger"),
    __metadata("design:type", typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _p || Object)
], WizardPage.prototype, "dangerButtonClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPagePrimary"),
    __metadata("design:type", typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _q || Object)
], WizardPage.prototype, "primaryButtonClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardPageCustomButton"),
    __metadata("design:type", typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _r || Object)
], WizardPage.prototype, "customButtonClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("id"),
    __metadata("design:type", Object)
], WizardPage.prototype, "_id", void 0);
WizardPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-wizard-page",
        template: "<ng-content></ng-content>",
        host: {
            "[id]": "id",
            "role": "tabpanel",
            "[attr.aria-hidden]": "!current",
            "[attr.aria-labelledby]": "stepItemId",
            "[class.active]": "current",
            "[class.clr-wizard-page]": "true"
        }
    }),
    __metadata("design:paramtypes", [typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_7__providers_wizard_navigation__["a" /* WizardNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_wizard_navigation__["a" /* WizardNavigationService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_6__providers_page_collection__["a" /* PageCollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_page_collection__["a" /* PageCollectionService */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_5__providers_button_hub__["a" /* ButtonHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_button_hub__["a" /* ButtonHubService */]) === "function" && _u || Object])
], WizardPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
//# sourceMappingURL=wizard-page.js.map

/***/ }),
/* 840 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nested_property__ = __webpack_require__(877);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridPropertyComparator; });

var DatagridPropertyComparator = (function () {
    function DatagridPropertyComparator(prop) {
        this.prop = prop;
        this.nestedProp = new __WEBPACK_IMPORTED_MODULE_0__nested_property__["a" /* NestedProperty */](prop);
    }
    DatagridPropertyComparator.prototype.compare = function (a, b) {
        var propA = this.nestedProp.getPropValue(a);
        var propB = this.nestedProp.getPropValue(b);
        if (typeof propA === "string") {
            propA = propA.toLowerCase();
        }
        if (typeof propB === "string") {
            propB = propB.toLowerCase();
        }
        if (typeof propA === "undefined" || propA === null) {
            if (typeof propB === "undefined" || propB === null) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            if (typeof propB === "undefined" || propB === null) {
                return -1;
            }
            else if (propA < propB) {
                return -1;
            }
            else if (propA > propB) {
                return 1;
            }
            else {
                return 0;
            }
        }
    };
    return DatagridPropertyComparator;
}());

//# sourceMappingURL=datagrid-property-comparator.js.map

/***/ }),
/* 841 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nested_property__ = __webpack_require__(877);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridPropertyStringFilter; });

var DatagridPropertyStringFilter = (function () {
    function DatagridPropertyStringFilter(prop, exact) {
        if (exact === void 0) { exact = false; }
        this.prop = prop;
        this.exact = exact;
        this.nestedProp = new __WEBPACK_IMPORTED_MODULE_0__nested_property__["a" /* NestedProperty */](prop);
    }
    DatagridPropertyStringFilter.prototype.accepts = function (item, search) {
        var propValue = this.nestedProp.getPropValue(item);
        if (typeof propValue === "undefined") {
            return false;
        }
        else if (this.exact) {
            return ("" + propValue).toLowerCase() === search;
        }
        else {
            return ("" + propValue).toLowerCase().indexOf(search) >= 0;
        }
    };
    return DatagridPropertyStringFilter;
}());

//# sourceMappingURL=datagrid-property-string-filter.js.map

/***/ }),
/* 842 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridStringFilterImpl; });

var DatagridStringFilterImpl = (function () {
    function DatagridStringFilterImpl(filterFn) {
        this.filterFn = filterFn;
        /**
         * The Observable required as part of the Filter interface
         */
        this._changes = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        /**
         * Raw input value
         */
        this._rawValue = "";
        /**
         * Input value converted to lowercase
         */
        this._lowerCaseValue = "";
    }
    Object.defineProperty(DatagridStringFilterImpl.prototype, "changes", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridStringFilterImpl.prototype, "value", {
        get: function () {
            return this._rawValue;
        },
        /**
         * Common setter for the input value
         */
        set: function (value) {
            if (!value) {
                value = "";
            }
            if (value !== this._rawValue) {
                this._rawValue = value;
                this._lowerCaseValue = value.toLowerCase().trim();
                this._changes.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridStringFilterImpl.prototype, "lowerCaseValue", {
        get: function () {
            return this._lowerCaseValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Indicates if the filter is currently active, meaning the input is not empty
     */
    DatagridStringFilterImpl.prototype.isActive = function () {
        return !!this.value;
    };
    /**
     * Tests if an item matches a search text
     */
    DatagridStringFilterImpl.prototype.accepts = function (item) {
        // We always test with the lowercase value of the input, to stay case insensitive
        return this.filterFn.accepts(item, this.lowerCaseValue);
    };
    return DatagridStringFilterImpl;
}());

//# sourceMappingURL=datagrid-string-filter-impl.js.map

/***/ }),
/* 843 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_chocolate_willy_wonka__ = __webpack_require__(1020);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridWillyWonka; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var DatagridWillyWonka = (function (_super) {
    __extends(DatagridWillyWonka, _super);
    function DatagridWillyWonka() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DatagridWillyWonka;
}(__WEBPACK_IMPORTED_MODULE_1__utils_chocolate_willy_wonka__["a" /* WillyWonka */]));
DatagridWillyWonka = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-datagrid" })
], DatagridWillyWonka);

//# sourceMappingURL=datagrid-willy-wonka.js.map

/***/ }),
/* 844 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_custom_filter__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_filters__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_datagrid_filter_registrar__ = __webpack_require__(851);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridFilter; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */





/**
 * Custom filter that can be added in any column to override the default object property string filter.
 * The reason this is not just an input on DatagridColumn is because we need the filter's template to be projected,
 * since it can be anything (not just a text input).
 */
var DatagridFilter = DatagridFilter_1 = (function (_super) {
    __extends(DatagridFilter, _super);
    function DatagridFilter(_filters) {
        var _this = _super.call(this, _filters) || this;
        _this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_BOTTOM;
        _this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_TOP;
        _this.popoverOptions = { allowMultipleOpen: true };
        /**
         * Tracks whether the filter dropdown is open or not
         */
        _this._open = false;
        _this.openChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        return _this;
    }
    Object.defineProperty(DatagridFilter.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (open) {
            var boolOpen = !!open;
            if (boolOpen !== this._open) {
                this._open = boolOpen;
                this.openChanged.emit(boolOpen);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridFilter.prototype, "customFilter", {
        set: function (filter) {
            this.setFilter(filter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridFilter.prototype, "active", {
        /**
         * Indicates if the filter is currently active
         */
        get: function () {
            return !!this.filter && this.filter.isActive();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Shows/hides the filter dropdown
     */
    DatagridFilter.prototype.toggle = function () {
        this.open = !this.open;
    };
    return DatagridFilter;
}(__WEBPACK_IMPORTED_MODULE_4__utils_datagrid_filter_registrar__["a" /* DatagridFilterRegistrar */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgFilterOpen"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DatagridFilter.prototype, "open", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgFilterOpenChange"),
    __metadata("design:type", Object)
], DatagridFilter.prototype, "openChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgFilter"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatagridFilter.prototype, "customFilter", null);
DatagridFilter = DatagridFilter_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-filter",
        // We register this component as a CustomFilter, for the parent column to detect it.
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__providers_custom_filter__["a" /* CustomFilter */], useExisting: DatagridFilter_1 }],
        template: "\n        <button #anchor class=\"datagrid-filter-toggle\" (click)=\"toggle()\"\n            [class.datagrid-filter-open]=\"open\" [class.datagrid-filtered]=\"active\"\n            type=\"button\"></button>\n\n        <ng-template [(clrPopoverOld)]=\"open\" [clrPopoverOldAnchor]=\"anchor\" [clrPopoverOldAnchorPoint]=\"anchorPoint\"\n             [clrPopoverOldPopoverPoint]=\"popoverPoint\" [clrPopoverOldOptions]=\"popoverOptions\">\n            <div class=\"datagrid-filter\">\n                <!-- FIXME: this whole filter part needs a final design before we can try to have a cleaner DOM -->\n                <div class=\"datagrid-filter-close-wrapper\">\n                    <button type=\"button\" class=\"close\" \n                        aria-label=\"Close\" (click)=\"open = false\"\n                        type=\"button\">\n                        <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n                    </button>\n                </div>\n    \n                <ng-content></ng-content>\n            </div>\n        </ng-template>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_filters__["b" /* FiltersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_filters__["b" /* FiltersProvider */]) === "function" && _a || Object])
], DatagridFilter);

var DatagridFilter_1, _b, _c, _d, _e, _a;
//# sourceMappingURL=datagrid-filter.js.map

/***/ }),
/* 845 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_items__ = __webpack_require__(816);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridItems; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var DatagridItems = (function () {
    function DatagridItems(template, _differs, _items) {
        this.template = template;
        this._differs = _differs;
        this._items = _items;
        _items.smartenUp();
    }
    Object.defineProperty(DatagridItems.prototype, "rawItems", {
        set: function (items) {
            this._rawItems = items ? items : [];
        },
        enumerable: true,
        configurable: true
    });
    DatagridItems.prototype.ngOnChanges = function (changes) {
        if ("rawItems" in changes) {
            var currentItems = changes.rawItems.currentValue;
            if (!this._differ && currentItems) {
                this._differ = this._differs.find(currentItems).create(this._items.trackBy);
            }
        }
    };
    Object.defineProperty(DatagridItems.prototype, "trackBy", {
        set: function (value) {
            this._items.trackBy = value;
        },
        enumerable: true,
        configurable: true
    });
    DatagridItems.prototype.ngDoCheck = function () {
        if (this._differ) {
            var changes = this._differ.diff(this._rawItems);
            if (changes) {
                // TODO: not very efficient right now,
                // but premature optimization is the root of all evil.
                this._items.all = this._rawItems;
            }
        }
    };
    return DatagridItems;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgItemsOf"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DatagridItems.prototype, "rawItems", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgItemsTrackBy"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TrackByFunction"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TrackByFunction"]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TrackByFunction"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TrackByFunction"]) === "function" && _b || Object])
], DatagridItems.prototype, "trackBy", null);
DatagridItems = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: "[clrDgItems][clrDgItemsOf]",
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* IterableDiffers */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* IterableDiffers */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__providers_items__["a" /* Items */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_items__["a" /* Items */]) === "function" && _e || Object])
], DatagridItems);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=datagrid-items.js.map

/***/ }),
/* 846 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_items__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_page__ = __webpack_require__(817);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridPlaceholder; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridPlaceholder = (function () {
    function DatagridPlaceholder(items, page) {
        this.items = items;
        this.page = page;
    }
    Object.defineProperty(DatagridPlaceholder.prototype, "emptyDatagrid", {
        /**
         * Tests if the datagrid is empty, meaning it doesn't contain any items
         */
        get: function () {
            return !this.items.loading && (!this.items.displayed || this.items.displayed.length === 0);
        },
        enumerable: true,
        configurable: true
    });
    return DatagridPlaceholder;
}());
DatagridPlaceholder = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-placeholder",
        template: "\n        <div\n            class=\"datagrid-placeholder\"\n            [class.datagrid-empty]=\"emptyDatagrid\">\n                <div class=\"datagrid-placeholder-image\" *ngIf=\"emptyDatagrid\"></div>\n                <ng-content *ngIf=\"emptyDatagrid\"></ng-content>\n        </div>\n    ",
        host: { "[class.datagrid-placeholder-container]": "true" }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_items__["a" /* Items */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_items__["a" /* Items */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_page__["a" /* Page */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_page__["a" /* Page */]) === "function" && _b || Object])
], DatagridPlaceholder);

var _a, _b;
//# sourceMappingURL=datagrid-placeholder.js.map

/***/ }),
/* 847 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_loading_loading_listener__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datagrid_cell__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_expandable_rows__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hideable_column_service__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_row_action_service__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_selection__ = __webpack_require__(829);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridRow; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */








var nbRow = 0;
var DatagridRow = (function () {
    function DatagridRow(selection, rowActionService, globalExpandable, expand, hideableColumnService) {
        this.selection = selection;
        this.rowActionService = rowActionService;
        this.globalExpandable = globalExpandable;
        this.expand = expand;
        this.hideableColumnService = hideableColumnService;
        /* reference to the enum so that template can access */
        this.SELECTION_TYPE = __WEBPACK_IMPORTED_MODULE_7__providers_selection__["a" /* SelectionType */];
        this._selected = false;
        this.selectedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this.expandedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this.id = "clr-dg-row" + (nbRow++);
    }
    Object.defineProperty(DatagridRow.prototype, "selected", {
        /**
         * Indicates if the row is selected
         */
        get: function () {
            if (this.selection.selectionType === __WEBPACK_IMPORTED_MODULE_7__providers_selection__["a" /* SelectionType */].None) {
                return this._selected;
            }
            else {
                return this.selection.isSelected(this.item);
            }
        },
        set: function (value) {
            if (this.selection.selectionType === __WEBPACK_IMPORTED_MODULE_7__providers_selection__["a" /* SelectionType */].None) {
                this._selected = value;
            }
            else {
                this.selection.setSelected(this.item, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DatagridRow.prototype.toggle = function (selected) {
        if (selected === void 0) { selected = !this.selected; }
        if (selected !== this.selected) {
            this.selected = selected;
            this.selectedChanged.emit(selected);
        }
    };
    Object.defineProperty(DatagridRow.prototype, "expanded", {
        get: function () {
            return this.expand.expanded;
        },
        set: function (value) {
            this.expand.expanded = value;
        },
        enumerable: true,
        configurable: true
    });
    DatagridRow.prototype.toggleExpand = function () {
        if (this.expand.expandable) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    };
    DatagridRow.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Make sure things get started
        var columnsList = this.hideableColumnService.getColumns();
        this.updateCellsForColumns(columnsList);
        // Triggered when the Cells list changes per row-renderer
        this.dgCells.changes.subscribe(function (cellList) {
            var columnList = _this.hideableColumnService.getColumns();
            if (cellList.length === columnList.length) {
                _this.updateCellsForColumns(columnList);
            }
        });
        // Used to set things up the first time but only after all the columns are ready.
        this.subscription = this.hideableColumnService.columnListChange.subscribe(function (columnList) {
            // Prevents cell updates when cols and cells array are not aligned - only seems to run on init / first time.
            if (columnList.length === _this.dgCells.length) {
                _this.updateCellsForColumns(columnList);
            }
        });
    };
    /**********
     * @function updateCellsForColumns
     *
     * @description
     * 1. Maps the new columnListChange to the dgCells list by index
     * 2. Sets the hidden state on the cell
     * Take a Column list and use index to access the columns for hideable properties.
     *
     * @param columnList<DatagridColumn[]>
     */
    DatagridRow.prototype.updateCellsForColumns = function (columnList) {
        // Map cells to columns with Array.index
        this.dgCells.forEach(function (cell, index) {
            var currentColumn = columnList[index]; // Accounts for null space.
            if (currentColumn) {
                cell.id = currentColumn.id;
            }
        });
    };
    DatagridRow.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DatagridRow;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgItem"),
    __metadata("design:type", Object)
], DatagridRow.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgSelected"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DatagridRow.prototype, "selected", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgSelectedChange"),
    __metadata("design:type", Object)
], DatagridRow.prototype, "selectedChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgExpanded"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DatagridRow.prototype, "expanded", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgExpandedChange"),
    __metadata("design:type", Object)
], DatagridRow.prototype, "expandedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_3__datagrid_cell__["a" /* DatagridCell */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _a || Object)
], DatagridRow.prototype, "dgCells", void 0);
DatagridRow = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-row",
        template: "\n        <clr-dg-row-master class=\"datagrid-row-flex\">\n            <clr-dg-cell *ngIf=\"selection.selectionType === SELECTION_TYPE.Multi\"\n                         class=\"datagrid-select datagrid-fixed-column\">\n                <clr-checkbox [ngModel]=\"selected\" (ngModelChange)=\"toggle($event)\"></clr-checkbox>\n            </clr-dg-cell>\n            <clr-dg-cell *ngIf=\"selection.selectionType === SELECTION_TYPE.Single\"\n                         class=\"datagrid-select datagrid-fixed-column\">\n                <div class=\"radio\">\n                    <input type=\"radio\" [id]=\"id\" [name]=\"selection.id + '-radio'\" [value]=\"item\"\n                           [(ngModel)]=\"selection.currentSingle\">\n                    <label for=\"{{id}}\"></label>\n                </div>\n            </clr-dg-cell>\n            <clr-dg-cell *ngIf=\"rowActionService.hasActionableRow\"\n                         class=\"datagrid-row-actions datagrid-fixed-column\">\n                <ng-content select=\"clr-dg-action-overflow\"></ng-content>\n            </clr-dg-cell>\n            <clr-dg-cell *ngIf=\"globalExpandable.hasExpandableRow\"\n                         class=\"datagrid-expandable-caret datagrid-fixed-column\">\n                <ng-container *ngIf=\"expand.expandable\">\n                    <button (click)=\"toggleExpand()\" *ngIf=\"!expand.loading\" type=\"button\">\n                        <clr-icon shape=\"caret\" [attr.dir]=\"expand.expanded?'down':'right'\"></clr-icon>\n                    </button>\n                    <div class=\"spinner spinner-sm\" *ngIf=\"expand.loading\"></div>\n                </ng-container>\n            </clr-dg-cell>\n            <ng-content *ngIf=\"!expand.replace || !expand.expanded || expand.loading\"></ng-content>\n\n            <ng-template *ngIf=\"expand.replace && expand.expanded && !expand.loading\"\n                         [ngTemplateOutlet]=\"detail\"></ng-template>\n        </clr-dg-row-master>\n\n        <ng-template *ngIf=\"!expand.replace && expand.expanded && !expand.loading\"\n                     [ngTemplateOutlet]=\"detail\"></ng-template>\n\n        <!-- \n            We need the \"project into template\" hack because we need this in 2 different places\n            depending on whether the details replace the row or not.\n        -->\n        <ng-template #detail>\n            <ng-content select=\"clr-dg-row-detail\"></ng-content>\n        </ng-template>\n    ",
        host: { "[class.datagrid-row]": "true", "[class.datagrid-selected]": "selected" },
        providers: [__WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__["a" /* Expand */], { provide: __WEBPACK_IMPORTED_MODULE_2__utils_loading_loading_listener__["a" /* LoadingListener */], useExisting: __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__["a" /* Expand */] }]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__providers_selection__["b" /* Selection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_selection__["b" /* Selection */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_row_action_service__["a" /* RowActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_row_action_service__["a" /* RowActionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_expandable_rows__["a" /* ExpandableRowsCount */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_expandable_rows__["a" /* ExpandableRowsCount */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__["a" /* Expand */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__["a" /* Expand */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_hideable_column_service__["a" /* HideableColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_hideable_column_service__["a" /* HideableColumnService */]) === "function" && _f || Object])
], DatagridRow);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=datagrid-row.js.map

/***/ }),
/* 848 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFilter; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var CustomFilter = (function () {
    function CustomFilter() {
    }
    return CustomFilter;
}());

//# sourceMappingURL=custom-filter.js.map

/***/ }),
/* 849 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sort; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var Sort = (function () {
    function Sort() {
        /**
         * Ascending order if false, descending if true
         */
        this._reverse = false;
        /**
         * The Observable that lets other classes subscribe to sort changes
         */
        this._change = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(Sort.prototype, "comparator", {
        get: function () {
            return this._comparator;
        },
        set: function (value) {
            this._comparator = value;
            this.emitChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sort.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (value) {
            this._reverse = value;
            this.emitChange();
        },
        enumerable: true,
        configurable: true
    });
    Sort.prototype.emitChange = function () {
        this._change.next(this);
    };
    Object.defineProperty(Sort.prototype, "change", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets a comparator as the current one, or toggles reverse if the comparator is already used. The
     * optional forceReverse input parameter allows to override that toggling behavior by sorting in
     * reverse order if `true`.
     *
     * @param {Comparator<any>} sortBy the comparator to use for sorting
     * @param {boolean} [forceReverse] `true` to force sorting descendingly
     *
     * @memberof Sort
     */
    Sort.prototype.toggle = function (sortBy, forceReverse) {
        // We modify private properties directly, to batch the change event
        if (this.comparator === sortBy) {
            this._reverse = typeof forceReverse !== "undefined" ? forceReverse || !this._reverse : !this._reverse;
        }
        else {
            this._comparator = sortBy;
            this._reverse = typeof forceReverse !== "undefined" ? forceReverse : false;
        }
        this.emitChange();
    };
    /**
     * Clears the current sorting order
     */
    Sort.prototype.clear = function () {
        this.comparator = null;
    };
    /**
     * Compares two objects according to the current comparator
     */
    Sort.prototype.compare = function (a, b) {
        return (this.reverse ? -1 : 1) * this.comparator.compare(a, b);
    };
    return Sort;
}());
Sort = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Sort);

//# sourceMappingURL=sort.js.map

/***/ }),
/* 850 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMPUTE_WIDTH_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STRICT_WIDTH_CLASS; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */ var COMPUTE_WIDTH_CLASS = "datagrid-computing-columns-width";
var STRICT_WIDTH_CLASS = "datagrid-fixed-width";
//# sourceMappingURL=constants.js.map

/***/ }),
/* 851 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_filters__ = __webpack_require__(811);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridFilterRegistrar; });

var DatagridFilterRegistrar = (function () {
    function DatagridFilterRegistrar(filters) {
        this.filters = filters;
    }
    Object.defineProperty(DatagridFilterRegistrar.prototype, "filter", {
        get: function () {
            return this.registered && this.registered.filter;
        },
        enumerable: true,
        configurable: true
    });
    DatagridFilterRegistrar.prototype.setFilter = function (filter) {
        // If we previously had another filter, we unregister it
        this.deleteFilter();
        if (filter instanceof __WEBPACK_IMPORTED_MODULE_0__providers_filters__["a" /* RegisteredFilter */]) {
            this.registered = filter;
        }
        else if (filter) {
            this.registered = this.filters.add(filter);
        }
    };
    DatagridFilterRegistrar.prototype.deleteFilter = function () {
        if (this.registered) {
            this.registered.unregister();
            delete this.registered;
        }
    };
    DatagridFilterRegistrar.prototype.ngOnDestroy = function () {
        this.deleteFilter();
    };
    return DatagridFilterRegistrar;
}());

//# sourceMappingURL=datagrid-filter-registrar.js.map

/***/ }),
/* 852 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_dropdown_dropdown_module__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(906);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrAlertModule; });
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





var ClrAlertModule = (function () {
    function ClrAlertModule() {
    }
    return ClrAlertModule;
}());
ClrAlertModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_3__popover_dropdown_dropdown_module__["a" /* ClrDropdownModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* ALERT_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* ALERT_DIRECTIVES */]]
    })
], ClrAlertModule);

//# sourceMappingURL=alert.module.js.map

/***/ }),
/* 853 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AriaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// TODO: if we find more components that could use this, consider moving this to utils
var AriaService = (function () {
    function AriaService() {
    }
    return AriaService;
}());
AriaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AriaService);

//# sourceMappingURL=aria-service.js.map

/***/ }),
/* 854 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria_service__ = __webpack_require__(853);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var nbTabContentComponents = 0;
var TabContent = (function () {
    function TabContent(ifActiveService, id, ariaService) {
        this.ifActiveService = ifActiveService;
        this.id = id;
        this.ariaService = ariaService;
        if (!this.tabContentId) {
            this.tabContentId = "clr-tab-content-" + (nbTabContentComponents++);
        }
    }
    Object.defineProperty(TabContent.prototype, "ariaLabelledBy", {
        get: function () {
            return this.ariaService.ariaLabelledBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabContent.prototype, "tabContentId", {
        get: function () {
            return this.ariaService.ariaControls;
        },
        set: function (id) {
            this.ariaService.ariaControls = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabContent.prototype, "active", {
        get: function () {
            return this.ifActiveService.current === this.id;
        },
        enumerable: true,
        configurable: true
    });
    return TabContent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("tabContentProjectedRef"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _a || Object)
], TabContent.prototype, "templateRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("id"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TabContent.prototype, "tabContentId", null);
TabContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-tab-content",
        template: "\n        <ng-content></ng-content>\n    ",
        host: {
            "[id]": "tabContentId",
            "[attr.aria-labelledby]": "ariaLabelledBy",
            "[attr.aria-hidden]": "!active",
            "[attr.data-hidden]": "!active",
            "role": "tabpanel"
        }
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["a" /* IF_ACTIVE_ID */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */]) === "function" && _b || Object, Number, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__aria_service__["a" /* AriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__aria_service__["a" /* AriaService */]) === "function" && _c || Object])
], TabContent);

var _a, _b, _c;
//# sourceMappingURL=tab-content.js.map

/***/ }),
/* 855 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_focus_trap_focus_trap_module__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(932);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrModalModule; });
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





var ClrModalModule = (function () {
    function ClrModalModule() {
    }
    return ClrModalModule;
}());
ClrModalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_3__utils_focus_trap_focus_trap_module__["a" /* ClrFocusTrapModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* MODAL_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* MODAL_DIRECTIVES */]]
    })
], ClrModalModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),
/* 856 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GHOST_PAGE_ANIMATION; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */ var GHOST_PAGE_ANIMATION = {
    STATES: { NO_PAGES: "inactive", ALL_PAGES: "ready", NEXT_TO_LAST_PAGE: "penultimateGhost", LAST_PAGE: "lastGhost" },
    TRANSITIONS: { IN: "100ms ease-out", OUT: "100ms ease-in" }
};
//# sourceMappingURL=ghost-page-animations.js.map

/***/ }),
/* 857 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignpostTriggerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var SignpostTriggerDirective = (function () {
    function SignpostTriggerDirective(ifOpenService) {
        this.ifOpenService = ifOpenService;
    }
    /**********
     * @function onSignpostTriggerClick
     *
     * @description
     * click handler for the Signpost trigger button used to hide/show SignpostContent.
     */
    SignpostTriggerDirective.prototype.onSignpostTriggerClick = function () {
        this.ifOpenService.toggleWithEvent(event);
    };
    return SignpostTriggerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignpostTriggerDirective.prototype, "onSignpostTriggerClick", null);
SignpostTriggerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrSignpostTrigger]" })
    /*********
     *
     * @class SignpostTriggerDirective
     *
     * @Description
     * A Directive added to the Signpost Trigger button that will call the Signpost.toggle() function to hide/show the
     * SignpostContent.
     *
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */]) === "function" && _a || Object])
], SignpostTriggerDirective);

var _a;
//# sourceMappingURL=signpost-trigger.directive.js.map

/***/ }),
/* 858 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signpost_trigger_directive__ = __webpack_require__(857);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signpost; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var Signpost = (function () {
    function Signpost() {
        /**********
         * @property useCustomTrigger
         *
         * @description
         * Flag used to determine if we need to use the default trigger or a user supplied trigger element.
         *
         * @type {boolean}
         */
        this.useCustomTrigger = false;
    }
    Object.defineProperty(Signpost.prototype, "customTrigger", {
        /**********
         * @property signPostTrigger
         *
         * @description
         * Uses ContentChild to check for a user supplied element with the SignpostTriggerDirective on it.
         *
         * @type {SignpostTriggerDirective}
         */
        set: function (trigger) {
            this.useCustomTrigger = !!trigger;
        },
        enumerable: true,
        configurable: true
    });
    return Signpost;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__signpost_trigger_directive__["a" /* SignpostTriggerDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__signpost_trigger_directive__["a" /* SignpostTriggerDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__signpost_trigger_directive__["a" /* SignpostTriggerDirective */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__signpost_trigger_directive__["a" /* SignpostTriggerDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__signpost_trigger_directive__["a" /* SignpostTriggerDirective */]) === "function" && _b || Object])
], Signpost.prototype, "customTrigger", null);
Signpost = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-signpost",
        template: "\n        <ng-container *ngIf=\"!useCustomTrigger\">\n            <button\n                type=\"button\"\n                class=\"signpost-action btn btn-small btn-link\"\n                clrSignpostTrigger>\n                <clr-icon shape=\"info\"></clr-icon>\n            </button>\n        </ng-container>\n        \n        <ng-content></ng-content>\n    ",
        host: { "[class.signpost]": "true" },
        providers: [__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */]]
    })
    /*********
     *
     * @class Signpost
     *
     * @description
     * Class used to configure and control the state of a Signpost and its associated SignpostContent.
     * It supports the clrPosition with a 'right-middle' default.
     *
     */
], Signpost);

var _a, _b;
//# sourceMappingURL=signpost.js.map

/***/ }),
/* 859 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateRefContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var TemplateRefContainer = (function () {
    function TemplateRefContainer() {
    }
    return TemplateRefContainer;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _a || Object)
], TemplateRefContainer.prototype, "template", void 0);
TemplateRefContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: "\n      <ng-template>\n        <ng-content></ng-content>\n      </ng-template>\n    ",
    })
], TemplateRefContainer);

var _a;
//# sourceMappingURL=template-ref-container.js.map

/***/ }),
/* 860 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardPageButtonsDirective; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardPageButtonsDirective = (function () {
    function WizardPageButtonsDirective(pageButtonsTemplateRef) {
        this.pageButtonsTemplateRef = pageButtonsTemplateRef;
    }
    return WizardPageButtonsDirective;
}());
WizardPageButtonsDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrPageButtons]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _a || Object])
], WizardPageButtonsDirective);

var _a;
//# sourceMappingURL=page-buttons.js.map

/***/ }),
/* 861 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardPageHeaderActionsDirective; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardPageHeaderActionsDirective = (function () {
    function WizardPageHeaderActionsDirective(pageHeaderActionsTemplateRef) {
        this.pageHeaderActionsTemplateRef = pageHeaderActionsTemplateRef;
    }
    return WizardPageHeaderActionsDirective;
}());
WizardPageHeaderActionsDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrPageHeaderActions]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _a || Object])
], WizardPageHeaderActionsDirective);

var _a;
//# sourceMappingURL=page-header-actions.js.map

/***/ }),
/* 862 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardPageNavTitleDirective; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardPageNavTitleDirective = (function () {
    function WizardPageNavTitleDirective(pageNavTitleTemplateRef) {
        this.pageNavTitleTemplateRef = pageNavTitleTemplateRef;
    }
    return WizardPageNavTitleDirective;
}());
WizardPageNavTitleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrPageNavTitle]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _a || Object])
], WizardPageNavTitleDirective);

var _a;
//# sourceMappingURL=page-navtitle.js.map

/***/ }),
/* 863 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardPageTitleDirective; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardPageTitleDirective = (function () {
    function WizardPageTitleDirective(pageTitleTemplateRef) {
        this.pageTitleTemplateRef = pageTitleTemplateRef;
    }
    return WizardPageTitleDirective;
}());
WizardPageTitleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrPageTitle]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _a || Object])
], WizardPageTitleDirective);

var _a;
//# sourceMappingURL=page-title.js.map

/***/ }),
/* 864 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardHeaderAction; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var wizardHeaderActionIndex = 0;
var WizardHeaderAction = (function () {
    function WizardHeaderAction() {
        // title is explanatory text added to the header action
        this.title = "";
        // If our host has an ID attribute, we use this instead of our index.
        this._id = (wizardHeaderActionIndex++).toString();
        this.disabled = false;
        this.headerActionClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
    }
    Object.defineProperty(WizardHeaderAction.prototype, "id", {
        get: function () {
            return "clr-wizard-header-action-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    WizardHeaderAction.prototype.click = function () {
        if (this.disabled) {
            return;
        }
        // passing the header action id allows users to have one method that
        // routes to many different actions based on the type of header action
        // clicked. this is further aided by users being able to specify ids
        // for their header actions.
        this.headerActionClicked.emit(this._id);
    };
    return WizardHeaderAction;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("title"),
    __metadata("design:type", String)
], WizardHeaderAction.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("id"),
    __metadata("design:type", String)
], WizardHeaderAction.prototype, "_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardHeaderActionDisabled"),
    __metadata("design:type", Boolean)
], WizardHeaderAction.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("actionClicked"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], WizardHeaderAction.prototype, "headerActionClicked", void 0);
WizardHeaderAction = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-wizard-header-action",
        template: "\n        <button \n            type=\"button\"\n            class=\"btn clr-wizard-header-action btn-link\"\n            [id]=\"id\"\n            [class.disabled]=\"disabled\"\n            (click)=\"click()\"\n            [title]=\"title\">\n            <ng-content></ng-content>\n        </button>\n    ",
        host: { "class": "clr-wizard-header-action-wrapper" }
    })
], WizardHeaderAction);

var _a;
//# sourceMappingURL=wizard-header-action.js.map

/***/ }),
/* 865 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_common_popover_module__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(867);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrButtonGroupModule; });
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





var ClrButtonGroupModule = (function () {
    function ClrButtonGroupModule() {
    }
    return ClrButtonGroupModule;
}());
ClrButtonGroupModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_3__popover_common_popover_module__["a" /* ClrCommonPopoverModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* BUTTON_GROUP_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* BUTTON_GROUP_DIRECTIVES */]]
    })
], ClrButtonGroupModule);

//# sourceMappingURL=button-group.module.js.map

/***/ }),
/* 866 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_buttonInGroup_service__ = __webpack_require__(871);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var Button = (function () {
    function Button(buttonInGroupService) {
        this.buttonInGroupService = buttonInGroupService;
        this._enableService = false;
        this._inMenu = false;
        this._classNames = "btn";
        this._name = null;
        this._type = null;
        this._disabled = null;
        this._click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
    }
    Object.defineProperty(Button.prototype, "inMenu", {
        get: function () {
            return this._inMenu;
        },
        set: function (value) {
            value = !!value;
            if (this._inMenu !== value) {
                this._inMenu = value;
                // We check if the service flag is enabled
                // and if the service exists because the service is optional
                if (this._enableService && this.buttonInGroupService) {
                    this.buttonInGroupService.updateButtonGroup(this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "classNames", {
        get: function () {
            return this._classNames;
        },
        set: function (value) {
            if (typeof value === "string") {
                var classNames = value.split(" ");
                if (classNames.indexOf("btn") === -1) {
                    classNames.push("btn");
                }
                this._classNames = classNames.join(" ");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._name = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._type = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            if (value !== null && value !== false) {
                this._disabled = "";
            }
            else {
                this._disabled = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.emitClick = function () {
        this._click.emit(true);
    };
    Button.prototype.ngAfterViewInit = function () {
        this._enableService = true;
    };
    return Button;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("buttonProjectedRef"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _a || Object)
], Button.prototype, "templateRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrInMenu"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Button.prototype, "inMenu", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("class"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Button.prototype, "classNames", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("name"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Button.prototype, "name", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("type"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Button.prototype, "type", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("disabled"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Button.prototype, "disabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("click"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], Button.prototype, "_click", void 0);
Button = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-button",
        template: "\n        <ng-template #buttonProjectedRef>\n            <button \n                [class]=\"classNames\" \n                (click)=\"emitClick()\"\n                [attr.type]=\"type\"\n                [attr.name]=\"name\"\n                [attr.disabled]=\"disabled\">\n                <ng-content></ng-content>\n            </button>\n        </ng-template>\n    "
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_buttonInGroup_service__["a" /* ButtonInGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_buttonInGroup_service__["a" /* ButtonInGroupService */]) === "function" && _c || Object])
], Button);

var _a, _b, _c;
//# sourceMappingURL=button.js.map

/***/ }),
/* 867 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_group__ = __webpack_require__(979);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUTTON_GROUP_DIRECTIVES; });
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var BUTTON_GROUP_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__button__["a" /* Button */], __WEBPACK_IMPORTED_MODULE_1__button_group__["a" /* ButtonGroup */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 868 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_button__ = __webpack_require__(980);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOADING_BUTTON_DIRECTIVES; });

var LOADING_BUTTON_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__loading_button__["a" /* LoadingButton */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 869 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_loading_loading_module__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(868);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrLoadingButtonModule; });
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




var ClrLoadingButtonModule = (function () {
    function ClrLoadingButtonModule() {
    }
    return ClrLoadingButtonModule;
}());
ClrLoadingButtonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__utils_loading_loading_module__["a" /* ClrLoadingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* LOADING_BUTTON_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* LOADING_BUTTON_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_2__utils_loading_loading_module__["a" /* ClrLoadingModule */]]
    })
], ClrLoadingButtonModule);

//# sourceMappingURL=loading-button.module.js.map

/***/ }),
/* 870 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_group_button_group_module__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_loading_loading_button_module__ = __webpack_require__(869);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrButtonModule; });
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



var ClrButtonModule = (function () {
    function ClrButtonModule() {
    }
    return ClrButtonModule;
}());
ClrButtonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__button_loading_loading_button_module__["a" /* ClrLoadingButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__button_group_button_group_module__["a" /* ClrButtonGroupModule */],
        ]
    })
], ClrButtonModule);

//# sourceMappingURL=button.module.js.map

/***/ }),
/* 871 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonInGroupService; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ButtonInGroupService = (function () {
    function ButtonInGroupService() {
        this._changes = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(ButtonInGroupService.prototype, "changes", {
        get: function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ButtonInGroupService.prototype.updateButtonGroup = function (button) {
        this._changes.next(button);
    };
    return ButtonInGroupService;
}());
ButtonInGroupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ButtonInGroupService);

//# sourceMappingURL=buttonInGroup.service.js.map

/***/ }),
/* 872 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syntax_highlight_syntax_highlight__ = __webpack_require__(874);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CODE_HIGHLIGHT_DIRECTIVES; });


var CODE_HIGHLIGHT_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__syntax_highlight_syntax_highlight__["a" /* CodeHighlight */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 873 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(872);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrSyntaxHighlightModule; });
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



var ClrSyntaxHighlightModule = (function () {
    function ClrSyntaxHighlightModule() {
    }
    return ClrSyntaxHighlightModule;
}());
ClrSyntaxHighlightModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CODE_HIGHLIGHT_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CODE_HIGHLIGHT_DIRECTIVES */]] })
], ClrSyntaxHighlightModule);

//# sourceMappingURL=syntax-highlight.module.js.map

/***/ }),
/* 874 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHighlight; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var CodeHighlight = (function () {
    // Had to use renderer because I wanted to add to existing classes on the code block
    // Didn't want to override them completely
    function CodeHighlight(_el, renderer) {
        this._el = _el;
        this.renderer = renderer;
        this._highlight = "";
    }
    CodeHighlight.prototype.ngAfterContentInit = function () {
        this.redraw();
    };
    CodeHighlight.prototype.redraw = function () {
        if (this._el && this._el.nativeElement) {
            Prism.highlightElement(this._el.nativeElement);
        }
    };
    Object.defineProperty(CodeHighlight.prototype, "highlight", {
        get: function () {
            return this._highlight;
        },
        set: function (val) {
            if (val && val.trim() !== "") {
                this._highlight = val;
                this.renderer.addClass(this._el.nativeElement, this._highlight);
            }
        },
        enumerable: true,
        configurable: true
    });
    return CodeHighlight;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clr-code-highlight"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CodeHighlight.prototype, "highlight", null);
CodeHighlight = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "code[clr-code-highlight]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _b || Object])
], CodeHighlight);

var _a, _b;
//# sourceMappingURL=syntax-highlight.js.map

/***/ }),
/* 875 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagrid_datagrid_module__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stack_view_stack_view_module__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_view_tree_view_module__ = __webpack_require__(903);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrDataModule; });
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




var ClrDataModule = (function () {
    function ClrDataModule() {
    }
    return ClrDataModule;
}());
ClrDataModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({ exports: [__WEBPACK_IMPORTED_MODULE_1__datagrid_datagrid_module__["a" /* ClrDatagridModule */], __WEBPACK_IMPORTED_MODULE_2__stack_view_stack_view_module__["a" /* ClrStackViewModule */], __WEBPACK_IMPORTED_MODULE_3__tree_view_tree_view_module__["a" /* ClrTreeViewModule */]] })
], ClrDataModule);

//# sourceMappingURL=data.module.js.map

/***/ }),
/* 876 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagrid_filter__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_custom_filter__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_filters__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_dom_adapter__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_datagrid_filter_registrar__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datagrid_string_filter_impl__ = __webpack_require__(842);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridStringFilter; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */







var DatagridStringFilter = DatagridStringFilter_1 = (function (_super) {
    __extends(DatagridStringFilter, _super);
    function DatagridStringFilter(renderer, filters, domAdapter) {
        var _this = _super.call(this, filters) || this;
        _this.renderer = renderer;
        _this.domAdapter = domAdapter;
        /**
         * Indicates if the filter dropdown is open
         */
        _this.open = false;
        _this.filterValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        return _this;
    }
    Object.defineProperty(DatagridStringFilter.prototype, "customStringFilter", {
        /**
         * Customizable filter logic based on a search text
         */
        set: function (value) {
            if (value instanceof __WEBPACK_IMPORTED_MODULE_3__providers_filters__["a" /* RegisteredFilter */]) {
                this.setFilter(value);
            }
            else {
                this.setFilter(new __WEBPACK_IMPORTED_MODULE_6__datagrid_string_filter_impl__["a" /* DatagridStringFilterImpl */](value));
            }
        },
        enumerable: true,
        configurable: true
    });
    DatagridStringFilter.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.filterContainer.openChanged.subscribe(function (open) {
            if (open) {
                // We need the timeout because at the time this executes, the input isn't
                // displayed yet.
                setTimeout(function () {
                    _this.domAdapter.focus(_this.input.nativeElement);
                });
            }
        });
    };
    Object.defineProperty(DatagridStringFilter.prototype, "value", {
        /**
         * Common setter for the input value
         */
        get: function () {
            return this.filter.value;
        },
        set: function (value) {
            if (!this.filter) {
                return;
            }
            if (!value) {
                value = "";
            }
            if (value !== this.filter.value) {
                this.filter.value = value;
                this.filterValueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DatagridStringFilter.prototype.close = function () {
        this.open = false;
    };
    return DatagridStringFilter;
}(__WEBPACK_IMPORTED_MODULE_5__utils_datagrid_filter_registrar__["a" /* DatagridFilterRegistrar */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgStringFilter"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatagridStringFilter.prototype, "customStringFilter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("input"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], DatagridStringFilter.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__datagrid_filter__["a" /* DatagridFilter */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__datagrid_filter__["a" /* DatagridFilter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datagrid_filter__["a" /* DatagridFilter */]) === "function" && _b || Object)
], DatagridStringFilter.prototype, "filterContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrFilterValue"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DatagridStringFilter.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrFilterValueChange"),
    __metadata("design:type", Object)
], DatagridStringFilter.prototype, "filterValueChange", void 0);
DatagridStringFilter = DatagridStringFilter_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-string-filter",
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__providers_custom_filter__["a" /* CustomFilter */], useExisting: DatagridStringFilter_1 }],
        template: "\n        <clr-dg-filter [clrDgFilter]=\"registered\" [(clrDgFilterOpen)]=\"open\">\n            <!--\n                Even though this *ngIf looks useless because the filter container already has one,\n                it prevents NgControlStatus and other directives automatically added by Angular\n                on inputs with NgModel from freaking out because of their host binding changing\n                mid-change detection when the input is destroyed.\n            -->\n            <input #input type=\"text\" name=\"search\" [(ngModel)]=\"value\" *ngIf=\"open\"\n                (keyup.enter)=\"close()\" (keyup.escape)=\"close()\"/>\n        </clr-dg-filter>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_filters__["b" /* FiltersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_filters__["b" /* FiltersProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__render_dom_adapter__["a" /* DomAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__render_dom_adapter__["a" /* DomAdapter */]) === "function" && _e || Object])
], DatagridStringFilter);

var DatagridStringFilter_1, _f, _g, _h, _j, _a, _b, _c, _d, _e;
//# sourceMappingURL=datagrid-string-filter.js.map

/***/ }),
/* 877 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestedProperty; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Generic accessor for deep object properties
 * that can be specified as simple dot-separated strings.
 */
var NestedProperty = (function () {
    function NestedProperty(prop) {
        this.prop = prop;
        if (prop.indexOf(".") >= 0) {
            this.splitProp = prop.split(".");
        }
    }
    // Safe getter for a deep object property, will not throw an error but return
    // undefined if one of the intermediate properties is null or undefined.
    NestedProperty.prototype.getPropValue = function (item) {
        if (this.splitProp) {
            var value = item;
            for (var _i = 0, _a = this.splitProp; _i < _a.length; _i++) {
                var nestedProp = _a[_i];
                if (value == null || typeof value === "undefined" || typeof value[nestedProp] === "undefined") {
                    return undefined;
                }
                value = value[nestedProp];
            }
            return value;
        }
        else {
            return item[this.prop];
        }
    };
    return NestedProperty;
}());

//# sourceMappingURL=nested-property.js.map

/***/ }),
/* 878 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridActionBar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var DatagridActionBar = (function () {
    function DatagridActionBar() {
    }
    return DatagridActionBar;
}());
DatagridActionBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-action-bar",
        template: "\n        <ng-content></ng-content>\n    ",
        host: { "[class.datagrid-action-bar]": "true" }
    })
], DatagridActionBar);

//# sourceMappingURL=datagrid-action-bar.js.map

/***/ }),
/* 879 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_row_action_service__ = __webpack_require__(818);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridActionOverflow; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridActionOverflow = (function () {
    function DatagridActionOverflow(rowActionService) {
        this.rowActionService = rowActionService;
        this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_CENTER;
        this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_CENTER;
        /**
         * Tracks whether the action overflow menu is open or not
         */
        this._open = false;
        this.openChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this.rowActionService.register();
    }
    DatagridActionOverflow.prototype.ngOnDestroy = function () {
        this.rowActionService.unregister();
    };
    Object.defineProperty(DatagridActionOverflow.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (open) {
            var boolOpen = !!open;
            if (boolOpen !== this._open) {
                this._open = boolOpen;
                this.openChanged.emit(boolOpen);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Shows/hides the action overflow menu
     */
    DatagridActionOverflow.prototype.toggle = function (event) {
        this.openingEvent = event;
        this.open = !this.open;
    };
    DatagridActionOverflow.prototype.close = function (event) {
        /*
         * Because this listener is added synchonously, before the event finishes bubbling up the DOM,
         * we end up firing on the very click that just opened the menu, p
         * otentially closing it immediately every time. So we just ignore it.
         */
        if (event === this.openingEvent) {
            delete this.openingEvent;
            return;
        }
        this.open = false;
    };
    return DatagridActionOverflow;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgActionOverflowOpen"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DatagridActionOverflow.prototype, "open", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgActionOverflowOpenChange"),
    __metadata("design:type", Object)
], DatagridActionOverflow.prototype, "openChanged", void 0);
DatagridActionOverflow = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-action-overflow",
        template: "\n        <button (click)=\"toggle($event)\" class=\"datagrid-action-toggle\" #anchor>\n            <clr-icon shape=\"ellipsis-vertical\"></clr-icon>\n        </button>\n        <ng-template [(clrPopoverOld)]=\"open\" [clrPopoverOldAnchor]=\"anchor\" [clrPopoverOldAnchorPoint]=\"anchorPoint\"\n                     [clrPopoverOldPopoverPoint]=\"popoverPoint\">\n            <div #menu class=\"datagrid-action-overflow\" (clrOutsideClick)=\"close($event)\" [clrStrict]=\"true\">\n                <ng-content></ng-content>\n            </div>\n        </ng-template>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_row_action_service__["a" /* RowActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_row_action_service__["a" /* RowActionService */]) === "function" && _a || Object])
], DatagridActionOverflow);

var _a;
//# sourceMappingURL=datagrid-action-overflow.js.map

/***/ }),
/* 880 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hideable_column_service__ = __webpack_require__(812);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridColumnToggle; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridColumnToggle = (function () {
    function DatagridColumnToggle(hideableColumnService) {
        this.hideableColumnService = hideableColumnService;
        /***
         * Popover init
         * @type {Point}
         */
        this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].TOP_LEFT;
        this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_BOTTOM;
        this.open = false;
        /****
         * DatagridHideableColumn init
         * @type {Array}
         */
        this.columns = [];
    }
    Object.defineProperty(DatagridColumnToggle.prototype, "allColumnsVisible", {
        get: function () {
            return this._allColumnsVisible;
        },
        set: function (value) {
            this._allColumnsVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    DatagridColumnToggle.prototype.ngOnInit = function () {
        var _this = this;
        this._hideableColumnChangeSubscription = this.hideableColumnService.columnListChange.subscribe(function (columnList) {
            // Reset the list of columns
            _this.columns.length = 0;
            _this.hideableColumnService.updateForLastVisibleColumn();
            _this.allColumnsVisible = _this.hideableColumnService.checkForAllColumnsVisible;
            // Add only the hidden columns to the toggler.
            columnList.forEach(function (col) {
                if (col) {
                    _this.columns.push(col);
                }
            });
        });
    };
    DatagridColumnToggle.prototype.ngOnDestroy = function () {
        this._hideableColumnChangeSubscription.unsubscribe();
    };
    DatagridColumnToggle.prototype.selectAll = function () {
        this.hideableColumnService.showHiddenColumns();
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
    };
    DatagridColumnToggle.prototype.toggleColumn = function (event, column) {
        column.hidden = !event;
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
        this.hideableColumnService.updateForLastVisibleColumn();
    };
    DatagridColumnToggle.prototype.toggleUI = function () {
        this.open = !this.open;
    };
    return DatagridColumnToggle;
}());
DatagridColumnToggle = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-column-toggle",
        template: "\n        <button\n                #anchor\n                (click)=\"toggleUI()\"\n                class=\"btn btn-sm btn-link column-toggle--action\"\n                type=\"button\">\n            <clr-icon shape=\"view-columns\"></clr-icon>\n        </button>\n        <div class=\"column-switch\"\n             *clrPopoverOld=\"open; anchor: anchor; anchorPoint: anchorPoint; popoverPoint: popoverPoint\">\n            <div class=\"switch-header\">\n                Show Columns\n                <button\n                    class=\"btn btn-sm btn-link\"\n                    (click)=\"toggleUI()\"\n                    type=\"button\">\n                    <clr-icon\n                            shape=\"close\"></clr-icon>\n                </button>\n            </div>\n            <ul class=\"switch-content list-unstyled\">\n                <li *ngFor=\"let column of columns\">\n                    <clr-checkbox [clrChecked]=\"!column.hidden\"\n                                  [clrDisabled]=\"column.lastVisibleColumn\"\n                                  (clrCheckedChange)=\"toggleColumn($event, column)\">\n                        <ng-template [ngTemplateOutlet]=\"column.template\"></ng-template>\n                    </clr-checkbox>\n                </li>\n            </ul>\n            <div class=\"switch-footer\">\n                <div>\n                    <button\n                            class=\"btn btn-sm btn-link p6 text-uppercase\"\n                            [disabled]=\"allColumnsVisible\"\n                            (click)=\"selectAll()\"\n                            type=\"button\">Select All\n                    </button>\n                </div>\n                <div class=\"action-right\">\n                    <button\n                            (click)=\"toggleUI()\"\n                            class=\"btn btn-primary\"\n                            type=\"button\">\n                        Ok\n                    </button>\n                </div>\n            </div>\n        </div>\n    ",
        host: { "[class.column-switch-wrapper]": "true", "[class.column-switch-wrapper--active]": "open" }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_hideable_column_service__["a" /* HideableColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_hideable_column_service__["a" /* HideableColumnService */]) === "function" && _a || Object])
], DatagridColumnToggle);

var _a;
//# sourceMappingURL=datagrid-column-toggle.js.map

/***/ }),
/* 881 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_hideable_column_service__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_selection__ = __webpack_require__(829);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridFooter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridFooter = (function () {
    function DatagridFooter(selection, hideableColumnService, cdr) {
        this.selection = selection;
        this.hideableColumnService = hideableColumnService;
        this.cdr = cdr;
        this.subscriptions = [];
        /* reference to the enum so that template can access */
        this.SELECTION_TYPE = __WEBPACK_IMPORTED_MODULE_2__providers_selection__["a" /* SelectionType */];
    }
    DatagridFooter.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.hideableColumnService.columnListChange.subscribe(function (change) {
            var hiddenColumnsInSub = change.filter(function (col) { return col; });
            if (hiddenColumnsInSub.length > 0) {
                _this.activeToggler = true;
            }
        }));
        var hiddenColumns = this.hideableColumnService.getColumns().filter(function (col) { return col; });
        if (hiddenColumns.length > 0) {
            this.activeToggler = true;
        }
    };
    DatagridFooter.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    return DatagridFooter;
}());
DatagridFooter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-footer",
        template: "\n        <ng-container\n            *ngIf=\"(selection.selectionType === SELECTION_TYPE.Multi) && (selection.current.length > 0)\">\n            <clr-checkbox [clrDisabled]=\"true\" [clrChecked]=\"true\" class=\"datagrid-foot-select\">\n                {{selection.current.length}}\n            </clr-checkbox>\n        </ng-container>\n        <clr-dg-column-toggle *ngIf=\"activeToggler\"></clr-dg-column-toggle>\n        <div class=\"datagrid-foot-description\">\n            <ng-content></ng-content>\n        </div>\n        <ng-content select=\"clr-dg-pagination\"></ng-content>\n    ",
        host: {
            "[class.datagrid-foot]": "true",
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_selection__["b" /* Selection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_selection__["b" /* Selection */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_hideable_column_service__["a" /* HideableColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_hideable_column_service__["a" /* HideableColumnService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */]) === "function" && _c || Object])
], DatagridFooter);

var _a, _b, _c;
//# sourceMappingURL=datagrid-footer.js.map

/***/ }),
/* 882 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagrid_column__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datagrid_hideable_column__ = __webpack_require__(987);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridHideableColumnDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridHideableColumnDirective = (function () {
    /**
     * @description
     * Used the DatagridColumn to get and set an id for this HiddenColumn
     *
     * @param templateRef
     * @param viewContainerRef
     * @param hideableColumnService
     * @param dgColumn
     */
    function DatagridHideableColumnDirective(templateRef, viewContainerRef, dgColumn) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.dgColumn = dgColumn;
        this.columnId = dgColumn.columnId;
        // Use the templateRef to create this view
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        // Create instance of the utility class DatagridHideableColumn.
        // Note this is on the parent instance of DatagridColumn.
        this.dgColumn.hideable = new __WEBPACK_IMPORTED_MODULE_2__datagrid_hideable_column__["a" /* DatagridHideableColumn */](this.templateRef, this.columnId, this._hidden);
    }
    Object.defineProperty(DatagridHideableColumnDirective.prototype, "clrDgHideableColumn", {
        /**
         * @function clrDgHideableColumn
         *
         * @description
         * Setter fn for the @Input with the same name as this structural directive.
         * It allows the user to pre-configure the column's hide/show state. { hidden: true }
         * It's more verbose but has more Clarity.
         *
         * @default false
         *
         * @type object
         *
         * @example
         * *clrDgHideableColumn
         * *clrDgHideableColumn={hidden: false}
         * *clrDgHideableColumn={hidden: true}
         *
         * @param value
         *
         */
        set: function (value) {
            this._hidden = (value && value.hidden) ? value.hidden : false;
            if (this.dgColumn.hideable) {
                this.dgColumn.hideable.hidden = (value && value.hidden) ? value.hidden : false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return DatagridHideableColumnDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgHideableColumn"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatagridHideableColumnDirective.prototype, "clrDgHideableColumn", null);
DatagridHideableColumnDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrDgHideableColumn]" })
    /**
     * @class DatagridHideableColumnDirective
     *
     * @description
     * A structural directive meant to be used inside a clr-dg-column component.
     *
     * <clr-dg-column>
     *       <ng-container *clrDgHideableColumn="{ hidden: true }">
     *           User ID
     *       </ng-container>
     *   </clr-dg-column>
     *
     * It sets up state and properties so that columns can be manges for hide/show by a service and an internal
     * datagrid toggle component.
     *
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__datagrid_column__["a" /* DatagridColumn */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datagrid_column__["a" /* DatagridColumn */]) === "function" && _c || Object])
], DatagridHideableColumnDirective);

var _a, _b, _c;
//# sourceMappingURL=datagrid-hidable-column.directive.js.map

/***/ }),
/* 883 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_page__ = __webpack_require__(817);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridPagination; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var DatagridPagination = (function () {
    function DatagridPagination(page) {
        this.page = page;
        this.currentChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /*
         * Default page size is 10.
         * The reason we set it in this constructor and not in the provider itself is because
         * we don't want pagination (page size 0) if this component isn't present in the datagrid.
         */
        page.size = 10;
    }
    /**********
     * Subscription to the Page service for page changes.
     * Note: this only emits after the datagrid is initialized/stabalized and the page changes.
     */
    DatagridPagination.prototype.ngOnInit = function () {
        var _this = this;
        this._pageSubscription = this.page.change.subscribe(function (current) { return _this.currentChanged.emit(current); });
    };
    DatagridPagination.prototype.ngOnDestroy = function () {
        this._pageSubscription.unsubscribe();
    };
    Object.defineProperty(DatagridPagination.prototype, "pageSize", {
        /**
         * Page size
         */
        get: function () {
            return this.page.size;
        },
        set: function (size) {
            if (typeof size === "number") {
                this.page.size = size;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridPagination.prototype, "totalItems", {
        /**
         * Total items (needed to guess the last page)
         */
        get: function () {
            return this.page.totalItems;
        },
        set: function (total) {
            if (typeof total === "number") {
                this.page.totalItems = total;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridPagination.prototype, "lastPage", {
        /**
         * Last page
         */
        get: function () {
            return this.page.last;
        },
        set: function (last) {
            if (typeof last === "number") {
                this.page.last = last;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridPagination.prototype, "currentPage", {
        /**
         * Current page
         */
        get: function () {
            return this.page.current;
        },
        set: function (page) {
            if (typeof page === "number") {
                this.page.current = page;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves to the previous page if it exists
     */
    DatagridPagination.prototype.previous = function () {
        this.page.previous();
    };
    /**
     * Moves to the next page if it exists
     */
    DatagridPagination.prototype.next = function () {
        this.page.next();
    };
    Object.defineProperty(DatagridPagination.prototype, "firstItem", {
        /**
         * Index of the first item displayed on the current page, starting at 0
         */
        get: function () {
            return this.page.firstItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridPagination.prototype, "lastItem", {
        /**
         * Index of the last item displayed on the current page, starting at 0
         */
        get: function () {
            return this.page.lastItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridPagination.prototype, "middlePages", {
        /**
         * Conditionally adds page numbers before and after the current page
         * @returns {number[]}
         */
        get: function () {
            var middlePages = [];
            if (this.page.current > 1) {
                middlePages.push(this.page.current - 1);
            }
            middlePages.push(this.page.current);
            if (this.page.current < this.page.last) {
                middlePages.push(this.page.current + 1);
            }
            return middlePages;
        },
        enumerable: true,
        configurable: true
    });
    return DatagridPagination;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgPageSize"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DatagridPagination.prototype, "pageSize", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgTotalItems"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DatagridPagination.prototype, "totalItems", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgLastPage"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DatagridPagination.prototype, "lastPage", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgPage"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DatagridPagination.prototype, "currentPage", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgPageChange"),
    __metadata("design:type", Object)
], DatagridPagination.prototype, "currentChanged", void 0);
DatagridPagination = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-pagination",
        template: "\n        <ul class=\"pagination\" *ngIf=\"page.last > 1\">\n            <li *ngIf=\"page.current > 1\">\n                <button \n                    class=\"pagination-previous\" \n                    (click)=\"page.previous()\"\n                    type=\"button\"></button>\n            </li>\n            <li *ngIf=\"page.current > 2\">\n                <button (click)=\"page.current = 1\" type=\"button\">1</button>\n            </li>\n            <li *ngIf=\"page.current > 3\">...</li>\n            <li *ngFor=\"let pageNum of middlePages\" [class.pagination-current]=\"pageNum === page.current\">\n                <button \n                    *ngIf=\"pageNum !== page.current; else noButton\" \n                    (click)=\"page.current = pageNum\"\n                    type=\"button\">{{pageNum}}</button>\n                <ng-template #noButton>{{pageNum}}</ng-template>\n            </li>\n            <li *ngIf=\"page.current < page.last - 2\">...</li>\n            <li *ngIf=\"page.current < page.last - 1\">\n                <button \n                    (click)=\"page.current = page.last\"\n                    type=\"button\">{{page.last}}</button>\n            </li>\n            <li *ngIf=\"page.current < page.last\">\n                <button \n                    class=\"pagination-next\" \n                    (click)=\"page.next()\"\n                    type=\"button\"></button>\n            </li>\n        </ul>\n    ",
        // IE10 comes to pollute even our components declaration
        styles: [":host { display: block; }"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_page__["a" /* Page */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_page__["a" /* Page */]) === "function" && _a || Object])
], DatagridPagination);

var _a;
//# sourceMappingURL=datagrid-pagination.js.map

/***/ }),
/* 884 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datagrid_cell__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hideable_column_service__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_row_action_service__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_selection__ = __webpack_require__(829);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridRowDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */






/**
 * Generic bland container serving various purposes for Datagrid.
 * For instance, it can help span a text over multiple rows in detail view.
 */
var DatagridRowDetail = (function () {
    function DatagridRowDetail(selection, rowActionService, expand, hideableColumnService) {
        this.selection = selection;
        this.rowActionService = rowActionService;
        this.expand = expand;
        this.hideableColumnService = hideableColumnService;
        /* reference to the enum so that template can access it */
        this.SELECTION_TYPE = __WEBPACK_IMPORTED_MODULE_5__providers_selection__["a" /* SelectionType */];
    }
    Object.defineProperty(DatagridRowDetail.prototype, "replace", {
        get: function () {
            return this.expand.replace;
        },
        set: function (value) {
            this.expand.replace = !!value;
        },
        enumerable: true,
        configurable: true
    });
    DatagridRowDetail.prototype.ngAfterContentInit = function () {
        var _this = this;
        var columnsList = this.hideableColumnService.getColumns();
        this.updateCellsForColumns(columnsList);
        // Triggered when the Cells list changes per row-renderer
        this.cells.changes.subscribe(function (cellList) {
            var columnList = _this.hideableColumnService.getColumns();
            if (cellList.length === columnList.length) {
                _this.updateCellsForColumns(columnList);
            }
        });
        // Used to set things up the first time but only after all the columns are ready.
        this.subscription = this.hideableColumnService.columnListChange.subscribe(function (columnList) {
            // Prevents cell updates when cols and cells array are not aligned
            if (columnList.length === _this.cells.length) {
                _this.updateCellsForColumns(columnList);
            }
        });
    };
    DatagridRowDetail.prototype.updateCellsForColumns = function (columnList) {
        this.cells.forEach(function (cell, index) {
            var currentColumn = columnList[index]; // Accounts for null space.
            if (currentColumn) {
                cell.id = currentColumn.id;
            }
        });
    };
    DatagridRowDetail.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DatagridRowDetail;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__datagrid_cell__["a" /* DatagridCell */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _a || Object)
], DatagridRowDetail.prototype, "cells", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgReplace"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DatagridRowDetail.prototype, "replace", null);
DatagridRowDetail = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-row-detail",
        template: "\n        <ng-container *ngIf=\"!replace\">\n            <clr-dg-cell class=\"datagrid-fixed-column\"\n                *ngIf=\"selection.selectionType === SELECTION_TYPE.Multi \n                    || selection.selectionType === SELECTION_TYPE.Single\"></clr-dg-cell>\n            <clr-dg-cell *ngIf=\"rowActionService.hasActionableRow\" class=\"datagrid-fixed-column\"></clr-dg-cell>\n            <clr-dg-cell class=\"datagrid-fixed-column\"></clr-dg-cell>\n        </ng-container>\n        <ng-content></ng-content>\n    ",
        host: {
            "[class.datagrid-row-flex]": "true",
            "[class.datagrid-row-detail]": "!replace",
            "[class.datagrid-container]": "cells.length === 0",
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_selection__["b" /* Selection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_selection__["b" /* Selection */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_row_action_service__["a" /* RowActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_row_action_service__["a" /* RowActionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__["a" /* Expand */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__["a" /* Expand */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_hideable_column_service__["a" /* HideableColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_hideable_column_service__["a" /* HideableColumnService */]) === "function" && _e || Object])
], DatagridRowDetail);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=datagrid-row-detail.js.map

/***/ }),
/* 885 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_forms_module__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_common_popover_module__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_expand_if_expand_module__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_loading_loading_module__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_outside_click_outside_click_module__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__(887);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrDatagridModule; });
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










var ClrDatagridModule = (function () {
    function ClrDatagridModule() {
    }
    return ClrDatagridModule;
}());
ClrDatagridModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_3__forms_forms_module__["a" /* ClrFormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__popover_common_popover_module__["a" /* ClrCommonPopoverModule */], __WEBPACK_IMPORTED_MODULE_7__utils_loading_loading_module__["a" /* ClrLoadingModule */],
            __WEBPACK_IMPORTED_MODULE_8__utils_outside_click_outside_click_module__["a" /* ClrOutsideClickModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__index__["DATAGRID_DIRECTIVES"],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_9__index__["DATAGRID_DIRECTIVES"], __WEBPACK_IMPORTED_MODULE_6__utils_expand_if_expand_module__["a" /* ClrIfExpandModule */]]
    })
], ClrDatagridModule);

//# sourceMappingURL=datagrid.module.js.map

/***/ }),
/* 886 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__built_in_comparators_datagrid_property_comparator__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__built_in_filters_datagrid_property_string_filter__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__built_in_filters_datagrid_string_filter_impl__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datagrid_column__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datagrid_items__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datagrid_placeholder__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datagrid_row__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_filters__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_expandable_rows__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_hideable_column_service__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_items__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_page__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_row_action_service__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_selection__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_sort__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__render_render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datagrid; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

















var Datagrid = (function () {
    function Datagrid(columnService, filters, organizer, page, sort, items, expandableRows, selection, rowActionService) {
        this.columnService = columnService;
        this.filters = filters;
        this.organizer = organizer;
        this.page = page;
        this.sort = sort;
        this.items = items;
        this.expandableRows = expandableRows;
        this.selection = selection;
        this.rowActionService = rowActionService;
        /* reference to the enum so that template can access */
        this.SELECTION_TYPE = __WEBPACK_IMPORTED_MODULE_14__providers_selection__["a" /* SelectionType */];
        /**
         * Output emitted whenever the data needs to be refreshed, based on user action or external ones
         */
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this.selectedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this.singleSelectedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * Subscriptions to all the services and queries changes
         */
        this._subscriptions = [];
    }
    Object.defineProperty(Datagrid.prototype, "loading", {
        /**
         * Freezes the datagrid while data is loading
         */
        get: function () {
            return this.items.loading;
        },
        set: function (value) {
            this.items.loading = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Emits a State output to ask for the data to be refreshed
     */
    Datagrid.prototype.triggerRefresh = function () {
        var state = {};
        if (this.page.size > 0) {
            state.page = { from: this.page.firstItem, to: this.page.lastItem, size: this.page.size };
        }
        if (this.sort.comparator) {
            if (this.sort.comparator instanceof __WEBPACK_IMPORTED_MODULE_1__built_in_comparators_datagrid_property_comparator__["a" /* DatagridPropertyComparator */]) {
                /*
                 * Special case for the default object property comparator,
                 * we give the property name instead of the actual comparator.
                 */
                state.sort = { by: this.sort.comparator.prop, reverse: this.sort.reverse };
            }
            else {
                state.sort = { by: this.sort.comparator, reverse: this.sort.reverse };
            }
        }
        var activeFilters = this.filters.getActiveFilters();
        if (activeFilters.length > 0) {
            state.filters = [];
            for (var _i = 0, activeFilters_1 = activeFilters; _i < activeFilters_1.length; _i++) {
                var filter = activeFilters_1[_i];
                if (filter instanceof __WEBPACK_IMPORTED_MODULE_3__built_in_filters_datagrid_string_filter_impl__["a" /* DatagridStringFilterImpl */]) {
                    var stringFilter = filter.filterFn;
                    if (stringFilter instanceof __WEBPACK_IMPORTED_MODULE_2__built_in_filters_datagrid_property_string_filter__["a" /* DatagridPropertyStringFilter */]) {
                        /*
                         * Special case again for the default object property filter,
                         * we give the property name instead of the full filter object.
                         */
                        state.filters.push({
                            property: stringFilter.prop,
                            value: filter.value
                        });
                        continue;
                    }
                }
                state.filters.push(filter);
            }
        }
        this.refresh.emit(state);
    };
    /**
     * Public method to re-trigger the computation of displayed items manually
     */
    Datagrid.prototype.dataChanged = function () {
        this.items.refresh();
    };
    Object.defineProperty(Datagrid.prototype, "selected", {
        /**
         * Array of all selected items
         */
        set: function (value) {
            if (value) {
                this.selection.selectionType = __WEBPACK_IMPORTED_MODULE_14__providers_selection__["a" /* SelectionType */].Multi;
            }
            else {
                this.selection.selectionType = __WEBPACK_IMPORTED_MODULE_14__providers_selection__["a" /* SelectionType */].None;
            }
            this.selection.current = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Datagrid.prototype, "singleSelected", {
        /**
         * Selected item in single-select mode
         */
        set: function (value) {
            this.selection.selectionType = __WEBPACK_IMPORTED_MODULE_14__providers_selection__["a" /* SelectionType */].Single;
            if (value) {
                this.selection.currentSingle = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Datagrid.prototype, "allSelected", {
        /**
         * Indicates if all currently displayed items are selected
         */
        get: function () {
            return this.selection.isAllSelected();
        },
        /**
         * Selects/deselects all currently displayed items
         * @param value
         */
        set: function (value) {
            /*
             * This is a setter but we ignore the value.
             * It's strange, but it lets us have an indeterminate state where only
             * some of the items are selected.
             */
            this.selection.toggleAll();
        },
        enumerable: true,
        configurable: true
    });
    Datagrid.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._subscriptions.push(this.rows.changes.subscribe(function () {
            if (!_this.items.smart) {
                _this.items.all = _this.rows.map(function (row) { return row.item; });
            }
        }));
        if (!this.items.smart) {
            this.items.all = this.rows.map(function (row) { return row.item; });
        }
        this._subscriptions.push(this.columns.changes.subscribe(function (columns) {
            _this.columnService.updateColumnList(_this.columns.map(function (col) { return col.hideable; }));
        }));
        // Get ColumnService ready for HideableColumns.
        this.columnService.updateColumnList(this.columns.map(function (col) { return col.hideable; }));
    };
    /**
     * Our setup happens in the view of some of our components, so we wait for it to be done before starting
     */
    Datagrid.prototype.ngAfterViewInit = function () {
        var _this = this;
        // TODO: determine if we can get rid of provider wiring in view init so that subscriptions can be done earlier
        this.triggerRefresh();
        this._subscriptions.push(this.sort.change.subscribe(function () { return _this.triggerRefresh(); }));
        this._subscriptions.push(this.filters.change.subscribe(function () { return _this.triggerRefresh(); }));
        this._subscriptions.push(this.page.change.subscribe(function () { return _this.triggerRefresh(); }));
        this._subscriptions.push(this.selection.change.subscribe(function (s) {
            if (_this.selection.selectionType === __WEBPACK_IMPORTED_MODULE_14__providers_selection__["a" /* SelectionType */].Single) {
                _this.singleSelectedChanged.emit(s);
            }
            else if (_this.selection.selectionType === __WEBPACK_IMPORTED_MODULE_14__providers_selection__["a" /* SelectionType */].Multi) {
                _this.selectedChanged.emit(s);
            }
        }));
    };
    Datagrid.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    Datagrid.prototype.resize = function () {
        this.organizer.resize();
    };
    return Datagrid;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgLoading"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Datagrid.prototype, "loading", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgRefresh"),
    __metadata("design:type", Object)
], Datagrid.prototype, "refresh", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_5__datagrid_items__["a" /* DatagridItems */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__datagrid_items__["a" /* DatagridItems */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__datagrid_items__["a" /* DatagridItems */]) === "function" && _a || Object)
], Datagrid.prototype, "iterator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgSelected"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Datagrid.prototype, "selected", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgSelectedChange"),
    __metadata("design:type", Object)
], Datagrid.prototype, "selectedChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDgSingleSelected"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Datagrid.prototype, "singleSelected", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgSingleSelectedChange"),
    __metadata("design:type", Object)
], Datagrid.prototype, "singleSelectedChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_6__datagrid_placeholder__["a" /* DatagridPlaceholder */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__datagrid_placeholder__["a" /* DatagridPlaceholder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__datagrid_placeholder__["a" /* DatagridPlaceholder */]) === "function" && _b || Object)
], Datagrid.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_4__datagrid_column__["a" /* DatagridColumn */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _c || Object)
], Datagrid.prototype, "columns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_7__datagrid_row__["a" /* DatagridRow */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _d || Object)
], Datagrid.prototype, "rows", void 0);
Datagrid = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-datagrid",
        template: __webpack_require__(1058),
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__providers_selection__["b" /* Selection */], __WEBPACK_IMPORTED_MODULE_15__providers_sort__["a" /* Sort */], __WEBPACK_IMPORTED_MODULE_8__providers_filters__["b" /* FiltersProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_page__["a" /* Page */], __WEBPACK_IMPORTED_MODULE_11__providers_items__["a" /* Items */], __WEBPACK_IMPORTED_MODULE_16__render_render_organizer__["a" /* DatagridRenderOrganizer */], __WEBPACK_IMPORTED_MODULE_13__providers_row_action_service__["a" /* RowActionService */], __WEBPACK_IMPORTED_MODULE_9__providers_global_expandable_rows__["a" /* ExpandableRowsCount */],
            __WEBPACK_IMPORTED_MODULE_10__providers_hideable_column_service__["a" /* HideableColumnService */]
        ],
        host: { "[class.datagrid-host]": "true" }
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__providers_hideable_column_service__["a" /* HideableColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_hideable_column_service__["a" /* HideableColumnService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__providers_filters__["b" /* FiltersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_filters__["b" /* FiltersProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_16__render_render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__render_render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__providers_page__["a" /* Page */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__providers_page__["a" /* Page */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_15__providers_sort__["a" /* Sort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__providers_sort__["a" /* Sort */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_11__providers_items__["a" /* Items */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_items__["a" /* Items */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__providers_global_expandable_rows__["a" /* ExpandableRowsCount */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_global_expandable_rows__["a" /* ExpandableRowsCount */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_14__providers_selection__["b" /* Selection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__providers_selection__["b" /* Selection */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_13__providers_row_action_service__["a" /* RowActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__providers_row_action_service__["a" /* RowActionService */]) === "function" && _o || Object])
], Datagrid);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=datagrid.js.map

/***/ }),
/* 887 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_hack_row_expand_animation__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__built_in_filters_datagrid_string_filter__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chocolate_actionable_oompa_loompa__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chocolate_datagrid_willy_wonka__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chocolate_expandable_oompa_loompa__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datagrid__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datagrid_action_bar__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datagrid_action_overflow__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datagrid_cell__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datagrid_column__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__datagrid_column_toggle__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__datagrid_detail_registerer__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datagrid_filter__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datagrid_footer__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datagrid_hidable_column_directive__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__datagrid_items__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__datagrid_pagination__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__datagrid_placeholder__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__datagrid_row__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__datagrid_row_detail__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__render_body_renderer__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__render_cell_renderer__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__render_column_resizer__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__render_head_renderer__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__render_header_renderer__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__render_main_renderer__ = __webpack_require__(994);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__render_row_master_renderer__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__render_row_renderer__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__render_table_renderer__ = __webpack_require__(997);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__interfaces_state__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__interfaces_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__interfaces_state__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__interfaces_sort_order__ = __webpack_require__(888);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__interfaces_filter__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__interfaces_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__interfaces_filter__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__interfaces_string_filter__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__interfaces_string_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__interfaces_string_filter__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__interfaces_comparator__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__interfaces_comparator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__interfaces_comparator__);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__built_in_filters_datagrid_property_string_filter__ = __webpack_require__(841);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__built_in_comparators_datagrid_property_comparator__ = __webpack_require__(840);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAGRID_DIRECTIVES", function() { return DATAGRID_DIRECTIVES; });



















































var DATAGRID_DIRECTIVES = [
    // Core
    __WEBPACK_IMPORTED_MODULE_5__datagrid__["a" /* Datagrid */], __WEBPACK_IMPORTED_MODULE_6__datagrid_action_bar__["a" /* DatagridActionBar */], __WEBPACK_IMPORTED_MODULE_7__datagrid_action_overflow__["a" /* DatagridActionOverflow */], __WEBPACK_IMPORTED_MODULE_9__datagrid_column__["a" /* DatagridColumn */], __WEBPACK_IMPORTED_MODULE_10__datagrid_column_toggle__["a" /* DatagridColumnToggle */],
    __WEBPACK_IMPORTED_MODULE_14__datagrid_hidable_column_directive__["a" /* DatagridHideableColumnDirective */], __WEBPACK_IMPORTED_MODULE_12__datagrid_filter__["a" /* DatagridFilter */], __WEBPACK_IMPORTED_MODULE_15__datagrid_items__["a" /* DatagridItems */], __WEBPACK_IMPORTED_MODULE_18__datagrid_row__["a" /* DatagridRow */], __WEBPACK_IMPORTED_MODULE_19__datagrid_row_detail__["a" /* DatagridRowDetail */],
    __WEBPACK_IMPORTED_MODULE_11__datagrid_detail_registerer__["a" /* DatagridDetailRegisterer */], __WEBPACK_IMPORTED_MODULE_8__datagrid_cell__["a" /* DatagridCell */], __WEBPACK_IMPORTED_MODULE_13__datagrid_footer__["a" /* DatagridFooter */], __WEBPACK_IMPORTED_MODULE_16__datagrid_pagination__["a" /* DatagridPagination */], __WEBPACK_IMPORTED_MODULE_17__datagrid_placeholder__["a" /* DatagridPlaceholder */],
    // Renderers
    __WEBPACK_IMPORTED_MODULE_25__render_main_renderer__["a" /* DatagridMainRenderer */], __WEBPACK_IMPORTED_MODULE_28__render_table_renderer__["a" /* DatagridTableRenderer */], __WEBPACK_IMPORTED_MODULE_23__render_head_renderer__["a" /* DatagridHeadRenderer */], __WEBPACK_IMPORTED_MODULE_24__render_header_renderer__["a" /* DatagridHeaderRenderer */], __WEBPACK_IMPORTED_MODULE_20__render_body_renderer__["a" /* DatagridBodyRenderer */],
    __WEBPACK_IMPORTED_MODULE_22__render_column_resizer__["a" /* DatagridColumnResizer */], __WEBPACK_IMPORTED_MODULE_27__render_row_renderer__["a" /* DatagridRowRenderer */], __WEBPACK_IMPORTED_MODULE_26__render_row_master_renderer__["a" /* DatagridRowMasterRenderer */], __WEBPACK_IMPORTED_MODULE_21__render_cell_renderer__["a" /* DatagridCellRenderer */],
    // Chocolate
    __WEBPACK_IMPORTED_MODULE_3__chocolate_datagrid_willy_wonka__["a" /* DatagridWillyWonka */], __WEBPACK_IMPORTED_MODULE_2__chocolate_actionable_oompa_loompa__["a" /* ActionableOompaLoompa */], __WEBPACK_IMPORTED_MODULE_4__chocolate_expandable_oompa_loompa__["a" /* ExpandableOompaLoompa */],
    // Animation hack
    __WEBPACK_IMPORTED_MODULE_0__animation_hack_row_expand_animation__["a" /* DatagridRowExpandAnimation */],
    // Built-in shortcuts
    __WEBPACK_IMPORTED_MODULE_1__built_in_filters_datagrid_string_filter__["a" /* DatagridStringFilter */]
];
//# sourceMappingURL=index.js.map

/***/ }),
/* 888 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortOrder; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Enumeration representing the sorting order of a datagrid column. It is a constant Enum,
 * i.e. each value needs to be treated as a `number`, starting at index 0.
 *
 * @export
 * @enum {number}
 */
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */ var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["Unsorted"] = 0] = "Unsorted";
    SortOrder[SortOrder["Asc"] = 1] = "Asc";
    SortOrder[SortOrder["Desc"] = -1] = "Desc";
})(SortOrder || (SortOrder = {}));
//# sourceMappingURL=sort-order.js.map

/***/ }),
/* 889 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDispatcher; });
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragDispatcher = (function () {
    function DragDispatcher(_ngZone, _renderer) {
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._onDragStart = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._onDragMove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._onDragEnd = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(DragDispatcher.prototype, "onDragStart", {
        get: function () {
            return this._onDragStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragDispatcher.prototype, "onDragMove", {
        get: function () {
            return this._onDragMove;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragDispatcher.prototype, "onDragEnd", {
        get: function () {
            return this._onDragEnd;
        },
        enumerable: true,
        configurable: true
    });
    DragDispatcher.prototype.addDragListener = function () {
        var handleEl = this.handleRef.nativeElement;
        this._listeners = [
            this.customDragEvent(handleEl, "mousedown", "mousemove", "mouseup"),
            this.customDragEvent(handleEl, "touchstart", "touchmove", "touchend")
        ];
    };
    DragDispatcher.prototype.customDragEvent = function (element, startOnEvent, moveOnEvent, endOnEvent) {
        var _this = this;
        var dragMoveListener;
        var dragEndListener;
        return this._renderer.listen(element, startOnEvent, function (startEvent) {
            _this.notifyDragStart(startEvent);
            dragMoveListener = _this._ngZone.runOutsideAngular(function () {
                return _this._renderer.listen("document", moveOnEvent, function (moveEvent) {
                    _this.notifyDragMove(moveEvent);
                });
            });
            dragEndListener = _this._renderer.listen("document", endOnEvent, function (endEvent) {
                // Unsubscribing from mouseMoveListener
                dragMoveListener();
                _this.notifyDragEnd(endEvent);
                // Unsubscribing from itself
                dragEndListener();
            });
        });
    };
    DragDispatcher.prototype.notifyDragStart = function (event) {
        return this._onDragStart.next(event);
    };
    DragDispatcher.prototype.notifyDragMove = function (event) {
        return this._onDragMove.next(event);
    };
    DragDispatcher.prototype.notifyDragEnd = function (event) {
        return this._onDragEnd.next(event);
    };
    DragDispatcher.prototype.destroy = function () {
        this._listeners.map(function (event) { return event(); });
    };
    return DragDispatcher;
}());
DragDispatcher = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _b || Object])
], DragDispatcher);

var _a, _b;
//# sourceMappingURL=drag-dispatcher.js.map

/***/ }),
/* 890 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridCellRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridCellRenderer = (function () {
    function DatagridCellRenderer(el, renderer, organizer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.subscription = organizer.clearWidths.subscribe(function () { return _this.clearWidth(); });
    }
    DatagridCellRenderer.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DatagridCellRenderer.prototype.clearWidth = function () {
        this.renderer.removeClass(this.el.nativeElement, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* STRICT_WIDTH_CLASS */]);
        this.renderer.setStyle(this.el.nativeElement, "width", null);
    };
    DatagridCellRenderer.prototype.setWidth = function (strict, value) {
        if (strict) {
            this.renderer.addClass(this.el.nativeElement, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* STRICT_WIDTH_CLASS */]);
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* STRICT_WIDTH_CLASS */]);
        }
        this.renderer.setStyle(this.el.nativeElement, "width", value + "px");
    };
    return DatagridCellRenderer;
}());
DatagridCellRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-dg-cell" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _c || Object])
], DatagridCellRenderer);

var _a, _b, _c;
//# sourceMappingURL=cell-renderer.js.map

/***/ }),
/* 891 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_drag_dispatcher__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_adapter__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridColumnResizer; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatagridColumnResizer = (function () {
    function DatagridColumnResizer(el, renderer, organizer, domAdapter, dragDispatcher) {
        this.el = el;
        this.renderer = renderer;
        this.organizer = organizer;
        this.domAdapter = domAdapter;
        this.dragDispatcher = dragDispatcher;
        this.columnResizeBy = 0;
        this.dragWithinMinWidth = false;
        this.resizeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.subscriptions = [];
        this.columnEl = el.nativeElement;
    }
    DatagridColumnResizer.prototype.ngOnDestroy = function () {
        this.dragDispatcher.destroy();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    DatagridColumnResizer.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.columnMinWidth = this.domAdapter.minWidth(this.columnEl);
        this.handleTrackerEl = this.dragDispatcher.handleTrackerRef.nativeElement;
        this.dragDispatcher.addDragListener();
        this.subscriptions.push(this.dragDispatcher.onDragStart.subscribe(function () { return _this.dragStartHandler(); }));
        this.subscriptions.push(this.dragDispatcher.onDragMove.subscribe(function ($event) { return _this.dragMoveHandler($event); }));
        this.subscriptions.push(this.dragDispatcher.onDragEnd.subscribe(function () { return _this.dragEndHandler(); }));
    };
    DatagridColumnResizer.prototype.dragStartHandler = function () {
        this.renderer.setStyle(this.handleTrackerEl, "display", "block");
        this.renderer.setStyle(document.body, "cursor", "col-resize");
        this.dragDistancePositionX = 0;
        this.columnRectWidth = this.domAdapter.clientRectWidth(this.columnEl);
        this.pageStartPositionX = this.domAdapter.clientRectRight(this.columnEl);
    };
    DatagridColumnResizer.prototype.dragMoveHandler = function (moveEvent) {
        var pageMovePosition = moveEvent.pageX || moveEvent.changedTouches[0].pageX;
        this.dragDistancePositionX = this.getPositionWithinMax(pageMovePosition - this.pageStartPositionX);
        this.renderer.setStyle(this.handleTrackerEl, "right", -1 * this.dragDistancePositionX + "px");
    };
    DatagridColumnResizer.prototype.dragEndHandler = function () {
        this.renderer.setStyle(this.handleTrackerEl, "right", "0px");
        this.renderer.setStyle(this.handleTrackerEl, "display", "none");
        this.renderer.setStyle(document.body, "cursor", "auto");
        if (this.dragDistancePositionX) {
            this.columnResizeBy = this.dragDistancePositionX;
            this.resizeEmitter.emit(this.columnRectWidth + this.columnResizeBy);
            this.organizer.resize();
        }
    };
    DatagridColumnResizer.prototype.getPositionWithinMax = function (draggedDistance) {
        if (draggedDistance < 0) {
            if (Math.abs(draggedDistance) < this.columnRectWidth - this.columnMinWidth) {
                if (this.dragWithinMinWidth) {
                    this.dragWithinMinWidth = false;
                    this.renderer.removeClass(this.handleTrackerEl, "exceeded-max");
                }
                return draggedDistance;
            }
            else {
                if (!this.dragWithinMinWidth) {
                    this.dragWithinMinWidth = true;
                    this.renderer.addClass(this.handleTrackerEl, "exceeded-max");
                }
                return this.columnMinWidth - this.columnRectWidth;
            }
        }
        else {
            if (this.dragWithinMinWidth) {
                this.dragWithinMinWidth = false;
                this.renderer.removeClass(this.handleTrackerEl, "exceeded-max");
            }
            return draggedDistance;
        }
    };
    return DatagridColumnResizer;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrDgColumnResize"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], DatagridColumnResizer.prototype, "resizeEmitter", void 0);
DatagridColumnResizer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-dg-column", providers: [__WEBPACK_IMPORTED_MODULE_1__providers_drag_dispatcher__["a" /* DragDispatcher */]] }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__dom_adapter__["a" /* DomAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_adapter__["a" /* DomAdapter */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__providers_drag_dispatcher__["a" /* DragDispatcher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_drag_dispatcher__["a" /* DragDispatcher */]) === "function" && _f || Object])
], DatagridColumnResizer);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=column-resizer.js.map

/***/ }),
/* 892 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_resizer__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_adapter__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridHeaderRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */





var DatagridHeaderRenderer = (function () {
    function DatagridHeaderRenderer(el, renderer, organizer, domAdapter, columnResizer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.organizer = organizer;
        this.domAdapter = domAdapter;
        this.columnResizer = columnResizer;
        this.widthSet = false;
        this.subscription = organizer.clearWidths.subscribe(function () { return _this.clearWidth(); });
    }
    DatagridHeaderRenderer.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DatagridHeaderRenderer.prototype.clearWidth = function () {
        // remove the width only if we set it, and it is not changed by dragging.
        if (this.widthSet && !this.columnResizer.columnResizeBy) {
            this.renderer.setStyle(this.el.nativeElement, "width", null);
        }
        var strictWidth = this.domAdapter.userDefinedWidth(this.el.nativeElement);
        if (this.columnResizer.columnResizeBy) {
            strictWidth = this.columnResizer.columnRectWidth + this.columnResizer.columnResizeBy;
        }
        if (strictWidth) {
            this.strictWidth = strictWidth;
        }
        else {
            delete this.strictWidth;
        }
    };
    DatagridHeaderRenderer.prototype.computeWidth = function () {
        var width = this.strictWidth;
        if (!!width) {
            this.renderer.addClass(this.el.nativeElement, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* STRICT_WIDTH_CLASS */]);
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* STRICT_WIDTH_CLASS */]);
        }
        if (this.columnResizer.columnResizeBy) {
            this.renderer.setStyle(this.el.nativeElement, "width", width + "px");
            this.columnResizer.columnResizeBy = 0;
            this.widthSet = false;
        }
        if (!width) {
            width = this.domAdapter.scrollWidth(this.el.nativeElement);
            this.renderer.setStyle(this.el.nativeElement, "width", width + "px");
            this.widthSet = true;
        }
        return width;
    };
    return DatagridHeaderRenderer;
}());
DatagridHeaderRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-dg-column" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__dom_adapter__["a" /* DomAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dom_adapter__["a" /* DomAdapter */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__column_resizer__["a" /* DatagridColumnResizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__column_resizer__["a" /* DatagridColumnResizer */]) === "function" && _e || Object])
], DatagridHeaderRenderer);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=header-renderer.js.map

/***/ }),
/* 893 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stack_block__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stack_header__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stack_input__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stack_select__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stack_view__ = __webpack_require__(819);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STACK_VIEW_DIRECTIVES; });










var STACK_VIEW_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_4__stack_view__["a" /* StackView */], __WEBPACK_IMPORTED_MODULE_1__stack_header__["a" /* StackHeader */], __WEBPACK_IMPORTED_MODULE_0__stack_block__["a" /* StackBlock */], __WEBPACK_IMPORTED_MODULE_4__stack_view__["b" /* StackViewCustomTags */],
    /**
     * Undocumented experimental feature: inline editing.
     */
    __WEBPACK_IMPORTED_MODULE_2__stack_input__["a" /* StackInput */], __WEBPACK_IMPORTED_MODULE_3__stack_select__["a" /* StackSelect */]
    /**
     * End of undocumented experimental feature.
     */
];
//# sourceMappingURL=index.js.map

/***/ }),
/* 894 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackBlock; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var StackBlock = (function () {
    /*
     * This would be more efficient with @ContentChildren, with the parent StackBlock
     * querying for children StackBlocks, but this feature is not available when downgrading
     * the component for Angular 1.
     */
    function StackBlock(parent) {
        this.parent = parent;
        this.expanded = false;
        this.expandedChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */](false);
        this.expandable = false;
        this._changedChildren = 0;
        this._fullyInitialized = false;
        this._changed = false;
        if (parent) {
            parent.addChild();
        }
    }
    Object.defineProperty(StackBlock.prototype, "getChangedValue", {
        get: function () {
            return this._changed || (this._changedChildren > 0 && !this.expanded);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackBlock.prototype, "setChangedValue", {
        set: function (value) {
            this._changed = value;
            if (this.parent && this._fullyInitialized) {
                if (value) {
                    this.parent._changedChildren++;
                }
                else {
                    this.parent._changedChildren--;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    StackBlock.prototype.ngOnInit = function () {
        // in order to access the parent StackBlock's properties,
        // the child StackBlock  has to be fully initialized at first.
        this._fullyInitialized = true;
    };
    StackBlock.prototype.addChild = function () {
        this.expandable = true;
    };
    StackBlock.prototype.toggleExpand = function () {
        if (this.expandable) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    };
    return StackBlock;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* HostBinding */])("class.stack-block-expanded"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrSbExpanded"),
    __metadata("design:type", Boolean)
], StackBlock.prototype, "expanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])("clrSbExpandedChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], StackBlock.prototype, "expandedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* HostBinding */])("class.stack-block-expandable"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrSbExpandable"),
    __metadata("design:type", Boolean)
], StackBlock.prototype, "expandable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* HostBinding */])("class.stack-block-changed"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], StackBlock.prototype, "getChangedValue", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrSbNotifyChange"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], StackBlock.prototype, "setChangedValue", null);
StackBlock = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
        selector: "clr-stack-block",
        template: "\n        <dt class=\"stack-block-label\" (click)=\"toggleExpand()\">\n            <ng-content select=\"clr-stack-label\"></ng-content>\n        </dt>\n        <dd class=\"stack-block-content\">\n            <ng-content></ng-content>\n        </dd>\n        <!-- FIXME: remove this string concatenation when boolean states are supported -->\n        <div [@collapse]=\"''+!expanded\" class=\"stack-children\">\n            <ng-content select=\"clr-stack-block\"></ng-content>\n        </div>\n    ",
        // Custom elements are inline by default
        styles: ["\n        :host { display: block; }\n    "],
        // Make sure the host has the proper class for styling purposes
        host: { "[class.stack-block]": "true" },
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* trigger */])("collapse", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])("true", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": 0, "overflow-y": "hidden" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("true => false", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": "*", "overflow-y": "hidden" }))]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("false => true", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": "*", "overflow-y": "hidden" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out")])
            ])]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* SkipSelf */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Optional */])()),
    __metadata("design:paramtypes", [StackBlock])
], StackBlock);

var _a;
//# sourceMappingURL=stack-block.js.map

/***/ }),
/* 895 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackControl; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 */

var StackControl = (function () {
    function StackControl(stackView) {
        var _this = this;
        this.stackView = stackView;
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        // Make the StackView editable, since it contains a StackControl
        this.stackView.editable = true;
        this.stackView.editingChange.subscribe(function (editing) {
            // Edit mode was closed
            if (!editing) {
                _this.modelChange.emit(_this.model);
            }
        });
    }
    return StackControl;
}());

//# sourceMappingURL=stack-control.js.map

/***/ }),
/* 896 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stack_view__ = __webpack_require__(819);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackHeader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var StackHeader = (function () {
    function StackHeader(stackView) {
        this.stackView = stackView;
    }
    return StackHeader;
}());
StackHeader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-stack-header",
        template: "\n        <h4 class=\"stack-header\">\n            <span class=\"stack-title\"><ng-content></ng-content></span>\n            \n            <span class=\"stack-actions\">\n                <ng-content select=\".stack-action\"></ng-content>\n                <!-- Undocumented experimental feature: inline editing. -->\n                <button *ngIf=\"stackView.editable\" class=\"stack-action btn btn-sm btn-link\" \n                        (click)=\"stackView.editing = !stackView.editing\" type=\"button\">\n                        Edit\n                </button>\n                <!-- End of undocumented experimental feature. -->\n            </span>\n        </h4>\n    ",
        // Custom elements are inline by default
        styles: ["\n        :host { display: block; }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stack_view__["a" /* StackView */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stack_view__["a" /* StackView */]) === "function" && _a || Object])
], StackHeader);

var _a;
//# sourceMappingURL=stack-header.js.map

/***/ }),
/* 897 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stack_control__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stack_view__ = __webpack_require__(819);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackInput; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 *
 * TODO: support more types of inputs: checkbox, radio, ...
 * TODO: Mirror input attributes from the host to the actual input: size, min, max, placeholder, ...
 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StackInput = (function (_super) {
    __extends(StackInput, _super);
    function StackInput(stackView) {
        var _this = _super.call(this, stackView) || this;
        _this.stackView = stackView;
        _this.type = "text";
        return _this;
    }
    return StackInput;
}(__WEBPACK_IMPORTED_MODULE_1__stack_control__["a" /* StackControl */]));
StackInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-stack-input",
        inputs: ["model: clrModel", "type"],
        outputs: ["modelChange: clrModelChange"],
        template: "\n        <span *ngIf=\"!stackView.editing\">{{model}}</span>\n        <input [type]=\"type\" *ngIf=\"stackView.editing\" [(ngModel)]=\"model\"/>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__stack_view__["a" /* StackView */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stack_view__["a" /* StackView */]) === "function" && _a || Object])
], StackInput);

var _a;
//# sourceMappingURL=stack-input.js.map

/***/ }),
/* 898 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stack_control__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stack_view__ = __webpack_require__(819);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackSelect; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 *
 * TODO: Offer a a way to customize the value displayed, plain value may be unreadable.
 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StackSelect = (function (_super) {
    __extends(StackSelect, _super);
    function StackSelect(stackView) {
        var _this = _super.call(this, stackView) || this;
        _this.stackView = stackView;
        return _this;
    }
    return StackSelect;
}(__WEBPACK_IMPORTED_MODULE_1__stack_control__["a" /* StackControl */]));
StackSelect = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-stack-select",
        inputs: ["model: clrModel"],
        outputs: ["modelChange: clrModelChange"],
        template: "\n        <span *ngIf=\"!stackView.editing\">{{model}}</span>\n        <div class=\"select\" *ngIf=\"stackView.editing\" >\n            <select [(ngModel)]=\"model\">\n                <ng-content></ng-content>\n            </select>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__stack_view__["a" /* StackView */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stack_view__["a" /* StackView */]) === "function" && _a || Object])
], StackSelect);

var _a;
//# sourceMappingURL=stack-select.js.map

/***/ }),
/* 899 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(893);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrStackViewModule; });
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




var ClrStackViewModule = (function () {
    function ClrStackViewModule() {
    }
    return ClrStackViewModule;
}());
ClrStackViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* STACK_VIEW_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* STACK_VIEW_DIRECTIVES */]] })
], ClrStackViewModule);

//# sourceMappingURL=stack-view.module.js.map

/***/ }),
/* 900 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_node__ = __webpack_require__(902);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TREE_VIEW_DIRECTIVES; });


var TREE_VIEW_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__tree_node__["a" /* TreeNode */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 901 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeSelectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var TreeSelectionService = (function () {
    function TreeSelectionService() {
        this.selectable = false;
    }
    return TreeSelectionService;
}());
TreeSelectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], TreeSelectionService);

//# sourceMappingURL=tree-selection.service.js.map

/***/ }),
/* 902 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_loading_loading_listener__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_tree_selection__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tree_selection_provider__ = __webpack_require__(999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tree_selection_service__ = __webpack_require__(901);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNode; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TreeNode = (function (_super) {
    __extends(TreeNode, _super);
    function TreeNode(nodeExpand, parent, treeSelectionService) {
        var _this = _super.call(this, parent) || this;
        _this.nodeExpand = nodeExpand;
        _this.parent = parent;
        _this.treeSelectionService = treeSelectionService;
        _this._children = [];
        _this.nodeSelectedChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */](true);
        _this.nodeIndeterminateChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */](true);
        if (_this.parent) {
            _this.parent.register(_this);
        }
        return _this;
    }
    Object.defineProperty(TreeNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    /* Registration */
    TreeNode.prototype.checkIfChildNodeRegistered = function (node) {
        return (this.children.indexOf(node) > -1);
    };
    // TODO: This should ideally be in AbstractTreeSelection
    // Tried doing this but ran into some issues and also ran out of time.
    // Will get this done later.
    TreeNode.prototype.register = function (node) {
        if (!this.checkIfChildNodeRegistered(node)) {
            this.children.push(node);
            if (this.selectable) {
                if (this.selected) {
                    node.parentChanged(this.selected);
                }
            }
        }
    };
    // TODO: This should ideally be in AbstractTreeSelection
    // Tried doing this but ran into some issues and also ran out of time.
    // Will get this done later.
    TreeNode.prototype.unregister = function (node) {
        var index = this.children.indexOf(node);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    };
    /* Selection */
    TreeNode.prototype.activateSelection = function () {
        if (this.treeSelectionService && !this.treeSelectionService.selectable) {
            this.treeSelectionService.selectable = true;
        }
    };
    Object.defineProperty(TreeNode.prototype, "nodeSelected", {
        set: function (value) {
            // required for recursive trees to discard unset inputs.
            this.activateSelection();
            if (value === undefined || value === null) {
                return;
            }
            if (this.selected !== value) {
                this.selected = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.selectedChanged = function () {
        this.nodeSelectedChange.emit(this.selected);
    };
    Object.defineProperty(TreeNode.prototype, "selectable", {
        get: function () {
            if (this.treeSelectionService) {
                return this.treeSelectionService.selectable;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "nodeIndeterminate", {
        set: function (value) {
            this.indeterminate = value;
            this.activateSelection();
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.indeterminateChanged = function () {
        this.nodeIndeterminateChanged.emit(this.indeterminate);
    };
    /* Expansion */
    TreeNode.prototype.toggleExpand = function () {
        this.nodeExpand.expanded = !this.nodeExpand.expanded;
    };
    Object.defineProperty(TreeNode.prototype, "caretDirection", {
        get: function () {
            return (this.nodeExpand.expanded) ? "down" : "right";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "expanded", {
        get: function () {
            return this.nodeExpand.expanded;
        },
        set: function (value) {
            value = !!value;
            if (this.nodeExpand.expanded !== value) {
                this.nodeExpand.expanded = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "state", {
        get: function () {
            return (this.expanded && !this.nodeExpand.loading) ? "expanded" : "collapsed";
        },
        enumerable: true,
        configurable: true
    });
    /* Lifecycle */
    TreeNode.prototype.ngOnDestroy = function () {
        if (this.parent) {
            this.parent.unregister(this);
        }
    };
    return TreeNode;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_tree_selection__["a" /* AbstractTreeSelection */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrSelected"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TreeNode.prototype, "nodeSelected", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])("clrSelectedChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], TreeNode.prototype, "nodeSelectedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrIndeterminate"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TreeNode.prototype, "nodeIndeterminate", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])("clrIndeterminateChange"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], TreeNode.prototype, "nodeIndeterminateChanged", void 0);
TreeNode = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
        selector: "clr-tree-node",
        template: __webpack_require__(1059),
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__["a" /* Expand */], { provide: __WEBPACK_IMPORTED_MODULE_3__utils_loading_loading_listener__["a" /* LoadingListener */], useExisting: __WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__["a" /* Expand */] }, {
                provide: __WEBPACK_IMPORTED_MODULE_6__providers_tree_selection_service__["a" /* TreeSelectionService */],
                useFactory: __WEBPACK_IMPORTED_MODULE_5__providers_tree_selection_provider__["a" /* clrTreeSelectionProviderFactory */],
                deps: [[new __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* SkipSelf */](), __WEBPACK_IMPORTED_MODULE_6__providers_tree_selection_service__["a" /* TreeSelectionService */]]]
            }
        ],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* trigger */])("childNodesState", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])("expanded", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": "*", "overflow-y": "hidden" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])("collapsed", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": 0, "overflow-y": "hidden" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("expanded <=> collapsed", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out"))
            ])]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* SkipSelf */])()),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__["a" /* Expand */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__["a" /* Expand */]) === "function" && _c || Object, TreeNode, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_tree_selection_service__["a" /* TreeSelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_tree_selection_service__["a" /* TreeSelectionService */]) === "function" && _d || Object])
], TreeNode);

var _a, _b, _c, _d;
//# sourceMappingURL=tree-node.js.map

/***/ }),
/* 903 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_forms_module__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_expand_if_expand_module__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(900);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrTreeViewModule; });
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







var ClrTreeViewModule = (function () {
    function ClrTreeViewModule() {
    }
    return ClrTreeViewModule;
}());
ClrTreeViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__forms_forms_module__["a" /* ClrFormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__index__["a" /* TREE_VIEW_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__index__["a" /* TREE_VIEW_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_5__utils_expand_if_expand_module__["a" /* ClrIfExpandModule */]]
    })
], ClrTreeViewModule);

//# sourceMappingURL=tree-view.module.js.map

/***/ }),
/* 904 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_icon_and_types_service__ = __webpack_require__(907);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertItem; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertItem = (function () {
    function AlertItem(iconService) {
        this.iconService = iconService;
    }
    return AlertItem;
}());
AlertItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        // the .alert-item selector is deprecated; the :not clause is to allow us to use static
        // examples in demos on the demo-app and website
        selector: ".alert-item:not(.static), clr-alert-item",
        template: "\n        <div class=\"alert-icon-wrapper\">\n            <clr-icon class=\"alert-icon\" [attr.shape]=\"iconService.alertIconShape\"></clr-icon>\n        </div>\n        <ng-content></ng-content>\n    ",
        host: { "class": "alert-item" }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_icon_and_types_service__["a" /* AlertIconAndTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_icon_and_types_service__["a" /* AlertIconAndTypesService */]) === "function" && _a || Object])
], AlertItem);

var _a;
//# sourceMappingURL=alert-item.js.map

/***/ }),
/* 905 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_icon_and_types_service__ = __webpack_require__(907);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// providers

var Alert = (function () {
    function Alert(iconService) {
        this.iconService = iconService;
        this.isSmall = false;
        this.closable = true;
        this.isAppLevel = false;
        this._closed = false;
        this._closedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
    }
    Object.defineProperty(Alert.prototype, "alertType", {
        get: function () {
            return this.iconService.alertType;
        },
        set: function (val) {
            this.iconService.alertType = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "alertIconShape", {
        set: function (value) {
            this.iconService.alertIconShape = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "alertClass", {
        get: function () {
            return this.iconService.iconInfoFromType(this.iconService.alertType).cssClass;
        },
        enumerable: true,
        configurable: true
    });
    Alert.prototype.close = function () {
        if (!this.closable) {
            return;
        }
        this._closed = true;
        this._closedChanged.emit(true);
    };
    Alert.prototype.open = function () {
        this._closed = false;
        this._closedChanged.emit(false);
    };
    return Alert;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrAlertSizeSmall"),
    __metadata("design:type", Boolean)
], Alert.prototype, "isSmall", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrAlertClosable"),
    __metadata("design:type", Boolean)
], Alert.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrAlertAppLevel"),
    __metadata("design:type", Boolean)
], Alert.prototype, "isAppLevel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrAlertClosed"),
    __metadata("design:type", Boolean)
], Alert.prototype, "_closed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrAlertClosedChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], Alert.prototype, "_closedChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrAlertType"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Alert.prototype, "alertType", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrAlertIcon"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Alert.prototype, "alertIconShape", null);
Alert = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({ selector: "clr-alert", providers: [__WEBPACK_IMPORTED_MODULE_1__providers_icon_and_types_service__["a" /* AlertIconAndTypesService */]], template: __webpack_require__(1060) }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_icon_and_types_service__["a" /* AlertIconAndTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_icon_and_types_service__["a" /* AlertIconAndTypesService */]) === "function" && _b || Object])
], Alert);

var _a, _b;
//# sourceMappingURL=alert.js.map

/***/ }),
/* 906 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_item__ = __webpack_require__(904);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALERT_DIRECTIVES; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */




var ALERT_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__alert__["a" /* Alert */], __WEBPACK_IMPORTED_MODULE_1__alert_item__["a" /* AlertItem */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 907 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_alert_types__ = __webpack_require__(1000);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertIconAndTypesService; });
/*
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


var AlertIconAndTypesService = (function () {
    function AlertIconAndTypesService() {
        this.defaultIconShape = "info-circle";
        this._alertIconShape = "";
        this._alertType = "info";
    }
    Object.defineProperty(AlertIconAndTypesService.prototype, "alertType", {
        get: function () {
            return this._alertType;
        },
        set: function (val) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_alert_types__["a" /* ALERT_TYPES */].indexOf(val) > -1) {
                this._alertType = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertIconAndTypesService.prototype, "alertIconShape", {
        get: function () {
            if ("" === this._alertIconShape) {
                return this.iconInfoFromType(this._alertType).shape;
            }
            return this._alertIconShape;
        },
        set: function (val) {
            if (!val) {
                this._alertIconShape = "";
            }
            else if (val !== this._alertIconShape) {
                this._alertIconShape = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    AlertIconAndTypesService.prototype.iconInfoFromType = function (type, classOrShape) {
        if (classOrShape === void 0) { classOrShape = "shape"; }
        var returnObj = { shape: "", cssClass: "" };
        switch (type) {
            case "warning":
            case "alert-warning":
                returnObj.shape = "exclamation-triangle";
                returnObj.cssClass = "alert-warning";
                break;
            case "danger":
            case "alert-danger":
                returnObj.shape = "exclamation-circle";
                returnObj.cssClass = "alert-danger";
                break;
            case "success":
            case "alert-success":
                returnObj.shape = "check-circle";
                returnObj.cssClass = "alert-success";
                break;
            default:
                returnObj.shape = this.defaultIconShape;
                returnObj.cssClass = "alert-info";
                break;
        }
        return returnObj;
    };
    return AlertIconAndTypesService;
}());
AlertIconAndTypesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AlertIconAndTypesService);

//# sourceMappingURL=icon-and-types-service.js.map

/***/ }),
/* 908 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert_module__ = __webpack_require__(852);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrEmphasisModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var ClrEmphasisModule = (function () {
    function ClrEmphasisModule() {
    }
    return ClrEmphasisModule;
}());
ClrEmphasisModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({ exports: [__WEBPACK_IMPORTED_MODULE_1__alert_alert_module__["a" /* ClrAlertModule */]] })
], ClrEmphasisModule);

//# sourceMappingURL=emphasis.module.js.map

/***/ }),
/* 909 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


/**
 * Private counter to generate unique IDs for the checkboxes, to bind the labels to them.
 */
var latestId = 0;
var Checkbox = Checkbox_1 = (function () {
    function Checkbox() {
        // If our host has an ID attribute, we use this instead of our index.
        this._id = (latestId++).toString();
        // If our host has a name attribute, we apply it to the checkbox.
        this.name = null;
        // If the host is disabled we apply it to the checkbox
        this.disabled = false;
        // Support for inline checkboxes, adds the necessary class to the host
        this.inline = false;
        this._checked = false;
        this._indeterminate = false;
        this.indeterminateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /*
         * These callbacks will be given to us through the ControlValueAccessor interface,
         * and we need to call them when the user interacts with the checkbox.
         */
        this.onChangeCallback = function (_) { };
        this.onTouchedCallback = function () { };
    }
    Object.defineProperty(Checkbox.prototype, "id", {
        get: function () {
            return "clr-checkbox-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            if (value !== this._checked) {
                if (this._indeterminate) {
                    this.setIndeterminate(false);
                }
                this.setChecked(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox.prototype, "indeterminate", {
        get: function () {
            return this._indeterminate;
        },
        set: function (value) {
            if (this._indeterminate !== value) {
                if (this._checked) {
                    this.setChecked(false);
                }
                this.setIndeterminate(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Checkbox.prototype.setIndeterminate = function (value) {
        this._indeterminate = value;
        this.indeterminateChange.emit(this._indeterminate);
    };
    Checkbox.prototype.setChecked = function (value) {
        this._checked = value;
        this.change.emit(this._checked);
    };
    Checkbox.prototype.toggle = function () {
        this.checked = !this.checked;
        this.onChangeCallback(this.checked);
    };
    Checkbox.prototype.writeValue = function (value) {
        if (value === null) {
            value = false;
        }
        if (value !== this.checked) {
            this.checked = value;
        }
    };
    Checkbox.prototype.registerOnChange = function (onChange) {
        this.onChangeCallback = onChange;
    };
    Checkbox.prototype.registerOnTouched = function (onTouched) {
        this.onTouchedCallback = onTouched;
    };
    Checkbox.prototype.touch = function () {
        this.onTouchedCallback();
    };
    Checkbox.prototype.checkIndeterminateState = function () {
        if (!this.disabled) {
            this.toggle();
        }
    };
    return Checkbox;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("id"),
    __metadata("design:type", String)
], Checkbox.prototype, "_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("name"),
    __metadata("design:type", String)
], Checkbox.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrDisabled"),
    __metadata("design:type", Boolean)
], Checkbox.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrInline"),
    __metadata("design:type", Object)
], Checkbox.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrChecked"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Checkbox.prototype, "checked", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrIndeterminate"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Checkbox.prototype, "indeterminate", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrIndeterminateChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], Checkbox.prototype, "indeterminateChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrCheckedChange"),
    __metadata("design:type", Object)
], Checkbox.prototype, "change", void 0);
Checkbox = Checkbox_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-checkbox",
        template: "\n        <!--\n            FIXME: We are not subscribed to the change event but the click event here.\n            The reason for that is because checkboxes behave differently on IE & Edge.\n            https://stackoverflow.com/a/19447939\n            \n            To fix that, we listen to every click event and then toggle the checkbox manually\n            to make it behave the same way across the browsers we support.\n            \n            This works for cases when users toggle the checkbox using the keyboard too:\n            https://stackoverflow.com/questions/27878940/spacebar-triggering-click-event-on-checkbox\n        -->\n        <input type=\"checkbox\" [id]=\"id\" [name]=\"name\" [checked]=\"checked\"\n               [indeterminate]=\"indeterminate\" [disabled]=\"disabled\"\n               (blur)=\"touch()\" (click)=\"checkIndeterminateState()\">\n        <label [attr.for]=\"id\">\n            <ng-content></ng-content>\n        </label>\n    ",
        host: { "[class.checkbox]": "!inline", "[class.checkbox-inline]": "inline", "[class.disabled]": "disabled" },
        /*
         * This provider lets us declare our checkbox as a ControlValueAccessor,
         * which allows us to use [(ngModel)] directly on our component,
         * with all the automatic features wiring that come with it.
         */
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return Checkbox_1; }), multi: true }]
    })
], Checkbox);

var Checkbox_1, _a;
//# sourceMappingURL=checkbox.js.map

/***/ }),
/* 910 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox__ = __webpack_require__(909);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHECKBOX_DIRECTIVES; });


var CHECKBOX_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__checkbox__["a" /* Checkbox */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 911 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(1001);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ICON_DIRECTIVES; });

var ICON_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__icon__["a" /* IconCustomTag */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 912 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_container_main_container_module__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_navigation_module__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_module__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vertical_nav_vertical_nav_module__ = __webpack_require__(1007);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrLayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */





var ClrLayoutModule = (function () {
    function ClrLayoutModule() {
    }
    return ClrLayoutModule;
}());
ClrLayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({ exports: [__WEBPACK_IMPORTED_MODULE_1__main_container_main_container_module__["a" /* ClrMainContainerModule */], __WEBPACK_IMPORTED_MODULE_2__nav_navigation_module__["a" /* ClrNavigationModule */], __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_module__["a" /* ClrTabsModule */], __WEBPACK_IMPORTED_MODULE_4__vertical_nav_vertical_nav_module__["a" /* ClrVerticalNavModule */]] })
], ClrLayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),
/* 913 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_container__ = __webpack_require__(915);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LAYOUT_DIRECTIVES; });


var LAYOUT_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__main_container__["a" /* MainContainer */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 914 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(913);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrMainContainerModule; });
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




var ClrMainContainerModule = (function () {
    function ClrMainContainerModule() {
    }
    return ClrMainContainerModule;
}());
ClrMainContainerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* LAYOUT_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* LAYOUT_DIRECTIVES */]] })
], ClrMainContainerModule);

//# sourceMappingURL=main-container.module.js.map

/***/ }),
/* 915 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_clrResponsiveNavigationService__ = __webpack_require__(820);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var MainContainer = (function () {
    function MainContainer(elRef, responsiveNavService) {
        this.elRef = elRef;
        this.responsiveNavService = responsiveNavService;
    }
    MainContainer.prototype.ngOnInit = function () {
        var _this = this;
        this._classList = this.elRef.nativeElement.classList;
        this._subscription = this.responsiveNavService.navControl.subscribe({
            next: function (message) {
                _this.processMessage(message);
            }
        });
    };
    MainContainer.prototype.processMessage = function (message) {
        var navClass = __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLASS_HAMBURGER_MENU;
        if (message.controlCode === __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLOSE_ALL) {
            this._classList.remove(__WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLASS_HAMBURGER_MENU);
            this._classList.remove(__WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLASS_OVERFLOW_MENU);
        }
        else if (message.navLevel === __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_LEVEL_1) {
            this.controlNav(message.controlCode, navClass);
        }
        else if (message.navLevel === __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_LEVEL_2) {
            navClass = __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLASS_OVERFLOW_MENU;
            this.controlNav(message.controlCode, navClass);
        }
    };
    MainContainer.prototype.controlNav = function (controlCode, navClass) {
        if (controlCode === __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_OPEN) {
            this._classList.add(navClass);
        }
        else if (controlCode === __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLOSE) {
            this._classList.remove(navClass);
        }
        else if (controlCode === __WEBPACK_IMPORTED_MODULE_1__nav_clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_TOGGLE) {
            this._classList.toggle(navClass);
        }
    };
    MainContainer.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return MainContainer;
}());
MainContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-main-container", host: { "[class.main-container]": "true" } }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__nav_clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__nav_clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */]) === "function" && _b || Object])
], MainContainer);

var _a, _b;
//# sourceMappingURL=main-container.js.map

/***/ }),
/* 916 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clrResponsiveNavigationService__ = __webpack_require__(820);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var Header = (function () {
    function Header(responsiveNavService) {
        this.responsiveNavService = responsiveNavService;
        this.isNavLevel1OnPage = false;
        this.isNavLevel2OnPage = false;
    }
    Header.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this.responsiveNavService.registeredNavs.subscribe({
            next: function (navLevelList) {
                _this.initializeNavTriggers(navLevelList);
            }
        });
    };
    Object.defineProperty(Header.prototype, "responsiveNavCodes", {
        // getter to access the responsive navigation codes from the template
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */];
        },
        enumerable: true,
        configurable: true
    });
    // reset triggers. handles cases when an application has different nav levels on different pages.
    Header.prototype.resetNavTriggers = function () {
        this.isNavLevel1OnPage = false;
        this.isNavLevel2OnPage = false;
    };
    // decides which triggers to show on the header
    Header.prototype.initializeNavTriggers = function (navList) {
        var _this = this;
        this.resetNavTriggers();
        if (navList.length > 2) {
            console.error("More than 2 Nav Levels detected.");
            return;
        }
        navList.forEach(function (navLevel) {
            if (navLevel === __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_LEVEL_1) {
                _this.isNavLevel1OnPage = true;
            }
            else if (navLevel === __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_LEVEL_2) {
                _this.isNavLevel2OnPage = true;
            }
        });
    };
    // closes the nav that is open
    Header.prototype.closeOpenNav = function () {
        this.responsiveNavService.closeAllNavs();
    };
    // toggles the nav that is open
    Header.prototype.toggleNav = function (navLevel) {
        this.responsiveNavService.sendControlMessage(__WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_TOGGLE, navLevel);
    };
    Header.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return Header;
}());
Header = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-header",
        template: "\n        <button\n            type=\"button\"\n            *ngIf=\"isNavLevel1OnPage\"\n            class=\"header-hamburger-trigger\"\n            (click)=\"toggleNav(responsiveNavCodes.NAV_LEVEL_1)\">\n            <span></span>\n        </button>\n        <ng-content></ng-content>\n        <button\n            type=\"button\"\n            *ngIf=\"isNavLevel2OnPage\"\n            class=\"header-overflow-trigger\"\n            (click)=\"toggleNav(responsiveNavCodes.NAV_LEVEL_2)\">\n            <span></span>\n        </button>\n        <div class=\"header-backdrop\" (click)=\"closeOpenNav()\"></div>\n    ",
        host: { "[class.header]": "true" }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */]) === "function" && _a || Object])
], Header);

var _a;
//# sourceMappingURL=header.js.map

/***/ }),
/* 917 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navLevelDirective__ = __webpack_require__(918);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAVIGATION_DIRECTIVES; });




var NAVIGATION_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__header__["a" /* Header */], __WEBPACK_IMPORTED_MODULE_1__navLevelDirective__["a" /* NavLevelDirective */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 918 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clrResponsiveNavigationService__ = __webpack_require__(820);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavLevelDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var NavLevelDirective = (function () {
    function NavLevelDirective(responsiveNavService, elementRef) {
        this.responsiveNavService = responsiveNavService;
        this.elementRef = elementRef;
    }
    NavLevelDirective.prototype.ngAfterContentInit = function () {
        if (this.level !== __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_LEVEL_1 && this.level !== __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_LEVEL_2) {
            console.error("Nav Level can only be 1 or 2");
            return;
        }
        this.responsiveNavService.registerNav(this.level);
        this.addNavClass(this.level);
    };
    NavLevelDirective.prototype.addNavClass = function (level) {
        var navHostClassList = this.elementRef.nativeElement.classList;
        if (level === __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_LEVEL_1) {
            navHostClassList.add(__WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLASS_LEVEL_1);
        }
        else if (level === __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_LEVEL_2) {
            navHostClassList.add(__WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLASS_LEVEL_2);
        }
    };
    Object.defineProperty(NavLevelDirective.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavLevelDirective.prototype, "responsiveNavCodes", {
        // getter to access the responsive navigation codes from the template
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */];
        },
        enumerable: true,
        configurable: true
    });
    NavLevelDirective.prototype.open = function () {
        this.responsiveNavService.sendControlMessage(__WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_OPEN, this.level);
    };
    NavLevelDirective.prototype.close = function () {
        this.responsiveNavService.sendControlMessage(__WEBPACK_IMPORTED_MODULE_1__clrResponsiveNavCodes__["a" /* ClrResponsiveNavCodes */].NAV_CLOSE, this.level);
    };
    // TODO: Figure out whats the best way to do this. Possible methods
    // 1. HostListener (current solution)
    // 2. Directives on the .nav-link class. We discussed on moving away from class selectors but I forget the reason
    // why
    NavLevelDirective.prototype.onMouseClick = function (target) {
        var current = target; // Get the element in the DOM on which the mouse was clicked
        var navHost = this.elementRef.nativeElement; // Get the current nav native HTML element
        // Start checking if current and navHost are equal.
        // If not traverse to the parentNode and check again.
        while (current) {
            if (current === navHost) {
                return;
            }
            else if (current.classList.contains("nav-link")) {
                this.close();
                return;
            }
            current = current.parentNode;
        }
    };
    NavLevelDirective.prototype.ngOnDestroy = function () {
        this.responsiveNavService.unregisterNav(this.level);
    };
    return NavLevelDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clr-nav-level"),
    __metadata("design:type", Number)
], NavLevelDirective.prototype, "_level", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("click", ["$event.target"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavLevelDirective.prototype, "onMouseClick", null);
NavLevelDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clr-nav-level]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object])
], NavLevelDirective);

var _a, _b;
//# sourceMappingURL=navLevelDirective.js.map

/***/ }),
/* 919 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_dropdown_dropdown_module__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clrResponsiveNavigationProvider__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clrResponsiveNavigationService__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(917);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrNavigationModule; });
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







var ClrNavigationModule = (function () {
    function ClrNavigationModule() {
    }
    return ClrNavigationModule;
}());
ClrNavigationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_3__popover_dropdown_dropdown_module__["a" /* ClrDropdownModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__index__["a" /* NAVIGATION_DIRECTIVES */]],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_5__clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */],
                useFactory: __WEBPACK_IMPORTED_MODULE_4__clrResponsiveNavigationProvider__["a" /* clrResponsiveNavigationProvider */],
                deps: [[new __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* SkipSelf */](), __WEBPACK_IMPORTED_MODULE_5__clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */]]]
            }],
        exports: [__WEBPACK_IMPORTED_MODULE_6__index__["a" /* NAVIGATION_DIRECTIVES */]]
    })
], ClrNavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),
/* 920 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_content__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_link_directive__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_overflow_content__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs__ = __webpack_require__(925);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TABS_DIRECTIVES; });










var TABS_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__tab_content__["a" /* TabContent */], __WEBPACK_IMPORTED_MODULE_0__tab__["a" /* Tab */], __WEBPACK_IMPORTED_MODULE_4__tabs__["a" /* Tabs */], __WEBPACK_IMPORTED_MODULE_3__tab_overflow_content__["a" /* TabOverflowContent */], __WEBPACK_IMPORTED_MODULE_2__tab_link_directive__["a" /* TabLinkDirective */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 921 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_common_abstract_popover__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_common_popover__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabOverflowContent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var TabOverflowContent = (function (_super) {
    __extends(TabOverflowContent, _super);
    function TabOverflowContent(injector, parentHost) {
        var _this = _super.call(this, injector, parentHost) || this;
        _this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__popover_common_popover__["a" /* Point */].BOTTOM_RIGHT;
        _this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__popover_common_popover__["a" /* Point */].RIGHT_TOP;
        _this.closeOnOutsideClick = true;
        return _this;
    }
    return TabOverflowContent;
}(__WEBPACK_IMPORTED_MODULE_1__popover_common_abstract_popover__["a" /* AbstractPopover */]));
TabOverflowContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-tab-overflow-content",
        template: "\n        <ng-content></ng-content>\n    ",
        host: {
            "[class.dropdown-menu]": "true",
        }
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object])
], TabOverflowContent);

var _a, _b;
//# sourceMappingURL=tab-overflow-content.js.map

/***/ }),
/* 922 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria_service__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_content__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_link_directive__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_service__ = __webpack_require__(923);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */






var Tab = (function () {
    function Tab(ifActiveService, id, tabsService) {
        this.ifActiveService = ifActiveService;
        this.id = id;
        this.tabsService = tabsService;
        tabsService.register(this);
    }
    Tab.prototype.ngOnDestroy = function () {
        this.tabsService.unregister(this);
    };
    Object.defineProperty(Tab.prototype, "active", {
        get: function () {
            return this.ifActiveService.current === this.id;
        },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_4__tab_link_directive__["a" /* TabLinkDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__tab_link_directive__["a" /* TabLinkDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tab_link_directive__["a" /* TabLinkDirective */]) === "function" && _a || Object)
], Tab.prototype, "tabLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_3__tab_content__["a" /* TabContent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__tab_content__["a" /* TabContent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__tab_content__["a" /* TabContent */]) === "function" && _b || Object)
], Tab.prototype, "tabContent", void 0);
Tab = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-tab",
        template: "\n        <ng-content></ng-content>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["c" /* IF_ACTIVE_ID_PROVIDER */], __WEBPACK_IMPORTED_MODULE_2__aria_service__["a" /* AriaService */]]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["a" /* IF_ACTIVE_ID */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */]) === "function" && _c || Object, Number, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__tabs_service__["a" /* TabsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tabs_service__["a" /* TabsService */]) === "function" && _d || Object])
], Tab);

var _a, _b, _c, _d;
//# sourceMappingURL=tab.js.map

/***/ }),
/* 923 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var TabsService = (function () {
    function TabsService() {
        this._children = [];
    }
    TabsService.prototype.register = function (tab) {
        this._children.push(tab);
    };
    Object.defineProperty(TabsService.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsService.prototype, "activeTab", {
        get: function () {
            return this.children.find(function (tab) {
                return tab.active;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsService.prototype, "overflowTabs", {
        get: function () {
            return this.children.filter(function (tab) {
                return tab.tabLink.inOverflow === true;
            });
        },
        enumerable: true,
        configurable: true
    });
    TabsService.prototype.unregister = function (tab) {
        var index = this.children.indexOf(tab);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    };
    return TabsService;
}());
TabsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], TabsService);

//# sourceMappingURL=tabs-service.js.map

/***/ }),
/* 924 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_common_popover_module__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_conditional_conditional_module__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_template_ref_template_ref_module__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(920);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrTabsModule; });
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







var ClrTabsModule = (function () {
    function ClrTabsModule() {
    }
    return ClrTabsModule;
}());
ClrTabsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__popover_common_popover_module__["a" /* ClrCommonPopoverModule */], __WEBPACK_IMPORTED_MODULE_4__utils_conditional_conditional_module__["a" /* ClrConditionalModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_5__utils_template_ref_template_ref_module__["a" /* ClrTemplateRefModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__index__["a" /* TABS_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__index__["a" /* TABS_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_4__utils_conditional_conditional_module__["a" /* ClrConditionalModule */]]
    })
], ClrTabsModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),
/* 925 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_link_directive__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_service__ = __webpack_require__(923);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */





var Tabs = (function () {
    function Tabs(ifActiveService, ifOpenService, tabsService) {
        this.ifActiveService = ifActiveService;
        this.ifOpenService = ifOpenService;
        this.tabsService = tabsService;
    }
    Object.defineProperty(Tabs.prototype, "activeTabInOverflow", {
        get: function () {
            return this.tabsService.overflowTabs.indexOf(this.tabsService.activeTab) > -1;
        },
        enumerable: true,
        configurable: true
    });
    Tabs.prototype.toggleOverflow = function (event) {
        this.ifOpenService.toggleWithEvent(event);
    };
    return Tabs;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_3__tab_link_directive__["a" /* TabLinkDirective */], { descendants: true }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _a || Object)
], Tabs.prototype, "tabLinkDirectives", void 0);
Tabs = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-tabs",
        template: "        \n        <ul class=\"nav\" role=\"tablist\">\n            <!--tab links-->\n            <ng-container *ngFor=\"let link of tabLinkDirectives\">\n                <ng-container *ngIf=\"!link.inOverflow\"\n                              [ngTemplateOutlet]=\"link.templateRefContainer.template\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"tabsService.overflowTabs.length > 0\">\n                <div class=\"tabs-overflow bottom-right\" [class.open]=\"ifOpenService.open\" \n                     (click)=\"toggleOverflow($event)\">\n                    <li role=\"presentation\" class=\"nav-item\">\n                        <button class=\"btn btn-link nav-link dropdown-toggle\" [class.active]=\"activeTabInOverflow\">\n                            <clr-icon shape=\"ellipsis-horizontal\" [class.is-info]=\"ifOpenService.open\"></clr-icon>\n                        </button>\n                    </li>\n                    <!--tab links in overflow menu-->\n                    <clr-tab-overflow-content>\n                        <ng-container *ngFor=\"let link of tabLinkDirectives\">\n                            <ng-container *ngIf=\"link.inOverflow\"\n                                          [ngTemplateOutlet]=\"link.templateRefContainer.template\">\n                            </ng-container>\n                        </ng-container>\n                    </clr-tab-overflow-content>\n                </div>\n            </ng-container>\n        </ul>\n        <!--tab content-->\n        <ng-content></ng-content>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */], __WEBPACK_IMPORTED_MODULE_2__utils_conditional_if_open_service__["a" /* IfOpenService */], __WEBPACK_IMPORTED_MODULE_4__tabs_service__["a" /* TabsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_active_service__["b" /* IfActiveService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__utils_conditional_if_open_service__["a" /* IfOpenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_conditional_if_open_service__["a" /* IfOpenService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__tabs_service__["a" /* TabsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tabs_service__["a" /* TabsService */]) === "function" && _d || Object])
], Tabs);

var _a, _b, _c, _d;
//# sourceMappingURL=tabs.js.map

/***/ }),
/* 926 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavGroupService; });
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

var VerticalNavGroupService = (function () {
    function VerticalNavGroupService() {
        this.navGroups = [];
    }
    VerticalNavGroupService.prototype.registerNavGroup = function (navGroup) {
        this.navGroups.push(navGroup);
    };
    VerticalNavGroupService.prototype.unregisterNavGroup = function (navGroup) {
        var index = this.navGroups.indexOf(navGroup);
        if (index > -1) {
            this.navGroups.splice(index, 1);
        }
    };
    return VerticalNavGroupService;
}());
VerticalNavGroupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], VerticalNavGroupService);

//# sourceMappingURL=vertical-nav-group.service.js.map

/***/ }),
/* 927 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavService; });
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


var VerticalNavService = (function () {
    function VerticalNavService() {
        this._animateOnCollapsed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._collapsedChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._collapsed = false;
        this._collapsible = false;
    }
    Object.defineProperty(VerticalNavService.prototype, "animateOnCollapsed", {
        get: function () {
            return this._animateOnCollapsed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerticalNavService.prototype, "collapsedChanged", {
        get: function () {
            return this._collapsedChanged.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerticalNavService.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        set: function (value) {
            value = !!value;
            if (this.collapsible && (this._collapsed !== value)) {
                this.updateCollapseBehavior(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerticalNavService.prototype, "collapsible", {
        get: function () {
            return this._collapsible;
        },
        set: function (value) {
            value = !!value;
            if (this._collapsible !== value) {
                if (!value && this.collapsed) {
                    this.updateCollapseBehavior(false);
                }
                this._collapsible = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    VerticalNavService.prototype.updateCollapseBehavior = function (value) {
        this._animateOnCollapsed.next(value);
        this._collapsed = value;
        this._collapsedChanged.next(value);
    };
    return VerticalNavService;
}());
VerticalNavService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], VerticalNavService);

//# sourceMappingURL=vertical-nav.service.js.map

/***/ }),
/* 928 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vertical_nav_group_service__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_vertical_nav_service__ = __webpack_require__(927);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavGroup; });
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXPANDED_STATE = "expanded";
var COLLAPSED_STATE = "collapsed";
var VerticalNavGroup = (function () {
    function VerticalNavGroup(_itemExpand, _verticalNavGroupService, _verticalNavService) {
        var _this = this;
        this._itemExpand = _itemExpand;
        this._verticalNavGroupService = _verticalNavGroupService;
        this._verticalNavService = _verticalNavService;
        this.wasExpanded = false;
        this.expandedChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */](true);
        this._subscriptions = [];
        this._expandAnimationState = COLLAPSED_STATE;
        this._verticalNavGroupService.registerNavGroup(this);
        // FIXME: This subscription handles a corner case
        // Vertical Nav collapse requires the animation to run first and then
        // remove the nodes from the DOM. If the user directly sets the input
        // on the clrIfExpanded directive, we have no chance to run the animation
        // and wait for it to complete. This subscription makes sure that the
        // animation states are correct for that edge case.
        this._subscriptions.push(this._itemExpand.expandChange.subscribe(function (value) {
            if (value && _this.expandAnimationState === COLLAPSED_STATE) {
                if (_this._verticalNavService.collapsed) {
                    _this._verticalNavService.collapsed = false;
                }
                _this.expandAnimationState = EXPANDED_STATE;
            }
            else if (!value && _this.expandAnimationState === EXPANDED_STATE) {
                _this.expandAnimationState = COLLAPSED_STATE;
            }
        }));
        // If the nav is collapsing, close the open nav group + save its state
        // If the nav is expanding, expand if the previous state was expanding
        this._subscriptions.push(this._verticalNavService.animateOnCollapsed.subscribe(function (goingToCollapse) {
            if (goingToCollapse && _this.expanded) {
                _this.wasExpanded = true;
                _this.expandAnimationState = COLLAPSED_STATE;
            }
            else if (!goingToCollapse && _this.wasExpanded) {
                _this.expandGroup();
                _this.wasExpanded = false;
            }
        }));
    }
    Object.defineProperty(VerticalNavGroup.prototype, "expanded", {
        get: function () {
            return this._itemExpand.expanded;
        },
        set: function (value) {
            if (this._itemExpand.expanded !== value) {
                this._itemExpand.expanded = value;
                this.expandedChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerticalNavGroup.prototype, "userExpandedInput", {
        set: function (value) {
            value = !!value;
            if (this.expanded !== value) {
                // We have to call toggleExpand because some cases require animations to occur first
                // Directly setting the Expand service value skips the animation and can result in
                // nodes in the DOM but the nav group still being collapsed
                this.toggleExpand();
            }
        },
        enumerable: true,
        configurable: true
    });
    VerticalNavGroup.prototype.expandGroup = function () {
        this.expanded = true;
        // Expanded animation occurs after Expand.expand is set to true
        this.expandAnimationState = EXPANDED_STATE;
    };
    VerticalNavGroup.prototype.collapseGroup = function () {
        // If a Vertical Nav Group toggle button is clicked while the Vertical Nav is in Collapsed state,
        // the Vertical Nav should be expanded first.
        this.expandAnimationState = COLLAPSED_STATE;
    };
    // closes a group after the collapse animation
    VerticalNavGroup.prototype.expandAnimationDone = function ($event) {
        if ($event.toState === COLLAPSED_STATE) {
            this.expanded = false;
        }
    };
    Object.defineProperty(VerticalNavGroup.prototype, "expandAnimationState", {
        get: function () {
            return this._expandAnimationState;
        },
        set: function (value) {
            if (value !== this._expandAnimationState) {
                this._expandAnimationState = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    VerticalNavGroup.prototype.toggleExpand = function () {
        if (this.expanded) {
            this.collapseGroup();
        }
        else {
            // If nav is collasped, first open the nav
            if (this._verticalNavService.collapsed) {
                this._verticalNavService.collapsed = false;
            }
            // then expand the nav group
            this.expandGroup();
        }
    };
    // TODO: FIXME: This is horrible. I really need to refactor VerticalNavGroup
    // but I have spent way too much time on VerticalNav and I don't have the patience
    // to do it right now. Have tested that it works and does not cause any side-effects
    VerticalNavGroup.prototype.onNavContentClick = function () {
        if (this._verticalNavService.collapsible && this._verticalNavService.collapsed) {
            this.expandGroup();
        }
    };
    VerticalNavGroup.prototype.ngAfterContentInit = function () {
        // This makes sure that if someone marks a nav group expanded in a collapsed nav
        // the expanded property is switched back to collapsed state.
        if (this._verticalNavService.collapsed && this.expanded) {
            this.wasExpanded = true;
            this.expandAnimationState = COLLAPSED_STATE;
        }
    };
    VerticalNavGroup.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this._verticalNavGroupService.unregisterNavGroup(this);
    };
    return VerticalNavGroup;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* HostBinding */])("class.is-expanded"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], VerticalNavGroup.prototype, "expanded", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrVerticalNavGroupExpanded"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], VerticalNavGroup.prototype, "userExpandedInput", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])("clrVerticalNavGroupExpandedChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], VerticalNavGroup.prototype, "expandedChange", void 0);
VerticalNavGroup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
        selector: "clr-vertical-nav-group",
        template: __webpack_require__(1061),
        providers: [__WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__["a" /* Expand */]],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* trigger */])("clrExpand", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(EXPANDED_STATE, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": "*" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(COLLAPSED_STATE, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": 0, "overflow-y": "hidden" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(EXPANDED_STATE + " <=> " + COLLAPSED_STATE, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out"))
            ])],
        host: { "class": "nav-group" }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__["a" /* Expand */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_expand_providers_expand__["a" /* Expand */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_vertical_nav_group_service__["a" /* VerticalNavGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_vertical_nav_group_service__["a" /* VerticalNavGroupService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_vertical_nav_service__["a" /* VerticalNavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_vertical_nav_service__["a" /* VerticalNavService */]) === "function" && _d || Object])
], VerticalNavGroup);

var _a, _b, _c, _d;
//# sourceMappingURL=vertical-nav-group.js.map

/***/ }),
/* 929 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_vertical_nav_icon_service__ = __webpack_require__(807);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavIcon; });
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
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var VerticalNavIcon = (function () {
    function VerticalNavIcon(_verticalNavIconService) {
        this._verticalNavIconService = _verticalNavIconService;
        this._verticalNavIconService.registerIcon();
    }
    VerticalNavIcon.prototype.ngOnDestroy = function () {
        this._verticalNavIconService.unregisterIcon();
    };
    return VerticalNavIcon;
}());
VerticalNavIcon = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrVerticalNavIcon]", host: { "class": "nav-icon" } }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */]) === "function" && _a || Object])
], VerticalNavIcon);

var _a;
//# sourceMappingURL=vertical-nav-icon.directive.js.map

/***/ }),
/* 930 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavLink; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var VerticalNavLink = (function () {
    function VerticalNavLink() {
    }
    return VerticalNavLink;
}());
VerticalNavLink = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "[clrVerticalNavLink]",
        template: "\n        <ng-content select=\"[clrVerticalNavIcon]\"></ng-content>\n        <span class=\"nav-text\">\n            <ng-content></ng-content>    \n        </span>\n    ",
        host: { "class": "nav-link" }
    })
], VerticalNavLink);

//# sourceMappingURL=vertical-nav-link.js.map

/***/ }),
/* 931 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_vertical_nav_group_service__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vertical_nav_icon_service__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vertical_nav_service__ = __webpack_require__(927);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNav; });
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerticalNav = (function () {
    function VerticalNav(_verticalNavService, _verticalNavIconService, _verticalNavGroupService) {
        var _this = this;
        this._verticalNavService = _verticalNavService;
        this._verticalNavIconService = _verticalNavIconService;
        this._verticalNavGroupService = _verticalNavGroupService;
        this._collapsedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](true);
        this._sub = this._verticalNavService.collapsedChanged.subscribe(function (value) {
            _this._collapsedChanged.emit(value);
        });
    }
    Object.defineProperty(VerticalNav.prototype, "collapsible", {
        get: function () {
            return this._verticalNavService.collapsible;
        },
        set: function (value) {
            this._verticalNavService.collapsible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerticalNav.prototype, "collapsed", {
        get: function () {
            return this._verticalNavService.collapsed;
        },
        set: function (value) {
            this._verticalNavService.collapsed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerticalNav.prototype, "hasNavGroups", {
        get: function () {
            return this._verticalNavGroupService.navGroups.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerticalNav.prototype, "hasIcons", {
        get: function () {
            return this._verticalNavIconService.hasIcons;
        },
        enumerable: true,
        configurable: true
    });
    VerticalNav.prototype.toggleByButton = function () {
        this.collapsed = !this.collapsed;
    };
    VerticalNav.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    return VerticalNav;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrVerticalNavCollapsible"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], VerticalNav.prototype, "collapsible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrVerticalNavCollapsed"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], VerticalNav.prototype, "collapsed", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrVerticalNavCollapsedChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], VerticalNav.prototype, "_collapsedChanged", void 0);
VerticalNav = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-vertical-nav",
        template: __webpack_require__(1062),
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_vertical_nav_service__["a" /* VerticalNavService */], __WEBPACK_IMPORTED_MODULE_2__providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */], __WEBPACK_IMPORTED_MODULE_1__providers_vertical_nav_group_service__["a" /* VerticalNavGroupService */]],
        host: {
            "class": "clr-vertical-nav",
            "[class.is-collapsed]": "collapsed",
            "[class.has-nav-groups]": "hasNavGroups",
            "[class.has-icons]": "hasIcons"
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_vertical_nav_service__["a" /* VerticalNavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_vertical_nav_service__["a" /* VerticalNavService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__providers_vertical_nav_group_service__["a" /* VerticalNavGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_vertical_nav_group_service__["a" /* VerticalNavGroupService */]) === "function" && _d || Object])
], VerticalNav);

var _a, _b, _c, _d;
//# sourceMappingURL=vertical-nav.js.map

/***/ }),
/* 932 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(933);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODAL_DIRECTIVES; });


var MODAL_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__modal__["a" /* Modal */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 933 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_scrolling_scrolling_service__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__ = __webpack_require__(856);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */




var Modal = (function () {
    function Modal(_scrollingService) {
        this._scrollingService = _scrollingService;
        this._open = false;
        this._openChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */](false);
        this.closable = true;
        this.staticBackdrop = false;
        this.skipAnimation = "false";
        // presently this is only used by wizards
        this.ghostPageState = "hidden";
        this.bypassScrollService = false;
        this.stopClose = false;
        this.altClose = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */](false);
    }
    Object.defineProperty(Modal.prototype, "sizeClass", {
        get: function () {
            if (this.size) {
                return "modal-" + this.size;
            }
            else {
                return "";
            }
        },
        enumerable: true,
        configurable: true
    });
    // Detect when _open is set to true and set no-scrolling to true
    Modal.prototype.ngOnChanges = function (changes) {
        if (!this.bypassScrollService && changes && changes.hasOwnProperty("_open")) {
            if (changes._open.currentValue) {
                this._scrollingService.stopScrolling();
            }
            else {
                this._scrollingService.resumeScrolling();
            }
        }
    };
    Modal.prototype.ngOnDestroy = function () {
        this._scrollingService.resumeScrolling();
    };
    Modal.prototype.open = function () {
        if (this._open === true) {
            return;
        }
        this._open = true;
        this._openChanged.emit(true);
    };
    Modal.prototype.close = function () {
        if (this.stopClose) {
            this.altClose.emit(false);
            return;
        }
        if (!this.closable || this._open === false) {
            return;
        }
        this._open = false;
        // todo: remove this after animation bug is fixed https://github.com/angular/angular/issues/15798
        // this was handled by the fadeDone event below, but that AnimationEvent is not firing in Angular 4.0.
        this._openChanged.emit(false);
        // SPECME
    };
    Modal.prototype.fadeDone = function (e) {
        if (e.toState === "void") {
            this._openChanged.emit(false);
        }
    };
    return Modal;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrModalOpen"),
    __metadata("design:type", Boolean)
], Modal.prototype, "_open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])("clrModalOpenChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], Modal.prototype, "_openChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrModalClosable"),
    __metadata("design:type", Boolean)
], Modal.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrModalSize"),
    __metadata("design:type", String)
], Modal.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrModalStaticBackdrop"),
    __metadata("design:type", Boolean)
], Modal.prototype, "staticBackdrop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrModalSkipAnimation"),
    __metadata("design:type", String)
], Modal.prototype, "skipAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrModalGhostPageState"),
    __metadata("design:type", String)
], Modal.prototype, "ghostPageState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrModalOverrideScrollService"),
    __metadata("design:type", Boolean)
], Modal.prototype, "bypassScrollService", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])("clrModalPreventClose"),
    __metadata("design:type", Boolean)
], Modal.prototype, "stopClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])("clrModalAlternateClose"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], Modal.prototype, "altClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* HostListener */])("body:keyup.escape"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Modal.prototype, "close", null);
Modal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
        selector: "clr-modal",
        viewProviders: [__WEBPACK_IMPORTED_MODULE_2__utils_scrolling_scrolling_service__["a" /* ScrollingService */]],
        template: __webpack_require__(1063),
        styles: ["\n        :host { display: inline-block; }\n    "],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* trigger */])("fadeDown", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("* => false", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0, transform: "translate(0, -25%)" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out")]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("false => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0, transform: "translate(0, -25%)" }))])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* trigger */])("fade", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("void => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0.85 }))]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("* => void", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0 }))])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* trigger */])("ghostPageOneState", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NO_PAGES, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ left: "-24px" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.ALL_PAGES, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ left: "0" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NEXT_TO_LAST_PAGE, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ left: "-24px" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.LAST_PAGE, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ left: "-24px" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NO_PAGES + " => *", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].TRANSITIONS.IN)),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.ALL_PAGES + " => *", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].TRANSITIONS.OUT)),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.LAST_PAGE + " => *", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].TRANSITIONS.IN)),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NEXT_TO_LAST_PAGE + " => *", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].TRANSITIONS.OUT))
            ]),
            // TODO: USE TRANSFORM, NOT LEFT...
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* trigger */])("ghostPageTwoState", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NO_PAGES, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ left: "-24px", top: "24px", bottom: "24px" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.ALL_PAGES, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ left: "24px" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NEXT_TO_LAST_PAGE, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ left: "0px", top: "24px", bottom: "24px", background: "#bbb" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.LAST_PAGE, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ left: "-24px", top: "24px", bottom: "24px" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NO_PAGES + " => *", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].TRANSITIONS.IN)),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.ALL_PAGES + " => *", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].TRANSITIONS.OUT)),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.LAST_PAGE + " => *", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].TRANSITIONS.IN)),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES.NEXT_TO_LAST_PAGE + " => *", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])(__WEBPACK_IMPORTED_MODULE_3__utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].TRANSITIONS.OUT))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__utils_scrolling_scrolling_service__["a" /* ScrollingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_scrolling_scrolling_service__["a" /* ScrollingService */]) === "function" && _c || Object])
], Modal);

var _a, _b, _c;
//# sourceMappingURL=modal.js.map

/***/ }),
/* 934 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDirectiveOld; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var openCount = 0;
var waiting = []; // pending create functions
var PopoverDirectiveOld = (function () {
    function PopoverDirectiveOld(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.popoverOptions = {};
        this.clrPopoverOldChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
    }
    Object.defineProperty(PopoverDirectiveOld.prototype, "clrPopoverOld", {
        set: function (open) {
            var _this = this;
            if (open) {
                if (this.popoverOptions.allowMultipleOpen) {
                    this.createPopover();
                }
                else {
                    if (openCount === 0) {
                        this.createPopover();
                    }
                    else {
                        waiting.push(function () {
                            _this.createPopover();
                        });
                    }
                }
            }
            else {
                this.viewContainer.clear();
                this.destroyPopover();
                if (!this.popoverOptions.allowMultipleOpen) {
                    if (waiting.length > 0) {
                        var createPopoverFn = waiting.shift();
                        createPopoverFn();
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PopoverDirectiveOld.prototype.createPopover = function () {
        var _this = this;
        var embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef);
        // TODO: Not sure of the risks associated with using this. Find an alternative.
        // Needed for find the correct height and width of dynamically created views
        // inside of the popover. For Eg: Button Groups
        embeddedViewRef.detectChanges();
        // filter out other nodes in the view ref so we are only left with element nodes
        var elementNodes = embeddedViewRef.rootNodes.filter(function (node) {
            return node.nodeType === 1;
        });
        // we take the first element node in the embedded view; usually there should only be one anyways
        this._popoverInstance = new __WEBPACK_IMPORTED_MODULE_1__popover__["b" /* Popover */](elementNodes[0]);
        this._subscription =
            this._popoverInstance.anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
                .subscribe(function () {
                _this.clrPopoverOldChange.emit(false);
            });
        openCount++;
    };
    PopoverDirectiveOld.prototype.destroyPopover = function () {
        if (this._popoverInstance) {
            this._subscription.unsubscribe();
            this._popoverInstance.release();
            delete this._popoverInstance;
            openCount--;
        }
    };
    PopoverDirectiveOld.prototype.ngOnDestroy = function () {
        this.destroyPopover();
    };
    return PopoverDirectiveOld;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPopoverOldAnchor"),
    __metadata("design:type", Object)
], PopoverDirectiveOld.prototype, "anchorElem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPopoverOldAnchorPoint"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__popover__["a" /* Point */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__popover__["a" /* Point */]) === "function" && _a || Object)
], PopoverDirectiveOld.prototype, "anchorPoint", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPopoverOldPopoverPoint"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__popover__["a" /* Point */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__popover__["a" /* Point */]) === "function" && _b || Object)
], PopoverDirectiveOld.prototype, "popoverPoint", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPopoverOldOptions"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__popover__["PopoverOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__popover__["PopoverOptions"]) === "function" && _c || Object)
], PopoverDirectiveOld.prototype, "popoverOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrPopoverOldChange"),
    __metadata("design:type", Object)
], PopoverDirectiveOld.prototype, "clrPopoverOldChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PopoverDirectiveOld.prototype, "clrPopoverOld", null);
PopoverDirectiveOld = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrPopoverOld]" }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _e || Object])
], PopoverDirectiveOld);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=popover-old.directive.js.map

/***/ }),
/* 935 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var PopoverDirective = (function () {
    function PopoverDirective(el, ifOpenService) {
        this.el = el;
        this.ifOpenService = ifOpenService;
        this.popoverOptions = {};
    }
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.ifOpenService.openChange.subscribe(function (change) {
            _this.updateView(change);
        });
    };
    PopoverDirective.prototype.updateView = function (open) {
        if (open) {
            this.createPopover();
        }
        else {
            this.destroyPopover();
        }
    };
    PopoverDirective.prototype.createPopover = function () {
        var _this = this;
        // we take the first child element; usually there should only be one anyways
        this._popoverInstance = new __WEBPACK_IMPORTED_MODULE_2__popover__["b" /* Popover */](this.el.nativeElement);
        this._subscription =
            this._popoverInstance.anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
                .subscribe(function () {
                // if a scroll event is detected, close the popover
                _this.ifOpenService.open = false;
            });
    };
    PopoverDirective.prototype.destroyPopover = function () {
        if (this._popoverInstance) {
            this._subscription.unsubscribe();
            this._popoverInstance.release();
            delete this._popoverInstance;
        }
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this.destroyPopover();
    };
    return PopoverDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPopoverAnchor"),
    __metadata("design:type", Object)
], PopoverDirective.prototype, "anchorElem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPopoverAnchorPoint"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* Point */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* Point */]) === "function" && _a || Object)
], PopoverDirective.prototype, "anchorPoint", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPopoverPopoverPoint"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* Point */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* Point */]) === "function" && _b || Object)
], PopoverDirective.prototype, "popoverPoint", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPopoverOptions"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__popover__["PopoverOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__popover__["PopoverOptions"]) === "function" && _c || Object)
], PopoverDirective.prototype, "popoverOptions", void 0);
PopoverDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrPopoverAnchor]" }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */]) === "function" && _e || Object])
], PopoverDirective);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=popover.directive.js.map

/***/ }),
/* 936 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dropdown_service__ = __webpack_require__(941);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownItem; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DropdownItem = (function () {
    function DropdownItem(dropdown, el, _dropdownService) {
        this.dropdown = dropdown;
        this.el = el;
        this._dropdownService = _dropdownService;
    }
    DropdownItem.prototype.onDropdownItemClick = function () {
        if (this.dropdown.isMenuClosable && !this.el.nativeElement.classList.contains("disabled")) {
            this._dropdownService.closeMenus();
        }
    };
    return DropdownItem;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownItem.prototype, "onDropdownItemClick", null);
DropdownItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrDropdownItem]", host: { "[class.dropdown-item]": "true" } }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dropdown__["a" /* Dropdown */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dropdown__["a" /* Dropdown */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_dropdown_service__["a" /* RootDropdownService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_dropdown_service__["a" /* RootDropdownService */]) === "function" && _c || Object])
], DropdownItem);

var _a, _b, _c;
//# sourceMappingURL=dropdown-item.js.map

/***/ }),
/* 937 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_abstract_popover__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_popover__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownMenu; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DropdownMenu = (function (_super) {
    __extends(DropdownMenu, _super);
    function DropdownMenu(injector, parentHost, nested) {
        var _this = _super.call(this, injector, parentHost) || this;
        if (!nested) {
            // Default positioning for normal dropdown is bottom-left
            _this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].BOTTOM_LEFT;
            _this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
        }
        else {
            // Default positioning for nested dropdown is right-top
            _this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_TOP;
            _this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
        }
        _this.popoverOptions.allowMultipleOpen = true;
        _this.closeOnOutsideClick = true;
        return _this;
    }
    Object.defineProperty(DropdownMenu.prototype, "position", {
        set: function (position) {
            // set the popover values based on menu position
            switch (position) {
                case ("top-right"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].TOP_RIGHT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_BOTTOM;
                    break;
                case ("top-left"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].TOP_LEFT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_BOTTOM;
                    break;
                case ("bottom-right"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].BOTTOM_RIGHT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_TOP;
                    break;
                case ("bottom-left"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].BOTTOM_LEFT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
                    break;
                case ("right-top"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_TOP;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
                    break;
                case ("right-bottom"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_BOTTOM;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_BOTTOM;
                    break;
                case ("left-top"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_TOP;
                    break;
                case ("left-bottom"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_BOTTOM;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_BOTTOM;
                    break;
                default:
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].BOTTOM_LEFT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    return DropdownMenu;
}(__WEBPACK_IMPORTED_MODULE_1__common_abstract_popover__["a" /* AbstractPopover */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPosition"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DropdownMenu.prototype, "position", null);
DropdownMenu = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dropdown-menu",
        template: "\n        <ng-content></ng-content>\n    ",
        host: {
            "[class.dropdown-menu]": "true",
        }
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */])()), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Optional */])()), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object, DropdownMenu])
], DropdownMenu);

var _a, _b;
//# sourceMappingURL=dropdown-menu.js.map

/***/ }),
/* 938 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown__ = __webpack_require__(835);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownTrigger; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DropdownTrigger = (function () {
    function DropdownTrigger(dropdown, ifOpenService) {
        this.dropdown = dropdown;
        this.ifOpenService = ifOpenService;
        this.isRootLevelToggle = true;
        // if the containing dropdown has a parent, then this is not the root level one
        if (dropdown.parent) {
            this.isRootLevelToggle = false;
        }
    }
    Object.defineProperty(DropdownTrigger.prototype, "active", {
        get: function () {
            return this.ifOpenService.open;
        },
        enumerable: true,
        configurable: true
    });
    DropdownTrigger.prototype.onDropdownTriggerClick = function (event) {
        this.ifOpenService.toggleWithEvent(event);
    };
    return DropdownTrigger;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropdownTrigger.prototype, "onDropdownTriggerClick", null);
DropdownTrigger = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        // We support both selectors for legacy reasons
        selector: "[clrDropdownTrigger],[clrDropdownToggle]",
        host: {
            "[class.dropdown-toggle]": "isRootLevelToggle",
            "[class.dropdown-item]": "!isRootLevelToggle",
            "[class.expandable]": "!isRootLevelToggle",
            "[class.active]": "active"
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__dropdown__["a" /* Dropdown */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dropdown__["a" /* Dropdown */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */]) === "function" && _b || Object])
], DropdownTrigger);

var _a, _b;
//# sourceMappingURL=dropdown-trigger.js.map

/***/ }),
/* 939 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_item__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_menu__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_trigger__ = __webpack_require__(938);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_positions__ = __webpack_require__(940);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DROPDOWN_DIRECTIVES; });









var DROPDOWN_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__dropdown__["a" /* Dropdown */], __WEBPACK_IMPORTED_MODULE_2__dropdown_menu__["a" /* DropdownMenu */], __WEBPACK_IMPORTED_MODULE_3__dropdown_trigger__["a" /* DropdownTrigger */], __WEBPACK_IMPORTED_MODULE_1__dropdown_item__["a" /* DropdownItem */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 940 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menuPositions; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */ var menuPositions = ["bottom-left", "bottom-right", "top-left", "top-right", "left-bottom", "left-top", "right-bottom", "right-top"];
//# sourceMappingURL=menu-positions.js.map

/***/ }),
/* 941 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootDropdownService; });
/* unused harmony export clrRootDropdownFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROOT_DROPDOWN_PROVIDER; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var RootDropdownService = (function () {
    function RootDropdownService() {
        this._changes = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(RootDropdownService.prototype, "changes", {
        get: function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    RootDropdownService.prototype.closeMenus = function () {
        this._changes.next(false);
    };
    return RootDropdownService;
}());
RootDropdownService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], RootDropdownService);

function clrRootDropdownFactory(existing) {
    return existing || new RootDropdownService();
}
var ROOT_DROPDOWN_PROVIDER = {
    provide: RootDropdownService,
    useFactory: clrRootDropdownFactory,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */](), RootDropdownService]]
};
//# sourceMappingURL=dropdown.service.js.map

/***/ }),
/* 942 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_dropdown_module__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signpost_signpost_module__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_tooltip_module__ = __webpack_require__(947);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrPopoverModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */




var ClrPopoverModule = (function () {
    function ClrPopoverModule() {
    }
    return ClrPopoverModule;
}());
ClrPopoverModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({ exports: [__WEBPACK_IMPORTED_MODULE_1__dropdown_dropdown_module__["a" /* ClrDropdownModule */], __WEBPACK_IMPORTED_MODULE_2__signpost_signpost_module__["a" /* ClrSignpostModule */], __WEBPACK_IMPORTED_MODULE_3__tooltip_tooltip_module__["a" /* ClrTooltipModule */]] })
], ClrPopoverModule);

//# sourceMappingURL=popover.module.js.map

/***/ }),
/* 943 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_abstract_popover__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signpost_positions__ = __webpack_require__(1010);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignpostContent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



// aka where the arrow / pointer is at in relation to the anchor
var POSITIONS = [
    "top-left",
    "top-middle",
    "top-right",
    "right-top",
    "right-middle",
    "right-bottom",
    "bottom-right",
    "bottom-middle",
    "bottom-left",
    "left-bottom",
    "left-middle",
    "left-top",
];
var SignpostContent = (function (_super) {
    __extends(SignpostContent, _super);
    function SignpostContent(injector, parentHost) {
        var _this = _super.call(this, injector, parentHost) || this;
        // Defaults
        _this.position = "right-middle";
        _this.closeOnOutsideClick = true;
        return _this;
    }
    /**********
     * @function close
     *
     * @description
     * Close function that uses the signpost instance to toggle the state of the content popover.
     *
     */
    SignpostContent.prototype.close = function () {
        this.ifOpenService.open = false;
    };
    Object.defineProperty(SignpostContent.prototype, "position", {
        get: function () {
            return this._position;
        },
        /*********
         * @function set position
         *
         * @description
         * A setter for the position of the SignpostContent popover. This is a combination of the following:
         * - anchorPoint - where on the trigger to anchor the SignpostContent
         * - popoverPoint - where on the SignpostContent container to align with the anchorPoint
         * - offsetY - where on the Y axis to align the SignpostContent so it meets specs
         * - offsetX - where on the X axis to align the SignpostContent so it meets specs
         * There are 12 possible positions to place a SignpostContent container:
         * - top-left
         * - top-middle
         * - top-right
         * - right-top
         * - right-middle
         * - right-bottom
         * - bottom-right
         * - bottom-middle
         * - bottom-left
         * - left-bottom
         * - left-middle
         * - left-top
         *
         * I think of it as follows for 'top-left' -> CONTAINER_SIDE-SIDE_POSITION. In this case CONTAINER_SIDE is 'top'
         * meaning the top of the trigger icon (above the icon that hides/shows) the SignpostContent. And, SIDE_POSITION is
         * 'left' meaning two things: 1) the SignpostContent container extends to the left and 2) the 'arrow/pointer'
         * linking the SingpostContent to the trigger points down at the horizontal center of the trigger icon.
         *
         * @param newPosition
         */
        set: function (position) {
            // Ugh
            this.renderer.removeClass(this.el.nativeElement, this.position);
            if (position && (POSITIONS.indexOf(position) > -1)) {
                this._position = position;
            }
            else {
                this._position = "right-middle";
            }
            // Ugh
            this.renderer.addClass(this.el.nativeElement, this.position);
            var setPosition = __WEBPACK_IMPORTED_MODULE_2__signpost_positions__["a" /* SIGNPOST_POSITIONS */][this.position];
            this.anchorPoint = setPosition.anchorPoint;
            this.popoverPoint = setPosition.popoverPoint;
            this.popoverOptions.offsetY = setPosition.offsetY;
            this.popoverOptions.offsetX = setPosition.offsetX;
        },
        enumerable: true,
        configurable: true
    });
    return SignpostContent;
}(__WEBPACK_IMPORTED_MODULE_1__common_abstract_popover__["a" /* AbstractPopover */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPosition"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SignpostContent.prototype, "position", null);
SignpostContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-signpost-content",
        template: "\n        <div class=\"signpost-flex-wrap\">\n            <div class=\"popover-pointer\"></div>\n            <div class=\"signpost-content-header\">\n                <button type=\"button\" class=\"signpost-action close\" aria-label=\"Close\" (click)=\"close()\">\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n                </button>\n            </div>\n            <div class=\"signpost-content-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
        host: { "[class.signpost-content]": "true" }
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object])
], SignpostContent);

var _a, _b;
//# sourceMappingURL=signpost-content.js.map

/***/ }),
/* 944 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_content__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_trigger__ = __webpack_require__(946);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOOLTIP_DIRECTIVES; });






var TOOLTIP_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__tooltip__["a" /* Tooltip */], __WEBPACK_IMPORTED_MODULE_2__tooltip_trigger__["a" /* TooltipTrigger */], __WEBPACK_IMPORTED_MODULE_1__tooltip_content__["a" /* TooltipContent */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 945 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_abstract_popover__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_popover__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipContent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var POSITIONS = ["bottom-left", "bottom-right", "top-left", "top-right", "right", "left"];
var SIZES = ["xs", "sm", "md", "lg"];
var TooltipContent = (function (_super) {
    __extends(TooltipContent, _super);
    function TooltipContent(injector, parentHost) {
        var _this = _super.call(this, injector, parentHost) || this;
        // Defaults
        _this.position = "right";
        _this.size = "sm";
        return _this;
    }
    Object.defineProperty(TooltipContent.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            // Ugh
            this.renderer.removeClass(this.el.nativeElement, "tooltip-" + this.position);
            if (position && (POSITIONS.indexOf(position) > -1)) {
                this._position = position;
            }
            else {
                this._position = "right";
            }
            // Ugh
            this.renderer.addClass(this.el.nativeElement, "tooltip-" + this.position);
            // set the popover values based on direction
            switch (position) {
                case ("top-right"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].TOP_CENTER;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_BOTTOM;
                    break;
                case ("top-left"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].TOP_CENTER;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_BOTTOM;
                    break;
                case ("bottom-right"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].BOTTOM_CENTER;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
                    break;
                case ("bottom-left"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].BOTTOM_CENTER;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_TOP;
                    break;
                case ("right"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_CENTER;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
                    break;
                case ("left"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_CENTER;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_TOP;
                    break;
                default:
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].RIGHT_CENTER;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_2__common_popover__["a" /* Point */].LEFT_TOP;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipContent.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            // Ugh
            this.renderer.removeClass(this.el.nativeElement, "tooltip-" + this.size);
            if (size && (SIZES.indexOf(size) > -1)) {
                this._size = size;
            }
            else {
                this._size = "sm";
            }
            // Ugh
            this.renderer.addClass(this.el.nativeElement, "tooltip-" + this.size);
        },
        enumerable: true,
        configurable: true
    });
    return TooltipContent;
}(__WEBPACK_IMPORTED_MODULE_1__common_abstract_popover__["a" /* AbstractPopover */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrPosition"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TooltipContent.prototype, "position", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrSize"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TooltipContent.prototype, "size", null);
TooltipContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-tooltip-content",
        template: "\n        <ng-content></ng-content>\n    ",
        host: {
            "[class.tooltip-content]": "true",
            // I'm giving up on animation, they did not work before and will not work now.
            // Too many conflicts with Clarity UI.
            "[style.opacity]": "1"
        }
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object])
], TooltipContent);

var _a, _b;
//# sourceMappingURL=tooltip-content.js.map

/***/ }),
/* 946 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipTrigger; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var TooltipTrigger = (function () {
    function TooltipTrigger(ifOpenService) {
        this.ifOpenService = ifOpenService;
    }
    TooltipTrigger.prototype.showTooltip = function () {
        this.ifOpenService.open = true;
    };
    TooltipTrigger.prototype.hideTooltip = function () {
        this.ifOpenService.open = false;
    };
    return TooltipTrigger;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("mouseenter"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("focus"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipTrigger.prototype, "showTooltip", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("mouseleave"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("blur"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipTrigger.prototype, "hideTooltip", null);
TooltipTrigger = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrTooltipTrigger]", host: { "[attr.tabindex]": "0" } }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */]) === "function" && _a || Object])
], TooltipTrigger);

var _a;
//# sourceMappingURL=tooltip-trigger.js.map

/***/ }),
/* 947 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_conditional_conditional_module__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_popover_module__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(944);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrTooltipModule; });
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






var ClrTooltipModule = (function () {
    function ClrTooltipModule() {
    }
    return ClrTooltipModule;
}());
ClrTooltipModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__common_popover_module__["a" /* ClrCommonPopoverModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__index__["a" /* TOOLTIP_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__index__["a" /* TOOLTIP_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_3__utils_conditional_conditional_module__["a" /* ClrConditionalModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */]]
    })
], ClrTooltipModule);

//# sourceMappingURL=tooltip.module.js.map

/***/ }),
/* 948 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__ = __webpack_require__(810);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var Tooltip = (function () {
    function Tooltip() {
    }
    return Tooltip;
}());
Tooltip = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-tooltip",
        template: "\n        <ng-content></ng-content>\n    ",
        host: {
            "[class.tooltip]": "true",
        },
        providers: [__WEBPACK_IMPORTED_MODULE_1__utils_conditional_if_open_service__["a" /* IfOpenService */]]
    })
], Tooltip);

//# sourceMappingURL=tooltip.js.map

/***/ }),
/* 949 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OompaLoompa; });
var OompaLoompa = (function () {
    // FIXME: Request Injector once we move to Angular 4.2+, it'll allow easier refactors
    function OompaLoompa(cdr, willyWonka) {
        var _this = this;
        this.subscription = willyWonka.chocolate.subscribe(function () {
            if (_this.latestFlavor !== _this.flavor) {
                cdr.detectChanges();
            }
        });
    }
    OompaLoompa.prototype.ngAfterContentChecked = function () {
        this.latestFlavor = this.flavor;
    };
    OompaLoompa.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return OompaLoompa;
}());

//# sourceMappingURL=oompa-loompa.js.map

/***/ }),
/* 950 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__if_active_service__ = __webpack_require__(822);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfActiveDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var IfActiveDirective = (function () {
    function IfActiveDirective(ifActiveService, id, template, container) {
        var _this = this;
        this.ifActiveService = ifActiveService;
        this.id = id;
        this.template = template;
        this.container = container;
        this.wasActive = false;
        /**********
         * @property activeChange
         *
         * @description
         * An event emitter that emits when the active property is set to allow for 2way binding when the directive is
         * used with de-structured / de-sugared syntax.
         *
         * @type {EventEmitter<any>}
         */
        this.activeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this.checkAndUpdateView(ifActiveService.current);
        this.subscription = this.ifActiveService.currentChange.subscribe(function (newCurrentId) {
            _this.checkAndUpdateView(newCurrentId);
        });
    }
    IfActiveDirective.prototype.checkAndUpdateView = function (currentId) {
        var isNowActive = currentId === this.id;
        // only emit if the new active state is changed since last time.
        if (isNowActive !== this.wasActive) {
            this.updateView(isNowActive);
            this.activeChange.emit(isNowActive);
            this.wasActive = isNowActive;
        }
    };
    Object.defineProperty(IfActiveDirective.prototype, "active", {
        /********
         * @function active
         *
         * @description
         * A getter that returns the current IfActiveService.active value.
         * @returns {any}
         */
        get: function () {
            return this.ifActiveService.current === this.id;
        },
        /*********
         * @function active
         *
         * @description
         * A setter that updates IfActiveService.active with value.
         *
         * @param value
         */
        set: function (value) {
            if (value) {
                this.ifActiveService.current = this.id;
            }
        },
        enumerable: true,
        configurable: true
    });
    /*********
     * @function updateView
     *
     * @description
     * Function that takes a any value and either created an embedded view for the associated ViewContainerRef or,
     * Clears all views from the ViewContainerRef
     * @param value
     */
    IfActiveDirective.prototype.updateView = function (value) {
        if (value) {
            this.container.createEmbeddedView(this.template);
        }
        else {
            this.container.clear();
        }
    };
    IfActiveDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return IfActiveDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrIfActive"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], IfActiveDirective.prototype, "active", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrIfActiveChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], IfActiveDirective.prototype, "activeChange", void 0);
IfActiveDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrIfActive]" })
    /**********
     *
     * @class IfActiveDirective
     *
     * @description
     * A structural directive that controls whether or not the associated TemplateRef is instantiated or not.
     * It makes use of a Component instance level service: IfActiveService to maintain state between itself and
     * the component using it in the component template.
     *
     */
    ,
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__if_active_service__["a" /* IF_ACTIVE_ID */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__if_active_service__["b" /* IfActiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__if_active_service__["b" /* IfActiveService */]) === "function" && _b || Object, Number, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _d || Object])
], IfActiveDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=if-active.directive.js.map

/***/ }),
/* 951 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__if_open_service__ = __webpack_require__(810);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfOpenDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var IfOpenDirective = (function () {
    function IfOpenDirective(ifOpenService, template, container) {
        var _this = this;
        this.ifOpenService = ifOpenService;
        this.template = template;
        this.container = container;
        /**********
         * @property openChange
         *
         * @description
         * An event emitter that emits when the open property is set to allow for 2way binding when the directive is
         * used with de-structured / de-sugared syntax.
         *
         * @type {EventEmitter<boolean>}
         */
        this.openChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this.subscription = this.ifOpenService.openChange.subscribe(function (change) {
            _this.updateView(change);
            _this.openChange.emit(change);
        });
    }
    Object.defineProperty(IfOpenDirective.prototype, "open", {
        /********
         * @function open
         *
         * @description
         * A getter that returns the current IfOpenService.open value.
         * @returns {boolean}
         */
        get: function () {
            return this.ifOpenService.open;
        },
        /*********
         * @function open
         *
         * @description
         * A setter that updates IfOpenService.open with value.
         *
         * @param value
         */
        set: function (value) {
            this.ifOpenService.open = value;
        },
        enumerable: true,
        configurable: true
    });
    /*********
     * @function updateView
     *
     * @description
     * Function that takes a boolean value and either created an embedded view for the associated ViewContainerRef or,
     * Clears all views from the ViewContainerRef
     * @param value
     */
    IfOpenDirective.prototype.updateView = function (value) {
        if (value) {
            this.container.createEmbeddedView(this.template);
        }
        else {
            this.container.clear();
        }
    };
    IfOpenDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return IfOpenDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrIfOpen"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], IfOpenDirective.prototype, "open", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrIfOpenChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], IfOpenDirective.prototype, "openChange", void 0);
IfOpenDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrIfOpen]" })
    /**********
     *
     * @class IfOpenDirective
     *
     * @description
     * A structural directive that controls whether or not the associated TemplateRef is instantiated or not.
     * It makes use of a Component instance level service: IfOpenService to maintain state between itself and the component
     * using it in the component template.
     *
     */
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__if_open_service__["a" /* IfOpenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__if_open_service__["a" /* IfOpenService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _d || Object])
], IfOpenDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=if-open.directive.js.map

/***/ }),
/* 952 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_expand__ = __webpack_require__(815);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfExpanded; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


/**
 * TODO: make this a reusable directive outside of Datagrid, like [clrLoading].
 */
var IfExpanded = (function () {
    function IfExpanded(template, container, expand) {
        var _this = this;
        this.template = template;
        this.container = container;
        this.expand = expand;
        this._expanded = false;
        this.expandedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](true);
        /**
         * Subscriptions to all the services and queries changes
         */
        this._subscriptions = [];
        expand.expandable++;
        this._subscriptions.push(expand.expandChange.subscribe(function () {
            _this.updateView();
            _this.expandedChange.emit(_this.expand.expanded);
        }));
    }
    Object.defineProperty(IfExpanded.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (value) {
            if (typeof value === "boolean") {
                this.expand.expanded = value;
                this._expanded = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    IfExpanded.prototype.updateView = function () {
        if (this.expand.expanded && this.container.length !== 0) {
            return;
        }
        if (this.expand.expanded) {
            // Should we pass a context? I don't see anything useful to pass right now,
            // but we can come back to it in the future as a solution for additional features.
            this.container.createEmbeddedView(this.template);
        }
        else {
            // TODO: Move when we move the animation logic to Datagrid Row Expand
            // We clear before the animation is over. Not ideal, but doing better would involve a much heavier
            // process for very little gain. Once Angular animations are dynamic enough, we should be able to
            // get the optimal behavior.
            this.container.clear();
        }
    };
    IfExpanded.prototype.ngOnInit = function () {
        this.updateView();
    };
    IfExpanded.prototype.ngOnDestroy = function () {
        this.expand.expandable--;
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    return IfExpanded;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrIfExpanded"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], IfExpanded.prototype, "expanded", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrIfExpandedChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], IfExpanded.prototype, "expandedChange", void 0);
IfExpanded = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrIfExpanded]" }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__providers_expand__["a" /* Expand */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_expand__["a" /* Expand */]) === "function" && _d || Object])
], IfExpanded);

var _a, _b, _c, _d;
//# sourceMappingURL=if-expanded.js.map

/***/ }),
/* 953 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(1024);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrFocusTrapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var ClrFocusTrapModule = (function () {
    function ClrFocusTrapModule() {
    }
    return ClrFocusTrapModule;
}());
ClrFocusTrapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* FOCUS_TRAP_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* FOCUS_TRAP_DIRECTIVES */]] })
], ClrFocusTrapModule);

//# sourceMappingURL=focus-trap.module.js.map

/***/ }),
/* 954 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading__ = __webpack_require__(955);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_listener__ = __webpack_require__(823);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOADING_DIRECTIVES; });



var LOADING_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__loading__["a" /* Loading */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 955 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_listener__ = __webpack_require__(823);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var Loading = (function () {
    // We find the first parent that handles something loading
    function Loading(listener) {
        this.listener = listener;
        this._loading = false;
    }
    Object.defineProperty(Loading.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (value) {
            value = !!value;
            if (value === this._loading) {
                return;
            }
            this._loading = value;
            if (this.listener) {
                if (value) {
                    this.listener.startLoading();
                }
                else {
                    this.listener.doneLoading();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Loading.prototype.ngOnDestroy = function () {
        this.loading = false;
    };
    return Loading;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrLoading"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Loading.prototype, "loading", null);
Loading = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrLoading]" }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__loading_listener__["a" /* LoadingListener */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__loading_listener__["a" /* LoadingListener */]) === "function" && _a || Object])
], Loading);

var _a;
//# sourceMappingURL=loading.js.map

/***/ }),
/* 956 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutsideClick; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var OutsideClick = (function () {
    function OutsideClick(el) {
        this.el = el;
        this.strict = false;
        this.outsideClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
    }
    OutsideClick.prototype.documentClick = function (event) {
        var target = event.target; // Get the element in the DOM on which the mouse was clicked
        var host = this.el.nativeElement; // Get the current actionMenu native HTML element
        if (target === host) {
            return;
        }
        if (!this.strict && host.contains(target)) {
            return;
        }
        this.outsideClick.emit(event);
    };
    return OutsideClick;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrStrict"),
    __metadata("design:type", Object)
], OutsideClick.prototype, "strict", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrOutsideClick"),
    __metadata("design:type", Object)
], OutsideClick.prototype, "outsideClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("document:click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OutsideClick.prototype, "documentClick", null);
OutsideClick = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrOutsideClick]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object])
], OutsideClick);

var _a;
//# sourceMappingURL=outside-click.js.map

/***/ }),
/* 957 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_page_buttons__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_page_header_actions__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_page_navtitle__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_page_title__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wizard__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wizard_button__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wizard_custom_tags__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wizard_header_action__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wizard_page__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wizard_stepnav__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wizard_stepnav_item__ = __webpack_require__(960);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WIZARD_DIRECTIVES; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */






// directives











// directives





var WIZARD_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_4__wizard__["a" /* Wizard */], __WEBPACK_IMPORTED_MODULE_8__wizard_page__["a" /* WizardPage */], __WEBPACK_IMPORTED_MODULE_9__wizard_stepnav__["a" /* WizardStepnav */], __WEBPACK_IMPORTED_MODULE_10__wizard_stepnav_item__["a" /* WizardStepnavItem */], __WEBPACK_IMPORTED_MODULE_5__wizard_button__["a" /* WizardButton */], __WEBPACK_IMPORTED_MODULE_7__wizard_header_action__["a" /* WizardHeaderAction */], __WEBPACK_IMPORTED_MODULE_6__wizard_custom_tags__["a" /* WizardCustomTags */],
    __WEBPACK_IMPORTED_MODULE_3__directives_page_title__["a" /* WizardPageTitleDirective */], __WEBPACK_IMPORTED_MODULE_2__directives_page_navtitle__["a" /* WizardPageNavTitleDirective */], __WEBPACK_IMPORTED_MODULE_0__directives_page_buttons__["a" /* WizardPageButtonsDirective */], __WEBPACK_IMPORTED_MODULE_1__directives_page_header_actions__["a" /* WizardPageHeaderActionsDirective */]
];
//# sourceMappingURL=index.js.map

/***/ }),
/* 958 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_button_hub__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wizard_navigation__ = __webpack_require__(825);
/* unused harmony export DEFAULT_BUTTON_TYPES */
/* unused harmony export CUSTOM_BUTTON_TYPES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardButton; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULT_BUTTON_TYPES = {
    cancel: "cancel",
    previous: "previous",
    next: "next",
    finish: "finish",
    danger: "danger"
};
var CUSTOM_BUTTON_TYPES = {
    cancel: "custom-cancel",
    previous: "custom-previous",
    next: "custom-next",
    finish: "custom-finish",
    danger: "custom-danger"
};
var WizardButton = (function () {
    function WizardButton(navService, buttonService) {
        this.navService = navService;
        this.buttonService = buttonService;
        this.type = "";
        this.disabled = false;
        this.hidden = false;
        // EventEmitter which is emitted when a button is clicked.
        this.wasClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
    }
    WizardButton.prototype.checkDefaultAndCustomType = function (valueToCheck, typeToLookUp) {
        if (valueToCheck === void 0) { valueToCheck = ""; }
        if (DEFAULT_BUTTON_TYPES[typeToLookUp] === valueToCheck) {
            return true;
        }
        if (CUSTOM_BUTTON_TYPES[typeToLookUp] === valueToCheck) {
            return true;
        }
        return false;
    };
    Object.defineProperty(WizardButton.prototype, "isCancel", {
        get: function () {
            return this.checkDefaultAndCustomType(this.type, "cancel");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardButton.prototype, "isNext", {
        get: function () {
            return this.checkDefaultAndCustomType(this.type, "next");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardButton.prototype, "isPrevious", {
        get: function () {
            return this.checkDefaultAndCustomType(this.type, "previous");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardButton.prototype, "isFinish", {
        get: function () {
            return this.checkDefaultAndCustomType(this.type, "finish");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardButton.prototype, "isDanger", {
        get: function () {
            return this.checkDefaultAndCustomType(this.type, "danger");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardButton.prototype, "isPrimaryAction", {
        get: function () {
            return this.isNext || this.isDanger || this.isFinish;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardButton.prototype, "isDisabled", {
        get: function () {
            // dealing with negatives here. cognitively easier to think of it like this...
            var disabled = true;
            var nav = this.navService;
            var page = this.navService.currentPage;
            if (this.disabled || nav.wizardStopNavigation || !page) {
                return true;
            }
            if (this.isCancel) {
                return !disabled;
            }
            if (this.isPrevious && (nav.currentPageIsFirst || page.previousStepDisabled)) {
                return disabled;
            }
            if (this.isDanger && !page.readyToComplete) {
                return disabled;
            }
            if (this.isNext && (nav.currentPageIsLast || !page.readyToComplete)) {
                return disabled;
            }
            if (this.isFinish && (!nav.currentPageIsLast || !page.readyToComplete)) {
                return disabled;
            }
            return !disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardButton.prototype, "isHidden", {
        get: function () {
            // dealing with negatives here. cognitively easier to think of it like this...
            var hidden = true;
            var nav = this.navService;
            if (this.hidden) {
                return true;
            }
            if (this.isCancel) {
                return !hidden;
            }
            if (this.isPrevious && nav.currentPageIsFirst) {
                return hidden;
            }
            if (this.isNext && nav.currentPageIsLast) {
                return hidden;
            }
            if (this.isFinish && !nav.currentPageIsLast) {
                return hidden;
            }
            return !hidden;
        },
        enumerable: true,
        configurable: true
    });
    WizardButton.prototype.click = function () {
        if (this.isDisabled) {
            return;
        }
        this.wasClicked.emit(this.type);
        this.buttonService.buttonClicked(this.type);
    };
    return WizardButton;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("type"),
    __metadata("design:type", String)
], WizardButton.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardButtonDisabled"),
    __metadata("design:type", Boolean)
], WizardButton.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardButtonHidden"),
    __metadata("design:type", Boolean)
], WizardButton.prototype, "hidden", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardButtonClicked"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], WizardButton.prototype, "wasClicked", void 0);
WizardButton = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-wizard-button",
        template: "\n        <button\n            type=\"button\"\n            class=\"btn clr-wizard-btn\"\n            [class.btn-link]=\"isCancel\"\n            [class.clr-wizard-btn--tertiary]=\"isCancel\"\n            [class.btn-outline]=\"isPrevious\"\n            [class.clr-wizard-btn--secondary]=\"isPrevious\"\n            [class.btn-primary]=\"isPrimaryAction\"\n            [class.clr-wizard-btn--primary]=\"isPrimaryAction\"\n            [class.btn-success]=\"isFinish\"\n            [class.btn-danger]=\"isDanger\"\n            [class.disabled]=\"isDisabled\"\n            (click)=\"click()\">\n            <ng-content></ng-content>\n        </button>\n    ",
        host: { "class": "clr-wizard-btn-wrapper", "[attr.aria-hidden]": "isHidden" },
        styles: ["[aria-hidden=\"true\"] { display: none; }"]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_wizard_navigation__["a" /* WizardNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_wizard_navigation__["a" /* WizardNavigationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_button_hub__["a" /* ButtonHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_button_hub__["a" /* ButtonHubService */]) === "function" && _c || Object])
], WizardButton);

var _a, _b, _c;
//# sourceMappingURL=wizard-button.js.map

/***/ }),
/* 959 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardCustomTags; });
/*
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

var WizardCustomTags = (function () {
    function WizardCustomTags() {
    }
    return WizardCustomTags;
}());
WizardCustomTags = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-wizard-title, clr-wizard-pagetitle" })
], WizardCustomTags);

//# sourceMappingURL=wizard-custom-tags.js.map

/***/ }),
/* 960 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_page_collection__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wizard_navigation__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizard_page__ = __webpack_require__(839);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardStepnavItem; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WizardStepnavItem = (function () {
    function WizardStepnavItem(navService, pageCollection) {
        this.navService = navService;
        this.pageCollection = pageCollection;
    }
    WizardStepnavItem.prototype.pageGuard = function () {
        if (!this.page) {
            throw new Error("Wizard stepnav item is not associated with a wizard page.");
        }
    };
    Object.defineProperty(WizardStepnavItem.prototype, "id", {
        get: function () {
            this.pageGuard();
            return this.pageCollection.getStepItemIdForPage(this.page);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardStepnavItem.prototype, "isDisabled", {
        get: function () {
            this.pageGuard();
            return this.page.disabled || this.navService.wizardStopNavigation || this.navService.wizardDisableStepnav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardStepnavItem.prototype, "isCurrent", {
        get: function () {
            this.pageGuard();
            return this.page.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardStepnavItem.prototype, "isComplete", {
        get: function () {
            this.pageGuard();
            return this.page.completed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardStepnavItem.prototype, "canNavigate", {
        get: function () {
            this.pageGuard();
            return this.pageCollection.previousPageIsCompleted(this.page);
        },
        enumerable: true,
        configurable: true
    });
    WizardStepnavItem.prototype.click = function () {
        this.pageGuard();
        // if we click on our own stepnav or a disabled stepnav, we don't want to do anything
        if (this.isDisabled || this.isCurrent) {
            return;
        }
        this.navService.goTo(this.page);
    };
    return WizardStepnavItem;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("page"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__wizard_page__["a" /* WizardPage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__wizard_page__["a" /* WizardPage */]) === "function" && _a || Object)
], WizardStepnavItem.prototype, "page", void 0);
WizardStepnavItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "[clr-wizard-stepnav-item]",
        template: "\n        <button type=\"button\" class=\"btn btn-link clr-wizard-stepnav-link\" (click)=\"click()\">\n            <ng-template [ngTemplateOutlet]=\"page.navTitle\"></ng-template>\n        </button>\n    ",
        host: {
            "[id]": "id",
            "[attr.aria-selected]": "isCurrent",
            "[attr.aria-controls]": "id",
            "role": "presentation",
            "[class.clr-nav-link]": "true",
            "[class.nav-item]": "true",
            "[class.active]": "isCurrent",
            "[class.disabled]": "isDisabled",
            "[class.no-click]": "!canNavigate",
            "[class.complete]": "isComplete"
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_wizard_navigation__["a" /* WizardNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_wizard_navigation__["a" /* WizardNavigationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_page_collection__["a" /* PageCollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_page_collection__["a" /* PageCollectionService */]) === "function" && _c || Object])
], WizardStepnavItem);

var _a, _b, _c;
//# sourceMappingURL=wizard-stepnav-item.js.map

/***/ }),
/* 961 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_page_collection__ = __webpack_require__(824);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardStepnav; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardStepnav = (function () {
    function WizardStepnav(pageService) {
        this.pageService = pageService;
    }
    return WizardStepnav;
}());
WizardStepnav = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-wizard-stepnav",
        template: "\n        <ol class=\"clr-wizard-stepnav-list\" role=\"tablist\">\n            <li *ngFor=\"let page of pageService.pages\" clr-wizard-stepnav-item \n            [page]=\"page\" class=\"clr-wizard-stepnav-item\"></li>\n        </ol>\n    ",
        host: { "class": "clr-wizard-stepnav" }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_page_collection__["a" /* PageCollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_page_collection__["a" /* PageCollectionService */]) === "function" && _a || Object])
], WizardStepnav);

var _a;
//# sourceMappingURL=wizard-stepnav.js.map

/***/ }),
/* 962 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emphasis_alert_alert_module__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_module__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(957);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrWizardModule; });
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





var ClrWizardModule = (function () {
    function ClrWizardModule() {
    }
    return ClrWizardModule;
}());
ClrWizardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__modal_modal_module__["a" /* ClrModalModule */], __WEBPACK_IMPORTED_MODULE_2__emphasis_alert_alert_module__["a" /* ClrAlertModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* WIZARD_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* WIZARD_DIRECTIVES */]]
    })
], ClrWizardModule);

//# sourceMappingURL=wizard.module.js.map

/***/ }),
/* 963 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_utils_ghost_page_animations__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_button_hub__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_header_actions__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_page_collection__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_wizard_navigation__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wizard_header_action__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wizard_page__ = __webpack_require__(839);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wizard; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// providers



/**
 * The Wizard component
 *
 * @export
 * @class Wizard
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {AfterContentInit}
 * @implements {DoCheck}
 */
var Wizard = (function () {
    /**
     * Creates an instance of Wizard.
     * @param {WizardNavigationService} navService
     * @param {PageCollectionService} pageCollection
     * @param {ButtonHubService} buttonService
     * @param {HeaderActionService} headerActionService
     * @param {ElementRef} elementRef
     * @param {IterableDiffers} differs
     *
     * @memberof Wizard
     */
    function Wizard(navService, pageCollection, buttonService, headerActionService, elementRef, differs) {
        var _this = this;
        this.navService = navService;
        this.pageCollection = pageCollection;
        this.buttonService = buttonService;
        this.headerActionService = headerActionService;
        this.elementRef = elementRef;
        this.differs = differs;
        /**
         * Contains the size defined by the clrWizardSize input
         * @name size
         * @type {string}
         * @default "xl"
         * @memberof Wizard
         */
        this.size = "xl";
        /**
         * The property that reveals the ghost pages in the wizard. Set through the
         * clrWizardShowGhostPages input.
         *
         * @name showGhostPages
         * @default false
         * @type {boolean}
         * @memberof Wizard
         */
        this.showGhostPages = false;
        this._forceForward = false;
        /**
         * Tells the modal part of the wizard whether it should have a close "X"
         * in the top right corner. Set with the clrWizardClosable input.
         *
         * @name closable
         * @type {boolean}
         * @memberof Wizard
         */
        this.closable = true;
        /**
         * Toggles open/close of the wizard component. Set using the clrWizardOpen
         * input.
         *
         * @name _open
         * @type {boolean}
         * @memberof Wizard
         */
        this._open = false;
        /**
         * Emits when the wizard is opened or closed. Emits through the
         * clrWizardOpenChange output. Works in conjunction with the
         * clrWizardOpen binding so you can use...
         *
         * <clr-wizard [(clrWizardOpen)]="blah"
         * ...or...
         * <clr-wizard [clrWizardOpen]="something" (clrWizardOpenChange)="doSomethign($event)">
         *
         * ...for two-way binding.
         *
         * @name _openChanged
         * @type {EventEmitter<boolean>}
         * @memberof Wizard
         */
        this._openChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * Emits when the wizard is canceled. Can be observed through the clrWizardOnCancel
         * output.
         *
         * Can be combined with the clrWizardPreventDefaultCancel input to create
         * wizard-level custom cancel routines.
         *
         * @name onCancel
         * @type {EventEmitter<any>}
         * @memberof Wizard
         */
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * Emits when the wizard is completed. Can be observed through the clrWizardOnFinish
         * output.
         *
         * Can be combined with the clrWizardPreventDefaultNext input to create
         * wizard-level custom completion routines.
         *
         * @name onFinish
         * @type {EventEmitter<any>}
         * @memberof Wizard
         */
        this.wizardFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * Emits when the wizard is reset. See .reset(). Can be observed through
         * the clrWizardOnReset output.
         *
         * @name onReset
         * @type {EventEmitter<any>}
         * @memberof Wizard
         */
        this.onReset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * Emits when the current page has changed. Can be observed through the clrWizardCurrentPageChanged
         * output. This can happen on .next() or .previous().
         * Useful for non-blocking validation.
         *
         * @name currentPageChanged
         * @type {EventEmitter<any>}
         * @memberof Wizard
         */
        this.currentPageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * Emits when the wizard moves to the next page. Can be observed through the clrWizardOnNext
         * output.
         *
         * Can be combined with the clrWizardPreventDefaultNext input to create
         * wizard-level custom navigation routines, which are useful for validation.
         *
         * @name onMoveNext
         * @type {EventEmitter<any>}
         * @memberof Wizard
         */
        this.onMoveNext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        /**
         * Emits when the wizard moves to the previous page. Can be observed through the
         * clrWizardOnPrevious output.
         *
         * Can be useful for validation.
         *
         * @name onMovePrevious
         * @type {EventEmitter<any>}
         * @memberof Wizard
         */
        this.onMovePrevious = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
        this._stopNext = false;
        this._stopCancel = false;
        this._stopNavigation = false;
        this._disableStepnav = false;
        /**
         * Used only to communicate to the underlying modal that animations are not
         * wanted. Primary use is for the display of static/inline wizards.
         *
         * Set using clrWizardPreventModalAnimation input. But you should never set it.
         *
         * @name _stopModalAnimations
         * @type {boolean}
         * @memberof Wizard
         */
        this._stopModalAnimations = false;
        this.goNextSubscription = this.navService.movedToNextPage.subscribe(function () {
            _this.onMoveNext.emit();
        });
        this.goPreviousSubscription = this.navService.movedToPreviousPage.subscribe(function () {
            _this.onMovePrevious.emit();
        });
        this.cancelSubscription = this.navService.notifyWizardCancel.subscribe(function () {
            _this.checkAndCancel();
        });
        this.wizardFinishedSubscription = this.navService.wizardFinished.subscribe(function () {
            if (!_this.stopNext) {
                _this.forceFinish();
            }
            _this.wizardFinished.emit();
        });
        this.differ = differs.find([]).create(null);
    }
    Object.defineProperty(Wizard.prototype, "forceForward", {
        get: function () {
            return this._forceForward;
        },
        /**
         * Resets page completed states when navigating backwards. Can be set using
         * the clrWizardForceForwardNavigation input.
         *
         * @name forceForward
         * @type {boolean}
         * @default false
         * @memberof Wizard
         */
        set: function (value) {
            this._forceForward = !!value;
            this.navService.forceForwardNavigation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "stopNext", {
        get: function () {
            return this._stopNext;
        },
        /**
         * Prevents Wizard from moving to the next page or closing itself on finishing.
         * Set using the clrWizardPreventDefaultNext input.
         *
         * Note that using stopNext will require you to create your own calls to
         * .next() and .finish() in your host component to make the Wizard work as
         * expected.
         *
         * Primarily used for validation.
         *
         * @name stopNext
         * @type {boolean}
         * @memberof Wizard
         */
        set: function (value) {
            this._stopNext = !!value;
            this.navService.wizardHasAltNext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "stopCancel", {
        get: function () {
            return this._stopCancel;
        },
        /**
         * Prevents Wizard from closing when the cancel button or close "X" is clicked.
         * Set using the clrWizardPreventDefaultCancel input.
         *
         * Note that using stopCancel will require you to create your own calls to
         * .close() in your host component to make the Wizard work as expected.
         *
         * Useful for doing checks or prompts before closing a Wizard.
         *
         * @name stopCancel
         * @type {boolean}
         * @memberof Wizard
         */
        set: function (value) {
            this._stopCancel = !!value;
            this.navService.wizardHasAltCancel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "stopNavigation", {
        get: function () {
            return this._stopNavigation;
        },
        /**
         * Prevents Wizard from performing any form of navigation away from the current
         * page. Set using the clrWizardPreventNavigation input.
         *
         * Note that stopNavigation is meant to freeze the wizard in place, typically
         * during a long validation or background action where you want the wizard to
         * display loading content but not allow the user to execute navigation in
         * the stepnav, close X, or the  back, finish, or next buttons.
         *
         * @name stopNavigation
         * @type {boolean}
         * @memberof Wizard
         */
        set: function (value) {
            this._stopNavigation = !!value;
            this.navService.wizardStopNavigation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "disableStepnav", {
        get: function () {
            return this._disableStepnav;
        },
        /**
         * Prevents clicks on the links in the stepnav from working.
         *
         * A more granular bypassing of navigation which can be useful when your
         * Wizard is in a state of completion and you don't want users to be
         * able to jump backwards and change things.
         *
         * @name disableStepnav
         * @type {boolean}
         * @memberof Wizard
         */
        set: function (value) {
            this._disableStepnav = !!value;
            this.navService.wizardDisableStepnav = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "stopModalAnimations", {
        get: function () {
            if (this._stopModalAnimations) {
                return "true";
            }
            return "false";
        },
        enumerable: true,
        configurable: true
    });
    Wizard.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPageSubscription = this.navService.currentPageChanged.subscribe(function (page) {
            _this.setGhostPages();
            _this.currentPageChanged.emit();
        });
    };
    Wizard.prototype.ngOnDestroy = function () {
        this.goNextSubscription.unsubscribe();
        this.goPreviousSubscription.unsubscribe();
        this.cancelSubscription.unsubscribe();
        this.currentPageSubscription.unsubscribe();
        this.wizardFinishedSubscription.unsubscribe();
    };
    /**
     * Sets up references that are needed by the providers.
     *
     * @name ngAfterContentInit
     * @memberof Wizard
     */
    Wizard.prototype.ngAfterContentInit = function () {
        var navService = this.navService;
        this.pageCollection.pages = this.pages;
        this.headerActionService.wizardHeaderActions = this.headerActions;
        if (this.showGhostPages) {
            navService.hideWizardGhostPages = false;
            this.deactivateGhostPages();
        }
    };
    /**
     * Used for keeping track of when pages are added or removed from this.pages
     *
     * @name ngDoCheck
     * @memberof Wizard
     */
    Wizard.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.pages);
        if (changes) {
            changes.forEachAddedItem(function (r) {
                _this.navService.updateNavigation();
            });
            changes.forEachRemovedItem(function (r) {
                _this.navService.updateNavigation();
            });
        }
    };
    Object.defineProperty(Wizard.prototype, "isStatic", {
        /**
         * Convenient property for determining whether a wizard is static/in-line or not.
         *
         * @name isStatic
         * @readonly
         * @type {boolean}
         * @memberof Wizard
         */
        get: function () {
            return this.elementRef.nativeElement.classList.contains("clr-wizard--inline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "currentPage", {
        /**
         * As a getter, current page is a convenient way to retrieve the current page from
         * the WizardNavigationService.
         *
         * As a setter, current page accepts a WizardPage and passes it to WizardNavigationService
         * to be made the current page. currentPage performs checks to make sure it can navigate
         * to the designated page.
         *
         * @name currentPage
         * @type {WizardPage}
         * @memberof Wizard
         */
        get: function () {
            return this.navService.currentPage;
        },
        set: function (page) {
            this.navService.goTo(page, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "isLast", {
        /**
         * Convenient property for determining if the current page is the last page of
         * the wizard.
         *
         * @name isLast
         * @readonly
         * @type {boolean}
         * @memberof Wizard
         */
        get: function () {
            return this.navService.currentPageIsLast;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wizard.prototype, "isFirst", {
        /**
         * Convenient property for determining if the current page is the first page of
         * the wizard.
         *
         * @name isFirst
         * @readonly
         * @type {boolean}
         * @memberof Wizard
         */
        get: function () {
            return this.navService.currentPageIsFirst;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Performs the actions needed to open the wizard. If there is no current
     * page defined, sets the first page in the wizard to be current.
     *
     * @name open
     * @memberof Wizard
     */
    Wizard.prototype.open = function () {
        this._open = true;
        if (!this.currentPage) {
            this.navService.setFirstPageCurrent();
        }
        this.setGhostPages();
        this._openChanged.emit(true);
    };
    /**
     * Does the work involved with closing the wizard. Call this directly instead
     * of cancel() to implement alternative cancel functionality.
     *
     * @name close
     * @memberof Wizard
     */
    Wizard.prototype.close = function () {
        if (this.stopNavigation) {
            return;
        }
        this._open = false;
        this.deactivateGhostPages();
        this._openChanged.emit(false);
    };
    /**
     * Convenient function that can be used to open and close the wizard. It operates
     * by checking a Boolean parameter. If true, the wizard is opened. If false,
     * it is closed.
     *
     * There is no default value for this parameter, so by default the wizard will
     * close if invoked with no parameter.
     *
     * @name toggle
     * @param {boolean} value
     *
     * @memberof Wizard
     */
    Wizard.prototype.toggle = function (value) {
        if (value) {
            this.open();
        }
        else {
            this.close();
        }
    };
    /**
     * DEPRECATED. Moves the wizard to the previous page. Carried over from legacy.
     *
     * It is recommended that you use previous() instead.
     *
     * @name prev
     * @memberof Wizard
     */
    Wizard.prototype.prev = function () {
        this.previous();
    };
    /**
     * Moves the wizard to the previous page.
     *
     * @name previous
     * @memberof Wizard
     */
    Wizard.prototype.previous = function () {
        this.navService.previous();
    };
    /**
     * Includes a Boolean parameter that will skip checks and event emissions.
     * If true, the wizard will move to the next page regardless of the state of
     * its current page. This is useful for alternative navigation where event
     * emissions have already been done and firing them again may cause an event loop.
     *
     * Generally, with alternative navigation, users are supplying their own checks
     * and validation. So there is no point in superseding their business logic
     * with our default behavior.
     *
     * If false, the wizard will execute default checks and emit events as normal.
     * This is useful for custom buttons or programmatic workflows that are not
     * executing the wizards default checks and emissions. It is another way to
     * navigate without having to rewrite the wizard’s default functionality
     * from scratch.
     *
     * By default, next() does not execute event emissions or checks because the
     * 80% case is that this method will be called as part of an alternative
     * navigation with clrWizardPreventDefaultNext.
     *
     * @name next
     * @memberof Wizard
     */
    Wizard.prototype.next = function (skipChecksAndEmits) {
        if (skipChecksAndEmits === void 0) { skipChecksAndEmits = true; }
        if (skipChecksAndEmits) {
            this.forceNext();
        }
        else {
            this.navService.next();
        }
    };
    /**
     * Includes a Boolean parameter that will skip checks and event emissions.
     * If true, the wizard will  complete and close regardless of the state of
     * its current page. This is useful for alternative navigation where event
     * emissions have already been done and firing them again may cause an event loop.
     *
     * If false, the wizard will execute default checks and emit events before
     * completing and closing.
     *
     * By default, finish() does not execute event emissions or checks because the
     * 80% case is that this method will be called as part of an alternative
     * navigation with clrWizardPreventDefaultNext.
     *
     * @name finish
     * @memberof Wizard
     */
    Wizard.prototype.finish = function (skipChecksAndEmits) {
        if (skipChecksAndEmits === void 0) { skipChecksAndEmits = true; }
        if (skipChecksAndEmits) {
            this.forceFinish();
        }
        else {
            this.navService.finish();
        }
    };
    /**
     * Does the work of finishing up the wizard and closing it but doesn't do the
     * checks and emissions that other paths do. Good for a last step in an
     * alternate workflow.
     *
     * Does the same thing as calling Wizard.finish(true) or Wizard.finish()
     * without a parameter.
     *
     * @name forceFinish
     * @memberof Wizard
     */
    Wizard.prototype.forceFinish = function () {
        if (this.stopNavigation) {
            return;
        }
        this.deactivateGhostPages();
        this.close();
    };
    /**
     * Does the work of moving the wizard to the next page without the
     * checks and emissions that other paths do. Good for a last step in an
     * alternate workflow.
     *
     * Does the same thing as calling Wizard.next(true) or Wizard.next()
     * without a parameter.
     *
     * @name forceNext
     * @memberof Wizard
     */
    Wizard.prototype.forceNext = function () {
        this.navService.forceNext();
    };
    /**
     * Initiates the functionality that cancels and closes the wizard.
     *
     * Do not use this for an override of the cancel the functionality
     * with clrWizardPreventDefaultCancel, clrWizardPreventPageDefaultCancel,
     * or clrWizardPagePreventDefault because it will initiate the same checks
     * and event emissions that invoked your event handler.
     *
     * Use Wizard.close() instead.
     *
     * @name cancel
     * @memberof Wizard
     */
    Wizard.prototype.cancel = function () {
        this.navService.cancel();
    };
    /**
     * Overrides behavior of the underlying modal to avoid collisions with
     * alternative cancel functionality.
     *
     * In most cases, use Wizard.cancel() instead.
     *
     * @name modalCancel
     * @memberof Wizard
     */
    Wizard.prototype.modalCancel = function () {
        this.checkAndCancel();
    };
    /**
     * Checks for alternative cancel flows defined at the current page or
     * wizard level. Performs a canceled if not. Emits events that initiate
     * the alternative cancel outputs (clrWizardPageOnCancel and
     * clrWizardOnCancel) if so.
     *
     * @name checkAndCancel
     * @memberof Wizard
     */
    Wizard.prototype.checkAndCancel = function () {
        var currentPage = this.currentPage;
        var currentPageHasOverrides = currentPage.stopCancel || currentPage.preventDefault;
        if (this.stopNavigation) {
            return;
        }
        currentPage.pageOnCancel.emit();
        if (!currentPageHasOverrides) {
            this.onCancel.emit();
        }
        if (!this.stopCancel && !currentPageHasOverrides) {
            this.close();
        }
    };
    /**
     * Accepts the wizard ID as a string parameter and calls to WizardNavigationService
     * to navigate to the page with that ID. Navigation will invoke the wizard’s default
     * checks and event emissions.
     *
     * Probably less useful than calling directly to Wizard.navService.goTo() because the
     * nav service method can accept either a string ID or a page object.
     *
     * The format of the expected ID parameter can be found in the return of the
     * WizardPage.id getter, usually prefixed with “clr-wizard-page-“ and then either a
     * numeric ID or the ID specified for the WizardPage component’s “id” input.
     *
     * @name goTo
     * @param {string} pageId
     * @returns {void}
     *
     * @memberof Wizard
     */
    Wizard.prototype.goTo = function (pageId) {
        if (!pageId) {
            return;
        }
        this.navService.goTo(pageId);
    };
    /**
     * A convenience function that calls to PageCollectionService.reset() and emits the
     * Wizard.onReset event.
     *
     * Reset sets all WizardPages to incomplete and sets the first page in the Wizard to
     * be the current page, essentially resetting the wizard navigation.
     *
     * Users would then use the onReset event to reset the data or model in their
     * host component.
     *
     * It could be useful to call a reset without firing the onReset event. To do this,
     * just call Wizard.pageCollection.reset() directly.
     *
     * @name reset
     * @memberof Wizard
     */
    Wizard.prototype.reset = function () {
        this.pageCollection.reset();
        this.onReset.next();
    };
    Object.defineProperty(Wizard.prototype, "ghostPageState", {
        /**
         * A convenience getter to retrieve the ghost Page animation state from
         * WizardNavigationService.
         *
         * @name ghostPageState
         * @readonly
         * @type {string}
         * @memberof Wizard
         */
        get: function () {
            return this.navService.wizardGhostPageState;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Convenience method that resets the ghost page animation.
     *
     * @name deactivateGhostPages
     * @memberof Wizard
     */
    Wizard.prototype.deactivateGhostPages = function () {
        this.setGhostPages("deactivate");
    };
    /**
     * Manages the state of the ghost page animation based on the location
     * of the current page in the workflow.
     *
     * Accepts an optional string parameter that can reset the ghost page
     * animation to its closed state.
     *
     * @name setGhostPages
     * @param {string} [deactivateOrNot=""]
     * @requires module:../modal/utils/ghost-page-animations
     * @requires ghost-page-animations#GHOST_PAGE_ANIMATION
     *
     * @memberof Wizard
     */
    Wizard.prototype.setGhostPages = function (deactivateOrNot) {
        if (deactivateOrNot === void 0) { deactivateOrNot = ""; }
        var navService = this.navService;
        var ghostpageStates = __WEBPACK_IMPORTED_MODULE_1__modal_utils_ghost_page_animations__["a" /* GHOST_PAGE_ANIMATION */].STATES;
        if (this.showGhostPages) {
            if (deactivateOrNot === "deactivate") {
                navService.wizardGhostPageState = ghostpageStates.NO_PAGES;
            }
            else if (navService.currentPageIsLast) {
                navService.wizardGhostPageState = ghostpageStates.LAST_PAGE;
            }
            else if (navService.currentPageIsNextToLast) {
                navService.wizardGhostPageState = ghostpageStates.NEXT_TO_LAST_PAGE;
            }
            else {
                navService.wizardGhostPageState = ghostpageStates.ALL_PAGES;
            }
        }
    };
    return Wizard;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardSize"),
    __metadata("design:type", String)
], Wizard.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardShowGhostPages"),
    __metadata("design:type", Boolean)
], Wizard.prototype, "showGhostPages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardForceForwardNavigation"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Wizard.prototype, "forceForward", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardClosable"),
    __metadata("design:type", Boolean)
], Wizard.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardOpen"),
    __metadata("design:type", Boolean)
], Wizard.prototype, "_open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardOpenChange"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], Wizard.prototype, "_openChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardOnCancel"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], Wizard.prototype, "onCancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardOnFinish"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _c || Object)
], Wizard.prototype, "wizardFinished", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardOnReset"),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _d || Object)
], Wizard.prototype, "onReset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_7__wizard_page__["a" /* WizardPage */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _e || Object)
], Wizard.prototype, "pages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_6__wizard_header_action__["a" /* WizardHeaderAction */]),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _f || Object)
], Wizard.prototype, "headerActions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardCurrentPageChanged"),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _g || Object)
], Wizard.prototype, "currentPageChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardOnNext"),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _h || Object)
], Wizard.prototype, "onMoveNext", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])("clrWizardOnPrevious"),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _j || Object)
], Wizard.prototype, "onMovePrevious", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPreventDefaultNext"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Wizard.prototype, "stopNext", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPreventDefaultCancel"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Wizard.prototype, "stopCancel", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPreventNavigation"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Wizard.prototype, "stopNavigation", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardDisableStepnav"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Wizard.prototype, "disableStepnav", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrWizardPreventModalAnimation"),
    __metadata("design:type", Boolean)
], Wizard.prototype, "_stopModalAnimations", void 0);
Wizard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-wizard",
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_wizard_navigation__["a" /* WizardNavigationService */], __WEBPACK_IMPORTED_MODULE_4__providers_page_collection__["a" /* PageCollectionService */], __WEBPACK_IMPORTED_MODULE_2__providers_button_hub__["a" /* ButtonHubService */], __WEBPACK_IMPORTED_MODULE_3__providers_header_actions__["a" /* HeaderActionService */]],
        template: __webpack_require__(1064),
        host: {
            "[class.clr-wizard]": "true",
            "[class.wizard-md]": "size == 'md'",
            "[class.wizard-lg]": "size == 'lg'",
            "[class.wizard-xl]": "size == 'xl'",
            "[class.lastPage]": "navService.currentPageIsLast",
            "[class.clr-wizard--ghosted]": "showGhostPages"
        }
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__providers_wizard_navigation__["a" /* WizardNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_wizard_navigation__["a" /* WizardNavigationService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__providers_page_collection__["a" /* PageCollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_page_collection__["a" /* PageCollectionService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__providers_button_hub__["a" /* ButtonHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_button_hub__["a" /* ButtonHubService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_3__providers_header_actions__["a" /* HeaderActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_header_actions__["a" /* HeaderActionService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* IterableDiffers */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* IterableDiffers */]) === "function" && _q || Object])
], Wizard);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
//# sourceMappingURL=wizard.js.map

/***/ }),
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_angular_src_layout_vertical_nav_providers_vertical_nav_icon_service__ = __webpack_require__(807);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryEducationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryEducationComponent = (function () {
    function SecondaryEducationComponent(vc) {
        this.vc = vc;
    }
    SecondaryEducationComponent.prototype.ngOnInit = function () {
    };
    return SecondaryEducationComponent;
}());
SecondaryEducationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-secondary-education',
        template: __webpack_require__(1068),
        styles: [__webpack_require__(1047)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_clarity_angular_src_layout_vertical_nav_providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_clarity_angular_src_layout_vertical_nav_providers_vertical_nav_icon_service__["a" /* VerticalNavIconService */]) === "function" && _a || Object])
], SecondaryEducationComponent);

var _a;
//# sourceMappingURL=secondary-education.component.js.map

/***/ }),
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_dropdown_menu_positions__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buttonInGroup_service__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button__ = __webpack_require__(866);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonGroup; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ButtonGroup = (function () {
    function ButtonGroup(buttonGroupNewService, elementRef) {
        this.buttonGroupNewService = buttonGroupNewService;
        this.elementRef = elementRef;
        this.inlineButtons = [];
        this.menuButtons = [];
        this._openMenu = false;
        this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].BOTTOM_LEFT; // default if menuPosition isn't set
        this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_TOP; // default if menuPosition isn't set
        /**
         * Flag with indicates if the overflow menu toggle was clicked.
         * If true, this can save us traversing the DOM to find
         * whether the click was withing the button group toggle
         * or menu in the onMouseClick method
         * @type {boolean}
         * @private
         */
        this._overflowMenuToggleClicked = false;
    }
    /**
     * 1. Initializes the initial Button Group View
     * 2. Subscribes to changes on the ContentChildren
     *    in case the user content projection changes
     */
    ButtonGroup.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initializeButtons();
        this.buttonGroupNewService.changes.subscribe(function (button) { return _this.rearrangeButton(button); });
        this.buttons.changes.subscribe(function () {
            _this.initializeButtons();
        });
    };
    /**
     * Moves the button into the other ViewContainer
     * when an update is received.
     *
     * @param button
     */
    ButtonGroup.prototype.rearrangeButton = function (button) {
        var fromView;
        var toView;
        if (button.inMenu) {
            fromView = this.inlineButtons;
            toView = this.menuButtons;
        }
        else {
            fromView = this.menuButtons;
            toView = this.inlineButtons;
        }
        var index = fromView.indexOf(button);
        if (index > -1) {
            fromView.splice(index, 1);
            var moveIndex = this.getMoveIndex(button);
            if (moveIndex <= toView.length) {
                toView.splice(moveIndex, 0, button);
            }
        }
    };
    /**
     * Author: Eudes
     *
     * Finds the order of a button w.r.t other buttons
     *
     * @param buttonToMove
     * @returns {number}
     */
    ButtonGroup.prototype.getMoveIndex = function (buttonToMove) {
        var tempArr = this.buttons.filter(function (button) { return (button.inMenu === buttonToMove.inMenu); });
        return tempArr.indexOf(buttonToMove);
    };
    /**
     * Finds where each button belongs based on
     * the ContentChildren
     */
    ButtonGroup.prototype.initializeButtons = function () {
        var tempInlineButtons = [];
        var tempInMenuButtons = [];
        this.buttons.forEach(function (button) {
            if (button.inMenu) {
                tempInMenuButtons.push(button);
            }
            else {
                tempInlineButtons.push(button);
            }
        });
        this.inlineButtons = tempInlineButtons;
        this.menuButtons = tempInMenuButtons;
    };
    Object.defineProperty(ButtonGroup.prototype, "menuPosition", {
        get: function () {
            return this._menuPosition;
        },
        set: function (pos) {
            if (pos && (__WEBPACK_IMPORTED_MODULE_2__popover_dropdown_menu_positions__["a" /* menuPositions */].indexOf(pos) > -1)) {
                this._menuPosition = pos;
            }
            else {
                this._menuPosition = "bottom-left";
            }
            // set the popover values based on menu position
            switch (this._menuPosition) {
                case ("top-right"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].TOP_RIGHT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_BOTTOM;
                    break;
                case ("top-left"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].TOP_LEFT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_BOTTOM;
                    break;
                case ("bottom-right"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].BOTTOM_RIGHT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_TOP;
                    break;
                case ("bottom-left"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].BOTTOM_LEFT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_TOP;
                    break;
                case ("right-top"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_TOP;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_TOP;
                    break;
                case ("right-bottom"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_BOTTOM;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_BOTTOM;
                    break;
                case ("left-top"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_TOP;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_TOP;
                    break;
                case ("left-bottom"):
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_BOTTOM;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].RIGHT_BOTTOM;
                    break;
                default:
                    this.anchorPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].BOTTOM_LEFT;
                    this.popoverPoint = __WEBPACK_IMPORTED_MODULE_1__popover_common_popover__["a" /* Point */].LEFT_TOP;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroup.prototype, "openMenu", {
        get: function () {
            return this._openMenu;
        },
        set: function (value) {
            this._openMenu = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle the Dropdown Menu when the Dropdown Toggle is
     * clicked. Also set a flag that indicates that the toggle
     * was clicked so that we don't traverse the DOM to find the
     * location of the click.
     */
    ButtonGroup.prototype.toggleMenu = function () {
        this.openMenu = !this.openMenu;
        this._overflowMenuToggleClicked = true;
    };
    // TODO: Generic Directive to handle this
    /**
     * Called on mouse clicks anywhere in the DOM.
     * Checks to see if the mouseclick happened on the host or outside
     * @param target
     */
    ButtonGroup.prototype.onMouseClick = function (target) {
        if (this.openMenu && !this._overflowMenuToggleClicked) {
            // Reset the overflow menu toggle clicked flag
            this._overflowMenuToggleClicked = false;
            var current = target; // Get the element in the DOM on which the mouse was clicked
            var host = this.elementRef.nativeElement; // Current Button Group
            if (current.classList.contains("dropdown-menu")) {
                current = current.parentNode;
                while (current) {
                    if (current === document) {
                        this.openMenu = false;
                        return;
                    }
                    // If clicked on dropdown menu and menu is in host
                    // do nothing
                    if (current === host) {
                        return;
                    }
                    current = current.parentNode;
                }
            }
            this.openMenu = false;
        }
        this._overflowMenuToggleClicked = false; // Reset the overflow menu toggle clicked flag
    };
    return ButtonGroup;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_4__button__["a" /* Button */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _a || Object)
], ButtonGroup.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("clrMenuPosition"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ButtonGroup.prototype, "menuPosition", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("document:click", ["$event.target"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ButtonGroup.prototype, "onMouseClick", null);
ButtonGroup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-button-group",
        template: __webpack_require__(1057),
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_buttonInGroup_service__["a" /* ButtonInGroupService */]],
        host: { "[class.btn-group]": "true" }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_buttonInGroup_service__["a" /* ButtonInGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_buttonInGroup_service__["a" /* ButtonInGroupService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _c || Object])
], ButtonGroup);

var _a, _b, _c;
//# sourceMappingURL=button-group.js.map

/***/ }),
/* 980 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_loading_loading_listener__ = __webpack_require__(823);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingButton; });
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoadingButton = LoadingButton_1 = (function () {
    function LoadingButton() {
    }
    LoadingButton.prototype.startLoading = function () {
        this.loading = true;
    };
    LoadingButton.prototype.doneLoading = function () {
        this.loading = false;
    };
    return LoadingButton;
}());
LoadingButton = LoadingButton_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "button[clrLoading]",
        template: "\n        <span class=\"spinner spinner-inline\" *ngIf=\"loading\"></span>\n        <ng-content></ng-content>\n    ",
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__utils_loading_loading_listener__["a" /* LoadingListener */], useExisting: LoadingButton_1 }]
    })
], LoadingButton);

var LoadingButton_1;
//# sourceMappingURL=loading-button.js.map

/***/ }),
/* 981 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_module__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_code_module__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_module__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emphasis_emphasis_module__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_forms_module__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__popover_popover_module__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_conditional_conditional_module__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_expand_if_expand_module__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_focus_trap_focus_trap_module__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_loading_loading_module__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wizard_wizard_module__ = __webpack_require__(962);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClarityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */















var ClarityModule = ClarityModule_1 = (function () {
    function ClarityModule() {
    }
    /** @deprecated */
    ClarityModule.forRoot = function () {
        return { ngModule: ClarityModule_1, providers: [] };
    };
    /** @deprecated */
    ClarityModule.forChild = function () {
        return { ngModule: ClarityModule_1, providers: [] };
    };
    return ClarityModule;
}());
ClarityModule = ClarityModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__emphasis_emphasis_module__["a" /* ClrEmphasisModule */], __WEBPACK_IMPORTED_MODULE_3__data_data_module__["a" /* ClrDataModule */], __WEBPACK_IMPORTED_MODULE_6__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* ClrModalModule */], __WEBPACK_IMPORTED_MODULE_13__utils_loading_loading_module__["a" /* ClrLoadingModule */], __WEBPACK_IMPORTED_MODULE_11__utils_expand_if_expand_module__["a" /* ClrIfExpandModule */],
            __WEBPACK_IMPORTED_MODULE_10__utils_conditional_conditional_module__["a" /* ClrConditionalModule */], __WEBPACK_IMPORTED_MODULE_12__utils_focus_trap_focus_trap_module__["a" /* ClrFocusTrapModule */], __WEBPACK_IMPORTED_MODULE_1__button_button_module__["a" /* ClrButtonModule */], __WEBPACK_IMPORTED_MODULE_2__code_code_module__["a" /* ClrCodeModule */], __WEBPACK_IMPORTED_MODULE_5__forms_forms_module__["a" /* ClrFormsModule */], __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__["a" /* ClrLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_9__popover_popover_module__["a" /* ClrPopoverModule */], __WEBPACK_IMPORTED_MODULE_14__wizard_wizard_module__["a" /* ClrWizardModule */]
        ]
    })
], ClarityModule);

var ClarityModule_1;
//# sourceMappingURL=clarity.module.js.map

/***/ }),
/* 982 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__syntax_highlight_syntax_highlight_module__ = __webpack_require__(873);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrCodeModule; });
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


var ClrCodeModule = (function () {
    function ClrCodeModule() {
    }
    return ClrCodeModule;
}());
ClrCodeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({ exports: [__WEBPACK_IMPORTED_MODULE_1__syntax_highlight_syntax_highlight_module__["a" /* ClrSyntaxHighlightModule */]] })
], ClrCodeModule);

//# sourceMappingURL=code.module.js.map

/***/ }),
/* 983 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_dom_adapter__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render_render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridRowExpandAnimation; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * This is a hack that we have to write for now because of bugs and limitations in Angular,
 * please do not use this as an example.
 */




var DatagridRowExpandAnimation = (function () {
    function DatagridRowExpandAnimation(el, domAdapter, renderer, expand, renderOrganizer) {
        var _this = this;
        this.el = el;
        this.domAdapter = domAdapter;
        this.renderer = renderer;
        this.expand = expand;
        this.renderOrganizer = renderOrganizer;
        expand.animate.subscribe(function () {
            // We already had an animation waiting, so we just have to run in, not prepare again
            if (_this.oldHeight) {
                setTimeout(function () { return _this.run(); });
            }
            else {
                _this.animate();
            }
        });
    }
    /*
     * Dirty manual animation handling, but we have no way to use dynamic heights in Angular's current API.
     * They're working on it, but have no ETA.
     */
    DatagridRowExpandAnimation.prototype.animate = function () {
        var _this = this;
        // Check if we do have web-animations available. If not, just skip the animation.
        if (!this.el.nativeElement.animate) {
            return;
        }
        // We had an animation running, we skip to the end
        if (this.running) {
            this.running.finish();
        }
        this.oldHeight = this.domAdapter.computedHeight(this.el.nativeElement);
        // We set the height of the element immediately to avoid a flicker before the animation starts.
        this.renderer.setStyle(this.el.nativeElement, "height", this.oldHeight + "px");
        this.renderer.setStyle(this.el.nativeElement, "overflow-y", "hidden");
        setTimeout(function () {
            if (_this.expand.loading) {
                return;
            }
            _this.run();
        });
    };
    DatagridRowExpandAnimation.prototype.run = function () {
        var _this = this;
        this.renderer.setStyle(this.el.nativeElement, "height", null);
        // I don't like realigning the columns before the animation, since the scrollbar could appear or disappear
        // halfway, but that's a compromise we have to make for now. We can look into a smarter fix later.
        this.renderOrganizer.scrollbar.next();
        var newHeight = this.domAdapter.computedHeight(this.el.nativeElement);
        this.running = this.el.nativeElement.animate({ height: [this.oldHeight + "px", newHeight + "px"], overflowY: ["hidden", "hidden"], easing: "ease-in-out" }, { duration: 200 });
        this.running.onfinish = function () {
            _this.renderer.setStyle(_this.el.nativeElement, "overflow-y", null);
            delete _this.running;
        };
        delete this.oldHeight;
    };
    return DatagridRowExpandAnimation;
}());
DatagridRowExpandAnimation = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-dg-row" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__render_dom_adapter__["a" /* DomAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__render_dom_adapter__["a" /* DomAdapter */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__["a" /* Expand */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_expand_providers_expand__["a" /* Expand */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__render_render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__render_render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _e || Object])
], DatagridRowExpandAnimation);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=row-expand-animation.js.map

/***/ }),
/* 984 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_chocolate_oompa_loompa__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_row_action_service__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datagrid_willy_wonka__ = __webpack_require__(843);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionableOompaLoompa; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */




var ActionableOompaLoompa = (function (_super) {
    __extends(ActionableOompaLoompa, _super);
    function ActionableOompaLoompa(cdr, willyWonka, rowActions) {
        var _this = _super.call(this, cdr, willyWonka) || this;
        _this.rowActions = rowActions;
        return _this;
    }
    Object.defineProperty(ActionableOompaLoompa.prototype, "flavor", {
        get: function () {
            return this.rowActions.hasActionableRow;
        },
        enumerable: true,
        configurable: true
    });
    return ActionableOompaLoompa;
}(__WEBPACK_IMPORTED_MODULE_1__utils_chocolate_oompa_loompa__["a" /* OompaLoompa */]));
ActionableOompaLoompa = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-datagrid, clr-dg-row" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__datagrid_willy_wonka__["a" /* DatagridWillyWonka */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__datagrid_willy_wonka__["a" /* DatagridWillyWonka */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_row_action_service__["a" /* RowActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_row_action_service__["a" /* RowActionService */]) === "function" && _c || Object])
], ActionableOompaLoompa);

var _a, _b, _c;
//# sourceMappingURL=actionable-oompa-loompa.js.map

/***/ }),
/* 985 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_chocolate_oompa_loompa__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_expandable_rows__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datagrid_willy_wonka__ = __webpack_require__(843);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableOompaLoompa; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */




var ExpandableOompaLoompa = (function (_super) {
    __extends(ExpandableOompaLoompa, _super);
    function ExpandableOompaLoompa(cdr, willyWonka, expandableCount) {
        var _this = _super.call(this, cdr, willyWonka) || this;
        _this.expandableCount = expandableCount;
        return _this;
    }
    Object.defineProperty(ExpandableOompaLoompa.prototype, "flavor", {
        get: function () {
            return this.expandableCount.hasExpandableRow;
        },
        enumerable: true,
        configurable: true
    });
    return ExpandableOompaLoompa;
}(__WEBPACK_IMPORTED_MODULE_1__utils_chocolate_oompa_loompa__["a" /* OompaLoompa */]));
ExpandableOompaLoompa = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-datagrid, clr-dg-row" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__datagrid_willy_wonka__["a" /* DatagridWillyWonka */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__datagrid_willy_wonka__["a" /* DatagridWillyWonka */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_global_expandable_rows__["a" /* ExpandableRowsCount */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_global_expandable_rows__["a" /* ExpandableRowsCount */]) === "function" && _c || Object])
], ExpandableOompaLoompa);

var _a, _b, _c;
//# sourceMappingURL=expandable-oompa-loompa.js.map

/***/ }),
/* 986 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_expandable_rows__ = __webpack_require__(828);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridDetailRegisterer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


/*
 * I don't think this deserves to be in IfExpanded itself,
 * so I'm adding a second directive on the same selector for now just for the datagrid
 */
var DatagridDetailRegisterer = (function () {
    function DatagridDetailRegisterer(expandableRowsCount) {
        this.expandableRowsCount = expandableRowsCount;
        if (this.expandableRowsCount) {
            this.expandableRowsCount.register();
        }
    }
    DatagridDetailRegisterer.prototype.ngOnDestroy = function () {
        if (this.expandableRowsCount) {
            this.expandableRowsCount.unregister();
        }
    };
    return DatagridDetailRegisterer;
}());
DatagridDetailRegisterer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrIfExpanded]" }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_global_expandable_rows__["a" /* ExpandableRowsCount */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_global_expandable_rows__["a" /* ExpandableRowsCount */]) === "function" && _a || Object])
], DatagridDetailRegisterer);

var _a;
//# sourceMappingURL=datagrid-detail-registerer.js.map

/***/ }),
/* 987 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridHideableColumn; });

/**
 * @class DatagridHideableColumn
 *
 * @description
 * A utility class for that adds hide/show functionality to a column, its cells and enables a toggler in the
 * DatagridColumnToggle Component.
 *
 */
var DatagridHideableColumn = (function () {
    /**
     * @constructor
     *
     * @description
     * The init function for DatagridHideableColumn instances that does the following:
     *
     * 1. Set values for the private variables that enable a hideable column
     * 2. Broadcast the next hidden change for anyone (already) subscribed to this DatagridHideableColumn
     * TODO: Debug and verify that #2 is really necessary.
     *
     * @param _template
     * @param _id
     * @param _hidden
     */
    function DatagridHideableColumn(_template, _id, _hidden) {
        if (_hidden === void 0) { _hidden = false; }
        this._template = _template;
        this._id = _id;
        this._hidden = _hidden;
        /**
         * @property hiddenChanges
         *
         * @description
         * A stream of state changes an instance of DatagridHideableColumn will broadcast to subscribers.
         *
         * @type {Subject<boolean>}
         */
        this.hiddenChangesState = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        // Flag this true when the service only has one visible column open.
        this.lastVisibleColumn = false;
    }
    Object.defineProperty(DatagridHideableColumn.prototype, "template", {
        /**
         * @function template
         *
         * @description
         * A getter function that returns an TemplateRef of the DatagridColumn that is hideable. This is currently used to
         * populate the DatagridColumnToggle UI with the correct Column name.
         *
         * @returns {TemplateRef<any>}
         */
        get: function () {
            return this._template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridHideableColumn.prototype, "id", {
        /**
         * @function id
         *
         * @description
         * public function that returns the id of a HideableCOlumn instance. Used by the HideableCOlumnService for passing
         * state and actions between DateGridColumns, DataGridCells & the DatagridColumnToggle Components.
         *
         * @returns {string}
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridHideableColumn.prototype, "hidden", {
        /**
         * @function hidden
         *
         * @description
         * A getter that returns the hidden value of a DatagridHideableColumn instance.
         * TODO: debug and make sure you really need this since we have the hiddenCHanges observable.
         *
         * @returns {boolean}
         */
        get: function () {
            return this._hidden;
        },
        /**
         * @function hidden
         *
         * @description
         * The setter for setting the hidden state of a DatagridHideableColumn instance.
         * It also broadcasts the change after its set.
         *
         * @param value
         */
        set: function (value) {
            if (this._hidden === value) {
                return;
            }
            this._hidden = value;
            this.hiddenChangesState.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridHideableColumn.prototype, "hiddenChangeState", {
        /**
         * @function hiddenChangeState
         *
         * @description
         * An Observable for the HideableColumns hidden changes.
         *
         * @returns {Observable<boolean>}
         */
        get: function () {
            return this.hiddenChangesState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return DatagridHideableColumn;
}());

//# sourceMappingURL=datagrid-hideable-column.js.map

/***/ }),
/* 988 */
/***/ (function(module, exports) {

//# sourceMappingURL=comparator.js.map

/***/ }),
/* 989 */
/***/ (function(module, exports) {

//# sourceMappingURL=filter.js.map

/***/ }),
/* 990 */
/***/ (function(module, exports) {

//# sourceMappingURL=state.js.map

/***/ }),
/* 991 */
/***/ (function(module, exports) {

//# sourceMappingURL=string-filter.js.map

/***/ }),
/* 992 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_adapter__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridBodyRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridBodyRenderer = (function () {
    function DatagridBodyRenderer(el, organizer, domAdapter) {
        var _this = this;
        this.el = el;
        this.organizer = organizer;
        this.domAdapter = domAdapter;
        this.subscription = organizer.scrollbar.subscribe(function () { return _this.computeScrollbarWidth(); });
    }
    DatagridBodyRenderer.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DatagridBodyRenderer.prototype.computeScrollbarWidth = function () {
        this.organizer.scrollbarWidth.next(this.domAdapter.scrollBarWidth(this.el.nativeElement));
    };
    return DatagridBodyRenderer;
}());
DatagridBodyRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrDgBody]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__dom_adapter__["a" /* DomAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dom_adapter__["a" /* DomAdapter */]) === "function" && _c || Object])
], DatagridBodyRenderer);

var _a, _b, _c;
//# sourceMappingURL=body-renderer.js.map

/***/ }),
/* 993 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridHeadRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var DatagridHeadRenderer = (function () {
    function DatagridHeadRenderer(el, renderer, organizer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.subscription = organizer.scrollbarWidth.subscribe(function (width) { return _this.accountForScrollbar(width); });
    }
    DatagridHeadRenderer.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DatagridHeadRenderer.prototype.accountForScrollbar = function (width) {
        this.renderer.setStyle(this.el.nativeElement, "padding-right", width + "px");
    };
    return DatagridHeadRenderer;
}());
DatagridHeadRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrDgHead]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _c || Object])
], DatagridHeadRenderer);

var _a, _b, _c;
//# sourceMappingURL=head-renderer.js.map

/***/ }),
/* 994 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_items__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_page__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_adapter__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_renderer__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridMainRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */






var DatagridMainRenderer = (function () {
    function DatagridMainRenderer(organizer, items, page, domAdapter, el, renderer) {
        var _this = this;
        this.organizer = organizer;
        this.items = items;
        this.page = page;
        this.domAdapter = domAdapter;
        this.el = el;
        this.renderer = renderer;
        this._heightSet = false;
        this._subscriptions = [];
        /**
         * Indicates if we want to re-compute columns width. This should only happen:
         * 1) When headers change, with columns being added or removed
         * 2) When rows are lazily loaded for the first time
         */
        this.columnsSizesStable = false;
        this.shouldStabilizeColumns = true;
        this._subscriptions.push(organizer.computeWidths.subscribe(function () { return _this.computeHeadersWidth(); }));
        this._subscriptions.push(this.page.sizeChange.subscribe(function () {
            if (_this._heightSet) {
                _this.resetDatagridHeight();
            }
        }));
        this._subscriptions.push(this.items.change.subscribe(function () { return _this.shouldStabilizeColumns = true; }));
    }
    DatagridMainRenderer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._subscriptions.push(this.headers.changes.subscribe(function () {
            // TODO: only re-stabilize if a column was added or removed. Reordering is fine.
            _this.columnsSizesStable = false;
            _this.stabilizeColumns();
        }));
    };
    DatagridMainRenderer.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.shouldStabilizeColumns) {
            this.stabilizeColumns();
        }
        if (this.shouldComputeHeight()) {
            setTimeout(function () {
                _this.computeDatagridHeight();
            });
        }
    };
    DatagridMainRenderer.prototype.shouldComputeHeight = function () {
        if (!this._heightSet && this.page.size > 0) {
            if (this.items.displayed.length === this.page.size) {
                return true;
            }
        }
        return false;
    };
    /**
     * Computes the height of the datagrid.
     *
     * NOTE: We had to choose to set the height instead of the min-height because
     * IE 11 requires the height on the parent for the children flex grow/shrink properties to work.
     * When we used min-height, 1 1 auto doesn't used to work in IE11 :-(
     * But this doesn't affect the fix. It works in both fixed & variable height datagrids.
     *
     * Refer: http://stackoverflow.com/questions/24396205/flex-grow-not-working-in-internet-explorer-11-0
     */
    DatagridMainRenderer.prototype.computeDatagridHeight = function () {
        var value = this.domAdapter.computedHeight(this.el.nativeElement);
        this.renderer.setStyle(this.el.nativeElement, "height", value + "px");
        this._heightSet = true;
    };
    DatagridMainRenderer.prototype.resetDatagridHeight = function () {
        this.renderer.setStyle(this.el.nativeElement, "height", "");
        this._heightSet = false;
    };
    DatagridMainRenderer.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * Makes each header compute its width.
     */
    DatagridMainRenderer.prototype.computeHeadersWidth = function () {
        var _this = this;
        var nbColumns = this.headers.length;
        var allStrict = true;
        this.headers.forEach(function (header, index) {
            // On the last header column check whether all columns have strict widths.
            // If all columns have strict widths, remove the strict width from the last column and make it the column's
            // minimum width so that when all previous columns shrink, it will get a flexible width and cover the empty
            // gap in the Datagrid.
            if (!header.strictWidth) {
                allStrict = false;
            }
            if (nbColumns === index + 1 && allStrict) {
                header.strictWidth = 0;
            }
            var width = header.computeWidth();
            _this.organizer.widths[index] = { px: width, strict: !!header.strictWidth };
        });
    };
    /**
     * Triggers a whole re-rendring cycle to set column sizes, if needed.
     */
    DatagridMainRenderer.prototype.stabilizeColumns = function () {
        this.shouldStabilizeColumns = false;
        if (this.columnsSizesStable) {
            // change in items might have introduced/taken away the scrollbar
            this.organizer.scrollbar.next();
            return;
        }
        // No point resizing if there are no rows, we wait until they are actually loaded.
        if (this.items.displayed.length > 0) {
            this.organizer.resize();
            this.columnsSizesStable = true;
        }
    };
    return DatagridMainRenderer;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_4__header_renderer__["a" /* DatagridHeaderRenderer */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _a || Object)
], DatagridMainRenderer.prototype, "headers", void 0);
DatagridMainRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-datagrid", providers: [__WEBPACK_IMPORTED_MODULE_3__dom_adapter__["a" /* DomAdapter */]] }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_items__["a" /* Items */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_items__["a" /* Items */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_page__["a" /* Page */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_page__["a" /* Page */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__dom_adapter__["a" /* DomAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dom_adapter__["a" /* DomAdapter */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _g || Object])
], DatagridMainRenderer);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=main-renderer.js.map

/***/ }),
/* 995 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridRowMasterRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


/**
 * This component serves as a conditional wrapper.
 * When in table mode, it puts its content next to itself rather than inside.
 */
var DatagridRowMasterRenderer = (function () {
    function DatagridRowMasterRenderer(outsideContainer, organizer) {
        this.outsideContainer = outsideContainer;
        this.organizer = organizer;
        this.outside = false;
    }
    DatagridRowMasterRenderer.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DatagridRowMasterRenderer.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.insideContainer.createEmbeddedView(this.projected);
        this.subscription = this.organizer.tableMode.subscribe(function (on) { return _this.projectOutside(on); });
    };
    DatagridRowMasterRenderer.prototype.projectOutside = function (outside) {
        // We know the datagrid row's master container is always the first element in it,
        // so hard-coding a zero index here is fine.
        if (outside && !this.outside) {
            this.outsideContainer.insert(this.insideContainer.detach(0), 0);
        }
        else if (!outside && this.outside) {
            this.insideContainer.insert(this.outsideContainer.detach(0), 0);
        }
        this.outside = outside;
    };
    return DatagridRowMasterRenderer;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("inside", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _a || Object)
], DatagridRowMasterRenderer.prototype, "insideContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("projected"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* TemplateRef */]) === "function" && _b || Object)
], DatagridRowMasterRenderer.prototype, "projected", void 0);
DatagridRowMasterRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-dg-row-master",
        template: "\n        <ng-template #projected><ng-content></ng-content></ng-template>\n        <ng-container #inside></ng-container>\n    ",
        host: { "[class.datagrid-row-master]": "true" }
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _d || Object])
], DatagridRowMasterRenderer);

var _a, _b, _c, _d;
//# sourceMappingURL=row-master-renderer.js.map

/***/ }),
/* 996 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell_renderer__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridRowRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridRowRenderer = (function () {
    function DatagridRowRenderer(organizer) {
        var _this = this;
        this.organizer = organizer;
        this.subscription = organizer.alignColumns.subscribe(function () { return _this.setWidths(); });
    }
    DatagridRowRenderer.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DatagridRowRenderer.prototype.setWidths = function () {
        var _this = this;
        if (this.organizer.widths.length !== this.cells.length) {
            return;
        }
        this.cells.forEach(function (cell, index) {
            var width = _this.organizer.widths[index];
            cell.setWidth(width.strict, width.px);
        });
    };
    DatagridRowRenderer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.cells.changes.subscribe(function () {
            _this.setWidths();
        });
    };
    DatagridRowRenderer.prototype.ngAfterViewInit = function () {
        this.setWidths();
    };
    return DatagridRowRenderer;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__cell_renderer__["a" /* DatagridCellRenderer */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* QueryList */]) === "function" && _a || Object)
], DatagridRowRenderer.prototype, "cells", void 0);
DatagridRowRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-dg-row, clr-dg-row-detail" }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _b || Object])
], DatagridRowRenderer);

var _a, _b;
//# sourceMappingURL=row-renderer.js.map

/***/ }),
/* 997 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_organizer__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagridTableRenderer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var DatagridTableRenderer = (function () {
    function DatagridTableRenderer(el, renderer, organizer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.subscription = organizer.tableMode.subscribe(function (on) { return _this.tableMode(on); });
    }
    DatagridTableRenderer.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DatagridTableRenderer.prototype.tableMode = function (on) {
        if (on) {
            this.renderer.addClass(this.el.nativeElement, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* COMPUTE_WIDTH_CLASS */]);
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* COMPUTE_WIDTH_CLASS */]);
        }
    };
    return DatagridTableRenderer;
}());
DatagridTableRenderer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrDgTableWrapper]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__render_organizer__["a" /* DatagridRenderOrganizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__render_organizer__["a" /* DatagridRenderOrganizer */]) === "function" && _c || Object])
], DatagridTableRenderer);

var _a, _b, _c;
//# sourceMappingURL=table-renderer.js.map

/***/ }),
/* 998 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractTreeSelection; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var AbstractTreeSelection = (function () {
    function AbstractTreeSelection(parent) {
        this.parent = parent;
        this._selected = false;
        this._indeterminate = false;
    }
    Object.defineProperty(AbstractTreeSelection.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            this.indeterminate = false;
            this.children.forEach(function (child) { return child.parentChanged(value); });
            if (this.parent) {
                this.parent.childChanged();
            }
            this.selectedChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractTreeSelection.prototype, "indeterminate", {
        get: function () {
            return this._indeterminate;
        },
        set: function (value) {
            value = !!value;
            if (this._indeterminate !== value) {
                this._indeterminate = value;
                this.indeterminateChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    AbstractTreeSelection.prototype.childChanged = function () {
        var oneSelectedChild = false;
        var previousSelectedValue = this._selected;
        var previousIndeterminateValue = this._indeterminate;
        this._selected = true;
        this._indeterminate = false;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.indeterminate) {
                this._selected = false;
                this._indeterminate = true;
                break;
            }
            if (child.selected) {
                oneSelectedChild = true;
                if (this._selected === false) {
                    this._indeterminate = true;
                    break;
                }
            }
            else {
                this._selected = false;
                if (oneSelectedChild) {
                    this._indeterminate = true;
                    break;
                }
            }
        }
        if (this.parent &&
            (this._selected !== previousSelectedValue || this._indeterminate !== previousIndeterminateValue)) {
            this.parent.childChanged();
        }
        if (this.selected !== previousSelectedValue) {
            this.selectedChanged();
        }
        if (this.indeterminate !== previousIndeterminateValue) {
            this.indeterminateChanged();
        }
    };
    AbstractTreeSelection.prototype.parentChanged = function (selected) {
        if (selected && !this.selected) {
            this._selected = true;
            this.indeterminate = false;
            this.children.forEach(function (child) { return child.parentChanged(true); });
            this.selectedChanged();
        }
        if (!selected && (this.selected || this.indeterminate)) {
            this._selected = false;
            this.indeterminate = false;
            this.children.forEach(function (child) { return child.parentChanged(false); });
            this.selectedChanged();
        }
    };
    return AbstractTreeSelection;
}());

//# sourceMappingURL=abstract-tree-selection.js.map

/***/ }),
/* 999 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_selection_service__ = __webpack_require__(901);
/* harmony export (immutable) */ __webpack_exports__["a"] = clrTreeSelectionProviderFactory;
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

function clrTreeSelectionProviderFactory(existing) {
    return existing || new __WEBPACK_IMPORTED_MODULE_0__tree_selection_service__["a" /* TreeSelectionService */]();
}
//# sourceMappingURL=tree-selection.provider.js.map

/***/ }),
/* 1000 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALERT_TYPES; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
// TODO: alert-* types are deprecated and should be removed before 1.0!
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */ var ALERT_TYPES = ["alert-info", "alert-warning", "alert-danger", "alert-success", "info", "warning", "danger", "success"];
//# sourceMappingURL=alert-types.js.map

/***/ }),
/* 1001 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconCustomTag; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var IconCustomTag = (function () {
    function IconCustomTag() {
    }
    return IconCustomTag;
}());
IconCustomTag = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "clr-icon" })
], IconCustomTag);

//# sourceMappingURL=icon.js.map

/***/ }),
/* 1002 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clarity_module__ = __webpack_require__(981);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ClarityModule", function() { return __WEBPACK_IMPORTED_MODULE_0__clarity_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_module__ = __webpack_require__(870);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button_group_button_group_module__ = __webpack_require__(865);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button_loading_loading_button_module__ = __webpack_require__(869);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__code_syntax_highlight_syntax_highlight_module__ = __webpack_require__(873);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_data_module__ = __webpack_require__(875);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_datagrid_datagrid_module__ = __webpack_require__(885);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_stack_view_stack_view_module__ = __webpack_require__(899);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_tree_view_tree_view_module__ = __webpack_require__(903);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__emphasis_emphasis_module__ = __webpack_require__(908);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__emphasis_alert_alert_module__ = __webpack_require__(852);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms_forms_module__ = __webpack_require__(830);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icon_icon_module__ = __webpack_require__(806);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_layout_module__ = __webpack_require__(912);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layout_main_container_main_container_module__ = __webpack_require__(914);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layout_nav_navigation_module__ = __webpack_require__(919);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_tabs_tabs_module__ = __webpack_require__(924);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modal_modal_module__ = __webpack_require__(855);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__popover_popover_module__ = __webpack_require__(942);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__popover_dropdown_dropdown_module__ = __webpack_require__(834);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__popover_tooltip_tooltip_module__ = __webpack_require__(947);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__wizard_wizard_module__ = __webpack_require__(962);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utils_loading_loading_module__ = __webpack_require__(837);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__emphasis_alert_index__ = __webpack_require__(906);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__button_button_group_index__ = __webpack_require__(867);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__button_button_loading_index__ = __webpack_require__(868);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__forms_checkbox_index__ = __webpack_require__(910);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__code_index__ = __webpack_require__(872);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__popover_dropdown_index__ = __webpack_require__(939);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__data_datagrid_index__ = __webpack_require__(887);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__data_tree_view_index__ = __webpack_require__(900);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__data_stack_view_index__ = __webpack_require__(893);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__icon_index__ = __webpack_require__(911);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__layout_main_container_index__ = __webpack_require__(913);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__modal_index__ = __webpack_require__(932);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__layout_nav_index__ = __webpack_require__(917);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__layout_tabs_index__ = __webpack_require__(920);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__popover_tooltip_index__ = __webpack_require__(944);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__wizard_index__ = __webpack_require__(957);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__utils_animations_collapse_index__ = __webpack_require__(1013);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__utils_animations_fade_index__ = __webpack_require__(1017);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__utils_animations_fade_slide_index__ = __webpack_require__(1015);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__utils_animations_slide_index__ = __webpack_require__(1018);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__utils_loading_index__ = __webpack_require__(954);
/* unused harmony namespace reexport */
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */












































//# sourceMappingURL=index.js.map

/***/ }),
/* 1003 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrResponsiveNavControlMessage; });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var ClrResponsiveNavControlMessage = (function () {
    function ClrResponsiveNavControlMessage(_controlCode, _navLevel) {
        this._controlCode = _controlCode;
        this._navLevel = _navLevel;
    }
    Object.defineProperty(ClrResponsiveNavControlMessage.prototype, "controlCode", {
        get: function () {
            return this._controlCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrResponsiveNavControlMessage.prototype, "navLevel", {
        get: function () {
            return this._navLevel;
        },
        enumerable: true,
        configurable: true
    });
    return ClrResponsiveNavControlMessage;
}());

//# sourceMappingURL=clrResponsiveNavControlMessage.js.map

/***/ }),
/* 1004 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clrResponsiveNavigationService__ = __webpack_require__(820);
/* harmony export (immutable) */ __webpack_exports__["a"] = clrResponsiveNavigationProvider;
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

function clrResponsiveNavigationProvider(existing) {
    return existing || new __WEBPACK_IMPORTED_MODULE_0__clrResponsiveNavigationService__["a" /* ClrResponsiveNavigationService */]();
}
//# sourceMappingURL=clrResponsiveNavigationProvider.js.map

/***/ }),
/* 1005 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vertical_nav__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vertical_nav_group__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vertical_nav_group_children__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vertical_nav_icon_directive__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vertical_nav_link__ = __webpack_require__(930);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VERTICAL_NAV_DIRECTIVES; });









var VERTICAL_NAV_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__vertical_nav__["a" /* VerticalNav */], __WEBPACK_IMPORTED_MODULE_4__vertical_nav_link__["a" /* VerticalNavLink */], __WEBPACK_IMPORTED_MODULE_1__vertical_nav_group__["a" /* VerticalNavGroup */], __WEBPACK_IMPORTED_MODULE_2__vertical_nav_group_children__["a" /* VerticalNavGroupChildren */], __WEBPACK_IMPORTED_MODULE_3__vertical_nav_icon_directive__["a" /* VerticalNavIcon */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1006 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavGroupChildren; });
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

var VerticalNavGroupChildren = (function () {
    function VerticalNavGroupChildren() {
    }
    return VerticalNavGroupChildren;
}());
VerticalNavGroupChildren = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "clr-vertical-nav-group-children",
        template: "\n        <ng-content></ng-content>\n    "
    })
], VerticalNavGroupChildren);

//# sourceMappingURL=vertical-nav-group-children.js.map

/***/ }),
/* 1007 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_expand_if_expand_module__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(1005);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrVerticalNavModule; });
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





var ClrVerticalNavModule = (function () {
    function ClrVerticalNavModule() {
    }
    return ClrVerticalNavModule;
}());
ClrVerticalNavModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_3__utils_expand_if_expand_module__["a" /* ClrIfExpandModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* VERTICAL_NAV_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* VERTICAL_NAV_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_3__utils_expand_if_expand_module__["a" /* ClrIfExpandModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */]]
    })
], ClrVerticalNavModule);

//# sourceMappingURL=vertical-nav.module.js.map

/***/ }),
/* 1008 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_old_directive__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_directive__ = __webpack_require__(935);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POPOVER_DIRECTIVES; });




var POPOVER_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__popover_old_directive__["a" /* PopoverDirectiveOld */], __WEBPACK_IMPORTED_MODULE_1__popover_directive__["a" /* PopoverDirective */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1009 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signpost__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signpost_content__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signpost_trigger_directive__ = __webpack_require__(857);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIGNPOST_DIRECTIVES; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */






var SIGNPOST_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__signpost__["a" /* Signpost */], __WEBPACK_IMPORTED_MODULE_1__signpost_content__["a" /* SignpostContent */], __WEBPACK_IMPORTED_MODULE_2__signpost_trigger_directive__["a" /* SignpostTriggerDirective */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1010 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_popover__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIGNPOST_POSITIONS; });
/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var SIGNPOST_POSITIONS = {
    "top-left": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].TOP_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].BOTTOM_RIGHT, offsetY: -10, offsetX: 0 },
    "top-middle": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].TOP_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].BOTTOM_CENTER, offsetY: -10, offsetX: 0 },
    "top-right": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].TOP_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].BOTTOM_LEFT, offsetY: -10, offsetX: 0 },
    "right-top": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].RIGHT_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].LEFT_BOTTOM, offsetY: 2, offsetX: 14 },
    "right-middle": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].RIGHT_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].LEFT_CENTER, offsetY: 6, offsetX: 14 },
    "right-bottom": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].RIGHT_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].LEFT_TOP, offsetY: -1, offsetX: 14 },
    "bottom-right": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].BOTTOM_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].TOP_LEFT, offsetY: 9, offsetX: -1 },
    "bottom-middle": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].BOTTOM_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].TOP_CENTER, offsetY: 9, offsetX: 12 },
    "bottom-left": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].BOTTOM_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].TOP_RIGHT, offsetY: 9, offsetX: 0 },
    "left-bottom": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].LEFT_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].RIGHT_TOP, offsetY: 0, offsetX: -14 },
    "left-middle": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].LEFT_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].RIGHT_CENTER, offsetY: 4, offsetX: -14 },
    "left-top": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].LEFT_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].RIGHT_BOTTOM, offsetY: 0, offsetX: -14 },
    "default": { anchorPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].RIGHT_CENTER, popoverPoint: __WEBPACK_IMPORTED_MODULE_0__common_popover__["a" /* Point */].LEFT_CENTER, offsetY: 6, offsetX: 14 },
};
//# sourceMappingURL=signpost-positions.js.map

/***/ }),
/* 1011 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_conditional_conditional_module__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_popover_module__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(1009);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrSignpostModule; });
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






var ClrSignpostModule = (function () {
    function ClrSignpostModule() {
    }
    return ClrSignpostModule;
}());
ClrSignpostModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__common_popover_module__["a" /* ClrCommonPopoverModule */], __WEBPACK_IMPORTED_MODULE_2__icon_icon_module__["a" /* ClrIconModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__index__["a" /* SIGNPOST_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__index__["a" /* SIGNPOST_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_3__utils_conditional_conditional_module__["a" /* ClrConditionalModule */]],
        providers: []
    })
], ClrSignpostModule);

//# sourceMappingURL=signpost.module.js.map

/***/ }),
/* 1012 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(21);
/* unused harmony export collapse */
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

function collapse() {
    "use strict";
    return [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* state */])("true", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": 0, "overflow-y": "hidden" })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("true => false", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": "*", "overflow-y": "hidden" }))]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("false => true", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ "height": "*", "overflow-y": "hidden" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out")])
    ];
}
//# sourceMappingURL=collapse.js.map

/***/ }),
/* 1013 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse__ = __webpack_require__(1012);
/* unused harmony namespace reexport */
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

//# sourceMappingURL=index.js.map

/***/ }),
/* 1014 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(21);
/* unused harmony export fadeSlide */
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

function fadeSlide(direction) {
    "use strict";
    var transform = null;
    if (direction === "up") {
        transform = "translate(0, 25%)";
    }
    else if (direction === "down") {
        transform = "translate(0, -25%)";
    }
    else if (direction === "left") {
        transform = "translate(25%, 0)";
    }
    else if (direction === "right") {
        transform = "translate(-25%, 0)";
    }
    else {
        throw new Error("Unknown direction " + direction + " for slide animation.");
    }
    return [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("void => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0, transform: transform }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out")]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("* => void", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0, transform: transform }))])
    ];
}
//# sourceMappingURL=fade-slide.js.map

/***/ }),
/* 1015 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_slide__ = __webpack_require__(1014);
/* unused harmony namespace reexport */
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

//# sourceMappingURL=index.js.map

/***/ }),
/* 1016 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(21);
/* unused harmony export fade */
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

function fade(opacity) {
    "use strict";
    if (opacity === void 0) { opacity = 1; }
    return [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("void => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: opacity }))]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("* => void", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ opacity: 0 }))])
    ];
}
//# sourceMappingURL=fade.js.map

/***/ }),
/* 1017 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade__ = __webpack_require__(1016);
/* unused harmony namespace reexport */
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

//# sourceMappingURL=index.js.map

/***/ }),
/* 1018 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide__ = __webpack_require__(1019);
/* unused harmony namespace reexport */
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

//# sourceMappingURL=index.js.map

/***/ }),
/* 1019 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(21);
/* unused harmony export slide */
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

function slide(direction) {
    "use strict";
    var transform = null;
    if (direction === "up") {
        transform = "translate(0, 25%)";
    }
    else if (direction === "down") {
        transform = "translate(0, -25%)";
    }
    else if (direction === "left") {
        transform = "translate(25%, 0)";
    }
    else if (direction === "right") {
        transform = "translate(-25%, 0)";
    }
    else {
        throw new Error("Unknown direction " + direction + " for slide animation.");
    }
    return [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("void => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ transform: transform }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out")]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* transition */])("* => void", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])("0.2s ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* style */])({ transform: transform }))])
    ];
}
//# sourceMappingURL=slide.js.map

/***/ }),
/* 1020 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WillyWonka; });

/*
 * After a conversation with the Angular core team, it turns out we don't have much of a choice for our
 * declarative API, we need to fight against change detection and its one-way flow. This is
 * currently the least dirty solution to do what we want.
 *
 * Do not modify or even use this class unless you know exactly what you're doing.
 * It has the potential to trigger change detection loops or kill app performances.
 */
var WillyWonka = (function () {
    function WillyWonka() {
        this._chocolate = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(WillyWonka.prototype, "chocolate", {
        get: function () {
            return this._chocolate.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    WillyWonka.prototype.ngAfterViewChecked = function () {
        this._chocolate.next();
    };
    return WillyWonka;
}());

//# sourceMappingURL=willy-wonka.js.map

/***/ }),
/* 1021 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__if_active_directive__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__if_open_directive__ = __webpack_require__(951);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONDITIONAL_DIRECTIVES; });




var CONDITIONAL_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__if_active_directive__["a" /* IfActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__if_open_directive__["a" /* IfOpenDirective */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1022 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__if_expanded__ = __webpack_require__(952);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXPAND_DIRECTIVES; });


var EXPAND_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__if_expanded__["a" /* IfExpanded */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1023 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusTrapDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var FocusTrapDirective = (function () {
    function FocusTrapDirective(elementRef) {
        this.elementRef = elementRef;
    }
    FocusTrapDirective.prototype.onFocusIn = function (event) {
        var nativeElement = this.elementRef.nativeElement;
        if (!nativeElement.contains(event.target)) {
            nativeElement.focus();
        }
    };
    FocusTrapDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.elementRef.nativeElement;
        nativeElement.setAttribute("tabindex", "0");
    };
    return FocusTrapDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])("document:focusin", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FocusTrapDirective.prototype, "onFocusIn", null);
FocusTrapDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: "[clrFocusTrap]" }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object])
], FocusTrapDirective);

var _a;
//# sourceMappingURL=focus-trap.directive.js.map

/***/ }),
/* 1024 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focus_trap_directive__ = __webpack_require__(1023);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOCUS_TRAP_DIRECTIVES; });

var FOCUS_TRAP_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__focus_trap_directive__["a" /* FocusTrapDirective */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1025 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__outside_click__ = __webpack_require__(956);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OUSTIDE_CLICK_DIRECTIVES; });


var OUSTIDE_CLICK_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__outside_click__["a" /* OutsideClick */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1026 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(1025);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrOutsideClickModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var ClrOutsideClickModule = (function () {
    function ClrOutsideClickModule() {
    }
    return ClrOutsideClickModule;
}());
ClrOutsideClickModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]], declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* OUSTIDE_CLICK_DIRECTIVES */]], exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* OUSTIDE_CLICK_DIRECTIVES */]] })
], ClrOutsideClickModule);

//# sourceMappingURL=outside-click.module.js.map

/***/ }),
/* 1027 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


var ScrollingService = (function () {
    function ScrollingService(_document) {
        this._document = _document;
    }
    ScrollingService.prototype.stopScrolling = function () {
        this._document.body.classList.add("no-scrolling");
    };
    ScrollingService.prototype.resumeScrolling = function () {
        if (this._document.body.classList.contains("no-scrolling")) {
            this._document.body.classList.remove("no-scrolling");
        }
    };
    return ScrollingService;
}());
ScrollingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], ScrollingService);

//# sourceMappingURL=scrolling-service.js.map

/***/ }),
/* 1028 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_ref_container__ = __webpack_require__(859);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TEMPLATE_REF_DIRECTIVES; });


var TEMPLATE_REF_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__template_ref_container__["a" /* TemplateRefContainer */]];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1029 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(1028);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClrTemplateRefModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */



var ClrTemplateRefModule = (function () {
    function ClrTemplateRefModule() {
    }
    return ClrTemplateRefModule;
}());
ClrTemplateRefModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* TEMPLATE_REF_DIRECTIVES */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* TEMPLATE_REF_DIRECTIVES */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__index__["a" /* TEMPLATE_REF_DIRECTIVES */]]
    })
], ClrTemplateRefModule);

//# sourceMappingURL=template-ref.module.js.map

/***/ }),
/* 1030 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wizard_navigation__ = __webpack_require__(825);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderActionService; });
/*
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderActionService = (function () {
    // this service communicates information about the presence/display of header actions
    // across the wizard
    function HeaderActionService(navService) {
        this.navService = navService;
    }
    Object.defineProperty(HeaderActionService.prototype, "wizardHasHeaderActions", {
        get: function () {
            var wizardHdrActions = this.wizardHeaderActions;
            if (!wizardHdrActions) {
                return false;
            }
            return wizardHdrActions.toArray().length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderActionService.prototype, "currentPageHasHeaderActions", {
        get: function () {
            return this.navService.currentPage ? this.navService.currentPage.hasHeaderActions : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderActionService.prototype, "showWizardHeaderActions", {
        get: function () {
            return !this.currentPageHasHeaderActions && this.wizardHasHeaderActions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderActionService.prototype, "displayHeaderActionsWrapper", {
        get: function () {
            return this.currentPageHasHeaderActions || this.wizardHasHeaderActions;
        },
        enumerable: true,
        configurable: true
    });
    return HeaderActionService;
}());
HeaderActionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wizard_navigation__["a" /* WizardNavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wizard_navigation__["a" /* WizardNavigationService */]) === "function" && _a || Object])
], HeaderActionService);

var _a;
//# sourceMappingURL=header-actions.js.map

/***/ }),
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__secondary_education_component__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondaryEducationRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_0__secondary_education_component__["a" /* SecondaryEducationComponent */],
        data: {
            title: 'Secondary Education'
        }
    }
];
var SecondaryEducationRoutingModule = (function () {
    function SecondaryEducationRoutingModule() {
    }
    return SecondaryEducationRoutingModule;
}());
SecondaryEducationRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], SecondaryEducationRoutingModule);

//# sourceMappingURL=secondary-education.routing.js.map

/***/ }),
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */,
/* 1052 */,
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let inlineButton of inlineButtons\">\n    <ng-template [ngTemplateOutlet]=\"inlineButton.templateRef\"></ng-template>\n</ng-container>\n<ng-container *ngIf=\"menuButtons.length > 0\">\n    <div\n        class=\"btn-group-overflow open\"\n        [ngClass]=\"menuPosition\"\n        #anchor>\n        <button\n            class=\"btn dropdown-toggle\"\n            (click)=\"toggleMenu()\">\n            <clr-icon shape=\"ellipsis-horizontal\"></clr-icon>\n        </button>\n        <div\n            class=\"dropdown-menu\"\n            *clrPopoverOld=\"openMenu; anchor: anchor; anchorPoint: anchorPoint; popoverPoint: popoverPoint;\">\n            <ng-template [ngTemplateOutlet]=\"ref\"></ng-template>\n        </div>\n    </div>\n</ng-container>\n<ng-template #ref>\n    <ng-container *ngFor=\"let menuButton of menuButtons\">\n        <ng-template [ngTemplateOutlet]=\"menuButton.templateRef\"></ng-template>\n    </ng-container>\n</ng-template>\n"

/***/ }),
/* 1058 */
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<ng-content select=\"clr-dg-action-bar\"></ng-content>\n<div class=\"datagrid-overlay-wrapper\">\n    <div class=\"datagrid-scroll-wrapper\">\n        <div class=\"datagrid\" #datagrid>\n            <div clrDgTableWrapper class=\"datagrid-table-wrapper\">\n                <div clrDgHead class=\"datagrid-head\">\n                    <div class=\"datagrid-row datagrid-row-flex\">\n                        <!-- header for datagrid where you can select multiple rows -->\n                        <div class=\"datagrid-column datagrid-select datagrid-fixed-column\"\n                             *ngIf=\"selection.selectionType === SELECTION_TYPE.Multi\">\n                        <span class=\"datagrid-column-title\">\n                            <clr-checkbox [(ngModel)]=\"allSelected\"></clr-checkbox>\n                        </span>\n                            <div class=\"datagrid-column-separator\"></div>\n                        </div>\n                        <!-- header for datagrid where you can select one row only -->\n                        <div class=\"datagrid-column datagrid-select datagrid-fixed-column\"\n                             *ngIf=\"selection.selectionType === SELECTION_TYPE.Single\">\n                            <div class=\"datagrid-column-separator\"></div>\n                        </div>\n                        <!-- header for single row action; only display if we have at least one actionable row in datagrid -->\n                        <div class=\"datagrid-column datagrid-row-actions datagrid-fixed-column\"\n                             *ngIf=\"rowActionService.hasActionableRow\">\n                            <div class=\"datagrid-column-separator\"></div>\n                        </div>\n                        <!-- header for carets; only display if we have at least one expandable row in datagrid -->\n                        <div class=\"datagrid-column datagrid-expandable-caret datagrid-fixed-column\"\n                             *ngIf=\"expandableRows.hasExpandableRow\">\n                            <div class=\"datagrid-column-separator\"></div>\n                        </div>\n                        <ng-content select=\"clr-dg-column\"></ng-content>\n                    </div>\n                </div>\n\n                <div clrDgBody class=\"datagrid-body\">\n                    <ng-template *ngIf=\"iterator\"\n                                 ngFor [ngForOf]=\"items.displayed\" [ngForTrackBy]=\"items.trackBy\"\n                                 [ngForTemplate]=\"iterator.template\"></ng-template>\n                    <ng-content *ngIf=\"!iterator\"></ng-content>\n\n                    <!-- Custom placeholder overrides the default empty one -->\n                    <ng-content select=\"clr-dg-placeholder\"></ng-content>\n                    <clr-dg-placeholder *ngIf=\"!placeholder\"></clr-dg-placeholder>\n                </div>\n            </div>\n\n            <!--\n                This is not inside the table because there is no good way of having a single column span\n                everything when using custom elements with display:table-cell.\n            -->\n            <ng-content select=\"clr-dg-footer\"></ng-content>\n        </div>\n    </div>\n    <div class=\"datagrid-spinner\" *ngIf=\"loading\">\n        <div class=\"spinner\">Loading...</div>\n    </div>\n</div>\n"

/***/ }),
/* 1059 */
/***/ (function(module, exports) {

module.exports = "<button\n    type=\"button\"\n    class=\"clr-treenode-caret\"\n    (click)=\"toggleExpand()\"\n    *ngIf=\"nodeExpand.expandable && !nodeExpand.loading\">\n    <clr-icon\n        shape=\"caret\"\n        [attr.dir]=\"caretDirection\"></clr-icon>\n</button>\n<span class=\"clr-treenode-spinner spinner\" *ngIf=\"nodeExpand.expandable && nodeExpand.loading\">\n    Loading...\n</span>\n<clr-checkbox\n    *ngIf=\"selectable\"\n    [(ngModel)]=\"selected\"\n    [(clrIndeterminate)]=\"indeterminate\"></clr-checkbox>\n<div class=\"clr-treenode-content\">\n    <ng-content></ng-content>\n</div>\n<!-- FIXME: remove this string concatenation when boolean states are supported -->\n<div\n    class=\"clr-treenode-children\"\n    [@childNodesState]=\"state\">\n    <ng-content select=\"clr-tree-node\"></ng-content>\n    <ng-content select=\"[clrIfExpanded]\"></ng-content>\n</div>\n"

/***/ }),
/* 1060 */
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<div\n    *ngIf=\"!_closed\"\n    class=\"alert\"\n    [ngClass]=\"alertClass\"\n    [class.alert-sm]=\"isSmall\"\n    [class.alert-app-level]=\"isAppLevel\">\n    <div class=\"alert-items\">\n        <ng-content></ng-content>\n    </div>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" *ngIf=\"closable\" (click)=\"close()\">\n        <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n    </button>\n</div>\n"

/***/ }),
/* 1061 */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-group-content\" (click)=\"onNavContentClick()\">\n    <ng-content select=\"[clrVerticalNavIcon]\"></ng-content>\n    <ng-content select=\"[clrVerticalNavLink]\"></ng-content>\n    <div class=\"nav-group-text\">\n        <ng-content></ng-content>\n    </div>\n    <button\n        class=\"nav-group-trigger\"\n        type=\"button\"\n        (click)=\"toggleExpand()\">\n        <clr-icon shape=\"caret\"\n                  [attr.dir]=\"(this.expanded) ? 'down' : 'right'\"></clr-icon>\n    </button>\n</div>\n<!--TODO: This animation needs to be added to the clr-vertical-nav-group-children component-->\n<div class=\"nav-group-children\"\n     [@clrExpand]=\"expandAnimationState\"\n     (@clrExpand.done)=\"expandAnimationDone($event)\">\n    <ng-content select=\"[clrIfExpanded], clr-vertical-nav-group-children\"></ng-content>\n</div>\n"

/***/ }),
/* 1062 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"nav-trigger\"\n        [class.on-collapse]=\"collapsed\"\n        (click)=\"toggleByButton()\"\n        *ngIf=\"collapsible\">\n    <clr-icon shape=\"angle-double\" class=\"nav-trigger-icon\" [attr.dir]=\"(this.collapsed) ? 'right' : 'left'\"></clr-icon>\n</button>\n<!-- Click handler on .nav-content is bad but required :-( -->\n<div class=\"nav-content\">\n    <ng-content></ng-content>\n    <button (click)=\"collapsed = false\" class=\"nav-btn\" *ngIf=\"collapsible && collapsed\"></button>\n</div>\n"

/***/ }),
/* 1063 */
/***/ (function(module, exports) {

module.exports = "\n<!--\n  ~ Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<div clrFocusTrap class=\"modal\" *ngIf=\"_open\">\n    <!--fixme: revisit when ngClass works with exit animation-->\n    <div [@fadeDown]=\"skipAnimation\" (@fadeDown.done)=\"fadeDone($event)\"\n         class=\"modal-dialog\"\n         [class.modal-sm]=\"size == 'sm'\"\n         [class.modal-lg]=\"size == 'lg'\"\n         [class.modal-xl]=\"size == 'xl'\"\n         role=\"dialog\" aria-hidden=\"true\">\n\n        <div class=\"modal-outer-wrapper\">\n            <div class=\"modal-content-wrapper\">\n                <!-- only used in wizards -->\n                <ng-content select=\".modal-nav\"></ng-content>\n\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\"\n                                *ngIf=\"closable\" (click)=\"close()\">\n                            <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n                        </button>\n                        <ng-content select=\".modal-title\"></ng-content>\n                    </div>\n                    <ng-content select=\".modal-body\"></ng-content>\n                    <ng-content select=\".modal-footer\"></ng-content>\n                </div>\n            </div>\n            <div class=\"modal-ghost-wrapper\">\n                <div [@ghostPageOneState]=\"ghostPageState\" class=\"modal-ghost modal-ghost-1\"></div>\n                <div [@ghostPageTwoState]=\"ghostPageState\" class=\"modal-ghost modal-ghost-2\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div [@fade] class=\"modal-backdrop\"\n         aria-hidden=\"true\"\n         (click)=\"staticBackdrop || close()\"></div>\n</div>\n\n"

/***/ }),
/* 1064 */
/***/ (function(module, exports) {

module.exports = "<!--\n~ Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.\n~ This software is released under MIT license.\n~ The full license information can be found in LICENSE in the root directory of this project.\n-->\n\n<clr-modal \n    [clrModalOpen]=\"_open\"\n    [clrModalSize]=\"size\"\n    [clrModalClosable]=\"closable\"\n    [clrModalStaticBackdrop]=\"true\"\n    [clrModalSkipAnimation]=\"stopModalAnimations\"\n    [clrModalGhostPageState]=\"ghostPageState\"\n    [clrModalOverrideScrollService]=\"isStatic\"\n    [clrModalPreventClose]=\"true\"\n    (clrModalAlternateClose)=\"modalCancel()\">\n\n    <nav class=\"modal-nav clr-wizard-stepnav-wrapper\">\n        <h3 class=\"clr-wizard-title\"><ng-content select=\"clr-wizard-title\"></ng-content></h3>\n        <clr-wizard-stepnav></clr-wizard-stepnav>\n    </nav>\n\n    <h3 class=\"modal-title\">\n        <span class=\"modal-title-text\">\n            <ng-template [ngTemplateOutlet]=\"navService.currentPageTitle\"></ng-template>\n        </span>\n\n        <div class=\"modal-header-actions-wrapper\" *ngIf=\"headerActionService.displayHeaderActionsWrapper\">\n            <div *ngIf=\"headerActionService.showWizardHeaderActions\">\n                <ng-content select=\"clr-wizard-header-action\"></ng-content>\n            </div>\n            <div *ngIf=\"headerActionService.currentPageHasHeaderActions\">\n                <ng-template [ngTemplateOutlet]=\"navService.currentPage.headerActions\"></ng-template>\n            </div>\n        </div>\n    </h3>\n\n    <div class=\"modal-body\">\n        <main clr-wizard-pages-wrapper class=\"clr-wizard-content\">\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <div class=\"modal-footer clr-wizard-footer\">\n        <div class=\"clr-wizard-footer-buttons\">\n            <div *ngIf=\"navService.currentPage && !navService.currentPage.hasButtons\"\n                class=\"clr-wizard-footer-buttons-wrapper\">\n                <ng-content select=\"clr-wizard-button\"></ng-content>\n            </div>\n            <div *ngIf=\"navService.currentPage && navService.currentPage.hasButtons\"\n                class=\"clr-wizard-footer-buttons-wrapper\">\n                <ng-template [ngTemplateOutlet]=\"navService.currentPage.buttons\"></ng-template>\n            </div>\n        </div>\n    </div>\n</clr-modal>"

/***/ }),
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */
/***/ (function(module, exports) {

module.exports = "<div class=\"display-4\" style=\"margin-top: 26%; margin-left: 28%\">\r\n    <clr-icon shape=\"cog\" size=\"72\" clrVerticalNavIcon></clr-icon>\r\n... under construction\r\n</div>\r\n<div class=\"spinner\" style=\"margin-left: 46%\">\r\n    Loading...\r\n</div>\r\n"

/***/ })
]));
//# sourceMappingURL=0.chunk.js.map