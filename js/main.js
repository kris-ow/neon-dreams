console.log("Welcome to the Neon Dreams!");

const playButton = document.getElementById('play-button');
const playImage = document.getElementById('billboard-play');
const backButton = document.getElementById('back-button');
const backImage = document.getElementById('billboard-back');
const nextButton = document.getElementById('next-button');
const nextImage = document.getElementById('billboard-next');
const audio = document.getElementById('bg-music');

const ap3Hover = document.getElementById('ap3-hover');

// Handle auto-scaling base on sceen width
const isMobile = window.innerWidth < 840;
const scaleFactor = isMobile ? 0.4 : 1;

let isPlaying = false;
audio.volume = 1;
audio.pause();

const tracks = [
  'assets/audio/dreamscape-nocturne.mp3',
  'assets/audio/highway-of-light.mp3'
];
let currentTrackIndex = 1;
audio.src = tracks[currentTrackIndex];

// Load billboard metadata from JSON
function applyButtonStyle(domElement, config) {
  domElement.style.top = (config.y * scaleFactor) + 'px';
  domElement.style.left = (config.x * scaleFactor) + 'px';
  domElement.style.width = (config.width * scaleFactor) + 'px';
  domElement.style.height = (config.height * scaleFactor) + 'px';
  domElement.style.zIndex = config.zIndex;
}

fetch('assets/data/billboard.json')
  .then(res => res.json())
  .then(data => {
    applyButtonStyle(playButton, data.playButton);
    applyButtonStyle(backButton, data.backButton);
    applyButtonStyle(nextButton, data.nextButton);
    applyButtonStyle(ap3Hover, data.ap3Hover);
  });

playButton.addEventListener('click', () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    audio.play();
    playImage.src = 'assets/images/billboard/building-v4-2-billboard-play-on.png';
  } else {
    audio.pause();
    playImage.src = "assets/images/billboard/building-v4-2-billboard-play-off.png";
  }
});

function playTrack(index) {
  currentTrackIndex = (index + tracks.length) % tracks.length;
  audio.src = tracks[currentTrackIndex];
  if (isPlaying) {
    audio.play();
  }
}

nextButton.addEventListener('click', () => {
  playTrack(currentTrackIndex + 1);
});

// Next button "on"
nextButton.addEventListener('mousedown', () => {
  nextImage.src = "assets/images/billboard/building-v4-2-billboard-next-on.png";
});

nextButton.addEventListener('touchstart', () => {
  nextImage.src = "assets/images/billboard/building-v4-2-billboard-next-on.png";
}, { passive: true });

// Next button "off"
nextButton.addEventListener('mouseup', () => {
  nextImage.src = "assets/images/billboard/building-v4-2-billboard-next-off.png";
});

nextButton.addEventListener('touchend', () => {
  nextImage.src = "assets/images/billboard/building-v4-2-billboard-next-off.png";
}, { passive: true });

backButton.addEventListener('click', () => {
  playTrack(currentTrackIndex - 1);
});

// Back button "on"
backButton.addEventListener('touchstart', () => {
  backImage.src = "assets/images/billboard/building-v4-2-billboard-back-on.png";
}, { passive: true });

backButton.addEventListener('mousedown', () => {
  backImage.src = "assets/images/billboard/building-v4-2-billboard-back-on.png";
});

// Back button "off"
backButton.addEventListener('mouseup', () => {
  backImage.src = "assets/images/billboard/building-v4-2-billboard-back-off.png";
});

backButton.addEventListener('touchend', () => {
  backImage.src = "assets/images/billboard/building-v4-2-billboard-back-off.png";
}, { passive: true });

audio.addEventListener('ended', () => {
  playTrack(currentTrackIndex + 1);
});

// Parallax scroll for background
const bg = document.querySelector('.city-background');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bg.style.transform = `translateY(${scrollY * 0.3}px)`;
});
