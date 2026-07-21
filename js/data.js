// Contenedor global de datos de proyectos
const projectsData = [
  {
    id: "01",
    title: "Estudio Rice",
    year: "2025/6",
    role: ["SLIDER", "sistemas", "diseño corporativo", "comunicación b2b"],
    app: ["FIGMA"],
    nextLink:"rice.html",
    content: {
      introduction: [
        "Estructura y diseño de presentaciones corporativas enfocadas en clarificar la propuesta de valor y sostener la toma de decisiones.",
        "La creación de un sistema visual coherente permitió diseñar presentaciones claras, ordenadas y alineadas con la identidad de RICE, favoreciendo una comunicación más efectiva, profesional y accesible con sus clientes."
      ],
      complementary: [
        "De forma paralela, colaboré de manera puntual en el área de producción gráfica, participando en el desarrollo de materiales publicitarios e interfaces web (UI).",
        "Esta diversidad de proyectos me permitió aplicar un mismo criterio de diseño, basado en la coherencia de marca y el cuidado de la tipografía y los detalles."
      ]
    },
    images: [
      { alt: 'SLIDER 1', src: './img/slides/rice-1.png' },
      { alt: 'SLIDER 2', src: './img/slides/rice-2.png' },
      { alt: 'SLIDER 3', src: './img/slides/rice-3.png' }, 
    
    ]
  },
  {
    id: "02",
    title: "Asociación Calima",
    year: "2026",
    role: ["UI Design", "Maquetación", "Identidad", "Content Writing"],
    app: ["FIGMA", "illustrator", "REACT", "visual code"],
    nextLink:"calima.html",
    content: {
      introduction: [
        "Diseño web y desarrollo de marca para Calima, una ONG centrada en la defensa de los derechos de la comunidad saharaui.",
        "A través de la jerarquización y estructuración del contenido, se articularon flujos de navegación claros e intuitivos que permiten al usuario comprender rápidamente la propuesta de valor y acceder a la información sin fricción."
      ],
      complementary: [
        "La expresividad del color y una tipografía con carácter consolidan el posicionamiento de la marca. El resultado es una plataforma visualmente sólida que trasciende lo informativo para conectar, posicionar y movilizar."
      ]
    },
    images: [
      { alt: 'Proyecto 2 - Captura 01', src: './img/calima/calima-01.png' },
      { alt: 'Proyecto 2 - Captura 07', src: './img/calima/calima-02.png' },
      { alt: 'Proyecto 2 - Detalle 03', src: './img/calima/calima-03.png' }
    ]
  },
  {
    id: "03",
    title: "Ecos del carcabo",
    year: "en desarollo",
    role: ["Branding", "logo","UI Design", "packaging", "ilustración", "system", "Storytelling", "Content Writing"],
    app: ["FIGMA", "REACT", "visual code"],
    nextLink:"cosntruccion.html",
    content: {
      introduction: [
        "Desarrollo de identidad de marca, piezas gráficas y diseño web para Ecos del Cárcabo, una empresa familiar dedicada a la explotación agrícola y turística en Cieza.",
        "Inspirado en la relación simbiótica entre el ser humano y la naturaleza, el universo visual combina elementos técnicos con trazos orgánicos. Este concepto articula el relato de marca, aplicándose de forma coherente en el diseño de carteles, el etiquetado de producto y la arquitectura de contenidos."
      ],
      complementary: [
        "Actualmente la web esta en fase de desarrollo con React, el proceso incluye la maquetación de la interfaz y la adaptación de componentes en código, garantizando la fidelidad visual, el detalle y la solidez del sistema."
      ]
    },
    images: [
      { alt: 'Proyecto 2 - Captura 01', src: './img/ecos/ecos-01.png' },
      { alt: 'Proyecto 2 - Captura 07', src: './img/ecos/ecos-02.jpg' },
      { alt: 'Proyecto 2 - Detalle 03', src: './img/ecos/ecos-03.jpg' }
    ]
  },
  {
    id: "04",
    title: "Del mar a tu casa",
    year: "2024",
    role: ["infografía", "D. Editorial", "ilustración", "material didáctico", "Slides", "folleto"],
    app: ["Illustrator", "InDesign"],
    nextLink:"pesca.html",
    content: {
      introduction: [
        "Diseño de material educativo para el taller infantil “Del mar a tu casa: ¿Qué sabes del pescado y del marisco?”, una iniciativa de Pesca España. Las piezas se desarrollan en coherencia con la temática y la estrategia de comunicación de la entidad.",
        "Se prioriza una estética clara y accesible dirigida a alumnos de 1º de ESO. El programa busca fomentar una conciencia crítica sobre la pesca sostenible y su impacto en el entorno y la economía local."
      ],
      complementary: [
        "Asimismo, se desarrollan infografías y diagramas didácticos que facilitan la comprensión de conceptos clave —como la pesca sostenible, las especies autóctonas o las técnicas tradicionales—, combinando claridad visual y dinamismo para mantener la atención del alumnado y reforzar la transmisión de los contenidos."
      ]
    },
    images: [
      { alt: 'Post de IG', src: './img/pesca/pesca-00.jpg' },
      { alt: 'Cartel del evento', src: './img/pesca/pesca-0b.jpg' },
      { alt: 'Capturas de diapositivas', src: './img/pesca/pesca-01.png' }
    ]
  },
  {
    id: "05",
    title: "Tras el canto de un charete",
    year: "2024",
    role: ["Editorial", "ilustración", "Collage", "Content Writing"],
    app: ["Photoshop", "InDesign"],
    nextLink:"abbey.html",
    content: {
      introduction: [
        "Diseño de portada y maquetación editorial para un poemario contemporáneo centrado en tres grandes ejes universales: el amor, la vida y la muerte.",
        "A través de la combinación de collage e ilustración lineal, se articuló una gráfica visualmente sólida que dialoga de forma fluida con las fotografías analógicas de la autora, integrando texto e imagen en una misma narrativa visual."
      ],
      complementary: [
        "La cuidada jerarquía tipográfica y el ritmo visual garantizan la coherencia del sistema, construyendo un objeto editorial sólido que acompaña y eleva la lectura del texto."
      ]
    },
    images: [
      { alt: 'Proyecto 2 - Captura 01', src: './img/abbey/abbey-01.jpg' },
      { alt: 'Proyecto 2 - Captura 07', src: './img/abbey/abbey-01a.jpg' },
      { alt: 'Proyecto 2 - Detalle 03', src: './img/abbey/abbey-01b.jpg' }
    ]
  },
];