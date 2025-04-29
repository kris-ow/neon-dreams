/**
 * Starts a frame animation by cycling through given frames.
 * 
 * @param {HTMLElement} imgElement - The <img> element to animate.
 * @param {Array<string>} framePaths - Array of image frame URLs.
 * @param {number} frameDuration - Time per frame in milliseconds.
 */
export function startFrameAnimation(imgElement, framePaths, frameDuration = 500) {
    let currentFrame = 0;
  
    setInterval(() => {
      currentFrame = (currentFrame + 1) % framePaths.length;
      imgElement.src = framePaths[currentFrame];
    }, frameDuration);
}
  