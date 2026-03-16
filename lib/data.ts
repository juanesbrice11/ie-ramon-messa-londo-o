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
    name: "Valeria Gómez",
    grade: "Grado 9°",
    projectTitle: "Mi Ciudad, Manizales",
    description:
      "Página web dedicada a mostrar los lugares turísticos y culturales más importantes de Manizales.",
    previewImage: "https://placehold.co/600x400/1e3487/ffffff?text=Mi+Ciudad+Manizales",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Turismo"],
  },
  {
    id: 2,
    name: "Santiago Ríos",
    grade: "Grado 10°",
    projectTitle: "Recetas de mi Abuela",
    description:
      "Portal gastronómico con recetas tradicionales colombianas transmitidas de generación en generación.",
    previewImage: "https://placehold.co/600x400/047857/ffffff?text=Recetas+Colombianas",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Gastronomía"],
  },
  {
    id: 3,
    name: "Daniela Castillo",
    grade: "Grado 11°",
    projectTitle: "Naturaleza Colombiana",
    description:
      "Página informativa sobre la biodiversidad y los ecosistemas más representativos de Colombia.",
    previewImage: "https://placehold.co/600x400/065f46/ffffff?text=Naturaleza+Colombia",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Naturaleza"],
  },
  {
    id: 4,
    name: "Andrés Mora",
    grade: "Grado 8°",
    projectTitle: "Fútbol Colombiano",
    description:
      "Sitio web dedicado a la historia y los logros del fútbol colombiano a nivel nacional e internacional.",
    previewImage: "https://placehold.co/600x400/d97706/ffffff?text=Futbol+Colombia",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Deporte"],
  },
  {
    id: 5,
    name: "Luisa Fernanda Pérez",
    grade: "Grado 9°",
    projectTitle: "Arte y Cultura Caldense",
    description:
      "Espacio virtual para explorar las expresiones artísticas y culturales del departamento de Caldas.",
    previewImage: "https://placehold.co/600x400/1e3487/ffffff?text=Arte+Caldas",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Arte"],
  },
  {
    id: 6,
    name: "Mateo Vargas",
    grade: "Grado 10°",
    projectTitle: "Videojuegos Indie",
    description:
      "Blog personal sobre los mejores videojuegos independientes y las tendencias del gaming actual.",
    previewImage: "https://placehold.co/600x400/5577d3/ffffff?text=Videojuegos+Indie",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Gaming"],
  },
  {
    id: 7,
    name: "Juliana Torres",
    grade: "Grado 11°",
    projectTitle: "Cuidado del Medio Ambiente",
    description:
      "Iniciativa digital para concientizar sobre el cuidado del medio ambiente y prácticas sostenibles.",
    previewImage: "https://placehold.co/600x400/059669/ffffff?text=Medio+Ambiente",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Sostenibilidad"],
  },
  {
    id: 8,
    name: "Sebastián López",
    grade: "Grado 8°",
    projectTitle: "Historia de Colombia",
    description:
      "Recorrido visual e interactivo por los momentos más importantes de la historia de Colombia.",
    previewImage: "https://placehold.co/600x400/192970/ffffff?text=Historia+Colombia",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Historia"],
  },
  {
    id: 9,
    name: "Isabella Herrera",
    grade: "Grado 10°",
    projectTitle: "Música Tradicional",
    description:
      "Portal dedicado a los ritmos y géneros musicales tradicionales de las regiones colombianas.",
    previewImage: "https://placehold.co/600x400/7e9ae0/ffffff?text=Musica+Tradicional",
    projectUrl: "#",
    tags: ["HTML", "CSS", "Música"],
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
