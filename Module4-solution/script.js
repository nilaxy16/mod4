(function (window) {
	var names = ["Shanth", "Nilu", "Jenu", "Siva", "jesus", "Vaanu", "Loosy", "janu", "Rani", "Tusa"];
	for (var i in names) {
	if (names[i].startsWith("j") == true || names[i].startsWith("J") == true) {
    	window.byeSpeaker.speak(names[i]);
    } else {
    	window.helloSpeaker.speak(names[i]);
	}
	}
})(window);

