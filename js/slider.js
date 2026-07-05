const viewport = document.getElementById('viewport');

if (viewport) {
  window.addEventListener('load', () => {
    viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
  });
}
