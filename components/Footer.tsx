"use client";

import { useState } from "react";

function FooterLogo() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center shrink-0">
        <span className="text-white font-black text-sm">RML</span>
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shrink-0 flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logos/logo-ie-ramon.png"
        alt="Logo IE Ramon Messa"
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

const footerLinks = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Sobre el proyecto", href: "#about" },
      { label: "¿Qué aprenden?", href: "#learning" },
      { label: "Galería", href: "#gallery" },
      { label: "Proyectos", href: "#projects" },
    ],
  },
  {
    title: "Instituciones",
    links: [
      { label: "IE Ramon Messa", href: "https://ieramonmessa.edu.co" },
      { label: "Universidad Autónoma de Manizales", href: "https://www.autonoma.edu.co/" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      {/* Main footer */}
      <div className="section-container py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <FooterLogo />
              <div>
                <p className="text-sm font-bold text-white">Proyecto Web Educativo</p>
                <p className="text-xs text-primary-400">IE Ramon Messa</p>
              </div>
            </div>
            <p className="text-sm text-primary-300 leading-relaxed max-w-sm mb-6">
              Una iniciativa que transforma la educación tecnológica en Colombia,
              enseñando a los jóvenes del colegio Ramon Messa a crear
              sus propias páginas web.
            </p>
            {/* Institutional message */}
            <div className="bg-primary-900/60 border border-primary-800 rounded-xl p-4">
              <p className="text-xs text-primary-300 italic leading-relaxed">
                "La tecnología no es el futuro — es el presente. Y nuestros
                estudiantes ya están construyendo ese presente."
              </p>
              <p className="text-xs text-primary-500 mt-2">
                — Proyecto Web RML · {currentYear}
              </p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary-900">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-500 text-center md:text-left">
            © {currentYear} Proyecto Web Educativo · IE Ramon Messa ·
            Universidad Autónoma de Manizales. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-primary-500">Desarrollado con</span>
            <div className="flex items-center gap-2">
              <span className="bg-primary-800 text-primary-300 text-xs px-2 py-1 rounded font-mono">
                Next.js
              </span>
              <span className="bg-primary-800 text-primary-300 text-xs px-2 py-1 rounded font-mono">
                React
              </span>
              <span className="bg-primary-800 text-primary-300 text-xs px-2 py-1 rounded font-mono">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
