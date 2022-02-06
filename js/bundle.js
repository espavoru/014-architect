/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/burger/burger.js":
/*!*************************************!*\
  !*** ./src/blocks/burger/burger.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ready = __webpack_require__(/*! ../../js/utils/documentReady.js */ \"./src/js/utils/documentReady.js\");\n\nready(function () {\n  var burgers = document.querySelectorAll('.burger');\n\n  for (var i = 0; i < burgers.length; i++) {\n    var burger = burgers[i];\n    burger.addEventListener('click', showBurgerTarget);\n  }\n\n  function showBurgerTarget() {\n    var targetId = this.getAttribute('data-target-id');\n    var targetClassToggle = this.getAttribute('data-target-class-toggle');\n\n    if (targetId && targetClassToggle) {\n      this.classList.toggle('burger--close');\n      document.getElementById(targetId).classList.toggle(targetClassToggle);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/blocks/burger/burger.js?");

/***/ }),

/***/ "./src/blocks/main-nav/main-nav.js":
/*!*****************************************!*\
  !*** ./src/blocks/main-nav/main-nav.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ready = __webpack_require__(/*! ../../js/utils/documentReady.js */ \"./src/js/utils/documentReady.js\");\n\nready(function () {\n  // Добавление/удаление модификаторов при фокусировке на ссылочном элементе\n  var linkClassName = 'main-nav__link';\n  var linkClassNameShowChild = 'main-nav__item--show-child';\n  var findLinkClassName = new RegExp(linkClassName); // Слежение за всплывшим событием focus (нужно добавить класс, показывающий потомков)\n\n  document.addEventListener('focus', function (event) {\n    // Если событие всплыло от одной из ссылок гл. меню\n    if (findLinkClassName.test(event.target.className)) {\n      // Добавим классы, показывающие списки вложенных уровней, на всех родителей\n      var parents = getParents(event.target, '.main-nav__item');\n\n      for (var i = 0; i < parents.length; i++) {\n        parents[i].classList.add(linkClassNameShowChild);\n      }\n    }\n  }, true); // Слежение за всплывшим событием blur (нужно убрать класс, показывающий потомков)\n\n  document.addEventListener('blur', function (event) {\n    // Если событие всплыло от одной из ссылок гл. меню\n    if (findLinkClassName.test(event.target.className)) {\n      // Уберем все классы, показывающие списки 2+ уровней\n      var parents = document.querySelectorAll('.' + linkClassNameShowChild);\n\n      for (var i = 0; i < parents.length; i++) {\n        parents[i].classList.remove(linkClassNameShowChild);\n      }\n    }\n  }, true); // eslint-disable\n\n  /*! getParents.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getParents */\n\n  /**\n   * Get all of an element's parent elements up the DOM tree\n   * @param  {Node}   elem     The element\n   * @param  {String} selector Selector to match against [optional]\n   * @return {Array}           The parent elements\n   */\n\n  var getParents = function getParents(elem, selector) {\n    // Element.matches() polyfill\n    if (!Element.prototype.matches) {\n      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {\n        var matches = (this.document || this.ownerDocument).querySelectorAll(s),\n            i = matches.length;\n\n        while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line\n\n\n        return i > -1;\n      };\n    } // Setup parents array\n\n\n    var parents = []; // Get matching parent elements\n\n    for (; elem && elem !== document; elem = elem.parentNode) {\n      // Add matching parents to array\n      if (selector) {\n        if (elem.matches(selector)) {\n          parents.push(elem);\n        }\n      } else {\n        parents.push(elem);\n      }\n    }\n\n    return parents;\n  };\n});\n\n//# sourceURL=webpack:///./src/blocks/main-nav/main-nav.js?");

/***/ }),

