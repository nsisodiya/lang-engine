# lang-engine
Simple way to add multi language support in your JavaScript based application

# Installation

```
npm install --save lang-engine
```

# Usage

```js
import langEngine from 'lang-engine';

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




var $r = langEngine.resolve;
var userObj = {
	name: 'Narendra',
	newNumber: '+914545454545'
};


langEngine.setLanguage('hi');
console.log($r('user_has_new_number', userObj));
//Narendra का नया नंबर +914545454545 है

langEngine.setLanguage('en');
console.log($r('user_has_new_number', userObj));
//Narendra's new number is +914545454545


```