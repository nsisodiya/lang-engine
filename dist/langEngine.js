(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		exports["langEngine"] = factory();
	else
		root["langEngine"] = factory();
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

			'use strict';

			/*

			 The MIT License (MIT)
			 Copyright (c) 2016 Narendra Sisodiya https://github.com/nsisodiya

			 */

			var langKeys = {};
			var selectedLanguage = "";

			function toCamelCase(str) {
				// Lower cases the string
				return str.toLowerCase()
						// Replaces any - or _ characters with a space
						.replace(/[-_]+/g, ' ')
						// Removes any non alphanumeric characters
						.replace(/[^\w\s]/g, '')
						// Uppercases the first character in each group immediately following a space
						// (delimited by spaces)
						.replace(/ (.)/g, function ($1) {
							return $1.toUpperCase();
						})
						// Removes spaces
						.replace(/ /g, '');
			}

			module.exports = {
				add: function add(keyObj) {
					Object.keys(keyObj).map(function (v, i) {
						langKeys[v] = keyObj[v];
					});
				},
				setLanguage: function setLanguage(langCode) {
					selectedLanguage = langCode;
				},

				resolve: function resolve(key, data) {
					//data is optional
					var str;
					try {
						str = langKeys[key][selectedLanguage];
					} catch (ex) {
						return "Unable to find - " + key;
					}
					if (str !== undefined && str !== null) {
						if (data !== undefined && data !== null) {
							str = str.replace(/\_\_.+?\_\_/g, function (a, b, c, d) {
								try {
									return data[toCamelCase(a.split('__').join(''))];
								} catch (ex) {
									return ex;
								}
							});
						}
					} else {
						return selectedLanguage + ' language code not found for key ' + key;
					}
					return str;
				}
			};

			/***/
		}
		/******/])
});
;