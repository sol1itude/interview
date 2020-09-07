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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Complier.js":
/*!*********************!*\
  !*** ./Complier.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Watcher */ \"./Watcher.js\");\n\r\n\r\nconst REG = /\\{\\{.*\\}\\}/\r\n\r\nclass Complier {\r\n    constructor(el, vm){\r\n        this.el = document.querySelector(el);\r\n        this.vm = vm;\r\n\r\n        this.frag = this._createFragment();\r\n        this.el.appendChild(this.frag);\r\n    }\r\n\r\n    _createFragment(){\r\n        var frag = document.createDocumentFragment();\r\n        var child\r\n        while(child = this.el.firstChild){\r\n            this._complier(child)\r\n            frag.appendChild(child)\r\n        }\r\n\r\n        return frag\r\n    }\r\n\r\n    _complier(node){\r\n        if(node.nodeType === 3){\r\n            if(REG.test(node.nodeValue)){\r\n                var name = RegExp.$1;\r\n                name = name.trim();\r\n                new _Watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node, name, this.vm)\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Complier);\n\n//# sourceURL=webpack:///./Complier.js?");

/***/ }),

/***/ "./Dep.js":
/*!****************!*\
  !*** ./Dep.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Dep {\r\n    constructor(){\r\n        this.list = []\r\n    }\r\n\r\n    listen(sub){\r\n        this.list.push(sub)\r\n    }\r\n\r\n    notify(){\r\n        for(var i=0;i<this.list.length;i++){\r\n            this.list[i].update()\r\n        }\r\n    }\r\n}\r\n\r\nDep.prototype.target = null;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dep);\n\n//# sourceURL=webpack:///./Dep.js?");

/***/ }),

/***/ "./Observer.js":
/*!*********************!*\
  !*** ./Observer.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dep */ \"./Dep.js\");\n\r\n\r\nclass Observer {\r\n    constructor(data) {\r\n        this.data = data;\r\n        Object.keys(this.data).forEach(key => {\r\n            _bind(data, key, data[key])\r\n        })\r\n    }\r\n\r\n    _bind(data, key, value){\r\n        var myDep = new _Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        Object.defineProperty(data, key, {\r\n            get(){\r\n                if(_Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target) myDep.listen(_Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target)\r\n                return val\r\n            },\r\n\r\n            set(newVal){\r\n                if(newVal === val) return\r\n                val = newVal;\r\n                myDep.notify();\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observer);\n\n//# sourceURL=webpack:///./Observer.js?");

/***/ }),

/***/ "./Vue.js":
/*!****************!*\
  !*** ./Vue.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./Observer.js\");\n/* harmony import */ var _Complier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Complier */ \"./Complier.js\");\n\r\n\r\n\r\nclass Vue{\r\n    constructor(options){\r\n        this.$options = options;\r\n        this.$el = this.$options.el;\r\n        this._data = this.$options.data;\r\n\r\n        Object.keys(this._data).forEach( key => {\r\n            this._proxy(key)\r\n        })\r\n        new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._data);\r\n        new _Complier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.$el, this);\r\n    }\r\n\r\n    _proxy(){\r\n        const self = this;\r\n        Object.defineProperty(this, key, {\r\n            get(){\r\n                return self._data[key];\r\n            },\r\n\r\n            set(val){\r\n                self._data[key] = val;\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vue);\n\n//# sourceURL=webpack:///./Vue.js?");

/***/ }),

/***/ "./Watcher.js":
/*!********************!*\
  !*** ./Watcher.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dep */ \"./Dep.js\");\n\r\n\r\nclass Watcher {\r\n    constructor(node, name, vm){\r\n        this.node = node;\r\n        this.name = name;\r\n        this.vm = vm;\r\n        _Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target = this;\r\n        this.update();\r\n        _Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target = null;\r\n    }\r\n\r\n    update(){\r\n\r\n        this.node.nodeValue = this.vm[name];\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watcher);\n\n//# sourceURL=webpack:///./Watcher.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vue */ \"./Vue.js\");\n\r\n\r\nnew _Vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    el: '#app',\r\n    data: {\r\n        msg: '我是数据'\r\n    }\r\n})\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });