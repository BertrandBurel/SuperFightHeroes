webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__galery_galery_component__ = __webpack_require__("./src/app/galery/galery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history_component__ = __webpack_require__("./src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_test_component__ = __webpack_require__("./src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectplayer_selectplayer_component__ = __webpack_require__("./src/app/selectplayer/selectplayer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'galery', component: __WEBPACK_IMPORTED_MODULE_3__galery_galery_component__["a" /* GaleryComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_4__game_game_component__["a" /* GameComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_5__history_history_component__["a" /* HistoryComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_6__test_test_component__["a" /* TestComponent */] },
    { path: 'select', component: __WEBPACK_IMPORTED_MODULE_7__selectplayer_selectplayer_component__["a" /* SelectplayerComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__galery_galery_component__ = __webpack_require__("./src/app/galery/galery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__history_history_component__ = __webpack_require__("./src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_api_service__ = __webpack_require__("./src/app/shared/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_select_service__ = __webpack_require__("./src/app/shared/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__test_test_component__ = __webpack_require__("./src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selectplayer_selectplayer_component__ = __webpack_require__("./src/app/selectplayer/selectplayer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import du service commun vers api superheros https://akabab.github.io/superhero-api/api/




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__galery_galery_component__["a" /* GaleryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_8__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_13__selectplayer_selectplayer_component__["a" /* SelectplayerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__shared_select_service__["a" /* SelectService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/galery/galery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/galery/galery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xs-1 col-md-2\" *ngFor=\"let hero of heroes\">\r\n      <img class=\"img-fluid\" src=\"{{hero.images.sm}}\" alt=\"{{hero.name}}\">{{hero.name}}\r\n      {{hero.powerstats.intelligence}}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/galery/galery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service__ = __webpack_require__("./src/app/shared/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GaleryComponent = /** @class */ (function () {
    function GaleryComponent(apiService) {
        this.apiService = apiService;
        this.players = [];
        this.nbrPlayer = 0;
    }
    GaleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getHeroes().subscribe(function (heroes) {
            // console.log(heroes);
            _this.heroes = heroes;
        });
    };
    GaleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-galery',
            template: __webpack_require__("./src/app/galery/galery.component.html"),
            styles: [__webpack_require__("./src/app/galery/galery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */]])
    ], GaleryComponent);
    return GaleryComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <h3 class=\"text-center\">\r\n             {{ select.players[0].name }}\r\n          </h3>\r\n          <img class=\"img-fluid\" alt=\"Bootstrap Image Preview\" src=\"{{select.players[0].images.md}}\">\r\n\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button class=\"btn btn-secondary m-2\" type=\"button\" onclick=\"attack1()\">\r\n              Attack!\r\n            </button>\r\n            <button class=\"btn btn-secondary m-2\" type=\"button\" onclick=\"defense1()\">\r\n              Defense\r\n            </button>\r\n            <button class=\"btn btn-secondary m-2\" type=\"button\" onclick=\"heal1()\">\r\n              healing\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <h1 class=\"text-center\">\r\n            VS\r\n          </h1>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <h3 class=\"text-center\">\r\n             {{ select.players[1].name }}\r\n          </h3>\r\n          <img class=\"img-fluid\" alt=\"Bootstrap Image Preview\" src=\"{{select.players[1].images.md}}\">\r\n\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n\r\n            <button class=\"btn btn-secondary m-2\" type=\"button\" onclick=\"attack2()\">\r\n              Attack!\r\n            </button>\r\n            <button class=\"btn btn-secondary m-2\" type=\"button\" onclick=\"defense2()\">\r\n              Defense\r\n            </button>\r\n            <button class=\"btn btn-secondary m-2\" type=\"button\" onclick=\"heal2()\">\r\n              healing\r\n            </button>\r\n          </div>\r\n          <p> \r\n\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <h3 class=\"text-center\">\r\n            Intelligence : {{ select.players[0].powerstats.intelligence }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Strength : {{ select.players[0].powerstats.strength }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Speed : {{ select.players[0].powerstats.speed }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Durability : {{ select.players[0].powerstats.durability }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Power : {{ select.players[0].powerstats.power }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Combat : {{ select.players[0].powerstats.combat }}\r\n          </h3>\r\n  \r\n          \r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <h1 class=\"text-center\">\r\n           \r\n          </h1>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <h3 class=\"text-center\">\r\n            Intelligence : {{ select.players[1].powerstats.intelligence }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Strength : {{ select.players[1].powerstats.strength }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Speed : {{ select.players[1].powerstats.speed }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Durability : {{ select.players[1].powerstats.durability }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Power : {{ select.players[1].powerstats.power }}\r\n          </h3>\r\n          <h3 class=\"text-center\">\r\n            Combat : {{ select.players[1].powerstats.combat }}\r\n          </h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service__ = __webpack_require__("./src/app/shared/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_select_service__ = __webpack_require__("./src/app/shared/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = /** @class */ (function () {
    function GameComponent(apiService, select, router) {
        this.apiService = apiService;
        this.select = select;
        this.router = router;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.select.players);
        if (this.select.players.length !== 2) {
            this.router.navigate(['select']);
        }
        this.apiService.getHeroes().subscribe(function (heroes) {
            // console.log(heroes);
            _this.heroes = heroes;
        });
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("./src/app/game/game.component.html"),
            styles: [__webpack_require__("./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__shared_select_service__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  history works!\n</p>\n"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
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

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("./src/app/history/history.component.html"),
            styles: [__webpack_require__("./src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"home\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"galery\">Gallery</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"history\">History</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" routerLink=\"game\">Game</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" routerLink=\"test\">Test</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" routerLink=\"select\">select</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/selectplayer/selectplayer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/selectplayer/selectplayer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xs-1 col-md-2\" *ngFor=\"let hero of heroes ; let i = index\">\r\n      <img (click)=\"chooseplayer(i)\" class=\"img-fluid\" src=\"{{hero.images.sm}}\" alt=\"{{hero.name}}\">{{hero.name}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/selectplayer/selectplayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectplayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service__ = __webpack_require__("./src/app/shared/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_select_service__ = __webpack_require__("./src/app/shared/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectplayerComponent = /** @class */ (function () {
    function SelectplayerComponent(apiService, select, router) {
        this.apiService = apiService;
        this.select = select;
        this.router = router;
        this.players = [];
        this.nbrPlayer = 0;
    }
    SelectplayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.select.players = [];
        this.apiService.getHeroes().subscribe(function (heroes) {
            // console.log(heroes);
            _this.heroes = heroes;
        });
    };
    SelectplayerComponent.prototype.chooseplayer = function (index) {
        this.select.players[this.nbrPlayer] = this.heroes[index];
        this.nbrPlayer = this.nbrPlayer + 1;
        // tslint:disable-next-line:triple-equals
        if (this.select.players.length == 2) {
            this.router.navigate(['/game']);
        }
    };
    SelectplayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-selectplayer',
            template: __webpack_require__("./src/app/selectplayer/selectplayer.component.html"),
            styles: [__webpack_require__("./src/app/selectplayer/selectplayer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__shared_select_service__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SelectplayerComponent);
    return SelectplayerComponent;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = 'https://akabab.github.io/superhero-api/api/';
    }
    ApiService.prototype.getHeroes = function () {
        return this.http.get(this.BASE_URL + 'all.json');
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/select.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectService; });
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

var SelectService = /** @class */ (function () {
    function SelectService() {
        this.players = []; // correspond au clic selectionner par le joueur
    }
    SelectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SelectService);
    return SelectService;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <h3 class=\"text-center\">\r\n            JOUEUR 1\r\n          </h3>\r\n          <img class=\"img-fluid\" alt=\"Bootstrap Image Preview\" src=\"{{heroes[3].images.md}}\">\r\n          \r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button class=\"btn btn-secondary\" type=\"button\" onclick=\"attack()\">\r\n              Attack!\r\n            </button>\r\n            <button class=\"btn btn-secondary\" type=\"button\" onclick=\"defense()\">\r\n              Defense\r\n            </button>\r\n            <button class=\"btn btn-secondary\" type=\"button\" onclick=\"heal()\">\r\n              healing\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <h1 class=\"text-center\">\r\n            VS\r\n          </h1>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <h3 class=\"text-center\">\r\n            JOUEUR 2\r\n          </h3>\r\n          <img class=\"img-fluid\" alt=\"Bootstrap Image Preview\" src=\"{{heroes[15].images.md}}\">\r\n          \r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n\r\n            <button class=\"btn btn-secondary\" type=\"button\" onclick=\"attack()\">\r\n              Attack!\r\n            </button>\r\n            <button class=\"btn btn-secondary\" type=\"button\" onclick=\"defense()\">\r\n              Defense\r\n            </button>\r\n            <button class=\"btn btn-secondary\" type=\"button\" onclick=\"heal()\">\r\n              healing\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service__ = __webpack_require__("./src/app/shared/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(apiService) {
        this.apiService = apiService;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getHeroes().subscribe(function (heroes) {
            // console.log(heroes);
            _this.heroes = heroes;
        });
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("./src/app/test/test.component.html"),
            styles: [__webpack_require__("./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map