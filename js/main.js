console.log("Welcome to the Neon Dreams!");

const playButton = document.getElementById('play-button');
const playImage = document.getElementById('billboard-play');
const prevBtn = document.getElementById('billboard-back');
const nextBtn = document.getElementById('billboard-next');
const audio = document.getElementById('bg-music');

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
fetch('assets/data/billboard.json')
  .then(res => res.json())
  .then(data => {
    const btn = data.playButton;
    playButton.style.top = btn.y + 'px';
    playButton.style.left = btn.x + 'px';
    playButton.style.width = btn.width + 'px';
    playButton.style.height = btn.height + 'px';
    playButton.style.zIndex = btn.zIndex;
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

nextBtn.addEventListener('click', () => {
  playTrack(currentTrackIndex + 1);
});

prevBtn.addEventListener('click', () => {
  playTrack(currentTrackIndex - 1);
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
