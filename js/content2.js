window.onload=function(){
	const width = window.innerWidth;
	if (width <= 1400) {
		document.getElementById("content-section").style.setProperty('width', '90vw');
	} else {
		document.getElementById("content-section").style.setProperty('width', '45em');
	}
}