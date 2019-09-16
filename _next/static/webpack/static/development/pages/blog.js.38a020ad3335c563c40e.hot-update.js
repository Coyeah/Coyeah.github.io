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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./apis/config.js");







var useWrappedFetch = function useWrappedFetch(request) {
  return function (responseFilter) {
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
        data = _useState[0],
        setData = _useState[1];

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
        code = _useState2[0],
        setCode = _useState2[1]; // 0 - no request; 1 - loading; 2 - done; -1 - error;


    var getData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload) {
        var _data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setCode(1);
                _context.prev = 1;
                _context.next = 4;
                return request(payload);

              case 4:
                _data = _context.sent;

                if (typeof responseFilter === 'function') {
                  _data = responseFilter(_data);
                }

                setData(_data);
                setCode(2);
                return _context.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(_data));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                setCode(-1);
                return _context.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(_context.t0));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }));

      return function getData(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var setOwnData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (data) {
      setData(data);
      setCode(2);
    }, []);
    return [{
      data: data,
      code: code,
      loading: code === 1
    }, getData, setData];
  };
};

var getBlogList = useWrappedFetch(
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.github.com/repos/Coyeah/blog/issues?".concat(_config__WEBPACK_IMPORTED_MODULE_5__["github_api_prefix"], "&page=").concat(pageNumber, "&per_page=").concat(pageSize));

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
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.github.com/search/issues?q=user:Coyeah+state:open+repo:blog?".concat(_config__WEBPACK_IMPORTED_MODULE_5__["github_api_prefix"], "&page=1&per_page=100"));

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
var getBlogItem = useWrappedFetch(
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(number) {
    var res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.github.com/repos/Coyeah/blog/issues/".concat(number, "?").concat(_config__WEBPACK_IMPORTED_MODULE_5__["github_api_prefix"]));

          case 2:
            res = _context4.sent;
            _context4.next = 5;
            return res.json();

          case 5:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}());

/***/ })

})
//# sourceMappingURL=blog.js.38a020ad3335c563c40e.hot-update.js.map