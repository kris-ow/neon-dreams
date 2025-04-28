import { loadInteractiveZones } from './modules/zoneLoader.js';
import { setupButtonHandlers, setupApartmentPopup } from './modules/buttonHandlers.js';
import { setupParallax } from './modules/parallax.js';

console.log("Welcome to the Neon Dreams!");

document.addEventListener('DOMContentLoaded', () => {
  loadInteractiveZones();
  setupButtonHandlers();
  setupParallax();
  setupApartmentPopup('ap3-hover', 'ap3-popup');
});
