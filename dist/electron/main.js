(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 400px;\n}\n  \n.example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n}\n  \n.global-fab {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 150;\n}\n  \n.title{\n    margin-top: -64px;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{test}}</h1>\n<div fxLayout=\"row\"\n     fxLayoutAlign=\"space-around center\">\n    <div fxFlex\n         *ngFor=\"let item of list\">\n        <mat-card class=\"example-card\">\n            <img mat-card-image\n                 src=\"assets/mærsk.jpg\"\n                 alt=\"link to {{item.name}}\">\n            <mat-card-header class=\"title\">\n                <mat-card-title>{{item.name}}</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n            </mat-card-content>\n            <mat-card-actions>\n                <ng-container *ngFor=\"let element of item.urls\">\n                    <a target=\"_blank\"\n                       [href]=\"element.url\"\n                       mat-button>{{element.label}}</a>\n                </ng-container>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>\n\n\n<a class=\"global-fab\"\n   mat-fab\n   color=\"primary\"\n   matTooltip=\"Create New\"\n   (click)=\"getTestFromLocalStorage()\"\n   routerLinkActive=\"active\">\n    <mat-icon>add</mat-icon>\n</a>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/localstorage-service */ "./src/app/services/localstorage-service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.test = '';
        this.list = [
            {
                name: 'DNET - VSTS',
                image: 'https://cdn-images-1.medium.com/max/1200/1*J3uFALJExp_Uvp65B3xNrw.png',
                urls: [
                    {
                        label: 'BUILDS',
                        url: 'https://transport-logistics.visualstudio.com/Dynamic%20Net/_build'
                    },
                    {
                        label: 'RELEASE',
                        url: 'https://transport-logistics.visualstudio.com/Dynamic%20Net/_releases2?definitionId=30&view=mine&_a=releases'
                    }
                ]
            },
            {
                name: 'DNET -JIRA BOARD',
                image: 'https://atlassian.design/uploads/guidelines/brand/logos/logo-guideline-10@2x_170912_043411.png',
                // tslint:disable-next-line:max-line-length
                urls: [
                    {
                        label: 'CFO BOARD',
                        url: 'https://maersk-analytics.atlassian.net/secure/RapidBoard.jspa?rapidView=300&projectKey=DNO'
                    }
                ]
            },
            {
                name: 'DNET - CFO',
                image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Elly_Maersk_%287099720969%29.jpg',
                urls: [
                    {
                        label: 'DEV',
                        url: 'https://dev.dynamicnet.maersk.com/ui/preplanning/',
                    },
                    {
                        label: 'TEST',
                        url: 'https://test.dynamicnet.maersk.com/ui/preplanning/',
                    },
                    {
                        label: 'UFE',
                        url: 'https://dynamicnet.maersk.com/ui/preplanning/',
                    }
                ]
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.localStorageService.setItem('bucket', 'Hallo');
    };
    AppComponent.prototype.getTestFromLocalStorage = function () {
        this.test = this.localStorageService.getItem('bucket');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/localstorage-service */ "./src/app/services/localstorage-service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"]
            ],
            providers: [
                _services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
                _services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
                _services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["WindowRef"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/localstorage-service/cookie.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/localstorage-service/cookie.service.ts ***!
  \*****************************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    /**
     * Helper method to update cookies
     * @param key
     * @param value
     * @param expiration Expiration time defined in days (default: 30), if set to 0 a session cookie is created
     */
    CookieService.prototype.updateCookie = function (key, value, expiration) {
        if (expiration === void 0) { expiration = 30; }
        var cookieDeclaration = key + "=" + value + "; path=/; secure";
        if (expiration !== 0) {
            var date = new Date();
            date.setTime(date.getTime() + (expiration * 24 * 60 * 60 * 1000));
            cookieDeclaration += "; expires=" + date.toUTCString();
        }
        document.cookie = cookieDeclaration;
    };
    /**
     * @param key the desired key to be found
     * @returns value of the desired key, or null if not found
     */
    CookieService.prototype.readCookie = function (key) {
        var cookies = document.cookie.split('; ');
        var value = '';
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].split('=');
            if (cookie[0] === key) {
                value = cookie[1];
                break;
            }
        }
        return value;
    };
    CookieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/services/localstorage-service/index.ts":
/*!********************************************************!*\
  !*** ./src/app/services/localstorage-service/index.ts ***!
  \********************************************************/
/*! exports provided: CookieService, LocalStorageService, WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie.service */ "./src/app/services/localstorage-service/cookie.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return _cookie_service__WEBPACK_IMPORTED_MODULE_0__["CookieService"]; });

/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.service */ "./src/app/services/localstorage-service/localstorage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]; });

/* harmony import */ var _window_reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-reference */ "./src/app/services/localstorage-service/window-reference.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return _window_reference__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]; });






/***/ }),

/***/ "./src/app/services/localstorage-service/localstorage.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/localstorage-service/localstorage.service.ts ***!
  \***********************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie.service */ "./src/app/services/localstorage-service/cookie.service.ts");
/* harmony import */ var _window_reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-reference */ "./src/app/services/localstorage-service/window-reference.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(cookieService, windowRef) {
        this.cookieService = cookieService;
        this.windowRef = windowRef;
        this.solutionKey = 'dynamicnet_preplanning';
        this.window = windowRef.nativeWindow;
        this.discoverSupport();
    }
    LocalStorageService.prototype.setItem = function (key, item) {
        key = this.solutionKey + "_" + key;
        var serializedValue = JSON.stringify(item);
        if (this.isSupported) {
            this.window.localStorage.setItem(key, serializedValue);
        }
        else {
            this.cookieService.updateCookie(key, serializedValue);
        }
    };
    LocalStorageService.prototype.removeItem = function (key) {
        key = this.solutionKey + "_" + key;
        if (this.isSupported) {
            this.window.localStorage.removeItem(key);
        }
        else {
            this.cookieService.updateCookie(key, null, -1);
        }
    };
    LocalStorageService.prototype.getItem = function (key) {
        key = this.solutionKey + "_" + key;
        var value;
        if (this.isSupported) {
            value = this.window.localStorage.getItem(key);
        }
        else {
            value = this.cookieService.readCookie(key);
        }
        return value ? JSON.parse(value) : null;
    };
    LocalStorageService.prototype.discoverSupport = function () {
        /* Primarily because of iOS private browsing mode, where localStorage
        * exists but throws QuotaExceeded errors if you were to put something
        * into localStorage
        * Capability test from (modernizer) https://gist.github.com/paulirish/5558557
        */
        var capabilityDummy = 'web-storage_capability-test-key';
        try {
            localStorage.setItem(capabilityDummy, capabilityDummy);
            localStorage.removeItem(capabilityDummy);
            this.isSupported = true;
        }
        catch (e) {
            this.isSupported = false;
        }
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"],
            _window_reference__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/localstorage-service/window-reference.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/localstorage-service/window-reference.ts ***!
  \*******************************************************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chakibbenhaddou/Labs/electron/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map