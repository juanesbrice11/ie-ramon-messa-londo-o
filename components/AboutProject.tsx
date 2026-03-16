const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "bg-primary-100 text-primary-700",
    title: "¿Qué es el proyecto?",
    description:
      "Una iniciativa educativa que enseña programación web y pensamiento computacional a estudiantes de básica secundaria y media, desde grado 6° hasta 11°.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "bg-secondary-100 text-secondary-700",
    title: "¿Quiénes lo lideran?",
    description:
      "Dos practicantes universitarios de la Universidad Autónoma de Manizales: uno de Ingeniería de Sistemas y otro de Ingeniería Electrónica, bajo la modalidad de práctica social.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "bg-accent-400/20 text-accent-600",
    title: "Alianza institucional",
    description:
      "La colaboración entre la IE Ramon Messa y la Universidad Autónoma de Manizales busca llevar la educación tecnológica de calidad a los jóvenes caldenses.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "bg-purple-100 text-purple-700",
    title: "Objetivo educativo",
    description:
      "Desarrollar habilidades digitales, pensamiento computacional y creatividad tecnológica, preparando a los estudiantes para los retos del siglo XXI.",
  },
];

export default function AboutProject() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Sobre la iniciativa
          </span>
          <h2 className="section-title">
            Un proyecto que transforma<br />la educación tecnológica
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Más que una clase de informática, es una experiencia educativa que conecta
            a los estudiantes con las herramientas del mundo digital real.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="relative bg-gradient-to-r from-primary-800 to-primary-600 rounded-3xl overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-400 rounded-full" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Una experiencia educativa que va más allá del aula
              </h3>
              <p className="text-white/75 leading-relaxed">
                Los estudiantes no solo aprenden a escribir código — descubren que
                pueden crear, innovar y resolver problemas reales usando la tecnología
                como herramienta de expresión y transformación.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "6", label: "Grados involucrados" },
                { value: "2", label: "Practicantes universitarios" },
                { value: "HTML + CSS", label: "Tecnologías enseñadas" },
                { value: "Scratch", label: "Para pensamiento lógico" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 text-center">
                  <p className="text-xl font-black text-white">{item.value}</p>
                  <p className="text-xs text-white/60 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
