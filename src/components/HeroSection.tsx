import React from 'react';
import { SparkCanvas } from './SparkCanvas';
import { ArrowRight, BookOpen, Compass, Sparkles, Building2, GraduationCap, Quote } from 'lucide-react';
import { DAILY_SPARKS } from '../data/unedData';

interface HeroSectionProps {
  onStartTest: () => void;
  onExploreDegrees: () => void;
  onOpenManifesto: () => void;
  onOpenCenters: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartTest,
  onExploreDegrees,
  onOpenManifesto,
  onOpenCenters
}) => {
  const currentSpark = DAILY_SPARKS[0];

  return (
    <div className="w-full">
      {/* Institutional Operational Ribbon */}
      <section className="bg-stone-900 text-stone-200 text-xs py-2.5 px-6 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
          <div className="flex items-center gap-2 text-stone-300 font-medium tracking-wide">
            <span className="font-semibold text-amber-400">UNED Humanidades</span>
            <span aria-hidden="true">·</span>
            <span>61 Centros Asociados en España</span>
            <span aria-hidden="true">·</span>
            <span>22 Sedes Internacionales</span>
            <span aria-hidden="true">·</span>
            <span>Sin Nota de Corte</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <button
              onClick={onOpenCenters}
              className="hover:text-amber-300 transition-colors cursor-pointer underline underline-offset-2"
            >
              Localizar mi Centro Asociado
            </button>
            <span aria-hidden="true">·</span>
            <span>Campus Virtual 24/7</span>
            <span aria-hidden="true">·</span>
            <span>Curso Académico Oficial</span>
          </div>
        </div>
      </section>

      {/* Main Exhibition Hero Header */}
      <section className="relative bg-[#F5F0E6] border-b border-stone-300 overflow-hidden">
        {/* Interactive canvas behind text */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <SparkCanvas className="w-full h-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intellectual Vocation Text */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Curatorial Header Marker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-4">
              <span>Facultad de Humanidades · UNED</span>
              <span aria-hidden="true">·</span>
              <span>Orientación & Vocación</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              La chispa que enciende el pensamiento y transforma tu lugar en el mundo.
            </h1>

            <p className="text-lg text-stone-700 leading-relaxed max-w-2xl mb-8 font-normal">
              Las Humanidades en la UNED no son un refugio del pasado, sino la brújula indispensable para descifrar el presente: desde la ética de la inteligencia artificial y la tutela del patrimonio, hasta el cuidado de la palabra y la convivencia democrática.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onStartTest}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-stone-900 hover:bg-amber-950 text-white font-medium text-sm rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
              >
                <Compass className="w-4 h-4 text-amber-300" />
                <span>Encender mi Chispa Vocacional</span>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </button>

              <button
                onClick={onExploreDegrees}
                className="flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-stone-50 text-stone-800 font-medium text-sm rounded-md border border-stone-300 transition-all hover:border-stone-400 cursor-pointer shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-stone-600" />
                <span>Ver los 6 Grados Oficiales</span>
              </button>
            </div>

            {/* Curatorial Trust Proof */}
            <div className="pt-6 border-t border-stone-300/80 w-full flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-stone-600">
              <div>
                <span className="font-semibold text-stone-900">Metodología Semipresencial:</span> Tutorías semanales y campus digital.
              </div>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <div>
                <span className="font-semibold text-stone-900">Conciliación:</span> Adapta tus asignaturas a tu ritmo de vida y trabajo.
              </div>
            </div>
          </div>

          {/* Right Column: Curatorial Frame Visual */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-lg overflow-hidden border border-stone-300 bg-stone-100 shadow-xl group">
              <img
                src="/src/assets/images/hero_humanities_spark_1794199883706.jpg"
                alt="Manuscrito histórico con la chispa del conocimiento y escultura clásica que simboliza las humanidades en la UNED"
                className="w-full h-auto object-cover aspect-[16/10] group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-stone-100">
                <div className="text-xs uppercase tracking-widest text-amber-300 font-medium mb-1">
                  Scintilla Cognitionis et Propositi
                </div>
                <p className="text-sm font-serif italic text-stone-200">
                  "El saber humanístico no se mide por lo que acumulas, sino por la lucidez con que contemplas la vida."
                </p>
              </div>
            </div>

            {/* Captioned note */}
            <div className="mt-3 text-xs text-stone-500 font-serif italic text-right">
              Facultad de Humanidades · Archivo Histórico y Biblioteca Central UNED
            </div>
          </div>
        </div>
      </section>

      {/* Daily Spark & Curatorial Reflection Strip */}
      <section className="bg-[#FAF7F2] py-12 px-6 border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Daily Thought Box */}
          <div className="md:col-span-8 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>La Chispa de Hoy · Diálogo con la Filosofía</span>
                </div>
                <span className="text-xs text-stone-500 font-mono">
                  {currentSpark.thinker} ({currentSpark.century})
                </span>
              </div>

              <div className="mb-4">
                <p className="text-xl sm:text-2xl font-serif italic text-stone-900 leading-snug">
                  "{currentSpark.sparkQuote}"
                </p>
              </div>

              <div className="text-sm text-stone-700 leading-relaxed mb-6 bg-stone-50 p-4 rounded-md border border-stone-100">
                <span className="font-semibold text-stone-900 block mb-1">Pregunta para tu jornada:</span>
                {currentSpark.sparkPrompt}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100">
              <span>{currentSpark.reflectionGuide}</span>
              <button
                onClick={onOpenManifesto}
                className="text-amber-800 hover:text-amber-950 font-semibold cursor-pointer underline underline-offset-2 ml-4 shrink-0"
              >
                Escribir mi Manifiesto
              </button>
            </div>
          </div>

          {/* Quick Metrics & Pathways Card */}
          <div className="md:col-span-4 bg-[#F2EDE2] border border-stone-300 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-stone-600 font-bold mb-3">
                ¿Por qué Humanidades en la UNED?
              </h2>
              <div className="space-y-4 my-4">
                <div className="border-b border-stone-300/70 pb-3">
                  <div className="text-2xl font-serif font-bold text-stone-900">6 Grados Oficiales</div>
                  <div className="text-xs text-stone-600 mt-0.5">Filosofía, Historia del Arte, Geografía e Historia, Filología Hispánica, Estudios Ingleses, Antropología.</div>
                </div>
                <div className="border-b border-stone-300/70 pb-3">
                  <div className="text-2xl font-serif font-bold text-stone-900">Máxima Flexibilidad</div>
                  <div className="text-xs text-stone-600 mt-0.5">Sin límite de permanencia. Matricúlate por asignaturas sueltas según tu disponibilidad.</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-stone-900">Comunidad Viva</div>
                  <div className="text-xs text-stone-600 mt-0.5">Tutorías con profesores especializados y foros académicos de discusión profunda.</div>
                </div>
              </div>
            </div>

            <button
              onClick={onExploreDegrees}
              className="w-full mt-4 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-md transition-colors text-center cursor-pointer"
            >
              Consultar Catálogo Formativo
            </button>
          </div>
        </div>
      </section>

      {/* Triad of Intellectual Pillars */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-900 mb-2">
            Las Tres Dimensiones del Propósito
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 [text-wrap:balance]">
            Cultivar el juicio crítico, preservar la memoria y ensanchar la sensibilidad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-6 bg-white border border-stone-200 rounded-lg hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 mb-4 font-serif font-bold text-lg border border-amber-200">
              I
            </div>
            <h3 className="text-xl font-serif font-semibold text-stone-900 mb-2">
              Indagación Radical & Ética
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Aprende a formular las preguntas que nadie más hace. Examina los presupuestos de la ciencia, la política y la tecnología con rigor filosófico.
            </p>
            <div className="text-xs text-stone-500 font-medium">
              Filosofía · Bioética · Teoría del Conocimiento
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 bg-white border border-stone-200 rounded-lg hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 mb-4 font-serif font-bold text-lg border border-amber-200">
              II
            </div>
            <h3 className="text-xl font-serif font-semibold text-stone-900 mb-2">
              Memoria, Territorio & Arte
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Descodifica los archivos del tiempo y el patrimonio visual. Comprende cómo las sociedades se construyen en el espacio y en la materia artística.
            </p>
            <div className="text-xs text-stone-500 font-medium">
              Historia del Arte · Geografía · Archivística
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 bg-white border border-stone-200 rounded-lg hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 mb-4 font-serif font-bold text-lg border border-amber-200">
              III
            </div>
            <h3 className="text-xl font-serif font-semibold text-stone-900 mb-2">
              Palabra & Convivencia
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Domina la precisión de la lengua, el alcance de la literatura y el estudio etnográfico para tender puentes entre culturas diversas.
            </p>
            <div className="text-xs text-stone-500 font-medium">
              Filología · Estudios Ingleses · Antropología Social
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
