import { loadBillboardData } from './modules/billboardLoader.js';
import { setupButtonHandlers } from './modules/buttonHandlers.js';
import { setupParallax } from './modules/parallax.js';

console.log("Welcome to the Neon Dreams!");

loadBillboardData();
setupButtonHandlers();
setupParallax();
