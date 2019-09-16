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
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ "./components/Link/index.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis */ "./apis/index.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");
/* harmony import */ var _blog_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog.less */ "./pages/blog.less");
/* harmony import */ var _blog_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blog_less__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/coyeahchen/Desktop/workspace/github/blog/pages/blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var sessionKey = 'BLOG_TOTAL_SESSION_KEY';

var Blog = function Blog(props) {
  var _getBlogTotal = Object(_apis__WEBPACK_IMPORTED_MODULE_5__["getBlogTotal"])(function (data) {
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
    getData().then(function (data) {
      console.log(data);
      Object(_utils_helper__WEBPACK_IMPORTED_MODULE_6__["session"])(sessionKey, data);
    });
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u535A\u6587",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_Loadable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: code !== 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, data && data.map(function (_ref2) {
    var title = _ref2.title,
        number = _ref2.number;
    return __jsx("li", {
      key: number,
      className: _blog_less__WEBPACK_IMPORTED_MODULE_7___default.a['blog-item'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/post/[id]",
      as: "/post/".concat(number),
      text: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
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
//# sourceMappingURL=blog.js.df4218cd91729b5585de.hot-update.js.map