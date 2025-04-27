const audio = document.getElementById('bg-music');

const tracks = [
    'assets/audio/dreamscape-nocturne.mp3',
    'assets/audio/highway-of-light.mp3'
];

let isPlaying = false;
let currentTrackIndex = 1;
audio.volume = 1;
audio.src = tracks[currentTrackIndex];
audio.pause();

function togglePlay(playImage) {
    isPlaying = !isPlaying;
    if (isPlaying) {
      audio.play();
      playImage.src = 'assets/images/billboard/building-v4-2-billboard-play-on.png';
    } else {
      audio.pause();
      playImage.src = "assets/images/billboard/building-v4-2-billboard-play-off.png";
    }
}

function playTrack(delta) {
    currentTrackIndex = (currentTrackIndex + delta + tracks.length) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    if (isPlaying) {
      audio.play();
    }
}

audio.addEventListener('ended', () => {
    playTrack(currentTrackIndex + 1);
});

export { togglePlay, playTrack };