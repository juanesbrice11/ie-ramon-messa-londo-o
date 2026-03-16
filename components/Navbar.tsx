"use client";

import { useState, useEffect } from "react";

function NavLogo() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-9 h-9 rounded-lg bg-primary-700 flex items-center justify-center shadow shrink-0">
        <span className="text-white font-black text-sm">RML</span>
      </div>
    );
  }

  return (
    <div className="w-9 h-9 rounded-lg overflow-hidden bg-white shadow shrink-0 flex items-center justify-center">
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

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre el proyecto", href: "#about" },
  { label: "Aprendizajes", href: "#learning" },
  { label: "Galería", href: "#gallery" },
  { label: "Proyectos", href: "#projects" },
  { label: "Instituciones", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <NavLogo />
          <div className="hidden sm:block">
            <p
              className={`text-xs font-semibold leading-tight transition-colors ${
                scrolled ? "text-primary-900" : "text-white"
              }`}
            >
              IE Ramon Messa
            </p>
            <p
              className={`text-xs transition-colors ${
                scrolled ? "text-gray-500" : "text-primary-200"
              }`}
            >
              Proyecto Web Educativo
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <a
          href="#projects"
          className={`hidden lg:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 ${
            scrolled
              ? "bg-primary-700 text-white hover:bg-primary-800 shadow-md"
              : "bg-white text-primary-700 hover:bg-primary-50"
          }`}
        >
          Ver proyectos
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn-primary justify-center text-sm"
            >
              Ver proyectos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
