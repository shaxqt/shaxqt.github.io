(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+FHT":
/*!**************************************************************!*\
  !*** ./src/app/evidence-state/evidence-state.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2aWRlbmNlLXN0YXRlL2V2aWRlbmNlLXN0YXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shax\projects\angular-ivy-xja6ns\src\main.ts */"zUnb");


/***/ }),

/***/ "3591":
/*!***************************************!*\
  !*** ./src/app/game-data/evidence.ts ***!
  \***************************************/
/*! exports provided: Evidence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evidence", function() { return Evidence; });
var Evidence;
(function (Evidence) {
    Evidence["FINGERPRINT"] = "Fingerabdr\u00FCcke";
    Evidence["EMF5"] = "EMF Level 5";
    Evidence["BOOK"] = "Geisterbuch";
    Evidence["BOX"] = "Geisterbox";
    Evidence["FREEZE"] = "Gefriertemperaturen";
    Evidence["ORB"] = "Geisterkugel";
})(Evidence || (Evidence = {}));


/***/ }),

/***/ "8mIo":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evidence-state/evidence-state.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"flex\">\r\n  <p>{{ state.evidence }}</p>\r\n  <select (change)=\"updateEvidence($event)\">\r\n    <option\r\n      *ngFor=\"let option of options\"\r\n      value=\"{{ option.value }}\"\r\n      [selected]=\"isSelected(option)\"\r\n    >\r\n      {{ option.name }}\r\n    </option>\r\n  </select>\r\n</section>\r\n");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogTGF0bztcbn0iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_data_evidence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-data/evidence */ "3591");
/* harmony import */ var _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-data/proof-state */ "dY+l");
/* harmony import */ var _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-data/GHOSTS */ "nu1I");







let AppComponent = class AppComponent {
    constructor() {
        this.bestBets = [];
    }
    ngOnInit() {
        this.evidenceStates = this.createEvidenceStates();
        this.possibleGhosts = _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_6__["GHOSTS"];
    }
    updateEvidence(updatedEvidenceState) {
        this.evidenceStates = this.evidenceStates.map((state) => {
            return state.evidence === updatedEvidenceState.evidence
                ? updatedEvidenceState
                : state;
        });
        this.calculatePossibleGhosts();
        this.calculateNextSteps();
    }
    calculatePossibleGhosts() {
        const proofedEvidences = this.evidenceStates
            .filter((evidence) => evidence.state === _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__["ProofState"].PROOFED)
            .map((evidenceState) => evidenceState.evidence);
        const proofedGhosts = _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_6__["GHOSTS"].filter((ghost) => proofedEvidences.every((evidence) => ghost.evidences.includes(evidence)));
        const excludedEvidences = this.evidenceStates
            .filter((evidence) => evidence.state === _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__["ProofState"].NEVER)
            .map((evidenceState) => evidenceState.evidence);
        const possibleGhosts = proofedGhosts.filter((ghost) => !excludedEvidences.some((evidence) => ghost.evidences.includes(evidence)));
        this.possibleGhosts = possibleGhosts;
    }
    calculateNextSteps() {
        if (this.possibleGhosts.length === 1 ||
            this.possibleGhosts.length === _game_data_GHOSTS__WEBPACK_IMPORTED_MODULE_6__["GHOSTS"].length) {
            this.bestBets = [];
        }
        else {
            const unknownEvidences = this.evidenceStates
                .filter((evidence) => evidence.state === _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__["ProofState"].DONT_KNOW)
                .map((evidenceState) => evidenceState.evidence);
            this.bestBets = unknownEvidences.filter((unknownEvidence) => {
                let evidenceUsedForGhosts = 0;
                this.possibleGhosts.forEach((ghost) => {
                    if (ghost.evidences.includes(unknownEvidence)) {
                        evidenceUsedForGhosts++;
                    }
                });
                return evidenceUsedForGhosts === 1;
            });
        }
    }
    createEvidenceStates() {
        return Object.keys(_game_data_evidence__WEBPACK_IMPORTED_MODULE_4__["Evidence"]).map((evidenceKey) => ({
            evidence: _game_data_evidence__WEBPACK_IMPORTED_MODULE_4__["Evidence"][evidenceKey],
            state: _game_data_proof_state__WEBPACK_IMPORTED_MODULE_5__["ProofState"].DONT_KNOW,
        }));
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let state of evidenceStates\">\n  <evidence-state\n    [state]=\"state\"\n    (evidenceChanged)=\"updateEvidence($event)\"\n  ></evidence-state>\n</ng-container>\n<h2>Mögliche Geister</h2>\n<ul>\n  <li *ngFor=\"let ghost of possibleGhosts\">{{ ghost.name }}</li>\n</ul>\n<p *ngIf=\"bestBets.length > 0\">Zu prüfen: {{ bestBets.join(', ') }}</p>\n<p *ngIf=\"possibleGhosts.length === 0\">Das macht keinen Sinn</p>\n<p *ngIf=\"possibleGhosts.length === 1\">Abfahrt!</p>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _evidence_state_evidence_state_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evidence-state/evidence-state.component */ "wwYV");






let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _evidence_state_evidence_state_component__WEBPACK_IMPORTED_MODULE_5__["EvidenceStateComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dY+l":
/*!******************************************!*\
  !*** ./src/app/game-data/proof-state.ts ***!
  \******************************************/
/*! exports provided: ProofState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProofState", function() { return ProofState; });
var ProofState;
(function (ProofState) {
    ProofState["NEVER"] = "ausgeschlossen";
    ProofState["DONT_KNOW"] = "keine Ahnung";
    ProofState["PROOFED"] = "bewiesen!";
})(ProofState || (ProofState = {}));


/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "m+po");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
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


/***/ }),

/***/ "nu1I":
/*!*************************************!*\
  !*** ./src/app/game-data/GHOSTS.ts ***!
  \*************************************/
/*! exports provided: GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GHOSTS", function() { return GHOSTS; });
/* harmony import */ var _evidence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evidence */ "3591");

