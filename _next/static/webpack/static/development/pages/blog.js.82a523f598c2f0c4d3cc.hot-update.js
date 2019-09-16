webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loadable */ "./components/Loadable/index.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apis */ "./apis/index.js");

var _jsxFileName = "/Users/coyeahchen/Desktop/workspace/github/blog/pages/blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Blog = function Blog(props) {
  var _getBlogTotal = Object(_apis__WEBPACK_IMPORTED_MODULE_4__["getBlogTotal"])(function (data) {
    return data.items.map(function (_ref) {
      var title = _ref.title,
          number = _ref.number;
      return {
        title: title,
        number: number
      };
    });
  }),
      _getBlogTotal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_getBlogTotal, 2),
      _getBlogTotal2$ = _getBlogTotal2[0],
      data = _getBlogTotal2$.data,
      code = _getBlogTotal2$.code,
      getData = _getBlogTotal2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getData();
  }, []);
  console.log(data);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isLight: true,
    title: "\u535A\u6587",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Loadable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: code !== 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, data && data.map(function (item) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, item.title);
  }))));
}; // Blog.getInitialProps = async function () {
//   const data = await getBlogTotal();
//   return {
//     list: data
//   };
// }


/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.82a523f598c2f0c4d3cc.hot-update.js.map