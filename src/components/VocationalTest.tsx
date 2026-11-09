import React, { useState } from 'react';
import { VOCATIONAL_QUESTIONS, PURPOSE_ARCHETYPES, UNED_DEGREES } from '../data/unedData';
import { PurposeArchetype, UnedDegree } from '../types';
import { ArrowLeft, ArrowRight, Check, Compass, RotateCcw, Sparkles, BookOpen, FileText } from 'lucide-react';

interface VocationalTestProps {
  onSelectDegree: (degreeId: string) => void;
  onGoToManifestoWithArchetype: (archetype: PurposeArchetype) => void;
}

export const VocationalTest: React.FC<VocationalTestProps> = ({
  onSelectDegree,
  onGoToManifestoWithArchetype
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({
    filosofia: 0,
    arte: 0,
    historia: 0,
    lengua: 0,
    antropologia: 0
  });
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQuestion = VOCATIONAL_QUESTIONS[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentStep] = optionIndex;
    setSelectedAnswers(updatedAnswers);

    // Recalculate scores from all answered questions
    const newScores: Record<string, number> = {
      filosofia: 0,
      arte: 0,
      historia: 0,
      lengua: 0,
      antropologia: 0
    };

    updatedAnswers.forEach((ansIndex, qIndex) => {
      if (ansIndex !== undefined && ansIndex >= 0) {
        const q = VOCATIONAL_QUESTIONS[qIndex];
        const opt = q.options[ansIndex];
        if (opt && opt.score) {
          Object.entries(opt.score).forEach(([dim, val]) => {
            newScores[dim] = (newScores[dim] || 0) + val;
          });
        }
      }
    });

    setScores(newScores);
  };

  const handleNext = () => {
    if (currentStep < VOCATIONAL_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setScores({
      filosofia: 0,
      arte: 0,
      historia: 0,
      lengua: 0,
      antropologia: 0
    });
    setIsFinished(false);
  };

  // Determine top dimension and archetype
  const sortedDimensions = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primaryDim = sortedDimensions[0]?.[0] || 'filosofia';
  const archetype: PurposeArchetype = PURPOSE_ARCHETYPES[primaryDim] || PURPOSE_ARCHETYPES.filosofia;

  // Calculate degree affinities
  const totalPoints = Object.values(scores).reduce((acc, curr) => acc + curr, 0) || 1;

  const degreeAffinities = UNED_DEGREES.map((deg) => {
    let matchScore = 0;
    if (deg.id === 'filosofia') matchScore = scores.filosofia * 3 + scores.antropologia;
    else if (deg.id === 'historia-arte') matchScore = scores.arte * 3 + scores.historia;
    else if (deg.id === 'geografia-historia') matchScore = scores.historia * 3 + scores.antropologia;
    else if (deg.id === 'lengua-literatura') matchScore = scores.lengua * 3 + scores.filosofia;
    else if (deg.id === 'estudios-ingleses') matchScore = scores.lengua * 2.5 + scores.antropologia * 1.5;
    else if (deg.id === 'antropologia') matchScore = scores.antropologia * 3 + scores.historia;

    const percentage = Math.min(98, Math.max(45, Math.round((matchScore / (totalPoints * 1.4)) * 100)));
    return {
      degree: deg,
      affinity: percentage
    };
  }).sort((a, b) => b.affinity - a.affinity);

  // If finished, show the result view
  if (isFinished) {
    return (
      <div className="py-12 px-6 max-w-5xl mx-auto">
        {/* Curatorial Header */}
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
            Resultado de la Brújula Vocacional · UNED
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-3">
            Tu Chispa del Propósito Revelada
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mx-auto">
            Basado en tus 10 respuestas reflexivas, tu perfil intelectual resuena de forma prominente con el siguiente arquetipo humanístico:
          </p>
        </div>

        {/* Archetype Hero Card */}
        <div className="bg-white border border-stone-200 rounded-lg p-8 sm:p-10 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                {archetype.subtitle}
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-3">
                {archetype.title}
              </h3>
              <p className="text-base text-stone-700 leading-relaxed mb-6 font-normal">
                {archetype.description}
              </p>

              {/* Philosophical Motto */}
              <div className="bg-[#FAF7F2] border-l-0 p-4 rounded-md border border-stone-200 mb-6">
                <div className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">
                  Máxima Intelectual
                </div>
                <p className="font-serif italic text-stone-900 text-lg">
                  "{archetype.philosophicalMotto}"
                </p>
              </div>

              {/* Strengths */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-widest text-stone-600 font-bold mb-2">
                  Tus Fortalezas Humanísticas
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {archetype.coreStrengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-1.5 shrink-0" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Thinker quote */}
              <div className="text-xs text-stone-600 border-t border-stone-100 pt-4">
                <span className="font-semibold text-stone-900">Pensador Afín: </span>
                {archetype.seminalThinker} — <span className="italic font-serif">"{archetype.seminalQuote}"</span>
              </div>
            </div>

            {/* Visual Astrolabe Column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="rounded-lg overflow-hidden border border-stone-300 shadow-md w-full max-w-[280px]">
                <img
                  src="/src/assets/images/purpose_astrolabe_inquiry_1794199885457.jpg"
                  alt="Astrolabio astronómico e indagación del propósito"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs text-stone-500 font-serif italic text-center mt-2">
                Instrumento de indagación y orientación
              </div>
            </div>
          </div>
        </div>

        {/* Degree Match Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Grados UNED con Mayor Afinidad a tu Chispa
            </h3>
            <span className="text-xs text-stone-500">Ordenados por resonancia conceptual</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {degreeAffinities.slice(0, 3).map((item, idx) => (
              <div
                key={item.degree.id}
                className={`bg-white border rounded-lg p-6 flex flex-col justify-between transition-all ${
                  idx === 0
                    ? 'border-amber-400 shadow-md ring-1 ring-amber-200'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-amber-900 font-semibold">
                      {idx === 0 ? 'Máxima Afinidad' : 'Senda Complementaria'}
                    </span>
                    <span className="text-sm font-bold font-mono text-stone-900">
                      {item.affinity}%
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-stone-900 mb-1">
                    {item.degree.title}
                  </h4>
                  <div className="text-xs text-stone-500 mb-3">
                    {item.degree.faculty}
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-3 mb-4">
                    {item.degree.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-mono">240 ECTS · 4 años</span>
                  <button
                    onClick={() => onSelectDegree(item.degree.id)}
                    className="text-xs font-semibold text-amber-900 hover:text-amber-950 underline underline-offset-2 cursor-pointer"
                  >
                    Ver Plan de Estudios
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-stone-100 border border-stone-200 rounded-lg">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white border border-stone-300 rounded-md transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Repetir la Brújula</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onGoToManifestoWithArchetype(archetype)}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-amber-950 text-white text-xs font-semibold rounded-md transition-colors shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-300" />
              <span>Redactar mi Manifiesto con este Perfil</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active question step
  const currentSelection = selectedAnswers[currentStep];

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      {/* Top Header & Step Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-medium">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-700" />
            <span className="uppercase tracking-wider font-semibold text-stone-900">
              Brújula Vocacional UNED
            </span>
            <span aria-hidden="true">·</span>
            <span>{currentQuestion.dimensionLabel}</span>
          </div>
          <span className="font-mono text-stone-700">
            Pregunta {currentStep + 1} de {VOCATIONAL_QUESTIONS.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-amber-800 h-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / VOCATIONAL_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white border border-stone-200 rounded-lg p-8 sm:p-10 shadow-sm mb-8">
        <div className="text-xs uppercase tracking-wider text-amber-800 font-semibold mb-2">
          {currentQuestion.dimensionLabel}
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3 [text-wrap:balance]">
          {currentQuestion.question}
        </h3>

        <p className="text-xs text-stone-500 font-serif italic mb-8 pb-4 border-b border-stone-100">
          Contexto reflexivo: {currentQuestion.philosophicalContext}
        </p>

        {/* Options */}
        <div className="space-y-3.5">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = currentSelection === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-5 rounded-md border transition-all cursor-pointer flex items-start gap-4 ${
                  isSelected
                    ? 'border-amber-700 bg-amber-50/50 shadow-sm'
                    : 'border-stone-200 hover:border-stone-300 bg-stone-50/30'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'border-amber-800 bg-amber-800 text-white'
                      : 'border-stone-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>

                <div className="flex-1">
                  <div className="text-sm font-medium text-stone-900 leading-snug mb-1">
                    {option.label}
                  </div>
                  <div className="text-xs text-stone-500">
                    {option.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors ${
            currentStep === 0
              ? 'text-stone-300 cursor-not-allowed'
              : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100 cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Anterior</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentSelection === undefined}
          className={`flex items-center gap-2 px-6 py-2.5 text-xs font-semibold rounded-md transition-all ${
            currentSelection !== undefined
              ? 'bg-stone-900 hover:bg-amber-950 text-white shadow-sm cursor-pointer'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
          }`}
        >
          <span>
            {currentStep === VOCATIONAL_QUESTIONS.length - 1 ? 'Ver Mi Chispa y Arquetipo' : 'Siguiente'}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
