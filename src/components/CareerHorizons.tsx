import React, { useState } from 'react';
import { CAREER_HORIZONS } from '../data/unedData';
import { CareerPath } from '../types';
import { Compass, Briefcase, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface CareerHorizonsProps {
  onSelectDegree: (degreeId: string) => void;
  onStartCompass: () => void;
}

export const CareerHorizons: React.FC<CareerHorizonsProps> = ({ onSelectDegree, onStartCompass }) => {
  const [selectedField, setSelectedField] = useState<string>('all');

  const filteredPaths = CAREER_HORIZONS.filter((path) => {
    if (selectedField === 'all') return true;
    if (selectedField === 'tech') return path.id === 'etica-ia' || path.id === 'pln-humanidades-digitales';
    if (selectedField === 'culture') return path.id === 'gestion-patrimonio-museologia' || path.id === 'edicion-critica-periodismo-pensamiento';
    if (selectedField === 'social') return path.id === 'analisis-geopolitico-prospectiva' || path.id === 'mediacion-intercultural-cooperacion';
    return true;
  });

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-10">
        <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
          Horizontes Laborales & Empleabilidad · UNED Humanidades
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-3 [text-wrap:balance]">
          Las Humanidades en el Centro de los Desafíos del Siglo XXI
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          En un mercado laboral automatizado, las habilidades distintivas de las humanidades —el pensamiento crítico, la hermenéutica, la ética aplicada y la comunicación de alta precisión— son las más resistentes a la obsolescencia y las más demandadas en puestos estratégicos.
        </p>
      </div>

      {/* Hero Visual Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm mb-12">
        <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Humanidades Aplicadas & Nuevos Perfiles</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3">
              De los archivos clásicos al entrenamiento de modelos de lenguaje
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              El egresado de Humanidades de la UNED combina la solidez teórica de la tradición universitaria con la capacidad de liderar en entornos interdisciplinares: comités bioéticos hospitalarios, curaduría de museos globales, auditoría de sesgos en inteligencia artificial y diplomacia cultural.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs text-stone-600">
            <div>
              <div className="text-xl font-serif font-bold text-stone-900">+42%</div>
              <div>Demanda de humanistas en equipos de IA y bioética en la UE</div>
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-stone-900">100%</div>
              <div>Capacidad crítica irremplazable por algoritmos generativos</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-64 lg:h-full min-h-[320px]">
          <img
            src="/src/assets/images/humanities_modern_impact_1794199885447.jpg"
            alt="Investigadora en archivo moderno trabajando en humanidades digitales"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent lg:hidden" />
          <div className="absolute bottom-3 right-4 text-[11px] font-serif italic text-stone-200">
            Laboratorio de Humanidades Digitales y Archivo Histórico
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 border-b border-stone-200">
        {[
          { id: 'all', label: 'Todos los Sectores' },
          { id: 'tech', label: 'Tecnología, IA & Lingüística' },
          { id: 'culture', label: 'Museos, Patrimonio & Edición' },
          { id: 'social', label: 'Diplomacia, Geopolítica & Mediación' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedField(tab.id)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedField === tab.id
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Pathways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredPaths.map((path) => (
          <div
            key={path.id}
            className="bg-white border border-stone-200 rounded-lg p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-800 font-semibold mb-2">
                {path.field}
              </div>

              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                {path.title}
              </h3>

              <p className="text-xs font-medium text-stone-700 italic mb-3">
                "{path.tagline}"
              </p>

              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {path.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-1.5">
                  Competencias Clave
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {path.keySkills.map((sk, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200 font-medium"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connected Degrees */}
              <div className="mb-4 pt-3 border-t border-stone-100">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-1">
                  Grados UNED Recomendados
                </span>
                <div className="text-xs text-stone-700 font-medium">
                  {path.degreesConnected.join(' · ')}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <div className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5 mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{path.futureProjection}</span>
              </div>
              <p className="text-xs text-stone-500 font-serif italic">
                Impacto: {path.realWorldImpact}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA to start compass */}
      <div className="p-8 bg-[#FAF7F2] border border-stone-300 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
            ¿No estás seguro de cuál de estas sendas resuena más contigo?
          </h3>
          <p className="text-xs text-stone-600 max-w-xl">
            La Brújula Vocacional evalúa tus inclinaciones intelectuales y te orienta hacia el Grado universitario idóneo para tus metas de vida.
          </p>
        </div>
        <button
          onClick={onStartCompass}
          className="px-5 py-3 bg-stone-900 hover:bg-amber-950 text-white text-xs font-semibold rounded-md transition-colors shadow-sm whitespace-nowrap cursor-pointer shrink-0 flex items-center gap-2"
        >
          <Compass className="w-4 h-4 text-amber-300" />
          <span>Realizar el Test Vocacional</span>
        </button>
      </div>
    </div>
  );
};
