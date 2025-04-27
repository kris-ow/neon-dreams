const bg = document.querySelector('.city-background');

function setupParallax() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    bg.style.transform = `translateY(${scrollY * 0.3}px)`;
  });
}

export { setupParallax };
