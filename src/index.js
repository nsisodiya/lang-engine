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
	add: function (keyObj) {
		Object.keys(keyObj).map(function (v, i) {
			langKeys[v] = keyObj[v];
		});
	},
	setLanguage: function (langCode) {
		selectedLanguage = langCode;
	},

	resolve: function (key, data) { //data is optional
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
						return data[toCamelCase(a.split('__').join(''))]
					} catch (ex) {
						return ex;
					}
				});
			}
		} else {
			return `${selectedLanguage} language code not found for key ${key}`
		}
		return str;
	}
};