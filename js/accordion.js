// Estado inicial
if (window.innerWidth < 768) {
  document.querySelectorAll('.accordion[data-mobile-closed]').forEach((accordion) => {
    const panel = accordion.querySelector('.accordion__panel');
    const button = accordion.querySelector('[data-accordion]');

    if (!panel || !button) return;

    panel.classList.add('hide');
    button.classList.remove('activo');
    button.setAttribute('aria-expanded', 'false');
  });
}

// Abrir / cerrar
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-accordion]');
  if (!btn) return;

  const panelId = btn.getAttribute('data-accordion');
  const panel = document.getElementById(panelId);
  if (!panel) return;

  const abierto = !panel.classList.toggle('hide');

  btn.classList.toggle('activo', abierto);
  btn.setAttribute('aria-expanded', abierto.toString());
});