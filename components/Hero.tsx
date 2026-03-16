export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-800 to-primary-700"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-500 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Práctica Social Universitaria · UAM × IE RML
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
              Formando los futuros{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-accent-400">
                creadores
              </span>{" "}
              de tecnología
            </h1>

            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Iniciativa de programación web desarrollada en la Institución
              Educativa Ramon Messa en colaboración con la Universidad
              Autónoma de Manizales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-primary-50 transition-all duration-200 text-base"
              >
                Conocer el proyecto
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 text-base"
              >
                Ver proyectos
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-10">
              {[
                { number: "6°–11°", label: "Grados participantes" },
                { number: "1", label: "Universidad aliada" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-black text-white">{stat.number}</p>
                  <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration panel */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
                {/* Browser mockup */}
                <div className="bg-primary-950/60 rounded-2xl overflow-hidden border border-white/10">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-primary-950/80 border-b border-white/10">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="flex-1 mx-3 bg-white/10 rounded-md px-3 py-1">
                      <span className="text-white/50 text-xs font-mono">
                        mi-proyecto.ierml.edu.co
                      </span>
                    </div>
                  </div>
                  {/* Code preview */}
                  <div className="p-5 font-mono text-xs leading-relaxed">
                    <p className="text-secondary-300">&lt;<span className="text-accent-400">html</span>&gt;</p>
                    <p className="text-white/70 ml-4">&lt;<span className="text-secondary-300">head</span>&gt;</p>
                    <p className="text-white/50 ml-8">&lt;<span className="text-secondary-300">title</span>&gt;<span className="text-white/80">Mi Proyecto Web</span>&lt;/<span className="text-secondary-300">title</span>&gt;</p>
                    <p className="text-white/70 ml-4">&lt;/<span className="text-secondary-300">head</span>&gt;</p>
                    <p className="text-white/70 ml-4">&lt;<span className="text-secondary-300">body</span>&gt;</p>
                    <p className="text-white/50 ml-8">&lt;<span className="text-secondary-300">h1</span>&gt;</p>
                    <p className="text-accent-300 ml-12">¡Hola Mundo! 👋</p>
                    <p className="text-white/50 ml-8">&lt;/<span className="text-secondary-300">h1</span>&gt;</p>
                    <p className="text-white/70 ml-4">&lt;/<span className="text-secondary-300">body</span>&gt;</p>
                    <p className="text-secondary-300">&lt;/<span className="text-accent-400">html</span>&gt;</p>
                  </div>
                </div>

                {/* Student badge */}
                <div className="mt-5 flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-primary-500 flex items-center justify-center text-white font-bold text-sm">
                    VG
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Valeria Gómez</p>
                    <p className="text-white/50 text-xs">Grado 9° · Proyecto publicado ✓</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-secondary-500/20 border border-secondary-400/30 text-secondary-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      HTML + CSS
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -top-6 -right-6 bg-accent-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg rotate-3">
                ¡Scratch! 🎮
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg -rotate-2">
                HTML & CSS 💻
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V20C1200 70 900 0 600 40C300 80 120 10 0 30V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
