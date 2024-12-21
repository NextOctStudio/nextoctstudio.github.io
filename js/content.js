window.onload=function(){
	const width = window.innerWidth;
	if (width <= 1400) {
		document.getElementById("post-list").style.setProperty('display', 'none');
		document.getElementById("post-section").style.setProperty('width', '90vw');
	} else if (width >= 1400) {
		document.getElementById("post-section").style.setProperty('min-width', '48em');
	} else {
		document.getElementById("content-section").style.setProperty('width', '45em');
	}
}