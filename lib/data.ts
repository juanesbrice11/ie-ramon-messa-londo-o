export interface StudentProject {
  id: number;
  name: string;
  grade: string;
  projectTitle: string;
  description: string;
  previewImage: string;
  projectUrl: string;
  tags: string[];
}

export const studentProjects: StudentProject[] = [
  {
    id: 1,
    name: "Angélica",
    grade: "Grado 11°",
    projectTitle: "Tienda de Productos y Servicios",
    description:
      "Página web multipage con catálogo de productos, servicios y formulario de contacto.",
    previewImage: "/images/proyectos/angelica-preview.png",
    projectUrl: "/proyectos/angelica/index.html",
    tags: ["HTML", "CSS", "Comercio"],
  },
  {
    id: 2,
    name: "Brayan Stiven",
    grade: "Grado 8°",
    projectTitle: "Fútbol y Fútbol Sala",
    description:
      "Sitio web dedicado al fútbol y el fútbol sala con información y contenido multimedia.",
    previewImage: "/images/proyectos/brayan-stiven-preview.png",
    projectUrl: "/proyectos/brayan-stiven/futbol.html",
    tags: ["HTML", "CSS", "Deporte"],
  },
  {
    id: 3,
    name: "Ferggy",
    grade: "Grado 8°",
    projectTitle: "Mundo del Voleibol",
    description:
      "Página informativa sobre el voleibol: reglas, jugadores y torneos.",
    previewImage: "/images/proyectos/ferggy-preview.png",
    projectUrl: "/proyectos/ferggy/pagina.html",
    tags: ["HTML", "CSS", "Deporte"],
  },
  {
    id: 4,
    name: "Juliana",
    grade: "Grado 11°",
    projectTitle: "Fútbol: Estadios, Alineaciones y Mercado",
    description:
      "Portal futbolístico con secciones de estadios icónicos, alineaciones tácticas y mercado de fichajes.",
    previewImage: "/images/proyectos/juliana-preview.png",
    projectUrl: "/proyectos/juliana/pagina.html",
    tags: ["HTML", "CSS", "Fútbol"],
  },
  {
    id: 5,
    name: "Karen",
    grade: "Grado 11°",
    projectTitle: "Moda y Estilo",
    description:
      "Sitio de moda y tendencias con catálogo de productos, servicios y sección de contacto.",
    previewImage: "/images/proyectos/karen-preview.png",
    projectUrl: "/proyectos/karen/index.html",
    tags: ["HTML", "CSS", "Moda"],
  },
  {
    id: 6,
    name: "Victor",
    grade: "Grado 11°",
    projectTitle: "Tienda de Equipamiento Deportivo",
    description:
      "E-commerce de equipamiento deportivo: balones, calzado, uniformes y canchas.",
    previewImage: "/images/proyectos/victor-preview.png",
    projectUrl: "/proyectos/victor/index.html",
    tags: ["HTML", "CSS", "Deporte"],
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "/images/galeria/clase-01.png",
    alt: "Estudiantes en clase de programación",
    caption: "Clase de programación web",
  },
  {
    id: 2,
    src: "/images/galeria/sala-sistemas.png",
    alt: "Sala de sistemas del colegio",
    caption: "Sala de sistemas IE Ramon Messa",
  },
  {
    id: 3,
    src: "/images/galeria/estudiantes-programando.png",
    alt: "Estudiantes trabajando en sus proyectos",
    caption: "Estudiantes desarrollando sus páginas web",
  },
  {
    id: 4,
    src: "/images/galeria/estudiantes-aprendiendo-scratch.png",
    alt: "Estudiantes aprendiendo SCRATCH",
    caption: "Aprendiendo SCRATCH",
  },
  {
    id: 5,
    src: "https://placehold.co/800x600/065f46/ffffff?text=Presentacion+Proyectos",
    alt: "Presentación de proyectos",
    caption: "Presentación de proyectos finales",
  }
];
