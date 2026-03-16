"use client";

import { useState } from "react";

function InstitutionLogo({
  src,
  alt,
  fallbackLabel,
  fallbackSub,
  colorClass,
}: {
  src: string;
  alt: string;
  fallbackLabel: string;
  fallbackSub: string;
  colorClass: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`w-28 h-28 mx-auto mb-6 rounded-2xl flex flex-col items-center justify-center shadow-lg ${colorClass}`}
      >
        <span className="text-white font-black text-xl leading-none">{fallbackLabel}</span>
        <span className="text-white/60 font-bold text-xs leading-none mt-1">{fallbackSub}</span>
      </div>
    );
  }

  /* Usamos <img> nativo para que el 404 sea silencioso en el navegador
     y no pase por el optimizador de imágenes de Next.js */
  return (
    <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Instituciones participantes
          </span>
          <h2 className="section-title">Aliados en esta iniciativa</h2>
          <p className="section-subtitle mx-auto">
            Esta iniciativa es posible gracias a la colaboración entre la institución
            educativa y la universidad.
          </p>
        </div>

        {/* Partners cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* IE Ramon Messa */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm text-center group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            {/*
              Logo: coloca el archivo en public/images/logos/logo-ie-ramon.png
              Si no existe el archivo, se muestra el placeholder automáticamente.
            */}
            <InstitutionLogo
              src="/images/logos/logo-ie-ramon.png"
              alt="Logo IE Ramon Messa"
              fallbackLabel="IE"
              fallbackSub="Ramon Messa"
              colorClass="bg-gradient-to-br from-primary-700 to-primary-900"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              IE Ramon Messa
            </h3>
            <p className="text-sm text-primary-600 font-medium mb-4">Institución Educativa</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Institución educativa pública comprometida con la formación integral de
              sus estudiantes mediante proyectos innovadores que fortalecen las
              competencias del siglo XXI.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2 justify-center">
              <span className="bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1.5 rounded-full border border-primary-100">
                Educación Pública
              </span>
              <span className="bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1.5 rounded-full border border-primary-100">
                Caldas, Colombia
              </span>
            </div>
          </div>

          {/* Universidad Autónoma de Manizales */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm text-center group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            {/*
              Logo: coloca el archivo en public/images/logos/logo-uam.png
              Si no existe el archivo, se muestra el placeholder automáticamente.
            */}
            <InstitutionLogo
              src="/images/logos/logo-uam.png"
              alt="Logo Universidad Autónoma de Manizales"
              fallbackLabel="UAM"
              fallbackSub="Manizales"
              colorClass="bg-gradient-to-br from-secondary-600 to-secondary-800"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Universidad Autónoma de Manizales
            </h3>
            <p className="text-sm text-secondary-600 font-medium mb-4">Universidad Aliada</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Universidad de alta calidad académica que promueve la responsabilidad
              social de sus estudiantes mediante prácticas sociales que impactan
              positivamente a la comunidad.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2 justify-center">
              <span className="bg-secondary-50 text-secondary-700 text-xs font-medium px-3 py-1.5 rounded-full border border-secondary-100">
                Ingeniería de Sistemas
              </span>
              <span className="bg-secondary-50 text-secondary-700 text-xs font-medium px-3 py-1.5 rounded-full border border-secondary-100">
                Ingeniería Electrónica
              </span>
            </div>
          </div>
        </div>

        {/* Collaboration note */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl border border-gray-200 px-8 py-5 shadow-sm">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              Esta alianza demuestra que cuando las instituciones educativas y las
              universidades trabajan juntas,{" "}
              <span className="font-semibold text-gray-900">todos los estudiantes ganan.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
