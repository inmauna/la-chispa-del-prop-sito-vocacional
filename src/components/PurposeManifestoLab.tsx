import React, { useState } from 'react';
import { PurposeArchetype } from '../types';
import { Sparkles, Copy, Check, Printer, RotateCcw, Share2, Feather, Scroll } from 'lucide-react';

interface PurposeManifestoLabProps {
  initialArchetype?: PurposeArchetype | null;
}

const HUMANISTIC_VALUES = [
  'Juicio Crítico & Rigor Lógico',
  'Memoria Histórica & Verdad Factual',
  'Cuidado del Lenguaje & Poética',
  'Sensibilidad Estética & Patrimonio',
  'Justicia Social & Bien Común',
  'Empatía Intercultural & Hospitalidad',
  'Ecología del Pensamiento & Diálogo',
  'Libertad de Cátedra & Conciencia Cívica'
];

const SOCIETAL_CHALLENGES = [
  'Gobernanza ética y límites humanos ante la Inteligencia Artificial',
  'Preservación del patrimonio histórico y desmantelamiento de la desinformación',
  'Defensa de la calidad del discurso público contra la polarización',
  'Convivencia intercultural digna y derechos de las comunidades migrantes',
  'Justicia territorial y habitabilidad entre centros urbanos y mundo rural',
  'Democratización del acceso a las artes y a la cultura universal'
];

