const impactItems = [
  {
    emoji: "🌍",
    title: "Habilidades para el siglo XXI",
    description:
      "La programación web es una de las competencias más demandadas en el mercado laboral actual. Aprender a crear páginas web desde el colegio le da a los estudiantes una ventaja enorme frente al futuro.",
    highlight: "El 65% de los empleos futuros aún no existen",
    highlightColor: "bg-primary-50 border-primary-200 text-primary-700",
  },
  {
    emoji: "🔬",
    title: "Motivación hacia las carreras STEM",
    description:
      "Al experimentar con código real y ver sus creaciones publicadas en internet, los estudiantes descubren su interés por las ciencias, la tecnología, la ingeniería y las matemáticas.",
    highlight: "Impacto directo en la orientación vocacional",
    highlightColor: "bg-secondary-50 border-secondary-200 text-secondary-700",
  },
  {
    emoji: "💡",
    title: "Pensamiento creativo y resolución de problemas",
    description:
      "Programar no es solo escribir código: es aprender a pensar de forma estructurada, a descomponer problemas y a buscar soluciones creativas. Habilidades transferibles a cualquier área de la vida.",
    highlight: "Pensamiento computacional aplicado a todo",
    highlightColor: "bg-accent-400/10 border-accent-400/30 text-accent-600",
  },
  {
    emoji: "🤝",
    title: "Equidad digital en Colombia",
    description:
      "Llevar la educación tecnológica a instituciones públicas como la IE Ramon Messa es un acto de equidad. Todos los jóvenes merecen acceso a las herramientas del mundo digital.",
    highlight: "Educación tecnológica para todos",
    highlightColor: "bg-purple-50 border-purple-200 text-purple-700",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary-100 text-secondary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Impacto educativo
          </span>
          <h2 className="section-title">
            ¿Por qué es importante enseñar<br />programación desde el colegio?
          </h2>
          <p className="section-subtitle mx-auto">
            Este proyecto no es solo una clase más. Es una inversión en el futuro de
            cada estudiante y en el desarrollo tecnológico del país.
          </p>
        </div>

        {/* Impact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {impactItems.map((item) => (
            <div key={item.title} className="card p-7 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl mb-5">{item.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{item.description}</p>
              <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border ${item.highlightColor}`}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary-400 rounded-full translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="text-5xl mb-6 opacity-40 font-serif text-white select-none">"</div>
            <blockquote className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-6">
              Enseñar a un niño a programar no es enseñarle solo tecnología.
              Es enseñarle a pensar, a crear y a creer que puede construir
              el mundo que imagina.
            </blockquote>
            <p className="text-white/60 text-sm font-medium">
              — Proyecto Web Educativo · IE Ramon Messa
            </p>
          </div>
        </div>

        {/* Numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "6", unit: "grados", label: "Con acceso a educación tecnológica" },
            { number: "1", unit: "universidad", label: "Aliada en el proceso" },
            { number: "100%", unit: "gratis", label: "Para todos los estudiantes" },
            { number: "∞", unit: "posibilidades", label: "Para quienes aprenden a programar" },
          ].map((item) => (
            <div key={item.label} className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-3xl font-black text-primary-700">
                {item.number}
                <span className="text-sm font-semibold text-gray-400 ml-1">{item.unit}</span>
              </p>
              <p className="text-xs text-gray-500 mt-2 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
