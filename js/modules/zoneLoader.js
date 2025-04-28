const playButton = document.getElementById('play-button');
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
const ap3Hover = document.getElementById('ap3-hover');

let locationData = null;

function getScaleFactor() {
  return window.innerWidth < 840 ? 0.4 : 1;
}

function applyButtonStyle(domElement, config) {
    const scaleFactor = getScaleFactor();
    domElement.style.top = (config.y * scaleFactor) + 'px';
    domElement.style.left = (config.x * scaleFactor) + 'px';
    domElement.style.width = (config.width * scaleFactor) + 'px';
    domElement.style.height = (config.height * scaleFactor) + 'px';
    domElement.style.zIndex = config.zIndex;
}

function applyAllStyles() {
    if (!locationData) return;
    applyButtonStyle(playButton, locationData.playButton);
    applyButtonStyle(backButton, locationData.backButton);
    applyButtonStyle(nextButton, locationData.nextButton);
    applyButtonStyle(ap3Hover, locationData.ap3Hover);
}

function loadInteractiveZones() {
    fetch('assets/data/interactive-zones.json')
      .then(res => res.json())
      .then(data => {
        locationData = data;
        applyAllStyles();
      });
  
    window.addEventListener('resize', () => {
      applyAllStyles();
    });
}
  
export { loadInteractiveZones };