const GHOSTS = [
    {
        name: "Spirit",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
    },
    {
        name: "Gespenst",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
    },
    {
        name: "Phantom",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
    },
    {
        name: "Poltergeist",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
    },
    {
        name: "Banshee",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
    },
    {
        name: "Mare",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE]
    },
    {
        name: "Revenant",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FINGERPRINT]
    },
    {
        name: "Shade",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK]
    },
    {
        name: "Dämon",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE]
    },
    {
        name: "Yurei",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].FREEZE, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].ORB]
    },
    {
        name: "Oni",
        evidences: [_evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].EMF5, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOX, _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"].BOOK]
    }
];


/***/ }),

/***/ "wwYV":
/*!************************************************************!*\
  !*** ./src/app/evidence-state/evidence-state.component.ts ***!
  \************************************************************/
/*! exports provided: EvidenceStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceStateComponent", function() { return EvidenceStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_evidence_state_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./evidence-state.component.html */ "8mIo");
/* harmony import */ var _evidence_state_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evidence-state.component.scss */ "+FHT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-data/proof-state */ "dY+l");





let EvidenceStateComponent = class EvidenceStateComponent {
    constructor() {
        this.evidenceChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.options = [
            { name: _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"].NEVER, value: 'NEVER' },
            { name: _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"].DONT_KNOW, value: 'DONT_KNOW' },
            { name: _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"].PROOFED, value: 'PROOFED' },
        ];
    }
    updateEvidence(event) {
        this.state = Object.assign(Object.assign({}, this.state), { state: _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"][event.target.value] });
        this.evidenceChanged.emit(this.state);
    }
    isSelected(option) {
        return _game_data_proof_state__WEBPACK_IMPORTED_MODULE_4__["ProofState"][option.value] === this.state.state;
    }
};
EvidenceStateComponent.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    evidenceChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
EvidenceStateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'evidence-state',
        template: _raw_loader_evidence_state_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_evidence_state_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EvidenceStateComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map