import { galleryImages } from "@/lib/data";
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-400/20 text-accent-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Galería del proceso
          </span>
          <h2 className="section-title">El aprendizaje en acción</h2>
          <p className="section-subtitle mx-auto">
            Momentos reales de las clases, talleres y sesiones de trabajo donde los
            estudiantes construyen sus habilidades tecnológicas.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer ${
                index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              {/* Aspect ratio wrapper */}
              <div className={`relative ${index === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm">{image.caption}</p>
                </div>
                {/* Always-visible caption label */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                    {image.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
