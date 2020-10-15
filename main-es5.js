(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+FHT":
    /*!**************************************************************!*\
      !*** ./src/app/evidence-state/evidence-state.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function FHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "section {\n  padding: 10px 0;\n}\n\nh3 {\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  padding-bottom: 5px;\n  font-size: 1.2rem;\n}\n\nbutton {\n  font-size: 1rem;\n  color: inherit;\n  background-color: #444;\n  border: none;\n  text-decoration: none;\n  outline: none;\n  padding: 10px;\n  flex-basis: 100%;\n}\n\nbutton.selected {\n  background-color: #666;\n}\n\n.button-bar {\n  display: flex;\n  align-items: stretch;\n  border-radius: 5px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZpZGVuY2Utc3RhdGUvZXZpZGVuY2Utc3RhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFBSTtFQUNJLHNCQUFBO0FBRVI7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9ldmlkZW5jZS1zdGF0ZS9ldmlkZW5jZS1zdGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbn1cclxuLmJ1dHRvbi1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */";
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
      /*! C:\Users\shax\projects\angular-ivy-xja6ns\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3591":
    /*!***************************************!*\
      !*** ./src/app/game-data/evidence.ts ***!
      \***************************************/

    /*! exports provided: Evidence */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Evidence", function () {
        return Evidence;
      });

      var Evidence;

      (function (Evidence) {
        Evidence["FINGERPRINT"] = "Fingerabdr\xFCcke";
        Evidence["EMF5"] = "EMF Level 5";
        Evidence["BOOK"] = "Geisterbuch";
        Evidence["BOX"] = "Geisterbox";
        Evidence["FREEZE"] = "Gefriertemperaturen";
        Evidence["ORB"] = "Geisterkugel";
      })(Evidence || (Evidence = {}));
      /***/

    },

    /***/
    "8mIo":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evidence-state/evidence-state.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mIo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"flex\">\r\n  <h3>{{ state.evidence }}</h3>\r\n  <div class=\"button-bar\">\r\n    <button *ngFor=\"let stateOption of proofStateOptions\"\r\n      [ngClass]=\"{'selected': isSelected(stateOption.key)}\"\r\n      (click)=\"updateEvidence(stateOption.key)\">\r\n      {{stateOption.name}}\r\n    </button>\r\n  </div>\r\n</section>\r\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _game_data_evidence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./game-data/evidence */
      "3591");
      /* harmony import */


      var _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./game-data/proof-state */
      "dY+l");
      /* harmony import */


      var _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./game-data/GHOSTS */
      "nu1I");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.bestBets = [];
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.evidenceStates = this.createEvidenceStates();
            this.possibleGhosts = _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_6__["GHOSTS"];
          }
        }, {
          key: "updateEvidence",
          value: function updateEvidence(updatedEvidenceState) {
            this.evidenceStates = this.evidenceStates.map(function (state) {
              return state.evidence === updatedEvidenceState.evidence ? updatedEvidenceState : state;
            });
            this.calculatePossibleGhosts();
            this.calculateNextSteps();
          }
        }, {
          key: "calculatePossibleGhosts",
          value: function calculatePossibleGhosts() {
            var proofedEvidences = this.evidenceStates.filter(function (evidence) {
              return evidence.state === _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__["ProofState"].PROOFED;
            }).map(function (evidenceState) {
              return evidenceState.evidence;
            });

            var proofedGhosts = _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_6__["GHOSTS"].filter(function (ghost) {
              return proofedEvidences.every(function (evidence) {
                return ghost.evidences.includes(evidence);
              });
            });

            var excludedEvidences = this.evidenceStates.filter(function (evidence) {
              return evidence.state === _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__["ProofState"].NEVER;
            }).map(function (evidenceState) {
              return evidenceState.evidence;
            });
            var possibleGhosts = proofedGhosts.filter(function (ghost) {
              return !excludedEvidences.some(function (evidence) {
                return ghost.evidences.includes(evidence);
              });
            });
            this.possibleGhosts = possibleGhosts;
          }
        }, {
          key: "calculateNextSteps",
          value: function calculateNextSteps() {
            var _this = this;

            if (this.possibleGhosts.length === 1 || this.possibleGhosts.length === _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_6__["GHOSTS"].length) {
              this.bestBets = [];
            } else {
              var unknownEvidences = this.evidenceStates.filter(function (evidence) {
                return evidence.state === _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__["ProofState"].DONT_KNOW;
              }).map(function (evidenceState) {
                return evidenceState.evidence;
              });
              this.bestBets = unknownEvidences.filter(function (unknownEvidence) {
                var evidenceUsedForGhosts = 0;

                _this.possibleGhosts.forEach(function (ghost) {
                  if (ghost.evidences.includes(unknownEvidence)) {
                    evidenceUsedForGhosts++;
                  }
                });

                return evidenceUsedForGhosts === 1;
              });
            }
          }
        }, {
          key: "createEvidenceStates",
          value: function createEvidenceStates() {
            return Object.keys(_game_data_evidence__WEBPACK_IMPORTED_MODULE_4__["Evidence"]).map(function (evidenceKey) {
              return {
                evidence: _game_data_evidence__WEBPACK_IMPORTED_MODULE_4__["Evidence"][evidenceKey],
                state: _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__["ProofState"].DONT_KNOW
              };
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"root\">\n  <main>\n    <section class=\"max-width\">\n    <ng-container *ngFor=\"let state of evidenceStates\">\n      <evidence-state\n        [state]=\"state\"\n        (evidenceChanged)=\"updateEvidence($event)\"\n      ></evidence-state>\n    </ng-container>\n    <h2>Mögliche Geister</h2>\n    <ul>\n      <li *ngFor=\"let ghost of possibleGhosts\"><b>{{ ghost.name }} </b><small>({{ghost.evidences.join(', ')}}</small>)</li>\n    </ul>\n    <p *ngIf=\"bestBets.length > 0\">Zu prüfen: {{ bestBets.join(', ') }}</p>\n    <p *ngIf=\"possibleGhosts.length === 0\">Das macht keinen Sinn</p>\n    <p *ngIf=\"possibleGhosts.length === 1\">Abfahrt!</p>\n</section>\n  </main>\n\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _evidence_state_evidence_state_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./evidence-state/evidence-state.component */
      "wwYV");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _evidence_state_evidence_state_component__WEBPACK_IMPORTED_MODULE_5__["EvidenceStateComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
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
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "dY+l":
    /*!******************************************!*\
      !*** ./src/app/game-data/proof-state.ts ***!
      \******************************************/

    /*! exports provided: ProofState */

    /***/
    function dYL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProofState", function () {
        return ProofState;
      });

      var ProofState;

      (function (ProofState) {
        ProofState["NEVER"] = "ausgeschlossen";
        ProofState["DONT_KNOW"] = "keine Ahnung";
        ProofState["PROOFED"] = "bewiesen!";
      })(ProofState || (ProofState = {}));
      /***/

    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "m+po");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "nu1I":
    /*!*************************************!*\
      !*** ./src/app/game-data/GHOSTS.ts ***!
      \*************************************/

    /*! exports provided: GHOSTS */

    /***/
    function nu1I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GHOSTS", function () {
        return GHOSTS;
      });
      /* harmony import */


      var _evidence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./evidence */
      "3591");

      var GHOSTS = [{
        name: "Spirit",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
      }, {
        name: "Gespenst",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
      }, {
        name: "Phantom",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB]
      }, {
        name: "Poltergeist",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
      }, {
        name: "Banshee",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
      }, {
        name: "Dschinn",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5]
      }, {
        name: "Mare",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE]
      }, {
        name: "Revenant",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
      }, {
        name: "Shade",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK]
      }, {
        name: "Dämon",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE]
      }, {
        name: "Yurei",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB]
      }, {
        name: "Oni",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK]
      }];
      /***/
    },

    /***/
    "wwYV":
    /*!************************************************************!*\
      !*** ./src/app/evidence-state/evidence-state.component.ts ***!
      \************************************************************/

    /*! exports provided: EvidenceStateComponent */

    /***/
    function wwYV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvidenceStateComponent", function () {
        return EvidenceStateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_evidence_state_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./evidence-state.component.html */
      "8mIo");
      /* harmony import */


      var _evidence_state_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./evidence-state.component.scss */
      "+FHT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../game-data/proof-state */
      "dY+l");

      var EvidenceStateComponent = /*#__PURE__*/function () {
        function EvidenceStateComponent() {
          _classCallCheck(this, EvidenceStateComponent);

          this.evidenceChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.proofStateOptions = Object.keys(_game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"]).map(function (proofStateKey) {
            return {
              key: proofStateKey,
              name: _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"][proofStateKey]
            };
          });
        }

        _createClass(EvidenceStateComponent, [{
          key: "updateEvidence",
          value: function updateEvidence(proofStateKey) {
            this.state = Object.assign(Object.assign({}, this.state), {
              state: _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"][proofStateKey]
            });
            this.evidenceChanged.emit(this.state);
          }
        }, {
          key: "isSelected",
          value: function isSelected(proofStateKey) {
            return _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"][proofStateKey] === this.state.state;
          }
        }]);

        return EvidenceStateComponent;
      }();

      EvidenceStateComponent.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        evidenceChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      EvidenceStateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'evidence-state',
        template: _raw_loader_evidence_state_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_evidence_state_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EvidenceStateComponent);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":root {\n  height: 100%;\n  width: 100%;\n}\n\n#root {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: grid;\n  grid-auto-rows: auto;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.max-width {\n  margin: 0 auto;\n  max-width: 500px;\n}\n\nh2 {\n  font-size: 1.2rem;\n}\n\np, li {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVFLGFBQUE7RUFDRixvQkFBQTtBQUNGOztBQUNBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiNyb290IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbn1cbm1haW4ge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYXgtd2lkdGgge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxucCwgbGkge1xuICBmb250LXNpemU6IDFyZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map