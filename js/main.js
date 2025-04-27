import { loadBillboardData } from './modules/billboardLoader.js';
import { setupButtonHandlers, setupApartmentPopup } from './modules/buttonHandlers.js';
import { setupParallax } from './modules/parallax.js';

console.log("Welcome to the Neon Dreams!");

document.addEventListener('DOMContentLoaded', () => {
  loadBillboardData();
  setupButtonHandlers();
  setupParallax();
  setupApartmentPopup();
});
