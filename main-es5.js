(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<app-search-bar></app-search-bar>\n<div class=\"main-section\">\n    <router-outlet></router-outlet>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/body/body.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/body/body.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body-component\">\n    <h1 class=\"main-header\">The 5 days forcast in {{ this. location }} is: </h1>\n    <div class=\"row\">\n        <button class=\"btn btn-dark fav-btn\" (click)=\"addToFavorites()\">Add To Favorites</button>\n    </div>\n    <div class=\"row forcast-main\" *ngIf=\"dates.length > 0\">\n        <div class=\"col empty-col\"></div>\n        <div class=\"col day-forcast\" *ngFor=\"let day of days; let i = index\" [attr.data-index]=\"i\">\n            <div class=\"forcast-card\">\n                <h2 class=\"date\">{{ dates[i] | date:'shortDate' }}</h2>\n                <img class=\"weather-icon\" src=\"../../assets/images/sunny.jpg\" alt=\"\">\n                <h3 class=\"temp\">{{ tempMin[i] | number : '1.2-2' }} <span>&#176;</span> - {{ tempMax[i] | number : '1.2-2' }} <span>&#176;</span></h3>\n            </div>\n        </div>\n        <div class=\"col empty-col\"></div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark app-nav\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink='/'>Weather App</a>\n    </div>\n    <ul class=\"nav navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item app-link\">\n        <a class=\"nav-link\" routerLink='/favorites' routerLinkActive=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">Favorites</a>\n      </li>\n    </ul>\n  \n    <div class=\"custom-control custom-switch\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch2\" (change)=\"toggleTempMode()\">\n      <label class=\"custom-control-label toggle-text nav-switch\" for=\"customSwitch2\">Farenhite</label>\n    </div>\n  </div>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/funny-404-page.jpg\" alt=\"\">");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-bar/search-bar.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-bar/search-bar.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col empty-col\"></div>\n    <div class=\"col form-col\">\n        <form class=\"search-form app-search-form\">\n            <mat-form-field class=\"search-full-width\">\n                <input class=\"search-bar\" type=\"text\" placeholder=\"Enter a city to search for\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"onKey($event)\" (change)=\"onKey($event)\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                        {{ option }}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n        </form>\n    </div>\n    <div class=\"col empty-col\"></div>\n</div>\n<div class=\"row btn-row\">\n    <div class=\"col btn-col\"></div>\n    <button class=\"col btn-dark search-btn\" (click)=\"onSubmit()\">search</button>\n    <div class=\"col btn-col\"></div>\n</div>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fav-component\" *ngIf=\"favorites.length > 0; else noFavorites\">\n    <h1 class=\"fav-header\">Favorites</h1>\n    <div class=\"row fav-main\" *ngFor=\"let fav of favorites\">\n        <div class=\"col fav-empty-col\"></div>\n        <div class=\"col fav-day-forcast\" >\n            <div class=\"forcast-card\">\n                <h2 class=\"name\">{{ fav.name }}</h2>\n                <img class=\"fav-weather-icon\" src=\"../../assets/images/sunny.jpg\" alt=\"\">\n                <h3 class=\"temp\">{{ fav.minTemp }}<span>&#176;</span> - {{ fav.maxTemp }}<span>&#176;</span></h3>\n            </div>\n        </div>\n        <div class=\"col fav-empty-col\"></div>\n    </div>\n</div>\n\n<ng-template #noFavorites>\n    <div class=\"nothing-component\">\n        <h1 class=\"nothing-here\">Nothing here...</h1>\n    </div>\n</ng-template>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
            /* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
            /* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/body/body.component */ "./src/app/components/body/body.component.ts");
            var routes = [
                { path: '', component: _components_body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"] },
                { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"] },
                { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'WeatherApp';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
            /* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/body/body.component */ "./src/app/components/body/body.component.ts");
            /* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
            /* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                        _components_body_body_component__WEBPACK_IMPORTED_MODULE_11__["BodyComponent"],
                        _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__["FavoritesComponent"],
                        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_15__["SearchBarComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                        angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]
                    ],
                    exports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/body/body.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/body/body.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".body-component {\r\n    background-color: #29335c;\r\n    min-height: 700px;\r\n    color: white;\r\n}\r\n\r\n.forcast-main {\r\n    min-height: 100%;\r\n}\r\n\r\n.day-forcast {\r\n    width: 10%;\r\n    margin-right: 15px;\r\n}\r\n\r\n.weather-icon {\r\n    width: 80%;\r\n    height: 80%;\r\n    margin: 25px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.main-header {\r\n    text-align: center;\r\n}\r\n\r\n.empty-col {\r\n    width:50%;\r\n}\r\n\r\n.date {\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n.temp {\r\n    padding-bottom: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.forcast-card {\r\n    margin-top: 10%;\r\n    background-color: #669bbc;\r\n    box-shadow: 0 40px 8px 0 rgba(0,0,0,0.2);\r\n    border-radius: 40px;\r\n}\r\n\r\n.fav-btn {\r\n    background-color: #669bbc;\r\n    width: 33%;\r\n    height: 10%;\r\n    margin-left: 33%;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.fav-btn:hover {\r\n    background-color: #2b99dd;\r\n    width: 33%;\r\n    height: 10%;\r\n    margin-left: 33%;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .empty-col {\r\n        display: none;\r\n    }\r\n    \r\n    .forcast-card {\r\n        margin: 20%;\r\n        min-width: 250px;\r\n        margin-top: 70px;\r\n    }\r\n\r\n    .weather-icon {\r\n        padding: 10%;\r\n        border-radius: 30px;\r\n    }\r\n\r\n    .main-header {\r\n        font-size: 30px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1jb21wb25lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MzM1YztcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9yY2FzdC1tYWluIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kYXktZm9yY2FzdCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ud2VhdGhlci1pY29uIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5tYWluLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbXB0eS1jb2wge1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRlbXAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JjYXN0LWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2OWJiYztcclxuICAgIGJveC1zaGFkb3c6IDAgNDBweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4uZmF2LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY5YmJjO1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZhdi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiOTlkZDtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMyU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5lbXB0eS1jb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JjYXN0LWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMjAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIH1cclxuXHJcbiAgICAud2VhdGhlci1pY29uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/body/body.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/body/body.component.ts ***!
          \***************************************************/
        /*! exports provided: BodyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function () { return BodyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _services_weather_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather-data.service */ "./src/app/services/weather-data.service.ts");
            /* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
            var BodyComponent = /** @class */ (function () {
                function BodyComponent(data, weatherData, searchService) {
                    this.data = data;
                    this.weatherData = weatherData;
                    this.searchService = searchService;
                    this.doneLoading = false;
                    this.favorites = [];
                    this.days = [0, 1, 2, 3, 4];
                    this.tempMin = [];
                    this.tempMax = [];
                    this.dates = [];
                }
                BodyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.weatherData.currentFiveDates.subscribe(function () {
                        _this.dates = _this.weatherData.getFiveDates();
                    });
                    this.weatherData.currentFiveMax.subscribe(function () {
                        _this.tempMax = _this.weatherData.getFiveMax();
                    });
                    this.weatherData.currentFiveMin.subscribe(function () {
                        _this.tempMin = _this.weatherData.getFiveMin();
                    });
                    this.weatherData.currentLocationName.subscribe(function () {
                        _this.location = _this.weatherData.getLocationName();
                    });
                    this.getLocation();
                };
                BodyComponent.prototype.addToFavorites = function () {
                    var fav = {
                        name: this.weatherData.getLocationName(),
                        id: this.weatherData.getTopSearchID(),
                        maxTemp: this.weatherData.getFiveMax()[0],
                        minTemp: this.weatherData.getFiveMin()[0]
                    };
                    this.favorites.push(fav);
                    this.data.setFavorites(this.favorites);
                };
                BodyComponent.prototype.getLocation = function () {
                    var _this = this;
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (pos) {
                            _this.lng = pos.coords.longitude;
                            _this.lat = pos.coords.latitude;
                            _this.displayFirstWeather();
                        }, function (err) {
                            _this.lat = 32.1;
                            _this.lng = 34.777;
                            _this.displayFirstWeather();
                        });
                    }
                };
                BodyComponent.prototype.displayFirstWeather = function () {
                    this.searchService.searchByGeoLocation(this.lat, this.lng);
                    this.doneLoading = true;
                };
                return BodyComponent;
            }());
            BodyComponent.ctorParameters = function () { return [
                { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _services_weather_data_service__WEBPACK_IMPORTED_MODULE_3__["WeatherDataService"] },
                { type: _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }
            ]; };
            BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-body',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/body/body.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./body.component.css */ "./src/app/components/body/body.component.css")).default]
                })
            ], BodyComponent);
            /***/ 
        }),
        /***/ "./src/app/components/navbar/navbar.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/navbar/navbar.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".toggle-text {\r\n    color: #0056B3;\r\n}\r\n\r\n.app-nav {\r\n    background-color: #29335c;\r\n    color: white;\r\n}\r\n\r\n.nav-switch {\r\n    color: white;\r\n    margin: 20px;\r\n}\r\n\r\n.nav-switch:hover {\r\n    color: #ffdb3f;\r\n}\r\n\r\n.app-link:hover {\r\n    color: #ffdb3f;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .nav-switch {\r\n        margin: auto;\r\n        margin-left: 10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2dnbGUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNTZCMztcclxufVxyXG5cclxuLmFwcC1uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MzM1YztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdi1zd2l0Y2gge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4ubmF2LXN3aXRjaDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZGIzZjtcclxufVxyXG5cclxuLmFwcC1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZkYjNmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubmF2LXN3aXRjaCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/navbar/navbar.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/navbar/navbar.component.ts ***!
          \*******************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(data) {
                    this.data = data;
                    this.isCelsius = true;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.data.currentFormat.subscribe(function (tempFormat) {
                        _this.isCelsius = tempFormat;
                    });
                };
                NavbarComponent.prototype.toggleDark = function () {
                };
                NavbarComponent.prototype.toggleTempMode = function () {
                    this.data.setTempFormat();
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/not-found/not-found.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/not-found/not-found.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/not-found/not-found.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/not-found/not-found.component.ts ***!
          \*************************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                };
                return NotFoundComponent;
            }());
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")).default]
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/components/search-bar/search-bar.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/search-bar/search-bar.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".search-form {\r\n    min-width: 150px;\r\n    background: #29335c;\r\n  }\r\n\r\n  .form-col {\r\n    background-color: #29335c;\r\n  }\r\n\r\n  .search-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  .empty-col {\r\n    background-color:  #29335c;\r\n    width:20%;\r\n  }\r\n\r\n  .btn-row {\r\n    align-content: center;\r\n  }\r\n\r\n  .search-btn {\r\n    background-color: #669bbc;\r\n    height: 100%;\r\n    color: white;\r\n    font-size: 25px;\r\n    padding-top: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n  }\r\n\r\n  .search-btn:hover {\r\n    background-color: #2b99dd;\r\n    height: 100%;\r\n    color: white;\r\n    font-size: 25px;\r\n    padding-top: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n  }\r\n\r\n  .btn-col {\r\n    width: 30%;\r\n    background-color: #29335c;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsU0FBUztFQUNYOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyOTMzNWM7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb2wge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MzM1YztcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmVtcHR5LWNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzI5MzM1YztcclxuICAgIHdpZHRoOjIwJTtcclxuICB9XHJcblxyXG4gIC5idG4tcm93IHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjliYmM7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjk5ZGQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG4tY29sIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMzVjO1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/search-bar/search-bar.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/search-bar/search-bar.component.ts ***!
          \***************************************************************/
        /*! exports provided: SearchBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () { return SearchBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/weather.service */ "./src/app/services/weather.service.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _services_weather_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/weather-data.service */ "./src/app/services/weather-data.service.ts");
            /* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
            var SearchBarComponent = /** @class */ (function () {
                function SearchBarComponent(data, weather, weatherData, searchService) {
                    this.data = data;
                    this.weather = weather;
                    this.weatherData = weatherData;
                    this.searchService = searchService;
                    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.search = "";
                    this.options = [];
                }
                SearchBarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.weatherData.currentSuggestions.subscribe(function (args) {
                        _this.options = args;
                    });
                };
                SearchBarComponent.prototype.onKey = function (event) {
                    if (event.key == 'Backspace') {
                        this.options = [];
                    }
                    if (event.key == 'Enter') {
                        this.onSubmit();
                    }
                    this.search = event.target.value;
                    if (event.target.value.length > _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].autoSearchTrashHold) {
                        this.searchService.searchByName(this.search);
                    }
                };
                SearchBarComponent.prototype.onSubmit = function () {
                    if (this.search == '') {
                        return;
                    }
                    this.searchService.searchByID();
                    this.weatherData.setLocationName(this.search);
                };
                return SearchBarComponent;
            }());
            SearchBarComponent.ctorParameters = function () { return [
                { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _services_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"] },
                { type: _services_weather_data_service__WEBPACK_IMPORTED_MODULE_6__["WeatherDataService"] },
                { type: _services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"] }
            ]; };
            SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-bar/search-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/search-bar/search-bar.component.css")).default]
                })
            ], SearchBarComponent);
            /***/ 
        }),
        /***/ "./src/app/data.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/data.service.ts ***!
          \*********************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _services_weather_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/weather-data.service */ "./src/app/services/weather-data.service.ts");
            var DataService = /** @class */ (function () {
                function DataService(weatherData) {
                    this.weatherData = weatherData;
                    this.fiveDaysSearchWasMade = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
                    this.wasFiveDaysMade = this.fiveDaysSearchWasMade.asObservable();
                    this.favorites = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
                    this.currentFavorites = this.favorites.asObservable();
                    this.isCelsius = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
                    this.currentFormat = this.isCelsius.asObservable();
                    this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
                    this.currentSearchTerm = this.searchTerm.asObservable();
                }
                DataService.prototype.setTempFormat = function () {
                    this.weatherData.handleFormatChange(!this.isCelsius.value);
                    this.isCelsius.next(!this.isCelsius.value);
                };
                DataService.prototype.getTempFormat = function () {
                    return this.isCelsius.value;
                };
                DataService.prototype.getCurrentSearchTerm = function () {
                    return this.searchTerm.value;
                };
                DataService.prototype.setSearchTerm = function (phrase) {
                    this.searchTerm.next(phrase);
                };
                DataService.prototype.getfiveDaysSearchWasMade = function () {
                    return this.fiveDaysSearchWasMade.value;
                };
                DataService.prototype.setFiveDaysSearchWasMade = function (val) {
                    this.fiveDaysSearchWasMade.next(val);
                };
                DataService.prototype.getFavorites = function () {
                    return this.favorites.value;
                };
                DataService.prototype.setFavorites = function (args) {
                    this.favorites.next(args);
                };
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _services_weather_data_service__WEBPACK_IMPORTED_MODULE_3__["WeatherDataService"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/favorites/favorites.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/favorites/favorites.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fav-component {\r\n    background-color: #29335c;\r\n    min-height: 700px;\r\n    color: white;\r\n}\r\n\r\n.fav-day-forcast {\r\n    align-items: center;\r\n    width: 10%;\r\n    margin-right: 15px;\r\n}\r\n\r\n.fav-weather-icon {\r\n    width: 80%;\r\n    height: 80%;\r\n    margin: 25px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.fav-header {\r\n    text-align: center;\r\n}\r\n\r\n.fav-empty-col {\r\n    width:30%;\r\n}\r\n\r\n.date {\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n.name {\r\n    text-align: center;\r\n}\r\n\r\n.temp {\r\n    padding-bottom: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.forcast-card {\r\n    max-width: 50%;\r\n    margin-top: 10%;\r\n    background-color: #669bbc;\r\n    box-shadow: 0 40px 8px 0 rgba(0,0,0,0.2);\r\n    border-radius: 40px;\r\n}\r\n\r\n.fav-btn {\r\n    background-color: #669bbc;\r\n    width: 33%;\r\n    height: 10%;\r\n    margin-left: 33%;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.fav-btn:hover {\r\n    background-color: #2b99dd;\r\n    width: 33%;\r\n    height: 10%;\r\n    margin-left: 33%;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.nothing-here {\r\n    padding-top: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.nothing-component {\r\n    background-color: #29335c;\r\n    min-height: 700px;\r\n    color: white;\r\n}\r\n\r\n.no-fav-img {\r\n    height: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .empty-col {\r\n        display: none;\r\n    }\r\n    \r\n    .forcast-card {\r\n        margin: 20%;\r\n        min-width: 250px;\r\n        margin-top: 70px;\r\n    }\r\n\r\n    .weather-icon {\r\n        padding: 10%;\r\n        border-radius: 30px;\r\n    }\r\n\r\n    .main-header {\r\n        font-size: 30px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXYtY29tcG9uZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTMzNWM7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhdi1kYXktZm9yY2FzdCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmZhdi13ZWF0aGVyLWljb24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLmZhdi1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmF2LWVtcHR5LWNvbCB7XHJcbiAgICB3aWR0aDozMCU7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZW1wIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9yY2FzdC1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2OWJiYztcclxuICAgIGJveC1zaGFkb3c6IDAgNDBweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4uZmF2LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY5YmJjO1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZhdi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiOTlkZDtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMyU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5ub3RoaW5nLWhlcmUge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ub3RoaW5nLWNvbXBvbmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMzVjO1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uby1mYXYtaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5lbXB0eS1jb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JjYXN0LWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMjAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIH1cclxuXHJcbiAgICAud2VhdGhlci1pY29uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/favorites/favorites.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/favorites/favorites.component.ts ***!
          \**************************************************/
        /*! exports provided: FavoritesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () { return FavoritesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _services_weather_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/weather-data.service */ "./src/app/services/weather-data.service.ts");
            var FavoritesComponent = /** @class */ (function () {
                function FavoritesComponent(data, weatherData) {
                    this.data = data;
                    this.weatherData = weatherData;
                    this.location = '';
                    this.favorites = [];
                }
                FavoritesComponent.prototype.ngOnInit = function () {
                    this.favorites = this.data.getFavorites();
                    this.curFav = this.favorites[0];
                };
                return FavoritesComponent;
            }());
            FavoritesComponent.ctorParameters = function () { return [
                { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _services_weather_data_service__WEBPACK_IMPORTED_MODULE_3__["WeatherDataService"] }
            ]; };
            FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-favorites',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")).default]
                })
            ], FavoritesComponent);
            /***/ 
        }),
        /***/ "./src/app/services/search.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/search.service.ts ***!
          \********************************************/
        /*! exports provided: SearchService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function () { return SearchService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.service */ "./src/app/services/weather.service.ts");
            /* harmony import */ var _weather_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-data.service */ "./src/app/services/weather-data.service.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var SearchService = /** @class */ (function () {
                function SearchService(weatherService, weatherDataService, weatherData) {
                    this.weatherService = weatherService;
                    this.weatherDataService = weatherDataService;
                    this.weatherData = weatherData;
                    this.suggestions = [];
                    this.fiveDayDates = [];
                    this.fiveDayMax = [];
                    this.fiveDaysMin = [];
                }
                SearchService.prototype.searchByGeoLocation = function (lat, lng) {
                    var _this = this;
                    this.weatherService.getGeoLocation(lat, lng).subscribe(function (res) {
                        _this.weatherData.setTopSearchID(JSON.parse(res["Key"]));
                        _this.weatherData.setLocationName(res["EnglishName"]);
                        _this.searchByID();
                    });
                };
                SearchService.prototype.searchByID = function () {
                    var _this = this;
                    var id = this.weatherData.getTopSearchID();
                    this.weatherService.getFiveDays(id).subscribe(function (response) {
                        _this.handleFiveDays(response);
                    });
                };
                SearchService.prototype.searchByName = function (phrase) {
                    var _this = this;
                    this.weatherService.getAutoComplete(phrase).subscribe(function (response) {
                        if (response['length'] > 0) {
                            _this.weatherData.setTopSearchID(response[0].Key);
                            for (var i = 0; i < _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].numberOfSuggestions; ++i) {
                                _this.suggestions.push(response[i].LocalizedName);
                            }
                        }
                        else {
                            _this.suggestions = ['Nothing by this name here...'];
                        }
                        _this.weatherDataService.setSuggestions(_this.suggestions);
                    });
                };
                SearchService.prototype.handleFiveDays = function (response) {
                    this.fiveDayDates = [];
                    this.fiveDaysMin = [];
                    this.fiveDayMax = [];
                    for (var i = 0; i < _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].numberOfDays; ++i) {
                        this.fiveDayDates.push(response["DailyForecasts"][i]["Date"]);
                        this.fiveDaysMin.push(response["DailyForecasts"][i]["Temperature"]["Minimum"]["Value"]);
                        this.fiveDayMax.push(response["DailyForecasts"][i]["Temperature"]["Maximum"]["Value"]);
                    }
                    this.weatherData.setFiveDaysDates(this.fiveDayDates);
                    this.weatherData.setFiveMax(this.fiveDayMax);
                    this.weatherData.setFiveMin(this.fiveDaysMin);
                };
                return SearchService;
            }());
            SearchService.ctorParameters = function () { return [
                { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] },
                { type: _weather_data_service__WEBPACK_IMPORTED_MODULE_3__["WeatherDataService"] },
                { type: _weather_data_service__WEBPACK_IMPORTED_MODULE_3__["WeatherDataService"] }
            ]; };
            SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SearchService);
            /***/ 
        }),
        /***/ "./src/app/services/weather-data.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/services/weather-data.service.ts ***!
          \**************************************************/
        /*! exports provided: WeatherDataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDataService", function () { return WeatherDataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var WeatherDataService = /** @class */ (function () {
                function WeatherDataService() {
                    this.suggestions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
                    this.currentSuggestions = this.suggestions.asObservable();
                    this.fiveDates = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
                    this.currentFiveDates = this.fiveDates.asObservable();
                    this.fiveMin = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
                    this.currentFiveMin = this.fiveMin.asObservable();
                    this.fiveMax = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
                    this.currentFiveMax = this.fiveMax.asObservable();
                    this.topSearchID = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
                    this.currentTopID = this.topSearchID.asObservable();
                    this.locationName = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
                    this.currentLocationName = this.locationName.asObservable();
                }
                WeatherDataService.prototype.getLocationName = function () {
                    return this.locationName.value;
                };
                WeatherDataService.prototype.setLocationName = function (name) {
                    this.locationName.next(name);
                };
                WeatherDataService.prototype.setFiveDaysDates = function (params) {
                    this.fiveDates.next(params);
                };
                WeatherDataService.prototype.getFiveDates = function () {
                    return this.fiveDates.value;
                };
                WeatherDataService.prototype.setFiveMin = function (params) {
                    this.fiveMin.next(params);
                };
                WeatherDataService.prototype.getFiveMin = function () {
                    return this.fiveMin.value;
                };
                WeatherDataService.prototype.setFiveMax = function (params) {
                    this.fiveMax.next(params);
                };
                WeatherDataService.prototype.getFiveMax = function () {
                    return this.fiveMax.value;
                };
                WeatherDataService.prototype.setSuggestions = function (args) {
                    this.suggestions.next(args);
                };
                WeatherDataService.prototype.getSuggetsions = function () {
                    return this.suggestions.value;
                };
                WeatherDataService.prototype.setTopSearchID = function (id) {
                    this.topSearchID.next(id);
                };
                WeatherDataService.prototype.getTopSearchID = function () {
                    return this.topSearchID.value;
                };
                WeatherDataService.prototype.handleFormatChange = function (toCelsius) {
                    var _this = this;
                    var arrMax = this.getFiveMax();
                    var arrMin = this.getFiveMin();
                    this.newArrMax = [];
                    this.newArrMin = [];
                    if (toCelsius) {
                        arrMax.map(function (element) {
                            element = element * 9 / 5 + 32;
                            _this.newArrMax.push(element);
                        });
                        arrMin.map(function (element) {
                            element = element * 9 / 5 + 32;
                            _this.newArrMin.push(element);
                        });
                        this.setFiveMax(this.newArrMax);
                        this.setFiveMin(this.newArrMin);
                    }
                    else {
                        arrMax.map(function (element) {
                            element = element - 32 * 9 / 5;
                            _this.newArrMax.push(element);
                        });
                        arrMin.map(function (element) {
                            element = element - 32 * 9 / 5;
                            _this.newArrMin.push(element);
                        });
                        this.setFiveMax(this.newArrMax);
                        this.setFiveMin(this.newArrMin);
                    }
                    //some stupid error can't find it...
                };
                return WeatherDataService;
            }());
            WeatherDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], WeatherDataService);
            /***/ 
        }),
        /***/ "./src/app/services/weather.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/weather.service.ts ***!
          \*********************************************/
        /*! exports provided: WeatherService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function () { return WeatherService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var WeatherService = /** @class */ (function () {
                function WeatherService(http, data) {
                    this.http = http;
                    this.data = data;
                }
                WeatherService.prototype.getAutoComplete = function (phrase) {
                    var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].autoCompleteURL + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey +
                        "&q=" + phrase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].language;
                    return this.http.get(url);
                };
                WeatherService.prototype.getFiveDays = function (locationKey) {
                    var metric = this.data.getTempFormat();
                    var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fiveDaysURL + locationKey + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey
                        + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].language + '&details=true' + '&metric=' + metric;
                    this.data.setFiveDaysSearchWasMade(true);
                    return this.http.get(url);
                };
                WeatherService.prototype.getGeoLocation = function (lat, lng) {
                    var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].geoLocationURL + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey + '&q=' + lat.toString()
                        + ',' + lng.toString() + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].language + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].searchDetails
                        + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].searchTopLevel;
                    return this.http.get(url);
                };
                WeatherService.prototype.handleError = function (error) {
                    var errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        errorMessage = "Error: " + error.error.message;
                    }
                    else {
                        errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
                    }
                    window.alert(errorMessage);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
                };
                return WeatherService;
            }());
            WeatherService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
            ]; };
            WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], WeatherService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                altApiKey: "?=apikey= sad yEFH0VE6q2jlgmHwhI6CxBV2wsnZynId",
                apiKey: "?apikey=xCvVsQkb9qGAGmGkfoONNr3mCK34Gllq",
                autoCompleteURL: "https://dataservice.accuweather.com/locations/v1/cities/autocomplete",
                locationKeyURL: "https://dataservice.accuweather.com/locations/v1/",
                fiveDaysURL: "https://dataservice.accuweather.com/forecasts/v1/daily/5day/",
                geoPostionSearchURl: "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
                geoLocationURL: "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
                language: "&language=en-us",
                searchDetails: '&details=false',
                searchTopLevel: '&toplevel=false',
                autoSearchTrashHold: 2,
                numberOfSuggestions: 3,
                numberOfDays: 5
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\TA\projects\Angular\WeatherApp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map