export const PurposeManifestoLab: React.FC<PurposeManifestoLabProps> = ({ initialArchetype }) => {
  const [authorName, setAuthorName] = useState<string>('Estudiante Humanista');
  const [selectedValues, setSelectedValues] = useState<string[]>([
    'Juicio Crítico & Rigor Lógico',
    'Justicia Social & Bien Común',
    'Cuidado del Lenguaje & Poética'
  ]);
  const [selectedChallenge, setSelectedChallenge] = useState<string>(SOCIETAL_CHALLENGES[0]);
  const [selectedDegreeFocus, setSelectedDegreeFocus] = useState<string>(
    initialArchetype ? initialArchetype.title : 'Pensamiento Crítico y Filosofía'
  );
  const [personalPledge, setPersonalPledge] = useState<string>(
    'Me comprometo a interrogar los consensos apresurados de mi época, a poner el rigor del estudio al servicio de la verdad y a cultivar una voz humanística que defienda la dignidad inalienable de cada ser humano.'
  );
  const [copied, setCopied] = useState<boolean>(false);

  const toggleValue = (val: string) => {
    if (selectedValues.includes(val)) {
      if (selectedValues.length > 1) {
        setSelectedValues(selectedValues.filter((v) => v !== val));
      }
    } else {
      if (selectedValues.length < 3) {
        setSelectedValues([...selectedValues, val]);
      } else {
        setSelectedValues([...selectedValues.slice(1), val]);
      }
    }
  };

  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const manifestoText = `CARTA DE PROPÓSITO Y COMPROMISO HUMANÍSTICO
Facultad de Humanidades · Universidad Nacional de Educación a Distancia (UNED)
Fecha: ${currentDate}
Comprometido/a: ${authorName}

ARQUETIPO Y SENDA ACADÉMICA:
${selectedDegreeFocus}

VALORES HUMANÍSTICOS FUNDAMENTALES:
${selectedValues.map((v, i) => `${i + 1}. ${v}`).join('\n')}

DESAFÍO SOCIAL Y ÉTICO A ILUMINAR:
"${selectedChallenge}"

DECLARACIÓN DE LA CHISPA:
"${personalPledge}"

"Scintilla Cognitionis et Propositi: El saber humanístico no se mide por lo que acumulas, sino por la lucidez con que contemplas la vida."`;

  const handleCopy = () => {
    navigator.clipboard.writeText(manifestoText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
          Laboratorio de Propósito · UNED Humanidades
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-3 [text-wrap:balance]">
          Escribe tu Manifiesto Humanístico
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Un propósito no es una meta abstracta: es un pacto ético con el conocimiento. Define aquí los valores que guiarán tus lecturas, la herida del mundo que deseas iluminar y tu compromiso con la comunidad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Form Controls */}
        <div className="lg:col-span-6 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-7">
          {/* Author Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
              Nombre o Pseudónimo Académico
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Tu nombre o firma..."
              className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700 text-stone-900 font-medium"
            />
          </div>

          {/* Senda / Focus */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
              Senda o Enfoque Vocacional
            </label>
            <input
              type="text"
              value={selectedDegreeFocus}
              onChange={(e) => setSelectedDegreeFocus(e.target.value)}
              placeholder="Ej. Filosofía y Bioética, Historia y Memoria, Filología..."
              className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700 text-stone-900"
            />
          </div>

          {/* Core Values Selector (Pick up to 3) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs uppercase tracking-wider text-stone-700 font-bold">
                Tus 3 Valores Humanísticos Rectores
              </label>
              <span className="text-xs text-stone-500 font-mono">
                {selectedValues.length}/3 seleccionados
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {HUMANISTIC_VALUES.map((val) => {
                const isSelected = selectedValues.includes(val);
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => toggleValue(val)}
                    className={`text-left p-2.5 text-xs rounded border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-amber-800 bg-amber-50 text-amber-950 font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-stone-50/50'
                    }`}
                  >
                    <span>{val}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-amber-800 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Societal Challenge */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
              Desafío de la Sociedad que Quieres Iluminar
            </label>
            <select
              value={selectedChallenge}
              onChange={(e) => setSelectedChallenge(e.target.value)}
              className="w-full px-4 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700 text-stone-900 cursor-pointer"
            >
              {SOCIETAL_CHALLENGES.map((ch, idx) => (
                <option key={idx} value={ch}>
                  {ch}
                </option>
              ))}
            </select>
          </div>

          {/* Spark Declaration Pledge */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
              Tu Declaración de Propósito Personal
            </label>
            <textarea
              rows={4}
              value={personalPledge}
              onChange={(e) => setPersonalPledge(e.target.value)}
              className="w-full px-4 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700 text-stone-900 leading-relaxed font-serif"
            />
          </div>
        </div>

        {/* Right Column: Parchment Document Preview */}
        <div className="lg:col-span-6 sticky top-24">
          <div className="bg-[#FAF6EE] border-2 border-[#D9CEBA] rounded-lg p-8 sm:p-10 shadow-lg relative print:m-0 print:border-none print:shadow-none">
            {/* Archival Decorative Seal */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#D9CEBA]">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-900 font-bold block">
                  Universidad Nacional de Educación a Distancia
                </span>
                <span className="text-xs text-stone-600 font-serif italic">
                  Facultades de Filosofía · Geografía e Historia · Filología
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border border-amber-800/40 flex items-center justify-center text-amber-900 bg-amber-100/30">
                <Feather className="w-5 h-5 text-amber-900" />
              </div>
            </div>

            {/* Document Title */}
            <div className="text-center mb-8">
              <span className="text-xs tracking-widest uppercase text-stone-500 font-serif block mb-1">
                Scintilla Cognitionis
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Carta de Propósito Humanístico
              </h3>
              <div className="text-xs text-stone-500 font-serif italic mt-1">
                Madrid · Sede Central y Red de Centros Asociados · {currentDate}
              </div>
            </div>

            {/* Content Body */}
            <div className="space-y-6 text-stone-800 text-xs sm:text-sm leading-relaxed">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-1">
                  Firmante
                </span>
                <span className="font-serif text-lg font-bold text-stone-900">
                  {authorName || 'Estudiante Humanista'}
                </span>
                <span className="text-xs text-stone-600 block italic font-serif">
                  Orientación: {selectedDegreeFocus}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-1.5">
                  Pilares de Valor
                </span>
                <ul className="space-y-1">
                  {selectedValues.map((v, i) => (
                    <li key={i} className="flex items-center gap-2 font-medium text-stone-900">
                      <span className="text-amber-800 font-serif font-bold">§{i + 1}</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-1">
                  Causa y Horizontes Sociales
                </span>
                <p className="font-serif italic text-stone-800">
                  "{selectedChallenge}"
                </p>
              </div>

              <div className="pt-2 border-t border-[#D9CEBA]/60">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-1">
                  La Chispa Personal
                </span>
                <p className="font-serif text-stone-900 text-sm leading-relaxed italic">
                  "{personalPledge}"
                </p>
              </div>

              {/* Signature Line */}
              <div className="pt-8 flex items-end justify-between text-xs text-stone-600 font-serif">
                <div>
                  <div className="border-b border-stone-400 w-36 mb-1" />
                  <span>Firma del / de la Estudiante</span>
                </div>
                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-wider text-stone-500">Aprobado simbólicamente</div>
                  <span className="font-bold text-stone-900">UNED Humanidades</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#D9CEBA] flex flex-wrap items-center justify-between gap-3 print:hidden">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 hover:text-amber-900 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado al portapapeles' : 'Copiar Texto Completo'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir / Guardar PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
