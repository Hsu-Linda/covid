/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reuse_submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reuse/submit */ \"./reuse/submit.js\");\n/* harmony import */ var _submitForm_getEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../submitForm/getEmail */ \"./submitForm/getEmail.js\");\n\r\n\r\n(0,_reuse_submit__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_submitForm_getEmail__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n//# sourceURL=webpack:///./js/form.js?");

/***/ }),

/***/ "./reuse/sendDatatoServer.js":
/*!***********************************!*\
  !*** ./reuse/sendDatatoServer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((msgJson,towhere)=>{\r\n    const xhr = new XMLHttpRequest();\r\n    //xhr.onload function內不作用原因 xhr.onload 須放在xhr.open 和xhr.send前\r\n    xhr.onload=()=>{\r\n        console.log('in on load')\r\n        if(xhr.status>=200 &&xhr.status<300){\r\n            console.log('ojdoiasjdoiasjdao')\r\n            console.log(xhr.responseText)\r\n            if(xhr.responseText==='true'){\r\n                console.log(xhr.response.body)\r\n                window.location.href='http://127.0.0.1:12345/dist/form.html';\r\n            }\r\n        }\r\n    \r\n        console.log(xhr.readyState)\r\n    \r\n    }\r\n    \r\n    \r\n    xhr.open('post',\"http://127.0.0.1:8000/post\",true)\r\n    \r\n    xhr.setRequestHeader('Content-Type','application/json');\r\n    xhr.send(msgJson);\r\n    \r\n});\r\n\n\n//# sourceURL=webpack:///./reuse/sendDatatoServer.js?");

/***/ }),

/***/ "./reuse/submit.js":
/*!*************************!*\
  !*** ./reuse/submit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((getDataModule)=>{\r\n    const submit= document.getElementById('submit');\r\n    document.addEventListener('DOMContentLoaded',()=>{\r\n        submit.addEventListener('click',getDataModule)\r\n    })\r\n});\r\n\n\n//# sourceURL=webpack:///./reuse/submit.js?");

/***/ }),

/***/ "./submitForm/getEmail.js":
/*!********************************!*\
  !*** ./submitForm/getEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reuse_sendDatatoServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reuse/sendDatatoServer */ \"./reuse/sendDatatoServer.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ev)=>{\r\n    ev.preventDefault();\r\n    const email= document.getElementById('email').value;\r\n    let data=JSON.stringify({email})\r\n    ;(0,_reuse_sendDatatoServer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data,'../html/dataRender.html')\r\n});\n\n//# sourceURL=webpack:///./submitForm/getEmail.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/form.js");
/******/ 	
/******/ })()
;