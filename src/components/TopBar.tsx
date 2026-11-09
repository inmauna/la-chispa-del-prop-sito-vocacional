import React from 'react';
import { NavTab } from '../types';
import { Sparkles, Compass } from 'lucide-react';

interface TopBarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onStartTest: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ activeTab, onSelectTab, onStartTest }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('inicio')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
        >
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors whitespace-nowrap shrink-0">
            UNED · La Chispa del Propósito
          </span>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onSelectTab('inicio')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'inicio'
                ? 'text-stone-900 border-amber-800 font-semibold'
                : 'border-transparent hover:text-stone-900 hover:border-stone-300'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => onSelectTab('brujula')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'brujula'
                ? 'text-stone-900 border-amber-800 font-semibold'
                : 'border-transparent hover:text-stone-900 hover:border-stone-300'
            }`}
          >
            Brújula Vocacional
          </button>
          <button
            onClick={() => onSelectTab('grados')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'grados'
                ? 'text-stone-900 border-amber-800 font-semibold'
                : 'border-transparent hover:text-stone-900 hover:border-stone-300'
            }`}
          >
            Grados y Saberes
          </button>
          <button
            onClick={() => onSelectTab('manifiesto')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'manifiesto'
                ? 'text-stone-900 border-amber-800 font-semibold'
                : 'border-transparent hover:text-stone-900 hover:border-stone-300'
            }`}
          >
            Manifiesto de Propósito
          </button>
          <button
            onClick={() => onSelectTab('horizontes')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'horizontes'
                ? 'text-stone-900 border-amber-800 font-semibold'
                : 'border-transparent hover:text-stone-900 hover:border-stone-300'
            }`}
          >
            Horizontes Profesionales
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onStartTest}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-amber-950 active:bg-black rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Encender mi Chispa</span>
          </button>
        </div>
      </div>

      {/* Mobile nav rail */}
      <div className="md:hidden flex items-center gap-4 px-6 py-2.5 overflow-x-auto border-t border-stone-200 text-xs font-medium text-stone-600 no-scrollbar">
        <button
          onClick={() => onSelectTab('inicio')}
          className={`whitespace-nowrap shrink-0 py-0.5 ${activeTab === 'inicio' ? 'text-amber-900 font-bold' : ''}`}
        >
          Inicio
        </button>
        <button
          onClick={() => onSelectTab('brujula')}
          className={`whitespace-nowrap shrink-0 py-0.5 ${activeTab === 'brujula' ? 'text-amber-900 font-bold' : ''}`}
        >
          Brújula
        </button>
        <button
          onClick={() => onSelectTab('grados')}
          className={`whitespace-nowrap shrink-0 py-0.5 ${activeTab === 'grados' ? 'text-amber-900 font-bold' : ''}`}
        >
          Grados
        </button>
        <button
          onClick={() => onSelectTab('manifiesto')}
          className={`whitespace-nowrap shrink-0 py-0.5 ${activeTab === 'manifiesto' ? 'text-amber-900 font-bold' : ''}`}
        >
          Manifiesto
        </button>
        <button
          onClick={() => onSelectTab('horizontes')}
          className={`whitespace-nowrap shrink-0 py-0.5 ${activeTab === 'horizontes' ? 'text-amber-900 font-bold' : ''}`}
        >
          Horizontes
        </button>
      </div>
    </header>
  );
};
