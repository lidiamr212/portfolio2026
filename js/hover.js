const hoverTriggers = document.querySelectorAll('.hover-trigger');

hoverTriggers.forEach(trigger => {
  const targetSelector = trigger.getAttribute('data-target');
  const panel = document.querySelector(targetSelector);

  if (!panel) return;

  // Entrada suave al hacer hover
  trigger.addEventListener('mouseenter', () => {
    panel.style.display = 'block';
    
    setTimeout(() => {
      panel.style.opacity = '1';
    }, 10);
  });

  // Salida instantánea al retirar el cursor
  trigger.addEventListener('mouseleave', () => {
    panel.style.opacity = '0';
    panel.style.display = 'none';
  });
});