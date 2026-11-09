import React from 'react';
import { NavTab } from '../types';
import { BookOpen, Sparkles, Building, ExternalLink } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenCenters: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenCenters }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand & Mission */}
        <div className="md:col-span-5">
          <span className="text-lg font-serif font-bold text-white block mb-2">
            UNED · Facultad de Humanidades
          </span>
          <p className="text-stone-400 text-xs leading-relaxed max-w-sm mb-4">
            La Chispa del Propósito es un espacio de discernimiento vocacional, indagación humanística y acompañamiento académico para la comunidad universitaria de la UNED.
          </p>
          <div className="text-stone-400 text-[11px] font-mono">
            Sede Central: Calle Senda del Rey 7, 28040 Madrid
          </div>
        </div>

        {/* Faculties & Areas */}
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
            Facultades Participantes
          </div>
          <ul className="space-y-2 text-stone-400 text-xs">
            <li>Facultad de Filosofía</li>
            <li>Facultad de Geografía e Historia</li>
            <li>Facultad de Filología</li>
            <li>Escuela Internacional de Doctorado (EIDUNED)</li>
          </ul>
        </div>

        {/* Pathways & Navigation */}
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
            Exploración
          </div>
          <ul className="space-y-2 text-stone-400 text-xs">
            <li>
              <button
                onClick={() => onSelectTab('inicio')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                El Umbral (Inicio)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('brujula')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Brújula Vocacional
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('grados')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Catálogo de Grados
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('manifiesto')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Manifiesto de Propósito
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('horizontes')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Horizontes Profesionales
              </button>
            </li>
          </ul>
        </div>

        {/* University Links */}
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
            Recursos UNED
          </div>
          <ul className="space-y-2 text-stone-400 text-xs">
            <li>
              <button
                onClick={onOpenCenters}
                className="hover:text-white transition-colors cursor-pointer underline underline-offset-2"
              >
                Red de Centros Asociados
              </button>
            </li>
            <li>Biblioteca Central y Repositorio</li>
            <li>COIE - Orientación y Empleo</li>
            <li>Canal UNED & Tele-tutorías</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with zero pill metadata and clean typographic separators */}
      <div className="border-t border-stone-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div className="flex items-center gap-2">
            <span>© 2026 Universidad Nacional de Educación a Distancia</span>
            <span aria-hidden="true">·</span>
            <span>Espacio Europeo de Educación Superior (EEES)</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Aviso Legal</span>
            <span aria-hidden="true">·</span>
            <span>Política de Privacidad</span>
            <span aria-hidden="true">·</span>
            <span>Accesibilidad WCAG AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
