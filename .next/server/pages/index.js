module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.css":
/*!*******************************!*\
  !*** ./components/Footer.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ "./components/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "H:\\PRACTICE\\sugarWebSite\\sugar\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("div", {
    className: "item_3 item_md_8 item_lg_12 mt6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "footer_logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, "So sugary sin")), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, "Project that has no one edge, and leads to eternity")), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "Contact us"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "email"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "hallygirl@")), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "All rules are under control, don't worry"), __jsx("p", {
    className: "flex-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "Made by", __jsx("a", {
    href: "https://github.com/davinchick",
    className: "footer_madeBy",
    target: "_blank",
    title: "davinchick",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/img/github-logo.svg",
    alt: "github",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 130
    }
  })))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "If you have any emotional dissonance or just a questions"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Contact us")))));
};

/***/ }),

/***/ "./components/Header.css":
/*!*******************************!*\
  !*** ./components/Header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.css */ "./components/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "H:\\PRACTICE\\sugarWebSite\\sugar\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = () => {
  return __jsx("div", {
    className: "header item_3 item_md_8 item_lg_12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "boxShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "item_max",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 37
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "item navLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 41
    }
  }, "Home"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/sources",
    className: "item navLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 41
    }
  }, "Sources"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/gallery",
    className: "item navLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 41
    }
  }, "Video Gallery"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/bookshelf",
    className: "item navLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 41
    }
  }, "Bookshelf"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about",
    className: "item navLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 41
    }
  }, "About Project"))), __jsx("h2", {
    className: "showOn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, "White crystals"), __jsx("h4", {
    className: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }, "You'd better don't eat them"), __jsx("h4", {
    className: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, "So sugary sin"))), __jsx("div", {
    className: "item_3 item_md_4 item_lg_4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "showOn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "imageLogo_container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "imageLogo",
    src: "/img/mainPage/img_logo.jpg",
    alt: "img_logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  })))))));
};

/***/ }),

/***/ "./components/components.css":
/*!***********************************!*\
  !*** ./components/components.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/fewWords.js":
/*!********************************!*\
  !*** ./components/fewWords.js ***!
  \********************************/
/*! exports provided: FewWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FewWords", function() { return FewWords; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.css */ "./components/components.css");
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "H:\\PRACTICE\\sugarWebSite\\sugar\\components\\fewWords.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FewWords = () => {
  return __jsx("div", {
    className: "grid_container mt6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "item_1_4 item_md_4 item_lg_4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card height18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "item_auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "item_3_imageContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/img/mainPage/sugarPack.jpg",
    alt: "sugarPack",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "background__grey item_title__mt1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, "Just boring fact:"), __jsx("p", {
    className: "background__grey fz_middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "Sugar intake from sweet food/beverages may increases the chance of incident mood disorders"))))), __jsx("div", {
    className: "item_1_4 item_md_4 item_lg_4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card height18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "item_auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "item_3_imageContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/img/mainPage/nightmare.jpg",
    alt: "nightmare",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "background__grey item_title__mt1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, "Just boring fact:"), __jsx("p", {
    className: "background__grey fz_middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Consuming sugar or carbohydrates primarily raises your blood sugar levels, which gives you a burst of energy that may make you stay up later than you would like, especially if you eat them too close to sleep"))))), __jsx("div", {
    className: "item_1_4 item_md_4 item_lg_4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card height18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "item_auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "item_3_imageContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/img/mainPage/habits.jpg",
    alt: "habits",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "background__grey item_title__mt1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, "Just boring fact:"), __jsx("p", {
    className: "background__grey fz_middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "People who tend to quickly form their habits may become highly addicted to sugar and sweets and just any unhealthy food."))))));
};

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: FewWords, PubMedComponent, Footer, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fewWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fewWords */ "./components/fewWords.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FewWords", function() { return _fewWords__WEBPACK_IMPORTED_MODULE_0__["FewWords"]; });

/* harmony import */ var _pubMedComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubMedComponent */ "./components/pubMedComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PubMedComponent", function() { return _pubMedComponent__WEBPACK_IMPORTED_MODULE_1__["PubMedComponent"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_2__["Footer"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_3__["Header"]; });






/***/ }),

/***/ "./components/pubMedComponent.js":
/*!***************************************!*\
  !*** ./components/pubMedComponent.js ***!
  \***************************************/
