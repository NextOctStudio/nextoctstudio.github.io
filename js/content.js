if (window.innerWidth <= 1400) {
	document.getElementById("post-list").style.setProperty('display', 'none');
	document.getElementById("post-section").style.setProperty('width', '90vw');
} else {
	document.getElementById("post-list").style.setProperty('display', 'block');
	document.getElementById("post-section").style.setProperty('width', '48em');
}

function handleResize() {
	if (window.innerWidth <= 1400) {
		document.getElementById("post-list").style.setProperty('display', 'none');
		document.getElementById("post-section").style.setProperty('width', '90vw');
	} else {
		document.getElementById("post-list").style.setProperty('display', 'block');
		document.getElementById("post-section").style.setProperty('width', '48em');
	}
}

window.addEventListener('resize', handleResize);