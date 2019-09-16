webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/Loadable/index.js":
/*!**************************************!*\
  !*** ./components/Loadable/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./components/Loadable/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/coyeahchen/Desktop/workspace/github/blog/components/Loadable/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];



var text = ['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'];

var Loadable = function Loadable(_ref) {
  var loading = _ref.loading,
      children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      key = _React$useState2[0],
      setKey = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var timer = setTimeout(function () {
      if (key > text.length + 2) {
        setKey(0);
      } else {
        setKey(key + 1);
      }
    }, 120);
    return function () {
      return clearTimeout(timer);
    };
  }, [key]);

  if (typeof loading === 'undefined' || loading === true) {
    return __jsx("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.layout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, text.map(function (value, index) {
      return __jsx("span", {
        key: index,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.focus, index === key)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, value);
    }));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Loadable);

/***/ })

})
//# sourceMappingURL=blog.js.b78ba83f453a1473cfb0.hot-update.js.map