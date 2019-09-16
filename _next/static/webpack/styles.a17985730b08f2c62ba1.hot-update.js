webpackHotUpdate("styles",{

/***/ "./components/Layout/index.less":
/*!**************************************!*\
  !*** ./components/Layout/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"layout":"layout___3IWBe","nav":"nav___1AMQz","main":"main___37e4t","footer":"footer___35EnJ","layout-light":"layout-light___1XHhK","layout-dark":"layout-dark___1lLsT"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1568610310963");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.a17985730b08f2c62ba1.hot-update.js.map