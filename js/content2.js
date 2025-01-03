if (window.innerWidth <= 1400) {
	document.getElementById("post-list").style.setProperty('display', 'none');
	document.getElementById("content-section").style.setProperty('width', '88vw');
} else {
	document.getElementById("post-list").style.setProperty('display', 'block');
	document.getElementById("content-section").style.setProperty('width', '45em');
}

function handleResize() {
	if (window.innerWidth <= 1400) {
		document.getElementById("post-list").style.setProperty('display', 'none');
		document.getElementById("content-section").style.setProperty('width', '88vw');
	} else {
		document.getElementById("post-list").style.setProperty('display', 'block');
		document.getElementById("content-section").style.setProperty('width', '45em');
	}
}

window.addEventListener('resize', handleResize);