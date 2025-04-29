import { loadInteractiveZones } from './modules/zoneLoader.js';
import { setupButtonHandlers, setupApartmentPopup } from './modules/buttonHandlers.js';
import { setupParallax } from './modules/parallax.js';
import { startFrameAnimation } from './modules/animationController.js';

console.log("Welcome to the Neon Dreams!");

document.addEventListener('DOMContentLoaded', () => {
  loadInteractiveZones();
  setupButtonHandlers();
  setupParallax();
  setupApartmentPopup('ap3-hover', 'ap3-popup');
});

const apartment1 = document.getElementById('apartment-1');

startFrameAnimation(apartment1, [
  'assets/images/apartments/apartment-1a-frame1.png',
  'assets/images/apartments/apartment-1a-frame2.png',
  'assets/images/apartments/apartment-1a-frame3.png',
  'assets/images/apartments/apartment-1a-frame4.png'
], 450);
