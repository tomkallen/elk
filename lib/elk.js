(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("elk", [], factory);
	else if(typeof exports === 'object')
		exports["elk"] = factory();
	else
		root["elk"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.h = h;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function h() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    return new DOM(el);
}

var DOM = function () {
    function DOM(el) {
        _classCallCheck(this, DOM);

        this.el = Array.from(document.querySelectorAll(el));
    }

    _createClass(DOM, [{
        key: "html",
        value: function html(val, el) {
            if (val) {
                this._getNodeList(el).forEach(function (e) {
                    return e.innerHTML = val;
                });
                return this;
            } else {
                return this._getNodeList(el).map(function (e) {
                    return e.innerHTML;
                });
            }
        }
    }, {
        key: "text",
        value: function text(val) {
            if (val) {
                this.el.forEach(function (e) {
                    return e.textContent = val;
                });
                return this;
            } else {
                return this.el.map(function (e) {
                    return e.textContent;
                });
            }
        }
    }, {
        key: "on",
        value: function on(event, cb) {
            var _this = this;

            return this.el.forEach(function (el) {
                return el.addEventListener(event, function () {
                    return cb(_this);
                });
            }), this;
        }
    }, {
        key: "hasClass",
        value: function hasClass(cl, el) {
            if (cl instanceof DOM) {
                // parameters shift in case when only an element is passed
                el = cl;
                cl = null;
            }
            return cl ? Boolean(this._getNodeList(el).filter(function (e) {
                return e.classList.contains(cl);
            }).length) : Boolean(this._getNodeList(el).filter(function (e) {
                return e.className;
            }).length);
        }
    }, {
        key: "setClass",
        value: function setClass(cl, el) {
            cl && this._getNodeList(el).forEach(function (e) {
                return e.className = cl;
            });
            return this;
        }
    }, {
        key: "toggleClass",
        value: function toggleClass(cl, el) {
            return this._getNodeList(el).forEach(function (e) {
                return e.classList.toggle(cl);
            }), this;
        }
    }, {
        key: "getClass",
        value: function getClass(el) {
            var list = this._getNodeList(el);
            return list.map(function (e) {
                return e.className;
            });
        }
    }, {
        key: "wait",
        value: function wait(time, cb) {
            var _this2 = this;

            // firing callback with this instead of event to support 'inner chaining'
            // i.e.: h("mydiv").wait(1000, el => el.kill("otherdiv")).hide();
            return setTimeout(function () {
                return cb(_this2);
            }, time), this;
        }
    }, {
        key: "hide",
        value: function hide(el) {
            this._getNodeList(el).forEach(function (e) {
                if (!e.getAttribute("elk-oldVis")) {
                    var style = (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).display;
                    e.setAttribute("elk-oldVis", style);
                    e.style.display = 'none';
                }
            });
        }
    }, {
        key: "show",
        value: function show(el) {
            this._getNodeList(el).forEach(function (e) {
                e.style.display = e.getAttribute("elk-oldVisibilty") || "block";
            });

            return this;
        }
    }, {
        key: "toggle",
        value: function toggle(el) {
            var list = this._getNodeList(el);
            list.forEach(function (e) {
                var style = (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).display;
                if (style == 'none') {
                    e.style.display = e.getAttribute("elk-oldVisibilty") || "block";
                } else {
                    if (!e.getAttribute("elk-oldVisibilty")) {
                        var _style = (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).display;
                        e.setAttribute("elk-oldVisibilty", _style);
                        e.style.display = 'none';
                    }
                };
            });
            return this;
        }
    }, {
        key: "addClass",
        value: function addClass(cl, el) {
            return this._getNodeList(el).forEach(function (el) {
                return el.classList.add(cl);
            }), this;
        }
    }, {
        key: "removeClass",
        value: function removeClass(cl, el) {

            if (cl) {
                this._getNodeList(el).forEach(function (el) {
                    return el.classList.remove(cl);
                });
            } else {
                this._getNodeList(el).forEach(function (el) {
                    return el.className = "";
                });
            }
            return this;
        }
    }, {
        key: "kill",
        value: function kill(el) {
            this._getNodeList(el).forEach(function (el) {
                return el.remove();
            });
            return this;
        }
    }, {
        key: "_isNode",
        value: function _isNode(el) {
            return el && (el.nodeType === 1 || el.nodeType == 11);
        }
    }, {
        key: "_getNodeList",
        value: function _getNodeList(args) {
            // if elk instance is passed as an argument then return its elements
            if (args instanceof DOM) {
                return args.el;
            }
            // otherwise query select nodes
            if (typeof args === "string" && args.length) {
                return Array.from(document.querySelectorAll(args));
            }
            // or return self elements if no argument is provided
            console.log(this.el);
            return this.el;
        }
    }]);

    return DOM;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=elk.js.map