const juniorTopics = [
  {
    icon: "🧠",
    title: "Pensamiento Computacional",
    description:
      "Desarrollan la capacidad de descomponer problemas complejos y encontrar soluciones paso a paso, como lo haría un computador.",
  },
  {
    icon: "🔢",
    title: "Lógica de Programación",
    description:
      "Aprenden conceptos fundamentales como secuencias, bucles, condicionales y variables de forma visual e intuitiva.",
  },
  {
    icon: "🎮",
    title: "Scratch",
    description:
      "Crean animaciones, historias y juegos usando bloques de código visual, haciendo la programación accesible y divertida.",
  },
  {
    icon: "🌐",
    title: "HTML Básico",
    description:
      "Primeros pasos en la web: aprenden a estructurar información con etiquetas HTML simples y entienden cómo funciona internet.",
  },
];

const seniorTopics = [
  {
    icon: "📄",
    title: "Estructura HTML",
    description:
      "Dominan la semántica de HTML5: encabezados, párrafos, listas, enlaces, imágenes y formularios para construir páginas completas.",
  },
  {
    icon: "🎨",
    title: "Estilos con CSS",
    description:
      "Aprenden a dar vida a sus páginas con colores, fuentes, márgenes, bordes y efectos visuales usando hojas de estilo en cascada.",
  },
  {
    icon: "📐",
    title: "Diseño Web",
    description:
      "Principios de composición visual, jerarquía tipográfica, paletas de color y diseño responsivo para crear páginas atractivas.",
  },
  {
    icon: "🚀",
    title: "Proyecto Personal",
    description:
      "Cada estudiante diseña y publica su propia página web con una temática libre, aplicando todo lo aprendido durante el año.",
  },
];

function TopicCard({
  icon,
  title,
  description,
  variant,
}: {
  icon: string;
  title: string;
  description: string;
  variant: "primary" | "secondary";
}) {
  const borderColor =
    variant === "primary" ? "border-primary-200 hover:border-primary-400" : "border-secondary-200 hover:border-secondary-400";
  const iconBg =
    variant === "primary" ? "bg-primary-100" : "bg-secondary-100";

  return (
    <div
      className={`bg-white rounded-2xl border-2 ${borderColor} p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
    >
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
        {icon}
      </div>
      <h4 className="font-bold text-gray-900 mb-2 text-sm">{title}</h4>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function LearningSection() {
  return (
    <section id="learning" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary-100 text-secondary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Qué están aprendiendo?
          </span>
          <h2 className="section-title">
            Currículo adaptado a cada nivel educativo
          </h2>
          <p className="section-subtitle mx-auto">
            El contenido se diseña progresivamente para que cada estudiante avance
            según sus capacidades y grado escolar.
          </p>
        </div>

        {/* Two level blocks */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Junior block — 6° y 7° */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Header band */}
            <div className="bg-gradient-to-r from-primary-800 to-primary-600 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-3xl">
                  🌱
                </div>
                <div>
                  <p className="text-primary-200 text-xs font-semibold uppercase tracking-wider mb-1">
                    Nivel inicial
                  </p>
                  <h3 className="text-xl font-black text-white">Grados 6° y 7°</h3>
                  <p className="text-primary-200 text-sm">
                    Pensamiento computacional y lógica de programación
                  </p>
                </div>
              </div>
            </div>

            {/* Topics grid */}
            <div className="p-6 grid sm:grid-cols-2 gap-4">
              {juniorTopics.map((topic) => (
                <TopicCard key={topic.title} {...topic} variant="primary" />
              ))}
            </div>

            {/* Footer note */}
            <div className="mx-6 mb-6 bg-primary-50 border border-primary-100 rounded-xl px-5 py-4">
              <p className="text-xs text-primary-700 font-medium">
                💡 Los estudiantes de estos grados desarrollan sus primeras habilidades
                computacionales de forma lúdica y progresiva.
              </p>
            </div>
          </div>

          {/* Senior block — 8° a 11° */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Header band */}
            <div className="bg-gradient-to-r from-secondary-700 to-secondary-500 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-3xl">
                  💻
                </div>
                <div>
                  <p className="text-secondary-200 text-xs font-semibold uppercase tracking-wider mb-1">
                    Nivel avanzado
                  </p>
                  <h3 className="text-xl font-black text-white">Grados 8° a 11°</h3>
                  <p className="text-secondary-200 text-sm">
                    Desarrollo web con HTML y CSS
                  </p>
                </div>
              </div>
            </div>

            {/* Topics grid */}
            <div className="p-6 grid sm:grid-cols-2 gap-4">
              {seniorTopics.map((topic) => (
                <TopicCard key={topic.title} {...topic} variant="secondary" />
              ))}
            </div>

            {/* Footer note */}
            <div className="mx-6 mb-6 bg-secondary-50 border border-secondary-100 rounded-xl px-5 py-4">
              <p className="text-xs text-secondary-700 font-medium">
                🚀 Al finalizar, cada estudiante publica su propia página web en este
                portal institucional.
              </p>
            </div>
          </div>
        </div>

        {/* Learning path */}
        <div className="mt-12 bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-8">
            Ruta de aprendizaje progresiva
          </h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative">
            <div className="hidden sm:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400" />
            {[
              { grade: "6°–7°", skill: "Pensamiento lógico", color: "bg-primary-700", step: "01" },
              { grade: "8°–9°", skill: "HTML & estructura", color: "bg-primary-500", step: "02" },
              { grade: "10°", skill: "CSS & diseño", color: "bg-secondary-600", step: "03" },
              { grade: "11°", skill: "Proyecto publicado", color: "bg-secondary-500", step: "04" },
            ].map((item) => (
              <div key={item.grade} className="flex flex-row sm:flex-col items-center gap-3 sm:gap-0 relative z-10">
                <div
                  className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-black text-sm shadow-md sm:mb-4`}
                >
                  {item.step}
                </div>
                <div className="sm:text-center">
                  <p className="font-bold text-gray-900 text-sm">Grado {item.grade}</p>
                  <p className="text-xs text-gray-500">{item.skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
