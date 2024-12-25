window.onload=function(){
	const width = window.innerWidth;
	if (width <= 1400) {
		document.getElementById("footer").style.setProperty('padding', '0 0');
		document.getElementById("footer-main").style.setProperty('max-width', '100vw');
	}
}

function handleResize() {
	const width = window.innerWidth;
	if (width <= 1400) {
		document.getElementById("footer").style.setProperty('padding', '0 0');
		document.getElementById("footer-main").style.setProperty('max-width', '100vw');
	}
}

window.addEventListener('resize', handleResize);