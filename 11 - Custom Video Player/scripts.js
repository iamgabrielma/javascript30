const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelector('[data-skip]');

// Play-Pause on click
function togglePlay(){
	
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

// Changes the play - pause button if the video is being played or paused
function updateButton(){
	const icon = this.paused ? '>' : '||';
	toggle.textContent = icon;
}

//
function skip(){
	//console.log('Clicking some [data-skip]!');
	console.log(this.dataset);
}

/* Event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

// FOREACH IS NOT A FUNCTION ERROR:
skipButtons.addEventListener('click', skip);
// skipButtons.forEach(function(){
// 	//button.addEventListener('click', skip);
// 	console.log('clicked!');
// });
//skipButtons.forEach(button => button.addEventListener('click', skip));
// console.log(skipButtons);
// const newButtons =  Array.prototype.skipButtons;
// console.log(newButtons);