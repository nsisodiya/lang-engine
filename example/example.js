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

langEngine.setLanguage('en');
console.log($r('user_has_new_number', userObj));