/*! exports provided: PubMedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubMedComponent", function() { return PubMedComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.css */ "./components/components.css");
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "H:\\PRACTICE\\sugarWebSite\\sugar\\components\\pubMedComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PubMedComponent() {
  const {
    0: countOfOverlap,
    1: setCountOfOverlap
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: listOfIdOverlaps,
    1: setListOfIdOverlaps
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('sugar intake');
  const {
    0: inputSearchValue,
    1: setInputSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: selectedValueId,
    1: setSelectedValueId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(listOfIdOverlaps[0]);
  const apiPub = `http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=1000&term=${query.split(' ').join('+')}&field=title`;
  const fetchMoreFromId = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${selectedValueId}`;
  const searchArticleById = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${selectedValueId}&retmode=json`;
  const {
    0: isFoundArticle,
    1: setIsFoundArticle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: articleText,
    1: setArticleText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: articleCitation,
    1: setArticleCitation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDataFromSearch();
  }, [query]);

  const getDataFromSearch = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${apiPub}`);
    const res = await response.json(); // console.log(data.hits);

    setCountOfOverlap(res.esearchresult.count);
    setListOfIdOverlaps(res.esearchresult.idlist);
  };

  const changeInputSearch = e => {
    setInputSearchValue(e.target.value);
  };

  const searchItemsByInputValue = e => {
    e.preventDefault();
    setCountOfOverlap(0);
    setQuery(inputSearchValue);
    setInputSearchValue('');
  };

  const searchItemsBySelectedId = async () => {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/${searchArticleById}`);
    const res = await data.json();
    const resultJson = res.result[selectedValueId]; // console.log(resultJson);

    if (resultJson) {
      const article = __jsx("div", {
        className: "item_1_5 item_md_2 item_lg_3 flex-full",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 29
        }
      }, __jsx("h4", {
        className: "article_title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, res.result[selectedValueId].title), __jsx("p", {
        className: "article_date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, res.result[selectedValueId].pubdate), __jsx("p", {
        className: "article_source",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "undescore",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 47
        }
      }, "Source:"), " ", res.result[selectedValueId].source), __jsx("p", {
        className: "article_journal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "undescore",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 48
        }
      }, "From journal:"), " ", res.result[selectedValueId].fulljournalname), __jsx("p", {
        className: "article_authors",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "undescore",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 48
        }
      }, "Authors:"), " ", res.result[selectedValueId].authors.map(el => el.name).join(', ')));

      setArticleText(article);
      setIsFoundArticle(true);
    } else {
      const message = __jsx("p", {
        className: "notFound",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }
      }, "Not found any information .. or it's private article");

      setArticleText(message);
      setIsFoundArticle(false);
    }
  };

  const fetchMoreFromSelectedId = async () => {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/${fetchMoreFromId}`);
    const res = await data.text();
    let textCitation = ''; // console.log(res);

    if (res) {
      const text = res.split('abstract')[1];

      if (text) {
        textCitation = text.split('pmid')[0];
      } else {
        textCitation = text;
      }
    } else {
      textCitation = "Not found any citation";
    }

    setArticleCitation(textCitation);
  };

  const setIdFromSelect = e => {
    setSelectedValueId(e.target.value);
    searchItemsBySelectedId();
    fetchMoreFromSelectedId();
  };

  return __jsx("div", {
    className: "grid_container zIndex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "gradient_abs gradient_abs__top",
    src: '/img/gradients/gradient_blue.svg',
    alt: "gradient",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "item_1_4 item_md_4 item_lg_4 mt3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, "Data from ", __jsx("a", {
    href: "https://http://www.ncbi.nlm.nih.gov",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 35
    }
  }, "PubMed Central")), __jsx("div", {
    className: "boxShadow m0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("form", {
    action: "",
    className: "searchForm",
    onSubmit: searchItemsByInputValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, __jsx("input", {
    type: "text",
    className: "searchInput",
    onChange: e => changeInputSearch(e),
    value: inputSearchValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }), __jsx("button", {
    className: "submitInputSearch",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, "Find")), __jsx("p", {
    className: "fz_middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "There are now ", __jsx("em", {
    className: "undescore",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 64
    }
  }, countOfOverlap), " overlaps according to search by phrase ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 36
    }
  }, "'", query, "'")), __jsx("p", {
    className: "fz_middle searchSelect_label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, "List of Id"), __jsx("select", {
    name: "selectTheId",
    id: "",
    className: "searchSelect",
    onChange: e => setIdFromSelect(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, "-Select id-"), listOfIdOverlaps.map((el, ind) => {
    return __jsx("option", {
      key: el,
      value: el,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 40
      }
    }, ind, "): ", el);
  })))), __jsx("div", {
    className: "boxShadow item_fluid bg_light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "item_1_5 item_md_2 item_lg_3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: `searchItemTitle ${isFoundArticle ? 'colored_green' : 'colored_red'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, "PMED_ID: ", selectedValueId), articleText, articleCitation ? __jsx("p", {
    className: "articleCitation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "undescore",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 37
    }
  }, "Abstract:"), articleCitation) : null))), __jsx("img", {
    className: "gradient_abs gradient_abs__bottom",
    src: '/img/gradients/gradient_blue.svg',
    alt: "gradient",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }));
}
;

