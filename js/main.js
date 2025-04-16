console.log("Welcome to the Neon Dreams!");

const playButton = document.getElementById('play-button');
const playImage = document.getElementById('billboard-play');
const backButton = document.getElementById('back-button');
const backImage = document.getElementById('billboard-back');
const nextButton = document.getElementById('next-button');
const nextImage = document.getElementById('billboard-next');
const audio = document.getElementById('bg-music');

// Handle auto-scaling base on sceen width
const isMobile = window.innerWidth < 768;
const scaleFactor = isMobile ? 0.5 : 1;

window.addEventListener('resize', () => {
  location.reload();
});

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
  });

playButton.addEventListener('click', () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    audio.play();
    playImage.src = 'assets/images/billboard/building-v4-1-billboard-play-on.png';
  } else {
    audio.pause();
    playImage.src = "assets/images/billboard/building-v4-1-billboard-play-off.png";
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

nextButton.addEventListener('mousedown', () => {
  nextImage.src = "assets/images/billboard/building-v4-1-billboard-next-on.png";
});

nextButton.addEventListener('mouseup', () => {
  nextImage.src = "assets/images/billboard/building-v4-1-billboard-next-off.png";
});

backButton.addEventListener('click', () => {
  playTrack(currentTrackIndex - 1);
});

backButton.addEventListener('mousedown', () => {
  backImage.src = "assets/images/billboard/building-v4-1-billboard-back-on.png";
});

backButton.addEventListener('mouseup', () => {
  backImage.src = "assets/images/billboard/building-v4-1-billboard-back-off.png";
});

audio.addEventListener('ended', () => {
  playTrack(currentTrackIndex + 1);
});

// Parallax scroll for background
const bg = document.querySelector('.city-background');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bg.style.transform = `translateY(${scrollY * 0.3}px)`;
});
