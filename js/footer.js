window.onload=function(){
	const width = window.innerWidth;
	if (width <= 1400) {
		document.getElementById("footer").style.setProperty('padding', '0 0');
		document.getElementById("footer-main").style.setProperty('max-width', '100vw');
	} else {
		document.getElementById("footer").style.setProperty('padding', '0 5vw');
		document.getElementById("footer-main").style.setProperty('max-width', '1208px');
	}
}

function handleResize() {
	const width = window.innerWidth;
	if (width <= 1400) {
		document.getElementById("footer").style.setProperty('padding', '0 0');
		document.getElementById("footer-main").style.setProperty('max-width', '100vw');
	} else {
		document.getElementById("footer").style.setProperty('padding', '0 5vw');
		document.getElementById("footer-main").style.setProperty('max-width', '1208px');
	}
}

window.addEventListener('resize', handleResize);