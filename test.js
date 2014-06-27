function inputul() {
	var arr = [["드래그"], ["굵기 조절하기"], ["색상원", "색상 확인창"], ["패턴 그리는 창"], ["지우개 그리기"]];
	var target = document.querySelector('#detail_select');
	var s = "";

	for ( i = 0; i < arr.length; i++) {
		s += "<ul>";
		for ( j = 0; j < arr[i].length; j++) {
			s += "<li>"
			s += arr[i][j];
			s += "</li>"
		}
		s += "</ul>";
	}
	target.innerHTML = s;
}

window.addEventListener('load', function() {
	var a = window.getComputedStyle(document.querySelector('div'), null);
	if (a.display == 'block') {
	//	debugger;
		document.querySelector('div').style.display = 'none';
	} else {
		document.querySelector('div').style.display = 'block';
	}
}, false);