/***/ "./src/blocks/modernizr/modernizr.js":
/*!*******************************************!*\
  !*** ./src/blocks/modernizr/modernizr.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*! modernizr 3.6.0 (Custom Build) | MIT *\n * https://modernizr.com/download/?webpalpha&q=webp !*/\n!function (n, e, o) {\n  function t(n, e) {\n    return _typeof(n) === e;\n  }\n\n  function s() {\n    var n, e, o, s, a, i, l;\n\n    for (var f in r) {\n      if (r.hasOwnProperty(f)) {\n        if (n = [], e = r[f], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (o = 0; o < e.options.aliases.length; o++) {\n          n.push(e.options.aliases[o].toLowerCase());\n        }\n\n        for (s = t(e.fn, \"function\") ? e.fn() : e.fn, a = 0; a < n.length; a++) {\n          i = n[a], l = i.split(\".\"), 1 === l.length ? Modernizr[l[0]] = s : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = s), c.push((s ? \"\" : \"no-\") + l.join(\"-\"));\n        }\n      }\n    }\n  }\n\n  function a(n) {\n    var e = u.className,\n        o = Modernizr._config.classPrefix || \"\";\n\n    if (A && (e = e.baseVal), Modernizr._config.enableJSClass) {\n      var t = new RegExp(\"(^|\\\\s)\" + o + \"no-js(\\\\s|$)\");\n      e = e.replace(t, \"$1\" + o + \"js$2\");\n    }\n\n    Modernizr._config.enableClasses && (e += \" \" + o + n.join(\" \" + o), A ? u.className.baseVal = e : u.className = e);\n  }\n\n  function i(n, e) {\n    if (\"object\" == _typeof(n)) for (var o in n) {\n      f(n, o) && i(o, n[o]);\n    } else {\n      n = n.toLowerCase();\n      var t = n.split(\".\"),\n          s = Modernizr[t[0]];\n      if (2 == t.length && (s = s[t[1]]), \"undefined\" != typeof s) return Modernizr;\n      e = \"function\" == typeof e ? e() : e, 1 == t.length ? Modernizr[t[0]] = e : (!Modernizr[t[0]] || Modernizr[t[0]] instanceof Boolean || (Modernizr[t[0]] = new Boolean(Modernizr[t[0]])), Modernizr[t[0]][t[1]] = e), a([(e && 0 != e ? \"\" : \"no-\") + t.join(\"-\")]), Modernizr._trigger(n, e);\n    }\n    return Modernizr;\n  }\n\n  var r = [],\n      l = {\n    _version: \"3.6.0\",\n    _config: {\n      classPrefix: \"\",\n      enableClasses: !0,\n      enableJSClass: !0,\n      usePrefixes: !0\n    },\n    _q: [],\n    on: function on(n, e) {\n      var o = this;\n      setTimeout(function () {\n        e(o[n]);\n      }, 0);\n    },\n    addTest: function addTest(n, e, o) {\n      r.push({\n        name: n,\n        fn: e,\n        options: o\n      });\n    },\n    addAsyncTest: function addAsyncTest(n) {\n      r.push({\n        name: null,\n        fn: n\n      });\n    }\n  },\n      Modernizr = function Modernizr() {};\n\n  Modernizr.prototype = l, Modernizr = new Modernizr();\n  var f,\n      c = [];\n  !function () {\n    var n = {}.hasOwnProperty;\n    f = t(n, \"undefined\") || t(n.call, \"undefined\") ? function (n, e) {\n      return e in n && t(n.constructor.prototype[e], \"undefined\");\n    } : function (e, o) {\n      return n.call(e, o);\n    };\n  }();\n  var u = e.documentElement,\n      A = \"svg\" === u.nodeName.toLowerCase();\n  l._l = {}, l.on = function (n, e) {\n    this._l[n] || (this._l[n] = []), this._l[n].push(e), Modernizr.hasOwnProperty(n) && setTimeout(function () {\n      Modernizr._trigger(n, Modernizr[n]);\n    }, 0);\n  }, l._trigger = function (n, e) {\n    if (this._l[n]) {\n      var o = this._l[n];\n      setTimeout(function () {\n        var n, t;\n\n        for (n = 0; n < o.length; n++) {\n          (t = o[n])(e);\n        }\n      }, 0), delete this._l[n];\n    }\n  }, Modernizr._q.push(function () {\n    l.addTest = i;\n  }), Modernizr.addAsyncTest(function () {\n    var n = new Image();\n    n.onerror = function () {\n      i(\"webpalpha\", !1, {\n        aliases: [\"webp-alpha\"]\n      });\n    }, n.onload = function () {\n      i(\"webpalpha\", 1 == n.width, {\n        aliases: [\"webp-alpha\"]\n      });\n    }, n.src = \"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\";\n  }), s(), delete l.addTest, delete l.addAsyncTest;\n\n  for (var p = 0; p < Modernizr._q.length; p++) {\n    Modernizr._q[p]();\n  }\n\n  n.Modernizr = Modernizr;\n}(window, document);\n\n//# sourceURL=webpack:///./src/blocks/modernizr/modernizr.js?");

/***/ }),

/***/ "./src/blocks/sidebar/sidebar.js":
/*!***************************************!*\
  !*** ./src/blocks/sidebar/sidebar.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.querySelector('.page-header__menu').addEventListener('click', function () {\n  document.querySelector('.page__content').classList.toggle('change');\n});\n\n//# sourceURL=webpack:///./src/blocks/sidebar/sidebar.js?");

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Любые изменения этого файла будут потеряны при следующей компиляции.\n * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.\n */\n__webpack_require__(/*! ./utils/tilt.jquery.js */ \"./src/js/utils/tilt.jquery.js\");\n\n__webpack_require__(/*! ../blocks/modernizr/modernizr.js */ \"./src/blocks/modernizr/modernizr.js\");\n\n__webpack_require__(/*! ../blocks/burger/burger.js */ \"./src/blocks/burger/burger.js\");\n\n__webpack_require__(/*! ../blocks/main-nav/main-nav.js */ \"./src/blocks/main-nav/main-nav.js\");\n\n__webpack_require__(/*! ../blocks/sidebar/sidebar.js */ \"./src/blocks/sidebar/sidebar.js\");\n\n__webpack_require__(/*! ./script.js */ \"./src/js/script.js\");\n/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Любые изменения этого файла будут потеряны при следующей компиляции.\n * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.\n */\n\n//# sourceURL=webpack:///./src/js/entry.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const ready = require('./utils/documentReady.js');\n// ready(function(){\n//   console.log('DOM героически построен!');\n// });\n// const $ = require('jquery');\n// $( document ).ready(function() {});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/js/utils/documentReady.js":
/*!***************************************!*\
  !*** ./src/js/utils/documentReady.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ready = function ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n};\n\nmodule.exports = ready;\n\n//# sourceURL=webpack:///./src/js/utils/documentReady.js?");

/***/ }),

/***/ "./src/js/utils/tilt.jquery.js":
/*!*************************************!*\
  !*** ./src/js/utils/tilt.jquery.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function ($) {\n  $.fn.tilt = function (options) {\n    /**\n     * RequestAnimationFrame\n     */\n    var requestTick = function requestTick() {\n      if (this.ticking) return;\n      requestAnimationFrame(updateTransforms.bind(this));\n      this.ticking = true;\n    };\n    /**\n     * Bind mouse movement evens on instance\n     */\n\n\n    var bindEvents = function bindEvents() {\n      var _this = this;\n\n      $(this).on('mousemove', mouseMove);\n      $(this).on('mouseenter', mouseEnter);\n      if (this.settings.reset) $(this).on('mouseleave', mouseLeave);\n      if (this.settings.glare) $(window).on('resize', updateGlareSize.bind(_this));\n    };\n    /**\n     * Set transition only on mouse leave and mouse enter so it doesn't influence mouse move transforms\n     */\n\n\n    var setTransition = function setTransition() {\n      var _this2 = this;\n\n      if (this.timeout !== undefined) clearTimeout(this.timeout);\n      $(this).css({\n        'transition': this.settings.speed + 'ms ' + this.settings.easing\n      });\n      if (this.settings.glare) this.glareElement.css({\n        'transition': 'opacity ' + this.settings.speed + 'ms ' + this.settings.easing\n      });\n      this.timeout = setTimeout(function () {\n        $(_this2).css({\n          'transition': ''\n        });\n        if (_this2.settings.glare) _this2.glareElement.css({\n          'transition': ''\n        });\n      }, this.settings.speed);\n    };\n    /**\n     * When user mouse enters tilt element\n     */\n\n\n    var mouseEnter = function mouseEnter(event) {\n      this.ticking = false;\n      $(this).css({\n        'will-change': 'transform'\n      });\n      setTransition.call(this); // Trigger change event\n\n      $(this).trigger(\"tilt.mouseEnter\");\n    };\n    /**\n     * Return the x,y position of the mouse on the tilt element\n     * @returns {{x: *, y: *}}\n     */\n\n\n    var getMousePositions = function getMousePositions(event) {\n      if (typeof event === \"undefined\") {\n        event = {\n          pageX: $(this).offset().left + $(this).outerWidth() / 2,\n          pageY: $(this).offset().top + $(this).outerHeight() / 2\n        };\n      }\n\n      return {\n        x: event.pageX,\n        y: event.pageY\n      };\n    };\n    /**\n     * When user mouse moves over the tilt element\n     */\n\n\n    var mouseMove = function mouseMove(event) {\n      this.mousePositions = getMousePositions(event);\n      requestTick.call(this);\n    };\n    /**\n     * When user mouse leaves tilt element\n     */\n\n\n    var mouseLeave = function mouseLeave() {\n      setTransition.call(this);\n      this.reset = true;\n      requestTick.call(this); // Trigger change event\n\n      $(this).trigger(\"tilt.mouseLeave\");\n    };\n    /**\n     * Get tilt values\n     *\n     * @returns {{x: tilt value, y: tilt value}}\n     */\n\n\n    var getValues = function getValues() {\n      var width = $(this).outerWidth();\n      var height = $(this).outerHeight();\n      var left = $(this).offset().left;\n      var top = $(this).offset().top;\n      var percentageX = (this.mousePositions.x - left) / width;\n      var percentageY = (this.mousePositions.y - top) / height; // x or y position inside instance / width of instance = percentage of position inside instance * the max tilt value\n\n      var tiltX = (this.settings.maxTilt / 2 - percentageX * this.settings.maxTilt).toFixed(2);\n      var tiltY = (percentageY * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2); // angle\n\n      var angle = Math.atan2(this.mousePositions.x - (left + width / 2), -(this.mousePositions.y - (top + height / 2))) * (180 / Math.PI); // Return x & y tilt values\n\n      return {\n        tiltX: tiltX,\n        tiltY: tiltY,\n        'percentageX': percentageX * 100,\n        'percentageY': percentageY * 100,\n        angle: angle\n      };\n    };\n    /**\n     * Update tilt transforms on mousemove\n     */\n\n\n    var updateTransforms = function updateTransforms() {\n      this.transforms = getValues.call(this);\n\n      if (this.reset) {\n        this.reset = false;\n        $(this).css('transform', 'perspective(' + this.settings.perspective + 'px) rotateX(0deg) rotateY(0deg)'); // Rotate glare if enabled\n\n        if (this.settings.glare) {\n          this.glareElement.css('transform', 'rotate(180deg) translate(-50%, -50%)');\n          this.glareElement.css('opacity', '0');\n        }\n\n        return;\n      } else {\n        $(this).css('transform', 'perspective(' + this.settings.perspective + 'px) rotateX(' + (this.settings.axis === 'x' ? 0 : this.transforms.tiltY) + 'deg) rotateY(' + (this.settings.axis === 'y' ? 0 : this.transforms.tiltX) + 'deg) scale3d(' + this.settings.scale + ',' + this.settings.scale + ',' + this.settings.scale + ')'); // Rotate glare if enabled\n\n        if (this.settings.glare) {\n          this.glareElement.css('transform', 'rotate(' + this.transforms.angle + 'deg) translate(-50%, -50%)');\n          this.glareElement.css('opacity', '' + this.transforms.percentageY * this.settings.maxGlare / 100);\n        }\n      } // Trigger change event\n\n\n      $(this).trigger(\"change\", [this.transforms]);\n      this.ticking = false;\n    };\n    /**\n     * Prepare elements\n     */\n\n\n    var prepareGlare = function prepareGlare() {\n      var glarePrerender = this.settings.glarePrerender; // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.\n\n      if (!glarePrerender) // Create glare element\n        $(this).append('<div class=\"js-tilt-glare\"><div class=\"js-tilt-glare-inner\"></div></div>'); // Store glare selector if glare is enabled\n\n      this.glareElementWrapper = $(this).find(\".js-tilt-glare\");\n      this.glareElement = $(this).find(\".js-tilt-glare-inner\"); // Remember? We assume all css is already set, so just return\n\n      if (glarePrerender) return; // Abstracted re-usable glare styles\n\n      var stretch = {\n        'position': 'absolute',\n        'top': '0',\n        'left': '0',\n        'width': '100%',\n        'height': '100%'\n      }; // Style glare wrapper\n\n      this.glareElementWrapper.css(stretch).css({\n        'overflow': 'hidden'\n      }); // Style glare element\n\n      this.glareElement.css({\n        'position': 'absolute',\n        'top': '50%',\n        'left': '50%',\n        'pointer-events': 'none',\n        'background-image': 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',\n        'width': '' + $(this).outerWidth() * 2,\n        'height': '' + $(this).outerWidth() * 2,\n        'transform': 'rotate(180deg) translate(-50%, -50%)',\n        'transform-origin': '0% 0%',\n        'opacity': '0'\n      });\n    };\n    /**\n     * Update glare on resize\n     */\n\n\n    var updateGlareSize = function updateGlareSize() {\n      this.glareElement.css({\n        'width': '' + $(this).outerWidth() * 2,\n        'height': '' + $(this).outerWidth() * 2\n      });\n    };\n    /**\n     * Public methods\n     */\n\n\n    $.fn.tilt.destroy = function () {\n      $(this).each(function () {\n        $(this).find('.js-tilt-glare').remove();\n        $(this).css({\n          'will-change': '',\n          'transform': ''\n        });\n        $(this).off('mousemove mouseenter mouseleave');\n      });\n    };\n\n    $.fn.tilt.getValues = function () {\n      var results = [];\n      $(this).each(function () {\n        this.mousePositions = getMousePositions.call(this);\n        results.push(getValues.call(this));\n      });\n      return results;\n    };\n\n    $.fn.tilt.reset = function () {\n      $(this).each(function () {\n        var _this3 = this;\n\n        this.mousePositions = getMousePositions.call(this);\n        this.settings = $(this).data('settings');\n        mouseLeave.call(this);\n        setTimeout(function () {\n          _this3.reset = false;\n        }, this.settings.transition);\n      });\n    };\n    /**\n     * Loop every instance\n     */\n\n\n    return this.each(function () {\n      var _this4 = this;\n      /**\n       * Default settings merged with user settings\n       * Can be set trough data attributes or as parameter.\n       * @type {*}\n       */\n\n\n      this.settings = $.extend({\n        maxTilt: $(this).is('[data-tilt-max]') ? $(this).data('tilt-max') : 20,\n        perspective: $(this).is('[data-tilt-perspective]') ? $(this).data('tilt-perspective') : 300,\n        easing: $(this).is('[data-tilt-easing]') ? $(this).data('tilt-easing') : 'cubic-bezier(.03,.98,.52,.99)',\n        scale: $(this).is('[data-tilt-scale]') ? $(this).data('tilt-scale') : '1',\n        speed: $(this).is('[data-tilt-speed]') ? $(this).data('tilt-speed') : '400',\n        transition: $(this).is('[data-tilt-transition]') ? $(this).data('tilt-transition') : true,\n        axis: $(this).is('[data-tilt-axis]') ? $(this).data('tilt-axis') : null,\n        reset: $(this).is('[data-tilt-reset]') ? $(this).data('tilt-reset') : true,\n        glare: $(this).is('[data-tilt-glare]') ? $(this).data('tilt-glare') : false,\n        maxGlare: $(this).is('[data-tilt-maxglare]') ? $(this).data('tilt-maxglare') : 1\n      }, options);\n\n      this.init = function () {\n        // Store settings\n        $(_this4).data('settings', _this4.settings); // Prepare element\n\n        if (_this4.settings.glare) prepareGlare.call(_this4); // Bind events\n\n        bindEvents.call(_this4);\n      }; // Init\n\n\n      this.init();\n    });\n  };\n  /**\n   * Auto load\n   */\n\n\n  $('[data-tilt]').tilt();\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/utils/tilt.jquery.js?");

/***/ })

/******/ });