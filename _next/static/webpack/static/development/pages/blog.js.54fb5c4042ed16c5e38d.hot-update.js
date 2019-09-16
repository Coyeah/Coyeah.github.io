webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./apis/index.js":
/*!***********************!*\
  !*** ./apis/index.js ***!
  \***********************/
/*! exports provided: getBlogList, getBlogTotal, getBlogItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogList", function() { return getBlogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogTotal", function() { return getBlogTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogItem", function() { return getBlogItem; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./apis/config.js");






var useWrappedFetch = function useWrappedFetch(request) {
  return function (responseFilter) {
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        data = _useState[0],
        setData = _useState[1];

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        code = _useState2[0],
        setCode = _useState2[1]; // 0 - no request; 1 - loading; 2 - done; -1 - error;


    var getData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload) {
        var _data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setCode(1);

                try {
                  _data = request(payload);
                  console.log(_data, 'data');

                  if (typeof responseFilter === 'function') {
                    _data = responseFilter(_data);
                  }

                  setData(_data);
                  setCode(2);
                } catch (ex) {
                  setCode(-1);
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getData(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return [{
      data: data,
      code: code,
      loading: code === 1
    }, getData];
  };
};

var getBlogList = useWrappedFetch(
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var pageNumber,
      pageSize,
      res,
      data,
      _args2 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          pageNumber = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
          pageSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 10;
          _context2.next = 4;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.github.com/repos/Coyeah/blog/issues?".concat(_config__WEBPACK_IMPORTED_MODULE_4__["github_api_prefix"], "&page=").concat(pageNumber, "&per_page=").concat(pageSize));

        case 4:
          res = _context2.sent;
          _context2.next = 7;
          return res.json();

        case 7:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
var getBlogTotal = useWrappedFetch(
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.github.com/search/issues?q=user:Coyeah+state:open+repo:blog?".concat(_config__WEBPACK_IMPORTED_MODULE_4__["github_api_prefix"], "&page=1&per_page=100"));

        case 2:
          res = _context3.sent;
          _context3.next = 5;
          return res.json();

        case 5:
          data = _context3.sent;
          return _context3.abrupt("return", data);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
var getBlogItem = function getBlogItem(payload) {};

/***/ })

})
//# sourceMappingURL=blog.js.54fb5c4042ed16c5e38d.hot-update.js.map