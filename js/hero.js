const hero = document.querySelector('.heroContent') || document.querySelector('.hero');
const container = document.querySelector('.trail-container');

const tags = ['Editorial Design', 'layouts', 'Visual Learning', 'Design Systems', 'UI/UX', 'Dossier', 'Infografía', 'Brand Systems', 'Frontend'];

let lastX = 0;
let lastY = 0;
const threshold = 150;
let tagIndex = 0;

if (hero && container) {
  hero.addEventListener('mousemove', (e) => {
    const currentX = e.clientX;
    const currentY = e.clientY;

    const distance = Math.hypot(currentX - lastX, currentY - lastY);

    if (distance > threshold) {
      createTrailTag(currentX, currentY, tags[tagIndex]);
      tagIndex = (tagIndex + 1) % tags.length;
      lastX = currentX;
      lastY = currentY;
    }
  });
}

function createTrailTag(x, y, text) {
  const el = document.createElement('div');
  el.classList.add('trail-tag');
  el.innerText = text;

  const rect = hero.getBoundingClientRect();
  el.style.left = `${x - rect.left}px`;
  el.style.top = `${y - rect.top}px`;

  container.appendChild(el);

  el.addEventListener('animationend', () => {
    el.remove();
  });
}
