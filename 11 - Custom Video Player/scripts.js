const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelector('[data-skip]');
const ranges = document.querySelector('.player__slider');
const progressBar = document.querySelector('.progress__filled');

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

// Jumps video back and forward on skipButtons click
function skip(){
	//console.log('Clicking some [data-skip]!');
	console.log(this.dataset);
	// Jump video back and forward (!) + string to float
	video.currentTime += parseFloat(this.dataset.skip);
}

// Updates range for volume and speed
function handleRangeUpdate(){
	//console.log("range update!" + parseFloat(this.dataset));
	console.log(this.name + " range update! " + parseFloat(ranges.value));
}

// Updates video progress bar
function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`
	;
	//console.log('calling on time progress!');
}

/* Event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

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

// FOREACH IS NOT A FUNCTION ERROR:
//ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.addEventListener('change', handleRangeUpdate);
ranges.addEventListener('mousemove', handleRangeUpdate);