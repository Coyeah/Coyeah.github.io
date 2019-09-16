webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loadable */ "./components/Loadable/index.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apis */ "./apis/index.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/config */ "./utils/config.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ "./pages/post/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/coyeahchen/Desktop/workspace/github/blog/pages/post/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Post = function Post(props) {
  var id = props.url.query.id;

  var _getBlogItem = Object(_apis__WEBPACK_IMPORTED_MODULE_5__["getBlogItem"])(function (_ref) {
    var title = _ref.title,
        body = _ref.body,
        labels = _ref.labels;
    return {
      title: title,
      body: body,
      labels: labels
    };
  }),
      _getBlogItem2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_getBlogItem, 2),
      _getBlogItem2$ = _getBlogItem2[0],
      data = _getBlogItem2$.data,
      code = _getBlogItem2$.code,
      getData = _getBlogItem2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (id && !data) {
      getData(id);
    }
  }, [id]);

  var _ref2 = data || {},
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? '' : _ref2$title,
      _ref2$labels = _ref2.labels,
      labels = _ref2$labels === void 0 ? [] : _ref2$labels,
      body = _ref2.body;

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_Loadable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: code !== 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, title), labels.map(function (_ref3) {
    var id = _ref3.id,
        name = _ref3.name;
    return __jsx("i", {
      key: id,
      className: _index_less__WEBPACK_IMPORTED_MODULE_7___default.a.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "# ", name);
  }), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    source: body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u539F\u6587\u4F5C\u8005\uFF1A", __jsx("a", {
    href: _utils_config__WEBPACK_IMPORTED_MODULE_6__["website"].github,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _utils_config__WEBPACK_IMPORTED_MODULE_6__["website"].author)), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u8BB8\u53EF\u534F\u8BAE\uFF1A", __jsx("a", {
    href: _utils_config__WEBPACK_IMPORTED_MODULE_6__["website"].licenses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528 4.0 \u56FD\u9645\u8BB8\u53EF\u534F\u8BAE"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.75e2aa95ce0a13bbcb47.hot-update.js.map