webpackJsonp([7,15],{

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maps_component__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__maps_component__["a" /* MapsComponent */],
        data: {
            title: 'Maps'
        }
    },
];
var MapsRoutingModule = (function () {
    function MapsRoutingModule() {
    }
    return MapsRoutingModule;
}());
MapsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], MapsRoutingModule);

//# sourceMappingURL=maps.routing.js.map

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "#bg2 {\r\n\t\t-webkit-animation: bg 60s linear infinite;\r\n\t\tanimation: bg 60s linear infinite;\r\n\t\t-webkit-backface-visibility: hidden;\r\n\t\tbackface-visibility: hidden;\r\n\t\t-webkit-transform: translate3d(0,0,0);\r\n\t\ttransform: translate3d(0,0,0);\r\n\t/* Set your background with this */\r\n\r\n\t\tbackground: rgba(52,140,178,0.3) url(\"/../../../assets/css/images/bg.jpg\") bottom left;\r\n\t\t/*background-repeat: repeat-x;*/\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 1;\r\n\t\tposition: fixed;\r\n        top: 0;\r\n        min-width: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n#bg2 .card {\r\n    background-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n}\r\n\r\n\tbody, input, select, textarea {\r\n\t\tcolor: #333;\r\n\t\tfont-family: \"Segoe UI\", sans-serif;\r\n\t\tfont-weight: 300;\r\n\t\tfont-size: 1rem;\r\n\t\tline-height: 1.65;\r\n\t}\r\n\r\n\r\n\t#overlay-bio {\r\n\t\t-webkit-animation: overlay 1.5s 1.5s forwards;\r\n\t\tanimation: overlay 1.5s 1.5s forwards;\r\n\t\tbackground-attachment: fixed, fixed;\r\n\t\tbackground-image: url(\"/../../../assets/css/images/bg.jpg\"), url(\"/../../../../assets/css/images/overlay.svg\");\r\n\t\tbackground-position: top left, center center;\r\n\t\tbackground-repeat: repeat, no-repeat;\r\n\t\tbackground-size: auto, cover;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: 0.3;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\twidth: 100%;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1072:
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\">\r\n    <meta charset=\"utf-8\">\r\n    <title>Marker Clustering</title>\r\n    <style>\r\n      /* Always set the map height explicitly to define the size of the div\r\n       * element that contains the map. */\r\n      #map {\r\n        height: 100%;\r\n      }\r\n      /* Optional: Makes the sample page fill the window. */\r\n      html, body {\r\n        height: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n      }\r\n    </style>\r\n  </head>\r\n  <body>\r\n    <div id=\"bg2\"></div>\r\n        <div id=\"overlay-bio\"></div>\r\n    <div id=\"map\"></div>\r\n    <script>\r\n\r\n      function initMap() {\r\n\r\n        var map = new google.maps.Map(document.getElementById('map'), {\r\n          zoom: 3,\r\n          center: {lat: -28.024, lng: 140.887}\r\n        });\r\n\r\n        // Create an array of alphabetical characters used to label the markers.\r\n        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\r\n\r\n        // Add some markers to the map.\r\n        // Note: The code uses the JavaScript Array.prototype.map() method to\r\n        // create an array of markers based on a given \"locations\" array.\r\n        // The map() method here has nothing to do with the Google Maps API.\r\n        var markers = locations.map(function(location, i) {\r\n          return new google.maps.Marker({\r\n            position: location,\r\n            label: labels[i % labels.length]\r\n          });\r\n        });\r\n\r\n        // Add a marker clusterer to manage the markers.\r\n        var markerCluster = new MarkerClusterer(map, markers,\r\n            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});\r\n      }\r\n      var locations = [\r\n        {lat: -31.563910, lng: 147.154312},\r\n        {lat: -33.718234, lng: 150.363181},\r\n        {lat: -33.727111, lng: 150.371124},\r\n        {lat: -33.848588, lng: 151.209834},\r\n        {lat: -33.851702, lng: 151.216968},\r\n        {lat: -34.671264, lng: 150.863657},\r\n        {lat: -35.304724, lng: 148.662905},\r\n        {lat: -36.817685, lng: 175.699196},\r\n        {lat: -36.828611, lng: 175.790222},\r\n        {lat: -37.750000, lng: 145.116667},\r\n        {lat: -37.759859, lng: 145.128708},\r\n        {lat: -37.765015, lng: 145.133858},\r\n        {lat: -37.770104, lng: 145.143299},\r\n        {lat: -37.773700, lng: 145.145187},\r\n        {lat: -37.774785, lng: 145.137978},\r\n        {lat: -37.819616, lng: 144.968119},\r\n        {lat: -38.330766, lng: 144.695692},\r\n        {lat: -39.927193, lng: 175.053218},\r\n        {lat: -41.330162, lng: 174.865694},\r\n        {lat: -42.734358, lng: 147.439506},\r\n        {lat: -42.734358, lng: 147.501315},\r\n        {lat: -42.735258, lng: 147.438000},\r\n        {lat: -43.999792, lng: 170.463352}\r\n      ]\r\n    </script>\r\n    <script src=\"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js\">\r\n    </script>\r\n      <script async defer\r\n          src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap\">\r\n      </script>\r\n  </body>\r\n"

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maps_component__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maps_routing__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__maps_routing__["a" /* MapsRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__maps_component__["a" /* MapsComponent */]],
        providers: []
    })
], MapsModule);

//# sourceMappingURL=maps.module.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-maps',
        template: __webpack_require__(1072),
        styles: [__webpack_require__(1051)]
    }),
    __metadata("design:paramtypes", [])
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map