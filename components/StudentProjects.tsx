import Image from "next/image";
import { studentProjects } from "@/lib/data";

function ProjectCard({
  name,
  grade,
  projectTitle,
  description,
  previewImage,
  projectUrl,
  tags,
}: (typeof studentProjects)[0]) {
  return (
    <div className="card group flex flex-col">
      {/* Preview image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={previewImage}
          alt={`Vista previa del proyecto de ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-800 font-bold text-sm px-5 py-2.5 rounded-lg shadow-lg hover:bg-primary-50 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Ver proyecto
          </a>
        </div>
        {/* Grade badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            {grade}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Student info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
            {name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{grade}</p>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2">{projectTitle}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action button */}
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 w-full bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold text-sm py-2.5 rounded-lg transition-colors border border-primary-200"
        >
          Ver proyecto
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function StudentProjects() {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Proyectos estudiantiles
          </span>
          <h2 className="section-title">
            Páginas web creadas por nuestros estudiantes
          </h2>
          <p className="section-subtitle mx-auto">
            Cada proyecto representa meses de aprendizaje, esfuerzo y creatividad.
            Estos son los futuros desarrolladores web de Colombia.
          </p>
        </div>

        {/* Filter hint */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <p className="text-sm text-gray-500">
            Mostrando{" "}
            <span className="font-semibold text-gray-800">{studentProjects.length}</span>{" "}
            proyectos publicados
          </p>
          <div className="flex flex-wrap gap-2">
            {["Todos", "Grado 8°", "Grado 11°"].map(
              (filter) => (
                <button
                  key={filter}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-colors ${
                    filter === "Todos"
                      ? "bg-primary-700 text-white border-primary-700"
                      : "bg-white text-gray-600 border-gray-200 hover:border-primary-300 hover:text-primary-700"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
