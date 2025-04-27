import { togglePlay, playTrack } from './audioController.js';

const playButton = document.getElementById('play-button');
const playImage = document.getElementById('billboard-play');
const backButton = document.getElementById('back-button');
const backImage = document.getElementById('billboard-back');
const nextButton = document.getElementById('next-button');
const nextImage = document.getElementById('billboard-next');


function setupButtonHandlers() {
    playButton.addEventListener('click', () => togglePlay(playImage));
  
    nextButton.addEventListener('click', () => {
      playTrack(1);
    });
  
    backButton.addEventListener('click', () => {
      playTrack(-1);
    });
  
    // Button visual effects
    nextButton.addEventListener('mousedown', () => {
      nextImage.src = "assets/images/billboard/building-v4-2-billboard-next-on.png";
    });
    nextButton.addEventListener('mouseup', () => {
      nextImage.src = "assets/images/billboard/building-v4-2-billboard-next-off.png";
    });
    nextButton.addEventListener('touchstart', () => {
      nextImage.src = "assets/images/billboard/building-v4-2-billboard-next-on.png";
    }, { passive: true });
    nextButton.addEventListener('touchend', () => {
      nextImage.src = "assets/images/billboard/building-v4-2-billboard-next-off.png";
    }, { passive: true });
  
    backButton.addEventListener('mousedown', () => {
      backImage.src = "assets/images/billboard/building-v4-2-billboard-back-on.png";
    });
    backButton.addEventListener('mouseup', () => {
      backImage.src = "assets/images/billboard/building-v4-2-billboard-back-off.png";
    });
    backButton.addEventListener('touchstart', () => {
      backImage.src = "assets/images/billboard/building-v4-2-billboard-back-on.png";
    }, { passive: true });
    backButton.addEventListener('touchend', () => {
      backImage.src = "assets/images/billboard/building-v4-2-billboard-back-off.png";
    }, { passive: true });
}
  
export { setupButtonHandlers };

export function setupApartmentPopup() {
    const ap3Hover = document.getElementById('ap3-hover');
    const popup = document.getElementById('apartment-popup');
  
    if (!ap3Hover || !popup) {
      console.warn('Apartment hover or popup element not found.');
      return;
    }
  
    ap3Hover.addEventListener('click', () => {
      popup.classList.remove('hidden');
    });
  
    popup.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
}