window.onscroll = function() {
	scrollFunc();
	progressTracker();
	welcomeMessage();
};

function scrollFunc() {
	let image = document.getElementById("cgilogo");

	let angle = (360 * window.pageYOffset) / (2 * 200 * 3.14159);


	image.style.transform = "rotate(-" + angle + "deg)";
}

function discordHover() {
	let disc = document.getElementById("discordlogo");
	disc.style.animation = "discordRotate 2s infinite";
}

function discordLeave() {
	let disc = document.getElementById("discordlogo");
	disc.style.animation = null;
}

function progressTracker() {
	let bar = document.getElementById("ProgMarker");

	var body = document.body;
	var html = document.documentElement;

	let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

	let scrollPosition = ((100 * window.pageYOffset) / (height - window.innerHeight));

	bar.style.height = (200 * scrollPosition) / 100 + "px";
}

function welcomeMessage() {
	let message = document.getElementById("scroll_message")
	message.style.opacity = 0;
}