/***/ }),

/***/ "./docs/thoughts.js":
/*!**************************!*\
  !*** ./docs/thoughts.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Thoughts = ['I definitely think that people these days are eating a lot more sugars and sweets than they were in\n' + '                               past generations, simply because of the availability of sugar. In each local grocery store tou could find\n' + '                            almost two or more aisles dedicated to just these types of food products.', 'In the past people ate such types of foods maybe once a week. Nowadays - several times a day. Do\n' + '                                you find yourself eating a chocolate bar three times a week?', 'Medical reports are now well-established that eating a lot of refined sugars leads to health problems,\n' + '                                such as type 1 or type 2 diabetes, cardiovascular disease and much more. ', 'Have you been paying an attention to what you\'re eating?'];
/* harmony default export */ __webpack_exports__["default"] = (Thoughts);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _pages_navigation_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/navigation/About */ "./pages/navigation/About.js");
/* harmony import */ var _pages_navigation_Sources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/navigation/Sources */ "./pages/navigation/Sources.js");
/* harmony import */ var _pages_navigation_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/navigation/Home */ "./pages/navigation/Home.js");
/* harmony import */ var _pages_navigation_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/navigation/App.css */ "./pages/navigation/App.css");
/* harmony import */ var _pages_navigation_App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_navigation_App_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "H:\\PRACTICE\\sugarWebSite\\sugar\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function HomePage() {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "grid_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _pages_navigation_Home__WEBPACK_IMPORTED_MODULE_5__["Home"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/about",
    component: _pages_navigation_About__WEBPACK_IMPORTED_MODULE_3__["About"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/sources",
    component: _pages_navigation_Sources__WEBPACK_IMPORTED_MODULE_4__["Sources"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./pages/navigation/About.js":
/*!***********************************!*\
  !*** ./pages/navigation/About.js ***!
  \***********************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.css */ "./pages/navigation/pages.css");
/* harmony import */ var _pages_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _docs_thoughts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../docs/thoughts */ "./docs/thoughts.js");
var _jsxFileName = "H:\\PRACTICE\\sugarWebSite\\sugar\\pages\\navigation\\About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = () => {
  return __jsx("div", {
    className: "grid_container mt3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, _docs_thoughts__WEBPACK_IMPORTED_MODULE_2__["default"].map((el, ind) => __jsx("div", {
    className: "item_1_2 item_md_2 item_lg_4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `bluish_card ${ind % 2 === 0 ? 'bluish_card_odd' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 33
    }
  }, " ", el)))))));
};

/***/ }),

/***/ "./pages/navigation/App.css":
/*!**********************************!*\
  !*** ./pages/navigation/App.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/navigation/Home.js":
/*!**********************************!*\
  !*** ./pages/navigation/Home.js ***!
  \**********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./components/index.js");
var _jsxFileName = "H:\\PRACTICE\\sugarWebSite\\sugar\\pages\\navigation\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Home = () => {
  return __jsx("div", {
    className: "relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["PubMedComponent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["FewWords"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./pages/navigation/Sources.js":
/*!*************************************!*\
  !*** ./pages/navigation/Sources.js ***!
  \*************************************/
/*! exports provided: Sources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sources", function() { return Sources; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "H:\\PRACTICE\\sugarWebSite\\sugar\\pages\\navigation\\Sources.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Sources = () => {
  return __jsx("div", {
    className: "grid_container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "item"), __jsx("div", {
    className: "item_max",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "grid_3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "item"))), __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "item"), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "item")));
};

/***/ }),

