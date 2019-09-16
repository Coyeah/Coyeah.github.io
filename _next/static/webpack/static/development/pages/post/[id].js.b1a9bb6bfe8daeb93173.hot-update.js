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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis */ "./apis/index.js");

var _jsxFileName = "/Users/coyeahchen/Desktop/workspace/github/blog/pages/post/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Post = function Post(props) {
  var id = props.url.query.id;

  var _getBlogItem = Object(_apis__WEBPACK_IMPORTED_MODULE_3__["getBlogItem"])(function (_ref) {
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
  console.log(data);

  var _ref2 = data || {},
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? '' : _ref2$title,
      labels = _ref2.labels,
      body = _ref2.body;

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Hello world!");
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.b1a9bb6bfe8daeb93173.hot-update.js.map