/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player/querySelector('.progress');
const progressBar = player.guerySelector('.progress__filled')
;
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges= player.querySelectorAll('.player__slider');

const togglePlay = () => {
    video.paused ? video.play() : video.pause();
}

/* Build out functions */
function updateBtn() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip); 
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
}

function skip() {
console.log(this.dataset.skip);
video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis= `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetx / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listners */
video.addEventListener("click', togglePlay");
video.addEventListener("play, updateBtn");
video.addEventListener("pause', updateBtn");
video.addEventListener("timeupdate", handleProgress)
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener("click'",skip));
ranges.forEach(range => range.addEventListener("input", handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
