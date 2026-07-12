if (typeof projectsData === 'undefined') {
  console.error("❌ ERROR: No se encuentra 'projectsData'. Asegúrate de cargar js/data.js antes de este script.");
} else {
  const portfolioMainContainer = document.getElementById('portfolio-container');
  const counterDisplay = document.getElementById('project-counter');
  const totalProjects = String(projectsData.length).padStart(2, '0');

  if (counterDisplay) {
    counterDisplay.innerText = `01 / ${totalProjects}`;
  }

  if (portfolioMainContainer) {
    portfolioMainContainer.innerHTML = '';

    // Inyección individualizada de contenido estructurado
    projectsData.forEach((project) => {
      const section = document.createElement('section');
      section.id = `project-${project.id}`;
      section.className = "project-container";
      
      section.innerHTML = `
        <div class="text-viewport">
          <div class="text-wrapper">
            <div class="flex-group u-gap-16">
              <h2>${project.title}</h2>
              <div class="project-meta">
                <p class="label-text">[ Programas:
                ${project.app.map(t => `<span class="label-text">${t}</span>`).join(', ')} ]</p>
               </div>

               

                <div class="project-meta">
                
                <span class="tag azul">${project.year}</span>
                ${project.role.map(t => `<span class="tag verde">${t}</span>`).join('')}
                </div>
                
            </div>
            <div class="content-section">
                <div class="text1">
                <h4 class="label-text u-markAzul">[Info]</h4>
                ${project.content.introduction.map(p => `<p>${p}</p>`).join('')}
                </div>
              ${project.content.complementary.map(p => `<p class="body-xs">${p}</p>`).join('')}
            </div>
           </div>
        </div>

        <div class="images-viewport">
          ${project.images.map(img => `
            <div class="image-snap-row">
              <div class="image-card">
                <img src="${img.src}" alt="${img.alt}" loading="lazy">
              </div>
            </div>
          `).join('')}

          <div class="project-action-row">
            <a href="${project.nextLink}" class="label-text btn-portfolio"><mark class="u-markVerde">[ Ver la galería completa ]</mark>
            <svg width="14" height="14" viewBox="0 0 17 17" fill="none"">
              <path d="M2.25414 14.2072L15.1341 1.34655M1.25 1.25H15.25V15.25" stroke="#1E1E1C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            </svg>
            </a>
          </div>
        </div>
      `;

      portfolioMainContainer.appendChild(section);
    });

    // Observer configurado respecto al viewport del navegador completo
    const observerOptions = { root: null, threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('project-', '');
          const index = projectsData.findIndex(p => p.id === id);
          if (index !== -1 && counterDisplay) {
            counterDisplay.innerText = `${String(index + 1).padStart(2, '0')} / ${totalProjects}`;
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project-container').forEach(s => observer.observe(s));
  }
}