/***/ "./pages/navigation/pages.css":
/*!************************************!*\
  !*** ./pages/navigation/pages.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZXdXb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHViTWVkQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2RvY3MvdGhvdWdodHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbmF2aWdhdGlvbi9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9uYXZpZ2F0aW9uL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbmF2aWdhdGlvbi9Tb3VyY2VzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIl0sIm5hbWVzIjpbIkZvb3RlciIsIkhlYWRlciIsIkZld1dvcmRzIiwiUHViTWVkQ29tcG9uZW50IiwiY291bnRPZk92ZXJsYXAiLCJzZXRDb3VudE9mT3ZlcmxhcCIsInVzZVN0YXRlIiwibGlzdE9mSWRPdmVybGFwcyIsInNldExpc3RPZklkT3ZlcmxhcHMiLCJxdWVyeSIsInNldFF1ZXJ5IiwiaW5wdXRTZWFyY2hWYWx1ZSIsInNldElucHV0U2VhcmNoVmFsdWUiLCJzZWxlY3RlZFZhbHVlSWQiLCJzZXRTZWxlY3RlZFZhbHVlSWQiLCJhcGlQdWIiLCJzcGxpdCIsImpvaW4iLCJmZXRjaE1vcmVGcm9tSWQiLCJzZWFyY2hBcnRpY2xlQnlJZCIsImlzRm91bmRBcnRpY2xlIiwic2V0SXNGb3VuZEFydGljbGUiLCJhcnRpY2xlVGV4dCIsInNldEFydGljbGVUZXh0IiwiYXJ0aWNsZUNpdGF0aW9uIiwic2V0QXJ0aWNsZUNpdGF0aW9uIiwidXNlRWZmZWN0IiwiZ2V0RGF0YUZyb21TZWFyY2giLCJyZXNwb25zZSIsImZldGNoIiwicmVzIiwianNvbiIsImVzZWFyY2hyZXN1bHQiLCJjb3VudCIsImlkbGlzdCIsImNoYW5nZUlucHV0U2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoSXRlbXNCeUlucHV0VmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaEl0ZW1zQnlTZWxlY3RlZElkIiwiZGF0YSIsInJlc3VsdEpzb24iLCJyZXN1bHQiLCJhcnRpY2xlIiwidGl0bGUiLCJwdWJkYXRlIiwic291cmNlIiwiZnVsbGpvdXJuYWxuYW1lIiwiYXV0aG9ycyIsIm1hcCIsImVsIiwibmFtZSIsIm1lc3NhZ2UiLCJmZXRjaE1vcmVGcm9tU2VsZWN0ZWRJZCIsInRleHQiLCJ0ZXh0Q2l0YXRpb24iLCJzZXRJZEZyb21TZWxlY3QiLCJpbmQiLCJUaG91Z2h0cyIsIkhvbWVQYWdlIiwiSG9tZSIsIkFib3V0IiwiU291cmNlcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIs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QUFBO0FBQUEsWUFGSixFQUdJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBSUk7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosRUFLSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1JO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLEVBT0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFRSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixFQVNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLEVBVUk7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkosRUFXSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSixFQVlJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLEVBY0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBSUk7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosRUFLSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1JO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLEVBT0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFRSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixFQVNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLEVBVUk7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkosRUFXSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSixFQVlJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLENBREosQ0FkSixFQStCSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosRUFJSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixDQS9CSixDQURKO0FBd0NILENBekNNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUCxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi9Gb290ZXIuY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXzMgaXRlbV9tZF84IGl0ZW1fbGdfMTIgbXQ2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2xvZ29cIj5TbyBzdWdhcnkgc2luPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qcm9qZWN0IHRoYXQgaGFzIG5vIG9uZSBlZGdlLCBhbmQgbGVhZHMgdG8gZXRlcm5pdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbnRhY3QgdXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPmVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5oYWxseWdpcmxAPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcnVsZXMgYXJlIHVuZGVyIGNvbnRyb2wsIGRvbid0IHdvcnJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LWNlbnRlclwiPk1hZGUgYnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF2aW5jaGlja1wiIGNsYXNzTmFtZT1cImZvb3Rlcl9tYWRlQnlcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cImRhdmluY2hpY2tcIj48aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2dpdGh1Yi1sb2dvLnN2Z1wiIGFsdD1cImdpdGh1YlwiLz48L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgaGF2ZSBhbnkgZW1vdGlvbmFsIGRpc3NvbmFuY2Ugb3IganVzdCBhIHF1ZXN0aW9uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29udGFjdCB1czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCAnLi9IZWFkZXIuY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgaXRlbV8zIGl0ZW1fbWRfOCBpdGVtX2xnXzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hTaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtX21heFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBjbGFzc05hbWU9XCJpdGVtIG5hdkxpbmtcIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9zb3VyY2VzJyBjbGFzc05hbWU9XCJpdGVtIG5hdkxpbmtcIj5Tb3VyY2VzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9nYWxsZXJ5JyBjbGFzc05hbWU9XCJpdGVtIG5hdkxpbmtcIj5WaWRlbyBHYWxsZXJ5PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9ib29rc2hlbGYnIGNsYXNzTmFtZT1cIml0ZW0gbmF2TGlua1wiPkJvb2tzaGVsZjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvYWJvdXQnIGNsYXNzTmFtZT1cIml0ZW0gbmF2TGlua1wiPkFib3V0IFByb2plY3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2hvd09uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzbVwiPldoaXRlIGNyeXN0YWxzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1kXCI+WW91J2QgYmV0dGVyIGRvbid0IGVhdCB0aGVtPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImxnXCI+U28gc3VnYXJ5IHNpbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1fMyBpdGVtX21kXzQgaXRlbV9sZ180XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93T25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUxvZ29fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlTG9nb1wiIHNyYz1cIi9pbWcvbWFpblBhZ2UvaW1nX2xvZ28uanBnXCIgYWx0PVwiaW1nX2xvZ29cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi9jb21wb25lbnRzLmNzcydcclxuXHJcbmV4cG9ydCBjb25zdCBGZXdXb3JkcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX2NvbnRhaW5lciBtdDZcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV8xXzQgaXRlbV9tZF80IGl0ZW1fbGdfNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhlaWdodDE4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV9hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1fM19pbWFnZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9tYWluUGFnZS9zdWdhclBhY2suanBnXCIgYWx0PVwic3VnYXJQYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kX19ncmV5IGl0ZW1fdGl0bGVfX210MVwiPkp1c3QgYm9yaW5nIGZhY3Q6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJhY2tncm91bmRfX2dyZXkgZnpfbWlkZGxlXCI+U3VnYXIgaW50YWtlIGZyb20gc3dlZXQgZm9vZC9iZXZlcmFnZXMgbWF5IGluY3JlYXNlcyB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuY2Ugb2YgaW5jaWRlbnQgbW9vZCBkaXNvcmRlcnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXzFfNCBpdGVtX21kXzQgaXRlbV9sZ180XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaGVpZ2h0MThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtX2F1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV8zX2ltYWdlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL21haW5QYWdlL25pZ2h0bWFyZS5qcGdcIiBhbHQ9XCJuaWdodG1hcmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJhY2tncm91bmRfX2dyZXkgaXRlbV90aXRsZV9fbXQxXCI+SnVzdCBib3JpbmcgZmFjdDo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmFja2dyb3VuZF9fZ3JleSBmel9taWRkbGVcIj5Db25zdW1pbmcgc3VnYXIgb3IgY2FyYm9oeWRyYXRlcyBwcmltYXJpbHkgcmFpc2VzIHlvdXIgYmxvb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdhciBsZXZlbHMsIHdoaWNoIGdpdmVzIHlvdSBhIGJ1cnN0IG9mIGVuZXJneSB0aGF0IG1heSBtYWtlIHlvdSBzdGF5IHVwIGxhdGVyIHRoYW4geW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd291bGQgbGlrZSwgZXNwZWNpYWxseSBpZiB5b3UgZWF0IHRoZW0gdG9vIGNsb3NlIHRvIHNsZWVwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV8xXzQgaXRlbV9tZF80IGl0ZW1fbGdfNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhlaWdodDE4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV9hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1fM19pbWFnZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9tYWluUGFnZS9oYWJpdHMuanBnXCIgYWx0PVwiaGFiaXRzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kX19ncmV5IGl0ZW1fdGl0bGVfX210MVwiPkp1c3QgYm9yaW5nIGZhY3Q6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJhY2tncm91bmRfX2dyZXkgZnpfbWlkZGxlXCI+UGVvcGxlIHdobyB0ZW5kIHRvIHF1aWNrbHkgZm9ybSB0aGVpciBoYWJpdHMgbWF5IGJlY29tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hseSBhZGRpY3RlZCB0byBzdWdhciBhbmQgc3dlZXRzIGFuZCBqdXN0IGFueSB1bmhlYWx0aHkgZm9vZC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTsiLCJleHBvcnQgKiBmcm9tICcuL2Zld1dvcmRzJ1xyXG5leHBvcnQgKiBmcm9tICcuL3B1Yk1lZENvbXBvbmVudCdcclxuZXhwb3J0ICogZnJvbSAnLi9Gb290ZXInXHJcbmV4cG9ydCAqIGZyb20gJy4vSGVhZGVyJ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFB1Yk1lZENvbXBvbmVudCgpIHtcclxuXHJcbiAgICBjb25zdCBbY291bnRPZk92ZXJsYXAsIHNldENvdW50T2ZPdmVybGFwXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xpc3RPZklkT3ZlcmxhcHMsIHNldExpc3RPZklkT3ZlcmxhcHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJ3N1Z2FyIGludGFrZScpO1xyXG4gICAgY29uc3QgW2lucHV0U2VhcmNoVmFsdWUsIHNldElucHV0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVmFsdWVJZCwgc2V0U2VsZWN0ZWRWYWx1ZUlkXSA9IHVzZVN0YXRlKGxpc3RPZklkT3ZlcmxhcHNbMF0pO1xyXG5cclxuICAgIGNvbnN0IGFwaVB1YiA9IGBodHRwOi8vZXV0aWxzLm5jYmkubmxtLm5paC5nb3YvZW50cmV6L2V1dGlscy9lc2VhcmNoLmZjZ2k/ZGI9cHVibWVkJnJldG1vZGU9anNvbiZyZXRtYXg9MTAwMCZ0ZXJtPSR7cXVlcnkuc3BsaXQoJyAnKS5qb2luKCcrJyl9JmZpZWxkPXRpdGxlYDtcclxuICAgIGNvbnN0IGZldGNoTW9yZUZyb21JZCA9IGBodHRwczovL2V1dGlscy5uY2JpLm5sbS5uaWguZ292L2VudHJlei9ldXRpbHMvZWZldGNoLmZjZ2k/ZGI9cHVibWVkJmlkPSR7c2VsZWN0ZWRWYWx1ZUlkfWA7XHJcbiAgICBjb25zdCBzZWFyY2hBcnRpY2xlQnlJZCA9IGBodHRwczovL2V1dGlscy5uY2JpLm5sbS5uaWguZ292L2VudHJlei9ldXRpbHMvZXN1bW1hcnkuZmNnaT9kYj1wdWJtZWQmaWQ9JHtzZWxlY3RlZFZhbHVlSWR9JnJldG1vZGU9anNvbmA7XHJcbiAgICBjb25zdCBbaXNGb3VuZEFydGljbGUsIHNldElzRm91bmRBcnRpY2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthcnRpY2xlVGV4dCwgc2V0QXJ0aWNsZVRleHRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFthcnRpY2xlQ2l0YXRpb24sIHNldEFydGljbGVDaXRhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhRnJvbVNlYXJjaCgpXHJcbiAgICB9LCBbcXVlcnldKTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhRnJvbVNlYXJjaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8ke2FwaVB1Yn1gKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5oaXRzKTtcclxuICAgICAgICBzZXRDb3VudE9mT3ZlcmxhcChyZXMuZXNlYXJjaHJlc3VsdC5jb3VudCk7XHJcbiAgICAgICAgc2V0TGlzdE9mSWRPdmVybGFwcyhyZXMuZXNlYXJjaHJlc3VsdC5pZGxpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VJbnB1dFNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5wdXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoSXRlbXNCeUlucHV0VmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRDb3VudE9mT3ZlcmxhcCgwKTtcclxuICAgICAgICBzZXRRdWVyeShpbnB1dFNlYXJjaFZhbHVlKTtcclxuICAgICAgICBzZXRJbnB1dFNlYXJjaFZhbHVlKCcnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoSXRlbXNCeVNlbGVjdGVkSWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8ke3NlYXJjaEFydGljbGVCeUlkfWApO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRKc29uID0gcmVzLnJlc3VsdFtzZWxlY3RlZFZhbHVlSWRdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdEpzb24pO1xyXG4gICAgICAgIGlmIChyZXN1bHRKc29uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFydGljbGUgPSA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1fMV81IGl0ZW1fbWRfMiBpdGVtX2xnXzMgZmxleC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYXJ0aWNsZV90aXRsZVwiPntyZXMucmVzdWx0W3NlbGVjdGVkVmFsdWVJZF0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGVfZGF0ZVwiPntyZXMucmVzdWx0W3NlbGVjdGVkVmFsdWVJZF0ucHViZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlX3NvdXJjZVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXNjb3JlXCI+U291cmNlOjwvc3Bhbj4ge3Jlcy5yZXN1bHRbc2VsZWN0ZWRWYWx1ZUlkXS5zb3VyY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9qb3VybmFsXCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlc2NvcmVcIj5Gcm9tIGpvdXJuYWw6PC9zcGFuPiB7cmVzLnJlc3VsdFtzZWxlY3RlZFZhbHVlSWRdLmZ1bGxqb3VybmFsbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlX2F1dGhvcnNcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVzY29yZVwiPkF1dGhvcnM6PC9zcGFuPiB7cmVzLnJlc3VsdFtzZWxlY3RlZFZhbHVlSWRdLmF1dGhvcnMubWFwKGVsID0+IGVsLm5hbWUpLmpvaW4oJywgJyl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICAgICAgc2V0QXJ0aWNsZVRleHQoYXJ0aWNsZSk7XHJcbiAgICAgICAgICAgIHNldElzRm91bmRBcnRpY2xlKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IDxwIGNsYXNzTmFtZT1cIm5vdEZvdW5kXCI+Tm90IGZvdW5kIGFueSBpbmZvcm1hdGlvbiAuLiBvciBpdCdzIHByaXZhdGUgYXJ0aWNsZTwvcD5cclxuICAgICAgICAgICAgc2V0QXJ0aWNsZVRleHQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNldElzRm91bmRBcnRpY2xlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmV0Y2hNb3JlRnJvbVNlbGVjdGVkSWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8ke2ZldGNoTW9yZUZyb21JZH1gKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLnRleHQoKTtcclxuICAgICAgICBsZXQgdGV4dENpdGF0aW9uID0gJyc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSByZXMuc3BsaXQoJ2Fic3RyYWN0JylbMV07XHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q2l0YXRpb24gPSB0ZXh0LnNwbGl0KCdwbWlkJylbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q2l0YXRpb24gPSB0ZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0Q2l0YXRpb24gPSBcIk5vdCBmb3VuZCBhbnkgY2l0YXRpb25cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QXJ0aWNsZUNpdGF0aW9uKHRleHRDaXRhdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldElkRnJvbVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYWx1ZUlkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZWFyY2hJdGVtc0J5U2VsZWN0ZWRJZCgpO1xyXG4gICAgICAgIGZldGNoTW9yZUZyb21TZWxlY3RlZElkKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX2NvbnRhaW5lciB6SW5kZXhcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmFkaWVudF9hYnMgZ3JhZGllbnRfYWJzX190b3BcIiBzcmM9eycvaW1nL2dyYWRpZW50cy9ncmFkaWVudF9ibHVlLnN2Zyd9IGFsdD1cImdyYWRpZW50XCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV8xXzQgaXRlbV9tZF80IGl0ZW1fbGdfNCBtdDNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+RGF0YSBmcm9tIDxhIGhyZWY9XCJodHRwczovL2h0dHA6Ly93d3cubmNiaS5ubG0ubmloLmdvdlwiIHRhcmdldD1cIl9ibGFua1wiPlB1Yk1lZCBDZW50cmFsPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94U2hhZG93IG0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzTmFtZT1cInNlYXJjaEZvcm1cIiBvblN1Ym1pdD17c2VhcmNoSXRlbXNCeUlucHV0VmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2VhcmNoSW5wdXRcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUlucHV0U2VhcmNoKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFNlYXJjaFZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdElucHV0U2VhcmNoXCIgdHlwZT1cInN1Ym1pdFwiPkZpbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnpfbWlkZGxlXCI+VGhlcmUgYXJlIG5vdyA8ZW0gY2xhc3NOYW1lPVwidW5kZXNjb3JlXCI+e2NvdW50T2ZPdmVybGFwfTwvZW0+IG92ZXJsYXBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvcmRpbmcgdG8gc2VhcmNoIGJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaHJhc2UgPGI+J3txdWVyeX0nPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnpfbWlkZGxlIHNlYXJjaFNlbGVjdF9sYWJlbFwiPkxpc3Qgb2YgSWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNlbGVjdFRoZUlkXCIgaWQ9XCJcIiBjbGFzc05hbWU9XCJzZWFyY2hTZWxlY3RcIiBvbkNoYW5nZT17KGUpID0+IHNldElkRnJvbVNlbGVjdChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPi1TZWxlY3QgaWQtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mSWRPdmVybGFwcy5tYXAoKGVsLCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2VsfSB2YWx1ZT17ZWx9PntpbmR9KToge2VsfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94U2hhZG93IGl0ZW1fZmx1aWQgYmdfbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXzFfNSBpdGVtX21kXzIgaXRlbV9sZ18zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgc2VhcmNoSXRlbVRpdGxlICR7aXNGb3VuZEFydGljbGUgPyAnY29sb3JlZF9ncmVlbicgOiAnY29sb3JlZF9yZWQnfWB9PlBNRURfSUQ6IHtzZWxlY3RlZFZhbHVlSWR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlQ2l0YXRpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGVDaXRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlc2NvcmVcIj5BYnN0cmFjdDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlQ2l0YXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyYWRpZW50X2FicyBncmFkaWVudF9hYnNfX2JvdHRvbVwiIHNyYz17Jy9pbWcvZ3JhZGllbnRzL2dyYWRpZW50X2JsdWUuc3ZnJ30gYWx0PVwiZ3JhZGllbnRcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJjb25zdCBUaG91Z2h0cyA9IFtcclxuICAgICdJIGRlZmluaXRlbHkgdGhpbmsgdGhhdCBwZW9wbGUgdGhlc2UgZGF5cyBhcmUgZWF0aW5nIGEgbG90IG1vcmUgc3VnYXJzIGFuZCBzd2VldHMgdGhhbiB0aGV5IHdlcmUgaW5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzdCBnZW5lcmF0aW9ucywgc2ltcGx5IGJlY2F1c2Ugb2YgdGhlIGF2YWlsYWJpbGl0eSBvZiBzdWdhci4gSW4gZWFjaCBsb2NhbCBncm9jZXJ5IHN0b3JlIHRvdSBjb3VsZCBmaW5kXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbW9zdCB0d28gb3IgbW9yZSBhaXNsZXMgZGVkaWNhdGVkIHRvIGp1c3QgdGhlc2UgdHlwZXMgb2YgZm9vZCBwcm9kdWN0cy4nLFxyXG4gICAgJ0luIHRoZSBwYXN0IHBlb3BsZSBhdGUgc3VjaCB0eXBlcyBvZiBmb29kcyBtYXliZSBvbmNlIGEgd2Vlay4gTm93YWRheXMgLSBzZXZlcmFsIHRpbWVzIGEgZGF5LiBEb1xcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91IGZpbmQgeW91cnNlbGYgZWF0aW5nIGEgY2hvY29sYXRlIGJhciB0aHJlZSB0aW1lcyBhIHdlZWs/JyxcclxuICAgICdNZWRpY2FsIHJlcG9ydHMgYXJlIG5vdyB3ZWxsLWVzdGFibGlzaGVkIHRoYXQgZWF0aW5nIGEgbG90IG9mIHJlZmluZWQgc3VnYXJzIGxlYWRzIHRvIGhlYWx0aCBwcm9ibGVtcyxcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2ggYXMgdHlwZSAxIG9yIHR5cGUgMiBkaWFiZXRlcywgY2FyZGlvdmFzY3VsYXIgZGlzZWFzZSBhbmQgbXVjaCBtb3JlLiAnLFxyXG4gICAgJ0hhdmUgeW91IGJlZW4gcGF5aW5nIGFuIGF0dGVudGlvbiB0byB3aGF0IHlvdVxcJ3JlIGVhdGluZz8nLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhvdWdodHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxyXG4gICAgU3dpdGNoLFxyXG4gICAgUm91dGUsXHJcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtIZWFkZXIsIEZvb3Rlcn0gZnJvbSAnLi4vY29tcG9uZW50cydcclxuaW1wb3J0IHtBYm91dH0gZnJvbSAnLi4vcGFnZXMvbmF2aWdhdGlvbi9BYm91dCdcclxuaW1wb3J0IHtTb3VyY2VzfSBmcm9tICcuLi9wYWdlcy9uYXZpZ2F0aW9uL1NvdXJjZXMnXHJcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi4vcGFnZXMvbmF2aWdhdGlvbi9Ib21lJ1xyXG5pbXBvcnQgJy4uL3BhZ2VzL25hdmlnYXRpb24vQXBwLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IGNvbXBvbmVudD17SG9tZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hYm91dCcgY29tcG9uZW50PXtBYm91dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9zb3VyY2VzJyBjb21wb25lbnQ9e1NvdXJjZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Um91dGUgcGF0aD0nL2dhbGxlcnknIGV4YWN0IGNvbXBvbmVudD17R2FsbGVyeX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvZ2FsbGVyeS86aWQnIGNvbXBvbmVudD17aXRlbURldGFpbH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi9wYWdlcy5jc3MnXHJcbmltcG9ydCBUaG91Z2h0cyBmcm9tICcuLi8uLi9kb2NzL3Rob3VnaHRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfY29udGFpbmVyIG10M1wiPlxyXG4gICAgICAgICAgICB7VGhvdWdodHMubWFwKChlbCwgaW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1fMV8yIGl0ZW1fbWRfMiBpdGVtX2xnXzRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJsdWlzaF9jYXJkICR7aW5kICUgMiA9PT0gMCA/ICdibHVpc2hfY2FyZF9vZGQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtlbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGZXdXb3JkcywgUHViTWVkQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxQdWJNZWRDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgPEZld1dvcmRzLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgU291cmNlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5pdGVtPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPml0ZW08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5pdGVtPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPml0ZW08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5pdGVtPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPml0ZW08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5pdGVtPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPml0ZW08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtX21heFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXzNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5pdGVtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPml0ZW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5pdGVtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPml0ZW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5pdGVtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPml0ZW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5pdGVtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPml0ZW08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=