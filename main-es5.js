function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"viewport-scroll\">\r\n  <div class=\"content-wrapper\">\r\n    <main>\r\n      <app-evidence-selector\r\n        [evidenceStates]=\"evidenceStates\"\r\n        (evidenceStatesChanged)=\"evidenceStatesChanged($event)\"\r\n      ></app-evidence-selector>\r\n      <app-game-suggestions\r\n        [allGhosts]=\"allGhosts\"\r\n        [evidenceStates]=\"evidenceStates\"\r\n        (resetEvidenceStates)=\"onResetEvidenceStates()\"\r\n      ></app-game-suggestions>\r\n    </main>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/evidence-selector/evidence-select/evidence-select.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evidence-selector/evidence-select/evidence-select.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEvidenceSelectorEvidenceSelectEvidenceSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>{{ this.name }}</p>\r\n<div>\r\n  <mat-button-toggle-group\r\n    *ngIf=\"evidenceStatus\"\r\n    (change)=\"onEvidenceStatusChanged($event)\"\r\n    name=\"fontStyle\"\r\n    aria-label=\"Font Style\"\r\n    [value]=\"initialEvidenceStatusKey\"\r\n  >\r\n    <mat-button-toggle\r\n      *ngFor=\"let option of evidenceSelectOptions\"\r\n      [value]=\"option.key\"\r\n      >{{ option.name }}</mat-button-toggle\r\n    >\r\n  </mat-button-toggle-group>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/evidence-selector/evidence-selector.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evidence-selector/evidence-selector.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEvidenceSelectorEvidenceSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\r\n  <app-evidence-select\r\n    *ngFor=\"let evidenceStatus of evidenceStates\"\r\n    [evidenceStatus]=\"evidenceStatus\"\r\n    (evidenceStatusChanged)=\"onEvidenceStatesChanged($event)\"\r\n  ></app-evidence-select>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameSuggestionsEvidenceSuggestionsEvidenceSuggestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"suggestedEvidences.evidenceKeysToProve.length > 0\">\r\n  <h3>try to prove</h3>\r\n  <ul>\r\n    <li *ngFor=\"let evidence of suggestedEvidences.evidenceKeysToProve\">\r\n      {{ evidence }}\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n<ng-container *ngIf=\"suggestedEvidences.evidenceKeysToExclude.length > 0\">\r\n  <h3>try to exclude</h3>\r\n  <ul>\r\n    <li *ngFor=\"let evidence of suggestedEvidences.evidenceKeysToExclude\">\r\n      {{ evidence }}\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/game-suggestions.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/game-suggestions.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameSuggestionsGameSuggestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\r\n  <ng-container *ngIf=\"suggestedGhosts.length === 0; else suggestions\">\r\n    <h2>no ghosts left</h2>\r\n    <button\r\n      mat-raised-button\r\n      color=\"accent\"\r\n      (click)=\"resetEvidenceStates.emit()\"\r\n    >\r\n      reset\r\n    </button>\r\n  </ng-container>\r\n</mat-card>\r\n\r\n<ng-template #suggestions>\r\n  <app-ghost-suggestions\r\n    [suggestedGhosts]=\"suggestedGhosts\"\r\n  ></app-ghost-suggestions>\r\n  <app-evidence-suggestions\r\n    [ghosts]=\"suggestedGhosts\"\r\n    [evidenceStates]=\"evidenceStates\"\r\n  ></app-evidence-suggestions>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameSuggestionsGhostSuggestionsGhostSuggestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>possible ghosts</h2>\r\n<mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let ghost of suggestedGhosts\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        {{ ghost.name }}\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        <div *ngFor=\"let neededEvidence of ghost.neededEvidences\">\r\n          {{ neededEvidence }}\r\n        </div>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <mat-card-content>\r\n      <p>{{ ghost.desc }}</p>\r\n      <p><b>strength:</b> {{ ghost.strength }}</p>\r\n      <p><b>weakness:</b> {{ ghost.weakness }}</p>\r\n    </mat-card-content>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".viewport-scroll {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: scroll;\n}\n\n.content-wrapper {\n  display: flex;\n  justify-content: center;\n}\n\nmain {\n  padding: 20px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 300px) {\n  main {\n    width: 300px;\n  }\n}\n\n@media (min-width: 365px) {\n  main {\n    width: 360px;\n  }\n}\n\n@media (min-width: 500px) {\n  main {\n    width: 450px;\n  }\n}\n\nmain > *:not(:last-child) {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzaGF4XFxwcm9qZWN0c1xccGhhc21vL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQVVFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNSRjs7QURIRTtFQURGO0lBRUksWUFBQTtFQ01GO0FBQ0Y7O0FETEU7RUFKRjtJQUtJLFlBQUE7RUNRRjtBQUNGOztBRFBFO0VBUEY7SUFRSSxZQUFBO0VDVUY7QUFDRjs7QURMRTtFQUVFLG9CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld3BvcnQtc2Nyb2xsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzNjVweCkge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICB9XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgJiA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAvLyBncmlkIGdhcC4uXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuIiwiLnZpZXdwb3J0LXNjcm9sbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkge1xuICBtYWluIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjVweCkge1xuICBtYWluIHtcbiAgICB3aWR0aDogMzYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICBtYWluIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbn1cbm1haW4gPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _game_data_evidence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./game-data/evidence */
    "./src/app/game-data/evidence.ts");
    /* harmony import */


    var _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game-data/GHOSTS */
    "./src/app/game-data/GHOSTS.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.evidenceStates = this.createEvidenceStates();
          this.allGhosts = _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_3__["GHOSTS"];
        }
      }, {
        key: "evidenceStatesChanged",
        value: function evidenceStatesChanged(updatedEvidenceStats) {
          this.evidenceStates = updatedEvidenceStats;
        }
      }, {
        key: "onResetEvidenceStates",
        value: function onResetEvidenceStates() {
          this.evidenceStates = this.createEvidenceStates();
        }
      }, {
        key: "createEvidenceStates",
        value: function createEvidenceStates() {
          return Object.keys(_game_data_evidence__WEBPACK_IMPORTED_MODULE_2__["Evidence"]).map(function (key) {
            return {
              evidenceKey: key,
              statusKey: 'UNKNOWN'
            };
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _evidence_selector_evidence_selector_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./evidence-selector/evidence-selector.module */
    "./src/app/evidence-selector/evidence-selector.module.ts");
    /* harmony import */


    var _game_suggestions_game_suggestions_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./game-suggestions/game-suggestions.module */
    "./src/app/game-suggestions/game-suggestions.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _evidence_selector_evidence_selector_module__WEBPACK_IMPORTED_MODULE_6__["EvidenceSelectorModule"], _game_suggestions_game_suggestions_module__WEBPACK_IMPORTED_MODULE_7__["GameSuggestionsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/evidence-selector/evidence-select/evidence-select.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/evidence-selector/evidence-select/evidence-select.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEvidenceSelectorEvidenceSelectEvidenceSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 10px;\n}\n@media (min-width: 365px) {\n  :host {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n:host:last-child {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZpZGVuY2Utc2VsZWN0b3IvZXZpZGVuY2Utc2VsZWN0L0M6XFxVc2Vyc1xcc2hheFxccHJvamVjdHNcXHBoYXNtby9zcmNcXGFwcFxcZXZpZGVuY2Utc2VsZWN0b3JcXGV2aWRlbmNlLXNlbGVjdFxcZXZpZGVuY2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ldmlkZW5jZS1zZWxlY3Rvci9ldmlkZW5jZS1zZWxlY3QvZXZpZGVuY2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFPQSxvQkFBQTtBQ0xGO0FEQUU7RUFMRjtJQU1JLG1CQUFBO0lBQ0EsOEJBQUE7RUNHRjtBQUNGO0FEQ0U7RUFDRSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZXZpZGVuY2Utc2VsZWN0b3IvZXZpZGVuY2Utc2VsZWN0L2V2aWRlbmNlLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDM2NXB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjVweCkge1xuICA6aG9zdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbjpob3N0Omxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/evidence-selector/evidence-select/evidence-select.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/evidence-selector/evidence-select/evidence-select.component.ts ***!
    \********************************************************************************/

  /*! exports provided: EvidenceSelectComponent */

  /***/
  function srcAppEvidenceSelectorEvidenceSelectEvidenceSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EvidenceSelectComponent", function () {
      return EvidenceSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _game_data_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../game-data/status */
    "./src/app/game-data/status.ts");
    /* harmony import */


    var _game_data_evidence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../game-data/evidence */
    "./src/app/game-data/evidence.ts");

    var EvidenceSelectComponent = /*#__PURE__*/function () {
      function EvidenceSelectComponent() {
        _classCallCheck(this, EvidenceSelectComponent);

        /**
         * The updated EvidenceStatus when statusKey changed
         */
        this.evidenceStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EvidenceSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // set initial values to prevent to much rerender (mat toggle group will set it's value itself)
          this.name = _game_data_evidence__WEBPACK_IMPORTED_MODULE_3__["Evidence"][this.evidenceStatus.evidenceKey];
          this.evidenceSelectOptions = this.getEvidenceSelectOptions();
          this.initialEvidenceStatusKey = this.evidenceStatus.statusKey;
        }
        /**
         * changes and emits state
         * @param value Key of the selected status
         */

      }, {
        key: "onEvidenceStatusChanged",
        value: function onEvidenceStatusChanged(_ref) {
          var selectedStatusKey = _ref.value;
          this.evidenceStatus.statusKey = selectedStatusKey;
          this.evidenceStatusChanged.emit(this.evidenceStatus);
        }
      }, {
        key: "getEvidenceSelectOptions",
        value: function getEvidenceSelectOptions() {
          return Object.keys(_game_data_status__WEBPACK_IMPORTED_MODULE_2__["Status"]).map(function (key) {
            return {
              key: key,
              name: _game_data_status__WEBPACK_IMPORTED_MODULE_2__["Status"][key]
            };
          });
        }
      }]);

      return EvidenceSelectComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EvidenceSelectComponent.prototype, "evidenceStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EvidenceSelectComponent.prototype, "evidenceStatusChanged", void 0);
    EvidenceSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-evidence-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./evidence-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/evidence-selector/evidence-select/evidence-select.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./evidence-select.component.scss */
      "./src/app/evidence-selector/evidence-select/evidence-select.component.scss"))["default"]]
    })], EvidenceSelectComponent);
    /***/
  },

  /***/
  "./src/app/evidence-selector/evidence-selector.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/evidence-selector/evidence-selector.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEvidenceSelectorEvidenceSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2aWRlbmNlLXNlbGVjdG9yL2V2aWRlbmNlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/evidence-selector/evidence-selector.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/evidence-selector/evidence-selector.component.ts ***!
    \******************************************************************/

  /*! exports provided: EvidenceSelectorComponent */

  /***/
  function srcAppEvidenceSelectorEvidenceSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EvidenceSelectorComponent", function () {
      return EvidenceSelectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EvidenceSelectorComponent = /*#__PURE__*/function () {
      function EvidenceSelectorComponent() {
        _classCallCheck(this, EvidenceSelectorComponent);

        this.evidenceStatesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EvidenceSelectorComponent, [{
        key: "onEvidenceStatesChanged",
        value: function onEvidenceStatesChanged(newEvidenceState) {
          this.evidenceStates = this.evidenceStates.map(function (currentState) {
            return currentState.evidenceKey === newEvidenceState.evidenceKey ? newEvidenceState : currentState;
          });
          this.evidenceStatesChanged.emit(this.evidenceStates);
        }
      }]);

      return EvidenceSelectorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EvidenceSelectorComponent.prototype, "evidenceStates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EvidenceSelectorComponent.prototype, "evidenceStatesChanged", void 0);
    EvidenceSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-evidence-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./evidence-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/evidence-selector/evidence-selector.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./evidence-selector.component.scss */
      "./src/app/evidence-selector/evidence-selector.component.scss"))["default"]]
    })], EvidenceSelectorComponent);
    /***/
  },

  /***/
  "./src/app/evidence-selector/evidence-selector.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/evidence-selector/evidence-selector.module.ts ***!
    \***************************************************************/

  /*! exports provided: EvidenceSelectorModule */

  /***/
  function srcAppEvidenceSelectorEvidenceSelectorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EvidenceSelectorModule", function () {
      return EvidenceSelectorModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _evidence_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./evidence-selector.component */
    "./src/app/evidence-selector/evidence-selector.component.ts");
    /* harmony import */


    var _evidence_select_evidence_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./evidence-select/evidence-select.component */
    "./src/app/evidence-selector/evidence-select/evidence-select.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var EvidenceSelectorModule = function EvidenceSelectorModule() {
      _classCallCheck(this, EvidenceSelectorModule);
    };

    EvidenceSelectorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_evidence_selector_component__WEBPACK_IMPORTED_MODULE_3__["EvidenceSelectorComponent"], _evidence_select_evidence_select_component__WEBPACK_IMPORTED_MODULE_4__["EvidenceSelectComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]],
      exports: [_evidence_selector_component__WEBPACK_IMPORTED_MODULE_3__["EvidenceSelectorComponent"]]
    })], EvidenceSelectorModule);
    /***/
  },

  /***/
  "./src/app/game-data/GHOSTS.ts":
  /*!*************************************!*\
    !*** ./src/app/game-data/GHOSTS.ts ***!
    \*************************************/

  /*! exports provided: GHOSTS */

  /***/
  function srcAppGameDataGHOSTSTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GHOSTS", function () {
      return GHOSTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _evidence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./evidence */
    "./src/app/game-data/evidence.ts");

    var GHOSTS = [{
      name: 'Spirit',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FINGERPRINT],
      desc: "A spirit is the most common Ghost you will come across however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.",
      strength: "Nothing",
      weakness: "Using Smudge Sticks on a Spirit will stop it attacking for a long period of time."
    }, {
      name: 'Wraith',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FINGERPRINT],
      desc: "A wraith is one of the most dangerous Ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.",
      strength: "Wraiths almost never touch the ground meaning it can\u2019t be tracked by footsteps.",
      weakness: "Wraiths have a toxic reaction to Salt."
    }, {
      name: 'Phantom',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].EMF, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].ORB],
      desc: "A Phantom is a Ghost that can possess the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.",
      strength: "Looking at a Phantom will considerably drop your sanity.",
      weakness: "Taking a photo of the Phantom will make it temporarily disappear."
    }, {
      name: 'Poltergeist',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FINGERPRINT],
      desc: "One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into it\u2019s victims.",
      strength: "A Poltergeist can throw huge amounts of objects at once.",
      weakness: "A Poltergeist is almost ineffective in an empty room."
    }, {
      name: 'Banshee',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].EMF, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FINGERPRINT],
      desc: "A Banshee is a natural hunter and will attack anything. It has been known to stalk it\u2019s prey one at a time until making it\u2019s kill.",
      strength: "A Banshee will only target one person at a time.",
      weakness: "Banshees feat the Crucifix and will be less aggressive when near one."
    }, {
      name: 'Jinn',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].EMF],
      desc: "A Jinn is a territorial Ghost that will attack when threatened. It has also been known to be able to travel at significant speed.",
      strength: "A Jinn will travel at a faster speed if it\u2019s victim is far away.",
      weakness: "Turning off the locations power source will prevent the Jinn from using it\u2019s ability."
    }, {
      name: 'Mare',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FREEZE],
      desc: "A Mare is the source of all nightmares, making it most powerful in the dark.",
      strength: "A Mare will have an increased chance to attack in the dark.",
      weakness: "Turning the lights on around the Mare will lower it\u2019s chance to attack."
    }, {
      name: 'Revenant',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].EMF, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FINGERPRINT],
      desc: "A Revenant is a slow but violent Ghost that will attack indiscriminately. It has been rumored to travel at a significantly high speed when hunting.",
      strength: "A Revenant will travel at a significantly faster speed when hunting a victim",
      weakness: "Hiding from the Revenant will cause it to move very slowly."
    }, {
      name: 'Shade',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].EMF, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOOK],
      desc: "A Shade is known to be a Shy Ghost. There is evidence that a Shade will stop all paranormal activity if there are multiple people nearby.",
      strength: "Being shy means the ghost will be harder to find.",
      weakness: "The Ghost will not enter hunting mode if there are multiply people nearby."
    }, {
      name: 'Demon',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FREEZE],
      desc: "A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.",
      strength: "Demons will attack more often than any other Ghost.",
      weakness: "Asking a Demon successful questions on the Ouija Board won\u2019t lower the users sanity."
    }, {
      name: 'Yurei',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].ORB],
      desc: "A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",
      strength: "Yurei\u2019s have been known to have a stronger effect on people\u2019s sanity.",
      weakness: "Smudging the Yurei\u2019s room will cause it to not wander around the location for a long time."
    }, {
      name: 'Oni',
      neededEvidences: [_evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].EMF, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_1__["Evidence"].BOOK],
      desc: "Oni\u2019s are a cousin to the Demon and possess extreme strength. There have been rumors that they become more active around their prey.",
      strength: "Oni\u2019s are more active when people are nearby and have been seen moving objects at great speed.",
      weakness: "Being more active will make the Oni easier to find and identify."
    }];
    /***/
  },

  /***/
  "./src/app/game-data/evidence.ts":
  /*!***************************************!*\
    !*** ./src/app/game-data/evidence.ts ***!
    \***************************************/

  /*! exports provided: Evidence */

  /***/
  function srcAppGameDataEvidenceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Evidence", function () {
      return Evidence;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Evidence;

    (function (Evidence) {
      Evidence["FINGERPRINT"] = "Fingerprints";
      Evidence["ORB"] = "Ghostorb";
      Evidence["BOOK"] = "Ghostwriting";
      Evidence["FREEZE"] = "Freezing temperatures";
      Evidence["EMF"] = "EMF Level 5";
      Evidence["BOX"] = "Ghostbox";
    })(Evidence || (Evidence = {}));
    /***/

  },

  /***/
  "./src/app/game-data/status.ts":
  /*!*************************************!*\
    !*** ./src/app/game-data/status.ts ***!
    \*************************************/

  /*! exports provided: Status */

  /***/
  function srcAppGameDataStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Status", function () {
      return Status;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Status;

    (function (Status) {
      Status["UNLIKELY"] = "unlikely";
      Status["UNKNOWN"] = "unkown";
      Status["PROVEN"] = "proven";
    })(Status || (Status = {}));
    /***/

  },

  /***/
  "./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameSuggestionsEvidenceSuggestionsEvidenceSuggestionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtc3VnZ2VzdGlvbnMvZXZpZGVuY2Utc3VnZ2VzdGlvbnMvZXZpZGVuY2Utc3VnZ2VzdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: EvidenceSuggestionsComponent */

  /***/
  function srcAppGameSuggestionsEvidenceSuggestionsEvidenceSuggestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EvidenceSuggestionsComponent", function () {
      return EvidenceSuggestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _game_data_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../game-data/status */
    "./src/app/game-data/status.ts");
    /* harmony import */


    var _game_data_evidence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../game-data/evidence */
    "./src/app/game-data/evidence.ts");

    var EvidenceSuggestionsComponent = /*#__PURE__*/function () {
      // TODO: layout jumps because of it's centered and the width chages with showen/suggested ghosts
      function EvidenceSuggestionsComponent() {
        _classCallCheck(this, EvidenceSuggestionsComponent);

        this.suggestedEvidences = {
          evidenceKeysToExclude: [],
          evidenceKeysToProve: []
        };
      }

      _createClass(EvidenceSuggestionsComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(_ref2) {
          var evidenceStates = _ref2.evidenceStates,
              ghosts = _ref2.ghosts;

          if (evidenceStates || ghosts) {
            this.suggestedEvidences = this.getSuggestedEvidences();
          }
        }
      }, {
        key: "getSuggestedEvidences",
        value: function getSuggestedEvidences() {
          var _this = this;

          var unknownEvidences = this.evidenceStates.filter(function (evidence) {
            return _game_data_status__WEBPACK_IMPORTED_MODULE_2__["Status"][evidence.statusKey] === _game_data_status__WEBPACK_IMPORTED_MODULE_2__["Status"].UNKNOWN;
          });
          var prove = [];
          var exclude = [];

          if (unknownEvidences.length !== this.evidenceStates.length) {
            unknownEvidences.forEach(function (unknownEvidence) {
              var occurrenceCount = 0;

              _this.ghosts.forEach(function (suggestedGhost) {
                if (suggestedGhost.neededEvidences.includes(_game_data_evidence__WEBPACK_IMPORTED_MODULE_3__["Evidence"][unknownEvidence.evidenceKey])) {
                  occurrenceCount++;
                }
              });

              if (occurrenceCount === 1) {
                prove = [].concat(_toConsumableArray(prove), [unknownEvidence.evidenceKey]);
              } else if (occurrenceCount > 1) {
                exclude = [].concat(_toConsumableArray(exclude), [unknownEvidence.evidenceKey]);
              }
            });
          }

          return {
            evidenceKeysToExclude: exclude,
            evidenceKeysToProve: prove
          };
        }
      }]);

      return EvidenceSuggestionsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EvidenceSuggestionsComponent.prototype, "evidenceStates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EvidenceSuggestionsComponent.prototype, "ghosts", void 0);
    EvidenceSuggestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-evidence-suggestions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./evidence-suggestions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./evidence-suggestions.component.scss */
      "./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.scss"))["default"]]
    })], EvidenceSuggestionsComponent);
    /***/
  },

  /***/
  "./src/app/game-suggestions/game-suggestions.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/game-suggestions/game-suggestions.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameSuggestionsGameSuggestionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtc3VnZ2VzdGlvbnMvZ2FtZS1zdWdnZXN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/game-suggestions/game-suggestions.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/game-suggestions/game-suggestions.component.ts ***!
    \****************************************************************/

  /*! exports provided: GameSuggestionsComponent */

  /***/
  function srcAppGameSuggestionsGameSuggestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameSuggestionsComponent", function () {
      return GameSuggestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _game_data_evidence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game-data/evidence */
    "./src/app/game-data/evidence.ts");
    /* harmony import */


    var _game_data_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game-data/status */
    "./src/app/game-data/status.ts");

    var GameSuggestionsComponent = /*#__PURE__*/function () {
      function GameSuggestionsComponent() {
        _classCallCheck(this, GameSuggestionsComponent);

        this.resetEvidenceStates = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(GameSuggestionsComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(_ref3) {
          var evidenceStates = _ref3.evidenceStates,
              ghosts = _ref3.ghosts;

          if (evidenceStates || ghosts) {
            this.suggestedGhosts = this.getSuggestedGhosts();
          }
        }
      }, {
        key: "getSuggestedGhosts",
        value: function getSuggestedGhosts() {
          var provenGhosts = this.getProvenGhosts(this.allGhosts, this.evidenceStates);
          return this.getGhostsWithoutUnlikely(provenGhosts, this.evidenceStates);
        }
      }, {
        key: "getProvenGhosts",
        value: function getProvenGhosts(ghosts, evidenceStates) {
          var provenEvidences = evidenceStates.filter(function (evidence) {
            return _game_data_status__WEBPACK_IMPORTED_MODULE_3__["Status"][evidence.statusKey] === _game_data_status__WEBPACK_IMPORTED_MODULE_3__["Status"].PROVEN;
          });
          return ghosts.filter(function (ghost) {
            return provenEvidences.every(function (provenEvidence) {
              return ghost.neededEvidences.includes(_game_data_evidence__WEBPACK_IMPORTED_MODULE_2__["Evidence"][provenEvidence.evidenceKey]);
            });
          });
        }
      }, {
        key: "getGhostsWithoutUnlikely",
        value: function getGhostsWithoutUnlikely(ghosts, evidenceStates) {
          var unlikelyEvidences = evidenceStates.filter(function (evidence) {
            return _game_data_status__WEBPACK_IMPORTED_MODULE_3__["Status"][evidence.statusKey] === _game_data_status__WEBPACK_IMPORTED_MODULE_3__["Status"].UNLIKELY;
          });
          return ghosts.filter(function (ghost) {
            return !unlikelyEvidences.some(function (unlikelyEvidence) {
              return ghost.neededEvidences.includes(_game_data_evidence__WEBPACK_IMPORTED_MODULE_2__["Evidence"][unlikelyEvidence.evidenceKey]);
            });
          });
        }
      }]);

      return GameSuggestionsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameSuggestionsComponent.prototype, "evidenceStates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameSuggestionsComponent.prototype, "allGhosts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GameSuggestionsComponent.prototype, "resetEvidenceStates", void 0);
    GameSuggestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-suggestions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-suggestions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/game-suggestions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-suggestions.component.scss */
      "./src/app/game-suggestions/game-suggestions.component.scss"))["default"]]
    })], GameSuggestionsComponent);
    /***/
  },

  /***/
  "./src/app/game-suggestions/game-suggestions.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/game-suggestions/game-suggestions.module.ts ***!
    \*************************************************************/

  /*! exports provided: GameSuggestionsModule */

  /***/
  function srcAppGameSuggestionsGameSuggestionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameSuggestionsModule", function () {
      return GameSuggestionsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _game_suggestions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game-suggestions.component */
    "./src/app/game-suggestions/game-suggestions.component.ts");
    /* harmony import */


    var _evidence_suggestions_evidence_suggestions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./evidence-suggestions/evidence-suggestions.component */
    "./src/app/game-suggestions/evidence-suggestions/evidence-suggestions.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _ghost_suggestions_ghost_suggestions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ghost-suggestions/ghost-suggestions.component */
    "./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.ts");

    var GameSuggestionsModule = function GameSuggestionsModule() {
      _classCallCheck(this, GameSuggestionsModule);
    };

    GameSuggestionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_game_suggestions_component__WEBPACK_IMPORTED_MODULE_3__["GameSuggestionsComponent"], _evidence_suggestions_evidence_suggestions_component__WEBPACK_IMPORTED_MODULE_4__["EvidenceSuggestionsComponent"], _ghost_suggestions_ghost_suggestions_component__WEBPACK_IMPORTED_MODULE_6__["GhostSuggestionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"]],
      exports: [_game_suggestions_component__WEBPACK_IMPORTED_MODULE_3__["GameSuggestionsComponent"]]
    })], GameSuggestionsModule);
    /***/
  },

  /***/
  "./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameSuggestionsGhostSuggestionsGhostSuggestionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (max-width: 365px) {\n  ::ng-deep .mat-expansion-panel-header .mat-content {\n    align-items: center;\n  }\n}\n.mat-expansion-panel-header-description {\n  margin: 0;\n  display: flex;\n  justify-content: flex-end;\n  text-align: right;\n  flex-wrap: wrap;\n}\n.mat-expansion-panel-header-description div:not(:first-child) {\n  padding-left: 3px;\n}\n.mat-card-content > *:not(:last-child) {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1zdWdnZXN0aW9ucy9naG9zdC1zdWdnZXN0aW9ucy9DOlxcVXNlcnNcXHNoYXhcXHByb2plY3RzXFxwaGFzbW8vc3JjXFxhcHBcXGdhbWUtc3VnZ2VzdGlvbnNcXGdob3N0LXN1Z2dlc3Rpb25zXFxnaG9zdC1zdWdnZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS1zdWdnZXN0aW9ucy9naG9zdC1zdWdnZXN0aW9ucy9naG9zdC1zdWdnZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsbUJBQUE7RUNDRjtBQUNGO0FEQ0E7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9nYW1lLXN1Z2dlc3Rpb25zL2dob3N0LXN1Z2dlc3Rpb25zL2dob3N0LXN1Z2dlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDM2NXB4KSB7XHJcbiAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAubWF0LWNvbnRlbnQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBkaXY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiIsIkBtZWRpYSAobWF4LXdpZHRoOiAzNjVweCkge1xuICA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIC5tYXQtY29udGVudCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIGRpdjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4ubWF0LWNhcmQtY29udGVudCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: GhostSuggestionsComponent */

  /***/
  function srcAppGameSuggestionsGhostSuggestionsGhostSuggestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GhostSuggestionsComponent", function () {
      return GhostSuggestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GhostSuggestionsComponent = function GhostSuggestionsComponent() {
      _classCallCheck(this, GhostSuggestionsComponent);

      this.suggestedGhosts = [];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GhostSuggestionsComponent.prototype, "suggestedGhosts", void 0);
    GhostSuggestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ghost-suggestions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ghost-suggestions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ghost-suggestions.component.scss */
      "./src/app/game-suggestions/ghost-suggestions/ghost-suggestions.component.scss"))["default"]]
    })], GhostSuggestionsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\shax\projects\phasmo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map