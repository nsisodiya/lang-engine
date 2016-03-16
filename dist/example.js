(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		exports["example"] = factory();
	else
		root["example"] = factory();
})(this, function () {
	return /******/ (function (modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/
		var installedModules = {};

		/******/ 	// The require function
		/******/
		function __webpack_require__(moduleId) {

			/******/ 		// Check if module is in cache
			/******/
			if (installedModules[moduleId])
			/******/      return installedModules[moduleId].exports;

			/******/ 		// Create a new module (and put it into the cache)
			/******/
			var module = installedModules[moduleId] = {
				/******/      exports: {},
				/******/      id: moduleId,
				/******/      loaded: false
				/******/
			};

			/******/ 		// Execute the module function
			/******/
			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ 		// Flag the module as loaded
			/******/
			module.loaded = true;

			/******/ 		// Return the exports of the module
			/******/
			return module.exports;
			/******/
		}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/
		__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/
		__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/
		__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/
		return __webpack_require__(0);
		/******/
	})
	/************************************************************************/
	/******/([
		/* 0 */
		/***/ function (module, exports) {

			"use strict";

			langEngine.add({
				max_field_lengh_error: {
					en: "Maximum __num__ characters are allowed",
					hi: "ज्यादा से ज्यादा __num__ अक्षर डाल सकते हो"
				},
				user_has_new_number: {
					en: "__name__'s new number is __new_number__",
					hi: "__name__ का नया नंबर __new_number__ है"
				}
			});

			langEngine.add({
				field_cannot_empty: {
					en: "This field cannot be blank",
					hi: "इसको खाली नहीं छोड़ सकते है"
				}
			});

			langEngine.setLanguage('hi');

			console.log(langEngine.resolve('user_has_new_number', {
				name: 'Narendra',
				newNumber: '+914545454545'
			}));

			langEngine.setLanguage('en');

			console.log(langEngine.resolve('user_has_new_number', {
				name: 'Narendra',
				newNumber: '+914545454545'
			}));

			/***/
		}
		/******/])
});
;