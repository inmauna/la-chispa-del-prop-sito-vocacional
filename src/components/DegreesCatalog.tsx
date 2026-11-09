import React, { useState } from 'react';
import { UNED_DEGREES } from '../data/unedData';
import { UnedDegree } from '../types';
import { BookOpen, GraduationCap, Clock, CheckCircle2, ChevronRight, X, Sparkles, Building, ExternalLink } from 'lucide-react';

interface DegreesCatalogProps {
  selectedDegreeId?: string | null;
  onSelectDegree: (degreeId: string) => void;
  onOpenCenters: () => void;
}

export const DegreesCatalog: React.FC<DegreesCatalogProps> = ({
  selectedDegreeId,
  onSelectDegree,
  onOpenCenters
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalDegree, setActiveModalDegree] = useState<UnedDegree | null>(
    selectedDegreeId ? UNED_DEGREES.find((d) => d.id === selectedDegreeId) || null : null
  );

  const filteredDegrees = UNED_DEGREES.filter((deg) => {
    if (filter === 'all') return true;
    if (filter === 'filosofia') return deg.id === 'filosofia';
    if (filter === 'arte') return deg.id === 'historia-arte';
    if (filter === 'historia') return deg.id === 'geografia-historia';
    if (filter === 'lengua') return deg.id === 'lengua-literatura' || deg.id === 'estudios-ingleses';
    if (filter === 'antropologia') return deg.id === 'antropologia';
    return true;
  });

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-10">
        <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
          Oferta Académica Oficial · UNED Humanidades
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-3 [text-wrap:balance]">
          Las Sendas del Saber: Seis Grados Oficiales sin Distancias
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Estudia a tu propio ritmo con el respaldo del mayor claustro universitario de España. Títulos de Grado adaptados al Espacio Europeo de Educación Superior (EEES), con 240 créditos ECTS y acceso directo a másteres y doctorado.
        </p>
      </div>

      {/* Atmospheric Library Spotlight Banner */}
      <div className="relative rounded-lg overflow-hidden border border-stone-300 mb-10 bg-stone-100 shadow-md">
        <img
          src="/src/assets/images/uned_humanities_library_1794199884565.jpg"
          alt="Biblioteca y sala de lectura de humanidades de la UNED"
          className="w-full h-64 sm:h-80 object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/50 to-transparent flex items-center p-8 sm:p-12">
          <div className="max-w-xl text-stone-100">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-2 block">
              Metodología UNED
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Estudiar a distancia, vivir la universidad en comunidad
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              Disfruta de tutorías presenciales en tu Centro Asociado más cercano o conéctate telemáticamente a través de las plataformas docentes oficiales. Flexibilidad total para compaginar estudios con tu vida laboral o familiar.
            </p>
            <button
              onClick={onOpenCenters}
              className="text-xs font-semibold text-amber-300 hover:text-white underline underline-offset-4 cursor-pointer inline-flex items-center gap-1.5"
            >
              <Building className="w-3.5 h-3.5" />
              <span>Ver la red de 61 Centros Asociados</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Filter Control */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 border-b border-stone-200">
        {[
          { id: 'all', label: 'Todos los Grados (6)' },
          { id: 'filosofia', label: 'Filosofía' },
          { id: 'arte', label: 'Historia del Arte' },
          { id: 'historia', label: 'Geografía e Historia' },
          { id: 'lengua', label: 'Filología y Estudios Ingleses' },
          { id: 'antropologia', label: 'Antropología Social' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              filter === tab.id
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Degrees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDegrees.map((degree) => (
          <div
            key={degree.id}
            className="bg-white border border-stone-200 rounded-lg p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-3 pb-2 border-b border-stone-100">
                <span className="font-medium text-amber-900">{degree.faculty}</span>
                <span className="font-mono">{degree.duration}</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                {degree.title}
              </h3>

              <p className="text-xs italic font-serif text-amber-950 mb-3 bg-amber-50/70 p-2.5 rounded border border-amber-100">
                "{degree.curatorialQuote}" — <span className="not-italic font-sans text-stone-500 text-[11px]">{degree.authorQuote}</span>
              </p>

              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {degree.description}
              </p>

              {/* Competencies Checklist */}
              <div className="mb-5">
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-2">
                  Competencias Clave
                </div>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {degree.competencies.slice(0, 3).map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[11px] text-stone-500">
                Ideal para: <span className="text-stone-700 font-medium">{degree.idealFor.slice(0, 35)}...</span>
              </span>
              <button
                onClick={() => setActiveModalDegree(degree)}
                className="flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-amber-900 underline underline-offset-2 cursor-pointer shrink-0"
              >
                <span>Guía Docente</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Degree Detail Modal */}
      {activeModalDegree && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalDegree(null)}
              className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-stone-900 rounded-md transition-colors cursor-pointer"
              aria-label="Cerrar guía docente"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-6 pb-4 border-b border-stone-200">
              <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-1">
                {activeModalDegree.faculty} · Título Oficial
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2">
                {activeModalDegree.title}
              </h3>
              <p className="text-sm text-stone-600">
                {activeModalDegree.tagline}
              </p>
            </div>

            {/* Quote */}
            <div className="bg-[#FAF7F2] p-4 rounded-md border border-stone-200 mb-6">
              <p className="font-serif italic text-stone-900 text-sm">
                "{activeModalDegree.curatorialQuote}"
              </p>
              <span className="text-xs text-stone-500 mt-1 block">
                — {activeModalDegree.authorQuote}
              </span>
            </div>

            {/* Featured Subjects */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-stone-700 font-bold mb-3">
                Muestra Representativa del Plan de Estudios (240 ECTS)
              </h4>
              <div className="space-y-2">
                {activeModalDegree.featuredSubjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-stone-50 rounded border border-stone-100 text-xs"
                  >
                    <div>
                      <span className="font-medium text-stone-900 block">{sub.name}</span>
                      <span className="text-[11px] text-stone-500">Curso {sub.year}º · Carácter: {sub.type}</span>
                    </div>
                    <span className="font-mono font-semibold text-stone-700 bg-white px-2 py-1 rounded border border-stone-200">
                      {sub.credits} ECTS
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-stone-700 font-bold mb-2">
                Salidas Profesionales e Impacto Real
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {activeModalDegree.careerOutcomes.map((out, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-800 mt-1.5 shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Distance Learning Details */}
            <div className="bg-stone-50 p-4 rounded-md border border-stone-200 text-xs text-stone-600 mb-6 leading-relaxed">
              <span className="font-semibold text-stone-900 block mb-1">
                ¿Cómo se estudia este Grado en la UNED?
              </span>
              Dispones de guías de estudio elaboradas por los equipos docentes de la sede central, videoclases y materiales multimedia, foros de debate moderados por profesores y tutorías semanales (presenciales y en streaming) en tu Centro Asociado.
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={() => {
                  setActiveModalDegree(null);
                  onOpenCenters();
                }}
                className="text-xs font-medium text-stone-700 hover:text-stone-900 underline underline-offset-2 cursor-pointer"
              >
                Localizar centro para tutorías
              </button>

              <button
                onClick={() => {
                  alert(`Has guardado el ${activeModalDegree.title} en tu itinerario de interés formativo.`);
                  setActiveModalDegree(null);
                }}
                className="px-4 py-2 bg-stone-900 hover:bg-amber-950 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                Guardar en Mi Itinerario de Propósito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
