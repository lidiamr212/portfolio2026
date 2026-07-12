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
        "Estrucutración y diseño de presentaciones corporativas estratégicas, transformando información compleja en propuestas visuales claras, ordenadas y alineadas con la identidad del estudio.",
        "Busco que la comunicación de RICE con sus clientes sea lo más clara, profesional y atractiva posible."
      ],
      complementary: [
        "De forma paralela, colaboro puntualmente en el área de producción gráfica, desarrollando desde material publicitario y editorial hasta el diseño de interfaces web (UI).",
        "En cada una de estas piezas, priorizo la coherencia de marca, cuidando minuciosamente los detalles tipográficos."
      ]
    },
    images: [
      { alt: 'SLIDER 1', src: '../img/slides/rice-1.png' },
      { alt: 'SLIDER 2', src: '../img/slides/rice-2.png' },
      { alt: 'SLIDER 3', src: '../img/slides/rice-3.png' }, 
    
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
        "Diseño web y desarrollo de marca para Calima, una ONG valenciana centrada en la defensa de los derechos de la comunidad saharaui.",
        "A partir del contenido proporcionado, desarrollé un sistema de jerarquización y estructuración orientado a mejorar la legibilidad y la navegación mediante flujos claros y una organización de contenidos. Era importante que el usuario comprendiera rápidamente la propuesta de valor y acceder a la información de manera intuitiva."
      ],
      complementary: [
        "A nivel visual, el diseño refuerza el carácter crítico y el posicionamiento de la asociación, cuidando la coherencia tipográfica, cromática y compositiva en cada detalle. El objetivo es construir una plataforma que no solo informe, sino que también conecte, genere impacto y acompañe al usuario hacia la acción."
      ]
    },
    images: [
      { alt: 'Proyecto 2 - Captura 01', src: '../img/calima/calima-01.png' },
      { alt: 'Proyecto 2 - Captura 07', src: './img/calima/calima-02.png' },
      { alt: 'Proyecto 2 - Detalle 03', src: '../img/calima/calima-03.png' }
    ]
  },
  {
    id: "03",
    title: "Ecos del carcabo",
    year: "en desarollo",
    role: ["UI Design", "system", "Storytelling", "Content Writing"],
    app: ["FIGMA", "REACT", "visual code"],
    nextLink:"ecos.html",
    content: {
      introduction: [
        "Diseño de una web para dar visibilidad al trabajo de Ecos del Cárcabo, una empresa familiar dedicada a la explotación agrícola y turística en Cieza",
        "Detrás de cada pantalla hay un proceso de arquitectura de contenidos, diseño y copywriting pensado para construir un relato cercano, maduro y con identidad"
      ],
      complementary: [
        "Actualmente el proyecto se está desarrollando en React. Mi trabajo ha incluido la maquetación de la interfaz y la modificación de componentes en código para ajustar y pulir el diseño, cuidando cada detalle visual y garantizando la coherencia del sistema a lo largo de toda la web."
      ]
    },
    images: [
      { alt: 'Proyecto 2 - Captura 01', src: '../img/ecos/ecos-01.jpg' },
      { alt: 'Proyecto 2 - Captura 07', src: './img/ecos/ecos-02.png' },
      { alt: 'Proyecto 2 - Detalle 03', src: '../img/ecos/ecos-03.png' }
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
      { alt: 'Proyecto 2 - Captura 01', src: '../img/pesca/pesca-00.png' },
      { alt: 'Proyecto 2 - Captura 07', src: './img/pesca/pesca-01.png' },
      { alt: 'Proyecto 2 - Detalle 03', src: '../img/pesca/pesca-0b.png' }
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
        "Este proyecto editorial da forma a un poemario que reinterpreta tres de los grandes temas universales de la literatura —el amor, la vida y la muerte— desde una mirada íntima y contemporánea.",
        "Mi aportación al proyecto abarcó la maquetación completa y el diseño de la portada, concebida como una pieza visual coherente con el universo poético del libro."
      ],
      complementary: [
        "Para ello combiné técnicas de collage e ilustración lineal, generando una armonía gráfica que dialoga con las ilustraciones y las fotografías analógicas tomadas por la autora durante sus viajes, integrando texto e imagen en una misma narrativa sensorial."
      ]
    },
    images: [
      { alt: 'Proyecto 2 - Captura 01', src: '../img/abbey/abbey-01.png' },
      { alt: 'Proyecto 2 - Captura 07', src: './img/abbey/abbey-02.png' },
      { alt: 'Proyecto 2 - Detalle 03', src: '../img/abbey/abbey-03.png' }
    ]
  },
  {
    id: "06",
    title: "Marina Trducciones",
    year: "2026",
    role: ["UI Design", "system", "Storytelling", "Content Writing"],
    app: ["FIGMA", "REACT"],
    content: {
      introduction: [
        "Diseño y desarrollo de una landing page para Marina, traductora profesional con cinco años de experiencia. Una web directa y funcional, concebida para facilitar el acceso a sus servicios y navegar entre idiomas de forma inmediata. Sin complicaciones, directa al grano y perfecta para lucir la calidad de su trabajo sin necesidad de subir nada",
        "Desarrollada con Tailwind CSS, el proyecto abarca la estructura de contenidos, la maquetación responsive, la ilustración y la animación, dando como resultado una interfaz coherente, accesible y consistente."
      ],
      complementary: [
        ""
      ]
    },
    images: [
      { alt: 'Proyecto 2 - Captura 01', src: '../img/calima/calima-01.png' },
      { alt: 'Proyecto 2 - Captura 07', src: './img/calima/calima-02.png' },
      { alt: 'Proyecto 2 - Detalle 03', src: '../img/calima/calima-03.png' }
    ]
  }
];