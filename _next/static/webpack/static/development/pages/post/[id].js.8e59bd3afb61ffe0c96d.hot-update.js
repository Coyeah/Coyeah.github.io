webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Link */ "./components/Link/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./components/Layout/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/coyeahchen/Desktop/workspace/github/blog/components/Layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];






var Footer = function Footer(props) {
  return __jsx("div", {
    className: "layout-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\xA9 2018 - 2019  Coyeah Chen");
};

var Layout = function Layout(_ref) {
  var _classNames;

  var title = _ref.title,
      _ref$isLight = _ref.isLight,
      isLight = _ref$isLight === void 0 ? false : _ref$isLight,
      children = _ref.children,
      width = _ref.width,
      footer = _ref.footer;
  var cx = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_less__WEBPACK_IMPORTED_MODULE_5___default.a.layout, (_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_less__WEBPACK_IMPORTED_MODULE_5___default.a['layout-dark'], isLight), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_less__WEBPACK_IMPORTED_MODULE_5___default.a['layout-light'], !isLight), _classNames));
  return __jsx("div", {
    className: cx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title ? "".concat(title, " | coyeah's blog") : 'coyeah\'s blog')), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    text: "coyeah",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/blog",
    text: "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), ", ", __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/about",
    text: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.main,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children, footer && __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=[id].js.8e59bd3afb61ffe0c96d.hot-update.js.map